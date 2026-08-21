# 🔀 Mapeo de Redirecciones: Gatsby (`/personalSite`) ➔ Next.js (`/personal-site-next`)

Este documento contiene la matriz completa de redirecciones (HTTP 301 Permanent Redirect) para migrar la estructura de URLs del sitio anterior desarrollado en Gatsby (`/personalSite`) hacia la nueva arquitectura i18n multilenguaje en Next.js App Router (`/personal-site-next`).

## 📐 Resumen de Cambios de Estructura de Rutas

| Tipo de Contenido | Prefijo Gatsby (`/personalSite`) | Categoría Next.js ES (`/personal-site-next`) | Categoría Next.js EN (`/personal-site-next`) |
|---|---|---|---|
| Tesis | `/thesis/:slug` | `/es/tesis/:slug` | `/en/thesis/:slug` |
| Artículos | `/paper/:slug` | `/es/articulo/:slug` | `/en/paper/:slug` |
| Conferencias | `/conference/:slug` | `/es/conferencia/:slug` | `/en/conference/:slug` |
| Proyectos de Código | `/codeProject/:slug` | `/es/proyecto-codigo/:slug` | `/en/codeProject/:slug` |
| Multimedia | `/multimediaProject/:slug` | `/es/proyecto-multimedia/:slug` | `/en/multimediaProject/:slug` |
| Prensa / Medios | `/mediaAppearance/:slug` | `/es/aparicion-prensa/:slug` | `/en/mediaAppearance/:slug` |
| Publicaciones Blog | `/blog/:slug` | `/es/publicacion-blog/:slug` | `/en/blog/:slug` |

---

## 🏠 Redirecciones de Rutas Estáticas / Principales

| Ruta Antigua (Gatsby) | Ruta Nueva ES (Next.js) | Ruta Nueva EN (Next.js) | Descripción |
|---|---|---|---|
| `/` | `/es` | `/en` | Página Principal |
| `/cv` | `/es/cv` | `/en/cv` | Curriculum Vitae |
| `/experiencia` | `/es/experiencia` | `/en/experiencia` | Experiencia |
| `/academia` | `/es/academia` | `/en/academia` | Formación Académica |
| `/prensa` | `/es/prensa` | `/en/prensa` | Apariciones en Prensa |
| `/proyectos` | `/es/proyectos` | `/en/proyectos` | Proyectos |
| `/page-2` | `/es` | `/en` | Deprecado (Redirige a inicio) |

---

## 📄 Matriz Completa de Redirecciones de Publicaciones (43 ítems)

