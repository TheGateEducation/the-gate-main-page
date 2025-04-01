// import SecondaryText from "@src/components/Text/SecondaryText.component";
import React from "react";
import Image from "next/image";
import safeWayData from '../../../../database/home/homePage.json'

const Safeway: React.FC = () => {

    return (
        <div className="relative w-full py-10 bg-white">
            <div className="flex flex-col items-center justify-center w-full h-full text-center relative p-5 ">
                <div className="max-w-screen-lg space-y-10 p-10 pb-10">
                    <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-customOrange">
                        {safeWayData.safewaySteps.title}
                    </h1>
                    <p>
                        {safeWayData.safewaySteps.subtitle}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row h-auto justify-center items-center " id="image-container">
                    {safeWayData.safewaySteps.steps.map(
                        ({ h2, p, src, alt }) => (
                            <div key={h2} className="flex flex-col items-center md:px-10 h-1/6 md:h-64 w-64">
                                <Image
                                    className="rounded-lg object-cover"
                                    src={src}
                                    alt={alt}
                                    width="80"
                                    height="80"
                                />
                                <h2 className="pt-3 text-2xl md:text-3xl font-bold text-customPurple">{h2}</h2>
                                <p className="text-textGray my-4 md:mt-6 md:mb-5">{p}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div >
    );
};


export default Safeway;