'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaFilePdf, 
  FaArrowLeft, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGlobe, 
  FaLinkedin, 
  FaGithub, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaBookReader, 
  FaNewspaper, 
  FaChalkboardTeacher, 
  FaExternalLinkAlt, 
  FaPrint,
  FaTags,
  FaUserAlt,
  FaTrophy,
  FaFileAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { bioData, cvPosts, TAG_SCHEMA } from '../data/cvData';

export default function CVPageClient({ lang = 'es', tailoredData = null, jobSlug = null }) {
  const [cvMode, setCvMode] = useState('summary'); // 'summary' (Resumido 3 logros) | 'full' (CV Completo)
  const bio = bioData[lang] || bioData.es;
  const isEs = lang === 'es';

  const langPath = jobSlug ? `/${lang}/cv/${jobSlug}` : `/${lang}/cv`;
  const otherLangPath = jobSlug ? (isEs ? `/en/cv/${jobSlug}` : `/es/cv/${jobSlug}`) : (isEs ? '/en/cv' : '/es/cv');

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Filtrar y agrupar posts por tipo/sección para la vista completa
  const theses = cvPosts.filter(p => p.type === 'thesis');
  const codeProjects = cvPosts.filter(p => p.type === 'codeProject' || p.type === 'multimedia' || p.type === 'multimediaProject');
  const academicPapers = cvPosts.filter(p => p.type === 'articles' || p.type === 'paper');
  const talks = cvPosts.filter(p => p.type === 'talks' || p.type === 'conference');
  const media = cvPosts.filter(p => p.type === 'mediaAppearance');

  return (
    <div className="cv-page-wrapper">
      {/* Barra Superior Fija de Herramientas (Solo Pantalla) */}
      <header className="cv-toolbar print-hide">
        <div className="cv-toolbar-container">
          <Link href={`/${lang}`} className="cv-btn cv-btn-secondary">
            <FaArrowLeft style={{ marginRight: '6px' }} />
            {isEs ? 'Volver al Portafolio' : 'Back to Portfolio'}
          </Link>
          
          <div className="cv-toolbar-actions">
            {/* Selector de Modo: CV Resumido vs CV Completo */}
            <div className="cv-mode-selector">
              <button 
                type="button"
                onClick={() => setCvMode('summary')}
                className={`cv-mode-btn ${cvMode === 'summary' ? 'active' : ''}`}
                title={isEs ? 'Ver CV Resumido (3 Logros Clave)' : 'View Executive Summary (3 Key Wins)'}
              >
                <FaTrophy style={{ marginRight: '6px' }} />
                {isEs ? 'CV Resumido' : 'Executive Resume'}
              </button>
              <button 
                type="button"
                onClick={() => setCvMode('full')}
                className={`cv-mode-btn ${cvMode === 'full' ? 'active' : ''}`}
                title={isEs ? 'Ver CV Completo Maestro' : 'View Complete Master CV'}
              >
                <FaFileAlt style={{ marginRight: '6px' }} />
                {isEs ? 'CV Completo' : 'Full Master CV'}
              </button>
            </div>

            <div className="cv-lang-switch">
              <Link href={jobSlug ? `/es/cv/${jobSlug}` : '/es/cv'} className={isEs ? 'active-lang' : ''}>ES</Link>
              <span className="divider">|</span>
              <Link href={jobSlug ? `/en/cv/${jobSlug}` : '/en/cv'} className={!isEs ? 'active-lang' : ''}>EN</Link>
            </div>

            <button onClick={handlePrint} className="cv-btn cv-btn-primary">
              <FaPrint style={{ marginRight: '8px' }} />
              {isEs ? 'Imprimir / Guardar PDF' : 'Print / Save PDF'}
            </button>
          </div>
        </div>
      </header>

      {/* Documento CV Principal (Estilo Papel Limpio) */}
      <main className="cv-document">
        
        {/* Fondo decorativo SVG con filigrana de Grafo / Mesh */}
        <div className="cv-graph-mesh-bg" aria-hidden="true">
          <svg viewBox="0 0 800 400" width="100%" height="100%" fill="none">
            <path d="M 50,50 L 200,100 L 350,40 L 500,120 L 650,60 L 750,150" stroke="#e60000" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
            <path d="M 100,200 L 250,150 L 400,220 L 600,180 L 700,280" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" opacity="0.12" />
            <path d="M 200,100 L 250,150 M 350,40 L 400,220 M 500,120 L 600,180" stroke="#e60000" strokeWidth="1" opacity="0.15" />
            <circle cx="50" cy="50" r="4" fill="#e60000" opacity="0.35" />
            <circle cx="200" cy="100" r="5" fill="#111111" opacity="0.25" />
            <circle cx="350" cy="40" r="6" fill="#e60000" opacity="0.45" />
            <circle cx="500" cy="120" r="4" fill="#111111" opacity="0.25" />
            <circle cx="650" cy="60" r="5" fill="#e60000" opacity="0.35" />
            <circle cx="250" cy="150" r="4" fill="#e60000" opacity="0.35" />
            <circle cx="400" cy="220" r="5" fill="#111111" opacity="0.25" />
          </svg>
        </div>



        {/* Header del CV: Fotografía + Datos de Contacto */}
        <section className="cv-header">
          <div className="cv-header-main-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1.8rem', flexWrap: 'wrap', width: '100%', marginBottom: '1.5rem' }}>
            <div className="cv-portrait-wrapper" style={{ flexShrink: 0 }}>
              <img 
                src="/javier-abundis.webp" 
                alt={bio.name}
                style={{
                  width: '115px',
                  height: '115px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid var(--color-principal)',
                  boxShadow: '0 6px 20px rgba(230, 0, 0, 0.15)',
                  display: 'block'
                }}
              />
            </div>

            <div className="cv-header-title" style={{ flex: '1 1 260px' }}>
              <h1 style={{ margin: 0 }}>{bio.name}</h1>
              <h2 className="cv-subtitle">
                {isEs 
                  ? 'Sociólogo • Desarrollador Full-Stack' 
                  : 'Sociologist • Full-Stack Developer'}
              </h2>
            </div>
          </div>

          <div className="cv-contact-grid" style={{ width: '100%' }}>
            <div className="cv-contact-row">
              <div className="cv-contact-item">
                <FaMapMarkerAlt className="cv-icon-red" />
                <span>{bio.address}</span>
              </div>
              <div className="cv-contact-item">
                <FaPhone className="cv-icon-red" />
                <a href={`tel:${bio.phone}`}>{bio.phone}</a>
              </div>
              <div className="cv-contact-item">
                <FaEnvelope className="cv-icon-red" />
                <a href={`mailto:${bio.email}`}>{bio.email}</a>
              </div>
            </div>

            <div className="cv-contact-row">
              <div className="cv-contact-item">
                <FaGraduationCap className="cv-icon-red" />
                <a href={bio.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
              </div>
              <div className="cv-contact-item">
                <FaLinkedin className="cv-icon-red" />
                <a href={bio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="cv-contact-item">
                <FaGithub className="cv-icon-red" />
                <a href={bio.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* VISTA 1: CV RESUMIDO / EJECUTIVO (3 LOGROS CLAVE PARA RECLUTADORES) */}
        {cvMode === 'summary' ? (
          <div className="cv-summary-mode">
            
            {/* Perfil Ejecutivo */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaUserAlt className="cv-section-icon" />
                <h3>{isEs ? 'Perfil Ejecutivo' : 'Executive Summary'}</h3>
              </div>
              <div className="cv-section-body">
                <p className="cv-profile-text" style={{ fontSize: '1.02rem', fontWeight: 500, lineHeight: 1.75 }}>
                  {tailoredData?.customProfileText
                    ? (tailoredData.customProfileText[lang] || tailoredData.customProfileText.es)
                    : (isEs 
                        ? "Sociólogo e Investigador Computacional con +7 años liderando proyectos de tecnología pública, inteligencia artificial aplicada (Computer Vision / NLP) y desarrollo de software full-stack. Especializado en convertir problemáticas sociales complejas en soluciones tecnológicas de código abierto, soberanía de datos y cartografía interactiva de alto impacto. Fundador de Tejer.RED y ponente en conferencias internacionales como FOSDEM (Bélgica)."
                        : "Sociologist & Computational Researcher with 7+ years leading public technology, applied AI (Computer Vision / NLP), and full-stack software development projects. Specialized in transforming complex social data problems into high-impact open-source technology platforms, data sovereignty tools, and interactive mapping systems. Founder of Tejer.RED and international speaker at FOSDEM (Belgium).")}
                </p>
              </div>
            </section>

            {/* Top 3 Logros de Alto Impacto */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaTrophy className="cv-section-icon" />
                <h3>{isEs ? 'Conocimiento Aplicado' : 'Applied Knowledge'}</h3>
              </div>
              <div className="cv-section-body">
                
                {/* Logro 1 */}
                <div className="cv-item-card cv-achievement-card">
                  <div className="cv-item-header">
                    <h4 style={{ color: 'var(--color-principal)' }}>
                      1. {isEs ? 'Sistemas Forenses y Soberanía Tecnológica (Tejer.RED)' : 'Forensic Systems & Tech Sovereignty (Tejer.RED)'}
                    </h4>
                    <span className="cv-date-badge">2021 – {isEs ? 'Presente' : 'Present'}</span>
                  </div>
                  <div className="cv-item-abstract">
                    {isEs ? (
                      <div>
                        Fundó <strong>Tejer.RED</strong> y diseñó e implementó herramientas de software libre de alto impacto para la búsqueda e identificación de personas en México:
                        <ul className="cv-bullet-list">
                          <li><strong>Cartografía Semántica:</strong> Geolocalización e inferencia espacial de +3,000 reportes de desaparición mediante algoritmos de agrupamiento espacial (DBSCAN).</li>
                          <li><strong>Sistema de Correlación de Tatuajes:</strong> Algoritmo de vectorización TF-IDF y embeddings que detectó +250 coincidencias potenciales entre fallecidos sin identificar (PFSI) y registros de personas desaparecidas (REPD).</li>
                          <li><strong>Periodismo Colaborativo & Búsqueda de indicios:</strong> Plataformas de acceso abierto para democratizar el uso y visualización de información institucional para la identificación de personas desaparecidas desarrollada en alianza con <em>Animal Político</em>, <em>A dónde van los desaparecidos</em> y <em>ZonaDocs</em>.</li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        Founded <strong>Tejer.RED</strong>, architecting open-source software tools to empower search collectives and forensic identification in Mexico:
                        <ul className="cv-bullet-list">
                          <li><strong>Semantic Cartography:</strong> Geolocated and mapped 3,000+ reports using spatial DBSCAN clustering algorithms.</li>
                          <li><strong>Tattoo Correlation System:</strong> TF-IDF vectorization & embeddings pipeline uncovering 250+ potential matches between unidentified deceased and missing persons registries.</li>
                          <li><strong>Collaborative Journalism & Evidence Search:</strong> Open-access platforms designed to democratize the use and visualization of institutional information for the identification of missing persons, developed in partnership with <em>Animal Político</em> and <em>ZonaDocs</em>.</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Logro 2 */}
                <div className="cv-item-card cv-achievement-card">
                  <div className="cv-item-header">
                    <h4 style={{ color: 'var(--color-principal)' }}>
                      2. {isEs ? 'Investigación Pionera en IA, NLP e Inferencia de Datos (UdeG & FOSDEM)' : 'Pioneering Research in AI, NLP & Data Inference (UdeG & FOSDEM)'}
                    </h4>
                    <span className="cv-date-badge">2020 – 2024</span>
                  </div>
                  <div className="cv-item-abstract">
                    {isEs ? (
                      <div>
                        Desarrolló el primer modelo de ciencias sociales computacionales sobre el graffiti transnacional en Norteamérica (Tesis de Maestría CONACYT):
                        <ul className="cv-bullet-list">
                          <li><strong>Data Mining & Computer Vision (ResNet):</strong> Creó el bot de minería automatizada <em>idmb</em> en Python/SQL y desarrolló un modelo convolucional utilizando herramientas de acceso libre como la librería TensorFlow para clasificación estilística de graffiti.</li>
                          <li><strong>Procesamiento de Lenguaje Natural (spaCy):</strong> Diseñó pipelines de NLP para el análisis léxico de discursos e identidades en redes sociales.</li>
                          <li><strong>Ponente Internacional (FOSDEM 2024, Bélgica):</strong> Exposición técnica sobre reducción de grafos con Graphology y SigmaJS. Publicaciones indexadas en Portugal y Ecuador.</li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        Pioneered computational social science research on transnational freight train graffiti across North America (CONACYT Master's Thesis):
                        <ul className="cv-bullet-list">
                          <li><strong>Data Mining & Computer Vision (ResNet):</strong> Engineered the automated Python/SQL bot <em>idmb</em> and developed a custom CNN model using open-source tools like the TensorFlow library for pictorial style identification.</li>
                          <li><strong>Natural Language Processing (spaCy):</strong> Built NLP text pipelines for subcultural identity discourse analysis.</li>
                          <li><strong>International Speaker (FOSDEM 2024, Belgium):</strong> Delivered technical talk on graph node reduction using Graphology & SigmaJS. Published peer-reviewed papers in Portugal and Ecuador.</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Logro 3 */}
                <div className="cv-item-card cv-achievement-card">
                  <div className="cv-item-header">
                    <h4 style={{ color: 'var(--color-principal)' }}>
                      3. {isEs ? 'Arquitectura Full-Stack, Grafos Complejos y Realidad Aumentada (DVI & AR)' : 'Full-Stack Web Architecture, Graph Systems & Augmented Reality (DVI & AR)'}
                    </h4>
                    <span className="cv-date-badge">2017 – 2023</span>
                  </div>
                  <div className="cv-item-abstract">
                    {isEs ? (
                      <div>
                        Diseñó productos web interactivos y experiencias inmersivas de alto rendimiento:
                        <ul className="cv-bullet-list">
                          <li><strong>Interfaz DVI (Data Visualization Interface):</strong> Renderizado web en tiempo real de redes relacionales complejas integrando layouts ForceAtlas, SigmaJS y Graphology sobre SQL.</li>
                          <li><strong>Plataforma Web & Instalación AR (Recorriendo el tRAzo):</strong> Aplicación interactiva (SVG/JS) e instalación de Realidad Aumentada que se montó en la Biblioteca Central CUCSH UdeG.</li>
                          <li><strong>Software de Curaduría (Plugin Amoxeh WP):</strong> Desarrollo de plugin en PHP/MySQL para estructuración y minería de texto sobre 300+ artículos periodísticos.</li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        Engineered high-performance interactive web applications and immersive digital experiences:
                        <ul className="cv-bullet-list">
                          <li><strong>DVI Interface:</strong> Real-time web rendering of complex relational graphs using ForceAtlas layouts with SigmaJS, Graphology, and SQL databases.</li>
                          <li><strong>Interactive Web & AR Installation (Recorriendo el tRAzo):</strong> Interactive SVG web app and an Augmented Reality installation mounted at UdeG Central Library.</li>
                          <li><strong>Text Mining Software (Amoxeh WP Plugin):</strong> Built custom PHP/MySQL plugin for text corpus curation and analysis across 300+ news articles.</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </section>

            {/* Experiencia Laboral en Empresas y Organizaciones */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaBriefcase className="cv-section-icon" />
                <h3>{isEs ? 'Experiencia Laboral en Empresas y Organizaciones' : 'Work Experience in Companies & Organizations'}</h3>
              </div>
              <div className="cv-section-body">
                
                {/* Balam Studio */}
                <div className="cv-item-card" style={{ paddingBottom: '1rem', marginBottom: '1.2rem' }}>
                  <div className="cv-item-header">
                    <h4>{isEs ? 'Desarrollador Web' : 'Web Developer'} — Balam Studio Creative Media</h4>
                    <span className="cv-date-badge">Oct 2021 – Oct 2024</span>
                  </div>
                  <p className="cv-item-abstract">
                    {isEs 
                      ? 'Zapopan, Jal. (Remoto). Desarrollo avanzado de sitios en WordPress y e-commerce con WooCommerce (temas y plugins a la medida), además de soluciones en React, JS y PHP. Implementación de servidores GNU/Linux y Apache.'
                      : 'Zapopan, Mex. (Remote). Advanced WordPress and WooCommerce e-commerce development (custom themes/plugins), alongside custom React, JS, and PHP solutions. GNU/Linux/Apache server deployments.'}
                  </p>
                </div>

                {/* Uzu Digital */}
                <div className="cv-item-card" style={{ paddingBottom: '1rem', marginBottom: '1.2rem' }}>
                  <div className="cv-item-header">
                    <h4>{isEs ? 'Desarrollador de Sitios Web' : 'Web Developer'} — Uzu Digital / Nauka</h4>
                    <span className="cv-date-badge">Oct 2017 – Nov 2020</span>
                  </div>
                  <p className="cv-item-abstract">
                    {isEs 
                      ? 'Guadalajara, Jal. Construcción de sitios corporativos en WordPress y tiendas con WooCommerce (desarrollo de adaptaciones y plugins a la medida), así como programación en PHP/MySQL. Servidores Linux/Apache.'
                      : 'Guadalajara, Mex. Built corporate websites in WordPress and e-commerce stores in WooCommerce (custom adaptations and plugins), alongside PHP/MySQL programming. Linux/Apache server administration.'}
                  </p>
                </div>

                {/* MONDO MARKETING JAPÓN */}
                <div className="cv-item-card" style={{ paddingBottom: '1rem', marginBottom: '1.2rem' }}>
                  <div className="cv-item-header">
                    <h4>{isEs ? 'Analista de Datos (Prácticas Internacionales)' : 'Data Analyst Intern'} — MONDO MARKETING (問答マーケティング)</h4>
                    <span className="cv-date-badge">Ago 2018 – Dic 2018</span>
                  </div>
                  <p className="cv-item-abstract">
                    {isEs 
                      ? 'Nagoya, Prefectura de Aichi, Japón. Análisis de datos de rendimiento de campañas digitales, procesamiento de métricas relacionales de redes sociales y elaboración de informes estratégicos de comunicación digital.'
                      : 'Nagoya, Aichi Prefecture, Japan. Data analysis of digital marketing campaign metrics, relational social media analytics, and digital communication reporting.'}
                  </p>
                </div>

                {/* Nuvi Global */}
                <div className="cv-item-card" style={{ paddingBottom: '1rem', marginBottom: '1.2rem' }}>
                  <div className="cv-item-header">
                    <h4>{isEs ? 'Desarrollador Web & Creador de Contenidos' : 'Web & Content Developer'} — Nuvi Global</h4>
                    <span className="cv-date-badge">Feb 2017 – Oct 2017</span>
                  </div>
                  <p className="cv-item-abstract">
                    {isEs 
                      ? 'Zapopan, Jal. Maquetación y programación del nuevo portal institucional, desarrollo de estrategias digitales de posicionamiento de marca y producción de contenidos audiovisuales.'
                      : 'Zapopan, Mex. Design and development of the new institutional portal, digital brand positioning strategies, and audiovisual content production.'}
                  </p>
                </div>

                {/* Atama */}
                <div className="cv-item-card" style={{ paddingBottom: '1rem', marginBottom: '1.2rem' }}>
                  <div className="cv-item-header">
                    <h4>{isEs ? 'Content Developer & Consultor de Comunicación' : 'Content Developer & Digital Consultant'} — Atama Estrategia Creativa</h4>
                    <span className="cv-date-badge">Oct 2015 – Oct 2016</span>
                  </div>
                  <p className="cv-item-abstract">
                    {isEs 
                      ? 'Zapopan, Jal. Diseño de identidad visual y comunicación digital para #GobiernoAbiertoJal (ITEI Jalisco / OGP México), la plataforma de denuncia #Protocolo409 y estrategia digital para regidores de Zapopan.'
                      : 'Zapopan, Mex. Visual identity and digital communication design for #GobiernoAbiertoJal (ITEI Jalisco / OGP Mexico), #Protocolo409 citizen platform, and public sector media strategy.'}
                  </p>
                </div>

                {/* Web-Gdl */}
                <div className="cv-item-card" style={{ paddingBottom: '1rem', marginBottom: '1.2rem' }}>
                  <div className="cv-item-header">
                    <h4>{isEs ? 'Diseñador y Desarrollador Web' : 'Web Designer & Developer'} — Web-Gdl</h4>
                    <span className="cv-date-badge">Jun 2013 – Oct 2015</span>
                  </div>
                  <p className="cv-item-abstract">
                    {isEs 
                      ? 'Guadalajara, Jal. Implementación de portales corporativos en WordPress y carritos WooCommerce con temas a la medida, programación en PHP + MySQL/JS y optimización SEO orgánico.'
                      : 'Guadalajara, Mex. Implemented corporate WordPress portals and WooCommerce shopping carts with custom themes, alongside PHP + MySQL/JS web programming and organic SEO.'}
                  </p>
                </div>

                {/* Operaciones Internacionales (Centura & Dadicas) */}
                <div className="cv-item-card" style={{ paddingBottom: '0.8rem', marginBottom: '0.8rem', borderBottom: 'none' }}>
                  <div className="cv-item-header">
                    <h4>{isEs ? 'Asistente de Producción & Operaciones de Campo' : 'Production & Field Operations Assistant'} — Centura Building Systems (Canadá) & Dadicas (EE. UU.)</h4>
                    <span className="cv-date-badge">2022 – 2024</span>
                  </div>
                  <p className="cv-item-abstract">
                    {isEs
                      ? 'Vancouver, Canadá & San Diego, EE. UU. Montaje de estructuras metálicas, preparación de superficies, logística de transporte pesado y operación de maquinaria (montacargas) en entornos transnacionales.'
                      : 'Vancouver, Canada & San Diego, US. Structural assembly, surface finishing, heavy logistics, and industrial machinery operation (forklift) in international environments.'}
                  </p>
                </div>

              </div>
            </section>

            {/* Stack Tecnológico Principal */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaCode className="cv-section-icon" />
                <h3>{isEs ? 'Stack Tecnológico & Competencias Clave' : 'Core Tech Stack & Skills'}</h3>
              </div>
              <div className="cv-section-body cv-skills-grid">
                <div className="cv-skill-group">
                  <span className="cv-skill-label">{isEs ? 'Lenguajes & Desarrollo Web:' : 'Languages & Web Development:'}</span>
                  <div className="cv-tag-list">
                    <span className="cv-tag">Python</span>
                    <span className="cv-tag">JavaScript (ES6+)</span>
                    <span className="cv-tag">React / Next.js</span>
                    <span className="cv-tag">Node.js</span>
                    <span className="cv-tag">PHP</span>
                    <span className="cv-tag">HTML5 / CSS3</span>
                  </div>
                </div>

                <div className="cv-skill-group">
                  <span className="cv-skill-label">{isEs ? 'IA, Machine Learning & NLP:' : 'AI, Machine Learning & NLP:'}</span>
                  <div className="cv-tag-list">
                    <span className="cv-tag">TensorFlow</span>
                    <span className="cv-tag">Roboflow (CNN / ResNet)</span>
                    <span className="cv-tag">spaCy (NLP)</span>
                    <span className="cv-tag">TF-IDF & Embeddings</span>
                    <span className="cv-tag">DBSCAN Clustering</span>
                    <span className="cv-tag">OpenCV</span>
                  </div>
                </div>

                <div className="cv-skill-group">
                  <span className="cv-skill-label">{isEs ? 'Visualización de Datos & Grafos:' : 'Data Visualization & Graphs:'}</span>
                  <div className="cv-tag-list">
                    <span className="cv-tag">Graphology</span>
                    <span className="cv-tag">SigmaJS (ForceAtlas)</span>
                    <span className="cv-tag">Leaflet / GIS</span>
                    <span className="cv-tag">Realidad Aumentada (MindAR)</span>
                    <span className="cv-tag">MySQL / PostgreSQL</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Formación Académica Resumida */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaGraduationCap className="cv-section-icon" />
                <h3>{isEs ? 'Formación Académica' : 'Key Education'}</h3>
              </div>
              <div className="cv-section-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div className="cv-item-card" style={{ paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                    <div className="cv-item-header">
                      <h4>{isEs ? 'Maestría en Estudios de la Comunicación (MA)' : 'Master of Arts in Communication Studies'}</h4>
                      <span className="cv-date-badge">2020 – 2022</span>
                    </div>
                    <p className="cv-item-abstract" style={{ margin: 0 }}>
                      Universidad de Guadalajara • Becario CONACYT
                    </p>
                  </div>
                  <div className="cv-item-card" style={{ paddingBottom: 0, marginBottom: 0, borderBottom: 'none' }}>
                    <div className="cv-item-header">
                      <h4>{isEs ? 'Licenciatura en Sociología (BA)' : 'Bachelor in Sociology'}</h4>
                      <span className="cv-date-badge">2012 – 2016</span>
                    </div>
                    <p className="cv-item-abstract" style={{ margin: 0 }}>
                      Universidad de Guadalajara • Titulado con Monografía e Investigación
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        ) : (
          
          /* VISTA 2: CV COMPLETO MAESTRO */
          <div className="cv-full-mode">
            
            {/* Resumen y Perfil Profesional */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaUserAlt className="cv-section-icon" />
                <h3>{isEs ? 'Perfil Profesional y Resumen' : 'Professional Profile & Summary'}</h3>
              </div>
              <div className="cv-section-body">
                <p className="cv-profile-text">{bio.profile}</p>
                <p className="cv-intro-text">{bio.introText}</p>
              </div>
            </section>

            {/* Educación y Formación Académica */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaGraduationCap className="cv-section-icon" />
                <h3>{isEs ? 'Formación Académica y Tesis' : 'Education & Academic Degrees'}</h3>
              </div>
              <div className="cv-section-body">
                {theses.map(thesis => {
                  const data = thesis[lang] || thesis.es;
                  return (
                    <div key={thesis.id} className="cv-item-card">
                      <div className="cv-item-header">
                        <h4>{data.title}</h4>
                        <span className="cv-date-badge">{data.displayDate}</span>
                      </div>
                      <p className="cv-item-abstract"><strong>{isEs ? 'Resumen:' : 'Abstract:'}</strong> {data.abstract}</p>
                      <div 
                        className="cv-item-html-content"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                      />
                      {data.citation && (
                        <div className="cv-citation">
                          <strong>{isEs ? 'Cita formal:' : 'Citation:'}</strong>{' '}
                          <span dangerouslySetInnerHTML={{ __html: data.citation }} />
                        </div>
                      )}
                      {thesis.paper_url && (
                        <div className="cv-link-group print-hide">
                          <a href={thesis.paper_url} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                            <FaExternalLinkAlt size={12} /> {isEs ? 'Ver Tesis / Documento' : 'View Thesis / Paper'}
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Desarrollo de Software y Proyectos Tecnológicos */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaCode className="cv-section-icon" />
                <h3>{isEs ? 'Desarrollo de Software, IA y Proyectos Tecnológicos' : 'Software Development, AI & Tech Projects'}</h3>
              </div>
              <div className="cv-section-body">
                {codeProjects.map(project => {
                  const data = project[lang] || project.es;
                  return (
                    <div key={project.id} className="cv-item-card">
                      <div className="cv-item-header">
                        <h4>{data.title}</h4>
                        <span className="cv-date-badge">{data.displayDate}</span>
                      </div>
                      <p className="cv-item-abstract">{data.abstract}</p>
                      <div 
                        className="cv-item-html-content"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                      />
                      
                      <div className="cv-link-group print-hide">
                        {project.github_repo && (
                          <a href={project.github_repo} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                            <FaGithub size={12} /> GitHub Repo
                          </a>
                        )}
                        {project.project_url && (
                          <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                            <FaGlobe size={12} /> {isEs ? 'Ver Proyecto en Vivo' : 'Live Demo'}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Publicaciones Académicas */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaBookReader className="cv-section-icon" />
                <h3>{isEs ? 'Publicaciones Académicas y Capítulos de Libro' : 'Academic Publications & Book Chapters'}</h3>
              </div>
              <div className="cv-section-body">
                {academicPapers.map(paper => {
                  const data = paper[lang] || paper.es;
                  return (
                    <div key={paper.id} className="cv-item-card">
                      <div className="cv-item-header">
                        <h4>{data.title}</h4>
                        <span className="cv-date-badge">{data.displayDate}</span>
                      </div>
                      <p className="cv-item-abstract">{data.abstract}</p>
                      <div 
                        className="cv-item-html-content"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                      />
                      {data.citation && (
                        <div className="cv-citation">
                          <strong>{isEs ? 'Referencia:' : 'Reference:'}</strong>{' '}
                          <span dangerouslySetInnerHTML={{ __html: data.citation }} />
                        </div>
                      )}
                      {paper.paper_url && (
                        <div className="cv-link-group print-hide">
                          <a href={paper.paper_url} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                            <FaExternalLinkAlt size={12} /> DOI / Paper Link
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Conferencias y Ponencias */}
            {talks.length > 0 && (
              <section className="cv-section">
                <div className="cv-section-header">
                  <FaChalkboardTeacher className="cv-section-icon" />
                  <h3>{isEs ? 'Conferencias y Ponencias Internacionales' : 'Conferences & Keynote Talks'}</h3>
                </div>
                <div className="cv-section-body">
                  {talks.map(talk => {
                    const data = talk[lang] || talk.es;
                    return (
                      <div key={talk.id} className="cv-item-card">
                        <div className="cv-item-header">
                          <h4>{data.title}</h4>
                          <span className="cv-date-badge">{data.displayDate}</span>
                        </div>
                        <p className="cv-item-abstract">{data.abstract}</p>
                        <div 
                          className="cv-item-html-content"
                          dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                        {talk.talk_url && (
                          <div className="cv-link-group print-hide">
                            <a href={talk.talk_url} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                              <FaExternalLinkAlt size={12} /> {isEs ? 'Enlace a Conferencia' : 'Talk Link'}
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Prensa y Cobertura en Medios */}
            {media.length > 0 && (
              <section className="cv-section">
                <div className="cv-section-header">
                  <FaNewspaper className="cv-section-icon" />
                  <h3>{isEs ? 'Apariciones en Prensa y Cobertura Mediática' : 'Media Appearances & Press'}</h3>
                </div>
                <div className="cv-section-body">
                  {media.map(item => {
                    const data = item[lang] || item.es;
                    return (
                      <div key={item.id} className="cv-item-card">
                        <div className="cv-item-header">
                          <h4>{data.title}</h4>
                          <span className="cv-date-badge">{data.displayDate}</span>
                        </div>
                        <p className="cv-item-abstract">{data.abstract}</p>
                        <div 
                          className="cv-item-html-content"
                          dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                        {item.media_url && (
                          <div className="cv-link-group print-hide">
                            <a href={item.media_url} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                              <FaExternalLinkAlt size={12} /> {isEs ? 'Ver Noticia' : 'View Article'}
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Habilidades, Metodologías y Taxonomía */}
            <section className="cv-section">
              <div className="cv-section-header">
                <FaTags className="cv-section-icon" />
                <h3>{isEs ? 'Taxonomía Técnica y Habilidades Metodológicas' : 'Technical Taxonomy & Methodologies'}</h3>
              </div>
              <div className="cv-section-body cv-skills-grid">
                <div className="cv-skill-group">
                  <span className="cv-skill-label">{isEs ? 'Métodos & Tecnologías:' : 'Methods & Tech:'}</span>
                  <div className="cv-tag-list">
                    {TAG_SCHEMA.metodo.map(m => (
                      <span key={m} className="cv-tag">{m}</span>
                    ))}
                  </div>
                </div>

                <div className="cv-skill-group">
                  <span className="cv-skill-label">{isEs ? 'Dominios de Investigación:' : 'Research Domains:'}</span>
                  <div className="cv-tag-list">
                    {TAG_SCHEMA.dominio.map(d => (
                      <span key={d} className="cv-tag">{d}</span>
                    ))}
                  </div>
                </div>

                <div className="cv-skill-group">
                  <span className="cv-skill-label">{isEs ? 'Roles & Capacidades:' : 'Roles & Capabilities:'}</span>
                  <div className="cv-tag-list">
                    {TAG_SCHEMA.rol.map(r => (
                      <span key={r} className="cv-tag">{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* Banner de Coincidencia de Perfil Adaptado (Si aplica tailoredData) - Movido al final y no imprimible */}
        {tailoredData && (
          <div className="cv-tailored-banner print-hide" style={{ marginTop: '2rem' }}>
            <div className="cv-tailored-badge">
              <FaCheckCircle style={{ marginRight: '6px', color: '#e60000' }} />
              {tailoredData.badgeLabel[lang] || tailoredData.badgeLabel.es}
            </div>
            <h3 className="cv-tailored-title">
              {tailoredData.company} — {tailoredData.targetRole[lang] || tailoredData.targetRole.es}
            </h3>
            <p className="cv-tailored-summary">
              {tailoredData.matchSummary[lang] || tailoredData.matchSummary.es}
            </p>

            {tailoredData.requirementsMatchList && (
              <div className="cv-tailored-grid">
                {tailoredData.requirementsMatchList.map((item, idx) => (
                  <div key={idx} className="cv-tailored-item">
                    <div className="cv-req-text">📌 <strong>{item.requirement[lang] || item.requirement.es}</strong></div>
                    <div className="cv-match-text">{item.match[lang] || item.match.es}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Palabras Clave del Job Listing (ATS Keywords) */}
            {tailoredData.keywordsList && (
              <div className="cv-tailored-keywords-block" style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(230, 0, 0, 0.15)' }}>
                <span style={{ fontSize: '0.83rem', fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.5rem' }}>
                  🔑 {isEs ? 'Palabras Clave & Competencias de la Vacante (ATS Alignment):' : 'Job Listing Keywords & Competencies (ATS Alignment):'}
                </span>
                <div className="cv-tag-list">
                  {tailoredData.keywordsList.map((kw, i) => (
                    <span key={i} className="cv-tag" style={{ background: '#e60000', color: '#fff', fontSize: '0.78rem', padding: '0.25rem 0.65rem' }}>
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Desglose de Necesidades vs Solución */}
            {tailoredData.needsAdaptationList && (
              <div className="cv-tailored-needs-block" style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px dashed rgba(230, 0, 0, 0.2)' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', display: 'block', marginBottom: '0.6rem' }}>
                  🎯 {isEs ? 'Alineación Estratégica con las Necesidades de la Vacante:' : 'Strategic Alignment with Job Needs:'}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {tailoredData.needsAdaptationList.map((need, index) => (
                    <div key={index} style={{ background: '#ffffff', padding: '0.75rem 0.95rem', borderRadius: '8px', border: '1px solid #fee2e2' }}>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#e60000', marginBottom: '0.2rem' }}>
                        {need.title[lang] || need.title.es}
                      </div>
                      <div style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.55 }}>
                        {need.detail[lang] || need.detail.es}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer del Documento */}
        <footer className="cv-footer">
          <p>
            Ángel Javier Ramírez Abundis — {isEs ? 'Documento exportado desde' : 'Document exported from'}{' '}
            <a href="https://abundis.com.mx">abundis.com.mx</a>
          </p>
        </footer>

      </main>
    </div>
  );
}
