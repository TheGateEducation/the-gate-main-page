"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Hero from "../Hero/Hero";
import CategoriaGrid from "./CategoriaGrid";
import ProgramCardsPorEdad from "./ProgramCardsPorEdades";
import ProgramCardsPorArea from "./ProgramCardsPorArea";
import GeneralButtons from "@src/components/ui/buttons/GeneralButtons";

import imagenesPorCategoria from "@src/data/imagenesPorCategoria";
import {
  categoriaPorTexto,
  categoriasPorArea,
  categoriasPorEdad,
  ordenDeCategorias,
  endPointMap,
  heroCopy,
} from "@src/data/constantes";

// ─── Flag assets ─────────────────────────────────────────────────────────────
const FLAG_IMAGE: Record<string, string> = {
  "Estados Unidos": "/images/usa flag.png",
  "Canada":         "/images/canada flag.png",
  "Canadá":         "/images/canada flag.png",
  "Reino Unido":    "/images/uk flag.png",
  "Australia":      "/images/australia flag.png",
  "Alemania":       "/images/alemania flag.webp",
  "Emiratos Árabes Unidos": "/images/emiratos flag.png",
  "Francia":        "/images/francia flag.png",
  "Irlanda":        "/images/irlanda flag.png",
  "Malta":          "/images/malta flag.png",
  "Brasil":         "/images/BrazilFlag.png",
  "Italia":         "/images/ItalyFlag.png",
  "España":         "/images/SpainFlag.png",
};

const FLAG_EMOJI: Record<string, string> = {
  "Turquía": "🇹🇷",
  "México":  "🇲🇽",
  "Japón":   "🇯🇵",
  "China":   "🇨🇳",
  "Suiza":   "🇨🇭",
  "Suecia":  "🇸🇪",
  "Países Bajos": "🇳🇱",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
};

// ─── API types ────────────────────────────────────────────────────────────────
interface ApiProgramGeneral {
  "nombre-del-programa": string;
  institucion: string;
  link: string;
  pais: string;
  ubicacion?: string;
  ubicación?: string;
  duracion?: string;
  duración?: string;
  moneda: string;
}

interface AreaProgramApi extends ApiProgramGeneral {
  "area-de-estudio": string;
  "fechas-de-inicio": string;
  "majors-especialización"?: string;
  "costo-p/ano-USD"?: number;
  "costo-p/ano": string;
  notas?: string;
  profesiones?: string;
  "nivel-credencial"?: string;
  edades?: never;
  proveedor?: never;
  costo?: never;
  ubicación?: never;
  duración?: never;
}

interface CampProgramApi extends ApiProgramGeneral {
  "tipo de habitación"?: string;
  "costo estimado camp en mxn"?: number;
  fechas: string;
  "edad-min": number;
  proveedor: string;
  extras?: string;
  "tipo de alojamiento": string;
  "folleto informativo"?: string;
  costo: number;
  "edad-max": number;
  edades: string;
  "area-de-estudio"?: never;
  "costo-p/ano"?: never;
  "fechas-de-inicio"?: never;
  ubicacion?: never;
  duracion?: never;
}

type ApiProgram = AreaProgramApi | CampProgramApi;

// ─── App types ────────────────────────────────────────────────────────────────
export interface AreaProgram {
  id: number;
  nombre: string;
  area: string;
  pais: string;
  ciudad: string;
  institucion: string;
  link: string;
  duracion: string;
  costo: string;
  moneda: string;
  fechas: string;
  notas?: string;
  especializacion?: string;
  profesiones?: string;
  costoUSD?: string;
  nivelCredencial?: string;
}

export interface AgeProgram {
  id: number;
  nombre: string;
  pais: string;
  ciudad: string;
  edad: string;
  duracion: string;
  proveedor: string;
  costo?: string;
  fechas?: string;
  habitacion?: string;
  costoMX?: string;
  extras?: string;
  folleto?: string;
  profecions?: string;
}

type ProgramType = AreaProgram | AgeProgram;

// ─── Type guards ──────────────────────────────────────────────────────────────
const isAreaProgram = (p: ApiProgram): p is AreaProgramApi =>
  "area-de-estudio" in p;

const isCampProgram = (p: ApiProgram): p is CampProgramApi => "edades" in p;

