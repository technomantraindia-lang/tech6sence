import React, { useEffect, useState, useRef } from 'react';

export default function ProductIntelligenceStack() {
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

  const layers = [
    {
      name: "Experience Layer",
      desc: "User interface, mobile app, dashboard, alerts, insights, and human interaction.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Cloud & Integration Layer",
      desc: "APIs, dashboards, databases, remote monitoring, and enterprise connectivity.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      name: "AI Layer",
      desc: "Models, reasoning, prediction, recognition, automation, and personalized intelligence.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "Data Layer",
      desc: "Signals, usage data, health data, operational data, and real-time product inputs.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      name: "Device Layer",
      desc: "Hardware, sensors, wearables, smart interfaces, and connected product touchpoints.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              PRODUCT INTELLIGENCE STACK
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            The Intelligence Layers Behind Every Product
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            Every deep-tech product needs connected layers — from device hardware and data signals to AI models, cloud systems, and user experience.
          </p>
        </div>

        {/* Stack Visual */}
        <div className="max-w-4xl mx-auto relative perspective-1000">
          <div className="flex flex-col gap-4">
            {layers.map((layer, idx) => (
              <div 
                key={idx}
                className={`group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex items-center gap-6 shadow-[0_4px_15px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + (idx * 150)}ms` }}
              >
                {/* Connecting subtle line between layers (skip on last) */}
                {idx < layers.length - 1 && (
                  <div className="absolute top-full left-14 w-0.5 h-4 bg-gradient-to-b from-slate-200 to-transparent pointer-events-none" />
                )}

                {/* Layer Icon */}
                <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-violet-50 group-hover:border-violet-100 transition-colors">
                  {layer.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                    {layer.name}
                  </h3>
                  <p className="font-body text-sm md:text-base text-slate-600 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
                
                {/* Right Decorative Badge */}
                <div className="hidden md:flex flex-col gap-1 items-end opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-1 bg-violet-200 rounded-full" />
                  <div className="w-4 h-1 bg-fuchsia-200 rounded-full" />
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </section>
  );
}
