"use client";
import React, { useState, useEffect } from "react";
import CategoriaGrid from "./CategoriaGrid";
import EdadFilter from "./EdadFilter";
import AreaFilter from "./AreaFilter";
import ProgramCards from "./ProgramCards";
import imagenesPorCategoria from "@src/data/imagenesPorCategoria";

// Mapeo de archivos JSON según la categoría
const dataSource: Record<string, () => Promise<any>> = {
  "Campamentos": () => import("@src/data/summer_camps_programs.json").then((m) => m.default),
  "Maestrias": () => import("@src/data/masters_programs.json").then((m) => m.default),
};

const ProgramPage: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [edadSeleccionada, setEdadSeleccionada] = useState<string | null>(null);
  const [areaSeleccionada, setAreaSelecionada] = useState<string | null>(null);
  const [programas, setProgramas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);



  // Cuando se elige una categoría, se carga su JSON correspondiente
  useEffect(() => {
    if (categoriaSeleccionada && dataSource[categoriaSeleccionada]) {
      setLoading(true);
      dataSource[categoriaSeleccionada]()
        .then((data) => {
          setProgramas(data);
          setEdadSeleccionada(null);
          setAreaSelecionada(null);
        })
        .finally(() => setLoading(false));
    }
  }, [categoriaSeleccionada]);



  const ordenDeCategorias = [
    "Cursos de Idiomas", 
    "Campamentos", 
    "Intercambios", 
    "Secundaria",
    "Certificados y Diplomas", 
    "Licenciaturas", 
    "Maestrías", 
    "Doctorados", 
    "Tours de Estudio"
  ];

  //Acomoda las categorias conforme a la lista que aparece arriba
  const categoriasUnicas = Object.keys(dataSource).sort(
    (a, b) => ordenDeCategorias.indexOf(a) - ordenDeCategorias.indexOf(b)
  );

 //Ordena las edades conforme al valor que aparece al principio de cada valor de edad
  const edadesUnicas = Array.from(
    new Set(programas.map((p) => p.edad))
  ).sort((a, b) => {
    const inicioA = parseInt(a.split("-")[0]) || parseInt(a);
    const inicioB = parseInt(b.split("-")[0]) || parseInt(b);
    return inicioA - inicioB;
  });

  const areasUnicas = Array.from(new Set(programas.map((p) => p.area))).sort()

  const programasFiltrados =
    categoriaSeleccionada === "Campamentos" && edadSeleccionada
      ? programas.filter((p) => p.edad === edadSeleccionada)
      : categoriaSeleccionada === "Maestrias" && areaSeleccionada
      ? programas.filter((p) => p.area === areaSeleccionada)
      : [];

  const reset = () => {
    setCategoriaSeleccionada(null);
    setEdadSeleccionada(null);
    setAreaSelecionada(null)
  };

  const renderFiltroPorCategoria = () =>{
    if(categoriaSeleccionada == "Campamentos" && !edadSeleccionada){
      return(
        <EdadFilter
          edades={edadesUnicas}
          onEdadSelect={setEdadSeleccionada}
          onBack={() => setCategoriaSeleccionada(null)}
        />
      );
    }

    if(categoriaSeleccionada == "Maestrias" && !areaSeleccionada){
      return(
        <AreaFilter
        areas={areasUnicas}
        onAreaSelect={setAreaSelecionada}
        onBack={() => setCategoriaSeleccionada(null)}
        />
      )
    }

    return(
      <ProgramCards
      programs={programasFiltrados}
      onReset={reset}
      />
    )
  }

  return (
    <main className="p-8">
      {!categoriaSeleccionada ? (
        <CategoriaGrid
          categorias={categoriasUnicas}
          onCategoriaSelect={setCategoriaSeleccionada}
          imagenesPorCategoria={imagenesPorCategoria}
        />
      ) : loading ? (
        <div className="flex justify-center items-center h-64">
          Cargando...
        </div>
      ) : (
        renderFiltroPorCategoria()
      )}
    </main>
  );
};

export default ProgramPage;