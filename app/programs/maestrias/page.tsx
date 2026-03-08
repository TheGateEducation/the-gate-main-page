import React from "react";
import MaestriasContent from "@src/components/cale/MaestriasContent";

export const metadata = {
  title: "Maestrías en el Extranjero | The Gate Education",
  description: "Impulsa tu carrera profesional con una maestría internacional. Explora opciones en diversos países y áreas de estudio.",
};

export default function MaestriasPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <MaestriasContent />
    </main>
  );
}