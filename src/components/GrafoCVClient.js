'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaArrowLeft, 
  FaProjectDiagram, 
  FaSync, 
  FaFilter, 
  FaInfoCircle, 
  FaCompressArrowsAlt,
  FaExpandAlt,
  FaCompressAlt,
  FaSlidersH,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaNewspaper,
  FaTags,
  FaGlobe
} from 'react-icons/fa';
import GrafoCVNetwork from './GrafoCVNetwork';
import GrafoCVNodeModal from './GrafoCVNodeModal';

export default function GrafoCVClient({ lang = 'es' }) {
  const isEs = lang === 'es';
  const graphRef = useRef(null);

  const [selectedNode, setSelectedNode] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [autoRotate, setAutoRotate] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [chargeValue, setChargeValue] = useState(350);

  // Al iniciar la página, seleccionar y enfocar automáticamente el nodo central 'hub-inicio' (Ángel Javier Ramírez Abundis)
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (graphRef.current) {
        const initialNode = graphRef.current.zoomToID('hub-inicio');
        if (initialNode) {
          setSelectedNode(initialNode);
        }
      }
    }, 700);

    return () => clearTimeout(initialTimer);
  }, []);

  // Manejar selección de nodo desde el grafo o desde el modal (nodo vecino)
  const handleSelectNode = (nodeOrId) => {
    let targetId = typeof nodeOrId === 'object' ? nodeOrId.id : nodeOrId;
    if (graphRef.current) {
      const node = graphRef.current.zoomToID(targetId);
      if (node) {
        setSelectedNode(node);
      }
    }
  };

  const handleCloseModal = () => {
    setSelectedNode(null);
    setActiveFilter('all');
    if (graphRef.current) {
      graphRef.current.resetView();
    }
  };

  const handleBackgroundClick = () => {
    setSelectedNode(null);
    setActiveFilter('all');
  };

  const handleResetView = () => {
    setSelectedNode(null);
    setActiveFilter('all');
    setChargeValue(350);
    if (graphRef.current) {
      graphRef.current.setChargeStrength(350);
      graphRef.current.resetView();
    }
  };

  const handleToggleAutoRotate = () => {
    const nextState = !autoRotate;
    setAutoRotate(nextState);
    if (graphRef.current) {
      graphRef.current.toggleAutoRotate(nextState);
    }
  };

  const handleChargeChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setChargeValue(val);
    if (graphRef.current) {
      graphRef.current.setChargeStrength(val);
    }
  };

  const handleExpandGraph = () => {
    const nextVal = Math.min(800, chargeValue + 150);
    setChargeValue(nextVal);
    if (graphRef.current) {
      graphRef.current.setChargeStrength(nextVal);
    }
  };

  const handleContractGraph = () => {
    const nextVal = Math.max(100, chargeValue - 150);
    setChargeValue(nextVal);
    if (graphRef.current) {
      graphRef.current.setChargeStrength(nextVal);
    }
  };

  const handleFocusNode = (nodeId) => {
    if (graphRef.current) {
      graphRef.current.zoomToID(nodeId);
    }
  };

  const allNodes = graphRef.current ? graphRef.current.getAllNodes() : [];

  return (
    <div className="grafo-cv-wrapper">
      
      {/* Barra de Herramientas Superior Fija */}
      <header className="grafo-cv-toolbar">
        <div className="grafo-cv-toolbar-container">
          
          {/* Lado Izquierdo: Volver al CV y Título */}
          <div className="toolbar-left">
            <Link href={`/${lang}/cv`} className="grafo-cv-btn-back">
              <FaArrowLeft style={{ marginRight: '6px' }} />
              {isEs ? 'Volver al CV' : 'Back to CV'}
            </Link>

            <div className="grafo-cv-title-badge">
              <FaProjectDiagram className="badge-icon" />
              <span>{isEs ? 'Grafo Interactivo del CV' : 'Interactive CV Graph'}</span>
            </div>
          </div>

          {/* Lado Derecho: Idioma, Filtros y Acciones de Cámara */}
          <div className="toolbar-right">
            
            {/* Controles de Cámara y Gravedad */}
            <div className="camera-controls">

              {/* Control Slider Range de Expansión / Gravedad */}
              <div className="grafo-cv-slider-group" title={isEs ? `Ajustar expansión / repulsión del grafo (${chargeValue}px)` : `Adjust graph expansion (${chargeValue}px)`}>
                <span className="slider-label">
                  <FaSlidersH style={{ marginRight: '4px', color: '#e60000' }} />
                  {isEs ? 'Expansión:' : 'Expansion:'}
                </span>
                <input 
                  type="range"
                  min="100"
                  max="800"
                  step="10"
                  value={chargeValue}
                  onChange={handleChargeChange}
                  className="grafo-cv-range-input"
                />
                <span className="slider-value-badge">{chargeValue}</span>
              </div>

              <button 
                type="button" 
                onClick={handleExpandGraph} 
                className="control-btn"
                title={isEs ? 'Expandir Grafo (+ repulsión)' : 'Expand Graph (+ repulsion)'}
              >
                <FaExpandAlt style={{ marginRight: '4px' }} />
              </button>

              <button 
                type="button" 
                onClick={handleContractGraph} 
                className="control-btn"
                title={isEs ? 'Contraer Grafo (- repulsión)' : 'Condense Graph (- repulsion)'}
              >
                <FaCompressAlt style={{ marginRight: '4px' }} />
              </button>

              <button 
                type="button" 
                onClick={handleResetView} 
                className="control-btn"
                title={isEs ? 'Restablecer Vista General' : 'Reset General View'}
              >
                <FaCompressArrowsAlt style={{ marginRight: '5px' }} />
                {isEs ? 'Vista General' : 'Reset View'}
              </button>

              <button 
                type="button" 
                onClick={handleToggleAutoRotate} 
                className={`control-btn ${autoRotate ? 'active' : ''}`}
                title={isEs ? 'Alternar Rotación Automática' : 'Toggle Auto Rotation'}
              >
                <FaSync style={{ marginRight: '5px' }} className={autoRotate ? 'spinning' : ''} />
                {isEs ? 'Auto-Giro' : 'Auto-Rotate'}
              </button>

              <button 
                type="button" 
                onClick={() => setShowHelp(!showHelp)} 
                className="control-btn icon-only"
                title={isEs ? 'Instrucciones de Navegación' : 'Navigation Help'}
              >
                <FaInfoCircle />
              </button>
            </div>

            {/* Selector de Idioma */}
            <div className="grafo-cv-lang-switch">
              <Link href="/es/grafo-cv" className={isEs ? 'active-lang' : ''}>ES</Link>
              <span className="divider">|</span>
              <Link href="/en/grafo-cv" className={!isEs ? 'active-lang' : ''}>EN</Link>
            </div>

          </div>

        </div>

        {/* Barra de Filtros por Categoría */}
        <div className="grafo-cv-filter-bar">
          <div className="filter-label">
            <FaFilter style={{ marginRight: '6px' }} />
            <span>{isEs ? 'Filtrar Red:' : 'Filter Network:'}</span>
          </div>

          <div className="filter-pills">
            <button 
              type="button" 
              className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {isEs ? 'Todos los Nodos' : 'All Nodes'}
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeFilter === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveFilter('experience')}
            >
              <FaBriefcase style={{ marginRight: '4px' }} />
              {isEs ? 'Experiencia' : 'Experience'}
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeFilter === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveFilter('projects')}
            >
              <FaCode style={{ marginRight: '4px' }} />
              {isEs ? 'Proyectos & IA' : 'Projects & AI'}
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeFilter === 'academia' ? 'active' : ''}`}
              onClick={() => setActiveFilter('academia')}
            >
              <FaGraduationCap style={{ marginRight: '4px' }} />
              {isEs ? 'Academia & Tesis' : 'Academy'}
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeFilter === 'media' ? 'active' : ''}`}
              onClick={() => setActiveFilter('media')}
            >
              <FaNewspaper style={{ marginRight: '4px' }} />
              {isEs ? 'Prensa & Medios' : 'Press'}
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeFilter === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveFilter('skills')}
            >
              <FaTags style={{ marginRight: '4px' }} />
              {isEs ? 'Habilidades' : 'Skills'}
            </button>
          </div>
        </div>
      </header>

      {/* Modal de Ayuda / Instrucciones de Navegación */}
      {showHelp && (
        <div className="grafo-cv-help-overlay" onClick={() => setShowHelp(false)}>
          <div className="grafo-cv-help-box" onClick={(e) => e.stopPropagation()}>
            <h3>💡 {isEs ? '¿Cómo explorar el Grafo CV?' : 'How to explore the CV Graph?'}</h3>
            <ul>
              <li><strong>🎯 {isEs ? 'Clic en cualquier Nodo:' : 'Click any Node:'}</strong> {isEs ? 'La cámara vuela suavemente hacia el nodo y se despliega la ventana flotante con sus detalles completos.' : 'The 3D camera smoothly flies to the node and opens a detail modal window.'}</li>
              <li><strong>🔗 {isEs ? 'Navegación por Conexiones:' : 'Connection Traversal:'}</strong> {isEs ? 'Dentro de la ventana modal puedes hacer clic en "Nodos Conectados" para saltar de un tema a otro recorriendo la red.' : 'Inside the modal, click any "Connected Node" to jump between related topics across the graph.'}</li>
              <li><strong>🖱️ {isEs ? 'Controles 3D:' : '3D Controls:'}</strong> {isEs ? 'Arrastra con el ratón para rotar el grafo 3D. Usa la rueda para hacer zoom.' : 'Drag with your mouse to rotate the 3D graph. Scroll to zoom.'}</li>
            </ul>
            <button type="button" className="grafo-cv-btn primary" onClick={() => setShowHelp(false)}>
              {isEs ? 'Entendido, ¡Comenzar!' : 'Got it, let\'s explore!'}
            </button>
          </div>
        </div>
      )}

      {/* Lienzo WebGL 3D Principal */}
      <main className="grafo-cv-main-stage">
        <GrafoCVNetwork 
          ref={graphRef}
          lang={lang}
          activeFilter={activeFilter}
          onNodeSelect={setSelectedNode}
          onBackgroundClick={handleBackgroundClick}
        />
      </main>

      {/* Ventana Modal Flotante de Información del Nodo */}
      {selectedNode && (
        <GrafoCVNodeModal 
          node={selectedNode}
          lang={lang}
          allNodes={allNodes}
          onClose={handleCloseModal}
          onSelectNode={handleSelectNode}
          onFocusNode={handleFocusNode}
        />
      )}

      {/* Leyenda Inferior Discreta */}
      {!selectedNode && (
        <footer className="grafo-cv-bottom-hint">
          <p>
            ✨ {isEs ? 'Haz clic en cualquier nodo para recorrer el grafo y abrir su información.' : 'Click any node to traverse the graph and view detailed information.'}
          </p>
        </footer>
      )}

    </div>
  );
}
