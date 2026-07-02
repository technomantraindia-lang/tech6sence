import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function EcosystemFinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-violet-100/40 rounded-full blur-[100px] pointer-events-none transition-all duration-[2000ms] ease-in-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
      }`} />
      
      {/* Subtle Ecosystem Network Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjOGI1Y2Y2IiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPC9zdmc+')] opacity-60" />

      {/* Top Gradient Line Reveal */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-[2000ms] ease-out origin-left"
          style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[85rem] px-6 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-600 bg-white shadow-sm px-5 py-2 rounded-full border border-violet-100">
              AI ECOSYSTEM
            </span>
          </div>

          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight relative">
            <span className="relative z-10">Ready to Build, Grow, or Connect with the TECH6SENSE AI Ecosystem?</span>
          </h2>

          <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are a founder, business leader, investor, innovator, or enterprise team, TECH6SENSE AI can help you explore AI opportunities, shape intelligent products, and connect with a future-ready innovation ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="#connect" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 font-body text-sm font-bold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Connect with TECH6SENSE
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            
            <Link to="#explore" className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 font-body text-sm font-bold text-slate-700 bg-white hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 transition-all">
              Explore Intelligent Solutions
            </Link>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-mono font-medium text-slate-400">
            <span>Founders</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Business brains</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>AI experts</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Product builders</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Growth networks</span>
          </div>

        </div>
      </div>
    </section>
  );
}
