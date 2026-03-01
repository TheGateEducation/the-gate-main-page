export interface ProgramType {
  id: string;
  title: string;
  description: string;
  ages?: string;
}

export interface IncludeDetail {
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  country: string;
  subtitle: string;
  description: string;
  includes: IncludeDetail[];
}

export const programTypes: ProgramType[] = [
  {
    id: "campamento-tradicional",
    title: "Campamento tradicional",
    description: "Es un campamento en donde los chicos disfrutarán de una aventura de verano. Dentro de las actividades, desarrollarán habilidades en deportes, artes, actividades en el exterior y el idioma inglés. Este programa los impulsa a desarrollar una relación positiva con la naturaleza. Incluye actividades deportivas de agua y tierra, programación de arte y música, 10 horas de clase de inglés por semana o 10 horas de lecciones de Forest School por semana.",
    ages: "8-14 años",
  },
  {
    id: "city-camps",
    title: "City Camps",
    description: "Viaja y mejora tu inglés mientras descubres una nueva ciudad y conoces gente de todo el mundo. Estos programas están diseñados para alcanzar los objetivos de aprendizaje del idioma. Recorrerán los lugares urbanos más interesantes del destino, aprenderán nuevas habilidades y harán nuevos amigos en el camino, para vivir una experiencia que durará toda la vida. Contáctanos para conocer las ciudades disponibles.",
    ages: "12-18 (dependiendo la ciudad)",
  },
  {
    id: "cursos-interes-especial",
    title: "Cursos de interés especial",
    description: "Estos son cursos de aprendizaje que se adaptan a la personalidad y objetivos del estudiante. Diseñados para quienes están interesados en temas 'más allá de sólo inglés', estos cursos les permiten adquirir conocimientos y habilidades en un área temática. Los programas están enfocados en áreas como liderazgo, negocios, preparación universitaria, tecnología, artes, diseño, ingeniería, cocina o medicina. También contamos con programas dirigidos a deportistas de alto rendimiento.",
    ages: "14-18 (dependiendo el programa)",
  },
  {
    id: "summer-homestay",
    title: "Summer Homestay Experience",
    description: "Inmersión cultural total viviendo con una familia local. Ideal para estudiantes independientes que quieren practicar el idioma todos los días. Es un programa de alojamiento con familias, que brinda a los jóvenes la oportunidad de integrarse verdaderamente en la cultura del país anfitrión. Participarán en actividades cotidianas y practicarán su inglés en un ambiente hogareño, amigable, solidario y seguro.",
    ages: "15-18",
  },
  {
    id: "programas-familiares",
    title: "Programas familiares",
    description: "Viaja y estudia junto a tu familia. Los padres pueden tomar cursos mientras los hijos participan en el campamento. Estos crean una experiencia de inglés diferente, reconociendo la importancia de las conexiones familiares y la influencia positiva que tienen en la experiencia de aprendizaje. El programa proporciona una manera única a las familias para viajar juntos y disfrutar una increíble experiencia.",
  },
  {
    id: "jovenes-adultos",
    title: "Programas para jóvenes adultos",
    description: "Programas recreativos y de trabajo en los Estados Unidos para estudiantes entre 18 y 28 años. ¡Vive una experiencia en el extranjero y gana dinero por ello!",
  },
];

