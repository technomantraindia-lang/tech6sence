import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function DeepTechFinalCTA() {
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
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-100/40 rounded-full blur-[100px] pointer-events-none transition-all duration-[2000ms] ease-in-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
      }`} />
      
      {/* Subtle Product Lab Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZTEyZjQ0IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50" />

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
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100">
              PRODUCT INNOVATION
            </span>
          </div>

          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Ready to Build the Next AI-Powered Product?
          </h2>

          <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Connect with TECH6SENSE AI to explore intelligent product concepts, AI-powered devices, wearable technology, healthcare innovation, or smart IoT systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="#discuss" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 font-body text-sm font-bold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Discuss Product Innovation
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            
            <Link to="#explore" className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 font-body text-sm font-bold text-slate-700 bg-white hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 transition-all">
              Explore AI Solutions
            </Link>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-mono font-medium text-slate-400">
            <span>AI wearables</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Smart devices</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Healthcare AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>IoT intelligence</span>
          </div>

        </div>
      </div>
    </section>
  );
}
