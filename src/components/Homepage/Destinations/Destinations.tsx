"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapPin } from "lucide-react";
import { destinations } from "@src/data/destinations";
import { useReveal } from "@src/hooks/useReveal";

const Destinations: React.FC = () => {
  const revealRef = useReveal();

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
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] reveal fade-up delay-${Math.min(i % 4, 5)}`}
              style={{ animationDuration: "600ms" }}
            >
              {/* Flag image background */}
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src={dest.flagImage}
                  alt={`Bandera de ${dest.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/80 group-hover:via-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{dest.flag}</span>
                  <h3 className="text-white font-bold text-base md:text-lg">{dest.name}</h3>
                </div>
                <p className="text-white/70 text-xs md:text-sm font-medium">
                  {dest.programs} programas
                </p>
                {/* Description on hover */}
                <p className="text-white/80 text-xs mt-2 leading-relaxed max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-20">
                  {dest.description}
                </p>
              </div>

              {/* Hover accent border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#EDA74C]/50" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
