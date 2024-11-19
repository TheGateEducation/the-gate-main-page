import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
    return (
        <div className="flex flex-col  items-center justify-center px-14 md:px-6 lg:px-12 xl:px-40 py-10">
            <div className="md:w-1/2 mt-0 md:mt-0 md:ml-10 flex flex-col items-start justify-center text-justify md:text-left py-5 ">
                <p className="text-textGray mt-4 md:mt-6 mb-4 md:mb-5">
                    Somos un equipo dedicado que ofrece una amplia gama de
                    servicios a estudiantes latinoamericanos que estén
                    considerando estudiar en el extranjero, así como a
                    instituciones mexicanas que busquen establecer relaciones
                    exitosas con cualquiera de las instituciones que
                    representamos. Te brindamos, sin costo, toda la información
                    requerida sobre las opciones disponibles para tu experiencia
                    de estudio internacional, como destinos, instituciones,
                    experiencias de estudio disponibles, entre otros.
                </p>
            </div>
           
        </div>
    );
};

export default Content;
