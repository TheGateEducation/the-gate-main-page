"use client";
import React, { useState, useEffect } from "react";
import CategoriaGrid from "./CategoriaGrid";
import EdadFilter from "./EdadFilter";
import AreaFilter from "./AreaFilter";
import TextoInformativo from "./textoInformativo";
import ProgramCardsPorEdad from "./ProgramCardsPorEdades";
import ProgramCardsPorArea from "./ProgramCardsPorArea";
import imagenesPorCategoria from "@src/data/imagenesPorCategoria";


const categoriasPorEdad = ["Campamento de Verano"]

const categoriasPorArea = ["Licenciatura", "Maestria", "EFP (Educación y Formación Profesional)" ]

const categoriaPorTexto = ["Tours de Estudio", "Año de fundación", "Consejero del campamento de verano", "Programa de estudio y trabajo","Año Sabatico"]

// Mapeo de archivos JSON según la categoría
const dataSource: Record<string, () => Promise<any>> = {
  "Campamento de Verano": () => import("@src/data/summer_camps_programs.json").then((m) => m.default),
  "Maestria": () => import("@src/data/masters_programs.json").then((m) => m.default),
  "Licenciatura": () => import("@src/data/licenciaturas_programs.json").then((m) => m.default),
  "Tours de Estudio": () => import("@src/data/categorias_texto.json").then((m)=>m.default)
};

const ProgramPage: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [edadSeleccionada, setEdadSeleccionada] = useState<string | null>(null);
  const [areaSeleccionada, setAreaSelecionada] = useState<string | null>(null);
  const [textoCategoria, setTextoCategoria] = useState<string | null>(null);
  const [programas, setProgramas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);



  // Cuando se elige una categoría, se carga su JSON correspondiente
  useEffect(() => {
    if (!categoriaSeleccionada || !dataSource[categoriaSeleccionada]) return;

    setLoading(true);

    dataSource[categoriaSeleccionada]()
      .then((data) => {
        if (categoriaPorTexto.includes(categoriaSeleccionada)) {
          setTextoCategoria(data[categoriaSeleccionada] || "Información no disponible");
          setProgramas([]); // Limpia programas para evitar errores de .map
        } else {
          const listaProgramas = Array.isArray(data) ? data : Object.values(data);
          setProgramas(listaProgramas);
          setTextoCategoria(null);
        }

        setEdadSeleccionada(null);
        setAreaSelecionada(null);
      })
      .finally(() => setLoading(false));
  }, [categoriaSeleccionada]);



  const ordenDeCategorias = [
    "Cursos de Idiomas", 
    "Campamento de Verano", 
    "Intercambios", 
    "Secundaria",
    "Certificados y Diplomas", 
    "Licenciatura", 
    "Maestrías", 
    "Doctorados", 
    "Tours de Estudio", 
    "EFP (Educación y Formación Profesional)",
    "Año de fundación",
    "Consejero del campamento de verano", 
    "Programa de estudio y trabajo",
    "Año Sabatico"
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
    categoriaSeleccionada &&categoriasPorEdad.includes(categoriaSeleccionada) && edadSeleccionada
      ? programas.filter((p) => p.edad === edadSeleccionada)
      : categoriaSeleccionada&& categoriasPorArea.includes(categoriaSeleccionada) && areaSeleccionada
      ? programas.filter((p) => p.area === areaSeleccionada)
      : [];

  const reset = () => {
    setCategoriaSeleccionada(null);
    setEdadSeleccionada(null);
    setAreaSelecionada(null)
  };

  const renderFiltroPorCategoria = () =>{
    if(categoriaSeleccionada && categoriasPorEdad.includes(categoriaSeleccionada) && !edadSeleccionada){
      return(
        <EdadFilter
          edades={edadesUnicas}
          onEdadSelect={setEdadSeleccionada}
          onBack={() => setCategoriaSeleccionada(null)}
        />
      );
    }

    if(categoriaSeleccionada && categoriasPorArea.includes(categoriaSeleccionada) && !areaSeleccionada){
      return(
        <AreaFilter
        areas={areasUnicas}
        onAreaSelect={setAreaSelecionada}
        onBack={() => setCategoriaSeleccionada(null)}
        />
      )
    }

    if(categoriaSeleccionada && categoriaPorTexto.includes(categoriaSeleccionada) && textoCategoria){
      return(
        <TextoInformativo
        texto = {textoCategoria}
        onBack={()=>{
          setCategoriaSeleccionada(null);
          setTextoCategoria(null);
        }}
        />
      )
    }

    if (categoriaSeleccionada && categoriasPorEdad.includes(categoriaSeleccionada) && edadSeleccionada) {
      return (
        <ProgramCardsPorEdad
          programs={programasFiltrados}
          onReset={reset}
        />
      );
    }

    if(categoriaSeleccionada && categoriasPorArea.includes(categoriaSeleccionada) && areaSeleccionada){
      return(
        <ProgramCardsPorArea
          programs={programasFiltrados}
          onReset={reset}
          />
      );
    }
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