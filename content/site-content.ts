export type Locale = "en" | "es";

export type SiteContent = {
  skip: string;
  nav: {
    approach: string;
    work: string;
    capabilities: string;
    insights: string;
    contact: string;
    menu: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    titleEnd: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    availability: string;
  };
  proof: {
    eyebrow: string;
    items: Array<{ value: string; label: string; note: string }>;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    body: string;
    statement: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Array<{ number: string; title: string; body: string }>;
  };
  cases: {
    eyebrow: string;
    title: string;
    items: Array<{
      index: string;
      client: string;
      type: string;
      title: string;
      body: string;
      facts: Array<{ value: string; label: string }>;
      services: string[];
      note?: string;
      href?: string;
      linkLabel?: string;
    }>;
  };
  selected: {
    eyebrow: string;
    title: string;
    projects: Array<{ name: string; type: string }>;
    privateLabel: string;
    privateType: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{ title: string; description: string }>;
  };
  inside: {
    eyebrow: string;
    title: string;
    body: string;
    credentials: string[];
  };
  insights: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    note: string;
  };
  footer: {
    positioning: string;
    legalEntity: string;
    mailingAddress: string;
    privacy: string;
    rights: string;
  };
};

export const englishContent: SiteContent = {
  skip: "Skip to content",
  nav: {
    approach: "Approach",
    work: "Work",
    capabilities: "Capabilities",
    insights: "Insights",
    contact: "Work with us",
    menu: "Open menu",
    close: "Close menu",
  },
  hero: {
    eyebrow: "Music Strategy · Growth · Technology",
    titleLead: "Your music doesn't need more marketing.",
    titleAccent: "It needs the right strategy.",
    titleEnd: "",
    body:
      "Private, tailored strategy for artists, labels and music projects ready to move with clarity.",
    primaryCta: "Start a private conversation",
    secondaryCta: "See selected work",
    availability: "Selected projects · International",
  },
  proof: {
    eyebrow: "Selected outcomes",
    items: [
      {
        value: "140K+",
        label: "YouTube subscribers",
        note: "BeFocus Music",
      },
      {
        value: "~18",
        label: "months of focused growth",
        note: "From ~500 subscribers",
      },
      {
        value: "RIAA",
        label: "certified release",
        note: "Las Ganas",
      },
    ],
  },
  philosophy: {
    eyebrow: "The philosophy",
    title: "Every artist is different. Their strategy should be too.",
    body:
      "We do not sell templates, noise or vanity metrics. We study the project, find the real leverage and build a focused system around the music, the audience and the moment.",
    statement: "Clarity before campaigns. Systems before noise.",
  },
  process: {
    eyebrow: "How we work",
    title: "Close enough to understand. Precise enough to move.",
    steps: [
      {
        number: "01",
        title: "Listen",
        body:
          "We begin with the music, the ambition and the constraints. The project is understood before it is marketed.",
      },
      {
        number: "02",
        title: "Diagnose",
        body:
          "Audience, catalog, positioning, channels and data are read together to locate the highest-leverage move.",
      },
      {
        number: "03",
        title: "Build",
        body:
          "A tailored roadmap connects releases, content, growth and technology into one coherent operating system.",
      },
      {
        number: "04",
        title: "Refine",
        body:
          "We follow the signal, measure what matters and adapt the strategy without losing the artistic direction.",
      },
    ],
  },
  cases: {
    eyebrow: "Selected case studies",
    title: "Work designed around the project, not the playbook.",
    items: [
      {
        index: "01",
        client: "BeFocus Music",
        type: "Music channel · Growth system",
        title: "From ~500 to 140K+ subscribers in around 18 months.",
        body:
          "A connected growth loop brought together channel strategy, YouTube SEO, release cadence and audience learning. Each release informed the next move instead of living as an isolated campaign.",
        facts: [
          { value: "~500", label: "starting subscribers" },
          { value: "140K+", label: "subscribers reached" },
          { value: "~18 mo.", label: "growth window" },
        ],
        services: [
          "Channel strategy",
          "YouTube SEO",
          "Release architecture",
          "Growth loop",
        ],
        href: "https://www.youtube.com/@befocusmusic",
        linkLabel: "Visit BeFocus Music",
      },
      {
        index: "02",
        client: "Las Ganas",
        type: "Payaso x Ley × Musteerifa",
        title: "Strategy and launch work for an RIAA-certified release.",
        body:
          "The release was approached as a precise cultural moment: aligning positioning, launch thinking and execution around the record and the artists involved.",
        facts: [
          { value: "RIAA", label: "certified release" },
          { value: "1", label: "connected launch system" },
        ],
        services: [
          "Release strategy",
          "Launch planning",
          "Digital positioning",
          "Execution support",
        ],
        note:
          "NewTalentt contributed to strategy and launch. This does not imply artist management or representation.",
      },
    ],
  },
  selected: {
    eyebrow: "Selected work",
    title: "Across artists, labels and music-led projects.",
    projects: [
      { name: "Payaso x Ley", type: "Artist" },
      { name: "BeFocus Music", type: "Music platform" },
      { name: "ROWELL URBAN", type: "Artist project" },
      { name: "Ernesto Losa", type: "Artist" },
      { name: "Musteerifa", type: "Artist" },
    ],
    privateLabel: "Private projects",
    privateType: "Private by design",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "The right disciplines, connected around the music.",
    body:
      "Engagements are scoped around what the project actually needs — never padded with services for the sake of a package.",
    items: [
      {
        title: "Music & release strategy",
        description:
          "Positioning, roadmaps, campaign architecture and release sequencing.",
      },
      {
        title: "Growth systems",
        description:
          "Channel strategy, audience loops, YouTube SEO and performance learning.",
      },
      {
        title: "Digital identity",
        description:
          "Clearer narratives, web experiences and connected audience touchpoints.",
      },
      {
        title: "Music technology",
        description:
          "Purpose-built web products, automation thinking and secure digital foundations.",
      },
    ],
  },
  inside: {
    eyebrow: "Built from inside the industry",
    title: "Musical instinct, strategic rigor and technical depth.",
    body:
      "NewTalentt was founded by a musician, singer and songwriter who also works across music strategy, cybersecurity engineering and web development. That combination keeps creative ambition, business reality and technical execution in the same room — without turning the work into a personal brand.",
    credentials: [
      "Musician · Singer · Songwriter",
      "Music strategist",
      "Cybersecurity engineer",
      "Web developer",
    ],
  },
  insights: {
    eyebrow: "Instagram · Insights",
    title: "Clear thinking for a noisy music industry.",
    body:
      "Notes on strategy, growth, technology and the decisions behind sustainable artist development.",
    cta: "Follow @newtalent.t",
  },
  contact: {
    eyebrow: "Work with us",
    title: "If the music matters, the strategy should match it.",
    body:
      "Tell us what you are building, where it stands and what needs to change. We work privately with a selected number of artists, labels and music projects.",
    cta: "Start a private conversation",
    note: "No generic packages. No public intake funnel.",
  },
  footer: {
    positioning: "Strategy. Growth. Technology. Built for music.",
    legalEntity: "Legal entity",
    mailingAddress: "Mailing address",
    privacy: "Private by design.",
    rights: "NewTalentt. All rights reserved.",
  },
};

