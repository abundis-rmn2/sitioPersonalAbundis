/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Rutas estáticas
      { source: '/', destination: '/es', permanent: true },
      { source: '/cv', destination: '/es/cv', permanent: true },
      { source: '/experiencia', destination: '/es/experiencia', permanent: true },
      { source: '/academia', destination: '/es/academia', permanent: true },
      { source: '/prensa', destination: '/es/prensa', permanent: true },
      { source: '/proyectos', destination: '/es/proyectos', permanent: true },
      { source: '/page-2', destination: '/es', permanent: true },

      // Patrones dinámicos por categoría
      { source: '/thesis/:slug*', destination: '/es/tesis/:slug*', permanent: true },
      { source: '/paper/:slug*', destination: '/es/articulo/:slug*', permanent: true },
      { source: '/conference/:slug*', destination: '/es/conferencia/:slug*', permanent: true },
      { source: '/codeProject/:slug*', destination: '/es/proyecto-codigo/:slug*', permanent: true },
      { source: '/multimediaProject/:slug*', destination: '/es/proyecto-multimedia/:slug*', permanent: true },
      { source: '/mediaAppearance/:slug*', destination: '/es/aparicion-prensa/:slug*', permanent: true },
      { source: '/blog/:slug*', destination: '/es/publicacion-blog/:slug*', permanent: true },
    ];
  },
};

export default nextConfig;
