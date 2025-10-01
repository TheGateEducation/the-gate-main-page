"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import Hero from "@src/components/Hero/Hero";
import ServiceCard from "@src/components/estudiantes/ServiceCard";
import SummaryCard from "@src/components/estudiantes/SummaryCard";


const inter = Inter({subsets: ["latin"]});

// export const metadata = {
//     title: "Estudiantes - The Gate Education",
//     description: "Todo lo que necesitas para estudiar en el extranjero en un solo lugar. Ofrecemos asesoría, revisión de CV, preparación para entrevistas, apoyo con la visa y más.",
//   keywords: [
//     'estudiar en el extranjero',
//     'servicios para estudiantes',
//     'asesoría educativa',
//     'revisión de CV',
//     'carta de motivación',
//     'aplicación de visa de estudiante',
//     'becas para estudiar en el extranjero',
//     'alojamiento para estudiantes',
//     'preparación para admisión',
//     'The Gate'
//   ]
// };

interface Service {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  borderColor: string;
}

const allServices: Service[] = [
  // Gratuitos
  { id: 1, category: "Gratuitos", title: "Asesoría Inicial", description: "En una sesión de hasta 45 minutos, revisaremos tu perfil e intereses para explorar opciones de destinos y programas que se adapten a ti.Puedes reprogramar solo una vez con al menos 24 horas de anticipación. Si no asistes, no se podrá reagendar.", price: 0, borderColor: "#5F338B" },
  { id: 2, category: "Gratuitos", title: "Envío de primeras opciones", description: "Recibe un primer listado con máximo tres universidades en hasta tres países distintos, seleccionadas según tu perfil e intereses.", price: 0, borderColor: "#5F338B" },
  // Servicios Completos
  { id: 3, category: "Servicios Completos", title: "Servicio de Orientación", description: "Incluye revisión de beneficios por país (estudio, trabajo, posgrados), envío de opciones académicas, recepción y certificación de documentos, información sobre becas y apoyos, métodos de pago, hospedaje y viaje.", price: 500, borderColor: "#EDA74C" },
  { id: 4, category: "Servicios Completos", title: "Bundle package", description: "Incluye revisión de CV, carta de motivación, ensayo para beca y preparación para entrevistas. También orientación para visa, hospedaje y plan de viaje.", price: 89, borderColor: "#EDA74C" },
  // Servicios por Separado
  { id: 5, category: "Servicios por Separado", title: "Revisión de CV", description: "Corrección en máximo 5 días, incluye hasta 2 revisiones.Enfocado en claridad y estructura.No incluye redacción desde cero ni asesoría 1:1.", price: 5, borderColor: "#5F338B" },
  { id: 6, category: "Servicios por Separado", title: "Revisión de Motivation Letter", description: "Corrección en máximo 5 días, con hasta 3 versiones por texto (1 feedback completo + 2 ajustes).Enfoque en claridad, estructura y mensaje.Para quienes ya tienen un borrador.No incluye redacción desde cero ni asesoría 1:1. Máx. 2 páginas. Aplicación a un programa específico.", price: 15, borderColor: "#5F338B" },
  { id: 7, category: "Servicios por Separado", title: "Preparación para entrevista de admisión", description: "Simulación de entrevista con retroalimentación detallada y segunda ronda para reforzar.Incluye tips clave para destacar en tu aplicación.", price: 15, borderColor: "#5F338B" },
  { id: 8, category: "Servicios por Separado", title: "Revisión de ensayo para beca", description: "Corrección en máximo 5 días, con hasta 3 versiones por texto (1 feedback completo + 2 ajustes).Enfoque en claridad, estructura y mensaje alineado al perfil y beca específica.Para quienes ya tienen un texto o borrador.No incluye redacción desde cero ni asesoría 1:1. Máx. 2 páginas.", price: 15, borderColor: "#5F338B" },
  { id: 9, category: "Servicios por Separado", title: "Apoyo para aplicación de visa", description: "Incluye indicaciones previas, revisión de documentos y llenado conjunto del formulario.Máx. 2 sesiones de 60 minutos.El estudiante debe contar con toda información y documentos listos.Tiempo adicional se cobra por separado.", price: 47, borderColor: "#5F338B" },
  { id: 10, category: "Servicios por Separado", title: "Orientación de housing y plan de viaje", description: "Te guiamos en la búsqueda de alojamiento, transporte y logística previa a tu llegada.Incluye recomendaciones, plataformas confiables y tips clave para organizar tu traslado y estadía.", price: 10, borderColor: "#5F338B" },
];



export default function Estudiante() {
  // 3. Añadimos el estado para guardar los IDs de los servicios seleccionados
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleToggleService = (id: number) => {
    setSelectedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((serviceId) => serviceId !== id)
        : [...prevIds, id]
    );
  };

  const selectedServices = allServices.filter(service => selectedIds.includes(service.id));

  // Agrupamos los servicios por categoría para renderizarlos fácilmente
  const servicesGratuitos = allServices.filter(s => s.category === "Gratuitos");
  const servicesCompletos = allServices.filter(s => s.category === "Servicios Completos");
  const servicesSeparado = allServices.filter(s => s.category === "Servicios por Separado");

  return (
    <main>
      <Hero
        title="Nuestros servicios para estudiantes"
        subtitle="Todo lo que necesitas para estudiar en el extranjero, reunido en un solo lugar."
      />

      {/* Contenedor principal con layout de 2 columnas para pantallas grandes */}
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Columna Izquierda: Lista de Servicios */}
        <div className="flex w-full flex-col items-center space-y-8">
          
          {/* Sección Gratuitos */}
          <h1 className="font-inter text-center font-bold text-[#5F338B] text-3xl leading-tight sm:text-4xl lg:text-5xl">Gratuitos</h1>
          {servicesGratuitos.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              price={service.price === 0 ? "Gratis" : `$ ${service.price} USD`}
              borderColor={service.borderColor}
              isSelected={selectedIds.includes(service.id)}
              onToggle={handleToggleService}
            />
          ))}

          {/* Sección Servicios Completos */}
          <h1 className="pt-20 font-inter text-center font-bold text-[#EDA74C] text-3xl leading-tight sm:text-4xl lg:text-5xl">Servicios Completos</h1>
          {servicesCompletos.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              price={`$ ${service.price} USD`}
              borderColor={service.borderColor}
              isSelected={selectedIds.includes(service.id)}
              onToggle={handleToggleService}
            />
          ))}

          {/* Sección Servicios por Separado */}
          <h1 className="pt-20 font-inter text-center font-bold text-[#5F338B] text-3xl leading-tight sm:text-4xl lg:text-5xl">Servicios por Separado</h1>
          {servicesSeparado.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              price={`$ ${service.price} USD`}
              borderColor={service.borderColor}
              isSelected={selectedIds.includes(service.id)}
              onToggle={handleToggleService}
            />
          ))}

            <div className="w-full pt-20 items-center">
            <div className="sticky top-8 items-center"> {/* El sticky hace que no se mueva al hacer scroll */}
                <h1 className="mb-8 pb-10 font-inter text-4xl font-bold leading-tight text-orange-500 lg:text-5xl bg-gradient-to-r from-[#EDA74C] to-[#9747FF] bg-clip-text text-transparent  ">
                Revisa las aventuras que elegiste
                </h1>
                <SummaryCard selectedServices={selectedServices} />
            </div>
            </div>
        </div>
      </div>
    </main>
  );
}