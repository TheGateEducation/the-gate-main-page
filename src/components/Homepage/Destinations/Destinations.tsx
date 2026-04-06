"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapPin } from "lucide-react";
import { destinations } from "@src/data/destinations";
import { useReveal } from "@src/hooks/useReveal";

const Destinations: React.FC = () => {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#9747FF]/[0.03] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#EDA74C]/[0.04] translate-y-1/2 -translate-x-1/2" />

      <div ref={revealRef} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 reveal fade-up" style={{ animationDuration: "700ms" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#9747FF]/10 text-[#662D91] text-sm font-semibold rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            Destinos Disponibles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Explora el mundo con{" "}
            <span className="text-gradient">The Gate</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Descubre los países donde puedes hacer realidad tu sueño de educación internacional.
          </p>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((dest, i) => (
            <Link
              key={dest.name}
              href={dest.href}
              className={`group relative flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 bg-white reveal fade-up delay-${Math.min(i % 4, 5)}`}
              style={{ animationDuration: "600ms" }}
            >
              {/* Flag image — top portion */}
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                <Image
                  src={dest.flagImage}
                  alt={`Bandera de ${dest.name}`}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Info panel — bottom portion */}
              <div className="flex flex-col gap-1 p-3 md:p-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg leading-none">{dest.flag}</span>
                  <h3 className="text-gray-900 font-bold text-sm md:text-base leading-tight">
                    {dest.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-xs font-medium">
                  {dest.programs} programas
                </p>
                {/* Description — slides in on hover */}
                <p className="text-gray-600 text-xs leading-relaxed mt-1 max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-24 group-hover:opacity-100">
                  {dest.description}
                </p>
              </div>

              {/* Accent bottom bar on hover */}
              <div className="h-0.5 w-full bg-transparent transition-colors duration-300 group-hover:bg-[#EDA74C] mt-auto" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
