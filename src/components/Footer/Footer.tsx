"use client";
import Link from "next/link";
import Logo from "@src/components/Navbar/components/Logo";
import { useEffect, useRef } from "react";

const social = [
  { label: "Instagram", href: "https://www.instagram.com/tge.studyabroad/" },
  { label: "Facebook", href: "https://www.facebook.com/TheGateEducation/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/thegate-education/" },
  { label: "Whatsapp", href: "https://wa.me/528443510141" },
];

const menu = [
  { label: "Servicios", href: "/services" },
  { label: "Programas", href: "/programs" },
  { label: "Contacto", href: "/contact" },
];

const offices = [
  { label: "Saltillo", href: "https://maps.app.goo.gl/H1LVJ4Udd6DScQUj8" },
  { label: "Estado de México", href: "https://maps.google.com/?q=Comonfort+3,+Atizapan+Centro,+CP+52900,+Atizapán+de+Zaragoza,+Estado+de+México" },
];

export const Footer = () => {
  const badgeRef = useRef<HTMLSpanElement>(null);

  /* ICEF badge re-initializer. The script at iasbadgeid.js only runs once per
     page load; on Next.js client navigation we need to force it to re-inject
     the badge every time Footer mounts. */
  useEffect(() => {
    if (badgeRef.current) badgeRef.current.innerHTML = "";
    const prev = document.getElementById("icef-badge-script");
    if (prev) prev.remove();
    const script = document.createElement("script");
    script.id = "icef-badge-script";
    /* Cache-bust so the browser re-executes the IIFE on every mount. */
    script.src = `https://www-cdn.icef.com/scripts/iasbadgeid.js?v=${Date.now()}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
  <footer className="w-full border-t border-gray-200 bg-white text-sm text-gray-700">
    <div className="mx-auto max-w-7xl px-6 lg:px-16">
      {/* SECCIÓN SUPERIOR CON LOGO Y ENLACES */}
      <div
        className="
          flex flex-col lg:flex-row lg:items-start
          gap-12 lg:gap-[120px]
          py-20
        "
      >
        <div className="flex-1 max-w-[460px] space-y-4">
          <Logo width={200} height={300} />
          <p className="text-gray-800">
            ¡Donde hay una puerta abierta, hay un mundo por descubrir!
          </p>
        </div>

        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-12
            text-gray-600
          "
        >
          {/* ... (Las columnas de enlaces no cambian) ... */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Redes Sociales</h4>
            <ul className="space-y-2">
              {social.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5F338B] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">¿Qué ofrecemos?</h4>
            <ul className="space-y-2">
              {menu.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#5F338B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Oficinas</h4>
            <ul className="space-y-2">
              {offices.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#5F338B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR PARA ACREDITACIÓN Y COPYRIGHT */}
      <div className="flex flex-col items-center gap-8 border-t border-gray-200 py-10 text-center">
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Socio Acreditado</h4>
          <span ref={badgeRef} id="iasBadge" data-account-id="6694"></span>
        </div>
        <p>
          © 2025{" "}
          <Link href="/" className="text-[#EDA74C] hover:underline">
            The Gate Education
          </Link>
          . Todos los derechos reservados.{" "}
          
          <Link href="/aviso-de-privacidad" className="hover:text-[#5F338B] transition-colors">
            Aviso de Privacidad
          </Link>
        </p>
      </div>
    </div>
  </footer>
  );
};