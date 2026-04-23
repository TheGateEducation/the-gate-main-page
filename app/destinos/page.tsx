import Image from "next/image";
import Link from "next/link";
import { Globe2, MapPin } from "lucide-react";
import Hero from "@src/components/Hero/Hero";
import { destinations } from "@src/data/destinations";

export const metadata = {
  title: "Destinos - The Gate Education",
  description:
    "Conoce cada uno de los destinos donde The Gate te acompaña: datos clave para estudiantes internacionales, costo de vida, moneda y estilo educativo de cada país.",
};

export default function DestinosPage() {
  return (
    <main>
      <Hero
        title="Nuestros destinos"
        subtitle="Explora los países donde puedes hacer realidad tu sueño de educación internacional. Cada destino con datos clave pensados para ti."
        backgroundType="gradient"
      />

      {/* Sticky country nav */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-thin">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`#${d.slug}`}
              className="shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-[#5F338B]/10 hover:text-[#5F338B] text-sm font-semibold text-gray-700 transition-colors"
            >
              <span className="relative block w-5 h-3.5 rounded-sm overflow-hidden shadow-sm">
                <Image src={d.flagImage} alt="" fill className="object-cover" sizes="20px" />
              </span>
              {d.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Country sections */}
      <div className="bg-white">
        {destinations.map((d, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={d.slug}
              id={d.slug}
              className="scroll-mt-32 py-16 md:py-24 border-b border-gray-100 last:border-b-0"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                    <Image
                      src={d.placeImage ?? d.flagImage}
                      alt={`Foto de ${d.name}`}
                      fill
                      className="object-cover"
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
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#EDA74C]/10 text-[#B56B1A] text-xs font-semibold rounded-full mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      {d.programs} programas disponibles
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
                      {d.name}
                    </h2>
                    <p className="text-sm font-semibold italic text-gray-500 mb-5">
                      Datos clave para estudiantes internacionales
                    </p>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      {d.details.paragraphs.map((p, j) => (
                        <p key={j} className="text-[15px] md:text-base">
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                      <Globe2 className="w-4 h-4 text-[#9747FF]" />
                      <span className="text-sm font-semibold text-gray-800">Moneda:</span>
                      <span className="text-sm text-gray-700">{d.details.moneda}</span>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="https://calendly.com/thegateeducation/30min"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#EDA74C] text-white font-bold text-sm rounded-full hover:bg-[#d99530] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
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
    </main>
  );
}
