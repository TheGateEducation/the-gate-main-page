export const categoriasPorEdad = ["Campamento de Verano"];

export const categoriasPorArea = [
  "Licenciatura", 
  "Maestría", 
  "EFP (Educación y Formación Profesional)", 
  "Programa de Idiomas"
];

export const categoriaPorTexto = [
  "Tours de Estudio",
  "A\u00F1o de fundaci\u00F3n",
  "Consejero de campamento de verano",
  "Programa de estudio y trabajo",
  "A\u00F1o Sabatico"
];

export const ordenDeCategorias = [
  "Campamento de Verano",
  "Tours de Estudio",
  "A\u00F1o de fundaci\u00F3n",
  "EFP (Educación y Formación Profesional)",
  "Licenciatura",
  "Maestría",
  "Consejero de campamento de verano",
  "Programa de estudio y trabajo",
  "A\u00F1o Sabatico",
  "Programas para Deportistas de Alto Rendimiento", 
  "Programa de Idiomas"
];

export const exepcionesMayuscula = [
  "of", 
  "and", 
  "the", 
  "in", 
  "on", 
  "at", 
  "to", 
  "for", 
  "with", 
  "a", 
  "an"
]

export const endPointMap: Record<string, string> = {
  "Maestría": "masters",
  "Licenciatura": "bachelors",
  "EFP (Educación y Formación Profesional)": "vets"
} 

