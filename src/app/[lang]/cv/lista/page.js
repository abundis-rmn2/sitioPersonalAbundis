import React from 'react';
import { TAILORED_CVS } from '../../../../data/tailoredCvData';
import CvListaClient from './CvListaClient';

export const metadata = {
  title: "Tailored CVs - Lista Interna",
  robots: {
    index: false,
    follow: false,
  }
};

export default async function CvListaPage(props) {
  const params = await props.params;
  const { lang } = params;

  // Ordenar de las más nuevas a las más viejas por jobPosting.date
  const sortedEntries = Object.entries(TAILORED_CVS).sort(([, a], [, b]) => {
    const dateA = a.jobPosting?.date || '2026-01-01';
    const dateB = b.jobPosting?.date || '2026-01-01';
    return dateB.localeCompare(dateA);
  });

  return <CvListaClient cvEntries={sortedEntries} lang={lang} />;
}
