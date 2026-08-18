import React from 'react';
import LangHomePageClient from '../../../components/LangHomePageClient';

export const metadata = {
  title: 'Prensa - Javier Abundis',
  description: 'Apariciones en medios y entrevistas de Javier Abundis.'
};

export default async function PrensaPage(props) {
  const params = await props.params;
  const { lang } = params;
  return <LangHomePageClient lang={lang} initialSection="prensa" />;
}
