"use client";
import React, { useState } from "react";
import { exepcionesMayuscula } from "@src/data/constantes";
import { AreaProgram } from "./ProgramPage";

interface ProgramCardsProps {
  programs: AreaProgram[];
  showEmpty?: boolean;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
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

const COUNTRY_FLAGS: Record<string, string> = {
  "Turquía": "🇹🇷",
  "Canadá": "🇨🇦",
  "Canada": "🇨🇦",
  "Estados Unidos": "🇺🇸",
  "Reino Unido": "🇬🇧",
  "Australia": "🇦🇺",
  "Alemania": "🇩🇪",
  "Francia": "🇫🇷",
  "Irlanda": "🇮🇪",
  "Malta": "🇲🇹",
  "Emiratos Árabes Unidos": "🇦🇪",
  "España": "🇪🇸",
  "Italia": "🇮🇹",
  "Brasil": "🇧🇷",
  "Suiza": "🇨🇭",
  "Suecia": "🇸🇪",
  "Nueva zelanda": "🇳🇿",
  "Nueva Zelanda": "🇳🇿",
  "México": "🇲🇽",
  "Japón": "🇯🇵",
  "China": "🇨🇳",
  "Países Bajos": "🇳🇱",
};

const domainColor = (domain: string): string => {
  const d = domain.toLowerCase();
  if (d.includes("business") || d.includes("management") || d.includes("administration"))
    return "bg-blue-100 text-blue-700";
  if (d.includes("engineer") || d.includes("mechatro") || d.includes("electrical") || d.includes("civil"))
    return "bg-orange-100 text-orange-700";
  if (d.includes("medicine") || d.includes("medical") || d.includes("dentistry") || d.includes("pharmacy"))
    return "bg-red-100 text-red-700";
  if (d.includes("health") || d.includes("nursing") || d.includes("physioth") || d.includes("nutrition"))
    return "bg-green-100 text-green-700";
  if (d.includes("law") || d.includes("legal"))
    return "bg-purple-100 text-purple-700";
  if (d.includes("architect") || d.includes("interior") || d.includes("design"))
    return "bg-yellow-100 text-yellow-700";
  if (d.includes("computer") || d.includes("software") || d.includes("data") || d.includes("game") || d.includes("cyber"))
    return "bg-cyan-100 text-cyan-700";
  if (d.includes("psych"))
    return "bg-pink-100 text-pink-700";
  if (d.includes("finance") || d.includes("banking") || d.includes("fintech") || d.includes("economics"))
    return "bg-emerald-100 text-emerald-700";
  if (d.includes("media") || d.includes("communication") || d.includes("film") || d.includes("television"))
    return "bg-violet-100 text-violet-700";
  return "bg-gray-100 text-gray-600";
};

// ─── Requirements accordion ───────────────────────────────────────────────────
function Requirements({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const items = text.split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="mt-2 pt-2 border-t border-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-xs font-medium text-gray-500 hover:text-[#5F338B] transition-colors"
      >
        <span className="flex items-center gap-1">
          <span>📋</span> Requisitos de admisión
        </span>
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5 text-xs text-gray-400 leading-snug">
              <span className="text-[#EDA74C] shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Sub-card (individual program) ───────────────────────────────────────────
function ProgramSubCard({ program }: { program: AreaProgram }) {
  const hasNotas = !!program.notas && program.notas !== "N/A";
  const hasLink = !!program.link;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col gap-2 hover:border-[#5F338B]/30 hover:bg-white transition-all duration-150">
      {/* Name + cost */}
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-gray-800 leading-snug">
          {formatCase(program.nombre)}
        </h4>
        {program.costo && (
          <span className="shrink-0 bg-[#5F338B] text-white text-xs font-bold px-2.5 py-1 rounded-lg whitespace-nowrap">
            {program.costo} <span className="font-normal opacity-80">{program.moneda}/año</span>
          </span>
        )}
      </div>

      {/* Domain pill */}
      {program.area && (
        <span className={`self-start text-xs font-medium px-2 py-0.5 rounded-full ${domainColor(program.area)}`}>
          {program.area}
        </span>
      )}

      {/* Meta chips */}
      <div className="flex flex-wrap gap-1.5 text-xs text-gray-500">
        {program.duracion && (
          <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-lg">
            🕐 {program.duracion}
          </span>
        )}
        {program.fechas && (
          <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-lg">
            📅 {program.fechas}
          </span>
        )}
        {program.especializacion && program.especializacion !== "N/A" && (
          <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-lg">
            🎯 {program.especializacion}
          </span>
        )}
      </div>

      {/* Requirements */}
      {hasNotas && <Requirements text={program.notas!} />}

      {/* Link */}
      {hasLink && (
        <a
          href={program.link}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start mt-1 text-xs font-semibold text-[#5F338B] hover:text-[#4b2870] transition-colors"
        >
          Ver programa ↗
        </a>
      )}
    </div>
  );
}

// ─── University group card ────────────────────────────────────────────────────
function UniversityGroup({ institucion, programs }: { institucion: string; programs: AreaProgram[] }) {
  const [expanded, setExpanded] = useState(false);
  const sample = programs[0];
  const flag = COUNTRY_FLAGS[sample?.pais ?? ""] ?? "";
  const location = [sample?.ciudad, sample?.pais].filter(Boolean).join(", ");

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* University header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Logo placeholder — purple circle with initial */}
          <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#5F338B] to-[#9b5de5] flex items-center justify-center text-white font-bold text-base select-none">
            {institucion.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-gray-900 leading-tight truncate">{institucion}</h3>
            {location && (
              <p className="text-xs text-gray-400 mt-0.5">
                {flag} {location}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="bg-[#5F338B]/10 text-[#5F338B] text-xs font-semibold px-2.5 py-1 rounded-full">
            {programs.length} {programs.length === 1 ? "carrera" : "carreras"}
          </span>
          <span className={`text-gray-400 text-sm transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
            ▾
          </span>
        </div>
      </button>

      {/* Programs grid */}
      {expanded && (
        <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-3 border-t border-gray-100 pt-3">
          {programs.map((p, i) => (
            <ProgramSubCard key={`${p.id}-${i}`} program={p} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
const ProgramCardsPorArea: React.FC<ProgramCardsProps> = ({ programs, showEmpty = false }) => {
  if (programs.length === 0 && !showEmpty) return null;

  // Group by institution preserving order of first appearance
  const groups = programs.reduce<{ institucion: string; programs: AreaProgram[] }[]>(
    (acc, program) => {
      const existing = acc.find((g) => g.institucion === program.institucion);
      if (existing) {
        existing.programs.push(program);
      } else {
        acc.push({ institucion: program.institucion, programs: [program] });
      }
      return acc;
    },
    [],
  );

  return (
    <div className="px-2 py-4 max-w-[1100px] mx-auto flex flex-col gap-5">
      {groups.map((group) => (
        <UniversityGroup
          key={group.institucion}
          institucion={group.institucion}
          programs={group.programs}
        />
      ))}
    </div>
  );
};

export default ProgramCardsPorArea;
