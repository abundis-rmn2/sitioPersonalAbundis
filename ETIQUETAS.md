# ETIQUETAS v2 — Sistema de Etiquetado Multidimensional

> **Archivo de datos:** `src/data/cvData.js`  
> **Exportación:** `TAG_SCHEMA`, campo `tags` en cada objeto de `cvPosts` y `experienceData`  
> **Versión:** 2.0 — Agosto 2026  
> **Total de posts tagueados:** 43 / 43  
> **Referencia del corpus:** `CV_Master_Completo.md`

---

## Taxonomía — 4 Ejes

El sistema usa **cuatro ejes ortogonales**. Cada post/entrada tiene: uno o más `dominio`, exactamente un `rol`, cero o más `metodo`, y uno o más `contexto`.

### Eje A — `dominio` *(sobre QUÉ trata)*

| Valor | Descripción | Color grafo |
|---|---|---|
| `graffiti` | Graffiti como fenómeno cultural, subcultura, freight graffiti (cualquier ángulo) | 🔴 Rojo — `thesis` |
| `desapariciones-mx` | Crisis de desapariciones forzadas en México, forensia digital, Tejer.RED | 🟢 Verde — `mediaAppearance` |
| `ciudad-espacio-publico` | Urbanismo, mediaciones, comunicación urbana, paisaje barrial | 🟠 Naranja — `conference` |
| `desarrollo-web-comercial` | Proyectos web para clientes comerciales/institucionales | 🩵 Cerceta — `codeProject` |
| `comunicacion-politica` | Gobierno abierto, campañas institucionales, datos públicos | 🔵 Azul — `paper` |
| `construccion-manufactura` | Trabajo físico, estructuras metálicas, maquinaria (excluido del sitio, preservado en datos) | ⚫ Gris — `default` |

### Eje B — `rol` *(cómo participó el autor)*

| Valor | Descripción | Color |
|---|---|---|
| `investigador` | Produce conocimiento con método: tesis, artículo, working paper | 🔵 Azul |
| `desarrollador` | Crea software, herramientas, plugins — output es código | 🩵 Cerceta |
| `ponente` | Presenta en congreso, conferencia, encuentro académico | 🟠 Naranja |
| `director-creativo` | Dirige, edita, coordina producción audiovisual o multimedia | 🩷 Rosa |
| `activista-tecnico` | Responde a urgencia social con tecnología (Rancho Izaguirre en 4h) | 🔴 Rojo |
| `colaborador-laboral` | Empleo formal o contrato — trabajador subordinado | ⚫ Gris |
| `difusion-externa` | Aparece en medios externos, no es el autor del trabajo periodístico | 🟢 Verde |

### Eje C — `metodo` *(cómo se construyó)*

| Valor | Descripción | Color |
|---|---|---|
| `python-data` | Python para scraping, análisis, pipelines de datos | 🟣 Púrpura |
| `ml-vision` | CNN, TensorFlow, Roboflow, clasificación de imágenes | 🩷 Rosa |
| `nlp` | spaCy, TF-IDF, embeddings, análisis de texto | 🩵 Cerceta |
| `js-react-web` | JavaScript, React, PHP, Graphology, SigmaJS | 🟡 Ámbar |
| `gis-espacial` | DBSCAN, cartografía, geolocalización, mapas interactivos | 💙 Azul oscuro |
| `etnografia` | Trabajo de campo, entrevistas, historias de vida | 🟠 Naranja cálido |
| `analisis-documental` | Corpus de prensa, Voyant Tools, lingüística de corpus | 🔵 Azul |
| `audiovisual` | Video, documental, radio, montaje | 🔴 Rojo oscuro |
| `ar-interactivo` | Realidad Aumentada (MindAR), instalaciones interactivas, SVG | 🟣 Magenta *(único)* |

### Eje D — `contexto` *(marco institucional)*

| Valor | Descripción |
|---|---|
| `udg` | Ligado directamente a la Universidad de Guadalajara |
| `tejer-red` | Parte del ecosistema Tejer.RED |
| `autonomo` | Proyecto propio sin institución madre |
| `empleo-formal` | Contrato de trabajo ordinario |
| `internacional` | Fuera de México o en colaboración internacional → badge `🌐 intl` |

> **Nota UI:** Solo `internacional` se muestra como badge visual. Los demás valores de `contexto` son metadatos de filtrado.

---

## Tabla completa — cvPosts (43 posts)

