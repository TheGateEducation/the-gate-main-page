import React from "react";
import SummerCampCards from "@src/components/cale/SummerCampCards";
import Link from "next/link";

export const metadata = {
  title: "Campamentos y Programas Deportivos | The Gate Education",
  description:
    "Vive un verano inolvidable. Explora campamentos internacionales que combinan aprendizaje, aventura y amistades para toda la vida.",
};

export default function CampamentosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 flex items-center overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Jóvenes disfrutando en un campamento de verano internacional"
            className="w-full h-full object-cover scale-105 filter brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2b4c]/95 via-[#1a2b4c]/80 to-[#FA5939]/60 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/10 hover:border-white/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a categorías
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                Tu mejor verano <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA5939] to-orange-300">
                  empieza aquí.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 leading-relaxed max-w-2xl">
                Más que un campamento: una experiencia internacional que transformará tu futuro. Aprende, explora el mundo y crea recuerdos imborrables.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#tipos-de-programas" 
                  className="bg-[#FA5939] hover:bg-[#e04f32] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-[#FA5939]/40 hover:-translate-y-1 flex items-center gap-2"
                >
                  Ver Programas
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#elige-tu-destino" 
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 border border-white/10 hover:border-white/30"
                >
                  Explorar Destinos
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-500">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-48 h-48 bg-[#FA5939]/30 rounded-full blur-[60px] group-hover:bg-[#FA5939]/40 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 bg-[#1a2b4c]/40 rounded-full blur-[60px] group-hover:bg-[#1a2b4c]/50 transition-all duration-700"></div>

              <h3 className="text-3xl font-bold mb-10 text-white flex items-center gap-4 relative z-10">
                <span className="bg-white/20 p-3 rounded-2xl shadow-inner">🚀</span> 
                Datos Rápidos
              </h3>
              
              <div className="space-y-8 relative z-10">

                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <div>
                    <strong className="text-white block text-xl mb-3 font-bold">Destinos Top</strong>
                    <p className="text-white/80 text-lg leading-relaxed font-medium">
                      Alemania, Canadá, Dubái, EE.UU., Francia, Irlanda, Malta, Reino Unido.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <span className="text-3xl">🗣️</span>
                  </div>
                  <div>
                    <strong className="text-white block text-xl mb-3 font-bold">Idiomas</strong>
                    <div className="flex gap-3 flex-wrap">
                      <span className="bg-white/10 px-3 py-1 rounded-full text-white/90 text-sm font-medium border border-white/10">Inglés</span>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-white/90 text-sm font-medium border border-white/10">Francés</span>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-white/90 text-sm font-medium border border-white/10">Alemán</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">📅</span>
                        <strong className="text-white text-lg">Cuándo ir</strong>
                    </div>
                    <ul className="text-white/70 text-sm space-y-1 font-medium">
                      <li>• Verano (Jun-Ago)</li>
                      <li>• Invierno (Dic-Feb)</li>
                      <li>• Primavera/Otoño</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">👥</span>
                            <strong className="text-white text-lg">Edades</strong>
                        </div>
                        <p className="text-white/80 text-base font-medium">7 a 18 años</p>
                    </div>
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">⏱️</span>
                            <strong className="text-white text-lg">Duración</strong>
                        </div>
                        <p className="text-white/80 text-base font-medium">1 a 8 semanas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[100px] md:h-[180px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      <div className="relative z-10 -mt-20 md:-mt-32 pb-20">
        <SummerCampCards />
      </div>
    </main>
  );
}