import { Inter } from "next/font/google";
import Hero from "@src/components/Hero/Hero";
import CardCTA from "@src/components/Services/CardCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servicios - The Gate Education",
  description:
    "Amplia gama de servicios para que puedas estudiar en el extranjero, viajar por el mundo o simplemente aprender un nuevo idioma.",
};

export default function Programs() {
  return (
    <main>
      <Hero
        title="Servicios personalizados para cada etapa del viaje educativo"
        titleType="white"
        subtitle="Elige tu perfil para conocer los servicios que tenemos para ti"
        subtitleColor="white"
        backgroundType="gradient"
      />

            <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8 space-y-8">
          <CardCTA
            title="¿Eres Estudiante?"
            subtitle="¡Checa los servicios que te ofrecemos!"
            buttonLabel="Soy Estudiante"
            imageUrl="/images/maestrias.jpg" // Asegúrate de que la ruta sea correcta
            linkTo="/estudiante"
          />

          <CardCTA
            title="¿Quieres formar parte de nuestros aliados?"
            subtitle="¡Checa en qué te podemos ayudar!"
            buttonLabel="Soy Institución"
            imageUrl="/images/maestrias.jpg" // Cambia esta imagen por una diferente si es necesario
            linkTo="/instituciones"
          />
        </div>
      </section>
    </main>
  );
}