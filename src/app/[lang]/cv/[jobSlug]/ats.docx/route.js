// src/app/[lang]/cv/[jobSlug]/ats.docx/route.js
// Route handler para descargar el CV ATS generado en el servidor en formato DOCX.

import { buildAtsResume } from '../../../../../lib/ats/buildAtsResume.js';
import { generateAtsDocxBuffer } from '../../../../../lib/ats/atsResumeDocx.js';
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

  const buffer = await generateAtsDocxBuffer(resume);

  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename="${resume.fileName}.docx"`,
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
