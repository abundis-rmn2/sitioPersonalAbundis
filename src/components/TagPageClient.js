"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlobalList from './GlobalList';
import DetailMenu from './DetailMenu';
import { TagBadges } from './sections/tagColors';

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.6 } }
};

const TagPageClient = ({ tagSlug, lang = 'es', filteredPosts = [], filteredExp = [] }) => {
  const networkGraphRef = useRef(null);

  useEffect(() => {
    // Cuando el componente carga, tratar de hacer un highlight general
    // o resetear el grafo a la vista general si no hay un nodo específico.
    if (networkGraphRef.current) {
      networkGraphRef.current.highlightIDCall(null);
    }
  }, [tagSlug]);

  const displayTagName = tagSlug.replace(/-/g, ' ');

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      {/* Menú Flotante Lateral Izquierdo */}
      <DetailMenu post={{}} lang={lang} tagSlug={tagSlug} />

      {/* Grafo de fondo fijo */}
      <div className="global-background">
        <GlobalList ref={networkGraphRef} lang={lang} />
      </div>
      
      {/* Plantilla de contenido */}
      <section className="list-Template" style={{ position: 'relative', zIndex: 10 }}>
        <div className="detail-card">
          <h1 style={{ display: 'block', fontSize: '2.2rem', marginBottom: '0.5rem', color: 'var(--color-secundario)', textTransform: 'capitalize' }}>
            # {displayTagName}
          </h1>
          
          <p style={{ display: 'block', color: '#666', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.5' }}>
            {lang === 'es' 
              ? `Explorando todos los proyectos, investigaciones y experiencias relacionados con la etiqueta "${displayTagName}".`
              : `Exploring all projects, research, and experiences related to the "${displayTagName}" tag.`}
          </p>

          {filteredPosts.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '1.2rem',
                color: 'var(--color-secundario)',
                borderBottom: '2px solid rgba(200, 200, 200, 0.4)',
                paddingBottom: '0.5rem'
              }}>
                {lang === 'es' ? 'Portafolio y Publicaciones' : 'Portfolio & Publications'}
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.2rem'
              }}>
                {filteredPosts.map((post) => {
                  const data = post[lang] || post['es'];
                  const cat = post.categories[lang] || post.categories['es'];
                  const slug = post.slugs[lang] || post.slugs['es'];

                  return (
                    <Link
                      key={post.id}
                      href={`/${lang}/${cat}/${slug}`}
                      className="similar-card-item"
                    >
                      <span style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '0.3rem' }}>
                        {data.displayDate || (cat ? cat.toUpperCase() : '')}
                      </span>
                      <h4 className="similar-card-title">
                        {data.title}
                      </h4>
                      <div style={{ marginTop: '0.5rem' }}>
                        <TagBadges item={post} lang={lang} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {filteredExp.length > 0 && (
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '1.2rem',
                color: 'var(--color-secundario)',
                borderBottom: '2px solid rgba(200, 200, 200, 0.4)',
                paddingBottom: '0.5rem'
              }}>
                {lang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {filteredExp.map((exp, index) => (
                  <div key={index} style={{ 
                    borderLeft: '3px solid var(--color-principal)', 
                    paddingLeft: '1.2rem'
                  }}>
                    <span style={{ fontSize: '0.85rem', color: '#888', fontWeight: 500 }}>
                      {exp.period}
                    </span>
                    <h3 style={{ margin: '0.2rem 0', fontSize: '1.15rem', color: 'var(--color-secundario)', fontWeight: 700 }}>
                      {exp.role}
                    </h3>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', color: '#666', fontWeight: 600 }}>
                      {exp.company}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredPosts.length === 0 && filteredExp.length === 0 && (
            <p style={{ color: '#888', fontStyle: 'italic' }}>
              {lang === 'es' ? 'No se encontraron resultados.' : 'No results found.'}
            </p>
          )}

        </div>
      </section>
    </motion.div>
  );
};

export default TagPageClient;
