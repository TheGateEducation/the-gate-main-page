import React from "react";
import Image from "next/image";
import Link from "next/link";

import alliancesData from '../../../../database/home/homePage.json'

const HereToHelp = () => {
    return (
        <section id="heretohelp" className="relative w-full py-20">
            <div className="flex flex-col md:flex-row items-center justify-center px-14 md:px-6 lg:px-12 xl:px-40 ">
                <div className="md:w-1/2 mt-0 md:mt-0 md:ml-10 flex flex-col items-start justify-center text-justify md:text-left pb-4 pr-10 ">
                    <span className="inline-block px-4 py-1.5 bg-[#5F338B]/10 text-[#5F338B] text-sm font-semibold rounded-full mb-4">
                        Alianzas
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        {alliancesData.alliances.title}
                    </h2>
                    <p className="text-gray-600 mt-4 md:mt-6 mb-6 leading-relaxed">
                        {alliancesData.alliances.paragraph}
                    </p>
                    <Link
                        href={alliancesData.alliances.ctaHref}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#EDA74C] text-white font-semibold rounded-full hover:bg-[#d99530] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                    >
                        {alliancesData.alliances.ctaLabel}
                    </Link>
                </div>
                <div className="md:w-1/2 ">
                    <Image
                        className="rounded-3xl shadow-lg w-full h-full object-cover"
                        src={alliancesData.alliances.image.src}
                        alt={alliancesData.alliances.image.alt}
                        width={1000}
                        height={475}
                    />
                </div>
            </div>
        </section>
    )
}

export default HereToHelp