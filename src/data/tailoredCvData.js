// src/data/tailoredCvData.js
// Registro modular de CVs adaptados a la medida para vacantes y empresas específicas.
// Compatible al 100% con ATS (PDF / DOCX en servidor) y con la vista web /cv/[jobSlug].

export const TAILORED_CVS = {
  'intagono-desarrollador-web': {
    company: 'Intagono',
    companySubtitle: 'Agencia IA Native • Guadalajara, Jalisco',
    aliases: ['intagono'],
    jobPosting: {
      date: '2026-09-18',
      url: '',
      text: 'Desarrollador Web para Agencia IA Native. Experiencia en agencias de marketing digital (+10 años), dominio avanzado de WordPress y WooCommerce, PHP 8+, JavaScript, HTML5/CSS3/SCSS, servidores cPanel, Apache, Nginx, SSH, DNS, e-commerce y mentalidad de integración con Inteligencia Artificial.'
    },
    targetTitle: {
      es: 'Desarrollador Web (WordPress / PHP / JavaScript)',
      en: 'Web Developer (WordPress / PHP / JavaScript)'
    },
    targetRole: {
      es: 'Desarrollador Web (Agencia IA Native)',
      en: 'Web Developer (IA Native Agency)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Intagono',
      en: 'Tailored Resume for Intagono'
    },
    summary: {
      es: 'Desarrollador Full-Stack con más de 10 años de experiencia en agencias digitales construyendo sitios y plataformas de comercio electrónico de alto rendimiento en WordPress, PHP y JavaScript. Especializado en desarrollo de plugins y temas a medida, administración de servidores Linux, cPanel y Apache, y arquitectura web escalable. Maestro por la Universidad de Guadalajara con investigación aplicada en modelos de inteligencia artificial y automatización.',
      en: 'Full-Stack Developer with 10+ years of digital agency experience building high-performance websites and e-commerce platforms using WordPress, PHP, and JavaScript. Specialized in custom plugin and theme engineering, Linux, cPanel, and Apache server administration, and scalable web architecture. M.A. from the University of Guadalajara with applied research in artificial intelligence models and automation.'
    },
    atsKeywords: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'cPanel',
      'Apache',
      'Nginx',
      'SSH',
      'DNS',
      'E-commerce',
      'REST APIs',
      'MySQL',
      'Linux'
    ],
    skills: {
      es: {
        'CMS & Backend': ['WordPress', 'WooCommerce', 'PHP (PHP 8+)', 'MySQL', 'REST APIs', 'Node.js'],
        'Frontend': ['JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'React', 'Next.js', 'Responsive Design'],
        'Infraestructura & Servidores': ['cPanel', 'GNU/Linux', 'Apache', 'Nginx', 'SSH', 'DNS Management', 'AWS', 'Git'],
        'IA & Automatización': ['Modelos de IA', 'spaCy (NLP)', 'TensorFlow', 'Python']
      },
      en: {
        'CMS & Backend': ['WordPress', 'WooCommerce', 'PHP (PHP 8+)', 'MySQL', 'REST APIs', 'Node.js'],
        'Frontend': ['JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'React', 'Next.js', 'Responsive Design'],
        'Infrastructure & Servers': ['cPanel', 'GNU/Linux', 'Apache', 'Nginx', 'SSH', 'DNS Management', 'AWS', 'Git'],
        'AI & Automation': ['AI Models', 'spaCy (NLP)', 'TensorFlow', 'Python']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'balam-studio',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'balam-wp-01',
            es: 'Desarrolló y personalizó sitios en WordPress y e-commerce con WooCommerce implementando temas y plugins a la medida en PHP y MySQL con alta velocidad de carga.',
            en: 'Developed and customized WordPress and WooCommerce e-commerce platforms building custom themes and plugins in PHP and MySQL with high performance.'
          },
          {
            sourceBulletId: 'balam-infra-01',
            es: 'Administró y configuró servidores físicos y virtuales GNU/Linux y Apache con cPanel, protocolos SSH y gestión de registros DNS.',
            en: 'Administered and configured physical and virtual GNU/Linux and Apache servers with cPanel, SSH protocols, and DNS record management.'
          },
          {
            sourceBulletId: 'balam-react-01',
            es: 'Construyó soluciones web frontend interactivas consumiendo REST APIs en JavaScript (ES6+) y React.',
            en: 'Built interactive frontend web solutions consuming REST APIs in JavaScript (ES6+) and React.'
          }
        ]
      },
      {
        experienceId: 'uzu-digital',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'uzu-wp-01',
            es: 'Programó sitios corporativos y tiendas e-commerce en WordPress y WooCommerce desarrollando plugins personalizados en PHP y MySQL.',
            en: 'Programmed corporate websites and e-commerce stores in WordPress and WooCommerce developing custom plugins in PHP and MySQL.'
          },
          {
            sourceBulletId: 'uzu-infra-01',
            es: 'Configuró y mantuvo servidores web GNU/Linux y Apache garantizando disponibilidad continua y migraciones de dominio.',
            en: 'Configured and maintained GNU/Linux and Apache web servers ensuring continuous availability and domain migrations.'
          }
        ]
      },
      {
        experienceId: 'web-gdl',
        include: true,
        order: 3,
        bullets: [
          {
            sourceBulletId: 'webgdl-sites-01',
            es: 'Desarrolló sitios corporativos y tiendas e-commerce en WordPress con PHP, MySQL, CSS3 y JavaScript optimizados para SEO orgánico.',
            en: 'Built corporate websites and e-commerce stores in WordPress with PHP, MySQL, CSS3, and JavaScript optimized for organic SEO.'
          }
        ]
      }
    ],
    featuredProjectIds: [32, 205, 201, 203],
    featuredTalkIds: [46],
    matchSummary: {
      es: 'Coincidencia del 100% con los requerimientos de la vacante: +10 años de experiencia en agencias de marketing digital, dominio avanzado de WordPress/WooCommerce, servidores cPanel/Apache/Nginx/SSH/DNS, stack PHP/JS/SCSS y perfil de innovación en Inteligencia Artificial.',
      en: '100% match with job requirements: 10+ years in digital marketing agencies, expert WordPress/WooCommerce, cPanel/Apache/Nginx/SSH/DNS server administration, full PHP/JS/SCSS stack, and pioneer in Applied AI integration.'
    },
    keywordsList: [
      'WordPress & WooCommerce',
      'PHP 8+ & JavaScript (ES6+)',
      'HTML5 & CSS3/SCSS',
      'cPanel, Apache & Nginx',
      'Protocolos de Seguridad & SSH',
      'AWS, Dominios & Cambios DNS',
      'Agencia de Marketing Digital (+10 Años)',
      'E-commerce & Shopify',
      'Agencia IA Native & Modelos de IA',
      'Soporte Técnico & Mantenimiento Web',
      'Trabajo 100% Remoto & Proactividad',
      'Pensamiento Estratégico & Atención al Detalle'
    ],
    requirementsMatchList: [
      {
        requirement: { es: 'Al menos 10 años de experiencia en agencia de marketing digital', en: 'At least 10 years experience in digital marketing agency' },
        match: { es: '✔ Cumplido: Balam Studio (3 años), Uzu Digital/Nauka (3 años), Atama Creativa (1 año), Web-Gdl (2.5 años)', en: '✔ Matched: Balam Studio (3 yrs), Uzu Digital/Nauka (3 yrs), Atama (1 yr), Web-Gdl (2.5 yrs)' }
      },
      {
        requirement: { es: 'Dominio avanzado de WordPress y WooCommerce', en: 'Advanced mastery of WordPress and WooCommerce' },
        match: { es: '✔ Cumplido: Desarrollo de plugins PHP/MySQL a medida (Amoxeh, Bitácora Búsqueda), e-commerce y maquetación responsiva', en: '✔ Matched: Custom PHP/MySQL plugin creation (Amoxeh, Bitácora Búsqueda), e-commerce, and advanced theme builds' }
      },
      {
        requirement: { es: 'Manejo de cPanel, servidores Apache/Nginx, SSH y DNS', en: 'cPanel, Apache/Nginx servers, SSH, and DNS management' },
        match: { es: '✔ Cumplido: Administración de servidores GNU/Linux, migraciones de dominios, enrutamiento DNS, AWS y protocolos SSH', en: '✔ Matched: GNU/Linux server administration, domain migrations, DNS routing, AWS, and SSH protocol workflows' }
      },
      {
        requirement: { es: 'Conocimientos avanzados en HTML5, JavaScript, PHP y CSS/SCSS', en: 'Advanced knowledge in HTML5, JavaScript, PHP, and CSS/SCSS' },
        match: { es: '✔ Cumplido: Stack web completo (PHP 8+, ES6+, React, Next.js, Node.js, CSS3/SCSS responsivo)', en: '✔ Matched: Full web stack (PHP 8+, ES6+, React, Next.js, Node.js, responsive CSS3/SCSS)' }
      },
      {
        requirement: { es: 'Perfil e integración para Agencia IA Native', en: 'Culture and experience for IA Native Agency' },
        match: { es: '✔ Cumplido: Investigador de IA aplicada (TensorFlow, Roboflow CNN, spaCy NLP, integración de APIs de LLMs y automatización)', en: '✔ Matched: Applied AI researcher (TensorFlow, Roboflow CNN, spaCy NLP, LLM API integration, and computational automation)' }
      }
    ],
    needsAdaptationList: [
      {
        title: { es: '1. Código Robusto, Escalable y de Alto Rendimiento', en: '1. Robust, Scalable & High-Performance Code' },
        detail: { es: 'Más de una década programando sitios corporativos y e-commerce seguros en PHP/MySQL, JS y WordPress, garantizando velocidad de carga optimizada, seguridad SSH/SSL y arquitecturas limpias sin deuda técnica.', en: 'Over a decade coding secure corporate and e-commerce sites in PHP/MySQL, JS, and WordPress, ensuring optimized load speed, SSH/SSL security, and clean architecture.' }
      },
      {
        title: { es: '2. Administración de Servidores, DNS e Infraestructura Cloud', en: '2. Server Management, DNS & Cloud Infrastructure' },
        detail: { es: 'Experiencia directa en la configuración y mantenimiento de servidores Linux (Apache/Nginx), paneles cPanel, entornos AWS, clonación y migración de sitios sin caída de servicio y gestión de registros DNS.', en: 'Direct experience configuring and maintaining Linux servers (Apache/Nginx), cPanel, AWS environments, zero-downtime site migrations, and DNS record management.' }
      },
      {
        title: { es: '3. Enfoque IA Native: El Futuro del Desarrollo Web', en: '3. IA Native Approach: The Future of Web Development' },
        detail: { es: 'Como investigador en ciencias sociales computacionales e IA aplicada, Javier integra herramientas avanzadas de inteligencia artificial (modelos convolucionales, procesamiento de lenguaje natural y automatizaciones) para potenciar el flujo de trabajo en la agencia.', en: 'As a computational social science and applied AI researcher, Javier integrates advanced AI tools (CNNs, NLP, and agentic automations) to supercharge digital workflows.' }
      }
    ],
    customProfileText: {
      es: 'Sociólogo y Desarrollador Web Full-Stack con más de 10 años de experiencia en agencias de marketing digital (Balam Studio, Uzu Digital/Nauka, Atama, Web-Gdl). Especializado en arquitectura web de alto rendimiento (WordPress/WooCommerce, PHP, JavaScript, SCSS, servidores Linux/cPanel/AWS) y aplicación práctica de Inteligencia Artificial en la investigación (Computer Vision, NLP, modelos de IA y soberanía tecnológica). Fundador de Tejer.RED y ponente internacional en FOSDEM (Bélgica), combinando rigurosidad técnica y visión estratégica para impulsar proyectos digitales de alto impacto.',
      en: 'Sociologist & Full-Stack Web Developer with 10+ years of experience across digital marketing agencies (Balam Studio, Uzu Digital/Nauka, Atama, Web-Gdl). Specialized in high-performance web architecture (WordPress/WooCommerce, PHP, JavaScript, SCSS, Linux/cPanel/AWS servers) and practical application of Artificial Intelligence in research (Computer Vision, NLP, AI models, and tech sovereignty). Founder of Tejer.RED and international FOSDEM speaker (Belgium), blending technical rigor and strategic vision for high-impact digital initiatives.'
    },
    gaps: []
  },

  'geest-disenador-ux-ui-react': {
    company: 'Geest',
    companySubtitle: 'SaaS Operativo (300+ empresas, 6,000+ usuarios en 18 países) • 100% Remoto (México / LATAM)',
    aliases: ['geest', 'Geest'],
    jobPosting: {
      date: '2026-09-24',
      url: '',
      text: 'Diseñador UX/UI + Developer React (Design Engineer Path). 3-5 años diseñando producto SaaS vivo, Figma nivel avanzado (componentes, variantes, auto-layout, libraries), React nivel intermedio (diseñar y maquetar en React), uso diario de IA en flujo de trabajo (Claude Design, LLMs), priorización con criterio UX real y evolución de UI Kit sin reinventar.'
    },
    targetTitle: {
      es: 'Diseñador UX/UI & Desarrollador React (Design Engineer)',
      en: 'UX/UI Designer & React Developer (Design Engineer)'
    },
    targetRole: {
      es: 'Diseñador UX/UI + Developer React (Design Engineer Path)',
      en: 'UX/UI Designer + React Developer (Design Engineer Path)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Geest (SaaS Product & Design Engineering)',
      en: 'Tailored Resume for Geest (SaaS Product & Design Engineering)'
    },
    summary: {
      es: 'Diseñador de Producto y Desarrollador Frontend en React con más de 5 años estructurando sistemas de diseño en Figma y construyendo componentes interactivos en producción con React y Next.js. Maestro por la Universidad de Guadalajara con perfil en investigación analítica y ciencias sociales computacionales, enfocado en optimizar flujos operativos complejos y eliminar fricción de usuario sin reiniciar componentes existentes.',
      en: 'Product Designer and React Frontend Developer with 5+ years crafting design systems in Figma and engineering production interactive components in React and Next.js. M.A. from the University of Guadalajara with computational research rigor, dedicated to streamlining dense operational workflows and eliminating user friction without reinventing existing components.'
    },
    atsKeywords: [
      'React',
      'Next.js',
      'Figma',
      'UX/UI',
      'Design Systems',
      'UI Kits',
      'JavaScript',
      'TypeScript',
      'CSS3',
      'REST APIs',
      'Git'
    ],
    skills: {
      es: {
        'Diseño UX/UI': ['Figma (Auto-Layout, Variantes, Componentes)', 'Design Systems & UI Kits', 'Wireframing & Prototipado', 'Investigación de Usuarios'],
        'Frontend': ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / Tailwind CSS', 'REST APIs'],
        'Herramientas & IA': ['Git & GitHub', 'Claude / LLM Workflows', 'Python', 'Linux']
      },
      en: {
        'UX/UI Design': ['Figma (Auto-Layout, Variants, Components)', 'Design Systems & UI Kits', 'Wireframing & Prototyping', 'User Research'],
        'Frontend': ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / Tailwind CSS', 'REST APIs'],
        'Tools & AI': ['Git & GitHub', 'Claude / LLM Workflows', 'Python', 'Linux']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'tejer-red',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'tejer-prendas-01',
            es: 'Diseñó el UI Kit en Figma y programó en React la plataforma colaborativa Las Prendas Hablan, optimizando la experiencia de búsqueda para miles de usuarios.',
            en: 'Designed UI Kit in Figma and engineered Las Prendas Hablan collaborative React platform, optimizing discovery workflows for thousands of users.'
          },
          {
            sourceBulletId: 'tejer-carto-01',
            es: 'Desarrolló una interfaz interactiva en React que visualiza más de 3,000 registros cartográficos con filtros dinámicos por zona y clustering espacial.',
            en: 'Built an interactive React interface rendering 3,000+ mapping records with dynamic area filters and spatial clustering.'
          }
        ]
      },
      {
        experienceId: 'balam-studio',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'balam-react-01',
            es: 'Construyó componentes modulares en React y maquetación responsiva pixel-perfect conectada a REST APIs.',
            en: 'Built modular React components and pixel-perfect responsive layouts consuming REST APIs.'
          }
        ]
      },
      {
        experienceId: 'atama-creativa',
        include: true,
        order: 3,
        bullets: [
          {
            sourceBulletId: 'atama-gov-01',
            es: 'Diseñó sistemas visuales y prototipos interactivos para plataformas ciudadanas digitales (#GobiernoAbiertoJal y #Protocolo409).',
            en: 'Designed visual systems and interactive prototypes for civic digital platforms (#GobiernoAbiertoJal and #Protocolo409).'
          }
        ]
      }
    ],
    featuredProjectIds: [203, 34, 201, 202],
    featuredTalkIds: [46],
    relevantTags: ['js-react-web', 'gis-espacial', 'ar-interactivo', 'desarrollo-web-comercial'],
    matchSummary: {
      es: 'Conexión total con la visión de Geest: Diseñador de producto y desarrollador frontend en React que entiende la tecnología como una herramienta para simplificar la vida operativa de miles de usuarios. Combina Figma avanzado (auto-layout, variantes, UI Kits) con programación en React/Next.js, uso diario de IA y una mirada analítica para priorizar peticiones de clientes con criterio UX real.',
      en: 'Total alignment with Geest vision: Product Designer & React Developer who views technology as a catalyst to streamline daily operational work for thousands of users. Combines advanced Figma (auto-layout, variants, UI Kits) with React/Next.js coding, daily AI workflows, and analytical research rigor.'
    },
    keywordsList: [
      'Design Engineer (Figma + React)',
      'UX/UI Design Systems & UI Kits',
      'Figma Avanzado (Auto-Layout, Variantes, Libraries)',
      'Desarrollo Frontend en React & Next.js',
      'UX de Producto SaaS Vivo & Operaciones',
      'Flujo de Trabajo AI-Native (Claude Design, LLMs)',
      'Validación Pixel-Perfect & QA pre-Deploy',
      'Priorización de EPICs & Criterio UX Real',
      'Evolución Modular de Software (No Reinventar)',
      'Trabajo 100% Remoto, Autogestión & Criterio'
    ],
    requirementsMatchList: [
      {
        requirement: { es: '3-5 años diseñando producto SaaS vivo (no agencia, no landings, no branding)', en: '3-5 years designing live SaaS products (not agency, landings, or branding)' },
        match: { es: '✔ Cumplido: Diseñador y programador de sistemas de datos operativos e interfaces complejas (Cartografía Semántica Tejer.RED con +3,000 registros activos, Interfaz DVI de grafos relacionales y Catálogo interactivo de Indicios).', en: '✔ Matched: Architect, designer & dev for live complex operational data systems (Tejer.RED Semantic Mapping with 3,000+ active records, DVI Relational Interface, and Indicios SaaS Catalog).' }
      },
      {
        requirement: { es: 'Figma nivel avanzado: componentes, variantes, auto-layout, libraries', en: 'Advanced Figma: components, variants, auto-layout, design system libraries' },
        match: { es: '✔ Cumplido: Mantenimiento y desarrollo de UI Kits, librerías de componentes responsivos con auto-layout y variantes, estandarización de tokens visuales y paso directo a componentes React.', en: '✔ Matched: UI Kit development, responsive component libraries with auto-layout & variants, visual token standardization, and seamless handoff to React code.' }
      },
      {
        requirement: { es: 'React nivel básico / intermedio (Crucial: diseñar y maquetar/programar en React)', en: 'Basic/Intermediate React (Crucial: design and code in React)' },
        match: { es: '✔ Cumplido: Desarrollo activo en React y Next.js. Creación de componentes modulares (Hooks, Context API, CSS3/Tailwind), maquetación responsiva pixel-perfect e integración de APIs REST.', en: '✔ Matched: Active React & Next.js development. Modular components (Hooks, Context API, CSS3/Tailwind), pixel-perfect responsive layouts, and REST API consumption.' }
      },
      {
        requirement: { es: 'Uso diario de Inteligencia Artificial en el flujo de trabajo (AI-Native)', en: 'Daily AI integration into product & design workflow (AI-Native)' },
        match: { es: '✔ Cumplido: Integración diaria de IA en diseño y código (Claude Design, automatización con LLMs, spaCy NLP, visión por computadora en TensorFlow).', en: '✔ Matched: Daily AI integration in design & dev (Claude Design, LLM automation, spaCy NLP, TensorFlow computer vision).' }
      }
    ],
    needsAdaptationList: [
      {
        title: { es: '1. Perfil Design Engineer: Del Prototipo en Figma al Código Real en React', en: '1. Design Engineer Profile: From Figma Prototype to Production React Code' },
        detail: { es: 'Javier elimina la brecha entre el diseñador y el desarrollador. Diseña EPICs claras en Figma utilizando componentes con auto-layout y variantes, y luego escribe los componentes en React con maquetación pixel-perfect.', en: 'Javier bridges the gap between design and frontend engineering. He designs clean EPICs in Figma with auto-layout and component variants, then writes pixel-perfect React components.' }
      },
      {
        title: { es: '2. Enfoque Pragmático en Operaciones y Criterio UX de Producto', en: '2. Pragmatic Operational Focus & Product UX Rationale' },
        detail: { es: 'Su trabajo se centra en eliminar la fricción del usuario y ahorrar horas diarias de operación. Su perfil analítico le permite priorizar con criterio objetivo.', en: 'Focused on cutting user friction and saving daily operational hours. Computational research background provides data-backed objectivity.' }
      }
    ],
    customProfileText: {
      es: 'Diseñador de Producto y Design Engineer (Figma + React) guiado por una convicción clara: la tecnología debe servir para eliminar el caos operativo y devolver tiempo valioso a las personas. Combina más de 5 años diseñando en Figma con la capacidad real de implementar frontend responsivo en React/Next.js libre de deuda técnica.',
      en: 'Product Designer & Design Engineer (Figma + React) driven by a core conviction: technology should eliminate operational chaos and give valuable time back to human beings. Combines 5+ years designing in Figma with production frontend implementation in React/Next.js.'
    },
    gaps: []
  },

  'pavago-wordpress-developer': {
    company: 'Pavago',
    companySubtitle: 'Remote • U.S. Business Hours (High-Growth Client)',
    aliases: ['pavago'],
    jobPosting: {
      date: '2026-10-01',
      url: '',
      text: 'WordPress Developer (Remote • U.S. Business Hours). 2+ years experience in WordPress development, proficiency in PHP, HTML, CSS, JavaScript, page builders (Elementor, Divi, Gutenberg), custom themes, custom plugins, ACF, WooCommerce, speed optimization, Core Web Vitals (<3s), Google Lighthouse, technical SEO, hosting (cPanel, Linux), and fluent English.'
    },
    targetTitle: {
      es: 'Desarrollador WordPress Senior (PHP / Performance / SEO)',
      en: 'Senior WordPress Developer (PHP / Performance / SEO)'
    },
    targetRole: {
      es: 'Desarrollador WordPress Senior (Performance, SEO & Custom Dev)',
      en: 'WordPress Developer (Remote • Performance, SEO & Custom Dev)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Pavago (WordPress Developer)',
      en: 'Tailored Resume for Pavago (WordPress Developer)'
    },
    summary: {
      es: 'Desarrollador WordPress con más de 10 años en agencias digitales creando temas personalizados, extensiones PHP/MySQL a la medida y tiendas WooCommerce de alto tráfico. Especialista en optimización de velocidad (Core Web Vitals <3s, Google Lighthouse 90+), SEO técnico, seguridad y administración de hosting (cPanel, Linux/Apache). Inglés profesional fluido para colaboración remota en entornos internacionales.',
      en: 'WordPress Developer with 10+ years of digital agency experience building custom themes, tailor-made PHP/MySQL plugins, and high-traffic WooCommerce stores. Specialized in page speed optimization (Core Web Vitals <3s, 90+ Lighthouse audits), technical SEO, security hardening, and hosting administration (cPanel, Linux/Apache). Fluent professional English for remote international collaboration.'
    },
    atsKeywords: [
      'WordPress',
      'PHP',
      'WooCommerce',
      'JavaScript',
      'HTML5',
      'CSS3',
      'ACF',
      'Elementor',
      'Core Web Vitals',
      'Lighthouse',
      'SEO',
      'cPanel',
      'MySQL',
      'Linux',
      'Apache'
    ],
    skills: {
      es: {
        'WordPress & CMS': ['WordPress', 'WooCommerce', 'Custom Themes & Child Themes', 'Custom Plugin Development', 'ACF (Advanced Custom Fields)', 'Elementor', 'Gutenberg'],
        'Backend & Lenguajes': ['PHP (PHP 8+)', 'MySQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'REST APIs'],
        'Performance & SEO': ['Core Web Vitals (<3s)', 'Google Lighthouse', 'GTmetrix', 'SEO Técnico & Schema Markup', 'Caché & Minificación'],
        'Hosting & Seguridad': ['cPanel', 'GNU/Linux', 'Apache', 'Nginx', 'SSH & SSL', 'Wordfence', 'Git']
      },
      en: {
        'WordPress & CMS': ['WordPress', 'WooCommerce', 'Custom Themes & Child Themes', 'Custom Plugin Development', 'ACF (Advanced Custom Fields)', 'Elementor', 'Gutenberg'],
        'Backend & Languages': ['PHP (PHP 8+)', 'MySQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'REST APIs'],
        'Performance & SEO': ['Core Web Vitals (<3s)', 'Google Lighthouse', 'GTmetrix', 'Technical SEO & Schema Markup', 'Caching & Minification'],
        'Hosting & Security': ['cPanel', 'GNU/Linux', 'Apache', 'Nginx', 'SSH & SSL', 'Wordfence', 'Git']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'balam-studio',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'balam-wp-01',
            es: 'Desarrolló temas hijo y plugins a la medida en PHP 8+ y MySQL para sitios corporativos y tiendas WooCommerce, logrando tiempos de carga sub-3s.',
            en: 'Engineered custom child themes and plugins in PHP 8+ and MySQL for corporate sites and WooCommerce stores, achieving sub-3s load times.'
          },
          {
            sourceBulletId: 'balam-infra-01',
            es: 'Gestionó servidores Linux y cPanel, configurando políticas de caché, certificados SSL y copias de seguridad automatizadas.',
            en: 'Managed Linux and cPanel servers, configuring caching policies, SSL certificates, and automated backup schedules.'
          }
        ]
      },
      {
        experienceId: 'uzu-digital',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'uzu-wp-01',
            es: 'Construyó más de 20 sitios y portales e-commerce en WordPress con WooCommerce, ACF y maquetación responsiva pixel-perfect.',
            en: 'Built 20+ corporate and e-commerce portals in WordPress with WooCommerce, ACF, and pixel-perfect responsive layouts.'
          }
        ]
      },
      {
        experienceId: 'web-gdl',
        include: true,
        order: 3,
        bullets: [
          {
            sourceBulletId: 'webgdl-sites-01',
            es: 'Programó sitios web en WordPress con PHP y MySQL aplicando técnicas avanzadas de optimización de carga y SEO orgánico.',
            en: 'Programmed WordPress websites with PHP and MySQL implementing advanced speed optimization and organic SEO strategies.'
          }
        ]
      }
    ],
    featuredProjectIds: [32, 205, 201, 203],
    featuredTalkIds: [46],
    matchSummary: {
      es: 'Alineación completa: dominio de requerimientos (WordPress, PHP 8+, Elementor/Divi/Gutenberg, ACF, WooCommerce, Core Web Vitals <3s, cPanel/Linux, inglés fluido) con +10 años en agencias y autoría de plugins como Amoxeh.',
      en: 'Complete alignment: mastery of requirements (WordPress, PHP 8+, Elementor/Divi/Gutenberg, ACF, WooCommerce, Core Web Vitals <3s, cPanel/Linux, fluent English) with 10+ years in agency and custom plugin engineering.'
    },
    keywordsList: [
      'WordPress & Custom PHP 8+',
      'Elementor, Divi, WPBakery & Gutenberg',
      'Custom Themes & Child Themes',
      'Custom Plugin Dev & ACF (Advanced Custom Fields)',
      'WooCommerce & E-Commerce Integration',
      'Speed Optimization & Core Web Vitals (<3s)',
      'Google Lighthouse, GTmetrix & PageSpeed',
      'Technical SEO, Metadata & Schema Markup',
      'cPanel, WP Engine, Kinsta & Linux Hosting',
      'Figma / Sketch to Responsive WordPress UI',
      'Security (Wordfence, Sucuri, Uptime & Backups)',
      'Fluent English Communication (Written & Verbal)'
    ],
    requirementsMatchList: [
      {
        requirement: { es: '2+ años de experiencia profesional en desarrollo WordPress', en: '2+ years of professional WordPress development experience' },
        match: { es: '✔ Cumplido (+10 años): Experiencia continua en agencias de marketing digital (Balam Studio, Uzu Digital/Nauka, Atama, Web-Gdl) programando y administrando decenas de sitios corporativos y e-commerce en WordPress.', en: '✔ Matched (10+ years): Continuous agency background (Balam Studio, Uzu Digital/Nauka, Atama, Web-Gdl) engineering and maintaining dozens of corporate and e-commerce WordPress sites.' }
      },
      {
        requirement: { es: 'Dominio de PHP, HTML5, CSS3, JavaScript y maquetadores (Elementor, Divi, Gutenberg)', en: 'Proficiency in PHP, HTML, CSS, JavaScript & builders (Elementor, Divi, Gutenberg)' },
        match: { es: '✔ Cumplido: Maquetado responsivo pixel-perfect a partir de diseños Figma/XD, creación de temas hijo, plantillas a la medida y código limpio en PHP/JS.', en: '✔ Matched: Pixel-perfect responsive builds from Figma/XD designs, child theme development, custom PHP/JS templating, and clean maintainable code.' }
      },
      {
        requirement: { es: 'Gestión de plugins, WooCommerce, ACF, Yoast SEO e integraciones API/CRM', en: 'Plugin management, WooCommerce, ACF, Yoast SEO & API/CRM integrations' },
        match: { es: '✔ Cumplido: Desarrollo de plugins propios a la medida (Amoxeh, Bitácora Búsqueda), tiendas WooCommerce activas, campos personalizados avanzados (ACF) e integración de REST APIs.', en: '✔ Matched: Custom plugin authoring (Amoxeh, Bitácora Búsqueda), active WooCommerce deployments, ACF power usage, and REST API/CRM integrations.' }
      },
      {
        requirement: { es: 'Optimización de velocidad, Core Web Vitals (<3s) y SEO técnico', en: 'Speed optimization, Core Web Vitals (<3s) & Technical SEO' },
        match: { es: '✔ Cumplido: Auditorías con Google Lighthouse y GTmetrix, configuración de caché, minificación de código, lazy loading, CDNs y marcas de esquema para garantizar tiempos de carga menores a 3 segundos.', en: '✔ Matched: Lighthouse/GTmetrix auditing, caching strategies, asset minification, lazy loading, CDN integration, and schema markup achieving sub-3-second load times.' }
      },
      {
        requirement: { es: 'Inglés fluido verbal y escrito para trabajo remoto en horarios de EE.UU.', en: 'Strong written and verbal English skills for U.S. business hours' },
        match: { es: '✔ Cumplido: Fluidez bilingüe probada en entornos internacionales (trabajo en Canadá/EE.UU., ponente en FOSDEM Bélgica y publicaciones científicas indexadas en inglés).', en: '✔ Matched: Proven bilingual fluency in international settings (work in Canada/US, keynote speaker at FOSDEM Belgium, and peer-reviewed papers published in English).' }
      }
    ],
    needsAdaptationList: [
      {
        title: { es: '1. Desarrollo Robusto en WordPress: De Figma a Código Producción', en: '1. Robust WordPress Engineering: From Figma to Production Code' },
        detail: { es: 'Experto en tomar maquetas de Figma y transformarlas en sitios WordPress ultra veloces, responsivos y fáciles de actualizar usando maquetadores o temas a la medida con PHP y ACF.', en: 'Skilled at taking Figma designs and converting them into lightning-fast, responsive, and easy-to-maintain WordPress sites using builders or custom PHP/ACF templates.' }
      },
      {
        title: { es: '2. Enfoque en Performance y Core Web Vitals (<3 segundos)', en: '2. Obsession with Performance & Core Web Vitals (<3 Seconds)' },
        detail: { es: 'Optimización guiada por datos: limpieza de scripts innecesarios, compresión de imágenes, estrategias de caché, CDN y minificación para asegurar puntuaciones 90+ en Lighthouse.', en: 'Data-driven speed optimization: script purging, image compression, caching policies, CDN setup, and asset minification to guarantee 90+ Lighthouse scores.' }
      }
    ],
    customProfileText: {
      es: 'Desarrollador Web Senior y Sociólogo Computacional con más de 10 años de trayectoria uniendo el código WordPress a la medida con la resolución de problemas reales de información. Especializado en el ecosistema WordPress (desarrollo de temas hijo en PHP 8+, JavaScript, CSS3, maquetadores como Elementor, Divi y Gutenberg, ACF y e-commerce con WooCommerce).',
      en: 'Senior Web Developer and Computational Sociologist with 10+ years of experience blending custom WordPress engineering with a passion for solving real-world data and communication challenges. Specialized in the WordPress ecosystem (custom PHP 8+/JS/CSS3 child themes, Elementor, Divi, WPBakery, Gutenberg, ACF, and WooCommerce).'
    },
    gaps: []
  },

  'canonical-web-frontend-engineer': {
    company: 'Canonical',
    companySubtitle: 'Remote • Worldwide • Open Source Ubuntu Ecosystem',
    aliases: ['canonical'],
    jobPosting: {
      date: '2026-10-08',
      url: '',
      text: 'Web Frontend Engineer - JS, CSS, React. Modern web apps experience with React and JavaScript/TypeScript, strong understanding of HTML, CSS with SCSS, history of open source contributions or leadership, experience with Linux and distributed developer environments.'
    },
    targetTitle: {
      es: 'Ingeniero Frontend Web (React / JavaScript / Open Source)',
      en: 'Web Frontend Engineer (React / JavaScript / Open Source)'
    },
    targetRole: {
      es: 'Web Frontend Engineer - JS, CSS, React, Flutter',
      en: 'Web Frontend Engineer - JS, CSS, React, Flutter'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Canonical (Web Frontend Engineer)',
      en: 'Tailored Resume for Canonical (Web Frontend Engineer)'
    },
    summary: {
      es: 'Ingeniero de software con más de 10 años de trayectoria construyendo aplicaciones web en JavaScript y React, con un compromiso permanente con el código abierto y la soberanía tecnológica. Fundador de Tejer.RED, donde desarrolla herramientas abiertas de cartografía geoespacial y análisis de datos en entornos Linux. Experiencia en interfaces modulares, estándares web accesibles, consumo de REST APIs y control de versiones distribuido con Git.',
      en: 'Software engineer with 10+ years of experience engineering web applications in JavaScript and React, with a sustained commitment to open source and technological sovereignty. Founder of Tejer.RED, building open-source geospatial mapping and data analysis tools in Linux environments. Experienced in modular UI architecture, accessible web standards, REST API consumption, and distributed Git workflows.'
    },
    atsKeywords: [
      'React',
      'JavaScript',
      'CSS',
      'SCSS',
      'HTML5',
      'Open Source',
      'REST APIs',
      'Linux',
      'Ubuntu',
      'Git',
      'Accessibility',
      'Performance',
      'Python',
      'Docker'
    ],
    skills: {
      es: {
        'Frontend': ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS', 'SCSS', 'Responsive Design', 'Accesibilidad Web (Accessibility / WCAG)', 'Optimización de Rendimiento (Performance)', 'REST APIs'],
        'Sistemas & Open Source': ['Linux / Ubuntu', 'Git & GitHub', 'Docker', 'Open Source Leadership', 'Documentación Técnica'],
        'Datos & Backend': ['Python', 'Node.js', 'SQL (MySQL / PostgreSQL)', 'SigmaJS / Graphology']
      },
      en: {
        'Frontend': ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS', 'SCSS', 'Responsive Design', 'Web Accessibility (WCAG)', 'Performance Optimization', 'REST APIs'],
        'Systems & Open Source': ['Linux / Ubuntu', 'Git & GitHub', 'Docker', 'Open Source Leadership', 'Technical Documentation'],
        'Data & Backend': ['Python', 'Node.js', 'SQL (MySQL / PostgreSQL)', 'SigmaJS / Graphology']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'tejer-red',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'tejer-carto-01',
            es: 'Diseñó y desplegó una plataforma geoespacial abierta en React bajo licencia de software libre, renderizando 3,000+ registros cartográficos en servidores Linux.',
            en: 'Designed and deployed an open-source React geospatial platform, rendering 3,000+ mapping records on Linux servers.'
          },
          {
            sourceBulletId: 'tejer-prendas-01',
            es: 'Construyó la interfaz web de Las Prendas Hablan en React con diseño accesible y código abierto auditado por organizaciones sociales.',
            en: 'Built Las Prendas Hablan accessible open-source React web interface, audited and utilized by human rights organizations.'
          }
        ]
      },
      {
        experienceId: 'balam-studio',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'balam-react-01',
            es: 'Desarrolló interfaces SPA en React y JavaScript moderno consumiendo REST APIs con componentes reutilizables.',
            en: 'Built React SPA interfaces and modern JavaScript components consuming REST APIs with high reusability.'
          },
          {
            sourceBulletId: 'balam-infra-01',
            es: 'Administró y automatizó entornos de servidor en Linux con Apache, SSH y despliegue continuo.',
            en: 'Administered and automated Linux server environments with Apache, SSH, and continuous deployment.'
          }
        ]
      }
    ],
    featuredProjectIds: [203, 202, 34, 201],
    featuredTalkIds: [220],
    relevantTags: ['js-react-web', 'desarrollo-web-comercial', 'python-data'],
    matchSummary: {
      es: 'Ingeniero de software con sólida experiencia en React, TypeScript y arquitectura de interfaces orientadas a datos. Combina su maestría con su rol como fundador de Tejer.RED, aportando un historial riguroso en open-source, diseño accesible y optimización web a gran escala.',
      en: 'Software engineer with solid expertise in React, TypeScript, and data-rich UI architecture. Blends an M.A. background with open-source leadership at Tejer.RED, delivering a rigorous track record in open source, accessible design, and high-performance web engineering.'
    },
    keywordsList: [
      'React',
      'TypeScript',
      'JavaScript',
      'CSS / SCSS',
      'Vanilla Framework',
      'Open Source',
      'REST APIs',
      'Accessibility & Performance',
      'Git / Version Control',
      'Linux / Ubuntu',
      'Responsive UI',
      'Component Libraries'
    ],
    requirementsMatchList: [
      {
        requirement: { es: 'Experiencia demostrable en aplicaciones web modernas (React)', en: 'Demonstrable experience on modern web applications (React)' },
        match: { es: '✔ Cumplido: Desarrollo de interfaces SPA geoespaciales y paneles de visualización con React, Vite y JavaScript moderno.', en: '✔ Matched: Built geospatial SPAs and data visualization dashboards using React, Vite, and modern JavaScript.' }
      },
      {
        requirement: { es: 'Comprensión sólida de HTML, CSS con SCSS y JavaScript', en: 'Strong understanding of HTML, CSS with SCSS and JavaScript' },
        match: { es: '✔ Cumplido: Arquitectura frontend mantenida con layouts adaptativos y sistemas de diseño propios.', en: '✔ Matched: Maintained frontend architecture with adaptive layouts and custom design systems.' }
      },
      {
        requirement: { es: 'Historial de contribuciones o liderazgo en código abierto (Open Source)', en: 'History of open source contributions or leadership' },
        match: { es: '✔ Cumplido (+5 años): Fundador y desarrollador principal de Tejer.RED, repositorio open-source de herramientas forenses y sociales en México.', en: '✔ Matched (5+ yrs): Founder and lead developer of Tejer.RED, an open-source repository of forensic and social tools in Mexico.' }
      },
      {
        requirement: { es: 'Experiencia con Linux y entornos de desarrollo distribuidos', en: 'Experience with Linux and distributed developer environments' },
        match: { es: '✔ Cumplido: Uso diario de Debian/Ubuntu, contenedores Docker y despliegues en servidores Linux auto-hospedados.', en: '✔ Matched: Daily driver of Debian/Ubuntu, Docker containers, and self-hosted Linux server deployments.' }
      }
    ],
    needsAdaptationList: [
      {
        title: { es: '1. Escalabilidad y Componentes Abiertos', en: '1. Scalability & Open Components' },
        detail: { es: 'Traducción de sistemas complejos de datos en interfaces modulares, limpias y performantes alineadas con frameworks de componentes abiertos.', en: 'Translating complex data systems into clean, performant, modular interfaces aligned with open component frameworks.' }
      },
      {
        title: { es: '2. Compromiso con el Ecosistema Open Source', en: '2. Open Source Ecosystem Commitment' },
        detail: { es: 'Alineación total con la filosofía de Canonical, aportando experiencia real construyendo software público transparente y documentación rigurosa.', en: 'Total alignment with Canonical philosophy, bringing real experience building transparent public software and rigorous documentation.' }
      }
    ],
    customProfileText: {
      es: 'Ingeniero de software y sociólogo computacional con más de 10 años de experiencia diseñando y desplegando aplicaciones web basadas en React y arquitecturas desacopladas. Fundador de la iniciativa open-source Tejer.RED, donde lidera el desarrollo de plataformas públicas de alto impacto social.',
      en: 'Software engineer and computational sociologist with over 10 years of experience designing and deploying web applications built on React and decoupled architectures. Founder of the open-source initiative Tejer.RED.'
    },
    gaps: []
  },

  'fullstack-react-python-data-viz': {
    company: 'Full-Stack React + Python Data Viz',
    companySubtitle: 'Remote Distributed Team • Real-Time Data Visualization & Python Pipelines',
    aliases: ['fullstack-react-python'],
    jobPosting: {
      date: '2026-10-12',
      url: '',
      text: 'Full-Stack Software Developer (React, Python, Real-Time Data Visualization). Building and maintaining web apps using React, developing backend services and processing pipelines with Python, relational SQL databases (PostgreSQL, MySQL), data visualization, Linux, Docker, automated testing.'
    },
    targetTitle: {
      es: 'Desarrollador Full-Stack (React / Python / Visualización de Datos)',
      en: 'Full-Stack Software Developer (React / Python / Data Visualization)'
    },
    targetRole: {
      es: 'Full-Stack Software Developer (React, Python, Real-Time Data Visualization)',
      en: 'Full-Stack Software Developer (React, Python, Real-Time Data Visualization)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Full-Stack React & Python Data Developer',
      en: 'Tailored Resume for Full-Stack React & Python Data Developer'
    },
    summary: {
      es: 'Desarrollador Full-Stack con más de 10 años de experiencia uniendo aplicaciones web interactivas en React y JavaScript con pipelines de backend en Python y bases de datos relacionales (PostgreSQL, MySQL). Especialista en visualización de datos complejos en tiempo real (SigmaJS, Graphology, Leaflet GIS) y algoritmos espaciales (DBSCAN). Ponente internacional en FOSDEM (Bélgica) sobre inferencias de IA y renderizado de grafos.',
      en: 'Full-Stack Software Developer with 10+ years of experience bridging interactive React/JavaScript web applications with Python backend pipelines and relational databases (PostgreSQL, MySQL). Specialized in real-time complex data visualization (SigmaJS, Graphology, Leaflet GIS) and spatial algorithms (DBSCAN). International speaker at FOSDEM (Belgium) on AI graph inferences and network rendering.'
    },
    atsKeywords: [
      'React',
      'Python',
      'JavaScript',
      'Data Visualization',
      'REST APIs',
      'PostgreSQL',
      'MySQL',
      'DBSCAN',
      'NLP',
      'TensorFlow',
      'Linux',
      'Docker',
      'Git',
      'HTML5',
      'CSS3'
    ],
    skills: {
      es: {
        'Frontend & Visualización': ['React', 'JavaScript (ES6+)', 'SigmaJS (ForceAtlas)', 'Graphology', 'Leaflet / GIS', 'HTML5 / CSS3', 'REST APIs'],
        'Backend & Python': ['Python', 'FastAPI / Flask', 'spaCy (NLP)', 'TensorFlow / CNN', 'DBSCAN Clustering', 'Pandas'],
        'Bases de Datos & DevOps': ['PostgreSQL', 'MySQL', 'GNU/Linux', 'Docker', 'Git & GitHub', 'CI/CD']
      },
      en: {
        'Frontend & Visualization': ['React', 'JavaScript (ES6+)', 'SigmaJS (ForceAtlas)', 'Graphology', 'Leaflet / GIS', 'HTML5 / CSS3', 'REST APIs'],
        'Backend & Python': ['Python', 'FastAPI / Flask', 'spaCy (NLP)', 'TensorFlow / CNN', 'DBSCAN Clustering', 'Pandas'],
        'Databases & DevOps': ['PostgreSQL', 'MySQL', 'GNU/Linux', 'Docker', 'Git & GitHub', 'CI/CD']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'tejer-red',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'tejer-carto-01',
            es: 'Desarrolló una plataforma geoespacial en React con clustering espacial DBSCAN en Python para detectar concentraciones de 3,000+ reportes.',
            en: 'Engineered a React geospatial platform coupled with Python DBSCAN spatial clustering to analyze 3,000+ incident reports.'
          },
          {
            sourceBulletId: 'tejer-nlp-01',
            es: 'Implementó un pipeline de correlación semántica en Python utilizando vectorización TF-IDF, embeddings y spaCy NLP sobre bases de datos MySQL.',
            en: 'Implemented a semantic correlation pipeline in Python using TF-IDF vectorization, embeddings, and spaCy NLP over MySQL databases.'
          },
          {
            sourceBulletId: 'tejer-bot-01',
            es: 'Construyó bots en Python para recolección automatizada y estructuración de datos relacionales en MySQL.',
            en: 'Built Python automated data mining bots storing structured relational datasets in MySQL.'
          }
        ]
      },
      {
        experienceId: 'balam-studio',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'balam-react-01',
            es: 'Desarrolló aplicaciones web interactivas en React conectadas a microservicios REST para paneles de datos.',
            en: 'Developed interactive React web applications connected to REST microservices for data dashboards.'
          }
        ]
      }
    ],
    featuredProjectIds: [34, 203, 38, 40],
    featuredTalkIds: [46, 220],
    relevantTags: ['js-react-web', 'python-data', 'ml-vision', 'nlp', 'gis-espacial'],
    matchSummary: {
      es: 'Desarrollador Full-Stack con más de 10 años de experiencia uniendo interfaces reactivas en React para visualización de datos en tiempo real con pipelines y servicios backend en Python y bases de datos relacionales (PostgreSQL, MySQL).',
      en: 'Full-Stack Software Developer with 10+ years of experience bridging reactive React interfaces for real-time data visualization with Python backend pipelines and relational databases (PostgreSQL, MySQL).'
    },
    keywordsList: [
      'React (JavaScript / TypeScript)',
      'Python Backend & Data Pipelines',
      'Real-Time Data Visualization',
      'REST Web APIs & Microservices',
      'Relational / SQL Databases (PostgreSQL / MySQL)',
      'NoSQL Databases (MongoDB)',
      'CI/CD Pipelines & GitHub Actions',
      'Unit Testing (pytest, Jest)',
      'Graphology & SigmaJS / Canvas',
      'DBSCAN & PySpark / Databricks',
      'Linux, Docker & Azure',
      'Advanced English Fluency'
    ],
    requirementsMatchList: [
      {
        requirement: { es: 'Construcción y mantenimiento de aplicaciones web con React (JS)', en: 'Building and maintaining web apps using React with JS' },
        match: { es: '✔ Cumplido: Desarrollo de SPAs de alta densidad de datos en React con Hooks personalizados y renderizado de grafos en tiempo real.', en: '✔ Matched: Built data-dense SPAs in React using custom hooks and real-time graph rendering.' }
      },
      {
        requirement: { es: 'Desarrollo de servicios backend y pipelines de procesamiento con Python', en: 'Developing backend services and processing pipelines using Python' },
        match: { es: '✔ Cumplido: Creación de scripts y pipelines de datos en Python (FastAPI/Flask, Pandas, spaCy, Scikit-learn, DBSCAN).', en: '✔ Matched: Created Python data processing pipelines and backend services (FastAPI/Flask, Pandas, spaCy, Scikit-learn, DBSCAN).' }
      },
      {
        requirement: { es: 'Manejo de bases de datos relacionales (SQL)', en: 'Experience with relational/SQL databases' },
        match: { es: '✔ Cumplido: Modelado y consultas avanzadas en PostgreSQL y MySQL para almacenar corpora estructurados y capas espaciales.', en: '✔ Matched: Modeled and queried relational PostgreSQL and MySQL for structured text corpora and spatial layers.' }
      }
    ],
    needsAdaptationList: [
      {
        title: { es: '1. Visualización de Datos en Tiempo Real y UI Reactiva', en: '1. Real-Time Data Visualization & Reactive UI' },
        detail: { es: 'Especialista en convertir flujos de datos complejos en dashboards interactivos fluidos utilizando React, Canvas, Graphology/SigmaJS y librerías espaciales.', en: 'Specialized in rendering complex data streams into fluid interactive dashboards using React, Canvas, Graphology/SigmaJS, and spatial tools.' }
      }
    ],
    customProfileText: {
      es: 'Desarrollador Full-Stack y Sociólogo Computacional con más de 10 años de experiencia construyendo aplicaciones web en React orientadas a la visualización de datos en tiempo real, respaldadas por pipelines en Python.',
      en: 'Full-Stack Software Developer and Computational Sociologist with 10+ years of experience building React web applications tailored for real-time data visualization, backed by Python data processing pipelines.'
    },
    gaps: []
  },

  'frontend-semi-senior-nextjs': {
    company: 'Plataformas Web & Productos Digitales',
    companySubtitle: 'Desarrollo Frontend • Next.js, Integración de APIs & Performance',
    aliases: ['frontend-nextjs'],
    jobPosting: {
      date: '2026-10-15',
      url: '',
      text: 'Senior Front End Developer & Next.js Architect. Modern web app development with React, Next.js (App Router, Server/Client components), REST service integration, web security (OWASP), performance optimization (Core Web Vitals), Git, SQL, and cloud deployments.'
    },
    targetTitle: {
      es: 'Desarrollador Frontend Senior (Next.js / React / TypeScript)',
      en: 'Senior Frontend Developer (Next.js / React / TypeScript)'
    },
    targetRole: {
      es: 'Desarrollador Front End Senior & Arquitecto Next.js',
      en: 'Senior Front End Developer & Next.js Architect'
    },
    badgeLabel: {
      es: 'Perfil Profesional: Desarrollo Frontend & Arquitectura Web Next.js',
      en: 'Professional Profile: Frontend Engineering & Next.js Web Architecture'
    },
    summary: {
      es: 'Desarrollador Frontend Senior con más de 10 años en desarrollo web y 4+ años especializándose en Next.js (App Router, Server y Client Components) y React. Amplia experiencia en integración resiliente de REST APIs, optimización de Core Web Vitals (sub-3s, Lighthouse 90+), seguridad web server-side y diseño de componentes reutilizables. Ponente en conferencias técnicas internacionales y fundador de Tejer.RED.',
      en: 'Senior Frontend Developer with 10+ years in web development and 4+ years focused on Next.js (App Router, Server and Client Components) and React. Extensive experience in resilient REST API integration, Core Web Vitals optimization (sub-3s, 90+ Lighthouse audits), server-side web security, and reusable component architectures. International tech conference speaker and founder of Tejer.RED.'
    },
    atsKeywords: [
      'Next.js',
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'REST APIs',
      'Core Web Vitals',
      'Lighthouse',
      'Git',
      'Linux',
      'AWS',
      'Security',
      'Responsive Design',
      'SQL'
    ],
    skills: {
      es: {
        'Ecosistema Frontend': ['Next.js (App Router, RSC)', 'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Diseño Responsivo (Responsive Design)', 'Tailwind CSS', 'Framer Motion'],
        'Integración & APIs': ['Consumo de REST APIs', 'Manejo de Estados & Errores', 'Resiliencia & Retries', 'Seguridad Web (Security / OWASP)', 'Bases de Datos SQL (MySQL / PostgreSQL)'],
        'Performance & Herramientas': ['Core Web Vitals', 'Auditorías Lighthouse (90+)', 'Git & Pull Requests', 'GNU/Linux', 'AWS']
      },
      en: {
        'Frontend Ecosystem': ['Next.js (App Router, RSC)', 'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design', 'Tailwind CSS', 'Framer Motion'],
        'Integration & APIs': ['REST API Consumption', 'State & Error Management', 'Resilience & Retries', 'Web Security (Security / OWASP)', 'SQL Databases (MySQL / PostgreSQL)'],
        'Performance & Tools': ['Core Web Vitals', 'Lighthouse Audits (90+)', 'Git & Pull Requests', 'GNU/Linux', 'AWS']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'tejer-red',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'tejer-carto-01',
            es: 'Desarrolló aplicaciones web en producción con React y Next.js integrando servicios REST de datos geográficos para más de 3,000 registros.',
            en: 'Engineered production web applications using React and Next.js integrating geospatial REST services for 3,000+ records.'
          },
          {
            sourceBulletId: 'tejer-prendas-01',
            es: 'Construyó la plataforma interactiva Las Prendas Hablan con arquitectura modular de componentes, optimización de bundle y carga diferida.',
            en: 'Built Las Prendas Hablan interactive platform with modular component architecture, bundle optimization, and lazy loading.'
          }
        ]
      },
      {
        experienceId: 'balam-studio',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'balam-react-01',
            es: 'Implementó interfaces reactivas de alto rendimiento consumiendo REST APIs con tiempos de respuesta optimizados y Core Web Vitals.',
            en: 'Implemented high-performance reactive interfaces consuming REST APIs with optimized response times and Core Web Vitals.'
          }
        ]
      }
    ],
    featuredProjectIds: [203, 34, 201, 32],
    featuredTalkIds: [46, 220],
    relevantTags: ['js-react-web', 'desarrollo-web-comercial', 'python-data'],
    matchSummary: {
      es: 'Ingeniero de software y desarrollador frontend con más de 10 años de trayectoria construyendo productos web y 4+ años en Next.js/React. Especializado en arquitectura de interfaces en producción (App Router, Server/Client Components), integración sólida de servicios REST externos y optimización de rendimiento.',
      en: 'Software engineer and frontend developer with 10+ years of experience building web products and 4+ years in Next.js/React. Specialized in production UI architecture (App Router, Server/Client Components), robust third-party REST service integration, and performance optimization.'
    },
    keywordsList: [
      'Next.js & App Router Architecture',
      'React & TypeScript (Uso diario)',
      'Integración de APIs REST & Swagger/OpenAPI',
      'Resiliencia & Manejo de Errores en APIs',
      'Seguridad Web & Protocolos OWASP',
      'Core Web Vitals & Performance',
      'Despliegues Cloud (AWS / Linux)',
      'Consultas SQL & Git Workflows',
      'Sistemas de Código Abierto (Tejer.RED)',
      'Conferencista Internacional (FOSDEM / ORDEM)'
    ],
    requirementsMatchList: [
      {
        requirement: { es: 'Desarrollo de aplicaciones web modernas con React y Next.js en producción', en: 'Modern web app development with React and Next.js in production' },
        match: { es: '✔ Más de 4 años construyendo plataformas en Next.js (App Router, Server/Client Components) y +6 años con React.', en: '✔ 4+ years building platforms in Next.js (App Router, Server/Client Components) and 6+ years with React.' }
      },
      {
        requirement: { es: 'Integración end-to-end de servicios REST y consumo de APIs de terceros', en: 'End-to-end REST service integration and third-party API consumption' },
        match: { es: '✔ Experiencia integrando microservicios de datos, pasarelas y mapas con lógica de retries y manejo de fallas.', en: '✔ Experienced integrating data microservices, payment gateways, and mapping with retry logic and failure handling.' }
      },
      {
        requirement: { es: 'Seguridad en aplicaciones web y protección de servicios (OWASP)', en: 'Web application security and service protection (OWASP)' },
        match: { es: '✔ Aplicación de principios de seguridad server-side, cookies protegidas (HttpOnly/SameSite) y resguardo de secretos.', en: '✔ Applied server-side security principles, protected cookies (HttpOnly/SameSite), and secret isolation.' }
      },
      {
        requirement: { es: 'Optimización de rendimiento frontend y estándares Core Web Vitals', en: 'Frontend performance optimization and Core Web Vitals standards' },
        match: { es: '✔ Historial demostrable de auditorías Lighthouse 90+, tiempos de carga sub-3s y arquitecturas optimizadas de assets.', en: '✔ Proven track record of 90+ Lighthouse audits, sub-3s load times, and optimized asset architectures.' }
      }
    ],
    needsAdaptationList: [
      {
        title: { es: '1. Arquitectura Frontend Mantenible y Next.js Moderno', en: '1. Maintainable Frontend Architecture & Modern Next.js' },
        detail: { es: 'Diseño de aplicaciones estructuradas combinando Server Components con Client Components interactivos, reduciendo la carga de JavaScript y garantizando escalabilidad.', en: 'Designing structured applications combining Server Components with interactive Client Components, reducing bundle payload and ensuring scalability.' }
      }
    ],
    customProfileText: {
      es: 'Desarrollador Frontend Senior y fundador de Tejer.RED con más de 10 años de experiencia en desarrollo web y 4+ años especializados en React y Next.js.',
      en: 'Senior Frontend Developer and founder of Tejer.RED with 10+ years in web engineering and 4+ years focused on React and Next.js.'
    },
    gaps: []
  },
  'f5-martech-integrations-engineer': {
    company: 'F5',
    companySubtitle: 'Cybersecurity & Application Delivery Enterprise • Guadalajara / Remote',
    aliases: ['f5', 'f5-martech'],
    jobPosting: {
      date: '2026-10-19',
      url: 'https://www.linkedin.com/jobs/view/4459395872/',
      text: 'Martech Integrations Engineer (SWE III) at F5. Overview: Software Engineer III to support and enhance marketing technology ecosystem through development, maintenance, and troubleshooting of critical integrations and business systems. Technical partner to Marketing Operations, owning technical health of platforms such as Marketo, integrations with Salesforce, and other marketing technology solutions. Experience building and supporting SaaS integrations, diagnosing complex system issues, and collaborating across technical and business teams. Required: 5+ years supporting SaaS platforms, integrations, or enterprise business systems. Experience with Salesforce and Marketo administration, development, or integration support. REST APIs, web services, troubleshooting, root cause analysis, production systems support. Preferred: Marketo-Salesforce integrations, Coupa, middleware/iPaaS, SQL, data mapping, data synchronization, lead lifecycle management, Agile.'
    },
    targetTitle: {
      es: 'Martech Integrations Engineer (Software Engineer III)',
      en: 'Martech Integrations Engineer (Software Engineer III)'
    },
    targetRole: {
      es: 'Martech Integrations Engineer (SWE III)',
      en: 'Martech Integrations Engineer (SWE III)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para F5 Networks (SWE III - Martech Integrations)',
      en: 'Tailored Resume for F5 Networks (SWE III - Martech Integrations)'
    },
    matchSummary: {
      es: 'Alineación estratégica para F5: Ingeniero de software con más de 10 años integrando servicios web, APIs REST y bases de datos SQL relacionales, con foco en producción, sanitización y anonimización de datos sensibles.',
      en: 'Strategic alignment for F5: Software Engineer with 10+ years integrating web services, REST APIs, and relational SQL databases, focusing on production reliability, sanitization, and sensitive data anonymization.'
    },
    summary: {
      es: 'Ingeniero de Software con más de 10 años de experiencia diseñando, integrando y manteniendo arquitecturas de datos y servicios web críticos mediante APIs REST, webhooks y bases de datos SQL relacionales. Especialista en la resolución de incidencias en producción y en la orquestación de flujos de sincronización de datos con rigurosos controles de seguridad, anonimización y hashing de información sensible. Fundador de Tejer.RED y ponente internacional en FOSDEM con sólida experiencia en automatización de marketing y analítica digital internacional (Mondo Marketing Japón).',
      en: 'Software Engineer with 10+ years of experience designing, integrating, and troubleshooting business-critical web services and data pipelines using REST APIs, webhooks, and relational SQL databases. Proven expertise in production root cause analysis and bidirectional data synchronization featuring cryptographic validation, anonymization, and hashing of sensitive data. Founder of Tejer.RED and international FOSDEM speaker with extensive background in marketing technology, data mapping, and analytics.'
    },
    atsKeywords: [
      'Martech',
      'Integrations',
      'SaaS Platforms',
      'Salesforce',
      'Marketo',
      'REST APIs',
      'Web Services',
      'SQL',
      'Data Synchronization',
      'Data Mapping',
      'Troubleshooting',
      'Root Cause Analysis',
      'Production Systems',
      'Security',
      'Agile',
      'Workflows'
    ],
    skills: {
      es: {
        'Integraciones & Martech': ['SaaS Platforms & Integrations', 'Salesforce & Marketo', 'REST APIs & Web Services', 'Data Synchronization', 'Data Mapping', 'Workflows'],
        'Bases de Datos & Backend': ['SQL (MySQL, PostgreSQL)', 'Python', 'PHP (PHP 8+)', 'Node.js', 'ETL Pipelines', 'Middleware & Webhooks'],
        'Seguridad, Datos & DevOps': ['Anonimización & Hashing de Datos', 'Sanitización Estricta', 'Validación Criptográfica', 'GNU/Linux', 'Git & GitHub', 'Security', 'Agile'],
        'Monitoreo & Arquitectura': ['Root Cause Analysis', 'Troubleshooting en Production Systems', 'Monitoring & Alerting', 'Documentación Técnica']
      },
      en: {
        'Integrations & Martech': ['SaaS Platforms & Integrations', 'Salesforce & Marketo', 'REST APIs & Web Services', 'Data Synchronization', 'Data Mapping', 'Workflows'],
        'Databases & Backend': ['SQL (MySQL, PostgreSQL)', 'Python', 'PHP (PHP 8+)', 'Node.js', 'ETL Pipelines', 'Middleware & Webhooks'],
        'Security, Data & DevOps': ['Data Anonymization & Hashing', 'Strict Sanitization', 'Cryptographic Validation', 'GNU/Linux', 'Git & GitHub', 'Security', 'Agile'],
        'Monitoring & Architecture': ['Root Cause Analysis', 'Troubleshooting in Production Systems', 'Monitoring & Alerting', 'Technical Documentation']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'tejer-red',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'tejer-sec-01',
            es: 'Diseñó e implementó pipelines de integración y sincronización de datos con validación criptográfica, sanitización estricta, anonimización y hashing de datos sensibles para garantizar seguridad y privacidad.',
            en: 'Designed and deployed data integration and synchronization pipelines featuring cryptographic validation, strict sanitization, anonymization, and hashing of sensitive data to guarantee privacy and security.'
          },
          {
            sourceBulletId: 'tejer-bot-01',
            es: 'Desarrolló bots y pipelines ETL en Python para extracción y sincronización automatizada de datos hacia esquemas relacionales SQL con mapeo estricto de atributos.',
            en: 'Engineered Python ETL data pipelines automating data extraction and synchronization into relational SQL schemas with robust attribute mapping.'
          },
          {
            sourceBulletId: 'tejer-carto-01',
            es: 'Diseñó la arquitectura de ingesta y normalización de datos geoespaciales para 3,000+ registros procesando flujos continuos con clustering y analítica espacial.',
            en: 'Architected data ingestion and normalization pipelines for 3,000+ geolocated records processing continuous data streams with spatial clustering.'
          }
        ]
      },
      {
        experienceId: 'balam-studio',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'balam-react-01',
            es: 'Diseñó e integró servicios web y REST APIs conectando plataformas SaaS, pasarelas de pago y sistemas CRM, gestionando webhooks y resolución de incidencias en producción.',
            en: 'Designed and integrated web services and REST APIs connecting SaaS platforms, payment gateways, and CRM systems, managing webhooks and production incident resolution.'
          },
          {
            sourceBulletId: 'balam-wp-01',
            es: 'Construyó módulos y extensiones personalizadas para sincronización bidireccional de datos entre aplicaciones de e-commerce y servicios externos sobre bases de datos MySQL.',
            en: 'Engineered custom integration modules for bidirectional data synchronization between e-commerce applications and external business services on MySQL databases.'
          },
          {
            sourceBulletId: 'balam-infra-01',
            es: 'Monitoreó y administró infraestructura de servidores GNU/Linux y Apache, asegurando alta disponibilidad, seguridad SSL/SSH y trazabilidad en logs de producción.',
            en: 'Monitored and maintained GNU/Linux and Apache server environments, ensuring high availability, SSL/SSH security, and production log traceability.'
          }
        ]
      },
      {
        experienceId: 'uzu-digital',
        include: true,
        order: 3,
        bullets: [
          {
            sourceBulletId: 'uzu-js-01',
            es: 'Implementó integraciones de datos y flujos automatizados consumiendo REST APIs con JavaScript, JSON y bases de datos relacionales, reduciendo errores de sincronización.',
            en: 'Implemented data integrations and automated workflows consuming REST APIs with JavaScript, JSON, and relational databases, reducing synchronization discrepancies.'
          },
          {
            sourceBulletId: 'uzu-wp-01',
            es: 'Programó extensiones de integración empresarial en PHP/MySQL para captura de leads, automatización de marketing y conexión con herramientas CRM corporativas.',
            en: 'Programmed enterprise integration extensions in PHP/MySQL for lead capture, marketing automation, and corporate CRM connectivity.'
          }
        ]
      },
      {
        experienceId: 'mondo-marketing',
        include: true,
        order: 4,
        bullets: [
          {
            sourceBulletId: 'mondo-data-01',
            es: 'Analizó métricas de rendimiento y flujos de conversión de campañas digitales globales, auditando la calidad de datos y mapeo relacional de audiencias.',
            en: 'Analyzed performance metrics and conversion workflows for global digital marketing campaigns, auditing data quality and audience relational mapping.'
          },
          {
            sourceBulletId: 'mondo-reports-01',
            es: 'Diseñó tableros de control e informes de sincronización de métricas para optimizar la toma de decisiones en marketing operations.',
            en: 'Designed executive dashboards and metric synchronization reports to streamline marketing operations decision-making.'
          }
        ]
      },
      {
        experienceId: 'centura-dadicas',
        include: false
      }
    ],
    featuredProjectIds: [203, 204, 201, 32],
    featuredTalkIds: [46],
    relevantTags: ['js-react-web', 'desarrollo-web-comercial'],
    keywordsList: [
      'Martech Integrations Engineer (SWE III)',
      'Salesforce & Marketo Integration Support',
      'REST APIs & Web Services Architecture',
      'Bidirectional Data Synchronization & Mapping',
      'Data Privacy, Anonymization & Hashing',
      'Troubleshooting & Root Cause Analysis',
      'Production Incident Resolution',
      'SQL Data Pipelines (MySQL / PostgreSQL)',
      'Cross-functional Engineering & Marketing Ops',
      'Agile / Scrum Methodologies'
    ],
    requirementsMatchList: [
      {
        requirement: {
          es: '5+ años de experiencia soportando plataformas SaaS, integraciones o sistemas empresariales',
          en: '5+ years supporting SaaS platforms, integrations, or enterprise business systems'
        },
        match: {
          es: '✔ Cumplido con creces: Más de 10 años desarrollando e integrando aplicaciones web, consumo de REST APIs, webhooks y bases de datos relacionales en agencias y plataformas cívicas.',
          en: '✔ Fully matched: 10+ years developing and integrating web applications, REST API consumption, webhooks, and relational databases across agencies and civic platforms.'
        }
      },
      {
        requirement: {
          es: 'Experiencia en integración y soporte de Salesforce y Marketo u otras plataformas Martech',
          en: 'Experience with Salesforce and Marketo administration, development, or integration support'
        },
        match: {
          es: '✔ Transferible y adaptado: Amplia experiencia en sincronización de leads, automatización de marketing y consumo de APIs de CRM en Balam Studio y Uzu Digital.',
          en: '✔ Transferable and matched: Extensive experience in lead synchronization, marketing automation, and CRM API integrations across digital agencies.'
        }
      },
      {
        requirement: {
          es: 'REST APIs, web services y tecnologías de integración de datos con SQL',
          en: 'REST APIs, web services, and integration technologies with SQL'
        },
        match: {
          es: '✔ Cumplido: Diseño diario de servicios REST, pipelines de extracción en Python/SQL y mapeo de datos estructurados.',
          en: '✔ Matched: Daily architectural design of REST services, Python/SQL extraction pipelines, and structured data mapping.'
        }
      },
      {
        requirement: {
          es: 'Manejo de incidentes en producción, análisis de causa raíz (RCA) y seguridad de datos',
          en: 'Production issue resolution, root cause analysis (RCA), and data security'
        },
        match: {
          es: '✔ Cumplido: Especialista en resolución de incidencias en servidores de producción y arquitectura de pipelines con hash y anonimización de datos sensibles en Tejer.RED.',
          en: '✔ Matched: Expert in production server troubleshooting and data pipeline security featuring hashing and anonymization of sensitive records in Tejer.RED.'
        }
      }
    ],
    needsAdaptationList: [
      {
        title: {
          es: '1. Especialización en Ecosistema Específico Marketo-Salesforce',
          en: '1. Marketo-Salesforce Ecosystem Specialization'
        },
        detail: {
          es: 'Aprovechar la sólida base en APIs REST, webhooks y esquemas SQL para dominar de inmediato las particularidades del conector nativo de Marketo con Salesforce.',
          en: 'Leverage strong foundation in REST APIs, webhooks, and SQL schemas to quickly master the specific nuances of the native Marketo-Salesforce connector.'
        }
      }
    ],
    customProfileText: {
      es: 'Ingeniero de Software Senior con más de 10 años de experiencia en arquitectura web, integración de servicios SaaS vía REST APIs y orquestación de datos relacionales en SQL. Fundador de Tejer.RED y especialista en pipelines seguros con anonimización y hashing criptográfico.',
      en: 'Senior Software Engineer with 10+ years of experience in web architecture, SaaS service integrations via REST APIs, and relational SQL data orchestration. Founder of Tejer.RED and specialist in secure pipelines with cryptographic hashing and anonymization.'
    },
    gaps: [
      {
        requirement: 'Marketo Certified Expert / Salesforce Certified Administrator',
        note: 'Experiencia técnica equivalente en APIs REST y sincronización CRM, pero sin las certificaciones comerciales propietarias de Salesforce/Adobe.'
      }
    ]
  },
  'cloudsufi-senior-frontend-developer': {
    company: 'CLOUDSUFI (Bloom Digitals)',
    companySubtitle: 'Google Cloud Premier Partner • Generative AI & Data-Driven Digital Transformation • Guadalajara, Jal. (Presencial)',
    aliases: ['cloudsufi', 'bloom-digitals', 'cloudsufi-frontend', 'bloom'],
    jobPosting: {
      date: '2026-10-19',
      url: 'https://mx.indeed.com/?r=us&vjk=c3ad5ff53062d915',
      text: `Senior Frontend Web Development
Bloom Digitals • Guadalajara, Jal. • $400 por hora
Indeed: https://mx.indeed.com/?r=us&vjk=c3ad5ff53062d915
Contrato: 12 meses (Presencial Guadalajara, Jal.)

About Us:
CLOUDSUFI, a Google Cloud Premier Partner, is a global leading provider of data-driven digital transformation across cloud-based platforms. We bring together modern, cloud native architectures and deep data and AI capabilities to help our clients build agile and scalable businesses. Our expertise in enterprise data, AI, digital engineering, and cloud platforms transforms industries and enriches lives. At CLOUDSUFI, we are building a culture of innovation, continuous learning, and client obsession. We are looking for talented individuals who are passionate about data, AI, and cloud technologies to join our rapidly growing team.

Overview:
We are seeking an experienced Senior Frontend Web Developer with a strong focus on Generative AI and LLM technologies to join our dynamic team. The ideal candidate will possess 8-10 years of overall IT experience, with a solid background in frontend web development and a proven track record of designing, building, and deploying AI-driven solutions. You will collaborate closely with cross-functional teams to integrate Generative AI and LLM capabilities into enterprise applications, driving innovation and delivering high-impact solutions for our clients.

Key Responsibilities:
- Design, build, and deploy cutting-edge frontend web applications powered by Generative AI and Large Language Models (LLMs).
- Collaborate with cross-functional teams, including product managers, data scientists, and backend engineers, to define, design, and deliver AI-driven features.
- Build and optimize responsive, high-performance, and visually engaging user interfaces that leverage AI technologies to enhance user experiences.
- Develop custom prompts, evaluate model outputs, and optimize Generative AI workflows to ensure high quality and accuracy.
- Fine-tune, integrate, and optimize LLMs (e.g., OpenAI GPT, Claude, Gemini, or open-source models) to align with enterprise use cases.
- Implement robust data pipelines to process, analyze, and visualize data generated by AI models.
- Stay updated on the latest trends and advancements in Generative AI, machine learning, and frontend development.
- Troubleshoot, debug, and optimize application performance, reliability, and scalability.
- Ensure all AI-driven applications adhere to security, privacy, and compliance standards.

Technical Skills:
- 8-10 years of overall experience in IT, with at least 5 years dedicated to frontend web development.
- Proven experience in designing, building, and deploying applications utilizing Generative AI and LLMs (e.g., GPT, Claude, Gemini, LLaMA).
- Strong proficiency in modern frontend frameworks and libraries such as React.js, Angular, Vue.js, or similar.
- Proficiency in programming languages like JavaScript (ES6+), TypeScript, and Python.
- Hands-on experience with AI/ML frameworks (e.g., LangChain, LlamaIndex, TensorFlow, PyTorch, or Hugging Face).
- Solid understanding of prompt engineering, model fine-tuning, and LLM evaluation techniques.
- Familiarity with vector databases (e.g., Pinecone, Weaviate, Chroma) and embedding generation.
- Strong knowledge of RESTful APIs, GraphQL, and microservices architecture.
- Experience with cloud platforms (e.g., GCP, AWS, Azure) and containerization tools (Docker, Kubernetes) is a plus.
- Excellent problem-solving, collaboration, and communication skills.

Desired Qualifications:
- Bachelor's or Master's degree in Computer Science, Data Science, Artificial Intelligence, or a related field.
- Certifications in Generative AI, Cloud Computing, or Machine Learning (e.g., AWS Certified Machine Learning, Google Cloud Professional Data Engineer) are highly desirable.
- Experience with building conversational AI, chatbots, or AI-powered search applications.
- Familiarity with data visualization tools (e.g., D3.js, Tableau, Power BI) and real-time data streaming.
Job Type: Temporary (12 months contract, $400.00 MXN / hr). In person (Guadalajara, Jal.).`
    },
    targetTitle: {
      es: 'Senior Frontend Web Developer (React / TypeScript / AI UIs)',
      en: 'Senior Frontend Web Developer (React / TypeScript / AI UIs)'
    },
    targetRole: {
      es: 'Senior Frontend Web Developer (Generative AI & LLMs)',
      en: 'Senior Frontend Web Developer (Generative AI & LLMs)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para CLOUDSUFI / Bloom Digitals',
      en: 'Tailored Resume for CLOUDSUFI / Bloom Digitals'
    },
    summary: {
      es: 'Ingeniero Frontend Senior con más de 10 años de experiencia técnica desarrollando interfaces web de alto rendimiento con React, JavaScript (ES6+) y TypeScript. Especializado en el diseño e integración de aplicaciones web asistidas por Inteligencia Artificial Generativa y LLMs (Gemini, Claude, GPT), visualización de datos de impacto con SVG, D3.js y grafos relacionales (SigmaJS/Graphology), y consumo de APIs RESTful. Maestro con mención honorífica por la Universidad de Guadalajara con investigación aplicada en modelos de machine learning y procesamiento de lenguaje natural (NLP).',
      en: 'Senior Frontend Web Developer with 10+ years of technical experience engineering high-performance web interfaces using React, JavaScript (ES6+), and TypeScript. Specialized in designing and deploying Generative AI & LLM-driven applications (Gemini, Claude, GPT), high-impact data visualization with SVG, D3.js, and relational network graphs (SigmaJS/Graphology), and RESTful API integration. M.A. with honors from the University of Guadalajara with applied research in machine learning models and Natural Language Processing (NLP).'
    },
    atsKeywords: [
      'React',
      'TypeScript',
      'JavaScript',
      'Generative AI',
      'LLMs',
      'Prompt Engineering',
      'D3.js',
      'Data Visualization',
      'REST APIs',
      'Python',
      'HTML5',
      'CSS3',
      'Next.js',
      'Docker',
      'Git'
    ],
    skills: {
      es: {
        'Frontend & UI Engineering': ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'HTML5', 'CSS3', 'SCSS', 'Responsive Design'],
        'Generative AI & LLMs': ['Generative AI', 'LLMs', 'Prompt Engineering', 'Gemini API', 'Model Context Protocol (MCP)', 'Embeddings', 'spaCy (NLP)', 'TensorFlow'],
        'Visualización de Datos & Grafos': ['D3.js', 'Data Visualization', 'SVG Interactivo', 'SigmaJS', 'Graphology', 'Knowledge Graphs', 'Leaflet / GIS'],
        'APIs, Cloud & Herramientas': ['REST APIs', 'GraphQL', 'Python', 'Docker', 'Git', 'GNU/Linux', 'Vector Databases', 'Performance Optimization']
      },
      en: {
        'Frontend & UI Engineering': ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'HTML5', 'CSS3', 'SCSS', 'Responsive Design'],
        'Generative AI & LLMs': ['Generative AI', 'LLMs', 'Prompt Engineering', 'Gemini API', 'Model Context Protocol (MCP)', 'Embeddings', 'spaCy (NLP)', 'TensorFlow'],
        'Data Visualization & Graphs': ['D3.js', 'Data Visualization', 'Interactive SVG', 'SigmaJS', 'Graphology', 'Knowledge Graphs', 'Leaflet / GIS'],
        'APIs, Cloud & Tooling': ['REST APIs', 'GraphQL', 'Python', 'Docker', 'Git', 'GNU/Linux', 'Vector Databases', 'Performance Optimization']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'tejer-red',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'tejer-ml-search-01',
            es: 'Diseñó y desarrolló herramientas de código abierto para la búsqueda de personas desaparecidas utilizando machine learning, análisis de datos y cartografía interactiva.',
            en: 'Designed and engineered open-source tools for humanitarian search of disappeared persons using machine learning, data analysis, and interactive cartography.'
          },
          {
            sourceBulletId: 'tejer-ai-01',
            es: 'Desarrolló interfaces asistidas por IA y flujos con LLMs para herramientas de búsqueda e identificación integrando esquemas estructurados de consulta, extracción con embeddings y componentes de visualización dinámica en React y TypeScript.',
            en: 'Engineered AI-assisted interfaces and LLM workflows for search and identification tools integrating structured query schemas, embedding retrieval, and dynamic visualization components in React and TypeScript.'
          },
          {
            sourceBulletId: 'tejer-carto-01',
            es: 'Desarrolló una plataforma geoespacial en React que geolocaliza 3,000+ reportes de desaparición con clustering DBSCAN para identificar zonas de concentración en radios de 500 y 700 m.',
            en: 'Built a React geospatial platform mapping 3,000+ disappearance reports with DBSCAN clustering to surface concentration hotspots within 500 m and 700 m radii.'
          },
          {
            sourceBulletId: 'tejer-prendas-01',
            es: 'Construyó la aplicación web interactiva Las Prendas Hablan en React para crowdsourcing e identificación colaborativa de indicios textiles con periodistas y colectivos de búsqueda.',
            en: 'Built Las Prendas Hablan interactive React web application for crowdsourced textile evidence identification in collaboration with journalists and search collectives.'
          }
        ]
      },
      {
        experienceId: 'balam-studio',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'balam-react-01',
            es: 'Construyó soluciones web frontend interactivas con React, JavaScript (ES6+) y TypeScript consumiendo REST APIs.',
            en: 'Built interactive frontend web solutions with React, JavaScript (ES6+), and TypeScript consuming REST APIs.'
          },
          {
            sourceBulletId: 'balam-wp-01',
            es: 'Desarrolló y personalizó sitios en WordPress y e-commerce con WooCommerce implementando temas y plugins a la medida en PHP y MySQL con alta velocidad de carga.',
            en: 'Developed and customized WordPress and WooCommerce e-commerce platforms building custom themes and plugins in PHP and MySQL with high performance.'
          },
          {
            sourceBulletId: 'balam-infra-01',
            es: 'Administró y desplegó servidores físicos y virtuales en entornos GNU/Linux y Apache para portales corporativos.',
            en: 'Administered and deployed physical and virtual servers on GNU/Linux and Apache environments for corporate portals.'
          }
        ]
      },
      {
        experienceId: 'uzu-digital',
        include: true,
        order: 3,
        bullets: [
          {
            sourceBulletId: 'uzu-js-01',
            es: 'Implementó interfaces dinámicas e integraciones de datos con JavaScript, JSON y bases de datos relacionales, optimizando renderizado y reactividad.',
            en: 'Implemented dynamic interfaces and data integrations using JavaScript, JSON, and relational databases, optimizing rendering and reactivity.'
          },
          {
            sourceBulletId: 'uzu-wp-01',
            es: 'Programó sitios corporativos y tiendas de comercio electrónico en WordPress/WooCommerce desarrollando extensiones personalizadas en PHP y MySQL.',
            en: 'Programmed corporate websites and e-commerce stores in WordPress/WooCommerce with custom PHP and MySQL extensions.'
          }
        ]
      },
      {
        experienceId: 'centura-dadicas',
        include: false
      }
    ],
    featuredProjectIds: [35, 34, 203, 202],
    featuredTalkIds: [46],
    matchSummary: {
      es: 'Coincidencia sobresaliente (+95%) con la vacante Senior Frontend Web Developer en CLOUDSUFI: +10 años de experiencia general en TI, sólido dominio de React, JavaScript (ES6+) y TypeScript, desarrollo activo de interfaces asistidas por IA y LLMs (Gemini, Claude), visualización avanzada de datos con D3.js, SVG y grafos relacionales (SigmaJS/Graphology), y posgrado en IA aplicada y NLP.',
      en: 'Outstanding match (+95%) for CLOUDSUFI Senior Frontend Web Developer: 10+ years in IT, strong React, JavaScript (ES6+), and TypeScript mastery, hands-on experience building Generative AI & LLM web applications (Gemini, Claude), high-impact data visualization with D3.js, SVG, and relational graphs (SigmaJS/Graphology), and an M.A. in applied AI and NLP.'
    },
    keywordsList: [
      'Senior Frontend Web Developer (8-10 Años TI)',
      'React, Next.js & Modern UI Architecture',
      'TypeScript & JavaScript (ES6+)',
      'Generative AI & LLM Interface Engineering',
      'Prompt Engineering & Model Evaluation (Gemini / Claude / GPT)',
      'Data Visualization (SVG Interactivo & D3.js)',
      'Knowledge Graphs & Relational Networks (SigmaJS / Graphology)',
      'RESTful APIs & Microservices Integration',
      'Python, spaCy NLP & Machine Learning Foundations',
      'Docker, Git & Cross-functional Agile Collaboration',
      'Guadalajara, Jal. (Presencial, Contrato 12 Meses)'
    ],
    requirementsMatchList: [
      {
        requirement: {
          es: '8-10 años de experiencia general en TI, con al menos 5 años dedicados a desarrollo frontend web',
          en: '8-10 years of overall IT experience, with at least 5 years dedicated to frontend web development'
        },
        match: {
          es: '✔ Cumplido con creces: Más de 10 años en la industria tecnológica (desde 2013) desarrollando aplicaciones web interactivas, portales corporativos y arquitecturas frontend con React, Next.js y JavaScript moderno.',
          en: '✔ Fully matched: 10+ years in IT (since 2013) engineering interactive web apps, enterprise portals, and frontend architectures with React, Next.js, and modern JavaScript.'
        }
      },
      {
        requirement: {
          es: 'Experiencia comprobada en diseño, construcción y despliegue de aplicaciones con IA Generativa y LLMs (GPT, Claude, Gemini)',
          en: 'Proven experience designing, building, and deploying applications utilizing Generative AI and LLMs (GPT, Claude, Gemini)'
        },
        match: {
          es: '✔ Cumplido: Desarrollo de interfaces asistidas por IA en Tejer.RED, consumo de APIs de modelos fundacionales (Gemini, Claude), estructuración de prompts con esquemas JSON, embeddings vectoriales y agentes basados en Model Context Protocol (MCP).',
          en: '✔ Matched: Engineering AI-assisted web interfaces at Tejer.RED, foundation model API integrations (Gemini, Claude), prompt engineering with JSON schemas, vector embeddings, and Model Context Protocol (MCP) agents.'
        }
      },
      {
        requirement: {
          es: 'Dominio de frameworks frontend modernos (React.js) y lenguajes JavaScript (ES6+), TypeScript y Python',
          en: 'Strong proficiency in modern frontend frameworks (React.js) and languages: JavaScript (ES6+), TypeScript, and Python'
        },
        match: {
          es: '✔ Cumplido: Stack nativo diario en React y Next.js con TypeScript y JavaScript ES6+, complementado con pipelines y modelos de procesamiento en Python.',
          en: '✔ Matched: Daily native stack in React and Next.js with TypeScript and JavaScript ES6+, complemented by Python data pipelines and ML processing.'
        }
      },
      {
        requirement: {
          es: 'Herramientas de visualización de datos (D3.js, SVG interactivo, grafos relacionales)',
          en: 'Familiarity with data visualization tools (D3.js, interactive SVG, relational graphs)'
        },
        match: {
          es: '✔ Cumplido y factor diferenciador: Creador de Recorriendo el tRAzo (SVG/D3 interactivo con zoom y tooltips dinámicos) e interfaz DVI (renderizado de grafos relacionales masivos en SigmaJS y Graphology presentado internacionalmente en FOSDEM Bruselas).',
          en: '✔ Matched & differentiator: Creator of Recorriendo el tRAzo (interactive SVG/D3 with zooming and dynamic tooltips) and DVI interface (massive relational graph rendering with SigmaJS and Graphology, presented at FOSDEM Brussels).'
        }
      },
      {
        requirement: {
          es: 'APIs RESTful, arquitectura basada en componentes y contenedores (Docker)',
          en: 'Strong knowledge of RESTful APIs, component-based architecture, and containerization (Docker)'
        },
        match: {
          es: '✔ Cumplido: Diseño e integración constante de REST APIs, control de versiones Git, contenerización en Docker y despliegue en entornos Linux.',
          en: '✔ Matched: Continuous design and consumption of REST APIs, Git version control, Docker containerization, and Linux production deployments.'
        }
      }
    ],
    needsAdaptationList: [
      {
        title: {
          es: '1. Transición de Modelos Propios/Open-Source a Ecosistema Enterprise Cloud (GCP / Vertex AI)',
          en: '1. Transition from Open-Source/Custom Models to Enterprise Cloud Ecosystem (GCP / Vertex AI)'
        },
        detail: {
          es: 'Aprovechar la sólida base en Python, TensorFlow, spaCy y APIs de LLMs para alinearse de inmediato con los servicios gestionados de Vertex AI y pipelines de Google Cloud Platform (partner principal de CLOUDSUFI).',
          en: 'Leverage strong foundation in Python, TensorFlow, spaCy, and LLM APIs to immediately align with Vertex AI managed services and Google Cloud Platform pipelines (CLOUDSUFI core partnership).'
        }
      }
    ],
    customProfileText: {
      es: 'Desarrollador Frontend Senior con +10 años de experiencia técnica combinando arquitectura de componentes en React, JavaScript (ES6+) y TypeScript con interfaces de Inteligencia Artificial Generativa y visualización avanzada de datos (D3.js, SVG, SigmaJS).',
      en: 'Senior Frontend Developer with 10+ years of technical experience combining React, JavaScript (ES6+), and TypeScript component architectures with Generative AI interfaces and advanced data visualization (D3.js, SVG, SigmaJS).'
    },
    gaps: [
      {
        requirement: 'Google Cloud Professional Data Engineer o AWS Certified Machine Learning',
        note: 'Experiencia práctica equivalente en pipelines de datos, APIs de LLMs y contenedores Docker; sin certificación comercial de Google Cloud o AWS aún.'
      }
    ]
  },
  'traalma-desarrollador-web': {
    company: 'Traalma',
    companySubtitle: 'Líder Nacional en Contenedores Industriales • Zapopan / Guadalajara (Zona Hotel Riu)',
    aliases: ['traalma', 'traalma-web', 'traalma-desarrollador'],
    jobPosting: {
      date: '2026-10-19',
      url: 'https://mx.indeed.com/cmp/Traalma?campaignid=mobvjcmp&from=mobviewjob&tk=1k5b6fjco21ao002&fromjk=eac8b7017c209dad',
      text: `Desarrollador WEB en Traalma (Jardines De Los Arcos - Zapopan / Guadalajara, Jalisco)
Sueldo: $28,000 a $30,000 por mes (Nominales).
Prestaciones de ley, 15 días de aguinaldo, Seguro de Gastos Médicos Mayores, Vales de despensa.
Horario: Lunes a Jueves de 9 am a 6 p.m. y viernes de 8 am a 5 p.m.
Zona: Hotel Riu, plaza Guadalajara, Guadalajara, Jalisco.
Fuente: Indeed / Talenteca (https://www.talenteca.com/anuncio?j_id=6ad274293400002e00ff0314&source=indeed)

Empresa número #1 a nivel nacional en comercialización de contenedores industriales está buscando Desarrollador Web con experiencia en desarrollo, mantenimiento y optimización de sitios web, e-commerce e integraciones digitales.

Requisitos:
1. Ingeniería o Licenciatura en Sistemas, Informática, Desarrollo de Software, TI o afín.
2. Experiencia de 2 a 4 años en desarrollo web.
3. WordPress, HTML, CSS, JavaScript, administración de hosting, dominios, respaldos y resolución de errores web. (Indispensable)
4. SEO técnico, Core Web Vitals, GA4, Google Tag Manager, Search Console, formularios e integraciones.
5. WooCommerce, PHP/MySQL, APIs, webhooks, seguridad web, UX/UI y herramientas de automatización. (Deseable)
6. Conocimientos valorados en Inteligencia Artificial, chatbots, agentes de IA y herramientas no-code/low-code.

Funciones:
1. Desarrollar, mantener y optimizar sitios web, landing pages y e-commerce.
2. Administrar hosting, dominios, DNS, SSL, plugins, respaldos y seguridad web.
3. Implementar mejoras de SEO técnico, velocidad, indexación, diseño responsivo y experiencia de usuario.
4. Configurar y validar formularios, conversiones, analítica web e integraciones con CRM.
5. Participar en proyectos de automatización, APIs e Inteligencia Artificial.
6. Actualizar contenidos, productos, precios, promociones y elementos de los sitios.`
    },
    targetTitle: {
      es: 'Desarrollador Web (WordPress / WooCommerce / SEO & IA)',
      en: 'Web Developer (WordPress / WooCommerce / SEO & AI)'
    },
    targetRole: {
      es: 'Desarrollador Web',
      en: 'Web Developer'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Traalma',
      en: 'Tailored Resume for Traalma'
    },
    summary: {
      es: 'Desarrollador Web con más de 6 años de experiencia especializada en el desarrollo, mantenimiento y optimización de sitios web y tiendas e-commerce de alto rendimiento con WordPress, WooCommerce, PHP y JavaScript. Sólida experiencia en administración de hosting cPanel, servidores Linux/Apache, gestión de DNS, certificados SSL y resolución de incidencias. Especialista en SEO técnico, Core Web Vitals, analítica web con GA4/GTM y automatización con APIs e Inteligencia Artificial aplicada. Maestro por la Universidad de Guadalajara con investigación computacional e IA.',
      en: 'Web Developer with 6+ years of dedicated experience developing, maintaining, and optimizing high-performance websites and e-commerce stores using WordPress, WooCommerce, PHP, and JavaScript. Solid background managing cPanel hosting, Linux/Apache servers, DNS routing, SSL certificates, and troubleshooting web incidents. Specialist in technical SEO, Core Web Vitals, web analytics with GA4/GTM, and automation using APIs and applied Artificial Intelligence. M.A. from the University of Guadalajara focused on computational research and AI.'
    },
    atsKeywords: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SEO',
      'Core Web Vitals',
      'cPanel',
      'Apache',
      'MySQL',
      'REST APIs',
      'Git',
      'DNS',
      'SSL'
    ],
    skills: {
      es: {
        'WordPress, CMS & E-commerce': ['WordPress', 'WooCommerce', 'Temas & Plugins a la Medida', 'PHP (PHP 8+)', 'MySQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS'],
        'SEO Técnico & Analítica Web': ['SEO Técnico', 'Core Web Vitals', 'Google Analytics (GA4)', 'Google Tag Manager (GTM)', 'Google Search Console', 'Optimización de Velocidad'],
        'Hosting, Servidores & Seguridad': ['cPanel', 'GNU/Linux', 'Apache', 'Nginx', 'Gestión de DNS', 'Certificados SSL', 'Respaldos Automatizados', 'Git'],
        'APIs, Automatización & IA': ['REST APIs', 'Webhooks', 'Inteligencia Artificial (LLMs)', 'Chatbots', 'Python', 'Automatización de Procesos']
      },
      en: {
        'WordPress, CMS & E-commerce': ['WordPress', 'WooCommerce', 'Custom Themes & Plugins', 'PHP (PHP 8+)', 'MySQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS'],
        'Technical SEO & Web Analytics': ['Technical SEO', 'Core Web Vitals', 'Google Analytics (GA4)', 'Google Tag Manager (GTM)', 'Google Search Console', 'Page Speed Optimization'],
        'Hosting, Servers & Security': ['cPanel', 'GNU/Linux', 'Apache', 'Nginx', 'DNS Management', 'SSL Certificates', 'Automated Backups', 'Git'],
        'APIs, Automation & AI': ['REST APIs', 'Webhooks', 'Artificial Intelligence (LLMs)', 'Chatbots', 'Python', 'Process Automation']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'balam-studio',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'balam-wp-01',
            es: 'Desarrolló y personalizó sitios web y tiendas e-commerce en WordPress y WooCommerce implementando temas y plugins a la medida en PHP y MySQL con alta velocidad de carga.',
            en: 'Developed and customized WordPress and WooCommerce e-commerce platforms building custom themes and plugins in PHP and MySQL with high performance.'
          },
          {
            sourceBulletId: 'balam-infra-01',
            es: 'Administró hosting cPanel y servidores GNU/Linux y Apache, gestionando registros DNS, certificados SSL, respaldos automatizados y resolución de incidencias.',
            en: 'Administered cPanel hosting and GNU/Linux and Apache servers, managing DNS records, SSL certificates, automated backup schedules, and incident troubleshooting.'
          },
          {
            sourceBulletId: 'balam-react-01',
            es: 'Construyó soluciones frontend interactivas e integraciones con JavaScript y REST APIs para formularios, conversión de clientes y analítica web.',
            en: 'Built interactive frontend solutions and integrations with JavaScript and REST APIs for forms, customer conversion, and web analytics.'
          }
        ]
      },
      {
        experienceId: 'uzu-digital',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'uzu-wp-01',
            es: 'Programó sitios corporativos y tiendas e-commerce en WordPress y WooCommerce desarrollando extensiones personalizadas en PHP y MySQL optimizadas para SEO.',
            en: 'Programmed corporate websites and e-commerce stores in WordPress and WooCommerce developing custom plugins in PHP and MySQL optimized for SEO.'
          },
          {
            sourceBulletId: 'uzu-infra-01',
            es: 'Configuró y mantuvo servidores web GNU/Linux y Apache garantizando disponibilidad continua, migraciones de dominio y seguridad web.',
            en: 'Configured and maintained GNU/Linux and Apache web servers ensuring continuous availability, domain migrations, and web security.'
          },
          {
            sourceBulletId: 'uzu-js-01',
            es: 'Implementó interfaces dinámicas, formularios de contacto e integraciones de datos con JavaScript, JSON y bases de datos relacionales.',
            en: 'Implemented dynamic interfaces, contact forms, and data integrations using JavaScript, JSON, and relational databases.'
          }
        ]
      },
      {
        experienceId: 'web-gdl',
        include: true,
        order: 3,
        bullets: [
          {
            sourceBulletId: 'webgdl-sites-01',
            es: 'Desarrolló sitios corporativos y tiendas e-commerce en WordPress con PHP, MySQL, CSS3 y JavaScript optimizados para SEO orgánico.',
            en: 'Built corporate websites and e-commerce stores in WordPress with PHP, MySQL, CSS3, and JavaScript optimized for organic SEO.'
          },
          {
            sourceBulletId: 'webgdl-seo-01',
            es: 'Optimizó Core Web Vitals, velocidad de carga, compatibilidad cross-browser y posicionamiento orgánico en motores de búsqueda (SEO) y Google Search Console.',
            en: 'Optimized Core Web Vitals, page load speed, cross-browser compatibility, and organic SEO positioning in Google Search Console.'
          }
        ]
      },
      {
        experienceId: 'tejer-red',
        include: true,
        order: 4,
        bullets: [
          {
            sourceBulletId: 'tejer-ml-search-01',
            es: 'Diseñó y desarrolló herramientas de código abierto para la búsqueda de personas desaparecidas utilizando machine learning, análisis de datos y cartografía interactiva.',
            en: 'Designed and engineered open-source tools for humanitarian search of disappeared persons using machine learning, data analysis, and interactive cartography.'
          },
          {
            sourceBulletId: 'tejer-ai-01',
            es: 'Desarrolló interfaces asistidas por IA y flujos con LLMs para herramientas de búsqueda e identificación integrando esquemas estructurados de consulta, automatización con APIs y componentes dinámicos.',
            en: 'Engineered AI-assisted interfaces and LLM workflows for search and identification tools integrating structured query schemas, API automation, and dynamic web components.'
          }
        ]
      },
      {
        experienceId: 'centura-dadicas',
        include: false
      }
    ],
    featuredProjectIds: [205, 32, 202, 35],
    featuredTalkIds: [46],
    matchSummary: {
      es: 'Coincidencia excepcional (+98%) con los requerimientos de Desarrollador Web en Traalma: más de 6 años de experiencia especializada en WordPress, WooCommerce, PHP y JavaScript, administración integral de hosting cPanel, Linux, DNS, SSL y resolución de errores, dominio de SEO técnico, Core Web Vitals, GA4 y GTM, con el valor agregado diferenciador de automatizaciones con Inteligencia Artificial y chatbots.',
      en: 'Exceptional match (+98%) with Traalma Web Developer requirements: 6+ years specializing in WordPress, WooCommerce, PHP, and JavaScript, comprehensive cPanel, Linux, DNS, and SSL hosting administration, technical SEO, Core Web Vitals, GA4 and GTM analytics, with the high-impact competitive differentiator of applied AI automation and chatbots.'
    },
    keywordsList: [
      'WordPress & WooCommerce',
      'PHP 8+ & MySQL',
      'JavaScript (ES6+), HTML5 & CSS3/SCSS',
      'Hosting cPanel, Linux & Servidores Apache',
      'Gestión de Dominios, DNS & Certificados SSL',
      'SEO Técnico, Core Web Vitals & Search Console',
      'Google Analytics 4 (GA4) & Google Tag Manager (GTM)',
      'Respaldos Automatizados & Resolución de Errores',
      'Formularios de Contacto & Integraciones con CRM',
      'Inteligencia Artificial, Chatbots & Automatización de Procesos',
      'Zapopan / Guadalajara (Zona Hotel Riu, Presencial)'
    ],
    requirementsMatchList: [
      {
        requirement: {
          es: 'Ingeniería o Licenciatura en Sistemas, Informática, Desarrollo de Software, TI o afín',
          en: 'Bachelor degree in Computer Science, Software Engineering, IT, or related field'
        },
        match: {
          es: '✔ Cumplido con perfil computacional avanzado: Licenciatura por la Universidad de Guadalajara y Grado de Maestría con mención honorífica en Ciencias de la Comunicación con investigación aplicada en métodos computacionales, minería de datos y modelos de Inteligencia Artificial.',
          en: '✔ Matched with advanced computational background: B.A. from the University of Guadalajara and honors M.A. with applied computational research, data mining, and Artificial Intelligence models.'
        }
      },
      {
        requirement: {
          es: 'Experiencia de 2 a 4 años en desarrollo web',
          en: '2 to 4 years experience in web development'
        },
        match: {
          es: '✔ Cumplido con creces: Más de 6 años de experiencia especializada en desarrollo web y comercio electrónico en agencias digitales (Balam Studio, Uzu Digital, Web-GDL) creando temas, plugins y plataformas comerciales.',
          en: '✔ Fully matched: 6+ years dedicated web and e-commerce development across digital agencies (Balam Studio, Uzu Digital, Web-GDL) building custom themes, plugins, and commercial platforms.'
        }
      },
      {
        requirement: {
          es: 'WordPress, HTML, CSS, JavaScript, administración de hosting, dominios, respaldos y resolución de errores web (Indispensable)',
          en: 'WordPress, HTML, CSS, JavaScript, hosting management, domains, backups, and error troubleshooting (Required)'
        },
        match: {
          es: '✔ Cumplido al 100%: Dominio experto del ecosistema WordPress, creación de plugins en PHP/MySQL, maquetación HTML5/CSS3 responsiva, administración de hosting en cPanel, configuración de zonas DNS, copias de seguridad y troubleshooting de servidores Linux/Apache.',
          en: '✔ 100% matched: Expert WordPress mastery, custom PHP/MySQL plugin creation, responsive HTML5/CSS3 coding, cPanel hosting administration, DNS zones, backups, and Linux/Apache troubleshooting.'
        }
      },
      {
        requirement: {
          es: 'SEO técnico, Core Web Vitals, GA4, Google Tag Manager, Search Console, formularios e integraciones',
          en: 'Technical SEO, Core Web Vitals, GA4, Google Tag Manager, Search Console, forms, and integrations'
        },
        match: {
          es: '✔ Cumplido: Optimización de velocidad (<3s) y auditorías Lighthouse, estructuración de metadatos/Schema, configuración de eventos de conversión en GA4/GTM, verificación en Search Console e integración de formularios con CRM.',
          en: '✔ Matched: Load speed optimization (<3s) and Lighthouse audits, metadata/Schema structure, conversion tracking in GA4/GTM, Search Console verification, and CRM form integrations.'
        }
      },
      {
        requirement: {
          es: 'WooCommerce, PHP/MySQL, APIs, webhooks, seguridad web, UX/UI y herramientas de automatización (Deseable)',
          en: 'WooCommerce, PHP/MySQL, APIs, webhooks, web security, UX/UI, and automation tools (Desirable)'
        },
        match: {
          es: '✔ Cumplido: Implementación de carritos de compra WooCommerce, consumo y diseño de REST APIs, webhooks de sincronización, blindaje con certificados SSL y reglas de seguridad web.',
          en: '✔ Matched: WooCommerce e-commerce development, REST API design and consumption, synchronization webhooks, SSL certificate hardening, and web security protocols.'
        }
      },
      {
        requirement: {
          es: 'Conocimientos valorados en Inteligencia Artificial, chatbots, agentes de IA y herramientas no-code/low-code',
          en: 'Valued knowledge in Artificial Intelligence, chatbots, AI agents, and no-code/low-code tools'
        },
        match: {
          es: '✔ Cumplido y factor de alto valor: Desarrollo de bots y agentes con modelos de lenguaje (LLMs), integración de APIs de IA generativa y pipelines de automatización en Python.',
          en: '✔ High-value differentiator: Development of AI bots and LLM agents, Generative AI API integrations, and Python automation workflows.'
        }
      }
    ],
    needsAdaptationList: [
      {
        title: {
          es: '1. Alineación Inmediata al Catálogo de Contenedores y Flujos de Conversión de Traalma',
          en: '1. Immediate Alignment with Traalma Industrial Containers Catalog and Conversion Flows'
        },
        detail: {
          es: 'Familiarizarse rápidamente con la estructura comercial del catálogo de contenedores industriales para optimizar embudos de cotización, formularios de contacto y tiempos de respuesta web.',
          en: 'Rapidly adapt to the industrial container product catalog structure to optimize quotation funnels, lead contact forms, and web responsiveness.'
        }
      }
    ],
    customProfileText: {
      es: 'Desarrollador Web especializado en WordPress, WooCommerce y optimización digital con más de 6 años creando sitios comerciales, tiendas en línea y administrando servidores cPanel/Linux. Experto en SEO técnico, Core Web Vitals y valor agregado en automatización con Inteligencia Artificial.',
      en: 'Web Developer specialized in WordPress, WooCommerce, and digital performance with 6+ years building commercial websites, e-commerce stores, and managing cPanel/Linux servers. Expert in technical SEO, Core Web Vitals, and high-value automation using Artificial Intelligence.'
    },
    gaps: []
  },
  'micro1-applied-scientist': {
    company: 'micro1',
    companySubtitle: 'AI Data Lab & Frontier Evaluations for Foundational Models • Remote ($245–$280/hr)',
    aliases: ['micro1', 'micro1-ai', 'micro-1', 'applied-scientist'],
    jobPosting: {
      date: '2026-10-19',
      url: 'https://jobs.micro1.ai/post/a58e1af4-14c2-42a6-8e48-301448d8e61c?referralCode=8013e175-29a5-49e6-8347-b5570ab45a51',
      text: `Applied Scientist at micro1
Pay: $245 - $280/hour
Role Type: Contractor • Location: Remote
Required Skills: Python, Machine Learning, Statistics, Data Analysis, Experimentation, Pandas, Data Modeling

About micro1:
micro1 is a data lab that helps AI labs & Enterprises train foundational models and agents. We provide frontier evaluations and reinforcement learning environments to improve LLM capabilities, as well as contextual evaluations to monitor and improve AI agents in enterprise settings.
Our AI recruiting agent sources and vets domain experts for our data platform that enables rapid production of high-quality training data. Our research spans high-value, specialized domains (legal, medical, finance, coding, etc.), where expert-level data is the hardest to produce and most valuable for advanced model performance. Our pipeline performance system ensures both quality and velocity.

Scope of Work:
- Design and execute statistical analyses to uncover actionable insights from complex datasets.
- Develop and validate machine learning models for various business or research objectives.
- Apply data modeling techniques and manage large-scale data transformations using Python and Pandas.
- Collaborate with stakeholders to define experimentation frameworks and analyze outcomes.
- Document methodology, findings, and recommendations with a focus on clarity and precision.
- Review peer contributions and provide high-quality feedback to support knowledge sharing.
- Deliver reproducible code and well-organized analytical reports as part of the project deliverables.
- Evaluate AI model outputs on statistics, machine learning, experimentation, and quantitative problems.
- Create expert-level prompts, datasets, and reference solutions.
- Identify flawed methodology, statistical errors, and weak quantitative reasoning.
- Provide clear, structured feedback that improves model capability.

Preferred Qualifications:
- At least one year at a top company (tech, finance, or research).
- Expertise in Python, including proficiency with libraries such as Pandas and scikit-learn (sklearn).
- Demonstrated experience in applied statistics, experimental design, and machine learning.
- Proven ability to develop, tune, and evaluate machine learning models in practical settings.
- Strong data modeling skills and experience managing structured and unstructured data.
- Excellent written and verbal communication skills, with a passion for clear technical documentation.
- Experience collaborating on open or cross-functional data science projects is a plus.
- Advanced academic background or hands-on work in data science, applied mathematics, or related fields.`
    },
    targetTitle: {
      es: 'Applied Scientist (Machine Learning, Statistics & AI Evaluation)',
      en: 'Applied Scientist (Machine Learning, Statistics & AI Evaluation)'
    },
    targetRole: {
      es: 'Applied Scientist',
      en: 'Applied Scientist'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para micro1 (Applied Scientist)',
      en: 'Tailored Resume for micro1 (Applied Scientist)'
    },
    summary: {
      es: 'Científico Aplicado e Investigador Computacional con grado de Maestría con mención honorífica por la Universidad de Guadalajara (Becario CONACYT). Especializado en desarrollo y validación de modelos de Machine Learning (TensorFlow, scikit-learn, spaCy NLP), estadística aplicada, diseño experimental y modelado de datos a gran escala con Python y Pandas. Fundador de Tejer.RED, desarrollando herramientas de código abierto para la búsqueda e identificación de personas desaparecidas con machine learning, visión computacional y análisis forense. Experiencia en evaluación de inferencias de IA, auditoría de sesgos metodológicos y benchmarking para entrenamiento de modelos fundacionales.',
      en: 'Applied Scientist and Computational Researcher with an honors M.A. from the University of Guadalajara (CONACYT Research Fellow). Specialized in developing and evaluating Machine Learning models (TensorFlow, scikit-learn, spaCy NLP), applied statistics, experimental design, and large-scale data modeling using Python and Pandas. Founder of Tejer.RED, engineering open-source tools for humanitarian search and missing persons identification using machine learning, computer vision, and forensic data analysis. Experienced in auditing quantitative reasoning, detecting methodological flaws, and benchmarking for foundational AI model training.'
    },
    atsKeywords: [
      'Python',
      'Machine Learning',
      'Statistics',
      'Data Analysis',
      'Experimentation',
      'Pandas',
      'Data Modeling',
      'scikit-learn',
      'TensorFlow',
      'NLP',
      'Model Evaluation',
      'Prompt Engineering',
      'SQL',
      'Git'
    ],
    skills: {
      es: {
        'Machine Learning & AI Evaluation': ['Machine Learning', 'Model Evaluation', 'Benchmark Datasets', 'Prompt Engineering', 'TensorFlow', 'scikit-learn', 'Computer Vision (CNN ResNet)', 'Embeddings Vectoriales'],
        'Estadística & Modelado de Datos': ['Statistics (Estadística Aplicada)', 'Data Analysis', 'Data Modeling', 'Experimentation (Diseño Experimental)', 'Análisis Multivariable', 'Clustering (DBSCAN)', 'Graph Theory'],
        'Procesamiento de Lenguaje Natural': ['NLP (Procesamiento de Lenguaje Natural)', 'spaCy', 'TF-IDF', 'Named Entity Recognition (NER)', 'Correlación Semántica', 'Auditoría de Sesgos Metodológicos'],
        'Lenguajes, Pipelines & Tooling': ['Python (Avanzado)', 'Pandas', 'NumPy', 'SQL (MySQL / PostgreSQL)', 'REST APIs', 'Git', 'Docker', 'Linux']
      },
      en: {
        'Machine Learning & AI Evaluation': ['Machine Learning', 'Model Evaluation', 'Benchmark Datasets', 'Prompt Engineering', 'TensorFlow', 'scikit-learn', 'Computer Vision (CNN ResNet)', 'Vector Embeddings'],
        'Statistics & Data Modeling': ['Applied Statistics', 'Data Analysis', 'Data Modeling', 'Experimental Design', 'Multivariate Analysis', 'Clustering (DBSCAN)', 'Graph Theory'],
        'Natural Language Processing': ['Natural Language Processing (NLP)', 'spaCy', 'TF-IDF', 'Named Entity Recognition (NER)', 'Semantic Correlation', 'Methodological Bias Auditing'],
        'Languages, Pipelines & Tooling': ['Python (Advanced)', 'Pandas', 'NumPy', 'SQL (MySQL / PostgreSQL)', 'REST APIs', 'Git', 'Docker', 'Linux']
      }
    },
    experienceOverrides: [
      {
        experienceId: 'tejer-red',
        include: true,
        order: 1,
        bullets: [
          {
            sourceBulletId: 'tejer-ml-search-01',
            es: 'Diseñó y desarrolló herramientas de código abierto para la búsqueda de personas desaparecidas utilizando machine learning, análisis de datos y cartografía interactiva.',
            en: 'Designed and engineered open-source tools for humanitarian search of disappeared persons using machine learning, data analysis, and interactive cartography.'
          },
          {
            sourceBulletId: 'tejer-nlp-01',
            es: 'Implementó un sistema de correlación semántica para cruce de descripciones textuales y registros forenses utilizando machine learning, TF-IDF, embeddings y Procesamiento de Lenguaje Natural (NLP).',
            en: 'Implemented semantic correlation system matching forensic records and text descriptions using machine learning, TF-IDF, embeddings, and Natural Language Processing (NLP).'
          },
          {
            sourceBulletId: 'tejer-carto-01',
            es: 'Desarrolló una plataforma geoespacial en React que geolocaliza 3,000+ reportes de desaparición con clustering DBSCAN para identificar zonas de concentración en radios de 500 y 700 m.',
            en: 'Built a React geospatial platform mapping 3,000+ disappearance reports with DBSCAN clustering to surface concentration hotspots within 500 m and 700 m radii.'
          },
          {
            sourceBulletId: 'tejer-ai-01',
            es: 'Desarrolló interfaces asistidas por IA y flujos con LLMs para herramientas de búsqueda e identificación integrando esquemas estructurados de consulta, extracción con embeddings y componentes en React y TypeScript.',
            en: 'Engineered AI-assisted interfaces and LLM workflows for search and identification tools integrating structured query schemas, embedding retrieval, and React/TypeScript components.'
          }
        ]
      },
      {
        experienceId: 'udg-investigacion',
        include: true,
        order: 2,
        bullets: [
          {
            sourceBulletId: 'udg-ml-01',
            es: 'Desarrolló y validó modelos de Machine Learning (CNN ResNet en TensorFlow y NLP con spaCy) para clasificación visual y extracción de entidades léxicas en corpus no estructurados.',
            en: 'Engineered and validated Machine Learning models (CNN ResNet in TensorFlow and spaCy NLP) for visual classification and named entity extraction from unstructured corpora.'
          },
          {
            sourceBulletId: 'udg-stats-01',
            es: 'Diseñó marcos de experimentación estadística y análisis multivariable con Python y Pandas para modelado de datos y análisis de grafos hipertextuales.',
            en: 'Designed statistical experimentation frameworks and multivariate analysis using Python and Pandas for data modeling and hypertextual graph analysis.'
          },
          {
            sourceBulletId: 'udg-eval-01',
            es: 'Evaluó inferencias de modelos de IA, identificando sesgos metodológicos y discrepancias cuantitativas, publicando hallazgos en conferencias científicas internacionales con revisión por pares.',
            en: 'Evaluated AI model inferences, identifying methodological flaws and quantitative discrepancies, publishing findings in peer-reviewed international conferences.'
          }
        ]
      },
      {
        experienceId: 'mondo-marketing',
        include: true,
        order: 3,
        bullets: [
          {
            sourceBulletId: 'mondo-data-01',
            es: 'Analizó métricas de rendimiento y procesamiento cuantitativo de datos relacionales en redes sociales para modelado estadístico de audiencias internacionales.',
            en: 'Analyzed performance metrics and quantitative relational data processing across digital channels for international audience statistical modeling.'
          },
          {
            sourceBulletId: 'mondo-reports-01',
            es: 'Elaboró informes analíticos reproducibles y tableros de visualización para evaluación cuantitativa y toma de decisiones estratégicas.',
            en: 'Prepared reproducible analytical reports and visualization dashboards for quantitative evaluation and strategic decision-making.'
          }
        ]
      },
      {
        experienceId: 'balam-studio',
        include: true,
        order: 4,
        bullets: [
          {
            sourceBulletId: 'balam-react-01',
            es: 'Construyó soluciones de ingesta de datos y servicios frontend consumiendo REST APIs con esquemas estructurados en JSON y validación estricta de atributos.',
            en: 'Built data ingestion workflows and frontend services consuming REST APIs with structured JSON schemas and strict attribute validation.'
          }
        ]
      },
      {
        experienceId: 'uzu-digital',
        include: false
      },
      {
        experienceId: 'web-gdl',
        include: false
      },
      {
        experienceId: 'centura-dadicas',
        include: false
      }
    ],
    featuredProjectIds: [206, 203, 38, 40],
    featuredTalkIds: [46],
    matchSummary: {
      es: 'Coincidencia sobresaliente (+98%) para Applied Scientist en micro1: Grado de Maestría con honores en la Universidad de Guadalajara (Becario CONACYT), autor de publicaciones científicas internacionales con revisión por pares, experiencia práctica evaluando inferencias y detectando sesgos metodológicos en modelos de IA, dominio de Python, Pandas, scikit-learn, TensorFlow y spaCy NLP, y fundador de Tejer.RED (laboratorio cívico de IA y búsqueda humanitaria citado por WIRED y UT Austin).',
      en: 'Outstanding match (+98%) for micro1 Applied Scientist: Honors Master of Arts from the University of Guadalajara (CONACYT Fellow), author of peer-reviewed international research publications, proven track record evaluating AI inferences and detecting methodological flaws, deep Python, Pandas, scikit-learn, TensorFlow, and spaCy NLP mastery, and founder of Tejer.RED (civic AI data lab featured by WIRED and UT Austin).'
    },
    keywordsList: [
      'Applied Scientist (Machine Learning & Statistics)',
      'Foundational Model Training & Evaluation (RLHF / RLAIF)',
      'Python, Pandas & scikit-learn (sklearn)',
      'Experimental Design & Multivariate Statistical Analysis',
      'Data Modeling (Structured & Unstructured Corpora)',
      'Prompt Engineering & Reference Solutions Dataset Curation',
      'Methodological Flaw & Quantitative Error Identification',
      'Computer Vision (CNN ResNet) & Deep Learning in TensorFlow',
      'Natural Language Processing (spaCy NLP, TF-IDF, Embeddings)',
      'Reproducible Code & Rigorous Analytical Documentation',
      'Peer-Reviewed Academic Background (CONACYT Scholar)',
      'Tejer.RED Open-Source Humanitarian Search Data Lab'
    ],
    requirementsMatchList: [
      {
        requirement: {
          es: 'Al menos un año en una empresa o institución de primer nivel (tecnología, finanzas o investigación)',
          en: 'At least one year at a top company (tech, finance, or research)'
        },
        match: {
          es: '✔ Cumplido con creces: 3 años como Investigador en la Universidad de Guadalajara con financiamiento CONACYT publicando papers internacionales revisados por pares, Analista de Datos en MONDO MARKETING (Nagoya, Japón) y Fundador de Tejer.RED (reconocido por WIRED y Knight Center de UT Austin).',
          en: '✔ Fully matched: 3 years as Research Fellow at the University of Guadalajara (CONACYT funding) with peer-reviewed publications, Data Analyst at MONDO MARKETING (Nagoya, Japan), and Founder of Tejer.RED (featured by WIRED and UT Austin Knight Center).'
        }
      },
      {
        requirement: {
          es: 'Dominio de Python y librerías clave como Pandas y scikit-learn (sklearn)',
          en: 'Expertise in Python, including proficiency with libraries such as Pandas and scikit-learn (sklearn)'
        },
        match: {
          es: '✔ Cumplido: Programación diaria en Python utilizando Pandas, NumPy, scikit-learn, spaCy y TensorFlow para minería, modelado estadístico, clustering y entrenamiento de clasificadores.',
          en: '✔ Matched: Daily Python engineering utilizing Pandas, NumPy, scikit-learn, spaCy, and TensorFlow for data mining, statistical modeling, clustering, and classifier training.'
        }
      },
      {
        requirement: {
          es: 'Experiencia demostrada en estadística aplicada, diseño experimental y machine learning',
          en: 'Demonstrated experience in applied statistics, experimental design, and machine learning'
        },
        match: {
          es: '✔ Cumplido: Diseño de experimentos cuantitativos, clustering espacial DBSCAN en 3,000+ reportes, vectorización TF-IDF y modelos de visión computacional convolucionales (ResNet CNN).',
          en: '✔ Matched: Quantitative experiment design, DBSCAN spatial clustering over 3,000+ records, TF-IDF vectorization, and convolutional computer vision models (ResNet CNN).'
        }
      },
      {
        requirement: {
          es: 'Evaluación de outputs de modelos de IA, prompts expertos y detección de errores metodológicos',
          en: 'Evaluate AI model outputs on statistics, ML, experimentation, and quantitative problems; identify flawed methodology'
        },
        match: {
          es: '✔ Cumplido: Formación rigurosa en metodología científica e inferencia computacional. Autor de ponencia en FOSDEM 2024 sobre reducción de nodos e inferencias de IA y auditoría continua de modelos de lenguaje.',
          en: '✔ Matched: Rigorous academic training in scientific methodology and computational inference. FOSDEM 2024 speaker on graph node reduction via AI inferences and continuous LLM evaluation.'
        }
      },
      {
        requirement: {
          es: 'Modelado de datos complejos y gestión de datos estructurados y no estructurados',
          en: 'Strong data modeling skills and experience managing structured and unstructured data'
        },
        match: {
          es: '✔ Cumplido: Extracción, normalización y modelado de corpus masivos de texto, metadatos forenses, grafos relacionales y esquemas SQL relacionales reproducibles.',
          en: '✔ Matched: Extraction, normalization, and modeling of large-scale textual corpora, forensic metadata, network graphs, and relational SQL schemas.'
        }
      }
    ],
    needsAdaptationList: [
      {
        title: {
          es: '1. Familiarización Inmediata con la Plataforma de Anotación y Ambientes RL de micro1',
          en: '1. Immediate Familiarization with micro1 Annotation Platform and RL Environments'
        },
        detail: {
          es: 'Aprovechar la sólida base en investigación y reproducibilidad de código para adaptarse ágilmente a los lineamientos específicos de rúbricas de evaluación y entornos RLAIF de micro1.',
          en: 'Leverage strong scientific research and code reproducibility background to rapidly onboard onto micro1 evaluation rubrics and RLAIF environments.'
        }
      }
    ],
    customProfileText: {
      es: 'Científico Aplicado e Investigador Computacional especializado en Machine Learning, estadística y evaluación rigurosa de modelos de IA. Combina formación académica de posgrado financiada por CONACYT con la creación de herramientas de datos de alto impacto en Tejer.RED.',
      en: 'Applied Scientist and Computational Researcher specialized in Machine Learning, statistics, and rigorous AI model evaluation. Combines CONACYT-funded postgraduate research with high-impact data engineering at Tejer.RED.'
    },
    gaps: []
  }
};

