// src/components/hero/heroData.js
import * as THREE from 'three';

export const EARTH_MARKER_CONFIG = {
  radius: 2.02, // slightly above the 1.8 Earth radius
  rotationOffset: {
    x: 0,
    y: Math.PI / 1.18, // Calibrated rotation offset to align markers on correct countries on the NASA Earth GLB
    z: 0
  }
};

// Helper: Convert Lat/Lng to 3D Cartesian coordinates on sphere based on user's exact formula
export function latLngToVector3(lat, lng, radius) {
  const phi = (95 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

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

// Key Locations ordered exactly by sequence: UK → USA → Canada → European Union → UAE → India → Singapore → Australia
export const keyLocations = [
  {
    id: "uk",
    name: "UK",
    city: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
    color: "#8B5CF6",
    service: "AI Agents & Agentic AI",
    icon: "agent"
  },
  {
    id: "usa",
    name: "USA",
    city: "United States",
    lat: 38.9072,
    lng: -77.0369,
    color: "#3DEBFF",
    service: "Enterprise AI",
    icon: "enterprise"
  },
  {
    id: "canada",
    name: "Canada",
    city: "Canada",
    lat: 45.4215,
    lng: -75.6972,
    color: "#3DEBFF",
    service: "Smart AI Copilot",
    icon: "copilot"
  },
  {
    id: "eu",
    name: "European Union",
    city: "European Union",
    lat: 50.1109,
    lng: 8.6821,
    color: "#8B5CF6",
    service: "AI-as-a-Service (AIaaS)",
    icon: "ai-service"
  },
  {
    id: "uae",
    name: "UAE",
    city: "Dubai / UAE",
    lat: 25.2048,
    lng: 55.2708,
    color: "#EDBE55",
    service: "Generative AI",
    icon: "genai"
  },
  {
    id: "india",
    name: "India",
    city: "GIFT City / India",
    lat: 23.1669,
    lng: 72.6833,
    color: "#EDBE55",
    service: "AI Consulting & Corporate Training",
    icon: "consulting"
  },
  {
    id: "singapore",
    name: "Singapore",
    city: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    color: "#3DEBFF",
    service: "AI Products",
    icon: "product"
  },
  {
    id: "australia",
    name: "Australia",
    city: "Australia",
    lat: -33.8688,
    lng: 151.2093,
    color: "#3DEBFF",
    service: "AI Automation",
    icon: "automation"
  }
];

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
