# Repositorio ADR de Historias de Entrevista (STAR + Architectural Decision Records)

Este catálogo documenta decisiones técnicas complejas, negociaciones críticas y resolución de conflictos etiquetados por **Stack**, **Dominio** y **Pregunta Típica de Entrevista**. Sirve como fuente de verdad para que la skill `interview-prep-writer` inserte experiencias reales y verificadas en lugar de respuestas genéricas.

---

## ADR-001: Rediseño de Carrito, Bundles de Tintes con Precios Dinámicos y Negociación de Scope

- **ID:** `ADR-001`
- **Tags:** `[WordPress]` `[WooCommerce]` `[PHP]` `[MySQL]` `[E-commerce]` `[Negociación-Cliente]` `[Zero-Downtime]` `[Conflicto-Scope]`
- **Pregunta Target:** `A6. "Háblame de un conflicto, desacuerdo o negociación difícil con un compañero o cliente"` / `B6. "Problema técnico complejo resuelto desde la raíz"`
- **Empresa / Cliente:** Nutrapel (Cosméticos y productos profesionales para el cabello)
- **Contexto Operativo:** Tienda WooCommerce en producción con alto tráfico de ventas B2C/B2B.

### 1. Contexto y Problema (Situación / Conflicto)
Nutrapel requería modernizar el flujo de compra rediseñando el carrito y creando una funcionalidad compleja de **bundles de tintes**: los clientes debían armar paquetes personalizados combinando gamas de tintes con reglas de precios diferenciados, escalonados y descuentos según volumen o tono.
- **Tensión / Conflicto:** El cliente solicitaba cambios constantes y subjetivos de último momento sobre la marcha mientras la tienda seguía vendiendo. Ningún plugin comercial de WooCommerce resolvía las combinaciones de precios sin romper el rendimiento de la base de datos o generar incompatibilidades.
- **Riesgo Operativo:** Cualquier error o caída de la base de datos detenía las ventas activas de la empresa (inaceptable un downtime).

### 2. Decisión Arquitectónica y Negociación (Acción)
1. **Negociación Estratégica con el Cliente:**
   - En lugar de aceptar cambios sobre la marcha o entrar en confrontación, se agendó una mesa de trabajo para **congelar las reglas de negocio en un documento por escrito**: tabla formal de descuentos, combinaciones de tintes válidas y matriz de casos límite.
   - Se acordó un plan de **transición por hitos claros** (Milestones): Mockup funcional en Staging → Validación de cálculo de precios → Pruebas de estrés de base de datos → Despliegue en producción.
2. **Implementación Técnica desde Cero (Custom PHP/Hooks):**
   - Se programó la lógica a la medida mediante hooks de WooCommerce (`woocommerce_before_calculate_totals`, `woocommerce_add_to_cart_validation`, endpoints REST) y estructuras personalizadas en PHP/MySQL para calcular los precios dinámicos del bundle sin alterar el catálogo base.
   - Todo el desarrollo y pruebas de regresión se realizaron en un entorno de staging idéntico al servidor de producción.
3. **Despliegue Zero-Downtime:**
   - Se ejecutó la migración y activación en una ventana programada, manteniendo la tienda 100% activa sin interrumpir transacciones en curso.

### 3. Resultado e Impacto (Métrica / Conclusión)
- **Cero tiempo de inactividad (Zero Downtime):** La tienda nunca dejó de operar ni se perdieron pedidos.
- **Alineación total:** Las reglas definidas en texto eliminaron por completo las fricciones de "último momento" con el cliente.
- **Rendimiento:** El cálculo en el carrito quedó optimizado en memoria sin saturar consultas a la base de datos.

---

### 4. Guion de Respuesta para la Entrevista (Formato STAR)

#### Español (60–90 segundos):
> *"Un caso muy claro fue con **Nutrapel**, una marca de cosméticos y productos profesionales para el cabello. Necesitaban rediseñar el carrito de compra de su tienda WooCommerce y crear un sistema de **bundles de tintes personalizados**: paquetes donde los clientes combinaban diferentes tonos con reglas de precios y descuentos escalonados. Los plugins comerciales no daban la flexibilidad y el cliente pedía ajustes constantes sobre la marcha, con el riesgo latente de tirar la tienda en plena venta.
> 
> Mi abordaje tuvo dos partes: primero la **negociación**. Me senté con el cliente para despersonalizar el conflicto y acordamos congelar las reglas de descuento y combinaciones por escrito en una matriz de especificaciones, dividiendo el proyecto en hitos claros para evitar cambios de último minuto. Segundo, la **ingeniería**: programé la solución desde cero usando hooks de WooCommerce y PHP a la medida para calcular los precios dinámicos en memoria. Todo se probó en staging y se desplegó con **cero tiempo de caída** sin interrumpir una sola venta. Aprendí que la mejor forma de resolver un desacuerdo con un cliente es darle certidumbre con documentación clara y rigor técnico."*

#### Inglés (Short Version):
> *"At **Nutrapel**, a hair cosmetics brand, we had to redesign the WooCommerce cart and build a custom dye bundle system with tiered pricing rules. Commercial plugins couldn't handle it, and the client kept requesting on-the-fly changes while live sales were running. 
> I resolved the friction by scheduling a alignment session: we defined and froze all pricing rules and discounts in writing, establishing clear milestones. Technically, I built the bundle logic from scratch in PHP using custom WooCommerce hooks and deployed it with **zero downtime**. Documenting rules upfront turned a stressful situation into a successful, high-performing launch."*

---

## ADR-002: Visualización de Redes Densas y Hairball Problem (WebGL / JS)
- **Tags:** `[JavaScript]` `[SigmaJS]` `[Graphology]` `[WebGL]` `[Performance]` `[FOSDEM]`
- **Pregunta Target:** `B6. "Problema técnico más complejo y cómo lo resolviste"`
- **Contexto:** Visualización de más de 10,000 interacciones en navegadores comerciales.
- **Decisión:** Migración de renderizado DOM/SVG estándar a WebGL acelerado por hardware con layout ForceAtlas y poda interactiva de nodos por métricas de centralidad.
- **Resultado:** Renderizado fluido a 60fps en dispositivos estándar; ponencia en FOSDEM 2024 en Bruselas.

---

## ADR-003: Catálogo de Indicios Rancho Izaguirre (High-Traffic / Time-Critical)
- **Tags:** `[Full-Stack]` `[Bases de Datos]` `[Optimización]` `[Picos de Tráfico]` `[Crisis Management]`
- **Pregunta Target:** `A7. "Trabajo independiente"` / `B1. "Incidencias bajo presión"`
- **Contexto:** Publicación dispersa de indicios por la Fiscalía en crisis humanitaria.
- **Decisión:** Extracción y estructuración relacional de datos en 4 horas; arquitectura de bajo consumo de recursos en servidor para soportar cobertura nacional e internacional.
- **Resultado:** Cobertura en WIRED y Telemundo; cero caídas de servidor ante picos masivos de visitantes concurrentes.
