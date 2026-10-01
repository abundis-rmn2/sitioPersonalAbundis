import { cvPosts, TAG_SCHEMA } from '@/data/cvData';

export default function sitemap() {
  const baseUrl = 'https://abundis.com.mx';
  const lastModified = new Date();
  
  // Rutas principales Home
  const homeRoutes = [
    {
      url: `${baseUrl}/es`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/es/cv`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/cv`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    }
  ];

  // Rutas de Posts
  const postRoutes = [];
  cvPosts.forEach(post => {
    if (post.slugs.es && post.categories.es) {
      postRoutes.push({
        url: `${baseUrl}/es/${post.categories.es}/${post.slugs.es}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
    if (post.slugs.en && post.categories.en) {
      postRoutes.push({
        url: `${baseUrl}/en/${post.categories.en}/${post.slugs.en}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  });

  // Rutas de Tags Interiores
  const tagRoutes = [];
  const allTags = [
    ...TAG_SCHEMA.dominio,
    ...TAG_SCHEMA.rol,
    ...TAG_SCHEMA.metodo,
    ...TAG_SCHEMA.contexto
  ];

  // Obtener tags únicos usados en los posts para evitar indexar tags vacíos (Soft 404)
  const usedTags = new Set();
  cvPosts.forEach(post => {
    if (post.tags) {
      if (Array.isArray(post.tags.es)) {
        post.tags.es.forEach(tag => usedTags.add(tag));
      }
      if (Array.isArray(post.tags.en)) {
        post.tags.en.forEach(tag => usedTags.add(tag));
      }
    }
  });

  allTags.forEach(tag => {
    if (tag !== 'blog' && usedTags.has(tag)) {
      tagRoutes.push({
        url: `${baseUrl}/es/tag/${tag}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
      tagRoutes.push({
        url: `${baseUrl}/en/tag/${tag}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  });

  return [...homeRoutes, ...postRoutes, ...tagRoutes];
}
