// src/app/[lang]/cv/[jobSlug]/ats.pdf/route.js
// Route handler para descargar el CV ATS generado en el servidor en formato PDF.

import { buildAtsResume } from '../../../../../lib/ats/buildAtsResume.js';
import { generateAtsPdfBuffer } from '../../../../../lib/ats/AtsResumePdf.js';
import { TAILORED_CVS } from '../../../../../data/tailoredCvData.js';

export const dynamic = 'force-static';
export const dynamicParams = true;

export async function generateStaticParams() {
  const params = [];
  const slugs = Object.keys(TAILORED_CVS);
  for (const slug of slugs) {
    params.push({ lang: 'es', jobSlug: slug });
    params.push({ lang: 'en', jobSlug: slug });
  }
  return params;
}

export async function GET(request, context) {
  const params = await context.params;
  const { lang, jobSlug } = params;

  if (lang !== 'es' && lang !== 'en') {
    return new Response('Not Found', { status: 404 });
  }

  const resume = buildAtsResume(lang, jobSlug);
  if (!resume) {
    return new Response('Not Found', { status: 404 });
  }

  const buffer = await generateAtsPdfBuffer(resume);

  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${resume.fileName}.pdf"`,
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
