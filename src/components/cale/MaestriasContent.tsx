"use client";

import React, { useState, useMemo } from "react";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import Link from "next/link";
import { endPointMap, exepcionesMayuscula } from "@src/data/constantes";

const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; }
  return Math.abs(h);
};

export interface AreaProgram {
  id: number;
  nombre: string;
  area: string;
  pais: string;
  ciudad: string;
  institucion: string;
  link: string;
  duracion: string;
  costo: string;
  moneda: string;
  fechas: string;
  notas?: string;
  especializacion?: string;
  profesiones?: string;
  costoUSD?: string;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
];

const getFlagImage = (country: string) => {
  if (!country) return "/images/idiomas.png";
  const norm = country.toLowerCase().trim();

  if (norm.includes("canada") || norm.includes("canadá")) return "/images/canada flag.png";
  if (norm.includes("estados unidos") || norm.includes("usa") || norm.includes("eeuu")) return "/images/usa flag.png";
  if (norm.includes("brasil") || norm.includes("brazil")) return "/images/BrazilFlag.png";
  if (norm.includes("reino unido") || norm.includes("uk") || norm.includes("inglaterra")) return "/images/uk flag.png";
  if (norm.includes("alemania") || norm.includes("germany")) return "/images/alemania flag.webp";
  if (norm.includes("francia") || norm.includes("france")) return "/images/francia flag.png";
  if (norm.includes("irlanda") || norm.includes("ireland")) return "/images/irlanda flag.png";
  if (norm.includes("malta")) return "/images/malta flag.png";
  if (norm.includes("españa") || norm.includes("spain")) return "/images/SpainFlag.png";
  if (norm.includes("italia") || norm.includes("italy")) return "/images/ItalyFlag.png";
  if (norm.includes("suiza") || norm.includes("switzerland")) return "/images/SwitzerlandFlag.png";
  if (norm.includes("holanda") || norm.includes("países bajos") || norm.includes("netherlands")) return "/images/NetherlandsFlag.png";
  if (norm.includes("suecia") || norm.includes("sweden")) return "/images/SwedenFlag.png";
  if (norm.includes("australia")) return "/images/australia flag.png";
  if (norm.includes("nueva zelanda") || norm.includes("new zealand")) return "/images/NewZealandFlag.png";
  if (norm.includes("emiratos") || norm.includes("dubai") || norm.includes("dubái")) return "/images/emiratos flag.png";
  if (norm.includes("japón") || norm.includes("japan")) return "/images/JapanFlag.png";
  if (norm.includes("corea") || norm.includes("korea")) return "/images/KoreaFlag.png";
  if (norm.includes("china")) return "/images/ChinaFlag.png";
  if (norm.includes("singapur") || norm.includes("singapore")) return "/images/SingaporeFlag.png";

  return "/images/idiomas.png"; 
};

