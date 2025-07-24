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
  const alturaPorCategoria: Record<string, string> = {
    "Campamentos de Verano": "h-[465px]",
    "Formación Técnica": "h-[525px]",
    "Campamento como Monitor": "h-[505px]",
    "Año de Fundación": "h-[369px]",
    "Estudia y Trabaja": "h-[436px]",
    "Maestrías": "h-[496px]",
    "Tours de Estudio": "h-[490px]",
    "Licenciaturas": "h-[379px]",
    "Deportistas de Alto Rendimiento": "h-[465px]",
    "Año Sabatico": "h-[573px]",
    "Idiomas": "h-[328px]",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 max-w-[1218px] mx-auto">
      {categorias.map((categoria, index) => {
        const bgImage =
          imagenesPorCategoria[categoria] || "https://via.placeholder.com/800x400";
        const altura = alturaPorCategoria[categoria] || "h-[400px]";
        const isUltimo = index === categorias.length - 1;

        return (
          <div
            key={categoria}
            className={`relative cursor-pointer hover:scale-[1.01] transition rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] bg-cover bg-center ${altura} ${
              isUltimo ? "col-span-1 md:col-span-2" : ""
            }`}
            onClick={() => onCategoriaSelect(categoria)}
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            {/* Overlay total */}
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
      })}
    </div>
  );
};

export default CategoriaGrid;
