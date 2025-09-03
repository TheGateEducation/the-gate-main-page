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
  const idiomas = categorias.find((cat) => cat.toLowerCase() === "idiomas");
  const otrasCategorias = categorias.filter((cat) => cat.toLowerCase() !== "idiomas");

  const renderCategoria = (categoria: string, fullWidth = false) => {
    const bgImage = imagenesPorCategoria[categoria] || "https://via.placeholder.com/800x400";
    
    return (
      <div
        key={categoria}
        className={`relative cursor-pointer hover:scale-[1.01] transition rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] bg-cover bg-center mb-4 min-h-[250px] ${
          fullWidth ? "col-span-full" : ""
        }`}
        onClick={() => onCategoriaSelect(categoria)}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[16px]" />
        <div className="absolute inset-0 flex items-center justify-center z-10 p-4 text-center">
          <div className="bg-[rgba(0,0,0,0.25)] rounded-[16px] px-2 py-1 max-w-full overflow-hidden flex items-center justify-center">
            {/* Clases de texto escalonadas para diferentes tamaños de pantalla */}
            <h2 className="text-white font-semibold leading-tight break-words text-2xl sm:text-xl md:text-2xl lg:text-4xl">
              {categoria}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-6 py-10 max-w-[1218px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otrasCategorias.map((categoria) => (
          <React.Fragment key={categoria}>
            {renderCategoria(categoria)}
          </React.Fragment>
        ))}
        {idiomas && renderCategoria(idiomas, true)}
      </div>
    </div>
  );
};

export default CategoriaGrid;


