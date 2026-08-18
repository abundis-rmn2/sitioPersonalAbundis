import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes, FaFilePdf } from "react-icons/fa";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { getSectionConfig } from "../utils/sectionConfig";
import useIsMobile from "../utils/useIsMobile";

const AnchorMenu = ({ sections, activeSection, hoveredSection, onHoverSection, networkGraphRef, lang = 'es' }) => {
  const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const menuRef = useRef(null);
  const isMobile = useIsMobile();

  // Auto-expandir el menú solo la primera vez que se carga en móvil
  useEffect(() => {
    if (isMobile && !hasOpenedOnce) {
      const timer = setTimeout(() => {
        setIsMenuOpen(true);
        setHasOpenedOnce(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isMobile, hasOpenedOnce]);

  // Mapear nombres de sección a IDs clave de nodos en el grafo
  const sectionToNodeMap = {
    "grafo": "hub-inicio",
    "inicio": "hub-inicio",
    "experiencia": "hub-experiencia",
    "proyectos": "hub-proyectos",
    "academia": "hub-academia",
    "prensa": "hub-prensa"
  };

  const handleAnchorHover = (id) => {
    if (onHoverSection) onHoverSection(id);
    if (id === 'grafo') return;
    if (networkGraphRef?.current && sectionToNodeMap[id]) {
      networkGraphRef.current.highlightIDCall(sectionToNodeMap[id]);
      networkGraphRef.current.zoomToID(sectionToNodeMap[id]);
    }
  };

  const handleAnchorLeave = () => {
    if (onHoverSection) onHoverSection(null);
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    lenis?.scrollTo(`#${id}`);

    const newPath = id === "inicio" || id === "grafo" ? `/${lang}` : `/${lang}/${id}`;
    window.history.pushState(null, '', newPath);

    if (id === 'grafo') {
      if (networkGraphRef?.current) {
        networkGraphRef.current.resetToHomeView();
      }
    } else if (networkGraphRef?.current && sectionToNodeMap[id]) {
      networkGraphRef.current.zoomToID(sectionToNodeMap[id]);
      networkGraphRef.current.highlightIDCall(sectionToNodeMap[id]);
    }

    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Cierra el menú al hacer clic fuera o presionar Esc
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

  // Secciones filtradas para móvil (incluye Biografía 'inicio', omite solo la vista del 'grafo')
  const mobileSections = sections.filter(({ id }) => id !== 'grafo');

  // Variantes de Framer Motion para animación escalonada (Stagger)
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

  return (
    <div ref={menuRef}>
      {/* Encabezado Fijo para Móvil (< 768px): "Javier Abundis" + Botón Hamburguesa */}
      {isMobile && (
        <header className="mobile-header-bar">
          <Link
            href={`/${lang}`}
            className="mobile-header-brand"
            onClick={(e) => handleAnchorClick(e, 'grafo')}
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

      {/* Menú Overlay o Escritorio con Framer Motion */}
      {isMobile ? (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="anchor-nav-overlay"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
            >
              <div className="menu-content-mobile">
                {mobileSections.map(({ id, label }) => {
                  const config = getSectionConfig(id);
                  const IconComponent = config?.icon;

                  return (
                    <motion.div key={id} variants={itemVariants} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                      <Link
                        href={id === 'inicio' ? `/${lang}` : `/${lang}/${id}`}
                        className={`dot ${activeSection === id ? "active" : ""}`}
                        title={label}
                        onClick={(e) => handleAnchorClick(e, id)}
                      >
                        {IconComponent && <IconComponent size={18} style={{ flexShrink: 0 }} />}
                        <span>{label}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div variants={itemVariants} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Link
                    href={`/${lang}/cv`}
                    className={`dot cv-pdf-link ${activeSection === 'cv' ? 'active' : ''}`}
                    title={lang === 'es' ? 'Curriculum' : 'Resume'}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaFilePdf size={18} style={{ flexShrink: 0, color: '#e60000' }} />
                    <span>{lang === 'es' ? 'Curriculum' : 'Resume'}</span>
                  </Link>
                </motion.div>

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

                <motion.div className="lang-selector" variants={itemVariants}>
                  <Link 
                    href="/es" 
                    className={lang === 'es' ? 'active-lang' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ES
                  </Link>
                  <span className="lang-divider">|</span>
                  <Link 
                    href="/en" 
                    className={lang === 'en' ? 'active-lang' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    EN
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      ) : (
        /* Menú Desktop Lateral */
        <nav className="anchor-nav">
          <div className="menu-content">
            <Link
              href={`/${lang}`}
              className="menu-brand"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              onClick={(e) => handleAnchorClick(e, 'grafo')}
            >
              <img 
                src="/javier-abundis.png" 
                alt="Javier Abundis"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid var(--color-principal)',
                  flexShrink: 0
                }}
              />
              <span>Javier Abundis</span>
            </Link>
            {sections.map(({ id, label }) => {
              const config = getSectionConfig(id);
              const IconComponent = config?.icon;
              const isSelected = hoveredSection ? hoveredSection === id : activeSection === id;

              return (
                <Link
                  key={id}
                  href={id === 'inicio' ? `/${lang}` : `/${lang}/${id}`}
                  className={`dot ${isSelected ? "active" : ""}`}
                  title={label}
                  onClick={(e) => handleAnchorClick(e, id)}
                  onMouseEnter={() => handleAnchorHover(id)}
                  onMouseLeave={handleAnchorLeave}
                >
                  {IconComponent && <IconComponent size={14} style={{ flexShrink: 0 }} />}
                  <span>{label}</span>
                </Link>
              );
            })}

            <Link
              href={`/${lang}/cv`}
              className={`dot cv-pdf-link ${activeSection === 'cv' ? 'active' : ''}`}
              title={lang === 'es' ? 'Curriculum' : 'Resume'}
            >
              <FaFilePdf size={14} style={{ flexShrink: 0, color: '#e60000' }} />
              <span>{lang === 'es' ? 'Curriculum' : 'Resume'}</span>
            </Link>

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

            <div className="lang-selector">
              <Link 
                href="/es" 
                className={lang === 'es' ? 'active-lang' : ''}
              >
                ES
              </Link>
              <span className="lang-divider">|</span>
              <Link 
                href="/en" 
                className={lang === 'en' ? 'active-lang' : ''}
              >
                EN
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default AnchorMenu;
