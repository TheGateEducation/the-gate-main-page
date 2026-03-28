"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches a single IntersectionObserver to all `.reveal` elements
 * inside the given container. When an element enters the viewport
 * the class `visible` is added, triggering a pure-CSS animation.
 *
 * Zero re-renders. Zero layout thrash. GPU-composited transforms only.
 */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll(".reveal");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
