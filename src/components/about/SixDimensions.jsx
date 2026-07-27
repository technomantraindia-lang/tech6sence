import React, { useEffect, useState, useRef } from 'react';

export default function SixDimensions() {
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

  const dimensions = [
    { 
      title: "Intelligence", 
      desc: "Advanced AI systems and smart decision-making.", 
      lineTo: "500,100", 
      cls: "top-[2%] left-1/2 -translate-x-1/2 text-center items-center" 
    },
    { 
      title: "Growth", 
      desc: "Founder and business transformation support.", 
      lineTo: "800,200", 
      cls: "top-[20%] right-[2%] text-left items-start" 
    },
    { 
      title: "Integration", 
      desc: "Cloud, data, and enterprise AI deployment.", 
      lineTo: "800,500", 
      cls: "bottom-[20%] right-[2%] text-left items-start" 
    },
    { 
      title: "Future", 
      desc: "Continuous research and evolving intelligence.", 
      lineTo: "500,600", 
      cls: "bottom-[2%] left-1/2 -translate-x-1/2 text-center items-center" 
    },
    { 
      title: "Community", 
      desc: "Business Brains network and collaboration.", 
      lineTo: "200,500", 
      cls: "bottom-[20%] left-[2%] text-right items-end" 
    },
    { 
      title: "Innovation", 
      desc: "Deep-tech products and future-ready ideas.", 
      lineTo: "200,200", 
      cls: "top-[20%] left-[2%] text-right items-end" 
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Header Area */}
        <div 
          className={`flex flex-col items-center text-center max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-700 bg-violet-100 px-3 py-1.5 rounded-full border border-violet-200">
              Our Philosophy
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-extrabold tracking-tight text-slate-900 mb-6">
            The Six Dimensions Behind <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">TECH6SENSE AI</span>
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            The TECH6SENSE philosophy connects intelligence, innovation, growth, community, integration, and future research into one AI-driven ecosystem.
          </p>
        </div>

        {/* Desktop Visual Layout (Hexagon Orbit) */}
        <div className="hidden lg:block relative w-full max-w-[1000px] h-[700px] mx-auto mt-20">
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 700">
            <defs>
              <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(124,58,237,0.2)" />
                <stop offset="100%" stopColor="rgba(217,70,239,0.2)" />
              </linearGradient>
            </defs>
            {dimensions.map((d, i) => {
              const [x2, y2] = d.lineTo.split(',');
              return (
                <line
                  key={`line-${i}`}
                  x1="500" y1="350"
                  x2={x2} y2={y2}
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                  style={{
                    strokeDasharray: '450',
                    strokeDashoffset: isVisible ? '0' : '450',
                    transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${400 + i * 150}ms`
                  }}
                />
              );
            })}
          </svg>

          {/* Center Node */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white border border-slate-100 shadow-[0_15px_40px_rgba(124,58,237,0.15)] flex flex-col items-center justify-center p-6 text-center transition-all duration-1000 ease-out z-20 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            {/* Subtle glow behind center */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100/40 to-fuchsia-100/40 rounded-full blur-md animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-violet-100/50 m-2" />
            <span className="font-display font-extrabold text-xl text-slate-900 mb-1.5 relative z-10">TECH6SENSE AI</span>
            <span className="font-body text-[9px] uppercase font-bold text-violet-600 tracking-widest relative z-10">One Ecosystem</span>
          </div>

          {/* Surrounding Nodes */}
          {dimensions.map((d, i) => (
            <div 
              key={`node-${i}`}
              className={`absolute w-[240px] p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-700 ease-out hover:border-violet-300 hover:shadow-[0_8px_25px_rgba(124,58,237,0.08)] hover:-translate-y-1 cursor-default flex flex-col z-10 ${
                d.cls
              } ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${800 + i * 150}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              </div>
              <h4 className="font-display text-base font-bold text-slate-900 mb-1.5">{d.title}</h4>
              <p className="font-body text-xs text-slate-500 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Grid Layout */}
        <div className="lg:hidden mt-16 flex flex-col items-center relative">
          
          {/* Mobile Center Node */}
          <div 
            className={`w-40 h-40 mb-10 rounded-full bg-white border border-slate-100 shadow-[0_15px_40px_rgba(124,58,237,0.15)] flex flex-col items-center justify-center p-4 text-center transition-all duration-1000 ease-out relative z-20 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100/40 to-fuchsia-100/40 rounded-full blur-md animate-pulse" />
            <span className="font-display font-extrabold text-base text-slate-900 mb-1 relative z-10">TECH6SENSE AI</span>
            <span className="font-body text-[8px] uppercase font-bold text-violet-600 tracking-widest relative z-10">One Ecosystem</span>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {dimensions.map((d, i) => (
              <div 
                key={`mobile-node-${i}`}
                className={`w-full p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-violet-50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-slate-900">{d.title}</h4>
                </div>
                <p className="font-body text-xs text-slate-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
