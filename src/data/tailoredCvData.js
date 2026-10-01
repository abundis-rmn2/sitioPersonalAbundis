// src/data/tailoredCvData.js
// Registro modular de CVs adaptados a la medida para vacantes y empresas específicas.

export const TAILORED_CVS = {
  'intagono-desarrollador-web': {
    company: 'Intagono',
    companySubtitle: 'Agencia IA Native • Guadalajara, Jalisco',
    targetRole: {
      es: 'Desarrollador Web (Agencia IA Native)',
      en: 'Web Developer (IA Native Agency)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Intagono',
      en: 'Tailored Resume for Intagono'
    },
    matchSummary: {
      es: 'Coincidencia del 100% con los requerimientos de la vacante: +10 años de experiencia en agencias de marketing digital, dominio avanzado de WordPress/WooCommerce, servidores cPanel/Apache/Nginx/SSH/DNS, stack PHP/JS/SCSS y perfil de innovación en Inteligencia Artificial.',
      en: '100% match with job requirements: 10+ years in digital marketing agencies, expert WordPress/WooCommerce, cPanel/Apache/Nginx/SSH/DNS server administration, full PHP/JS/SCSS stack, and pioneer in Applied AI integration.'
    },
    // Palabras clave del Job Listing / ATS Keywords
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
    // Matriz de Requerimientos vs Cumplimiento
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
    // Desglose de Adaptación Específica del CV
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
        detail: { es: 'Como pionero en ciencias sociales computacionales e IA aplicada, Javier integra herramientas avanzadas de inteligencia artificial (modelos convolucionales, procesamiento de lenguaje natural y automatizaciones) para potenciar el flujo de trabajo en la primera Agencia IA Native de Guadalajara.', en: 'As a computational social science and applied AI pioneer, Javier integrates advanced AI tools (CNNs, NLP, and agentic automations) to supercharge digital workflows for Guadalajara\'s premier IA Native Agency.' }
      }
    ],
    customProfileText: {
      es: 'Sociólogo y Desarrollador Web Full-Stack con más de 10 años de experiencia en agencias de marketing digital (Balam Studio, Uzu Digital/Nauka, Atama, Web-Gdl). Especializado en arquitectura web de alto rendimiento (WordPress/WooCommerce, PHP, JavaScript, SCSS, servidores Linux/cPanel/AWS) y pionero en la aplicación práctica de Inteligencia Artificial en la investigación desde las ciencias sociales (Computer Vision, NLP, modelos de IA y soberanía tecnológica). Fundador de Tejer.RED y ponente internacional en FOSDEM (Bélgica), combinando rigurosidad técnica y visión estratégica para impulsar proyectos digitales de alto impacto.',
      en: 'Sociologist & Full-Stack Web Developer with 10+ years of experience across digital marketing agencies (Balam Studio, Uzu Digital/Nauka, Atama, Web-Gdl). Specialized in high-performance web architecture (WordPress/WooCommerce, PHP, JavaScript, SCSS, Linux/cPanel/AWS servers) and pioneer in the practical application of Artificial Intelligence in social science research (Computer Vision, NLP, AI models, and tech sovereignty). Founder of Tejer.RED and international FOSDEM speaker (Belgium), blending technical rigor and strategic vision for high-impact digital initiatives.'
    }
  },
  'geest': {
    company: 'Geest',
    companySubtitle: 'SaaS Operativo (300+ empresas, 6,000+ usuarios en 18 países) • 100% Remoto (México / LATAM)',
    targetRole: {
      es: 'Diseñador UX/UI + Developer React (Design Engineer Path)',
      en: 'UX/UI Designer + React Developer (Design Engineer Path)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Geest (SaaS Product & Design Engineering)',
      en: 'Tailored Resume for Geest (SaaS Product & Design Engineering)'
    },
    matchSummary: {
      es: 'Conexión total con la visión de Geest: Diseñador de producto y desarrollador frontend en React que entiende la tecnología como una herramienta para simplificar la vida operativa de miles de usuarios. Combina Figma avanzado (auto-layout, variantes, UI Kits) con programación en React/Next.js, uso diario de IA (Claude Design, LLMs) y una mirada sociológica/analítica para priorizar peticiones de clientes con criterio UX real, cuidando cada detalle pixel-perfect antes de cada deploy.',
      en: 'Total alignment with Geest’s vision: Product Designer & React Developer who views technology as a catalyst to streamline daily operational work for thousands of users. Combines advanced Figma (auto-layout, variants, UI Kits) with React/Next.js coding, daily AI workflows (Claude Design, LLMs), and analytical research rigor to prioritize customer requests with genuine UX criteria.'
    },
    featuredProjectIds: [203, 34, 201, 35],
    featuredTalkIds: [46],
    relevantTags: ['js-react-web', 'gis-espacial', 'ar-interactivo', 'desarrollo-web-comercial'],
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
        requirement: {
          es: '3-5 años diseñando producto SaaS vivo (no agencia, no landings, no branding)',
          en: '3-5 years designing live SaaS products (not agency, landings, or branding)'
        },
        match: {
          es: '✔ Cumplido: Diseñador y programador de sistemas de datos operativos e interfaces complejas (Cartografía Semántica Tejer.RED con +3,000 registros activos, Interfaz DVI de grafos relacionales y Catálogo interactivo de Indicios). Producto vivo enfocado en resolver el caos de información.',
          en: '✔ Matched: Architect, designer & dev for live complex operational data systems (Tejer.RED Semantic Mapping with 3,000+ active records, DVI Relational Interface, and Indicios SaaS Catalog). Live products solving data chaos.'
        }
      },
      {
        requirement: {
          es: 'Figma nivel avanzado: componentes, variantes, auto-layout, libraries',
          en: 'Advanced Figma: components, variants, auto-layout, design system libraries'
        },
        match: {
          es: '✔ Cumplido: Mantenimiento y desarrollo de UI Kits, librerías de componentes responsivos con auto-layout y variantes, estandarización de tokens visuales y paso directo y sin fricción de Figma a componentes React.',
          en: '✔ Matched: UI Kit development, responsive component libraries with auto-layout & variants, visual token standardization, and seamless handoff to React code.'
        }
      },
      {
        requirement: {
          es: 'React nivel básico / intermedio (Crucial: diseñar y maquetar/programar en React)',
          en: 'Basic/Intermediate React (Crucial: design and code in React)'
        },
        match: {
          es: '✔ Cumplido (Intermedio / Avanzado): Desarrollo activo en React y Next.js. Creación de componentes modulares (Hooks, Context API, CSS3/Tailwind), maquetación responsiva pixel-perfect e integración de APIs REST.',
          en: '✔ Matched (Intermediate/Advanced): Active React & Next.js development. Modular components (Hooks, Context API, CSS3/Tailwind), pixel-perfect responsive layouts, and REST API consumption.'
        }
      },
      {
        requirement: {
          es: 'Uso diario de Inteligencia Artificial en el flujo de trabajo (AI-Native)',
          en: 'Daily AI integration into product & design workflow (AI-Native)'
        },
        match: {
          es: '✔ Cumplido: Integración diaria de IA en diseño y código (Claude Design, automatización con LLMs, spaCy NLP, visión por computadora en TensorFlow y generación asistida de interfaces). No es moda, es su herramienta de trabajo diaria.',
          en: '✔ Matched: Daily AI integration in design & dev (Claude Design, LLM automation, spaCy NLP, TensorFlow computer vision, and AI-assisted prototyping). Daily core workflow.'
        }
      },
      {
        requirement: {
          es: 'Priorización de peticiones con criterio UX real y evolución de UI Kit sin reinventar',
          en: 'Prioritizing customer requests with real UX criteria & UI Kit evolution (no reinventing)'
        },
        match: {
          es: '✔ Cumplido: Criterio analítico sociológico para entender la necesidad real del usuario tras la petición, equilibrando esfuerzo técnico vs. impacto. Hábil evolucionando lo que ya funciona sin destruir el trabajo previo.',
          en: '✔ Matched: Analytical rigor to understand actual user pain points behind requests, balancing tech effort vs. impact. Expertly evolves existing UI Kits without breaking what already works.'
        }
      }
    ],
    needsAdaptationList: [
      {
        title: {
          es: '1. Perfil Design Engineer: Del Prototipo en Figma al Código Real en React',
          en: '1. Design Engineer Profile: From Figma Prototype to Production React Code'
        },
        detail: {
          es: 'Javier elimina la brecha entre el diseñador y el desarrollador. Diseña EPICs claras en Figma utilizando componentes con auto-layout y variantes, y luego escribe los componentes en React con maquetación pixel-perfect, código limpio y listo para conectar con las APIs de Geest.',
          en: 'Javier bridges the gap between design and frontend engineering. He designs clean EPICs in Figma with auto-layout and component variants, then writes pixel-perfect React components ready for Geest APIs.'
        }
      },
      {
        title: {
          es: '2. Enfoque Pragmático en Operaciones y Criterio UX de Producto',
          en: '2. Pragmatic Operational Focus & Product UX Rationale'
        },
        detail: {
          es: 'Su trabajo se centra en eliminar la fricción del usuario y ahorrar horas diarias de operación. Su perfil de sociólogo e investigador computacional le da la objetividad necesaria para saber cuándo decir "sí", cuándo decir "no" y cómo estructurar mejoras que eliminen bomberazos operativos.',
          en: 'Focused on cutting user friction and saving daily operational hours. Computational research background provides data-backed objectivity to prioritize features that eliminate operational chaos.'
        }
      },
      {
        title: {
          es: '3. Flujo AI-Native Diario y Evolución de Sistemas Existentes',
          en: '3. Daily AI-Native Workflow & System Evolution'
        },
        detail: {
          es: 'Apalancado a diario en Claude Design y herramientas de IA para iterar prototipos a alta velocidad. Respeta y hace crecer el UI Kit existente de la empresa en lugar de querer rehacerlo todo desde cero.',
          en: 'Daily leverage of Claude Design and AI tools to rapidly iterate prototypes, evolving existing company UI Kits rather than triggering unnecessary redesigns.'
        }
      }
    ],
    customProfileText: {
      es: 'Diseñador de Producto y Design Engineer (Figma + React) guiado por una convicción profunda: la tecnología debe servir para eliminar el caos operativo y devolverle tiempo valioso a las personas. Combina más de 5 años diseñando en Figma (sistemas de componentes, auto-layout, variantes, UI Kits) con la capacidad real de implementar frontend responsivo en React/Next.js libre de deuda técnica. Su trasfondo como sociólogo e investigador computacional (fundador de Tejer.RED) le otorga una sensibilidad única para entender el comportamiento humano, analizar flujos de interacción densos y priorizar solicitudes con criterio UX objetivo (filtrando el ruido para construir solo lo que aporta valor real). Apasionado de la soberanía tecnológica y de la Inteligencia Artificial como prótesis creativa diaria (Claude Design, LLMs, pipelines de datos).',
      en: 'Product Designer & Design Engineer (Figma + React) driven by a core conviction: technology should eliminate operational chaos and give valuable time back to human beings. Combines 5+ years designing in Figma (component systems, auto-layout, variants, UI Kits) with production frontend implementation in React/Next.js. His background as a sociologist and computational researcher (founder of Tejer.RED) brings an analytical lens to decode human behavior, streamline complex data workflows, and prioritize features with clear UX rationale. Passionate about technological sovereignty and daily AI workflows (Claude Design, LLMs), he works with self-driven autonomy, pixel-perfect attention to detail, and a commitment to scaling live products without reinventing the wheel.'
    }
  },
  'geest-disenador-ux-ui-react': {
    // Referencia alias a Geist
    get company() { return TAILORED_CVS['geest'].company; },
    get companySubtitle() { return TAILORED_CVS['geest'].companySubtitle; },
    get targetRole() { return TAILORED_CVS['geest'].targetRole; },
    get badgeLabel() { return TAILORED_CVS['geest'].badgeLabel; },
    get matchSummary() { return TAILORED_CVS['geest'].matchSummary; },
    get keywordsList() { return TAILORED_CVS['geest'].keywordsList; },
    get requirementsMatchList() { return TAILORED_CVS['geest'].requirementsMatchList; },
    get needsAdaptationList() { return TAILORED_CVS['geest'].needsAdaptationList; },
    get customProfileText() { return TAILORED_CVS['geest'].customProfileText; }
  },
  'pavago-wordpress-developer': {
    company: 'Pavago',
    companySubtitle: 'Remote • U.S. Business Hours (High-Growth Client)',
    targetRole: {
      es: 'Desarrollador WordPress Senior (Performance, SEO & Custom Dev)',
      en: 'WordPress Developer (Remote • Performance, SEO & Custom Dev)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Pavago (WordPress Developer)',
      en: 'Tailored Resume for Pavago (WordPress Developer)'
    },
    matchSummary: {
      es: 'Alineación perfecta del 100%: 50% dominio de los requerimientos de Pavago (WordPress, PHP 8+, Elementor/Divi/Gutenberg, ACF, WooCommerce, Core Web Vitals <3s, cPanel/WPEngine/Kinsta, inglés fluido) + 50% historia de vida real (sociólogo computacional, +10 años en agencias, fundador de Tejer.RED con plugins propios como Amoxeh, ponente en FOSDEM Bélgica y ética de trabajo duro internacional en Canadá y EE.UU.).',
      en: '100% total alignment: 50% mastery of Pavago requirements (WordPress, PHP 8+, Elementor/Divi/Gutenberg, ACF, WooCommerce, Core Web Vitals <3s, cPanel/WPEngine/Kinsta, fluent English) + 50% authentic life story (computational sociologist, 10+ years agency background, founder of Tejer.RED authoring custom plugins like Amoxeh, keynote speaker at FOSDEM Belgium, and international work ethics in Canada and the U.S.).'
    },
    featuredProjectIds: [32, 205, 201, 203],
    featuredTalkIds: [46],
    relevantTags: ['php-wordpress', 'desarrollo-web-comercial', 'analisis-documental'],
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
        requirement: { 
          es: '2+ años de experiencia profesional en desarrollo WordPress', 
          en: '2+ years of professional WordPress development experience' 
        },
        match: { 
          es: '✔ Cumplido (+10 años): Experiencia continua en agencias de marketing digital (Balam Studio, Uzu Digital/Nauka, Atama, Web-Gdl) programando y administrando decenas de sitios corporativos y e-commerce en WordPress.', 
          en: '✔ Matched (10+ years): Continuous agency background (Balam Studio, Uzu Digital/Nauka, Atama, Web-Gdl) engineering and maintaining dozens of corporate and e-commerce WordPress sites.' 
        }
      },
      {
        requirement: { 
          es: 'Dominio de PHP, HTML5, CSS3, JavaScript y maquetadores (Elementor, Divi, Gutenberg)', 
          en: 'Proficiency in PHP, HTML, CSS, JavaScript & builders (Elementor, Divi, Gutenberg)' 
        },
        match: { 
          es: '✔ Cumplido: Maquetado responsivo pixel-perfect a partir de diseños Figma/XD, creación de temas hijo, plantillas a la medida y código limpio en PHP/JS libre de fricciones.', 
          en: '✔ Matched: Pixel-perfect responsive builds from Figma/XD designs, child theme development, custom PHP/JS templating, and clean maintainable code.' 
        }
      },
      {
        requirement: { 
          es: 'Gestión de plugins, WooCommerce, ACF, Yoast SEO e integraciones API/CRM', 
          en: 'Plugin management, WooCommerce, ACF, Yoast SEO & API/CRM integrations' 
        },
        match: { 
          es: '✔ Cumplido: Desarrollo de plugins propios a la medida (Amoxeh, Bitácora Búsqueda), tiendas WooCommerce activas, campos personalizados avanzados (ACF) e integración de REST APIs y herramientas de analítica.', 
          en: '✔ Matched: Custom plugin authoring (Amoxeh, Bitácora Búsqueda), active WooCommerce deployments, ACF power usage, and REST API/CRM integrations.' 
        }
      },
      {
        requirement: { 
          es: 'Optimización de velocidad, Core Web Vitals (<3s) y SEO técnico', 
          en: 'Speed optimization, Core Web Vitals (<3s) & Technical SEO' 
        },
        match: { 
          es: '✔ Cumplido: Auditorías con Google Lighthouse y GTmetrix, configuración de caché, minificación de código, lazy loading, CDNs y marcas de esquema para garantizar tiempos de carga menores a 3 segundos.', 
          en: '✔ Matched: Lighthouse/GTmetrix auditing, caching strategies, asset minification, lazy loading, CDN integration, and schema markup achieving sub-3-second load times.' 
        }
      },
      {
        requirement: { 
          es: 'Mantenimiento de hosting (cPanel, WP Engine, Kinsta) y seguridad (Wordfence, Sucuri)', 
          en: 'Hosting management (cPanel, WP Engine, Kinsta) & security (Wordfence, Sucuri)' 
        },
        match: { 
          es: '✔ Cumplido: Administración de servidores Linux (Apache/Nginx), cPanel, copias de seguridad, protocolos SSL/SSH, monitoreo de salud web y blindaje contra malware.', 
          en: '✔ Matched: Linux server administration (Apache/Nginx), cPanel, automated backup workflows, SSL/SSH protocols, site health monitoring, and security hardening.' 
        }
      },
      {
        requirement: { 
          es: 'Inglés fluido verbal y escrito para trabajo remoto en horarios de EE.UU.', 
          en: 'Strong written and verbal English skills for U.S. business hours' 
        },
        match: { 
          es: '✔ Cumplido: Fluidez bilingüe probada en entornos internacionales (trabajo en Canadá/EE.UU., ponente en FOSDEM Bélgica y publicaciones científicas indexadas en inglés).', 
          en: '✔ Matched: Proven bilingual fluency in international settings (work in Canada/US, keynote speaker at FOSDEM Belgium, and peer-reviewed papers published in English).' 
        }
      }
    ],
    needsAdaptationList: [
      {
        title: { 
          es: '1. Desarrollo Robusto en WordPress: De Figma a Código Producción', 
          en: '1. Robust WordPress Engineering: From Figma to Production Code' 
        },
        detail: { 
          es: 'Experto en tomar maquetas de Figma/Sketch y transformarlas en sitios WordPress ultra veloces, responsivos y fáciles de actualizar usando maquetadores (Elementor/Divi/Gutenberg) o temas a la medida con PHP y ACF.', 
          en: 'Skilled at taking Figma/Sketch designs and converting them into lightning-fast, responsive, and easy-to-maintain WordPress sites using builders (Elementor/Divi/Gutenberg) or custom PHP/ACF templates.' 
        }
      },
      {
        title: { 
          es: '2. Enfoque en Performance y Core Web Vitals (<3 segundos)', 
          en: '2. Obsession with Performance & Core Web Vitals (<3 Seconds)' 
        },
        detail: { 
          es: 'Optimización pragmática guiada por datos: limpieza de scripts innecesarios, compresión de imágenes, estrategias de caché, CDN y minificación para asegurar puntuaciones 90+ en Lighthouse y tiempos de carga inferiores a 3 segundos.', 
          en: 'Data-driven speed optimization: script purging, image compression, caching policies, CDN setup, and asset minification to guarantee 90+ Lighthouse scores and sub-3-second load times.' 
        }
      },
      {
        title: { 
          es: '3. Autonomía, Seguridad y Flujo de Trabajo Remoto', 
          en: '3. Autonomy, Security Hardening & Remote Deployment Workflows' 
        },
        detail: { 
          es: 'Más de una década trabajando en agencias y proyectos remotos autogestivos. Capaz de diagnosticar errores de hosting/plugins en minutos, mantener entornos staging seguros y comunicarse con claridad con equipos multidisciplinarios.', 
          en: 'Over a decade operating in agency and remote settings. Quick at diagnosing plugin/hosting errors, maintaining secure staging environments, and communicating clearly across teams.' 
        }
      }
    ],
    customProfileText: {
      es: 'Desarrollador Web Senior y Sociólogo Computacional con más de 10 años de trayectoria uniendo la rigurosidad del código WordPress a la medida con una profunda vocación por resolver problemas reales de información. Especializado en el ecosistema WordPress (desarrollo de temas hijo en PHP 8+, JavaScript, CSS3, maquetadores como Elementor, Divi y Gutenberg, ACF y e-commerce con WooCommerce), ha liderado proyectos web en agencias de marketing digital y fundado iniciativas de tecnología pública de código abierto como Tejer.RED (desarrollando plugins personalizados como Amoxeh y Bitácora Búsqueda). Con un enfoque obsesivo en la optimización de velocidad (Core Web Vitals <3s, Lighthouse 90+), SEO técnico, seguridad (Wordfence/Sucuri) y administración de servidores (cPanel, WP Engine, Kinsta, Linux/Apache/Nginx), combina la disciplina del trabajo duro internacional (experiencia en Canadá y EE.UU.), fluidez bilingüe en inglés y una visión analítica para transformar maquetas de Figma en plataformas web rápidas, seguras y orientadas a resultados de negocio.',
      en: 'Senior Web Developer and Computational Sociologist with 10+ years of experience blending custom WordPress engineering with a deep passion for solving real-world data and communication challenges. Specialized in the WordPress ecosystem (custom PHP 8+/JS/CSS3 child themes, Elementor, Divi, WPBakery, Gutenberg, ACF, and WooCommerce e-commerce), Javier has led digital marketing agency web builds and founded open-source public tech initiatives like Tejer.RED (authoring custom WordPress plugins such as Amoxeh and Bitácora Búsqueda). Obsessed with speed optimization (Core Web Vitals <3s, 90+ Lighthouse audits), technical SEO, security hardening (Wordfence/Sucuri), and server administration (cPanel, WP Engine, Kinsta, Linux), he combines international work ethics (fieldwork in Canada and the U.S.), bilingual English fluency, and computational research rigor to convert Figma designs into secure, lightning-fast web platforms.'
    }
  },
  'pavago': {
    get company() { return TAILORED_CVS['pavago-wordpress-developer'].company; },
    get companySubtitle() { return TAILORED_CVS['pavago-wordpress-developer'].companySubtitle; },
    get targetRole() { return TAILORED_CVS['pavago-wordpress-developer'].targetRole; },
    get badgeLabel() { return TAILORED_CVS['pavago-wordpress-developer'].badgeLabel; },
    get matchSummary() { return TAILORED_CVS['pavago-wordpress-developer'].matchSummary; },
    get keywordsList() { return TAILORED_CVS['pavago-wordpress-developer'].keywordsList; },
    get requirementsMatchList() { return TAILORED_CVS['pavago-wordpress-developer'].requirementsMatchList; },
    get needsAdaptationList() { return TAILORED_CVS['pavago-wordpress-developer'].needsAdaptationList; },
    get customProfileText() { return TAILORED_CVS['pavago-wordpress-developer'].customProfileText; }
  },
  'canonical-web-frontend-engineer': {
    company: 'Canonical',
    companySubtitle: 'Remote • Worldwide • Open Source Ubuntu Ecosystem',
    targetRole: {
      es: 'Web Frontend Engineer - JS, CSS, React, Flutter',
      en: 'Web Frontend Engineer - JS, CSS, React, Flutter'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Canonical (Web Frontend Engineer)',
      en: 'Tailored Resume for Canonical (Web Frontend Engineer)'
    },
    matchSummary: {
      es: 'Ingeniero de software con sólida experiencia en React, TypeScript y arquitectura de interfaces orientadas a datos. Combina su maestría en comunicación y desarrollo full-stack con su rol como fundador de Tejer.RED, aportando un historial riguroso en open-source, diseño accesible y optimización web a gran escala.',
      en: 'Software engineer with solid expertise in React, TypeScript, and data-rich UI architecture. Blends an M.A. background with full-stack development and open-source leadership at Tejer.RED, delivering a rigorous track record in open source, accessible design, and high-performance web engineering.'
    },
    
    featuredProjectIds: [32, 205, 201, 203],
    featuredTalkIds: [220],
    relevantTags: ['js-react-web', 'desarrollo-web-comercial', 'python-data'],

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
        requirement: { es: 'Experiencia demostrable en aplicaciones web modernas (React y TypeScript)', en: 'Demonstrable experience on modern web applications (React & TypeScript)' },
        match: { es: '✔ Cumplido: Desarrollo de interfaces SPA geoespaciales y paneles de visualización con React, Vite y TypeScript.', en: '✔ Matched: Built geospatial SPAs and data visualization dashboards using React, Vite, and TypeScript.' }
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
        detail: { es: 'Traducción de sistemas complejos de datos (como cartografía y grafos con SigmaJS/Graphology) en interfaces modulares, limpias y altamente performantes alineadas con frameworks de componentes abiertos.', en: 'Translating complex data systems (such as cartography and graphs with SigmaJS/Graphology) into clean, performant, modular interfaces aligned with open component frameworks.' }
      },
      {
        title: { es: '2. Compromiso con el Ecosistema Open Source', en: '2. Open Source Ecosystem Commitment' },
        detail: { es: 'Alineación total con la filosofía de Canonical, aportando experiencia real construyendo software público transparente, documentación rigurosa y código mantenible sin fricciones corporativas.', en: 'Total alignment with Canonical’s philosophy, bringing real experience building transparent public software, rigorous documentation, and maintainable code without corporate friction.' }
      }
    ],

    customProfileText: {
      es: 'Ingeniero de software y sociólogo computacional con más de 10 años de experiencia diseñando y desplegando aplicaciones web basadas en React, TypeScript y arquitecturas desacopladas. Fundador de la iniciativa open-source Tejer.RED, donde lidera el desarrollo de plataformas públicas de alto impacto social y visualización geoespacial (como cartografía interactiva y sistemas de correlación semántica). Con un dominio profundo de JavaScript moderno, CSS/SCSS, optimización de rendimiento en interfaces complejas y un flujo de trabajo diario basado en Linux y control de versiones distribuido. Destaca por su capacidad para colaborar de forma remota con equipos multidisciplinarios, transformar requerimientos complejos en componentes limpios y accesibles, y mantener un estándar riguroso de calidad de código.',
      en: 'Software engineer and computational sociologist with over 10 years of experience designing and deploying web applications built on React, TypeScript, and decoupled architectures. Founder of the open-source initiative Tejer.RED, where he leads the development of high-impact public platforms and geospatial visualizations (such as interactive cartography and semantic correlation systems). Possesses deep command of modern JavaScript, CSS/SCSS, performance optimization in complex user interfaces, and a daily workflow rooted in Linux and distributed version control. Noted for his capability to collaborate remotely with multidisciplinary teams, translate complex requirements into clean, accessible components, and maintain rigorous code quality standards.'
    }
  },
  'canonical': {
    get company() { return TAILORED_CVS['canonical-web-frontend-engineer'].company; },
    get companySubtitle() { return TAILORED_CVS['canonical-web-frontend-engineer'].companySubtitle; },
    get targetRole() { return TAILORED_CVS['canonical-web-frontend-engineer'].targetRole; },
    get badgeLabel() { return TAILORED_CVS['canonical-web-frontend-engineer'].badgeLabel; },
    get matchSummary() { return TAILORED_CVS['canonical-web-frontend-engineer'].matchSummary; },
    get keywordsList() { return TAILORED_CVS['canonical-web-frontend-engineer'].keywordsList; },
    get requirementsMatchList() { return TAILORED_CVS['canonical-web-frontend-engineer'].requirementsMatchList; },
    get needsAdaptationList() { return TAILORED_CVS['canonical-web-frontend-engineer'].needsAdaptationList; },
    get customProfileText() { return TAILORED_CVS['canonical-web-frontend-engineer'].customProfileText; }
  },
  'fullstack-react-python-data-viz': {
    company: 'Full-Stack React + Python Data Viz',
    companySubtitle: 'Remote Distributed Team • Real-Time Data Visualization & Python Pipelines',
    targetRole: {
      es: 'Full-Stack Software Developer (React, Python, Real-Time Data Visualization)',
      en: 'Full-Stack Software Developer (React, Python, Real-Time Data Visualization)'
    },
    badgeLabel: {
      es: 'Perfil Adaptado a la Medida para Full-Stack React & Python Data Developer',
      en: 'Tailored Resume for Full-Stack React & Python Data Developer'
    },
    matchSummary: {
      es: 'Desarrollador Full-Stack con más de 10 años de experiencia uniendo interfaces reactivas en React (JS/TS) para visualización de datos en tiempo real con pipelines y servicios backend en Python (FastAPI/Flask/PySpark), bases de datos SQL/NoSQL (MongoDB, PostgreSQL) y testing automatizado (Jest, pytest).',
      en: 'Full-Stack Software Developer with 10+ years of experience bridging reactive React (JS/TS) interfaces for real-time data visualization with Python backend pipelines (FastAPI/Flask/PySpark), SQL/NoSQL databases (MongoDB, PostgreSQL), and automated CI/CD testing (Jest, pytest).'
    },
    
    featuredProjectIds: [34, 203, 38, 40],
    featuredTalkIds: [46, 220],
    relevantTags: ['js-react-web', 'python-data', 'ml-vision', 'nlp', 'gis-espacial'],

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
        requirement: { es: 'Construcción y mantenimiento de aplicaciones web con React (JS/TS)', en: 'Building and maintaining web apps using React with JS/TS' },
        match: { es: '✔ Cumplido: Desarrollo de SPAs de alta densidad de datos en React/Next.js con TypeScript, Hooks personalizados y estado complejo.', en: '✔ Matched: Built data-dense SPAs in React/Next.js using TypeScript, custom hooks, and complex state management.' }
      },
      {
        requirement: { es: 'Desarrollo de servicios backend y pipelines de procesamiento con Python', en: 'Developing backend services and processing pipelines using Python' },
        match: { es: '✔ Cumplido: Creación de scripts y pipelines de datos en Python (FastAPI/Flask, Pandas, spaCy, Scikit-learn, PySpark, DBSCAN).', en: '✔ Matched: Created Python data processing pipelines and backend services (FastAPI/Flask, Pandas, spaCy, Scikit-learn, PySpark, DBSCAN).' }
      },
      {
        requirement: { es: 'Manejo de bases de datos relacionales (SQL) y NoSQL (MongoDB)', en: 'Experience with relational/SQL databases and NoSQL databases (e.g. MongoDB)' },
        match: { es: '✔ Cumplido: Modelado y consultas avanzadas en PostgreSQL, MySQL y MongoDB para almacenar corpora estructurados y telemetría.', en: '✔ Matched: Modeled and queried relational PostgreSQL/MySQL and MongoDB for structured text corpora, telemetry, and spatial layers.' }
      },
      {
        requirement: { es: 'Implementación de CI/CD y pruebas unitarias (Jest, pytest)', en: 'Familiarity with CI/CD practices and unit testing (Jest, pytest)' },
        match: { es: '✔ Cumplido: Flujos de CI/CD en GitHub Actions, automatización de pruebas unitarias/integración con pytest en Python y Jest/RTL en React.', en: '✔ Matched: Configured GitHub Actions CI/CD workflows, automated unit/integration testing with pytest in Python and Jest/RTL in React.' }
      },
      {
        requirement: { es: 'Inglés avanzado y comunicación fluida en equipos distribuidos', en: 'Advanced English and effective communication across distributed teams' },
        match: { es: '✔ Cumplido: Fluidez bilingüe profesional (inglés C1/avanzado), ponente en conferencias internacionales en Bélgica (FOSDEM) y experiencia remota global.', en: '✔ Matched: Full professional bilingual English fluency, international conference speaker in Europe (FOSDEM Belgium), and distributed team background.' }
      }
    ],

    needsAdaptationList: [
      {
        title: { es: '1. Visualización de Datos en Tiempo Real y UI Reactiva', en: '1. Real-Time Data Visualization & Reactive UI' },
        detail: { es: 'Especialista en convertir flujos de datos complejos (grafos de interacción, mapas geoespaciales y telemetría) en dashboards interactivos fluidos utilizando React, Canvas, Graphology/SigmaJS y librerías de renderizado en tiempo real.', en: 'Specialized in rendering complex data streams (graph networks, geospatial cartography, telemetry) into fluid interactive dashboards using React, Canvas, Graphology/SigmaJS, and real-time visualization libraries.' }
      },
      {
        title: { es: '2. Pipelines de Datos en Python y APIs de Backend', en: '2. Python Data Pipelines & Backend APIs' },
        detail: { es: 'Conexión transparente entre pipelines de ingesta/procesamiento en Python (NLP, clustering, algoritmos estadísticos) y servicios web exponiendo APIs REST/JSON eficientes respaldadas por PostgreSQL y MongoDB.', en: 'Seamlessly bridging Python data ingestion/processing pipelines (NLP, clustering, statistical models) with web microservices exposing clean REST/JSON APIs backed by PostgreSQL and MongoDB.' }
      },
      {
        title: { es: '3. Calidad de Código, Pruebas Automatizadas y CI/CD', en: '3. Code Quality, Automated Testing & CI/CD' },
        detail: { es: 'Compromiso riguroso con la mantenibilidad del código mediante pruebas unitarias en Jest y pytest, integración continua en GitHub Actions, documentación clara y despliegues seguros en contenedores Docker y plataformas cloud (Azure/Linux).', en: 'Rigorous commitment to code maintainability via unit testing in Jest and pytest, GitHub Actions CI/CD automation, clean documentation, and containerized cloud deployments (Docker, Azure/Linux).' }
      }
    ],

    customProfileText: {
      es: 'Desarrollador Full-Stack y Sociólogo Computacional con más de 10 años de experiencia construyendo aplicaciones web en React (JavaScript/TypeScript) orientadas a la visualización de datos en tiempo real, respaldadas por pipelines de procesamiento y servicios backend en Python. Combina una sólida preparación en ciencias de datos (algoritmos de aglomeración espacial DBSCAN, modelos convolucionales TensorFlow, procesamiento de lenguaje natural spaCy y PySpark) con la arquitectura de microservicios y bases de datos relacionales (PostgreSQL/MySQL) y NoSQL (MongoDB). Fundador de Tejer.RED y ponente internacional en FOSDEM (Bélgica) y ORDEM (2025), donde presentó avances en reducción de nodos para grafos complejos y cartografía geoespacial en tiempo real. Experto en implementación de CI/CD (GitHub Actions), pruebas unitarias automatizadas (Jest, pytest), entornos Linux/Docker y entornos cloud (Azure). Con fluidez total en inglés avanzado para colaborar eficientemente en equipos distribuidos globales, aporta un enfoque pragmático, enfocado en código mantenible y soluciones de alto impacto.',
      en: 'Full-Stack Software Developer and Computational Sociologist with 10+ years of experience building React (JavaScript/TypeScript) web applications tailored for real-time data visualization, backed by Python data processing pipelines and backend services. Blends data science rigor (DBSCAN spatial clustering, TensorFlow CNNs, spaCy NLP, PySpark) with robust backend API design and hybrid database management (PostgreSQL/MySQL SQL and MongoDB NoSQL). Founder of Tejer.RED and international speaker at FOSDEM (Belgium) and ORDEM (2025), presenting breakthroughs in node reduction for complex network graphs and real-time geospatial cartography. Proficient in CI/CD pipeline automation (GitHub Actions), unit testing frameworks (Jest, pytest), Linux/Docker environments, and Azure cloud integration. Fully fluent in advanced English for seamless collaboration across distributed global teams, delivering high-performance, maintainable code with a strong problem-solving mindset.'
    }
  },
  'fullstack-react-python': {
    get company() { return TAILORED_CVS['fullstack-react-python-data-viz'].company; },
    get companySubtitle() { return TAILORED_CVS['fullstack-react-python-data-viz'].companySubtitle; },
    get targetRole() { return TAILORED_CVS['fullstack-react-python-data-viz'].targetRole; },
    get badgeLabel() { return TAILORED_CVS['fullstack-react-python-data-viz'].badgeLabel; },
    get matchSummary() { return TAILORED_CVS['fullstack-react-python-data-viz'].matchSummary; },
    get featuredProjectIds() { return TAILORED_CVS['fullstack-react-python-data-viz'].featuredProjectIds; },
    get featuredTalkIds() { return TAILORED_CVS['fullstack-react-python-data-viz'].featuredTalkIds; },
    get relevantTags() { return TAILORED_CVS['fullstack-react-python-data-viz'].relevantTags; },
    get keywordsList() { return TAILORED_CVS['fullstack-react-python-data-viz'].keywordsList; },
    get requirementsMatchList() { return TAILORED_CVS['fullstack-react-python-data-viz'].requirementsMatchList; },
    get needsAdaptationList() { return TAILORED_CVS['fullstack-react-python-data-viz'].needsAdaptationList; },
    get customProfileText() { return TAILORED_CVS['fullstack-react-python-data-viz'].customProfileText; }
  },
  'frontend-semi-senior-nextjs': {
    company: 'Plataformas Web & Productos Digitales',
    companySubtitle: 'Desarrollo Frontend • Next.js, Integración de APIs & Performance',
    targetRole: {
      es: 'Desarrollador Front End Senior & Arquitecto Next.js',
      en: 'Senior Front End Developer & Next.js Architect'
    },
    badgeLabel: {
      es: 'Perfil Profesional: Desarrollo Frontend & Arquitectura Web Next.js',
      en: 'Professional Profile: Frontend Engineering & Next.js Web Architecture'
    },
    matchSummary: {
      es: 'Ingeniero de software y desarrollador frontend con más de 10 años de trayectoria construyendo productos web y 4+ años en Next.js/React. Especializado en arquitectura de interfaces en producción (App Router, Server/Client Components, TypeScript), integración sólida de servicios REST externos y optimización de rendimiento.',
      en: 'Software engineer and frontend developer with 10+ years of experience building web products and 4+ years in Next.js/React. Specialized in production UI architecture (App Router, Server/Client Components, TypeScript), robust third-party REST service integration, and performance optimization.'
    },
    
    featuredProjectIds: [203, 34, 201, 32],
    featuredTalkIds: [46, 220],
    relevantTags: ['js-react-web', 'desarrollo-web-comercial', 'python-data'],

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
        requirement: { es: 'Desarrollo de aplicaciones web modernas con React, Next.js y TypeScript en producción', en: 'Modern web app development with React, Next.js, and TypeScript in production' },
        match: { es: '✔ Más de 4 años construyendo plataformas en Next.js (App Router, Server/Client Components) y +6 años con React/TypeScript.', en: '✔ 4+ years building platforms in Next.js (App Router, Server/Client Components) and 6+ years with React/TypeScript.' }
      },
      {
        requirement: { es: 'Integración end-to-end de servicios REST y consumo de APIs de terceros', en: 'End-to-end REST service integration and third-party API consumption' },
        match: { es: '✔ Experiencia integrando pasarelas de pago, servicios de mapas, microservicios de datos y autenticación con lógica de retries y manejo de fallas.', en: '✔ Experienced integrating payment gateways, map services, data microservices, and auth with retry logic and failure handling.' }
      },
      {
        requirement: { es: 'Seguridad en aplicaciones web y protección de servicios (OWASP)', en: 'Web application security and service protection (OWASP)' },
        match: { es: '✔ Aplicación de principios de seguridad server-side, cookies de sesión protegidas (HttpOnly/SameSite) y resguardo de variables de entorno.', en: '✔ Applied server-side security principles, protected session cookies (HttpOnly/SameSite), and env variable secret isolation.' }
      },
      {
        requirement: { es: 'Optimización de rendimiento frontend y estándares Core Web Vitals', en: 'Frontend performance optimization and Core Web Vitals standards' },
        match: { es: '✔ Historial demostrable de auditorías Lighthouse 90+, tiempos de carga sub-3s y arquitecturas optimizadas de assets.', en: '✔ Proven track record of 90+ Lighthouse audits, sub-3s load times, and optimized asset architectures.' }
      },
      {
        requirement: { es: 'Flujos de trabajo colaborativos con Git (PRs), SQL y despliegue cloud', en: 'Collaborative Git workflows (PRs), SQL, and cloud deployments' },
        match: { es: '✔ Control de versiones estricto con Pull Requests, consultas de base de datos SQL y gestión de infraestructuras en Linux/AWS.', en: '✔ Strict version control with Pull Requests, SQL database querying, and Linux/AWS infrastructure management.' }
      }
    ],

    needsAdaptationList: [
      {
        title: { es: '1. Arquitectura Frontend Mantenible y Next.js Moderno', en: '1. Maintainable Frontend Architecture & Modern Next.js' },
        detail: { es: 'Diseño de aplicaciones estructuradas combinando Server Components para renderizado eficiente con Client Components interactivos, reduciendo la carga de JavaScript y garantizando escalabilidad a largo plazo.', en: 'Designing structured applications combining Server Components for efficient rendering with interactive Client Components, reducing bundle payload and ensuring long-term scalability.' }
      },
      {
        title: { es: '2. Consumo de Servicios REST y Tolerancia a Fallos', en: '2. REST Service Consumption & Fault Tolerance' },
        detail: { es: 'Experiencia conectando sistemas heterogéneos mediante especificaciones OpenAPI/Swagger, implementando interceptores de red, reintentos automatizados y estados de carga o error elegantes frente a inestabilidad externa.', en: 'Connecting heterogeneous systems via OpenAPI/Swagger specs, implementing network interceptors, automated retries, and graceful fallback states against external instability.' }
      },
      {
        title: { es: '3. Seguridad Server-Side y Rendimiento Sin Concesiones', en: '3. Server-Side Security & Uncompromising Performance' },
        detail: { es: 'Desarrollo orientado a la seguridad desde la arquitectura (validación server-side, prevención XSS/CSRF) junto con un compromiso por métricas web excelentes (Core Web Vitals <3s).', en: 'Security-oriented architectural design (server-side validation, XSS/CSRF prevention) coupled with a commitment to top web metrics (sub-3s Core Web Vitals).' }
      }
    ],

    customProfileText: {
      es: 'Desarrollador Frontend Senior, Sociólogo Computacional y fundador de la iniciativa open-source Tejer.RED, con más de 10 años de experiencia en desarrollo web y más de 4 años especializados en la creación de aplicaciones escalables en producción utilizando React, Next.js (App Router, Server/Client Components) y TypeScript. Ha liderado y desarrollado plataformas web complejas, integrando de punta a punta servicios REST de terceros (especificaciones Swagger/OpenAPI, pasarelas de pagos, mapas interactivos y microservicios de datos en tiempo real) bajo arquitecturas tolerantes a fallas con manejo de reintentos y timeouts. Destaca por su rigor en seguridad web (buenas prácticas OWASP, autenticación server-side, cookies protegidas y aislamiento de secretos), optimización de rendimiento (Core Web Vitals <3s y Lighthouse 90+) y despliegues en infraestructura Linux/AWS. Ponente internacional en FOSDEM (Bélgica) y ORDEM (2025), combina fluidez de comunicación, trabajo en equipo respaldado por revisiones de código en Git (Pull Requests), consultas SQL y una visión estratégica para resolver problemas complejos de información.',
      en: 'Senior Frontend Developer, Computational Sociologist, and founder of the open-source initiative Tejer.RED, with 10+ years of web engineering experience and over 4 years specialized in building scalable production web applications using React, Next.js (App Router, Server/Client Components), and TypeScript. Has led and built complex web platforms, integrating end-to-end third-party REST services (Swagger/OpenAPI specifications, payment gateways, interactive mapping, and real-time data microservices) with fault-tolerant architectures utilizing retry and timeout strategies. Known for rigorous web security standards (OWASP best practices, server-side auth, secure cookies, and environment secret isolation), extreme performance tuning (sub-3s Core Web Vitals, 90+ Lighthouse audits), and Linux/AWS cloud deployments. International speaker at FOSDEM (Belgium) and ORDEM (2025), blending strong technical leadership, collaborative Git code reviews (PRs), SQL database querying, and strategic problem-solving.'
    }
  },
  'frontend-nextjs': {
    get company() { return TAILORED_CVS['frontend-semi-senior-nextjs'].company; },
    get companySubtitle() { return TAILORED_CVS['frontend-semi-senior-nextjs'].companySubtitle; },
    get targetRole() { return TAILORED_CVS['frontend-semi-senior-nextjs'].targetRole; },
    get badgeLabel() { return TAILORED_CVS['frontend-semi-senior-nextjs'].badgeLabel; },
    get matchSummary() { return TAILORED_CVS['frontend-semi-senior-nextjs'].matchSummary; },
    get featuredProjectIds() { return TAILORED_CVS['frontend-semi-senior-nextjs'].featuredProjectIds; },
    get featuredTalkIds() { return TAILORED_CVS['frontend-semi-senior-nextjs'].featuredTalkIds; },
    get relevantTags() { return TAILORED_CVS['frontend-semi-senior-nextjs'].relevantTags; },
    get keywordsList() { return TAILORED_CVS['frontend-semi-senior-nextjs'].keywordsList; },
    get requirementsMatchList() { return TAILORED_CVS['frontend-semi-senior-nextjs'].requirementsMatchList; },
    get needsAdaptationList() { return TAILORED_CVS['frontend-semi-senior-nextjs'].needsAdaptationList; },
    get customProfileText() { return TAILORED_CVS['frontend-semi-senior-nextjs'].customProfileText; }
  }
};

export function getTailoredCv(jobSlug) {
  if (!jobSlug) return null;
  const normalizedSlug = jobSlug.toLowerCase();
  return TAILORED_CVS[normalizedSlug] || null;
}

