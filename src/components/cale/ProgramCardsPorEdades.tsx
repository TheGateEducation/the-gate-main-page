"use client";
import React from "react";

import {
  FaWhatsapp
} from "react-icons/fa6";

interface Program {
  id: number;
  nombre: string,
  pais: string, 
  ciudad: string,
  edad: string,
  duracion: string,
  proveedor: string 
}


interface ProgramCardsProps {
  programs: Program[];
  onReset: () => void; 
  
}

const ProgramCards: React.FC<ProgramCardsProps> = ({ programs, onReset }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {programs.map((program) => (
        <div
          key={program.id}
          className="rounded-xl overflow-hidden shadow-md bg-white p-4"
        >
          <p>
            <strong>Nombre: </strong> {program.nombre}
          </p>
          <p>
            <strong>País:</strong> {program.pais}
          </p>
          <p>
            <strong>Ciudad:</strong> {program.ciudad}
          </p>
          <p>
            <strong>Edad recomendada:</strong> {program.edad}
          </p>
          <p>
            <strong>Duración:</strong> {program.duracion}
          </p>
          <p>
            <strong>Proveedor: </strong>{program.proveedor}
          </p>

          <div className="mt-4 flex flex-row gap-3">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
            >
              Contáctanos
            </a>
            <a
              href="http://wa.me/528443510141"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
          </div>
        </div>
      ))}

      <div className="col-span-full flex justify-start px-6">
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

export default ProgramCards;
