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
    <div style={{ padding: '60px 20px', fontFamily: 'var(--font-poppins), sans-serif', maxWidth: '880px', margin: '0 auto', color: '#111111', backgroundColor: '#ffffff' }}>
      <h1 style={{ fontSize: '2.1rem', marginBottom: '8px', color: '#111111', fontWeight: 800, letterSpacing: '-0.02em' }}>
        {isEs ? 'CVs Tailored & Descargas ATS' : 'Tailored Resumes & ATS Downloads'}
      </h1>
      <p style={{ marginBottom: '32px', color: '#555555', lineHeight: 1.6, fontSize: '0.96rem' }}>
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
              backgroundColor: '#fafafa', 
              borderRadius: '12px', 
              border: '1px solid #e5e7eb',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#111111' }}>{cv.company}</span>
                  {cv.jobPosting?.date && (
                    <span 
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: '#666666'
                      }}
                    >
                      <FaCalendarAlt size={11} color="var(--color-principal, #e60000)" />
                      {cv.jobPosting.date}
                    </span>
                  )}
                </div>

                <div style={{ color: 'var(--color-principal, #e60000)', marginTop: '4px', fontSize: '1.02rem', fontWeight: '700' }}>
                  {cv.targetRole[lang] || cv.targetRole['es']}
                </div>

                {cv.companySubtitle && (
                  <div style={{ color: '#666666', fontSize: '0.84rem', marginTop: '3px' }}>
                    {cv.companySubtitle}
                  </div>
                )}
                
                <div style={{ marginTop: '10px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {cv.jobPosting?.url && (
                    <a
                      href={cv.jobPosting.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        color: 'var(--color-principal, #e60000)',
                        fontSize: '0.82rem',
                        textDecoration: 'none',
                        fontWeight: '600'
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
                        color: '#111111',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontWeight: '600'
                      }}
                    >
                      <FaFileAlt size={10} color="var(--color-principal, #e60000)" />
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
                  padding: '8px 18px',
                  backgroundColor: 'var(--color-principal, #e60000)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  boxShadow: '0 2px 8px rgba(230, 0, 0, 0.25)'
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
                  padding: '12px 16px', 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #eef0f3',
                  borderLeft: '4px solid var(--color-principal, #e60000)',
                  borderRadius: '0 8px 8px 0',
                  color: '#333333',
                  fontSize: '0.9rem',
                  lineHeight: '1.65'
                }}
              >
                <span style={{ fontWeight: '700', color: '#111111', display: 'block', marginBottom: '4px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {isEs ? 'Resumen / Enfoque:' : 'Abstract / Summary:'}
                </span>
                {cv.summary?.[lang] || cv.summary?.es || cv.matchSummary?.[lang] || cv.matchSummary?.es}
              </div>
            )}

            {/* Descargas ATS (PDF & DOCX) en ES y EN */}
            <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
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
                    padding: '6px 14px',
                    backgroundColor: '#ffffff',
                    color: 'var(--color-principal, #e60000)',
                    border: '1px solid #fca5a5',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '700'
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
                    padding: '6px 14px',
                    backgroundColor: '#ffffff',
                    color: '#2563eb',
                    border: '1px solid #bfdbfe',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '700'
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
                    padding: '6px 14px',
                    backgroundColor: '#ffffff',
                    color: 'var(--color-principal, #e60000)',
                    border: '1px solid #fca5a5',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '700'
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
                    padding: '6px 14px',
                    backgroundColor: '#ffffff',
                    color: '#2563eb',
                    border: '1px solid #bfdbfe',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '700'
                  }}
                >
                  <FaFileWord size={13} />
                  ATS DOCX (EN)
                </a>
              </div>
            </div>

            {(cv.hasInterviewGuide || cv.interviewGuideUrl) && (
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link
                  href={`/${lang}/cv/${slug}/entrevista`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 16px',
                    backgroundColor: '#fffbeb',
                    color: '#b45309',
                    border: '1px solid #fde68a',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: '700'
                  }}
                >
                  <FaFileAlt size={12} />
                  {isEs ? '🎙️ Ver Guía de Entrevista' : '🎙️ View Interview Prep Guide'}
                </Link>
              </div>
            )}

            <div style={{ marginTop: '12px', fontSize: '0.78rem', color: '#888888', wordBreak: 'break-all' }}>
              URL Web: https://abundis.com.mx/{lang}/cv/{slug}
            </div>
          </li>
        ))}
      </ul>
      
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <Link href={`/${lang}`} style={{ color: '#666666', textDecoration: 'underline', fontSize: '0.9rem' }}>
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
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '14px',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '28px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              position: 'relative',
              color: '#111111'
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
                background: '#f3f4f6',
                border: '1px solid #e5e7eb',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111111',
                cursor: 'pointer'
              }}
              title={isEs ? 'Cerrar' : 'Close'}
            >
              <FaTimes size={14} />
            </button>

            {/* Encabezado del Modal */}
            <div style={{ marginBottom: '20px', paddingRight: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-principal, #e60000)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
                <FaBuilding />
                {selectedCv.company}
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginTop: '4px', marginBottom: '6px', color: '#111111' }}>
                {selectedCv.targetRole?.[lang] || selectedCv.targetRole?.es}
              </h2>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#666666', marginTop: '6px' }}>
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
                    style={{ color: 'var(--color-principal, #e60000)', display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'underline', fontWeight: '600' }}
                  >
                    <FaExternalLinkAlt size={11} />
                    {isEs ? 'Abrir publicación original' : 'Open original job posting'}
                  </a>
                )}
              </div>
            </div>

            {/* Contenido de la Vacante */}
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '18px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#111111', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                {isEs ? 'Texto original de la vacante:' : 'Original job posting text:'}
              </h4>
              <div 
                style={{
                  backgroundColor: '#f9fafb',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '0.86rem',
                  lineHeight: '1.65',
                  color: '#333333',
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
              <div style={{ marginTop: '20px', borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#111111', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                  {isEs ? 'Alineación de Requisitos:' : 'Requirements Alignment:'}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedCv.requirementsMatchList.map((item, i) => (
                    <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', padding: '10px 14px', borderRadius: '6px', fontSize: '0.84rem' }}>
                      <div style={{ fontWeight: '700', color: '#111111', marginBottom: '3px' }}>
                        📌 {item.requirement?.[lang] || item.requirement?.es}
                      </div>
                      <div style={{ color: 'var(--color-principal, #e60000)', fontWeight: '500' }}>
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
                  padding: '8px 22px',
                  backgroundColor: '#111111',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '700',
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
