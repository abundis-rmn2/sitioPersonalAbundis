"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';
import { motion } from 'framer-motion';

import Bio from './Bio';
import AnchorMenu from './AnchorMenu';
import GlobalList from './GlobalList';
import ExperienceList from './ExperienceList';
import { cvPosts } from '../data/cvData';
import { SECTIONS_CONFIG } from '../utils/sectionConfig';
import {
  ProjectsSection,
  AcademySection,
  MediaAppearancesList
} from './sections';

import useIsMobile from '../utils/useIsMobile';

export default function LangHomePageClient({ lang, initialSection }) {
  const [activeSection, setActiveSection] = useState(initialSection || "grafo");
  const lenis = useLenis();
  const router = useRouter();
  const networkGraphRef = useRef(null);
  const isMobile = useIsMobile();
  const hasScrolledInitial = useRef(false);

  const sections = SECTIONS_CONFIG.map((s) => ({
    id: s.id,
    label: s.labels[lang] || s.labels['es']
  }));

  const handleNodeNavigate = (sectionId, nodeId) => {
    // Si es un nodo de item individual (post), navegar a la página de detalle interior
    if (nodeId) {
      const post = cvPosts.find((p) => p.id === nodeId);
      if (post && post.categories && post.slugs) {
        const cat = post.categories[lang] || post.categories['es'];
        const slug = post.slugs[lang] || post.slugs['es'];
        if (cat && slug) {
          router.push(`/${lang}/${cat}/${slug}`);
          return;
        }
      }
    }

    // Si es un nodo de categoría Hub, desplazar suavemente a la sección
    const targetSection = sectionId || "inicio";
    if (lenis) {
      lenis.scrollTo(`#${targetSection}`);
      const newPath = targetSection === "inicio" || targetSection === "grafo" ? `/${lang}` : `/${lang}/${targetSection}`;
      window.history.pushState(null, '', newPath);
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.6 } }
  };

  useEffect(() => {
    if (lenis) {
      lenis.options.duration = isMobile ? 1.2 : 2;
      lenis.options.easing = (t) => 1 - Math.pow(1 - t, 3);
      lenis.options.smooth = !isMobile;
      lenis.options.smoothTouch = false;

      if (initialSection && !hasScrolledInitial.current && initialSection !== 'grafo') {
        hasScrolledInitial.current = true;
        // Scroll sin animación al inicio para SEO routing
        lenis.scrollTo(`#${initialSection}`, { immediate: true });
      }
    }
  }, [lenis, isMobile, initialSection]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const currentIndex = sections.findIndex((s) => s.id === activeSection);
      let nextIndex = currentIndex;

      if (event.key === "ArrowDown" && currentIndex < sections.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (event.key === "ArrowUp" && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        lenis?.scrollTo(`#${sections[nextIndex].id}`);
        const nextId = sections[nextIndex].id;
        const newPath = nextId === "inicio" || nextId === "grafo" ? `/${lang}` : `/${lang}/${nextId}`;
        window.history.pushState(null, '', newPath);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, lenis, sections, lang]);

  useLenis(() => {
    let currentSection = "";
    
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
          currentSection = id;
        }
      }
    });

    if (currentSection && currentSection !== activeSection) {
      setActiveSection(currentSection);
      
      // Actualizar URL dinámicamente sin recargar la página
      const newPath = currentSection === "inicio" || currentSection === "grafo" ? `/${lang}` : `/${lang}/${currentSection}`;
      if (window.location.pathname !== newPath) {
        window.history.replaceState(null, '', newPath);
      }

      if (networkGraphRef.current) {
        const sectionToNodeMap = {
          "grafo": "hub-inicio",
          "inicio": "hub-inicio",
          "experiencia": "hub-experiencia",
          "proyectos": "hub-proyectos",
          "academia": "hub-academia",
          "prensa": "hub-prensa"
        };
        const targetNodeId = sectionToNodeMap[currentSection];
        if (targetNodeId) {
          networkGraphRef.current.highlightIDCall(targetNodeId);
        }
      }
    }
  });

  return (
    <ReactLenis root>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {/* Fondo 3D interactivo */}
        <div className="global-background">
          <GlobalList ref={networkGraphRef} lang={lang} onNodeNavigate={handleNodeNavigate} />
        </div>

        {/* Menú de navegación flotante */}
        <AnchorMenu 
          sections={sections} 
          activeSection={activeSection} 
          networkGraphRef={networkGraphRef}
          lang={lang}
        />

        {/* Contenedor del portafolio */}
        <div className="content">
          {sections.map(({ id }) => (
            <div className={`wrapper ${id === 'grafo' ? 'hero-graph-wrapper' : ''}`} key={id} id={id}>
              {id === "grafo" ? (
                !isMobile && (
                  <div className="hero-graph-banner">
                    <div className="hero-graph-badge">
                      <span>{lang === 'es' ? '★ Inicio' : '★ Home'}</span>
                      <p>{lang === 'es' ? 'Haz clic en cualquier nodo para explorar las secciones' : 'Click on any node to jump to sections'}</p>
                    </div>
                  </div>
                )
              ) : (
                <div>
                  {id === "inicio" && <Bio lang={lang} />}
                  {id === "experiencia" && <ExperienceList lang={lang} networkGraphRef={networkGraphRef} />}
                  {id === "proyectos" && <ProjectsSection lang={lang} networkGraphRef={networkGraphRef} />}
                  {id === "academia" && <AcademySection lang={lang} networkGraphRef={networkGraphRef} />}
                  {id === "prensa" && <MediaAppearancesList lang={lang} networkGraphRef={networkGraphRef} />}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </ReactLenis>
  );
}
