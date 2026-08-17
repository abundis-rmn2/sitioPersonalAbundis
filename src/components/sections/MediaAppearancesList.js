'use client';
import React from 'react';
import { cvPosts } from '../../data/cvData';
import SectionGrid from './SectionGrid';

export const MediaAppearancesList = ({ lang = 'es', networkGraphRef }) => {
  const media = cvPosts.filter(p => p.type === 'mediaAppearance');

  const handleMouseEnter = (id) => {
    if (networkGraphRef?.current && id) networkGraphRef.current.zoomToID(id);
  };

  return (
    <div style={{ width: '100%' }}>
      <h1>{lang === 'es' ? 'Prensa & Apariciones en Medios' : 'Media Appearances'}</h1>
      <SectionGrid
        items={media}
        lang={lang}
        showImage
        columns="auto"
        className="media-grid"
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
};
