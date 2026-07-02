import React from 'react';
import HeroContent from './HeroContent';
import HeroGlobeStage from './HeroGlobeStage';
import './techHero.css';

export default function TechHero() {
  return (
    <section className="tech-hero-container" id="tech-hero">
      {/* Dot pattern overlay for aesthetic grids */}
      <div className="tech-hero-grid" />
      
      {/* Cinematic centered-horizon layout */}
      <div className="tech-hero-cinematic-wrapper">
        <HeroContent />
        <HeroGlobeStage />
      </div>
    </section>
  );
}

