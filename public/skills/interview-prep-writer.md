---
name: interview-prep-writer
description: Genera guías de preparación de entrevista para Javier Abundis adaptadas a una vacante concreta. Cada pregunta lleva tres partes (Qué busca · Fórmula · Tu respuesta) construidas con su CV real, en ES con versiones EN clave, sin inventar experiencia. Úsala cuando el usuario pegue una vacante y pida preparar una entrevista, generar preguntas/respuestas, simular una entrevista o practicar con alguien.
---

# interview-prep-writer — Guía de entrevista a la medida

Produce un documento Markdown listo para leer fuera del chat (o pegar en Google Docs)
con preguntas probables para **una vacante específica**. Cada pregunta trae:

1. **Qué busca:** la intención real del entrevistador.
2. **Fórmula:** el orden de las ideas, que es lo que se memoriza.
3. **Tu respuesta:** un ejemplo hecho con experiencia **verificada** de Javier.

> Esta skill es pública y autocontenida: cualquier asistente (Antigravity, Gemini,
> ChatGPT, Claude) puede seguirla leyendo solo este archivo.
> URL pública: `https://abundis.com.mx/skills/interview-prep-writer.md`

---

## 0. Fuentes de verdad (en este orden)

| Prioridad | Dentro del repo | En la web (si no hay acceso al repo) |
|---|---|---|
| 1 | `src/data/cv/cvMaster.js` | https://abundis.com.mx (sección CV) |
| 2 | `../CV_Master_Completo.md` | CV completo exportado desde abundis.com.mx |
| 3 | `src/data/cvData.js` (proyectos, papers, conferencias) | GitHub: https://github.com/abundis-rmn2 |
| 4 | Lo que el usuario pegue en el chat (CV, correos, datos de la reunión) | — |

> [!IMPORTANT]
> **Regla de oro:** si un dato (empresa, cifra, tecnología, fecha, logro) no aparece en
> estas fuentes, **no existe**. No lo pongas en una respuesta: márcalo como
> `⚠️ [Verificar: …]` y menciónalo en la sección final *"Datos a confirmar"*.
> Cuando un ejemplo real no esté documentado (p. ej. un conflicto con un cliente), escribe
> una respuesta plausible **marcada como plantilla**: `🔧 [Ajusta con un caso real de …]`.

