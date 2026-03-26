import { Stars } from "@react-three/drei";

export function Environment() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      
      {/* Deep Space Starfield */}
      <Stars 
        radius={150} 
        depth={60} 
        count={7000} 
        factor={5} 
        saturation={0} 
        fade 
        speed={0.5} 
      />

      {/* Professional Neutral Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[20, 20, 20]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-20, -20, -20]} intensity={0.5} color="#ffffff" />
      
      {/* Subtle Depth Fog */}
      <fog attach="fog" args={["#000000", 40, 120]} />
    </>
  );
}
