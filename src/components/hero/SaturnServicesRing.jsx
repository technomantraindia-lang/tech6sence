import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { globalServicePoints } from './heroData';

export default function SaturnServicesRing({ onActiveChange }) {
  const ringGroupRef = useRef();
  const [localActiveIdx, setLocalActiveIdx] = useState(0);

  // Spacing out 8 points evenly along the 360-degree circle
  const nodes = useMemo(() => {
    const radius = 2.38; // Orbit radius slightly outside Earth (1.80)
    return globalServicePoints.map((pt, i) => {
      const angle = (i * 2 * Math.PI) / globalServicePoints.length;
      return {
        ...pt,
        angle,
        x: radius * Math.cos(angle),
        z: radius * Math.sin(angle),
        index: i
      };
    });
  }, []);

  useFrame((state) => {
    if (!ringGroupRef.current) return;

    const elapsed = state.clock.getElapsedTime();
    // Rotate the Saturn ring slowly
    const currentRotationY = elapsed * 0.12;
    ringGroupRef.current.rotation.y = currentRotationY;

    // Determine which node is closest to the camera (maximum Z position)
    let maxZ = -Infinity;
    let closestIdx = 0;

    nodes.forEach((node) => {
      // Calculate rotated angle of this node in world space
      const rotatedAngle = node.angle + currentRotationY;
      // Z coordinate (in R3F camera looks down negative Z, so max Z is closest to camera)
      // Since the group is tilted, Z position still correlates perfectly with camera proximity
      const worldZ = Math.sin(rotatedAngle); 
      
      if (worldZ > maxZ) {
        maxZ = worldZ;
        closestIdx = node.index;
      }
    });

    if (closestIdx !== localActiveIdx) {
      setLocalActiveIdx(closestIdx);
      if (onActiveChange) {
        onActiveChange(globalServicePoints[closestIdx]);
      }
    }
  });

  return (
    <group 
      ref={ringGroupRef}
      rotation={[0.38, 0, 0.22]} // Saturn-like diagonal orbit tilt
    >
      {/* 1. Outer Diffuse Glow Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.34, 2.42, 64]} />
        <meshBasicMaterial 
          color="#3debff" 
          transparent 
          opacity={0.08} 
          side={THREE.DoubleSide} 
        />
      </mesh>

      {/* 2. Core Orbit Line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.37, 2.39, 64]} />
        <meshBasicMaterial 
          color="#7c3aed" 
          transparent 
          opacity={0.24} 
          side={THREE.DoubleSide} 
        />
      </mesh>

      {/* 3. Orbiting Nodes (WebGL Sprites) */}
      {nodes.map((node) => {
        const isActive = node.index === localActiveIdx;
        return (
          <group key={node.id} position={[node.x, 0, node.z]}>
            {/* The core node sphere */}
            <mesh>
              <sphereGeometry args={[isActive ? 0.08 : 0.05, 16, 16]} />
              <meshBasicMaterial 
                color={isActive ? "#3debff" : node.color} 
                toneMapped={false}
              />
            </mesh>

            {/* Glowing Active Ring around the selected node */}
            {isActive && (
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.11, 0.13, 16]} />
                <meshBasicMaterial 
                  color="#3debff" 
                  transparent 
                  opacity={0.6} 
                  side={THREE.DoubleSide} 
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}
