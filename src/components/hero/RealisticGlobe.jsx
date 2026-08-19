import React, { useRef, useMemo, memo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { EARTH_GEO_CONFIG } from './heroData';

// Rotates the model so Americas/Atlantic face front at startup
const GLB_Y_ROTATION = Math.PI * 0.55;

const RealisticGlobe = memo(function RealisticGlobe({ disableRiseEffect }) {
  const globeGroupRef = useRef();
  const { scene } = useGLTF('/earth.glb');

  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const disableMarkers = params ? params.get('disableMarkers') === 'true' : false;

  const earthModel = useMemo(() => {
    const cloned = scene.clone();
    cloned.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        if (child.material) {
          child.material.precision = 'mediump';
          child.material.roughness = 0.88;
          child.material.metalness = 0.0;
          child.material.envMapIntensity = 0;
        }
      }
    });
    return cloned;
  }, [scene]);

  // Smooth continuous auto-rotation (Slow, elegant pace)
  useFrame((state) => {
    if (!globeGroupRef.current) return;
    // Rotation — starts offset so land faces viewer, slow & smooth spin
    globeGroupRef.current.rotation.y = GLB_Y_ROTATION + state.clock.getElapsedTime() * 0.06;
  });

  return (
    <group>
      {/* 1. Base Lighting — single soft sun */}
      <ambientLight intensity={1.8} />
      <directionalLight position={[6, 3, 10]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-6, -5, 4]} intensity={0.25} color="#6699ff" />
      
      {/* Earth group */}
      <group 
        ref={globeGroupRef} 
        position={[0, 0, 0]}
        rotation={[-0.18, 0, 0]}
      >
        <primitive
          object={earthModel}
          scale={[0.0036, 0.0036, 0.0036]}
          rotation={[0, GLB_Y_ROTATION, 0]}
        />
      </group>
    </group>
  );
});



const RealisticGlobeCanvas = memo(function RealisticGlobeCanvas({ disableRiseEffect }) {
  console.log("[Performance] RealisticGlobeCanvas rendered (should only happen ONCE)");
  const containerRef = useRef();
  const [inView, setInView] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance", logarithmicDepthBuffer: false }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <RealisticGlobe disableRiseEffect={disableRiseEffect} />
        </Suspense>
      </Canvas>
    </div>
  );
});

export default RealisticGlobeCanvas;

useGLTF.preload('/earth.glb');
