import React, { useEffect, useState, useRef } from 'react';

export default function BusinessBrains() {
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

  const focusAreas = [
    {
      title: "Business Strategy",
      desc: "Shape practical business models, growth direction, and market positioning.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Market Intelligence",
      desc: "Understand customer needs, industry gaps, competition, and opportunity areas.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Investment Readiness",
      desc: "Prepare stronger business narratives, product logic, and growth-focused direction.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Partnership Thinking",
      desc: "Connect ideas with experts, collaborators, technology partners, and business networks.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Execution Planning",
      desc: "Convert business thinking into structured action plans and implementation priorities.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 lg:mb-32 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              BUSINESS BRAINS
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Where Business Thinking Meets AI Opportunity
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            Business Brains connects strategy, market understanding, innovation thinking, and execution support to help AI-driven ideas become practical business opportunities.
          </p>
        </div>

        {/* Network Layout */}
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Central Network Node */}
          <div className={`relative z-20 mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="w-40 h-40 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-50 to-fuchsia-50 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 bg-white rounded-full z-10" />
              <div className="relative z-20 text-center">
                <span className="font-display font-extrabold text-lg text-slate-900 block leading-tight">Business</span>
                <span className="font-display font-extrabold text-lg text-violet-600 block leading-tight">Brains</span>
                <span className="font-display font-extrabold text-lg text-slate-900 block leading-tight">Network</span>
              </div>
            </div>
          </div>

          {/* Connected Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full relative z-10">
            {focusAreas.map((area, i) => (
              <div 
                key={i} 
                className={`group relative p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-500 ease-out hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:border-violet-200 lg:first:col-start-1 lg:last:col-start-3 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + (i * 150)}ms` }}
              >
                
                <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mb-6 group-hover:bg-violet-100 group-hover:scale-110 transition-all duration-300">
                  {area.icon}
                </div>
                
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">
                  {area.title}
                </h3>
                
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {area.desc}
                </p>

                {/* Subtle Hover Underline */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
