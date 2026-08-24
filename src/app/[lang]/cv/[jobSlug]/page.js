import React from 'react';
import { notFound } from 'next/navigation';
import CVPageClient from '../../../../components/CVPageClient';
import { getTailoredCv } from '../../../../data/tailoredCvData';

export function generateStaticParams() {
  return [
    { lang: 'es', jobSlug: 'intagono-desarrollador-web' },
    { lang: 'en', jobSlug: 'intagono-desarrollador-web' },
    { lang: 'es', jobSlug: 'geest' },
    { lang: 'en', jobSlug: 'geest' },
    { lang: 'es', jobSlug: 'geest-disenador-ux-ui-react' },
    { lang: 'en', jobSlug: 'geest-disenador-ux-ui-react' },
    { lang: 'es', jobSlug: 'Geest' },
    { lang: 'en', jobSlug: 'Geest' },
    { lang: 'es', jobSlug: 'pavago' },
    { lang: 'en', jobSlug: 'pavago' },
    { lang: 'es', jobSlug: 'pavago-wordpress-developer' },
    { lang: 'en', jobSlug: 'pavago-wordpress-developer' },
    { lang: 'es', jobSlug: 'canonical' },
    { lang: 'en', jobSlug: 'canonical' },
    { lang: 'es', jobSlug: 'canonical-web-frontend-engineer' },
    { lang: 'en', jobSlug: 'canonical-web-frontend-engineer' }
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
