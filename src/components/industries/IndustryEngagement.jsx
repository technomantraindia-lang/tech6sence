import React, { useEffect, useState, useRef } from 'react';

export default function IndustryEngagement() {
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

  const steps = [
    {
      num: "01",
      title: "Understand Industry Context",
      desc: "Study your workflows, users, data, challenges, and operational goals."
    },
    {
      num: "02",
      title: "Identify AI Opportunities",
      desc: "Find where automation, prediction, vision AI, copilots, or connected products can create value."
    },
    {
      num: "03",
      title: "Design the Right AI Architecture",
      desc: "Plan the right mix of models, data layers, integrations, interfaces, and deployment approach."
    },
    {
      num: "04",
      title: "Build, Test, and Scale",
      desc: "Develop the solution with real-world usability, performance, security, and scale in mind."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 lg:mb-28 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              INDUSTRY ENGAGEMENT
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            How We Approach Your Industry Use Case
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            Every AI initiative starts with understanding the industry context. TECH6SENSE AI studies your workflows, data, users, systems, and goals before shaping the right AI roadmap.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-[2000ms] ease-out origin-left"
              style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-12 bottom-12 left-8 w-[2px] bg-slate-200">
            <div 
              className="w-full bg-gradient-to-b from-violet-400 to-fuchsia-400 transition-all duration-[2000ms] ease-out origin-top"
              style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`group relative flex flex-col items-start lg:items-center text-left lg:text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + (i * 200)}ms` }}
              >
                
                {/* Step Node */}
                <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center mb-6 lg:mb-8 shadow-sm group-hover:border-violet-300 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 z-10 ml-0 lg:mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 font-display text-xl lg:text-2xl font-extrabold text-slate-900 group-hover:text-violet-700 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Step Content */}
                <div className="pl-20 lg:pl-0 w-full lg:w-auto -mt-16 lg:mt-0 pt-4 lg:pt-0">
                  <h3 className="font-display text-lg lg:text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed max-w-[280px] lg:mx-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Hover Underline Glow */}
                <div className="hidden lg:block absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-1/2 transition-all duration-500 rounded-full opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
