import React from "react";
import Image from "next/image";
import Link from "next/link";

import alliancesData from '../../../../database/home/homePage.json'

const HereToHelp = () => {
    return (
        <section id="heretohelp" className="relative w-full py-20">
            <div className="flex flex-col md:flex-row items-center justify-center px-14 md:px-6 lg:px-12 xl:px-40 ">
                <div className="md:w-1/2 mt-0 md:mt-0 md:ml-10 flex flex-col items-start justify-center text-justify md:text-left pb-4 pr-10 ">
                    <h2 className="text-2xl md:text-3xl font-bold text-customOrange">
                        {alliancesData.alliances.title}
                    </h2>
                    <p className="text-textGray mt-4 md:mt-6 mb-4 md:mb-5 text-justify md:text-left">
                        {alliancesData.alliances.paragraph}
                    </p>
                    <Link href={alliancesData.alliances.ctaHref} className="text-customPurple font-semibold text-lg underline ">
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