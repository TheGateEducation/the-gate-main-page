"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { exepcionesMayuscula } from "@src/data/constantes";

interface Program {
  id: number;
  nombre: string;
  area?: string;
  pais?: string;
  ciudad?: string;
  institucion?: string;
  link?: string;
  fechasInicio?: string;
  duracion?: string;
  costoAnualUSD?: number | string;
  becas?: string;        
  notas?: string;
}

interface ProgramCardsProps {
  programs: Program[];
  showEmpty?: boolean; 
}

const ProgramCardsPorArea: React.FC<ProgramCardsProps> = ({
  programs,
  showEmpty = true,
}) => {
  const formatCase = (text?: string) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        exepcionesMayuscula.includes(word) && index !== 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ")
      .replace(/-.*$/, "");
  };

  // Renderiza una fila "Label: Valor" (con control de mostrar cuando está vacío)
  const renderField = (
    label: string,
    value?: string | number,
    extraClasses = ""
  ) => {
    if (!showEmpty && (value === undefined || value === null || value === ""))
      return null;

    return (
      <p className={extraClasses}>
        <strong>{label}: </strong>
        {value ?? ""}
      </p>
    );
  };

  return (
    <div className="flex flex-col gap-10 px-4 py-6 max-w-[1200px] mx-auto">
      {programs.map((program) => (
        <div
          key={program.id}
          className="w-full rounded-2xl border-4 border-[#5F338B] p-6 md:p-8 shadow-sm bg-white"
        >
          {/* Título */}
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            {formatCase(program.nombre)}
          </h3>

          {/* Grid de dos columnas de datos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-base md:text-lg">
            <div className="space-y-1">
              {renderField("País", program.pais)}
              {renderField("Especialización", formatCase(program.area))}
              {renderField("Fechas de inicio", program.fechasInicio)}
              {renderField(
                "Costo por Año (USD)",
                program.costoAnualUSD !== undefined && program.costoAnualUSD !== ""
                  ? `$${program.costoAnualUSD}`
                  : ""
              )}
            </div>

            <div className="space-y-1">
              {renderField("Institución", program.institucion)}
              {renderField("Ubicación", program.ciudad)}
              {renderField("Duración", program.duracion)}
              {renderField("Becas", program.becas)}
            </div>
          </div>

          {/* Notas (fila completa) */}
          {renderField("Notas", program.notas, "mt-4")}

          {/* Link institución (si hay) */}
          {program.link && (
            <a
              href={program.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-600 underline hover:text-blue-800"
            >
              Link de la Institución
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgramCardsPorArea;
