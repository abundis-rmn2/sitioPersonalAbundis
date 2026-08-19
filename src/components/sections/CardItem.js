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
const CardItem = ({ item, lang, showImage = false, listMode = false, onMouseEnter, onMouseLeave }) => {
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
      onMouseLeave={() => onMouseLeave?.(item.id)}
      style={liStyle}
      className="card-item-container"
    >
      <Link
        href={`/${lang}/${cat}/${slug}`}
        className="card-item-link"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {/* 1. Fecha */}
        <span className="displayDate" style={{ fontSize: '0.82rem', color: '#888', display: 'block', marginBottom: '0.4rem', order: 1 }}>
          {t.displayDate}
        </span>

        {/* 2. Imagen en relación de aspecto natural */}
        <div
          className="card-image-wrapper"
          style={{
            display: (showImage && item.image) ? 'block' : 'none',
            width: '100%',
            backgroundColor: '#eee',
            marginBottom: '0.6rem',
            borderRadius: '8px',
            overflow: 'hidden',
            order: 2
          }}
        >
          <img
            src={item.image || "https://via.placeholder.com/400"}
            alt={t.title || ""}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* 3. Texto / Título */}
        <span
          className="card-title"
          style={{
            fontSize: '1.15rem',
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '0.6rem',
            color: 'var(--color-secundario)',
            lineHeight: '1.2',
            transition: 'color 0.3s ease',
            order: 3
          }}
        >
          {t.title}
        </span>
      </Link>

      {/* 4. Etiquetas */}
      <div style={{ marginTop: '0.2rem' }}>
        <TagBadges item={item} lang={lang} />
      </div>
    </li>
  );
};

export default CardItem;
