import React, { useEffect, useState, useRef } from 'react';

export default function GlobalPresence() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const points = [
    "India Innovation Base",
    "Global AI Vision",
    "Enterprise-Ready Solutions",
    "Founder & Investor Ecosystem"
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      
      {/* Background Soft Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-50/60 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-50/40 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div 
            className={`flex flex-col items-start transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-700">
                Global Presence
              </span>
            </div>
            
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-tight font-extrabold tracking-tight text-slate-900 mb-6 max-w-lg">
              Built from <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">GIFT City.</span><br />
              Designed for Global Possibilities.
            </h2>
            
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
              With its base in GIFT City, Gandhinagar, Gujarat, TECH6SENSE AI operates with a global mindset — helping businesses, founders, and innovators explore future-ready AI opportunities.
            </p>

            {/* Credibility Labels */}
            <div className="flex flex-wrap gap-3">
              {points.map((point, index) => (
                <div 
                  key={index}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 transition-all duration-700 ease-out hover:border-violet-300 hover:bg-violet-50/50 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <svg className="w-3.5 h-3.5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-xs md:text-sm font-semibold text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Global Map Visual */}
          <div 
            className={`relative w-full aspect-square max-h-[600px] flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Abstract Dotted Map / Grid Area */}
            <div className="absolute inset-0 rounded-full border border-slate-100 bg-slate-50/30 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Soft Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="map-lines" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(124,58,237,0.4)" />
                    <stop offset="100%" stopColor="rgba(217,70,239,0.1)" />
                  </linearGradient>
                </defs>
                {/* GIFT City node at roughly (280, 260) */}
                <path 
                  d="M280 260 Q150 150 100 200 M280 260 Q350 150 420 180 M280 260 Q350 350 400 380 M280 260 Q180 350 120 400 M280 260 Q200 100 220 80 M280 260 Q400 250 450 280" 
                  stroke="url(#map-lines)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeDasharray="800"
                  strokeDashoffset={isVisible ? "0" : "800"}
                  className="transition-all duration-[2000ms] ease-in-out delay-500"
                />
              </svg>

              {/* Minimal Global Nodes */}
              <div className="absolute top-[200px] left-[100px] w-2 h-2 rounded-full bg-violet-300" />
              <div className="absolute top-[180px] right-[80px] w-2.5 h-2.5 rounded-full bg-fuchsia-300" />
              <div className="absolute bottom-[120px] right-[100px] w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="absolute bottom-[100px] left-[120px] w-2 h-2 rounded-full bg-fuchsia-200" />
              <div className="absolute top-[80px] left-[220px] w-1.5 h-1.5 rounded-full bg-violet-400" />
              
              {/* Main Node (GIFT City) */}
              <div className="absolute top-[260px] left-[280px] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-violet-200/50 rounded-full animate-ping opacity-75" />
                  <div className="absolute w-8 h-8 bg-violet-300/40 rounded-full animate-pulse" />
                  <div className="relative w-4 h-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-[0_0_15px_rgba(124,58,237,0.5)] border-2 border-white" />
                </div>

                {/* Floating Label */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm">
                  <span className="text-[10px] font-bold text-slate-700">GIFT City, Gandhinagar</span>
                </div>
              </div>
            </div>

            {/* Location Card Overflowing slightly */}
            <div 
              className={`absolute -bottom-6 md:bottom-10 left-4 md:-left-12 w-[280px] p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(124,58,237,0.12)] z-30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center shrink-0 border border-violet-100">
                  <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900 mb-1">TECH6SENSE AI</h4>
                  <p className="font-body text-xs text-slate-500 leading-relaxed mb-1">
                    GIFT City, Gandhinagar
                  </p>
                  <p className="font-body text-xs text-slate-500 leading-relaxed mb-3">
                    Gujarat, India
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Active Hub</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
