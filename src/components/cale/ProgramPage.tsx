"use client";
import React, { useState } from "react";
import CategoriaGrid from "@src/components/cale/CategoriaGrid";
import EdadFilter from "@src/components/cale/EdadFilter";
import ProgramCards from "@src/components/cale/ProgramCards";
import mockPrograms from "@src/data/mockPrograms.json";
import imagenesPorCategoria from "@src/data/imagenesPorCategoria";

const ProgramPage: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [edadSeleccionada, setEdadSeleccionada] = useState<string | null>(null);

  // Paso 1: Mostrar categorías únicas
  const ordenDeCategorias = ["Cursos de Idiomas", "Campamentos", "Intercambios", "Secundaria", "Certificados y Diplomas", "Licenciaturas","Maestrías", "Doctorados", "Tours de Estudio"]

  const categoriasUnicas = Array.from(new Set(mockPrograms.map((p) => p.categoria))).sort((a, b) => ordenDeCategorias.indexOf(a) - ordenDeCategorias.indexOf(b));

  // Paso 2: Filtrar por categoría
  const programasFiltradosPorCategoria = categoriaSeleccionada
    ? mockPrograms.filter((p) => p.categoria === categoriaSeleccionada)
    : [];

  // Paso 3: Sacar edades únicas por categoría
  const edadesUnicas = Array.from(new Set(programasFiltradosPorCategoria.map((p) => p.edad))).sort((a, b) => {
    const inicioA = parseInt(a.split("-")[0]) || parseInt(a);
    const inicoB = parseInt(b.split("-")[0]) || parseInt(b);
    return inicioA - inicoB;
  });

  // Paso 4: Filtrar por edad
  const programasFinales = edadSeleccionada
    ? programasFiltradosPorCategoria.filter((p) => p.edad === edadSeleccionada)
    : programasFiltradosPorCategoria;

  const reset = () => {
    setCategoriaSeleccionada(null);
    setEdadSeleccionada(null);
  };

  return (
    <main className="p-8">
      {!categoriaSeleccionada ? (
        <CategoriaGrid
          categorias={categoriasUnicas}
          onCategoriaSelect={setCategoriaSeleccionada}
          imagenesPorCategoria={imagenesPorCategoria}
        />
      ) : !edadSeleccionada ? (
        <EdadFilter edades={edadesUnicas} onEdadSelect={setEdadSeleccionada} onBack={() => setCategoriaSeleccionada(null)} />
      ) : (
        <>
          <ProgramCards programs={programasFinales} />
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={reset}
          >
            Reiniciar Filtros
          </button>
        </>
      )}
    </main>
  );
};

export default ProgramPage;
