"use client";
import React from "react";
import { programTypes, campDestinations } from "@src/data/summerCampsData";
import Link from "next/link";

const SummerCampCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 px-4 py-12 max-w-[1200px] mx-auto">
      
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-4">
            TIPOS DE PROGRAMAS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No todos los estudiantes buscan la misma experiencia, te ayudamos a encontrar la ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programTypes.map((program) => (
            <div
              key={program.id}
              className="bg-white border-[5px] border-[#EDA74C] rounded-[16px] shadow-[0px_4px_8px_rgba(0,0,0,0.02),0px_6px_12px_rgba(0,0,0,0.03)] p-6 md:p-8 flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold text-center mb-4 text-[#1a2b4c]">
                {program.title}
              </h3>
              <p className="text-base text-gray-700 mb-4 flex-grow">
                {program.description}
              </p>
              {program.ages && (
                <p className="text-base font-semibold mb-6">
                  Edades: <span className="font-normal">{program.ages}</span>
                </p>
              )}
              <Link 
                href="/contact" 
                className="mt-auto bg-[#EDA74C] text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-[#d9953b] transition-colors"
              >
                Contáctanos para cotizar
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-4">
            ELIGE TU DESTINO
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {campDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white border-[5px] border-[#1a2b4c] rounded-[16px] shadow-[0px_4px_8px_rgba(0,0,0,0.02),0px_6px_12px_rgba(0,0,0,0.03)] p-6 md:p-8"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#1a2b4c] mb-2">
                  {destination.country}
                </h3>
                <h4 className="text-xl font-semibold text-[#EDA74C] mb-4">
                  {destination.subtitle}
                </h4>
                <p className="text-lg text-gray-700">
                  {destination.description}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                <h5 className="text-xl font-bold mb-4 text-[#1a2b4c]">¿Qué incluye el programa?</h5>
                <ul className="space-y-4">
                  {destination.includes.map((item, index) => (
                    <li key={index} className="text-base">
                      <strong className="text-gray-900 block md:inline">• {item.title}: </strong>
                      <span className="text-gray-700">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-left mt-6">
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#1a2b4c] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#2c4069] transition-colors"
                >
                  Solicitar información
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SummerCampCards;