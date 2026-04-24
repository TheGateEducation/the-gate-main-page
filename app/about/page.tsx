import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import Content from '@src/components/AboutUs/Content/Content';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sobre nosotros - The Gate Education",
    description: "Empresa 100% mexicana enfocada en la educación de estudiantes con la mejor asesoría para conocer el mundo con enfoque educativo, cultural y profesional.",
};


export default function AboutUs() {
    return (
        <main>
            <Hero title="Sobre nosotros" />
            <Content />
        </main>
    );
}