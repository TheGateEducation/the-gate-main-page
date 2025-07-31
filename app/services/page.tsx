import { Inter } from "next/font/google";
import Content from '@src/components/Services/Content'
import Tab from '@src/components/Services/Example';
import Hero from '@src/components/Hero/Hero';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Servicios - The Gate Education",
    description: "Amplia gama de servicios para que puedas estudiar en el extranjero, viajar por el mundo o simplemente aprender un nuevo idioma.",
};

export default function Programs() {
    return (
        <main>
            <Hero title="Servicios" />
            <Content />
            <Tab />

        </main>
    );
}