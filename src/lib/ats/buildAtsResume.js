// src/lib/ats/buildAtsResume.js
// Función pura para construir el modelo normalizado de CV ATS compatible.
// Fusiona cvMaster con tailoredCvData asegurando reglas estrictas ATS.

import { cvMaster } from '../../data/cv/cvMaster.js';
import { getTailoredCv } from '../../data/tailoredCvData.js';

/**
 * Sanitiza texto eliminando emojis, caracteres no latinos y espacios excesivos.
 */
export function sanitizeAtsText(text) {
  if (!text) return '';
  return text
    // Eliminar caracteres japoneses o no latinos específicos
    .replace(/問答マーケティング/g, '')
    .replace(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/gu, '')
    // Eliminar emojis
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]/gu, '')
    // Reemplazar espacios de no separación
    .replace(/\u00A0/g, ' ')
    // Normalizar espacios
    .replace(/[ \t]+/g, ' ')
    .trim();
}

/**
 * Formatea fechas YYYY-MM a formato estándar ATS MM/YYYY.
 */
export function formatAtsDate(dateStr, lang = 'es') {
  if (!dateStr) return '';
  if (dateStr.toLowerCase() === 'present' || dateStr.toLowerCase() === 'presente') {
    return lang === 'es' ? 'Presente' : 'Present';
  }
  const match = dateStr.match(/^(\d{4})-(\d{2})$/);
  if (match) {
    const [, year, month] = match;
    return `${month}/${year}`;
  }
  return dateStr;
}

export function formatAtsPeriod(startStr, endStr, lang = 'es') {
  const start = formatAtsDate(startStr, lang);
  const end = formatAtsDate(endStr, lang);
  if (!start) return end;
  if (!end) return start;
  return `${start} – ${end}`;
}

/**
 * Genera el modelo normalizado de CV para ATS.
 */
