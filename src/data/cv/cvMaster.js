// src/data/cv/cvMaster.js
// Fuente única de verdad técnica y curricular para el CV maestro de Javier Abundis.
// Todas las adaptaciones a la medida (tailoredCvData.js) deben referenciar sourceBulletIds de este archivo.

export const cvMaster = {
  contact: {
    fullName: 'Ángel Javier Ramírez Abundis',
    shortName: 'Javier Abundis',
    email: 'abundiscomunicacion@gmail.com',
    phone: '+52 33 34 96 97 01',
    location: {
      es: 'Guadalajara, Jalisco, México',
      en: 'Guadalajara, Jalisco, Mexico'
    },
    website: 'abundis.com.mx',
    websiteUrl: 'https://abundis.com.mx',
    linkedin: 'linkedin.com/in/abundis-sociologia',
    linkedinUrl: 'https://linkedin.com/in/abundis-sociologia',
    github: 'github.com/abundis-rmn2',
    githubUrl: 'https://github.com/abundis-rmn2',
    scholarUrl: 'https://scholar.google.com/citations?user=osg7xZkAAAAJ&hl=en'
  },

  summary: {
    es: 'Desarrollador Full-Stack con más de 10 años de experiencia construyendo sitios, aplicaciones web interactivas y e-commerce en JavaScript, React y PHP/WordPress para agencias digitales y proyectos de impacto cívico. Especialista en visualización de redes (SigmaJS), cartografía geoespacial (GIS/Leaflet) y administración de servidores Linux. Maestro en Estudios de la Comunicación por la Universidad de Guadalajara con perfil en investigación computacional, machine learning y soberanía tecnológica.',
    en: 'Full-Stack Developer with 10+ years of experience engineering websites, interactive web applications, and e-commerce platforms using JavaScript, React, and PHP/WordPress for digital agencies and civic tech initiatives. Specialized in network graph visualization (SigmaJS), geospatial mapping (GIS/Leaflet), and Linux server administration. M.A. in Communication Studies (University of Guadalajara) with a background in computational research, applied machine learning, and tech sovereignty.'
  },

  skills: {
    frontend: {
      category: { es: 'Frontend & UI', en: 'Frontend & UI' },
      items: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS', 'Framer Motion', 'Figma', 'UI Kits & Design Systems']
    },
    backend: {
      category: { es: 'Backend & CMS', en: 'Backend & CMS' },
      items: ['PHP (PHP 8+)', 'WordPress', 'WooCommerce', 'Node.js', 'REST APIs', 'MySQL', 'PostgreSQL']
    },
    dataAi: {
      category: { es: 'Datos, IA & Visualización', en: 'Data, AI & Visualization' },
      items: ['Python', 'Natural Language Processing (NLP)', 'spaCy', 'TensorFlow', 'Convolutional Neural Networks (CNN)', 'TF-IDF & Embeddings', 'DBSCAN Clustering', 'Data Visualization', 'SigmaJS', 'Graphology', 'Leaflet / GIS', 'MindAR']
    },
    devops: {
      category: { es: 'DevOps & Herramientas', en: 'DevOps & Tooling' },
      items: ['GNU/Linux', 'Apache', 'Nginx', 'cPanel', 'Git & GitHub', 'SSH', 'DNS Management', 'AWS', 'Docker']
    }
  },

  // Categorías de skills tradicionales usadas en el layout web
  skillsWeb: [
    {
      category: { es: 'Lenguajes & Desarrollo Web:', en: 'Languages & Web Development:' },
      items: ['Python', 'JavaScript (ES6+)', 'React / Next.js', 'Node.js', 'PHP', 'HTML5 / CSS3']
    },
    {
      category: { es: 'IA, Machine Learning & NLP:', en: 'AI, Machine Learning & NLP:' },
      items: ['TensorFlow', 'Roboflow (CNN / ResNet)', 'spaCy (NLP)', 'TF-IDF & Embeddings', 'DBSCAN Clustering', 'OpenCV']
    },
    {
      category: { es: 'Visualización de Datos & Grafos:', en: 'Data Visualization & Graphs:' },
      items: ['Graphology', 'SigmaJS (ForceAtlas)', 'Leaflet / GIS', 'Realidad Aumentada (MindAR)', 'MySQL / PostgreSQL']
    }
  ],

  experience: [
    {
      id: 'tejer-red',
      company: 'Tejer.RED',
      companyDisplay: {
        es: 'Tejer.RED',
        en: 'Tejer.RED'
      },
      role: {
        es: 'Fundador y Desarrollador de Software Principal',
        en: 'Founder & Lead Software Developer'
      },
      location: {
        es: 'Guadalajara, Jalisco (Remoto)',
        en: 'Guadalajara, Mexico (Remote)'
      },
      start: '2021-10',
      end: 'Present',
      displayPeriod: {
        es: 'Oct 2021 – Presente',
        en: 'Oct 2021 – Present'
      },
      summaryText: {
        es: 'Guadalajara, Jal. (Remoto). Desarrollo de herramientas abiertas contra la desaparición de personas: cartografía geoespacial con React y DBSCAN, plataformas colaborativas (Las Prendas Hablan) y modelos de NLP.',
        en: 'Guadalajara, Mex. (Remote). Engineering open-source tools for humanitarian search: React & DBSCAN geospatial mapping, collaborative crowdsourcing platforms, and NLP correlation systems.'
      },
      bullets: [
        {
          id: 'tejer-ml-search-01',
          es: 'Diseñó y desarrolló herramientas de código abierto para la búsqueda de personas desaparecidas utilizando machine learning, análisis de datos y cartografía interactiva.',
          en: 'Designed and engineered open-source tools for humanitarian search of disappeared persons using machine learning, data analysis, and interactive cartography.',
          tags: ['machine-learning', 'data-analysis', 'open-source', 'humanitarian', 'python', 'react']
        },
        {
          id: 'tejer-carto-01',
          es: 'Desarrolló una plataforma geoespacial en React que geolocaliza 3,000+ reportes de desaparición con clustering DBSCAN para identificar zonas de concentración en radios de 500 y 700 m.',
          en: 'Built a React geospatial platform mapping 3,000+ disappearance reports with DBSCAN clustering to surface concentration hotspots within 500 m and 700 m radii.',
          tags: ['react', 'gis', 'dbscan', 'clustering', 'data-viz', 'javascript']
        },
        {
          id: 'tejer-prendas-01',
          es: 'Construyó la aplicación web interactiva Las Prendas Hablan en React para crowdsourcing e identificación colaborativa de indicios textiles con periodistas y colectivos de búsqueda.',
          en: 'Built Las Prendas Hablan interactive React web application for crowdsourced textile evidence identification in collaboration with journalists and search collectives.',
          tags: ['react', 'javascript', 'crowdsourcing', 'web-app', 'ux-ui']
        },
        {
          id: 'tejer-nlp-01',
          es: 'Implementó un sistema de correlación semántica para cruce de descripciones textuales y registros forenses utilizando machine learning, TF-IDF, embeddings y Procesamiento de Lenguaje Natural (NLP).',
          en: 'Implemented semantic correlation system matching forensic records and text descriptions using machine learning, TF-IDF, embeddings, and Natural Language Processing (NLP).',
          tags: ['nlp', 'python', 'embeddings', 'tf-idf', 'machine-learning']
        },
        {
          id: 'tejer-bot-01',
          es: 'Desarrolló bots y pipelines de extracción de datos en Python almacenando información estructurada en bases de datos relacionales MySQL.',
          en: 'Engineered Python data mining bots automating extraction and storing structured relational data in MySQL databases.',
          tags: ['python', 'mysql', 'sql', 'data-pipeline']
        },
        {
          id: 'tejer-sec-01',
          es: 'Diseñó pipelines de ingesta e integración con validación criptográfica, sanitización estricta, anonimización y hashing de datos sensibles para garantizar privacidad y soberanía de datos.',
          en: 'Architected data ingestion and integration pipelines featuring cryptographic validation, strict sanitization, anonymization, and hashing of sensitive data to guarantee privacy and data sovereignty.',
          tags: ['security', 'privacy', 'hashing', 'data-pipelines', 'sanitization']
        },
        {
          id: 'tejer-ai-01',
          es: 'Desarrolló interfaces asistidas por IA y flujos con LLMs para herramientas de búsqueda e identificación integrando esquemas estructurados de consulta, extracción con embeddings y componentes en React y TypeScript.',
          en: 'Engineered AI-assisted interfaces and LLM workflows for search and identification tools integrating structured query schemas, embedding retrieval, and React/TypeScript components.',
          tags: ['ai-interfaces', 'llm', 'generative-ui', 'typescript', 'react', 'embeddings']
        }
      ]
    },
    {
      id: 'balam-studio',
      company: 'Balam Studio Creative Media',
      companyDisplay: {
        es: 'Balam Studio Creative Media',
        en: 'Balam Studio Creative Media'
      },
      role: {
        es: 'Desarrollador Web',
        en: 'Web Developer'
      },
      location: {
        es: 'Zapopan, Jalisco (Remoto)',
        en: 'Zapopan, Jalisco, Mexico (Remote)'
      },
      start: '2021-10',
      end: '2024-10',
      displayPeriod: {
        es: 'Oct 2021 – Oct 2024',
        en: 'Oct 2021 – Oct 2024'
      },
      summaryText: {
        es: 'Zapopan, Jal. (Remoto). Desarrollo avanzado de sitios en WordPress y e-commerce con WooCommerce (temas y plugins a la medida), además de soluciones en React, JS y PHP. Implementación de servidores GNU/Linux y Apache.',
        en: 'Zapopan, Mex. (Remote). Advanced WordPress and WooCommerce e-commerce development (custom themes/plugins), alongside custom React, JS, and PHP solutions. GNU/Linux/Apache server deployments.'
      },
      bullets: [
        {
          id: 'balam-wp-01',
          es: 'Desarrolló y personalizó sitios en WordPress y e-commerce con WooCommerce implementando temas y plugins a la medida en PHP y MySQL.',
          en: 'Developed and customized WordPress and WooCommerce e-commerce platforms building custom themes and plugins in PHP and MySQL.',
          tags: ['wordpress', 'woocommerce', 'php', 'mysql', 'ecommerce']
        },
        {
          id: 'balam-react-01',
          es: 'Construyó soluciones web frontend interactivas con React y JavaScript (ES6+) consumiendo REST APIs.',
          en: 'Built interactive frontend web solutions with React and JavaScript (ES6+) consuming REST APIs.',
          tags: ['react', 'javascript', 'rest-api', 'frontend']
        },
        {
          id: 'balam-infra-01',
          es: 'Administró y desplegó servidores físicos y virtuales en entornos GNU/Linux y Apache para portales corporativos.',
          en: 'Administered and deployed physical and virtual servers on GNU/Linux and Apache environments for corporate portals.',
          tags: ['linux', 'apache', 'servers', 'devops', 'ssh']
        }
      ]
    },
    {
      id: 'udg-investigacion',
      company: 'Universidad de Guadalajara',
      companyDisplay: {
        es: 'Universidad de Guadalajara (Investigador CONACYT)',
        en: 'University of Guadalajara (CONACYT Research Fellow)'
      },
      role: {
        es: 'Investigador en Machine Learning y Análisis de Datos',
        en: 'Applied Scientist & Machine Learning Researcher'
      },
      location: {
        es: 'Guadalajara, Jalisco, México',
        en: 'Guadalajara, Jalisco, Mexico'
      },
      start: '2020-08',
      end: '2023-09',
      displayPeriod: {
        es: 'Ago 2020 – Sep 2023',
        en: 'Aug 2020 – Sep 2023'
      },
      summaryText: {
        es: 'Guadalajara, Jal. Investigación avanzada en machine learning (CNNs en TensorFlow, spaCy NLP), estadística aplicada y grafos relacionales complejas con Python y Pandas.',
        en: 'Guadalajara, Mex. Advanced research in applied machine learning (CNNs in TensorFlow, spaCy NLP), statistics, and complex relational graphs using Python and Pandas.'
      },
      bullets: [
        {
          id: 'udg-ml-01',
          es: 'Desarrolló y validó modelos de Machine Learning (CNN ResNet en TensorFlow y NLP con spaCy) para clasificación visual y extracción de entidades léxicas en corpus no estructurados.',
          en: 'Engineered and validated Machine Learning models (CNN ResNet in TensorFlow and spaCy NLP) for visual classification and named entity extraction from unstructured corpora.',
          tags: ['machine-learning', 'tensorflow', 'cnn', 'spacy', 'nlp', 'python']
        },
        {
          id: 'udg-stats-01',
          es: 'Diseñó marcos de experimentación estadística y análisis multivariable con Python y Pandas para modelado de datos y análisis de grafos hipertextuales.',
          en: 'Designed statistical experimentation frameworks and multivariate analysis using Python and Pandas for data modeling and hypertextual graph analysis.',
          tags: ['statistics', 'pandas', 'python', 'experimentation', 'data-modeling']
        },
        {
          id: 'udg-eval-01',
          es: 'Evaluó inferencias de modelos de IA, identificando sesgos metodológicos y discrepancias cuantitativas, publicando hallazgos en conferencias científicas internacionales con revisión por pares.',
          en: 'Evaluated AI model inferences, identifying methodological flaws and quantitative discrepancies, publishing findings in peer-reviewed international conferences.',
          tags: ['model-evaluation', 'benchmarking', 'peer-review', 'reproducibility']
        }
      ]
    },
    {
      id: 'uzu-digital',
      company: 'Uzu Digital / Nauka',
      companyDisplay: {
        es: 'Uzu Digital / Nauka',
        en: 'Uzu Digital / Nauka'
      },
      role: {
        es: 'Desarrollador de Sitios Web',
        en: 'Web Developer'
      },
      location: {
        es: 'Guadalajara, Jalisco',
        en: 'Guadalajara, Jalisco, Mexico'
      },
      start: '2017-10',
      end: '2020-11',
      displayPeriod: {
        es: 'Oct 2017 – Nov 2020',
        en: 'Oct 2017 – Nov 2020'
      },
      summaryText: {
        es: 'Guadalajara, Jal. Construcción de sitios corporativos en WordPress y tiendas con WooCommerce (desarrollo de adaptaciones y plugins a la medida), así como programación en PHP/MySQL. Servidores Linux/Apache.',
        en: 'Guadalajara, Mex. Built corporate websites in WordPress and e-commerce stores in WooCommerce (custom adaptations and plugins), alongside PHP/MySQL programming. Linux/Apache server administration.'
      },
      bullets: [
        {
          id: 'uzu-wp-01',
          es: 'Programó sitios corporativos y tiendas de comercio electrónico en WordPress/WooCommerce desarrollando extensiones personalizadas en PHP y MySQL.',
          en: 'Programmed corporate websites and e-commerce stores in WordPress/WooCommerce with custom PHP and MySQL extensions.',
          tags: ['wordpress', 'woocommerce', 'php', 'mysql', 'ecommerce']
        },
        {
          id: 'uzu-js-01',
          es: 'Implementó interfaces dinámicas e integraciones de datos con JavaScript, JSON y bases de datos relacionales.',
          en: 'Implemented dynamic interfaces and data integrations using JavaScript, JSON, and relational databases.',
          tags: ['javascript', 'json', 'mysql', 'frontend']
        },
        {
          id: 'uzu-infra-01',
          es: 'Configuró y mantuvo servidores web GNU/Linux y Apache garantizando disponibilidad continua.',
          en: 'Configured and maintained GNU/Linux and Apache web servers ensuring continuous uptime.',
          tags: ['linux', 'apache', 'servers', 'dns']
        }
      ]
    },
    {
      id: 'mondo-marketing',
      company: 'Mondo Marketing',
      companyDisplay: {
        es: 'MONDO MARKETING (問答マーケティング)',
        en: 'Mondo Marketing'
      },
      companyOriginal: 'MONDO MARKETING (問答マーケティング)',
      role: {
        es: 'Analista de Datos (Prácticas Internacionales)',
        en: 'Data Analyst Intern'
      },
      location: {
        es: 'Nagoya, Prefectura de Aichi, Japón',
        en: 'Nagoya, Aichi Prefecture, Japan'
      },
      start: '2018-08',
      end: '2018-12',
      displayPeriod: {
        es: 'Ago 2018 – Dic 2018',
        en: 'Aug 2018 – Dec 2018'
      },
      summaryText: {
        es: 'Nagoya, Prefectura de Aichi, Japón. Análisis de datos de rendimiento de campañas digitales, procesamiento de métricas relacionales de redes sociales y elaboración de informes estratégicos de comunicación digital.',
        en: 'Nagoya, Aichi Prefecture, Japan. Data analysis of digital marketing campaign metrics, relational social media analytics, and digital communication reporting.'
      },
      bullets: [
        {
          id: 'mondo-data-01',
          es: 'Analizó métricas de rendimiento de campañas de marketing digital y procesamiento de datos relacionales de redes sociales.',
          en: 'Analyzed performance metrics for digital marketing campaigns and processed relational social media data.',
          tags: ['data-analysis', 'analytics', 'marketing', 'metrics']
        },
        {
          id: 'mondo-reports-01',
          es: 'Elaboró informes estratégicos y tableros de visualización para la toma de decisiones de comunicación digital.',
          en: 'Prepared strategic reports and visualization dashboards for digital communication decision-making.',
          tags: ['reporting', 'data-viz', 'communication']
        }
      ]
    },
    {
      id: 'nuvi-global',
      company: 'Nuvi Global',
      companyDisplay: {
        es: 'Nuvi Global',
        en: 'Nuvi Global'
      },
      role: {
        es: 'Desarrollador Web & Creador de Contenidos',
        en: 'Web & Content Developer'
      },
      location: {
        es: 'Zapopan, Jalisco',
        en: 'Zapopan, Jalisco, Mexico'
      },
      start: '2017-02',
      end: '2017-10',
      displayPeriod: {
        es: 'Feb 2017 – Oct 2017',
        en: 'Feb 2017 – Oct 2017'
      },
      summaryText: {
        es: 'Zapopan, Jal. Maquetación y programación del nuevo portal institucional, desarrollo de estrategias digitales de posicionamiento de marca y producción de contenidos audiovisuales.',
        en: 'Zapopan, Mex. Design and development of the new institutional portal, digital brand positioning strategies, and audiovisual content production.'
      },
      bullets: [
        {
          id: 'nuvi-web-01',
          es: 'Maquetó y programó el nuevo portal institucional de la compañía con diseño responsivo optimizado.',
          en: 'Designed and developed the company’s new responsive institutional portal with optimized performance.',
          tags: ['web-development', 'html-css', 'php', 'responsive']
        },
        {
          id: 'nuvi-content-01',
          es: 'Diseñó estrategias digitales de posicionamiento de marca y produjo contenidos multimedia y transmisiones en vivo.',
          en: 'Designed digital brand positioning strategies and produced multimedia content and live streaming events.',
          tags: ['digital-strategy', 'multimedia', 'streaming']
        }
      ]
    },
    {
      id: 'atama-creativa',
      company: 'Atama Estrategia Creativa',
      companyDisplay: {
        es: 'Atama Estrategia Creativa',
        en: 'Atama Estrategia Creativa'
      },
      role: {
        es: 'Content Developer & Consultor de Comunicación',
        en: 'Content Developer & Digital Consultant'
      },
      location: {
        es: 'Zapopan, Jalisco',
        en: 'Zapopan, Jalisco, Mexico'
      },
      start: '2015-10',
      end: '2016-10',
      displayPeriod: {
        es: 'Oct 2015 – Oct 2016',
        en: 'Oct 2015 – Oct 2016'
      },
      summaryText: {
        es: 'Zapopan, Jal. Diseño de identidad visual y comunicación digital para #GobiernoAbiertoJal (ITEI Jalisco / OGP México), la plataforma de denuncia #Protocolo409 y estrategia digital para regidores de Zapopan.',
        en: 'Zapopan, Mex. Visual identity and digital communication design for #GobiernoAbiertoJal (ITEI Jalisco / OGP Mexico), #Protocolo409 citizen platform, and public sector media strategy.'
      },
      bullets: [
        {
          id: 'atama-gov-01',
          es: 'Diseñó la identidad visual y comunicación digital para #GobiernoAbiertoJal (ITEI Jalisco / OGP México) y la plataforma #Protocolo409.',
          en: 'Designed visual identity and digital communication for #GobiernoAbiertoJal (ITEI Jalisco / OGP Mexico) and the #Protocolo409 citizen platform.',
          tags: ['open-data', 'visual-identity', 'communication', 'ux-ui']
        },
        {
          id: 'atama-media-01',
          es: 'Coordinó producción audiovisual y campañas en redes sociales para dependencias del sector público de Jalisco.',
          en: 'Coordinated audiovisual production and social media campaigns for public sector entities in Jalisco.',
          tags: ['audiovisual', 'social-media', 'campaigns']
        }
      ]
    },
    {
      id: 'web-gdl',
      company: 'Web-Gdl',
      companyDisplay: {
        es: 'Web-Gdl',
        en: 'Web-Gdl'
      },
      role: {
        es: 'Diseñador y Desarrollador Web',
        en: 'Web Designer & Developer'
      },
      location: {
        es: 'Guadalajara, Jalisco',
        en: 'Guadalajara, Jalisco, Mexico'
      },
      start: '2013-06',
      end: '2015-10',
      displayPeriod: {
        es: 'Jun 2013 – Oct 2015',
        en: 'Jun 2013 – Oct 2015'
      },
      summaryText: {
        es: 'Guadalajara, Jal. Implementación de portales corporativos en WordPress y carritos WooCommerce con temas a la medida, programación en PHP + MySQL/JS y optimización SEO orgánico.',
        en: 'Guadalajara, Mex. Implemented corporate WordPress portals and WooCommerce shopping carts with custom themes, alongside PHP + MySQL/JS web programming and organic SEO.'
      },
      bullets: [
        {
          id: 'webgdl-sites-01',
          es: 'Desarrolló sitios corporativos y tiendas e-commerce en WordPress con PHP, MySQL, CSS3 y JavaScript.',
          en: 'Built corporate websites and e-commerce stores in WordPress with PHP, MySQL, CSS3, and JavaScript.',
          tags: ['wordpress', 'php', 'mysql', 'ecommerce', 'javascript']
        },
        {
          id: 'webgdl-seo-01',
          es: 'Optimizó velocidad de carga, compatibilidad cross-browser y posicionamiento orgánico en motores de búsqueda (SEO).',
          en: 'Optimized page load speed, cross-browser compatibility, and organic search engine optimization (SEO).',
          tags: ['seo', 'performance', 'optimization']
        }
      ]
    },
    {
      id: 'centura-dadicas',
      company: 'Centura Building Systems / Dadicas Granite',
      companyDisplay: {
        es: 'Centura Building Systems (Canadá) & Dadicas (EE. UU.)',
        en: 'Centura Building Systems (Canada) & Dadicas (USA)'
      },
      role: {
        es: 'Asistente de Producción & Operaciones de Campo',
        en: 'Production & Field Operations Assistant'
      },
      location: {
        es: 'Vancouver, Canadá / San Diego, EE. UU.',
        en: 'Vancouver, Canada / San Diego, USA'
      },
      start: '2022-02',
      end: '2024-11',
      displayPeriod: {
        es: '2022 – 2024',
        en: '2022 – 2024'
      },
      isNonTech: true,
      summaryText: {
        es: 'Vancouver, Canadá & San Diego, EE. UU. Montaje de estructuras metálicas, preparación de superficies, logística de transporte pesado y operación de maquinaria (montacargas) en entornos transnacionales.',
        en: 'Vancouver, Canada & San Diego, US. Structural assembly, surface finishing, heavy logistics, and industrial machinery operation (forklift) in international environments.'
      },
      bullets: [
        {
          id: 'centura-ops-01',
          es: 'Montaje de estructuras metálicas, preparación de superficies, logística de transporte pesado y operación de maquinaria en entornos industriales.',
          en: 'Structural assembly, surface preparation, heavy transport logistics, and machinery operation in industrial environments.',
          tags: ['operations', 'logistics', 'assembly']
        }
      ]
    }
  ],

  education: [
    {
      id: 'maestria-udg',
      degree: {
        es: 'Maestría en Estudios de la Comunicación (MA)',
        en: 'Master of Arts in Communication Studies'
      },
      institution: 'Universidad de Guadalajara',
      location: {
        es: 'Guadalajara, Jalisco, México',
        en: 'Guadalajara, Jalisco, Mexico'
      },
      start: '2020-08',
      end: '2022-08',
      displayPeriod: '2020 – 2022',
      subtext: {
        es: 'Universidad de Guadalajara • Becario CONACYT',
        en: 'University of Guadalajara • CONACYT Scholar'
      },
      details: {
        es: 'Graduado con mención honorífica. Tesis en minería de datos, modelos de machine learning (CNN, spaCy NLP) y grafos de red (SigmaJS, Graphology). Becario CONACYT.',
        en: 'Graduated with honors. Thesis on data mining, machine learning models (CNN, spaCy NLP), and network graphs (SigmaJS, Graphology). CONACYT Scholar.'
      }
    },
    {
      id: 'licenciatura-udg',
      degree: {
        es: 'Licenciatura en Sociología (BA)',
        en: 'Bachelor in Sociology'
      },
      institution: 'Universidad de Guadalajara',
      location: {
        es: 'Guadalajara, Jalisco, México',
        en: 'Guadalajara, Jalisco, Mexico'
      },
      start: '2012-08',
      end: '2016-12',
      displayPeriod: '2012 – 2016',
      subtext: {
        es: 'Universidad de Guadalajara • Titulado con Monografía e Investigación',
        en: 'University of Guadalajara • Graduated with Monograph & Research'
      },
      details: {
        es: 'Titulado con monografía e investigación sociohistórica. Desarrollo del software Amoxeh en PHP/MySQL para análisis de discurso de corpus periodísticos.',
        en: 'Graduated with sociohistorical research thesis. Developed Amoxeh PHP/MySQL software for newspaper corpus discourse analysis.'
      }
    }
  ],

  keyProjects: [
    {
      id: 203,
      slug: 'cartografia-semantica-desapariciones',
      title: {
        es: 'Cartografía Semántica de Desapariciones',
        en: 'Semantic Cartography of Disappearances'
      },
      tech: ['React', 'Leaflet', 'DBSCAN', 'Python', 'GIS'],
      description: {
        es: 'Plataforma geoespacial interactiva en React que geolocaliza más de 3,000 registros con clustering DBSCAN para identificar zonas de concentración en radios de 500 y 700 m.',
        en: 'Interactive React geospatial platform mapping 3,000+ records with DBSCAN clustering to identify concentration hotspots within 500 m and 700 m radii.'
      },
      url: 'https://cartografia.tejer.red/'
    },
    {
      id: 202,
      slug: 'las-prendas-hablan',
      title: {
        es: 'Las Prendas Hablan',
        en: 'The Garments Speak'
      },
      tech: ['React', 'Next.js', 'Figma', 'UI Kit'],
      description: {
        es: 'Plataforma web colaborativa para la identificación de indicios textiles mediante crowdsourcing, desarrollada junto a periodistas de investigación.',
        en: 'Collaborative web platform for crowdsourced textile evidence identification developed with investigative journalists.'
      },
      url: 'https://lasprendashablan.tejer.red/'
    },
    {
      id: 34,
      slug: 'interfaz-visualizacion-datos-dvi',
      title: {
        es: 'Interfaz DVI (Data Visualization Interface)',
        en: 'DVI (Data Visualization Interface)'
      },
      tech: ['JavaScript', 'SigmaJS', 'Graphology', 'ForceAtlas', 'PHP', 'MySQL'],
      description: {
        es: 'Renderizado interactivo en tiempo real de redes relacionales complejas y análisis de grafos hipertextuales.',
        en: 'Real-time interactive rendering of complex relational graphs and hypertextual network analysis.'
      },
      url: 'https://freight-graffiti.abundis.com.mx/hashtags'
    },
    {
      id: 35,
      slug: 'recorriendo-el-trazo',
      title: {
        es: 'Recorriendo el tRAzo (Data Explorer SVG & D3)',
        en: 'Recorriendo el tRAzo (SVG & D3 Data Explorer)'
      },
      tech: ['JavaScript', 'TypeScript', 'SVG', 'D3.js', 'Interactive Maps'],
      description: {
        es: 'Explorador interactivo de datos y cartografía vectorial SVG/D3 con líneas temporales conectadas, zoom, tooltips dinámicos y navegación guiada de datos.',
        en: 'Interactive data explorer and vectorial SVG/D3 cartography featuring linked timelines, zooming, dynamic tooltips, and guided narrative data exploration.'
      },
      url: 'https://rmn2.com/graffiti-gdl/recorriendo-el-trazo/'
    },
    {
      id: 205,
      slug: 'bitacora-busqueda-wordpress-plugin',
      title: {
        es: 'Bitácora de Búsqueda (WordPress Plugin)',
        en: 'Search Logbook (WordPress Plugin)'
      },
      tech: ['WordPress', 'PHP', 'MySQL', 'REST API'],
      description: {
        es: 'Plugin modular para WordPress diseñado para documentar zonas de búsqueda, indicios y diarios de campo con taxonomías personalizadas.',
        en: 'Custom WordPress plugin engineered to document search zones, evidence, and field logs with custom taxonomies.'
      },
      url: 'https://github.com/tejer-red/BitacoraBusqueda_WP'
    },
    {
      id: 32,
      slug: 'amoxeh-plugin-wordpress',
      title: {
        es: 'Amoxeh – Plugin de WordPress',
        en: 'Amoxeh – WordPress Plugin'
      },
      tech: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      description: {
        es: 'Plugin modular en PHP/MySQL para la gestión y análisis hipertextual de notas periodísticas con navegación estructurada y mapas cartográficos.',
        en: 'Custom WordPress plugin in PHP/MySQL for journalistic corpus management with structured navigation and cartographic mapping.'
      },
      url: 'https://github.com/abundis-rmn2'
    },
    {
      id: 201,
      slug: 'catalogo-indicios-rancho-izaguirre',
      title: {
        es: 'Catálogo de Indicios - Rancho Izaguirre',
        en: 'Indicia Catalog - Rancho Izaguirre'
      },
      tech: ['React', 'JavaScript', 'Python', 'MySQL'],
      description: {
        es: 'Base de datos interactiva y buscador web para agilizar la identificación de prendas con filtros estructurados por tipo, marca, color y talla.',
        en: 'Interactive web database and search tool accelerating evidence identification with structured multi-attribute filtering.'
      },
      url: 'https://rancho-izaguirre.abundis.com.mx/'
    },
    {
      id: 38,
      slug: 'modelo-deteccion-graffiti',
      title: {
        es: 'Modelo de Detección de Estilos Visuales',
        en: 'Visual Style Detection Model'
      },
      tech: ['Python', 'TensorFlow', 'CNN', 'SQL'],
      description: {
        es: 'Modelo de Deep Learning con redes convolucionales (CNN) en TensorFlow para detección y clasificación automatizada de estilos visuales.',
        en: 'Deep learning convolutional neural network (CNN) in TensorFlow for automated detection and visual style classification.'
      },
      url: 'https://github.com/abundis-rmn2/Graffiti_Detection_OD_TensorFlow'
    },
    {
      id: 40,
      slug: 'modelo-reconocimiento-entidades-nombradas-graffiti-hashtags',
      title: {
        es: 'Modelo de Reconocimiento de Entidades (NER)',
        en: 'Named Entity Recognition (NER) Model'
      },
      tech: ['Python', 'spaCy', 'NLP', 'Machine Learning'],
      description: {
        es: 'Pipeline de Procesamiento de Lenguaje Natural (NLP) con spaCy para extracción y clasificación de entidades léxicas en corpus textuales.',
        en: 'Natural Language Processing (NLP) pipeline with spaCy for extracting and classifying lexical entities across textual corpora.'
      },
      url: 'https://github.com/abundis-rmn2/Hashtag_Custom_NER_spaCy'
    },
    {
      id: 204,
      slug: 'sistema-correlacion-tatuajes',
      title: {
        es: 'Sistema de Correlación Semántica (PFSI – REPD)',
        en: 'Semantic Correlation System (PFSI – REPD)'
      },
      tech: ['Python', 'NLP', 'TF-IDF', 'Embeddings'],
      description: {
        es: 'Sistema de cruce semántico entre registros forenses y descripciones textuales mediante vectorización TF-IDF y embeddings de lenguaje natural.',
        en: 'Semantic correlation system matching forensic records with text descriptions via TF-IDF vectorization and NLP embeddings.'
      },
      url: 'https://tatuajes.tejer.red/'
    },
    {
      id: 206,
      slug: 'id-monarca-sistema-identificacion-ia',
      title: {
        es: 'ID-Monarca (Sistema de Identificación Forense & IA)',
        en: 'ID-Monarca (Forensic AI & Identification System)'
      },
      tech: ['Python', 'Machine Learning', 'Computer Vision', 'Embeddings', 'Pandas'],
      description: {
        es: 'Sistema de visión computacional y modelos de inferencia para la identificación y correlación forense de indicios y fichas de personas desaparecidas en Tejer.RED.',
        en: 'Computer vision and inference pipeline for forensic evidence correlation and missing persons identification within Tejer.RED.'
      },
      url: 'https://id-monarca.tejer.red/'
    }
  ],

  publicationsAndTalks: [
    {
      id: 46,
      type: 'talk',
      event: 'FOSDEM 2024',
      location: 'Brussels, Belgium',
      title: 'Node Reduction through Artificial Intelligence Inferences using Graphology and SigmaJS',
      year: '2024',
      url: 'https://archive.fosdem.org/2024/schedule/event/fosdem-2024-3152-node-reduction-through-artificial-intelligence-inferences-using-graphology-and-sigmajs-a-case-study-on-hypertextual-conversations-in-freight-train-graffiti-in-the-north-american-region-/'
    },
    {
      id: 220,
      type: 'talk',
      event: 'ORDEM 2025 / Open Research Devroom',
      location: 'Online',
      title: 'Cartography of the Missing: Mapping Forced Disappearances in Jalisco',
      year: '2025',
      url: 'https://doi.org/10.5281/zenodo.15013120'
    },
    {
      id: 80,
      type: 'paper',
      title: 'Mining, Shaping, Visualizing, and Interpreting Instagram Hypertextual Networks of Freight Train Graffiti Communalities in North America Using Machine Learning Custom Models and Graphology',
      venue: 'Peer-Reviewed Conference Paper',
      location: 'Lisbon, Portugal',
      year: '2023',
      url: 'https://abundis.com.mx/es/articulo/mineria-estructuracion-visualizacion-e-interpretacion-de-redes-hipertextuales-de-instagram-sobre-graffiti-en-trenes-en-norteamerica'
    },
    {
      id: 221,
      type: 'talk',
      event: '5to Encuentro de Humanidades Digitales',
      location: 'Guadalajara, México',
      title: 'Demo de la herramienta Amoxeh: Minería de texto y análisis de corpus periodístico con PHP y MySQL',
      year: '2021',
      url: 'https://github.com/abundis-rmn2/amoxeh'
    },
    {
      id: 210,
      type: 'paper',
      title: 'Mapping the Humanitarian Crisis of Forced Disappearances in Jalisco: Patterns, Technology, and Collective Action',
      venue: 'Working Paper / Tejer.RED',
      location: 'Guadalajara, México',
      year: '2024',
      url: 'https://datades.abundis.com.mx/workingpaper.pdf'
    }
  ],

  mediaCoverage: [
    {
      id: 'wired',
      outlet: 'WIRED en Español',
      year: '2025',
      title: {
        es: 'Activista crea un sitio web para identificar prendas en Jalisco (Catálogo de Indicios)',
        en: 'Activist builds open platform to identify clothing in Jalisco (Indicia Catalog)'
      },
      url: 'https://es.wired.com/articulos/activista-crea-un-sitio-web-para-identificar-las-prendas-halladas-en-el-rancho-izaguirre-de-teuchitlan'
    },
    {
      id: 'knight-center',
      outlet: 'LatAm Journalism Review (Knight Center / UT Austin)',
      year: '2026',
      title: {
        es: 'Las Prendas Hablan: Crowdsourcing y código abierto para identificar indicios',
        en: 'From hats to pants: Open-source crowdsourcing and forensic evidence investigation'
      },
      url: 'https://latamjournalismreview.org/articles/from-hats-to-pants-clothing-discarded-at-a-cartel-camp-becomes-clues-to-the-disappeared/'
    },
    {
      id: 'telemundo',
      outlet: 'Noticias Telemundo',
      year: '2025',
      title: {
        es: 'Reportaje internacional sobre base de datos forense de código abierto (Tejer.RED)',
        en: 'International broadcast feature on open-source forensic database platform (Tejer.RED)'
      },
      url: 'https://www.youtube.com/watch?v=rlkqFc810iU'
    }
  ]
};

export default cvMaster;
