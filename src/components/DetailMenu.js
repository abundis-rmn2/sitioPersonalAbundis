import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaHome, FaFolderOpen, FaExternalLinkAlt, FaCode, FaBookReader, FaVideo, FaNewspaper, FaChalkboardTeacher } from 'react-icons/fa';

const DetailMenu = ({ post = {}, lang = 'es', tagSlug }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 768 && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Mapear categoría del post a la sección correspondiente del Home
  const getCategoryAnchor = (type) => {
    if (type === 'codeProject' || type === 'multimedia' || type === 'multimediaProject') return 'proyectos';
    if (type === 'thesis' || type === 'articles' || type === 'talks' || type === 'paper' || type === 'conference') return 'academia';
    if (type === 'mediaAppearance') return 'prensa';
    return 'inicio';
  };

  const categoryAnchor = post.type ? getCategoryAnchor(post.type) : 'inicio';

  const categoryLabels = {
    es: {
      proyectos: 'Proyectos',
      academia: 'Academia',
      prensa: 'Prensa',
      inicio: 'Inicio'
    },
    en: {
      proyectos: 'Projects',
      academia: 'Academy',
      prensa: 'Media',
      inicio: 'Home'
    }
  };

  return (
    <div className={`anchor-nav detail-menu ${isMenuOpen ? "mobile-open" : "mobile-closed"}`} ref={menuRef}>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars size={32} />
      </div>

      <div className="menu-content">
        {/* Título de Marca del Portafolio */}
        <Link
          href={`/${lang}`}
          className="menu-brand"
        >
          Javi Abundis
        </Link>

        {/* 1. Inicio */}
        <Link
          href={`/${lang}`}
          className="dot"
          title={lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <FaHome size={15} />
          {lang === 'es' ? 'Inicio' : 'Home'}
        </Link>

        {/* 2. Categoría (solo si hay un post válido con type) */}
        {post.type && (
          <Link
            href={`/${lang}#${categoryAnchor}`}
            className="dot"
            title={categoryLabels[lang][categoryAnchor]}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FaFolderOpen size={15} />
            {categoryLabels[lang][categoryAnchor]}
          </Link>
        )}

        {/* 3. Otros Enlaces / Recursos del Post */}
        {(post.project_url || post.github_repo || post.paper_url || post.talk_url || post.multimedia_url || post.media_url) && (
          <div style={{ margin: '0.8rem 0 0.4rem 0', borderTop: '1px solid rgba(200, 200, 200, 0.3)', paddingTop: '0.8rem' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#999', fontWeight: 700, letterSpacing: '0.5px', display: 'block', marginBottom: '0.5rem', textAlign: 'left', paddingLeft: '0.4rem' }}>
              {lang === 'es' ? 'Enlaces del Post' : 'Post Links'}
            </span>

            {post.project_url && (
              <a href={post.project_url} target="_blank" rel="noreferrer" className="dot" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <FaExternalLinkAlt size={13} />
                {lang === 'es' ? 'Sitio Web' : 'Website'}
              </a>
            )}
            {post.github_repo && (
              <a href={post.github_repo} target="_blank" rel="noreferrer" className="dot" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <FaCode size={13} />
                {lang === 'es' ? 'Código GitHub' : 'GitHub Code'}
              </a>
            )}
            {post.paper_url && (
              <a href={post.paper_url} target="_blank" rel="noreferrer" className="dot" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <FaBookReader size={13} />
                {lang === 'es' ? 'Publicación' : 'Publication'}
              </a>
            )}
            {post.talk_url && (
              <a href={post.talk_url} target="_blank" rel="noreferrer" className="dot" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <FaChalkboardTeacher size={13} />
                {lang === 'es' ? 'Conferencia' : 'Conference'}
              </a>
            )}
            {post.multimedia_url && (
              <a href={post.multimedia_url} target="_blank" rel="noreferrer" className="dot" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <FaVideo size={13} />
                {lang === 'es' ? 'Multimedia' : 'Multimedia'}
              </a>
            )}
            {post.media_url && (
              <a href={post.media_url} target="_blank" rel="noreferrer" className="dot" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <FaNewspaper size={13} />
                {lang === 'es' ? 'Medio de Prensa' : 'Press Article'}
              </a>
            )}
          </div>
        )}

        {/* Socials */}
        <div className="socials">
          <a href="https://github.com/abundis-rmn2" target="_blank" rel="noreferrer">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/abundis-sociologia/" target="_blank" rel="noreferrer">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:abundiscomunicacion@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Selector de idioma debajo de los iconos */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '8px', 
          fontSize: '0.85rem', 
          fontWeight: 'bold', 
          marginTop: '0.8rem',
          paddingTop: '0.6rem',
          borderTop: '1px solid rgba(200, 200, 200, 0.2)',
          background: 'transparent'
        }}>
          {post.categories ? (
            <>
              <Link 
                href={`/es/${post.categories.es}/${post.slugs.es}`} 
                style={{ 
                  color: lang === 'es' ? 'var(--color-principal)' : '#888', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s'
                }}
              >
                ES
              </Link>
              <span style={{ color: '#ccc' }}>|</span>
              <Link 
                href={`/en/${post.categories.en}/${post.slugs.en}`} 
                style={{ 
                  color: lang === 'en' ? 'var(--color-principal)' : '#888', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s'
                }}
              >
                EN
              </Link>
            </>
          ) : tagSlug ? (
            <>
              <Link 
                href={`/es/tag/${tagSlug}`} 
                style={{ 
                  color: lang === 'es' ? 'var(--color-principal)' : '#888', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s'
                }}
              >
                ES
              </Link>
              <span style={{ color: '#ccc' }}>|</span>
              <Link 
                href={`/en/tag/${tagSlug}`} 
                style={{ 
                  color: lang === 'en' ? 'var(--color-principal)' : '#888', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s'
                }}
              >
                EN
              </Link>
            </>
          ) : (
            <>
              <Link href="/es" style={{ color: lang === 'es' ? 'var(--color-principal)' : '#888', textDecoration: 'none' }}>ES</Link>
              <span style={{ color: '#ccc' }}>|</span>
              <Link href="/en" style={{ color: lang === 'en' ? 'var(--color-principal)' : '#888', textDecoration: 'none' }}>EN</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailMenu;
