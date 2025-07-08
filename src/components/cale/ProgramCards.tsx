"use client";
import React from "react";
import Link from "next/link";

import {
  FaWhatsapp
} from "react-icons/fa6";

interface Program {
  id: number;
  Tipo: string;
  Programas_disponibles: string;
  Institucion: string;
  Pais: string;
  Ciudad: string;
  Campus: string;
  Link: string;
  edad: string;
  categoria: string;
}


interface ProgramCardsProps {
  programs: Program[];
}

const ProgramCards: React.FC<ProgramCardsProps> = ({ programs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {programs.map((program) => (
        <div
          key={program.id}
          className="rounded-xl overflow-hidden shadow-md bg-white p-4"
        >
          <h2 className="text-xl font-bold mb-2">
            {program.Programas_disponibles}
          </h2>
          <p>
            <strong>Institución:</strong> {program.Institucion}
          </p>
          <p>
            <strong>País:</strong> {program.Pais}
          </p>
          <p>
            <strong>Ciudad:</strong> {program.Ciudad}
          </p>
          <p>
            <strong>Edad recomendada:</strong> {program.edad}
          </p>
          <p>
            <strong>Categoría:</strong> {program.categoria}
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
    </div>
  );
};

export default ProgramCards;
