import React from 'react';
import LangHomePageClient from '../../../components/LangHomePageClient';

export const metadata = {
  title: 'Academia - Javier Abundis',
  description: 'Investigaciones académicas, publicaciones y conferencias.'
};

export default async function AcademiaPage(props) {
  const params = await props.params;
  const { lang } = params;
  return <LangHomePageClient lang={lang} initialSection="academia" />;
}
