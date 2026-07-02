// src/components/hero/BasicGlobe.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function BasicGlobe() {
  const globeRef = useRef();
  const atmosphereRef = useRef();

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    // Rotate the fallback globe at the same speed
    if (globeRef.current) {
      globeRef.current.rotation.y = elapsed * 0.12;
    }

    // Subtle atmosphere pulse
    if (atmosphereRef.current) {
      const pulse = 1.0 + Math.sin(elapsed * 1.5) * 0.01;
      atmosphereRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group>
      {/* 1. Base Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} color="#3DEBFF" intensity={1.8} />
      <directionalLight position={[-5, -5, -5]} color="#8B5CF6" intensity={1.2} />
      
      {/* 2. Main Rotating Globe Group */}
      <group ref={globeRef}>
        {/* Core sphere */}
        <mesh>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial
            color="#050914"
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>
      </group>

      {/* 3. Atmosphere Rim Glow Spheres */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.92, 32, 32]} />
        <meshBasicMaterial
          color="#3DEBFF"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[1.94, 32, 32]} />
        <meshBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

