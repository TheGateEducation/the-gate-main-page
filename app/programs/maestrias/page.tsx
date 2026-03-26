import ProgramPage from "@src/components/cale/ProgramPage";

export const metadata = {
  title: "Maestrías en el Extranjero | The Gate Education",
  description:
    "Impulsa tu carrera profesional con una maestría internacional. Explora programas en las mejores universidades del mundo.",
  keywords:
    "maestrías, masters, posgrado, estudiar en el extranjero, educación internacional, universidades",
};

export default function MaestriasPage() {
  return (
    <main>
      <ProgramPage initialCategoria="Maestrías" />
    </main>
  );
}
