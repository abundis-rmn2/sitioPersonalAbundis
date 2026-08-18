"use client";

import React from 'react';
import { bioData } from '../data/cvData';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGraduationCap } from 'react-icons/fa';

const Bio = ({ lang = 'es' }) => {
  const data = bioData[lang] || bioData['es'];

  return (
    <div className="intro" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
      {/* Título Principal */}
      <h1 style={{ color: 'var(--color-secundario)', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 800, margin: '0 0 1.2rem 0', lineHeight: 1.2 }}>
        {data.name}
      </h1>

      {/* Bloque Tarjeta de Perfil Profesional con Fotografía del LADO IZQUIERDO */}
      <div className="bio-card-with-portrait" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1.8rem', 
        width: '100%', 
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {/* Imagen de Perfil Circular (Lado Izquierdo) */}
        <div className="bio-portrait-wrapper" style={{ flexShrink: 0 }}>
          <img 
            src="/javier-abundis.webp" 
            alt={data.name}
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3.5px solid var(--color-principal)',
              boxShadow: '0 8px 24px rgba(230, 0, 0, 0.18)',
              display: 'block'
            }}
          />
        </div>

        {/* Tarjeta de Perfil Profesional (A la Derecha de la Foto) */}
        <div className="profile-card" style={{ 
          flex: '1 1 320px',
          background: 'rgba(255, 102, 102, 0.03)', 
          borderLeft: '4px solid var(--color-principal)', 
          padding: '1.5rem', 
          borderRadius: '4px'
        }}>
          <h3 style={{ margin: '0 0 0.8rem 0', color: 'var(--color-principal)', fontSize: '1.15rem' }}>
            {lang === 'es' ? 'Ciencias Sociales Computacionales & Desarrollo de Software' : 'Computational Social Science & Software Development'}
          </h3>
          <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: '1.6', color: '#333', textAlign: 'left' }}>
            {data.profile}
          </p>
        </div>
      </div>

      {/* Bloque de Contacto y Redes Académicas */}
      <div className="bio-contact-block" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0.9rem', 
        width: '100%', 
        marginTop: '0.5rem',
        fontSize: '0.9rem',
        color: '#444'
      }}>
        {/* Fila 1 (Arriba): Datos Generales (Domicilio, Teléfono y Correo) */}
        <div className="bio-info-row" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          gap: '1.5rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaMapMarkerAlt color="var(--color-principal)" />
            <span>{data.address}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaPhone color="var(--color-principal)" />
            <a href={`tel:${data.phone}`} style={{ color: '#111', textDecoration: 'none' }}>
              {data.phone}
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaEnvelope color="var(--color-principal)" />
            <a href={`mailto:${data.email}`} style={{ color: '#111', textDecoration: 'none' }}>
              {data.email}
            </a>
          </div>
        </div>

        {/* Fila 2 (Salto de línea / Abajo): Redes y Perfiles Académicos */}
        <div className="bio-social-row" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          gap: '1.5rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaGraduationCap color="var(--color-principal)" />
            <a href={data.scholar} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 'bold' }}>
              Google Scholar
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaLinkedin color="var(--color-principal)" />
            <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 'bold' }}>
              LinkedIn
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaGithub color="var(--color-principal)" />
            <a href={data.github} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none', fontWeight: 'bold' }}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