| ID | Título corto | dominio | rol | metodo | contexto |
|---|---|---|---|---|---|
| 96 | Tesis Maestría — Graffiti Ferroviario | `graffiti` | `investigador` | python-data · ml-vision · etnografia · js-react-web | udg |
| 91 | Tesis Lic. — El Graffiti Ha Muerto | `graffiti` | `investigador` | etnografia · analisis-documental | udg |
| 75 | Artículo GSA Journal | `graffiti` | `investigador` | etnografia · python-data | 🌐 internacional |
| 77 | Artículo Ixaya (La Calle como Mensaje) | `ciudad-espacio-publico` | `investigador` | analisis-documental | udg |
| 80 | Artículo UXUC (Instagram ML) | `graffiti` | `investigador` | ml-vision · js-react-web · python-data | 🌐 internacional |
| 82 | Artículo Ñawi (Graffiti en tránsito) | `graffiti` | `investigador` | etnografia | 🌐 internacional |
| 73 | Capítulo libro UATx | `graffiti` | `investigador` | etnografia | 🌐 internacional |
| 210 | Working Paper — Desapariciones Jalisco | `desapariciones-mx` | `investigador` | gis-espacial · python-data | autonomo |
| 211 | Artículo Ixaya (Mediaciones GDL) | `ciudad-espacio-publico` | `investigador` | analisis-documental | udg |
| 46 | FOSDEM 2024 — Graphology/SigmaJS | `graffiti` | `ponente` | js-react-web | 🌐 internacional |
| 48 | DH Budapest 2022 — CNN + NLP | `graffiti` | `ponente` | ml-vision · nlp | 🌐 internacional |
| 50 | Urban Creativity Lisbon 2023 | `graffiti` | `ponente` | etnografia · python-data | 🌐 internacional |
| 52 | UNAM — Hip Hop / Palimpsesto | `ciudad-espacio-publico` | `ponente` | etnografia | udg |
| 54 | SCC Cataluña 2021 | `graffiti` | `ponente` | etnografia | 🌐 internacional |
| 220 | ORDEM 2025 — Cartografía Desaparecidos | `desapariciones-mx` | `ponente` | gis-espacial · nlp · python-data | tejer-red · 🌐 internacional |
| 221 | Demo Amoxeh — Encuentro HD 2021 | `graffiti` | `ponente` | js-react-web · analisis-documental | udg |
| 36 | Instagram Mining Bot — idmb | `graffiti` | `desarrollador` | python-data | udg |
| 34 | Data Visualization Interface — DVI | `graffiti` | `desarrollador` | js-react-web | udg |
| 38 | Graffiti Detection Model (CNN) | `graffiti` | `desarrollador` | ml-vision · python-data | udg |
| 40 | NER Model — Hashtags Graffiti (spaCy) | `graffiti` | `desarrollador` | nlp · python-data | udg |
| 32 | Amoxeh — WordPress Plugin | `graffiti` | `desarrollador` | js-react-web · analisis-documental | udg |
| 200 | Tejer.RED — Plataforma principal | `desapariciones-mx` | `activista-tecnico` | js-react-web | tejer-red |
| 201 | Catálogo Indicios — Rancho Izaguirre | `desapariciones-mx` | `activista-tecnico` | js-react-web · python-data | tejer-red |
| 202 | Las Prendas Hablan | `desapariciones-mx` | `activista-tecnico` | js-react-web | tejer-red |
| 203 | Cartografía Semántica Desapariciones | `desapariciones-mx` | `activista-tecnico` | gis-espacial · js-react-web · python-data | tejer-red |
| 204 | Sistema Correlación Tatuajes (TF-IDF) | `desapariciones-mx` | `activista-tecnico` | nlp · python-data | tejer-red |
| 205 | Bitácora de Búsqueda (WP Plugin) | `desapariciones-mx` | `activista-tecnico` | js-react-web | tejer-red |
| 56 | Recorriendo el tRAzo (web + AR ⭐) | `graffiti` | `director-creativo` | **ar-interactivo** · js-react-web | udg |
| 58 | Visiones de Paz — Graciela Pérez ⭐ | `desapariciones-mx` | `director-creativo` | audiovisual | autonomo |
| 60 | El graffiti ha muerto (documental) | `graffiti` | `director-creativo` | audiovisual | udg |
| 62 | Florencia 13 Lomas del Paraíso | `ciudad-espacio-publico` | `director-creativo` | audiovisual | autonomo |
| 240 | Niño Remiendos — Entre Calles | `ciudad-espacio-publico` | `director-creativo` | audiovisual | autonomo |
| 241 | Eróstrato (video minuto) | `ciudad-espacio-publico` | `director-creativo` | audiovisual | autonomo |
| 230 | LatAm Journalism Review (Knight Center) | `desapariciones-mx` | `difusion-externa` | — | tejer-red · 🌐 internacional |
| 231 | WIRED en Español | `desapariciones-mx` | `difusion-externa` | — | tejer-red |
| 232 | Noticias Telemundo | `desapariciones-mx` | `difusion-externa` | — | tejer-red |
| 233 | France 24 en Español | `desapariciones-mx` | `difusion-externa` | — | tejer-red |
| 105 | Gaceta UDG — graffiti | `graffiti` | `difusion-externa` | — | udg |
| 98 | PRAE.HU — DH Budapest | `graffiti` | `difusion-externa` | — | 🌐 internacional |
| 100 | Milenio — presentación documental | `graffiti` | `difusion-externa` | — | udg |
| 102 | NTR Diario — El graffiti ha muerto | `graffiti` | `difusion-externa` | — | udg |
| 12 | Entrada de blog prueba | — | `blog` | — | autonomo |
| 1 | Hola Mundo | — | `blog` | — | autonomo |

