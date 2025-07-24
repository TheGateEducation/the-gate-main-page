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
  becas?: string;         // "Sí" / "No" / ""...
  notas?: string;
  // agrega aquí los campos que necesites para el diseño
}

interface ProgramCardsProps {
  programs: Program[];
  onReset: () => void;
  showEmpty?: boolean; // si true, muestra el label aunque el valor esté vacío
}

const ProgramCardsPorArea: React.FC<ProgramCardsProps> = ({
  programs,
  onReset,
  showEmpty = true,
}) => {
  // Capitalizar siguiendo tus reglas
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
          className="w-full rounded-2xl border-4 border-[#6B3CF5] p-6 md:p-8 shadow-sm bg-white"
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

          {/* Botones (opcional) */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-700 transition"
            >
              Contáctanos
            </a>
            <a
              href="http://wa.me/528443510141"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
          </div>
        </div>
      ))}

      {/* Botón volver */}
      <div className="flex justify-start">
        <button
          onClick={onReset}
          className="text-sm px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          Volver a categorías
        </button>
      </div>
    </div>
  );
};

export default ProgramCardsPorArea;
