import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';
import { experienceData } from '../data/cvData';
import { getSectionConfig } from '../utils/sectionConfig';
import useIsMobile from '../utils/useIsMobile';

const NetworkGraphComponent = forwardRef(({ 
  posts, 
  lang = 'es', 
  onNodeNavigate,
  cameraDurationMs = 1600,
  hoverDelayMs = 350,
  zoomFactor = 0.07
}, ref) => {
  const containerRef = useRef(null);
  const graphRef = useRef(null);
  const isMobile = useIsMobile();

  const [highlightNodes] = useState(new Set());
  const [highlightLinks] = useState(new Set());
  const [hoverNodes] = useState(new Set());
  const [hoverLinks] = useState(new Set());
  const currentHoverRef = useRef(null);
  const lastHoveredIdRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const hoverDelayTimerRef = useRef(null);
  const isInitializedRef = useRef(false);
  const onNodeNavigateRef = useRef(onNodeNavigate);
  const cameraDurationRef = useRef(cameraDurationMs);
  const hoverDelayRef = useRef(hoverDelayMs);
  const zoomFactorRef = useRef(zoomFactor);

  useEffect(() => {
    onNodeNavigateRef.current = onNodeNavigate;
    cameraDurationRef.current = cameraDurationMs;
    hoverDelayRef.current = hoverDelayMs;
    zoomFactorRef.current = zoomFactor;
  }, [onNodeNavigate, cameraDurationMs, hoverDelayMs, zoomFactor]);

  // Color mapping for node types (Paleta Blanco, Negro y Rojo)
  const nodeTypeColors = {
    hub: '#FF0000',            // Rojo para nodos hub
    blog: '#222222',           // Negro grafito
    conference: '#CC0000',     // Rojo oscuro
    codeProject: '#111111',    // Negro puro
    paper: '#E60000',          // Rojo carmesí
    multimediaProject: '#FF3333', // Rojo vibrante
    mediaAppearance: '#333333',   // Gris carbón
    thesis: '#FF0000',         // Rojo vivo
    default: '#555555',        // Gris medio
  };

  const wrapText = (text, maxCharsPerLine = 20) => {
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
      const node = graphData.nodes.find((n) => n.id === id);

      if (node) {
        highlightNodes.clear();
        highlightLinks.clear();

        highlightNodes.add(node);
        if (node.neighbors) {
          node.neighbors.forEach((neighbor) => highlightNodes.add(neighbor));
        }

        if (node.links) {
          node.links.forEach((link) => highlightLinks.add(link));
        }

        updateHighlight();
      } else {
        console.error(`Node with id ${id} not found.`);
      }
    }
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
    applyEffect: () => {
      if (graphRef.current) {
        graphRef.current
          .nodeColor(node => {
            return node.type === 'thesis' ? '#FF0000' : nodeTypeColors[node.type] || nodeTypeColors.default;
          })
          .linkWidth(link => {
            return link.color === '#FF0000' ? 4 : 1;
          });
      }
    },
    setCameraPosition: (x, y, z) => {
      if (graphRef.current) {
        graphRef.current.cameraPosition({ x, y, z }, { x: 0, y: 0, z: 0 }, 1000);
      }
    },
    rotateGraph: (angle) => {
      if (graphRef.current) {
        const controls = graphRef.current.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = angle;
      }
    },
    resizeGraph: (width, height) => {
      if (graphRef.current) {
        graphRef.current.width(width).height(height);
      }
    },
    resetToHomeView: () => {
      if (graphRef.current) {
        currentHoverRef.current = null;
        lastHoveredIdRef.current = null;
        hoverNodes.clear();
        hoverLinks.clear();
        highlightNodes.clear();
        highlightLinks.clear();
        updateHighlight();

        graphRef.current.cameraPosition({ x: 0, y: 0, z: 350 }, { x: 0, y: 0, z: 0 }, 1000);

        const controls = graphRef.current.controls();
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = 1.2;
        }
      }
    },
    zoomToFit: () => {
      if (graphRef.current) {
        graphRef.current.zoomToFit(1000, 50);
      }
    },
    zoomToID: (id) => {
      if (graphRef.current) {
        const graphData = graphRef.current.graphData();
        const node = graphData.nodes.find((n) => n.id === id);
        
        if (node) {
          highlightID(id);
          
          const distance = 120; // Aumentar distancia para visualización óptima
          const distRatio = 1 + distance / Math.hypot(node.x || 1, node.y || 1, node.z || 1);
    
          const targetPosition = {
            x: (node.x || 0) * distRatio,
            y: (node.y || 0) * distRatio,
            z: (node.z || 0) * distRatio
          };
    
          let animationFrameId;
          
          graphRef.current.cameraPosition(
            targetPosition,
            node,
            1000,
            () => {
              let angle = Math.atan2(
                graphRef.current.camera().position.z - node.z, 
                graphRef.current.camera().position.x - node.x
              );
              
              const radius = Math.hypot(
                graphRef.current.camera().position.x - node.x,
                graphRef.current.camera().position.z - node.z
              );
              
              const orbitY = graphRef.current.camera().position.y;
              
              const orbitAnimation = () => {
                angle += 0.005; // Ajustar velocidad de órbita suave
                
                const newX = node.x + radius * Math.cos(angle);
                const newZ = node.z + radius * Math.sin(angle);
                const newY = orbitY + Math.sin(angle * 2) * 5; // Bobbing suave
                
                graphRef.current.cameraPosition(
                  { x: newX, y: newY, z: newZ },
                  node,
                  0
                );
                
                animationFrameId = requestAnimationFrame(orbitAnimation);
              };
              
              animationFrameId = requestAnimationFrame(orbitAnimation);
              graphRef.current.__orbitAnimationId = animationFrameId;
            }
          );
          
          return () => {
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
            } 
            if (graphRef.current?.__orbitAnimationId) {
              cancelAnimationFrame(graphRef.current.__orbitAnimationId);
            }
          };
        }
      }
    },
    highlightIDCall: (id) => {
      if (id === 99999999) {
        highlightNodes.clear();
        highlightLinks.clear();
        hoverNodes.clear();
        hoverLinks.clear();
        currentHoverRef.current = null;
        graphRef.current.zoomToFit(1000, 50);
      } else {
        if (!graphRef.current) return;
        const graphData = graphRef.current.graphData();
        const node = graphData.nodes.find((n) => n.id === id);
        if (node) {
          highlightNodes.clear();
          highlightLinks.clear();
          highlightID(node.id);
        }
      }      
    },
  }));

  const generateGraphData = (postsList) => {
    const inDegreeMap = {};
    const outDegreeMap = {};

    postsList.forEach((post) => {
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

    // Nodos Hub principales para cada sección (Paleta Blanco, Negro y Rojo)
    const hubNodes = [
      {
        id: 'hub-inicio',
        name: 'Javier Abundis',
        group: 'hub',
        type: 'hub',
        sectionId: 'inicio',
        svgPath: getSectionConfig('inicio')?.svgPath,
        color: getSectionConfig('inicio')?.color || '#FF0000',
        val: 16
      },
      {
        id: 'hub-experiencia',
        name: lang === 'es' ? 'Experiencia' : 'Experience',
        group: 'hub',
        type: 'hub',
        sectionId: 'experiencia',
        svgPath: getSectionConfig('experiencia')?.svgPath,
        color: getSectionConfig('experiencia')?.color || '#111111',
        val: 14
      },
      {
        id: 'hub-proyectos',
        name: lang === 'es' ? 'Proyectos' : 'Projects',
        group: 'hub',
        type: 'hub',
        sectionId: 'proyectos',
        svgPath: getSectionConfig('proyectos')?.svgPath,
        color: getSectionConfig('proyectos')?.color || '#E60000',
        val: 14
      },
      {
        id: 'hub-academia',
        name: lang === 'es' ? 'Academia' : 'Academy',
        group: 'hub',
        type: 'hub',
        sectionId: 'academia',
        svgPath: getSectionConfig('academia')?.svgPath,
        color: getSectionConfig('academia')?.color || '#222222',
        val: 14
      },
      {
        id: 'hub-prensa',
        name: lang === 'es' ? 'Prensa' : 'Media',
        group: 'hub',
        type: 'hub',
        sectionId: 'prensa',
        svgPath: getSectionConfig('prensa')?.svgPath,
        color: getSectionConfig('prensa')?.color || '#FF3333',
        val: 12
      }
    ];

    const postNodes = postsList.map((post) => {
      const tData = post[lang] || post['es'] || {};
      return {
        id: post.id,
        name: tData.title || String(post.id),
        group: post.type || 'default',
        val: Math.max(1, (inDegreeMap[post.id] || 0) + (outDegreeMap[post.id] || 0)),
        type: post.type || 'default',
      };
    });

    // Extraer y sintetizar nodos de Experiencia Profesional desde experienceData
    const expDataObj = experienceData[lang] || experienceData['es'] || { tech: [], social: [] };
    const allExpItems = [
      ...(expDataObj.tech || []).map((exp, idx) => ({ ...exp, catType: 'tech', idx })),
      ...(expDataObj.social || []).map((exp, idx) => ({ ...exp, catType: 'social', idx }))
    ];

    const expNodes = allExpItems.map((exp) => {
      const expId = `exp-${exp.catType}-${exp.idx}`;
      return {
        id: expId,
        name: `${exp.role} @ ${exp.company}`,
        group: 'experience',
        type: 'experience',
        val: 4,
        period: exp.period
      };
    });

    const nodes = [...hubNodes, ...postNodes, ...expNodes];

    const links = postsList.flatMap((post) => {
      if (!post.related_posts || !Array.isArray(post.related_posts)) return [];

      return post.related_posts
        .filter((relId) => {
          const numericId = typeof relId === 'string' ? parseInt(relId, 10) : relId;
          return !isNaN(numericId) && postsList.some((p) => p.id === numericId);
        })
        .map((relId) => {
          const numericId = typeof relId === 'string' ? parseInt(relId, 10) : relId;
          return {
            source: post.id,
            target: numericId,
            color: '#4285F4',
            value: 3,
          };
        });
    });

    // Enlazar nodos Hub centrales entre sí y con los posts de su categoría
    hubNodes.forEach(hub => {
      if (hub.id !== 'hub-inicio') {
        links.push({ source: 'hub-inicio', target: hub.id, color: '#FF0000', value: 5 });
      }
    });

    // Enlazar cada nodo de experiencia con hub-experiencia
    expNodes.forEach(expNode => {
      links.push({ source: 'hub-experiencia', target: expNode.id, color: '#111111', value: 3 });
    });

    postsList.forEach(post => {
      let targetHub = null;
      if (post.type === 'work' || post.type === 'experience') {
        targetHub = 'hub-experiencia';
      } else if (post.type === 'codeProject' || post.type === 'multimediaProject') {
        targetHub = 'hub-proyectos';
      } else if (post.type === 'thesis' || post.type === 'paper' || post.type === 'conference') {
        targetHub = 'hub-academia';
      } else if (post.type === 'mediaAppearance') {
        targetHub = 'hub-prensa';
      }

      if (targetHub) {
        links.push({ source: targetHub, target: post.id, color: '#FF3333', value: 2 });
      }
    });

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
    if (!containerRef.current || !posts || posts.length === 0) return;
    if (isInitializedRef.current || graphRef.current) return;

    isInitializedRef.current = true;
    let GraphInstance;

    const initGraph = async () => {
      const ForceGraph3D = (await import('3d-force-graph')).default;
      const THREE = await import('three');

      const graphData = generateGraphData(posts);

      const createTextSprite = (text, color = '#000000', font = 'bold 24px Arial', 
        backgroundColor = 'rgba(255, 255, 255, 0.95)', 
        opacity = 1.0, renderOrder = 100, svgPath = null, borderColor = '#333333') => {
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const textLines = wrapText(text, 25);
        context.font = font;
        const fontSize = parseInt(font.match(/\d+/)[0], 10);

        let maxLineWidth = 0;
        textLines.forEach(line => {
          const lineWidth = context.measureText(line).width;
          if (lineWidth > maxLineWidth) maxLineWidth = lineWidth;
        });

        const padding = 12;
        const iconSize = svgPath ? fontSize * 0.9 : 0;
        const iconGap = svgPath ? 10 : 0;
        const contentWidth = maxLineWidth + iconSize + iconGap;

        const lineHeight = fontSize * 1.3;
        canvas.width = contentWidth + padding * 2;
        canvas.height = (textLines.length * lineHeight) + padding * 2;

        context.font = font;
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.strokeStyle = borderColor;
        context.lineWidth = borderColor !== '#333333' ? 3 : 2;
        context.strokeRect(0, 0, canvas.width, canvas.height);

        // Dibujar icono vectorial plano (Path2D) si existe
        if (svgPath && typeof Path2D !== 'undefined') {
          try {
            const path2d = new Path2D(svgPath);
            const scale = iconSize / 512;
            const startX = padding;
            const startY = padding + (lineHeight - iconSize) / 2;

            context.save();
            context.translate(startX, startY);
            context.scale(scale, scale);
            context.fillStyle = color;
            context.fill(path2d);
            context.restore();
          } catch (e) {
            console.error('Error rendering SVG icon path on node canvas', e);
          }
        }

        context.fillStyle = color;
        context.textAlign = svgPath ? 'left' : 'center';
        context.textBaseline = 'middle';

        textLines.forEach((line, i) => {
          const x = svgPath ? (padding + iconSize + iconGap) : (canvas.width / 2);
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
        sprite.renderOrder = renderOrder;

        const scaleFactor = 0.0006;
        sprite.scale.set(canvas.width * scaleFactor, canvas.height * scaleFactor, 1);

        return sprite;
      };

      const addLights = (scene) => {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(500, 500, 500);
        scene.add(directionalLight);
      };

      const Graph = ForceGraph3D();
      GraphInstance = Graph(containerRef.current)
        .width(window.innerWidth)
        .height(window.innerHeight)
        .graphData(graphData)
        .nodeLabel((node) => `${node.name}`)
        .nodeColor((node) => {
          if (currentHoverRef.current === node.id) return '#111111';
          if (hoverNodes.has(node) || highlightNodes.has(node)) return '#FF0000';
          return node.color || nodeTypeColors[node.type] || nodeTypeColors.default;
        })
        .linkWidth((link) => (hoverLinks.has(link) || highlightLinks.has(link) ? 2.5 : 0.6))
        .linkDirectionalParticles((link) => (hoverLinks.has(link) || highlightLinks.has(link) ? 4 : 0))
        .linkDirectionalParticleSpeed(0.012)
        .linkDirectionalParticleWidth(1.8)
        .linkDirectionalParticleColor(() => '#FF0000')
        .linkColor((link) => (hoverLinks.has(link) || highlightLinks.has(link) ? '#FF0000' : '#CCCCCC'))
        .backgroundColor('#FFFFFF')
        .cameraPosition({ x: 0, y: 0, z: 350 })
        .nodeThreeObject((node) => {
          const group = new THREE.Group();
          const isHub = node.type === 'hub';
          const isDirectHover = currentHoverRef.current === node.id;
          const isNeighborHover = hoverNodes.has(node);
          const isHighlighted = isNeighborHover || highlightNodes.has(node);
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
            isDirectHover
              ? '#111111'
              : (isHighlighted 
                ? '#FF0000' 
                : (isHub ? (node.color || '#FF0000') : nodeTypeColors[node.type] || nodeTypeColors.default))
          );
          
          group.add(line);
          
          const initialSpriteOpacity = (isHub || isHighlighted) ? 1.0 : 0.0;
          const labelBg = isHub
            ? 'rgba(17, 17, 17, 0.96)'
            : (isHighlighted ? 'rgba(204, 0, 0, 0.95)' : 'rgba(36, 35, 35, 0.9)');

          const labelBorderColor = (isHub && isHighlighted)
            ? '#FF0000'
            : '#333333';

          const nameLabel = createTextSprite(
            node.name, 
            '#FFFFFF', 
            isHub ? 'bold 26px Poppins, Arial' : 'bold 20px Poppins, Arial', 
            labelBg, 
            initialSpriteOpacity, 
            100,
            node.svgPath,
            labelBorderColor
          );
          nameLabel.position.set(0, sphereSize + (isHub ? 18 : 12), 0);
          nameLabel.visible = initialSpriteOpacity > 0.01;
          group.add(nameLabel);
          
          return group;
        })
        .onNodeHover(node => {
          if (isAnimatingRef.current) return;

          if (!node) {
            if (hoverDelayTimerRef.current) {
              clearTimeout(hoverDelayTimerRef.current);
              hoverDelayTimerRef.current = null;
            }
            return;
          }

          const nodeId = node.id;
          currentHoverRef.current = nodeId;

          // 1. Respuesta visual de iluminación instantánea en tarjetas/nodos
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

          // 2. Acercamiento suave de cámara parametrizado con retardo fluido
          if (nodeId !== lastHoveredIdRef.current) {
            if (hoverDelayTimerRef.current) {
              clearTimeout(hoverDelayTimerRef.current);
            }

            hoverDelayTimerRef.current = setTimeout(() => {
              if (!graphRef.current) return;
              lastHoveredIdRef.current = nodeId;

              const cam = graphRef.current.camera();
              if (cam) {
                const currentPos = cam.position;
                const dx = node.x - currentPos.x;
                const dy = node.y - currentPos.y;
                const dz = node.z - currentPos.z;
                const dist = Math.hypot(dx, dy, dz);

                if (dist > 80) {
                  const factor = zoomFactorRef.current;
                  const targetX = currentPos.x + dx * factor;
                  const targetY = currentPos.y + dy * factor;
                  const targetZ = currentPos.z + dz * factor;

                  graphRef.current.cameraPosition(
                    { x: targetX, y: targetY, z: targetZ },
                    { x: node.x, y: node.y, z: node.z },
                    cameraDurationRef.current
                  );
                }
              }
            }, hoverDelayRef.current);
          }
        })
        .onNodeClick(node => {
          highlightID(node.id);

          const navigate = onNodeNavigateRef.current;
          if (navigate) {
            if (node.type === 'hub' && node.sectionId) {
              navigate(node.sectionId, null);
            } else if (node.type === 'work' || node.type === 'experience') {
              navigate('experiencia', node.id);
            } else if (node.type === 'codeProject' || node.type === 'multimediaProject') {
              navigate('proyectos', node.id);
            } else if (node.type === 'thesis' || node.type === 'paper' || node.type === 'conference') {
              navigate('academia', node.id);
            } else if (node.type === 'mediaAppearance') {
              navigate('prensa', node.id);
            } else {
              navigate('inicio', node.id);
            }
          }
        })
        .enableNodeDrag(false)
        .enableNavigationControls(false);

      const isMobileViewport = window.innerWidth < 768;
      Graph.enablePointerInteraction(!isMobileViewport);
      if (isMobileViewport) {
        Graph.cooldownTicks(30);
      }

      let autoRotateFrameId = null;

      const controls = Graph.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = isMobileViewport ? 1.0 : 2.0;
        if (isMobileViewport) {
          controls.enableZoom = false;
          controls.enableRotate = false;
          controls.enablePan = false;
        }

        const animateRotation = () => {
          if (controls) {
            if (controls.autoRotate) {
              controls.update();
            }

            // Interpolación de fundido progresivo (Fade-In / Fade-Out) en cada frame
            const gData = Graph.graphData();
            if (gData && gData.nodes) {
              gData.nodes.forEach((n) => {
                const obj = n.__threeObj;
                if (obj && obj.children && obj.children.length > 0) {
                  const isHub = n.type === 'hub';
                  const isDirectHover = currentHoverRef.current === n.id;
                  const isNeighborHover = hoverNodes.has(n);
                  const isHighlighted = isNeighborHover || highlightNodes.has(n);

                  const targetLineOp = isHub ? 0.95 : (isHighlighted ? 0.95 : 0.35);
                  const targetSpriteOp = (isHub || isHighlighted) ? 1.0 : 0.0;

                  const line = obj.children[0];
                  const sprite = obj.children[1];

                  if (line && line.material) {
                    line.material.opacity = THREE.MathUtils.lerp(
                      line.material.opacity,
                      targetLineOp,
                      0.08
                    );
                  }

                  if (sprite && sprite.material) {
                    sprite.material.opacity = THREE.MathUtils.lerp(
                      sprite.material.opacity,
                      targetSpriteOp,
                      0.08
                    );
                    sprite.visible = sprite.material.opacity > 0.01;
                  }
                }
              });
            }

            if (Graph.resumeAnimation) {
              Graph.resumeAnimation();
            }
            autoRotateFrameId = requestAnimationFrame(animateRotation);
          }
        };
        animateRotation();
      }
        
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
        const isMob = window.innerWidth < 768;
        graphRef.current.width(window.innerWidth).height(window.innerHeight);
        graphRef.current.enablePointerInteraction(!isMob);
        const ctrls = graphRef.current.controls();
        if (ctrls) {
          ctrls.enableZoom = !isMob;
          ctrls.enableRotate = !isMob;
          ctrls.enablePan = !isMob;
        }
      }
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div
      className="networkGraph"
      ref={containerRef}
      style={{ 
        width: '100%', 
        height: '100%',
        pointerEvents: 'none',
        touchAction: 'none'
      }}
    />
  );
});

NetworkGraphComponent.displayName = 'NetworkGraphComponent';

export default NetworkGraphComponent;