// ─── Transform ────────────────────────────────────────────────────────────────
const transformApiToProgram = (apiProgram: ApiProgram): ProgramType => {
  const ubicacion = apiProgram.ubicacion || apiProgram["ubicación"] || "";
  const duracion = apiProgram.duracion || apiProgram["duración"] || "";
  const base = {
    id: hash(apiProgram["nombre-del-programa"] + "|" + apiProgram.institucion),
    nombre: apiProgram["nombre-del-programa"],
    pais: apiProgram.pais,
    ciudad: ubicacion,
    institucion: apiProgram.institucion,
    link: apiProgram.link,
    duracion,
    moneda: apiProgram.moneda,
  };

  if (isAreaProgram(apiProgram)) {
    return {
      ...base,
      area: apiProgram["area-de-estudio"],
      costo: apiProgram["costo-p/ano"],
      fechas: apiProgram["fechas-de-inicio"],
      especializacion: apiProgram["majors-especialización"],
      profesiones: apiProgram.profesiones,
      notas: apiProgram.notas,
      costoUSD: apiProgram["costo-p/ano-USD"]?.toString(),
      nivelCredencial: apiProgram["nivel-credencial"],
    } as AreaProgram;
  }

  if (isCampProgram(apiProgram)) {
    return {
      ...base,
      area: "",
      costo: apiProgram.costo?.toString() || "",
      fechas: apiProgram.fechas || "",
      edad: apiProgram.edades || "",
      proveedor: apiProgram.proveedor || "",
      habitacion: apiProgram["tipo de habitación"],
      costoMX: apiProgram["costo estimado camp en mxn"]?.toString(),
      extras: apiProgram.extras,
      folleto: apiProgram["folleto informativo"],
    } as AgeProgram;
  }

  return { ...base, area: "", costo: "", fechas: "", edad: "", proveedor: "" } as AgeProgram;
};

// ─── Texto solo ───────────────────────────────────────────────────────────────
const dataSourceTexto: Record<string, () => Promise<Record<string, string>>> = {
  "Study Tours": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
  "Año de fundación": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
  "Gap Year - Año Sabático": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
  "Summer Camp Staff": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
  "Estudia y Trabaja": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
};

// ─── Local CSV endpoints ──────────────────────────────────────────────────────
const localCsvEndpoints: Record<string, string> = {
  Licenciaturas: "/api/programs/csv",
};

