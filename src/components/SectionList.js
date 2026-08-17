import React, { useState } from 'react';
import Link from 'next/link';
import { cvPosts } from '../data/cvData';

// --- SECTION: PROJECTS (CODE & MULTIMEDIA) ---
export const ProjectsSection = ({ lang = 'es' }) => {
  const [activeTab, setActiveTab] = useState('code'); // 'code' o 'multimedia'
  const codeProjects = cvPosts.filter(p => p.type === 'codeProject');
  const multimedia = cvPosts.filter(p => p.type === 'multimedia');

  const tabs = [
    { id: 'code', label: lang === 'es' ? 'Proyectos de Código' : 'Code Projects' },
    { id: 'multimedia', label: lang === 'es' ? 'Proyectos Multimedia' : 'Multimedia Projects' }
  ];

  const currentList = activeTab === 'code' ? codeProjects : multimedia;

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

      <ul className="list" style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
        {currentList.map((item) => {
          const t = item[lang] || item['es'];
          const cat = item.categories[lang];
          const slug = item.slugs[lang];
          return (
            <li key={item.id} style={{ marginBottom: '1.8rem', borderLeft: '3px solid #eee', paddingLeft: '1rem' }}>
              <span className="displayDate" style={{ fontSize: '0.82rem', color: '#888', display: 'block', marginBottom: '0.2rem' }}>
                {t.displayDate}
              </span>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem', color: 'var(--color-secundario)', textDecoration: 'none' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4', marginTop: '0.3rem' }}
                  dangerouslySetInnerHTML={{ __html: t.citation }} 
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// --- SECTION: ACADEMY (EDUCATION, PAPERS, TALKS) ---
export const AcademySection = ({ lang = 'es' }) => {
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

      <ul className="list" style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
        {currentList.map((item) => {
          const t = item[lang] || item['es'];
          const cat = item.categories[lang];
          const slug = item.slugs[lang];
          return (
            <li key={item.id} style={{ marginBottom: '1.8rem', borderLeft: '3px solid #eee', paddingLeft: '1rem' }}>
              <span className="displayDate" style={{ fontSize: '0.82rem', color: '#888', display: 'block', marginBottom: '0.2rem' }}>
                {t.displayDate}
              </span>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem', color: 'var(--color-secundario)', textDecoration: 'none' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4', marginTop: '0.3rem' }}
                  dangerouslySetInnerHTML={{ __html: t.citation }} 
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// --- SECTION: MEDIA APPEARANCES ---
export const MediaAppearancesList = ({ lang = 'es' }) => {
  const media = cvPosts.filter(p => p.type === 'mediaAppearance');

  return (
    <div style={{ width: '100%' }}>
      <h1>{lang === 'es' ? 'Prensa & Apariciones en Medios' : 'Media Appearances'}</h1>
      <ul className="list" style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
        {media.map((item) => {
          const t = item[lang] || item['es'];
          const cat = item.categories[lang];
          const slug = item.slugs[lang];
          return (
            <li key={item.id} style={{ marginBottom: '1.8rem', borderLeft: '3px solid #eee', paddingLeft: '1rem' }}>
              <span className="displayDate" style={{ fontSize: '0.82rem', color: '#888', display: 'block', marginBottom: '0.2rem' }}>
                {t.displayDate}
              </span>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem', color: 'var(--color-secundario)', textDecoration: 'none' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4', marginTop: '0.3rem' }}
                  dangerouslySetInnerHTML={{ __html: t.citation }} 
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
