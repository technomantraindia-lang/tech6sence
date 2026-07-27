import React, { useEffect, useState, useRef } from 'react';

export default function VisionaryFounders() {
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
      title: "Idea Clarity",
      desc: "Understand the founder’s vision, problem statement, audience, and opportunity."
    },
    {
      num: "02",
      title: "AI Possibility Mapping",
      desc: "Identify where AI, automation, data, or deep-tech product thinking can create value."
    },
    {
      num: "03",
      title: "Product Direction",
      desc: "Shape the product concept, features, user experience, and technology roadmap."
    },
    {
      num: "04",
      title: "Build & Launch Support",
      desc: "Support development, testing, refinement, and market-ready execution."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`mb-16 lg:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              VISIONARY FOUNDERS
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight max-w-2xl">
            For Founders Building the Future with AI
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-2xl">
            Visionary Founders is designed for entrepreneurs, innovators, and business creators who want to transform ideas into AI-first products, platforms, and scalable ventures.
          </p>
        </div>

        {/* Founder Journey Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Side: Strong Statement Area */}
          <div className={`lg:col-span-5 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm transition-all duration-1000 delay-200 ease-out relative overflow-hidden ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-50 to-white rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-slate-900 mb-6 leading-tight">
                From Idea to AI-First Venture
              </h3>
              <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed">
                TECH6SENSE AI helps founders shape ideas, validate possibilities, design intelligent products, and move toward execution with the right mix of AI strategy, product thinking, and business direction.
              </p>
            </div>
          </div>

          {/* Right Side: Journey Steps */}
          <div className={`lg:col-span-7 relative transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            {/* Vertical Connecting Line */}
            <div className="absolute top-4 bottom-4 left-[27px] w-px bg-slate-200">
              <div 
                className="w-full bg-gradient-to-b from-violet-400 to-fuchsia-400 transition-all duration-[2000ms] ease-out origin-top"
                style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
              />
            </div>

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <div key={i} className="group relative flex gap-6 md:gap-8 items-start">
                  
                  {/* Step Node */}
                  <div className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:border-violet-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-500">
                    <span className="font-display text-lg font-bold text-slate-400 group-hover:text-violet-600 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="pt-2">
                    <h4 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                      {step.title}
                    </h4>
                    <p className="font-body text-slate-600 text-sm leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Highlight Strip */}
        <div className={`bg-violet-900 rounded-2xl p-6 md:p-8 text-center border border-violet-800 shadow-xl transition-all duration-1000 delay-500 ease-out overflow-hidden relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="font-display font-bold text-sm text-violet-200 uppercase tracking-widest">
              Best suited for:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base font-body font-medium text-white">
              <span>Startup founders</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400/50" />
              <span>Product innovators</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400/50" />
              <span>Business owners</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400/50" />
              <span>AI-first entrepreneurs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
