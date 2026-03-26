import { NextRequest, NextResponse } from "next/server";
import { getLicenciaturasPaginated } from "@src/lib/parseLicenciaturas";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const nextKeyParam = searchParams.get("nextKey");
  const startIndex = nextKeyParam ? parseInt(nextKeyParam, 10) : 0;

  try {
    const result = getLicenciaturasPaginated(startIndex);
    return NextResponse.json(result);
  } catch (err) {
    console.error("CSV route error:", err);
    return NextResponse.json(
      { error: "Error al leer el archivo de programas" },
      { status: 500 }
    );
  }
}
