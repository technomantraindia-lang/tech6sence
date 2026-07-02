// src/components/hero/heroData.js
// ================================================================
//  SINGLE SOURCE OF TRUTH — markers, calibration, and globe data
// ================================================================
import * as THREE from 'three';

// ----------------------------------------------------------------
//  DEBUG MODE
//  When true  → Earth rotation PAUSED, all 8 labels always visible,
//               connector lines HIDDEN, simple debug labels shown.
//  When false → Normal rotation, only active/prev/next labels visible.
// ----------------------------------------------------------------
export const MARKER_DEBUG_MODE = false;


// ----------------------------------------------------------------
//  EARTH GEOMETRY CALIBRATION CONFIG
//
//  radius         → sphere radius for lat/lng → 3D conversion.
//                   Increase if markers sink INTO Earth.
//                   Decrease if markers float too far above.
//
//  markerAltitude → extra altitude above sphere surface.
//
//  lngOffset      → add degrees to ALL longitudes.
//                   Increase if all markers shift WEST of correct pos.
//                   Decrease if all markers shift EAST.
//
//  latOffset      → add degrees to ALL latitudes (rarely needed).
//
//  invertLng      → true if east/west is MIRRORED
//                   (USA appears on Asia side, etc.)
//
//  invertLat      → true if north/south is MIRRORED
//                   (Australia appears near Arctic, etc.)
//
//  rotationOffset → group rotation in radians matching the GLB offset.
//                   rotationOffset.y is the main knob.
//
//  CALIBRATION CHECKLIST:
//   1. USA       → Washington DC (east coast)
//   2. UK        → London (top-left of Europe)
//   3. Canada    → Ottawa (north of USA east coast)
//   4. EU        → Germany / Frankfurt (central Europe)
//   5. UAE       → Dubai / Arabian Peninsula
//   6. India     → Gujarat / GIFT City
//   7. Singapore → Tip of Malay Peninsula
//   8. Australia → Sydney (southeast Australia)
//
//  All shift EAST? → increase lngOffset
//  All shift WEST? → decrease lngOffset
//  East/west mirrored? → invertLng: true
//  North/south mirrored? → invertLat: true
// ----------------------------------------------------------------
export const EARTH_GEO_CONFIG = {
  radius: 1.80,
  markerAltitude: 0.02,
  lngOffset: 0,
  latOffset: 0,
  invertLng: false,
  invertLat: false,
  rotationOffset: {
    x: 0,
    // Original calibrated Y rotation offset to align markers on correct countries on the NASA Earth GLB
    y: Math.PI / 1.18,
    z: 0
  }
};

// Backward-compatible alias — keeps GlobeNetworkRoutes.jsx working without import changes
export const EARTH_MARKER_CONFIG = {
  radius: EARTH_GEO_CONFIG.radius,
  rotationOffset: EARTH_GEO_CONFIG.rotationOffset
};


// ----------------------------------------------------------------
//  COORDINATE HELPERS
// ----------------------------------------------------------------

/**
 * Apply calibration offsets to raw lat/lng before 3D conversion.
 */
export function getCalibratedLatLng(lat, lng, config) {
  const finalLat = config.invertLat ? -lat : lat;
  const finalLng = config.invertLng ? -lng : lng;
  return {
    lat: finalLat + (config.latOffset || 0),
    lng: finalLng + (config.lngOffset || 0)
  };
}

/**
 * Convert lat/lng degrees to a THREE.Vector3 on a sphere of given radius.
 * Uses standard spherical coordinates (phi = polar angle from north pole).
 */
