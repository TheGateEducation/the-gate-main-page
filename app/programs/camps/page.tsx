import React from "react";
import SummerCampCards from "@src/components/cale/SummerCampCards";
import Link from "next/link";

export const metadata = {
  title: "Campamentos y Programas Deportivos - The Gate Education",
  description:
    "Explora los Campamentos de Primavera, Verano e Invierno que tenemos para ti, alrededor del mundo.",
};

export default function CampamentosPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <section className="bg-[#FA5939] text-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Botón volver a categorías */}
          <div className="mb-8">
            <Link
              href="/programs"
              className="text-white hover:text-white/80 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Volver a categorías
            </Link>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Campamentos y Programas Deportivos
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 font-medium mb-8">
              Explora los Campamentos de Primavera, Verano e Invierno que tenemos para ti, alrededor del mundo.
            </h2>
            <p className="text-lg mb-4">
              Programas internacionales para niños y jóvenes que combinan aprendizaje, cultura y experiencias inolvidables.
            </p>
            <p className="text-base text-white/80 mb-10">
              En The Gate Education contamos con programas desde el summer camp tradicional para disfrutar de las actividades de verano, programas de idiomas con actividades recreativas y culturales, hasta programas para mentes jóvenes que buscan una experiencia más allá de sólo un idioma.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">
              Datos Rápidos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <div>
                <p className="mb-3">
                  <strong className="text-white">📍 Destinos:</strong><br/>
                  <span className="text-white/80 text-base">Alemania, Canadá, Emiratos Árabes Unidos, Estados Unidos, Francia, Irlanda, Malta, Reino Unido</span>
                </p>
                <p>
                  <strong className="text-white">🗣️ Idiomas:</strong><br/>
                  <span className="text-white/80 text-base">Inglés, Francés, Alemán</span>
                </p>
              </div>
              <div>
                <p className="mb-3">
                  <strong className="text-white">⏱️ Duración:</strong><br/>
                  <span className="text-white/80 text-base">1 a 8 semanas</span>
                </p>
                <p>
                  <strong className="text-white">👥 Edades:</strong><br/>
                  <span className="text-white/80 text-base">7 a 18 años (varía por destino)</span>
                </p>
                <p>
                  <strong className="text-white">📅 Fechas:</strong><br/>
                  <span className="text-white/80 text-sm block mb-1">• <strong>Verano:</strong> Fines de junio a fines de agosto.</span>
                  <span className="text-white/80 text-sm block mb-1">• <strong>Invierno:</strong> Mediados de diciembre a mediados de febrero.</span>
                  <span className="text-white/80 text-sm block">• <strong>Primavera - Otoño:</strong> Marzo-Abril y Octubre-Noviembre.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <SummerCampCards />
      </div>
    </main>
  );
}