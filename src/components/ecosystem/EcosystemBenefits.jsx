import React, { useEffect, useState, useRef } from 'react';

export default function EcosystemBenefits() {
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

  const stages = [
    {
      num: "1",
      title: "Clarity",
      desc: "Understand the idea, opportunity, users, and AI potential."
    },
    {
      num: "2",
      title: "Strategy",
      desc: "Shape the business model, product direction, and execution roadmap."
    },
    {
      num: "3",
      title: "Technology",
      desc: "Build AI systems, automation, platforms, products, and intelligent workflows."
    },
    {
      num: "4",
      title: "Network",
      desc: "Connect with business minds, experts, collaborators, and growth opportunities."
    },
    {
      num: "5",
      title: "Scale",
      desc: "Prepare ideas and solutions for market growth, enterprise adoption, and long-term impact."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 lg:mb-28 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              ECOSYSTEM BENEFITS
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            What the Ecosystem Helps You Achieve
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            The TECH6SENSE AI Ecosystem is built to help ideas move from vision to clarity, from clarity to execution, and from execution to long-term growth.
          </p>
        </div>

        {/* Pathway Layout */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Continuous Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-[2500ms] ease-out origin-left"
              style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </div>

          {/* Continuous Line (Mobile) */}
          <div className="lg:hidden absolute top-[28px] bottom-[28px] left-[28px] w-px bg-slate-200">
            <div 
              className="w-full bg-gradient-to-b from-violet-400 to-fuchsia-400 transition-all duration-[2500ms] ease-out origin-top"
              style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
            />
          </div>

          {/* Nodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {stages.map((stage, i) => (
              <div 
                key={i} 
                className={`group relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + (i * 200)}ms` }}
              >
                
                {/* Stage Node */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center mb-0 lg:mb-6 shadow-sm group-hover:border-violet-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-500 z-10 ml-0 lg:mx-auto relative">
                  <div className="absolute inset-0 bg-violet-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <span className="font-display font-bold text-slate-400 group-hover:text-violet-600 transition-colors text-lg">
                    {stage.num}
                  </span>
                </div>

                {/* Stage Content */}
                <div className="pl-6 lg:pl-0 pt-3 lg:pt-0">
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                    {stage.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed max-w-[250px] lg:mx-auto">
                    {stage.desc}
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