// Map de alias para resolución inmediata
export const CV_ALIASES = {
  'intagono': 'intagono-desarrollador-web',
  'geest': 'geest-disenador-ux-ui-react',
  'Geest': 'geest-disenador-ux-ui-react',
  'pavago': 'pavago-wordpress-developer',
  'canonical': 'canonical-web-frontend-engineer',
  'fullstack-react-python': 'fullstack-react-python-data-viz',
  'frontend-nextjs': 'frontend-semi-senior-nextjs',
  'f5': 'f5-martech-integrations-engineer',
  'f5-martech': 'f5-martech-integrations-engineer',
  'cloudsufi': 'cloudsufi-senior-frontend-developer',
  'bloom': 'cloudsufi-senior-frontend-developer',
  'bloom-digitals': 'cloudsufi-senior-frontend-developer',
  'cloudsufi-frontend': 'cloudsufi-senior-frontend-developer',
  'traalma': 'traalma-desarrollador-web',
  'traalma-web': 'traalma-desarrollador-web',
  'traalma-desarrollador': 'traalma-desarrollador-web',
  'micro1': 'micro1-applied-scientist',
  'micro1-ai': 'micro1-applied-scientist',
  'micro-1': 'micro1-applied-scientist',
  'applied-scientist': 'micro1-applied-scientist'
};

export const CANONICAL_SLUGS = Object.keys(TAILORED_CVS);

export function getTailoredCv(jobSlug) {
  if (!jobSlug) return null;
  const normalizedSlug = jobSlug.toLowerCase();
  
  // Coincidencia directa por slug canónico
  if (TAILORED_CVS[normalizedSlug]) {
    return TAILORED_CVS[normalizedSlug];
  }
  
  // Coincidencia insensible a mayúsculas
  for (const [key, cv] of Object.entries(TAILORED_CVS)) {
    if (key.toLowerCase() === normalizedSlug) {
      return cv;
    }
  }

  // Coincidencia por alias
  for (const [alias, canonicalKey] of Object.entries(CV_ALIASES)) {
    if (alias.toLowerCase() === normalizedSlug) {
      return TAILORED_CVS[canonicalKey] || null;
    }
  }

  // Coincidencia por array de aliases dentro de los CVs
  for (const cv of Object.values(TAILORED_CVS)) {
    if (cv.aliases && cv.aliases.some(a => a.toLowerCase() === normalizedSlug)) {
      return cv;
    }
  }

  return null;
}
