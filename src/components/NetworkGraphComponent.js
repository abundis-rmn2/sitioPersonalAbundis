import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';

const NetworkGraphComponent = forwardRef(({ posts, lang = 'es' }, ref) => {
  const containerRef = useRef(null);
  const graphRef = useRef(null);

  const [highlightNodes] = useState(new Set());
  const [highlightLinks] = useState(new Set());

  // Color mapping for node types
  const nodeTypeColors = {
    blog: '#663399',          // Púrpura para posts
    conference: '#FFA500',    // Naranja para charlas
    codeProject: '#008080',   // Cerceta para proyectos de código
    paper: '#1E90FF',         // Azul para artículos
    multimediaProject: '#FF1493', // Rosa para multimedia
    mediaAppearance: '#32CD32',   // Verde lima para prensa
    thesis: '#FF0000',        // Rojo para tesis
    default: '#808080',       // Gris por defecto
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
            return node.type === 'thesis' ? '#FF5733' : nodeTypeColors[node.type] || nodeTypeColors.default;
          })
          .linkWidth(link => {
            return link.color === '#4285F4' ? 4 : 1;
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

    const nodes = postsList.map((post) => {
      const tData = post[lang] || post['es'] || {};
      return {
        id: post.id,
        name: tData.title || String(post.id),
        group: post.type || 'default',
        val: Math.max(1, (inDegreeMap[post.id] || 0) + (outDegreeMap[post.id] || 0)),
        type: post.type || 'default',
      };
    });

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

    let GraphInstance;

    const initGraph = async () => {
      const ForceGraph3D = (await import('3d-force-graph')).default;
      const THREE = await import('three');

      const graphData = generateGraphData(posts);

      const createTextSprite = (text, color = '#000000', font = 'bold 24px Arial', 
        backgroundColor = 'rgba(255, 255, 255, 0.95)', 
        opacity = 1.0, renderOrder = 100) => {
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const textLines = wrapText(text, 25);
        context.font = font;
        const fontSize = parseInt(font.match(/\d+/)[0], 10);

        let maxWidth = 0;
        textLines.forEach(line => {
          const lineWidth = context.measureText(line).width;
          if (lineWidth > maxWidth) maxWidth = lineWidth;
        });

        const padding = 12;
        const lineHeight = fontSize * 1.3;
        canvas.width = maxWidth + padding * 2;
        canvas.height = (textLines.length * lineHeight) + padding * 2;

        context.font = font;
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.strokeStyle = '#333333';
        context.lineWidth = 2;
        context.strokeRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = color;
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        textLines.forEach((line, i) => {
          const y = padding + (i * lineHeight) + lineHeight / 2;
          context.fillText(line, canvas.width / 2, y);
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
        .nodeColor((node) => highlightNodes.has(node) ? '#FFFF00' : nodeTypeColors[node.type] || nodeTypeColors.default)
        .linkWidth((link) => (highlightLinks.has(link) ? 1.5 : 0.5))
        .linkDirectionalParticles((link) => (highlightLinks.has(link) ? 2 : 0))
        .linkDirectionalParticleSpeed(0.008)
        .linkDirectionalParticleWidth(1.2)
        .linkDirectionalParticleColor(() => '#FF6666')
        .linkColor((link) => (highlightLinks.has(link) ? '#888888' : '#D3D3D3'))
        .backgroundColor('#FFFFFF')
        .cameraPosition({ x: 0, y: 0, z: 350 })
        .nodeThreeObject((node) => {
          const group = new THREE.Group();
          const sphereSize = Math.sqrt(node.val) * 2.5 + 2;
          let geometry;
          
          if (highlightNodes.has(node)) {
            geometry = new THREE.SphereGeometry(sphereSize, 12, 12);
          } else {
            geometry = new THREE.BoxGeometry(sphereSize * 2, sphereSize * 2, sphereSize * 2);
          }
          
          const wireframe = new THREE.WireframeGeometry(geometry);
          const line = new THREE.LineSegments(wireframe);
          
          line.material.depthTest = true;
          line.material.opacity = highlightNodes.has(node) ? 0.9 : 0.5;
          line.material.transparent = true;
          line.material.color = new THREE.Color(
            highlightNodes.has(node) 
              ? '#FF6666' 
              : nodeTypeColors[node.type] || nodeTypeColors.default
          );
          
          group.add(line);
          
          if (highlightNodes.has(node)) {
            const nameLabel = createTextSprite(
              node.name, 
              '#FFFFFF', 
              'bold 22px Poppins, Arial', 
              'rgba(36, 35, 35, 0.9)', 
              1, 
              100
            );
            nameLabel.position.set(0, sphereSize + 15, 0);
            group.add(nameLabel);
          }
          
          return group;
        })
        .onNodeClick(node => {
          if (highlightNodes.has(node)) {
            highlightNodes.clear();
            highlightLinks.clear();
            updateHighlight();
          } else {
            highlightID(node.id);
          }
        })
        .enableNodeDrag(false)
        .enableNavigationControls(true)
        .enablePointerInteraction(true);
        
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
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (GraphInstance) {
        GraphInstance._destructor();
      }
    };
  }, [posts]);
  
  return (
    <div
      className="networkGraph"
      ref={containerRef}
      style={{ width: '100%', height: '100%' }}
    />
  );
});

NetworkGraphComponent.displayName = 'NetworkGraphComponent';

export default NetworkGraphComponent;
