import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PAGE_SIZE = 30;

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paisFilter = searchParams.get("pais") || "";
  const areaFilter = searchParams.get("area") || "";
  const searchQuery = searchParams.get("q") || "";
  const nextKeyParam = searchParams.get("nextKey");
  const startIndex = nextKeyParam ? parseInt(nextKeyParam, 10) : 0;

  try {
    const csvPath = path.join(process.cwd(), "src", "lib", "Listado_Masters.csv");
    const content = fs.readFileSync(csvPath, "utf-8").replace(/\r/g, "");
    const lines = content.split("\n").filter((l) => l.trim());

    // Skip header row
    const dataRows = lines.slice(1).filter((line) => {
      const fields = parseCSVLine(line);
      if (fields.length < 4) return false;

      const [pais, , area, programa] = fields;

      if (paisFilter && !pais.toLowerCase().includes(paisFilter.toLowerCase())) return false;
      if (areaFilter && !area.toLowerCase().includes(areaFilter.toLowerCase())) return false;
      if (
        searchQuery &&
        !programa.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !pais.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !area.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;

      return true;
    });

    const page = dataRows.slice(startIndex, startIndex + PAGE_SIZE);
    const hasMore = startIndex + PAGE_SIZE < dataRows.length;

    const items = page.map((line) => {
      const [pais, institucion, area, programa, ubicacion, fechas, duracion, costo, moneda, link] =
        parseCSVLine(line);

      const costoNum = parseFloat(costo);
      const costoFormateado = !isNaN(costoNum)
        ? costoNum.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        : costo;

      return {
        pais,
        institucion,
        area,
        "nombre-del-programa": programa,
        ubicacion,
        "fechas-de-inicio": fechas,
        duracion,
        "costo-p/ano": costoFormateado,
        moneda,
        link: link || "",
      };
    });

    // Build unique filter lists from all data (not just filtered)
    const allRows = lines.slice(1).filter((l) => l.trim());
    const paises = [...new Set(allRows.map((l) => parseCSVLine(l)[0]).filter(Boolean))].sort();
    const areas = [...new Set(allRows.map((l) => parseCSVLine(l)[2]).filter(Boolean))].sort();

    return NextResponse.json({
      items,
      nextKey: hasMore ? String(startIndex + PAGE_SIZE) : null,
      total: dataRows.length,
      filters: { paises, areas },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error al leer el archivo de maestrías" }, { status: 500 });
  }
}