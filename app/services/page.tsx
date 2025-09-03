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
            <Hero 
            title="Servicios personalizados para cada etapa del viaje educativo" 
            titileType="white"  
            subtitle="Elige tu perfil para conocer los servicios que tenemos para ti" 
            subtitleColor="white"
            backgroundType="gradient" 
            />
            <Content />
            <Tab />

        </main>
    );
}