"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { motion } from 'framer-motion';

import Bio from './Bio';
import AnchorMenu from './AnchorMenu';
import GlobalList from './GlobalList';
import ExperienceList from './ExperienceList';
import {
  ProjectsSection,
  AcademySection,
  MediaAppearancesList
} from './SectionList';

export default function LangHomePageClient({ lang }) {
  const [activeSection, setActiveSection] = useState("inicio");
  const lenis = useLenis();
  const networkGraphRef = useRef(null);

  const sections = [
    { id: "inicio", label: lang === 'es' ? "Inicio" : "Home" },
    { id: "experiencia", label: lang === 'es' ? "Experiencia" : "Experience" },
    { id: "proyectos", label: lang === 'es' ? "Proyectos" : "Projects" },
    { id: "academia", label: lang === 'es' ? "Academia" : "Academy" },
    { id: "prensa", label: lang === 'es' ? "Prensa" : "Media" },
  ];

  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.6 } }
  };

  useEffect(() => {
    if (lenis) {
      lenis.options.duration = 2;
      lenis.options.easing = (t) => 1 - Math.pow(1 - t, 3);
      lenis.options.smooth = true;
      lenis.options.smoothTouch = true;
    }
  }, [lenis]);

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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, lenis]);

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
      if (networkGraphRef.current) {
        networkGraphRef.current.applyEffect();
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
        {/* Fondo 3D */}
        <div className="global-background">
          <GlobalList ref={networkGraphRef} lang={lang} />
        </div>

        {/* Menú de navegación flotante con idioma activo */}
        <AnchorMenu 
          sections={sections} 
          activeSection={activeSection} 
          networkGraphRef={networkGraphRef}
          lang={lang}
        />

        {/* Contenedor del portafolio */}
        <div className="content">
          {sections.map(({ id }) => (
            <div className="wrapper" key={id} id={id}>
              <div>
                {id === "inicio" && <Bio lang={lang} />}
                {id === "experiencia" && <ExperienceList lang={lang} networkGraphRef={networkGraphRef} />}
                {id === "proyectos" && <ProjectsSection lang={lang} networkGraphRef={networkGraphRef} />}
                {id === "academia" && <AcademySection lang={lang} networkGraphRef={networkGraphRef} />}
                {id === "prensa" && <MediaAppearancesList lang={lang} networkGraphRef={networkGraphRef} />}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </ReactLenis>
  );
}
