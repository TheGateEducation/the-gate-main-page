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
        "flex flex-col md:grid md:grid-cols-[325px,1fr]", // Stack en móvil, grid en desktop
        "bg-white w-full max-w-5xl mx-auto",             // Centrado y con ancho máximo
        "border-[5px] border-[#6E44AD] rounded-2xl",     // Borde y redondeo como en Figma
        "shadow-lg overflow-hidden",                     // Sombra sutil y overflow para la imagen
        "transition-transform duration-300 hover:scale-[1.02]", // Efecto hover sutil
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
            className="
              inline-block
              bg-[#6E44AD] text-white
              font-semibold text-base sm:text-lg
              px-6 py-3 rounded-xl
              transition hover:bg-purple-800 hover:shadow-md
              transform active:scale-95
            "
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCTA;