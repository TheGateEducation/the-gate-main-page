import fs from "fs";
import path from "path";

const PAGE_SIZE = 50;

// ─── CSV parser ───────────────────────────────────────────────────────────────
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
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && next === "\n") i++;
      fields.push(current.trim());
      current = "";
      rows.push([...fields]);
      fields.length = 0;
    } else {
      if ((ch === "\n" || ch === "\r") && inQuotes) {
        if (ch === "\r" && next === "\n") i++;
        current += " / ";
      } else {
        current += ch;
      }
    }
  }

  fields.push(current.trim());
  if (fields.some((f) => f !== "")) rows.push([...fields]);

  return rows;
}

// ─── Fee parser ───────────────────────────────────────────────────────────────
function parseFee(raw: string): number | null {
  let s = raw.replace(/[\s$€£]/g, "");
  if (!s || s === "-") return null;

  if (/^\d{1,3}(\.\d{3})*,\d{1,2}$/.test(s)) {
    s = s.replace(/\./g, "").replace(",", ".");
    return parseFloat(s);
  }

  if (/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) {
    s = s.replace(/,/g, "");
    return parseFloat(s);
  }

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
function findDataStart(rows: string[][]): number {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i][1]?.toLowerCase().includes("pa") && rows[i][2]?.toLowerCase().includes("institu")) {
      return i + 1;
    }
  }
  return 9;
}

// ─── Map a data row to the API response shape ─────────────────────────────────
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

// ─── Read and parse all licenciaturas ─────────────────────────────────────────
export function getAllLicenciaturas() {
  const csvPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "LICENCIATURAS.xlsx - Lic.csv"
  );
  const content = fs.readFileSync(csvPath, "utf-8");
  const rows = parseCSV(content);
  const dataStart = findDataStart(rows);

  const dataRows = rows.slice(dataStart).filter((row) => {
    const nombre = row[4]?.trim();
    const inst = row[2]?.trim();
    return nombre && inst && nombre !== "Nombre del programa";
  });

  return dataRows.map(rowToItem);
}

// ─── Paginated response (used by the API route) ──────────────────────────────
export function getLicenciaturasPaginated(startIndex: number) {
  const allItems = getAllLicenciaturas();
  const page = allItems.slice(startIndex, startIndex + PAGE_SIZE);
  const hasMore = startIndex + PAGE_SIZE < allItems.length;

  return {
    items: page,
    nextKey: hasMore ? String(startIndex + PAGE_SIZE) : null,
    total: allItems.length,
  };
}