| ID | Título (ES / EN) | Ruta Antigua (Gatsby) | Nueva Ruta Español (Next.js) | Nueva Ruta Inglés (Next.js) |
|---|---|---|---|---|
| 96 | Visualización de un campo de interacción hipertextual en forma de red utilizando procesos computacionales. Caso de estudio: Graffiti en trenes de mercancía en Norteamérica | `/thesis/visualizacion-de-un-campo-de-interaccion-hipertextual-en-forma-de-red-utilizando-procesos-computacionales-caso-de-estudio-graffiti-en-trenes-de-mercancia-en-norteamerica` | `/es/tesis/visualizacion-de-un-campo-de-interaccion-hipertextual-en-forma-de-red-utilizando-procesos-computacionales-caso-de-estudio-graffiti-en-trenes-de-mercancia-en-norteamerica` | `/en/thesis/visualization-of-a-hypertextual-interaction-field-in-the-form-of-a-network-graph-using-computational-processes-case-study-graffiti-on-freight-trains-in-north-america` |
| 96 (EN Slug) | Visualización de un campo de interacción hipertextual en forma de red utilizando procesos computacionales. Caso de estudio: Graffiti en trenes de mercancía en Norteamérica | `/thesis/visualization-of-a-hypertextual-interaction-field-in-the-form-of-a-network-graph-using-computational-processes-case-study-graffiti-on-freight-trains-in-north-america` | `/es/tesis/visualizacion-de-un-campo-de-interaccion-hipertextual-en-forma-de-red-utilizando-procesos-computacionales-caso-de-estudio-graffiti-en-trenes-de-mercancia-en-norteamerica` | `/en/thesis/visualization-of-a-hypertextual-interaction-field-in-the-form-of-a-network-graph-using-computational-processes-case-study-graffiti-on-freight-trains-in-north-america` |
| 91 | El graffiti ha muerto: Aproximación sociohistórica de la aparición y evolución del fenómeno del graffiti en la ciudad de Guadalajara desde 1990 hasta la actualidad | `/thesis/el-graffiti-ha-muerto-aproximacion-sociohistorica-de-la-aparicion-y-evolucion-del-fenomeno-del-graffiti-en-la-ciudad-de-guadalajara` | `/es/tesis/el-graffiti-ha-muerto-aproximacion-sociohistorica-de-la-aparicion-y-evolucion-del-fenomeno-del-graffiti-en-la-ciudad-de-guadalajara` | `/en/thesis/graffiti-is-dead-sociohistorical-approach-to-the-emergence-and-evolution-of-the-graffiti-phenomenon-in-the-city-of-guadalajara` |
| 91 (EN Slug) | El graffiti ha muerto: Aproximación sociohistórica de la aparición y evolución del fenómeno del graffiti en la ciudad de Guadalajara desde 1990 hasta la actualidad | `/thesis/graffiti-is-dead-sociohistorical-approach-to-the-emergence-and-evolution-of-the-graffiti-phenomenon-in-the-city-of-guadalajara` | `/es/tesis/el-graffiti-ha-muerto-aproximacion-sociohistorica-de-la-aparicion-y-evolucion-del-fenomeno-del-graffiti-en-la-ciudad-de-guadalajara` | `/en/thesis/graffiti-is-dead-sociohistorical-approach-to-the-emergence-and-evolution-of-the-graffiti-phenomenon-in-the-city-of-guadalajara` |
| 75 | Tagging the Writer’s Trace: How Computational Social Science Shaped (my) Freight Graffiti Research | `/paper/etiquetando-el-trazo-del-escritor-como-las-ciencias-sociales-computacionales-moldearon-mi-investigacion-sobre-graffiti-en-trenes` | `/es/articulo/etiquetando-el-trazo-del-escritor-como-las-ciencias-sociales-computacionales-moldearon-mi-investigacion-sobre-graffiti-en-trenes` | `/en/paper/tagging-the-writers-trace-how-computational-social-science-shaped-my-freight-graffiti-research` |
| 75 (EN Slug) | Tagging the Writer’s Trace: How Computational Social Science Shaped (my) Freight Graffiti Research | `/paper/tagging-the-writers-trace-how-computational-social-science-shaped-my-freight-graffiti-research` | `/es/articulo/etiquetando-el-trazo-del-escritor-como-las-ciencias-sociales-computacionales-moldearon-mi-investigacion-sobre-graffiti-en-trenes` | `/en/paper/tagging-the-writers-trace-how-computational-social-science-shaped-my-freight-graffiti-research` |
| 77 | Si la calle es el medio, la calle es el mensaje: Grafiti como estrategia de comunicación extraoficial en Guadalajara | `/paper/si-la-calle-es-el-medio-la-calle-es-el-mensaje-grafiti-como-estrategia-de-comunicacion-extraoficial-en-guadalajara` | `/es/articulo/si-la-calle-es-el-medio-la-calle-es-el-mensaje-grafiti-como-estrategia-de-comunicacion-extraoficial-en-guadalajara` | `/en/paper/if-the-street-is-the-medium-the-street-is-the-message-graffiti-as-an-unofficial-communication-strategy-in-guadalajara` |
| 77 (EN Slug) | Si la calle es el medio, la calle es el mensaje: Grafiti como estrategia de comunicación extraoficial en Guadalajara | `/paper/if-the-street-is-the-medium-the-street-is-the-message-graffiti-as-an-unofficial-communication-strategy-in-guadalajara` | `/es/articulo/si-la-calle-es-el-medio-la-calle-es-el-mensaje-grafiti-como-estrategia-de-comunicacion-extraoficial-en-guadalajara` | `/en/paper/if-the-street-is-the-medium-the-street-is-the-message-graffiti-as-an-unofficial-communication-strategy-in-guadalajara` |
| 80 | Mining, Shaping, Visualizing, and Interpreting Instagram Hypertextual Networks of Freight Train Graffiti Communalities in North America Using Machine Learning Custom Models and Graphology | `/paper/mineria-estructuracion-visualizacion-e-interpretacion-de-redes-hipertextuales-de-instagram-sobre-graffiti-en-trenes-en-norteamerica` | `/es/articulo/mineria-estructuracion-visualizacion-e-interpretacion-de-redes-hipertextuales-de-instagram-sobre-graffiti-en-trenes-en-norteamerica` | `/en/paper/mining-shaping-visualizing-and-interpreting-instagram-hypertextual-networks-of-freight-train-graffiti-communalities-in-north-america-using-machine-learning-custom-models-and-graphology` |
| 80 (EN Slug) | Mining, Shaping, Visualizing, and Interpreting Instagram Hypertextual Networks of Freight Train Graffiti Communalities in North America Using Machine Learning Custom Models and Graphology | `/paper/mining-shaping-visualizing-and-interpreting-instagram-hypertextual-networks-of-freight-train-graffiti-communalities-in-north-america-using-machine-learning-custom-models-and-graphology` | `/es/articulo/mineria-estructuracion-visualizacion-e-interpretacion-de-redes-hipertextuales-de-instagram-sobre-graffiti-en-trenes-en-norteamerica` | `/en/paper/mining-shaping-visualizing-and-interpreting-instagram-hypertextual-networks-of-freight-train-graffiti-communalities-in-north-america-using-machine-learning-custom-models-and-graphology` |
| 82 | Y sin embargo se mueve: Aproximación al concepto de graffiti en tránsito desde el graffiti en trenes de mercancía en la ciudad de Guadalajara | `/paper/y-sin-embargo-se-mueve-aproximacion-al-concepto-de-graffiti-en-transito-desde-el-graffiti-en-trenes-de-mercancia-en-la-ciudad-de-guadalajara` | `/es/articulo/y-sin-embargo-se-mueve-aproximacion-al-concepto-de-graffiti-en-transito-desde-el-graffiti-en-trenes-de-mercancia-en-la-ciudad-de-guadalajara` | `/en/paper/and-yet-it-moves-approach-to-the-concept-of-graffiti-in-transit-from-freight-train-graffiti-in-guadalajara` |
| 82 (EN Slug) | Y sin embargo se mueve: Aproximación al concepto de graffiti en tránsito desde el graffiti en trenes de mercancía en la ciudad de Guadalajara | `/paper/and-yet-it-moves-approach-to-the-concept-of-graffiti-in-transit-from-freight-train-graffiti-in-guadalajara` | `/es/articulo/y-sin-embargo-se-mueve-aproximacion-al-concepto-de-graffiti-en-transito-desde-el-graffiti-en-trenes-de-mercancia-en-la-ciudad-de-guadalajara` | `/en/paper/and-yet-it-moves-approach-to-the-concept-of-graffiti-in-transit-from-freight-train-graffiti-in-guadalajara` |
| 73 | El freight graffiti, un circuito de circulación simbólica transnacional oculto en el margen de las vías del tren | `/paper/el-freight-graffiti-un-circuito-de-circulacion-simbolica-transnacional-oculto-en-el-margen-de-las-vias-del-tren` | `/es/articulo/el-freight-graffiti-un-circuito-de-circulacion-simbolica-transnacional-oculto-en-el-margen-de-las-vias-del-tren` | `/en/paper/freight-graffiti-a-transnational-symbolic-circulation-circuit-hidden-at-the-margins-of-railway-tracks` |
| 73 (EN Slug) | El freight graffiti, un circuito de circulación simbólica transnacional oculto en el margen de las vías del tren | `/paper/freight-graffiti-a-transnational-symbolic-circulation-circuit-hidden-at-the-margins-of-railway-tracks` | `/es/articulo/el-freight-graffiti-un-circuito-de-circulacion-simbolica-transnacional-oculto-en-el-margen-de-las-vias-del-tren` | `/en/paper/freight-graffiti-a-transnational-symbolic-circulation-circuit-hidden-at-the-margins-of-railway-tracks` |
| 46 | Reducción de nodos mediante inferencias de inteligencia artificial usando Graphology y SigmaJS: Un caso de estudio sobre conversaciones hipertextuales en el graffiti de trenes de carga en Norteamérica | `/conference/reduccion-de-nodos-mediante-inferencias-de-inteligencia-artificial-usando-graphology-y-sigmajs` | `/es/conferencia/reduccion-de-nodos-mediante-inferencias-de-inteligencia-artificial-usando-graphology-y-sigmajs` | `/en/conference/node-reduction-through-artificial-intelligence-inferences-using-graphology-and-sigmajs-a-case-study-on-hypertextual-conversations-in-freight-train-graffiti-in-the-north-american-region` |
| 46 (EN Slug) | Reducción de nodos mediante inferencias de inteligencia artificial usando Graphology y SigmaJS: Un caso de estudio sobre conversaciones hipertextuales en el graffiti de trenes de carga en Norteamérica | `/conference/node-reduction-through-artificial-intelligence-inferences-using-graphology-and-sigmajs-a-case-study-on-hypertextual-conversations-in-freight-train-graffiti-in-the-north-american-region` | `/es/conferencia/reduccion-de-nodos-mediante-inferencias-de-inteligencia-artificial-usando-graphology-y-sigmajs` | `/en/conference/node-reduction-through-artificial-intelligence-inferences-using-graphology-and-sigmajs-a-case-study-on-hypertextual-conversations-in-freight-train-graffiti-in-the-north-american-region` |
| 48 | Uso de modelos de clasificación de aprendizaje automático, tanto de imagen como de texto, en la graficación de redes. Caso de estudio: Comunidad de práctica entre escritores de graffiti en trenes de carga | `/conference/uso-de-modelos-de-clasificacion-de-aprendizaje-automatico-en-la-graficacion-de-redes` | `/es/conferencia/uso-de-modelos-de-clasificacion-de-aprendizaje-automatico-en-la-graficacion-de-redes` | `/en/conference/use-of-machine-learning-classification-models-both-image-and-text-in-the-network-graphing-case-study-community-of-practice-among-graffiti-writers-on-freight-trains` |
| 48 (EN Slug) | Uso de modelos de clasificación de aprendizaje automático, tanto de imagen como de texto, en la graficación de redes. Caso de estudio: Comunidad de práctica entre escritores de graffiti en trenes de carga | `/conference/use-of-machine-learning-classification-models-both-image-and-text-in-the-network-graphing-case-study-community-of-practice-among-graffiti-writers-on-freight-trains` | `/es/conferencia/uso-de-modelos-de-clasificacion-de-aprendizaje-automatico-en-la-graficacion-de-redes` | `/en/conference/use-of-machine-learning-classification-models-both-image-and-text-in-the-network-graphing-case-study-community-of-practice-among-graffiti-writers-on-freight-trains` |
| 50 | Implicaciones de la perspectiva de las ciencias sociales computacionales en el análisis de conversaciones hipertextuales en Instagram sobre graffiti en trenes de carga | `/conference/implicaciones-de-la-perspectiva-de-las-ciencias-sociales-computacionales-en-el-analisis-de-instagram` | `/es/conferencia/implicaciones-de-la-perspectiva-de-las-ciencias-sociales-computacionales-en-el-analisis-de-instagram` | `/en/conference/implications-of-the-computational-social-science-perspective-in-the-analysis-of-hypertextual-conversations-on-instagram-around-freight-train-graffiti` |
| 50 (EN Slug) | Implicaciones de la perspectiva de las ciencias sociales computacionales en el análisis de conversaciones hipertextuales en Instagram sobre graffiti en trenes de carga | `/conference/implications-of-the-computational-social-science-perspective-in-the-analysis-of-hypertextual-conversations-on-instagram-around-freight-train-graffiti` | `/es/conferencia/implicaciones-de-la-perspectiva-de-las-ciencias-sociales-computacionales-en-el-analisis-de-instagram` | `/en/conference/implications-of-the-computational-social-science-perspective-in-the-analysis-of-hypertextual-conversations-on-instagram-around-freight-train-graffiti` |
| 52 | La ciudad, un palimpsesto comunicacional: El graffiti neoyorquino, su capacidad de crear circuito masivo de comunicación | `/conference/la-ciudad-un-palimpsesto-comunicacional-el-graffiti-neoyorquino-su-capacidad-de-crear-circuito-masivo-de-comunicacion` | `/es/conferencia/la-ciudad-un-palimpsesto-comunicacional-el-graffiti-neoyorquino-su-capacidad-de-crear-circuito-masivo-de-comunicacion` | `/en/conference/the-city-a-communicational-palimpsest-new-york-graffiti-and-its-capacity-to-create-a-mass-communication-circuit` |
| 52 (EN Slug) | La ciudad, un palimpsesto comunicacional: El graffiti neoyorquino, su capacidad de crear circuito masivo de comunicación | `/conference/the-city-a-communicational-palimpsest-new-york-graffiti-and-its-capacity-to-create-a-mass-communication-circuit` | `/es/conferencia/la-ciudad-un-palimpsesto-comunicacional-el-graffiti-neoyorquino-su-capacidad-de-crear-circuito-masivo-de-comunicacion` | `/en/conference/the-city-a-communicational-palimpsest-new-york-graffiti-and-its-capacity-to-create-a-mass-communication-circuit` |
| 54 | El freight graffiti, una comunidad imaginada transnacional oculta en el margen de las vías del tren | `/conference/el-freight-graffiti-una-comunidad-imaginada-transnacional-oculta-en-el-margen-de-las-vias-del-tren` | `/es/conferencia/el-freight-graffiti-una-comunidad-imaginada-transnacional-oculta-en-el-margen-de-las-vias-del-tren` | `/en/conference/freight-graffiti-a-transnational-imagined-community-hidden-at-the-margins-of-railway-tracks` |
| 54 (EN Slug) | El freight graffiti, una comunidad imaginada transnacional oculta en el margen de las vías del tren | `/conference/freight-graffiti-a-transnational-imagined-community-hidden-at-the-margins-of-railway-tracks` | `/es/conferencia/el-freight-graffiti-una-comunidad-imaginada-transnacional-oculta-en-el-margen-de-las-vias-del-tren` | `/en/conference/freight-graffiti-a-transnational-imagined-community-hidden-at-the-margins-of-railway-tracks` |
| 40 | Modelo de Reconocimiento de Entidades Nombradas en Hashtags de Graffiti | `/codeProject/modelo-reconocimiento-entidades-nombradas-graffiti-hashtags` | `/es/proyecto-codigo/modelo-reconocimiento-entidades-nombradas-graffiti-hashtags` | `/en/codeProject/hashtag-graffiti-named-entity-recognition-model` |
| 40 (EN Slug) | Modelo de Reconocimiento de Entidades Nombradas en Hashtags de Graffiti | `/codeProject/hashtag-graffiti-named-entity-recognition-model` | `/es/proyecto-codigo/modelo-reconocimiento-entidades-nombradas-graffiti-hashtags` | `/en/codeProject/hashtag-graffiti-named-entity-recognition-model` |
| 38 | Modelo de Detección de Estilos de Graffiti | `/codeProject/modelo-deteccion-graffiti` | `/es/proyecto-codigo/modelo-deteccion-graffiti` | `/en/codeProject/graffiti-detection-model` |
| 38 (EN Slug) | Modelo de Detección de Estilos de Graffiti | `/codeProject/graffiti-detection-model` | `/es/proyecto-codigo/modelo-deteccion-graffiti` | `/en/codeProject/graffiti-detection-model` |
| 36 | Bot de Minería de Datos en Instagram (idmb) | `/codeProject/bot-mineria-datos-instagram-idmb` | `/es/proyecto-codigo/bot-mineria-datos-instagram-idmb` | `/en/codeProject/instagram-mining-data-bot-idmb` |
| 36 (EN Slug) | Bot de Minería de Datos en Instagram (idmb) | `/codeProject/instagram-mining-data-bot-idmb` | `/es/proyecto-codigo/bot-mineria-datos-instagram-idmb` | `/en/codeProject/instagram-mining-data-bot-idmb` |
| 34 | Interfaz de Visualización de Datos (DVI) | `/codeProject/interfaz-visualizacion-datos-dvi` | `/es/proyecto-codigo/interfaz-visualizacion-datos-dvi` | `/en/codeProject/data-visualization-interface-dvi` |
| 34 (EN Slug) | Interfaz de Visualización de Datos (DVI) | `/codeProject/data-visualization-interface-dvi` | `/es/proyecto-codigo/interfaz-visualizacion-datos-dvi` | `/en/codeProject/data-visualization-interface-dvi` |
| 32 | Amoxeh – Plugin de WordPress | `/codeProject/amoxeh-plugin-wordpress` | `/es/proyecto-codigo/amoxeh-plugin-wordpress` | `/en/codeProject/amoxeh-wordpress-plugin` |
| 32 (EN Slug) | Amoxeh – Plugin de WordPress | `/codeProject/amoxeh-wordpress-plugin` | `/es/proyecto-codigo/amoxeh-plugin-wordpress` | `/en/codeProject/amoxeh-wordpress-plugin` |
| 56 | Recorriendo el tRAzo – Historia interactiva del graffiti en Guadalajara | `/multimediaProject/recorriendo-el-trazo-historia-interactiva-del-graffiti-en-guadalajara` | `/es/proyecto-multimedia/recorriendo-el-trazo-historia-interactiva-del-graffiti-en-guadalajara` | `/en/multimediaProject/recorriendo-el-trazo-interactive-history-of-the-graffiti-in-guadalajara-city` |
| 56 (EN Slug) | Recorriendo el tRAzo – Historia interactiva del graffiti en Guadalajara | `/multimediaProject/recorriendo-el-trazo-interactive-history-of-the-graffiti-in-guadalajara-city` | `/es/proyecto-multimedia/recorriendo-el-trazo-historia-interactiva-del-graffiti-en-guadalajara` | `/en/multimediaProject/recorriendo-el-trazo-interactive-history-of-the-graffiti-in-guadalajara-city` |
| 58 | Visiones de Paz – Graciela Pérez Rodríguez, defensora de derechos humanos | `/multimediaProject/visiones-de-paz-graciela-perez-rodriguez-defensora-de-derechos-humanos` | `/es/proyecto-multimedia/visiones-de-paz-graciela-perez-rodriguez-defensora-de-derechos-humanos` | `/en/multimediaProject/visiones-de-paz-graciela-perez-rodriguez-defensora-de-derechos-humanos` |
| 60 | El graffiti ha muerto | `/multimediaProject/el-graffiti-ha-muerto` | `/es/proyecto-multimedia/el-graffiti-ha-muerto` | `/en/multimediaProject/el-graffiti-ha-muerto-graffiti-is-dead` |
| 60 (EN Slug) | El graffiti ha muerto | `/multimediaProject/el-graffiti-ha-muerto-graffiti-is-dead` | `/es/proyecto-multimedia/el-graffiti-ha-muerto` | `/en/multimediaProject/el-graffiti-ha-muerto-graffiti-is-dead` |
| 62 | Florencia 13 Lomas del Paraíso | `/multimediaProject/doculoco-florencia-13-lomas-del-paraiso` | `/es/proyecto-multimedia/doculoco-florencia-13-lomas-del-paraiso` | `/en/multimediaProject/doculoco-florencia-13-lomas-del-paraiso` |
| 105 | “Aquí estoy”, la hazaña del graffiti tapatío | `/mediaAppearance/aqui-estoy-la-hazana-del-graffiti-tapatio` | `/es/aparicion-prensa/aqui-estoy-la-hazana-del-graffiti-tapatio` | `/en/mediaAppearance/aqui-estoy-la-hazana-del-graffiti-tapatio-here-i-am-the-odyssey-of-guadalajara-graffiti` |
| 105 (EN Slug) | “Aquí estoy”, la hazaña del graffiti tapatío | `/mediaAppearance/aqui-estoy-la-hazana-del-graffiti-tapatio-here-i-am-the-odyssey-of-guadalajara-graffiti` | `/es/aparicion-prensa/aqui-estoy-la-hazana-del-graffiti-tapatio` | `/en/mediaAppearance/aqui-estoy-la-hazana-del-graffiti-tapatio-here-i-am-the-odyssey-of-guadalajara-graffiti` |
| 102 | Cuenta una de las historias del grafiti tapatío | `/mediaAppearance/cuenta-una-de-las-historias-del-grafiti-tapatio` | `/es/aparicion-prensa/cuenta-una-de-las-historias-del-grafiti-tapatio` | `/en/mediaAppearance/cuenta-una-de-las-historias-del-grafiti-tapatio-shares-one-of-the-stories-of-guadalajara-graffiti` |
| 102 (EN Slug) | Cuenta una de las historias del grafiti tapatío | `/mediaAppearance/cuenta-una-de-las-historias-del-grafiti-tapatio-shares-one-of-the-stories-of-guadalajara-graffiti` | `/es/aparicion-prensa/cuenta-una-de-las-historias-del-grafiti-tapatio` | `/en/mediaAppearance/cuenta-una-de-las-historias-del-grafiti-tapatio-shares-one-of-the-stories-of-guadalajara-graffiti` |
| 100 | Presentaron 'El graffiti ha muerto' | `/mediaAppearance/presentaron-el-graffiti-ha-muerto` | `/es/aparicion-prensa/presentaron-el-graffiti-ha-muerto` | `/en/mediaAppearance/presentaron-el-graffiti-ha-muerto-graffiti-is-dead-was-presented` |
| 100 (EN Slug) | Presentaron 'El graffiti ha muerto' | `/mediaAppearance/presentaron-el-graffiti-ha-muerto-graffiti-is-dead-was-presented` | `/es/aparicion-prensa/presentaron-el-graffiti-ha-muerto` | `/en/mediaAppearance/presentaron-el-graffiti-ha-muerto-graffiti-is-dead-was-presented` |
| 98 | Graffitik a digitális bölcsészetben / DH_BUDAPEST konferencia (Graffiti en las humanidades digitales) | `/mediaAppearance/graffitik-a-digitalis-bolcseszetben-dh_budapest-konferencia` | `/es/aparicion-prensa/graffitik-a-digitalis-bolcseszetben-dh_budapest-konferencia` | `/en/mediaAppearance/graffitik-a-digitalis-bolcseszetben-dh_budapest-konferencia-graffiti-in-the-digital-humanities-dh_budapest-conference` |
| 98 (EN Slug) | Graffitik a digitális bölcsészetben / DH_BUDAPEST konferencia (Graffiti en las humanidades digitales) | `/mediaAppearance/graffitik-a-digitalis-bolcseszetben-dh_budapest-konferencia-graffiti-in-the-digital-humanities-dh_budapest-conference` | `/es/aparicion-prensa/graffitik-a-digitalis-bolcseszetben-dh_budapest-konferencia` | `/en/mediaAppearance/graffitik-a-digitalis-bolcseszetben-dh_budapest-konferencia-graffiti-in-the-digital-humanities-dh_budapest-conference` |
| 12 | Entrada de prueba | `/blog/entrada-de-blog-prueba` | `/es/blog/entrada-de-blog-prueba` | `/en/blog/sample-blog-entry` |
| 12 (EN Slug) | Entrada de prueba | `/blog/sample-blog-entry` | `/es/blog/entrada-de-blog-prueba` | `/en/blog/sample-blog-entry` |
| 1 | ¡Hola mundo! | `/blog/hola-mundo` | `/es/blog/hola-mundo` | `/en/blog/hello-world` |
| 1 (EN Slug) | ¡Hola mundo! | `/blog/hello-world` | `/es/blog/hola-mundo` | `/en/blog/hello-world` |
| 200 | Tejer.RED — Repositorio y Plataforma de Software Libre para la Búsqueda de Desaparecidos | `/codeProject/tejer-red-plataforma` | `/es/proyecto-codigo/tejer-red-plataforma` | `/en/codeProject/tejer-red-platform` |
| 200 (EN Slug) | Tejer.RED — Repositorio y Plataforma de Software Libre para la Búsqueda de Desaparecidos | `/codeProject/tejer-red-platform` | `/es/proyecto-codigo/tejer-red-plataforma` | `/en/codeProject/tejer-red-platform` |
| 201 | Catálogo de Indicios - Rancho Izaguirre (Teuchitlán, Jalisco) | `/codeProject/catalogo-indicios-rancho-izaguirre` | `/es/proyecto-codigo/catalogo-indicios-rancho-izaguirre` | `/en/codeProject/rancho-izaguirre-indicia-catalog` |
| 201 (EN Slug) | Catálogo de Indicios - Rancho Izaguirre (Teuchitlán, Jalisco) | `/codeProject/rancho-izaguirre-indicia-catalog` | `/es/proyecto-codigo/catalogo-indicios-rancho-izaguirre` | `/en/codeProject/rancho-izaguirre-indicia-catalog` |
| 202 | Las Prendas Hablan | `/codeProject/las-prendas-hablan` | `/es/proyecto-codigo/las-prendas-hablan` | `/en/codeProject/the-garments-speak` |
| 202 (EN Slug) | Las Prendas Hablan | `/codeProject/the-garments-speak` | `/es/proyecto-codigo/las-prendas-hablan` | `/en/codeProject/the-garments-speak` |
| 203 | Cartografía Semántica de Desapariciones | `/codeProject/cartografia-semantica-desapariciones` | `/es/proyecto-codigo/cartografia-semantica-desapariciones` | `/en/codeProject/semantic-cartography-of-disappearances` |
| 203 (EN Slug) | Cartografía Semántica de Desapariciones | `/codeProject/semantic-cartography-of-disappearances` | `/es/proyecto-codigo/cartografia-semantica-desapariciones` | `/en/codeProject/semantic-cartography-of-disappearances` |
| 204 | Sistema de Correlación de Tatuajes (PFSI – REPD) | `/codeProject/sistema-correlacion-tatuajes` | `/es/proyecto-codigo/sistema-correlacion-tatuajes` | `/en/codeProject/tattoo-correlation-system` |
| 204 (EN Slug) | Sistema de Correlación de Tatuajes (PFSI – REPD) | `/codeProject/tattoo-correlation-system` | `/es/proyecto-codigo/sistema-correlacion-tatuajes` | `/en/codeProject/tattoo-correlation-system` |
| 205 | Bitácora de Búsqueda (WordPress Plugin) | `/codeProject/bitacora-busqueda-wordpress-plugin` | `/es/proyecto-codigo/bitacora-busqueda-wordpress-plugin` | `/en/codeProject/search-logbook-wordpress-plugin` |
| 205 (EN Slug) | Bitácora de Búsqueda (WordPress Plugin) | `/codeProject/search-logbook-wordpress-plugin` | `/es/proyecto-codigo/bitacora-busqueda-wordpress-plugin` | `/en/codeProject/search-logbook-wordpress-plugin` |
| 210 | Mapping the Humanitarian Crisis of Forced Disappearances in Jalisco: Patterns, Technology, and Collective Action | `/paper/mapeo-crisis-humanitaria-desapariciones-forzadas-jalisco` | `/es/articulo/mapeo-crisis-humanitaria-desapariciones-forzadas-jalisco` | `/en/paper/mapping-humanitarian-crisis-forced-disappearances-jalisco` |
| 210 (EN Slug) | Mapping the Humanitarian Crisis of Forced Disappearances in Jalisco: Patterns, Technology, and Collective Action | `/paper/mapping-humanitarian-crisis-forced-disappearances-jalisco` | `/es/articulo/mapeo-crisis-humanitaria-desapariciones-forzadas-jalisco` | `/en/paper/mapping-humanitarian-crisis-forced-disappearances-jalisco` |
| 211 | Los vecinos, los escritores de graffiti, los políticos y los reporteros inmersos en una malla de mediaciones que modeló el paisaje de la ciudad de Guadalajara | `/paper/los-vecinos-los-escritores-de-graffiti-los-politicos-y-los-reporteros-inmersos-en-una-malla-de-mediaciones` | `/es/articulo/los-vecinos-los-escritores-de-graffiti-los-politicos-y-los-reporteros-inmersos-en-una-malla-de-mediaciones` | `/en/paper/the-neighbors-the-graffiti-writers-the-politicians-and-the-reporters-immersed-in-a-mesh-of-mediations` |
| 211 (EN Slug) | Los vecinos, los escritores de graffiti, los políticos y los reporteros inmersos en una malla de mediaciones que modeló el paisaje de la ciudad de Guadalajara | `/paper/the-neighbors-the-graffiti-writers-the-politicians-and-the-reporters-immersed-in-a-mesh-of-mediations` | `/es/articulo/los-vecinos-los-escritores-de-graffiti-los-politicos-y-los-reporteros-inmersos-en-una-malla-de-mediaciones` | `/en/paper/the-neighbors-the-graffiti-writers-the-politicians-and-the-reporters-immersed-in-a-mesh-of-mediations` |
| 220 | Cartografía de los Desaparecidos: Mapeo de Desapariciones Forzadas en Jalisco | `/conference/cartografia-de-los-desaparecidos-mapeo-desapariciones-forzadas-jalisco` | `/es/conferencia/cartografia-de-los-desaparecidos-mapeo-desapariciones-forzadas-jalisco` | `/en/conference/cartography-of-the-missing-mapping-forced-disappearances-jalisco` |
| 220 (EN Slug) | Cartografía de los Desaparecidos: Mapeo de Desapariciones Forzadas en Jalisco | `/conference/cartography-of-the-missing-mapping-forced-disappearances-jalisco` | `/es/conferencia/cartografia-de-los-desaparecidos-mapeo-desapariciones-forzadas-jalisco` | `/en/conference/cartography-of-the-missing-mapping-forced-disappearances-jalisco` |
| 221 | Demo de la herramienta Amoxeh en el Quinto Encuentro de Humanidades Digitales 2021 | `/conference/demo-de-la-herramienta-amoxeh-en-el-quinto-encuentro-de-humanidades-digitales-2021` | `/es/conferencia/demo-de-la-herramienta-amoxeh-en-el-quinto-encuentro-de-humanidades-digitales-2021` | `/en/conference/demo-of-amoxeh-wordpress-plugin-in-fifth-digital-humanities-encounter-2021` |
| 221 (EN Slug) | Demo de la herramienta Amoxeh en el Quinto Encuentro de Humanidades Digitales 2021 | `/conference/demo-of-amoxeh-wordpress-plugin-in-fifth-digital-humanities-encounter-2021` | `/es/conferencia/demo-de-la-herramienta-amoxeh-en-el-quinto-encuentro-de-humanidades-digitales-2021` | `/en/conference/demo-of-amoxeh-wordpress-plugin-in-fifth-digital-humanities-encounter-2021` |
| 230 | LatAm Journalism Review - Knight Center (UT Austin) | `/mediaAppearance/latam-journalism-review-de-sombreros-a-pantalones` | `/es/aparicion-prensa/latam-journalism-review-de-sombreros-a-pantalones` | `/en/mediaAppearance/latam-journalism-review-from-hats-to-pants` |
| 230 (EN Slug) | LatAm Journalism Review - Knight Center (UT Austin) | `/mediaAppearance/latam-journalism-review-from-hats-to-pants` | `/es/aparicion-prensa/latam-journalism-review-de-sombreros-a-pantalones` | `/en/mediaAppearance/latam-journalism-review-from-hats-to-pants` |
| 231 | WIRED en Español | `/mediaAppearance/wired-en-espanol-activista-crea-sitio-web` | `/es/aparicion-prensa/wired-en-espanol-activista-crea-sitio-web` | `/en/mediaAppearance/wired-en-espanol-activist-creates-website` |
| 231 (EN Slug) | WIRED en Español | `/mediaAppearance/wired-en-espanol-activist-creates-website` | `/es/aparicion-prensa/wired-en-espanol-activista-crea-sitio-web` | `/en/mediaAppearance/wired-en-espanol-activist-creates-website` |
| 232 | Noticias Telemundo | `/mediaAppearance/noticias-telemundo-base-datos-campo-exterminio` | `/es/aparicion-prensa/noticias-telemundo-base-datos-campo-exterminio` | `/en/mediaAppearance/noticias-telemundo-database-extermination-camp-jalisco` |
| 232 (EN Slug) | Noticias Telemundo | `/mediaAppearance/noticias-telemundo-database-extermination-camp-jalisco` | `/es/aparicion-prensa/noticias-telemundo-base-datos-campo-exterminio` | `/en/mediaAppearance/noticias-telemundo-database-extermination-camp-jalisco` |
| 233 | France 24 en Español | `/mediaAppearance/france-24-en-espanol-aplicacion-las-prendas-hablan` | `/es/aparicion-prensa/france-24-en-espanol-aplicacion-las-prendas-hablan` | `/en/mediaAppearance/france-24-en-espanol-the-garments-speak-app-seeker-families` |
| 233 (EN Slug) | France 24 en Español | `/mediaAppearance/france-24-en-espanol-the-garments-speak-app-seeker-families` | `/es/aparicion-prensa/france-24-en-espanol-aplicacion-las-prendas-hablan` | `/en/mediaAppearance/france-24-en-espanol-the-garments-speak-app-seeker-families` |
| 240 | Niño Remiendos — Entre Calles y Callejones | `/multimediaProject/nino-remiendos-entre-calles-y-callejones` | `/es/proyecto-multimedia/nino-remiendos-entre-calles-y-callejones` | `/en/multimediaProject/nino-remiendos-between-streets-and-alleys` |
| 240 (EN Slug) | Niño Remiendos — Entre Calles y Callejones | `/multimediaProject/nino-remiendos-between-streets-and-alleys` | `/es/proyecto-multimedia/nino-remiendos-entre-calles-y-callejones` | `/en/multimediaProject/nino-remiendos-between-streets-and-alleys` |
| 241 | Eróstrato | `/multimediaProject/erostrato-video-minuto` | `/es/proyecto-multimedia/erostrato-video-minuto` | `/en/multimediaProject/erostrato-one-minute-fiction-film` |
| 241 (EN Slug) | Eróstrato | `/multimediaProject/erostrato-one-minute-fiction-film` | `/es/proyecto-multimedia/erostrato-video-minuto` | `/en/multimediaProject/erostrato-one-minute-fiction-film` |

