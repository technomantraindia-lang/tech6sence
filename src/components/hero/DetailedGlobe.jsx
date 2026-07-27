import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { keyLocations, globalRoutes } from './heroData';

export default function DetailedGlobe({ activeIndex = 0 }) {
  const globeRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [isMobile, setIsMobile] = useState(false);

  const activeCountryName = keyLocations[activeIndex]?.name;
  const activePoint = keyLocations[activeIndex];

  // Balanced mesh network routes: 12 routes on desktop, 5 main routes on mobile
  const filteredArcs = isMobile 
    ? globalRoutes.filter(r => 
        (r.from === "USA" && r.to === "Canada") ||
        (r.from === "UK" && r.to === "European Union") ||
        (r.from === "UAE" && r.to === "India") ||
        (r.from === "India" && r.to === "Singapore") ||
        (r.from === "Singapore" && r.to === "Australia")
      ) 
    : globalRoutes;

  // Dual-layer routes: 1 faint solid base arc + 1 flowing luminous comet per route
  const displayArcs = [];
  filteredArcs.forEach((r, idx) => {
    // Layer 1: Faint continuous base line (always visible, shows the full route path)
    displayArcs.push({
      ...r,
      isPulse: false,
      color: r.color.replace(/[\d\.]+\)$/, '0.15)') // subtle but visible base path
    });
    // Layer 2: Flowing luminous comet segment (long dash gliding along the route)
    displayArcs.push({
      ...r,
      isPulse: true,
      _routeIdx: idx, // for staggered timing
      color: r.color.replace(/[\d\.]+\)$/, '0.75)') // bright but not neon
    });
  });

  // 1. Set mobile state on mount
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // 2. HTML Bubble Builder for react-globe.gl htmlElementsData
  const createBubbleElement = (d) => {
    const el = document.createElement('div');
    el.className = 'th-globe-bubble-wrapper';
    
    let iconHtml = '';
    if (d.icon === 'agent') iconHtml = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;
    else if (d.icon === 'enterprise') iconHtml = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2.18" ry="2.18"></rect><rect x="2" y="14" width="20" height="8" rx="2.18" ry="2.18"></rect><line x1="6" y1="10" x2="6" y2="14"></line><line x1="18" y1="10" x2="18" y2="14"></line></svg>`;
    else if (d.icon === 'automation') iconHtml = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;
    else if (d.icon === 'genai') iconHtml = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;
    else if (d.icon === 'ai-service') iconHtml = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.25A3.75 3.75 0 0 0 13 6.25V5M6 14h1.25A3.75 3.75 0 0 0 11 17.75V19"></path><circle cx="12" cy="12" r="10"></circle></svg>`;
    else if (d.icon === 'copilot') iconHtml = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;
    else if (d.icon === 'consulting') iconHtml = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
    else iconHtml = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon></svg>`;

    el.innerHTML = `
      <div class="th-bubble-inner" style="border-color: ${d.color}40; box-shadow: 0 0 12px ${d.color}15;">
        <div class="th-bubble-icon" style="background-color: ${d.color}25; color: ${d.color}; border-color: ${d.color}40;">
          ${iconHtml}
        </div>
        <div class="th-bubble-content">
          <div class="th-bubble-country">${d.country}</div>
          <div class="th-bubble-service">${d.service}</div>
          <div class="th-bubble-sub">Global AI Service</div>
        </div>
        <div class="th-bubble-status">
          <span class="th-status-dot" style="background-color: ${d.color}; box-shadow: 0 0 8px ${d.color};"></span>
        </div>
      </div>
    `;
    return el;
  };

  // 3. Spotlight logic to directly update DOM classes (Max 3 visible bubbles at once)
  useEffect(() => {
    if (isMobile) return;

    const updateSpotlights = () => {
      const wrappers = document.querySelectorAll('.th-globe-bubble-wrapper');
      if (wrappers.length === 0) return;
      
      wrappers.forEach((wrapper, index) => {
        const isActive = index === activeIndex;
        const isPrevious = index === (activeIndex - 1 + 8) % 8;
        const isNext = index === (activeIndex + 1) % 8;
        
        wrapper.classList.remove('active', 'prev', 'next', 'visible');
        
        if (isActive) {
          wrapper.classList.add('active', 'visible');
        } else if (isPrevious) {
          wrapper.classList.add('prev', 'visible');
        } else if (isNext) {
          wrapper.classList.add('next', 'visible');
        }
      });
    };
    
    updateSpotlights();
    const t = setTimeout(updateSpotlights, 120); // short timeout to let CSS2D mount
    return () => clearTimeout(t);
  }, [activeIndex, isMobile]);

  // 2. Measure parent container for perfect responsiveness
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        const size = Math.min(width || 500, height || 500);
        setDimensions({ width: size, height: size });
        setIsMobile(window.innerWidth <= 768);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // 3. Inject custom elements (lights, orbit rings) and smooth autoRotate controls
  useEffect(() => {
    if (!globeRef.current) return;
    const globe = globeRef.current;
    
    // Set initial view pointing to India, Middle East, Europe
    globe.pointOfView({ lat: 20, lng: 45, altitude: 2.1 }, 0);
    
    // Configure smooth OrbitControls auto-rotation
    const controls = globe.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = window.innerWidth <= 768 ? 0.30 : 0.55; // Calmer rotation speed
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
    }
    
    // Optimize renderer pixel ratio to limit GPU consumption and remove lag
    const renderer = globe.renderer();
    if (renderer) {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
    }
    
    const scene = globe.scene();
    
    // Add custom lighting to enhance depth and create metallic specular highlights
    // Ambient light - base space/night illumination
    const ambientLight = new THREE.AmbientLight(0x0c1020, 0.65);
    scene.add(ambientLight);

    // Directional light - solar light from upper left
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.25);
    dirLight.position.set(-100, 150, 100);
    scene.add(dirLight);

    // Gold point light (top-right rim highlight)
    const goldLight = new THREE.PointLight(0xedbe55, 3.5, 400);
    goldLight.position.set(130, 130, 150);
    scene.add(goldLight);

    // Cyan point light (top-left rim highlight)
    const cyanLight = new THREE.PointLight(0x3debff, 2.5, 400);
    cyanLight.position.set(-130, 130, 150);
    scene.add(cyanLight);

    // Violet point light (bottom fill highlight)
    const violetLight = new THREE.PointLight(0x8b5cf6, 2.0, 400);
    violetLight.position.set(0, -150, 100);
    scene.add(violetLight);

    // Add three custom data orbit rings - optimized subdivisions (TorusGeometry(r, tube, radial, tubular))
    const ringsGroup = new THREE.Group();

    // Ring 1 (Cyan) - reduced subdivisions from 8,100 to 6,64 for performance
    const ring1Geom = new THREE.TorusGeometry(122, 0.35, 6, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({ 
      color: 0x3debff, 
      transparent: true, 
      opacity: 0.06 // Lowered to clean up visual noise
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 2;
    ringsGroup.add(ring1);

    // Ring 2 (Violet)
    const ring2Geom = new THREE.TorusGeometry(132, 0.25, 6, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({ 
      color: 0x8b5cf6, 
      transparent: true, 
      opacity: 0.05 // Lowered to clean up visual noise
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    ringsGroup.add(ring2);

    // Ring 3 (Gold)
    const ring3Geom = new THREE.TorusGeometry(142, 0.3, 6, 64);
    const ring3Mat = new THREE.MeshBasicMaterial({ 
      color: 0xedbe55, 
      transparent: true, 
      opacity: 0.04 // Lowered to clean up visual noise
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.x = -Math.PI / 4;
    ring3.rotation.z = Math.PI / 4;
    ringsGroup.add(ring3);

    scene.add(ringsGroup);

    // Desktop cloud layer (slow rotating cloud sphere slightly raised)
    let cloudsMesh = null;
    let cloudsAnimId = null;
    if (window.innerWidth > 768) {
      const CLOUDS_IMG_URL = 'https://unpkg.com/three-globe/example/img/earth-clouds.png';
      const CLOUDS_ALT = 0.007; // 0.7% altitude above Earth surface
      const CLOUDS_ROTATION_SPEED = -0.005; // rotate opposite direction

      new THREE.TextureLoader().load(
        CLOUDS_IMG_URL,
        (cloudsTxt) => {
          if (!globeRef.current) return;
          const radius = globe.getGlobeRadius();
          const cloudsGeom = new THREE.SphereGeometry(radius * (1 + CLOUDS_ALT), 64, 64);
          const cloudsMat = new THREE.MeshPhongMaterial({
            map: cloudsTxt,
            transparent: true,
            opacity: 0.08, // Subtle cloud layer
            blending: THREE.NormalBlending
          });
          cloudsMesh = new THREE.Mesh(cloudsGeom, cloudsMat);
          scene.add(cloudsMesh);

          const rotateClouds = () => {
            if (cloudsMesh) {
              cloudsMesh.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
            }
            cloudsAnimId = requestAnimationFrame(rotateClouds);
          };
          rotateClouds();
        },
        undefined,
        (err) => console.warn("Failed to load clouds texture:", err)
      );
    }

    // Animation loop for custom orbit rings
    let animId;
    const animate = () => {
      ring1.rotation.z += 0.002;
      ring2.rotation.z -= 0.003;
      ring3.rotation.y += 0.0015;
      animId = requestAnimationFrame(animate);
    };
    animate();

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animId);
      if (cloudsAnimId) cancelAnimationFrame(cloudsAnimId);
      if (cloudsMesh) scene.remove(cloudsMesh);
      scene.remove(ambientLight);
      scene.remove(dirLight);
      scene.remove(goldLight);
      scene.remove(cyanLight);
      scene.remove(violetLight);
      scene.remove(ringsGroup);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'transparent'
      }}
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#3DEBFF" // Cyan rim glow
        atmosphereAltitude={0.09} // Hug curvature closer for a sharp rim glow
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // Dark night lights Earth texture
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // Specular topology bumps
        showGraticules={true} // High-tech grid lines graticules
        
        // Glowing country markers (pointsData) - shrunken for premium look, active stands out
        pointsData={keyLocations}
        pointLat="lat"
        pointLng="lng"
        pointColor={d => d.name === activeCountryName ? d.color : 'rgba(255, 255, 255, 0.35)'}
        pointRadius={d => d.name === activeCountryName ? 0.55 : 0.22}
        pointAltitude={0.02}
        pointsMerge={false}

        // Secondary pulsing network waves (ringsData) - render only for active spotlight location
        ringsData={activePoint ? [activePoint] : []}
        ringLat="lat"
        ringLng="lng"
        ringColor={d => d.color}
        ringMaxRadius={2.0}
        ringPropagationSpeed={0.8} // Standardized pulsing speed (no single hub dominance)
        ringRepeatNum={3}

        // Animated connection routes (arcsData) - continuous flowing comet routes
        arcsData={displayArcs}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcAltitude="altitude"
        arcStroke={d => d.isPulse ? 0.45 : 0.25} // Comet is visible, base line is thin
        arcDashLength={d => d.isPulse ? 0.38 : 0} // Long flowing luminous segment (comet trail)
        arcDashGap={d => d.isPulse ? 2.5 : 0} // Wide gap so only one comet visible per route
        arcDashAnimateTime={d => d.isPulse ? (4500 + (d._routeIdx || 0) * 380) : 0} // Staggered 4.5s-9s
        arcDashInitialGap={d => d.isPulse ? ((d._routeIdx || 0) * 0.12) % 1 : 0} // Staggered start positions
        arcsTransitionDuration={1000}

        // Globe-attached HTML notification bubbles (desktop only to prevent clutter)
        htmlElementsData={isMobile ? [] : keyLocations}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={0.06}
        htmlElement={createBubbleElement}

        // Clean HUD labels - removed to avoid cluttering HTML bubbles
        labelsData={[]}
        
        // Controls configuration
        enableZoom={false}
        enablePan={false}
        enablePointerInteraction={false} // Disable pointer hover capture
      />
    </div>
  );
}
