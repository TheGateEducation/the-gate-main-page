"use client";

import React, { useState } from 'react';

// El SVG del checkmark no cambia
const CheckmarkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-white stroke-[3]" // Estilos del ícono con Tailwind
    style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
  >
    <path d="M20 6L9 17L4 12" />
  </svg>
);

// Las propiedades que recibe el componente siguen siendo las mismas
interface ServiceCardProps {
  id: number; 
  title: string;
  description: string;
  price: string;
  borderColor: string;
  isSelected: boolean;
  onToggle: (id: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, price, borderColor, isSelected, onToggle }) => {

  return (
    // Contenedor principal
    // - Usamos valores arbitrarios para el color del borde: border-[${borderColor}]
    // - Es responsivo: cambia de flex-col a flex-row en pantallas medianas (md)
    <div
      className={`
        flex w-full flex-col justify-between gap-5 rounded-2xl border-4 
        bg-white p-6 transition-shadow duration-300 ease-in-out hover:shadow-lg 
        md:flex-row md:gap-8 md:p-8
      `}
      style={{ borderColor: borderColor }}
    >
      {/* Sección de contenido: Título y Descripción */}
      <div className="flex flex-1 flex-col gap-2.5">
        <h2 className="font-poppins text-2xl font-semibold leading-tight text-black md:text-3xl">
          {title}
        </h2>
        <p className="font-poppins text-base font-medium leading-relaxed text-black/85">
          {description}
        </p>
      </div>

      {/* Sección de acciones: Checkbox y Precio */}
      <div className="mt-4 flex flex-row-reverse items-center justify-between md:mt-0 md:flex-col md:items-end">
        
        {/* Checkbox funcional */}
        <button
          onClick={() => onToggle(id)}
          className={`
            flex h-10 w-10 cursor-pointer items-center justify-center 
            rounded-lg border-[3px] transition-colors
          `}
          style={{
            borderColor: borderColor,
            backgroundColor: isSelected ? borderColor : 'white', // El fondo cambia dinámicamente
          }}
          aria-label={`Seleccionar ${title}`}
        >
          {isSelected && <CheckmarkIcon />}
        </button>

        {/* Contenedor del precio */}
        <div
          className="rounded-xl border-[3px] bg-white px-4 py-2 text-center"
          style={{ borderColor: borderColor }}
        >
          <span className="font-inter text-lg font-semibold text-black md:text-xl">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;