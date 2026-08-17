import React, { useState } from 'react';
import { experienceData } from '../data/cvData';

const ExperienceList = ({ lang = 'es', networkGraphRef }) => {
  const [activeTab, setActiveTab] = useState('tech'); // 'tech' o 'social'
  const data = experienceData[lang] || experienceData['es'];

  const tabs = [
    { id: 'tech', label: lang === 'es' ? 'Tecnología & Datos' : 'Technology & Data' },
    { id: 'social', label: lang === 'es' ? 'Investigación Social' : 'Social Research' }
  ];

  const handleMouseEnter = () => {
    if (networkGraphRef?.current) {
      networkGraphRef.current.zoomToID(200);
    }
  };

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
            <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '0.98rem', color: '#666', fontWeight: 600 }}>
              {exp.company}
            </h4>
            <ul style={{ 
              listStyle: 'disc', 
              paddingLeft: '1.2rem', 
              margin: 0, 
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
