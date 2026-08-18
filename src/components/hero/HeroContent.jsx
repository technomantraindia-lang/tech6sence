import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link 
          to={primaryCta.href} 
          className="th-btn th-btn-primary" 
          id="hero-primary-cta"
        >
          {primaryCta.label}
        </Link>
        <Link 
          to={secondaryCta.href} 
          className="th-btn th-btn-secondary" 
          id="hero-secondary-cta"
        >
          {secondaryCta.label}
        </Link>
      </div>
    </div>
  );
}