// ─── Fetch ────────────────────────────────────────────────────────────────────
const fetchPrograms = async (
  categoria: string,
  pageParam: string | null = null,
): Promise<{ items: ApiProgram[]; nextKey?: string | null }> => {
  const localPath = localCsvEndpoints[categoria];
  if (localPath) {
    const url =
      pageParam === null ? localPath : `${localPath}&nextKey=${pageParam}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al cargar programas");
    return res.json();
  }

  const endpoint = endPointMap[categoria];
  if (!endpoint)
    throw new Error(`No hay datos para esta categoría "${categoria}"`);

  const base = `https://po89ew3l3m.execute-api.us-east-2.amazonaws.com/dev/items/${endpoint}/crud`;
  const url = pageParam === null ? base : `${base}?nextKey=${pageParam}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al cargar programas");
  return res.json();
};

// ─── Destination card ─────────────────────────────────────────────────────────
function DestinoCard({
  pais,
  count,
  selected,
  onClick,
}: {
  pais: string;
  count: number;
  selected: boolean;
  onClick: () => void;
}) {
  const imgSrc = FLAG_IMAGE[pais];
  const emoji = FLAG_EMOJI[pais];

  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-200 text-left w-full focus:outline-none ${
        selected
          ? "ring-4 ring-[#5F338B] ring-offset-2 shadow-lg scale-[1.02]"
          : "hover:scale-[1.02] hover:shadow-md"
      }`}
    >
      {/* Background */}
      <div className="relative h-40 sm:h-48">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={pais}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#5F338B] to-[#9b5de5] text-7xl">
            {emoji ?? "🌍"}
          </div>
        )}
        <div
          className={`absolute inset-0 transition-all duration-200 ${
            selected ? "bg-[#5F338B]/60" : "bg-black/40 group-hover:bg-black/50"
          }`}
        />

        {/* Selected check */}
        {selected && (
          <div className="absolute top-2 right-2 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow">
            <span className="text-[#5F338B] text-base font-bold">✓</span>
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-3">
          <h4 className="text-white text-lg font-bold text-center drop-shadow-md leading-tight">
            {pais}
          </h4>
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
            {count} {count === 1 ? "programa" : "programas"}
          </span>
        </div>
      </div>
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProgramPage() {
  const router = useRouter();
  const programsRef = useRef<HTMLDivElement>(null);

  const [categoria, setCategoria] = useState<string | null>(null);
  const [filtroEdad, setFiltroEdad] = useState<string | null>(null);
  const [filtroArea, setFiltroArea] = useState<string | null>(null);
  const [filtroPais, setFiltroPais] = useState<string | null>(null);
  const [filtroEspecializacion, setFiltroEspecializacion] = useState<string | null>(null);
  const [filtroInstitucion, setFiltroInstitucion] = useState<string | null>(null);
  const [filtroBusqueda, setFiltroBusqueda] = useState<string>("");
  const [textoSolo, setTextoSolo] = useState<string | null>(null);

  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage, error } =
    useInfiniteQuery<
      { items: ApiProgram[]; nextKey?: string | null },
      Error,
      InfiniteData<{ items: ApiProgram[]; nextKey?: string | null }, string | null>,
      [string, string | null],
      string | null
    >({
      queryKey: ["programas", categoria],
      queryFn: ({ pageParam = null }) =>
        categoria &&
        !categoriaPorTexto.includes(categoria) &&
        (!!endPointMap[categoria] || !!localCsvEndpoints[categoria])
          ? fetchPrograms(categoria, pageParam)
          : Promise.resolve({ items: [], nextKey: null }),
      initialPageParam: null,
      enabled:
        !!categoria &&
        !categoriaPorTexto.includes(categoria) &&
        (!!endPointMap[categoria] || !!localCsvEndpoints[categoria]),
      getNextPageParam: (last) => last.nextKey ?? undefined,
      staleTime: 1000 * 60 * 60 * 12,
    });

  useEffect(() => {
    if (!categoria || !categoriaPorTexto.includes(categoria)) return;
    const load = async () => {
      try {
        const json = await dataSourceTexto[categoria]();
        setTextoSolo(json[categoria]);
      } catch (e) {
        console.error("Error loading text data:", e);
      }
    };
    load();
  }, [categoria]);

  // Auto-fetch all pages so the user never has to click "Cargar más"
  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const programas: ProgramType[] = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.items.map(transformApiToProgram));
  }, [data]);

  // ── Derived filter options ──────────────────────────────────────────────────
  const areasDisponibles = useMemo(() => {
    if (!categoria || !categoriasPorArea.includes(categoria)) return [];
    return Array.from(
      new Set(
        programas
          .filter((p): p is AreaProgram => "area" in p)
          .map((p) => p.area),
      ),
    ).filter(Boolean) as string[];
  }, [categoria, programas]);

  const paisesDisponibles = useMemo(() => {
    return Array.from(
      new Set(programas.filter((p) => "pais" in p).map((p) => p.pais)),
    ).filter(Boolean);
  }, [programas]);

  const institucionesDisponibles = useMemo(() => {
    return Array.from(
      new Set(
        programas
          .filter((p): p is AreaProgram => "institucion" in p)
          .map((p) => p.institucion),
      ),
    ).filter(Boolean);
  }, [programas]);

  const especializacionesDisponibles = useMemo(() => {
    if (!filtroArea) return [];
    return Array.from(
      new Set(
        programas
          .filter(
            (p): p is AreaProgram =>
              "area" in p &&
              p.area === filtroArea &&
              !!p.especializacion &&
              p.especializacion !== "N/A",
          )
          .map((p) => p.especializacion!),
      ),
    );
  }, [programas, filtroArea]);

  const edadesDisponibles = useMemo(() => {
    if (!categoria || !categoriasPorEdad.includes(categoria)) return [];
    return Array.from(
      new Set(
        programas
          .filter((p): p is AgeProgram => "edad" in p)
          .map((p) => p.edad),
      ),
    ).filter(Boolean) as string[];
  }, [categoria, programas]);

  // ── Program count per country (for destination badges) ─────────────────────
  const countByPais = useMemo(() => {
    const counts: Record<string, number> = {};
    programas.forEach((p) => {
      if (p.pais) counts[p.pais] = (counts[p.pais] || 0) + 1;
    });
    return counts;
  }, [programas]);

  // ── Filtered programs ───────────────────────────────────────────────────────
  const programasFiltrados = useMemo(() => {
    let res = programas;

    if (filtroArea)
      res = res.filter((p): p is AreaProgram => "area" in p && p.area === filtroArea);

    if (filtroEdad)
      res = res.filter((p): p is AgeProgram => "edad" in p && p.edad === filtroEdad);

    if (filtroPais) res = res.filter((p) => p.pais === filtroPais);

    if (filtroEspecializacion)
      res = res.filter(
        (p): p is AreaProgram =>
          "especializacion" in p && p.especializacion === filtroEspecializacion,
      );

    if (filtroInstitucion)
      res = res.filter(
        (p): p is AreaProgram =>
          "institucion" in p && p.institucion === filtroInstitucion,
      );

    if (filtroBusqueda.trim()) {
      const term = filtroBusqueda.toLowerCase();
      res = res.filter(
        (p) =>
          p.nombre.toLowerCase().includes(term) ||
          ("institucion" in p &&
            (p as AreaProgram).institucion.toLowerCase().includes(term)) ||
          ("area" in p && (p as AreaProgram).area.toLowerCase().includes(term)),
      );
    }

    return res;
  }, [programas, filtroArea, filtroEdad, filtroPais, filtroEspecializacion, filtroInstitucion, filtroBusqueda]);

  useEffect(() => {
    setFiltroArea(null);
    setFiltroEdad(null);
    setFiltroPais(null);
    setFiltroInstitucion(null);
    setFiltroEspecializacion(null);
    setFiltroBusqueda("");
  }, [categoria]);

  const hasActiveFilters =
    !!filtroArea ||
    !!filtroPais ||
    !!filtroInstitucion ||
    !!filtroEspecializacion ||
    !!filtroEdad ||
    !!filtroBusqueda;

  const clearFilters = () => {
    setFiltroArea(null);
    setFiltroPais(null);
    setFiltroInstitucion(null);
    setFiltroEspecializacion(null);
    setFiltroEdad(null);
    setFiltroBusqueda("");
  };

  const handleDestinoClick = (pais: string) => {
    setFiltroPais((prev) => (prev === pais ? null : pais));
    setTimeout(() => {
      programsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCategoriaSelect = (cat: string) => {
    if (cat.includes("Campamentos")) {
      router.push("/programs/camps");
    } else if (cat.includes("Maestría") || cat.includes("Maestrias")) {
      router.push("/programs/maestrias");
    } else {
      setCategoria(cat);
    }
  };

  // ── Render: no category selected ───────────────────────────────────────────
  if (!categoria) {
    return (
      <main className="p-8">
        <Hero
          title="Explora todos los caminos que puedes tomar"
          subtitle="Desde campamentos hasta doctorados, descubre el programa ideal para tu siguiente aventura internacional."
        />
        <CategoriaGrid
          categorias={ordenDeCategorias}
          onCategoriaSelect={handleCategoriaSelect}
          imagenesPorCategoria={imagenesPorCategoria}
        />
      </main>
    );
  }

  // ── Render: text-only category ─────────────────────────────────────────────
  if (categoriaPorTexto.includes(categoria)) {
    return (
      <main className="p-8">
        <Hero title={categoria} subtitle={textoSolo ?? ""} />
        <GeneralButtons onBack={() => setCategoria(null)} />
      </main>
    );
  }

  // ── Render: program category ───────────────────────────────────────────────
  return (
    <main className="p-4 sm:p-8">
      <Hero title={categoria} subtitle={heroCopy[categoria] ?? ""} />

      {/* ── DESTINOS DISPONIBLES ─────────────────────────────────────────── */}
      {paisesDisponibles.length > 0 && (
        <section className="mt-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xl font-bold text-gray-800">Destinos disponibles</h3>
            {filtroPais && (
              <button
                onClick={() => setFiltroPais(null)}
                className="text-xs text-[#5F338B] hover:underline"
              >
                Ver todos los destinos
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {paisesDisponibles.map((pais) => (
              <DestinoCard
                key={pais}
                pais={pais}
                count={countByPais[pais] ?? 0}
                selected={filtroPais === pais}
                onClick={() => handleDestinoClick(pais)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── FILTERS ──────────────────────────────────────────────────────── */}
      <section className="mt-8 max-w-5xl mx-auto px-1">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          {/* Search */}
          <div className="relative mb-3">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">🔍</span>
            <input
              type="text"
              value={filtroBusqueda}
              onChange={(e) => setFiltroBusqueda(e.target.value)}
              placeholder="Buscar por programa, institución o área…"
              className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5F338B] bg-gray-50"
            />
          </div>

          {/* Dropdowns row */}
          <div className="flex flex-wrap gap-2">
            {areasDisponibles.length > 1 && (
              <select
                value={filtroArea ?? ""}
                onChange={(e) => {
                  setFiltroArea(e.target.value || null);
                  setFiltroEspecializacion(null);
                }}
                className="border border-gray-300 bg-white text-gray-700 text-sm px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5F338B] min-w-[170px]"
              >
                <option value="">Todas las áreas</option>
                {areasDisponibles.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            )}

            {institucionesDisponibles.length > 1 && (
              <select
                value={filtroInstitucion ?? ""}
                onChange={(e) => setFiltroInstitucion(e.target.value || null)}
                className="border border-gray-300 bg-white text-gray-700 text-sm px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5F338B] min-w-[190px]"
              >
                <option value="">Todas las instituciones</option>
                {institucionesDisponibles.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            )}

            {filtroArea && especializacionesDisponibles.length > 0 && (
              <select
                value={filtroEspecializacion ?? ""}
                onChange={(e) => setFiltroEspecializacion(e.target.value || null)}
                className="border border-gray-300 bg-white text-gray-700 text-sm px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5F338B] min-w-[190px]"
              >
                <option value="">Todas las especializaciones</option>
                {especializacionesDisponibles.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            )}

            {edadesDisponibles.length > 1 && (
              <select
                value={filtroEdad ?? ""}
                onChange={(e) => setFiltroEdad(e.target.value || null)}
                className="border border-gray-300 bg-white text-gray-700 text-sm px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5F338B] min-w-[150px]"
              >
                <option value="">Todas las edades</option>
                {edadesDisponibles.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            )}

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-red-500 hover:text-red-700 px-3 py-2 rounded-xl border border-red-200 hover:bg-red-50 transition-colors ml-auto"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Results count */}
          {hasActiveFilters && (
            <p className="text-xs text-gray-500 mt-2 text-right">
              {programasFiltrados.length} resultado{programasFiltrados.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────────────────── */}
      <div ref={programsRef} className="scroll-mt-6">
        {isFetching && !isFetchingNextPage && (
          <div className="flex items-center justify-center gap-3 py-16 text-gray-500">
            <span className="animate-spin text-2xl">⟳</span>
            <span className="text-base">Cargando programas…</span>
          </div>
        )}

        {!isFetching && programasFiltrados.length === 0 && (
          <div className="my-16 max-w-lg mx-auto text-center space-y-3">
            <p className="text-5xl">🔎</p>
            <h2 className="text-2xl font-bold text-gray-800">Sin resultados</h2>
            <p className="text-gray-500">
              No encontramos programas con los filtros seleccionados. Intenta ampliar tu búsqueda.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-2 px-5 py-2 rounded-xl bg-[#5F338B] text-white text-sm hover:bg-[#4b2870] transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        )}

        {categoriasPorArea.includes(categoria) ? (
          <ProgramCardsPorArea programs={programasFiltrados as AreaProgram[]} />
        ) : (
          <ProgramCardsPorEdad programs={programasFiltrados as AgeProgram[]} />
        )}
      </div>

      {error && (
        <p className="text-center text-red-600 mt-4">
          {error.message || "Ocurrió un error al cargar los programas."}
        </p>
      )}

      <div className="mt-4">
        <GeneralButtons onBack={() => setCategoria(null)} />
      </div>
    </main>
  );
}
