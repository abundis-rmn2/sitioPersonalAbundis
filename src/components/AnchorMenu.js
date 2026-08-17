import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars } from "react-icons/fa";
import { useLenis } from "lenis/react";
import { getSectionConfig } from "../utils/sectionConfig";

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

  const handleAnchorHover = (id) => {
    if (id === 'grafo') return;
    if (networkGraphRef?.current && sectionToNodeMap[id]) {
      networkGraphRef.current.highlightIDCall(sectionToNodeMap[id]);
      networkGraphRef.current.zoomToID(sectionToNodeMap[id]);
    }
  };

  const handleAnchorClick = async (e, id) => {
    e.preventDefault();
    lenis?.scrollTo(`#${id}`);

    if (id === 'grafo') {
      if (networkGraphRef?.current) {
        networkGraphRef.current.resetToHomeView();
      }
    } else if (networkGraphRef?.current && sectionToNodeMap[id]) {
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
        <Link
          href={`/${lang}#grafo`}
          className="menu-brand"
          onClick={(e) => handleAnchorClick(e, 'grafo')}
        >
          Javi Abundis
        </Link>
        {sections.map(({ id, label }) => {
          const config = getSectionConfig(id);
          const IconComponent = config?.icon;

          return (
            <Link
              key={id}
              href={`/${lang}#${id}`}
              className={`dot ${activeSection === id ? "active" : ""}`}
              title={label}
              onClick={(e) => handleAnchorClick(e, id)}
              onMouseEnter={() => handleAnchorHover(id)}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              {IconComponent && <IconComponent size={14} style={{ flexShrink: 0 }} />}
              <span>{label}</span>
            </Link>
          );
        })}
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
      </div>
    </div>
  );
};

export default AnchorMenu;
