"use client";
import React, { useState } from "react";
import { programTypes, campDestinations, Destination } from "@src/data/summerCampsData";
import Link from "next/link";
import Image from "next/image";

const getBackgroundImage = (country: string) => {
  const images: { [key: string]: string } = {
    "Canadá": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop",
    "Reino Unido": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    "Alemania": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
    "Emiratos Árabes Unidos (Dubái)": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    "Francia": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    "Irlanda": "https://images.unsplash.com/photo-1590089356469-76302407a523?q=80&w=2070&auto=format&fit=crop",
    "Malta": "https://images.unsplash.com/photo-1556388275-bb5585725805?q=80&w=1974&auto=format&fit=crop",
    "Estados Unidos": "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?q=80&w=2128&auto=format&fit=crop",
    "España": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop",
    "Italia": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2133&auto=format&fit=crop",
    "Australia": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop",
    "Brasil": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
  };
  return images[country] || "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2074&auto=format&fit=crop";
};

const SummerCampCards: React.FC = () => {
  const [destinoAbierto, setDestinoAbierto] = useState<string | null>(null);

  const toggleDestino = (id: string) => {
    setDestinoAbierto(destinoAbierto === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-32 pb-24">
      
      <section id="tipos-de-programas" className="px-4 max-w-[1200px] mx-auto pt-16">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-full bg-gradient-to-r from-transparent via-gray-100/50 to-transparent -z-10 blur-3xl pointer-events-none"></div>
          
          <span className="text-[#FA5939] font-bold tracking-wider uppercase mb-4 block text-sm">Descubre tu camino ideal</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a2b4c] mb-8 tracking-tight leading-tight">
            Tipos de Programas
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#FA5939] to-orange-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            No todos los estudiantes buscan la misma experiencia. Hemos diseñado diferentes caminos para que encuentres el que mejor se adapte a tus objetivos y personalidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {programTypes.map((programa) => (
            <div
              key={programa.id}
              className="group relative bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-[#1a2b4c]/20 transition-all duration-500 flex flex-col h-full overflow-visible border border-gray-100 hover:border-[#FA5939]/30 hover:-translate-y-3"
            >
              <div className="w-[90%] mx-auto h-64 relative -mt-8 rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4c]/70 via-transparent to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <img
                  src={programa.image}
                  alt={programa.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 transform origin-center"
                />

                {programa.ages && (
                   <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md text-[#1a2b4c] pl-3 pr-4 py-2 rounded-full text-sm font-bold shadow-sm flex items-center gap-2 border border-white/50">
                     <span className="text-lg">👥</span> {programa.ages}
                   </div>
                )}
                 <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FA5939] to-orange-400 z-20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="p-8 pt-12 flex flex-col flex-grow relative bg-white rounded-b-[2.5rem] z-0">
                
                <h3 className="text-2xl font-bold text-[#1a2b4c] mb-5 leading-tight group-hover:text-[#FA5939] transition-colors duration-300">
                  {programa.title}
                </h3>

                <p className="text-lg text-gray-600 mb-10 flex-grow leading-relaxed lg:line-clamp-4 lg:group-hover:line-clamp-none transition-all duration-500 ease-in-out relative z-10">
                  {programa.description}
                  <span className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent lg:group-hover:hidden transition-opacity duration-300"></span>
                </p>

                <Link
                  href="/contact"
                  className="mt-auto w-full text-center bg-[#1a2b4c] text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-[#FA5939] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#FA5939]/30 flex items-center justify-center gap-3 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10">Cotizar ahora</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-300 group-hover/btn:translate-x-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover/btn:scale-100 group-hover/btn:bg-white/10"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>

      <section id="elige-tu-destino" className="px-4">
        <div className="text-center mb-20 max-w-[1200px] mx-auto">
             <span className="text-[#FA5939] font-bold tracking-wider uppercase mb-4 block text-sm">El mundo te espera</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a2b4c] mb-8 tracking-tight leading-tight">
            Elige tu Destino
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#FA5939] to-orange-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Desde ciudades cosmopolitas hasta paisajes naturales impresionantes. Hemos seleccionado los mejores escenarios para tu aventura internacional.
          </p>
        </div>


        <div className="flex flex-col gap-20 max-w-[1400px] mx-auto">
          {campDestinations.map((destino, index) => {
            const isOpen = destinoAbierto === destino.id;
            const bgImage = getBackgroundImage(destino.country);

            return (
              <div
                key={destino.id}
                className="relative rounded-[3rem] shadow-2xl overflow-hidden group lg:min-h-[600px] flex items-stretch border-4 border-white ring-1 ring-gray-100 transform transition-all duration-500 hover:scale-[1.01]"
              >
           
                <div className="absolute inset-0 z-0">
                  <img
                    src={bgImage}
                    alt={`Paisaje representativo de ${destino.country}`}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 scale-105 filter saturate-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/60 to-transparent lg:via-[#0f172a]/40 lg:to-transparent mix-blend-multiply"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90 lg:hidden"></div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 gap-10 lg:gap-20 items-center lg:items-stretch">

                  <div className="flex-1 text-white flex flex-col justify-center text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-6 mb-8">
                      <div className="w-24 h-16 rounded-2xl shadow-2xl overflow-hidden border-[3px] border-white/30 transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                        <img
                          src={destino.flagImage}
                          alt={`Bandera de ${destino.country}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-300 leading-none drop-shadow-sm">
                        {destino.country}
                      </h3>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold text-[#FA5939] mb-8 leading-tight">
                      {destino.subtitle}
                    </h4>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-medium max-w-2xl drop-shadow-sm">
                      {destino.description}
                    </p>

                    <div className="mt-auto flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full lg:w-auto">
                      <Link
                        href="/contact"
                        className="bg-gradient-to-r from-[#FA5939] to-orange-500 text-white py-5 px-12 rounded-full font-bold text-xl hover:to-[#FA5939] hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-[#FA5939]/30 flex items-center justify-center gap-3 group/btn"
                      >
                        Solicitar información
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <button
                        onClick={() => toggleDestino(destino.id)}
                        className="lg:hidden bg-white/10 backdrop-blur-lg text-white py-5 px-10 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 hover:border-white/40"
                      >
                        {isOpen ? 'Ocultar detalles' : 'Ver qué incluye'}
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>


                  <div
                    className={`flex-[0.9] w-full lg:w-auto bg-white/10 backdrop-blur-[20px] saturate-[1.8] rounded-[2.5rem] border-2 border-white/10 p-8 lg:p-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl relative overflow-hidden
                      ${isOpen ? 'max-h-[1500px] opacity-100 scale-100 mt-10 lg:mt-0' : 'max-h-0 opacity-0 scale-95 p-0 m-0 border-none lg:max-h-none lg:opacity-100 lg:scale-100 lg:p-10 lg:border-2 lg:mt-0'}
                       lg:flex flex-col justify-center group/card
                    `}
                  >

                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <h5 className="text-3xl font-bold mb-10 text-white flex items-center gap-4 relative z-10">
                      <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FA5939] text-white text-2xl shadow-lg shadow-[#FA5939]/20">✓</span>
                      ¿Qué incluye?
                    </h5>
                    
                    <div className="space-y-8 relative z-10">
                      {destino.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-5 group/item pl-2">
                          <div className="w-4 h-4 bg-[#FA5939] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-[#FA5939]/50 transition-all duration-300"></div>
                          <div>
                            <strong className="text-white block text-2xl mb-3 font-bold tracking-tight">{item.title}</strong>
                            <p className="text-white/80 text-lg leading-relaxed font-medium">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

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