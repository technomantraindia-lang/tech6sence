import React, { useEffect, useState, useRef } from 'react';

export default function AIAgentsCapabilities() {
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

  const capabilities = [
    {
      title: "Autonomous AI Agents",
      desc: "Digital workers that understand instructions, process information, and execute defined tasks."
    },
    {
      title: "Workflow Automation",
      desc: "Automation flows that connect business steps, approvals, tools, and data sources."
    },
    {
      title: "Decision Support Systems",
      desc: "AI logic that helps teams evaluate information and make faster operational decisions."
    },
    {
      title: "Document & Data Processing",
      desc: "Automated extraction, classification, and routing of documents and business data."
    },
    {
      title: "Human-in-the-Loop Automation",
      desc: "AI workflows with approval points where human teams stay in control."
    },
    {
      title: "System Integration",
      desc: "Connecting CRMs, ERPs, dashboards, databases, APIs, and internal tools."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              Capabilities
            </span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Intelligent Automation Built Around Real Business Workflows
          </h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-2xl">
            From task-focused AI agents to connected automation pipelines, TECH6SENSE AI designs systems that understand business context, act across tools, and support teams with faster execution.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
          {capabilities.map((cap, i) => (
            <div 
              key={i} 
              className={`group relative p-8 md:p-10 border-r border-b border-slate-200 bg-white transition-all duration-500 hover:bg-violet-50/30 overflow-hidden ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${300 + (i * 100)}ms` }}
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-fuchsia-500 -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              
              <div className="text-violet-300 font-mono text-sm font-bold mb-6">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4 group-hover:text-violet-900 transition-colors">
                {cap.title}
              </h3>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                {cap.desc}
              </p>
              
              {/* Subtle Arrow */}
              <div className="mt-8 flex items-center justify-start opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
