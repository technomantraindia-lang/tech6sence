import React, { useEffect, useState, useRef } from 'react';

export default function IndustryOverview() {
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

  const introPoints = [
    {
      title: "Industry-Specific AI Strategy",
      desc: "AI planning based on real business functions, users, and operational goals.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Workflow-Aligned Automation",
      desc: "Automation systems designed around how teams actually work.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Scalable Digital Intelligence",
      desc: "Solutions built to grow from pilot use cases to enterprise-ready deployment.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header Area */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              INDUSTRY APPROACH
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 mb-6 leading-tight">
            AI Built Around Real Industry Problems
          </h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Every industry has different workflows, data, compliance needs, customer expectations, and operational challenges. TECH6SENSE AI designs intelligent systems that fit these realities instead of forcing one-size-fits-all solutions.
          </p>
        </div>

        {/* Intro Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {introPoints.map((point, i) => (
            <div 
              key={i} 
              className={`group relative p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-500 ease-out hover:shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:border-violet-200 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + (i * 150)}ms` }}
            >
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mb-6 group-hover:bg-violet-100 transition-colors">
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
    </section>
  );
}