---

## ⚙️ Implementación de Redirecciones Automáticas

### 1. En `next.config.mjs` (Next.js App Router)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Rutas estáticas
      { source: '/', destination: '/es', permanent: true },
      { source: '/cv', destination: '/es/cv', permanent: true },
      { source: '/experiencia', destination: '/es/experiencia', permanent: true },
      { source: '/academia', destination: '/es/academia', permanent: true },
      { source: '/prensa', destination: '/es/prensa', permanent: true },
      { source: '/proyectos', destination: '/es/proyectos', permanent: true },

      // Patrones dinámicos por categoría
      { source: '/thesis/:slug*', destination: '/es/tesis/:slug*', permanent: true },
      { source: '/paper/:slug*', destination: '/es/articulo/:slug*', permanent: true },
      { source: '/conference/:slug*', destination: '/es/conferencia/:slug*', permanent: true },
      { source: '/codeProject/:slug*', destination: '/es/proyecto-codigo/:slug*', permanent: true },
      { source: '/multimediaProject/:slug*', destination: '/es/proyecto-multimedia/:slug*', permanent: true },
      { source: '/mediaAppearance/:slug*', destination: '/es/aparicion-prensa/:slug*', permanent: true },
      { source: '/blog/:slug*', destination: '/es/publicacion-blog/:slug*', permanent: true },
    ];
  },
};

