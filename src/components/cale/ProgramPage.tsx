"use client";
import React, { useState, useEffect, useMemo } from "react";
import CategoriaGrid from "./CategoriaGrid";
import EdadFilter from "./EdadFilter";
import AreaFilter from "./AreaFilter";
import TextoInformativo from "./textoInformativo";
import ProgramCardsPorEdad from "./ProgramCardsPorEdades";
import ProgramCardsPorArea from "./ProgramCardsPorArea";
import textosGeneralesJson from "@src/data/textoPorCategoria.json" assert { type: "json" };
import imagenesPorCategoria from "@src/data/imagenesPorCategoria"; 
import {categoriaPorTexto, categoriasPorArea, ordenDeCategorias, categoriasPorEdad} from "@src/data/constantes"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";


const fetchPrograms = async (
  categoria: string,
  nextKey?: string | null
): Promise<{ items: any[]; nextKey?: string | null }> => {
  const encoded = encodeURIComponent(categoria);
  const url = `https://po89ew3l3m.execute-api.us-east-2.amazonaws.com/dev/items/masters/${encoded}${nextKey ? `?nextKey=${nextKey}` : ""}`;
  const res = await fetch(url);

  if (!res.ok) throw new Error("Error al cargar programas");
  return res.json();
};

const dataSourceTexto: Record<string, () => Promise<any>> = {
  "Tours de Estudio": () => import("@src/data/categorias_texto.json").then((m)=>m.default),
  "A\u00F1o de fundaci\u00F3n": () => import("@src/data/categorias_texto.json").then((m) => m.default),
  "A\u00F1o Sabatico": () => import("@src/data/categorias_texto.json").then((m) => m.default),
  "Consejero del campamento de verano": () => import("@src/data/categorias_texto.json").then((m) => m.default),
  "Programa de estudio y trabajo": () => import("@src/data/categorias_texto.json").then((m) => m.default)
}

