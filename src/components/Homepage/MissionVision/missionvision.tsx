"use client";

import React from "react";
import { Target, Eye } from "lucide-react";
import { useReveal } from "@src/hooks/useReveal";

interface CardProps {
  title: string;
  content: string;
  bgColor: string;
  accentColor: string;
  icon: React.ReactNode;
  direction: "fade-left" | "fade-right";
  delay: string;
}

const MissionVisionCard: React.FC<CardProps> = ({
  title,
  content,
  bgColor,
  accentColor,
  icon,
  direction,
  delay,
}) => (
  <div
    className={`reveal ${direction} ${delay}`}
    style={{ animationDuration: "700ms" }}
  >
    <div
      className="relative rounded-3xl p-8 md:p-10 lg:p-12 overflow-hidden hover:shadow-lg transition-shadow duration-300"
      style={{ backgroundColor: bgColor }}
    >
      {/* Accent left bar */}
      <div
        className="absolute top-4 bottom-4 left-0 w-1.5 rounded-r-full"
        style={{ backgroundColor: accentColor }}
      />

      {/* Decorative circle */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
        style={{ backgroundColor: accentColor }}
      />

      {/* Icon + title */}
      <div className="flex items-center gap-4 mb-5 relative z-10">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-xl text-white shrink-0"
          style={{ backgroundColor: accentColor }}
        >
          {icon}
        </div>
        <h3
          className="text-2xl md:text-3xl font-bold"
          style={{ color: accentColor }}
        >
          {title}
        </h3>
      </div>

      {/* Content */}
      <p className="relative z-10 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed pl-0 md:pl-16">
        {content}
      </p>
    </div>
  </div>
);

const MissionVision = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative w-full bg-gray-50 py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="reveal fade-up text-center mb-14" style={{ animationDuration: "600ms" }}>
          <span className="inline-block px-4 py-1.5 bg-[#EDA74C]/10 text-[#EDA74C] text-sm font-semibold rounded-full mb-5">
            Lo que nos mueve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Proposito y direccion
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          <MissionVisionCard
            title="Nuestra Mision"
            content="En The GATE Education creemos que cada sueno merece una oportunidad. Acompanamos a estudiantes a abrir la puerta a una educacion internacional, guiandolos con experiencia y proposito."
            bgColor="#FEF7EC"
            accentColor="#EDA74C"
            icon={<Target className="w-6 h-6" />}
            direction="fade-left"
            delay="delay-1"
          />
          <MissionVisionCard
            title="Nuestra Vision"
            content="Ser la plataforma que conecta e inspira a estudiantes latinoamericanos a transformar su vida a traves de la educacion global, la diversidad y el impacto positivo."
            bgColor="#F3EEFA"
            accentColor="#5F338B"
            icon={<Eye className="w-6 h-6" />}
            direction="fade-right"
            delay="delay-2"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