> ⭐ **ID 56 — Recorriendo el tRAzo:** única entrada con `ar-interactivo`. Instalación física en Biblioteca CUCSH (UDG).  
> ⭐ **ID 58 — Visiones de Paz:** hito fundacional de Tejer.RED (2018 → precursor de plataforma 2021).

---

## Tabla — experienceData

| Empresa | dominio | rol | metodo | contexto |
|---|---|---|---|---|
| Balam Studio Creative Media | `desarrollo-web-comercial` | `colaborador-laboral` | js-react-web | empleo-formal |
| Uzu Digital (Nauka) | `desarrollo-web-comercial` | `colaborador-laboral` | js-react-web | empleo-formal |
| MONDO MARKETING (Nagoya) | `desarrollo-web-comercial` | `colaborador-laboral` | — | empleo-formal · 🌐 internacional |
| Nuvi Global | `desarrollo-web-comercial` | `colaborador-laboral` | audiovisual · js-react-web | empleo-formal |
| Atama Estrategia Creativa | `comunicacion-politica` | `colaborador-laboral` | audiovisual | empleo-formal |
| Web-Gdl | `desarrollo-web-comercial` | `colaborador-laboral` | js-react-web | empleo-formal |
| Universidad de Guadalajara (investigación) | `ciudad-espacio-publico` | `investigador` | etnografia | udg |
| México nos mueve la Paz | `ciudad-espacio-publico` | `colaborador-laboral` | audiovisual | udg |

### Perfil de Construcción (preservado en datos, no visible en sitio)

| Empresa | dominio | contexto |
|---|---|---|
| Centura Building Systems (Vancouver) | `construccion-manufactura` | empleo-formal · internacional |
| Dadicas Granite Countertops (San Diego) | `construccion-manufactura` | empleo-formal · internacional |
| Asistente General Particular (San Diego) | `construccion-manufactura` | empleo-formal · internacional |
| Asistente General Particular (GDL) | `construccion-manufactura` | empleo-formal |

---

## Relaciones internas por dominio

### 🔴 graffiti (25 posts)

```
INVESTIGACIÓN (línea de tiempo)
  91 (Lic. 2019) ──▶ 96 (Maestría 2024)
  Artículos: 73 · 75 · 77 · 80 · 82 (internacionales)

CONFERENCIAS
  221 (HD MX 2021) ──▶ 54 (SCC 2021) ──▶ 48 (Budapest 2022)
  52 (UNAM 2022) ──▶ 50 (Lisboa 2023) ──▶ 46 (FOSDEM 2024)

STACK TÉCNICO (acumulativo)
  32 Amoxeh (2016) ──▶ 36 idmb (2021) ──▶ 34 DVI (2022)
                                          ├──▶ 38 CNN Model (2023)
                                          └──▶ 40 NER Model (2023)

MULTIMEDIA
  60 Documental (2019) ──▶ 56 Web+AR ⭐ (2021)
  Prensa: 98 · 100 · 102 · 105
```

### 🟢 desapariciones-mx (12 posts)

