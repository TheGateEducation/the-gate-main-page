"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/sheet";
import Logo from "./components/Logo";

const navbarData = {
  brand: { name: "The Gate Education", href: "/" },
  routes: [
    { label: "Programas", href: "/programs" },
    { label: "Destinos", href: "/destinos" },
    { label: "Servicios", href: "/services" },
    { label: "Alianzas", href: "/alianzas" },
    { label: "Contacto", href: "/contact" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolledRef = useRef(false);
  const headerRef = useRef<HTMLElement>(null);
  const { brand, routes } = navbarData;

  /* Scroll listener — mutates classList directly, zero re-renders */
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const past = window.scrollY > 20;
        if (past !== scrolledRef.current) {
          scrolledRef.current = past;
          header.classList.toggle("bg-white", past);
          header.classList.toggle("shadow-sm", past);
          header.classList.toggle("bg-transparent", !past);
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-[background-color,box-shadow] duration-300"
    >
      <div className="flex items-center justify-between w-full h-[72px] px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Logo — wrapped in a white pill so it stays legible over hero images */}
        <Link
          href={brand.href}
          aria-label={brand.name}
          className="shrink-0 inline-flex items-center bg-white rounded-full px-4 py-1.5 shadow-sm border border-gray-100"
        >
          <Logo className="w-[110px] h-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center bg-white rounded-full px-1.5 py-1 shadow-sm border border-gray-100">
            {routes.map(({ href, label }) => {
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => {
                    if (active) {
                      window.dispatchEvent(new CustomEvent("reset-programs"));
                    }
                  }}
                  className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-colors duration-150 ${
                    active
                      ? "bg-[#EDA74C] text-white"
                      : "text-gray-700 hover:text-[#5F338B] hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* CTA */}
        <Link
          href="https://calendly.com/thegateeducation/30min"
          className="hidden lg:flex items-center justify-center bg-[#5F338B] text-white font-semibold text-sm px-6 h-[42px] rounded-full hover:bg-[#4b2870] transition-colors duration-150"
        >
          Agenda Ahora
        </Link>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2 rounded-lg hover:bg-gray-100/80 transition-colors">
              <Menu className="h-6 w-6 text-gray-700" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="font-bold text-xl">{brand.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2">
                {routes.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => {
                      setOpen(false);
                      if (pathname.startsWith(href)) {
                        window.dispatchEvent(new CustomEvent("reset-programs"));
                      }
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      pathname.startsWith(href)
                        ? "bg-[#EDA74C]/10 text-[#EDA74C] font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="https://calendly.com/thegateeducation/30min"
                  onClick={() => setOpen(false)}
                  className="bg-[#5F338B] text-white px-4 py-3 rounded-xl mt-4 text-center font-semibold"
                >
                  Agenda Ahora
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
