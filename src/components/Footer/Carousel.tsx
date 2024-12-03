import React from "react";
import Image from "next/image";

const logos = {
    adelaide: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/adelaide.png",
    aiit: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/aiit.png",
    alc: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/alc.png",
    australian: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/asutralian.png",
    bau: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/bau.png",
    cbs: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/cbs.png",
    ciencias: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/ciencias.png",
    ciss: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/ciss.png",
    constructor: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/constructor.png",
    curtini: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/curtini.png",
    deakin: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/deakin.png",
    dublin : "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/difc.png",
    ecole: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/EMA_paris.png",
    eduinter: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/eduinter.png",
    ep: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/ep.png",
    gbs_d: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/gbs.png",
    gbs_m: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/gbs_malta.png",
    holmes: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/holmes.png",
    international : "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/IH.jpeg",
    icms: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/ICMS.png",
    james: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/james.png",
    insight: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/INSIGHT.gif",
    lakehead: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/lakehead.jpg",
    latrobe: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/latrobe.png",
    macquarie: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/macquarie.png",
    ncl: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/ncl.png",
    ohc: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/ohc.png",
    outsorce: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/pipi_popo.png",
    rmit: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/rmit.png",
    sarina: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/SARINA.png",
    schiller: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/schiller.png",
    sol : "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/sol.png",
    souther: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/souther.png",
    srh: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/srh.png",
    stanley: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/stanley.png",
    tm: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/tm.png",
    nw: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/preparate_gris+(1).jpg",
    wester: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logo/WESTERNASUTR.jpg"
};

const Logos = Object.entries(logos);

export const Carousel = () => {
    return (
        <>
            <div className="relative font-inter antialiased">
                <div className="relative h-3/5 flex flex-col justify-center overflow-hidden">
                    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
                        <div className="text-center">
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
                                    {Object.entries(logos).map(([name, logo]) => (
                                        <li key={name}>
                                            <Image
                                                src={logo}
                                                alt={name}
                                                width={170}
                                                height={140}
                                            />
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