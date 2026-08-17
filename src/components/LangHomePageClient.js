"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { motion } from 'framer-motion';

import Bio from './Bio';
import AnchorMenu from './AnchorMenu';
import GlobalList from './GlobalList';
import {
  ThesisList,
  ArticleList,
  TalkList,
  CodeProjectsList,
  MultimediaList,
  MediaAppearancesList
} from './SectionList';

export default function LangHomePageClient({ lang }) {
  const [activeSection, setActiveSection] = useState("bio");
  const lenis = useLenis();
  const networkGraphRef = useRef(null);

  const sections = [
    { id: "bio", label: lang === 'es' ? "Inicio" : "Home" },
    { id: "education", label: lang === 'es' ? "Educación" : "Education" },
    { id: "articles", label: lang === 'es' ? "Artículos" : "Articles" },
    { id: "talks", label: lang === 'es' ? "Ponencias" : "Talks" },
    { id: "code", label: lang === 'es' ? "Código" : "Code" },
    { id: "multimedia", label: "Multimedia" },
    { id: "media", label: lang === 'es' ? "Prensa" : "Media" },
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
                {id === "bio" && <Bio lang={lang} />}
                {id === "education" && <ThesisList lang={lang} />}
                {id === "articles" && <ArticleList lang={lang} />}
                {id === "talks" && <TalkList lang={lang} />}
                {id === "code" && <CodeProjectsList lang={lang} />}
                {id === "multimedia" && <MultimediaList lang={lang} />}
                {id === "media" && <MediaAppearancesList lang={lang} />}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </ReactLenis>
  );
}
