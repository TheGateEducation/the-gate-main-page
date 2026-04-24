import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad | The Gate Education",
  description: "Aviso de Privacidad y manejo de datos personales de The Gate Education.",
};

export default function AvisoPrivacidadPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#5F338B] mb-4">
            AVISO DE PRIVACIDAD
          </h1>
          <h2 className="text-xl font-semibold text-[#FA5939]">
            The Gate Education
          </h2>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              En cumplimiento con lo establecido por la Ley Federal de Protección de Datos Personales
              en Posesión de los Particulares (LFPDPPP), su reglamento y demás disposiciones
              aplicables, <strong>The Gate Education</strong> (en adelante "TGE"), con domicilio en Distrito Federal
              325-3, Col. República, Saltillo, Coahuila 25280, México, hace de su conocimiento que es
              responsable del tratamiento y protección de sus datos personales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#5F338B] mb-4">1. Finalidades del tratamiento de datos personales</h3>
            <p className="mb-4">
              TGE tratará sus datos personales para las siguientes finalidades relacionadas con su
              carácter de CANDIDATO a programas de educación internacional:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Envío de información sobre programas educativos, promociones, eventos, webinars y materiales informativos.</li>
              <li>Brindar asesoría educativa y orientación para estudios en el extranjero.</li>
              <li>Gestionar procesos de aplicación a instituciones educativas internacionales.</li>
              <li>Orientación para realizar trámites de visa (según sea requerido por cada destino).</li>
              <li>Gestionar pagos, facturación y seguimiento administrativo de nuestros servicios.</li>
              <li>Evaluación de calidad del servicio.</li>
              <li>Estudios de mercado y análisis estadístico.</li>
            </ul>
            <p className="mt-4">
              Usted puede limitar el uso o divulgación de sus datos para cualquiera de estas finalidades
              enviando un correo electrónico a <a href="mailto:info@thegate-education.com" className="text-[#EDA74C] hover:underline font-semibold">info@thegate-education.com</a>.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#5F338B] mb-4">2. Datos personales que se recaban</h3>
            <p>
              TGE podrá recabar los siguientes datos personales: Datos de identificación: nombre completo, fecha de nacimiento, entre otros necesarios para la gestión de su solicitud. Estos datos se tratarán con medidas de seguridad reforzadas.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#5F338B] mb-4">3. Transferencia de datos</h3>
            <p className="mb-4">TGE podrá transferir sus datos personales a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Instituciones educativas extranjeras para fines de aplicación y seguimiento académico.</li>
              <li>Proveedores de servicios directamente relacionados con los fines mencionados (por ejemplo, traductores oficiales, plataformas académicas o financieras).</li>
            </ul>
            <p className="mt-4">
              Estas transferencias se realizarán bajo estrictas medidas de seguridad y confidencialidad, y
              exclusivamente cuando sean necesarias para prestar el servicio contratado.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#5F338B] mb-4">4. Ejercicio de derechos ARCO</h3>
            <p className="mb-4">
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse (ARCO) al tratamiento de sus
              datos personales. Para ejercer estos derechos, deberá enviar una solicitud al correo <a href="mailto:info@thegate-education.com" className="text-[#EDA74C] hover:underline font-semibold">info@thegate-education.com</a>, indicando:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo del titular.</li>
              <li>Descripción clara del derecho que desea ejercer.</li>
              <li>Medio de contacto para recibir respuesta.</li>
              <li>Documentos que acrediten su identidad o representación legal.</li>
            </ul>
            <p className="mt-4">La respuesta se emitirá en un plazo máximo de 20 días hábiles.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#5F338B] mb-4">5. Uso de tecnologías de rastreo</h3>
            <p>
              Nuestro sitio web puede utilizar cookies u otras tecnologías que permiten personalizar la
              experiencia del usuario. Usted puede configurar su navegador para desactivarlas si así lo desea.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#5F338B] mb-4">6. Cambios al aviso de privacidad</h3>
            <p>
              TGE podrá modificar este aviso en cualquier momento. Cualquier cambio será publicado en
              el sitio web <Link href="/" className="text-[#EDA74C] hover:underline font-semibold">www.thegate-education.com</Link>, en la sección "Aviso de privacidad".
            </p>
          </section>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center bg-[#5F338B] text-white py-4 px-8 rounded-full font-bold hover:bg-[#4b2870] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Volver al inicio
          </Link>
        </div>

      </div>
    </main>
  );
}