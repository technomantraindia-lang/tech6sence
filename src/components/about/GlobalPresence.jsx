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
              Built for <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Global Impact.</span><br />
              Engineered for Scale.
            </h2>
            
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
              TECH6SENSE AI operates with a global mindset — helping enterprises, founders, and innovators across the world scale with future-ready AI opportunities.
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
          </div>          {/* Right Column: Global Network Operations Console */}
          <div 
            className={`relative w-full aspect-square max-h-[600px] flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Console Frame */}
            <div className="relative w-full h-[90%] md:h-[95%] max-w-[480px] p-6 md:p-8 rounded-3xl border border-slate-200 bg-slate-50/50 backdrop-blur-md shadow-xl flex flex-col justify-between overflow-hidden">
              
              {/* Decorative Tech Accents */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500" />
              <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-400 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>SYS.ACTIVE // Live Telemetry</span>
              </div>

              {/* Console Header */}
              <div className="border-b border-slate-100 pb-4 mb-4">
                <span className="text-[10px] font-bold text-violet-700 uppercase tracking-widest font-mono">Operations Command</span>
                <h3 className="font-display text-lg font-bold text-slate-800 mt-1">Global AI Node Network</h3>
              </div>

              {/* Radar Scanner Area */}
              <div className="relative flex-grow flex items-center justify-center my-4 h-[180px] md:h-[220px]">
                {/* Dotted circle target */}
                <div className="absolute w-40 h-40 rounded-full border border-dashed border-violet-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-dashed border-violet-200/50 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-violet-200/30 flex items-center justify-center" />
                  </div>
                </div>

                {/* Sweeping Radar SVG */}
                <svg className="absolute w-44 h-44 animate-[spin_5s_linear_infinite]" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id="radar-sweep" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(124, 58, 237, 0.15)" />
                      <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
                    </radialGradient>
                  </defs>
                  {/* Rotating sweep line */}
                  <line x1="100" y1="100" x2="100" y2="0" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1.5" />
                  {/* Sweep gradient */}
                  <path d="M100,100 L100,0 A100,100 0 0,1 170.7,29.3 Z" fill="url(#radar-sweep)" />
                </svg>

                {/* Telemetry Dots popping on radar */}
                <div className="absolute top-[35%] left-[25%] w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_#7c3aed] animate-ping" />
                <div className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_8px_#d946ef] animate-pulse" />
                <div className="absolute bottom-[25%] right-[20%] w-2.5 h-2.5 rounded-full bg-violet-600 shadow-[0_0_10px_#7c3aed] animate-ping" />
                <div className="absolute bottom-[30%] left-[35%] w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
              </div>

              {/* Node Lists (Real-Time Metrics) */}
              <div className="space-y-3 font-mono text-[11px] text-slate-600">
                
                {/* Node 1: NA Hub */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-violet-100 transition-colors shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-800">Node::US-WEST</span>
                    <span className="text-[9px] text-slate-400 font-normal">SF / NY</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>Ping: <span className="text-violet-600 font-bold">14ms</span></span>
                    <span className="w-12 bg-slate-100 h-1 rounded-full overflow-hidden inline-block">
                      <span className="block bg-violet-500 h-full w-[45%]" />
                    </span>
                  </div>
                </div>

                {/* Node 2: Europe Hub */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-fuchsia-100 transition-colors shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-800">Node::EU-WEST</span>
                    <span className="text-[9px] text-slate-400 font-normal">London</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>Ping: <span className="text-fuchsia-600 font-bold">32ms</span></span>
                    <span className="w-12 bg-slate-100 h-1 rounded-full overflow-hidden inline-block">
                      <span className="block bg-fuchsia-500 h-full w-[60%]" />
                    </span>
                  </div>
                </div>

                {/* Node 3: APAC Hub */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-violet-100 transition-colors shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-800">Node::APAC-S</span>
                    <span className="text-[9px] text-slate-400 font-normal">Singapore</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>Ping: <span className="text-violet-600 font-bold">48ms</span></span>
                    <span className="w-12 bg-slate-100 h-1 rounded-full overflow-hidden inline-block">
                      <span className="block bg-violet-500 h-full w-[35%]" />
                    </span>
                  </div>
                </div>

                {/* Node 4: IndiaHQ */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-violet-50 to-fuchsia-50/20 border border-violet-200 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 animate-pulse" />
                    <span className="font-bold text-violet-950">HQ::CENTRAL</span>
                    <span className="text-[9px] text-violet-500 font-bold">Core Node</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-violet-950">Ping: <span className="font-bold">4ms</span></span>
                    <span className="w-12 bg-violet-200 h-1 rounded-full overflow-hidden inline-block">
                      <span className="block bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full w-[85%]" />
                    </span>
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
