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

const categoriasPorEdad = ["Campamento de Verano"];
const categoriasPorArea = ["Licenciatura", "Maestría", "EFP (Educación y Formación Profesional)"];
const categoriaPorTexto = [
  "Tours de Estudio",
  "Año de fundación",
  "Consejero del campamento de verano",
  "Programa de estudio y trabajo",
  "Año Sabatico"
];

const ordenDeCategorias = [
  "Cursos de Idiomas", 
  "Campamento de Verano", 
  "Intercambios", 
  "Secundaria",
  "Certificados y Diplomas", 
  "Licenciatura", 
  "Maestría", 
  "Doctorados", 
  "Tours de Estudio", 
  "EFP (Educación y Formación Profesional)",
  "Año de fundación",
  "Consejero del campamento de verano", 
  "Programa de estudio y trabajo",
  "Año Sabatico"
];

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

  const edadesUnicas = Array.from(
    new Set(programas.map((p) => p.edad))
  ).sort((a, b) => {
    const inicioA = parseInt(a?.split("-")[0]) || parseInt(a);
    const inicioB = parseInt(b?.split("-")[0]) || parseInt(b);
    return inicioA - inicioB;
  });

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
          <EdadFilter
            edades={edadesUnicas}
            onEdadSelect={setEdadSeleccionada}
            onBack={reset}
          />
          {textoCategoria && <TextoInformativo texto={textoCategoria} onBack={reset} />}
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
          />
          {textoCategoria && <TextoInformativo texto={textoCategoria} onBack={reset} />}
        </>
      );
    }

    if (categoriaSeleccionada && categoriaPorTexto.includes(categoriaSeleccionada) && textoCategoria) {
      return <TextoInformativo texto={textoCategoria} onBack={reset} />;
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
      ) : loading ? (
        <div className="flex justify-center items-center h-64">Cargando...</div>
      ) : (
        renderFiltroPorCategoria()
      )}
    </main>
  );
};

export default ProgramPage;
