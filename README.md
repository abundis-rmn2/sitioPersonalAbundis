# Personal Site - Portfolio & Curriculum Next.js

Sitio web personal y portafolio interactivo desarrollado en **Next.js (App Router)** con animación 3D del grafo de conocimiento en **Three.js / 3D Force-Graph**, renderizado estático multi-idioma (Español e Inglés) y desplazamiento fluido.

---

## 🛠️ Tecnologías Principales

- **Framework**: Next.js 16 (App Router, Turbopack, Dynamic SSG)
- **Visualización 3D**: `3d-force-graph` / `three`
- **Animaciones y Smooth Scroll**: `framer-motion`, `@studio-freight/lenis` / `lenis`
- **Estilos**: Vanilla CSS (`globals.css`) con variables personalizadas y diseño adaptativo.
- **Iconos**: `react-icons`

---

## 🗺️ Estructura de Páginas (Rutas en `src/app`)

El proyecto utiliza el **App Router** de Next.js con soporte i18n estático (SSG):

1. **`src/app/page.js`** *(Ruta Raíz `/`)*
   - Redirige automáticamente al usuario al idioma por defecto (`/es`).

2. **`src/app/[lang]/page.js`** *(Página Principal Localizada `/[lang]` - `es` | `en`)*
   - Genera los parámetros de idioma estáticamente con `generateStaticParams()` (`es`, `en`).
   - Renderiza el componente cliente principal: `<LangHomePageClient lang={lang} />`.

3. **`src/app/[lang]/[category]/[slug]/page.js`** *(Página de Detalle `/[lang]/[category]/[slug]`)*
   - Genera rutas estáticas para todas las publicaciones registradas en `cvData.js`.
   - Busca el elemento por `slug` y `category` en el idioma activo.
   - Renderiza el componente de detalle: `<DetailPageClient post={post} lang={lang} />`.

---

## 🧱 Estructura y Orden de los Componentes

### 1. Vista Principal (`LangHomePageClient.js`)

El contenedor principal envuelve la experiencia en `<ReactLenis>` (smooth scroll) y `<motion.div>` (transición de página):

#### **Fondo 3D (Capa Inferior / Fixed Background)**
- **`<GlobalList />`**
  - **`<NetworkGraph />`** (Wrapper con `next/dynamic` y `ssr: false`).
    - **`<NetworkGraphComponent />`**: Renderiza el grafo de conocimiento interconectado en 3D (`Three.js`), reaccionando al scroll y a la interacción con las secciones del menú.

#### **Navegación Flotante (Menú Lateral / Drawer)**
- **`<AnchorMenu />`**
  - Selector de idioma (`ES` | `EN`).
  - Botones de navegación anclada (`#inicio`, `#experiencia`, `#proyectos`, `#academia`, `#prensa`).
  - Animación y zoom automático del grafo 3D en la cámara al seleccionar una sección.
  - Enlaces a redes sociales (GitHub, LinkedIn, Email).

#### **Orden Vertical de Secciones de Contenido**

```
 ┌─────────────────────────────────────────────────────────┐
 │ 1. #inicio       ──> <Bio />                           │
 ├─────────────────────────────────────────────────────────┤
 │ 2. #experiencia  ──> <ExperienceList />                │
 ├─────────────────────────────────────────────────────────┤
 │ 3. #proyectos    ──> <ProjectsSection />                │
 │                      ├─ Pestaña: Proyectos de Código    │
 │                      └─ Pestaña: Proyectos Multimedia   │
 ├─────────────────────────────────────────────────────────┤
 │ 4. #academia     ──> <AcademySection />                 │
 │                      ├─ Pestaña: Tesis                 │
 │                      ├─ Pestaña: Artículos             │
 │                      └─ Pestaña: Conferencias          │
 ├─────────────────────────────────────────────────────────┤
 │ 5. #prensa       ──> <MediaAppearancesList />          │
 └─────────────────────────────────────────────────────────┘
```

1. **`#inicio` → `<Bio />`**: Biografía, foto de perfil, presentación general y accesos rápidos.
2. **`#experiencia` → `<ExperienceList />`**: Historial laboral y trayectoria profesional estructurada cronológicamente.
3. **`#proyectos` → `<ProjectsSection />`** (Definido en `SectionList.js`):
   - Pestaña 1: **Proyectos de Código** (`type: 'codeProject'`)
   - Pestaña 2: **Proyectos Multimedia** (`type: 'multimedia'`)
4. **`#academia` → `<AcademySection />`** (Definido en `SectionList.js`):
   - Pestaña 1: **Tesis** (`type: 'thesis'`)
   - Pestaña 2: **Artículos / Publicaciones** (`type: 'articles'`)
   - Pestaña 3: **Conferencias / Ponencias** (`type: 'talks'`)
5. **`#prensa` → `<MediaAppearancesList />`** (Definido en `SectionList.js`):
   - Listado de apariciones en medios de comunicación y notas de prensa (`type: 'mediaAppearance'`).

---

### 2. Vista de Detalle (`DetailPageClient.js`)

Componente cliente encargado de mostrar la información completa de una publicación específica:

1. **Fondo 3D**: Renderiza `<GlobalList />` y enfoca automáticamente el nodo específico de la publicación mediante `zoomToID(post.id)`.
2. **Tarjeta de Detalle (`detail-card`)**:
   - **Encabezado**: Botón `← Volver al Inicio` y selector dinámico a la versión traducida del post en el otro idioma.
   - **Información Principal**: Título del post, fecha de publicación (`displayDate`) y cita en formato académico (`citation`).
   - **Cuerpo**: Contenido extendido o abstract estructurado (`post-content`).
   - **Enlaces de Acción**: Botones dinámicos hacia repositorios de GitHub, publicaciones externas, conferencias, sitios web o reportajes de prensa.

