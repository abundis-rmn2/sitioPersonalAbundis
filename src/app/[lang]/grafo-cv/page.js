import React from 'react';
import { notFound } from 'next/navigation';
import GrafoCVClient from '../../../components/GrafoCVClient';

export function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' }
  ];
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { lang } = params;
  const isEs = lang === 'es';

  return {
    title: isEs ? 'Grafo Interactivo del CV | Javier Abundis' : 'Interactive CV Graph | Javier Abundis',
    description: isEs 
      ? 'Explora la red relacional de la trayectoria profesional, proyectos de IA, tesis y publicaciones académicas de Javier Abundis en un grafo 3D interactivo.'
      : 'Explore the relational network of Javier Abundis\'s career, AI projects, master thesis, and academic publications in an interactive 3D graph.',
  };
}

export default async function GrafoCVPage(props) {
  const params = await props.params;
  const { lang } = params;

  if (lang !== 'es' && lang !== 'en') {
    notFound();
  }

  return <GrafoCVClient lang={lang} />;
}