export function buildAtsResume(lang = 'es', jobSlug = null) {
  const isEs = lang === 'es';
  const tailored = jobSlug ? getTailoredCv(jobSlug) : null;
  if (jobSlug && !tailored) {
    return null;
  }

  // Contacto con URLs en texto plano
  const contact = {
    fullName: cvMaster.contact.fullName,
    shortName: cvMaster.contact.shortName,
    targetTitle: sanitizeAtsText(tailored?.targetTitle?.[lang] || tailored?.targetRole?.[lang] || (isEs ? 'Desarrollador Full-Stack' : 'Full-Stack Developer')),
    email: cvMaster.contact.email,
    phone: cvMaster.contact.phone,
    location: cvMaster.contact.location[lang] || cvMaster.contact.location.es,
    website: cvMaster.contact.website,
    websiteUrl: cvMaster.contact.websiteUrl,
    linkedin: cvMaster.contact.linkedin,
    linkedinUrl: cvMaster.contact.linkedinUrl,
    github: cvMaster.contact.github,
    githubUrl: cvMaster.contact.githubUrl
  };

  // Encabezados estándar ATS obligatorios
  const headings = {
    summary: isEs ? 'Resumen profesional' : 'Professional Summary',
    skills: isEs ? 'Habilidades' : 'Skills',
    experience: isEs ? 'Experiencia' : 'Experience',
    projects: isEs ? 'Proyectos' : 'Projects',
    education: isEs ? 'Educación' : 'Education',
    talks: isEs ? 'Publicaciones y conferencias' : 'Publications & Talks'
  };

  // Resumen profesional (3-4 líneas, sobrio, concreto)
  const summary = sanitizeAtsText(tailored?.summary?.[lang] || cvMaster.summary[lang] || cvMaster.summary.es);

  // Habilidades agrupadas
  let skills = [];
  if (tailored?.skills?.[lang]) {
    skills = Object.entries(tailored.skills[lang]).map(([category, items]) => ({
      category: sanitizeAtsText(category),
      items: items.map(sanitizeAtsText)
    }));
  } else {
    skills = Object.values(cvMaster.skills).map(grp => ({
      category: grp.category[lang] || grp.category.es,
      items: grp.items.map(sanitizeAtsText)
    }));
  }

  // Experiencia con viñetas adaptadas que referencian sourceBulletId del master
  const experience = [];
  
  if (tailored?.experienceOverrides && tailored.experienceOverrides.length > 0) {
    const sortedOverrides = [...tailored.experienceOverrides]
      .filter(o => o.include !== false)
      .sort((a, b) => (a.order || 99) - (b.order || 99));

    for (const ov of sortedOverrides) {
      const baseExp = cvMaster.experience.find(e => e.id === ov.experienceId);
      if (!baseExp) continue;

      const bullets = [];
      if (ov.bullets && ov.bullets.length > 0) {
        for (const b of ov.bullets) {
          // Verificación de regla anti-invención: debe existir en el master
          const masterBullet = baseExp.bullets.find(mb => mb.id === b.sourceBulletId);
          if (!masterBullet) {
            console.warn(`[ATS Warning] sourceBulletId '${b.sourceBulletId}' no encontrado en cvMaster para ${baseExp.id}`);
          }
          const text = sanitizeAtsText(b[lang] || b.es || masterBullet?.[lang] || masterBullet?.es);
          if (text) {
            bullets.push({
              sourceBulletId: b.sourceBulletId,
              text
            });
          }
        }
      } else {
        for (const mb of baseExp.bullets) {
          bullets.push({
            sourceBulletId: mb.id,
            text: sanitizeAtsText(mb[lang] || mb.es)
          });
        }
      }

      experience.push({
        id: baseExp.id,
        company: sanitizeAtsText(baseExp.company),
        role: sanitizeAtsText(baseExp.role[lang] || baseExp.role.es),
        location: sanitizeAtsText(baseExp.location[lang] || baseExp.location.es),
        period: formatAtsPeriod(baseExp.start, baseExp.end, lang),
        bullets,
        isNonTech: Boolean(baseExp.isNonTech)
      });
    }
  } else {
    // Experiencia por defecto del master
    for (const exp of cvMaster.experience) {
      experience.push({
        id: exp.id,
        company: sanitizeAtsText(exp.company),
        role: sanitizeAtsText(exp.role[lang] || exp.role.es),
        location: sanitizeAtsText(exp.location[lang] || exp.location.es),
        period: formatAtsPeriod(exp.start, exp.end, lang),
        bullets: exp.bullets.map(b => ({
          sourceBulletId: b.id,
          text: sanitizeAtsText(b[lang] || b.es)
        })),
        isNonTech: Boolean(exp.isNonTech)
      });
    }
  }

  // Proyectos destacados (máximo 3 para mantener <=2 páginas)
  const projectIds = tailored?.featuredProjectIds || [203, 202, 34, 205];
  const projects = projectIds
    .map(id => cvMaster.keyProjects.find(p => p.id === id))
    .filter(Boolean)
    .slice(0, 3)
    .map(p => ({
      id: p.id,
      title: sanitizeAtsText(p.title[lang] || p.title.es),
      tech: p.tech.join(', '),
      description: sanitizeAtsText(p.description[lang] || p.description.es),
      url: p.url
    }));

  // Educación
  const education = cvMaster.education.map(edu => ({
    id: edu.id,
    degree: sanitizeAtsText(edu.degree[lang] || edu.degree.es),
    institution: sanitizeAtsText(edu.institution),
    location: sanitizeAtsText(edu.location[lang] || edu.location.es),
    period: formatAtsPeriod(edu.start, edu.end, lang),
    details: sanitizeAtsText(edu.details[lang] || edu.details.es)
  }));

  // Publicaciones y ponencias seleccionadas (máximo 4 para balancear 2 páginas)
  const publicationsAndTalks = cvMaster.publicationsAndTalks.slice(0, 4).map(item => ({
    id: item.id,
    title: sanitizeAtsText(item.title),
    event: sanitizeAtsText(item.event || item.venue),
    location: sanitizeAtsText(item.location || ''),
    year: item.year,
    url: item.url
  }));

  // Cobertura de prensa y reconocimientos (WIRED, Knight Center, Telemundo)
  const mediaCoverage = (cvMaster.mediaCoverage || []).slice(0, 3).map(item => ({
    id: item.id,
    outlet: sanitizeAtsText(item.outlet),
    year: item.year,
    title: sanitizeAtsText(item.title[lang] || item.title.es),
    url: item.url
  }));

  const companyClean = (tailored?.company || 'General').replace(/[^a-zA-Z0-9]/g, '-');
  const fileName = `Javier-Abundis-CV-${companyClean}-${lang}`;

  return {
    lang,
    jobSlug,
    contact,
    headings: {
      ...headings,
      media: isEs ? 'Prensa y cobertura mediática' : 'Media Coverage & Press'
    },
    summary,
    skills,
    experience,
    projects,
    education,
    publicationsAndTalks,
    mediaCoverage,
    atsKeywords: tailored?.atsKeywords || [],
    fileName
  };
}

export default buildAtsResume;
