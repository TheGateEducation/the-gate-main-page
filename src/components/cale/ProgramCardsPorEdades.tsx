"use client";
import React from "react";
import { exepcionesMayuscula } from "@src/data/constantes";
import { AgeProgram } from "./ProgramPage";

interface ProgramCardsProps {
  programs: AgeProgram[];
  showEmpty?: boolean;
}

const ProgramCardsPorEdad: React.FC<ProgramCardsProps> = ({
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
          : word.charAt(0).toUpperCase() + word.slice(1),
      )
      .join(" ")
      .replace(/-.*$/, "");
  };

  // Renderiza una fila "Label: Valor" (con control de mostrar cuando está vacío)
  const renderField = (
    label: string,
    value?: string | number,
    extraClasses = "",
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
              {renderField("Edades", program.edad)}
              {renderField("Fechas", program.fechas)}
              {renderField("Duración", program.duracion)}
              {renderField("Ubicación", program.ciudad)}
            </div>

            <div className="space-y-1">
              {renderField("Tipo de alojamiento", program.habitacion)}
              {renderField("Costro aproximado en MXN", program.costoMX)}
              {renderField("Proveedor", program.proveedor)}
              {/* {renderField("Becas", program.becas)} */}
            </div>
          </div>

          {/* Notas (fila completa) */}
          {renderField("Notas", program.extras, "mt-4")}

          {/* Link institución (si hay) */}
          {program.folleto && (
            <a
              href="/contact"
              className="block mt-4 text-blue-600 underline hover:text-blue-800"
            >
              <strong>Para más informacion de click aqui</strong>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgramCardsPorEdad;
