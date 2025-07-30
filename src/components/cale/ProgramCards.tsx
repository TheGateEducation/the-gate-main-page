"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { formatCase, renderField} from "@src/data/funciones"
import {ProgramCardsPropsArea} from "@src/data/interface"


const ProgramCardsPorArea: React.FC<ProgramCardsPropsArea> = ({
  programs,
  onReset,
  showEmpty,
}) => {

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
              {renderField("País", program.pais, showEmpty)}
              {renderField("Especialización", formatCase(program.area), showEmpty)}
              {renderField("Fechas de inicio", program.fechas, showEmpty)}
              {renderField(
                "Costo por Año (USD)",
                program.costoUSD !== undefined
                  ? `$${program.costoUSD}` 
                  : ""
              , showEmpty)}
            </div>

            <div className="space-y-1">
              {renderField("Institución", program.institucion, showEmpty)}
              {renderField("Ubicación", program.ubicacion, showEmpty)}
              {renderField("Duración", program.duracion, showEmpty)}
            </div>
          </div>
          <div className="w-full max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-base md:text-lg">
            <div className="space-y-1">
              {renderField("Notas", "mt-4", showEmpty, program.notas)}
              {program.link && (
                <a href={program.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-600 underline hover:text-blue-800">
                Link de la Institución
                </a>)}
            </div>
          </div>
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
      <div className="my-6 flex justify-center">
        <button
          onClick={onReset}
          className="px-6 py-2 rounded-lg bg-[#5F338B] text-white hover:bg-[#4b2870]">
          Volver a categorías
        </button>
      </div>
    </div>
  );
};

export default ProgramCardsPorArea;
