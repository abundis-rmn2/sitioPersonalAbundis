import React from 'react';
import { bioData } from '../data/cvData';

const Bio = ({ lang = 'es' }) => {
  const data = bioData[lang] || bioData['es'];

  return (
    <div className="intro" style={{ textAlign: 'right' }}>
      <h1 style={{ color: 'var(--color-secundario)', fontSize: '2.5rem', fontWeight: 800 }}>
        {data.name}
      </h1>
      <p style={{ fontStyle: 'italic', color: '#666', fontSize: '1rem', marginBottom: '2rem' }}>
        {data.introText}
      </p>
      
      <div className="profiles-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
        <div className="profile-card" style={{ background: '#fcfcfc', borderRight: '4px solid var(--color-principal)', padding: '1rem', borderRadius: '4px' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-principal)' }}>
            {lang === 'es' ? 'Ciencias Sociales Computacionales & Desarrollo de Software' : 'Computational Social Science & Software Development'}
          </h3>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#333' }}>
            {data.profiles.A}
          </p>
        </div>

        <div className="profile-card" style={{ background: '#fcfcfc', borderRight: '4px solid var(--color-secundario)', padding: '1rem', borderRadius: '4px' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-secundario)' }}>
            {lang === 'es' ? 'Asistencia General & Producción (Construcción y Manufactura)' : 'General Labor & Production (Construction & Manufacturing)'}
          </h3>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#333' }}>
            {data.profiles.B}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
