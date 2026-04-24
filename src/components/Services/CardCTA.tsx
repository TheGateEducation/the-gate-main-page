// src/components/Services/CardCTA.tsx

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  imageUrl: string | StaticImageData;
  linkTo?: string;
  className?: string;
};

const CardCTA: React.FC<Props> = ({
  title,
  subtitle,
  buttonLabel,
  imageUrl,
  linkTo = "#",
  className = "",
}) => {
  return (
    // Contenedor principal de la tarjeta
    <div
      className={[
        "flex flex-col md:grid md:grid-cols-[325px,1fr]",
        "bg-white w-full max-w-5xl mx-auto",
        "rounded-[2rem] border border-gray-100",
        "shadow-lg hover:shadow-2xl hover:shadow-[#5F338B]/10 overflow-hidden",
        "transition-all duration-300 hover:-translate-y-1 hover:border-[#5F338B]/20",
        className,
      ].join(" ")}
    >
      {/* Columna de la Imagen */}
      <div className="relative w-full h-52 md:h-auto"> {/* Altura fija en móvil, auto en desktop */}
        <Image
          src={imageUrl}
          alt={`Imagen para ${title}`}
          fill
          className="object-cover" // La imagen cubre el contenedor sin deformarse
          sizes="(max-width: 768px) 100vw, 325px"
        />
      </div>

      {/* Columna de Contenido */}
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 gap-6">
        {/* Sección de Texto */}
        <div className="flex flex-col gap-2">
          <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-black leading-tight">
            {title}
          </h3>
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-gray-800 leading-snug">
            {subtitle}
          </p>
        </div>

        {/* Sección del Botón */}
        <div>
          <Link
            href={linkTo}
            className="inline-flex items-center justify-center self-start bg-[#5F338B] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full hover:bg-[#4b2870] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCTA;