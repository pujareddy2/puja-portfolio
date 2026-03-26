import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

interface NavModuleProps {
  label: string;
  position: [number, number, number];
  onClick: (label: string) => void;
  isActive: boolean;
  isHovered: boolean;
  onHover: (label: string | null) => void;
}

import { soundManager } from "../../lib/sound";

export function NavModule({ label, position, onClick, isActive, isHovered, onHover }: NavModuleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const frameMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
  const edgeMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      
      // Scale logic with camera proximity
      const dist = groupRef.current.position.distanceTo(state.camera.position);
      const proximityScale = THREE.MathUtils.clamp(1 - (dist - 20) / 40, 0.8, 1.2);
      const targetScale = (isActive ? 1.25 : isHovered ? 1.15 : 1) * proximityScale;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.2;

      // Pulsing effect for materials
      const pulse = Math.sin(t * 3) * 0.1 + 0.9;
      
      if (frameMaterialRef.current) {
        frameMaterialRef.current.opacity = (isActive ? 0.3 : isHovered ? 0.2 : 0.08) * pulse;
        // Color shift based on active state
        frameMaterialRef.current.color.lerp(new THREE.Color(isActive ? "#e0e0ff" : "#ffffff"), 0.1);
      }
      
      if (edgeMaterialRef.current) {
        edgeMaterialRef.current.opacity = (isActive ? 1 : isHovered ? 0.9 : 0.5) * pulse;
        edgeMaterialRef.current.color.lerp(new THREE.Color(isActive ? "#ffffff" : isHovered ? "#ffffff" : "#888888"), 0.1);
      }

      if (textRef.current) {
        textRef.current.fillOpacity = (isActive ? 1 : isHovered ? 1 : 0.8) * pulse;
      }
    }
  });

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    soundManager.play('HOVER', 0.2);
    onHover(label);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    soundManager.play('CLICK');
    onClick(label);
  };

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={() => onHover(null)}
      onClick={handleClick}
    >
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Sleek Minimalist Frame */}
        <mesh>
          <boxGeometry args={[6, 3, 0.1]} />
          <meshStandardMaterial 
            ref={frameMaterialRef}
            color="#ffffff" 
            transparent 
            opacity={0.08} 
            metalness={1}
            roughness={0}
          />
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(6, 3, 0.1)]} />
            <lineBasicMaterial 
              ref={edgeMaterialRef}
              color="#ffffff" 
              transparent
              opacity={0.5}
            />
          </lineSegments>
        </mesh>

        {/* Label Text - Bright White and Bold */}
        <Text
          ref={textRef}
          position={[0, 0, 0.2]}
          fontSize={0.6}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight={800}
          letterSpacing={0.2}
          maxWidth={5.5}
          textAlign="center"
        >
          {label}
        </Text>

        {/* Subtle Glow on Hover */}
        {isHovered && (
          <mesh position={[0, 0, -0.1]}>
            <planeGeometry args={[6.5, 3.5]} />
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.05} 
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        )}
      </Float>
    </group>
  );
}
