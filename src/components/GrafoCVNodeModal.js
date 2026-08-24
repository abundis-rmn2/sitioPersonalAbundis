'use client';

import React from 'react';
import { 
  FaTimes, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaGlobe, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaBookReader, 
  FaNewspaper, 
  FaChalkboardTeacher, 
  FaUserAlt,
  FaTags,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCrosshairs,
  FaChevronLeft,
  FaChevronRight,
  FaProjectDiagram,
  FaBuilding,
  FaCheckCircle
} from 'react-icons/fa';

export default function GrafoCVNodeModal({ 
  node, 
  lang = 'es', 
  onClose, 
  onSelectNode, 
  onFocusNode,
  allNodes = [] 
}) {
  if (!node) return null;

  const isEs = lang === 'es';

  // Obtener categoría e icono por tipo de nodo
  const getNodeCategoryInfo = (type) => {
    switch (type) {
      case 'hub':
        return { label: isEs ? 'Nodo Ancla / Sección' : 'Section Hub', icon: <FaProjectDiagram />, color: '#FF0000' };
      case 'experience':
      case 'work':
        return { label: isEs ? 'Experiencia Laboral' : 'Work Experience', icon: <FaBriefcase />, color: '#111111' };
      case 'codeProject':
      case 'multimediaProject':
      case 'multimedia':
        return { label: isEs ? 'Proyecto de Software / IA' : 'Software / AI Project', icon: <FaCode />, color: '#E60000' };
      case 'thesis':
        return { label: isEs ? 'Tesis Académica' : 'Academic Thesis', icon: <FaGraduationCap />, color: '#FF0000' };
      case 'paper':
      case 'articles':
        return { label: isEs ? 'Publicación Académica' : 'Academic Paper', icon: <FaBookReader />, color: '#222222' };
      case 'talks':
      case 'conference':
        return { label: isEs ? 'Conferencia / Ponencia' : 'Conference Talk', icon: <FaChalkboardTeacher />, color: '#CC0000' };
      case 'mediaAppearance':
        return { label: isEs ? 'Aparición en Prensa' : 'Media Appearance', icon: <FaNewspaper />, color: '#FF3333' };
      case 'skill':
      case 'tag':
        return { label: isEs ? 'Habilidad / Taxonomía' : 'Skill / Taxonomy', icon: <FaTags />, color: '#4285F4' };
      default:
        return { label: isEs ? 'Elemento del CV' : 'CV Item', icon: <FaUserAlt />, color: '#555555' };
    }
  };

  const categoryInfo = getNodeCategoryInfo(node.type);

  // Encontrar nodos vecinos relacionados (Deduplicados por ID para evitar advertencias de React keys)
  const neighborMap = new Map();
  (node.neighbors || []).forEach(neighbor => {
    const found = (typeof neighbor === 'object' && neighbor.id) 
      ? neighbor 
      : allNodes.find(n => n.id === neighbor || String(n.id) === String(neighbor));
    if (found && found.id && !neighborMap.has(found.id)) {
      neighborMap.set(found.id, found);
    }
  });
  const neighborNodes = Array.from(neighborMap.values());

  // Obtener items anteriores y siguientes para la navegación dentro del modal
  const sameCategoryNodes = allNodes.filter(n => n.type === node.type);
  const currentIndex = sameCategoryNodes.findIndex(n => n.id === node.id);
  const prevNode = currentIndex > 0 ? sameCategoryNodes[currentIndex - 1] : null;
  const nextNode = currentIndex >= 0 && currentIndex < sameCategoryNodes.length - 1 ? sameCategoryNodes[currentIndex + 1] : null;

  // Imagen explícita del nodo (Únicamente si la tiene definida en datos o es el perfil bio)
  const imageUrl = node.image || node.img || (node.id === 'hub-inicio' ? '/javier-abundis.webp' : null);

  return (
    <aside 
      className="grafo-cv-modal" 
      aria-label={isEs ? "Detalles del nodo seleccionado" : "Selected node details"}
    >
      {/* Header del Modal */}
      <header className="grafo-cv-modal-header">
        <div className="grafo-cv-modal-badge" style={{ backgroundColor: categoryInfo.color }}>
          {categoryInfo.icon}
          <span>{categoryInfo.label}</span>
        </div>

        <div className="grafo-cv-modal-actions">
          {onFocusNode && (
            <button 
              type="button" 
              className="grafo-cv-icon-btn" 
              onClick={() => onFocusNode(node.id)}
              title={isEs ? 'Centrar Cámara 3D en este Nodo' : 'Focus 3D Camera on Node'}
            >
              <FaCrosshairs />
            </button>
          )}

          <button 
            type="button" 
            className="grafo-cv-icon-btn close-btn" 
            onClick={onClose}
            title={isEs ? 'Cerrar Ventana' : 'Close Window'}
          >
            <FaTimes />
          </button>
        </div>
      </header>

      {/* Cuerpo Principal de Información del Nodo */}
      <div className="grafo-cv-modal-body">
        
        {/* Título Principal y Subtítulo */}
        <h2 className="grafo-cv-modal-title">{node.name || node.title}</h2>

        {/* Metadatos (Fechas, Empresa, Ubicación) */}
        <div className="grafo-cv-modal-meta">
          {node.period && (
            <span className="meta-item">
              <FaCalendarAlt className="meta-icon" /> {node.period}
            </span>
          )}
          {node.displayDate && (
            <span className="meta-item">
              <FaCalendarAlt className="meta-icon" /> {node.displayDate}
            </span>
          )}
          {node.company && (
            <span className="meta-item">
              <FaBuilding className="meta-icon" /> {node.company}
            </span>
          )}
          {node.location && (
            <span className="meta-item">
              <FaMapMarkerAlt className="meta-icon" /> {node.location}
            </span>
          )}
        </div>

        {/* Imagen Destacada del Nodo - Solo si la tiene definida explícitamente */}
        {imageUrl && (
          <div className="grafo-cv-modal-image-wrapper">
            <img 
              src={imageUrl} 
              alt={node.name || node.title || 'Imagen del nodo'} 
              className="grafo-cv-modal-image"
              loading="eager"
              onError={(e) => {
                e.currentTarget.parentElement.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Resumen / Abstract */}
        {node.abstract && (
          <div className="grafo-cv-modal-section">
            <h3>{isEs ? 'Resumen / Enfoque' : 'Summary / Focus'}</h3>
            <p className="grafo-cv-modal-abstract">{node.abstract}</p>
          </div>
        )}

        {/* Perfil Ejecutivo si es el Nodo Central Bio */}
        {node.id === 'hub-inicio' && node.profile && (
          <div className="grafo-cv-modal-section">
            <p className="grafo-cv-modal-abstract" style={{ fontSize: '0.98rem', lineHeight: 1.7 }}>
              {node.profile}
            </p>
            {node.introText && (
              <p style={{ marginTop: '0.8rem', fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                {node.introText}
              </p>
            )}
          </div>
        )}

        {/* Puntos Clave de Logros para Experiencia Laboral */}
        {node.bullets && Array.isArray(node.bullets) && node.bullets.length > 0 && (
          <div className="grafo-cv-modal-section">
            <h3>{isEs ? 'Logros & Responsabilidades Clave' : 'Key Achievements & Responsibilities'}</h3>
            <ul className="grafo-cv-bullet-list">
              {node.bullets.map((bullet, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="bullet-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Descripción HTML Extensa */}
        {node.content && (
          <div className="grafo-cv-modal-section">
            <h3>{isEs ? 'Detalle Completo' : 'Full Details'}</h3>
            <div 
              className="grafo-cv-modal-html-content"
              dangerouslySetInnerHTML={{ __html: node.content }}
            />
          </div>
        )}

        {/* Cita Formal APA para Academia */}
        {node.citation && (
          <div className="grafo-cv-modal-section citation-box">
            <h4>{isEs ? 'Cita académica formal:' : 'Formal Citation:'}</h4>
            <div 
              className="citation-text"
              dangerouslySetInnerHTML={{ __html: node.citation }}
            />
          </div>
        )}

        {/* Enlaces de Acción Externa */}
        {(node.github_repo || node.project_url || node.paper_url || node.talk_url || node.media_url || node.contactLinks) && (
          <div className="grafo-cv-modal-section">
            <h3>{isEs ? 'Enlaces & Recursos' : 'Links & Resources'}</h3>
            <div className="grafo-cv-modal-links">
              {node.github_repo && (
                <a href={node.github_repo} target="_blank" rel="noopener noreferrer" className="grafo-cv-btn primary">
                  <FaGithub /> GitHub Repo
                </a>
              )}
              {node.project_url && (
                <a href={node.project_url} target="_blank" rel="noopener noreferrer" className="grafo-cv-btn primary">
                  <FaGlobe /> {isEs ? 'Ver Proyecto en Vivo' : 'Live Demo'}
                </a>
              )}
              {node.paper_url && (
                <a href={node.paper_url} target="_blank" rel="noopener noreferrer" className="grafo-cv-btn accent">
                  <FaExternalLinkAlt /> {isEs ? 'Ver Documento / Paper' : 'View Paper'}
                </a>
              )}
              {node.talk_url && (
                <a href={node.talk_url} target="_blank" rel="noopener noreferrer" className="grafo-cv-btn accent">
                  <FaChalkboardTeacher /> {isEs ? 'Ver Conferencia' : 'View Talk'}
                </a>
              )}
              {node.media_url && (
                <a href={node.media_url} target="_blank" rel="noopener noreferrer" className="grafo-cv-btn outline">
                  <FaNewspaper /> {isEs ? 'Leer Nota en Prensa' : 'Read Article'}
                </a>
              )}

              {/* Links de contacto si es el nodo bio */}
              {node.contactLinks && (
                <div className="grafo-cv-contact-buttons" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', width: '100%', marginTop: '0.4rem' }}>
                  {node.contactLinks.scholar && (
                    <a href={node.contactLinks.scholar} target="_blank" rel="noopener noreferrer" className="grafo-cv-btn outline">
                      <FaGraduationCap /> Google Scholar
                    </a>
                  )}
                  {node.contactLinks.linkedin && (
                    <a href={node.contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="grafo-cv-btn outline">
                      <FaGlobe /> LinkedIn
                    </a>
                  )}
                  {node.contactLinks.github && (
                    <a href={node.contactLinks.github} target="_blank" rel="noopener noreferrer" className="grafo-cv-btn outline">
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Nodos Relacionados en el Grafo (Traversal Navigation) */}
        {neighborNodes.length > 0 && (
          <div className="grafo-cv-modal-section">
            <h3>
              <FaProjectDiagram style={{ marginRight: '6px', color: '#e60000' }} />
              {isEs ? 'Nodos Conectados en la Red' : 'Connected Nodes in Graph'} ({neighborNodes.length})
            </h3>
            <div className="grafo-cv-neighbor-list">
              {neighborNodes.map((neighbor) => {
                const nInfo = getNodeCategoryInfo(neighbor.type);
                return (
                  <button
                    key={neighbor.id}
                    type="button"
                    className="grafo-cv-neighbor-pill"
                    onClick={() => onSelectNode(neighbor.id)}
                    title={isEs ? `Viajar a nodo: ${neighbor.name}` : `Fly to node: ${neighbor.name}`}
                  >
                    <span className="pill-dot" style={{ backgroundColor: nInfo.color }} />
                    <span className="pill-text">{neighbor.name || neighbor.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Footer del Modal con Navegación de Secuencia */}
      <footer className="grafo-cv-modal-footer">
        <div className="nav-group">
          {prevNode && (
            <button 
              type="button" 
              className="nav-btn" 
              onClick={() => onSelectNode(prevNode.id)}
              title={prevNode.name}
            >
              <FaChevronLeft /> {isEs ? 'Anterior' : 'Previous'}
            </button>
          )}
        </div>

        <div className="nav-info">
          {sameCategoryNodes.length > 1 && currentIndex >= 0 && (
            <span>{currentIndex + 1} / {sameCategoryNodes.length}</span>
          )}
        </div>

        <div className="nav-group">
          {nextNode && (
            <button 
              type="button" 
              className="nav-btn" 
              onClick={() => onSelectNode(nextNode.id)}
              title={nextNode.name}
            >
              {isEs ? 'Siguiente' : 'Next'} <FaChevronRight />
            </button>
          )}
        </div>
      </footer>
    </aside>
  );
}
