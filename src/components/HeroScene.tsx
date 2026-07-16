import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sparkles, Torus } from "@react-three/drei";

/** Mouse-follow rig — eases the whole scene toward the pointer */
function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, state.pointer.y * 0.28, 2.4, delta);
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, state.pointer.x * 0.45, 2.4, delta);
    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, state.pointer.x * 0.35, 2, delta);
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, state.pointer.y * 0.22, 2, delta);
  });
  return <group ref={ref}>{children}</group>;
}

/** Slow perpetual spin of the core assembly */
function Spinner({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.16;
    ref.current.rotation.z += delta * 0.04;
  });
  return <group ref={ref}>{children}</group>;
}

function CoreBlob() {
  return (
    <Spinner>
      {/* liquid-metal core */}
      <Icosahedron args={[1.18, 32]}>
        <MeshDistortMaterial
          color="#17171f"
          metalness={0.95}
          roughness={0.18}
          distort={0.42}
          speed={2.1}
        />
      </Icosahedron>
      {/* wireframe shell */}
      <Icosahedron args={[1.52, 1]}>
        <meshBasicMaterial color="#c8ff3d" wireframe transparent opacity={0.16} />
      </Icosahedron>
      {/* inner accent shard */}
      <Icosahedron args={[0.42, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#c8ff3d" emissive="#c8ff3d" emissiveIntensity={0.55} metalness={0.4} roughness={0.3} />
      </Icosahedron>
    </Spinner>
  );
}

function OrbitRings() {
  return (
    <Spinner>
      <Torus args={[2.35, 0.008, 12, 160]} rotation={[Math.PI / 2.4, 0.35, 0]}>
        <meshBasicMaterial color="#c8ff3d" transparent opacity={0.5} />
      </Torus>
      <Torus args={[2.75, 0.005, 12, 160]} rotation={[-Math.PI / 2.1, -0.5, 0.4]}>
        <meshBasicMaterial color="#9d8cff" transparent opacity={0.42} />
      </Torus>
      <Torus args={[3.15, 0.0035, 12, 160]} rotation={[Math.PI / 1.7, 1.1, 0.2]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </Torus>
    </Spinner>
  );
}

function Satellites() {
  return (
    <>
      <Float speed={2.4} rotationIntensity={1.6} floatIntensity={1.6}>
        <mesh position={[2.35, 0.75, -0.4]}>
          <octahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial color="#c8ff3d" emissive="#c8ff3d" emissiveIntensity={0.5} metalness={0.7} roughness={0.25} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2.55, -0.55, 0.6]}>
          <boxGeometry args={[0.24, 0.24, 0.24]} />
          <meshStandardMaterial color="#9d8cff" emissive="#9d8cff" emissiveIntensity={0.45} metalness={0.7} roughness={0.25} />
        </mesh>
      </Float>
      <Float speed={1.3} rotationIntensity={1.4} floatIntensity={1.8}>
        <mesh position={[1.7, -1.55, -1.2]}>
          <torusKnotGeometry args={[0.13, 0.045, 64, 8]} />
          <meshStandardMaterial color="#e8e8f0" metalness={0.9} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh position={[-1.7, 1.55, -1.4]}>
          <tetrahedronGeometry args={[0.17, 0]} />
          <meshStandardMaterial color="#c8ff3d" emissive="#c8ff3d" emissiveIntensity={0.35} metalness={0.6} roughness={0.3} />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 6]} intensity={1.4} color="#ffffff" />
        <pointLight position={[5, 3, 4]} intensity={60} color="#c8ff3d" />
        <pointLight position={[-6, -3, -2]} intensity={55} color="#9d8cff" />
        <pointLight position={[0, -5, 4]} intensity={20} color="#4fd8ff" />

        <Rig>
          <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.9}>
            <CoreBlob />
          </Float>
          <OrbitRings />
          <Satellites />
        </Rig>

        <Sparkles count={130} scale={[11, 7, 6]} size={1.6} speed={0.35} color="#c8ff3d" opacity={0.55} />
        <Sparkles count={90} scale={[12, 8, 7]} size={1.1} speed={0.25} color="#9d8cff" opacity={0.5} />
      </Suspense>
    </Canvas>
  );
}
