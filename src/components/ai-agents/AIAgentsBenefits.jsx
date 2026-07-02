import React, { useEffect, useState, useRef } from 'react';

export default function AIAgentsBenefits() {
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

  const benefits = [
    { title: "Faster Operations", desc: "Reduce delays in repetitive workflows and everyday business processes." },
    { title: "Lower Manual Load", desc: "Free teams from repetitive tasks so they can focus on higher-value work." },
    { title: "Better Consistency", desc: "Standardize task execution, routing, and decision-support logic." },
    { title: "Scalable Workflows", desc: "Build automation systems that grow with your business operations." }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-[85rem] px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Side: Statement */}
          <div 
            className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                Business Value
              </span>
            </div>
            
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-extrabold text-slate-900 mb-8 tracking-tight">
              Why Businesses Use AI Agents & Automation
            </h2>
            
            <div className="pl-6 border-l-2 border-violet-200">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-snug">
                Move repetitive work from manual effort to intelligent execution.
              </h3>
              <p className="font-body text-slate-600 text-lg leading-relaxed">
                AI automation helps teams save time, reduce dependency on repetitive manual work, and create more consistent business operations.
              </p>
            </div>
          </div>

          {/* Right Side: Benefits Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className={`group p-8 bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-violet-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + (i * 150)}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mb-6 border border-violet-100 group-hover:bg-violet-100 transition-colors">
                  <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
