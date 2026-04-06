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
    description: "Canadá es uno de los países más seguros y amigables para estudiantes internacionales. Ofrece educación de alta calidad, diversidad cultural y una excelente oportunidad para mejorar tu inglés o francés.",
    href: "/programs",
    position: { top: "22%", left: "4%" },
  },
  {
    name: "Reino Unido",
    flag: "\u{1F1EC}\u{1F1E7}",
    flagImage: "/images/uk flag.png",
    programs: "60+",
    description: "Estudia en uno de los sistemas educativos más prestigiosos del mundo. El Reino Unido ofrece excelencia académica, experiencias culturales únicas y una gran diversidad de programas internacionales.",
    href: "/programs",
    position: { top: "18%", right: "5%" },
  },
  {
    name: "Australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    flagImage: "/images/australia flag.png",
    programs: "35+",
    description: "Australia ofrece educación innovadora, ciudades modernas y un estilo de vida relajado. Es un destino ideal para estudiantes que buscan calidad académica mientras viven una experiencia internacional inolvidable.",
    href: "/programs",
    position: { bottom: "30%", left: "6%" },
  },
  {
    name: "Estados Unidos",
    flag: "\u{1F1FA}\u{1F1F8}",
    flagImage: "/images/usa flag.png",
    programs: "80+",
    description: "Uno de los destinos académicos más reconocidos del mundo. Estudiar en Estados Unidos te permite vivir una educación dinámica, practicar inglés diariamente y acceder a una gran variedad de actividades académicas y culturales.",
    href: "/programs",
    position: { top: "38%", right: "4%" },
  },
  {
    name: "Alemania",
    flag: "\u{1F1E9}\u{1F1EA}",
    flagImage: "/images/alemania flag.webp",
    programs: "25+",
    description: "Alemania destaca por su excelencia académica y su fuerte enfoque en innovación y tecnología. Estudiar aquí te permite acceder a programas de alto nivel en un entorno multicultural.",
    href: "/programs",
    position: { bottom: "22%", right: "8%" },
  },
  {
    name: "Francia",
    flag: "\u{1F1EB}\u{1F1F7}",
    flagImage: "/images/francia flag.png",
    programs: "20+",
    description: "Francia combina una educación de prestigio con una riqueza cultural incomparable. Es el destino perfecto para estudiantes interesados en arte, gastronomía, historia y aprendizaje del idioma francés.",
    href: "/programs",
    position: { bottom: "38%", left: "14%" },
  },
  {
    name: "Irlanda",
    flag: "\u{1F1EE}\u{1F1EA}",
    flagImage: "/images/irlanda flag.png",
    programs: "15+",
    description: "Irlanda combina tradición académica con un ambiente joven y vibrante. Es un destino ideal para perfeccionar tu inglés mientras disfrutas de una cultura acogedora y ciudades llenas de historia.",
    href: "/programs",
  },
  {
    name: "Emiratos Árabes Unidos",
    flag: "\u{1F1E6}\u{1F1EA}",
    flagImage: "/images/emiratos flag.png",
    programs: "10+",
    description: "Un destino moderno y global que conecta culturas de todo el mundo. Emiratos ofrece universidades internacionales, innovación tecnológica y una experiencia multicultural única.",
    href: "/programs",
  },
  {
    name: "Nueva Zelanda",
    flag: "\u{1F1F3}\u{1F1FF}",
    flagImage: "/images/nueva zelanda flag.png",
    programs: "15+",
    description: "Nueva Zelanda ofrece un entorno seguro, naturaleza impresionante y educación de alta calidad. Es ideal para estudiantes que buscan combinar estudios con una experiencia cultural y de aventura única.",
    href: "/programs",
  },
  {
    name: "España",
    flag: "\u{1F1EA}\u{1F1F8}",
    flagImage: "/images/SpainFlag.png",
    programs: "10+",
    description: "España combina excelencia académica con una vida estudiantil vibrante. Es ideal para estudiantes que buscan calidad educativa mientras disfrutan de su cultura, idioma y estilo de vida.",
    href: "/programs",
  },
  {
    name: "Suecia",
    flag: "\u{1F1F8}\u{1F1EA}",
    flagImage: "/images/suecia flag.svg",
    programs: "10+",
    description: "Suecia es líder en innovación, sostenibilidad y educación de alta calidad. Estudiar aquí te permite aprender en un entorno moderno, internacional y enfocado en el futuro.",
    href: "/programs",
  },
];
