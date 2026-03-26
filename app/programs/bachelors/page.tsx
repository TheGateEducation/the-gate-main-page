import { Inter } from "next/font/google";
import ProgramPage from "@src/components/cale/ProgramPage";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Licenciaturas - The Gate Education",
  description:
    "Explora programas de licenciatura en el extranjero con The Gate Education.",
  keywords:
    "licenciaturas, programas universitarios, estudiar en el extranjero, educación internacional",
};

export default function Bachelors() {
  return (
    <main>
      <ProgramPage initialCategoria="Licenciaturas" />
    </main>
  );
}
