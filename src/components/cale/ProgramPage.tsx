"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  areaMapping,
  heroCopy,
} from "@src/data/constantes";

const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
};

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

const isAreaProgram = (program: ApiProgram): program is AreaProgramApi => {
  return "area-de-estudio" in program;
};

const isCampProgram = (program: ApiProgram): program is CampProgramApi => {
  return "edades" in program;
};

const transformApiToProgram = (apiProgram: ApiProgram): ProgramType => {
  const ubicacion = apiProgram.ubicacion || apiProgram["ubicación"] || "";
  const duracion = apiProgram.duracion || apiProgram["duración"] || "";
  const base = {
    id: hash(apiProgram["nombre-del-programa"]),
    nombre: apiProgram["nombre-del-programa"],
    pais: apiProgram.pais,
    ciudad: ubicacion,
    institucion: apiProgram.institucion,
    link: apiProgram.link,
    duracion: duracion,
    moneda: apiProgram.moneda,
  };

  if (isAreaProgram(apiProgram)) {
    return {
      ...base,
      area: apiProgram["area-de-estudio"],
      costo: apiProgram["costo-p/ano"],
      fechas: apiProgram["fechas-de-inicio"],
      edad: "",
      proveedor: "",
      especializacion: apiProgram["majors-especialización"],
      profecions: apiProgram.profesiones,
      notas: apiProgram.notas,
      costoUSD: apiProgram["costo-p/ano-USD"],
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
      costoMX: apiProgram["costo estimado camp en mxn"],
      extras: apiProgram.extras,
      folleto: apiProgram["folleto informativo"],
    } as AgeProgram;
  }

  return {
    ...base,
    area: "",
    costo: "",
    fechas: "",
    edad: "",
    proveedor: "",
  } as AgeProgram;
};

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

