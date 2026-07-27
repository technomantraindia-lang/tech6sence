import React, { useEffect, useState, useRef } from 'react';

export default function ProductDevelopmentApproach() {
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

  const steps = [
    {
      title: "Concept & Use-Case Strategy",
      desc: "Define the product purpose, users, business value, and technical direction."
    },
    {
      title: "AI & Data Layer Planning",
      desc: "Plan intelligence models, data flow, sensors, and decision logic."
    },
    {
      title: "Prototype & Interface Design",
      desc: "Design product experience, user interface, connected app, or dashboard layer."
    },
    {
      title: "Hardware-Software Integration",
      desc: "Connect AI models, devices, cloud systems, APIs, and product workflows."
    },
    {
      title: "Testing & Scale Readiness",
      desc: "Validate usability, performance, reliability, and real-world deployment readiness."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              DEVELOPMENT APPROACH
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            How We Build AI-Enabled Products
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            Deep-tech product development requires clear use cases, AI planning, interface design, hardware-software integration, and real-world testing.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12 md:mt-24 w-full max-w-6xl mx-auto">
          
          {/* Desktop Horizontal Progress Line */}
          <div className="hidden lg:block absolute top-[28px] left-10 right-10 h-[2px] bg-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-[2000ms] ease-out"
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>
          
          {/* Mobile Vertical Progress Line */}
          <div className="lg:hidden absolute top-10 bottom-10 left-[28px] w-[2px] bg-slate-200">
             <div 
              className="w-full bg-gradient-to-b from-violet-500 to-fuchsia-500 transition-all duration-[2000ms] ease-out"
              style={{ height: isVisible ? '100%' : '0%' }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8 flex-1 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 lg:translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + (i * 200)}ms` }}
              >
                {/* Number Node */}
                <div className="relative shrink-0 w-14 h-14 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center z-10 group-hover:border-violet-400 transition-colors duration-500">
                  <div className="w-6 h-6 rounded-full bg-violet-50 text-[11px] font-bold text-violet-700 flex items-center justify-center">
                    0{i + 1}
                  </div>
                  {/* Subtle active glow */}
                  {isVisible && (
                    <div 
                      className="absolute inset-0 rounded-full border border-violet-400 animate-ping opacity-20"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  )}
                </div>
                
                {/* Content */}
                <div className="lg:text-center flex-1 pt-1 lg:pt-0">
                  <h3 className="font-display text-base md:text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
