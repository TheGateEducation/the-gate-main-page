"use client";

import React from "react";
import CountUp from "react-countup";
import { Globe, Building2, GraduationCap, Award } from "lucide-react";
import { useReveal } from "@src/hooks/useReveal";

type StatItem = {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
  color: string;
};

const statsData: StatItem[] = [
  { prefix: "+", end: 15,   label: "Países",                    icon: <Globe className="w-7 h-7" />,          color: "#EDA74C" },
  { prefix: "+", end: 300,  label: "Instituciones educativas",  icon: <Building2 className="w-7 h-7" />,     color: "#D25C7A" },
  { prefix: "+", end: 1000, label: "Programas",                 icon: <GraduationCap className="w-7 h-7" />, color: "#9747FF" },
  { end: 98, suffix: "%",   label: "Aceptación",                icon: <Award className="w-7 h-7" />,         color: "#5F338B" },
];

const Statistics: React.FC = () => {
  const containerRef = useReveal();

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Section header */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-14">
        <div className="reveal fade-up" style={{ animationDuration: "600ms" }}>
          <span className="inline-block px-4 py-1.5 bg-[#5F338B]/10 text-[#5F338B] text-sm font-semibold rounded-full mb-5">
            Nuestro impacto
          </span>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            Estudiar en el extranjero es{" "}
            <span className="text-gradient">solo el comienzo</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            En The GATE Education, te ayudamos a cruzar esa puerta.
          </p>
        </div>
      </div>

      {/* Stats grid */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {statsData.map(({ end, label, prefix = "", suffix = "", icon, color }, i) => (
          <div
            key={i}
            className={`reveal scale-in delay-${i} group relative bg-gray-50 rounded-3xl p-6 md:p-8 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
            style={{ animationDuration: "500ms" }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full" style={{ backgroundColor: color }} />

            {/* Icon */}
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
              style={{ backgroundColor: `${color}15`, color }}
            >
              {icon}
            </div>

            {/* Number */}
            <div className="font-extrabold text-4xl md:text-5xl text-gray-900 leading-none mb-2">
              <CountUp
                start={0}
                end={end}
                duration={2.5}
                prefix={prefix}
                suffix={suffix}
                enableScrollSpy
                scrollSpyOnce
                scrollSpyDelay={200}
              />
            </div>

            {/* Label */}
            <p className="font-medium text-sm text-gray-500 leading-snug">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
