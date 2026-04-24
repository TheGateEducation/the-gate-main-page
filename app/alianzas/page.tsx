import Link from "next/link";
import { Handshake, Wallet, ShieldCheck, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Alianzas - The Gate Education",
  description:
    "Conoce nuestras alianzas estratégicas con instituciones de financiamiento educativo en México para que puedas estudiar en el extranjero.",
};

const aliados = [
  {
    name: "Prepárate",
    url: "https://www.preparatemx.com/",
    description:
      "Plataforma de financiamiento educativo diseñada para estudiantes mexicanos que buscan cumplir su sueño internacional.",
    tag: "Financiamiento",
  },
  {
    name: "Laudex",
    url: "https://www.laudex.mx/the-gate-education",
    description:
      "Créditos educativos accesibles y flexibles para programas académicos en el extranjero.",
    tag: "Crédito educativo",
  },
  {
    name: "Edupass",
    url: "https://www.edupass.mx/",
    description:
      "Soluciones financieras que impulsan tu educación en el extranjero con planes a tu medida.",
    tag: "Planes flexibles",
  },
];

const beneficios = [
  {
    icon: Wallet,
    title: "Financiamiento a tu medida",
    description:
      "Opciones de pago flexibles que se adaptan a tu realidad económica y al programa que elijas.",
  },
  {
    icon: ShieldCheck,
    title: "Instituciones confiables",
    description:
      "Solo trabajamos con aliados estratégicos con trayectoria y respaldo comprobado en el mercado mexicano.",
  },
  {
    icon: GraduationCap,
    title: "Cobertura amplia",
    description:
      "Cubre parte o la totalidad del programa: colegiatura, hospedaje, vuelos y más.",
  },
];

export default function Alianzas() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 flex items-center overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2070&q=80"
            alt="Equipo colaborando en alianzas educativas"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5F338B]/85 via-[#7B4BAE]/60 to-[#9747FF]/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Handshake className="w-4 h-4" />
                Alianzas estratégicas
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                Tu sueño, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDA74C] to-[#f9cf8c]">
                  más cerca que nunca.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 leading-relaxed max-w-2xl">
                El dinero no debe ser una limitante. Trabajamos con instituciones de financiamiento educativo en México para abrirte las puertas al mundo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#aliados"
                  className="bg-[#EDA74C] hover:bg-[#d99530] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-[#EDA74C]/40 hover:-translate-y-1 flex items-center gap-2"
                >
                  Ver aliados
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 border border-white/10 hover:border-white/30"
                >
                  Hablar con asesor
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-48 h-48 bg-[#EDA74C]/20 rounded-full blur-[60px]"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 bg-[#5F338B]/40 rounded-full blur-[60px]"></div>

              <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4 relative z-10">
                <span className="bg-white/20 p-3 rounded-2xl shadow-inner text-2xl">🤝</span>
                Por qué aliarnos
              </h3>

              <div className="space-y-5 relative z-10">
                {beneficios.map((b) => (
                  <div key={b.title} className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <b.icon className="w-6 h-6 text-[#EDA74C]" />
                    </div>
                    <div>
                      <strong className="text-white block text-lg mb-1">{b.title}</strong>
                      <p className="text-white/80 text-sm font-medium leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                ))}
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

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 -mt-20 md:-mt-32 pb-4">
        <div className="max-w-[900px] mx-auto px-6 pt-32 md:pt-48 text-center">
          <span className="text-[#5F338B] font-bold tracking-wider uppercase mb-4 block text-sm">
            Cómo funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Financiamiento que <span className="text-gradient">abre puertas</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#5F338B] to-[#9747FF] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            En The Gate creemos que una experiencia internacional puede transformar tu futuro académico, personal y profesional. Por eso nos aliamos con instituciones que ofrecen alternativas de financiamiento — para que más estudiantes accedan a esta oportunidad, sin que el costo sea un obstáculo.
          </p>
        </div>
      </section>

      {/* ── Aliados ─────────────────────────────────────────────────────────── */}
      <section id="aliados" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#EDA74C] font-bold tracking-wider uppercase mb-4 block text-sm">
              Nuestros aliados
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Actualmente trabajamos con
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[#EDA74C] to-[#D25C7A] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aliados.map((aliado) => (
              <Link
                key={aliado.name}
                href={aliado.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl hover:shadow-[#5F338B]/10 transition-all duration-300 border border-gray-100 hover:border-[#5F338B]/20 hover:-translate-y-2 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EDA74C]/10 text-[#EDA74C] text-xs font-bold rounded-full">
                    {aliado.tag}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#5F338B] transition-colors" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#5F338B] group-hover:text-[#4b2870] transition-colors mb-4 tracking-tight">
                  {aliado.name}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {aliado.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#EDA74C] group-hover:gap-3 transition-all">
                  Visitar sitio
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-6 md:pt-16 md:pb-10 overflow-hidden">
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
                ¿Quieres saber qué opción <br className="hidden md:block"/> se adapta a ti?
              </h3>
              <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
                Nuestros asesores te orientan para que encuentres la alternativa de financiamiento ideal según tu programa académico y destino.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#EDA74C] text-white font-bold text-lg rounded-full hover:bg-[#d99530] hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                Contactar un asesor
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
