'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';
import { bioData, cvPosts, experienceData, TAG_SCHEMA, TAG_DISPLAY_NAMES } from '../data/cvData';
import useIsMobile from '../utils/useIsMobile';

const GrafoCVNetwork = forwardRef(({ 
  lang = 'es', 
  onNodeSelect,
  onBackgroundClick,
  activeFilter = 'all'
}, ref) => {
  const containerRef = useRef(null);
  const graphRef = useRef(null);
  const isMobile = useIsMobile();
  const isInitializedRef = useRef(false);

  const [highlightNodes] = useState(new Set());
  const [highlightLinks] = useState(new Set());
  const [hoverNodes] = useState(new Set());
  const [hoverLinks] = useState(new Set());
  
  const currentHoverRef = useRef(null);
  const selectedNodeRef = useRef(null);
  const angleRef = useRef(0);
  const autoRotateRef = useRef(true);

  // Paleta Cromática de Alto Contraste sobre Fondo Blanco (Blanco, Negro, Rojo)
  const nodeTypeColors = {
    hub: '#FF0000',               // Rojo vivo para Hubs
    bio: '#FF0000',               // Rojo vivo para Nodo Bio
    experience: '#111111',        // Negro puro
    codeProject: '#E60000',       // Rojo carmesí
    multimediaProject: '#FF3333', // Rojo vibrante
    multimedia: '#FF3333',        // Rojo vibrante
    thesis: '#FF0000',            // Rojo puro
    paper: '#222222',             // Negro grafito
    articles: '#222222',          // Negro grafito
    talks: '#CC0000',             // Rojo oscuro
    conference: '#CC0000',        // Rojo oscuro
    mediaAppearance: '#333333',   // Gris carbón
    skill: '#D32F2F',             // Rojo carmesí para habilidades
    default: '#555555'            // Gris medio
  };

  const wrapText = (text, maxCharsPerLine = 22) => {
    if (text === null || text === undefined) return [''];
    const str = String(text);
    if (str.length <= maxCharsPerLine) return [str];
    
    const lines = [];
    let currentLine = '';
    const words = str.split(' ');
    
    words.forEach(word => {
      if ((currentLine + ' ' + word).length > maxCharsPerLine && currentLine !== '') {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = currentLine === '' ? word : `${currentLine} ${word}`;
      }
    });
    
    if (currentLine !== '') {
      lines.push(currentLine);
    }
    
    return lines;
  };

  const highlightID = (id) => {
    if (graphRef.current) {
      const graphData = graphRef.current.graphData();
      if (!graphData || !graphData.nodes) return null;

      const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
      const node = graphData.nodes.find((n) => n.id === id || n.id === numericId || String(n.id) === String(id));

      if (node) {
        highlightNodes.clear();
        highlightLinks.clear();

        highlightNodes.add(node);
        if (node.neighbors && Array.isArray(node.neighbors)) {
          node.neighbors.forEach((neighbor) => highlightNodes.add(neighbor));
        }

        if (node.links && Array.isArray(node.links)) {
          node.links.forEach((link) => highlightLinks.add(link));
        }

        updateHighlight();
        return node;
      }
    }
    return null;
  };

  const updateHighlight = () => {
    if (graphRef.current) {
      graphRef.current
        .nodeThreeObject(graphRef.current.nodeThreeObject())
        .nodeColor(graphRef.current.nodeColor())
        .linkWidth(graphRef.current.linkWidth())
        .linkDirectionalParticles(graphRef.current.linkDirectionalParticles());
    }
  };

  useImperativeHandle(ref, () => ({
    zoomToID: (id) => {
      if (!graphRef.current) return null;

      const node = highlightID(id);
      if (node) {
        selectedNodeRef.current = node.id;
        
        const distance = 110;
        const nx = typeof node.x === 'number' && !isNaN(node.x) ? node.x : 0;
        const ny = typeof node.y === 'number' && !isNaN(node.y) ? node.y : 0;
        const nz = typeof node.z === 'number' && !isNaN(node.z) ? node.z : 0;

        const safeHypot = Math.hypot(nx, ny, nz) || 50;
        const distRatio = 1 + distance / safeHypot;

        const targetPosition = {
          x: nx * distRatio,
          y: ny * distRatio,
          z: nz * distRatio
        };
        
        graphRef.current.cameraPosition(
          targetPosition,
          { x: nx, y: ny, z: nz },
          1200
        );

        return node;
      }
      return null;
    },
    resetView: () => {
      if (graphRef.current) {
        currentHoverRef.current = null;
        selectedNodeRef.current = null;
        autoRotateRef.current = true;
        hoverNodes.clear();
        hoverLinks.clear();
        highlightNodes.clear();
        highlightLinks.clear();
        updateHighlight();

        graphRef.current.cameraPosition({ x: 0, y: 0, z: 380 }, { x: 0, y: 0, z: 0 }, 1200);
      }
    },
    toggleAutoRotate: (enable) => {
      autoRotateRef.current = enable;
    },
    setChargeStrength: (value) => {
      if (graphRef.current) {
        graphRef.current.d3Force('charge').strength(-value);
        graphRef.current.d3ReheatSimulation();
      }
    },
    expandGraph: () => {
      if (graphRef.current) {
        graphRef.current.d3Force('charge').strength(-550);
        graphRef.current.d3ReheatSimulation();
      }
    },
    contractGraph: () => {
      if (graphRef.current) {
        graphRef.current.d3Force('charge').strength(-180);
        graphRef.current.d3ReheatSimulation();
      }
    },
    getAllNodes: () => {
      if (graphRef.current) {
        const gData = graphRef.current.graphData();
        return gData ? gData.nodes : [];
      }
      return [];
    }
  }));

  // Generador de Nodos y Links Unificados para el CV Completo
  const buildCvGraphData = () => {
    const bio = bioData[lang] || bioData.es;
    const isEs = lang === 'es';
    
    // Degree Map
    const inDegreeMap = {};
    const outDegreeMap = {};

    cvPosts.forEach((post) => {
      if (post.related_posts && Array.isArray(post.related_posts)) {
        post.related_posts.forEach((relId) => {
          const numericId = typeof relId === 'string' ? parseInt(relId, 10) : relId;
          if (!isNaN(numericId)) {
            inDegreeMap[numericId] = (inDegreeMap[numericId] || 0) + 1;
            outDegreeMap[post.id] = (outDegreeMap[post.id] || 0) + 1;
          }
        });
      }
    });

    // 1. Nodo Bio / Central
    const bioNode = {
      id: 'hub-inicio',
      name: bio.name,
      title: bio.name,
      group: 'bio',
      type: 'bio',
      color: '#FF0000',
      val: 18,
      image: '/javier-abundis.webp',
      profile: bio.profile,
      introText: bio.introText,
      contactLinks: {
        email: bio.email,
        phone: bio.phone,
        scholar: bio.scholar,
        linkedin: bio.linkedin,
        github: bio.github
      }
    };

    // 2. Nodos Hubs de Categoría Principales vinculados a Ángel Javier Ramírez Abundis
    const hubNodes = [
      {
        id: 'hub-experiencia',
        name: isEs ? '★ Experiencia Laboral' : '★ Work Experience',
        title: isEs ? 'Experiencia Laboral' : 'Work Experience',
        group: 'hub',
        type: 'hub',
        color: '#111111',
        val: 16,
        image: '/screenshots/post_200.webp',
        abstract: isEs 
          ? 'Más de 7 años liderando el desarrollo web full-stack, la administración de servidores GNU/Linux y el análisis relacional de datos en agencias digitales de México, consultorías estratégicas e industrias internacionales en Canadá y EE. UU.' 
          : '7+ years leading full-stack web development, GNU/Linux server administration, and relational data analytics across digital agencies in Mexico, strategic consulting firms, and international operations in Canada and the US.',
        content: isEs 
          ? '<p>Trayectoria profesional híbrida que combina el desarrollo de software a la medida (React, Next.js, PHP, WordPress, WooCommerce, MySQL), la infraestructura de servidores y el trabajo operativo transnacional.</p><p>Ha colaborado como desarrollador y consultor en firmas como <em>Balam Studio</em>, <em>Uzu Digital</em>, <em>MONDO MARKETING</em> (Nagoya, Japón), <em>Nuvi Global</em> y <em>Atama Estrategia Creativa</em> (#GobiernoAbiertoJal), además de coordinar operaciones pesadas de manufactura y construcción en Canadá y EE. UU.</p>'
          : '<p>Hybrid professional background bridging custom software engineering (React, Next.js, PHP, WordPress, WooCommerce, MySQL), server infrastructure, and transnational operations.</p><p>Has served as web developer and tech consultant at agencies such as <em>Balam Studio</em>, <em>Uzu Digital</em>, <em>MONDO MARKETING</em> (Nagoya, Japan), <em>Nuvi Global</em>, and <em>Atama Strategy</em> (#GobiernoAbiertoJal), alongside leading heavy assembly logistics in Canada and the US.</p>'
      },
      {
        id: 'hub-proyectos',
        name: isEs ? '★ Proyectos & IA' : '★ Software & AI Projects',
        title: isEs ? 'Proyectos & IA' : 'Software & AI Projects',
        group: 'hub',
        type: 'hub',
        color: '#E60000',
        val: 16,
        image: '/screenshots/post_203.webp',
        abstract: isEs 
          ? 'Desarrollo de ecosistemas tecnológicos de código abierto, soberanía de datos y modelos de inteligencia artificial (Computer Vision / NLP) enfocados en responder a problemáticas sociales urgentes en México.' 
          : 'Architecting open-source software ecosystems, data sovereignty platforms, and applied artificial intelligence models (Computer Vision / NLP) designed to solve complex social issues.',
        content: isEs 
          ? '<p>Fundador de <strong>Tejer.RED</strong>, repositorio y plataforma de software libre orientada a la búsqueda e identificación de personas desaparecidas en México. Creador de la <em>Cartografía Semántica de Desapariciones</em> (DBSCAN), el <em>Sistema de Correlación de Tatuajes</em> (TF-IDF/Embeddings), la plataforma de periodismo <em>Las Prendas Hablan</em> (en alianza con Animal Político y ZonaDocs) y el bot de minería <em>idmb</em> en Python/TensorFlow para clasificación convolucional de imágenes (ResNet).</p>'
          : '<p>Founder of <strong>Tejer.RED</strong>, an open-source tech ecosystem empowering search collectives and forensic identification in Mexico. Creator of the <em>Semantic Cartography of Disappearances</em> (spatial DBSCAN clustering), the <em>Tattoo Correlation System</em> (TF-IDF/Embeddings), collaborative journalism platform <em>The Garments Speak</em> (partnered with Animal Político and ZonaDocs), and Python/TensorFlow data mining bot <em>idmb</em> for convolutional image classification (ResNet).</p>'
      },
      {
        id: 'hub-academia',
        name: isEs ? '★ Academia & Tesis' : '★ Academic & Thesis',
        title: isEs ? 'Academia & Tesis' : 'Academic & Thesis',
        group: 'hub',
        type: 'hub',
        color: '#222222',
        val: 16,
        image: '/screenshots/post_100.webp',
        abstract: isEs 
          ? 'Investigación pionera en ciencias sociales computacionales, sociohistoria de la comunicación y etnografía digital sobre comunidades participativas transnacionales y graffiti en Norteamérica.' 
          : 'Pioneering computational social science research, sociohistory of communication, and digital ethnography on transnational communities of practice and freight train graffiti in North America.',
        content: isEs 
          ? '<p>Maestro en Estudios de la Comunicación por la Universidad de Guadalajara (Becario de Excelencia CONACYT) y Licenciado en Sociología. Autor del estudio de maestría sobre <em>Graffiti en trenes de carga en Norteamérica (freight graffiti)</em> mediante minería de datos en Instagram, grafos complejos (SigmaJS/Graphology) y visión por computadora.</p><p>Ponente internacional en la conferencia europea <strong>FOSDEM 2024 (Bélgica)</strong> y <strong>ORDEM 2025</strong>. Publicaciones en revistas académicas indexadas en Ecuador, Portugal y México.</p>'
          : '<p>Master of Arts in Communication Studies from Universidad de Guadalajara (CONACYT Scholar) and Bachelor in Sociology. Author of the master thesis on <em>Freight train graffiti in North America</em> combining Instagram data mining, complex network graphs (SigmaJS/Graphology), and computer vision.</p><p>International speaker at Europe\'s leading open-source conference <strong>FOSDEM 2024 (Belgium)</strong> and <strong>ORDEM 2025</strong>. Peer-reviewed journal publications in Ecuador, Portugal, and Mexico.</p>'
      },
      {
        id: 'hub-prensa',
        name: isEs ? '★ Prensa & Medios' : '★ Press & Media',
        title: isEs ? 'Prensa & Medios' : 'Press & Media',
        group: 'hub',
        type: 'hub',
        color: '#FF3333',
        val: 14,
        image: '/screenshots/post_98.webp',
        abstract: isEs 
          ? 'Apariciones en medios periodísticos de investigación, portales nacionales e internacionales sobre soberanía tecnológica, investigación sociológica y herramientas digitales de búsqueda.' 
          : 'Press coverage, investigative journalism features, and media appearances highlighting open-source forensic technology, sociological research, and data sovereignty.',
        content: isEs 
          ? '<p>Cobertura periodística y menciones en medios nacionales e independientes como <em>Animal Político</em>, <em>ZonaDocs</em>, <em>A dónde van los desaparecidos</em>, <em>Gaceta UdeG</em>, <em>Líder Informativo</em>, <em>DH_BUDAPEST (Hungría)</em> y <em>El Occidental</em>.</p><p>Artículos sobre el impacto social de la plataforma <em>Tejer.RED</em>, la preservación del patrimonio urbano e investigaciones sobre subculturas juveniles tapatías.</p>'
          : '<p>Featured in national and international media outlets including <em>Animal Político</em>, <em>ZonaDocs</em>, <em>A dónde van los desaparecidos</em>, <em>UdeG Gazette</em>, <em>DH_BUDAPEST (Hungary)</em>, and <em>El Occidental</em>.</p><p>Articles highlighting the societal impact of <em>Tejer.RED</em>, urban culture preservation, and computational sociology methodology.</p>'
      },
      {
        id: 'hub-skills',
        name: isEs ? '★ Stack & Habilidades' : '★ Stack & Skills',
        title: isEs ? 'Stack & Habilidades' : 'Stack & Skills',
        group: 'hub',
        type: 'hub',
        color: '#D32F2F',
        val: 14,
        image: '/screenshots/post_204.webp',
        abstract: isEs 
          ? 'Dominio de lenguajes de programación, frameworks web, bibliotecas de ciencia de datos, aprendizaje automático (IA) y metodologías cualitativas/cuantitativas de ciencias sociales.' 
          : 'Comprehensive taxonomy of programming languages, web frameworks, data science libraries, applied machine learning, and qualitative/quantitative social research methods.',
        content: isEs 
          ? '<p>Stack técnico y metodológico integral que comprende <strong>Python</strong> (data mining, spaCy, TensorFlow, OpenCV, pandas), <strong>JavaScript / TypeScript</strong> (React, Next.js, Node.js), <strong>PHP & MySQL</strong> (WordPress custom architecture, WooCommerce), <strong>Visualización de Redes</strong> (Graphology, SigmaJS, ForceAtlas), <strong>Sistemas GIS</strong> (DBSCAN espacial, Leaflet) y <strong>Etnografía Digital / Sociohistoria</strong>.</p>'
          : '<p>Full technical and methodological stack encompassing <strong>Python</strong> (data mining, spaCy, TensorFlow, OpenCV, pandas), <strong>JavaScript / TypeScript</strong> (React, Next.js, Node.js), <strong>PHP & MySQL</strong> (WordPress custom architecture, WooCommerce), <strong>Network Graphing</strong> (Graphology, SigmaJS, ForceAtlas), <strong>GIS Systems</strong> (spatial DBSCAN, Leaflet), and <strong>Digital Ethnography / Sociohistory</strong>.</p>'
      }
    ];

    // 3. Nodos de Experiencia Laboral desde experienceData
    const expObj = experienceData[lang] || experienceData.es || { tech: [], social: [] };
    const allExpItems = [
      ...(expObj.tech || []).map((exp, idx) => ({ ...exp, catType: 'tech', idx })),
      ...(expObj.social || []).map((exp, idx) => ({ ...exp, catType: 'social', idx }))
    ];

    const expNodes = allExpItems.map((exp) => {
      const expId = `exp-${exp.catType}-${exp.idx}`;
      return {
        id: expId,
        name: `${exp.role} @ ${exp.company}`,
        title: exp.role,
        company: exp.company,
        period: exp.period,
        group: 'experience',
        type: 'experience',
        val: 6,
        abstract: exp.abstract || (exp.bullets ? exp.bullets.join('. ') : ''),
        bullets: exp.bullets || []
      };
    });

    // 4. Nodos de Publicaciones / Proyectos / Tesis desde cvPosts
    const postNodes = cvPosts.map((post) => {
      const pData = post[lang] || post.es || {};
      return {
        id: post.id,
        name: pData.title || String(post.id),
        title: pData.title,
        group: post.type || 'default',
        type: post.type || 'default',
        val: Math.max(4, (inDegreeMap[post.id] || 0) + (outDegreeMap[post.id] || 0) + 3),
        abstract: pData.abstract,
        content: pData.content,
        displayDate: pData.displayDate,
        citation: pData.citation,
        github_repo: post.github_repo,
        project_url: post.project_url,
        paper_url: post.paper_url,
        talk_url: post.talk_url,
        media_url: post.media_url,
        image: post.image,
        tags: post.tags
      };
    });

    // 5. Nodos de Habilidades Tecnológicas y Taxonomía desde TAG_DISPLAY_NAMES (Fuente de Verdad)
    const skillLabels = TAG_DISPLAY_NAMES[lang] || TAG_DISPLAY_NAMES.es;

    const skillNodes = [
      ...TAG_SCHEMA.metodo.map(m => ({ 
        id: `skill-${m}`, 
        tagKey: m,
        name: skillLabels[m] || `🛠️ ${m}`, 
        title: skillLabels[m] || m, 
        group: 'skill', 
        type: 'skill', 
        val: 7,
        abstract: isEs 
          ? `Habilidad metodológica y tecnológica aplicada en múltiples investigaciones, tesis y desarrollos de software.` 
          : `Methodological and technological skill applied across research papers, master thesis, and software systems.`
      })),
      ...TAG_SCHEMA.dominio.map(d => ({ 
        id: `skill-${d}`, 
        tagKey: d,
        name: skillLabels[d] || `🌐 ${d}`, 
        title: skillLabels[d] || d, 
        group: 'skill', 
        type: 'skill', 
        val: 7,
        abstract: isEs 
          ? `Dominio temático y línea de investigación especializada.` 
          : `Specialized domain of research and practice.`
      }))
    ];

    const nodes = [bioNode, ...hubNodes, ...expNodes, ...postNodes, ...skillNodes];

    // Generar Links (Conexiones de la Red)
    const links = [];

    // Bio -> Hubs
    hubNodes.forEach(hub => {
      links.push({ source: bioNode.id, target: hub.id, color: '#FF0000', value: 4 });
    });

    // Hub Experiencia -> Nodos Experiencia
    expNodes.forEach(exp => {
      links.push({ source: 'hub-experiencia', target: exp.id, color: '#111111', value: 3 });
    });

    // Hubs de Categoría -> Posts
    cvPosts.forEach(post => {
      let targetHub = null;
      if (post.type === 'work' || post.type === 'experience') {
        targetHub = 'hub-experiencia';
      } else if (post.type === 'codeProject' || post.type === 'multimediaProject' || post.type === 'multimedia') {
        targetHub = 'hub-proyectos';
      } else if (post.type === 'thesis' || post.type === 'paper' || post.type === 'conference' || post.type === 'articles' || post.type === 'talks') {
        targetHub = 'hub-academia';
      } else if (post.type === 'mediaAppearance') {
        targetHub = 'hub-prensa';
      } else if (post.type === 'blog') {
        targetHub = 'hub-inicio';
      }

      if (targetHub) {
        links.push({ source: targetHub, target: post.id, color: '#FF3333', value: 2 });
      }

      // Conectar posts con sus relacionados (related_posts)
      if (post.related_posts && Array.isArray(post.related_posts)) {
        post.related_posts.forEach(relId => {
          const numericId = typeof relId === 'string' ? parseInt(relId, 10) : relId;
          if (cvPosts.some(p => p.id === numericId)) {
            links.push({ source: post.id, target: numericId, color: '#D32F2F', value: 2 });
          }
        });
      }
    });

    // Hub Skills -> Skill Nodes
    skillNodes.forEach(sk => {
      links.push({ source: 'hub-skills', target: sk.id, color: '#D32F2F', value: 3 });
    });

    // =========================================================================
    // VINCULACIÓN DIRECTA DE STACK/HABILIDADES CON PROYECTOS, EXPERIENCIA Y ACADEMIA/TESIS
    // =========================================================================
    
    // Mapeo explicito de habilidades a puestos de Experiencia Laboral
    const expSkillMap = {
      'js-react-web': ['exp-tech-0', 'exp-tech-1', 'exp-tech-3', 'exp-tech-4', 'exp-tech-5'],
      'desarrollo-web-comercial': ['exp-tech-0', 'exp-tech-1', 'exp-tech-3', 'exp-tech-5'],
      'python-data': ['exp-tech-2'],
      'analisis-documental': ['exp-tech-2', 'exp-social-0'],
      'comunicacion-politica': ['exp-tech-4', 'exp-social-1'],
      'etnografia': ['exp-social-0', 'exp-social-1'],
      'audiovisual': ['exp-tech-3'],
      'construccion-manufactura': ['exp-tech-6']
    };

    skillNodes.forEach(skNode => {
      const key = skNode.tagKey;

      // 1. Vincular Habilidad -> Posts (Proyectos, Tesis, Publicaciones, Prensa)
      cvPosts.forEach(post => {
        const tags = post.tags || {};
        const metodoTags = Array.isArray(tags.metodo) ? tags.metodo : [tags.metodo];
        const dominioTags = Array.isArray(tags.dominio) ? tags.dominio : [tags.dominio];
        const allPostTags = [...metodoTags, ...dominioTags].filter(Boolean);

        // Coincidencia directa por tag
        let isMatch = allPostTags.includes(key);

        // Coincidencia secundaria por términos strictly específicos
        if (!isMatch) {
          const text = `${post.es?.title || ''} ${post.es?.abstract || ''}`.toLowerCase();
          if (key === 'ar-interactivo' && (text.includes('realidad aumentada') || text.includes('mindar') || text.includes('webxr') || text.includes('ar.js'))) isMatch = true;
          if (key === 'python-data' && (text.includes('python') || text.includes('minería de datos') || text.includes('pandas') || text.includes('spacy'))) isMatch = true;
          if (key === 'ml-vision' && (text.includes('resnet') || text.includes('roboflow') || text.includes('visión por computadora') || text.includes('computer vision'))) isMatch = true;
          if (key === 'nlp' && (text.includes('spacy') || text.includes('embeddings') || text.includes('tf-idf') || text.includes('procesamiento de lenguaje natural'))) isMatch = true;
          if (key === 'js-react-web' && (text.includes('react') || text.includes('next.js') || text.includes('graphology') || text.includes('sigmajs'))) isMatch = true;
          if (key === 'gis-espacial' && (text.includes('dbscan') || text.includes('cartografía semántica') || text.includes('geopandas'))) isMatch = true;
          if (key === 'etnografia' && (text.includes('etnografía') || text.includes('historias de vida'))) isMatch = true;
          if (key === 'analisis-documental' && (text.includes('amoxeh') || text.includes('voyant tools') || text.includes('análisis documental'))) isMatch = true;
          if (key === 'desapariciones-mx' && (text.includes('tejer.red') || text.includes('rancho izaguirre') || text.includes('las prendas hablan'))) isMatch = true;
          if (key === 'freight-graffiti' && (text.includes('freight') || text.includes('trenes de carga') || text.includes('trenes de mercancía') || text.includes('ferroviario') || text.includes('graffiti en tránsito'))) isMatch = true;
          if (key === 'graffiti-tapatio' && (text.includes('guadalajara') || text.includes('tapatío') || text.includes('amoxeh') || text.includes('ixaya'))) isMatch = true;
        }

        if (isMatch) {
          links.push({ source: skNode.id, target: post.id, color: '#D32F2F', value: 2 });
        }
      });

      // 2. Vincular Habilidad -> Puestos de Experiencia Laboral
      const targetExps = expSkillMap[key] || [];
      targetExps.forEach(expId => {
        if (expNodes.some(e => e.id === expId)) {
          links.push({ source: skNode.id, target: expId, color: '#D32F2F', value: 2 });
        }
      });
    });

    // Vincular Nodos entre sí (neighbors)
    links.forEach((link) => {
      const a = nodes.find((n) => n.id === link.source);
      const b = nodes.find((n) => n.id === link.target);
      if (a && b) {
        !a.neighbors && (a.neighbors = []);
        !b.neighbors && (b.neighbors = []);
        a.neighbors.push(b);
        b.neighbors.push(a);

        !a.links && (a.links = []);
        !b.links && (b.links = []);
        a.links.push(link);
        b.links.push(link);
      }
    });

    return { nodes, links };
  };

  useEffect(() => {
    if (!containerRef.current || isInitializedRef.current) return;
    isInitializedRef.current = true;

    let GraphInstance;

    const initGraph = async () => {
      const ForceGraph3D = (await import('3d-force-graph')).default;
      const THREE = await import('three');

      const graphData = buildCvGraphData();

      const createTextSprite = (text, color = '#111111', font = 'bold 22px Inter, sans-serif', 
        backgroundColor = 'rgba(255, 255, 255, 0.95)', opacity = 1.0, borderColor = '#333333') => {
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const textLines = wrapText(text, 22);
        context.font = font;
        const fontSize = parseInt(font.match(/\d+/)[0], 10);

        let maxLineWidth = 0;
        textLines.forEach(line => {
          const lineWidth = context.measureText(line).width;
          if (lineWidth > maxLineWidth) maxLineWidth = lineWidth;
        });

        const padding = 12;
        const lineHeight = fontSize * 1.3;
        canvas.width = maxLineWidth + padding * 2;
        canvas.height = (textLines.length * lineHeight) + padding * 2;

        context.font = font;
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.strokeStyle = borderColor;
        context.lineWidth = 3;
        context.strokeRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = color;
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        textLines.forEach((line, i) => {
          const x = canvas.width / 2;
          const y = padding + (i * lineHeight) + lineHeight / 2;
          context.fillText(line, x, y);
        });

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          opacity: opacity,
          depthWrite: false,
          depthTest: false,
          sizeAttenuation: false 
        });

        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.renderOrder = 100;
        const scaleFactor = 0.00065;
        sprite.scale.set(canvas.width * scaleFactor, canvas.height * scaleFactor, 1);

        return sprite;
      };

      const addLights = (scene) => {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(500, 500, 500);
        scene.add(directionalLight);
      };

      const Graph = ForceGraph3D();
      GraphInstance = Graph(containerRef.current)
        .width(window.innerWidth)
        .height(window.innerHeight)
        .graphData(graphData)
        .nodeLabel(node => `${node.name}`)
        .nodeColor(node => {
          if (selectedNodeRef.current === node.id) return '#FF0000';
          if (hoverNodes.has(node) || highlightNodes.has(node)) return '#FF0000';
          return node.color || nodeTypeColors[node.type] || nodeTypeColors.default;
        })
        .linkWidth(link => (hoverLinks.has(link) || highlightLinks.has(link) ? 2.8 : 0.7))
        .linkDirectionalParticles(link => (hoverLinks.has(link) || highlightLinks.has(link) ? 4 : 0))
        .linkDirectionalParticleSpeed(0.014)
        .linkDirectionalParticleWidth(2.0)
        .linkDirectionalParticleColor(() => '#FF0000')
        .linkColor(link => (hoverLinks.has(link) || highlightLinks.has(link) ? '#FF0000' : '#CCCCCC'))
        .backgroundColor('#FFFFFF')
        .cameraPosition({ x: 0, y: 0, z: 380 });

      // Configuración de fuerzas D3 para expandir y separar el grafo (Menor gravedad, mayor repulsión)
      Graph.d3Force('charge').strength(-350);
      Graph.d3Force('link').distance(link => {
        if (link.source.type === 'bio' || link.target.type === 'bio') return 140;
        if (link.source.type === 'hub' || link.target.type === 'hub') return 110;
        return 80;
      });

      Graph.nodeThreeObject(node => {
          const group = new THREE.Group();
          const isHub = node.type === 'hub' || node.type === 'bio';
          const isSelected = selectedNodeRef.current === node.id;
          const isHighlighted = hoverNodes.has(node) || highlightNodes.has(node) || isSelected;

          const sphereSize = Math.sqrt(node.val) * (isHub ? 3.5 : (isHighlighted ? 3.2 : 2.5)) + 2;
          let geometry;
          
          if (isHub) {
            geometry = new THREE.IcosahedronGeometry(sphereSize, 1);
          } else if (isHighlighted) {
            geometry = new THREE.SphereGeometry(sphereSize, 12, 12);
          } else {
            geometry = new THREE.BoxGeometry(sphereSize * 2, sphereSize * 2, sphereSize * 2);
          }
          
          const wireframe = new THREE.WireframeGeometry(geometry);
          const line = new THREE.LineSegments(wireframe);
          
          line.material.depthTest = true;
          line.material.opacity = isHub ? 0.95 : (isHighlighted ? 0.95 : 0.45);
          line.material.transparent = true;
          line.material.color = new THREE.Color(
            isHighlighted 
              ? '#FF0000' 
              : (isHub ? (node.color || '#FF0000') : nodeTypeColors[node.type] || nodeTypeColors.default)
          );
          
          group.add(line);
          
          const labelBg = isHub
            ? 'rgba(17, 17, 17, 0.96)'
            : (isHighlighted ? 'rgba(204, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)');

          const labelTextColor = (isHub || isHighlighted) ? '#FFFFFF' : '#111111';
          const labelBorderColor = isHighlighted ? '#FF0000' : '#333333';
          const labelOpacity = (isHub || isHighlighted) ? 1.0 : 0.35;

          const nameLabel = createTextSprite(
            node.name, 
            labelTextColor, 
            isHub ? 'bold 24px Inter, sans-serif' : 'bold 18px Inter, sans-serif', 
            labelBg, 
            labelOpacity, 
            labelBorderColor
          );
          nameLabel.position.set(0, sphereSize + (isHub ? 16 : 10), 0);
          nameLabel.visible = labelOpacity > 0.05;
          group.add(nameLabel);
          
          return group;
        })
        .onNodeHover(node => {
          if (!node) {
            currentHoverRef.current = null;
            hoverNodes.clear();
            hoverLinks.clear();
            updateHighlight();
            return;
          }

          currentHoverRef.current = node.id;
          hoverNodes.clear();
          hoverLinks.clear();
          hoverNodes.add(node);

          if (node.neighbors) {
            node.neighbors.forEach((neighbor) => hoverNodes.add(neighbor));
          }
          if (node.links) {
            node.links.forEach((link) => hoverLinks.add(link));
          }
          updateHighlight();
        })
        .onNodeClick(node => {
          const foundNode = highlightID(node.id);
          if (foundNode) {
            selectedNodeRef.current = foundNode.id;

            // Recorrer el grafo con vuelo animado de cámara 3D
            const distance = 110;
            const nx = typeof foundNode.x === 'number' && !isNaN(foundNode.x) ? foundNode.x : 0;
            const ny = typeof foundNode.y === 'number' && !isNaN(foundNode.y) ? foundNode.y : 0;
            const nz = typeof foundNode.z === 'number' && !isNaN(foundNode.z) ? foundNode.z : 0;

            const safeHypot = Math.hypot(nx, ny, nz) || 50;
            const distRatio = 1 + distance / safeHypot;

            Graph.cameraPosition(
              { x: nx * distRatio, y: ny * distRatio, z: nz * distRatio },
              { x: nx, y: ny, z: nz },
              1200
            );

            if (onNodeSelect) {
              onNodeSelect(foundNode);
            }
          }
        })
        .onBackgroundClick(() => {
          selectedNodeRef.current = null;
          currentHoverRef.current = null;
          autoRotateRef.current = true;
          hoverNodes.clear();
          hoverLinks.clear();
          highlightNodes.clear();
          highlightLinks.clear();
          updateHighlight();

          Graph.cameraPosition({ x: 0, y: 0, z: 380 }, { x: 0, y: 0, z: 0 }, 1200);

          if (onBackgroundClick) {
            onBackgroundClick();
          }
        })
        .enableNodeDrag(false)
        .enableNavigationControls(true);

      // Bucle de cámara trigonométrica matemática continua (Velocidad base ajustada al 70% ~ Math.PI / 785)
      const orbitDistance = 380;
      const animateCameraOrbit = () => {
        if (autoRotateRef.current && !selectedNodeRef.current && graphRef.current) {
          // En hover la rotación pasa a velocidad ultra-lenta (slow motion), normalmente gira al 70% de velocidad
          const speedStep = currentHoverRef.current ? (Math.PI / 6000) : (Math.PI / 785);
          angleRef.current += speedStep;
          graphRef.current.cameraPosition({
            x: orbitDistance * Math.sin(angleRef.current),
            z: orbitDistance * Math.cos(angleRef.current)
          });
        }
        requestAnimationFrame(animateCameraOrbit);
      };
      animateCameraOrbit();
        
      Graph.onEngineTick(() => {
        if (!Graph.scene()) return;
        if (!Graph.scene().userData.lightsAdded) {
          addLights(Graph.scene());
          Graph.scene().userData.lightsAdded = true;
        }
      });

      graphRef.current = Graph;
    };

    initGraph();

    const handleResize = () => {
      if (graphRef.current) {
        graphRef.current.width(window.innerWidth).height(window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filtrado visual por categorías
  useEffect(() => {
    if (!graphRef.current || activeFilter === 'all') return;

    const gData = graphRef.current.graphData();
    if (!gData || !gData.nodes) return;

    highlightNodes.clear();
    highlightLinks.clear();

    gData.nodes.forEach(node => {
      if (activeFilter === 'experience' && (node.type === 'experience' || node.id === 'hub-experiencia')) {
        highlightNodes.add(node);
      } else if (activeFilter === 'projects' && (node.type === 'codeProject' || node.type === 'multimediaProject' || node.type === 'multimedia' || node.id === 'hub-proyectos')) {
        highlightNodes.add(node);
      } else if (activeFilter === 'academia' && (node.type === 'thesis' || node.type === 'paper' || node.type === 'conference' || node.type === 'talks' || node.id === 'hub-academia')) {
        highlightNodes.add(node);
      } else if (activeFilter === 'media' && (node.type === 'mediaAppearance' || node.id === 'hub-prensa')) {
        highlightNodes.add(node);
      } else if (activeFilter === 'skills' && (node.type === 'skill' || node.id === 'hub-skills')) {
        highlightNodes.add(node);
      }
    });

    updateHighlight();
  }, [activeFilter]);

  return (
    <div 
      className="grafo-cv-canvas-container" 
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: '#FFFFFF'
      }}
    />
  );
});

GrafoCVNetwork.displayName = 'GrafoCVNetwork';

export default GrafoCVNetwork;
