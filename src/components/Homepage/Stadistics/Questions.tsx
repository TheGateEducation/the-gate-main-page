import React from 'react';
import Link from 'next/link';

const Questions: React.FC = () => {
    return (
        <div className="relative bg-gradient-to-br from-[#5F338B] via-[#7B4BAE] to-[#9747FF] py-20 text-white text-center overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
            <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-[40px] px-6">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left leading-tight">
                    ¿Tienes preguntas?
                </h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#EDA74C] text-white font-bold text-lg rounded-full hover:bg-[#d99530] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                    Nosotros respuestas
                </Link>
            </div>
        </div>

    );
};

export default Questions;
