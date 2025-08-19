"use client";
import React from "react";

interface CategoriaGridProps {
  categorias: string[];
  onCategoriaSelect: (categoria: string) => void;
  imagenesPorCategoria?: Record<string, string>;
}

const CategoriaGrid: React.FC<CategoriaGridProps> = ({
  categorias,
  onCategoriaSelect,
  imagenesPorCategoria = {},
}) => {
  // Separar "Idiomas" si existe
  const idiomas = categorias.find((cat) => cat === "Idiomas");
  const otrasCategorias = categorias.filter((cat) => cat !== "Idiomas");

  const renderCategoria = (categoria: string, fullWidth = false) => {
    const bgImage = imagenesPorCategoria[categoria] || "https://via.placeholder.com/800x400";
    return (
      <div
        key={categoria}
        className={`relative cursor-pointer hover:scale-[1.01] transition rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] bg-cover bg-center min-h-[250px] mb-4 ${
          fullWidth ? "col-span-full" : ""
        }`}
        onClick={() => onCategoriaSelect(categoria)}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[16px]" />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-center">
          <div className="bg-[rgba(0,0,0,0.25)] rounded-[16px] px-2 sm:px-4 py-1 sm:py-2 max-w-full overflow-hidden">
            <h2 className="text-white font-semibold text-[6vw] sm:text-[50px] leading-tight break-words">
              {categoria}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-6 py-10 max-w-[1218px] mx-auto">
      {/* Grid principal de 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-500">
        {otrasCategorias.map((categoria, index) => (
          <React.Fragment key={categoria}>
            {renderCategoria(categoria)}
          </React.Fragment>
        ))}
        
        {/* Idiomas - Ocupa ambas columnas */}
        {idiomas && renderCategoria(idiomas, true)}
      </div>
    </div>
  );
};

export default CategoriaGrid;


