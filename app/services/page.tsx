import CardCTA from "@src/components/Services/CardCTA";
import Link from "next/link";
import { Sparkles, GraduationCap, Building2, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Servicios - The Gate Education",
  description:
    "Amplia gama de servicios para que puedas estudiar en el extranjero, viajar por el mundo o simplemente aprender un nuevo idioma.",
};

const beneficios = [
  {
    icon: GraduationCap,
    title: "Asesoría personalizada",
    description: "Sesiones 1 a 1 para encontrar el programa ideal según tu perfil.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento total",
    description: "Desde la primera consulta hasta tu llegada al destino.",
  },
  {
    icon: Building2,
    title: "Para instituciones",
    description: "Soluciones de representación, marketing y captación.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 flex items-center overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2070&q=80"
            alt="Equipo The Gate colaborando en asesoría educativa"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5F338B]/70 via-[#5F338B]/45 to-[#5F338B]/15"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Servicios
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                Servicios a la medida <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDA74C] to-[#f9cf8c]">
                  de tu viaje educativo.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 leading-relaxed max-w-2xl">
                Elige tu perfil y descubre cómo The Gate puede acompañarte — estés empezando tu camino estudiantil o buscando fortalecer tu institución educativa.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#opciones"
                  className="bg-[#EDA74C] hover:bg-[#d99530] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-[#EDA74C]/40 hover:-translate-y-1 flex items-center gap-2"
                >
                  Elegir perfil
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
                <span className="bg-white/20 p-3 rounded-2xl shadow-inner text-2xl">✨</span>
                Qué te ofrecemos
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

      {/* ── Section header ───────────────────────────────────────────────────── */}
      <section id="opciones" className="relative z-10 -mt-20 md:-mt-32 scroll-mt-24">
        <div className="max-w-[1000px] mx-auto px-6 pt-32 md:pt-48 pb-8 text-center">
          <span className="text-[#5F338B] font-bold tracking-wider uppercase mb-4 block text-sm">
            Elige tu perfil
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            ¿Qué <span className="text-gradient">te describe mejor?</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#5F338B] to-[#9747FF] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Ofrecemos servicios a la medida para estudiantes que buscan estudiar en el extranjero e instituciones que quieren expandir su alcance en Latinoamérica.
          </p>
        </div>
      </section>

      {/* ── Cards ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="px-4 sm:px-6 lg:px-8 space-y-8 max-w-5xl mx-auto">
          <CardCTA
            title="¿Eres Estudiante?"
            subtitle="¡Checa los servicios que te ofrecemos!"
            buttonLabel="Soy Estudiante"
            imageUrl="/images/maestrias.jpg"
            linkTo="/estudiante"
          />

          <CardCTA
            title="¿Quieres formar parte de nuestros aliados?"
            subtitle="¡Checa en qué te podemos ayudar!"
            buttonLabel="Soy Institución"
            imageUrl="/images/maestrias.jpg"
            linkTo="/instituciones"
          />
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────────────────── */}
      <section className="relative py-10 md:py-16 overflow-hidden">
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
                ¿Tienes dudas? <br className="hidden md:block"/> Agenda una asesoría.
              </h3>
              <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
                Conversemos sobre tu perfil, objetivos y cómo podemos ayudarte a dar el siguiente paso.
              </p>
              <Link
                href="https://calendly.com/thegateeducation/30min"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#EDA74C] text-white font-bold text-lg rounded-full hover:bg-[#d99530] hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                Agendar asesoría
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
