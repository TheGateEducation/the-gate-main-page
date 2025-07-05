"use client"
import React, { useState } from "react";
import ProgramInfo from "@src/components/cale/ProgramsInfo";
//truly this can be done better, but I'm not sure how to do it

export interface ProgramsProps {
  programsData: {
    id: number;
    area: string;
    name: string;
    specialization: string;
    country: string;
    institution: string;
    location: string;
    startDates: string;
    duration: string;
    costPerYearUSD: string;
    costPerYearCurrency: string;
    currency: string;
    scholarships: string;
    link: string;
    notes: string;
    images: {
      area: string;
      country: string;
      institution: string;
    };
  }[];
}

const ProgramFilter: React.FC<ProgramsProps> = ({ programsData }) => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState(programsData); // replace with actual programs data
  const [filters, setFilters] = useState({
    country: "",
    institution: "",
    specialization: "",
    // other filters
  });
  
  

  { /* Function to group programs by area(9) */ }
  const groupProgramsByarea = (programs: ProgramsProps['programsData']) => {
    const grouped: Record<string, ProgramsProps['programsData']> = {};

    programs.forEach(program => {
      if (!grouped[program.area]) {
        grouped[program.area] = [];
      }
      grouped[program.area].push(program);
    });

    return grouped;
  };

  const groupedPrograms = groupProgramsByarea(programsData);

  

  { /* Obtener especializaciones basadas en argumentos */ }
  const specializations = Array.from(new Set(filteredPrograms.map(program => program.specialization)));
  const countries = Array.from(new Set(filteredPrograms.map(program => program.country)));
  const institutions = Array.from(new Set(filteredPrograms.map(program => program.institution)));
  
  

  const resetFilters = () => {
    setSelectedProgram("");
    setSelectedSpecialization("");
    setSelectedCountry("");
    setSelectedInstitution("");
    setFilteredPrograms(programsData); // reset to the full list of programs
    setFilters({
      country: "",
      institution: "",
      specialization: "",
    });
  };
  
  return (
    <>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 p-20">
        {/* Program */}
        {!selectedProgram && !selectedSpecialization && !selectedCountry && !selectedInstitution && (
          <>
            {Object.keys(groupedPrograms).map((programarea) => {
              const programData = groupedPrograms[programarea][0];
              const backgroundImage = programData.images.area;

              return (
                <div
                  key={programarea}
                  className="grid-item"
                  onClick={() => setSelectedProgram(programarea)}
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "red",
                    padding: "20px",
                    borderRadius: "16px",
                  }}
                >
                  <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white">{programarea}</h1>
                </div>
              );
            })}
          </>
        )}


        {/* Specialization */}
        {selectedProgram && !selectedSpecialization && !selectedCountry && !selectedInstitution && (
          <>
            {specializations.map((specialization, index) => (
              <div
                key={index}
                className="grid-item"
                onClick={() => setSelectedSpecialization(specialization)}
              >
                <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-black">{specialization}</h1>
              </div>
            ))}
          </>
        )}

        {/* Country */}
        {selectedProgram && selectedSpecialization && !selectedCountry && !selectedInstitution && (
          <>
            {countries.map((country, index) => {
              const countryImage = programsData.find(p => p.country === country)?.images.country; // Get the country image
              return (
                <div
                  key={index}
                  className="grid-item"
                  onClick={() => setSelectedCountry(country)}
                  style={{
                    backgroundImage: `url(${countryImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "red",
                    padding: "20px",
                    borderRadius: "16px",
                  }}
                >
                  <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white">{country}</h1>
                </div>
              );
            })}
          </>
        )}

        {/* Institution */}
        {selectedProgram && selectedSpecialization && selectedCountry && !selectedInstitution && (
          <>
            {institutions.map((institution, index) => {
              const institutionImage = programsData.find(p => p.institution === institution)?.images.institution; // Get the institution image
              return (
                <div
                  key={index}
                  className="grid-item"
                  onClick={() => setSelectedInstitution(institution)}
                  style={{
                    backgroundImage: `url(${institutionImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "red",
                    padding: "20px",
                    borderRadius: "16px",
                  }}
                >
                  <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white">{institution}</h1>
                </div>
              );
            })}
          </>
        )}
      </div>
      {/* + Info or not data found message */}
      {selectedProgram && selectedSpecialization && selectedCountry && selectedInstitution && (
        <ProgramInfo filteredPrograms={filteredPrograms} resetFilters={resetFilters} />
      )}
      
      <style jsx>{`
        .grid-item {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 300px;
          text-align: center;
        }


        .grid-item:hover {
          transform: scale(1.05);
          transition: all 0.3s ease;
        }

        .details-container {
          margin-top: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .details-card {
          margin-bottom: 20px;
        }

        .details-card h2 {
          margin-top: 0;
        }

        .details-card p {
          margin: 5px 0;
        }

        .details-card a {
          color: #0070f3;
          text-decoration: none;
        }

        .details-card a:hover {
          text-decoration: underline;
        }

        .grid-item:hover {
          transform: scale(1.05);
          transition: all 0.3s ease;
        }

        .reset-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          margin: 10px 0;
        }

        .reset-button:hover {
          background-color: #005bb5;
        }

      `}</style>
    </>
  );
};
export default ProgramFilter;