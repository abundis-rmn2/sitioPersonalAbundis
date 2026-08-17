import React, { useState } from 'react';
import { experienceData } from '../data/cvData';
import { useDebouncedHover } from '../utils/useDebouncedHover';

// ─── TAG COLORS v2 (same palette as NetworkGraphComponent.js nodeTypeColors) ───
const DOMINIO_COLORS = {
  'graffiti':                { bg: '#FF000018', border: '#FF0000', text: '#b30000' },
  'desapariciones-mx':       { bg: '#32CD3218', border: '#32CD32', text: '#1a6b1a' },
  'ciudad-espacio-publico':  { bg: '#FFA50018', border: '#FFA500', text: '#7a4e00' },
  'desarrollo-web-comercial':{ bg: '#00808018', border: '#008080', text: '#004d4d' },
  'comunicacion-politica':   { bg: '#1E90FF18', border: '#1E90FF', text: '#0050bb' },
};

const ROL_COLORS = {
  'investigador':       { bg: '#1E90FF14', border: '#1E90FF', text: '#0050bb' },
  'colaborador-laboral':{ bg: '#80808014', border: '#808080', text: '#444444' },
  'director-creativo':  { bg: '#FF149314', border: '#FF1493', text: '#99005e' },
};

const METODO_COLORS = {
  'js-react-web': { bg: '#cc840014', border: '#cc8400', text: '#7a4e00' },
  'audiovisual':  { bg: '#FF000014', border: '#cc0000', text: '#8a0000' },
  'etnografia':   { bg: '#FFA50014', border: '#cc6600', text: '#7a3e00' },
  'python-data':  { bg: '#66339914', border: '#663399', text: '#3d1f5c' },
  'nlp':          { bg: '#00808014', border: '#008080', text: '#004d4d' },
};

const chipBase = (c, size = 'md') => ({
  display: 'inline-block',
  fontSize: size === 'sm' ? '0.62rem' : '0.68rem',
  fontWeight: '600',
  letterSpacing: '0.02em',
  padding: size === 'sm' ? '1px 6px' : '2px 7px',
  borderRadius: '3px',
  border: `1px solid ${c.border}`,
  backgroundColor: c.bg,
  color: c.text,
  marginRight: '5px',
  marginTop: '4px',
  lineHeight: '1.6',
  whiteSpace: 'nowrap',
});

const ExpTagBadges = ({ exp }) => {
  const tags = exp?.tags;
  if (!tags) return null;
  const { dominio, rol, metodo = [], contexto = [] } = tags;
  const dc = dominio ? DOMINIO_COLORS[dominio] : null;
  const rc = rol ? ROL_COLORS[rol] : null;
  const isIntl = contexto.includes('internacional');
  const hasContent = dc || rc || metodo.length > 0;
  if (!hasContent) return null;

  return (
    <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap' }}>
      {dc && <span style={chipBase(dc)}>{dominio.replace(/-/g, ' ')}</span>}
      {rc && <span style={chipBase(rc)}>{rol.replace(/-/g, ' ')}</span>}
      {metodo.map(m => {
        const c = METODO_COLORS[m];
        return c ? <span key={m} style={chipBase(c, 'sm')}>{m.replace(/-/g, ' ')}</span> : null;
      })}
      {isIntl && (
        <span style={chipBase({ bg: '#00000010', border: '#aaaaaa', text: '#555555' }, 'sm')}>🌐 intl</span>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────────

const ExperienceList = ({ lang = 'es', networkGraphRef, hoverDelayMs = 300 }) => {
  const [activeTab, setActiveTab] = useState('tech'); // 'tech' o 'social'
  const data = experienceData[lang] || experienceData['es'];

  const tabs = [
    { id: 'tech', label: lang === 'es' ? 'Tecnología & Datos' : 'Technology & Data' },
    { id: 'social', label: lang === 'es' ? 'Investigación Social' : 'Social Research' }
  ];

  const { handleMouseEnter, handleMouseLeave } = useDebouncedHover(() => {
    if (networkGraphRef?.current) {
      networkGraphRef.current.zoomToID(200);
    }
  }, hoverDelayMs);

  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>
        {lang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
      </h1>

      {/* Selector de pestañas Premium */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginBottom: '2rem', 
        borderBottom: '1px solid #eee', 
        paddingBottom: '8px' 
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '1rem',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              color: activeTab === tab.id ? 'var(--color-principal)' : '#888',
              cursor: 'pointer',
              padding: '8px 16px',
              borderBottom: activeTab === tab.id ? '2px solid var(--color-principal)' : '2px solid transparent',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Lista de Experiencia de la pestaña activa */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
        {data[activeTab] && data[activeTab].map((exp, index) => (
          <div 
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
              borderLeft: '3px solid var(--color-principal)', 
              paddingLeft: '1.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              transition: 'border-color 0.3s'
            }}
          >
            <span style={{ fontSize: '0.85rem', color: '#888', fontWeight: 500 }}>
              {exp.period}
            </span>
            <h3 style={{ margin: '0.2rem 0', fontSize: '1.2rem', color: 'var(--color-secundario)', fontWeight: 700 }}>
              {exp.role}
            </h3>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.98rem', color: '#666', fontWeight: 600 }}>
              {exp.company}
            </h4>
            <ExpTagBadges exp={exp} />
            <ul style={{ 
              listStyle: 'disc', 
              paddingLeft: '1.2rem', 
              margin: '0.6rem 0 0 0', 
              fontSize: '0.92rem', 
              lineHeight: '1.6', 
              color: '#444'
            }}>
              {exp.details.map((detail, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;

