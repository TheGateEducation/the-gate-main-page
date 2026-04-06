"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@src/hooks/useReveal";

const CTASection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5F338B] via-[#7B4BAE] to-[#9747FF]" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#EDA74C]/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/[0.04] rounded-full translate-y-1/3 -translate-x-1/4" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <div className="reveal fade-up flex flex-col items-center gap-6" style={{ animationDuration: "700ms" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Tu siguiente aventura empieza con{" "}
            <span className="text-[#EDA74C]">una conversación</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-medium max-w-xl">
            Agenda una asesoría gratuita y descubre el programa ideal para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="https://calendly.com/thegateeducation/30min"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#EDA74C] text-white font-bold text-base rounded-full hover:bg-[#d99530] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group"
            >
              Agenda tu Asesoría Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold text-base rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
