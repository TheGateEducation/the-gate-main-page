import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PAGE_SIZE = 30;

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx-zfQQASyz2lOzLNaSzgXe-WejqvFQun7mkT2LuBQUTDbW9v0sH79aARigLEtyrjY/exec";

// In-memory cache: re-fetch every 1 minute
interface MasterRow {
  pais: string;
  institucion: string;
  area: string;
  programa: string;
  ubicacion: string;
  fechas: string;
  duracion: string;
  costo: string;
  moneda: string;
  link: string;
}

let cachedRows: MasterRow[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 1 * 60 * 1000;

function cleanCosto(raw: string): string {
  if (!raw) return "";
  let cleaned = raw.replace(/[^0-9.,]/g, "").trim();

  // European format: "35.920,00" → "35920"
  if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(cleaned)) {
    cleaned = cleaned.replace(/\./g, "").replace(",", ".");
  }
  // US thousands: "19,500"
  else if (/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(cleaned)) {
    cleaned = cleaned.replace(/,/g, "");
  }

  const num = parseFloat(cleaned);
  if (!isNaN(num)) {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
  return raw.trim();
}

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

async function fetchData(): Promise<MasterRow[]> {
  const now = Date.now();
  if (cachedRows && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedRows;
  }

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      signal: AbortSignal.timeout(15_000),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Apps Script returned ${res.status}`);
    const data: MasterRow[] = await res.json();

    cachedRows = data;
    cacheTimestamp = now;
    return data;
  } catch (err) {
    console.error("Failed to fetch from Apps Script, falling back to local CSV:", err);

    // Fallback: local CSV
    const csvPath = path.join(process.cwd(), "src", "lib", "Listado_Masters.csv");
    const content = fs.readFileSync(csvPath, "utf-8").replace(/\r/g, "");
    const lines = content.split("\n").filter((l) => l.trim());
    return lines.slice(1).map((line) => {
      const [pais, institucion, area, programa, ubicacion, fechas, duracion, costo, moneda, link] =
        parseCSVLine(line);
      return { pais, institucion, area, programa, ubicacion, fechas, duracion, costo, moneda, link };
    });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paisFilter = searchParams.get("pais") || "";
  const areaFilter = searchParams.get("area") || "";
  const searchQuery = searchParams.get("q") || "";
  const nextKeyParam = searchParams.get("nextKey");
  const startIndex = nextKeyParam ? parseInt(nextKeyParam, 10) : 0;

  try {
    const allData = await fetchData();

    const filteredRows = allData.filter((row) => {
      if (!row.pais) return false;

      if (paisFilter && !row.pais.toLowerCase().includes(paisFilter.toLowerCase()))
        return false;
      if (areaFilter && !row.area.toLowerCase().includes(areaFilter.toLowerCase()))
        return false;
      if (
        searchQuery &&
        !row.programa.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !row.pais.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !row.area.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;

      return true;
    });

    const page = filteredRows.slice(startIndex, startIndex + PAGE_SIZE);
    const hasMore = startIndex + PAGE_SIZE < filteredRows.length;

    const items = page.map((row) => ({
      pais: row.pais,
      institucion: row.institucion,
      "area-de-estudio": row.area,
      "nombre-del-programa": row.programa,
      ubicacion: row.ubicacion,
      "fechas-de-inicio": row.fechas,
      duracion: row.duracion,
      "costo-p/ano": cleanCosto(row.costo),
      moneda: row.moneda,
      link: row.link || "",
    }));

    const paises = [...new Set(allData.map((r) => r.pais).filter(Boolean))].sort();
    const areas = [...new Set(allData.map((r) => r.area).filter(Boolean))].sort();

    return NextResponse.json(
      {
        items,
        nextKey: hasMore ? String(startIndex + PAGE_SIZE) : null,
        total: filteredRows.length,
        filters: { paises, areas },
      },
      {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Error al leer el archivo de maestrías" },
      { status: 500 },
    );
  }
}
