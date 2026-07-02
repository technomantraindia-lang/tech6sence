import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { keyLocations, EARTH_MARKER_CONFIG, latLngToVector3 } from './heroData';

// Icon helper function returning SVG components
function getIconSvg(icon) {
  if (icon === 'agent') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
  if (icon === 'enterprise') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2.18" ry="2.18"></rect><rect x="2" y="14" width="20" height="8" rx="2.18" ry="2.18"></rect><line x1="6" y1="10" x2="6" y2="14"></line><line x1="18" y1="10" x2="18" y2="14"></line></svg>;
  if (icon === 'automation') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
  if (icon === 'genai') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
  if (icon === 'ai-service') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.25A3.75 3.75 0 0 0 13 6.25V5M6 14h1.25A3.75 3.75 0 0 0 11 17.75V19"></path><circle cx="12" cy="12" r="10"></circle></svg>;
  if (icon === 'copilot') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
  if (icon === 'consulting') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon></svg>;
}

// Subtle pulsing shell component for active markers
function SoftPulse({ position, color }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = (clock.getElapsedTime() * 0.9) % 1.0;
    const scale = 1.0 + t * 1.6;
    const opacity = 0.55 * (1.0 - t);
    meshRef.current.scale.set(scale, scale, scale);
    meshRef.current.material.opacity = opacity;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[0.045, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} depthWrite={false} />
    </mesh>
  );
}

export default function GlobeMarkers({ activeIndex, occludeRef }) {
  // Pre-calculate positions to prevent performance overhead
  const points = useMemo(() => {
    return keyLocations.map((loc) => ({
      ...loc,
      vector: latLngToVector3(loc.lat, loc.lng, EARTH_MARKER_CONFIG.radius)
    }));
  }, []);

  const prevIdx = (activeIndex - 1 + 8) % 8;
  const nextIdx = (activeIndex + 1) % 8;

  return (
    <group>
      {points.map((loc, idx) => {
        const isActive = idx === activeIndex;
        const isPrev = idx === prevIdx;
        const isNext = idx === nextIdx;
        const isVisible = isActive || isPrev || isNext;

        // Visibility classes for transitions
        let className = 'th-globe-bubble-wrapper';
        if (isActive) className += ' active';
        else if (isPrev) className += ' prev visible';
        else if (isNext) className += ' next visible';

        return (
          <group key={loc.id}>
            {/* Soft pulsing ring for the active/visible marker */}
            {isActive && (
              <SoftPulse position={loc.vector} color={loc.color} />
            )}

            {/* Glowing Core Dot (White center + colored glow) */}
            <mesh position={loc.vector}>
              <sphereGeometry args={[isActive ? 0.024 : 0.015, 16, 16]} />
              <meshBasicMaterial color="#ffffff" toneMapped={false} />
            </mesh>
            <mesh position={loc.vector}>
              <sphereGeometry args={[isActive ? 0.035 : 0.022, 16, 16]} />
              <meshBasicMaterial color={loc.color} transparent opacity={isActive ? 0.65 : 0.25} depthWrite={false} />
            </mesh>

            {/* Premium compact glassmorphism service notification card */}
            {isVisible && (
              <Html
                position={loc.vector}
                center
                distanceFactor={6.2}
                occlude={occludeRef ? [occludeRef] : true}
                className={className}
                style={{ pointerEvents: 'auto' }}
              >
                <div className="th-bubble-inner" style={{ borderColor: `${loc.color}40`, boxShadow: `0 0 12px ${loc.color}15` }}>
                  <div className="th-bubble-icon" style={{ backgroundColor: `${loc.color}25`, color: loc.color, borderColor: `${loc.color}40` }}>
                    {getIconSvg(loc.icon)}
                  </div>
                  <div className="th-bubble-content">
                    <div className="th-bubble-country">{loc.name}</div>
                    <div className="th-bubble-service">{loc.service}</div>
                    <div className="th-bubble-sub">Global AI Service</div>
                  </div>
                  <div className="th-bubble-status">
                    <span className="th-status-dot" style={{ backgroundColor: loc.color, boxShadow: `0 0 8px ${loc.color}` }}></span>
                  </div>
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
}
