import React from 'react';

// ─── TAG COLORS v2 (mirrors nodeTypeColors in NetworkGraphComponent.js) ──────
export const DOMINIO_COLORS = {
  'graffiti':               { bg: '#FF000018', border: '#FF0000', text: '#b30000' },
  'desapariciones-mx':      { bg: '#32CD3218', border: '#32CD32', text: '#1a6b1a' },
  'ciudad-espacio-publico': { bg: '#FFA50018', border: '#FFA500', text: '#7a4e00' },
  'desarrollo-web-comercial':{ bg: '#00808018', border: '#008080', text: '#004d4d' },
  'comunicacion-politica':  { bg: '#1E90FF18', border: '#1E90FF', text: '#0050bb' },
};

export const ROL_COLORS = {
  'investigador':       { bg: '#1E90FF14', border: '#1E90FF', text: '#0050bb' },
  'desarrollador':      { bg: '#00808014', border: '#008080', text: '#004d4d' },
  'ponente':            { bg: '#FFA50014', border: '#FFA500', text: '#7a4e00' },
  'director-creativo':  { bg: '#FF149314', border: '#FF1493', text: '#99005e' },
  'activista-tecnico':  { bg: '#FF000014', border: '#FF0000', text: '#b30000' },
  'colaborador-laboral':{ bg: '#80808014', border: '#808080', text: '#444444' },
  'difusion-externa':   { bg: '#32CD3214', border: '#32CD32', text: '#1a6b1a' },
};

export const METODO_COLORS = {
  'python-data':        { bg: '#66339914', border: '#663399', text: '#3d1f5c' },
  'ml-vision':          { bg: '#FF149314', border: '#FF1493', text: '#99005e' },
  'nlp':                { bg: '#00808014', border: '#008080', text: '#004d4d' },
  'js-react-web':       { bg: '#cc840014', border: '#cc8400', text: '#7a4e00' },
  'gis-espacial':       { bg: '#1E90FF14', border: '#0055aa', text: '#003d80' },
  'etnografia':         { bg: '#FFA50014', border: '#cc6600', text: '#7a3e00' },
  'analisis-documental':{ bg: '#1E90FF14', border: '#1E90FF', text: '#0050bb' },
  'audiovisual':        { bg: '#FF000014', border: '#cc0000', text: '#8a0000' },
  'ar-interactivo':     { bg: '#ff00ff14', border: '#cc00cc', text: '#800080' },
};

export const chipBase = (c, size = 'md') => ({
  display: 'inline-block',
  fontSize: size === 'sm' ? '0.62rem' : '0.68rem',
  fontWeight: '600',
  letterSpacing: '0.02em',
  padding: size === 'sm' ? '1px 6px' : '2px 7px',
  borderRadius: '3px',
  border: `1px solid ${c.border}`,
  backgroundColor: c.bg,
  color: c.text,
  marginRight: '5px',
  marginTop: '4px',
  lineHeight: '1.6',
  whiteSpace: 'nowrap',
});

export const TagBadges = ({ item }) => {
  const tags = item?.tags;
  if (!tags) return null;
  const { dominio = [], rol, metodo = [], contexto = [] } = tags;
  const hasContent = dominio.length > 0 || rol || metodo.length > 0;
  if (!hasContent || rol === 'blog') return null;

  const isIntl = contexto.includes('internacional');

  return (
    <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap' }}>
      {dominio.map(d => {
        const c = DOMINIO_COLORS[d];
        return c ? <span key={d} style={chipBase(c)}>{d.replace(/-/g, ' ')}</span> : null;
      })}
      {rol && ROL_COLORS[rol] && (
        <span style={chipBase(ROL_COLORS[rol])}>{rol.replace(/-/g, ' ')}</span>
      )}
      {metodo.map(m => {
        const c = METODO_COLORS[m];
        return c ? <span key={m} style={chipBase(c, 'sm')}>{m.replace(/-/g, ' ')}</span> : null;
      })}
      {isIntl && (
        <span style={chipBase({ bg: '#00000010', border: '#aaaaaa', text: '#555555' }, 'sm')}>🌐 intl</span>
      )}
    </div>
  );
};
