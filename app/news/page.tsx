import Hero from "@src/components/Hero/Hero";
import Link from "next/link";
import { Newspaper, Bell } from "lucide-react";

export const metadata = {
  title: "Noticias - The Gate Education",
  description:
    "Entérate de las últimas noticias y eventos de tu próxima institución educativa en el extranjero y convenios que tenemos.",
  keywords:
    "campamentos, certificados y diplomas, cursos de idiomas, intercambios, maestrías, tours de estudio, estudios en el extranjero",
};

export default function NewsPage() {
  return (
    <main className="bg-white">
      <Hero
        title="Noticias"
        titleType="white"
        subtitle="Las novedades de The Gate, próximamente aquí."
        subtitleColor="white"
        backgroundType="gradient"
      />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #5F338B 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#5F338B]/10 text-[#5F338B] mb-8">
            <Newspaper className="w-10 h-10" />
          </div>
          <span className="inline-block px-4 py-1.5 bg-[#EDA74C]/10 text-[#EDA74C] text-sm font-semibold rounded-full mb-5">
            Próximamente
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Estamos preparando{" "}
            <span className="text-gradient">nuestras novedades</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Muy pronto encontrarás aquí las últimas noticias sobre convenios,
            becas, eventos y testimonios de estudiantes The Gate alrededor del
            mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5F338B] text-white font-bold rounded-full hover:bg-[#4b2870] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Bell className="w-4 h-4" />
              Quiero enterarme primero
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-[#5F338B] hover:text-[#5F338B] transition-all duration-200"
            >
              Explorar Programas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
