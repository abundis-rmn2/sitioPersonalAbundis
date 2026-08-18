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
  }
};

export function getTailoredCv(jobSlug) {
  return TAILORED_CVS[jobSlug] || null;
}
