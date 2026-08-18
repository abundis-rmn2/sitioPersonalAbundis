import React from 'react';
import { notFound } from 'next/navigation';
import { cvPosts } from '../../../../data/cvData';
import DetailPageClient from '../../../../components/DetailPageClient';

// SSG: Genera estáticamente todos los enlaces localizados de detalles
export function generateStaticParams() {
  const paramsList = [];

  cvPosts.forEach((post) => {
    // Versión en Español
    if (post.slugs.es && post.categories.es) {
      paramsList.push({
        lang: 'es',
        category: post.categories.es,
        slug: post.slugs.es
      });
    }
    // Versión en Inglés
    if (post.slugs.en && post.categories.en) {
      paramsList.push({
        lang: 'en',
        category: post.categories.en,
        slug: post.slugs.en
      });
    }
  });

  return paramsList;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { lang, category, slug } = params;
  
  const post = cvPosts.find(
    (p) => p.slugs[lang] === slug && p.categories[lang] === category
  );

  if (!post) {
    return { title: 'Not Found' };
  }

  const data = post[lang] || post['es'];
  const title = `${data.title} | Javier Abundis`;
  
  // Create a clean description by stripping HTML tags and truncating
  const cleanAbstract = data.abstract ? data.abstract.replace(/<[^>]+>/g, '').trim() : '';
  const description = cleanAbstract.length > 155 
    ? cleanAbstract.substring(0, 155) + '...' 
    : cleanAbstract || title;

  const url = `https://abundis.com.mx/${lang}/${category}/${slug}`;
  const siteName = 'Ángel Javier Ramírez Abundis — Portafolio & Grafo 3D';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'article',
      publishedTime: data.displayDate || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    }
  };
}

export default async function DetailPage(props) {
  const params = await props.params;
  const { lang, category, slug } = params;

  if (lang !== 'es' && lang !== 'en') {
    notFound();
  }

  // Buscar post que coincida con el slug y categoría localizados para el idioma dado
  const post = cvPosts.find(
    (p) => p.slugs[lang] === slug && p.categories[lang] === category
  );

  if (!post) {
    notFound();
  }

  return <DetailPageClient post={post} lang={lang} />;
}
