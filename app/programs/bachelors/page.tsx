import { Inter } from "next/font/google";
import ProgramPage from "@src/components/cale/ProgramPage";
import { getAllLicenciaturas } from "@src/lib/parseLicenciaturas";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Licenciaturas - The Gate Education",
  description:
    "Explora programas de licenciatura en el extranjero con The Gate Education.",
  keywords:
    "licenciaturas, programas universitarios, estudiar en el extranjero, educación internacional",
};

export default function Bachelors() {
  const programs = getAllLicenciaturas();

  return (
    <main>
      <ProgramPage initialCategoria="Licenciaturas" initialData={programs} />
    </main>
  );
}
