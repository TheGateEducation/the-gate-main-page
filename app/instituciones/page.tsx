//app/page.tsx

import InfoCard from '@src/components/instituciones/InfoCard';
import Hero from "@src/components/Hero/Hero";

const servicesData = [
  { title: 'Captación activa de estudiantes.', borderColor: '#EDA74C' },
  { title: 'Gestión de solicitudes de admisión.', borderColor: '#5F338B' },
  { title: 'Información de su institución educativa en nuestro sitio web.', borderColor: '#EDA74C' },
  { title: 'Asesoría en estrategia de marketing para México y Latinoamérica.', borderColor: '#5F338B' },
  { title: 'Promoción de visitas de representantes institucionales.', borderColor: '#EDA74C' },
  { title: 'Representación personalizada a la medida de sus necesidades en el país donde operamos.', borderColor: '#5F338B' },
  { title: 'Gestión y seguimiento de consultas de estudiantes en eventos en línea y presenciales.', borderColor: '#EDA74C' },
  { title: 'Sesiones informativas y seminarios en instituciones locales (preparatorias, universidades y empresas).', borderColor: '#5F338B' },
  { title: 'Actividades de marketing directo como sesiones en vivo...', borderColor: '#5F338B' },
];

export default function ServicesPage() {
  return (
    <main className="bg-white w-full max-w-7xl mx-auto px-8 py-16">
        <Hero
            title="Nuestros servicios para instituciones"
            subtitle="Todo lo que necesitas para ser un aliado de la educación internacional."
        />

      
      {/* ===== INICIO DE LA CORRECCIÓN ===== */}
      <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
        {/*
          - Se eliminó "md:grid-cols-2".
          - Se añadió "max-w-2xl" para limitar el ancho en pantallas grandes.
          - Se añadió "mx-auto" para centrar el contenedor.
        */}
        {servicesData.map((service, index) => (
          <InfoCard
            key={index}
            title={service.title}
            borderColor={service.borderColor}
          />
        ))}
      </div>
      {/* ===== FIN DE LA CORRECCIÓN ===== */}

    </main>
  );
}