```
HITO FUNDACIONAL
  58 Visiones de Paz (2018) ──▶ 200 Tejer.RED (2021)

ÁRBOL DE SOFTWARE (Tejer.RED)
  200 Plataforma
    ├──▶ 201 Catálogo Indicios (Mar 2025) — [WIRED 231]
    ├──▶ 202 Las Prendas Hablan (2025)   — [Telemundo 232] [France24 233]
    ├──▶ 203 Cartografía Semántica (2025)
    ├──▶ 204 Correlación Tatuajes (2025)
    └──▶ 205 Bitácora Búsqueda (2025)

INVESTIGACIÓN/PONENCIAS
  210 Working Paper (2024) ──▶ 220 ORDEM 2025

IMPACTO MEDIÁTICO
  231 WIRED ──▶ 230 LatAm JR (UT Austin) ──▶ 232 Telemundo ──▶ 233 France24
```

### 🟠 ciudad-espacio-publico (7 posts)

```
INVESTIGACIÓN SOCIOLÓGICA
  77 (Ixaya 2021) ──▶ 211 (Ixaya 2024)
  52 UNAM (ponencia 2022)

AUDIOVISUAL / CAMPO
  62 Florencia 13 (2017) ──▶ 240 Niño Remiendos (2013–2015)
  241 Eróstrato (2012)
  UDG research (2012) ──▶ México nos mueve la Paz (2012)
```

---

## Estadísticas del corpus

### Por `dominio`

| Dominio | Posts |
|---|---|
| `graffiti` | 25 |
| `desapariciones-mx` | 12 |
| `ciudad-espacio-publico` | 7 |
| `desarrollo-web-comercial` | 6 (experiencia) |
| `comunicacion-politica` | 1 (experiencia) |

### Por `rol`

| Rol | Count | % |
|---|---|---|
| `investigador` | 10 | 23% |
| `difusion-externa` | 8 | 19% |
| `activista-tecnico` | 6 | 14% |
| `director-creativo` | 6 | 14% |
| `ponente` | 7 | 16% |
| `desarrollador` | 5 | 12% |
| `blog` | 2 | 5% |

### Por `metodo` (múltiple por post)

| Metodo | Apariciones |
|---|---|
| `js-react-web` | 15 |
| `etnografia` | 10 |
| `python-data` | 10 |
| `audiovisual` | 8 |
| `nlp` | 5 |
| `ml-vision` | 4 |
| `gis-espacial` | 4 |
| `analisis-documental` | 4 |
| `ar-interactivo` | 1 *(único: ID 56)* |

---

## Esquema de datos en cvData.js

```js
// TAG_SCHEMA — enum canónico
export const TAG_SCHEMA = {
  dominio: ["graffiti", "desapariciones-mx", "ciudad-espacio-publico",
            "desarrollo-web-comercial", "comunicacion-politica", "construccion-manufactura"],
  rol:     ["investigador", "desarrollador", "ponente", "director-creativo",
            "activista-tecnico", "colaborador-laboral", "difusion-externa", "blog"],
  metodo:  ["python-data", "ml-vision", "nlp", "js-react-web", "gis-espacial",
            "etnografia", "analisis-documental", "audiovisual", "ar-interactivo"],
  contexto:["udg", "tejer-red", "autonomo", "empleo-formal", "internacional"]
};

// Estructura de tags en cada cvPost
{
  "id": 56,
  "tags": {
    "dominio": ["graffiti"],
    "rol": "director-creativo",
    "metodo": ["ar-interactivo", "js-react-web"],
    "contexto": ["udg"]
  }
}

// Estructura de tags en experienceData
{
  "role": "Atama Estrategia Creativa",
  "tags": {
    "dominio": "comunicacion-politica",
    "rol": "colaborador-laboral",
    "metodo": ["audiovisual"],
    "contexto": ["empleo-formal"]
  }
}
```

## Uso desde componentes React

```js
import { cvPosts, TAG_SCHEMA } from '@/data/cvData';

// Filtrar por dominio
const graffiti = cvPosts.filter(p => p.tags?.dominio.includes('graffiti'));

// Filtrar por rol
const proyectos = cvPosts.filter(p => p.tags?.rol === 'activista-tecnico');

// Filtro cruzado: investigación internacional
const intlResearch = cvPosts.filter(p =>
  p.tags?.rol === 'investigador' &&
  p.tags?.contexto.includes('internacional')
);

// Posts con AR
const arPosts = cvPosts.filter(p => p.tags?.metodo.includes('ar-interactivo'));
// → Solo ID 56 (Recorriendo el tRAzo)
```
