"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useCallback, useState } from "react";

type BackGroundType = "image" | "gradient" | "none";

interface HeroProps {
  title: string;
  titleType?: "gradient" | "white";
  subtitle?: string;
  subtitleColor?: string;
  imageUrl?: string;
  backgroundType?: BackGroundType;
  className?: string;
  showCTA?: boolean;
  fullHeight?: boolean;
}

import { destinations } from "@src/data/destinations";

/* ── Floating country cards (use first 6 destinations with positions) ────── */
const floatingCards = destinations
  .filter((d) => d.position)
  .slice(0, 6);

/**
 * Hook: tracks the mouse inside a container and applies a magnetic pull
 * to every `[data-magnetic]` child. Pure DOM transforms, zero re-renders.
 */
function useMagnetic(enabled: boolean) {
  const containerRef = useRef<HTMLElement>(null);
  const rafId = useRef(0);
  const mouse = useRef({ x: 0, y: 0, active: false });
  /* Current animated positions per element (for lerp smoothing) */
  const positions = useRef<{ x: number; y: number }[]>([]);

  const tick = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-magnetic]");
    if (cards.length === 0) return;

    /* Ensure positions array matches cards length */
    while (positions.current.length < cards.length) {
      positions.current.push({ x: 0, y: 0 });
    }

    const rect = container.getBoundingClientRect();

    cards.forEach((card, i) => {
      let targetX = 0;
      let targetY = 0;

      if (mouse.current.active) {
        const cardRect = card.getBoundingClientRect();
        const cardCX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardCY = cardRect.top + cardRect.height / 2 - rect.top;
        const dx = mouse.current.x - cardCX;
        const dy = mouse.current.y - cardCY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        /* Magnetic pull: stronger when closer, max ~30px displacement */
        const maxPull = 30;
        const radius = 500; // influence radius in px
        if (dist < radius) {
          const strength = (1 - dist / radius) * maxPull;
          const angle = Math.atan2(dy, dx);
          targetX = Math.cos(angle) * strength;
          targetY = Math.sin(angle) * strength;
        }
      }

      /* Lerp for smooth movement */
      const pos = positions.current[i];
      pos.x += (targetX - pos.x) * 0.08;
      pos.y += (targetY - pos.y) * 0.08;

      card.style.transform = `translate(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px)`;
    });

    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    };
    const onLeave = () => {
      mouse.current.active = false;
    };

    container.addEventListener("mousemove", onMove, { passive: true });
    container.addEventListener("mouseleave", onLeave);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [enabled, tick]);

  return containerRef;
}

/* ── Main Hero ───────────────────────────────────────────────────────────── */
const Hero: React.FC<HeroProps> = ({
  title,
  titleType = "gradient",
  subtitle,
  subtitleColor,
  imageUrl,
  backgroundType = "none",
  className = "",
  showCTA = false,
  fullHeight = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const isHome = fullHeight && backgroundType === "none";
  const magneticRef = useMagnetic(isHome);

  const subColor =
    subtitleColor === "white" || backgroundType === "image"
      ? "text-white/80"
      : subtitleColor === "black"
        ? "text-gray-600"
        : fullHeight
          ? "text-white/70"
          : "text-gray-600";

  return (
    <section
      ref={magneticRef}
      className={`relative flex flex-col items-center justify-center overflow-hidden
        ${fullHeight ? "min-h-screen" : "min-h-[380px] md:min-h-[420px]"}
        ${isHome
          ? "bg-gradient-to-br from-[#5F338B] via-[#7B4BAE] to-[#9747FF]"
          : backgroundType === "gradient"
            ? "bg-gradient-to-br from-[#EDA74C] via-[#D25C7A] to-[#9747FF]"
            : backgroundType === "none"
              ? "bg-white"
              : ""
        }
        pt-[72px] px-6 pb-14
        ${className}
      `}
    >
      {/* ── Background image ──────────────────────────────────────────────── */}
      {backgroundType === "image" && imageUrl && (
        <>
          <Image
            src={imageUrl}
            alt={`Fondo: ${title}`}
            fill
            className="object-cover object-center"
            priority
            quality={80}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* ── Decorative shapes (homepage only) ─────────────────────────────── */}
      {isHome && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#EDA74C]/10" />
          <div className="absolute top-1/3 -left-32 w-[350px] h-[350px] rounded-full bg-white/[0.04]" />
          <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-[#D25C7A]/10" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
      )}

      {/* ── Floating country cards (homepage only) ─────────────────────────── */}
      {isHome &&
        floatingCards.map((c, i) => (
          <div
            key={c.name}
            data-magnetic
            className={`absolute hidden lg:flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl px-3 py-2 xl:px-4 xl:py-3 select-none pointer-events-none transition-opacity duration-700 will-change-transform ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{
              ...c.position,
              transitionDelay: `${400 + i * 150}ms`,
            }}
          >
            <span className="relative block w-8 h-6 xl:w-10 xl:h-7 mb-1 rounded-sm overflow-hidden shadow-sm">
              <Image
                src={c.flagImage}
                alt={`Bandera de ${c.name}`}
                fill
                className="object-cover"
                sizes="40px"
              />
            </span>
            <span className="text-white text-[11px] xl:text-xs font-bold">{c.name}</span>
            <span className="text-white/50 text-[10px] font-medium">{c.programs} programas</span>
          </div>
        ))}

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div
        className={`relative z-10 max-w-[850px] mx-auto text-center flex flex-col items-center gap-5 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {showCTA && (
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-full transition-all duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#EDA74C] animate-pulse" />
            Tu plataforma de educación internacional
          </span>
        )}

        <h1
          className={`font-extrabold leading-[1.1] tracking-tight
            text-[clamp(2rem,5vw,3.75rem)]
            ${isHome || titleType === "white" ? "text-white" : "text-gradient"}
          `}
        >
          {title}
        </h1>

        {subtitle && (
          <p className={`max-w-[620px] text-lg sm:text-xl font-medium leading-relaxed ${subColor}`}>
            {subtitle}
          </p>
        )}

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#EDA74C] text-white font-bold text-base rounded-full hover:bg-[#d99530] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Explorar Programas
            </Link>
            <Link
              href="https://calendly.com/thegateeducation/30min"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/40 text-white font-semibold text-base rounded-full hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Agenda tu Asesoría
            </Link>
          </div>
        )}

        {showCTA && (
          <div className="flex items-center gap-6 sm:gap-10 mt-8">
            {[
              { val: "15+", lab: "Países" },
              { val: "300+", lab: "Instituciones" },
              { val: "98%", lab: "Aceptación" },
            ].map((t, i) => (
              <React.Fragment key={t.lab}>
                {i > 0 && <div className="w-px h-8 bg-white/20" />}
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">{t.val}</div>
                  <div className="text-xs sm:text-sm text-white/50 font-medium">{t.lab}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {fullHeight && (
        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1200ms" }}>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-white/50 scroll-indicator" />
          </div>
        </div>
      )}

      {/* Bottom wave */}
      {isHome && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z" fill="white" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Hero;
