"use client";

import React from 'react';
import Link from 'next/link';
import GlobalList from '../components/GlobalList';

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-poppins), sans-serif',
      padding: '2rem'
    }}>
      {/* Grafo de red 3D de fondo totalmente visible */}
      <div className="global-background">
        <GlobalList lang="es" />
      </div>

      {/* Tarjeta modal flotante transparente con glassmorphism */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '620px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(220, 220, 220, 0.5)',
        borderRadius: '24px',
        padding: '3rem 2rem',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        {/* Número 404 con degradado */}
        <h1 style={{
          fontSize: 'clamp(5rem, 10vw, 8rem)',
          fontWeight: '900',
          margin: 0,
          lineHeight: '1',
          background: 'linear-gradient(135deg, #f66 0%, #d32f2f 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.05em'
        }}>
          404
        </h1>

        <h2 style={{
          fontFamily: 'var(--font-prata), serif',
          fontSize: '1.75rem',
          fontWeight: '400',
          margin: '1.2rem 0 0.8rem 0',
          color: '#242323'
        }}>
          Página no encontrada / Page Not Found
        </h2>

        <p style={{
          fontSize: '1rem',
          color: '#555555',
          margin: '0 auto 2.2rem auto',
          maxWidth: '460px',
          lineHeight: '1.6'
        }}>
          La ruta que intentas consultar no existe o ha sido movida como parte del proceso de migración.
        </p>

        {/* Botones de acción */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Link href="/es" style={{
            background: 'var(--color-principal, #f66)',
            color: '#ffffff',
            padding: '0.8rem 1.6rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.95rem',
            boxShadow: '0 6px 20px rgba(255, 102, 102, 0.3)',
            transition: 'all 0.2s ease'
          }}>
            ← Ir al Inicio (ES)
          </Link>

          <Link href="/en" style={{
            background: 'rgba(36, 35, 35, 0.06)',
            color: '#242323',
            padding: '0.8rem 1.6rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            border: '1px solid rgba(36, 35, 35, 0.15)',
            transition: 'background 0.2s ease'
          }}>
            Go to Home (EN)
          </Link>
        </div>

        {/* Enlaces de acceso rápido */}
        <div style={{
          marginTop: '2.5rem',
          paddingTop: '1.8rem',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          fontSize: '0.9rem'
        }}>
          <Link href="/es/cv" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>
            CV
          </Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/es/proyectos" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>
            Proyectos
          </Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/es/experiencia" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>
            Experiencia
          </Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/es/prensa" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>
            Prensa
          </Link>
        </div>
      </div>
    </main>
  );
}
