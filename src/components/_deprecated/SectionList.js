import React, { useState } from 'react';
import Link from 'next/link';
import { cvPosts } from '../data/cvData';

// ─── TAG COLORS v2 (mirrors nodeTypeColors in NetworkGraphComponent.js) ──────
const DOMINIO_COLORS = {
  'graffiti':               { bg: '#FF000018', border: '#FF0000', text: '#b30000' },   // thesis red
  'desapariciones-mx':      { bg: '#32CD3218', border: '#32CD32', text: '#1a6b1a' },   // mediaAppearance green
  'ciudad-espacio-publico': { bg: '#FFA50018', border: '#FFA500', text: '#7a4e00' },   // conference orange
  'desarrollo-web-comercial':{ bg: '#00808018', border: '#008080', text: '#004d4d' },  // codeProject teal
  'comunicacion-politica':  { bg: '#1E90FF18', border: '#1E90FF', text: '#0050bb' },   // paper blue
};

const ROL_COLORS = {
  'investigador':      { bg: '#1E90FF14', border: '#1E90FF', text: '#0050bb' },
  'desarrollador':     { bg: '#00808014', border: '#008080', text: '#004d4d' },
  'ponente':           { bg: '#FFA50014', border: '#FFA500', text: '#7a4e00' },
  'director-creativo': { bg: '#FF149314', border: '#FF1493', text: '#99005e' },
  'activista-tecnico': { bg: '#FF000014', border: '#FF0000', text: '#b30000' },
  'colaborador-laboral':{ bg: '#80808014', border: '#808080', text: '#444444' },
  'difusion-externa':  { bg: '#32CD3214', border: '#32CD32', text: '#1a6b1a' },
};

const METODO_COLORS = {
  'python-data':      { bg: '#66339914', border: '#663399', text: '#3d1f5c' },
  'ml-vision':        { bg: '#FF149314', border: '#FF1493', text: '#99005e' },
  'nlp':              { bg: '#00808014', border: '#008080', text: '#004d4d' },
  'js-react-web':     { bg: '#cc840014', border: '#cc8400', text: '#7a4e00' },
  'gis-espacial':     { bg: '#1E90FF14', border: '#0055aa', text: '#003d80' },
  'etnografia':       { bg: '#FFA50014', border: '#cc6600', text: '#7a3e00' },
  'analisis-documental':{ bg: '#1E90FF14', border: '#1E90FF', text: '#0050bb' },
  'audiovisual':      { bg: '#FF000014', border: '#cc0000', text: '#8a0000' },
  'ar-interactivo':   { bg: '#ff00ff14', border: '#cc00cc', text: '#800080' },
};

const chipBase = (c, size = 'md') => ({
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

const TagBadges = ({ item }) => {
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
        return c ? <span key={d} style={chipBase(c)}>{d.replace(/-/g, ' ')}</span> : null;
      })}
      {rol && ROL_COLORS[rol] && (
        <span style={chipBase(ROL_COLORS[rol])}>{rol.replace(/-/g, ' ')}</span>
      )}
      {metodo.map(m => {
        const c = METODO_COLORS[m];
        return c ? <span key={m} style={chipBase(c, 'sm')}>{m.replace(/-/g, ' ')}</span> : null;
      })}
      {isIntl && (
        <span style={chipBase({ bg: '#00000010', border: '#aaaaaa', text: '#555555' }, 'sm')}>🌐 intl</span>
      )}
    </div>
  );
};

