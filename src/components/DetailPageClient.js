"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlobalList from './GlobalList';
import DetailMenu from './DetailMenu';
import { TagBadges } from './sections/tagColors';

import { cvPosts } from '../data/cvData';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.6 } }
};

/**
 * Calcula los 2 proyectos / publicaciones más similares según enlazado explícito (related_posts)
 * y coincidencia de tecnología (metodo / dominio).
 */
const getSimilarPosts = (currentPost, allPosts, limit = 2) => {
  if (!currentPost || !allPosts) return [];

  const candidateScores = new Map();

  const curMetodo = new Set(
    Array.isArray(currentPost.tags?.metodo)
      ? currentPost.tags.metodo
      : (currentPost.tags?.metodo ? [currentPost.tags.metodo] : [])
  );
  const curDominio = new Set(
    Array.isArray(currentPost.tags?.dominio)
      ? currentPost.tags.dominio
      : (currentPost.tags?.dominio ? [currentPost.tags.dominio] : [])
  );
  const relatedSet = new Set(
    (currentPost.related_posts || []).map(r => typeof r === 'string' ? parseInt(r, 10) : r)
  );

  allPosts.forEach(otherPost => {
    if (otherPost.id === currentPost.id) return;

    let score = 0;

    // Enlazado explícito directo (related_posts)
    if (relatedSet.has(otherPost.id)) {
      score += 100;
    }

    // Coincidencia de tecnologías (metodo)
    const otherMetodo = Array.isArray(otherPost.tags?.metodo)
      ? otherPost.tags.metodo
      : (otherPost.tags?.metodo ? [otherPost.tags.metodo] : []);
    otherMetodo.forEach(m => {
      if (curMetodo.has(m)) score += 10;
    });

    // Coincidencia de dominio
    const otherDominio = Array.isArray(otherPost.tags?.dominio)
      ? otherPost.tags.dominio
      : (otherPost.tags?.dominio ? [otherPost.tags.dominio] : []);
    otherDominio.forEach(d => {
      if (curDominio.has(d)) score += 8;
    });

    // Mismo tipo/categoría
    if (otherPost.type === currentPost.type) {
      score += 2;
    }

    if (score > 0) {
      candidateScores.set(otherPost, score);
    }
  });

  const sorted = Array.from(candidateScores.entries())
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  if (sorted.length < limit) {
    const fallback = allPosts.filter(p => p.id !== currentPost.id && !sorted.includes(p));
    return [...sorted, ...fallback].slice(0, limit);
  }

  return sorted.slice(0, limit);
};

const DetailPageClient = ({ post, lang = 'es' }) => {
  const networkGraphRef = useRef(null);

  useEffect(() => {
    if (!post?.id) return;
        
    let intervalId;
    let attempts = 0;
    
    const tryFocusNode = () => {
      attempts++;
      if (networkGraphRef.current) {
        networkGraphRef.current.highlightIDCall(post.id);
        networkGraphRef.current.zoomToID(post.id);
        clearInterval(intervalId);
      } else if (attempts > 20) {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(tryFocusNode, 300);
    return () => clearInterval(intervalId);
  }, [post]);

  const tData = post[lang] || post['es'];
  const similarPosts = getSimilarPosts(post, cvPosts, 2);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      {/* Menú Flotante Lateral Izquierdo (Inicio - Categoría - Otros Enlaces) */}
      <DetailMenu post={post} lang={lang} />

      {/* Grafo de fondo fijo */}
      <div className="global-background">
        <GlobalList ref={networkGraphRef} lang={lang} />
      </div>
      
      {/* Plantilla de contenido */}
      <section className="list-Template" style={{ position: 'relative', zIndex: 10 }}>
        <div className="detail-card">
          <h1 style={{ display: 'block', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginBottom: '0.5rem', color: 'var(--color-secundario)', lineHeight: 1.25 }}>
            {tData.title}
          </h1>
          
          {tData.displayDate && (
            <p style={{ display: 'block', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              {tData.displayDate}
            </p>
          )}

          <div style={{ marginBottom: '1.2rem' }}>
            <TagBadges item={post} lang={lang} />
          </div>

          {post.image && (
            <div style={{
              width: '100%',
              maxWidth: '650px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.06)'
            }}>
              <img src={post.image} alt={tData.title || ""} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
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

          {/* Sección de Proyectos / Publicaciones Similares (por enlace o tecnología) */}
          {similarPosts.length > 0 && (
            <div style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(200, 200, 200, 0.4)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '1.2rem',
                color: 'var(--color-secundario)'
              }}>
                {lang === 'es' ? 'Proyectos y Publicaciones Similares' : 'Similar Projects & Publications'}
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.2rem'
              }}>
                {similarPosts.map((simPost) => {
                  const simData = simPost[lang] || simPost['es'];
                  const simCat = simPost.categories[lang] || simPost.categories['es'];
                  const simSlug = simPost.slugs[lang] || simPost.slugs['es'];

                  return (
                    <div key={simPost.id} className="similar-card-item-container" style={{ display: 'flex', flexDirection: 'column' }}>
                      <Link
                        href={`/${lang}/${simCat}/${simSlug}`}
                        className="similar-card-item"
                        style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
                      >
                        <span style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '0.3rem' }}>
                          {simData.displayDate || (simCat ? simCat.toUpperCase() : '')}
                        </span>
                        <h4 className="similar-card-title">
                          {simData.title}
                        </h4>
                      </Link>
                      <div style={{ marginTop: '0.5rem' }}>
                        <TagBadges item={simPost} lang={lang} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default DetailPageClient;
