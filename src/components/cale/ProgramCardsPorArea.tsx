"use client";
import React, { useState } from "react";
import { exepcionesMayuscula } from "@src/data/constantes";
import { AreaProgram } from "./ProgramPage";

interface ProgramCardsProps {
  programs: AreaProgram[];
  showEmpty?: boolean;
}

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

const COUNTRY_FLAGS: Record<string, string> = {
  "Turquía": "🇹🇷",
  "Canadá": "🇨🇦",
  "Estados Unidos": "🇺🇸",
  "Reino Unido": "🇬🇧",
  "Australia": "🇦🇺",
  "Alemania": "🇩🇪",
  "Francia": "🇫🇷",
  "Irlanda": "🇮🇪",
  "Malta": "🇲🇹",
  "Emiratos Árabes Unidos": "🇦🇪",
  "España": "🇪🇸",
};

const DOMAIN_COLORS: Record<string, string> = {
  "Business": "bg-blue-100 text-blue-800",
  "Engineering": "bg-orange-100 text-orange-800",
  "Medicine": "bg-red-100 text-red-800",
  "Healthcare": "bg-green-100 text-green-800",
  "Law": "bg-purple-100 text-purple-800",
  "Architecture": "bg-yellow-100 text-yellow-800",
  "Computer": "bg-cyan-100 text-cyan-800",
  "Psychology": "bg-pink-100 text-pink-800",
  "default": "bg-gray-100 text-gray-700",
};

function getDomainColor(domain: string): string {
  const d = domain.toLowerCase();
  if (d.includes("business") || d.includes("management") || d.includes("finance")) return DOMAIN_COLORS["Business"];
  if (d.includes("engineering") || d.includes("mechatr") || d.includes("electrical")) return DOMAIN_COLORS["Engineering"];
  if (d.includes("medicine") || d.includes("medical") || d.includes("dentistry") || d.includes("pharmacy") || d.includes("nursing")) return DOMAIN_COLORS["Medicine"];
  if (d.includes("health") || d.includes("physiotherapy") || d.includes("nutrition") || d.includes("rehab")) return DOMAIN_COLORS["Healthcare"];
  if (d.includes("law") || d.includes("legal") || d.includes("justice")) return DOMAIN_COLORS["Law"];
  if (d.includes("architect") || d.includes("interior") || d.includes("design")) return DOMAIN_COLORS["Architecture"];
  if (d.includes("computer") || d.includes("software") || d.includes("data") || d.includes("it/") || d.includes("game") || d.includes("ai") || d.includes("cyber")) return DOMAIN_COLORS["Computer"];
  if (d.includes("psych")) return DOMAIN_COLORS["Psychology"];
  return DOMAIN_COLORS["default"];
}

function RequirementsSection({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const items = text
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="mt-4 border-t border-gray-100 pt-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-sm font-medium text-[#5F338B] hover:text-[#4b2870] transition-colors"
        aria-expanded={open}
      >
        <span className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}>▶</span>
        Requisitos de admisión
      </button>
      {open && (
        <ul className="mt-2 space-y-1 pl-4">
          {items.map((item, i) => (
            <li key={i} className="text-sm text-gray-600 flex gap-2 items-start">
              <span className="text-[#EDA74C] mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const ProgramCardsPorArea: React.FC<ProgramCardsProps> = ({
  programs,
  showEmpty = false,
}) => {
  if (programs.length === 0 && !showEmpty) return null;

  return (
    <div className="flex flex-col gap-6 px-4 py-6 max-w-[1200px] mx-auto">
      {programs.map((program) => {
        const flag = COUNTRY_FLAGS[program.pais] ?? "";
        const domainColor = getDomainColor(program.area || "");
        const hasCost = program.costo && program.costo !== "";
        const hasLink = program.link && program.link !== "";
        const hasNotas = program.notas && program.notas !== "" && program.notas !== "N/A";

        return (
          <div
            key={program.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100"
          >
            {/* Header strip */}
            <div className="bg-gradient-to-r from-[#5F338B] to-[#7b4bab] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-white text-lg md:text-xl font-semibold leading-snug">
                {formatCase(program.nombre)}
              </h3>
              {program.area && (
                <span className={`shrink-0 self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full ${domainColor}`}>
                  {program.area}
                </span>
              )}
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {/* University + location row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-gray-700">
                {program.institucion && (
                  <span className="font-semibold text-base">{program.institucion}</span>
                )}
                {(program.pais || program.ciudad) && (
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    {flag && <span>{flag}</span>}
                    {[program.ciudad, program.pais].filter(Boolean).join(", ")}
                  </span>
                )}
              </div>

              {/* Key info grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-2">
                {hasCost && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs text-amber-600 font-medium uppercase tracking-wide mb-0.5">Costo / año</p>
                    <p className="text-lg font-bold text-amber-700">
                      {program.costo}
                      <span className="text-sm font-normal ml-1">{program.moneda}</span>
                    </p>
                    {program.costoUSD && program.moneda !== "USD" && (
                      <p className="text-xs text-amber-500 mt-0.5">≈ {Number(program.costoUSD).toLocaleString()} USD</p>
                    )}
                  </div>
                )}

                {program.duracion && (
                  <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs text-purple-600 font-medium uppercase tracking-wide mb-0.5">Duración</p>
                    <p className="text-base font-semibold text-purple-800">{program.duracion}</p>
                  </div>
                )}

                {program.fechas && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-0.5">Inicio</p>
                    <p className="text-base font-semibold text-blue-800">{program.fechas}</p>
                  </div>
                )}

                {program.especializacion && program.especializacion !== "N/A" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs text-green-600 font-medium uppercase tracking-wide mb-0.5">Especialización</p>
                    <p className="text-sm font-semibold text-green-800">{program.especializacion}</p>
                  </div>
                )}

                {program.profesiones && program.profesiones !== "N/A" && (
                  <div className="bg-teal-50 border border-teal-200 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs text-teal-600 font-medium uppercase tracking-wide mb-0.5">Profesiones</p>
                    <p className="text-sm font-semibold text-teal-800">{program.profesiones}</p>
                  </div>
                )}

                {program.nivelCredencial && (
                  <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Nivel</p>
                    <p className="text-sm font-semibold text-gray-700">{program.nivelCredencial}</p>
                  </div>
                )}
              </div>

              {/* Requirements (collapsible) */}
              {hasNotas && <RequirementsSection text={program.notas!} />}

              {/* Link */}
              {hasLink && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#5F338B] hover:text-[#4b2870] transition-colors"
                  >
                    <span>Ver programa en institución</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramCardsPorArea;