export const campDestinations: Destination[] = [
  {
    id: "canada",
    country: "Canadá",
    subtitle: "Vive el verano en Canadá mientras perfeccionas tu inglés",
    description: "Descubre Canadá a través de programas que combinan aprendizaje de idiomas, liderazgo y experiencias inolvidables en entornos urbanos y naturales. Desde la vibrante ciudad de Toronto hasta un tradicional campamento canadiese junto al lago.",
    includes: [
      { title: "Clases de inglés y programas académicos", description: "Opciones de Inglés General y programas especializados como Liderazgo Global, Futuros Emprendedores y Preparación Académica." },
      { title: "French Camp", description: "Programa de inmersión en francés que combina aprendizaje del idioma con actividades culturales y recreativas en un entorno francófono." },
      { title: "Experiencia urbana en Toronto", description: "Estudia en campus reconocidos y vive la ciudad a través de excursiones culturales y actividades supervisadas." },
      { title: "Campamento canadiense tradicional", description: "Programa en entorno natural con enfoque en liderazgo, actividades al aire libre y vida en comunidad." },
      { title: "Alojamiento y supervisión completa", description: "Opciones en residencia universitaria o campamento, con acompañamiento integral durante toda la experiencia." },
    ],
  },
  {
    id: "reino-unido",
    country: "Reino Unido",
    subtitle: "Perfecciona tu inglés en la cuna de la tradición académica",
    description: "Vive una experiencia internacional en el Reino Unido combinando clases de inglés con actividades deportivas, artísticas y culturales en destinos emblemáticos.",
    includes: [
      { title: "Clases de inglés para jóvenes", description: "Programas dinámicos que integran actividades como equitación, deportes, artes y experiencias culturales." },
      { title: "Cursos especializados", description: "Opciones académicas como Business and Leadership, Global Leadership y programas con enfoque académico." },
      { title: "Programas deportivos de alto rendimiento", description: "Entrenamiento especializado para atletas comprometidos que desean potenciar su desarrollo competitivo." },
      { title: "Formación dentro del fútbol inglés", description: "Oportunidad para jugadores internacionales de entrenar y competir en un entorno profesional en Reading, Inglaterra." },
      { title: "Alojamiento y supervisión integral", description: "Opciones cuidadosamente seleccionadas que garantizan seguridad, acompañamiento y una experiencia internacional completa." },
    ],
  },
  {
    id: "alemania",
    country: "Alemania",
    subtitle: "Aprende alemán mientras vives una experiencia internacional",
    description: "Descubre Alemania a través de un programa diseñado para jóvenes que desean perfeccionar el idioma mientras participan en actividades culturales, deportivas y recreativas.",
    includes: [
      { title: "Clases de alemán para jóvenes", description: "Programas diseñados para desarrollar habilidades comunicativas en un entorno dinámico e internacional." },
      { title: "Aprendizaje activo y experiencias culturales", description: "Actividades deportivas, creativas y recreativas que permiten practicar el idioma dentro y fuera del aula." },
      { title: "Alojamiento y alimentación", description: "Opciones en residencias estudiantiles o con familias anfitrionas cuidadosamente seleccionadas, con comidas incluidas." },
      { title: "Excursiones y actividades culturales", description: "Visitas a ciudades históricas, museos, parques temáticos y actividades deportivas que permiten practicar el idioma." },
    ],
  },
  {
    id: "emiratos-arabes",
    country: "Emiratos Árabes Unidos (Dubái)",
    subtitle: "Aprende inglés en una de las ciudades más innovadoras del mundo",
    description: "Vive una experiencia internacional en Dubái mientras perfeccionas tu inglés en un entorno moderno, multicultural y dinámico.",
    includes: [
      { title: "Clases de inglés en diferentes modalidades", description: "Opciones en horario matutino, vespertino o intensivo, adaptadas a tu nivel actual." },
      { title: "International Diploma in Business", description: "Formación en áreas como marketing, emprendimiento, organizaciones empresariales y negocios internacionales." },
      { title: "Opción Work & Study con visa de 1 año", description: "Incluye proceso de visa, seguro médico, Emirates ID y acompañamiento durante tu estancia." },
      { title: "Apoyo para empleabilidad", description: "Asesorías en elaboración de CV, preparación para entrevistas y orientación laboral." },
      { title: "Opciones de alojamiento", description: "Residencias estudiantiles o departamentos compartidos en zonas estratégicas de la ciudad." },
    ],
  },
  {
    id: "francia",
    country: "Francia",
    subtitle: "Vive una experiencia académica internacional en el corazón de París",
    description: "Descubre París a través de un programa preuniversitario diseñado para jóvenes que desean explorar su futuro académico en un entorno internacional.",
    includes: [
      { title: "Curso general de frances en EP París", description: "Programa disponible desde nivel A1 hasta C1, con 15 o 20 horas por semana bajo un enfoque comunicativo." },
      { title: "Programa académico preuniversitario", description: "Enfoque en áreas como negocios internacionales, emprendimiento y tecnología, con metodología aplicada." },
      { title: "Apoyo académico y seguimiento personalizado", description: "Placement test, tutorías periódicas, Conversation Club y Study Clinics para reforzar el progreso." },
      { title: "Certificación oficial", description: "Certificado al finalizar el programa cumpliendo con los requisitos académicos." },
      { title: "Inmersión cultural en París", description: "Actividades sociales y experiencias que permiten explorar la ciudad mientras se desarrolla una perspectiva internacional." },
    ],
  },
  {
    id: "irlanda",
    country: "Irlanda",
    subtitle: "Aprende inglés frente al mar en la costa irlandesa",
    description: "Descubre Irlanda a través de programas diseñados para jóvenes y adultos que buscan mejorar su inglés mientras viven una auténtica experiencia internacional.",
    includes: [
      { title: "Clases de inglés en Bray", description: "Estudia frente al mar en una encantadora ciudad costera cercana a Dublín, con alojamiento en residencia o apartamento." },
      { title: "Residencias y apartamentos equipados", description: "Opciones de casas victorianas restauradas o residencias a pocos minutos caminando de la escuela." },
      { title: "Programa Work & Study en Dublín (+18)", description: "Combina clases de inglés (15 o 20 horas por semana) con posibilidad de trabajar durante tu estancia." },
      { title: "Alojamiento incluido en modalidad Work & Study", description: "Experiencia inicial en homestay con apoyo en búsqueda de alojamiento y acompañamiento." },
      { title: "Seguro médico y orientación integral", description: "Apoyo administrativo y académico para una experiencia internacional completa." },
    ],
  },
  {
    id: "malta",
    country: "Malta",
    subtitle: "Aprende inglés en el Mediterráneo",
    description: "Vive una experiencia internacional en St. Paul's Bay y St. Julian's, encantadores destinos costeros en Malta. Este programa combina clases de inglés con actividades recreativas y culturales.",
    includes: [
      { title: "Clases de inglés en diferentes modalidades", description: "Opciones Classic o Semi-Intensive adaptadas a tu nivel y objetivos académicos." },
      { title: "Opción Work & Study", description: "Programa para mayores de 18 años que combina estudios con experiencia internacional." },
      { title: "Professional Certificates", description: "Certificaciones en áreas como Business Management, Digital Marketing, Sustainability y Leadership." },
      { title: "Opciones de alojamiento", description: "Residencia estudiantil (16+), apartamentos compartidos o guest house." },
      { title: "Explora Malta mientras practicas inglés", description: "Valletta y Mdina, Blue Grotto, Marsaxlokk, Malta National Aquarium, y experiencias junto al mar." },
    ],
  },
  {
    id: "estados-unidos",
    country: "Estados Unidos",
    subtitle: "Vive una experiencia académica y deportiva en Estados Unidos",
    description: "Descubre Estados Unidos a través de programas diseñados para estudiantes que buscan combinar alto rendimiento deportivo o perfeccionamiento del inglés en destinos icónicos como Boston, Nueva York y Miami.",
    includes: [
      { title: "Programas deportivos de alto rendimiento", description: "Entrenamiento especializado en Fútbol, Tenis, Golf y Volleyball, enfocados en el desarrollo técnico, físico y competitivo." },
      { title: "Clases de inglés en ciudades internacionales", description: "Programas Core, Plus o Intensive (15, 20 o 30 horas semanales), disponibles para estudiantes desde los 16 años." },
      { title: "Preparación académica y profesional", description: "Opciones que incluyen preparación de exámenes, Business English y desarrollo de habilidades comunicativas." },
      { title: "Opciones de alojamiento", description: "Homestay con familias anfitrionas para una experiencia cultural completa." },
    ],
  },
  {
    id: "espana",
    country: "España",
    subtitle: "Entrena fútbol en una de las academias más reconocidas en Europa",
    description: "Vive una experiencia deportiva de alto nivel en Valencia, una ciudad con gran tradición futbolística. Este programa combina entrenamiento profesional con formación académica personalizada.",
    includes: [
      { title: "Entrenamiento de alto rendimiento", description: "Sesiones técnicas, tácticas y físicas diseñadas para potenciar el desarrollo integral del jugador." },
      { title: "Formación académica complementaria", description: "Programa educativo adaptado para equilibrar el rendimiento deportivo con el progreso académico." },
      { title: "Entorno profesional internacional", description: "Experiencia en una ciudad con fuerte cultura futbolística y exposición a estándares europeos." },
      { title: "Desarrollo integral del atleta", description: "Enfoque en disciplina, trabajo en equipo y crecimiento personal dentro y fuera del campo." },
    ],
  },
  {
    id: "italia",
    country: "Italia",
    subtitle: "Estudia en el corazón de Europa y vive una experiencia académica y profesional única",
    description: "Italia combina tradición, innovación y excelencia en distintas áreas académicas y creativas. Desde programas deportivos hasta especializaciones en moda, cocina y negocios de lujo.",
    includes: [
      { title: "Idioma italiano", description: "Perfecciona el idioma mientras te sumerges en la cultura, historia y estilo de vida italiano." },
      { title: "Deportivo - Fútbol de alto rendimiento", description: "Entrena en una academia profesional en Roma y desarrolla tu talento. Combina preparación física, técnica y táctica con formación académica." },
      { title: "Cocina italiana (cocina y repostería)", description: "Formación práctica en gastronomía italiana, desde técnicas tradicionales hasta cocina contemporánea." },
      { title: "Diseño, Medicina, Ingeniería y Artes", description: "Especializaciones en moda, producto, preuniversitarios en salud, deporte de motor y artes escénicas." },
      { title: "Negocios - Luxury management", description: "Aprende sobre gestión y estrategia en el sector del lujo en uno de los mercados más influyentes del mundo." },
    ],
  },
  {
    id: "australia",
    country: "Australia",
    subtitle: "Estudia inglés y desarrolla tu talento artístico en Australia",
    description: "Vive una experiencia internacional en Brisbane, una de las ciudades más vibrantes y multiculturales de Australia. Combina cursos de inglés con opciones académicas y artísticas.",
    includes: [
      { title: "Idioma inglés (ELICOS)", description: "Cursos de Inglés General e Inglés Intensivo en un ambiente internacional, con enfoque comunicativo y acompañamiento académico." },
      { title: "Preparación IELTS", description: "Ideal para estudiantes que buscan avanzar hacia estudios técnicos o universitarios en Australia." },
      { title: "Artes escénicas", description: "Programas enfocados en actuación, canto y baile, combinando formación artística con desarrollo personal." },
      { title: "Pathways académicos (ELICOS + VET)", description: "Posibilidad de continuar hacia programas técnicos y vocacionales en áreas como negocios, liderazgo y hospitalidad." },
    ],
  },
  {
    id: "brasil",
    country: "Brasil",
    subtitle: "Vive el fútbol en uno de los países más apasionados del mundo",
    description: "Brasil es sinónimo de talento, técnica y pasión por el fútbol. Este programa está diseñado para estudiantes que desean entrenar como atletas profesionales mientras viven una experiencia cultural única.",
    includes: [
      { title: "Futbol de alto rendimiento", description: "Entrenamiento técnico, táctico y físico en academias reconocidas internacionalmente, con metodología profesional." },
      { title: "Desarrollo integral del atleta", description: "Trabajo en disciplina, liderazgo, mentalidad competitiva y preparación física de alto nivel." },
      { title: "Formación académica complementaria", description: "Programa que permite equilibrar el rendimiento deportivo con el desarrollo académico." },
      { title: "Experiencia cultural internacional", description: "Inmersión en la cultura brasileña, convivencia multicultural y aprendizaje dentro y fuera del campo." },
    ],
  },
];