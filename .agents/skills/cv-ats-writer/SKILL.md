---
name: cv-ats-writer
description: Redacta y matiza CVs a la medida (tailored) de Javier Abundis para vacantes concretas, compatibles con ATS, en ES y EN, sin inventar experiencia. Úsala cuando el usuario pegue una vacante, pida adaptar/reescribir un CV, regenerar una entrada de tailoredCvData.js o revisar el tono/keywords de un CV.
---

# cv-ats-writer — Redactor de CV a la medida para ATS

Skill versionada en el repo `personal-site-next` (`.agents/skills/cv-ats-writer/`).
Define **cómo se escribe** un CV adaptado: voz, matiz, keywords, estructura y reglas
anti-invención. La **generación del archivo** (PDF/DOCX) la hace el código en
`src/lib/ats/`; esta skill produce el **contenido** (`tailoredCvData.js`).

---

## 0. Fuentes de verdad (en este orden)

1. `src/data/cv/cvMaster.js` — experiencia, viñetas con `id`, educación, skills (estructurado).
2. `CV_Master_Completo.md` — narrativa completa, cifras y enlaces verificados.
3. `src/data/cvData.js` — proyectos, papers y conferencias (`cvPosts`, por `id`).

> **Regla de oro:** si un dato (cifra, tecnología, fecha, empresa, rol, logro) no aparece
> en estas fuentes, **no existe**. Se reporta en `gaps[]`, nunca se escribe en el CV.

---

## 1. Flujo de trabajo (obligatorio)

1. **Recibir la vacante** (texto o URL). Guardarla íntegra en `jobPosting`.
2. **Entrevista /grill-me enfocada en Brechas y Relleno Técnico (OBLIGATORIO):**
   No hagas preguntas obvias (el título y la empresa ya vienen en la vacante). El interrogatorio debe ir directo al **dilema estratégico de adaptación técnica**:
   - **Evaluación de Gaps Reales vs Relleno:** Mostrar al usuario las 2–3 tecnologías clave de la vacante donde NO hay coincidencia exacta en el master (ej. TypeScript, AWS CloudFormation, GraphQL).
   - **Nivel de "Relleno Técnico" / Agresividad:** Preguntar al usuario qué tanto forzar la cobertura ATS para esos gaps:
     * *Opción A (Conservadora/Literal):* Declarar la tecnología hermana real (ej. JS ES6+ en lugar de TS; cPanel/Linux en lugar de AWS) y reportar el gap formalmente.
     * *Opción B (Adyacente/Transferible):* Incluir la keyword en contexto de formación/conceptos (ej. "Arquitectura orientada a tipos / TypeScript en evaluación", "Servidores cloud y Linux") para superar el filtro de token del ATS sin afirmar años de experiencia falsos en la empresa.
     * *Opción C (Puente de proyectos):* Enfocar la justificación técnica en proyectos independientes (ej. Tejer.RED / idmb / scripts de Python) donde sí haya habido contacto o prototipado con la herramienta.
   - **Poda o Inclusión de Experiencia No Tecnológica:** Si el puesto es Senior Tech, preguntar si Centura/Dadicas se omite por completo o se deja como 1 línea para evitar hueco cronológico.
   - **Priorización de Viñetas según el Dolor de la Vacante:** Validar qué logro real poner en primer lugar (¿velocidad/performance, arquitectura de datos, o entrega rápida en WordPress/React?).
3. **Extraer requisitos** → lista `requirements[]` clasificada en:
   `must` (excluyentes) · `nice` (deseables) · `soft` (blandas) · `context` (industria, modalidad, idioma).
4. **Extraer keywords ATS** literales de la vacante (títulos de puesto, tecnologías,
   metodologías, certificaciones). Conservar la grafía exacta de la vacante
   (`Next.js`, no `NextJS`; `Figma`, `REST APIs`).
5. **Mapear evidencia:** para cada requisito buscar viñetas/proyectos reales del master.
   Resultado: `match` (con `sourceBulletId` / `cvPostId`) o `gap`.
6. **Redactar** con las reglas de las secciones 2–5 en **ES y EN**.
7. **Escribir la entrada** en `src/data/tailoredCvData.js` con el esquema de la sección 6.
8. **Verificar:** `npm run ats:check -- --slug <slug>` → cobertura ≥ 80 % de `atsKeywords`
   y 0 errores de estructura. Si falla, iterar redacción (nunca inventar para subir el %).
