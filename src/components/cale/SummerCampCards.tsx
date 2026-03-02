"use client";
import React from "react";
// Asegúrate de que esta ruta sea correcta según donde guardaste tu archivo de datos
import { programTypes, campDestinations } from "@src/data/summerCampsData"; 
import Link from "next/link";

const SummerCampCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 px-4 py-16 max-w-[1200px] mx-auto">
      
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a2b4c] mb-6 tracking-tight">
            TIPOS DE PROGRAMAS
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No todos los estudiantes buscan la misma experiencia, te ayudamos a encontrar la ideal para ti o para tu familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programTypes.map((programa) => (
            <div
              key={programa.id}
              className="group bg-white rounded-[24px] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full overflow-hidden border border-gray-100"
            >

              <div className="w-full h-56 relative bg-gray-200 overflow-hidden">
                <img 
                  src={programa.image} 
                  alt={programa.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
               
                <div className="absolute inset-0 bg-[#1a2b4c]/20 transition-colors duration-500 group-hover:bg-transparent" />
            
                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#FA5939]"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <h3 className="text-2xl font-bold text-center mb-4 text-[#1a2b4c] group-hover:text-[#FA5939] transition-colors duration-300">
                  {programa.title}
                </h3>
                <p className="text-base text-gray-600 mb-6 flex-grow leading-relaxed">
                  {programa.description}
                </p>
                {programa.ages && (
                  <div className="inline-block bg-gray-50 border border-gray-200 text-[#1a2b4c] px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit mx-auto shadow-sm">
                    Edades: <span className="font-normal text-gray-700">{programa.ages}</span>
                  </div>
                )}
                <Link 
                  href="/contact" 
                  className="mt-auto border-2 border-[#FA5939] text-[#FA5939] text-center py-3 px-6 rounded-xl font-bold hover:bg-[#FA5939] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Contáctanos para cotizar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section>
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a2b4c] mb-6 tracking-tight">
            ELIGE TU DESTINO
          </h2>
          <div className="w-24 h-1 bg-[#FA5939] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-16">
          {campDestinations.map((destino, index) => {

            const isEven = index % 2 === 0;

            return (
              <div
                key={destino.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 bg-white rounded-[32px] shadow-xl border border-gray-100 p-6 md:p-10 hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative group`}
              >

                <div className={`absolute top-0 ${isEven ? 'right-0 rounded-bl-full' : 'left-0 rounded-br-full'} w-40 h-40 bg-[#FA5939] opacity-[0.03] -z-10 transition-transform duration-700 group-hover:scale-150`}></div>


                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-20 h-14 flex-shrink-0 rounded-md shadow-md overflow-hidden border border-gray-200">
                      <img 
                        src={destino.flagImage} 
                        alt={`Bandera de ${destino.country}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#1a2b4c] tracking-tight">
                      {destino.country}
                    </h3>
                  </div>
                  
                  <h4 className="text-xl md:text-2xl font-semibold text-[#FA5939] mb-4">
                    {destino.subtitle}
                  </h4>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {destino.description}
                  </p>
                  
                  <div className="mt-auto hidden lg:block">
                    <Link 
                      href="/contact" 
                      className="inline-block bg-[#1a2b4c] text-white py-4 px-10 rounded-xl font-bold hover:bg-[#FA5939] hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Solicitar información
                    </Link>
                  </div>
                </div>

                <div className="flex-[1.2] w-full bg-gray-50/80 p-6 md:p-8 rounded-[24px] border border-gray-200">
                  <h5 className="text-2xl font-bold mb-6 text-[#1a2b4c] flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FA5939]/10 text-[#FA5939] text-lg">✓</span> 
                    ¿Qué incluye el programa?
                  </h5>
                  <div className="space-y-4">
                    {destino.includes.map((item, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
                        <strong className="text-[#1a2b4c] block mb-2 text-lg">{item.title}</strong>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 lg:hidden block text-center">
                  <Link 
                    href="/contact" 
                    className="inline-block w-full bg-[#1a2b4c] text-white py-4 px-8 rounded-xl font-bold hover:bg-[#FA5939] transition-colors duration-300 shadow-md"
                  >
                    Solicitar información
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default SummerCampCards;