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
  }
};

export function getTailoredCv(jobSlug) {
  if (!jobSlug) return null;
  const normalizedSlug = jobSlug.toLowerCase();
  return TAILORED_CVS[normalizedSlug] || null;
}

