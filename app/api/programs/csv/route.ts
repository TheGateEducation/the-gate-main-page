import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PAGE_SIZE = 30;

// Robust CSV parser handling quoted fields with commas inside
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

function inferLocation(universityName: string): { pais: string; ciudad: string } {
  const name = universityName.toLowerCase();
  if (
    name.includes("istanbul") ||
    name.includes("altinbas") ||
    name.includes("medipol") ||
    name.includes("bilgi") ||
    name.includes("istinye") ||
    name.includes("bahcesehir") ||
    name.includes("beykent") ||
    name.includes("yeditepe") ||
    name.includes("ozyegin") ||
    name.includes("arel") ||
    name.includes("aydin") ||
    name.includes("gelisim") ||
    name.includes("topkapi") ||
    name.includes("halic") ||
    name.includes("fenerbahce") ||
    name.includes("nisantasi") ||
    name.includes("atlas") ||
    name.includes("biruni")
  ) {
    return { pais: "Turquía", ciudad: "Istanbul" };
  }
  if (name.includes("centennial")) {
    return { pais: "Canadá", ciudad: "Toronto" };
  }
  if (name.includes("humber")) {
    return { pais: "Canadá", ciudad: "Toronto" };
  }
  if (name.includes("sheridan")) {
    return { pais: "Canadá", ciudad: "Oakville" };
  }
  if (name.includes("seneca")) {
    return { pais: "Canadá", ciudad: "Toronto" };
  }
  return { pais: "", ciudad: "" };
}

function parseFees(fees: string): { costo: string; moneda: string; costoUSD?: number } {
  const match = fees.match(/^([\d.]+)([A-Z]+)$/);
  if (!match) return { costo: fees, moneda: "" };

  const rawAmount = parseFloat(match[1]);
  const currency = match[2];
  const formatted = rawAmount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return {
    costo: formatted,
    moneda: currency,
    costoUSD: currency === "USD" ? rawAmount : undefined,
  };
}

function inferDuration(credentialLevel: string): string {
  const level = credentialLevel.toLowerCase();
  if (level.includes("bachelor")) return "4 años";
  if (level.includes("master")) return "2 años";
  if (level.includes("diploma") || level.includes("certificate")) return "1-2 años";
  return "";
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const credential = searchParams.get("credential") || "Bachelor";
  const nextKeyParam = searchParams.get("nextKey");
  const startIndex = nextKeyParam ? parseInt(nextKeyParam, 10) : 0;

  try {
    const csvPath = path.join(process.cwd(), "src", "lib", "Listado_Programas.csv");
    const content = fs.readFileSync(csvPath, "utf-8").replace(/\r/g, "");
    const lines = content.split("\n").filter((l) => l.trim());

    // Skip header row (line 0)
    const dataRows = lines.slice(1).filter((line) => {
      const fields = parseCSVLine(line);
      if (fields.length < 4) return false;
      const credLevel = fields[3] || "";
      if (credential === "Bachelor") return credLevel.toLowerCase().includes("bachelor");
      if (credential === "Master") return credLevel.toLowerCase().includes("master");
      if (credential === "Diploma")
        return (
          credLevel.toLowerCase().includes("diploma") ||
          credLevel.toLowerCase().includes("certificate")
        );
      return true;
    });

    const page = dataRows.slice(startIndex, startIndex + PAGE_SIZE);
    const hasMore = startIndex + PAGE_SIZE < dataRows.length;

    const items = page.map((line) => {
      const [
        courseName = "",
        universityName = "",
        domain = "",
        credentialLevel = "",
        fees = "",
        minRequirements = "",
        intakesDuration = "",
        link = "",
      ] = parseCSVLine(line);

      const { pais, ciudad } = inferLocation(universityName);
      const { costo, moneda, costoUSD } = parseFees(fees);

      return {
        "nombre-del-programa": courseName,
        institucion: universityName,
        "area-de-estudio": domain,
        link: link || "",
        pais,
        ubicacion: ciudad,
        duracion: inferDuration(credentialLevel),
        moneda,
        "fechas-de-inicio": intakesDuration,
        "costo-p/ano": costo,
        "costo-p/ano-USD": costoUSD,
        notas: minRequirements,
        "nivel-credencial": credentialLevel,
      };
    });

    return NextResponse.json({
      items,
      nextKey: hasMore ? String(startIndex + PAGE_SIZE) : null,
    });
  } catch {
    return NextResponse.json({ error: "Error al leer el archivo de programas" }, { status: 500 });
  }
}
