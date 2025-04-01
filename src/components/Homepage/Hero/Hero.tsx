import React from 'react';
import data from '../../../../database/home/homePage.json'; // ajusta la ruta según tu estructura

const Hero = () => {
    return (
        <div className="flex h-screen">
            <div
                className="w-3/5 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${data.heroContent.image})`,
                }}
            />

            <div className="w-2/5 flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-purple-50">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                    {data.heroContent.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
                    {data.heroContent.subtitle}
                </p>
            </div>
        </div>
    );
};

export default Hero;
