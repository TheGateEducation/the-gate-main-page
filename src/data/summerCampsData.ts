export interface ProgramType {
  id: string;
  title: string;
  description: string;
  ages?: string;
  image: string; 
}

export interface DestinationProgram {
  title: string;
  description?: string;
}

export interface Destination {
  id: string;
  country: string;
  subtitle: string;
  description: string;
  flagImage: string; 
  programas: DestinationProgram[];
  incluye: string[];
}

export const programTypes: ProgramType[] = [
  {
    id: "campamento-tradicional",
    title: "Campamento tradicional",
    description: "Es un campamento en donde los chicos disfrutarán de una aventura de verano. Dentro de las actividades, desarrollarán habilidades en deportes, artes, actividades en el exterior y el idioma inglés. Este programa los impulsa a desarrollar una relación positiva con la naturaleza. Incluye actividades deportivas de agua y tierra, programación de arte y música, 10 horas de clase de inglés por semana o 10 horas de lecciones de Forest School por semana.",
    ages: "8-14 años",
    image: "/images/campamentoverano.jpg" 
  },
  {
    id: "city-camps",
    title: "City Camps",
    description: "Viaja y mejora tu inglés mientras descubres una nueva ciudad y conoces gente de todo el mundo. Estos programas están diseñados para alcanzar los objetivos de aprendizaje del idioma. Recorrerán los lugares urbanos más interesantes del destino, aprenderán nuevas habilidades y harán nuevos amigos en el camino, para vivir una experiencia que durará toda la vida. Contáctanos para conocer las ciudades disponibles.",
    ages: "12-18 (dependiendo la ciudad)",
    image: "/images/toursdeestudio.jpg" 
  },
  {
    id: "cursos-interes-especial",
    title: "Cursos de interés especial",
    description: "Estos son cursos de aprendizaje que se adaptan a la personalidad y objetivos del estudiante. Diseñados para quienes están interesados en temas 'más allá de sólo inglés', estos cursos les permiten adquirir conocimientos y habilidades en un área temática. Los programas están enfocados en áreas como liderazgo, negocios, preparación universitaria, tecnología, artes, diseño, ingeniería, cocina o medicina. También contamos con programas dirigidos a deportistas de alto rendimiento.",
    ages: "14-18 (dependiendo el programa)",
    image: "/images/formaciontecnica.jpg" 
  },
  {
    id: "summer-homestay",
    title: "Summer Homestay Experience",
    description: "Inmersión cultural total viviendo con una familia local. Ideal para estudiantes independientes que quieren practicar el idioma todos los días. Es un programa de alojamiento con familias, que brinda a los jóvenes la oportunidad de integrarse verdaderamente en la cultura del país anfitrión. Participarán en actividades cotidianas y practicarán su inglés en un ambiente hogareño, amigable, solidario y seguro.",
    ages: "15-18",
    image: "/images/intercambio.jpg" 
  },
  {
    id: "programas-familiares",
    title: "Programas familiares",
    description: "Viaja y estudia junto a tu familia. Los padres pueden tomar cursos mientras los hijos participan en el campamento. Estos crean una experiencia de inglés diferente, reconociendo la importancia de las conexiones familiares y la influencia positiva que tienen en la experiencia de aprendizaje. El programa proporciona una manera única a las familias para viajar juntos y disfrutar una increíble experiencia.",
    image: "/images/idiomas.png" 
  },
  {
    id: "jovenes-adultos",
    title: "Programas para jóvenes adultos",
    description: "Programas recreativos y de trabajo en los Estados Unidos para estudiantes entre 18 y 28 años. ¡Vive una experiencia en el extranjero y gana dinero por ello!",
    image: "/images/estudiaytrabaja.jpg" 
  },
];

