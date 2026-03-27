import { Inter } from "next/font/google";
import Hero from "@src/components/Hero/Hero";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
      "Plataforma de financiamiento educativo para estudiantes mexicanos.",
  },
  {
    name: "Laudex",
    url: "https://www.laudex.mx/the-gate-education",
    description:
      "Créditos educativos accesibles para programas académicos internacionales.",
  },
  {
    name: "Edupass",
    url: "https://www.edupass.mx/",
    description:
      "Soluciones financieras para impulsar tu educación en el extranjero.",
  },
];

export default function Alianzas() {
  return (
    <main>
      <Hero
        title="Alianzas"
        subtitle="Tu sueño de estudiar en el extranjero, más cerca que nunca"
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-lg text-black/80 leading-relaxed">
            En The Gate creemos que el dinero no debería ser una limitante para
            cumplir tu sueño de estudiar en el extranjero. Vivir una experiencia
            internacional puede transformar tu futuro académico, personal y
            profesional, y queremos que más estudiantes tengan acceso a esa
            oportunidad.
          </p>

          <p className="text-lg text-black/80 leading-relaxed">
            Por eso contamos con alianzas estratégicas con instituciones de
            financiamiento educativo en México, que ofrecen alternativas para
            apoyar a estudiantes que desean realizar programas académicos en el
            extranjero.
          </p>

          <p className="text-lg text-black/80 leading-relaxed">
            Gracias a estas alianzas, es posible acceder a opciones de
            financiamiento que permiten cubrir parte o la totalidad del programa,
            facilitando que más estudiantes puedan dar este gran paso en su
            formación.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-12 ${inter.className}`}
            style={{
              background: "linear-gradient(90deg, #EDA74C, #9747FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Actualmente trabajamos con
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {aliados.map((aliado) => (
              <Link
                key={aliado.name}
                href={aliado.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#6E44AD] group-hover:text-[#EDA74C] transition-colors mb-3">
                  {aliado.name}
                </h3>
                <p className="text-sm text-black/60 leading-relaxed">
                  {aliado.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#EDA74C] underline decoration-transparent group-hover:decoration-[#EDA74C] transition">
                  Visitar sitio
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-lg text-black/80 leading-relaxed">
            Si deseas conocer más sobre las opciones de financiamiento
            disponibles, puedes contactar a nuestros asesores para recibir
            orientación sobre la alternativa que mejor se adapte a tu programa
            académico.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#EDA74C] text-white font-semibold px-8 h-[60px] rounded-[30px] hover:bg-[#d38f36] transition-colors"
          >
            Contactar un asesor
          </Link>
        </div>
      </section>
    </main>
  );
}
