import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PAGE_SIZE = 50;

// ─── CSV parser ───────────────────────────────────────────────────────────────
// Parses the whole file at once so it handles newlines inside quoted fields.
function parseCSV(content: string): string[][] {
  const rows: string[][] = [];
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    const next = content[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        // escaped quote
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      // end of row (skip \r\n pairs)
      if (ch === "\r" && next === "\n") i++;
      fields.push(current.trim());
      current = "";
      rows.push([...fields]);
      fields.length = 0;
    } else {
      // inside a quoted field, newlines become a space for cleaner display
      if ((ch === "\n" || ch === "\r") && inQuotes) {
        if (ch === "\r" && next === "\n") i++;
        current += " / ";
      } else {
        current += ch;
      }
    }
  }

  // last row
  fields.push(current.trim());
  if (fields.some((f) => f !== "")) rows.push([...fields]);

  return rows;
}

// ─── Fee parser ───────────────────────────────────────────────────────────────
// Handles: " $ 39.600,00 " | "54.900,00 €" | "$35,112" | 53300 | "15.400" | etc.
function parseFee(raw: string): number | null {
  // strip spaces, currency symbols, letters except digits . ,
  let s = raw.replace(/[\s$€£]/g, "");
  if (!s || s === "-") return null;

  // European format: digits with . as thousands sep and , as decimal
  // Pattern: optional digits, then groups of .NNN, then ,NN at the end
  if (/^\d{1,3}(\.\d{3})*,\d{1,2}$/.test(s)) {
    s = s.replace(/\./g, "").replace(",", ".");
    return parseFloat(s);
  }

  // US/plain format with commas as thousands sep: $35,112 or $35,000
  if (/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) {
    s = s.replace(/,/g, "");
    return parseFloat(s);
  }

  // Plain integer or decimal
  const n = parseFloat(s.replace(",", "."));
  return isNaN(n) ? null : n;
}

function formatFee(amount: number): string {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

// ─── Data header row detection ────────────────────────────────────────────────
// The real column headers are in the row that has "País" in column 1.
function findDataStart(rows: string[][]): number {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i][1]?.toLowerCase().includes("pa") && rows[i][2]?.toLowerCase().includes("institu")) {
      return i + 1; // data starts the row after headers
    }
  }
  // fallback: skip first 9 rows
  return 9;
}

// ─── Map a data row to the API response shape ─────────────────────────────────
/*
  New column layout (0-indexed):
  0  = empty offset
  1  = País
  2  = Institución
  3  = Área de estudio
  4  = Nombre del programa
  5  = Majors/Especialización
  6  = Ubicación
  7  = Fechas de inicio
  8  = Duración
  9  = Costo p/año
  10 = Moneda
  11 = Link
*/
function rowToItem(row: string[]) {
  const pais = row[1] ?? "";
  const institucion = row[2] ?? "";
  const area = row[3] ?? "";
  const nombre = row[4] ?? "";
  const especializacion = row[5] && row[5] !== "-" ? row[5] : "";
  const ubicacion = row[6] ?? "";
  const fechas = row[7] ?? "";
  const duracion = row[8] ?? "";
  const rawFee = row[9] ?? "";
  const moneda = row[10] ?? "";
  const link = row[11] ?? "";

  const feeAmount = parseFee(rawFee);
  const costo = feeAmount !== null ? formatFee(feeAmount) : rawFee.trim();

  return {
    "nombre-del-programa": nombre,
    institucion,
    "area-de-estudio": area,
    link,
    pais,
    ubicacion,
    duracion,
    moneda,
    "fechas-de-inicio": fechas,
    "costo-p/ano": costo,
    "costo-p/ano-USD": feeAmount ?? undefined,
    "majors-especialización": especializacion || undefined,
    notas: undefined,
    "nivel-credencial": undefined,
  };
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const nextKeyParam = searchParams.get("nextKey");
  const startIndex = nextKeyParam ? parseInt(nextKeyParam, 10) : 0;

  try {
    const csvPath = path.join(
      process.cwd(),
      "src",
      "lib",
      "LICENCIATURAS.xlsx - Lic.csv"
    );
    const content = fs.readFileSync(csvPath, "utf-8");
    const rows = parseCSV(content);

    const dataStart = findDataStart(rows);

    // Keep only rows that have a program name (column 4) and institution (column 2)
    const dataRows = rows.slice(dataStart).filter((row) => {
      const nombre = row[4]?.trim();
      const inst = row[2]?.trim();
      return nombre && inst && nombre !== "Nombre del programa";
    });

    const page = dataRows.slice(startIndex, startIndex + PAGE_SIZE);
    const hasMore = startIndex + PAGE_SIZE < dataRows.length;

    return NextResponse.json({
      items: page.map(rowToItem),
      nextKey: hasMore ? String(startIndex + PAGE_SIZE) : null,
      total: dataRows.length,
    });
  } catch (err) {
    console.error("CSV route error:", err);
    return NextResponse.json(
      { error: "Error al leer el archivo de programas" },
      { status: 500 }
    );
  }
}