export const campDestinations: Destination[] = [
  {
    id: "canada",
    country: "Canadá",
    subtitle: "Vive el verano en Canadá mientras perfeccionas tu inglés",
    description: "Descubre Canadá a través de programas que combinan aprendizaje de idiomas, liderazgo y experiencias inolvidables en entornos urbanos y naturales. Desde la vibrante ciudad de Toronto hasta un tradicional campamento canadiense junto al lago, los estudiantes desarrollan habilidades académicas, sociales y personales en un ambiente internacional y seguro.",
    flagImage: "/images/canada flag.png",
    programas: [
      { title: "Clases de inglés", description: "Programas de Inglés General y opciones académicas especializadas en un entorno internacional." },
      { title: "Programas académicos especializados", description: "Liderazgo Global, Futuros Emprendedores y Preparación Académica para estudiantes que buscan un enfoque más desafiante." },
      { title: "French Camp", description: "Programa de inmersión en francés que combina aprendizaje del idioma con actividades culturales y recreativas en un entorno francófono." },
      { title: "Campamento canadiense tradicional", description: "Experiencia en entorno natural con enfoque en liderazgo, actividades al aire libre y vida en comunidad." }
    ],
    incluye: [
      "Alojamiento",
      "Plan de alimentos",
      "Actividades y excursiones",
      "Supervisión completa"
    ]
  },
  {
    id: "reino-unido",
    country: "Reino Unido",
    subtitle: "Perfecciona tu inglés en la cuna de la tradición académica",
    description: "Vive una experiencia internacional en el Reino Unido combinando clases de inglés con actividades deportivas, artísticas y culturales en destinos emblemáticos. Los estudiantes desarrollan confianza, independencia y habilidades globales mientras se sumergen en la cultura británica.",
    flagImage: "/images/uk flag.png",
    programas: [
      { title: "Clases de inglés para jóvenes", description: "Programas dinámicos que integran actividades como equitación, deportes, artes y experiencias culturales." },
      { title: "Cursos especializados", description: "Opciones académicas como Business and Leadership, Global Leadership y programas con enfoque académico para quienes buscaban un reto adicional." },
      { title: "Programas deportivos de alto rendimiento", description: "Entrenamiento especializado para atletas comprometidos que desean potenciar su desarrollo competitivo." },
      { title: "Fútbol en Inglaterra (Reading)", description: "Oportunidad para jugadores internacionales de entrenar y competir en un entorno profesional dentro del sistema del fútbol inglés." }
    ],
    incluye: [
      "Alojamiento en residencia o familia anfitriona (según programa)",
      "Plan de alimentos",
      "Actividades y excursiones organizadas",
      "Supervisión y acompañamiento integral"
    ]
  },
  {
    id: "alemania",
    country: "Alemania",
    subtitle: "Aprende alemán mientras vives una experiencia internacional",
    description: "Descubre Alemania a través de un programa diseñado para jóvenes que desean perfeccionar el idioma mientras participan en actividades culturales, deportivas y recreativas. Una experiencia completa que combina aprendizaje, diversión y convivencia internacional en algunos de los destinos más atractivos del país.",
    flagImage: "/images/alemania flag.webp",
    programas: [
      { title: "Clases de alemán para jóvenes", description: "Programas diseñados para desarrollar habilidades comunicativas en un entorno dinámico e internacional." },
      { title: "Programa con actividades integradas", description: "Experiencia que combina aprendizaje del idioma con actividades deportivas, creativas y culturales." }
    ],
    incluye: [
      "Alojamiento en residencia estudiantil o familia anfitriona",
      "Plan de alimentos",
      "Actividades deportivas y recreativas",
      "Excursiones culturales a ciudades históricas y puntos de interés",
      "Supervisión y acompañamiento integral"
    ]
  },
  {
    id: "emiratos-arabes",
    country: "Emiratos Árabes",
    subtitle: "Aprende inglés en una de las ciudades más innovadoras del mundo",
    description: "Vive una experiencia internacional en Dubái mientras perfeccionas tu inglés en un entorno moderno, multicultural y dinámico. Este programa combina aprendizaje académico con la oportunidad de descubrir una ciudad reconocida por su arquitectura, diversidad cultural y visión global.",
    flagImage: "/images/emiratos flag.png",
    programas: [
      { title: "Clases de inglés en diferentes modalidades", description: "Opciones en horario matutino, vespertino o intensivo, adaptadas a tu nivel actual." },
      { title: "International Diploma in Business", description: "Formación en áreas como marketing, emprendimiento, organizaciones empresariales y negocios internacionales." },
      { title: "Opción Work & Study con visa de 1 año", description: "Programa diseñado para estudiantes que desean combinar estudios con experiencia internacional. Incluye proceso de visa, seguro médico y documentación correspondiente." }
    ],
    incluye: [
      "Opciones de alojamiento en residencia o departamento compartido",
      "Acompañamiento durante la estancia"
    ]
  },
  {
    id: "francia",
    country: "Francia",
    subtitle: "Vive una experiencia académica internacional en el corazón de París",
    description: "Descubre París a través de un programa preuniversitario diseñado para jóvenes que desean explorar su futuro académico en un entorno internacional. Esta experiencia combina aprendizaje aplicado con inmersión cultural en una de las ciudades más icónicas del mundo.",
    flagImage: "/images/francia flag.png",
    programas: [
      { title: "Curso general de frances en EP París", description: "Programa disponible desde nivel A1 hasta C1, con 15 o 20 horas por semana bajo un enfoque comunicativo que fortalece conversación, comprensión y fluidez." },
      { title: "Programa académico preuniversitario", description: "Enfoque en áreas como negocios internacionales, emprendimiento y tecnología, con metodología aplicada y visión global." }
    ],
    incluye: [
      "Placement test y seguimiento académico personalizado",
      "Tutorías periódicas, Conversation Club y Study Clinics",
      "Certificación oficial al finalizar el programa",
      "Actividades culturales y sociales en París",
      "Alojamiento y acompañamiento integral durante la estancia"
    ]
  },
  {
    id: "irlanda",
    country: "Irlanda",
    subtitle: "Aprende inglés frente al mar en la costa irlandesa",
    description: "Descubre Irlanda a través de programas diseñados para jóvenes y adultos que buscan mejorar su inglés mientras viven una auténtica experiencia internacional. Desde la tranquilidad costera de Bray hasta la energía de Dublín, cada opción combina aprendizaje, cultura y desarrollo personal en un entorno seguro y dinámico.",
    flagImage: "/images/irlanda flag.png",
    programas: [
      { title: "Clases de inglés en Bray", description: "Estudia en una ciudad costera cercana a Dublín, en un entorno académico internacional." },
      { title: "Programa Work & Study en Dublín (+18)", description: "Combina clases de inglés (15 o 20 horas por semana) con la posibilidad de adquirir experiencia laboral durante tu estancia. Apoyo en búsqueda de alojamiento." }
    ],
    incluye: [
      "Opciones de alojamiento en residencia, apartamento o homestay",
      "Seguro médico (según el programa)",
      "Orientación académica y administrativa",
      "Supervisión y acompañamiento integral durante la estancia"
    ]
  },
  {
    id: "malta",
    country: "Malta",
    subtitle: "Aprende inglés en el Mediterráneo",
    description: "Vive una experiencia internacional en St. Paul's Bay y St. Julian's, encantadores destinos costeros en Malta. Este programa combina clases de inglés con actividades recreativas y culturales en un ambiente seguro, dinámico y multicultural, rodeado de playas, historia y paisajes mediterráneos.",
    flagImage: "/images/malta flag.png",
    programas: [
      { title: "Clases de inglés", description: "Opciones Classic o Semi-Intensive adaptadas a tu nivel y objetivos académicos." },
      { title: "Opción Work & Study", description: "Programa para mayores de 18 años que combina estudios con experiencia internacional en uno de los destinos más atractivos de Europa." },
      { title: "Professional Certificates", description: "Certificaciones en áreas como Business Management, Digital Marketing, Sustainability y Leadership." }
    ],
    incluye: [
      "Opciones de alojamiento en residencia estudiantil (16+), apartamento compartido o guest house",
      "Actividades culturales y recreativas",
      "Excursiones a destinos como Valletta, Mdina, Blue Grotto y Marsaxlokk",
      "Acompañamiento y orientación durante la estancia"
    ]
  },
  {
    id: "estados-unidos",
    country: "Estados Unidos",
    subtitle: "Vive una experiencia académica y deportiva en Estados Unidos",
    description: "Descubre Estados Unidos a través de programas diseñados para estudiantes que buscan combinar alto rendimiento deportivo o perfeccionamiento del inglés en destinos icónicos como Boston, Nueva York y Miami.",
    flagImage: "/images/usa flag.png",
    programas: [
      { title: "Programas deportivos de alto rendimiento", description: "Entrenamiento especializado en Fútbol, Tenis, Golf y Volleyball, enfocados en el desarrollo técnico, físico y competitivo." },
      { title: "Clases de inglés", description: "Programas Core, Plus o Intensive (15, 20 o 30 horas semanales), disponibles para estudiantes desde los 16 años." },
      { title: "Preparación académica y profesional", description: "Opciones que incluyen preparación de exámenes, Business English y desarrollo de habilidades comunicativas." }
    ],
    incluye: [
      "Opciones de alojamiento en homestay con familias anfitrionas",
      "Acompañamiento académico durante el programa",
      "Actividades complementarias según sede",
      "Supervisión y apoyo durante la estancia"
    ]
  },
  {
    id: "espana",
    country: "España",
    subtitle: "Entrena fútbol en una de las academias más reconocidas en Europa",
    description: "Vive una experiencia deportiva de alto nivel en Valencia, una ciudad con gran tradición futbolística. Este programa combina entrenamiento profesional con formación académica personalizada, permitiendo a los estudiantes desarrollar su talento mientras viven una experiencia internacional en España.",
    flagImage: "/images/SpainFlag.png", 
    programas: [
      { title: "Fútbol de alto rendimiento", description: "Entrenamiento técnico, táctico y físico en una academia reconocida en Europa. Incluye preparación deportiva especializada y formación académica adaptada para equilibrar el desarrollo del atleta." },
      { title: "Negocios y emprendimiento", description: "Programas enfocados en liderazgo, innovación y visión empresarial dentro de un contexto europeo internacional. Formación académica con enfoque práctico y proyección internacional." }
    ],
    incluye: [
      "Acompañamiento académico o deportivo según el programa elegido",
      "Entorno profesional internacional",
      "Supervisión y orientación durante la estancia"
    ]
  },
  {
    id: "italia",
    country: "Italia",
    subtitle: "Estudia en el corazón de Europa y vive una experiencia académica y profesional única",
    description: "Italia combina tradición, innovación y excelencia en distintas áreas académicas y creativas. Desde programas deportivos de alto rendimiento hasta especializaciones en moda, cocina y negocios de lujo, los estudiantes viven una experiencia formativa en un entorno internacional y culturalmente incomparable.",
    flagImage: "/images/ItalyFlag.png",
    programas: [
      { title: "Idioma italiano", description: "Perfecciona el idioma mientras te sumerges en la cultura, historia y estilo de vida italiano." },
      { title: "Fútbol de alto rendimiento", description: "Entrenamiento en academia profesional en Roma con preparación técnica, táctica y física en un entorno competitivo." },
      { title: "Cocina italiana (cocina y repostería)", description: "Formación práctica en gastronomía italiana, desde técnicas tradicionales hasta cocina contemporánea." },
      { title: "Diseño (moda y diseño de producto)", description: "Estudios enfocados en creatividad, tendencias y desarrollo de producto en uno de los países referentes del sector." },
      { title: "Medicina (programa preuniversitario)", description: "Preparación académica orientada a estudios en ciencias de la salud." },
      { title: "Ingeniería en deporte de motor", description: "Formación especializada en un país referente en la industria automotriz y el automovilismo." },
      { title: "Artes escénicas", description: "Técnica vocal, presencia escénica e interpretación en un entorno artístico profesional." },
      { title: "Negocios - Luxury management", description: "Enfoque en gestión y estrategia dentro del sector del lujo internacional." }
    ],
    incluye: [
      "Acompañamiento académico según el programa elegido",
      "Entorno internacional especializado",
      "Supervisión y orientación durante la estancia"
    ]
  },
  {
    id: "australia",
    country: "Australia",
    subtitle: "Estudia inglés y desarrolla tu talento artístico en Australia",
    description: "Vive una experiencia internacional en Brisbane, una de las ciudades más vibrantes y multiculturales de Australia. Este programa combina cursos de inglés con opciones académicas y artísticas, en un entorno moderno y con excelente ubicación en el centro de la ciudad.",
    flagImage: "/images/australia flag.png",
    programas: [
      { title: "Idioma inglés (ELICOS)", description: "Cursos de Inglés General e Inglés Intensivo en un ambiente internacional, con enfoque comunicativo y acompañamiento académico." },
      { title: "Artes escénicas", description: "Programas enfocados en actuación, canto y baile, combinando formación artística con desarrollo personal." }
    ],
    incluye: []
  },
  {
    id: "brasil",
    country: "Brasil",
    subtitle: "Vive el fútbol en uno de los países más apasionados del mundo",
    description: "Brasil es sinónimo de talento, técnica y pasión por el fútbol. Este programa está diseñado para estudiantes que desean entrenar como atletas profesionales mientras viven una experiencia cultural única en uno de los entornos deportivos más icónicos del mundo.",
    flagImage: "/images/BrazilFlag.png",
    programas: [
      { title: "Fútbol de alto rendimiento", description: "Entrenamiento técnico, táctico y físico en academias reconocidas internacionalmente, con metodología profesional y enfoque competitivo." }
    ],
    incluye: [
      "Desarrollo integral del atleta (disciplina, liderazgo y mentalidad competitiva)",
      "Formación académica complementaria",
      "Inmersión cultural en Brasil",
      "Supervisión y acompañamiento durante la estancia"
    ]
  },
];