export default nextConfig;
```

### 2. Para Netlify (`_redirects`)

```text
/thesis/* /es/tesis/:splat 301!
/paper/* /es/articulo/:splat 301!
/conference/* /es/conferencia/:splat 301!
/codeProject/* /es/proyecto-codigo/:splat 301!
/multimediaProject/* /es/proyecto-multimedia/:splat 301!
/mediaAppearance/* /es/aparicion-prensa/:splat 301!
/blog/* /es/publicacion-blog/:splat 301!
```

### 3. Para Vercel (`vercel.json`)

```json
{
  "redirects": [
    { "source": "/thesis/(.*)", "destination": "/es/tesis/$1", "permanent": true },
    { "source": "/paper/(.*)", "destination": "/es/articulo/$1", "permanent": true },
    { "source": "/conference/(.*)", "destination": "/es/conferencia/$1", "permanent": true },
    { "source": "/codeProject/(.*)", "destination": "/es/proyecto-codigo/$1", "permanent": true },
    { "source": "/multimediaProject/(.*)", "destination": "/es/proyecto-multimedia/$1", "permanent": true },
    { "source": "/mediaAppearance/(.*)", "destination": "/es/aparicion-prensa/$1", "permanent": true },
    { "source": "/blog/(.*)", "destination": "/es/publicacion-blog/$1", "permanent": true }
  ]
}
```
