import React, { useEffect, useRef, useState } from 'react';

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
      className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#FBFBFF]"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cta-glow-drift {
          0%, 100% { transform: translate(-50%, -50%) scale(1) translate(0, 0); }
          33% { transform: translate(-50%, -50%) scale(1.15) translate(40px, -30px); }
          66% { transform: translate(-50%, -50%) scale(0.9) translate(-30px, 40px); }
        }
        @keyframes cta-border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes cta-btn-shine {
          0% { transform: translateX(-100%) rotate(30deg); }
          100% { transform: translateX(200%) rotate(30deg); }
        }
        .animate-glow-drift {
          animation: cta-glow-drift 18s ease-in-out infinite;
        }
        .animate-border-flow {
          animation: cta-border-flow 6s linear infinite;
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
            rgba(255, 255, 255, 0.25) 50%,
            transparent
          );
          transform: rotate(30deg);
          pointer-events: none;
        }
        .group:hover .cta-btn-shine-effect {
          animation: cta-btn-shine 1.6s ease-in-out infinite;
        }
      `}} />

      {/* Background Elements */}
      {/* Soft AI Grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-multiply" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center'
        }}
      />

      {/* Main Wide CTA Container */}
      <div 
        className={`relative max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 bg-white/70 backdrop-blur-md overflow-hidden py-16 px-6 sm:px-12 md:py-24 md:px-20 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Animated Gradient Top Border Line */}
        <div 
          className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 bg-[size:200%_auto] animate-border-flow" 
        />

        {/* Floating Gradient Glow Orb Behind Heading */}
        <div 
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-violet-200/40 via-fuchsia-200/35 to-transparent blur-[80px] sm:blur-[110px] pointer-events-none z-0 animate-glow-drift"
        />

        {/* Content Block (Centered) */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Small Uppercase Label */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-violet-600 uppercase">
              READY TO BUILD WITH AI?
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Heading */}
          <h2 className="mb-6 font-display text-[clamp(1.85rem,4.2vw,3rem)] leading-[1.15] font-extrabold text-[#0B0527] tracking-tight">
            Ready to Build Your Next <br />
            <span className="text-shimmer font-black">AI Advantage?</span>
          </h2>

          {/* Paragraph */}
          <p className="mb-10 font-body text-[0.95rem] sm:text-[1.02rem] leading-relaxed text-slate-500 max-w-2xl font-medium">
            From intelligent automation and deep-tech products to founder ecosystem support, TECH6SENSE AI helps businesses and entrepreneurs turn bold ideas into scalable AI execution.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full mb-10">
            {/* Primary Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto relative group px-8 py-4 rounded-xl text-white font-semibold text-[0.95rem] overflow-hidden bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-violet-500/10 hover:shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-2"
            >
              <span className="cta-btn-shine-effect" />
              Schedule Consultation
            </a>

            {/* Secondary Button */}
            <a
              href="#ecosystem"
              className="w-full sm:w-auto group px-8 py-4 rounded-xl text-[#0B0527] font-semibold text-[0.95rem] border border-slate-200/80 bg-white/40 hover:bg-white/80 hover:border-slate-350 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore TECH6SENSE Ecosystem
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 text-violet-600 font-bold">
                →
              </span>
            </a>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <span>AI solutions</span>
            <span className="text-violet-400">•</span>
            <span>Deep-tech products</span>
            <span className="text-fuchsia-400">•</span>
            <span>Founder ecosystem support</span>
          </div>

        </div>
      </div>
    </section>
  );
}
