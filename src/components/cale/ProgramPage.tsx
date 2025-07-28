"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import CategoriaGrid from "./CategoriaGrid";
import EdadFilter from "./EdadFilter";
import AreaFilter from "./AreaFilter";
import TextoInformativo from "./textoInformativo";
import ProgramCardsPorEdad from "./ProgramCardsPorEdades";
import ProgramCardsPorArea from "./ProgramCardsPorArea";
import textosGeneralesJson from "@src/data/textoPorCategoria.json" assert { type: "json" };
import imagenesPorCategoria from "@src/data/imagenesPorCategoria"; 
import {
  categoriaPorTexto,
  categoriasPorArea,
  ordenDeCategorias,
  categoriasPorEdad,
  endPointMap,
  areaMapping
} from "@src/data/constantes";

// Generate unique numeric ID from program name
const generateId = (name: string): number => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
};

// API response type
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

// Area program interface
export interface AreaProgram {
  id: number;
  nombre: string;
  area: string;
  pais: string;
  ciudad: string;
  institucion: string;
  link: string;
  duracion: string;
  costo: number;
  moneda: string;
  fechas: string;
}

// Age program interface
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

// NEW: Fetch programs by specific area
const fetchProgramsByArea = async (
  category: string,
  spanishArea: string,
  nextKey?: string | null
): Promise<{ items: ApiProgram[]; nextKey?: string | null }> => {
  const endpoint = endPointMap[category];
  if (!endpoint) throw new Error(`No endpoint mapped for category: ${category}`);
  
  // Get English area name from mapping
  const englishArea = areaMapping[category][spanishArea];
  console.log("Área en inglés:", englishArea);
  if (!englishArea) throw new Error(`Area ${spanishArea} not found for category ${category}`);
  
  const encodedArea = encodeURIComponent(englishArea);
  const url = `https://po89ew3l3m.execute-api.us-east-2.amazonaws.com/dev/items/${endpoint}/${encodedArea}${
    nextKey ? `?nextKey=${nextKey}` : ""
  }`;
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al cargar programas");
  const data = await res.json()
  console.log("Respuesta del API:", data);
  return data; 
};

// OLD: Keep fallback for non-area categories
const fetchAllPrograms = async (
  nextKey?: string | null
): Promise<{ items: ApiProgram[]; nextKey?: string | null }> => {
  const url = `https://po89ew3l3m.execute-api.us-east-2.amazonaws.com/dev/items/masters/crud${
    nextKey ? `?nextKey=${nextKey}` : ""
  }`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al cargar todos los programas");
  return res.json();
};

const dataSourceTexto: Record<string, () => Promise<any>> = {
  "Tours de Estudio": () => import("@src/data/categorias_texto.json").then((m) => m.default),
  "A\u00F1o de fundaci\u00F3n": () => import("@src/data/categorias_texto.json").then((m) => m.default),
  "A\u00F1o Sabatico": () => import("@src/data/categorias_texto.json").then((m) => m.default),
  "Consejero del campamento de verano": () => import("@src/data/categorias_texto.json").then((m) => m.default),
  "Programa de estudio y trabajo": () => import("@src/data/categorias_texto.json").then((m) => m.default),
};

