"use client";
import React from "react";
import { exepcionesMayuscula } from "@src/data/constantes";
import { AreaProgram } from "./ProgramPage";

interface ProgramCardsProps {
  programs: AreaProgram[];
  showEmpty?: boolean;
}

const ProgramCardsPorArea: React.FC<ProgramCardsProps> = ({
  programs,
  showEmpty = false,
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
          className="bg-white border-[5px] border-[#EDA74C] rounded-[16px] shadow-[0px_4px_8px_rgba(0,0,0,0.02),0px_6px_12px_rgba(0,0,0,0.03)] p-6 md:p-8"
        >
          {/* Título */}
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            {formatCase(program.nombre)}
          </h3>

          {/* Grid de dos columnas de datos */}
          <div className="w-full max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-base md:text-lg">
            <div className="space-y-1">
              {renderField("País", program.pais)}
              {renderField("Especialización", program.especializacion)}
              {renderField("Profesión", program.profesiones)}
              {renderField("Área de estudio", program.area)}
              {renderField("Fechas de inicio", program.fechas)}
              {renderField(`Costo por Año (${program.moneda})`, program.costo)}
              {renderField("Costo por año (USD)", program.costoUSD)}
            </div>

            <div className="space-y-1">
              {renderField("Institución", program.institucion)}
              {renderField("Ubicación", program.ciudad)}
              {renderField("Duración", program.duracion)}
            </div>
          </div>


          {renderField("Notas", program.notas, "mt-4 w-full max-w-[860px] mx-auto")}
          {/*link de la institucion*/}
          <div className="w-full max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-base md:text-lg">
            <div className="space-y-1">
              
              {program.link && (
                <a href={program.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-600 underline hover:text-blue-800">
                Link de la Institución
                </a>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramCardsPorArea;
