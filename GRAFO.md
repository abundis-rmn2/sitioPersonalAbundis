# Documentación Técnica: Sistema de Grafo 3D Interactivo (`GRAFO.md`)

Este documento detalla la arquitectura, el modelo de datos, la interacción en tiempo real y el sistema de estilos del Grafo de Red 3D implementado para el portafolio personal de **Ángel Javier Ramírez Abundis**.

---

## 1. Visión General

El Grafo 3D constituye la **experiencia de aterrizaje inicial (`#grafo`)** al ingresar al sitio. Construido sobre **Three.js** y **3d-force-graph**, representa la red relacional que vincula la trayectoria académica, laboral, proyectos de código/multimedia y publicaciones en medios del autor.

```
                  [ ★ Biografía / Inicio ] (Rojo Vivo)
                             │
     ┌───────────────────────┼───────────────────────┐
     ▼                       ▼                       ▼
[ ★ Experiencia ]     [ ★ Proyectos ]         [ ★ Academia ]
   (Negro Puro)        (Rojo Carmesí)        (Negro Grafito)
     │                       │                       │
     ▼                       ▼                       ▼
(Puestos/Empresas)    (Repositorios/Código)   (Tesis/Artículos)
```

---

## 2. Nodos Hub de Categoría y Modelo de Datos

En `NetworkGraphComponent.js`, la función `generateGraphData` toma la lista de publicaciones de `cvPosts` (`src/data/cvData.js`) y genera automáticamente nodos **Hub centrales** que sirven como anclas para cada sección del portafolio:

1. **`hub-inicio`** (`★ Biografía / Inicio`): Nodo central en **Rojo Vivo (#FF0000)**.
2. **`hub-experiencia`** (`★ Experiencia`): Ancla de trayectoria profesional en **Negro Puro (#111111)**.
3. **`hub-proyectos`** (`★ Proyectos`): Ancla de proyectos de software y multimedia en **Rojo Carmesí (#E60000)**.
4. **`hub-academia`** (`★ Academia`): Ancla de tesis, artículos y ponencias en **Negro Grafito (#222222)**.
5. **`hub-prensa`** (`★ Prensa`): Ancla de apariciones en medios en **Rojo Intenso (#FF3333)**.

Cada publicación individual en `cvData.js` se enlaza automáticamente a su nodo Hub correspondiente según su tipo (`work`, `codeProject`, `multimediaProject`, `thesis`, `paper`, `conference`, `mediaAppearance`).

---

## 3. Comportamiento en Tiempo Real: Hover y Clic

### 3.1. Estado Hover (`onNodeHover`)

Cuando el usuario coloca el cursor sobre un nodo del grafo, el motor de renderizado desencadena una respuesta visual diferenciada de alto contraste:

- **Nodo con Hover Directo (Cursor encima)**:
  - Adquiere **Fondo Negro (`rgba(17, 17, 17, 0.96)`)** en su etiqueta distintiva.
  - La estructura wireframe del nodo y su contorno cambian a **Negro Puro (#111111)**.
- **Nodos Enlazados / Vecinos**:
  - Se "prenden" e iluminan en **Fondo Rojo (`rgba(204, 0, 0, 0.95)`)** con texto blanco en sus tarjetas informativas de título.
  - Las aristas de conexión aumentan su grosor a `2.5px` y activan partículas rojas animadas en dirección al nodo.
- **Nodos Fuera de Selección**:
  - Mantienen una opacidad atenuada (`0.45`) para mantener la atención enfocada en el clúster activo.

### 3.3. Retardo Parametrizable en Listados (`useDebouncedHover`)

Para evitar saltos bruscos o indeseados en la cámara del Grafo 3D cuando el usuario se desplaza rápidamente por las listas del portafolio (`ProjectsSection`, `AcademySection`, `MediaAppearancesList`, `ExperienceList`), se implementó la utilidad parametrizable **`useDebouncedHover`**:

- **Firma**: `useDebouncedHover(onHoverCallback, delayMs = 999, onLeaveCallback)`
- **Funcionamiento**:
  - Al ingresar el cursor (`onMouseEnter`), inicia un temporizador de `delayMs` (por defecto **999ms**).
  - Si el cursor abandona la tarjeta antes de que se cumpla el tiempo (`onMouseLeave`), el temporizador se cancela limpiamente sin activar el zoom 3D.
  - Al permanecer 999ms estático sobre el item, se ejecuta la acción de centrado en el Grafo 3D (`zoomToID`).
  - **Parametrización**: Permite ajustar dinámicamente `<ProjectsSection hoverDelayMs={999} />` o cualquier valor a nivel de props.

---

## 4. Arquitectura de Capas y z-index (CSS)

Para lograr que el lienzo 3D sea **totalmente interactivo en el 100% de la pantalla** sin interferir con la lectura del contenido del portafolio:

| Capa / Elemento | `z-index` | `pointer-events` | Descripción |
| :--- | :---: | :---: | :--- |
| **`.global-background` / `.networkGraph`** | `1` | `auto` | Lienzo 3D interactivo en primer plano receptivo a rotación, pan, zoom y hover. |
| **`.content` / `.wrapper`** | `2` | `none` | Capa contenedora transparente que permite traspasar eventos del ratón al lienzo 3D. |
| **`.hero-graph-badge`** | `2` | `auto` | Distintivo superior flotante con fondo **Gris Rata (`rgba(58, 61, 64, 0.92)`)** de alto contraste. |
| **`.detail-card` / Tarjetas de Sección** | `2` | `auto` | Bloques informativos con fondo de cristal donde el cursor interactúa directamente con el texto/enlaces. |
| **`.anchor-nav`** | `9999` | `auto` | Menú lateral flotante con selector de idioma y botón de icono de Grafo (`FaProjectDiagram`). |

---

## 5. Paleta Cromática y Diseño

El sistema opera bajo una paleta estricta de **Alto Contraste (Blanco, Negro y Rojo)**:

- **Rojo Vivo (#FF0000 / #FF3333)**: Nodos interactivos destacados, partículas de flujo y acentos de títulos.
- **Negro Puro (#111111 / #171717)**: Fondo del nodo con hover directo y estructura de nodos principales.
- **Gris Rata (#3A3D40 / rgba(58,61,64,0.92))**: Banner de entrada superior `#grafo` de alta visibilidad.
- **Blanco (#FFFFFF)**: Tipografía en badges, etiquetas de nodos y fondo general de la página.
