import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({subsets: ["latin"]});

type BackGroundType= "image" | "gradient" | "none";

interface HeroProps {
    title: string;
    titileType?: string;
    subtitle?: string;
    subtitleColor?: string
    imageUrl?: string;
    backgroundType?: BackGroundType;
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ title, titileType, subtitle, subtitleColor, imageUrl, backgroundType = "none", className = ""}) =>{
  const bgClasses =
    backgroundType === "gradient"
    ? "bg-gradient-to-tr from-[#EDA74C] via-[#D25C7A] to-[#9747FF]"
    : backgroundType === "none"
    ? "bg-white"
    : "";

 const colorTitle = 
    titileType === "white"
    ? "max-w-[1032px] mx-auto text-center font-bold text-white leading-[1.2] [font-size:clamp(2rem,5vw,4rem)] md:[font-size:clamp(4rem,5vw,5rem)]"
    : "max-w-[1032px] mx-auto text-center font-bold bg-gradient-to-r from-[#EDA74C] to-[#9747FF] bg-clip-text text-transparent leading-[1.2] [font-size:clamp(2rem,5vw,4rem)] md:[font-size:clamp(4rem,5vw,5rem)]"

    const colorSubtitle = 
        subtitleColor === "white"
        ? "text-white"
        : subtitleColor === "black" 
        ? "text-black/80"
        : backgroundType === "image" 
        ? "text-white" 
        : "text-black/80"; 
    return (
        <section
            className={`flex flex-col items-center justify-center
                        gap-12             /* ≈ 48 px */
                        px-6 pt-8 pb-10    /* ≈ 19 / 39 px (edge-safe) */
                        min-h-[355px]
                        overflow-visible 
                ${bgClasses} ${className}
            `}
            >
            {backgroundType === "image" && imageUrl && (
                <Image
                src={imageUrl}
                alt={`Fondo: ${title}`}
                fill
                className="object-cover object-center -z-10"
                priority
                quality={80}
                sizes="100vw"
                />
            )}

            {backgroundType === "image" && (
                <div className="absolute inset-0 bg-black/40 -z-10" />
            )}

           <div className="max-w-[1100px] px-4 text-center flex flex-col gap-4">
                <h1
                className={`max-w-[1032px] mx-auto text-center font-bold leading-[1.2]
                [font-size:clamp(2rem,5vw,4rem)] md:[font-size:clamp(4rem,5vw,5rem)]
                ${inter.className}`}
                style={{
                    background: "linear-gradient(90deg, #EDA74C, #9747FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                {title}
                </h1>

                {subtitle && (
                <p className={`max-w-[1032px] mx-auto text-center text-lg sm:text-xl md:text-2xl font-semibold tracking-normal ${colorSubtitle}`}>
                    {subtitle}
                </p>
                )}
            </div>
        </section>
    );
}

export default Hero