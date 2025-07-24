import { Inter } from "next/font/google";
import Image, { StaticImageData} from "next/image";
import React from "react";

const inter = Inter({subsets: ["latin"]});

interface HeroProps {
    url: string;
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
            <Image
                src={url}
                alt={`Imagen de fondo: ${title}`} 
                fill
                className="object-cover object-center -z-10" 
                priority 
                quality={85} 
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-4" > 
                <h1 className={`text-center font-bold bg-gradient-to-r from-[#EDA74C] to-[#9747FF] bg-clip-text text-transparent w-full max-w-[1032px] mx-auto px-4 break-words text-[8vw] sm:text-[50px] md:text-[60px] leading-tight sm:leading-[65px] md:leading-[73px] ${inter.className}`}>
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