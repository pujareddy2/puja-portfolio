import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect, useMemo } from "react";
import { PerspectiveCamera, OrbitControls, Float, Sphere, MeshDistortMaterial, Points, PointMaterial, Text } from "@react-three/drei";
import { EffectComposer, Vignette, Bloom, Noise, Glitch } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import * as THREE from "three";
import { Environment } from "./Environment";
import { NavModule } from "./NavModules";
import { RobotAssistant } from "./Robot";

const MODULES = [
  { label: "EXPERIENCE", angle: 0 },
  { label: "PROJECTS", angle: (Math.PI * 2) / 7 },
  { label: "SKILLS", angle: (Math.PI * 2 * 2) / 7 },
  { label: "ABOUT", angle: (Math.PI * 2 * 3) / 7 },
  { label: "ACHIEVEMENTS", angle: (Math.PI * 2 * 4) / 7 },
  { label: "CERTIFICATIONS", angle: (Math.PI * 2 * 5) / 7 },
  { label: "CONTACT", angle: (Math.PI * 2 * 6) / 7 },
];

function DataCore({ isHovered }: { isHovered: boolean }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.z = t * 0.1;
      const pulse = 1 + Math.sin(t * 2) * 0.02;
      coreRef.current.scale.setScalar(pulse);
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.5;
      innerRef.current.rotation.x = t * 0.2;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.3;
    if (ring3Ref.current) ring3Ref.current.rotation.y = t * 0.2;
  });

  return (
    <group position={[0, 2, 0]}>
      <group>
        {/* Outer Sphere - Solid White and Glowing */}
        <Sphere ref={coreRef} args={[3.5, 64, 64]}>
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.1}
            transparent
            opacity={0.8}
            emissive="#ffffff"
            emissiveIntensity={isHovered ? 2 : 0.5}
          />
        </Sphere>
        
        {/* Inner Geometric Core */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[2.2, 0]} />
          <meshStandardMaterial 
            color="#ffffff" 
            wireframe 
            emissive="#ffffff" 
            emissiveIntensity={isHovered ? 5 : 2}
            transparent
            opacity={1}
          />
        </mesh>

        {/* Core Glow */}
        <Sphere args={[1.5, 32, 32]}>
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff" 
            emissiveIntensity={isHovered ? 15 : 8} 
            transparent 
            opacity={0.4} 
          />
        </Sphere>

        {/* Floating HUD Labels in 3D - Bold and Bright White */}
        <group position={[0, 5, 0]}>
          <Text
            fontSize={0.35}
            color="#ffffff"
            fontWeight="bold"
            fillOpacity={0.9}
            anchorX="center"
            anchorY="middle"
          >
            SYSTEM CORE: ACTIVE
          </Text>
        </group>
        <group position={[0, -5, 0]}>
          <Text
            fontSize={0.25}
            color="#ffffff"
            fontWeight="bold"
            fillOpacity={0.7}
            anchorX="center"
            anchorY="middle"
          >
            CORE TEMP: 32.4°C | STABLE
          </Text>
        </group>
      </group>

      {/* Rotating Rings */}
      <group ref={ring1Ref}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[5, 0.01, 16, 100]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.3} emissive="#ffffff" emissiveIntensity={2} />
        </mesh>
      </group>
      <group ref={ring2Ref}>
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[6, 0.008, 16, 100]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.2} emissive="#ffffff" emissiveIntensity={1.5} />
        </mesh>
      </group>
      <group ref={ring3Ref}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[7, 0.005, 16, 100]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.1} emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </group>

      <pointLight intensity={isHovered ? 10 : 5} color="#ffffff" distance={30} />
    </group>
  );
}

function HolographicScan() {
  const scanRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (scanRef.current) {
      const t = state.clock.elapsedTime;
      scanRef.current.position.y = Math.sin(t * 0.5) * 10 + 2;
      const material = scanRef.current.material as THREE.MeshStandardMaterial;
      if (material) {
        material.opacity = (Math.sin(t * 0.5) + 1) * 0.1;
      }
    }
  });

  return (
    <mesh ref={scanRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 2, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.1} 
        emissive="#ffffff" 
        emissiveIntensity={2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function DotGrid() {
  const count = 20;
  const spacing = 4;
  const points = useMemo(() => {
    const p = new Float32Array(count * count * 3);
    let i = 0;
    for (let x = -count / 2; x < count / 2; x++) {
      for (let z = -count / 2; z < count / 2; z++) {
        p[i++] = x * spacing;
        p[i++] = -5;
        p[i++] = z * spacing;
      }
    }
    return p;
  }, []);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation={true}
        opacity={0.1}
        depthWrite={false}
      />
    </Points>
  );
}

function CameraRig({ activeModule, hoveredModule }: { activeModule: string | null, hoveredModule: string | null }) {
  const targetPos = useRef(new THREE.Vector3(150, 100, 150)); // Start even further for cinematic intro
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const dummy = useRef(new THREE.Object3D());
  const [introStage, setIntroStage] = useState(0); // 0: Far, 1: Fly-by, 2: Settled

  useEffect(() => {
    // Cinematic intro sequence
    const stage1 = setTimeout(() => setIntroStage(1), 100);
    const stage2 = setTimeout(() => setIntroStage(2), 1500);
    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
    };
  }, []);

  useEffect(() => {
    if (introStage < 2) {
      if (introStage === 1) {
        targetPos.current.set(0, 40, 60); // Mid-point fly-by
        targetLookAt.current.set(0, 2, 0);
      }
      return;
    }

    const focusModule = activeModule || hoveredModule;
    if (focusModule) {
      const module = MODULES.find(m => m.label === focusModule);
      if (module) {
        const radius = 18;
        const x = Math.cos(module.angle) * radius;
        const z = Math.sin(module.angle) * radius;
        const y = 4;
        
        if (activeModule) {
          targetPos.current.set(x * 1.6, y + 3, z * 1.6);
          targetLookAt.current.set(x, y, z);
        } else {
          targetPos.current.set(35 + x * 0.1, 25 + y * 0.1, 35 + z * 0.1);
          targetLookAt.current.set(x * 0.1, y * 0.1, z * 0.1);
        }
      }
    } else {
      targetPos.current.set(35, 25, 35);
      targetLookAt.current.set(0, 0, 0);
    }
  }, [activeModule, hoveredModule, introStage]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Smooth camera movement with variable lerp speed for cinematic feel
    const lerpSpeed = introStage === 1 ? 0.02 : 0.05;
    state.camera.position.lerp(targetPos.current, lerpSpeed);
    dummy.current.position.lerp(targetLookAt.current, 0.05);
    state.camera.lookAt(dummy.current.position);

    // Subtle cinematic camera noise/shake
    if (introStage === 2 && !activeModule) {
      state.camera.position.x += Math.sin(t * 0.5) * 0.015;
      state.camera.position.y += Math.cos(t * 0.3) * 0.015;
    }
  });

  return null;
}

function DataStreams({ hoveredModule, activeModule }: { hoveredModule: string | null, activeModule: string | null }) {
  const linesRef = useRef<THREE.Group>(null);
  const focusModule = activeModule || hoveredModule;

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial;
        if (material) {
          const module = MODULES[i];
          if (focusModule === module.label) {
            material.opacity = 0.8 + Math.sin(state.clock.elapsedTime * 10) * 0.2;
            material.color.set("#ffffff");
          } else {
            material.opacity = 0.1;
            material.color.set("#444444");
          }
        }
      });
    }
  });

  return (
    <group ref={linesRef}>
      {MODULES.map((module, i) => {
        const radius = 18;
        const x = Math.cos(module.angle) * radius;
        const z = Math.sin(module.angle) * radius;
        const points = [
          new THREE.Vector3(0, 2, 0),
          new THREE.Vector3(x, 4, z)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <group key={i}>
            <primitive 
              object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ transparent: true, opacity: 0.1, color: "#444444" }))} 
            />
            <DataPulse start={[0, 2, 0]} end={[x, 4, z]} delay={i * 0.5} />
          </group>
        );
      })}
    </group>
  );
}

