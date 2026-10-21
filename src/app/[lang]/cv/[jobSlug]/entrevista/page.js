import React from 'react';
import { notFound } from 'next/navigation';
import { getInterviewGuide, INTERVIEW_GUIDES } from '../../../../../data/interviewGuides';
import { getTailoredCv } from '../../../../../data/tailoredCvData';
import InterviewGuideClient from './InterviewGuideClient';

export function generateStaticParams() {
  const params = [];
  const slugs = Object.keys(INTERVIEW_GUIDES);
  for (const slug of slugs) {
    params.push({ lang: 'es', jobSlug: slug });
    params.push({ lang: 'en', jobSlug: slug });
  }
  return params;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { lang, jobSlug } = params;

  const guide = getInterviewGuide(jobSlug);
  if (!guide) {
    return { title: 'Not Found' };
  }

  const isEs = lang === 'es';
  const title = isEs
    ? `Guía de Entrevista: ${guide.role} (${guide.company}) | Javier Abundis`
    : `Interview Prep Guide: ${guide.role} (${guide.company}) | Javier Abundis`;

  return {
    title,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function InterviewGuidePage(props) {
  const params = await props.params;
  const { lang, jobSlug } = params;

  if (lang !== 'es' && lang !== 'en') {
    notFound();
  }

  const guide = getInterviewGuide(jobSlug);
  const tailoredData = getTailoredCv(jobSlug);

  if (!guide) {
    notFound();
  }

  return <InterviewGuideClient guide={guide} tailoredData={tailoredData} lang={lang} />;
}
