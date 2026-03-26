import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";

export function AICore({ isActive }: { isActive: boolean }) {
  const coreRef = useRef<THREE.Group>(null);
  const crystalRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 4000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (coreRef.current) {
      const targetY = isActive ? 25 : Math.sin(t * 0.5) * 0.5 + 3;
      coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, targetY, 0.05);
      // Main core rotation (Clockwise)
      coreRef.current.rotation.y = t * 0.2;
    }

    if (crystalRef.current) {
      crystalRef.current.rotation.z = t * 0.8;
      crystalRef.current.rotation.x = t * 0.5;
      const scale = 1.2 + Math.sin(t * 3) * 0.15;
      crystalRef.current.scale.setScalar(scale);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.6;
      ring1Ref.current.rotation.y = t * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = t * 0.5;
      ring2Ref.current.rotation.x = -t * 0.4;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = -t * 0.8;
      ring3Ref.current.rotation.z = t * 0.2;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Central Core - High Detail */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={crystalRef}>
          <icosahedronGeometry args={[1.5, 2]} />
          <MeshDistortMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={4}
            distort={0.6}
            speed={4}
            roughness={0}
            metalness={1}
            transparent
            opacity={0.95}
          />
        </mesh>
        
        {/* Inner Core Sphere - Pulsing Light */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff" 
            emissiveIntensity={15} 
            transparent 
            opacity={0.9} 
          />
        </mesh>

        {/* Complex Ring System */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[3, 0.04, 16, 100]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={5} />
        </mesh>
        <mesh ref={ring2Ref}>
          <torusGeometry args={[3.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#2E5BFF" emissive="#2E5BFF" emissiveIntensity={4} />
        </mesh>
        <mesh ref={ring3Ref}>
          <torusGeometry args={[4.5, 0.01, 16, 100]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} transparent opacity={0.6} />
        </mesh>

        {/* Vertical Data Streams */}
        {[...Array(12)].map((_, i) => (
          <mesh key={i} rotation={[0, (i * Math.PI) / 6, 0]} position={[0, 0, 0]}>
            <cylinderGeometry args={[0.005, 0.005, 12, 8]} />
            <meshBasicMaterial color="#00E5FF" transparent opacity={0.15} />
          </mesh>
        ))}
      </Float>

      {/* Data Cloud - High Density */}
      <Points ref={particlesRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#00F3FF"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7}
        />
      </Points>

      {/* High Intensity Energy Column */}
      <mesh position={[0, -15, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 30, 32]} />
        <meshStandardMaterial 
          color="#00E5FF" 
          emissive="#00E5FF" 
          emissiveIntensity={25} 
          transparent 
          opacity={0.5} 
        />
      </mesh>

      {/* Ground Reflection Flare - Larger */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.95, 0]}>
        <circleGeometry args={[12, 64]} />
        <meshBasicMaterial 
          color="#00E5FF" 
          transparent 
          opacity={0.08} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <pointLight color="#00E5FF" intensity={20} distance={30} />
      <spotLight 
        position={[0, 15, 0]} 
        angle={0.4} 
        penumbra={1} 
        intensity={30} 
        color="#ffffff" 
        castShadow 
      />
    </group>
  );
}