### Hechos ancla de Javier (resumen verificado)
- **Experiencia web:** Web-Gdl (2013–2015: PHP/MySQL, CSS/JS, velocidad, SEO) · Uzu Digital (2017–2020: PHP/JS/MySQL, WordPress, servidores Linux/Apache) · Balam Studio (2021–2024, remoto: PHP/JS, React, REST API, Linux/Apache).
- **Contenido y diseño:** Atama (#GobiernoAbiertoJal, ITEI), Nuvi Global (sitio institucional) y producción audiovisual.
- **Datos:** Mondo Marketing, Japón (2018, prácticas de análisis de datos).
- **Proyectos propios:** Tejer.RED (2021–hoy) · Catálogo Rancho Izaguirre (mar. 2025, unas 4 h; cobertura en WIRED y Telemundo) · *Las Prendas Hablan* (con Animal Político, ZonaDocs y A dónde van los desaparecidos; cobertura en France 24 y LatAm Journalism Review) · Cartografía de desapariciones (React, DBSCAN, más de 3,000 registros) · Correlación de tatuajes (TF-IDF y embeddings, más de 250 coincidencias) · Plugins de WordPress: Amoxeh y Bitácora de Búsqueda · idmb (bot en Python con SQL) · DVI (PHP, JS, Graphology, SigmaJS) · CNN TensorFlow/ResNet · spaCy NLP · Realidad aumentada con MindAR.
- **Académico:** Licenciatura en Sociología y Maestría en Comunicación (UdeG) · ponencias en FOSDEM 2024, DH Budapest 2022, Urban Creativity Lisboa 2023 y ORDEM 2025 · varios artículos indexados.
- **Puntos delicados:**
  - Trabajo no tecnológico en EE. UU. y Canadá (2020–2024). Si lo preguntan: respuesta breve y honesta. No mencionarlo si no lo preguntan.
  - Desde oct. 2024: proyectos de código abierto y freelance.
  - **Zatzi** no figura en el CV. Úsalo solo si el usuario lo confirma.

---

## 1. Flujo de trabajo

1. **Recibir la vacante** (texto o URL) y, si existen, los datos de la reunión: fecha, hora, duración, nombres de los entrevistadores y empresa o reclutadora.
2. **Analizar la vacante:**
   - `must` (excluyentes), `nice` (deseables), `soft` (habilidades blandas) y `context` (remoto, idioma, industria, sueldo).
   - **Funciones principales:** cada función de la vacante se convierte en una pregunta de la Parte B.
   - **Brechas:** tecnologías que pide la vacante sin evidencia en el CV. Prepara una respuesta de *tecnología hermana + método de aprendizaje*, nunca una experiencia falsa.
   - **Señales raras:** nombres de empresa distintos, dominio de correo diferente al de la vacante, sueldo bajo para el nivel. Conviértelas en preguntas para el entrevistador.
3. **Elegir el ángulo del perfil**, es decir, qué faceta de Javier poner al frente:
   - *Web Developer / WordPress:* agencias + plugins + performance + SEO.
   - *Full-Stack / React:* Balam + Cartografía + DVI + REST.
   - *Modernización / Arquitectura / Cloud:* migraciones, contenedores, Linux, pipelines de datos.
   - *Datos / IA / NLP:* idmb, CNN, spaCy, tatuajes, DBSCAN, publicaciones.
   - *Investigación / ONG / Civic Tech:* Tejer.RED, periodismo colaborativo, academia.
4. **Generar el documento** con la estructura de la §2.
5. **Autorrevisión** con el checklist de la §4 antes de entregar.
6. **Despliegue Nativo en Next.js App Router (`/[lang]/cv/[jobSlug]/entrevista`):**
   - **Registro modular de datos:** Guardar la guía en `src/data/interviewGuides/<jobSlug>.js` y registrarla en `src/data/interviewGuides/index.js`.
   - **Ruta dinámica SSG:** Se sirve en `src/app/[lang]/cv/[jobSlug]/entrevista/page.js` pre-renderizada estáticamente con `generateStaticParams()`.
   - **Enlace en `/cv/lista`:** En `src/data/tailoredCvData.js`, activar la propiedad en el objeto de la vacante:
     ```js
     hasInterviewGuide: true,
     ```
     Esto renderiza de inmediato el enlace nativo con `<Link href="/es/cv/<jobSlug>/entrevista">` en `/es/cv/lista`.
   - **Verificación:** Ejecutar `npm run build` para asegurar que las páginas estáticas de entrevista se generen sin errores.

---

## 2. Estructura del documento (obligatoria)

```markdown
# Guía de entrevista — <Puesto> (<Empresa>)
**Candidato:** Ángel Javier Ramírez Abundis
**Entrevista:** <fecha · hora · duración> · **Con:** <nombres y rol probable>

> [!IMPORTANT] 3–5 avisos clave (duración de respuestas, idioma, señales raras, saludo por nombre)

## Cómo usar esta guía (dinámica de práctica)
## PARTE A — Preguntas de cajón (8–11)
## PARTE B — Preguntas sobre las funciones del puesto (una por función principal, 5–8)
## PARTE C — Preguntas técnicas del stack de la vacante (5–8)
## PARTE D — Frases útiles en inglés (si la vacante pide inglés)
## Datos a confirmar (⚠️ y 🔧 pendientes)
## Checklist antes de la entrevista
```

### Plantilla por pregunta
```markdown
### A1. "<Pregunta en ES>" / "<Question in EN>"
**Qué busca:** <1–2 líneas: la intención oculta>

**Fórmula (<Nombre corto>):**
- **<Paso 1>:** "<frase gramatical con [huecos]>"
- **<Paso 2>:** "…"
- **<Paso 3>:** "…"

**Tu respuesta:**
> "<60–90 segundos hablados (~120–180 palabras), en 1.ª persona, con nombres reales de empresas, proyectos, tecnologías y cifras del CV>"

**EN:** <versión corta, solo en las preguntas clave: A1, A2, A4 y una técnica>
```

### Banco mínimo de preguntas

**Parte A (de cajón):** háblame de ti · por qué este puesto · qué sabes de nosotros · fortalezas y debilidades · por qué dejaste tu último trabajo o qué haces ahora · conflicto o desacuerdo · trabajo remoto e independiente (si aplica) · dónde te ves en 5 años · expectativa salarial · prueba de inglés (si aplica) · ¿tienes preguntas para nosotros?

**Parte B (del puesto):** una pregunta por cada función principal de la vacante, con la forma *"¿Cómo harías X?"* o *"Cuéntame de una vez que hiciste X"*. Incluye siempre una pregunta de **problema técnico difícil (STAR)** y, si la vacante menciona equipo, una de **liderazgo**.

**Parte C (técnicas):** una por cada tecnología `must` de la vacante, más *¿cómo depuras?*, *¿cómo eliges stack?* y *¿qué estás aprendiendo?*

### Catálogo de fórmulas reutilizables
| Fórmula | Pasos | Úsala en |
|---|---|---|
| Presente → Pasado → Futuro | Rol actual → trayectoria relevante → qué buscas y qué aportas | Háblame de ti |
| Puente profesional | Núcleo técnico → valor agregado → conexión con la vacante | Trayectoria y encaje |
| Coincidencia → Prueba → Motivación | Funciones que coinciden → ejemplo → qué te atrae | Por qué este puesto |
| Dato → Conexión → Pregunta | Lo que sabes → por qué te importa → curiosidad | Qué sabes de nosotros |
| Fortaleza → Debilidad real → Cómo la manejas | Evidencia → honestidad → hábito concreto | Fortalezas y debilidades |
| Cierre positivo → Qué hiciste después → Por qué ahora | Sin hablar mal de nadie | Salida o hueco en el historial |
| Conflicto → Escuchar → Opciones → Acuerdo | Quitar lo personal y buscar consenso | Conflicto |
| STAR técnico | Situación/Tarea → acción en 1.ª persona → resultado con métrica | Problema difícil, migración |
| Confirmar → Aislar → Corregir → Prevenir | Diagnóstico | Incidentes, caídas, bugs |
| Medir → Priorizar → Optimizar → Volver a medir | Decisiones con métricas | Performance, SEO |
| Necesidad → Comparar opciones → Prueba de concepto | Criterio, no moda | Elegir stack |
| Balanza de valor | Costo-beneficio → criterio iterativo → prudencia | Refactorizar, migrar o dejar igual |
| Curiosidad estructurada | Actitud → paralelismos con lo que dominas → prueba de concepto | Tecnología que no domina |
| Tema → Laboratorio → Por qué importa | Interés → experimento propio → impacto | Qué estás aprendiendo |
| Validación → Aporte → Compromiso | Valorar al equipo → proponer → ejecutar lo decidido | Decisiones de equipo |
| Rango → Justificación → Flexibilidad | Sueldo | Expectativa salarial |

---

## 3. Reglas de estilo

- **Idioma:** español neutro mexicano y cercano. Las versiones EN deben ser cortas y fáciles de pronunciar.
- **Longitud:** respuestas de 120–180 palabras. Si la entrevista dura 30 minutos o menos, recórtalas hacia 120.
- **Concreción:** cada respuesta nombra al menos **una empresa o proyecto real + una tecnología + un resultado**.
- **Variedad:** no repitas la misma historia en más de dos respuestas. Reparte los ejemplos entre Rancho Izaguirre, FOSDEM/SigmaJS, Amoxeh, tatuajes, Cartografía y las agencias.
- **Fechas relativas correctas:** calcula con la fecha actual (por ejemplo, *"marzo de 2025"*, no *"este año"*).
- **Sueldo:** propone un rango por encima del mínimo publicado y deja claro que el usuario lo ajusta.
- **Dinámica de práctica:** incluye siempre el consejo de que quien practique contigo cambie la forma de preguntar y te interrumpa con *"¿Por qué así?"* o *"Dame un ejemplo"*.
- **Cierre de seguridad:** *"Si no sabes algo, no inventes: 'No lo he usado directamente, pero lo resolvería así…'"*.

---

## 4. Checklist de autorrevisión (antes de entregar)

- [ ] Cada función de la vacante tiene su pregunta en la Parte B.
- [ ] Cada tecnología `must` tiene su pregunta en la Parte C, o una respuesta de brecha honesta.
- [ ] Todas las preguntas tienen **Qué busca + Fórmula + Tu respuesta**, sin excepciones.
- [ ] No hay datos inventados; lo dudoso está marcado ⚠️ o 🔧 y listado en "Datos a confirmar".
- [ ] Las fechas relativas son correctas respecto a hoy.
- [ ] Están los nombres de los entrevistadores y la duración, si se conocen.
- [ ] El documento se entrega completo, sin "…" ni preguntas recortadas.

---

## 5. Ejemplo de referencia
Ver `references/ejemplo-web-developer-ibexweb.md`: guía completa para *Web Developer · IbexWeb & Media* (octubre de 2026), que sirve de modelo de tono, profundidad y formato.
