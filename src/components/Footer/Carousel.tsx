"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { logos } from "@src/data/constantes";

const logoPairs = Object.entries(logos);
const allLogos = [...logoPairs, ...logoPairs]; // duplicate for seamless loop

const SPEED = 4; // px per frame (~36 px/s at 60 fps)

export const Carousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const tick = useCallback(() => {
    const el = trackRef.current;
    if (el && !isDragging.current) {
      el.scrollLeft += SPEED;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }
    animRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [tick]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startScroll.current = trackRef.current?.scrollLeft ?? 0;
    trackRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    trackRef.current.scrollLeft = startScroll.current + (startX.current - e.clientX);
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="relative font-inter antialiased bg-white">
      <div className="relative h-auto flex flex-col justify-center overflow-hidden">
        <h2 className="text-[#5F338B] text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-center px-4 pt-12 pb-2">
          Nuestros aliados educativos
        </h2>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] overflow-hidden">
            <div
              ref={trackRef}
              className="flex cursor-grab active:cursor-grabbing select-none"
              style={{ overflow: "hidden", touchAction: "pan-y" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              {allLogos.map(([name, url], i) => (
                <div key={i} className="flex-shrink-0 mx-8 flex items-center">
                  <Image src={url} alt={name} width={170} height={140} draggable={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
