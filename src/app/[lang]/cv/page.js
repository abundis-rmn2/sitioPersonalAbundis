import React from 'react';
import { notFound } from 'next/navigation';
import CVPageClient from '../../../components/CVPageClient';

export function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' }
  ];
}

export default async function CVPage(props) {
  const params = await props.params;
  const { lang } = params;

  if (lang !== 'es' && lang !== 'en') {
    notFound();
  }

  return <CVPageClient lang={lang} />;
}
