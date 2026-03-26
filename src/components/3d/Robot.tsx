import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Float, Sphere } from "@react-three/drei";

interface RobotAssistantProps {
  activeModule: string | null;
  hoveredModule: string | null;
}

export function RobotAssistant({ activeModule, hoveredModule }: RobotAssistantProps) {
  const robotRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const headRef = useRef<THREE.Group>(null);
  const eyeRef = useRef<THREE.Mesh>(null);

  const targetPos = useRef(new THREE.Vector3(14, 6, 0));
  const focusPoint = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (robotRef.current) {
      // Idle floating behavior
      const idleX = Math.sin(t * 0.4) * 14;
      const idleZ = Math.cos(t * 0.4) * 14;
      const idleY = 6 + Math.sin(t * 1.2) * 1.5;

      // React to active/hovered module
      if (activeModule || hoveredModule) {
        // Move closer to the center or the module? 
        // Let's just make it more "alert"
        targetPos.current.set(idleX * 0.8, idleY + 2, idleZ * 0.8);
        focusPoint.current.set(0, 2, 0); // Focus on the core
      } else {
        targetPos.current.set(idleX, idleY, idleZ);
        focusPoint.current.set(0, 0, 0);
      }

      robotRef.current.position.lerp(targetPos.current, 0.05);
      
      // Look at focus point
      robotRef.current.lookAt(focusPoint.current);
      
      // Add some "expressive" tilt
      robotRef.current.rotation.z += Math.sin(t * 2) * 0.05;
    }

    if (headRef.current) {
      // Subtle head bobbing
      headRef.current.position.y = Math.sin(t * 4) * 0.02;
      // Scanning movement
      headRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }

    if (eyeRef.current) {
      // Eye pulsing
      const eyePulse = 10 + Math.sin(t * 10) * 5;
      const material = eyeRef.current.material as THREE.MeshStandardMaterial;
      if (material) material.emissiveIntensity = eyePulse;
    }

    if (spotLightRef.current && robotRef.current) {
      spotLightRef.current.target = robotRef.current;
    }
  });

  return (
    <group>
      <spotLight
        ref={spotLightRef}
        position={[0, 30, 0]}
        angle={0.2}
        penumbra={0.5}
        intensity={30}
        color="#00E5FF"
        castShadow
      />

      <group ref={robotRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {/* Main Chassis */}
          <group ref={headRef}>
            <mesh castShadow>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial 
                color="#050505" 
                metalness={1} 
                roughness={0.05} 
                envMapIntensity={3}
              />
            </mesh>
            
            {/* Glowing Decorative Rings */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.6, 0.03, 16, 100]} />
              <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={5} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[0.6, 0.01, 16, 100]} />
              <meshStandardMaterial color="#2E5BFF" emissive="#2E5BFF" emissiveIntensity={3} />
            </mesh>

            {/* Advanced Sensor Eye */}
            <group position={[0, 0.15, 0.4]}>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
                <meshStandardMaterial color="#000" metalness={1} roughness={0} />
              </mesh>
              <mesh ref={eyeRef} position={[0, 0, 0.06]}>
                <circleGeometry args={[0.15, 32]} />
                <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={15} />
              </mesh>
              <mesh position={[0, 0, 0.07]}>
                <circleGeometry args={[0.05, 32]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
            </group>
          </group>

          {/* Thruster Array */}
          <group position={[0, -0.5, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.05, 0.3, 32]} />
              <meshStandardMaterial color="#111" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.12, 0, 0.4, 32]} />
              <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={10} transparent opacity={0.7} />
            </mesh>
          </group>

          {/* Side Antennas */}
          <mesh position={[0.4, 0.3, 0]} rotation={[0, 0, -0.5]}>
            <cylinderGeometry args={[0.01, 0.01, 0.6]} />
            <meshStandardMaterial color="#333" />
            <mesh position={[0, 0.3, 0]}>
              <sphereGeometry args={[0.03]} />
              <meshBasicMaterial color="#00E5FF" />
            </mesh>
          </mesh>
          <mesh position={[-0.4, 0.3, 0]} rotation={[0, 0, 0.5]}>
            <cylinderGeometry args={[0.01, 0.01, 0.6]} />
            <meshStandardMaterial color="#333" />
            <mesh position={[0, 0.3, 0]}>
              <sphereGeometry args={[0.03]} />
              <meshBasicMaterial color="#00E5FF" />
            </mesh>
          </mesh>

          <pointLight ref={lightRef} color="#00E5FF" intensity={20} distance={12} />
        </Float>
      </group>
    </group>
  );
}
