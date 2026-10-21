// scripts/ats-check.mjs
// Script de validación rigurosa de compatibilidad ATS para CVs en PDF y DOCX.
// Ejecuta: npm run ats:check [-- --slug <slug>] [--lang <es|en>]

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import mammoth from 'mammoth';
import { cvMaster } from '../src/data/cv/cvMaster.js';
import { TAILORED_CVS, CANONICAL_SLUGS } from '../src/data/tailoredCvData.js';
import { buildAtsResume } from '../src/lib/ats/buildAtsResume.js';
import { generateAtsPdfBuffer } from '../src/lib/ats/AtsResumePdf.js';
import { generateAtsDocxBuffer } from '../src/lib/ats/atsResumeDocx.js';

// Parse CLI arguments
const args = process.argv.slice(2);
let filterSlug = null;
let filterLang = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--slug' && args[i + 1]) {
    filterSlug = args[i + 1].toLowerCase();
    i++;
  } else if (args[i] === '--lang' && args[i + 1]) {
    filterLang = args[i + 1].toLowerCase();
    i++;
  }
}

const targetSlugs = filterSlug ? [filterSlug] : CANONICAL_SLUGS;
const targetLangs = filterLang ? [filterLang] : ['es', 'en'];

// Recopilar todos los sourceBulletIds válidos de cvMaster para regla anti-invención
const validMasterBulletIds = new Set();
for (const exp of cvMaster.experience) {
  for (const b of exp.bullets) {
    validMasterBulletIds.add(b.id);
  }
}

console.log('='.repeat(80));
console.log('  VERIFICACIÓN RIGUROSA DE COMPATIBILIDAD ATS (PDF & DOCX)');
console.log('  Umbrales: Cobertura keywords >= 80% | Páginas <= 2 | 0 errores estructura');
console.log('='.repeat(80));
console.log('');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures = [];

