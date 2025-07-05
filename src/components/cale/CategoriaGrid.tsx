"use client";
import React from "react";

interface CategoriaGridPromp {
    categorias: string[];
    onCategoriaSelect: (categoria: string) => void;
    imagenesPorCategoria?: Record<string, string>;
}

const CategoriaGrid: React.FC<CategoriaGridPromp> = ({
  categorias,
  onCategoriaSelect,
  imagenesPorCategoria = {},
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {categorias.map((categoria) => {
        const backgroundImage = imagenesPorCategoria[categoria] || "https://via.placeholder.com/400x300";

        return (
          <div
            key={categoria}
            className="rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => onCategoriaSelect(categoria)}
          >
            <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
              {categoria}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriaGrid;