const smokeTexture = new THREE.TextureLoader().load(
  "https://threejs.org/examples/textures/sprites/smoke.png"
);

const  SmokeSystem = ({ count = 400 })  => {
  const pointsRef = useRef();

  // Inicializar partículas
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          Math.random() * 5,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          Math.random() * 0.03 + 0.005,
          (Math.random() - 0.5) * 0.02
        ),
        alpha: Math.random() * 0.5 + 0.5,
        scale: Math.random() * 1.5 + 0.5,
      });
    }
    return arr;
  }, [count]);

  // Geometry con atributos personalizados
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const alphas = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = particles[i].position.x;
      positions[i * 3 + 1] = particles[i].position.y;
      positions[i * 3 + 2] = particles[i].position.z;
      alphas[i] = particles[i].alpha;
      sizes[i] = particles[i].scale;
    }

    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    g.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    return g;
  }, [particles, count]);

  // ShaderMaterial para manejar alpha por partícula
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        map: { value: smokeTexture },
      },
      vertexShader: `
        attribute float alpha;
        attribute float size;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(map, gl_PointCoord);
          gl_FragColor = vec4(tex.rgb, tex.a * vAlpha * 0.9);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      color: 0x004080, // Tono azul oscuro
    });
  }, []);

  // Animación: se ejecuta en cada frame
  useFrame(() => {
    if (!pointsRef.current) return;
    
    // Accede a los arrays de atributos
    const positions = pointsRef.current.geometry.attributes.position.array;
    const alphas = pointsRef.current.geometry.attributes.alpha.array;

    particles.forEach((p, i) => {
      p.position.add(p.velocity);

      // Desvanece
      p.alpha -= 0.0005;
      if (p.alpha <= 0 || p.position.y > 5) {
        // Reinicia la partícula en la base
        p.position.set(
          (Math.random() - 0.5) * 10,
          -1, 
          (Math.random() - 0.5) * 5
        );
        p.alpha = Math.random() * 0.5 + 0.5;
        // Nueva velocidad de ascenso
        p.velocity.set(
          (Math.random() - 0.5) * 0.01,
          Math.random() * 0.03 + 0.005,
          (Math.random() - 0.5) * 0.01
        );
      }

      positions[i * 3] = p.position.x;
      positions[i * 3 + 1] = p.position.y;
      positions[i * 3 + 2] = p.position.z;
      alphas[i] = p.alpha;
    });

    // Marca la geometría para actualización
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.alpha.needsUpdate = true;
  });

  return (
    <points
      ref={pointsRef}
      geometry={geometry}
      material={material}
      position={[0, -2, 0]} // Posición inicial
    />
  );
}

function SmokeEffect() {
  return (
    <div
      className="absolute inset-0 z-0 hidden md:block" // Ocultar en móviles para mejor rendimiento
      style={{
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <ambientLight intensity={0.5} color="#00ffff" />
        <pointLight position={[0, 5, 10]} intensity={1.5} color="#66ccff" />
        <SmokeSystem />
      </Canvas>
    </div>
  );
}

export default SmokeEffect;