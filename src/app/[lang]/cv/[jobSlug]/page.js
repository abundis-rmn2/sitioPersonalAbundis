import React from 'react';
import { notFound } from 'next/navigation';
import CVPageClient from '../../../../components/CVPageClient';
import { TAILORED_CVS, getTailoredCv } from '../../../../data/tailoredCvData';

export function generateStaticParams() {
  const params = [];
  const slugs = Object.keys(TAILORED_CVS);
  for (const slug of slugs) {
    params.push({ lang: 'es', jobSlug: slug });
    params.push({ lang: 'en', jobSlug: slug });
  }
  return params;
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
