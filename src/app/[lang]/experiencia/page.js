import React from 'react';
import LangHomePageClient from '../../../components/LangHomePageClient';

export const metadata = {
  title: 'Experiencia - Javier Abundis',
  description: 'Trayectoria profesional y experiencia laboral de Javier Abundis.'
};

export default async function ExperienciaPage(props) {
  const params = await props.params;
  const { lang } = params;
  return <LangHomePageClient lang={lang} initialSection="experiencia" />;
}