const fetchPrograms = async (
  categoria: string,
  pageParam: string | null = null,
): Promise<{ items: ApiProgram[]; nextKey?: string | null }> => {
  const endpoint = endPointMap[categoria];
  if (!endpoint)
    throw new Error(`No hay datos para esta categoria "${categoria}"`);

  const url =
    pageParam === null
      ? `https://po89ew3l3m.execute-api.us-east-2.amazonaws.com/dev/items/${endpoint}/crud`
      : `https://po89ew3l3m.execute-api.us-east-2.amazonaws.com/dev/items/${endpoint}/crud?nextKey=${pageParam}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al cargar programas");
  return res.json();
};

export default function ProgramPage() {
  const router = useRouter();
  const [categoria, setCategoria] = useState<string | null>(null);
  const [filtroEdad, setFiltroEdad] = useState<string | null>(null);
  const [filtroArea, setFiltroArea] = useState<string | null>(null);
  const [filtroPais, setFiltroPais] = useState<string | null>(null);
  const [filtroEspecializacion, setFiltroEspecializacion] = useState<
    string | null
  >(null);
  const [textoSolo, setTextoSolo] = useState<string | null>(null);

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    error,
  } = useInfiniteQuery<
    { items: ApiProgram[]; nextKey?: string | null },
    Error,
    InfiniteData<
      { items: ApiProgram[]; nextKey?: string | null },
      string | null
    >,
    [string, string | null],
    string | null
  >({
    queryKey: ["programas", categoria],
    queryFn: ({ pageParam = null }) =>
      categoria && !categoriaPorTexto.includes(categoria)
        ? fetchPrograms(categoria, pageParam)
        : Promise.resolve({ items: [], nextKey: null }),
    initialPageParam: null,
    enabled: !!categoria && !categoriaPorTexto.includes(categoria),
    getNextPageParam: (last) => last.nextKey ?? undefined,
    staleTime: 1000 * 60 * 60 * 12,
  });

  useEffect(() => {
    if (!categoria || !categoriaPorTexto.includes(categoria)) return;

    const load = async () => {
      try {
        const json = await dataSourceTexto[categoria]();
        setTextoSolo(json[categoria]);
      } catch (error) {
        console.error("Error loading text data:", error);
      }
    };
    load();
  }, [categoria]);

  const programas: ProgramType[] = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.items.map(transformApiToProgram));
  }, [data]);

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
      new Set(
        programas
          .filter((p): p is AreaProgram => "pais" in p)
          .map((p) => p.pais),
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

  const programasFiltrados = useMemo(() => {
    let resultado = programas;

    if (filtroArea) {
      resultado = resultado.filter(
        (p): p is AreaProgram => "area" in p && p.area === filtroArea,
      );
    }

    if (filtroEdad) {
      resultado = resultado.filter(
        (p): p is AgeProgram => "edad" in p && p.edad === filtroEdad,
      );
    }

    if (filtroPais) {
      resultado = resultado.filter((p) => p.pais === filtroPais);
    }

    if (filtroEspecializacion) {
      resultado = resultado.filter(
        (p): p is AreaProgram =>
          "especializacion" in p && p.especializacion === filtroEspecializacion,
      );
    }

    return resultado;
  }, [programas, filtroArea, filtroEdad, filtroPais]);

  useEffect(() => {
    setFiltroArea(null);
    setFiltroEdad(null);
    setFiltroPais(null);
  }, [categoria]);

  const handleCategoriaSelect = (cat: string) => {
    if (cat.includes("Campamentos")) {
      router.push("/programs/camps");
    } else {
      setCategoria(cat);
    }
  };

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

  if (categoriaPorTexto.includes(categoria)) {
    return (
      <main className="p-8">
        <Hero title={categoria} subtitle={textoSolo ?? ""} />
        <GeneralButtons onBack={() => setCategoria(null)} />
      </main>
    );
  }

  return (
    <main className="p-4 sm:p-8">
      <Hero title={categoria} subtitle={heroCopy[categoria] ?? ""} />

      {(areasDisponibles.length > 1 || edadesDisponibles.length > 1) && (
        <section className="mb-8 flex flex-wrap gap-3 justify-center">
          {areasDisponibles.length > 1 && (
            <select
              value={filtroArea ?? ""}
              onChange={(e) => setFiltroArea(e.target.value || null)}
              className="border px-3 py-2 rounded-md"
            >
              <option value="">Todas las áreas</option>
              {areasDisponibles.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          )}

          {paisesDisponibles.length >= 1 && (
            <select
              value={filtroPais ?? ""}
              onChange={(e) => setFiltroPais(e.target.value || null)}
              className="border px-3 py-2 rounded-md"
            >
              <option value="">Todos los países</option>
              {paisesDisponibles.map((pais) => (
                <option key={pais} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
          )}

          {filtroArea && especializacionesDisponibles.length > 0 && (
            <select
              value={filtroEspecializacion ?? ""}
              onChange={(e) => setFiltroEspecializacion(e.target.value || null)}
              className="border px-3 py-2 rounded-md"
            >
              <option value="">Todas las especializaciones</option>
              {especializacionesDisponibles.map((esp) => (
                <option key={esp} value={esp}>
                  {esp}
                </option>
              ))}
            </select>
          )}

          {edadesDisponibles.length > 1 && (
            <select
              value={filtroEdad ?? ""}
              onChange={(e) => setFiltroEdad(e.target.value || null)}
              className="border px-3 py-2 rounded-md"
            >
              <option value="">Todas las edades</option>
              {edadesDisponibles.map((edad) => (
                <option key={edad} value={edad}>
                  {edad}
                </option>
              ))}
            </select>
          )}
        </section>
      )}
      
      {/* DESTINOS */}
      <section className="mt-12 max-w-6xl mx-auto">
        {programasFiltrados.length === 0 && (
          <div className="my-12 max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">
              No se encontraron programas
            </h2>
            <p className="text-gray-500">
              Próximamente estaremos agregando opciones disponibles para esta
              categoría.
            </p>
          </div>
        )}
        <h3 className="text-2xl font-semibold text-center mb-8">
          Destinos disponibles
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { nombre: "Estados Unidos", bandera: "/images/usa flag.png" },
            { nombre: "Canada", bandera: "/images/canada flag.png" },
            { nombre: "Reino Unido", bandera: "/images/uk flag.png" },
            { nombre: "Australia", bandera: "/images/australia flag.png" },
            { nombre: "Alemania", bandera: "/images/alemania flag.webp" },
            {
              nombre: "Emiratos Árabes Unidos",
              bandera: "/images/emiratos flag.png",
            },
            { nombre: "Francia", bandera: "/images/francia flag.png" },
            { nombre: "Irlanda", bandera: "/images/irlanda flag.png" },
            { nombre: "Malta", bandera: "/images/malta flag.png" },
          ].map((destino) => (
            <div
              key={destino.nombre}
              className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={destino.bandera}
                alt={`Destino ${destino.nombre}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-xl md:text-2xl font-semibold text-center px-4">
                  {destino.nombre}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {categoriasPorArea.includes(categoria) ? (
        <div>
          <ProgramCardsPorArea programs={programasFiltrados as AreaProgram[]} />
          {hasNextPage && (
            <div className="my-6 flex justify-center">
              <button
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}
                className="px-6 py-2 rounded-lg bg-[#5F338B] text-white hover:bg-[#4b2870] disabled:opacity-50"
              >
                {isFetchingNextPage ? "Cargando…" : "Cargar más"}
              </button>
            </div>
          )}
          <GeneralButtons onBack={() => setCategoria(null)} />
        </div>
      ) : (
        <div>
          <ProgramCardsPorEdad programs={programasFiltrados as AgeProgram[]} />
          {hasNextPage && (
            <div className="my-6 flex justify-center">
              <button
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}
                className="px-6 py-2 rounded-lg bg-[#5F338B] text-white hover:bg-[#4b2870] disabled:opacity-50"
              >
                {isFetchingNextPage ? "Cargando…" : "Cargar más"}
              </button>
            </div>
          )}
          <GeneralButtons onBack={() => setCategoria(null)} />
        </div>
      )}

      {error && (
        <p className="text-center text-red-600 mt-4">
          {error.message || "Ocurrió un error al cargar los programas."}
        </p>
      )}

      {isFetching && !isFetchingNextPage && (
        <p className="text-center text-gray-600 mt-4">Cargando programas...</p>
      )}
    </main>
  );
}