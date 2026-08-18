"use client";

import React from 'react';
import { useLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBriefcase, FaCode, FaGraduationCap, FaNewspaper } from 'react-icons/fa';

const MENU_ITEMS = [
  { id: 'inicio', label: { es: 'Biografía', en: 'Biography' }, icon: FaUser, hubId: 'hub-inicio' },
  { id: 'experiencia', label: { es: 'Experiencia', en: 'Experience' }, icon: FaBriefcase, hubId: 'hub-experiencia' },
  { id: 'proyectos', label: { es: 'Proyectos', en: 'Projects' }, icon: FaCode, hubId: 'hub-proyectos' },
  { id: 'academia', label: { es: 'Academia', en: 'Academy' }, icon: FaGraduationCap, hubId: 'hub-academia' },
  { id: 'prensa', label: { es: 'Prensa', en: 'Media' }, icon: FaNewspaper, hubId: 'hub-prensa' }
];

export default function HeroCircularMenu({ 
  lang = 'es', 
  networkGraphRef, 
  activeSection, 
  hoveredSection, 
  onHoverSection 
}) {
  const lenis = useLenis();

  const isHeroActive = activeSection === 'grafo';

  const handleNodeClick = (e, item) => {
    e.preventDefault();
    const sectionId = item.id;

    if (lenis) {
      lenis.scrollTo(`#${sectionId}`);
    }

    const newPath = sectionId === "inicio" ? `/${lang}` : `/${lang}/${sectionId}`;
    window.history.pushState(null, '', newPath);

    if (networkGraphRef?.current && item.hubId) {
      networkGraphRef.current.zoomToID(item.hubId);
      networkGraphRef.current.highlightIDCall(item.hubId);
    }
  };

  const handleNodeHover = (item) => {
    if (onHoverSection) onHoverSection(item.id);
    if (networkGraphRef?.current && item.hubId) {
      networkGraphRef.current.zoomToID(item.hubId);
      networkGraphRef.current.highlightIDCall(item.hubId);
    }
  };

  const handleNodeLeave = () => {
    if (onHoverSection) onHoverSection(null);
  };

  const total = MENU_ITEMS.length;

  const currentHoveredItem = MENU_ITEMS.find(item => item.id === hoveredSection);
  const displayedTitle = currentHoveredItem 
    ? (currentHoveredItem.label[lang] || currentHoveredItem.label['es']) 
    : null;

  // Índice del nodo actualmente en hover para el efecto macOS Dock
  const hoveredIndex = MENU_ITEMS.findIndex(item => item.id === hoveredSection);

  // Calcula el escalado progresivo al DOBLE de tamaño (2.1x) según la distancia cíclica en el Dock
  const getNodeScale = (index) => {
    if (hoveredIndex === -1) return 1.0;
    const diff = Math.abs(index - hoveredIndex);
    const cyclicDist = Math.min(diff, total - diff);

    if (cyclicDist === 0) return 2.1; // Magnificación al DOBLE de tamaño (2.1x)
    if (cyclicDist === 1) return 1.55; // Vecinos inmediatos amplificados al 1.55x
    return 1.0;                        // Nodos lejanos
  };

  return (
    <div className={`hero-circular-menu-wrapper ${!isHeroActive ? 'hidden' : ''}`}>
      <div className="hero-circular-ring">
        {/* Anillo de conexión continua sólida fija de 4px */}
        <svg className="hero-circular-svg" viewBox="0 0 200 200">
          <circle 
            cx="100" 
            cy="100" 
            r="90" 
            fill="none" 
            stroke="#e60000" 
            strokeWidth="4" 
            opacity="0.55" 
          />
        </svg>

        {/* Leyenda Central Dinámica (Solo en Hover: Recuadro Negro con Texto Blanco en Negritas, Bordes Rectos) */}
        <div className="hero-circular-center-container">
          <AnimatePresence mode="wait">
            {isHeroActive && displayedTitle && (
              <motion.div
                key={displayedTitle}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="hero-circular-sharp-box"
              >
                <span className="hero-sharp-box-title">
                  {displayedTitle}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 5 Puntos Nodos distribuidos en 360° con efecto macOS Dock Magnification AL DOBLE */}
        {MENU_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const angleInDeg = -90 + index * (360 / total);
          const angleInRad = (angleInDeg * Math.PI) / 180;
          const xPercent = 50 + 50 * Math.cos(angleInRad);
          const yPercent = 50 + 50 * Math.sin(angleInRad);

          const isDirectHover = hoveredIndex === index;
          const isSelected = hoveredSection
            ? (hoveredSection === item.id || (hoveredSection === 'grafo' && item.id === 'inicio'))
            : (activeSection === item.id || (activeSection === 'grafo' && item.id === 'inicio'));

          const diff = Math.abs(index - hoveredIndex);
          const cyclicDist = hoveredIndex === -1 ? 99 : Math.min(diff, total - diff);

          return (
            <div
              key={item.id}
              className="hero-circular-node-container"
              style={{
                left: `${xPercent}%`,
                top: `${yPercent}%`,
                zIndex: isDirectHover ? 30 : (cyclicDist === 1 ? 20 : 10)
              }}
            >
              <motion.button
                type="button"
                className={`hero-circular-node-btn ${isSelected ? 'active' : ''}`}
                onClick={(e) => handleNodeClick(e, item)}
                onMouseEnter={() => handleNodeHover(item)}
                onMouseLeave={handleNodeLeave}
                animate={{ 
                  scale: getNodeScale(index),
                  backgroundColor: isDirectHover ? '#e60000' : (isSelected ? '#e60000' : 'rgba(255, 255, 255, 0.96)'),
                  color: (isDirectHover || isSelected) ? '#ffffff' : '#e60000',
                  boxShadow: isDirectHover 
                    ? '0 12px 32px rgba(230, 0, 0, 0.55)' 
                    : (isSelected ? '0 6px 18px rgba(230, 0, 0, 0.4)' : '0 4px 14px rgba(230, 0, 0, 0.2)')
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 380, 
                  damping: 22 
                }}
                whileTap={{ scale: 0.92 }}
                aria-label={item.label[lang] || item.label['es']}
                title={item.label[lang] || item.label['es']}
              >
                <Icon size={20} />
              </motion.button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
