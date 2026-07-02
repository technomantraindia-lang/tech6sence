import React, { useEffect, useState, useRef } from 'react';

export default function CrossIndustryTechnologyFit() {
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

  const branches = [
    {
      title: "Automation Systems",
      desc: "Agents, workflow logic, task routing, and operational automation.",
      position: "left"
    },
    {
      title: "Predictive Intelligence",
      desc: "Forecasting, analytics, risk models, and decision-support systems.",
      position: "right"
    },
    {
      title: "Visual Intelligence",
      desc: "Image, video, object, and pattern recognition for real-world monitoring.",
      position: "left"
    },
    {
      title: "Connected Product Ecosystems",
      desc: "Smart devices, IoT systems, AI wearables, and cloud-connected products.",
      position: "right"
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
              TECHNOLOGY FIT
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            One AI Foundation, Multiple Industry Outcomes
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            TECH6SENSE AI builds adaptable intelligence layers that can be customized across industries, teams, workflows, and product ecosystems.
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Connecting SVG Lines (Desktop) */}
          <svg className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none" fill="none" stroke="currentColor">
            {isVisible && (
              <>
                <path d="M 50% 15% L 50% 50% L 25% 50% L 25% 25%" stroke="url(#violet-gradient-arch)" strokeWidth="1.5" className="animate-[drawFlow_2s_ease-out_forwards]" strokeDasharray="1000" strokeDashoffset="1000" />
                <path d="M 50% 15% L 50% 50% L 75% 50% L 75% 25%" stroke="url(#violet-gradient-arch)" strokeWidth="1.5" className="animate-[drawFlow_2s_ease-out_forwards]" strokeDasharray="1000" strokeDashoffset="1000" />
                <path d="M 50% 15% L 50% 50% L 25% 50% L 25% 75%" stroke="url(#violet-gradient-arch)" strokeWidth="1.5" className="animate-[drawFlow_2s_ease-out_forwards]" strokeDasharray="1000" strokeDashoffset="1000" />
                <path d="M 50% 15% L 50% 50% L 75% 50% L 75% 75%" stroke="url(#violet-gradient-arch)" strokeWidth="1.5" className="animate-[drawFlow_2s_ease-out_forwards]" strokeDasharray="1000" strokeDashoffset="1000" />
              </>
            )}
            <defs>
              <linearGradient id="violet-gradient-arch" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Foundation Node */}
          <div className={`relative z-20 mb-16 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="bg-slate-900 px-8 py-5 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-slate-800">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-white text-base tracking-wide whitespace-nowrap">
                TECH6SENSE AI
              </span>
              <span className="font-mono text-[0.6rem] text-slate-400 uppercase tracking-widest mt-1">Foundation</span>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 bg-violet-500 rounded-2xl blur-xl opacity-20 -z-10 animate-pulse" />
          </div>

          {/* Branches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-32 w-full relative z-10">
            {branches.map((branch, i) => (
              <div 
                key={i} 
                className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 hover:shadow-md hover:border-violet-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${500 + (i * 150)}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {branch.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-slate-600 leading-relaxed pl-6">
                  {branch.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawFlow {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </section>
  );
}
