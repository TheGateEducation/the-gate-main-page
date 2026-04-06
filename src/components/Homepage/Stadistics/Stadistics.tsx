"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
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

function useCountUp(end: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, end, duration]);

  return value;
}

function StatNumber({ end, prefix = "", suffix = "", startCounting }: {
  end: number; prefix?: string; suffix?: string; startCounting: boolean;
}) {
  const value = useCountUp(end, 2.5, startCounting);
  return <>{prefix}{value.toLocaleString()}{suffix}</>;
}

const Statistics: React.FC = () => {
  const containerRef = useReveal();
  const gridRef = useRef<HTMLDivElement>(null);
  const [startCounting, setStartCounting] = useState(false);

  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0]?.isIntersecting) {
      setStartCounting(true);
    }
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [onIntersect]);

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
      <div ref={gridRef} className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-5">
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
              <StatNumber end={end} prefix={prefix} suffix={suffix} startCounting={startCounting} />
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
