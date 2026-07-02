import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function BasicGlobe() {
  const globeRef = useRef();
  const wireframeRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const atmosphereRef = useRef();

  // Generate random data points on the globe surface
  const surfacePoints = useMemo(() => {
    const points = [];
    const count = 15;
    const r = 1.805; // Slightly larger than sphere radius 1.8

    for (let i = 0; i < count; i++) {
      // Generate random spherical coordinates
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * 2 * Math.PI;

      const x = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.cos(theta);

      // Assign a random color from the premium palette
      const colors = ['#3DEBFF', '#8B5CF6', '#EDBE55'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      points.push({ x, y, z, color, size: 0.02 + Math.random() * 0.025 });
    }
    return points;
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    // Rotate the main globe slowly
    if (globeRef.current) {
      globeRef.current.rotation.y = elapsed * 0.05;
    }

    // Rotate surface wireframe slightly faster/differently for parallax
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = elapsed * 0.06;
      wireframeRef.current.rotation.x = elapsed * 0.02;
    }

    // Rotate orbit rings in different directions
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = elapsed * 0.08;
      ring1Ref.current.rotation.y = elapsed * 0.05;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -elapsed * 0.09;
      ring2Ref.current.rotation.z = elapsed * 0.06;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -elapsed * 0.04;
      ring3Ref.current.rotation.z = -elapsed * 0.07;
    }

    // Subtle atmosphere pulse
    if (atmosphereRef.current) {
      const pulse = 1.0 + Math.sin(elapsed * 1.5) * 0.015;
      atmosphereRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group>
      {/* 1. Base Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} color="#3DEBFF" intensity={1.8} />
      <directionalLight position={[-5, -5, -5]} color="#8B5CF6" intensity={1.2} />
      
      {/* Warm accent point light for premium highlight */}
      <pointLight position={[2, 2, 4]} color="#EDBE55" intensity={2.5} distance={15} decay={2} />

      {/* 2. Main Rotating Globe Group */}
      <group ref={globeRef}>
        {/* Core sphere */}
        <mesh>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial
            color="#07111F"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Neural Network Grid overlay */}
        <mesh ref={wireframeRef}>
          <sphereGeometry args={[1.81, 32, 32]} />
          <meshBasicMaterial
            color="#8B5CF6"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>

        {/* Surface data node markers */}
        {surfacePoints.map((pt, i) => (
          <mesh key={i} position={[pt.x, pt.y, pt.z]}>
            <sphereGeometry args={[pt.size, 8, 8]} />
            <meshBasicMaterial 
              color={pt.color} 
              transparent 
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* 3. Atmosphere Rim Glow Spheres */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.92, 32, 32]} />
        <meshBasicMaterial
          color="#3DEBFF"
          transparent
          opacity={0.055}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[1.94, 32, 32]} />
        <meshBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.035}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>

      {/* 4. Elegant Orbit Rings */}
      <group ref={ring1Ref}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.3, 0.007, 8, 100]} />
          <meshBasicMaterial color="#3DEBFF" transparent opacity={0.35} />
        </mesh>
      </group>

      <group ref={ring2Ref}>
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.5, 0.005, 8, 100]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.25} />
        </mesh>
      </group>

      <group ref={ring3Ref}>
        <mesh rotation={[-Math.PI / 6, 0, Math.PI / 3]}>
          <torusGeometry args={[2.7, 0.006, 8, 100]} />
          <meshBasicMaterial color="#EDBE55" transparent opacity={0.2} />
        </mesh>
      </group>
    </group>
  );
}
