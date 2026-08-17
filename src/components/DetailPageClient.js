"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlobalList from './GlobalList';

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.6 } }
};

const DetailPageClient = ({ post, lang = 'es' }) => {
  const networkGraphRef = useRef(null);

  useEffect(() => {
    if (!post?.id || !networkGraphRef.current) return;
        
    networkGraphRef.current.highlightIDCall(post.id);
    const timeout = setTimeout(() => {
      networkGraphRef.current.zoomToID(post.id);
    }, 800);

    return () => clearTimeout(timeout);
  }, [post]);

  const tData = post[lang] || post['es'];

  // Calcular URL de idioma alternativo
  const altLang = lang === 'es' ? 'en' : 'es';
  const altCategory = post.categories[altLang];
  const altSlug = post.slugs[altLang];
  const altPath = `/${altLang}/${altCategory}/${altSlug}`;

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      {/* Grafo de fondo fijo */}
      <div className="global-background">
        <GlobalList ref={networkGraphRef} lang={lang} />
      </div>
      
      {/* Plantilla de contenido */}
      <section className="list-Template" style={{ position: 'relative', zIndex: 10 }}>
        <div className="detail-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', background: 'transparent', width: '100%' }}>
            <Link href={`/${lang}`} className="btn-red" style={{ display: 'inline-block', textDecoration: 'none' }}>
              {lang === 'es' ? '← Volver al Inicio' : '← Back to Home'}
            </Link>
            
            <Link href={altPath} className="btn-red" style={{ display: 'inline-block', textDecoration: 'none', marginLeft: 'auto', fontWeight: 'bold' }}>
              {lang === 'es' ? 'English Version 🇺🇸' : 'Versión en Español 🇲🇽'}
            </Link>
          </div>
          
          <h1 style={{ display: 'block', fontSize: '2.2rem', marginBottom: '0.5rem', color: 'var(--color-secundario)' }}>
            {tData.title}
          </h1>
          
          {tData.displayDate && (
            <p style={{ display: 'block', color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {tData.displayDate}
            </p>
          )}

          {tData.citation && (
            <div 
              style={{ display: 'block', padding: '1rem', borderLeft: '3px solid var(--color-principal)', background: 'rgba(255, 102, 102, 0.03)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}
              dangerouslySetInnerHTML={{ __html: tData.citation }}
            />
          )}
          
          <div 
            className="post-content"
            style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.6', color: '#333' }}
            dangerouslySetInnerHTML={{ __html: tData.content || tData.abstract }}
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '2rem', background: 'transparent' }}>
            {post.project_url && (
              <a href={post.project_url} target="_blank" rel="noreferrer" className="btn-red" style={{ display: 'inline-block' }}>
                {lang === 'es' ? 'Visitar Sitio Web' : 'Visit Website'}
              </a>
            )}
            {post.github_repo && (
              <a href={post.github_repo} target="_blank" rel="noreferrer" className="btn-red" style={{ display: 'inline-block' }}>
                {lang === 'es' ? 'Código en GitHub' : 'GitHub Code'}
              </a>
            )}
            {post.paper_url && (
              <a href={post.paper_url} target="_blank" rel="noreferrer" className="btn-red" style={{ display: 'inline-block' }}>
                {lang === 'es' ? 'Leer Publicación' : 'Read Publication'}
              </a>
            )}
            {post.talk_url && (
              <a href={post.talk_url} target="_blank" rel="noreferrer" className="btn-red" style={{ display: 'inline-block' }}>
                {lang === 'es' ? 'Ver Conferencia' : 'Watch Conference'}
              </a>
            )}
            {post.multimedia_url && (
              <a href={post.multimedia_url} target="_blank" rel="noreferrer" className="btn-red" style={{ display: 'inline-block' }}>
                {lang === 'es' ? 'Ver Multimedia' : 'Watch Multimedia'}
              </a>
            )}
            {post.media_url && (
              <a href={post.media_url} target="_blank" rel="noreferrer" className="btn-red" style={{ display: 'inline-block' }}>
                {lang === 'es' ? 'Ver Artículo de Prensa' : 'View Press Article'}
              </a>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DetailPageClient;
