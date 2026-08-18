"use client";

import React from 'react';
import { cvPosts } from '../../data/cvData';
import SectionGrid from './SectionGrid';
import { useDebouncedHover } from '../../utils/useDebouncedHover';

export const MediaAppearancesList = ({ lang = 'es', networkGraphRef, hoverDelayMs = 300 }) => {
  const media = cvPosts.filter(p => p.type === 'mediaAppearance');

  const { handleMouseEnter, handleMouseLeave } = useDebouncedHover((id) => {
    if (networkGraphRef?.current && id) {
      networkGraphRef.current.zoomToID(id);
    }
  }, hoverDelayMs);

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
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};
