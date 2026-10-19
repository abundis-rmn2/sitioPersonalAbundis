// src/lib/ats/atsResumeDocx.js
// Generador de documento DOCX ultra limpio y 100% compatible con ATS usando la librería docx.

import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Packer
} from 'docx';

export function buildAtsDocxDocument(resume) {
  const { contact, headings, summary, skills, experience, projects, education, publicationsAndTalks } = resume;

  const children = [];

  // Header: Nombre Completo
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: contact.fullName,
          bold: true,
          size: 32, // 16pt
          font: 'Arial'
        })
      ]
    })
  );

  // Target Title
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: contact.targetTitle,
          bold: true,
          size: 22, // 11pt
          font: 'Arial',
          color: '222222'
        })
      ]
    })
  );

  // Contact Lines
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: `${contact.email}  |  ${contact.phone}  |  ${contact.location}`,
          size: 18, // 9pt
          font: 'Arial',
          color: '333333'
        })
      ]
    })
  );

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 180 },
      children: [
        new TextRun({
          text: `${contact.website}  |  ${contact.linkedin}  |  ${contact.github}`,
          size: 18, // 9pt
          font: 'Arial',
          color: '333333'
        })
      ]
    })
  );

  // Helper para títulos de sección ATS
  const addSectionHeading = (title) => {
    children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 180, after: 80 },
        children: [
          new TextRun({
            text: title.toUpperCase(),
            bold: true,
            size: 22, // 11pt
            font: 'Arial'
          })
        ]
      })
    );
  };

  // 1. Resumen Profesional
  if (summary) {
    addSectionHeading(headings.summary);
    children.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: summary,
            size: 19, // 9.5pt
            font: 'Arial'
          })
        ]
      })
    );
  }

  // 2. Habilidades
  if (skills && skills.length > 0) {
    addSectionHeading(headings.skills);
    for (const grp of skills) {
      children.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: `${grp.category}: `,
              bold: true,
              size: 19,
              font: 'Arial'
            }),
            new TextRun({
              text: grp.items.join(', '),
              size: 19,
              font: 'Arial'
            })
          ]
        })
      );
    }
  }

  // 3. Experiencia
  if (experience && experience.length > 0) {
    addSectionHeading(headings.experience);
    for (const exp of experience) {
      children.push(
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 100, after: 40 },
          children: [
            new TextRun({
              text: `${exp.role} — ${exp.company}`,
              bold: true,
              size: 20, // 10pt
              font: 'Arial'
            }),
            new TextRun({
              text: `\t${exp.period}`,
              size: 18,
              font: 'Arial',
              color: '444444'
            })
          ]
        })
      );

      children.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: exp.location,
              size: 17,
              font: 'Arial',
              color: '555555'
            })
          ]
        })
      );

      if (exp.bullets && exp.bullets.length > 0) {
        for (const b of exp.bullets) {
          children.push(
            new Paragraph({
              bullet: { level: 0 },
              spacing: { after: 40 },
              children: [
                new TextRun({
                  text: b.text,
                  size: 18,
                  font: 'Arial'
                })
              ]
            })
          );
        }
      }
    }
  }

  // 4. Proyectos
  if (projects && projects.length > 0) {
    addSectionHeading(headings.projects);
    for (const p of projects) {
      children.push(
        new Paragraph({
          spacing: { before: 80, after: 40 },
          children: [
            new TextRun({
              text: `${p.title} `,
              bold: true,
              size: 19,
              font: 'Arial'
            }),
            new TextRun({
              text: `(${p.tech})`,
              italics: true,
              size: 18,
              font: 'Arial',
              color: '444444'
            })
          ]
        })
      );
      children.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: `${p.description} — ${p.url}`,
              size: 18,
              font: 'Arial'
            })
          ]
        })
      );
    }
  }

  // 5. Educación
  if (education && education.length > 0) {
    addSectionHeading(headings.education);
    for (const edu of education) {
      children.push(
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 80, after: 40 },
          children: [
            new TextRun({
              text: edu.degree,
              bold: true,
              size: 19,
              font: 'Arial'
            }),
            new TextRun({
              text: `\t${edu.period}`,
              size: 18,
              font: 'Arial',
              color: '444444'
            })
          ]
        })
      );
      children.push(
        new Paragraph({
          spacing: { after: 20 },
          children: [
            new TextRun({
              text: `${edu.institution} — ${edu.location}`,
              size: 18,
              font: 'Arial'
            })
          ]
        })
      );
      if (edu.details) {
        children.push(
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: edu.details,
                size: 17,
                font: 'Arial',
                color: '444444'
              })
            ]
          })
        );
      }
    }
  }

  // 6. Publicaciones & Conferencias
  if (publicationsAndTalks && publicationsAndTalks.length > 0) {
    addSectionHeading(headings.talks);
    for (const t of publicationsAndTalks) {
      children.push(
        new Paragraph({
          spacing: { before: 60, after: 40 },
          children: [
            new TextRun({
              text: `${t.title} `,
              bold: true,
              size: 18,
              font: 'Arial'
            }),
            new TextRun({
              text: `(${t.year})`,
              size: 18,
              font: 'Arial'
            })
          ]
        })
      );
      children.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: `${t.event} ${t.location ? `(${t.location})` : ''} — ${t.url}`,
              size: 17,
              font: 'Arial',
              color: '444444'
            })
          ]
        })
      );
    }
  }

  // 7. Cobertura de Prensa y Reconocimientos
  const mediaCoverage = resume.mediaCoverage;
  if (mediaCoverage && mediaCoverage.length > 0) {
    addSectionHeading(headings.media || (resume.lang === 'es' ? 'Prensa y reconocimientos' : 'Media Coverage & Press'));
    for (const m of mediaCoverage) {
      children.push(
        new Paragraph({
          spacing: { before: 60, after: 40 },
          children: [
            new TextRun({
              text: `${m.title} `,
              bold: true,
              size: 18,
              font: 'Arial'
            }),
            new TextRun({
              text: `(${m.year})`,
              size: 18,
              font: 'Arial'
            })
          ]
        })
      );
      children.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: `${m.outlet} — ${m.url}`,
              size: 17,
              font: 'Arial',
              color: '444444'
            })
          ]
        })
      );
    }
  }

  return new Document({
    title: `Javier Abundis - CV - ${contact.targetTitle}`,
    author: 'Javier Abundis',
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,    // 0.5 in
              right: 720,
              bottom: 720,
              left: 720
            }
          }
        },
        children
      }
    ]
  });
}

export async function generateAtsDocxBuffer(resume) {
  const doc = buildAtsDocxDocument(resume);
  return await Packer.toBuffer(doc);
}

export default generateAtsDocxBuffer;
