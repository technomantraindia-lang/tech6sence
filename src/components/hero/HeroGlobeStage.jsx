import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';


import BasicGlobe from './BasicGlobe';
import RealisticGlobe from './RealisticGlobe';



// React Error Boundary to handle fallback if WebGL or react-globe.gl crashes
class GlobeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("RealisticGlobe failed to render. Falling back to BasicGlobe:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function HeroGlobeStage() {
  const basicGlobeFallback = (
    <Canvas
      dpr={1}
      camera={{ position: [0, 0, 6.8], fov: 45 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <BasicGlobe />
      </Suspense>
    </Canvas>
  );

  const realisticGlobeCanvas = (
    <Canvas
      dpr={1}
      camera={{ position: [0, 0, 6.8], fov: 45 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <RealisticGlobe />
      </Suspense>
    </Canvas>
  );





  return (
    <div className="tech-hero-visual">
      {/* Radial glow backdrop */}
      <div className="th-globe-glow" />

      {/* Globe Container */}
      <div className="tech-globe-stage">
        <GlobeErrorBoundary fallback={basicGlobeFallback}>
          {realisticGlobeCanvas}
        </GlobeErrorBoundary>
      </div>
    </div>
  );
}
