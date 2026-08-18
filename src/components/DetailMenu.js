import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaBars, 
  FaTimes, 
  FaUser, 
  FaFolderOpen, 
  FaExternalLinkAlt, 
  FaCode, 
  FaBookReader, 
  FaVideo, 
  FaNewspaper, 
  FaChalkboardTeacher 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import useIsMobile from '../utils/useIsMobile';

const DetailMenu = ({ post = {}, lang = 'es', tagSlug }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobile]);

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

  // Variantes de Framer Motion
  const overlayVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
        staggerChildren: 0.06,
        delayChildren: 0.04
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 15 },
    open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }
  };

  const renderPostLinks = () => {
    const hasLinks = post.project_url || post.github_repo || post.paper_url || post.talk_url || post.multimedia_url || post.media_url;
    if (!hasLinks) return null;

    return (
      <div className="post-links-container">
        <span className="post-links-title">
          {lang === 'es' ? 'Enlaces del Post' : 'Post Links'}
        </span>

        {post.project_url && (
          <a href={post.project_url} target="_blank" rel="noreferrer" className="dot" onClick={() => isMobile && setIsMenuOpen(false)}>
            <FaExternalLinkAlt size={14} />
            {lang === 'es' ? 'Sitio Web' : 'Website'}
          </a>
        )}
        {post.github_repo && (
          <a href={post.github_repo} target="_blank" rel="noreferrer" className="dot" onClick={() => isMobile && setIsMenuOpen(false)}>
            <FaCode size={14} />
            {lang === 'es' ? 'Código GitHub' : 'GitHub Code'}
          </a>
        )}
        {post.paper_url && (
          <a href={post.paper_url} target="_blank" rel="noreferrer" className="dot" onClick={() => isMobile && setIsMenuOpen(false)}>
            <FaBookReader size={14} />
            {lang === 'es' ? 'Publicación' : 'Publication'}
          </a>
        )}
        {post.talk_url && (
          <a href={post.talk_url} target="_blank" rel="noreferrer" className="dot" onClick={() => isMobile && setIsMenuOpen(false)}>
            <FaChalkboardTeacher size={14} />
            {lang === 'es' ? 'Conferencia' : 'Conference'}
          </a>
        )}
        {post.multimedia_url && (
          <a href={post.multimedia_url} target="_blank" rel="noreferrer" className="dot" onClick={() => isMobile && setIsMenuOpen(false)}>
            <FaVideo size={14} />
            {lang === 'es' ? 'Multimedia' : 'Multimedia'}
          </a>
        )}
        {post.media_url && (
          <a href={post.media_url} target="_blank" rel="noreferrer" className="dot" onClick={() => isMobile && setIsMenuOpen(false)}>
            <FaNewspaper size={14} />
            {lang === 'es' ? 'Medio de Prensa' : 'Press Article'}
          </a>
        )}
      </div>
    );
  };

  const renderLangSelector = () => (
    <div className="lang-selector">
      {post.categories ? (
        <>
          <Link 
            href={`/es/${post.categories.es}/${post.slugs.es}`} 
            className={lang === 'es' ? 'active-lang' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            ES
          </Link>
          <span className="lang-divider">|</span>
          <Link 
            href={`/en/${post.categories.en}/${post.slugs.en}`} 
            className={lang === 'en' ? 'active-lang' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            EN
          </Link>
        </>
      ) : tagSlug ? (
        <>
          <Link 
            href={`/es/tag/${tagSlug}`} 
            className={lang === 'es' ? 'active-lang' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            ES
          </Link>
          <span className="lang-divider">|</span>
          <Link 
            href={`/en/tag/${tagSlug}`} 
            className={lang === 'en' ? 'active-lang' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            EN
          </Link>
        </>
      ) : (
        <>
          <Link href="/es" className={lang === 'es' ? 'active-lang' : ''} onClick={() => isMobile && setIsMenuOpen(false)}>ES</Link>
          <span className="lang-divider">|</span>
          <Link href="/en" className={lang === 'en' ? 'active-lang' : ''} onClick={() => isMobile && setIsMenuOpen(false)}>EN</Link>
        </>
      )}
    </div>
  );

  return (
    <div ref={menuRef}>
      {/* Encabezado Fijo para Móvil (< 768px): "Javier Abundis" + Botón Hamburguesa */}
      {isMobile && (
        <header className="mobile-header-bar">
          <Link
            href={`/${lang}`}
            className="mobile-header-brand"
            onClick={() => setIsMenuOpen(false)}
          >
            Javier Abundis
          </Link>
          <button
            type="button"
            className="mobile-header-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              key={isMenuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.div>
          </button>
        </header>
      )}

      {/* Menú Overlay Móvil con Framer Motion */}
      {isMobile ? (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="anchor-nav-overlay detail-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
            >
              <div className="menu-content-mobile">
                <motion.div variants={itemVariants} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Link
                    href={`/${lang}#inicio`}
                    className="dot"
                    title={lang === 'es' ? 'Biografía' : 'Biography'}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaUser size={18} />
                    {lang === 'es' ? 'Biografía' : 'Biography'}
                  </Link>
                </motion.div>

                {post.type && (
                  <motion.div variants={itemVariants} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Link
                      href={`/${lang}#${categoryAnchor}`}
                      className="dot"
                      title={categoryLabels[lang][categoryAnchor]}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaFolderOpen size={18} />
                      {categoryLabels[lang][categoryAnchor]}
                    </Link>
                  </motion.div>
                )}

                {renderPostLinks() && (
                  <motion.div variants={itemVariants} style={{ width: '100%' }}>
                    {renderPostLinks()}
                  </motion.div>
                )}

                <motion.div className="socials" variants={itemVariants}>
                  <a href="https://github.com/abundis-rmn2" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/abundis-sociologia/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="mailto:abundiscomunicacion@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                    <FaEnvelope size={24} />
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  {renderLangSelector()}
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      ) : (
        /* Menú Desktop Lateral */
        <nav className="anchor-nav detail-menu">
          <div className="menu-content">
            <Link href={`/${lang}`} className="menu-brand">
              Javier Abundis
            </Link>

            <Link
              href={`/${lang}#inicio`}
              className="dot"
              title={lang === 'es' ? 'Biografía' : 'Biography'}
            >
              <FaUser size={15} />
              {lang === 'es' ? 'Biografía' : 'Biography'}
            </Link>

            {post.type && (
              <Link
                href={`/${lang}#${categoryAnchor}`}
                className="dot"
                title={categoryLabels[lang][categoryAnchor]}
              >
                <FaFolderOpen size={15} />
                {categoryLabels[lang][categoryAnchor]}
              </Link>
            )}

            {renderPostLinks()}

            <div className="socials">
              <a href="https://github.com/abundis-rmn2" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/abundis-sociologia/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:abundiscomunicacion@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                <FaEnvelope size={22} />
              </a>
            </div>

            {renderLangSelector()}
          </div>
        </nav>
      )}
    </div>
  );
};

export default DetailMenu;
