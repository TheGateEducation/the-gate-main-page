"use client";

import React, { useState } from "react";

type Tab = {
    id: number;
    label: string;
    images: { src: string; description: string; text?: string }[];
};

const TabsWithCarousel: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    // Datos para las tabs
    const tabs: Tab[] = [
        {
            id: 0,
            label: "Para estudiantes",
            images: [
                {
                    src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/Orientacio%CC%81n.jpg",
                    description: "Orientación",
                    text: "Te ayudamos a encontrar el programa académico que mejor se adapte a tus intereses profesionales y personales, así como a tu presupuesto, brindándote información detallada sobre los destinos, sus beneficios, las instituciones que representamos y sus programas de estudio."
                },
                {
                    src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/admision.jpg",
                    description: "Acompañamiento en el proceso de admisión",
                    text: "Te brindamos todo el apoyo, guía y ayuda durante todo el proceso de admisión. También te asesoramos en tu proceso de visa de estudiante y alojamiento. Te ayudamos a que tu proceso sea fácil."
                },
                {
                    src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/Asesori%CC%81a.jpg",
                    description: "Asesoría personalizada",
                    text: "Nos aseguramos de que recibas todo el apoyo necesario para tener una experiencia educativa extraordinaria en las instituciones que representamos. Te brindamos información sobre opciones de programas, becas, financiamiento y te damos la asesoría necesaria para que tu admisión, tus estudios y tu estancia en el extranjero sean un éxito."
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/sudamerica.jpg",
                  description: "Servicios para estudiantes en México, LATAM y el Caribe",
                  text: "Nuestros servicios están disponibles para estudiantes en México, LATAM y el Caribe. Ofrecemos asesoría en línea para brindar una atención personalizada en la comodidad de tu hogar, oficina o universidad."
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/evento_educativo.jpg",
                  description: "Organización de eventos educativos",
                  text: "Organizamos sesiones presenciales y en línea y webinars donde brindamos información sobre destinos, trámites y opciones para tu experiencia de estudios internacionales. También puedes reunirte con representantes de las diversas instituciones que representamos y obtener información detallada sobre sus programas de estudio."
                }
            ],
        },
        {
            id: 1,
            label: "Para instituciones",
            images: [
                {
                    src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/ciudades.jpg",
                    description: "Representación en los países donde operamos",
                },
                {
                    src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/marketing.jpg",
                    description: "Asesoría en estrategia de marketing",
                },
                {
                    src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/activa_estudiantes.jpg",
                    description: "Captación activa de estudiantes",
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/institucion_educativaa.jpg",
                  description: "Acercamiento con diversas instituciones educativas",
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg",
                  description: "Gestión y seguimiento de consultas de estudiantes a partir de eventos online y presenciales",
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/eventos_educativos.jpg",
                  description: "Representación en eventos en los países donde operamos",
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/proceso_admision.jpg",
                  description: "Gestión de solicitudes de admisión",
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/sesion_informativa.jpg",
                  description: "Sesiones informativas y seminarios en instituciones locales",
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/representantes.jpg",
                  description: "Promoción de las visitas de sus representantes institucionales",
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/laboratorio.jpg",
                  description: "Información de su institución educativa en nuestro sitio web",
                },
                {
                  src: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/webinars.jpg",
                  description: "Actividades de marketing one-on-one como webinars, sesiones informativas en escuelas; representación en ferias educativas y de intercambio estudiantil; seminarios sobre temas particulares, entre otros",
                },
            ],
        },
    ];

    const currentTab = tabs[selectedTab];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setSelectedTab(tab.id)}
                        className={`px-4 py-2 text-lg font-semibold ${
                            selectedTab === tab.id
                                ? "border-b-2 border-indigo-800	"
                                : ""
                        } hover:text-indigo-800`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Carousel */}
            <div className="overflow-x-auto flex space-x-4">
                {currentTab.images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-64">
                        <img
                            src={image.src}
                            alt={image.description}
                            className="w-64 h-48 object-cover rounded-lg shadow-lg" 
                        />
                        <p className="mt-2 text-justify	 text-lg text-gray-800 py-2">
                            {image.description}
                        </p>
                        <p className="mt-2 text-justify	 text-base text-gray-600">
                            {image.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabsWithCarousel;
