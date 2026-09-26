import React, { useEffect, useState } from 'react';
import heroBg from '../../assets/abouthero2.png';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Earth from space" 
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10 w-full text-center">
        
        {/* Content */}
        <div 
          className={`flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Heading */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] font-medium tracking-tight text-white mb-8" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Where AI Research Meets <br className="hidden md:block" /> Real-World Transformation
          </h1>

          {/* Paragraph */}
          <p className="font-body text-white/90 text-lg md:text-xl font-light tracking-wide leading-relaxed mb-12 max-w-2xl mx-auto" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
            A global AI technology company built to transform bold ideas into intelligent systems, deep-tech products, and future-ready business ecosystems.
          </p>

          {/* Buttons - Minimalist */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <a href="#solutions" onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="group relative inline-flex justify-center items-center gap-3 rounded-full bg-white px-8 py-3.5 font-body text-sm font-medium text-black transition-all hover:bg-slate-200">
              Explore Solutions
              <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#ecosystem" onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="group relative inline-flex justify-center items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 font-body text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10">
              Meet the Ecosystem
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
