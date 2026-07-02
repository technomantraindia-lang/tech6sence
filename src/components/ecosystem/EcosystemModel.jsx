import React, { useEffect, useState, useRef } from 'react';

export default function EcosystemModel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    { title: "Visionary Founders", desc: "Entrepreneurs and innovators building AI-first ideas." },
    { title: "Business Brains", desc: "Business minds shaping strategy, growth, and execution." },
    { title: "AI Experts", desc: "Technical intelligence for models, automation, and AI systems." },
    { title: "Product Builders", desc: "Designers, developers, and engineers turning ideas into products." },
    { title: "Growth Partners", desc: "Networks and collaborators supporting scale and market reach." },
    { title: "Innovation Community", desc: "A shared space for learning, collaboration, and future-ready thinking." }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 lg:mb-32 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              ECOSYSTEM MODEL
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            One Ecosystem Connecting Vision, Intelligence, Technology, and Growth
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            The TECH6SENSE AI ecosystem brings together founder ambition, business strategy, AI development, product innovation, and growth networks into one connected model for intelligent execution.
          </p>
        </div>

        {/* Ecosystem Architecture Diagram */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center min-h-[600px]">
          
          {/* Circular Connecting Lines (Desktop only) */}
          <div className={`absolute inset-0 hidden lg:flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-[500px] h-[500px] rounded-full border border-violet-200/60 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-fuchsia-200/50 animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          {/* Lines drawn to nodes (Desktop only) */}
          <svg className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none z-0" viewBox="0 0 1000 600">
            {isVisible && (
              <>
                <line x1="500" y1="300" x2="250" y2="150" stroke="url(#line-grad)" strokeWidth="1.5" className="animate-[drawLine_1s_ease-out_forwards]" strokeDasharray="500" strokeDashoffset="500" />
                <line x1="500" y1="300" x2="750" y2="150" stroke="url(#line-grad)" strokeWidth="1.5" className="animate-[drawLine_1s_ease-out_forwards]" strokeDasharray="500" strokeDashoffset="500" />
                <line x1="500" y1="300" x2="150" y2="300" stroke="url(#line-grad)" strokeWidth="1.5" className="animate-[drawLine_1s_ease-out_forwards]" strokeDasharray="500" strokeDashoffset="500" />
                <line x1="500" y1="300" x2="850" y2="300" stroke="url(#line-grad)" strokeWidth="1.5" className="animate-[drawLine_1s_ease-out_forwards]" strokeDasharray="500" strokeDashoffset="500" />
                <line x1="500" y1="300" x2="250" y2="450" stroke="url(#line-grad)" strokeWidth="1.5" className="animate-[drawLine_1s_ease-out_forwards]" strokeDasharray="500" strokeDashoffset="500" />
                <line x1="500" y1="300" x2="750" y2="450" stroke="url(#line-grad)" strokeWidth="1.5" className="animate-[drawLine_1s_ease-out_forwards]" strokeDasharray="500" strokeDashoffset="500" />
              </>
            )}
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Hub */}
          <div className={`relative z-30 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-48 h-48 bg-slate-900 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white mb-12 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="absolute inset-0 bg-violet-500 rounded-full blur-2xl opacity-30 animate-pulse -z-10" />
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <span className="font-display font-extrabold text-white text-sm tracking-widest uppercase text-center leading-tight">
              TECH6SENSE AI<br/>Ecosystem
            </span>
          </div>

          {/* Pillars Layout */}
          <div className="w-full flex flex-col lg:block z-20 relative gap-6">
            {pillars.map((pillar, i) => {
              // Positioning for desktop circular layout
              const positions = [
                "lg:absolute lg:top-[10%] lg:left-[25%] lg:-translate-x-1/2",
                "lg:absolute lg:top-[10%] lg:right-[25%] lg:translate-x-1/2",
                "lg:absolute lg:top-[50%] lg:left-[10%] lg:-translate-x-1/2 lg:-translate-y-1/2",
                "lg:absolute lg:top-[50%] lg:right-[10%] lg:translate-x-1/2 lg:-translate-y-1/2",
                "lg:absolute lg:bottom-[10%] lg:left-[25%] lg:-translate-x-1/2",
                "lg:absolute lg:bottom-[10%] lg:right-[25%] lg:translate-x-1/2"
              ];
              
              return (
                <div 
                  key={i} 
                  className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:w-[280px] w-full group hover:border-violet-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] transition-all duration-500 ease-out ${positions[i]} ${
                    isVisible ? 'opacity-100 translate-y-0 lg:translate-y-0' : 'opacity-0 translate-y-12 lg:translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + (i * 150)}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-violet-400 group-hover:scale-150 transition-transform duration-300" />
                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </section>
  );
}