function DataPulse({ start, end, delay }: { start: [number, number, number], end: [number, number, number], delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const startVec = useMemo(() => new THREE.Vector3(...start), [start]);
  const endVec = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame((state) => {
    if (meshRef.current) {
      const t = (state.clock.elapsedTime + delay) % 2 / 2;
      meshRef.current.position.lerpVectors(startVec, endVec, t);
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      if (material) {
        material.opacity = Math.sin(t * Math.PI) * 0.8;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={5} transparent opacity={0} />
    </mesh>
  );
}

function ModulesGroup({ 
  activeModule, 
  onModuleClick, 
  setHoveredModule, 
  hoveredModule 
}: { 
  activeModule: string | null, 
  onModuleClick: (label: string) => void, 
  setHoveredModule: (label: string | null) => void,
  hoveredModule: string | null
}) {
  const modulesGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modulesGroupRef.current && !activeModule) {
      modulesGroupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      <DataStreams hoveredModule={hoveredModule} activeModule={activeModule} />
      <group ref={modulesGroupRef}>
        {MODULES.map((module) => {
          const radius = 18;
          const x = Math.cos(module.angle) * radius;
          const z = Math.sin(module.angle) * radius;
          return (
            <NavModule
              key={module.label}
              label={module.label}
              position={[x, 4, z]}
              onClick={() => onModuleClick(module.label)}
              onHover={setHoveredModule}
              isActive={activeModule === module.label}
              isHovered={hoveredModule === module.label}
            />
          );
        })}
      </group>
    </group>
  );
}

function Starfield() {
  const count = 3000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 50 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.05}
        sizeAttenuation={true}
        opacity={0.4}
        depthWrite={false}
      />
    </Points>
  );
}

function DataCloud() {
  const count = 500;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  const cloudRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      cloudRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={cloudRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        opacity={0.15}
        depthWrite={false}
      />
    </Points>
  );
}

function MouseScanner() {
  const lineRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (lineRef.current) {
      const x = (state.mouse.x * viewport.width) / 2;
      const y = (state.mouse.y * viewport.height) / 2;
      lineRef.current.position.set(x, y, 0);
      
      // Make it look like a crosshair or scanning line
      lineRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={lineRef}>
        <ringGeometry args={[0.5, 0.52, 4]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.2} emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

export function Scene({ onModuleClick, activeModule }: { onModuleClick: (label: string) => void, activeModule: string | null }) {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (activeModule) {
      setIsGlitching(true);
      const timer = setTimeout(() => setIsGlitching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [activeModule]);

  return (
    <div className="w-full h-full bg-black">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[100, 80, 100]} fov={45} />
          <CameraRig activeModule={activeModule} hoveredModule={hoveredModule} />
          
          <Environment />
          <Starfield />
          <DataCloud />
          
          <DataCore isHovered={!!hoveredModule || !!activeModule} />
          <RobotAssistant activeModule={activeModule} hoveredModule={hoveredModule} />
          <MouseScanner />

          {/* Orbiting Navigation Modules */}
          <ModulesGroup 
            activeModule={activeModule} 
            onModuleClick={onModuleClick} 
            setHoveredModule={setHoveredModule} 
            hoveredModule={hoveredModule} 
          />

          <OrbitControls 
            enablePan={false} 
            maxPolarAngle={Math.PI / 2.2} 
            minDistance={20} 
            maxDistance={60}
            autoRotate={!activeModule}
            autoRotateSpeed={0.2}
          />

          <EffectComposer>
            <Bloom luminanceThreshold={1.5} intensity={0.5} radius={0.4} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <Noise opacity={0.02} />
            {isGlitching && <Glitch mode={GlitchMode.CONSTANT_WILD} delay={new THREE.Vector2(0, 0)} duration={new THREE.Vector2(0.1, 0.2)} strength={new THREE.Vector2(0.1, 0.3)} />}
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
