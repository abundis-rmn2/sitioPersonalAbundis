import React from 'react';
import LangHomePageClient from '../../../components/LangHomePageClient';

export const metadata = {
  title: 'Proyectos - Javier Abundis',
  description: 'Portafolio de proyectos de código y multimedia de Javier Abundis.'
};

export default async function ProyectosPage(props) {
  const params = await props.params;
  const { lang } = params;
  return <LangHomePageClient lang={lang} initialSection="proyectos" />;
}
