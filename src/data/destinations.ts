export interface DestinationDetails {
  /** Ordered paragraphs describing the country. Rendered as <p> blocks. */
  paragraphs: string[];
  /** Currency label shown at the end, e.g. "Euro (€)". */
  moneda: string;
  /** Source flag — if true, content was written by us, not from the client PDF. */
  placeholder?: boolean;
}

export interface Destination {
  name: string;
  /** URL-safe id used for /destinos#slug anchors. */
  slug: string;
  flag: string;        // emoji fallback (not rendered on Windows)
  flagImage: string;   // path to flag image
  /** Photo of a landmark / place in that country. Falls back to flagImage when the file is missing. */
  placeImage?: string;
  programs: string;
  description: string;
  href: string;
  /** Long-form content for the /destinos page. */
  details: DestinationDetails;
  /** Position hints for Hero floating cards (desktop only) */
  position?: { top?: string; left?: string; right?: string; bottom?: string };
}

export const destinations: Destination[] = [
  {
    name: "Canadá",
    slug: "canada",
    flag: "\u{1F1E8}\u{1F1E6}",
    flagImage: "/images/canada flag.png",
    placeImage: "/images/places/canada.jpg",
    programs: "45+",
    description: "Canadá es uno de los países más seguros y amigables para estudiantes internacionales. Ofrece educación de alta calidad, diversidad cultural y una excelente oportunidad para mejorar tu inglés o francés.",
    href: "/destinos#canada",
    position: { top: "22%", left: "4%" },
    details: {
      paragraphs: [
        "Canadá es uno de los destinos más atractivos para estudiantes internacionales, con más de 800,000 estudiantes extranjeros y un sistema educativo reconocido por su calidad y enfoque inclusivo. Cuenta con más de 100 universidades y múltiples programas en inglés y francés.",
        "Ubicado en América del Norte, es el segundo país más grande del mundo con una superficie de 9.9 millones de km². Su entorno natural es amplio y diverso, aunque gran parte del país presenta climas fríos, con inviernos largos y temperaturas bajo cero.",
        "La economía canadiense es sólida, con un PIB de aproximadamente $2.1 billones de USD, basada en recursos naturales, tecnología y servicios. Ofrece oportunidades laborales para estudiantes, incluso durante sus estudios.",
        "Canadá es considerado uno de los países más seguros del mundo, con altos estándares de calidad de vida, salud y educación. El costo de vida puede oscilar entre CAD $1,200–$2,500 mensuales, dependiendo de la ciudad.",
        "Es ideal para estudiantes que buscan estabilidad, seguridad y oportunidades de crecimiento académico y profesional.",
      ],
      moneda: "Dólar canadiense (CAD)",
    },
  },
  {
    name: "Reino Unido",
    slug: "reino-unido",
    flag: "\u{1F1EC}\u{1F1E7}",
    flagImage: "/images/uk flag.png",
    placeImage: "/images/places/reino-unido.jpg",
    programs: "60+",
    description: "Estudia en uno de los sistemas educativos más prestigiosos del mundo. El Reino Unido ofrece excelencia académica, experiencias culturales únicas y una gran diversidad de programas internacionales.",
    href: "/destinos#reino-unido",
    position: { top: "18%", right: "5%" },
    details: {
      paragraphs: [
        "El Reino Unido es uno de los destinos académicos más prestigiosos del mundo, con universidades históricas como Oxford y Cambridge, y más de 600,000 estudiantes internacionales cada año. Su sistema educativo es reconocido por su rigor y especialización.",
        "Ubicado en Europa occidental, está compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte. Tiene una superficie aproximada de 243,000 km². Su clima es templado oceánico, con lluvias frecuentes y temperaturas moderadas.",
        "La economía del Reino Unido es una de las más grandes de Europa, con un PIB cercano a $3 billones de USD, destacando en sectores como finanzas, educación, investigación y servicios.",
        "El país es generalmente seguro, especialmente en ciudades universitarias. El costo de vida es elevado, particularmente en Londres, con gastos mensuales que pueden superar las £1,200–£1,800.",
        "Estudiar en el Reino Unido permite acceder a educación de clase mundial en programas más cortos y especializados.",
      ],
      moneda: "Libra esterlina (GBP)",
    },
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    flagImage: "/images/australia flag.png",
    placeImage: "/images/places/australia.jpg",
    programs: "35+",
    description: "Australia ofrece educación innovadora, ciudades modernas y un estilo de vida relajado. Es un destino ideal para estudiantes que buscan calidad académica mientras viven una experiencia internacional inolvidable.",
    href: "/destinos#australia",
    position: { bottom: "30%", left: "6%" },
    details: {
      paragraphs: [
        "Australia es uno de los principales destinos educativos, con más de 700,000 estudiantes internacionales y más de 40 universidades, muchas de ellas dentro de rankings globales.",
        "Ubicada en Oceanía, tiene una superficie de 7.7 millones de km². Su clima es mayormente cálido, con regiones tropicales, desérticas y templadas. Las principales ciudades estudiantiles incluyen Sídney, Melbourne y Brisbane.",
        "La economía australiana es fuerte y estable, con un PIB de más de $1.7 billones de USD, basada en minería, educación, turismo y servicios. Los estudiantes internacionales pueden trabajar mientras estudian.",
        "Australia es un país seguro, con alta calidad de vida. El costo de vida ronda entre AUD $1,500–$2,500 mensuales.",
        "Es ideal para estudiantes que buscan combinar educación de calidad con estilo de vida y experiencia internacional.",
      ],
      moneda: "Dólar australiano (AUD)",
    },
  },
  {
    name: "Estados Unidos",
    slug: "estados-unidos",
    flag: "\u{1F1FA}\u{1F1F8}",
    flagImage: "/images/usa flag.png",
    placeImage: "/images/places/estados-unidos.jpg",
    programs: "80+",
    description: "Uno de los destinos académicos más reconocidos del mundo. Estudiar en Estados Unidos te permite vivir una educación dinámica, practicar inglés diariamente y acceder a una gran variedad de actividades académicas y culturales.",
    href: "/destinos#estados-unidos",
    position: { top: "38%", right: "4%" },
    details: {
      paragraphs: [
        "Estados Unidos es el destino educativo más popular del mundo, con más de 4,000 instituciones de educación superior y alrededor de 1 millón de estudiantes internacionales cada año. Su sistema educativo es altamente flexible, permitiendo a los estudiantes elegir materias, cambiar de carrera y combinar disciplinas.",
        "Ubicado en América del Norte, cuenta con una superficie de más de 9.8 millones de km², lo que lo convierte en el tercer país más grande del mundo. Su geografía es extremadamente diversa, con costas, montañas, desiertos y grandes ciudades globales. El clima varía significativamente según la región.",
        "La economía de Estados Unidos es la más grande del mundo, con un PIB superior a $25 billones de USD, liderando sectores como tecnología, finanzas, investigación y desarrollo. Esto brinda amplias oportunidades de networking, prácticas profesionales y empleo.",
        "El nivel de seguridad varía dependiendo de la ciudad, aunque las zonas universitarias suelen ser seguras y cuentan con infraestructura especializada para estudiantes. El costo de vida es alto, especialmente en ciudades como Nueva York o California.",
        "Estudiar en Estados Unidos permite acceso a universidades de prestigio, innovación constante y una red global de contactos.",
      ],
      moneda: "Dólar estadounidense (USD)",
    },
  },
  {
    name: "Alemania",
    slug: "alemania",
    flag: "\u{1F1E9}\u{1F1EA}",
    flagImage: "/images/alemania flag.webp",
    placeImage: "/images/places/alemania.jpg",
    programs: "25+",
    description: "Alemania destaca por su excelencia académica y su fuerte enfoque en innovación y tecnología. Estudiar aquí te permite acceder a programas de alto nivel en un entorno multicultural.",
    href: "/destinos#alemania",
    position: { bottom: "22%", right: "8%" },
    details: {
      paragraphs: [
        "Alemania es uno de los destinos educativos más importantes de Europa, con más de 400 instituciones de educación superior y más de 400,000 estudiantes internacionales. Muchas universidades públicas tienen costos muy bajos o gratuitos.",
        "Ubicada en Europa central, tiene una superficie de 357,000 km². Su clima es templado, con inviernos fríos y veranos moderados.",
        "Es la economía más fuerte de Europa, con un PIB de aproximadamente $4.5 billones de USD, destacando en ingeniería, manufactura, tecnología e innovación.",
        "Alemania es un país seguro, con excelente transporte público y calidad de vida. El costo de vida para estudiantes ronda entre €850–€1,200 mensuales.",
        "Es especialmente atractivo para estudiantes en áreas técnicas y científicas.",
      ],
      moneda: "Euro (€)",
    },
  },
  {
    name: "Francia",
    slug: "francia",
    flag: "\u{1F1EB}\u{1F1F7}",
    flagImage: "/images/francia flag.png",
    placeImage: "/images/places/francia.jpg",
    programs: "20+",
    description: "Francia combina una educación de prestigio con una riqueza cultural incomparable. Es el destino perfecto para estudiantes interesados en arte, gastronomía, historia y aprendizaje del idioma francés.",
    href: "/destinos#francia",
    position: { bottom: "38%", left: "14%" },
    details: {
      paragraphs: [
        "Francia es uno de los principales destinos académicos en Europa, con más de 400,000 estudiantes internacionales. Su sistema educativo es reconocido por su calidad, especialmente en áreas como negocios, arte, moda y gastronomía.",
        "Ubicada en Europa occidental, tiene una superficie de 643,000 km². Su clima es mayormente templado, con variaciones entre regiones.",
        "La economía francesa es una de las más grandes del mundo, con un PIB cercano a $3 billones de USD, destacando en sectores como lujo, turismo, industria y tecnología.",
        "Francia es un país seguro en zonas estudiantiles, con buena infraestructura. El costo de vida varía entre €900–€1,500 mensuales, siendo París más caro.",
        "Ofrece una combinación única de educación de calidad y experiencia cultural.",
      ],
      moneda: "Euro (€)",
    },
  },
  {
    name: "Irlanda",
    slug: "irlanda",
    flag: "\u{1F1EE}\u{1F1EA}",
    flagImage: "/images/irlanda flag.png",
    placeImage: "/images/places/irlanda.jpg",
    programs: "15+",
    description: "Irlanda combina tradición académica con un ambiente joven y vibrante. Es un destino ideal para perfeccionar tu inglés mientras disfrutas de una cultura acogedora y ciudades llenas de historia.",
    href: "/destinos#irlanda",
    details: {
      paragraphs: [
        "Irlanda es un destino académico en crecimiento, con universidades de prestigio como Trinity College Dublin y más de 35,000 estudiantes internacionales. Es reconocida por programas en negocios, tecnología y humanidades, y por tener al inglés como idioma oficial.",
        "Ubicada en el noroeste de Europa, tiene una superficie de 70,273 km² y un paisaje marcado por costas verdes, acantilados y ciudades históricas. Su clima es templado oceánico, con lluvias frecuentes y temperaturas suaves durante todo el año.",
        "La economía irlandesa es una de las más dinámicas de Europa, con sede regional de empresas tecnológicas globales como Google, Meta y Apple. Esto genera oportunidades de prácticas profesionales y empleo para estudiantes.",
        "Irlanda es un país seguro y acogedor, con un costo de vida que ronda entre €1,000–€1,500 mensuales, siendo Dublín la ciudad más cara.",
        "Es ideal para estudiantes que buscan perfeccionar su inglés en un entorno cultural amigable y con salida laboral en tecnología y negocios.",
      ],
      moneda: "Euro (€)",
      placeholder: true,
    },
  },
  {
    name: "Emiratos Árabes Unidos",
    slug: "emiratos",
    flag: "\u{1F1E6}\u{1F1EA}",
    flagImage: "/images/emiratos flag.png",
    placeImage: "/images/places/emiratos.jpg",
    programs: "10+",
    description: "Un destino moderno y global que conecta culturas de todo el mundo. Emiratos ofrece universidades internacionales, innovación tecnológica y una experiencia multicultural única.",
    href: "/destinos#emiratos",
    details: {
      paragraphs: [
        "Emiratos Árabes Unidos es un destino educativo emergente con más de 70 universidades, incluyendo campus internacionales.",
        "Ubicado en Medio Oriente, tiene una superficie de 83,600 km². Su clima es desértico, con temperaturas que pueden superar los 40°C en verano.",
        "Su economía supera los $500 mil millones de USD, basada en petróleo, turismo, tecnología y finanzas.",
        "Es uno de los países más seguros del mundo. El costo de vida es alto, con gastos mensuales de aproximadamente AED 3,000–6,000.",
        "Ofrece una experiencia internacional en un entorno moderno y multicultural.",
      ],
      moneda: "Dirham (AED)",
    },
  },
  {
    name: "España",
    slug: "espana",
    flag: "\u{1F1EA}\u{1F1F8}",
    flagImage: "/images/SpainFlag.png",
    placeImage: "/images/places/espana.jpg",
    programs: "10+",
    description: "España combina excelencia académica con una vida estudiantil vibrante. Es ideal para estudiantes que buscan calidad educativa mientras disfrutan de su cultura, idioma y estilo de vida.",
    href: "/destinos#espana",
    details: {
      paragraphs: [
        "España es uno de los top 15 destinos de estudio en el mundo, con más de 46 millones de habitantes y una fuerte tradición académica en áreas como negocios, humanidades y ciencias. Su sistema educativo combina universidades públicas y privadas, con programas accesibles para estudiantes internacionales.",
        "Ubicada en el suroeste de Europa, España tiene una superficie de 504,750 km² y una posición estratégica entre Europa y África. Su clima es variado: mediterráneo (veranos calurosos y secos), continental (inviernos fríos) y marítimo en zonas costeras.",
        "La economía es una de las más grandes de Europa y destaca en sectores como turismo, comercio y tecnología. El costo de vida es relativamente accesible comparado con otros países europeos, con un promedio de €850–€1,300 mensuales para estudiantes.",
        "España ofrece una experiencia cultural única, con ciudades vibrantes, alta calidad de vida y un idioma global como el español.",
      ],
      moneda: "Euro (€)",
    },
  },
  {
    name: "Italia",
    slug: "italia",
    flag: "\u{1F1EE}\u{1F1F9}",
    flagImage: "/images/ItalyFlag.png",
    placeImage: "/images/places/italia.jpg",
    programs: "20+",
    description: "Italia es cuna del arte, la arquitectura y el diseño. Estudiar aquí te conecta con universidades históricas y programas líderes en moda, gastronomía e ingeniería, todo en un país lleno de cultura y tradición.",
    href: "/destinos#italia",
    details: {
      paragraphs: [
        "Italia es uno de los destinos académicos más importantes de Europa, con más de 60 millones de habitantes y alrededor de 90 universidades, incluyendo algunas de las más antiguas del mundo como la Universidad de Bolonia.",
        "Ubicada en el sur de Europa, tiene una superficie de 301,230 km² y una geografía diversa con montañas, costas y ciudades históricas. Su clima es principalmente mediterráneo, con veranos cálidos y secos e inviernos suaves.",
        "Italia es la octava economía mundial y destaca en industrias como diseño, moda, arquitectura y manufactura. Para estudiantes, el costo de vida varía según la ciudad, con un promedio de €1,000–€1,500 mensuales.",
        "Es ideal para quienes buscan una formación académica combinada con una fuerte experiencia cultural, especialmente en arte, historia y diseño.",
      ],
      moneda: "Euro (€)",
    },
  },
  {
    name: "Malta",
    slug: "malta",
    flag: "\u{1F1F2}\u{1F1F9}",
    flagImage: "/images/malta flag.png",
    placeImage: "/images/places/malta.jpg",
    programs: "15+",
    description: "Malta es una isla mediterránea donde el inglés es idioma oficial, lo que la convierte en un destino perfecto para aprender el idioma mientras disfrutas de playas, historia milenaria y un ambiente internacional acogedor.",
    href: "/destinos#malta",
    details: {
      paragraphs: [
        "Malta es un destino popular para programas de inglés, con más de 80,000 estudiantes internacionales cada año. Al tener al inglés como idioma oficial y un fuerte sector de escuelas de idioma acreditadas, es una opción accesible y efectiva para perfeccionar el inglés.",
        "Ubicada en el centro del Mediterráneo, es un archipiélago con una superficie de 316 km². Su clima es mediterráneo, con veranos calurosos y secos e inviernos suaves, lo que permite disfrutar del mar gran parte del año.",
        "La economía maltesa se basa en turismo, servicios financieros, tecnología y juego en línea, con un PIB cercano a $20 mil millones de USD. Es un país dentro de la Unión Europea, con alto nivel de vida.",
        "Malta es uno de los países más seguros de Europa, con un costo de vida estimado entre €900–€1,300 mensuales para estudiantes.",
        "Es ideal para estudiantes que buscan aprender inglés en un entorno internacional y mediterráneo, con excelente calidad de vida y clima.",
      ],
      moneda: "Euro (€)",
      placeholder: true,
    },
  },
  {
    name: "Brasil",
    slug: "brasil",
    flag: "\u{1F1E7}\u{1F1F7}",
    flagImage: "/images/BrazilFlag.png",
    placeImage: "/images/places/brasil.jpg",
    programs: "10+",
    description: "Brasil ofrece una experiencia educativa vibrante en la economía más grande de Latinoamérica. Aprende portugués, vive su diversidad cultural y accede a universidades reconocidas en ingeniería, negocios y ciencias.",
    href: "/destinos#brasil",
    details: {
      paragraphs: [
        "Brasil es el país más grande de Latinoamérica, con más de 2,500 instituciones de educación superior y universidades reconocidas como USP, Unicamp y UFRJ. Es un destino creciente para estudiantes que quieren aprender portugués y estudiar en programas con enfoque latinoamericano.",
        "Ubicado en América del Sur, tiene una superficie de 8.5 millones de km², siendo el quinto país más grande del mundo. Su geografía incluye la selva amazónica, extensas costas y grandes ciudades como São Paulo, Río de Janeiro y Brasilia. Su clima es mayormente tropical, con variaciones regionales.",
        "Brasil es la mayor economía de Latinoamérica, con un PIB cercano a $2 billones de USD, destacando en agricultura, minería, industria y tecnología. Sus ciudades ofrecen un ecosistema de emprendimiento en crecimiento.",
        "La seguridad varía según la región; las zonas universitarias y barrios estudiantiles suelen ser seguros. El costo de vida es accesible comparado con otros destinos, con un promedio de BRL 2,500–4,500 mensuales, equivalente a unos USD 500–900.",
        "Es ideal para estudiantes que buscan inmersión en portugués, diversidad cultural y una experiencia vibrante en Latinoamérica.",
      ],
      moneda: "Real brasileño (BRL)",
      placeholder: true,
    },
  },
];
