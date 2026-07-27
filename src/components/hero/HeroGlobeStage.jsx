import React, { Suspense } from 'react';
import BasicGlobeCanvas from './BasicGlobe';
import RealisticGlobeCanvas from './RealisticGlobe';
import OrbitServiceRing from './OrbitServiceRing';

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
  return (
    <div className="tech-hero-visual">
      {/* Radial glow backdrop */}
      <div className="th-globe-glow" />
      
      {/* 3D Earth Stage (clipped to circle) */}
      <div className="tech-globe-stage">
        <GlobeErrorBoundary fallback={<BasicGlobeCanvas />}>
          <Suspense fallback={null}>
            <RealisticGlobeCanvas />
          </Suspense>
        </GlobeErrorBoundary>
      </div>

      {/* CSS 3D Orbiting Service Cards — rendered OUTSIDE the clipped globe stage */}
      <OrbitServiceRing />
    </div>
  );
}
