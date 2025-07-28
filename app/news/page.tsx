import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Noticias - The Gate Education",
    description: "Entérate de las últimas noticias y eventos de tu proxima institución educativa en el extranjero y convenios que tenemos.",
    keywords: "campamentos, certificados y diplomas, cursos de idiomas, intercambios, maestrias, tours de estudio, estudios en el extranjero, secundaria, educación y formación profesional",
};
export default function Programs() {
    return (
        <Hero
            title="Noticias"
        />
    );
}