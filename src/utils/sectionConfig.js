import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaCode, 
  FaGraduationCap, 
  FaNewspaper 
} from 'react-icons/fa';

/**
 * Single Source of Truth para iconos, símbolos SVG y metadata de las secciones del portafolio.
 * Consumido por AnchorMenu, LangHomePageClient y el Grafo 3D (NetworkGraphComponent).
 */
export const SECTIONS_CONFIG = [
  {
    id: "grafo",
    sectionId: "grafo",
    hubId: "hub-inicio",
    svgPath: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.94-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L400 480a16 16 0 0 0 16-16V300L295.67 148.26a16 16 0 0 0-15.3-0.03zM502.67 212.5L311.66 61.1a48 48 0 0 0-63.32 0L57.33 212.5a16 16 0 0 0-2.25 22.41l22.42 28.5a16 16 0 0 0 22.41 2.25L256 142.14l156.09 123.52a16 16 0 0 0 22.41-2.25l22.42-28.5a16 16 0 0 0-2.25-22.41z",
    icon: FaHome,
    labels: { es: "Inicio", en: "Home" },
    color: "#FF0000"
  },
  {
    id: "inicio",
    sectionId: "inicio",
    hubId: "hub-inicio",
    svgPath: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
    icon: FaUser,
    labels: { es: "Biografía", en: "Biography" },
    color: "#FF0000"
  },
  {
    id: "experiencia",
    sectionId: "experiencia",
    hubId: "hub-experiencia",
    svgPath: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48h128v48zm144-160h-128V112c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v64H32c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V208c0-17.67-14.33-32-32-32zm-256-64c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v64H208v-64z",
    icon: FaBriefcase,
    labels: { es: "Experiencia", en: "Experience" },
    color: "#111111"
  },
  {
    id: "proyectos",
    sectionId: "proyectos",
    hubId: "hub-proyectos",
    svgPath: "M278.9 69.9l-112 368c-4.7 15.4-21.5 24.1-37 19.3-15.4-4.7-24.1-21.5-19.3-37l112-368c4.7-15.4 21.5-24.1 37-19.3 15.4 4.8 24.1 21.5 19.3 37zm-203.4 114.7l-104.5 96c-14.6 13.4-14.6 36.8 0 50.2l104.5 96c13.7 12.6 34.9 11.7 47.5-2 12.6-13.7 11.7-34.9-2-47.5l-77.2-70.9 77.2-70.9c13.7-12.6 14.6-33.8 2-47.5-12.6-13.7-33.8-14.6-47.5-2zm353 0c-13.7-12.6-34.9-11.7-47.5 2-12.6 13.7-11.7 34.9 2 47.5l77.2 70.9-77.2 70.9c-13.7 12.6-14.6 33.8-2 47.5 12.6 13.7 33.8 14.6 47.5 2l104.5-96c14.6-13.4 14.6-36.8 0-50.2l-104.5-96z",
    icon: FaCode,
    labels: { es: "Proyectos", en: "Projects" },
    color: "#E60000"
  },
  {
    id: "academia",
    sectionId: "academia",
    hubId: "hub-academia",
    svgPath: "M496 128L256 32 16 128l240 96 240-96zM256 320l-160-64v64c0 70.7 71.6 128 160 128s160-57.3 160-128v-64l-160 64zm176-128v128c0 17.7 14.3 32 32 32s32-14.3 32-32V192l-64 32z",
    icon: FaGraduationCap,
    labels: { es: "Academia", en: "Academy" },
    color: "#222222"
  },
  {
    id: "prensa",
    sectionId: "prensa",
    hubId: "hub-prensa",
    svgPath: "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384c35.3 0 64-28.7 64-64V384c0-17.7-14.3-32-32-32H384V96c0-53-43-96-96-96H96zM288 352V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32V416c0 17.7 14.3 32 32 32H384c0-17.7 14.3-32 32-32V384H320c-17.7 0-32-14.3-32-32zM128 128h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
    icon: FaNewspaper,
    labels: { es: "Prensa", en: "Media" },
    color: "#FF3333"
  }
];

export const getSectionConfig = (id) => {
  return SECTIONS_CONFIG.find(s => s.id === id || s.sectionId === id || s.hubId === id);
};
