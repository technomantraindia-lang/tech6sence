import React from 'react';
import { Link } from 'react-router-dom';
import { heroData } from './heroData';

export default function HeroContent() {
  const { eyebrow, subHeading, heading, paragraph, primaryCta, secondaryCta } = heroData;

  return (
    <div className="tech-hero-content">
      <div className="flex flex-wrap items-center justify-start gap-2.5 md:gap-4 mb-8" id="hero-eyebrow">
        {Array.isArray(eyebrow) ? eyebrow.map((pill, idx) => (
          <div 
            key={idx} 
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-[0.65rem] md:text-xs font-extrabold tracking-widest uppercase ${
              pill.color === 'green' 
                ? 'border-[#00A86B]/40 text-[#00A86B] bg-[#00A86B]/5' 
                : 'border-[#3b82f6]/40 text-[#3b82f6] bg-[#3b82f6]/5'
            }`}
          >
            <span 
              className={`w-1.5 h-1.5 rounded-full ${
                pill.color === 'green' 
                  ? 'bg-[#00A86B] shadow-[0_0_8px_rgba(0,168,107,0.8)]' 
                  : 'bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.8)]'
              }`} 
            />
            {pill.text}
          </div>
        )) : (
          <div className="th-eyebrow">{eyebrow}</div>
        )}
      </div>
      
      {subHeading && (
        <h2 className="font-display text-[0.8rem] md:text-[0.9rem] font-extrabold tracking-[0.25em] text-white/80 uppercase mb-4 shadow-sm" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.1)' }}>
          {subHeading}
        </h2>
      )}

      <h1 className="th-heading" id="hero-title">
        {heading}
      </h1>
      
      <p className="th-paragraph" id="hero-description">
        {paragraph}
      </p>
      
      <div className="th-cta-group">
        <Link 
          to={primaryCta.href} 
          className="th-btn th-btn-primary !bg-[#1746D2] hover:!bg-[#1233A0] !text-white !border-[#1746D2] shadow-[0_4px_20px_rgba(23,70,210,0.4)] hover:shadow-[0_6px_25px_rgba(23,70,210,0.6)] transition-all duration-300 font-extrabold" 
          id="hero-primary-cta"
        >
          {primaryCta.label}
        </Link>
        <Link 
          to={secondaryCta.href} 
          className="th-btn th-btn-secondary !bg-[#00A86B] hover:!bg-[#008f5b] !text-white !border-[#00A86B] shadow-[0_4px_20px_rgba(0,168,107,0.4)] hover:shadow-[0_6px_25px_rgba(0,168,107,0.6)] transition-all duration-300 font-extrabold" 
          id="hero-secondary-cta"
        >
          {secondaryCta.label}
        </Link>
      </div>
    </div>
  );
}