// --- SECTION: PROJECTS (CODE & MULTIMEDIA) ---
export const ProjectsSection = ({ lang = 'es', networkGraphRef }) => {
  const [activeTab, setActiveTab] = useState('code'); // 'code' o 'multimedia'
  const codeProjects = cvPosts.filter(p => p.type === 'codeProject');
  const multimedia = cvPosts.filter(p => p.type === 'multimedia');

  const tabs = [
    { id: 'code', label: lang === 'es' ? 'Proyectos de Código' : 'Code Projects' },
    { id: 'multimedia', label: lang === 'es' ? 'Proyectos Multimedia' : 'Multimedia Projects' }
  ];

  const currentList = activeTab === 'code' ? codeProjects : multimedia;

  const handleMouseEnter = (id) => {
    if (networkGraphRef?.current && id) {
      networkGraphRef.current.zoomToID(id);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <h1>{lang === 'es' ? 'Proyectos' : 'Projects'}</h1>
      
      {/* Selector de pestañas */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginBottom: '2rem', 
        borderBottom: '1px solid #eee', 
        paddingBottom: '8px' 
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              color: activeTab === tab.id ? 'var(--color-principal)' : '#888',
              cursor: 'pointer',
              padding: '6px 12px',
              borderBottom: activeTab === tab.id ? '2px solid var(--color-principal)' : '2px solid transparent',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ul className="list project-grid" style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0, 
        textAlign: 'left',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '2rem'
      }}>
        {currentList.map((item) => {
          const t = item[lang] || item['es'];
          const cat = item.categories[lang];
          const slug = item.slugs[lang];
          return (
            <li 
              key={item.id} 
              onMouseEnter={() => handleMouseEnter(item.id)}
              style={{ transition: 'transform 0.3s' }}
            >
              <div style={{ 
                aspectRatio: '1/1', 
                width: '100%', 
                backgroundColor: '#eee', 
                marginBottom: '1rem', 
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img 
                  src="https://via.placeholder.com/400" 
                  alt="Dummy" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
              </div>
              <span className="displayDate" style={{ fontSize: '0.82rem', color: '#888', display: 'block', marginBottom: '0.2rem' }}>
                {t.displayDate}
              </span>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem', color: 'var(--color-secundario)', textDecoration: 'none', lineHeight: '1.2' }}>
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
        })}
      </ul>
    </div>
  );
};

// --- SECTION: ACADEMY (EDUCATION, PAPERS, TALKS) ---
export const AcademySection = ({ lang = 'es', networkGraphRef }) => {
  const [activeTab, setActiveTab] = useState('education'); // 'education', 'articles', 'talks'
  const education = cvPosts.filter(p => p.type === 'thesis');
  const articles = cvPosts.filter(p => p.type === 'articles');
  const talks = cvPosts.filter(p => p.type === 'talks');

  const tabs = [
    { id: 'education', label: lang === 'es' ? 'Educación & Tesis' : 'Education & Thesis' },
    { id: 'articles', label: lang === 'es' ? 'Artículos Científicos' : 'Papers' },
    { id: 'talks', label: lang === 'es' ? 'Ponencias & Conferencias' : 'Talks' }
  ];

  const getList = () => {
    if (activeTab === 'education') return education;
    if (activeTab === 'articles') return articles;
    return talks;
  };

  const currentList = getList();

  const handleMouseEnter = (id) => {
    if (networkGraphRef?.current && id) {
      networkGraphRef.current.zoomToID(id);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <h1>{lang === 'es' ? 'Academia e Investigación' : 'Academy & Research'}</h1>

      {/* Selector de pestañas */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginBottom: '2rem', 
        borderBottom: '1px solid #eee', 
        paddingBottom: '8px' 
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              color: activeTab === tab.id ? 'var(--color-principal)' : '#888',
              cursor: 'pointer',
              padding: '6px 12px',
              borderBottom: activeTab === tab.id ? '2px solid var(--color-principal)' : '2px solid transparent',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ul 
        className={activeTab === 'education' ? "list" : "list academy-grid"} 
        style={
          activeTab === 'education' 
            ? { listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }
            : { listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }
        }
      >
        {currentList.map((item) => {
          const t = item[lang] || item['es'];
          const cat = item.categories[lang];
          const slug = item.slugs[lang];
          
          const isGrid = activeTab !== 'education';

          return (
            <li 
              key={item.id} 
              onMouseEnter={() => handleMouseEnter(item.id)}
              style={
                isGrid 
                  ? { transition: 'transform 0.3s' }
                  : { marginBottom: '1.8rem', borderLeft: '3px solid #eee', paddingLeft: '1rem', transition: 'border-color 0.3s' }
              }
            >
              {isGrid && (
                <div style={{ 
                  display: 'none',
                  aspectRatio: '1/1', 
                  width: '100%', 
                  backgroundColor: '#eee', 
                  marginBottom: '1rem', 
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="https://via.placeholder.com/400" 
                    alt="Dummy" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              )}
              <span className="displayDate" style={{ fontSize: '0.82rem', color: '#888', display: 'block', marginBottom: '0.2rem' }}>
                {t.displayDate}
              </span>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem', color: 'var(--color-secundario)', textDecoration: 'none', lineHeight: '1.2' }}>
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
        })}
      </ul>
    </div>
  );
};

// --- SECTION: MEDIA APPEARANCES ---
export const MediaAppearancesList = ({ lang = 'es', networkGraphRef }) => {
  const media = cvPosts.filter(p => p.type === 'mediaAppearance');

  const handleMouseEnter = (id) => {
    if (networkGraphRef?.current && id) {
      networkGraphRef.current.zoomToID(id);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <h1>{lang === 'es' ? 'Prensa & Apariciones en Medios' : 'Media Appearances'}</h1>
      <ul className="list media-grid" style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0, 
        textAlign: 'left',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '2rem'
      }}>
        {media.map((item) => {
          const t = item[lang] || item['es'];
          const cat = item.categories[lang];
          const slug = item.slugs[lang];
          return (
            <li 
              key={item.id} 
              onMouseEnter={() => handleMouseEnter(item.id)}
              style={{ transition: 'transform 0.3s' }}
            >
              <div style={{ 
                aspectRatio: '1/1', 
                width: '100%', 
                backgroundColor: '#eee', 
                marginBottom: '1rem', 
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img 
                  src="https://via.placeholder.com/400" 
                  alt="Dummy" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <span className="displayDate" style={{ fontSize: '0.82rem', color: '#888', display: 'block', marginBottom: '0.2rem' }}>
                {t.displayDate}
              </span>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem', color: 'var(--color-secundario)', textDecoration: 'none', lineHeight: '1.2' }}>
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
        })}
      </ul>
    </div>
  );
};