const ProgramPage: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [edadSeleccionada, setEdadSeleccionada] = useState<string | null>(null);
  const [areaSeleccionada, setAreaSeleccionada] = useState<string | null>(null);
  const [textoCategoria, setTextoCategoria] = useState<string | null>(null);
  const [programas, setProgramas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextKey, setNextKey] = useState<string | null>(null);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const textosGenerales: Record<string, string> = textosGeneralesJson;

  const areasUnicas = useMemo(() => {
    return Array.from(
      new Set(
        programas
          .map((p) => p.area?.trim())        
          .filter((a): a is string => !!a)   
      )
    ).sort();
  }, [programas]);

  const edadesUnicas = Array.from(
    new Set(programas.map((p) => p.edad))
  ).sort((a, b) => {
    const inicioA = parseInt(a?.split("-")[0]) || parseInt(a);
    const inicioB = parseInt(b?.split("-")[0]) || parseInt(b);
    return inicioA - inicioB;
  });

  useEffect(() => {
    if (categoriaSeleccionada !== "Maestría") return;

    setLoading(true);

    fetchPrograms("crud") // Usamos el endpoint general
      .then(({ items, nextKey: nk }) => {
        const programasAdaptados = items.map((item, index) => ({
          id: index,
          area: item["area-de-estudio"]?.trim() || "Sin área definida",
          nombre: item["nombre-del-programa"],
          institucion: item["institucion"],
          pais: item["pais"],
          ciudad: item["ubicacion"],
          duracion: item["duracion"],
          costo: item["costo-p/ano"],
          moneda: item["moneda"],
          link: item["link"],
          fechas: item["fechas-de-inicio"]
        }));

        setProgramas(programasAdaptados);
        setNextKey(nk ?? null);
        setTextoCategoria(textosGenerales[categoriaSeleccionada] || "Información no disponible");
        setEdadSeleccionada(null);
        setAreaSeleccionada(null);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [categoriaSeleccionada]);

  const loadMore = () => {
    if (!nextKey || categoriaSeleccionada !== "Maestría") return;
    setIsFetchingMore(true);

    fetchPrograms("crud", nextKey)
      .then(({ items, nextKey: nk }) => {
        const nuevosProgramas = items.map((item, index) => ({
          id: programas.length + index,
          area: item["area-de-estudio"]?.trim() || "Sin área definida",
          nombre: item["nombre-del-programa"],
          institucion: item["institucion"],
          pais: item["pais"],
          ciudad: item["ubicacion"],
          duracion: item["duracion"],
          costo: item["costo-p/ano"],
          moneda: item["moneda"],
          link: item["link"],
          fechas: item["fechas-de-inicio"]
        }));

        setProgramas((prev) => [...prev, ...nuevosProgramas]);
        setNextKey(nk ?? null);
      })
      .catch(console.error)
      .finally(() => setIsFetchingMore(false));
  };

  useEffect(() =>{
    if(!categoriaSeleccionada || !dataSourceTexto[categoriaSeleccionada]) return; 

    setLoading(true);

    dataSourceTexto[categoriaSeleccionada]()
      .then((data)=> {
        setTextoCategoria(data[categoriaSeleccionada] || "Información no disponible");
        setProgramas([]);
        setEdadSeleccionada(null);
        setAreaSeleccionada(null);
      })
      .finally(() => setLoading(false));
  }, [categoriaSeleccionada]);

  const programasFiltrados = categoriaSeleccionada && categoriasPorEdad.includes(categoriaSeleccionada) && edadSeleccionada
    ? programas.filter((p) => p.edad === edadSeleccionada)
    : categoriaSeleccionada && categoriasPorArea.includes(categoriaSeleccionada) && areaSeleccionada
    ? programas.filter((p) => p.area === areaSeleccionada)
    : [];

  const reset = () => {
    setCategoriaSeleccionada(null);
    setEdadSeleccionada(null);
    setAreaSeleccionada(null);
    setProgramas([]);
    setNextKey(null);
  };

  const renderFiltroPorCategoria = () => {
    if (categoriaSeleccionada && categoriasPorEdad.includes(categoriaSeleccionada) && !edadSeleccionada) {
      return (
        <>
          {edadesUnicas.length === 0 && (
            <p className="text-center text-red-500 mt-4">No se encontraron edades disponibles.</p>
          )}
          <EdadFilter
            edades={edadesUnicas}
            onEdadSelect={setEdadSeleccionada}
            onBack={reset}
            edadSeleccionada={edadSeleccionada}
            texto={textosGenerales[categoriaSeleccionada]}
          />
        </>
      );
    }

    if (categoriaSeleccionada && categoriasPorArea.includes(categoriaSeleccionada) && !areaSeleccionada) {
      return (
        <>
          {areasUnicas.length === 0 && (
            <p className="text-center text-red-500 mt-4">No se encontraron áreas disponibles.</p>
          )}
          <AreaFilter
            areas={areasUnicas}
            onAreaSelect={setAreaSeleccionada}
            onBack={reset}
            areaSeleccionada={areaSeleccionada}
            texto = {textosGenerales[categoriaSeleccionada]}
          />
        </>
      );
    }

    if (categoriaSeleccionada && categoriaPorTexto.includes(categoriaSeleccionada) && textoCategoria) {
      return <TextoInformativo 
                texto={textoCategoria} 
                onBack={reset} 
              />;
    }

    if (categoriaSeleccionada && categoriasPorEdad.includes(categoriaSeleccionada) && edadSeleccionada) {
      return (
        <>
          <ProgramCardsPorEdad programs={programasFiltrados} onReset={reset} />
          {nextKey && (
            <div className="col-span-full flex justify-center mt-6">
              <button
                onClick={loadMore}
                disabled={isFetchingMore}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                {isFetchingMore ? "Cargando…" : "Cargar más"}
              </button>
            </div>
          )}
        </>
      );
    }

    if (categoriaSeleccionada && categoriasPorArea.includes(categoriaSeleccionada) && areaSeleccionada) {
      return (
        <>
          <ProgramCardsPorArea programs={programasFiltrados} onReset={reset} />
          {nextKey && (
            <div className="col-span-full flex justify-center mt-6">
              <button
                onClick={loadMore}
                disabled={isFetchingMore}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                {isFetchingMore ? "Cargando…" : "Cargar más"}
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
