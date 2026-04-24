import Image from "next/image";
import Link from "next/link";
import { Globe2, MapPin, Compass, Sparkles, Flag } from "lucide-react";
import { destinations } from "@src/data/destinations";

export const metadata = {
  title: "Destinos - The Gate Education",
  description:
    "Conoce cada uno de los destinos donde The Gate te acompaña: datos clave para estudiantes internacionales, costo de vida, moneda y estilo educativo de cada país.",
};

export default function DestinosPage() {
  const totalProgramas = destinations.reduce((acc, d) => acc + (parseInt(d.programs, 10) || 0), 0);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 flex items-center overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2070&q=80"
            alt="Mapa mundial con destinos educativos"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5F338B]/85 via-[#7B4BAE]/60 to-[#9747FF]/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Compass className="w-4 h-4" />
                Nuestros destinos
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                Explora el mundo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDA74C] to-[#f9cf8c]">
                  con The Gate.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 leading-relaxed max-w-2xl">
                {destinations.length} países para que vivas la experiencia internacional que transformará tu futuro. Cada destino, con datos clave pensados para ti.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#paises"
                  className="bg-[#EDA74C] hover:bg-[#d99530] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-[#EDA74C]/40 hover:-translate-y-1 flex items-center gap-2"
                >
                  Ver destinos
                </a>
                <Link
                  href="https://calendly.com/thegateeducation/30min"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 border border-white/10 hover:border-white/30"
                >
                  Agenda tu asesoría
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-48 h-48 bg-[#EDA74C]/20 rounded-full blur-[60px]"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 bg-[#5F338B]/40 rounded-full blur-[60px]"></div>

              <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4 relative z-10">
                <span className="bg-white/20 p-3 rounded-2xl shadow-inner text-2xl">🌍</span>
                Datos Rápidos
              </h3>

              <div className="space-y-5 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl shrink-0">
                    <Flag className="w-6 h-6 text-[#EDA74C]" />
                  </div>
                  <div>
                    <strong className="text-white block text-lg mb-1">Países</strong>
                    <p className="text-white/80 text-base font-medium">
                      {destinations.length}+ destinos en Europa, América, Asia y Oceanía.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl shrink-0">
                    <Sparkles className="w-6 h-6 text-[#EDA74C]" />
                  </div>
                  <div>
                    <strong className="text-white block text-lg mb-1">Programas</strong>
                    <p className="text-white/80 text-base font-medium">
                      Más de {totalProgramas}+ opciones académicas disponibles.
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Globe2 className="w-5 h-5 text-[#EDA74C]" />
                      <strong className="text-white">Idiomas</strong>
                    </div>
                    <p className="text-white/80 text-sm font-medium">Inglés, francés, alemán y más</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-5 h-5 text-[#EDA74C]" />
                      <strong className="text-white">Continentes</strong>
                    </div>
                    <p className="text-white/80 text-sm font-medium">4 regiones del mundo</p>
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

      {/* ── Section header ───────────────────────────────────────────────────── */}
      <section id="paises" className="relative z-10 -mt-20 md:-mt-32 scroll-mt-24">
        <div className="max-w-[1000px] mx-auto px-6 pt-32 md:pt-48 pb-12 text-center">
          <span className="text-[#5F338B] font-bold tracking-wider uppercase mb-4 block text-sm">
            Destinos disponibles
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Elige tu <span className="text-gradient">próximo destino</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#5F338B] to-[#9747FF] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Cada país ofrece una experiencia única. Explora la información clave y descubre cuál se adapta mejor a tu estilo, objetivos y presupuesto.
          </p>
        </div>
      </section>

      {/* ── Sticky country nav ──────────────────────────────────────────────── */}
      <nav className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-y border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-thin">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`#${d.slug}`}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#5F338B]/10 hover:text-[#5F338B] text-sm font-semibold text-gray-700 transition-colors"
            >
              <span className="relative block w-5 h-3.5 rounded-sm overflow-hidden shadow-sm">
                <Image src={d.flagImage} alt="" fill className="object-cover" sizes="20px" />
              </span>
              {d.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Country sections ────────────────────────────────────────────────── */}
      <div className="bg-gray-50">
        {destinations.map((d, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={d.slug}
              id={d.slug}
              className="scroll-mt-36 py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 group">
                    <Image
                      src={d.placeImage ?? d.flagImage}
                      alt={`Foto de ${d.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur rounded-full shadow-md">
                      <span className="relative block w-6 h-4 rounded-sm overflow-hidden">
                        <Image src={d.flagImage} alt="" fill className="object-cover" sizes="24px" />
                      </span>
                      <span className="text-xs font-bold text-gray-800">{d.name}</span>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EDA74C]/10 text-[#EDA74C] text-sm font-bold rounded-full mb-4">
                      <MapPin className="w-4 h-4" />
                      {d.programs}+ programas disponibles
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3 tracking-tight">
                      {d.name}
                    </h2>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-[#5F338B] to-[#9747FF] rounded-full mb-6"></div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      {d.details.paragraphs.map((p, j) => (
                        <p key={j} className="text-base md:text-lg">
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm">
                      <Globe2 className="w-4 h-4 text-[#5F338B]" />
                      <span className="text-sm font-bold text-gray-800">Moneda:</span>
                      <span className="text-sm text-gray-700 font-medium">{d.details.moneda}</span>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="https://calendly.com/thegateeducation/30min"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#5F338B] text-white font-bold text-base rounded-full hover:bg-[#4b2870] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                      >
                        Agenda tu asesoría para {d.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CTA final ───────────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gray-50">
        <div className="relative max-w-[1000px] mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#5F338B] via-[#7B4BAE] to-[#9747FF] rounded-[2.5rem] p-10 md:p-16 text-center text-white overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#EDA74C]/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
                ¿No sabes cuál elegir?
              </h3>
              <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
                Nuestros asesores te ayudan a encontrar el destino perfecto según tu perfil, objetivos académicos y presupuesto.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#EDA74C] text-white font-bold text-lg rounded-full hover:bg-[#d99530] hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                Hablar con asesor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