for (const slug of targetSlugs) {
  const tailored = TAILORED_CVS[slug];
  if (!tailored) {
    console.error(`[ERROR] Vacante no encontrada en TAILORED_CVS: ${slug}`);
    process.exit(1);
  }

  for (const lang of targetLangs) {
    totalChecks++;
    const testId = `${slug} [${lang.toUpperCase()}]`;
    const checkErrors = [];

    // 1. Regla Anti-invención: Verificar que cada viñeta en experienceOverrides referencie un sourceBulletId válido
    if (tailored.experienceOverrides) {
      for (const ov of tailored.experienceOverrides) {
        if (ov.bullets) {
          for (const b of ov.bullets) {
            if (!b.sourceBulletId) {
              checkErrors.push(`Viñeta sin sourceBulletId en experiencia '${ov.experienceId}'`);
            } else if (!validMasterBulletIds.has(b.sourceBulletId)) {
              checkErrors.push(`sourceBulletId '${b.sourceBulletId}' no existe en cvMaster.experience`);
            }
          }
        }
      }
    }

    // 2. Construir modelo normalizado
    let resume;
    try {
      resume = buildAtsResume(lang, slug);
    } catch (err) {
      checkErrors.push(`Error construyendo modelo de CV: ${err.message}`);
    }

    if (!resume) {
      failures.push({ testId, errors: checkErrors });
      failedChecks++;
      continue;
    }

    // 3. Generar PDF y DOCX en memoria
    let pdfBuffer;
    let docxBuffer;
    try {
      pdfBuffer = await generateAtsPdfBuffer(resume);
      docxBuffer = await generateAtsDocxBuffer(resume);
    } catch (err) {
      checkErrors.push(`Error generando buffer de documentos: ${err.message}`);
    }

    if (!pdfBuffer || !docxBuffer) {
      failures.push({ testId, errors: checkErrors });
      failedChecks++;
      continue;
    }

    // 4. Escribir temporal para pdftotext y pdfinfo
    const tmpPdfPath = path.join('/tmp', `ats-test-${slug}-${lang}-${Date.now()}.pdf`);
    fs.writeFileSync(tmpPdfPath, pdfBuffer);

    let pdfText = '';
    let pageCount = 0;
    try {
      // Extraer páginas con pdfinfo
      const infoOut = execSync(`pdfinfo "${tmpPdfPath}"`).toString();
      const pageMatch = infoOut.match(/Pages:\s+(\d+)/);
      pageCount = pageMatch ? parseInt(pageMatch[1], 10) : 0;

      // Extraer texto con pdftotext -layout
      pdfText = execSync(`pdftotext -layout "${tmpPdfPath}" -`).toString();
    } catch (err) {
      checkErrors.push(`Error ejecutando pdftotext/pdfinfo: ${err.message}`);
    } finally {
      if (fs.existsSync(tmpPdfPath)) {
        fs.unlinkSync(tmpPdfPath);
      }
    }

    // 5. Extraer texto de DOCX con mammoth
    let docxText = '';
    try {
      const docxRes = await mammoth.extractRawText({ buffer: docxBuffer });
      docxText = docxRes.value;
    } catch (err) {
      checkErrors.push(`Error extrayendo texto DOCX: ${err.message}`);
    }

    // 6. Validar longitud de páginas (<= 2 páginas)
    if (pageCount < 1 || pageCount > 2) {
      checkErrors.push(`Longitud de páginas del PDF inválida: ${pageCount} páginas (máximo permitido: 2)`);
    }

    // 7. Validar regex de contacto en texto extraído
    const contactChecks = [
      { name: 'Nombre Completo', regex: /Javier\s+Ram[íi]rez\s+Abundis/i },
      { name: 'Email', regex: /abundiscomunicacion@gmail\.com/i },
      { name: 'Teléfono (+52)', regex: /\+52[\s-]*33[\s-]*34[\s-]*96[\s-]*97[\s-]*01/ },
      { name: 'LinkedIn URL', regex: /linkedin\.com\/in\/abundis-sociologia/i },
      { name: 'Website URL', regex: /abundis\.com\.mx/i },
      { name: 'GitHub URL', regex: /github\.com\/abundis-rmn2/i }
    ];

    for (const c of contactChecks) {
      if (!c.regex.test(pdfText)) {
        checkErrors.push(`Contacto ausente en PDF: ${c.name}`);
      }
      if (!c.regex.test(docxText)) {
        checkErrors.push(`Contacto ausente en DOCX: ${c.name}`);
      }
    }

    // 8. Validar orden de secciones estándar
    const expectedSections = lang === 'es' ? [
      { name: 'Resumen profesional', regex: /(?:^|\n)\s*RESUMEN\s+PROFESIONAL\s*(?:\n|$)/m },
      { name: 'Habilidades', regex: /(?:^|\n)\s*HABILIDADES\s*(?:\n|$)/m },
      { name: 'Experiencia', regex: /(?:^|\n)\s*EXPERIENCIA\s*(?:\n|$)/m },
      { name: 'Proyectos', regex: /(?:^|\n)\s*PROYECTOS\s*(?:\n|$)/m },
      { name: 'Educación', regex: /(?:^|\n)\s*EDUCACI[ÓO]N\s*(?:\n|$)/m }
    ] : [
      { name: 'Professional Summary', regex: /(?:^|\n)\s*PROFESSIONAL\s+SUMMARY\s*(?:\n|$)/m },
      { name: 'Skills', regex: /(?:^|\n)\s*SKILLS\s*(?:\n|$)/m },
      { name: 'Experience', regex: /(?:^|\n)\s*EXPERIENCE\s*(?:\n|$)/m },
      { name: 'Projects', regex: /(?:^|\n)\s*PROJECTS\s*(?:\n|$)/m },
      { name: 'Education', regex: /(?:^|\n)\s*EDUCATION\s*(?:\n|$)/m }
    ];

    let lastPdfIdx = -1;
    for (const sec of expectedSections) {
      const match = pdfText.match(sec.regex);
      if (!match) {
        checkErrors.push(`Sección estándar ausente en PDF: '${sec.name}'`);
      } else {
        if (match.index < lastPdfIdx) {
          checkErrors.push(`Sección desordenada en PDF: '${sec.name}' apareció antes de la anterior`);
        }
        lastPdfIdx = match.index;
      }
    }

    let lastDocxIdx = -1;
    for (const sec of expectedSections) {
      const match = docxText.match(sec.regex);
      if (!match) {
        checkErrors.push(`Sección estándar ausente en DOCX: '${sec.name}'`);
      } else {
        if (match.index < lastDocxIdx) {
          checkErrors.push(`Sección desordenada en DOCX: '${sec.name}' apareció antes de la anterior`);
        }
        lastDocxIdx = match.index;
      }
    }

    // 9. Validar consistencia de fechas (formato MM/YYYY, sin YYYY-MM en bruto)
    if (/\b\d{4}-\d{2}\b/.test(pdfText)) {
      checkErrors.push('Se detectaron fechas en formato sin procesar YYYY-MM en el PDF');
    }
    if (/\b\d{4}-\d{2}\b/.test(docxText)) {
      checkErrors.push('Se detectaron fechas en formato sin procesar YYYY-MM en el DOCX');
    }

    // 10. Validar ausencia de caracteres japoneses o no latinos
    if (/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(pdfText)) {
      checkErrors.push('Se detectaron caracteres no latinos (asiáticos) en el PDF');
    }
    if (/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(docxText)) {
      checkErrors.push('Se detectaron caracteres no latinos (asiáticos) en el DOCX');
    }

    // 11. Cobertura de ATS Keywords (>= 80%)
    const atsKeywords = resume.atsKeywords || [];
    let matchedKeywords = 0;
    const missingKeywords = [];

    // Helper para buscar keywords flexibles con variantes de formato
    const makeKeywordRegex = (kw) => {
      const escaped = kw.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      if (/Next\.js/i.test(kw)) return /next(?:\.|\s*)js/i;
      if (/^React$/i.test(kw)) return /\breact\b/i;
      if (/Node\.js/i.test(kw)) return /node(?:\.|\s*)js/i;
      if (/^PHP$/i.test(kw)) return /\bphp(?:8\+?)?\b/i;
      if (/^CSS$/i.test(kw)) return /\bcss3?\b/i;
      if (/^CSS3$/i.test(kw)) return /\bcss3?\b/i;
      if (/^SCSS$/i.test(kw)) return /\bscss\b/i;
      if (/^SQL$/i.test(kw)) return /\bsql\b/i;
      if (/^Git$/i.test(kw)) return /\bgit\b/i;
      if (/^HTML5$/i.test(kw)) return /\bhtml5?\b/i;
      if (/^Security$/i.test(kw)) return /\b(?:security|seguridad)\b/i;
      if (/^Accessibility$/i.test(kw)) return /\b(?:accessibility|accesibilidad)\b/i;
      if (/^Performance$/i.test(kw)) return /\b(?:performance|rendimiento)\b/i;
      if (/^Responsive Design$/i.test(kw)) return /\b(?:responsive(?:\s+design)?|diseño\s+responsivo)\b/i;
      if (/^scikit-learn$/i.test(kw)) return /\b(?:scikit-learn|sklearn)\b/i;
      if (/^Statistics$/i.test(kw)) return /\b(?:statistics|estad[íi]stica)\b/i;
      if (/^Data Analysis$/i.test(kw)) return /\b(?:data\s+analysis|an[áa]lisis\s+de\s+datos)\b/i;
      if (/^Data Modeling$/i.test(kw)) return /\b(?:data\s+modeling|modelado\s+de\s+datos)\b/i;
      if (/^Experimentation$/i.test(kw)) return /\b(?:experimentation|experimentaci[óo]n)\b/i;
      if (/^Model Evaluation$/i.test(kw)) return /\b(?:model\s+evaluation|evaluaci[óo]n\s+de\s+modelos)\b/i;
      if (/^MUI$/i.test(kw)) return /\b(?:mui|material[\s-]ui)\b/i;
      if (/^Material UI$/i.test(kw)) return /\b(?:mui|material[\s-]ui)\b/i;
      if (/^Design Systems$/i.test(kw)) return /\b(?:design\s+systems?|sistemas?\s+de\s+diseño)\b/i;
      if (/^WCAG$/i.test(kw)) return /\b(?:wcag|accesibilidad|accessibility)\b/i;
      if (/^E-commerce$/i.test(kw)) return /\be-?commerce\b/i;
      if (/^Google Analytics$/i.test(kw)) return /\b(?:google\s+analytics|ga4)\b/i;
      if (/^Google Tag Manager$/i.test(kw)) return /\b(?:google\s+tag\s+manager|gtm)\b/i;
      if (/^CRM$/i.test(kw)) return /\bcrm\b/i;
      if (/^Zapier$/i.test(kw)) return /\bzapier\b/i;
      if (/^Website Troubleshooting$/i.test(kw)) return /\b(?:troubleshooting|depuraci[óo]n|incidencias)\b/i;
      if (/^QA WordPress$/i.test(kw)) return /\b(?:qa|calidad|pruebas)(?:\s+en|\s+de)?\s+wordpress\b/i;
      if (/^Content Migration$/i.test(kw)) return /\b(?:content\s+migration|migraci[óo]n\s+de\s+contenido)\b/i;
      if (/^301 Redirects$/i.test(kw)) return /\b(?:301\s+redirects?|redirecciones?\s+301)\b/i;
      return new RegExp(escaped, 'i');
    };

    for (const kw of atsKeywords) {
      const reg = makeKeywordRegex(kw);
      const inPdf = reg.test(pdfText);
      const inDocx = reg.test(docxText);
      if (inPdf && inDocx) {
        matchedKeywords++;
      } else {
        missingKeywords.push(kw);
      }
    }

    const coveragePct = atsKeywords.length > 0
      ? Math.round((matchedKeywords / atsKeywords.length) * 100)
      : 100;

    if (coveragePct < 80) {
      checkErrors.push(`Cobertura de keywords inferior al 80%: ${coveragePct}% (${matchedKeywords}/${atsKeywords.length}). Faltantes: ${missingKeywords.join(', ')}`);
    }

    // Resumen del resultado del caso
    if (checkErrors.length === 0) {
      passedChecks++;
      console.log(`  ✅ ${testId.padEnd(46)} | Páginas: ${pageCount} | Keywords: ${String(coveragePct).padStart(3)}% (${matchedKeywords}/${atsKeywords.length}) | ATS: PASS`);
    } else {
      failedChecks++;
      console.log(`  ❌ ${testId.padEnd(46)} | Páginas: ${pageCount} | Keywords: ${String(coveragePct).padStart(3)}% (${matchedKeywords}/${atsKeywords.length}) | ATS: FAIL`);
      failures.push({ testId, errors: checkErrors });
    }
  }
}

console.log('');
console.log('-'.repeat(80));
console.log(`  RESULTADO FINAL: ${passedChecks} Aprobados, ${failedChecks} Fallidos de ${totalChecks} verificaciones.`);
console.log('-'.repeat(80));

if (failures.length > 0) {
  console.log('\nDETALLE DE FALLAS:');
  for (const f of failures) {
    console.log(`\n▶ ${f.testId}:`);
    for (const err of f.errors) {
      console.log(`    - ${err}`);
    }
  }
  process.exit(1);
} else {
  console.log('\n🎉 ¡TODAS LAS VACANTES EN ES Y EN PASARON LAS PRUEBAS ATS CON 100% DE ÉXITO!\n');
  process.exit(0);
}
