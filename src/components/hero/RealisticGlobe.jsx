import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import GlobeMarkers from './GlobeMarkers';
import { EARTH_MARKER_CONFIG } from './heroData';
import GlobeNetworkRoutes from './GlobeNetworkRoutes';

export default function RealisticGlobe({ activeIndex = 0 }) {
  const globeGroupRef = useRef();

  // Load the earth.glb model from the public directory
  const { scene } = useGLTF('/earth.glb');

  // Clone the scene for safety and ensure standard realistic materials
  const earthModel = useMemo(() => {
    const cloned = scene.clone();
    cloned.traverse((child) => {
      if (child.isMesh) {
        if (child.material) {
          child.material.roughness = 0.5;
          child.material.metalness = 0.1;
        }
      }
    });
    return cloned;
  }, [scene]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    // Slow, realistic auto-rotation of Earth, markers, and routes
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y = elapsed * 0.04;
    }
  });

  return (
    <group>
      {/* Lights - daylight conditions for realistic earth model */}
      <ambientLight intensity={1.8} />
      <directionalLight position={[10, 5, 10]} intensity={2.8} />
      <directionalLight position={[-10, -5, -10]} intensity={1.0} color="#8b5cf6" />
      
      {/* Spotlight for premium highlights */}
      <pointLight position={[5, 5, 5]} color="#3debff" intensity={2.5} distance={20} />
      <pointLight position={[-5, 5, -5]} color="#edbe55" intensity={1.5} distance={20} />

      {/* Main rotating globe & features */}
      <group ref={globeGroupRef}>
        {/* The realistic earth 3D model */}
        <primitive 
          object={earthModel} 
          scale={[0.0036, 0.0036, 0.0036]} 
          rotation={[0, -Math.PI / 1.7, 0]} // Rotate to center view initially
        />

        {/* Markers, routes, and bubbles in the same offset group as the Earth texture */}
        <group rotation={[
          EARTH_MARKER_CONFIG.rotationOffset.x,
          EARTH_MARKER_CONFIG.rotationOffset.y - Math.PI / 1.7,
          EARTH_MARKER_CONFIG.rotationOffset.z
        ]}>
          {/* Connector routes */}
          <GlobeNetworkRoutes />

          {/* Location pins and projected HTML cards */}
          <GlobeMarkers activeIndex={activeIndex} occludeRef={globeGroupRef} />
        </group>
      </group>
    </group>
  );
}

// Pre-preload model
useGLTF.preload('/earth.glb');
