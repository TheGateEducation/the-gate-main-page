export interface ProgramCategory {
  name: string;
  slug: string;
  image: string;
  description: string;
  href: string;
}

export const programCategories: ProgramCategory[] = [
  {
    name: "Maestrías",
    slug: "maestrias",
    image: "/images/maestrias.jpg",
    description: "Especialízate con programas de posgrado en universidades de clase mundial.",
    href: "/programs/masters",
  },
  {
    name: "Licenciaturas",
    slug: "licenciaturas",
    image: "/images/intercambio.jpg",
    description: "Cursa tu carrera completa en el extranjero con formación global.",
    href: "/programs/bachelors",
  },
  {
    name: "Idiomas",
    slug: "idiomas",
    image: "/images/idiomas.png",
    description: "Aprende o perfecciona un idioma con inmersión total en otro país.",
    href: "/programs",
  },
  {
    name: "Estudia y Trabaja",
    slug: "estudia-y-trabaja",
    image: "/images/estudiaytrabaja.jpg",
    description: "Combina estudios con experiencia laboral internacional.",
    href: "/programs",
  },
  {
    name: "Campamentos",
    slug: "campamentos",
    image: "/images/campamentoverano.jpg",
    description: "Experiencias de verano, invierno y primavera para jóvenes aventureros.",
    href: "/programs/camps",
  },
  {
    name: "Formación Técnica",
    slug: "formacion-tecnica",
    image: "/images/formaciontecnica.jpg",
    description: "Estudios técnicos prácticos para una rápida inserción laboral.",
    href: "/programs",
  },
  {
    name: "Intercambio",
    slug: "intercambio",
    image: "/images/graduacion.jpg",
    description: "Vive un semestre o año académico en una universidad internacional.",
    href: "/programs",
  },
  {
    name: "Año Sabático",
    slug: "gap-year",
    image: "/images/sabatical.jpg",
    description: "Tómate un año para explorar el mundo y descubrir tu vocación.",
    href: "/programs",
  },
  {
    name: "Programas en Línea",
    slug: "programas-en-linea",
    image: "/images/programaenlinea.jpg",
    description: "Estudia desde cualquier lugar con programas 100% en línea.",
    href: "/programs",
  },
];
