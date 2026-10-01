import React from 'react';
import Link from 'next/link';
import { TAILORED_CVS } from '../../../../data/tailoredCvData';

export const metadata = {
  title: "Tailored CVs - Lista Interna",
  robots: {
    index: false,
    follow: false,
  }
};

export default async function CvListaPage(props) {
  const params = await props.params;
  const { lang } = params;

  return (
    <div style={{ padding: '60px 20px', fontFamily: 'var(--font-poppins), sans-serif', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--color-principal)' }}>Mis CVs Tailored</h1>
      <p style={{ marginBottom: '40px', color: '#ccc' }}>Lista privada. El tracking de Google Analytics está desactivado en esta página.</p>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(TAILORED_CVS).map(([slug, cv]) => (
          <li key={slug} style={{ marginBottom: '20px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: '600' }}>{cv.company}</div>
                <div style={{ color: '#aaa', marginTop: '5px' }}>{cv.targetRole[lang] || cv.targetRole['es']}</div>
              </div>
              <Link 
                href={`/${lang}/cv/${slug}`}
                style={{ 
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: 'var(--color-principal)',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}
              >
                Abrir CV
              </Link>
            </div>
            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', color: '#888', wordBreak: 'break-all' }}>
              URL: https://abundis.com.mx/{lang}/cv/{slug}
            </div>
          </li>
        ))}
      </ul>
      
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <Link href={`/${lang}`} style={{ color: '#888', textDecoration: 'underline' }}>Volver al Inicio</Link>
      </div>
    </div>
  );
}
