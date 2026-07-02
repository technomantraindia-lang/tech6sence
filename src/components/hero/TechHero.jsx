import React, { useState, useEffect } from 'react';
import HeroContent from './HeroContent';
import HeroGlobeStage from './HeroGlobeStage';
import GlobalServiceCallouts from './GlobalServiceCallouts';
import './techHero.css';

export default function TechHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Spotlight loop interval: rotates active node every 2.5 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 8);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tech-hero-container" id="tech-hero">
      {/* Dot pattern overlay for aesthetic grids */}
      <div className="tech-hero-grid" />
      
      {/* Cinematic centered-horizon layout */}
      <div className="tech-hero-cinematic-wrapper">
        <HeroContent />
        <GlobalServiceCallouts activeIndex={activeIndex} />
        <HeroGlobeStage activeIndex={activeIndex} />
      </div>
    </section>
  );
}
