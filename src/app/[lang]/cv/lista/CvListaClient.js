'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaFilePdf, 
  FaFileWord, 
  FaExternalLinkAlt, 
  FaDownload, 
  FaFileAlt, 
  FaTimes, 
  FaCalendarAlt, 
  FaBuilding, 
  FaBriefcase,
  FaCheckCircle
} from 'react-icons/fa';

export default function CvListaClient({ cvEntries, lang }) {
  const isEs = lang === 'es';
  const [selectedCv, setSelectedCv] = useState(null);

  return (
    <div style={{ padding: '60px 20px', fontFamily: 'var(--font-poppins), sans-serif', maxWidth: '860px', margin: '0 auto', color: '#fff' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--color-principal, #e60000)' }}>
        {isEs ? 'CVs Tailored & Descargas ATS' : 'Tailored Resumes & ATS Downloads'}
      </h1>
      <p style={{ marginBottom: '30px', color: '#ccc', lineHeight: 1.5 }}>
        {isEs 
          ? 'Bitácora privada de vacantes adaptadas, organizadas de las más recientes a las más antiguas. Incluye modal de vacante original y descargas directas en PDF y Word.'
          : 'Private log of tailored job positions, sorted from newest to oldest. Includes original job posting modal and direct PDF & Word downloads.'}
      </p>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cvEntries.map(([slug, cv]) => (
          <li 
            key={slug} 
            style={{ 
              marginBottom: '24px', 
              padding: '24px', 
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              border: '1px solid rgba(255, 255, 255, 0.12)' 
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.35rem', fontWeight: '700', color: '#fff' }}>{cv.company}</span>
                  {cv.jobPosting?.date && (
                    <span 
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: '#94a3b8'
                      }}
                    >
                      <FaCalendarAlt size={11} color="var(--color-principal, #e60000)" />
                      {cv.jobPosting.date}
                    </span>
                  )}
                </div>

                <div style={{ color: '#ccc', marginTop: '4px', fontSize: '1rem', fontWeight: '500' }}>
                  {cv.targetRole[lang] || cv.targetRole['es']}
                </div>

                {cv.companySubtitle && (
                  <div style={{ color: '#888', fontSize: '0.82rem', marginTop: '3px' }}>
                    {cv.companySubtitle}
                  </div>
                )}
                
                <div style={{ marginTop: '8px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  {cv.jobPosting?.url && (
                    <a
                      href={cv.jobPosting.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        color: '#60a5fa',
                        fontSize: '0.8rem',
                        textDecoration: 'underline'
                      }}
                    >
                      <FaExternalLinkAlt size={10} />
                      {isEs ? 'Enlace original' : 'Original link'}
                    </a>
                  )}

                  {cv.jobPosting?.text && (
                    <button
                      type="button"
                      onClick={() => setSelectedCv({ slug, ...cv })}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: '#38bdf8',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        textDecoration: 'underline'
                      }}
                    >
                      <FaFileAlt size={10} />
                      {isEs ? 'Ver detalle de la vacante (Modal)' : 'View job description (Modal)'}
                    </button>
                  )}
                </div>
              </div>

              <Link 
                href={`/${lang}/cv/${slug}`}
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  backgroundColor: 'var(--color-principal, #e60000)',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '0.88rem'
                }}
              >
                <FaExternalLinkAlt size={12} />
                {isEs ? 'Ver Web CV' : 'View Web CV'}
              </Link>
            </div>

            {/* Abstract / Introducción de la adaptación */}
            {(cv.summary?.[lang] || cv.summary?.es || cv.matchSummary?.[lang] || cv.matchSummary?.es) && (
              <div 
                style={{ 
                  marginTop: '14px', 
                  padding: '12px 14px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                  borderLeft: '3px solid var(--color-principal, #e60000)',
                  borderRadius: '0 8px 8px 0',
                  color: '#d1d5db',
                  fontSize: '0.88rem',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ fontWeight: '600', color: '#fff', display: 'block', marginBottom: '4px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {isEs ? 'Resumen / Enfoque:' : 'Abstract / Summary:'}
                </span>
                {cv.summary?.[lang] || cv.summary?.es || cv.matchSummary?.[lang] || cv.matchSummary?.es}
              </div>
            )}

            {/* Descargas ATS (PDF & DOCX) en ES y EN */}
            <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                <FaDownload style={{ marginRight: '6px', color: 'var(--color-principal, #e60000)' }} />
                {isEs ? 'Descargas ATS (Servidor):' : 'ATS Downloads (Server-Side):'}
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {/* ES PDF */}
                <a
                  href={`/es/cv/${slug}/ats.pdf`}
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(230, 0, 0, 0.15)',
                    color: '#ff6666',
                    border: '1px solid rgba(230, 0, 0, 0.4)',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  <FaFilePdf size={13} />
                  ATS PDF (ES)
                </a>

                {/* ES DOCX */}
                <a
                  href={`/es/cv/${slug}/ats.docx`}
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    color: '#93c5fd',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  <FaFileWord size={13} />
                  ATS DOCX (ES)
                </a>

                {/* EN PDF */}
                <a
                  href={`/en/cv/${slug}/ats.pdf`}
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(230, 0, 0, 0.15)',
                    color: '#ff6666',
                    border: '1px solid rgba(230, 0, 0, 0.4)',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  <FaFilePdf size={13} />
                  ATS PDF (EN)
                </a>

                {/* EN DOCX */}
                <a
                  href={`/en/cv/${slug}/ats.docx`}
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    color: '#93c5fd',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  <FaFileWord size={13} />
                  ATS DOCX (EN)
                </a>
              </div>
            </div>

            <div style={{ marginTop: '12px', fontSize: '0.78rem', color: '#777', wordBreak: 'break-all' }}>
              URL Web: https://abundis.com.mx/{lang}/cv/{slug}
            </div>
          </li>
        ))}
      </ul>
      
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <Link href={`/${lang}`} style={{ color: '#888', textDecoration: 'underline' }}>
          {isEs ? 'Volver al Inicio' : 'Back to Home'}
        </Link>
      </div>

      {/* Modal de Detalle de la Vacante Original */}
      {selectedCv && (
        <div 
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 9999
          }}
          onClick={() => setSelectedCv(null)}
        >
          <div 
            style={{
              backgroundColor: '#111827',
              border: '1px solid #374151',
              borderRadius: '14px',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '28px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              position: 'relative',
              color: '#f3f4f6'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setSelectedCv(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer'
              }}
              title={isEs ? 'Cerrar' : 'Close'}
            >
              <FaTimes size={14} />
            </button>

            {/* Encabezado del Modal */}
            <div style={{ marginBottom: '20px', paddingRight: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-principal, #e60000)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>
                <FaBuilding />
                {selectedCv.company}
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '4px', marginBottom: '6px', color: '#fff' }}>
                {selectedCv.targetRole?.[lang] || selectedCv.targetRole?.es}
              </h2>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#9ca3af', marginTop: '6px' }}>
                {selectedCv.jobPosting?.date && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <FaCalendarAlt color="var(--color-principal, #e60000)" />
                    {isEs ? `Fecha de registro: ${selectedCv.jobPosting.date}` : `Logged Date: ${selectedCv.jobPosting.date}`}
                  </span>
                )}
                {selectedCv.jobPosting?.url && (
                  <a 
                    href={selectedCv.jobPosting.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#60a5fa', display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'underline' }}
                  >
                    <FaExternalLinkAlt size={11} />
                    {isEs ? 'Abrir publicación original' : 'Open original job posting'}
                  </a>
                )}
              </div>
            </div>

            {/* Contenido de la Vacante */}
            <div style={{ borderTop: '1px solid #374151', paddingTop: '18px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#e5e7eb', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {isEs ? 'Texto original de la vacante:' : 'Original job posting text:'}
              </h4>
              <div 
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #1f2937',
                  fontSize: '0.86rem',
                  lineHeight: '1.65',
                  color: '#cbd5e1',
                  whiteSpace: 'pre-wrap',
                  maxHeight: '350px',
                  overflowY: 'auto'
                }}
              >
                {selectedCv.jobPosting?.text}
              </div>
            </div>

            {/* Requisitos y Coincidencias */}
            {selectedCv.requirementsMatchList && selectedCv.requirementsMatchList.length > 0 && (
              <div style={{ marginTop: '20px', borderTop: '1px solid #374151', paddingTop: '16px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#e5e7eb', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {isEs ? 'Alineación de Requisitos:' : 'Requirements Alignment:'}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedCv.requirementsMatchList.map((item, i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: '6px', fontSize: '0.82rem' }}>
                      <div style={{ fontWeight: '600', color: '#f3f4f6', marginBottom: '3px' }}>
                        📌 {item.requirement?.[lang] || item.requirement?.es}
                      </div>
                      <div style={{ color: '#93c5fd' }}>
                        {item.match?.[lang] || item.match?.es}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Botón Cerrar al pie */}
            <div style={{ marginTop: '24px', textAlign: 'right' }}>
              <button
                type="button"
                onClick={() => setSelectedCv(null)}
                style={{
                  padding: '8px 20px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '0.88rem'
                }}
              >
                {isEs ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
