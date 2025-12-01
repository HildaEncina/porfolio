
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo } from "react";

const Lanyard = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["#0A192F"]} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}

const Particles = () => {
  const ref = useRef();
  const count = 5000;

  // Genera posiciones aleatorias para las partículas
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  // Movimiento del mouse
  const mouse = useRef({ x: 0, y: 0 });
  window.addEventListener("mousemove", (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  useFrame(() => {
    if (ref.current) {
      const time = performance.now() * 0.001;
      const positions = ref.current.geometry.attributes.position.array;
      for (let i = 0; i < count * 3; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.002; 
      }
      ref.current.rotation.y = time * 0.02 + mouse.current.x * 0.2;
      ref.current.rotation.x = time * 0.02 + mouse.current.y * 0.1;
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00ffff"
        size={0.03}
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default Lanyard;