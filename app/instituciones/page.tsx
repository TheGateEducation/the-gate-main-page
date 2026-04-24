import InfoCard from '@src/components/instituciones/InfoCard';
import Link from "next/link";
import { Building2, Users, TrendingUp, Globe2 } from "lucide-react";

export const metadata = {
  title: "Instituciones | The Gate Education",
  description:
    "Todo lo que necesitas para ser un aliado educativo de The Gate y conectar con estudiantes internacionales.",
};

const servicesData = [
  { title: 'Captación activa de estudiantes.', borderColor: '#EDA74C' },
  { title: 'Gestión de solicitudes de admisión.', borderColor: '#5F338B' },
  { title: 'Información de su institución educativa en nuestro sitio web.', borderColor: '#EDA74C' },
  { title: 'Asesoría en estrategia de marketing para México y Latinoamérica.', borderColor: '#5F338B' },
  { title: 'Promoción de visitas de representantes institucionales.', borderColor: '#EDA74C' },
  { title: 'Representación personalizada a la medida de sus necesidades en el país donde operamos.', borderColor: '#5F338B' },
  { title: 'Gestión y seguimiento de consultas de estudiantes en eventos en línea y presenciales.', borderColor: '#EDA74C' },
  { title: 'Sesiones informativas y seminarios en instituciones locales (preparatorias, universidades y empresas).', borderColor: '#5F338B' },
  { title: 'Actividades de marketing directo como sesiones en vivo.', borderColor: '#5F338B' },
];

const beneficios = [
  {
    icon: Users,
    title: "Conexión directa con estudiantes",
    description: "Accede a una red de estudiantes mexicanos e internacionales calificados.",
  },
  {
    icon: Globe2,
    title: "Presencia en México y LATAM",
    description: "Expande tu reach con representación local en mercados estratégicos.",
  },
  {
    icon: TrendingUp,
    title: "Marketing a tu medida",
    description: "Estrategias personalizadas para posicionar tu institución.",
  },
];

export default function InstitucionesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 flex items-center overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2070&q=80"
            alt="Campus universitario internacional"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5F338B]/70 via-[#5F338B]/45 to-[#5F338B]/15"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                Para instituciones
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                Aliados que <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDA74C] to-[#f9cf8c]">
                  transforman la educación.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 leading-relaxed max-w-2xl">
                Todo lo que necesitas para ser un aliado estratégico de The Gate y conectar con estudiantes internacionales que buscan tu institución.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#EDA74C] hover:bg-[#d99530] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-[#EDA74C]/40 hover:-translate-y-1 flex items-center gap-2"
                >
                  Conviértete en aliado
                </Link>
                <a
                  href="#servicios"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 border border-white/10 hover:border-white/30"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-48 h-48 bg-[#EDA74C]/20 rounded-full blur-[60px]"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 bg-[#5F338B]/40 rounded-full blur-[60px]"></div>

              <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4 relative z-10">
                <span className="bg-white/20 p-3 rounded-2xl shadow-inner text-2xl">🏛️</span>
                ¿Por qué aliarte?
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

      {/* ── Servicios ───────────────────────────────────────────────────────── */}
      <section id="servicios" className="relative z-10 -mt-20 md:-mt-32 pb-20 scroll-mt-24">
        <div className="max-w-[1000px] mx-auto px-6 pt-32 md:pt-48 text-center mb-14">
          <span className="text-[#5F338B] font-bold tracking-wider uppercase mb-4 block text-sm">
            Nuestros servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Cómo te <span className="text-gradient">acompañamos</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#5F338B] to-[#9747FF] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Ofrecemos una suite completa de servicios diseñados para potenciar la presencia de tu institución en México y Latinoamérica.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-6 grid grid-cols-1 gap-6">
          {servicesData.map((service, index) => (
            <InfoCard
              key={index}
              title={service.title}
              borderColor={service.borderColor}
            />
          ))}
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
                ¿Listo para ser parte <br className="hidden md:block"/> de The Gate?
              </h3>
              <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
                Conversemos sobre cómo podemos colaborar para llevar tu institución al siguiente nivel en Latinoamérica.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#EDA74C] text-white font-bold text-lg rounded-full hover:bg-[#d99530] hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
