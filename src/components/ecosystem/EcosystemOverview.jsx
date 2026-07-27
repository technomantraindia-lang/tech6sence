import React, { useEffect, useState, useRef } from 'react';

export default function EcosystemOverview() {
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

  const overviewPoints = [
    {
      title: "Founder Vision",
      desc: "Support for founders who want to convert ideas into AI-first products, platforms, and ventures.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Business Intelligence",
      desc: "Strategic thinking for business models, market fit, growth planning, and practical execution.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "AI Product Building",
      desc: "Technology support for building intelligent systems, AI products, automation, and digital platforms.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Growth Network",
      desc: "An ecosystem of business minds, experts, partners, and opportunities that support long-term scale.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Header Area */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              ECOSYSTEM OVERVIEW
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 mb-6 leading-tight">
            More Than AI Development — A Complete Innovation Ecosystem
          </h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Building an AI-first company needs more than technology. It needs the right vision, strategy, product direction, business thinking, market understanding, and growth network. TECH6SENSE AI connects these layers to help founders and businesses move from idea to intelligent execution.
          </p>
        </div>

        {/* Intro Points / Network Flow */}
        <div className="relative">
          {/* Subtle Connecting Lines Background (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-violet-300 to-fuchsia-300 transition-all duration-[2000ms] ease-out origin-left"
              style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {overviewPoints.map((point, i) => (
              <div 
                key={i} 
                className={`group relative p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-500 ease-out hover:shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-violet-200 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + (i * 150)}ms` }}
              >
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-violet-50 transition-colors shadow-sm">
                  {point.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