export const areaMapping: Record<string, Record<string, string>> = {
  "Maestría": {
    "Agricultura y Medio Ambiente": "agriculture and environment",
    "Arquitectura y Diseño": "architecture and design, building, and property",
    "Artes, Humanidades y Ciencias Sociales": "arts, humanities and social sciences",
    "Aviación": "aviation",
    "Ciencias Biomédicas": "biomedical sciences",
    "Negocios": "business",
    "Negocios, Ingeniería y Gestión": "business, engineering, management",
    "Construcción y Propiedad": "construction and property",
    "Industrias Creativas": "creative industries",
    "Ciencia de Datos e Informática": "data and computer science",
    "Ciencia de Datos y Análisis": "data science and analytics",
    "Diseño y Artes Creativas": "design and creative arts",
    "Educación": "education",
    "Educación y Enseñanza": "education and teaching",
    "Ingeniería": "engineering",
    "Ingeniería y Gestión": "engineering, management",
    "Medio Ambiente y Sostenibilidad": "environment and sustainability",
    "Medio Ambiente e Ingeniería": "environment, engineering",
    "Medio Ambiente y Gestión": "environment, management",
    "Medio Ambiente, Sostenibilidad y Gestión": "environment, sustainability and management",
    "Cine, Televisión y Animación": "film, television and animation",
    "Alimentos, Nutrición y Dietética": "food, nutrition and dietetics",
    "Geología": "geology",
    "Estudios Globales": "global studies",
    "Gobernanza": "governance",
    "Salud": "health",
    "Salud Comunitaria y Salud Mental": "health and community services, psycology and mental health",
    "Hospitalidad": "hospitality",
    "Recursos Humanos": "human resourse",
    "Tecnologías de la Información": "information technology",
    "Tecnologías de la Información y la Comunicación": "information and communications technology",
    "Tecnologías de la Información (General)": "information technologies",
    "Tecnología de la Información": "information technology",
    "TI y Ciberseguridad": "information technology and cyber security",
    "Periodismo": "journalism",
    "Lenguas y Lingüística": "languages and linguistics",
    "Derecho": "law",
    "Gestión": "management",
    "Medios y Comunicación": "media and communication degrees",
    "Medios, Comunicación y Artes Creativas": "media, communications and creative arts",
    "Medicina y Salud": "medicine and health",
    "Ciencias Naturales y Físicas": "natural and physical sciences",
    "Enfermería y Ciencias de la Salud": "nursing and allied health degrees",
    "Enfermería y Obstetricia": "nursing and midwifery",
    "Física": "physics",
    "Política y Relaciones Internacionales": "politics, international relations",
    "Psicología": "psychology",
    "Psicología y Servicios Humanos": "psychology and human services",
    "Ciencia": "science",
    "Ciencia, Medio Ambiente y Sostenibilidad": "science, environment and sustainability",
    "Seguridad, Inteligencia y Criminología": "security, intelligence and criminology",
    "Trabajo Social y Comunitario": "social and community",
    "Deporte": "sport",
    "Topografía y Medio Ambiente Construido": "surveying and built environment degrees",
    "Docencia": "teaching"
  },
  "Licenciatura": {
    "Contaduría": "accounting",
    "Contaduría y Finanzas": "accounting and finance",
    "Estudios Actuariales": "actuarial studies",
    "Ingeniería Aeroespacial": "aerospace engineering",
    "Agricultura y Medio Ambiente": "agriculture and environment",
    "Arquitectura": "architecture",
    "Arte": "art",
    "Artes": "arts",
    "Artes, Humanidades y Ciencias Sociales": "arts, humanities and social sciences",
    "Artes, Ciencias Sociales y Comunicación": "arts, social sciences and communications",
    "Aviación": "aviation",
    "Ciencias Biomédicas": "biomedical sciences",
    "Construcción": "building",
    "Negocios": "business",
    "Administración de Empresas": "business administration",
    "Análisis de Negocios": "business analytics",
    "Negocios y Comercio": "business and commerce",
    "Negocios y Economía": "business and economics",
    "Química": "chemistry",
    "Ingeniería Civil y Ambiental": "civil and environmental engineering",
    "Comercio": "commerce",
    "Comunicación": "communication",
    "Estudios de Comunicación y Medios": "communication & media studies",
    "Construcción y Propiedad": "construction and property",
    "Industrias Creativas": "creative industries",
    "Criminología": "criminology",
    "Ciencia de Datos": "data science",
    "Ciencia de Datos y Análisis": "data science and analytics",
    "Diseño y Artes Creativas": "design and creative arts",
    "Diseño e Industrias Creativas": "design and creative industries",
    "Economía": "economics",
    "Educación y Enseñanza": "education and teaching",
    "Ingeniería Eléctrica y Electrónica": "electrical and electronic engineering",
    "Ingeniería": "engineering",
    "Medio Ambiente y Sostenibilidad": "environment and sustainability",
    "Moda": "fashion",
    "Cine, Televisión y Animación": "film, television and animation",
    "Finanzas": "finance",
    "Alimentos, Nutrición y Dietética": "food, nutrition and dietetics",
    "Salud": "health",
    "Servicios Comunitarios y Salud": "health and community services",
    "Hospitalidad": "hospitality",
    "Recursos Humanos": "human resources",
    "Tecnología de la Información": "information technology",
    "TI y Ciberseguridad": "information technology and cyber security",
    "Negocios Internacionales": "international business",
    "Derecho": "law",
    "Gestión": "management",
    "Mercadotecnia": "marketing",
    "Medios y Comunicaciones": "media and communications",
    "Medios, Comunicación y Publicidad": "media, communication & advertisin",
    "Medicina": "medicine",
    "Música": "music",
    "Enfermería y Obstetricia": "nursing and midwifery",
    "Psicología": "psychology",
    "Psicología y Salud Mental": "psycology and mental health",
    "Ciencia": "science",
    "Ciencia e Ingeniería": "science and engineering",
    "Ciencia y TI": "science and it",
    "Deporte": "sport"
  }
};

export const REVERSE_AREA_MAPPING: Record<string, Record<string, string>> = {};
Object.keys(areaMapping).forEach(category => {
  REVERSE_AREA_MAPPING[category] = Object.entries(areaMapping[category]).reduce(
    (acc, [spanish, english]) => ({ ...acc, [english]: spanish }),
    {}
  );
});