---

## 📊 Fuente de Datos (`src/data/cvData.js`)

Toda la información del portafolio se almacena en la constante `cvPosts` en `src/data/cvData.js`. Cada objeto contiene:
- `id`: Identificador único numérico (utilizado para vincular los nodos del grafo 3D).
- `type`: Tipo de elemento (`thesis`, `articles`, `talks`, `codeProject`, `multimedia`, `mediaAppearance`, `blog`).
- `related_posts`: Arreglo de IDs de otras publicaciones para generar los enlaces (edges) del grafo 3D.
- `slugs`: Slugs i18n para la URL (`es`, `en`).
- `categories`: Categorías i18n para la URL (`es`, `en`).
- `es` / `en`: Título, resumen, contenido extendido, cita y fecha localizados.

---

## 🌐 Configuración del Grafo 3D (`NetworkGraphComponent.js` & `NetworkGraph.js`)

### 1. Renderizado Estáctico/Diverso (`NetworkGraph.js`)
- Utiliza `next/dynamic` con `{ ssr: false }` para evitar renderizado en el servidor (SSR) de librerías `Three.js` y manipular el elemento `HTMLCanvasElement` en el cliente.
- Expone mediante `React.forwardRef` la API imperativa de control de cámara y resaltado hacia los componentes contenedores (`LangHomePageClient`, `AnchorMenu`, `DetailPageClient`).

### 2. Geometría y Relevancia de los Nodos
- **Cálculo de Grado y Conexiones**:
  $$\text{val} = \max(1, \text{inDegree} + \text{outDegree})$$
- **Tamaño Base (`sphereSize`)**: 
  $$\text{sphereSize} = \sqrt{\text{val}} \times 2.5 + 2$$
- **Representación Visual**:
  - **Estado Normal**: Renderizado como **Cubo Wireframe** (`BoxGeometry`), opacidad `0.5` y color acorde a su categoría (`thesis: #FF0000`, `codeProject: #008080`, `articles: #1E90FF`, `multimedia: #FF1493`, `mediaAppearance: #32CD32`, `blog: #663399`).
  - **Estado Resaltado**: Cambia a **Esfera Wireframe** (`SphereGeometry`), opacidad `0.9`, color carmesí `#FF6666` e iluminación amarilla `#FFFF00`. Despliega además un letrero de texto 3D flotante (`TextSprite` en Canvas HTML2D) a $\text{sphereSize} + 15$ unidades de altura.

### 3. Enlaces y Partículas Direccionales
- **Enlaces (Edges)**: Grosor de `0.5px` en estado normal (`#D3D3D3`) y `1.5px` en estado activo (`#888888`).
- **Flujo de Partículas**: Al resaltar un nodo, se activan `2` partículas direccionales por enlace en color carmesí (`#FF6666`), con velocidad de propagación de `0.008` unidades/frame y ancho de `1.2px`.

### 4. Distancia, Cámara y Zoom (`zoomToID` / `zoomToFit`)
- **Posición de Cámara Inicial**: `cameraPosition = { x: 0, y: 0, z: 350 }`.
- **Vista General (`zoomToFit`)**: Encuadra la totalidad de la red en pantalla con un margen (*padding*) de `50px` y una transición de `1000ms`.
- **Zoom y Enfoque a Nodo (`zoomToID`)**:
  - **Distancia Relativa**: Se aplica un margen fijo de distancia de `120` unidades. La posición objetivo se obtiene escalando las coordenadas tridimensionales del nodo:
    $$\text{distRatio} = 1 + \frac{120}{\sqrt{x^2 + y^2 + z^2}}$$
    $$\text{targetPosition} = \{ x \cdot \text{distRatio}, y \cdot \text{distRatio}, z \cdot \text{distRatio} \}$$
  - **Transición de Cámara**: Animación fluida hacia `targetPosition` enfocando la mirada (`lookAt`) al nodo durante `1000ms`.
  - **Órbita 3D Automática (Bobbing & Rotation)**: Al finalizar el zoom, se activa un loop de animación `requestAnimationFrame` con incremento angular suave ($\Delta \theta = 0.005$) y oscilatorio vertical ($\sin(2\theta) \times 5$).

### 5. Interacción al Dar Clic en el Menú (`AnchorMenu.js`)
Al hacer clic en un enlace del menú lateral, `AnchorMenu.js` ejecuta `handleAnchorClick(e, id)` realizando dos acciones sincronizadas:

1. **Scroll de Página**: Desplazamiento fluido del documento HTML mediante Lenis Smooth Scroll (`lenis.scrollTo('#id')`).
2. **Navegación y Zoom 3D**: Asocia la sección del menú a un nodo clave mediante la tabla de mapeo `sectionToNodeMap`:

```javascript
const sectionToNodeMap = {
  "inicio": 91,       // Tesis de Licenciatura -> Seccion Inicio
  "experiencia": 200, // Proyecto Tejer.RED -> Sección Experiencia
  "proyectos": 201,   // Catálogo de Indicios -> Sección Proyectos
  "academia": 75,     // Artículo Científico -> Sección Academia
  "prensa": 230       // Nota en LatAm Journalism Review -> Sección Prensa
};
```

Invocando `networkGraphRef.current.zoomToID(nodeId)` y `networkGraphRef.current.highlightIDCall(nodeId)` para trasladar la cámara 3D, enfocar el nodo objetivo y resaltar toda su red de relaciones asociadas.

---

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (SSG)
npm run build

# Iniciar servidor de producción
npm start
```

