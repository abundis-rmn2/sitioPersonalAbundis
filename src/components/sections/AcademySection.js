'use client';
import React, { useState } from 'react';
import { cvPosts } from '../../data/cvData';
import TabSelector from './TabSelector';
import SectionGrid from './SectionGrid';
import { useDebouncedHover } from '../../utils/useDebouncedHover';

const TABS = (lang) => [
  { id: 'education', label: lang === 'es' ? 'Educación & Tesis'          : 'Education & Thesis' },
  { id: 'articles',  label: lang === 'es' ? 'Artículos Científicos'       : 'Papers' },
  { id: 'talks',     label: lang === 'es' ? 'Ponencias & Conferencias'    : 'Talks' },
];

export const AcademySection = ({ lang = 'es', networkGraphRef, hoverDelayMs = 300 }) => {
  const [activeTab, setActiveTab] = useState('education');

  const lists = {
    education: cvPosts.filter(p => p.type === 'thesis'),
    articles:  cvPosts.filter(p => p.type === 'articles'),
    talks:     cvPosts.filter(p => p.type === 'talks'),
  };

  const { handleMouseEnter, handleMouseLeave } = useDebouncedHover((id) => {
    if (networkGraphRef?.current && id) {
      networkGraphRef.current.zoomToID(id);
    }
  }, hoverDelayMs);

  // education: pocos items → listado vertical
  // articles / talks: grid de 3 columnas
  const isListMode = activeTab === 'education';

  return (
    <div style={{ width: '100%' }}>
      <h1>{lang === 'es' ? 'Academia e Investigación' : 'Academy & Research'}</h1>
      <TabSelector tabs={TABS(lang)} activeTab={activeTab} onChange={setActiveTab} />
      <SectionGrid
        items={lists[activeTab]}
        lang={lang}
        listMode={isListMode}
        showImage={false}
        columns={3}
        className="academy-grid"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};
