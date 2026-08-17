import React from 'react';
import CardItem from './CardItem';

/**
 * SectionGrid — wrapper de grid o lista.
 *
 * Props:
 *  - items       : array de items de cvData
 *  - lang        : 'es' | 'en'
 *  - listMode    : boolean — si true usa layout de lista vertical, si false usa grid CSS
 *  - columns     : number | 'auto' — número fijo de columnas en modo grid (default: 'auto')
 *  - showImage   : boolean — pasa a CardItem para mostrar/ocultar imagen
 *  - className   : string — clase extra para el <ul>
 *  - onMouseEnter: (id) => void
 */
const SectionGrid = ({
  items,
  lang,
  listMode = false,
  columns = 'auto',
  showImage = false,
  className = '',
  onMouseEnter,
}) => {
  const gridColumns = columns === 'auto'
    ? 'repeat(auto-fill, minmax(220px, 1fr))'
    : `repeat(${columns}, 1fr)`;

  const ulStyle = listMode
    ? { listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }
    : {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        textAlign: 'left',
        display: 'grid',
        gridTemplateColumns: gridColumns,
        gap: '2rem',
      };

  return (
    <ul className={`list ${className}`} style={ulStyle}>
      {items.map(item => (
        <CardItem
          key={item.id}
          item={item}
          lang={lang}
          showImage={showImage}
          listMode={listMode}
          onMouseEnter={onMouseEnter}
        />
      ))}
    </ul>
  );
};

export default SectionGrid;
