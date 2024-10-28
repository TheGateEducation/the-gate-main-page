"use client";
import React from "react";
import { ProgramsProps } from "@src/components/cale/ProgramGrid";
import { FaFlag, FaMapMarkerAlt, FaMoneyBillAlt, FaCalendarAlt, FaUniversity, FaGraduationCap, FaClock, FaLink } from 'react-icons/fa';

interface ProgramInfoProps {
  filteredPrograms: ProgramsProps["programsData"];
  resetFilters: () => void;
}

const ProgramInfo: React.FC<ProgramInfoProps> = ({ filteredPrograms, resetFilters }) => {
  return (
    <>
      {filteredPrograms.length === 0 ? (
        <p>No programs match the selected filters.</p>
      ) : (
        <div className="results-container grid grid-cols-1 gap-6 px-20">
          {filteredPrograms.map((program) => (
           <div key={program.id} className="program-item p-4 border rounded-md shadow-lg bg-white">
           <h2 className="text-xl font-bold mb-2">{program.name}</h2>
           <div className="grid grid-cols-2 gap-x-4 space-y-2"> {/* Espacio horizontal y vertical ajustado */}         
             <p><FaFlag className="inline-block mr-2" /><strong>País:</strong> {program.country}</p>
             <p><FaUniversity className="inline-block mr-2" /><strong>Institución:</strong> {program.institution}</p>
             <p><FaGraduationCap className="inline-block mr-2" /><strong>Majors/Especialización:</strong> {program.specialization || "N/A"}</p>
             <p><FaMapMarkerAlt className="inline-block mr-2" /><strong>Ubicación:</strong> {program.location}</p>
             <p><FaCalendarAlt className="inline-block mr-2" /><strong>Fechas de inicio:</strong> {program.startDates || "N/A"}</p>
             <p><FaClock className="inline-block mr-2" /><strong>Duración:</strong> {program.duration}</p>
             <p><FaMoneyBillAlt className="inline-block mr-2" /><strong>Costo por Año (USD):</strong> {program.costPerYearUSD || "N/A"}</p>
             <p><FaGraduationCap className="inline-block mr-2" /><strong>Becas:</strong> {program.scholarships ? "Sí" : "No"}</p>
             <p><FaLink className="inline-block mr-2" /><strong>Link:</strong> {program.link ? <a href={program.link} target="_blank" rel="noopener noreferrer">Ver programa</a> : "N/A"}</p>
             <p><strong>Notas:</strong> {program.notes || "N/A"}</p>
           </div>
         </div>
         
          ))}
        </div>
      )}
      {/* Reset Filters Button */}
      <button onClick={resetFilters} className="reset-button">
        Reset Filters
      </button>
    </>
  );
};

export default ProgramInfo;
