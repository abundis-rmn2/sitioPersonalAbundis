import React from 'react';
import Link from 'next/link';
import { TagBadges } from './tagColors';

/**
 * CardItem — tarjeta de contenido individual.
 *
 * Props:
 *  - item        : objeto de cvData
 *  - lang        : 'es' | 'en'
 *  - showImage   : boolean — muestra/oculta la imagen placeholder
 *  - listMode    : boolean — aplica estilos de lista (borde lateral) vs grid (sin borde)
 *  - onMouseEnter: función callback
 */
const CardItem = ({ item, lang, showImage = false, listMode = false, onMouseEnter }) => {
  const t = item[lang] || item['es'];
  const cat = item.categories[lang];
  const slug = item.slugs[lang];

  const liStyle = listMode
    ? { marginBottom: '1.8rem', borderLeft: '3px solid #eee', paddingLeft: '1rem', transition: 'border-color 0.3s' }
    : { transition: 'transform 0.3s' };

  return (
    <li
      key={item.id}
      onMouseEnter={() => onMouseEnter?.(item.id)}
      style={liStyle}
    >
      {/* Imagen placeholder 1:1 */}
      <div style={{
        display: showImage ? 'block' : 'none',
        aspectRatio: '1/1',
        width: '100%',
        backgroundColor: '#eee',
        marginBottom: '1rem',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        <img
          src="https://via.placeholder.com/400"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <span className="displayDate" style={{ fontSize: '0.82rem', color: '#888', display: 'block', marginBottom: '0.2rem' }}>
        {t.displayDate}
      </span>

      <Link
        href={`/${lang}/${cat}/${slug}`}
        style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem', color: 'var(--color-secundario)', textDecoration: 'none', lineHeight: '1.2' }}
      >
        {t.title}
      </Link>

      {t.citation && (
        <div
          style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4', marginTop: '0.5rem' }}
          dangerouslySetInnerHTML={{ __html: t.citation }}
        />
      )}

      <div style={{ marginTop: '0.5rem' }}>
        <TagBadges item={item} />
      </div>
    </li>
  );
};

export default CardItem;