const ProgramPage: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [edadSeleccionada, setEdadSeleccionada] = useState<string | null>(null);
  const [areaSeleccionada, setAreaSeleccionada] = useState<string | null>(null);
  const [textoCategoria, setTextoCategoria] = useState<string | null>(null);
  const [programas, setProgramas] = useState<ProgramType[]>([]);
  const [jsonLoading, setJsonLoading] = useState(false);
  const textosGenerales: Record<string, string> = textosGeneralesJson;

  // NEW: Query for area-specific programs
  const {
    data: areaProgramsData,
    error: areaError,
    fetchNextPage,
    hasNextPage,
    isFetching: isFetchingArea,
    isFetchingNextPage,
    isError: isAreaError,
  } = useInfiniteQuery({
    queryKey: ["areaPrograms", categoriaSeleccionada, areaSeleccionada],
    queryFn: ({ pageParam = null }) => {
      if (!categoriaSeleccionada || !areaSeleccionada) 
        throw new Error("Category or area not selected");
      return fetchProgramsByArea(categoriaSeleccionada, areaSeleccionada, pageParam);
    },
    getNextPageParam: (lastPage) => lastPage.nextKey || undefined,
    initialPageParam: null as string | null,
    enabled: !!categoriaSeleccionada && !!areaSeleccionada && 
            categoriasPorArea.includes(categoriaSeleccionada),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours cache
    retry: 2,
  });

  // OLD: Fallback query for non-area categories
  const {
    data: allProgramsData,
    isFetching: isFetchingAllPrograms,
    isError: isAllProgramsError,
  } = useInfiniteQuery({
    queryKey: ["allPrograms"],
    queryFn: ({ pageParam = null }) => fetchAllPrograms(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextKey || undefined,
    initialPageParam: null as string | null,
    enabled: !!categoriaSeleccionada && categoriasPorArea.includes(categoriaSeleccionada),
    staleTime: 24 * 60 * 60 * 1000,
  });

  // NEW: Process area-specific data
  useEffect(() => {
    if (areaProgramsData && categoriaSeleccionada && areaSeleccionada) {
      const allPrograms: AreaProgram[] = areaProgramsData.pages.flatMap((page) =>
        page.items.map((item: ApiProgram) => ({
          id: generateId(item["nombre-del-programa"]),
          nombre: item["nombre-del-programa"],
          area: areaSeleccionada, // Use Spanish area name
          institucion: item.institucion,
          pais: item.pais,
          ciudad: item.ubicacion,
          duracion: item.duracion,
          costo: item["costo-p/ano"],
          moneda: item.moneda,
          link: item.link,
          fechas: item["fechas-de-inicio"],
        }))
      );
      
      setProgramas(allPrograms);
      setTextoCategoria(textosGenerales[categoriaSeleccionada] || "Información no disponible");
    }
  }, [areaProgramsData, categoriaSeleccionada, areaSeleccionada, textosGenerales]);

  // OLD: Fallback processing for non-area categories
  useEffect(() => {
    if (
      allProgramsData &&
      categoriaSeleccionada &&
      categoriasPorArea.includes(categoriaSeleccionada)
    ) {
      const allPrograms = allProgramsData.pages.flatMap((page) => page.items);

      const processedPrograms: AreaProgram[] = allPrograms.map((item) => ({
        id: generateId(item["nombre-del-programa"]),
        nombre: item["nombre-del-programa"],
        area: item["area-de-estudio"]?.trim() || "Sin área definida",
        institucion: item.institucion,
        pais: item.pais,
        ciudad: item.ubicacion,
        duracion: item.duracion,
        costo: item["costo-p/ano"],
        moneda: item.moneda,
        link: item.link,
        fechas: item["fechas-de-inicio"],
      }));

      setProgramas(processedPrograms);
      setTextoCategoria(textosGenerales[categoriaSeleccionada] || "Información no disponible");
    }
  }, [allProgramsData, categoriaSeleccionada, textosGenerales]);

  useEffect(() => {
    if (!categoriaSeleccionada || 
       !dataSourceTexto[categoriaSeleccionada] || 
       categoriaSeleccionada === "Maestría") return;

    setJsonLoading(true);
    dataSourceTexto[categoriaSeleccionada]()
      .then((data) => {
        setTextoCategoria(data[categoriaSeleccionada] || "Información no disponible");
        setProgramas([]);
      })
      .catch(console.error)
      .finally(() => setJsonLoading(false));
  }, [categoriaSeleccionada]);

  // Get available areas for current category
  const areasDisponibles = useMemo(() => {
    if (categoriaSeleccionada && areaMapping[categoriaSeleccionada]) {
      return Object.keys(areaMapping[categoriaSeleccionada]);
    }
    return [];
  }, [categoriaSeleccionada]);

  // Get unique areas from programs (fallback)
  const areasUnicas = useMemo(() => {
    if (programas.some(p => "area" in p)) {
      return Array.from(
        new Set(
          (programas as AreaProgram[])
            .filter(p => "area" in p)
            .map((p) => p.area?.trim())
            .filter((a): a is string => !!a)
        )
      ).sort();
    }
    return [];
  }, [programas]);

  const edadesUnicas = useMemo(() => {
    if (programas.some(p => "edad" in p)) {
      return Array.from(
        new Set(
          (programas as AgeProgram[])
            .filter(p => "edad" in p)
            .map((p) => p.edad)
        )
      ).sort((a, b) => {
        const inicioA = parseInt(a?.split("-")[0]) || parseInt(a);
        const inicioB = parseInt(b?.split("-")[0]) || parseInt(b);
        return inicioA - inicioB;
      });
    }
    return [];
  }, [programas]);

  const programasFiltrados = useMemo(() => {
    if (!categoriaSeleccionada) return [];
    
    if (categoriasPorEdad.includes(categoriaSeleccionada) && edadSeleccionada) {
      return (programas as AgeProgram[]).filter((p) => 
        "edad" in p && p.edad === edadSeleccionada
      );
    }
    
    if (categoriasPorArea.includes(categoriaSeleccionada) && areaSeleccionada) {
      return (programas as AreaProgram[]).filter((p) => 
        "area" in p && p.area === areaSeleccionada
      );
    }
    
    return [];
  }, [programas, categoriaSeleccionada, areaSeleccionada, edadSeleccionada]);

  const reset = () => {
    setCategoriaSeleccionada(null);
    setEdadSeleccionada(null);
    setAreaSeleccionada(null);
    setProgramas([]);
  };

  const renderFiltroPorCategoria = () => {
    if (isAreaError || isAllProgramsError) {
      return (
        <div className="text-center py-10">
          <h3 className="text-xl font-bold text-red-600">Error al cargar datos</h3>
          <p className="text-gray-600 mt-2">{(areaError)?.message || "Intente nuevamente más tarde"}</p>
          <button
            onClick={reset}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Volver
          </button>
        </div>
      );
    }

    if (categoriaSeleccionada && categoriasPorEdad.includes(categoriaSeleccionada) && !edadSeleccionada) {
      return (
        <>
          {isFetchingArea ? (
            <p className="text-center py-4">Cargando edades...</p>
          ) : edadesUnicas.length === 0 ? (
            <p className="text-center text-red-500 mt-4">No se encontraron edades disponibles.</p>
          ) : (
            <EdadFilter
              edades={edadesUnicas}
              onEdadSelect={setEdadSeleccionada}
              onBack={reset}
              edadSeleccionada={edadSeleccionada}
              texto={textosGenerales[categoriaSeleccionada]}
            />
          )}
        </>
      );
    }

    if (categoriaSeleccionada && categoriasPorArea.includes(categoriaSeleccionada) && !areaSeleccionada) {
      return (
        <>
          {isFetchingArea ? (
            <p className="text-center py-4">Cargando áreas...</p>
          ) : areasDisponibles.length === 0 ? (
            <p className="text-center text-red-500 mt-4">No se encontraron áreas disponibles.</p>
          ) : (
            <AreaFilter
              areas={areasDisponibles}
              onAreaSelect={setAreaSeleccionada}
              onBack={reset}
              areaSeleccionada={areaSeleccionada}
              texto={textosGenerales[categoriaSeleccionada]}
            />
          )}
        </>
      );
    }

    if (categoriaSeleccionada && categoriaPorTexto.includes(categoriaSeleccionada) && textoCategoria) {
      return <TextoInformativo texto={textoCategoria} onBack={reset} />;
    }

    if (categoriaSeleccionada && categoriasPorEdad.includes(categoriaSeleccionada) && edadSeleccionada) {
      return (
        <>
          <ProgramCardsPorEdad 
            programs={programasFiltrados as AgeProgram[]} 
            onReset={reset} 
          />
          {hasNextPage && (
            <div className="col-span-full flex justify-center mt-6">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                {isFetchingNextPage ? "Cargando..." : "Cargar más"}
              </button>
            </div>
          )}
        </>
      );
    }

    if (categoriaSeleccionada && categoriasPorArea.includes(categoriaSeleccionada) && areaSeleccionada) {
      return (
        <>
          <ProgramCardsPorArea 
            programs={programasFiltrados as AreaProgram[]} 
            onReset={reset} 
          />
          {hasNextPage && (
            <div className="col-span-full flex justify-center mt-6">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                {isFetchingNextPage ? "Cargando..." : "Cargar más"}
              </button>
            </div>
          )}
        </>
      );
    }
  };

  return (
    <main className="p-8">
      {!categoriaSeleccionada ? (
        <CategoriaGrid
          categorias={ordenDeCategorias}
          onCategoriaSelect={setCategoriaSeleccionada}
          imagenesPorCategoria={imagenesPorCategoria}
        />
      ) : (
        renderFiltroPorCategoria()
      )}
    </main>
  );
};

export default ProgramPage;