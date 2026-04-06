"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import { programCategories } from "@src/data/programCategories";
import { useReveal } from "@src/hooks/useReveal";

const Programs: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section className="relative py-20 md:py-28 bg-[#FCFBF8] overflow-hidden">
      {/* Decorative dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #662D91 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div ref={revealRef} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 reveal fade-up" style={{ animationDuration: "700ms" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EDA74C]/10 text-[#EDA74C] text-sm font-semibold rounded-full mb-4">
            <GraduationCap className="w-4 h-4" />
            Nuestros Programas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Encuentra tu{" "}
            <span className="text-gradient">programa ideal</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Desde maestrías hasta campamentos de verano, tenemos opciones para cada etapa de tu vida.
          </p>
        </div>

        {/* Programs grid — first 3 large, rest smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programCategories.map((prog, i) => (
            <Link
              key={prog.slug}
              href={prog.href}
              className={`group relative rounded-2xl overflow-hidden reveal fade-up delay-${Math.min(i % 3, 5)} ${
                i < 3 ? "aspect-[3/2]" : "aspect-[16/9]"
              }`}
              style={{ animationDuration: "600ms" }}
            >
              {/* Image */}
              <Image
                src={prog.image}
                alt={prog.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition-all duration-300 group-hover:from-black/80 group-hover:via-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <h3 className="text-white font-bold text-xl md:text-2xl mb-1">{prog.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">{prog.description}</p>
                {/* CTA on hover */}
                <div className="flex items-center gap-1.5 mt-3 text-[#EDA74C] font-semibold text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Ver programas <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#EDA74C]/40" />
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10 reveal fade-up" style={{ animationDuration: "600ms" }}>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#662D91] text-white font-bold rounded-full hover:bg-[#5F338B] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Explorar Todos los Programas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
