// src/lib/ats/AtsResumePdf.js
// Generador de documento PDF ultra limpio y 100% compatible con ATS usando @react-pdf/renderer.
// Escrito con React.createElement para permitir ejecución directa en Node.js (scripts/ats-check.mjs) y Next.js.

import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  renderToBuffer
} from '@react-pdf/renderer';

// Desactivar corte silábico para que las palabras clave ATS nunca se dividan con guiones
Font.registerHyphenationCallback(word => [word]);

const h = React.createElement;

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 34,
    fontFamily: 'Helvetica',
    fontSize: 9.2,
    color: '#0f172a',
    lineHeight: 1.35
  },
  header: {
    marginBottom: 10,
    textAlign: 'center'
  },
  fullName: {
    fontSize: 17,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 3,
    letterSpacing: 0.4
  },
  targetTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    marginBottom: 4,
    letterSpacing: 0.2
  },
  contactLine: {
    fontSize: 8.4,
    color: '#475569',
    lineHeight: 1.35
  },
  section: {
    marginTop: 8,
    marginBottom: 2
  },
  sectionHeader: {
    fontSize: 9.8,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: '#0f172a',
    paddingBottom: 2.5,
    marginBottom: 5,
    color: '#0f172a'
  },
  summaryText: {
    fontSize: 8.8,
    lineHeight: 1.38,
    textAlign: 'justify',
    color: '#1e293b'
  },
  skillRow: {
    flexDirection: 'row',
    marginBottom: 2.8
  },
  skillCategory: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.8,
    width: '27%',
    color: '#0f172a'
  },
  skillItems: {
    fontSize: 8.6,
    width: '73%',
    lineHeight: 1.3,
    color: '#1e293b'
  },
  expBlock: {
    marginBottom: 6.5
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  roleTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.4,
    color: '#0f172a'
  },
  companyName: {
    fontFamily: 'Helvetica',
    fontSize: 9.1,
    color: '#334155'
  },
  periodText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.2,
    color: '#475569'
  },
  locationText: {
    fontSize: 8,
    color: '#64748b',
    marginBottom: 2.5
  },
  bulletRow: {
    flexDirection: 'row',
    marginTop: 1.8,
    paddingLeft: 4
  },
  bulletPoint: {
    width: 8.5,
    fontSize: 8.5,
    color: '#0f172a'
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.34,
    color: '#1e293b'
  },
  projectBlock: {
    marginBottom: 5.5
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  projectTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.9,
    color: '#0f172a'
  },
  projectTech: {
    fontFamily: 'Helvetica-Oblique',
    fontSize: 8.2,
    color: '#475569'
  },
  projectDesc: {
    fontSize: 8.4,
    lineHeight: 1.32,
    color: '#1e293b',
    marginTop: 1
  },
  eduBlock: {
    marginBottom: 5.5
  },
  eduHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  eduDegree: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: '#0f172a'
  },
  eduInstitution: {
    fontSize: 8.5,
    color: '#334155'
  },
  eduDetails: {
    fontSize: 8.3,
    color: '#475569',
    lineHeight: 1.3,
    marginTop: 1
  },
  talkBlock: {
    marginBottom: 4.5
  },
  talkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  talkTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.6,
    flex: 1,
    color: '#0f172a'
  },
  talkEvent: {
    fontSize: 8.2,
    color: '#475569',
    lineHeight: 1.3,
    marginTop: 1
  }
});

