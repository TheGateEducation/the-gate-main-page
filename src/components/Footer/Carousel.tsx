import React from "react";
import Image from "next/image";
import { logos } from "@src/data/constantes"

const logoPairs = Object.entries(logos);

export const Carousel = () => {
    return (
        <>
            <div className="relative font-inter antialiased bg-[#EDA74C] mt-20">
                <div className="relative h-auto flex flex-col justify-center overflow-hidden">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-center px-4 py-2 rounded mt-10">
                        Nuestros aliados educativos:
                    </h2>
                    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
                        <div className="text-center">
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                                    {logoPairs.map(([name, url]) => (
                                    <li key={name + url}>
                                        <Image src={url} alt={name} width={170} height={140} />
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};