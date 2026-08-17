import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaProjectDiagram } from "react-icons/fa";
import { useLenis } from "lenis/react";

const AnchorMenu = ({ sections, activeSection, networkGraphRef, lang = 'es' }) => {
  const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Mapear nombres de sección a IDs clave de nodos en el grafo
  const sectionToNodeMap = {
    "grafo": "hub-inicio",
    "inicio": "hub-inicio",
    "experiencia": "hub-experiencia",
    "proyectos": "hub-proyectos",
    "academia": "hub-academia",
    "prensa": "hub-prensa"
  };

  const handleAnchorClick = async (e, id) => {
    e.preventDefault();
    lenis?.scrollTo(`#${id}`);

    if (networkGraphRef?.current && sectionToNodeMap[id]) {
      networkGraphRef.current.zoomToID(sectionToNodeMap[id]);
      networkGraphRef.current.highlightIDCall(sectionToNodeMap[id]);
    }

    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cierra el menú al hacer clic fuera en dispositivos móviles
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

  return (
    <div className={`anchor-nav ${isMenuOpen ? "mobile-open" : "mobile-closed"}`} ref={menuRef}>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars size={32} />
      </div>
      <div className="menu-content">
        {/* Selector de idioma Premium */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          fontSize: '0.9rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem', 
          background: 'transparent',
          alignSelf: 'center'
        }}>
          <Link 
            href="/es" 
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
            href="/en" 
            style={{ 
              color: lang === 'en' ? 'var(--color-principal)' : '#888', 
              textDecoration: 'none', 
              transition: 'color 0.3s'
            }}
          >
            EN
          </Link>
        </div>

        {sections.map(({ id, label }) => (
          <Link
            key={id}
            href={`/${lang}#${id}`}
            className={`dot ${activeSection === id ? "active" : ""}`}
            title={label}
            onClick={(e) => handleAnchorClick(e, id)}
          >
            {label}
          </Link>
        ))}
        <div className="socials">
          <a href="https://github.com/abundis-rmn2" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abundis-sociologia/" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:abundiscomunicacion@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope size={24} />
          </a>
          <a 
            href={`/${lang}#grafo`} 
            title={lang === 'es' ? "Ver Grafo 3D / Inicio" : "View 3D Graph / Home"} 
            style={{ color: activeSection === 'grafo' ? 'var(--color-principal)' : 'inherit' }}
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo('#grafo');
              if (networkGraphRef?.current) {
                networkGraphRef.current.setCameraPosition(0, 0, 350);
                networkGraphRef.current.highlightIDCall(99999999);
              }
              if (window.innerWidth <= 768) {
                setIsMenuOpen(false);
              }
            }}
          >
            <FaProjectDiagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnchorMenu;
