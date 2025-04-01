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
                    <h2 className="text-2xl md:text-3xl font-bold text-customOrange">¿Quiénes somos?</h2>
                    <p className="text-textGray mt-4 md:mt-6 mb-4 md:mb-5">
                        Somos una empresa dedicada a brindar servicios de asesoría educativa para estudiantes que desean estudiar en el extranjero. Nuestro objetivo es ayudarte a encontrar la mejor opción de estudio para ti, de acuerdo a tus necesidades y expectativas. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el área de educación internacional. Estamos comprometidos en brindarte un servicio de calidad y en acompañarte en todo el proceso de postulación a la universidad de tus sueños. ¡Haz realidad tu sueño de estudiar en el extranjero con nosotros!
                    </p>
                    <Link href="/contact" className="text-customPurple font-semibold text-lg underline">
                        Agenda una consulta gratis
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About