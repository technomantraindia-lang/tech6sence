import React, { useEffect, useState, useRef } from 'react';

export default function AIAgentsUseCases() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const useCases = [
    {
      id: "sales",
      title: "Sales & Lead Operations",
      desc: "Lead qualification, follow-up reminders, CRM updates, and proposal workflow support."
    },
    {
      id: "support",
      title: "Customer Support",
      desc: "Ticket routing, response suggestions, knowledge base assistance, and support automation."
    },
    {
      id: "hr",
      title: "HR & Admin",
      desc: "Candidate screening, internal request handling, onboarding flows, and document automation."
    },
    {
      id: "finance",
      title: "Finance & Operations",
      desc: "Invoice processing, report preparation, approval workflows, and exception alerts."
    },
    {
      id: "production",
      title: "Production & Field Teams",
      desc: "Task tracking, inspection workflows, reporting automation, and field activity coordination."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              Use Cases
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Where AI Agents Can Work Inside Your Business
          </h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            AI agents can support teams across departments by handling repetitive tasks, routing information, preparing updates, and keeping workflows moving.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Department Rail / Tabs */}
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto pb-6 md:pb-0 hide-scrollbar mask-edges">
            {useCases.map((useCase, idx) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-shrink-0 relative px-6 py-3 rounded-full font-body text-sm font-semibold transition-all duration-300 border ${
                  activeTab === idx 
                  ? 'bg-violet-600 text-white border-violet-600 shadow-md' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-violet-300 hover:bg-violet-50'
                }`}
              >
                {useCase.title}
                {/* Thin active line indicator */}
                {activeTab === idx && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-600 md:hidden" />
                )}
              </button>
            ))}
          </div>

          {/* Active Content Block */}
          <div className="mt-8 md:mt-12 mx-auto max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative min-h-[220px] flex items-center">
            
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-12 w-full">
              {useCases.map((useCase, idx) => (
                <div 
                  key={useCase.id}
                  className={`transition-all duration-500 absolute inset-0 p-8 md:p-12 flex flex-col justify-center ${
                    activeTab === idx 
                    ? 'opacity-100 translate-y-0 z-10' 
                    : 'opacity-0 translate-y-4 -z-10 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                    {useCase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-edges { -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); }
        @media (min-width: 768px) { .mask-edges { -webkit-mask-image: none; mask-image: none; } }
      `}} />
    </section>
  );
}
