import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import {
  globalServicePoints,
  EARTH_GEO_CONFIG,
  getMarkerPosition
} from './heroData';

// Import custom flag WebP images from src/assets/flags/
import usaFlag from '../../assets/flags/usa.webp';
import ukFlag from '../../assets/flags/uk.webp';
import canadaFlag from '../../assets/flags/canada.webp';
import euFlag from '../../assets/flags/eu.webp';
import uaeFlag from '../../assets/flags/uae.webp';
import indiaFlag from '../../assets/flags/india.webp';
import singaporeFlag from '../../assets/flags/singapore.webp';
import australiaFlag from '../../assets/flags/australia.webp';


const flagImages = {
  usa: usaFlag,
  uk: ukFlag,
  canada: canadaFlag,
  eu: euFlag,
  uae: uaeFlag,
  india: indiaFlag,
  singapore: singaporeFlag,
  australia: australiaFlag
};


// Map groupIds to visual points
const visualGroups = {
  1: ["usa", "uk"],
  2: ["canada", "eu"],
  3: ["uae", "india"],
  4: ["singapore", "australia"]
};

export default function GlobeMarkers() {
  const { camera } = useThree();
  const [activeIndex, setActiveIndex] = useState(0);

  // DOM Refs to mutate opacity directly in useFrame (for 60fps culling without state lag)
  const markerRefs = useRef([]);

  // Cycling loop (3.8 seconds) - unified to one marker at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % globalServicePoints.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  // Pre-calculate 3D vector positions
  const markersWithPositions = useMemo(() => {
    return globalServicePoints.map((pt, idx) => {
      // Find matching visual point to get direction and groupId
      // We will map visual data:
      const direction = (pt.id === "india" || pt.id === "singapore" || pt.id === "australia") ? "left" : "right";
      
      let groupId = 1;
      if (pt.id === "usa" || pt.id === "uk") groupId = 1;
      else if (pt.id === "canada" || pt.id === "eu") groupId = 2;
      else if (pt.id === "uae" || pt.id === "india") groupId = 3;
      else if (pt.id === "singapore" || pt.id === "australia") groupId = 4;

      return {
        ...pt,
        direction,
        groupId,
        position: getMarkerPosition(pt.lat, pt.lng, EARTH_GEO_CONFIG),
        index: idx
      };
    });
  }, []);

  // Pre-allocated vectors for useFrame to prevent garbage collection stutters (Zero-allocation loop)
  const tempPos = useRef(new THREE.Vector3());
  const tempNormal = useRef(new THREE.Vector3());
  const tempToCamera = useRef(new THREE.Vector3());
  const upAxis = useMemo(() => new THREE.Vector3(0, 1, 0), []);

  // Light direction — matches directionalLight position={[6, 3, 10]} in RealisticGlobe.jsx
  // Pre-compute once (static light, no need to recalculate per frame)
  const lightDir = useMemo(() => new THREE.Vector3(6, 3, 10).normalize(), []);

  // Light-zone culling: tags only appear when their surface faces the light source.
  // Mutates DOM opacity directly to avoid React re-render overhead on every frame.
  useFrame((state) => {
    const t0 = performance.now();
    if (!camera) return;

    // Early exit and hide markers on scroll to optimize performance
    const currentScroll = typeof window !== 'undefined' ? window.scrollY : 0;
    if (currentScroll > 150) {
      markersWithPositions.forEach((pt, idx) => {
        const el = markerRefs.current[idx];
        if (el) {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
        }
      });
      return;
    }

    // Calculate current total Y rotation matching RealisticGlobe.jsx
    const GLB_Y_ROTATION = Math.PI * 0.55;
    const rotationOffsetY = EARTH_GEO_CONFIG.rotationOffset.y || 0;
    const earthRotationY = Math.PI * 0.55 + state.clock.getElapsedTime() * 0.18;
    const totalY = GLB_Y_ROTATION + rotationOffsetY + earthRotationY;

    // Normalize camera position vector once per frame
    tempToCamera.current.copy(camera.position).normalize();

    markersWithPositions.forEach((pt, idx) => {
      const el = markerRefs.current[idx];
      if (!el) return;

      // Copy local position and rotate with Earth
      tempPos.current.set(pt.position.x, pt.position.y, pt.position.z);
      tempPos.current.applyAxisAngle(upAxis, totalY);

      // Surface normal points outward
      tempNormal.current.copy(tempPos.current).normalize();

      // ── Check 1: Camera culling (is it on the front face?) ──
      const dotCamera = tempNormal.current.dot(tempToCamera.current);
      if (dotCamera < 0.12) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      // ── Check 2: Light culling (is it in the lit zone?) ──
      // dotLight < 0.05 = fully in shadow → invisible
      // dotLight 0.05–0.35 = terminator zone → smooth fade in
      // dotLight > 0.35 = fully lit → max opacity
      const dotLight = tempNormal.current.dot(lightDir);
      if (dotLight < 0.05) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      // Smooth ramp: 0→1 as marker moves from shadow into light
      const lightFactor = Math.min(1, (dotLight - 0.05) / 0.3);

      // Determine active state
      const isActive = idx === activeIndex;
      const baseOpacity = isActive ? 1.0 : 0.22;
      el.style.opacity = String((baseOpacity * lightFactor).toFixed(3));
      el.style.pointerEvents = isActive && lightFactor > 0.5 ? 'auto' : 'none';
    });

    const t1 = performance.now();
    const duration = t1 - t0;
    if (duration > 1.0) {
      console.warn(`[Profile] GlobeMarkers useFrame took: ${duration.toFixed(2)}ms`);
    }
  });

  return (
    <group>
      {markersWithPositions.map((pt, idx) => {
        const isActive = idx === activeIndex;

        return (
          <Html
            key={pt.id}
            position={[pt.position.x, pt.position.y, pt.position.z]}
            center
            zIndexRange={[10, 0]}
            style={{
              position: 'relative',
              width: 0,
              height: 0,
              pointerEvents: 'none',
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
              overflow: 'visible'
            }}
          >
            {/* Direct DOM ref container for useFrame manipulation */}
            <div
              ref={(el) => (markerRefs.current[idx] = el)}
              className={`bubble-anchor ${isActive ? 'anchor-active' : 'anchor-inactive'}`}
              style={{
                position: 'absolute',
                width: 0,
                height: 0,
                transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              {/* ── Circular Flag Marker ── */}
              <div
                className={`flag-marker ${isActive ? 'flag-marker-active' : ''}`}
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: '-24px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: isActive 
                    ? 'rgba(25, 32, 50, 0.96)' 
                    : 'rgba(25, 32, 50, 0.70)',
                  border: isActive
                    ? '1.5px solid rgba(255, 255, 255, 0.35)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive
                    ? '0 0 20px rgba(61, 235, 255, 0.35)'
                    : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
                  transform: isActive ? 'scale(1.06)' : 'scale(0.8)',
                  userSelect: 'none',
                  overflow: 'hidden'
                }}
              >
                {flagImages[pt.id] ? (
                  <img 
                    src={flagImages[pt.id]} 
                    alt={pt.country} 
                    style={{ 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      display: 'block'
                    }} 
                  />
                ) : (
                  <span style={{ fontSize: '20px' }}>{pt.flag}</span>
                )}

                {/* Glowing Pulse Ring for Active Markers */}
                {isActive && (
                  <div 
                    className="marker-pulse-ring"
                    style={{
                      position: 'absolute',
                      inset: '-4px',
                      borderRadius: '50%',
                      border: '1px solid rgba(61, 235, 255, 0.45)',
                      animation: 'bubblePulse 2s cubic-bezier(0.22, 1, 0.36, 1) infinite',
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>

              {/* ── Compact Notification Card ── */}
              <div
                className={`notification-card ${isActive ? 'card-active' : 'card-inactive'}`}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: pt.direction === 'right' ? '28px' : 'auto',
                  right: pt.direction === 'left' ? '28px' : 'auto',
                  
                  transform: `translateY(-50%) scale(${isActive ? 1 : 0.96}) translateX(${
                    isActive ? '0px' : pt.direction === 'right' ? '-6px' : '6px'
                  })`,
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? 'visible' : 'hidden',
                  pointerEvents: isActive ? 'auto' : 'none',
                  transition: 'opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.75s',
                  
                  // Highly optimized premium solid dark glass (no GPU-heavy backdrop-filter blur)
                  width: '235px',
                  height: '62px',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  background: 'rgba(25, 32, 50, 0.96)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 12px 34px rgba(0, 0, 0, 0.28)',
                  
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                  <div 
                    style={{ 
                      fontSize: '9px', 
                      fontWeight: 700, 
                      color: 'rgba(170, 230, 255, 0.95)', 
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '1px',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    {pt.country}
                  </div>
                  <div 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: '#ffffff', 
                      lineHeight: '1.25',
                      fontFamily: 'Inter, sans-serif',
                      whiteSpace: 'normal',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {pt.service}
                  </div>
                </div>

                <div 
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    background: '#3debff', 
                    boxShadow: '0 0 8px #3debff',
                    flexShrink: 0
                  }} 
                />
              </div>
            </div>
          </Html>
        );
      })}
    </group>
  );
}
