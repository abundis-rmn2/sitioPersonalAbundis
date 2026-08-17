import React from 'react';
import Link from 'next/link';
import { cvPosts } from '../data/cvData';

// --- EDUCATION / THESIS LIST ---
export const ThesisList = ({ lang = 'es' }) => {
  const theses = cvPosts.filter(p => p.type === 'thesis');

  return (
    <div>
      <h1>{lang === 'es' ? 'Educación' : 'Education'}</h1>
      <p style={{ display: 'inline', background: 'white' }}>
        {lang === 'es' 
          ? 'Integro el desarrollo de software con las ciencias sociales construyendo herramientas que potencian el análisis y visualización de datos. Desarrollé Amoxeh, un plugin para WordPress que aprovecha Voyant Tools para el análisis de textos periodísticos, permitiendo una comprensión más profunda de las narrativas mediáticas. Mi trabajo también aplica aprendizaje automático para analizar Instagram, mapeando redes de interacciones de hashtags y flujos de contenido.'
          : 'I integrate software development with social science by building tools that enhance data analysis and visualization. Using WordPress as boilerplate, I developed Amoxeh, a WordPress plugin that leverages Voyant Tools for newspaper text analysis, enabling a deeper understanding of media narratives. My work also applies machine learning to analyze Instagram, mapping hashtag networks interactions, and content flows.'
        }
      </p>
      <hr style={{ background: 'transparent', border: 'none', height: '1rem' }} />
      <ul className="thesis-list">
        {theses.map((thesis) => {
          const t = thesis[lang] || thesis['es'];
          const cat = thesis.categories[lang];
          const slug = thesis.slugs[lang];
          return (
            <li key={thesis.id} style={{ marginBottom: '1.8rem', textAlign: 'right' }}>
              <span className="displayDate">{t.displayDate}</span>
              <Link className="title" href={`/${lang}/${cat}/${slug}`} style={{ fontWeight: 'bold', fontSize: '1.15rem', display: 'block', marginBottom: '0.2rem' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', marginTop: '0.3rem', lineHeight: '1.4' }}
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

// --- ARTICLES LIST ---
export const ArticleList = ({ lang = 'es' }) => {
  const articles = cvPosts.filter(p => p.type === 'articles');

  return (
    <div>
      <h1>{lang === 'es' ? 'Artículos' : 'Articles'}</h1>
      <ul className="list">
        {articles.map((article) => {
          const t = article[lang] || article['es'];
          const cat = article.categories[lang];
          const slug = article.slugs[lang];
          return (
            <li key={article.id} style={{ marginBottom: '1.8rem' }}>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4' }}
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

// --- TALKS / CONFERENCES LIST ---
export const TalkList = ({ lang = 'es' }) => {
  const talks = cvPosts.filter(p => p.type === 'talks');

  return (
    <div>
      <h1>{lang === 'es' ? 'Ponencias & Conferencias' : 'Talks & Conferences'}</h1>
      <ul className="list">
        {talks.map((talk) => {
          const t = talk[lang] || talk['es'];
          const cat = talk.categories[lang];
          const slug = talk.slugs[lang];
          return (
            <li key={talk.id} style={{ marginBottom: '1.8rem' }}>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4' }}
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

// --- CODE PROJECTS LIST ---
export const CodeProjectsList = ({ lang = 'es' }) => {
  const codeProjects = cvPosts.filter(p => p.type === 'codeProject');

  return (
    <div>
      <h1>{lang === 'es' ? 'Proyectos de Código' : 'Code Projects'}</h1>
      <ul className="list">
        {codeProjects.map((project) => {
          const t = project[lang] || project['es'];
          const cat = project.categories[lang];
          const slug = project.slugs[lang];
          return (
            <li key={project.id} style={{ marginBottom: '1.8rem' }}>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4' }}
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

// --- MULTIMEDIA LIST ---
export const MultimediaList = ({ lang = 'es' }) => {
  const multimedia = cvPosts.filter(p => p.type === 'multimedia');

  return (
    <div>
      <h1>{lang === 'es' ? 'Proyectos Multimedia' : 'Multimedia Projects'}</h1>
      <ul className="list">
        {multimedia.map((item) => {
          const t = item[lang] || item['es'];
          const cat = item.categories[lang];
          const slug = item.slugs[lang];
          return (
            <li key={item.id} style={{ marginBottom: '1.8rem' }}>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4' }}
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

// --- MEDIA APPEARANCES LIST ---
export const MediaAppearancesList = ({ lang = 'es' }) => {
  const media = cvPosts.filter(p => p.type === 'mediaAppearance');

  return (
    <div>
      <h1>{lang === 'es' ? 'Prensa & Apariciones en Medios' : 'Media Appearances'}</h1>
      <ul className="list">
        {media.map((item) => {
          const t = item[lang] || item['es'];
          const cat = item.categories[lang];
          const slug = item.slugs[lang];
          return (
            <li key={item.id} style={{ marginBottom: '1.8rem' }}>
              <Link href={`/${lang}/${cat}/${slug}`} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'block', marginBottom: '0.2rem' }}>
                {t.title}
              </Link>
              {t.citation && (
                <div 
                  style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.4' }}
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
