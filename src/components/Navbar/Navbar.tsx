"use client";
import { useState } from "react";
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
import { buttonVariants } from "./components/button";
import { ModeToggle } from "./components/mode-toggle";
import Logo from "./components/Logo";

const navbarData = {
  brand: { name: "The Gate Education", href: "/" },
  routes: [
    { label: "Programas", href: "/programs" },
    { label: "Servicios", href: "/services" },
    { label: "Alianzas", href: "/alianzas" },
    { label: "Contacto", href: "/contact" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { brand, routes } = navbarData;

  return (
    <header className="w-full bg-transparent">
      {/* 1. Añadimos 'relative' para que sea el contenedor del menú absoluto */}
      <div
        className="relative flex items-center justify-between w-full
                   h-[143px] px-4 sm:px-6 lg:px-8"
      >
        {/* === LADO IZQUIERDO === */}
        <Link href={brand.href} aria-label={brand.name}>
          <Logo className="w-[158px] h-auto" />
        </Link>

        {/* === CENTRO (POSICIONADO ABSOLUTAMENTE) === */}
        {/* 2. Este div ahora se centra perfectamente en la página */}
        <div
          className="hidden lg:flex absolute top-1/2 left-1/2 
                     -translate-x-1/2 -translate-y-1/2 
                     items-center bg-white backdrop-blur-sm
                     rounded-[30px] px-8 py-[13px] h-[60px]
                     shadow-pill"
        >
          <ul className="flex gap-x-12">
            {routes.map(({ href, label }) => {
              const active = pathname.startsWith(href);
              return (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => {
                      if (active) {
                        window.dispatchEvent(new CustomEvent("reset-programs"));
                      }
                    }}
                    className={`
                      font-semibold text-[18px] underline transition whitespace-nowrap
                      ${
                        active
                          ? "text-[#EDA74C] decoration-[#EDA74C]"
                          : "text-black decoration-transparent hover:decoration-current"
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* === LADO DERECHO === */}
        <Link
          href="https://calendly.com/thegateeducation/30min"
          className="hidden lg:flex items-center justify-center
                     bg-[#EDA74C] text-white font-semibold whitespace-nowrap
                     w-[168px] h-[60px] rounded-[30px]
                     hover:bg-[#d38f36] transition-shadow"
        >
          Agenda Ahora
        </Link>

        {/* === MENÚ MÓVIL === */}
        <div className="lg:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left">
              {/* ... (el contenido del menú móvil no cambia) ... */}
              <SheetHeader>
                <SheetTitle className="font-bold text-xl">{brand.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
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
                    className={buttonVariants({
                      variant: pathname.startsWith(href) ? "secondary" : "ghost",
                    })}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="https://calendly.com/thegateeducation/30min"
                  onClick={() => setOpen(false)}
                  className="bg-[#EDA74C] text-white px-4 py-2 rounded-[30px] mt-2 text-center"
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