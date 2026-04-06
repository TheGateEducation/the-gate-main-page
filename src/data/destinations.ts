export interface Destination {
  name: string;
  flag: string;       // emoji fallback
  flagImage: string;  // path to flag image
  programs: string;
  description: string;
  href: string;
  /** Position hints for Hero floating cards (desktop only) */
  position?: { top?: string; left?: string; right?: string; bottom?: string };
}

export const destinations: Destination[] = [
  {
    name: "Canadá",
    flag: "\u{1F1E8}\u{1F1E6}",
    flagImage: "/images/canada flag.png",
    programs: "45+",
    description: "Calidad de vida, multiculturalidad y opciones de trabajo post-estudio.",
    href: "/programs?country=Canada",
    position: { top: "22%", left: "4%" },
  },
  {
    name: "Reino Unido",
    flag: "\u{1F1EC}\u{1F1E7}",
    flagImage: "/images/uk flag.png",
    programs: "60+",
    description: "Universidades de clase mundial y maestrías de un año.",
    href: "/programs?country=UK",
    position: { top: "18%", right: "5%" },
  },
  {
    name: "Australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    flagImage: "/images/australia flag.png",
    programs: "35+",
    description: "Innovación académica, clima increíble y permisos de trabajo.",
    href: "/programs?country=Australia",
    position: { bottom: "30%", left: "6%" },
  },
  {
    name: "Estados Unidos",
    flag: "\u{1F1FA}\u{1F1F8}",
    flagImage: "/images/usa flag.png",
    programs: "80+",
    description: "El sistema educativo más diverso y reconocido del mundo.",
    href: "/programs?country=USA",
    position: { top: "38%", right: "4%" },
  },
  {
    name: "Alemania",
    flag: "\u{1F1E9}\u{1F1EA}",
    flagImage: "/images/alemania flag.webp",
    programs: "25+",
    description: "Educación de excelencia con costos accesibles en el corazón de Europa.",
    href: "/programs?country=Germany",
    position: { bottom: "22%", right: "8%" },
  },
  {
    name: "Francia",
    flag: "\u{1F1EB}\u{1F1F7}",
    flagImage: "/images/francia flag.png",
    programs: "20+",
    description: "Arte, cultura y programas bilingües en una potencia académica.",
    href: "/programs?country=France",
    position: { bottom: "38%", left: "14%" },
  },
  {
    name: "Irlanda",
    flag: "\u{1F1EE}\u{1F1EA}",
    flagImage: "/images/irlanda flag.png",
    programs: "15+",
    description: "Educación de alta calidad en un entorno angloparlante y acogedor.",
    href: "/programs?country=Ireland",
  },
  {
    name: "Malta",
    flag: "\u{1F1F2}\u{1F1F9}",
    flagImage: "/images/malta flag.png",
    programs: "10+",
    description: "Aprende inglés en el Mediterráneo con programas accesibles.",
    href: "/programs?country=Malta",
  },
  {
    name: "Emiratos Árabes",
    flag: "\u{1F1E6}\u{1F1EA}",
    flagImage: "/images/emiratos flag.png",
    programs: "10+",
    description: "Hub global con universidades internacionales y oportunidades únicas.",
    href: "/programs?country=UAE",
  },
  {
    name: "Nueva Zelanda",
    flag: "\u{1F1F3}\u{1F1FF}",
    flagImage: "/images/nueva zelanda flag.png",
    programs: "15+",
    description: "Naturaleza, seguridad y un sistema educativo innovador.",
    href: "/programs?country=New+Zealand",
  },
  {
    name: "España",
    flag: "\u{1F1EA}\u{1F1F8}",
    flagImage: "/images/SpainFlag.png",
    programs: "10+",
    description: "Estudia en español o inglés en universidades europeas reconocidas.",
    href: "/programs?country=Spain",
  },
  {
    name: "Italia",
    flag: "\u{1F1EE}\u{1F1F9}",
    flagImage: "/images/ItalyFlag.png",
    programs: "10+",
    description: "Diseño, moda, ingeniería y cultura en una de las cunas de la civilización.",
    href: "/programs?country=Italy",
  },
];
