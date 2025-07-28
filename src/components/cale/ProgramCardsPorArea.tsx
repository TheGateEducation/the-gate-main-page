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
  fechas?: string;
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
              {renderField("Especialización", formatCase(program.area))}
              {renderField("Fechas de inicio", program.fechas)}
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
          <div className="w-full max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-base md:text-lg">
            <div className="space-y-1">
              {renderField("Notas", program.notas, "mt-4")}
              {program.link && (
                <a href={program.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-600 underline hover:text-blue-800">
                Link de la Institución
                </a>)}
            </div>
          </div>

          {/* Botones (opcional) */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
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
      <div className="p-6 flex flex-col gap-6">
        <button
          onClick={onReset}
          className="inline-flex items-center justify-center
                      px-14 py-[11px]
                      bg-[#5F338B] rounded-[24px]
                      font-roboto font-normal text-white
                      text-[20px] sm:text-[25px] leading-[29px]
                      w-full sm:w-[200px] mx-auto
                      hover:bg-[#4b2870] transition
                      focus:outline-none focus:ring-2 focus:ring-[#5F338B]/40">
          Volver a categorías
        </button>
      </div>
    </div>
  );
};

export default ProgramCardsPorArea;
