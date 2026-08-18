"use client";

import React from 'react';
import { bioData } from '../data/cvData';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGraduationCap } from 'react-icons/fa';

const Bio = ({ lang = 'es' }) => {
  const data = bioData[lang] || bioData['es'];

  return (
    <div className="intro" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
      <h1 style={{ color: 'var(--color-secundario)', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 800, margin: '0 0 1rem 0', lineHeight: 1.2 }}>
        {data.name}
      </h1>
      



      {/* Tarjeta de Perfil Profesional Único */}
      <div className="profile-card" style={{ 
        background: 'rgba(255, 102, 102, 0.03)', 
        borderLeft: '4px solid var(--color-principal)', 
        padding: '1.5rem', 
        borderRadius: '4px',

        marginBottom: '2rem',
      }}>
        <h3 style={{ margin: '0 0 0.8rem 0', color: 'var(--color-principal)', fontSize: '1.15rem' }}>
          {lang === 'es' ? 'Ciencias Sociales Computacionales & Desarrollo de Software' : 'Computational Social Science & Software Development'}
        </h3>
        <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: '1.6', color: '#333', textAlign: 'left' }}>
          {data.profile}
        </p>
      </div>

      {/* Bloque de Contacto y Redes Académicas */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1.2rem', 
        width: '100%', 

        marginTop: '1rem',
        fontSize: '0.9rem',
        color: '#444'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
          <FaMapMarkerAlt color="var(--color-principal)" />
          <span>{data.address}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
          <FaPhone color="var(--color-principal)" />
          <span>{data.phone}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
          <FaEnvelope color="var(--color-principal)" />
          <a href={`mailto:${data.email}`} style={{ color: '#111', textDecoration: 'none' }}>{data.email}</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
          <FaGraduationCap color="var(--color-principal)" />
          <a href={data.scholar} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 'bold' }}>Google Scholar</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
          <FaLinkedin color="var(--color-principal)" />
          <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px' }}>
          <FaGithub color="var(--color-principal)" />
          <a href={data.github} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
