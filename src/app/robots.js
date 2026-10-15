export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/',
    },
    sitemap: 'https://abundis.com.mx/sitemap.xml',
  }
}