9. **Entregar al usuario**: diff + tabla requisito→evidencia + `gaps[]`.
   **Prohibido `git commit`/`git push`** sin orden explícita.

---

## 2. Matiz y voz (el "cómo suena")

### Identidad narrativa
Javier es **desarrollador full-stack con formación de sociólogo/investigador**. La
sociología es un **diferenciador**, no el titular, salvo en vacantes de investigación,
datos sociales, civic tech o academia. Ajusta el peso según la vacante:

| Tipo de vacante | Titular (`targetTitle`) | Peso de lo académico |
|---|---|---|
| Frontend / Full-stack / WordPress | Título literal de la vacante | Bajo: 1 línea en Summary, sección Projects |
| Data / ML / NLP / GIS | Título literal de la vacante | Medio: tesis y papers como evidencia técnica |
| UX / Producto / Design Engineer | Título literal de la vacante | Medio: investigación de usuarios, etnografía |
| Investigación / Civic tech / ONG | Título literal de la vacante | Alto: publicaciones, conferencias, Tejer.RED |

### Regla Fundamental e Innegociable de Tejer.RED
**En toda ocasión y en cualquier CV donde se incluya Tejer.RED, debe declararse explícitamente que se desarrollan herramientas de código abierto para la búsqueda e identificación de personas desaparecidas utilizando machine learning, análisis de datos y procesamiento de lenguaje natural (NLP).**
Jamás maquillar, omitir o sanitizar esta labor como simple "desarrollo web" o "automatización de procesos". La misión humanitaria y el rigor técnico (machine learning, cartografía y datos) de Tejer.RED es parte esencial de la identidad profesional de Javier.

### Tono
- **Sobrio y verificable.** Cero autoelogio: prohibido "apasionado", "pionero",
  "experto de clase mundial", "ninja", "rockstar", "sinergia", "proactivo".
- **Concreto > abstracto.** "Geolocalizó 3,000+ reportes con DBSCAN" > "trabajó con datos espaciales".
- **Primera persona implícita** (sin "yo", sin tercera persona "Javier hizo").
- **Tiempo verbal:** pasado para roles terminados; presente para el rol actual.
- **Ético y sensible** en temas de desaparición forzada: lenguaje respetuoso
  ("personas desaparecidas", "familias buscadoras"), sin sensacionalismo.

### Fórmula de viñeta (XYZ)
`Verbo de acción + qué + con qué (tecnología/keyword) + resultado/escala medible`

- ✅ `Desarrolló una plataforma geoespacial en React que geolocaliza 3,000+ reportes con clustering DBSCAN para identificar zonas de concentración.`
- ✅ `Built a React geospatial platform mapping 3,000+ reports with DBSCAN clustering to surface concentration hotspots.`
- ❌ `Responsable de varios proyectos de mapas.`

Reglas:
- 1–2 líneas por viñeta, 3–5 viñetas por rol relevante, 1–2 por rol poco relevante.
- Una keyword principal por viñeta, insertada de forma natural (no listas dentro de viñetas).
- **Cifras solo si existen en las fuentes.** Si no hay cifra, describe escala o alcance real
  ("para colectivos de búsqueda en Jalisco"), nunca la estimes.

### Verbos de acción recomendados
- **ES:** Desarrolló, Diseñó, Implementó, Construyó, Automatizó, Migró, Optimizó, Integró,
  Lideró, Publicó, Presentó, Coordinó, Analizó, Desplegó, Documentó.
- **EN:** Built, Designed, Implemented, Developed, Automated, Migrated, Optimized,
  Integrated, Led, Published, Presented, Coordinated, Analyzed, Deployed, Documented.
- No repetir el mismo verbo inicial más de 2 veces en todo el CV.

---

## 3. Reglas ATS (el "cómo se lee")

- **Encabezados estándar, nunca creativos:**
  ES: `Resumen profesional`, `Experiencia`, `Habilidades`, `Proyectos`, `Educación`, `Publicaciones y conferencias`.
  EN: `Professional Summary`, `Experience`, `Skills`, `Projects`, `Education`, `Publications & Talks`.
- **Orden:** Contacto → Resumen → Habilidades → Experiencia → Proyectos → Educación → Publicaciones.
  (Para vacantes de investigación: Educación sube tras Resumen.)
- **Título del CV = título de la vacante** cuando la experiencia real lo respalde; si no,
  el título real más cercano + la keyword (`Desarrollador Full-Stack (React / Next.js)`).
- **Keywords literales:** cada keyword `must` debe aparecer ≥1 vez en Summary o Skills
  **y** ≥1 vez dentro de una viñeta de experiencia/proyecto (contexto real).
