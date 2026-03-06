export const siteConfig = {
  name: "Tarik Tavera Medina",
  title: "Geógrafo & Consultor en Territorio y Sostenibilidad",
  description: "Portfolio de Tarik Tavera — Geógrafo especializado en Amazonía, cambio climático y gestión del riesgo de desastres con enfoque participativo y territorial.",
  accentColor: "#1b4332",

  colors: {
    primaryDark: "#1b4332",    // Deep forest — headings, footer bg, nav
    primary: "#2d6a4f",        // Forest green — borders, badges, timeline
    primaryLight: "#52b788",   // Sage green — shimmer bar highlight
    accent: "#7c4a2d",         // Sienna brown — CTAs, stat numbers, bullet dots
    surface: "#f2ede6",        // Warm cream — section backgrounds
    surfaceLight: "#f8f5f0",   // Off-white warm — hero bg
  },

  tagline: "Herramientas geoespaciales y enfoques participativos para la toma de decisiones en conservación, territorio y desarrollo sostenible.",

  stats: [
    { value: "10+", label: "Años de experiencia" },
    { value: "15+", label: "Organizaciones" },
    { value: "PUCP", label: "Geógrafo colegiado" },
  ],

  quote: {
    text: "Mis innovaciones son herramientas y estrategias técnicas para la toma de decisiones frente a vulnerabilidades en áreas de conservación y regiones de conflicto",
    author: "Tarik Tavera",
  },

  services: [
    {
      icon: "chart",
      title: "Análisis Territorial & GIS",
      description: "Sistemas de información geográfica, teledetección y cartografía para la planificación territorial y el monitoreo ambiental.",
      items: ["GIS: GEE, QGIS, ArcGIS", "Teledetección y RPAS", "Cartografía temática", "Big Data geoespacial"],
    },
    {
      icon: "shield",
      title: "Gestión del Riesgo & Clima",
      description: "Evaluación de vulnerabilidades, sistemas de alerta temprana y planes de contingencia ante desastres y cambio climático.",
      items: ["Planes de contingencia", "Sistemas de alerta temprana", "Adaptación al cambio climático", "Salvaguardas socioambientales"],
    },
    {
      icon: "user",
      title: "Facilitación Participativa",
      description: "Metodologías participativas para el desarrollo territorial con comunidades indígenas y actores locales.",
      items: ["Mapeo participativo", "Fortalecimiento comunitario", "Gobernanza territorial", "Cooperación internacional"],
    },
  ],

  cta: {
    title: "¿Necesitas consultoría territorial?",
    description: "Trabajo con organizaciones internacionales, gobiernos y comunidades para diseñar soluciones geoespaciales y participativas. Conversemos sobre tu proyecto.",
    buttonText: "Conversemos",
    emailSubject: "Consulta sobre consultoría territorial",
  },

  social: {
    email: "geotariktavera@gmail.com",
    linkedin: "https://www.linkedin.com/in/tariktaveramedina",
  },

  aboutMe:
    "Geógrafo de la <strong>Pontificia Universidad Católica del Perú</strong> con más de 10 años de experiencia multisectorial en Amazonía, cambio climático y gestión del riesgo de desastres. He trabajado con organizaciones internacionales como <strong>OIM, Frankfurt Zoological Society y CARE Perú</strong>, entidades gubernamentales como <strong>SERNANP, OSINFOR e INAIGEM</strong>, y la academia. Mi enfoque combina herramientas geoespaciales avanzadas con metodologías participativas para la toma de decisiones en conservación y desarrollo territorial.",

  skills: [
    "GIS (GEE, QGIS, ArcGIS)",
    "Teledetección",
    "RPAS (Piloto licenciado)",
    "Cartografía temática",
    "Gestión del riesgo",
    "Cambio climático",
    "Facilitación participativa",
    "KoboCollect",
    "Power BI",
    "Docencia universitaria",
    "Inglés fluido",
  ],

  projects: [
    {
      name: "Cartografía de la Desigualdad",
      description: "Elaboración de cartografías y productos visuales sobre desigualdades en Perú para <strong>Ojo Público</strong>, difundidas en medios de comunicación nacionales.",
      link: "https://ojo-publico.com/especiales/cartografia-de-la-desigualdad/index.html",
      skills: ["GIS", "Cartografía", "Análisis territorial", "Visualización"],
    },
    {
      name: "Visor de Responsabilidad Social — PUCP",
      description: "Plataforma de visualización geoespacial para proyectos de responsabilidad social universitaria de la PUCP-DARS.",
      link: "https://visor-rsu.pucp.edu.pe/",
      skills: ["GIS", "Web mapping", "Responsabilidad social"],
    },
    {
      name: "Programa Manu-Purús Legacy Landscapes",
      description: "Diseño de herramientas de estimación de riesgos y sistema de alerta temprana para áreas naturales protegidas con la <strong>Sociedad Zoológica de Frankfurt</strong>.",
      link: "",
      skills: ["Salvaguardas", "SERNANP", "Gestión del riesgo", "DDHH"],
    },
    {
      name: "Sistema de Alerta Temprana — VRAEM",
      description: "Sistema de comunicación y geolocalización de alertas sobre amenazas territoriales en comunidades Asháninka del río Ene.",
      link: "",
      skills: ["Alerta temprana", "Geolocalización", "Pueblos indígenas"],
    },
  ],

  experience: [
    {
      company: "CLAC — Comercio Justo",
      title: "Analista de datos de deforestación",
      dateRange: "Oct 2024 — Presente",
      bullets: [
        "Fortalecimiento de cooperativas peruanas (San Ignacio, VRAEM, Puno) ante la normativa EUDR",
        "Implementación de herramientas de monitoreo de deforestación para pequeña agricultura",
        "Diseño de material audiovisual sobre herramientas agroclimáticas y Comercio Justo",
      ],
    },
    {
      company: "Frankfurt Zoological Society (FZS Perú)",
      title: "Especialista en salvaguardas y gestión del riesgo",
      dateRange: "Sep 2025 — Mar 2026",
      bullets: [
        "Herramientas de estimación de riesgos para el programa <em>Manu-Purús Legacy Landscapes</em>",
        "Asesoría a SERNANP en gobernanza de los Parques Manu y Purús",
        "Sistema de Alerta Temprana con enfoque de derechos humanos y conservación",
      ],
    },
    {
      company: "INAIGEM",
      title: "Especialista en temas socioculturales",
      dateRange: "Jun — Oct 2025",
      bullets: [
        "Análisis de conocimientos tradicionales sobre glaciares y lagunas en Áncash",
        "Recomendaciones técnicas para conservación de ecosistemas glaciares",
      ],
    },
    {
      company: "CARE Perú",
      title: "Especialista en Gestión del Riesgo",
      dateRange: "Oct — Dic 2024",
      bullets: [
        "Plan de Contingencia ante Incendios Forestales de Chachapoyas",
        "Proyecto <em>Guardianas del Cambio</em> con enfoque interseccional",
      ],
    },
    {
      company: "SERNANP",
      title: "Analista de Áreas Naturales Protegidas",
      dateRange: "Jun — Oct 2024",
      bullets: [
        "Fortalecimiento del Comité de Gestión del Parque Nacional Cordillera del Cóndor",
        "Asesoría con comunidades Wampis y Awajún mediante aplicación SMART",
      ],
    },
    {
      company: "PUCP",
      title: "Pre-docente",
      dateRange: "Jul 2022 — Dic 2025",
      bullets: [
        "Cursos: Geografía del Transporte, Gestión de Cuencas, Población y Territorio",
        "Material didáctico para Dra. Nicole Bernex y Dr. Pablo Vega Centeno",
      ],
    },
  ],

  education: [
    {
      school: "Pontificia Universidad Católica del Perú (PUCP)",
      degree: "Geógrafo — Licenciado, Colegiado",
      dateRange: "2014 — 2020",
      achievements: [
        "Tercio superior",
        "Tesis: <em>Del istmo de Fitzcarrald a La Pampa</em> — redes de ciudades mineras en Madre de Dios",
      ],
    },
    {
      school: "Housing & Urban Dev. Corp — Delhi, India",
      degree: "Beca ITEC — Gestión de Asentamientos Humanos",
      dateRange: "Ene — Feb 2023",
      achievements: ["Programa de Cooperación Técnica y Económica de la India"],
    },
    {
      school: "Universidad Politécnica de Catalunya, Barcelona",
      degree: "Intercambio — EPSEB",
      dateRange: "Sep 2017 — Feb 2018",
      achievements: ["Escuela Politécnica Superior de Edificación de Barcelona"],
    },
  ],
};
