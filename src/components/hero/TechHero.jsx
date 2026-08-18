import React from 'react';
import HeroContent from './HeroContent';
import HeroGlobeStage from './HeroGlobeStage';
import mainHeroImg from '../../assets/main-herobg.png';
import './techHero.css';

export default function TechHero() {
  return (
    <section className="tech-hero-container" id="tech-hero">
      {/* Starfield space background image from assets */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-80"
        style={{ backgroundImage: `url(${mainHeroImg})` }}
      />

      {/* Dark gradient overlay to blend into the bottom content seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03060f]/60 via-transparent to-[#03060f] pointer-events-none z-[1]" />

      {/* Mobile-only dark overlay for enhanced contrast & readability */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#03060f]/85 via-[#03060f]/65 to-[#03060f]/95 pointer-events-none z-[2] backdrop-blur-[1px]" />

      {/* Dot pattern overlay for aesthetic grids */}
      <div className="tech-hero-grid" />
      
      {/* Cinematic centered-horizon layout */}
      <HeroGlobeStage />
      <div className="tech-hero-cinematic-wrapper">
        <HeroContent />
      </div>
    </section>
  );
}