- **Acrónimos dobles** la primera vez: `Procesamiento de Lenguaje Natural (NLP)`,
  `Natural Language Processing (NLP)`.
- **Fechas** `MM/YYYY – MM/YYYY` o `MM/YYYY – Presente / Present`. Mismo formato en todo el CV.
- **Sin** emojis, íconos, caracteres no latinos (ej. `問答マーケティング` → `Mondo Marketing`),
  tablas, columnas, texto en imágenes ni símbolos decorativos (`•` permitido solo como viñeta).
- **Contacto en texto plano:** email, teléfono con lada (`+52 …`), ciudad/país,
  URLs completas (`linkedin.com/in/…`, `github.com/…`, `abundis.com.mx`).
- **Longitud:** ≤ 2 páginas. Resumen 3–4 líneas. Skills ≤ 4 categorías.
- **Sin relleno de keywords** (keyword stuffing) ni texto oculto: los ATS modernos y los
  reclutadores lo penalizan.

---

## 4. Idiomas ES / EN

- No traducir literal: **localizar.** EN usa verbos sin sujeto y frases más cortas.
- Nombres propios de proyectos sin traducir (`Tejer.RED`, `Las Prendas Hablan`);
  añadir glosa breve en EN si aporta: `Las Prendas Hablan (crowdsourced clothing identification)`.
- Títulos de grado: `Maestría en Estudios de la Comunicación` → `M.A. in Communication Studies`.
- Ubicación: `Guadalajara, Jalisco, México` / `Guadalajara, Mexico`.
- Keywords técnicas se mantienen en inglés también en la versión ES si así aparecen en la vacante.

---

## 5. Selección y matiz por vacante

- **Experiencia no tecnológica** (p. ej. Centura/Dadicas): solo si evita un hueco
  cronológico visible; 1 línea, sin viñetas, al final de Experiencia.
- **Proyectos** (`featuredProjectIds`): máximo 4, priorizando los que cubren `must`.
- **Publicaciones/conferencias:** máximo 3; FOSDEM siempre que la vacante sea técnica/open source.
- **Gaps honestos:** si un `must` no tiene evidencia, NO se insinúa. Se reporta en `gaps[]`
  y, si existe algo adyacente real, se redacta lo adyacente con precisión
  (p. ej. vacante pide TypeScript y solo hay JS ES6+ → escribir `JavaScript (ES6+)`, no `TypeScript`).

---

## 6. Esquema de salida (`tailoredCvData.js`)

```js
'<empresa>-<puesto-kebab>': {
  company: 'Empresa',
  aliases: ['empresa'],                    // slugs antiguos → redirect
  jobPosting: { url: '', text: `...` },    // vacante íntegra
  targetTitle: { es: '', en: '' },
  summary: { es: '', en: '' },             // 3–4 líneas
  atsKeywords: ['Next.js', 'React', ...],  // literales de la vacante
  skills: { es: { 'Frontend': [...] }, en: { 'Frontend': [...] } },
  experienceOverrides: [
    { experienceId: 'balam-studio', include: true, order: 1,
      bullets: [ { sourceBulletId: 'balam-wp-01', es: '', en: '' } ] }
  ],
  featuredProjectIds: [],
  featuredTalkIds: [],
  requirementsMatchList: [ { requirement: {es,en}, match: {es,en}, evidence: ['balam-wp-01'] } ],
  gaps: [ { requirement: '', note: '' } ],
  // campos de la vista web existentes se conservan: badgeLabel, matchSummary, keywordsList…
}
```

Toda viñeta en `experienceOverrides` **debe** tener `sourceBulletId` válido.
`ats:check` falla si encuentra una viñeta sin fuente.

---

## 7. Checklist final (copiar en la respuesta al usuario)

- [ ] Vacante guardada en `jobPosting`
- [ ] `targetTitle` respaldado por experiencia real
- [ ] Todas las viñetas con `sourceBulletId`; 0 cifras/tecnologías inventadas
- [ ] Keywords `must` en Skills/Summary **y** en contexto de viñeta
- [ ] ES y EN localizados (no traducción literal)
- [ ] Sin emojis, caracteres no latinos, adjetivos de autoelogio
- [ ] `npm run ats:check` en verde (≥ 80 % keywords, 0 errores)
- [ ] `gaps[]` reportados al usuario
- [ ] Sin commit/push

Ejemplos completos: ver [`references/ejemplos.md`](references/ejemplos.md).
