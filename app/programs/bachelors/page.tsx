import ProgramPage from "@src/components/cale/ProgramPage";
import { getAllLicenciaturas } from "@src/lib/parseLicenciaturas";
import Link from "next/link";
import { BookOpen, Globe2, Users, Clock } from "lucide-react";

export const metadata = {
  title: "Licenciaturas - The Gate Education",
  description:
    "Explora programas de licenciatura en el extranjero con The Gate Education.",
  keywords:
    "licenciaturas, programas universitarios, estudiar en el extranjero, educación internacional",
};

export default function Bachelors() {
  const programs = getAllLicenciaturas();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 flex items-center overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=2070&q=80"
            alt="Estudiantes universitarios en biblioteca moderna"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5F338B]/70 via-[#5F338B]/45 to-[#5F338B]/15"></div>
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                Licenciaturas internacionales
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                Tu carrera universitaria<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDA74C] to-[#f9cf8c]">
                  sin fronteras.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 leading-relaxed max-w-2xl">
                Descubre carreras en las mejores universidades del mundo. Una experiencia internacional que abrirá todas las puertas de tu futuro.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#programas"
                  className="bg-[#EDA74C] hover:bg-[#d99530] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-[#EDA74C]/40 hover:-translate-y-1 flex items-center gap-2"
                >
                  Ver Programas
                </a>
                <Link
                  href="https://calendly.com/thegateeducation/30min"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 border border-white/10 hover:border-white/30"
                >
                  Agenda tu Asesoría
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-48 h-48 bg-[#EDA74C]/20 rounded-full blur-[60px]"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 bg-[#5F338B]/40 rounded-full blur-[60px]"></div>

              <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4 relative z-10">
                <span className="bg-white/20 p-3 rounded-2xl shadow-inner text-2xl">📚</span>
                Datos Rápidos
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Globe2 className="w-6 h-6 text-[#EDA74C]" />
                  </div>
                  <div>
                    <strong className="text-white block text-lg mb-1">Destinos Top</strong>
                    <p className="text-white/80 text-base font-medium">
                      Canadá, EE.UU., Reino Unido, Irlanda, Australia, España.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-[#EDA74C]" />
                  </div>
                  <div>
                    <strong className="text-white block text-lg mb-1">Edad recomendada</strong>
                    <p className="text-white/80 text-base font-medium">
                      A partir de 17-18 años.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-5 h-5 text-[#EDA74C]" />
                      <strong className="text-white">Duración</strong>
                    </div>
                    <p className="text-white/80 text-sm font-medium">3 a 4 años</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="w-5 h-5 text-[#EDA74C]" />
                      <strong className="text-white">Áreas</strong>
                    </div>
                    <p className="text-white/80 text-sm font-medium">Todas las carreras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[100px] md:h-[180px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      <div id="programas" className="relative z-10 -mt-20 md:-mt-32 scroll-mt-24">
        <section className="px-4 max-w-[1200px] mx-auto pt-32 md:pt-48 pb-4 text-center">
          <span className="text-[#5F338B] font-bold tracking-wider uppercase mb-4 block text-sm">
            Encuentra tu programa
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Licenciaturas
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#5F338B] to-[#9747FF] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubre carreras universitarias en las mejores universidades del mundo. Filtra por país y elige la licenciatura que define tu futuro.
          </p>
        </section>
        <ProgramPage initialCategoria="Licenciaturas" initialData={programs} skipHero />
      </div>
    </main>
  );
}
