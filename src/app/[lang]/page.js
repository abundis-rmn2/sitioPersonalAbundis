import React from 'react';
import { notFound } from 'next/navigation';
import LangHomePageClient from '../../components/LangHomePageClient';

export function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' }
  ];
}

export default async function LangPage(props) {
  const params = await props.params;
  const { lang } = params;

  if (lang !== 'es' && lang !== 'en') {
    notFound();
  }

  return <LangHomePageClient lang={lang} />;
}
