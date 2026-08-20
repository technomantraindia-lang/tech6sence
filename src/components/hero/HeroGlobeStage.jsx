import React, { Suspense, useState } from 'react';
import BasicGlobeCanvas from './BasicGlobe';
import RealisticGlobeCanvas from './RealisticGlobe';
import OrbitServiceRing from './OrbitServiceRing';

// Cosmic glow placeholder — pulsing orb shown while globe model loads
function GlobePlaceholder() {
  return (
    <div className="globe-placeholder">
      <div className="globe-placeholder-core" />
      <div className="globe-placeholder-ring globe-placeholder-ring-1" />
      <div className="globe-placeholder-ring globe-placeholder-ring-2" />
      <div className="globe-placeholder-ring globe-placeholder-ring-3" />
    </div>
  );
}

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
  const [globeReady, setGlobeReady] = useState(false);

  return (
    <div className="tech-hero-visual">
      {/* Radial glow backdrop */}
      <div className="th-globe-glow" />
      
      {/* Cosmic placeholder — visible until real globe is ready */}
      <div 
        className="tech-globe-stage" 
        style={{ 
          opacity: globeReady ? 0 : 1, 
          transition: 'opacity 0.6s ease-out',
          pointerEvents: globeReady ? 'none' : 'auto'
        }}
      >
        <GlobePlaceholder />
      </div>

      {/* 3D Earth Stage (clipped to circle) — fades in on top */}
      <div 
        className="tech-globe-stage" 
        style={{ 
          opacity: globeReady ? 1 : 0, 
          transition: 'opacity 0.8s ease-in' 
        }}
      >
        <GlobeErrorBoundary fallback={<BasicGlobeCanvas />}>
          <Suspense fallback={null}>
            <RealisticGlobeCanvas onReady={() => setGlobeReady(true)} />
          </Suspense>
        </GlobeErrorBoundary>
      </div>

      {/* CSS 3D Orbiting Service Cards — rendered OUTSIDE the clipped globe stage */}
      <OrbitServiceRing />
    </div>
  );
}
