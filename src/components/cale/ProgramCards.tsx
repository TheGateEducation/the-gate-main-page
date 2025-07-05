"use client";
import React from "react";

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
          <a
            href={program.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Ver más información
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProgramCards;