const formatCase = (text?: string) => {
  if (!text) return "";
  return text.toLowerCase().split(" ").map((word, index) =>
    exepcionesMayuscula.includes(word) && index !== 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ").replace(/-.*$/, "");
};

const fetchMaestrias = async (pageParam: string | null = null) => {
  const url = pageParam === null
    ? `/api/programs/masters`
    : `/api/programs/masters?nextKey=${pageParam}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al cargar programas");
  return res.json();
};

export default function MaestriasContent() {
  const [filtroArea, setFiltroArea] = useState<string | null>(null);
  const [filtroPais, setFiltroPais] = useState<string | null>(null);

  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage, error } = useInfiniteQuery({
    queryKey: ["programas", "Maestrías"],
    queryFn: ({ pageParam = null }) => fetchMaestrias(pageParam),
    initialPageParam: null,
    getNextPageParam: (last) => last.nextKey ?? undefined,
    staleTime: 1000 * 60 * 60 * 12,
  });

  const programas: AreaProgram[] = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.items.map((apiProgram: any) => ({
      id: hash(apiProgram["nombre-del-programa"]),
      nombre: apiProgram["nombre-del-programa"],
      area: apiProgram["area-de-estudio"],
      pais: apiProgram.pais,
      ciudad: apiProgram.ubicacion || apiProgram["ubicación"] || "",
      institucion: apiProgram.institucion,
      link: apiProgram.link,
      duracion: apiProgram.duracion || apiProgram["duración"] || "",
      costo: apiProgram["costo-p/ano"],
      costoUSD: apiProgram["costo-p/ano-USD"],
      moneda: apiProgram.moneda,
      fechas: apiProgram["fechas-de-inicio"],
      especializacion: apiProgram["majors-especialización"],
      profesiones: apiProgram.profesiones,
      notas: apiProgram.notas,
    })));
  }, [data]);

  const areasDisponibles = useMemo(() => Array.from(new Set(programas.map((p) => p.area))).filter(Boolean).sort(), [programas]);
  const paisesDisponibles = useMemo(() => Array.from(new Set(programas.map((p) => p.pais))).filter(Boolean).sort(), [programas]);

  const programasFiltrados = useMemo(() => {
    let res = programas;
    if (filtroArea) res = res.filter((p) => p.area === filtroArea);
    if (filtroPais) res = res.filter((p) => p.pais === filtroPais);
    return res;
  }, [programas, filtroArea, filtroPais]);

  const selectStyle = "border-2 border-gray-200 px-5 py-3.5 rounded-xl text-gray-700 font-semibold bg-white shadow-sm hover:border-[#D13758] focus:border-[#D13758] focus:ring-0 outline-none transition-colors cursor-pointer w-full md:w-auto min-w-[240px]";

  return (
    <>
      <section className="relative pt-28 pb-24 md:pt-36 md:pb-40 flex items-center overflow-hidden min-h-[500px] max-h-[800px] w-full">
        

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/95 via-white/70 to-transparent z-20 pointer-events-none"></div>

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
            alt="Estudiantes universitarios internacionales"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2b4c]/95 via-[#1a2b4c]/80 to-[#723CBC]/40 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="mb-8 md:mb-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-white hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a categorías
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-white mt-4 md:mt-0">
              <span className="text-[#E6992F] font-bold tracking-wider uppercase mb-4 block text-sm">Especializa tu futuro</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
                Maestrías en el <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6992F] to-yellow-200">
                  Extranjero.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-md">
                Impulsa tu carrera profesional y obtén un grado internacional de prestigio. Desarrolla habilidades globales y expande tu red de contactos en las mejores universidades del mundo.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-white/20 shadow-2xl relative overflow-hidden group hover:bg-white/15 transition-all duration-500 hidden md:block">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white flex items-center gap-4 relative z-10">
                <span className="bg-[#723CBC]/80 p-3 rounded-2xl shadow-inner text-xl">🎓</span> 
                Datos Rápidos
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-xl text-2xl shadow-inner">🌍</div>
                  <div>
                    <strong className="text-white block text-lg mb-1 font-bold drop-shadow-sm">Destinos Globales</strong>
                    <p className="text-white/90 text-base leading-relaxed font-medium">UK, Australia, Canadá, España, Irlanda, Italia y más.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-xl text-2xl shadow-inner">💼</div>
                  <div>
                    <strong className="text-white block text-lg mb-1 font-bold drop-shadow-sm">Beneficios Migratorios</strong>
                    <p className="text-white/90 text-base leading-relaxed font-medium">Muchos destinos ofrecen Permiso de Trabajo Post-Estudios (PSW).</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1"><span className="text-lg">⏱️</span><strong className="text-white text-base">Duración</strong></div>
                    <p className="text-white/90 text-sm font-medium">1 a 2 años</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1"><span className="text-lg">📚</span><strong className="text-white text-base">Áreas</strong></div>
                    <p className="text-white/90 text-sm font-medium">Negocios, Ing., Artes...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      <div className="relative z-30 -mt-10 md:-mt-16 max-w-5xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3 w-full md:w-auto md:border-r border-gray-200 md:pr-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D13758]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="font-bold text-gray-800 text-lg">Buscar <br className="hidden md:block"/> programa</span>
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap gap-4 w-full justify-center">
            {areasDisponibles.length > 0 && (
              <select value={filtroArea ?? ""} onChange={(e) => setFiltroArea(e.target.value || null)} className={selectStyle}>
                <option value="">Todas las áreas de estudio</option>
                {areasDisponibles.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            )}
            {paisesDisponibles.length > 0 && (
              <select value={filtroPais ?? ""} onChange={(e) => setFiltroPais(e.target.value || null)} className={selectStyle}>
                <option value="">Todos los países</option>
                {paisesDisponibles.map((pais) => (
                  <option key={pais} value={pais}>{pais}</option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>

      <section className="px-4 pb-20 max-w-[1400px] mx-auto">
        {programasFiltrados.length === 0 && !isFetching ? (
           <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
             <h2 className="text-2xl font-bold text-gray-800 mb-2">No se encontraron programas</h2>
             <p className="text-gray-500">Prueba cambiando los filtros de búsqueda.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {programasFiltrados.map((program) => {
              const bgImage = defaultImages[program.id % defaultImages.length];
              const flagImg = getFlagImage(program.pais);

              return (
                <div key={program.id} className="group relative overflow-hidden rounded-[20px] shadow-lg flex flex-col min-h-[480px] bg-white">

                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-110" style={{ backgroundImage: `url(${bgImage})` }} />
                  <div className="absolute inset-0 bg-[#D13758] mix-blend-multiply opacity-50 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute inset-4 border-2 border-dashed border-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 rounded-[12px]" />


                  <div className="relative z-20 m-4 md:m-6 bg-white border-[1.5px] border-[#1a1a1a] p-6 shadow-2xl flex flex-col flex-grow transform group-hover:-translate-y-1 transition-transform duration-500 rounded-lg">
                    

                    <div className="flex items-start gap-4 border-b border-gray-100 pb-5 mb-5">
                      <div className="w-[60px] h-[40px] flex-shrink-0 bg-white border border-gray-200 rounded shadow-sm p-1 flex items-center justify-center">
                        <img src={flagImg} alt={program.pais} className="max-w-full max-h-full object-contain" />
                      </div>
                      <h3 className="text-[#723CBC] text-xl font-bold uppercase tracking-wide leading-tight mt-1">
                        {formatCase(program.nombre)}
                      </h3>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 flex-grow">
                      <div className="space-y-3">
                        <div><span className="block text-xs font-bold text-gray-400 uppercase">Institución</span><span className="font-semibold text-gray-800 leading-snug">{program.institucion || "-"}</span></div>
                        <div><span className="block text-xs font-bold text-gray-400 uppercase">Ubicación</span><span className="font-semibold text-gray-800 leading-snug">{program.ciudad ? `${program.ciudad}, ${program.pais}` : program.pais}</span></div>
                        <div><span className="block text-xs font-bold text-gray-400 uppercase">Área</span><span className="font-semibold text-gray-800 leading-snug">{program.area || "-"}</span></div>
                      </div>
                      <div className="space-y-3">
                        <div><span className="block text-xs font-bold text-gray-400 uppercase">Duración</span><span className="font-semibold text-gray-800 leading-snug">{program.duracion || "-"}</span></div>
                        <div><span className="block text-xs font-bold text-gray-400 uppercase">Costo Anual</span><span className="font-semibold text-gray-800 leading-snug">{program.costo ? `${program.costo} ${program.moneda}` : "-"}</span></div>
                        <div><span className="block text-xs font-bold text-gray-400 uppercase">Inicio</span><span className="font-semibold text-gray-800 leading-snug">{program.fechas || "-"}</span></div>
                      </div>
                    </div>

                    {program.link && (
                      <div className="mt-6 pt-4">
                        <a href={program.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#1a1a1a] text-white py-3 font-bold uppercase text-sm tracking-wider rounded hover:bg-[#E6992F] transition-colors shadow-md">
                          Sitio Oficial
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {hasNextPage && (
          <div className="mt-12 flex justify-center">
            <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} className="bg-[#1a1a1a] text-white px-10 py-3.5 rounded-full font-bold hover:bg-[#D13758] transition-colors shadow-xl disabled:opacity-50">
              {isFetchingNextPage ? "Cargando opciones..." : "Cargar más programas"}
            </button>
          </div>
        )}
        {isFetching && !isFetchingNextPage && (
          <p className="text-center text-[#723CBC] font-bold mt-10 animate-pulse">Buscando los mejores programas para ti...</p>
        )}
      </section>
    </>
  );
}