export function latLngToVector3(lat, lng, radius) {
  const phi   = (90 - lat)  * (Math.PI / 180); // 90, NOT 95
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z =  radius * Math.sin(phi) * Math.sin(theta);
  const y =  radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

/**
 * Full pipeline: raw lat/lng → calibrated → Vector3 slightly above surface.
 * This is the SINGLE function all markers should use.
 */
export function getMarkerPosition(lat, lng, config) {
  const { lat: cLat, lng: cLng } = getCalibratedLatLng(lat, lng, config);
  const totalRadius = (config.radius || 2.02) + (config.markerAltitude || 0.035);
  return latLngToVector3(cLat, cLng, totalRadius);
}

// ----------------------------------------------------------------
//  GLOBAL SERVICE POINTS (canonical 8-location data)
//  This is the primary data array. keyLocations is an alias below.
// ----------------------------------------------------------------
export const globalServicePoints = [
  {
    id: "uk",
    country: "UK",
    name: "UK",
    city: "United Kingdom",
    service: "AI Agents & Agentic AI",
    lat: 54.0,
    lng: -2.0, // Shifted slightly NW
    color: "#8B5CF6",
    icon: "agent"
  },
  {
    id: "usa",
    country: "USA",
    name: "USA",
    city: "United States",
    service: "Enterprise AI",
    lat: 34.0,
    lng: -98.0, // Shifted SW (centered in US, away from Canada)
    color: "#3DEBFF",
    icon: "enterprise"
  },
  {
    id: "australia",
    country: "Australia",
    name: "Australia",
    city: "Australia",
    service: "AI Automation",
    lat: -25.0,
    lng: 133.0, // Centered in Australia
    color: "#3DEBFF",
    icon: "automation"
  },
  {
    id: "uae",
    country: "UAE",
    name: "UAE",
    city: "Dubai / UAE",
    service: "Generative AI",
    lat: 26.0,
    lng: 48.0, // Shifted slightly West (away from India)
    color: "#EDBE55",
    icon: "genai"
  },
  {
    id: "eu",
    country: "European Union",
    name: "European Union",
    city: "European Union",
    service: "AI-as-a-Service (AIaaS)",
    lat: 47.0,
    lng: 18.0, // Shifted East (Central/Eastern Europe, away from UK)
    color: "#8B5CF6",
    icon: "ai-service"
  },
  {
    id: "canada",
    country: "Canada",
    name: "Canada",
    city: "Canada",
    service: "Smart AI Copilot",
    lat: 56.0,
    lng: -70.0, // Shifted North-East (away from USA)
    color: "#3DEBFF",
    icon: "copilot"
  },
  {
    id: "india",
    country: "India",
    name: "India",
    city: "GIFT City / India",
    service: "AI Consulting & Corporate Training",
    lat: 20.0,
    lng: 79.0, // Shifted South-East (Southern/Central India, away from UAE)
    color: "#EDBE55",
    icon: "consulting"
  },
  {
    id: "singapore",
    country: "Singapore",
    name: "Singapore",
    city: "Singapore",
    service: "AI Products",
    lat: 1.3521,
    lng: 103.8198,
    color: "#3DEBFF",
    icon: "product"
  }
];

// Short debug labels map
export const DEBUG_LABELS = {
  uk: "UK",
  usa: "USA",
  australia: "Australia",
  uae: "UAE",
  eu: "EU",
  canada: "Canada",
  india: "India",
  singapore: "Singapore"
};

export const heroData = {
  eyebrow: "GLOBAL AI • ENTERPRISE TECH • DEEP-TECH INNOVATION",
  heading: "Building Intelligent AI Systems Across the Globe",
  paragraph: "Tech6Sense AI delivers enterprise AI, autonomous agents, automation, AI products, and global intelligence solutions for future-ready businesses.",
  primaryCta: {
    label: "Explore AI Solutions",
    href: "#solutions"
  },
  secondaryCta: {
    label: "Let’s Connect",
    href: "#connect"
  },
  servicesSummary: [
    "AI Products",
    "AI Agents",
    "Automation",
    "Cloud AI",
    "Deep-Tech Lab",
    "AI Consulting"
  ],
  serviceTags: [
    { id: "ai-products", label: "AI Products", style: { top: "12%", left: "15%" } },
    { id: "ai-agents", label: "AI Agents", style: { top: "25%", right: "5%" } },
    { id: "automation", label: "Automation", style: { top: "45%", left: "8%" } },
    { id: "cloud-ai", label: "Cloud AI", style: { bottom: "25%", right: "8%" } },
    { id: "deep-tech", label: "Deep-Tech Lab", style: { bottom: "12%", left: "15%" } },
    { id: "ai-consulting", label: "AI Consulting", style: { top: "60%", right: "12%" } }
  ]
};

// Backward-compatible alias — points to globalServicePoints (single source of truth)
export const keyLocations = globalServicePoints;


// Balanced global routes for curved connecting lines
export const globalNetworkRoutes = [
  { from: "usa", to: "canada" },
  { from: "canada", to: "uk" },
  { from: "uk", to: "eu" },
  { from: "eu", to: "uae" },
  { from: "uae", to: "india" },
  { from: "india", to: "singapore" },
  { from: "singapore", to: "australia" },
  { from: "australia", to: "usa" },
  { from: "usa", to: "uk" },
  { from: "eu", to: "singapore" },
  { from: "uae", to: "australia" },
  { from: "canada", to: "eu" }
];

// Alias used by DetailedGlobe.jsx
export const globalRoutes = globalNetworkRoutes;


// Callouts ordered exactly by sequence: UK → USA → Canada → European Union → UAE → India → Singapore → Australia
export const globalServiceCallouts = [
  {
    id: "uk",
    country: "UK",
    service: "AI Agents & Agentic AI",
    lat: 51.5074,
    lng: -0.1278,
    color: "#8B5CF6",
    align: "left",
    style: { top: "30%", left: "30%" },
    svg: {
      width: 100,
      height: 90,
      path: "M 0 15 L 50 15 L 80 80",
      dot: { cx: 80, cy: 80 }
    },
    icon: "agent"
  },
  {
    id: "usa",
    country: "USA",
    service: "Enterprise AI",
    lat: 38.9072,
    lng: -77.0369,
    color: "#3DEBFF",
    align: "left",
    style: { top: "52%", left: "11%" },
    svg: {
      width: 120,
      height: 60,
      path: "M 0 15 L 60 15 L 100 50",
      dot: { cx: 100, cy: 50 }
    },
    icon: "enterprise"
  },
  {
    id: "canada",
    country: "Canada",
    service: "Smart AI Copilot",
    lat: 45.4215,
    lng: -75.6972,
    color: "#3DEBFF",
    align: "left",
    style: { top: "40%", left: "19%" },
    svg: {
      width: 120,
      height: 60,
      path: "M 0 15 L 60 15 L 100 50",
      dot: { cx: 100, cy: 50 }
    },
    icon: "copilot"
  },
  {
    id: "eu",
    country: "European Union",
    service: "AI-as-a-Service (AIaaS)",
    lat: 50.1109,
    lng: 8.6821,
    color: "#8B5CF6",
    align: "right",
    style: { top: "30%", right: "30%" },
    svg: {
      width: 100,
      height: 90,
      path: "M 100 15 L 50 15 L 20 80",
      dot: { cx: 20, cy: 80 }
    },
    icon: "ai-service"
  },
  {
    id: "uae",
    country: "UAE",
    service: "Generative AI",
    lat: 25.2048,
    lng: 55.2708,
    color: "#EDBE55",
    align: "right",
    style: { top: "40%", right: "19%" },
    svg: {
      width: 120,
      height: 60,
      path: "M 120 15 L 60 15 L 20 50",
      dot: { cx: 20, cy: 50 }
    },
    icon: "genai"
  },
  {
    id: "india",
    country: "India",
    service: "AI Consulting & Corporate Training",
    lat: 23.1669,
    lng: 72.6833,
    color: "#EDBE55",
    align: "left",
    style: { top: "65%", left: "7%" },
    svg: {
      width: 120,
      height: 60,
      path: "M 0 15 L 60 15 L 100 50",
      dot: { cx: 100, cy: 50 }
    },
    icon: "consulting"
  },
  {
    id: "singapore",
    country: "Singapore",
    service: "AI Products",
    lat: 1.3521,
    lng: 103.8198,
    color: "#3DEBFF",
    align: "right",
    style: { top: "52%", right: "11%" },
    svg: {
      width: 120,
      height: 60,
      path: "M 120 15 L 60 15 L 20 50",
      dot: { cx: 20, cy: 50 }
    },
    icon: "product"
  },
  {
    id: "australia",
    country: "Australia",
    service: "AI Automation",
    lat: -33.8688,
    lng: 151.2093,
    color: "#3DEBFF",
    align: "right",
    style: { top: "65%", right: "7%" },
    svg: {
      width: 120,
      height: 60,
      path: "M 120 15 L 60 15 L 20 50",
      dot: { cx: 20, cy: 50 }
    },
    icon: "automation"
  }
];

export const visualServicePoints = [
  {
    id: "usa",
    country: "USA",
    flag: "🇺🇸",
    service: "Enterprise AI",
    x: 24,
    y: 46,
    direction: "right",
    groupId: 1
  },
  {
    id: "uk",
    country: "UK",
    flag: "🇬🇧",
    service: "AI Agents & Agentic AI",
    x: 48,
    y: 30,
    direction: "right",
    groupId: 1
  },
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    service: "Smart AI Copilot",
    x: 31,
    y: 36,
    direction: "right",
    groupId: 2
  },
  {
    id: "eu",
    country: "European Union",
    flag: "🇪🇺",
    service: "AI-as-a-Service (AIaaS)",
    x: 56,
    y: 38,
    direction: "right",
    groupId: 2
  },
  {
    id: "uae",
    country: "UAE",
    flag: "🇦🇪",
    service: "Generative AI",
    x: 64,
    y: 50,
    direction: "right",
    groupId: 3
  },
  {
    id: "india",
    country: "India",
    flag: "🇮🇳",
    service: "AI Consulting & Corporate Training",
    x: 68,
    y: 58,
    direction: "left",
    groupId: 3
  },
  {
    id: "singapore",
    country: "Singapore",
    flag: "🇸🇬",
    service: "AI Products",
    x: 76,
    y: 66,
    direction: "left",
    groupId: 4
  },
  {
    id: "australia",
    country: "Australia",
    flag: "🇦🇺",
    service: "AI Automation",
    x: 82,
    y: 76,
    direction: "left",
    groupId: 4
  }
];

