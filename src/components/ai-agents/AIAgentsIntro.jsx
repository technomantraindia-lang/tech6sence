import React, { useEffect, useState, useRef } from 'react';

export default function AIAgentsIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
    {
      title: "Automate Repetitive Work",
      desc: "Reduce manual task handling across departments.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Connect Tools and Data",
      desc: "Build workflows that connect systems, teams, and business information.",
      icon: (
        <svg className="w-5 h-5 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: "Support Smarter Decisions",
      desc: "Use AI logic to assist teams with faster and more reliable actions.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Header Content */}
        <div 
          className={`max-w-3xl mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              Service Overview
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            What AI Agents & Automation Mean for Your Business
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-2xl">
            AI agents are intelligent digital workers that can understand tasks, interact with data, trigger workflows, and support business decisions. Combined with automation, they help organizations reduce repetitive work and build more responsive operations.
          </p>
        </div>

        {/* Intro Points Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {points.map((point, i) => (
            <div 
              key={i} 
              className={`group relative p-8 bg-white border border-slate-200 rounded-3xl shadow-[0_4px_20px_rgba(15,23,42,0.02)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(124,58,237,0.06)] hover:border-violet-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} 
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mb-6 border border-violet-100">
                {point.icon}
              </div>
              
              <h3 className="font-display text-lg md:text-xl font-bold text-slate-900 mb-3">
                {point.title}
              </h3>
              
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                {point.desc}
              </p>
              
              {/* Soft Hover Underline Effect */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] rounded-b-3xl overflow-hidden">
                <div className="h-full w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 ease-out group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
