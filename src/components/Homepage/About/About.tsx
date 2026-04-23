import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <section id="aboutus" className="relative w-full py-32">
            <div className="flex flex-col md:flex-row items-center justify-center px-14 md:px-6 lg:px-12 xl:px-40">
                <div className="md:w-1/2 ">
                    <Image
                        className="rounded-3xl shadow-lg w-full h-full object-cover"
                        src="https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/working.jpg"
                        alt="working"
                        width={500}
                        height={475}
                    />
                </div>
                <div className="md:w-1/2 mt-0 md:mt-0 md:ml-10 flex flex-col items-start justify-center text-justify md:text-left pt-4">
                    <span className="inline-block px-4 py-1.5 bg-[#EDA74C]/10 text-[#EDA74C] text-sm font-semibold rounded-full mb-4">
                        Sobre nosotros
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        ¿Quiénes <span className="text-gradient">somos?</span>
                    </h2>
                    <p className="text-gray-600 mt-4 md:mt-6 mb-6 leading-relaxed">
                        Somos una empresa dedicada a brindar servicios de asesoría educativa para estudiantes que desean estudiar en el extranjero. Nuestro objetivo es ayudarte a encontrar la mejor opción de estudio para ti, de acuerdo a tus necesidades y expectativas. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el área de educación internacional. Estamos comprometidos en brindarte un servicio de calidad y en acompañarte en todo el proceso de postulación a la universidad de tus sueños.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#5F338B] text-white font-semibold rounded-full hover:bg-[#4b2870] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Agenda una consulta gratis
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About