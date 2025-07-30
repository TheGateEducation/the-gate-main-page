// app/(public)/programs/ProgramPage.tsx
"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  useInfiniteQuery,
  type InfiniteData,
} from "@tanstack/react-query";

import Hero from "../Hero/Hero";
import CategoriaGrid from "./CategoriaGrid";
import ProgramCardsPorEdad from "./ProgramCardsCampamentos";
import ProgramCardsPorArea from "./ProgramCards";
import TextoInformativo from "./textoInformativo";

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
    h |= 0; // int32
  }
  return Math.abs(h);
};


interface ApiProgram {
  "area-de-estudio": string;
  "nombre-del-programa": string;
  institucion: string;
  pais: string;
  ubicacion: string;
  duracion: string;
  "costo-p/ano": number;
  moneda: string;
  link: string;
  "fechas-de-inicio": string;
}

export interface AreaProgram {
  id: number;
  nombre: string;
  area: string;
  pais: string;
  ubicacion: string;
  institucion: string;
  link: string;
  duracion: string;
  costo: number;
  moneda: string;
  fechas: string;
}

export interface AgeProgram {
  id: number;
  nombre: string;
  pais: string;
  ciudad: string;
  edad: string;
  duracion: string;
  proveedor: string;
}

type ProgramType = AreaProgram | AgeProgram;

const fetchPrograms = async (
  categoria: string,
  pageParam: string | null = null
): Promise<{ items: ApiProgram[]; nextKey?: string | null }> => {
  const endpoint = endPointMap[categoria];
  if (!endpoint)
    throw new Error(`No endpoint mapped for category "${categoria}"`);

  const url =
    pageParam === null
      ? `https://po89ew3l3m.execute-api.us-east-2.amazonaws.com/dev/items/${endpoint}/crud`
      : `https://po89ew3l3m.execute-api.us-east-2.amazonaws.com/dev/items/${endpoint}/crud?nextKey=${pageParam}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al cargar programas");
  return res.json();
};

const dataSourceTexto: Record<
  string,
  () => Promise<Record<string, string>>
> = {
  "Tours de Estudio": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
  "Año de fundación": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
  "Año Sabatico": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
  "Consejero del campamento de verano": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
  "Programa de estudio y trabajo": () =>
    import("@src/data/categorias_texto.json").then((m) => m.default),
};


export default function ProgramPage() {
  const [categoria, setCategoria] = useState<string | null>(null);
  const [filtroEdad, setFiltroEdad] = useState<string | null>(null);
  const [filtroArea, setFiltroArea] = useState<string | null>(null);
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
    InfiniteData<{ items: ApiProgram[]; nextKey?: string | null }, string | null>,
    (string | null)[],
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
      const json = await dataSourceTexto[categoria]();
      setTextoSolo(json[categoria]);
    };
    load().catch(console.error);
  }, [categoria]);

  const programas: ProgramType[] = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((p) =>
      p.items.map((it) => ({
        id: hash(it["nombre-del-programa"]),
        nombre: it["nombre-del-programa"],
        area: it["area-de-estudio"],
        pais: it.pais,
        ciudad: it.ubicacion,
        institucion: it.institucion,
        link: it.link,
        duracion: it.duracion,
        costo: it["costo-p/ano"],
        moneda: it.moneda,
        fechas: it["fechas-de-inicio"],
        edad: (it as any)["edades"] ?? "",
        proveedor: (it as any)["proveedor"] ?? "",
      }))
    );
  }, [data]);

  const areasDisponibles = useMemo(() => {
    if (!categoria || !categoriasPorArea.includes(categoria)) return [];
    return Array.from(
      new Set(programas.map((p) => (p as AreaProgram).area))
    ).filter(Boolean) as string[];
  }, [categoria, programas]);

  const edadesDisponibles = useMemo(() => {
    if (!categoria || !categoriasPorEdad.includes(categoria)) return [];
    return Array.from(
      new Set(programas.map((p) => (p as AgeProgram).edad))
    ).filter(Boolean) as string[];
  }, [categoria, programas]);

  const programasFiltrados = useMemo(() => {
    let res = programas;
    if (filtroArea) res = res.filter((p) => (p as AreaProgram).area === filtroArea);
    if (filtroEdad) res = res.filter((p) => (p as AgeProgram).edad === filtroEdad);
    return res;
  }, [programas, filtroArea, filtroEdad]);

  /* ---------------- renders ---------------- */
  if (!categoria) {
    return (
      <main className="p-8">
        <Hero  title="Explora todos los caminos que 
              puedes tomar" 
              subtitle="Desde campamentos hasta doctorados, descubre el programa ideal para tu siguiente aventura internacional."
              />
        <CategoriaGrid
          categorias={ordenDeCategorias}
          onCategoriaSelect={setCategoria}
          imagenesPorCategoria={imagenesPorCategoria}
        />
      </main>
    );
  }

  /* categorías sólo-texto ------------------- */
  if (categoriaPorTexto.includes(categoria)) {
    return (
      <main className="p-8">
        <Hero title={categoria} subtitle={textoSolo ?? ""} />
        {textoSolo && <TextoInformativo texto={textoSolo} onBack={() => setCategoria(null)} />}
      </main>
    );
  }

  /* categorías área o edad ------------------ */
  return (
    <main className="p-4 sm:p-8">
      <Hero title={categoria} subtitle={heroCopy[categoria] ?? ""} />

      {/* filtros (se muestran si hay más de 1 opción) */}
      {(areasDisponibles.length > 1 || edadesDisponibles.length > 1) && (
        <section className="mb-8 flex flex-wrap gap-3 justify-center">
          {areasDisponibles.length > 1 && (
            <select
              value={filtroArea ?? ""}
              onChange={(e) => setFiltroArea(e.target.value || null)}
              className="border px-3 py-2 rounded-md"
            >
              <option value="">Todas las áreas</option>
              {areasDisponibles.map((a) => (
                <option key={a}>{a}</option>
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
              {edadesDisponibles.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          )}
        </section>
      )}

      {categoriasPorArea.includes(categoria) ? (
        <ProgramCardsPorArea
          programs={programasFiltrados as AreaProgram[]}
          onReset={() => setCategoria(null)}
          showEmpty={false}
        />
      ) : (
        <ProgramCardsPorEdad
          programs={programasFiltrados as AgeProgram[]}
          onReset={() => setCategoria(null)}
        />
      )}

      {/* paginación  ------------------------------------ */}
      {hasNextPage && (
        <div className="my-6 flex justify-center">
          <button
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            className="px-6 py-2 rounded-lg bg-[#5F338B] text-white hover:bg-[#4b2870]"
          >
            {isFetchingNextPage ? "Cargando…" : "Cargar más"}
          </button>
        </div>
      )}

      {error && (
        <p className="text-center text-red-600 mt-4">
          {error.message || "Ocurrió un error."}
        </p>
      )}
    </main>
  );
}
