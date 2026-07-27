import React, { useEffect, useState, useRef } from 'react';

export default function AIAgentsWorkflow() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { title: "Understand the Task", desc: "The agent receives instructions, data, or a business trigger." },
    { title: "Read Context", desc: "It connects with tools, documents, databases, or previous interactions." },
    { title: "Take Action", desc: "It performs tasks such as routing, updating, generating, checking, or notifying." },
    { title: "Request Approval", desc: "For sensitive actions, the workflow pauses for human review." },
    { title: "Learn and Improve", desc: "Performance data helps refine logic, accuracy, and automation quality." }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              Workflow
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            How an AI Agent Workflow Comes Together
          </h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            A successful AI agent system is designed around business context, connected tools, controlled actions, and measurable improvement.
          </p>
        </div>

        {/* Workflow Line Layout */}
        <div className="relative mt-12 md:mt-24 w-full max-w-6xl mx-auto">
          
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-[2px] bg-slate-100">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-[2000ms] ease-out"
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>
          
          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute top-8 bottom-8 left-[28px] w-[2px] bg-slate-100">
             <div 
              className="w-full bg-gradient-to-b from-violet-500 to-fuchsia-500 transition-all duration-[2000ms] ease-out"
              style={{ height: isVisible ? '100%' : '0%' }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8 flex-1 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 lg:translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + (i * 200)}ms` }}
              >
                {/* Node */}
                <div className="relative shrink-0 w-14 h-14 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center z-10 transition-colors duration-500 hover:border-violet-400">
                  <div className="w-4 h-4 rounded-full bg-violet-100 text-[10px] font-bold text-violet-600 flex items-center justify-center">
                    {i + 1}
                  </div>
                  {/* Subtle active glow */}
                  {isVisible && (
                    <div 
                      className="absolute inset-0 rounded-full border border-violet-400 animate-ping opacity-20"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  )}
                </div>
                
                {/* Text Content */}
                <div className="lg:text-center mt-1 lg:mt-0 flex-1">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
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
