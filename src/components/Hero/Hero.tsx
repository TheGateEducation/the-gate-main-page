import { Inter } from "next/font/google";
import Image, { StaticImageData} from "next/image";
import React from "react";

const inter = Inter({subsets: ["latin"]});

interface HeroProps {
    url: string | StaticImageData;
    title: string;
    subtitle?: string;
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ url, title, subtitle, className = ''}) =>{
    return (
    <div className={`
    relative 
    flex items-center justify-center 
    h-[30vh] md:h-[40vh] 
    mt-16 ${className}`}>
            {/* Componente Image optimizado */}
            <Image
                src={url}
                alt={`Imagen de fondo: ${title}`} 
                fill
                className="object-cover object-center -z-10" //Hace que la imagen este destras del texto
                priority //Carga imagen inmediatamente
                quality={85} //Calidad de la compresión de la imagen 
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-4" /*Crea el efecto para que la imagen sea un poco más obscura **/> 
                <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 ${inter.className}` /* Crea el tipo de texto que esta enfrente de la imagen**/}>
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-2xl lg:text-3xl font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Hero