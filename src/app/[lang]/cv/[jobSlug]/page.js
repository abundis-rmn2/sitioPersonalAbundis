import React from 'react';
import { notFound } from 'next/navigation';
import CVPageClient from '../../../../components/CVPageClient';
import { getTailoredCv } from '../../../../data/tailoredCvData';

export function generateStaticParams() {
  return [
    { lang: 'es', jobSlug: 'intagono-desarrollador-web' },
    { lang: 'en', jobSlug: 'intagono-desarrollador-web' }
  ];
}

export default async function TailoredCVPage(props) {
  const params = await props.params;
  const { lang, jobSlug } = params;

  const tailoredData = getTailoredCv(jobSlug);

  if (!tailoredData || (lang !== 'es' && lang !== 'en')) {
    notFound();
  }

  return <CVPageClient lang={lang} tailoredData={tailoredData} jobSlug={jobSlug} />;
}