export function AtsResumePdf({ resume }) {
  const { contact, headings, summary, skills, experience, projects, education, publicationsAndTalks } = resume;

  const children = [
    // Header
    h(View, { key: 'header', style: styles.header },
      h(Text, { style: styles.fullName }, contact.fullName),
      h(Text, { style: styles.targetTitle }, contact.targetTitle),
      h(Text, { style: styles.contactLine }, `${contact.email}  •  ${contact.phone}  •  ${contact.location}`),
      h(Text, { style: styles.contactLine }, `${contact.website}  •  ${contact.linkedin}  •  ${contact.github}`)
    )
  ];

  // Resumen Profesional
  if (summary) {
    children.push(
      h(View, { key: 'sec-summary', style: styles.section },
        h(Text, { style: styles.sectionHeader }, headings.summary),
        h(Text, { style: styles.summaryText }, summary)
      )
    );
  }

  // Habilidades
  if (skills && skills.length > 0) {
    children.push(
      h(View, { key: 'sec-skills', style: styles.section },
        h(Text, { style: styles.sectionHeader }, headings.skills),
        ...skills.map((grp, idx) =>
          h(View, { key: idx, style: styles.skillRow },
            h(Text, { style: styles.skillCategory }, `${grp.category}:`),
            h(Text, { style: styles.skillItems }, grp.items.join(', '))
          )
        )
      )
    );
  }

  // Experiencia
  if (experience && experience.length > 0) {
    children.push(
      h(View, { key: 'sec-exp', style: styles.section },
        h(Text, { style: styles.sectionHeader }, headings.experience),
        ...experience.map(exp =>
          h(View, { key: exp.id, style: styles.expBlock },
            h(View, { style: styles.expHeader },
              h(Text, null,
                h(Text, { style: styles.roleTitle }, exp.role),
                h(Text, { style: styles.companyName }, ` — ${exp.company}`)
              ),
              h(Text, { style: styles.periodText }, exp.period)
            ),
            h(Text, { style: styles.locationText }, exp.location),
            ...(exp.bullets || []).map((b, bIdx) =>
              h(View, { key: bIdx, style: styles.bulletRow },
                h(Text, { style: styles.bulletPoint }, '•'),
                h(Text, { style: styles.bulletText }, b.text)
              )
            )
          )
        )
      )
    );
  }

  // Proyectos
  if (projects && projects.length > 0) {
    children.push(
      h(View, { key: 'sec-projects', style: styles.section },
        h(Text, { style: styles.sectionHeader }, headings.projects),
        ...projects.map(p =>
          h(View, { key: p.id, style: styles.projectBlock },
            h(View, { style: styles.projectHeader },
              h(Text, { style: styles.projectTitle }, p.title),
              h(Text, { style: styles.projectTech }, `(${p.tech})`)
            ),
            h(Text, { style: styles.projectDesc }, `${p.description} — ${p.url}`)
          )
        )
      )
    );
  }

  // Educación
  if (education && education.length > 0) {
    children.push(
      h(View, { key: 'sec-education', style: styles.section },
        h(Text, { style: styles.sectionHeader }, headings.education),
        ...education.map(edu =>
          h(View, { key: edu.id, style: styles.eduBlock },
            h(View, { style: styles.eduHeader },
              h(Text, { style: styles.eduDegree }, edu.degree),
              h(Text, { style: styles.periodText }, edu.period)
            ),
            h(Text, { style: styles.eduInstitution }, `${edu.institution} — ${edu.location}`),
            h(Text, { style: styles.eduDetails }, edu.details)
          )
        )
      )
    );
  }

  // Publicaciones y Conferencias
  if (publicationsAndTalks && publicationsAndTalks.length > 0) {
    children.push(
      h(View, { key: 'sec-talks', style: styles.section },
        h(Text, { style: styles.sectionHeader }, headings.talks),
        ...publicationsAndTalks.map(t =>
          h(View, { key: t.id, style: styles.talkBlock },
            h(View, { style: styles.talkHeader },
              h(Text, { style: styles.talkTitle }, t.title),
              h(Text, { style: styles.periodText }, t.year)
            ),
            h(Text, { style: styles.talkEvent }, `${t.event} ${t.location ? `(${t.location})` : ''} — ${t.url}`)
          )
        )
      )
    );
  }

  // Cobertura de Prensa y Reconocimientos
  const mediaCoverage = resume.mediaCoverage;
  if (mediaCoverage && mediaCoverage.length > 0) {
    children.push(
      h(View, { key: 'sec-media', style: styles.section },
        h(Text, { style: styles.sectionHeader }, headings.media),
        ...mediaCoverage.map(m =>
          h(View, { key: m.id, style: styles.talkBlock },
            h(View, { style: styles.talkHeader },
              h(Text, { style: styles.talkTitle }, m.title),
              h(Text, { style: styles.periodText }, m.year)
            ),
            h(Text, { style: styles.talkEvent }, `${m.outlet} — ${m.url}`)
          )
        )
      )
    );
  }

  return h(Document, {
    title: `Javier Abundis - CV - ${contact.targetTitle}`,
    author: 'Javier Abundis',
    subject: 'Curriculum Vitae',
    keywords: resume.atsKeywords?.join(', ')
  },
    h(Page, { size: 'LETTER', style: styles.page }, ...children)
  );
}

export async function generateAtsPdfBuffer(resume) {
  const element = React.createElement(AtsResumePdf, { resume });
  return await renderToBuffer(element);
}

export default AtsResumePdf;
