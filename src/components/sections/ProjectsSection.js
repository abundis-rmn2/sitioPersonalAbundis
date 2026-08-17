'use client';
import React, { useState } from 'react';
import { cvPosts } from '../../data/cvData';
import TabSelector from './TabSelector';
import SectionGrid from './SectionGrid';
import { useDebouncedHover } from '../../utils/useDebouncedHover';

const TABS = (lang) => [
  { id: 'code',       label: lang === 'es' ? 'Proyectos de Código'   : 'Code Projects' },
  { id: 'multimedia', label: lang === 'es' ? 'Proyectos Multimedia'  : 'Multimedia Projects' },
];

export const ProjectsSection = ({ lang = 'es', networkGraphRef, hoverDelayMs = 300 }) => {
  const [activeTab, setActiveTab] = useState('code');

  const lists = {
    code:       cvPosts.filter(p => p.type === 'codeProject'),
    multimedia: cvPosts.filter(p => p.type === 'multimedia'),
  };

  const { handleMouseEnter, handleMouseLeave } = useDebouncedHover((id) => {
    if (networkGraphRef?.current && id) {
      networkGraphRef.current.zoomToID(id);
    }
  }, hoverDelayMs);

  return (
    <div style={{ width: '100%' }}>
      <h1>{lang === 'es' ? 'Proyectos' : 'Projects'}</h1>
      <TabSelector tabs={TABS(lang)} activeTab={activeTab} onChange={setActiveTab} />
      <SectionGrid
        items={lists[activeTab]}
        lang={lang}
        showImage
        columns="auto"
        className="project-grid"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};
