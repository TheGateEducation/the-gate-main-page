import { Inter } from "next/font/google";
import Hero from '@src/components/Hero/Hero';
import Example from '@src/components/Services/Example';
import Content from '@src/components/Services/Content'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Servicios - The Gate Education",
    description: "Amplia gama de servicios para que puedas estudiar en el extranjero, viajar por el mundo o simplemente aprender un nuevo idioma.",
};

export default function Programs() {
    return (
        <main>
            <Hero url="https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/services.jpg" title="Servicios" />
            <Content />
            <Example />

        </main>
    );
}