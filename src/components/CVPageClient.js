'use client';

import React from 'react';
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
  FaUserAlt
} from 'react-icons/fa';
import { bioData, cvPosts, TAG_SCHEMA } from '../data/cvData';

export default function CVPageClient({ lang = 'es' }) {
  const bio = bioData[lang] || bioData.es;
  const isEs = lang === 'es';

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Filtrar y agrupar posts por tipo/sección
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
            <div className="cv-lang-switch">
              <Link href="/es/cv" className={isEs ? 'active-lang' : ''}>ES</Link>
              <span className="divider">|</span>
              <Link href="/en/cv" className={!isEs ? 'active-lang' : ''}>EN</Link>
            </div>

            <button onClick={handlePrint} className="cv-btn cv-btn-primary">
              <FaPrint style={{ marginRight: '8px' }} />
              {isEs ? 'Imprimir / Guardar en PDF' : 'Print / Save as PDF'}
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

        {/* Header del CV */}
        <section className="cv-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '1.5rem' }}>
          <div className="cv-header-title" style={{ flex: '1 1 260px' }}>
            <h1>{bio.name}</h1>
            <h2 className="cv-subtitle">
              {isEs 
                ? 'Sociólogo • Investigador Computacional • Desarrollador Full-Stack' 
                : 'Sociologist • Computational Researcher • Full-Stack Developer'}
            </h2>
          </div>
          <div className="cv-portrait-wrapper" style={{ flexShrink: 0 }}>
            <img 
              src="/javier-abundis.png" 
              alt={bio.name}
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid var(--color-principal)',
                boxShadow: '0 6px 20px rgba(230, 0, 0, 0.15)',
                display: 'block'
              }}
            />
          </div>

          <div className="cv-contact-grid">
            {/* Fila 1: Redes y Perfiles Académicos */}
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

            {/* Fila 2: Datos de Contacto */}
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
          </div>
        </section>

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
                  
                  {/* Links de GitHub o Sitio */}
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

        {/* Footer del Documento */}
        <footer className="cv-footer">
          <p>
            Ángel Javier Ramírez Abundis — {isEs ? 'Documento completo de CV exportado desde' : 'Complete CV Document exported from'}{' '}
            <a href="https://abundis.com.mx">abundis.com.mx</a>
          </p>
        </footer>

      </main>
    </div>
  );
}
