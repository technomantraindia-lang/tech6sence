import React from 'react';
import { heroData } from './heroData';

export default function HeroContent() {
  const { eyebrow, heading, paragraph, primaryCta, secondaryCta } = heroData;

  return (
    <div className="tech-hero-content">
      <div className="th-eyebrow" id="hero-eyebrow">
        {eyebrow}
      </div>
      
      <h1 className="th-heading" id="hero-title">
        {heading}
      </h1>
      
      <p className="th-paragraph" id="hero-description">
        {paragraph}
      </p>
      
      <div className="th-cta-group">
        <a 
          href={primaryCta.href} 
          className="th-btn th-btn-primary" 
          id="hero-primary-cta"
        >
          {primaryCta.label}
        </a>
        <a 
          href={secondaryCta.href} 
          className="th-btn th-btn-secondary" 
          id="hero-secondary-cta"
        >
          {secondaryCta.label}
        </a>
      </div>
    </div>
  );
}
