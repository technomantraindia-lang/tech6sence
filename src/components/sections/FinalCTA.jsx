import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#FAFAFA] border-t border-slate-200/80 text-slate-900"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cta-glow-drift {
          0%, 100% { transform: translate(-50%, -50%) scale(1) translate(0, 0); }
          33% { transform: translate(-50%, -50%) scale(1.15) translate(40px, -30px); }
          66% { transform: translate(-50%, -50%) scale(0.9) translate(-30px, 40px); }
        }
        @keyframes cta-btn-shine {
          0% { transform: translateX(-100%) rotate(30deg); }
          100% { transform: translateX(200%) rotate(30deg); }
        }
        .animate-glow-drift {
          animation: cta-glow-drift 18s ease-in-out infinite;
        }
        .cta-btn-shine-effect {
          position: absolute;
          top: -50%;
          left: -60%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.3) 50%,
            transparent
          );
          transform: rotate(30deg);
          pointer-events: none;
        }
        .group:hover .cta-btn-shine-effect {
          animation: cta-btn-shine 1.6s ease-in-out infinite;
        }
      `}} />

      {/* Ambient background glows */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-gradient-to-tr from-blue-100/60 via-emerald-100/40 to-transparent blur-[120px] pointer-events-none z-0 animate-glow-drift"
      />

      {/* Main Container */}
      <div 
        className={`relative max-w-[1400px] mx-auto rounded-[2.5rem] border border-slate-200/80 bg-white/90 backdrop-blur-md overflow-hidden py-14 px-6 sm:px-12 md:py-20 md:px-20 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Content Block (Centered) */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Headline */}
          <h2 
            className="mb-6 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.12] font-extrabold text-slate-900 tracking-tight transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '150ms'
            }}
          >
            Engineering the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2] font-extrabold">
              Intelligence
            </span>
          </h2>

          {/* Paragraph */}
          <p 
            className="mb-10 font-body text-[1rem] sm:text-[1.1rem] leading-[1.8] text-slate-600 max-w-3xl font-medium transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '300ms'
            }}
          >
            Whether you're an enterprise accelerating AI adoption, a government modernizing digital infrastructure, a startup building the next breakthrough platform, or a visionary founder creating the future, TECH6SENSE AI provides the intelligence, engineering, and strategic partnership to transform ambition into global impact.
          </p>

          {/* Action Button */}
          <div 
            className="flex items-center justify-center w-full mb-12 transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '450ms'
            }}
          >
            <Link
              to="/lets-connect"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-9 py-4 font-display text-base font-bold text-white shadow-[0_4px_20px_rgba(23,70,210,0.3)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              <span className="cta-btn-shine-effect" />
              <span>Talk to TECH6SENSE AI</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-extrabold text-lg">→</span>
            </Link>
          </div>

          {/* Brand signature (footer close) */}
          <div 
            className="border-t border-slate-200/80 pt-6 w-full max-w-2xl text-center transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '600ms'
            }}
          >
            <p className="font-display text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
              <span className="text-[#1746D2] uppercase tracking-wider font-extrabold">TECH6SENSE AI</span>{' '}
              <span className="text-slate-400 font-light mx-1">—</span>{' '}
              <span className="text-slate-600 font-semibold">Sense Beyond Technology. Build Beyond Imagination.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