export const spanishContent: SiteContent = {
  skip: "Saltar al contenido",
  nav: {
    approach: "Enfoque",
    work: "Proyectos",
    capabilities: "Capacidades",
    insights: "Insights",
    contact: "Trabaja con nosotros",
    menu: "Abrir menú",
    close: "Cerrar menú",
  },
  hero: {
    eyebrow: "Music Strategy · Growth · Technology",
    titleLead: "Tu música no necesita más marketing.",
    titleAccent: "Necesita la estrategia correcta.",
    titleEnd: "",
    body:
      "Estrategia privada y personalizada para artistas, sellos y proyectos musicales listos para avanzar con claridad.",
    primaryCta: "Iniciar una conversación privada",
    secondaryCta: "Ver proyectos seleccionados",
    availability: "Proyectos seleccionados · Internacional",
  },
  proof: {
    eyebrow: "Resultados seleccionados",
    items: [
      {
        value: "140K+",
        label: "suscriptores en YouTube",
        note: "BeFocus Music",
      },
      {
        value: "~18",
        label: "meses de growth enfocado",
        note: "Desde ~500 suscriptores",
      },
      {
        value: "RIAA",
        label: "lanzamiento certificado",
        note: "Las Ganas",
      },
    ],
  },
  philosophy: {
    eyebrow: "La filosofía",
    title: "Cada artista es diferente. Su estrategia también debería serlo.",
    body:
      "No vendemos plantillas, ruido ni vanity metrics. Estudiamos el proyecto, encontramos la palanca real y construimos un sistema enfocado alrededor de la música, la audiencia y el momento.",
    statement: "Claridad antes que campañas. Sistemas antes que ruido.",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Lo bastante cerca para entender. Lo bastante precisos para avanzar.",
    steps: [
      {
        number: "01",
        title: "Escuchar",
        body:
          "Empezamos por la música, la ambición y las limitaciones. Entendemos el proyecto antes de promocionarlo.",
      },
      {
        number: "02",
        title: "Diagnosticar",
        body:
          "Leemos en conjunto audiencia, catálogo, posicionamiento, canales y datos para localizar la acción de mayor impacto.",
      },
      {
        number: "03",
        title: "Construir",
        body:
          "Un roadmap a medida conecta lanzamientos, contenido, growth y tecnología en un único sistema operativo.",
      },
      {
        number: "04",
        title: "Refinar",
        body:
          "Seguimos la señal, medimos lo que importa y adaptamos la estrategia sin perder la dirección artística.",
      },
    ],
  },
  cases: {
    eyebrow: "Case studies seleccionados",
    title: "Trabajo diseñado alrededor del proyecto, no de la plantilla.",
    items: [
      {
        index: "01",
        client: "BeFocus Music",
        type: "Canal musical · Sistema de growth",
        title: "De ~500 a 140K+ suscriptores en unos 18 meses.",
        body:
          "Un growth loop conectado reunió estrategia de canal, YouTube SEO, cadencia de lanzamientos y aprendizaje de audiencia. Cada lanzamiento informó el siguiente movimiento en lugar de vivir como una campaña aislada.",
        facts: [
          { value: "~500", label: "suscriptores iniciales" },
          { value: "140K+", label: "suscriptores alcanzados" },
          { value: "~18 mes.", label: "ventana de growth" },
        ],
        services: [
          "Estrategia de canal",
          "YouTube SEO",
          "Arquitectura de lanzamientos",
          "Growth loop",
        ],
        href: "https://www.youtube.com/@befocusmusic",
        linkLabel: "Visitar BeFocus Music",
      },
      {
        index: "02",
        client: "Las Ganas",
        type: "Payaso x Ley × Musteerifa",
        title:
          "Estrategia y lanzamiento para un release certificado por la RIAA.",
        body:
          "El lanzamiento se trabajó como un momento cultural preciso: alineando posicionamiento, estrategia de salida y ejecución alrededor de la canción y los artistas implicados.",
        facts: [
          { value: "RIAA", label: "lanzamiento certificado" },
          { value: "1", label: "sistema de lanzamiento conectado" },
        ],
        services: [
          "Estrategia de release",
          "Planificación de lanzamiento",
          "Posicionamiento digital",
          "Apoyo en ejecución",
        ],
        note:
          "NewTalentt contribuyó en estrategia y lanzamiento. Esto no implica management ni representación artística.",
      },
    ],
  },
  selected: {
    eyebrow: "Proyectos seleccionados",
    title: "Junto a artistas, sellos y proyectos construidos desde la música.",
    projects: [
      { name: "Payaso x Ley", type: "Artista" },
      { name: "BeFocus Music", type: "Plataforma musical" },
      { name: "ROWELL URBAN", type: "Proyecto artístico" },
      { name: "Ernesto Losa", type: "Artista" },
      { name: "Musteerifa", type: "Artista" },
    ],
    privateLabel: "Proyectos privados",
    privateType: "Privado por diseño",
  },
  capabilities: {
    eyebrow: "Capacidades",
    title: "Las disciplinas correctas, conectadas alrededor de la música.",
    body:
      "Cada colaboración se define alrededor de lo que el proyecto necesita de verdad, sin inflar el alcance para vender un paquete.",
    items: [
      {
        title: "Music & release strategy",
        description:
          "Posicionamiento, roadmaps, arquitectura de campañas y secuencia de lanzamientos.",
      },
      {
        title: "Growth systems",
        description:
          "Estrategia de canal, audience loops, YouTube SEO y aprendizaje de performance.",
      },
      {
        title: "Identidad digital",
        description:
          "Narrativas más claras, experiencias web y puntos de contacto conectados con la audiencia.",
      },
      {
        title: "Music technology",
        description:
          "Productos web a medida, automatización y fundamentos digitales seguros.",
      },
    ],
  },
  inside: {
    eyebrow: "Construida desde dentro de la industria",
    title: "Instinto musical, rigor estratégico y profundidad técnica.",
    body:
      "NewTalentt fue fundada por un músico, cantante y compositor que también trabaja en estrategia musical, ingeniería de ciberseguridad y desarrollo web. Esa combinación mantiene la ambición creativa, la realidad de negocio y la ejecución técnica en la misma sala, sin convertir el trabajo en una marca personal.",
    credentials: [
      "Músico · Cantante · Compositor",
      "Estratega musical",
      "Ingeniero en ciberseguridad",
      "Desarrollador web",
    ],
  },
  insights: {
    eyebrow: "Instagram · Insights",
    title: "Pensamiento claro para una industria musical ruidosa.",
    body:
      "Notas sobre estrategia, growth, tecnología y las decisiones detrás de un desarrollo artístico sostenible.",
    cta: "Seguir @newtalent.t",
  },
  contact: {
    eyebrow: "Trabaja con nosotros",
    title: "Si la música importa, la estrategia debe estar a su altura.",
    body:
      "Cuéntanos qué estás construyendo, dónde se encuentra y qué necesita cambiar. Trabajamos de forma privada con un número seleccionado de artistas, sellos y proyectos musicales.",
    cta: "Iniciar una conversación privada",
    note: "Sin paquetes genéricos. Sin formularios públicos masivos.",
  },
  footer: {
    positioning: "Strategy. Growth. Technology. Built for music.",
    legalEntity: "Entidad legal",
    mailingAddress: "Dirección postal",
    privacy: "Privado por diseño.",
    rights: "NewTalentt. Todos los derechos reservados.",
  },
};
