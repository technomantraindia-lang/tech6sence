import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { keyLocations, globalNetworkRoutes, EARTH_MARKER_CONFIG, latLngToVector3 } from './heroData';

// Traveling pulse component moving slowly and smoothly along a route curve
function RoutePulse({ curve, delay = 0 }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const elapsed = clock.getElapsedTime();
    // Slow and smooth traversing (speed factor 0.1)
    const t = ((elapsed * 0.1) + delay) % 1.0;
    const pos = curve.getPointAt(t);
    meshRef.current.position.copy(pos);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.016, 8, 8]} />
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
    </mesh>
  );
}

export default function GlobeNetworkRoutes() {
  // Determine if on mobile to optimize route count
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pre-calculate route curves and sample points
  const routes = useMemo(() => {
    // Select subset of routes for mobile to optimize performance
    const activeRoutes = isMobile ? globalNetworkRoutes.slice(0, 5) : globalNetworkRoutes;

    return activeRoutes.map((route, idx) => {
      const startLoc = keyLocations.find((l) => l.id === route.from);
      const endLoc = keyLocations.find((l) => l.id === route.to);

      if (!startLoc || !endLoc) return null;

      const vStart = latLngToVector3(startLoc.lat, startLoc.lng, EARTH_MARKER_CONFIG.radius);
      const vEnd = latLngToVector3(endLoc.lat, endLoc.lng, EARTH_MARKER_CONFIG.radius);

      // Distance on sphere surface
      const distance = vStart.distanceTo(vEnd);

      // Determine altitude based on distance: nearby: 0.16, medium: 0.32, long: 0.52
      let altitude = 0.32;
      if (distance < 1.5) {
        altitude = 0.16;
      } else if (distance > 2.8) {
        altitude = 0.52;
      }

      // Calculate midpoint and project it outwards for the Bezier control point
      const vMid = new THREE.Vector3().addVectors(vStart, vEnd).multiplyScalar(0.5);
      const vControl = vMid.clone().normalize().multiplyScalar(EARTH_MARKER_CONFIG.radius + altitude);

      const curve = new THREE.QuadraticBezierCurve3(vStart, vControl, vEnd);
      const points = curve.getPoints(24);

      return {
        id: `${route.from}-${route.to}`,
        points,
        curve,
        delay: (idx * 0.15) % 1.0
      };
    }).filter(Boolean);
  }, [isMobile]);

  return (
    <group>
      {routes.map((route) => (
        <group key={route.id}>
          {/* Elegant dotted route line */}
          <Line
            points={route.points}
            color="rgba(220, 235, 255, 0.42)"
            lineWidth={1.0}
            dashed
            dashScale={40}
            dashSize={0.35}
            gapSize={0.35}
            transparent
            opacity={0.8}
            depthWrite={false}
          />
          
          {/* Luminous flow pulse moving along the curve */}
          <RoutePulse curve={route.curve} delay={route.delay} />
        </group>
      ))}
    </group>
  );
}
