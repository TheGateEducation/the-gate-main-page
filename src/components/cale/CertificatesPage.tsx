"use client";

import { certificates } from "@src/data/certificates";

export default function CertificatesPage() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {certificates.map((course) => (
        <div
          key={course.title}
          className="border-4 border-[#F2A950] rounded-2xl p-6 bg-white"
        >
          <h2 className="text-xl font-bold mb-2 text-center">
            {course.title}
          </h2>

          <p>
            <strong>Área:</strong> {course.area}
          </p>

          <a
            href="#"
            className="text-blue-600 underline mt-4 inline-block"
          >
            Más información
          </a>
        </div>
      ))}
    </section>
  );
}