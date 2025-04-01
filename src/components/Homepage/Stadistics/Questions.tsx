import React from 'react';
import Link from 'next/link';

const Questions: React.FC = () => {
    return (
        <div className="bg-[#6a3392] py-20 text-white text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 py-[40px]">
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">
                        ¿Tienes preguntas?
                    </h1>
                </div>
                <Link href="/contact">
                <button style={{ fontSize: '20px' }} className="bg-customOrange text-white py-3 px-4 rounded-3xl hover:bg-customOrangeHover">
                    Nosotros respuestas
                </button>
                </Link>
            </div>
        </div>

    );
};

export default Questions;
