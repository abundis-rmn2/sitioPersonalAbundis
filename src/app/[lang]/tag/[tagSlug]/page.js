import { cvPosts, experienceData, TAG_SCHEMA } from '@/data/cvData';
import TagPageClient from '@/components/TagPageClient';

export async function generateStaticParams() {
  const params = [];
  const langs = ['es', 'en'];

  // Obtener todos los slugs de etiquetas del TAG_SCHEMA
  const allTags = [
    ...TAG_SCHEMA.dominio,
    ...TAG_SCHEMA.rol,
    ...TAG_SCHEMA.metodo,
    ...TAG_SCHEMA.contexto
  ];

  for (const lang of langs) {
    for (const tag of allTags) {
      // Excluir la etiqueta "blog" para las rutas si así se desea, o permitirla.
      if (tag !== 'blog') {
        params.push({ lang, tagSlug: tag });
      }
    }
  }

  return params;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { lang, tagSlug } = params;
  
  if (!tagSlug) return { title: 'Etiqueta' };

  const displayTagName = tagSlug.replace(/-/g, ' ').toUpperCase();
  
  const siteName = 'Ángel Javier Ramírez Abundis — Portafolio & Grafo 3D';
  const title = `Proyectos en ${displayTagName} | Javier Abundis`;
  const description = lang === 'es' 
    ? `Explora el portafolio, investigaciones y experiencia profesional de Javier Abundis relacionados con ${displayTagName}.`
    : `Explore Javier Abundis's portfolio, research, and professional experience related to ${displayTagName}.`;
  
  const url = `https://abundis.com.mx/${lang}/tag/${tagSlug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    }
  };
}

export default async function TagPage(props) {
  const params = await props.params;
  const { lang, tagSlug } = params;

  if (!tagSlug) return null;

  // Filtrar cvPosts que contienen este tag
  const filteredPosts = cvPosts.filter(post => {
    const tags = post.tags;
    if (!tags) return false;
    
    const dominios = Array.isArray(tags.dominio) ? tags.dominio : (tags.dominio ? [tags.dominio] : []);
    const metodos = Array.isArray(tags.metodo) ? tags.metodo : (tags.metodo ? [tags.metodo] : []);
    const contextos = Array.isArray(tags.contexto) ? tags.contexto : (tags.contexto ? [tags.contexto] : []);
    const rol = tags.rol;

    return dominios.includes(tagSlug) || metodos.includes(tagSlug) || contextos.includes(tagSlug) || rol === tagSlug;
  });

  // Filtrar experienceData (tech y social) que contienen este tag
  const expDataLang = experienceData[lang] || experienceData['es'];
  const allExp = [...(expDataLang.tech || []), ...(expDataLang.social || [])];
  
  const filteredExp = allExp.filter(exp => {
    const tags = exp.tags;
    if (!tags) return false;
    
    const dominios = Array.isArray(tags.dominio) ? tags.dominio : (tags.dominio ? [tags.dominio] : []);
    const metodos = Array.isArray(tags.metodo) ? tags.metodo : (tags.metodo ? [tags.metodo] : []);
    const contextos = Array.isArray(tags.contexto) ? tags.contexto : (tags.contexto ? [tags.contexto] : []);
    const rol = tags.rol;

    return dominios.includes(tagSlug) || metodos.includes(tagSlug) || contextos.includes(tagSlug) || rol === tagSlug;
  });

  return (
    <TagPageClient 
      tagSlug={tagSlug} 
      lang={lang} 
      filteredPosts={filteredPosts} 
      filteredExp={filteredExp} 
    />
  );
}
