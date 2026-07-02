import React, { useRef, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import GlobeMarkers from './GlobeMarkers';
import { EARTH_GEO_CONFIG } from './heroData';

const GLB_Y_ROTATION = -Math.PI / 1.7;

const RealisticGlobe = memo(function RealisticGlobe() {
  const globeGroupRef = useRef();
  const { scene } = useGLTF('/earth.glb');

  const earthModel = useMemo(() => {
    const cloned = scene.clone();
    cloned.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        if (child.material) {
          child.material.roughness = 0.6;
          child.material.metalness = 0.15;
          child.material.precision = "mediump"; // Lower shader precision for better GPU performance
        }
      }
    });
    return cloned;
  }, [scene]);

  const currentY = useRef(-3.0);

  useFrame((state) => {
    if (!globeGroupRef.current) return;
    
    // Smooth, responsive rise-from-bottom entrance effect
    currentY.current += (0 - currentY.current) * 0.22;
    globeGroupRef.current.position.y = currentY.current;

    globeGroupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
  });

  return (
    <group>
      {/* Optimized lighting using directional lights instead of point lights */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 5, 10]} intensity={2.5} />
      <directionalLight position={[-10, 5, -10]} intensity={1.0} color="#3debff" />
      <directionalLight position={[0, -10, 0]} intensity={0.8} color="#8b5cf6" />

      {/* Set initial values to prevent single-frame flashing on mount */}
      <group 
        ref={globeGroupRef} 
        position={[0, -3.0, 0]}
      >
        <primitive
          object={earthModel}
          scale={[0.0036, 0.0036, 0.0036]}
          rotation={[0, GLB_Y_ROTATION, 0]}
        />
        
        {/* Render markers inside the rotating group to rotate with Earth.
            We apply the calibration rotation offset Y (Math.PI / 1.18) to align 
            the 3D coordinate system with the baked-in texture. */}
        <group 
          rotation={[
            EARTH_GEO_CONFIG.rotationOffset.x,
            GLB_Y_ROTATION + EARTH_GEO_CONFIG.rotationOffset.y,
            EARTH_GEO_CONFIG.rotationOffset.z
          ]}
        >
          <GlobeMarkers />
        </group>
      </group>
    </group>
  );
});



export default RealisticGlobe;

useGLTF.preload('/earth.glb');
