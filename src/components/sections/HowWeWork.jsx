import React, { useRef, useState, useEffect } from 'react';

const STEPS = [
  {
    stage: 'S',
    name: 'Sense',
    whatHappens: 'Signal mapping across data, workflow, and market. We establish what is knowable before deciding what is buildable.',
    whatYouReceive: 'Opportunity map, data readiness assessment, prioritised use-case portfolio.',
    color: 'from-[#1746D2] to-[#1746D2]',
    iconColor: 'text-[#1746D2]',
    bg: 'bg-[#1746D2]/10'
  },
  {
    stage: 'E',
    name: 'Engineer',
    whatHappens: 'Architecture and build — models, pipelines, interfaces, and integration into the systems your people already use.',
    whatYouReceive: 'Production architecture, working system, integration layer.',
    color: 'from-[#00A86B] to-[#00A86B]',
    iconColor: 'text-[#00A86B]',
    bg: 'bg-[#00A86B]/10'
  },
  {
    stage: 'N',
    name: 'Navigate',
    whatHappens: 'Governance, risk, regulatory alignment, and model accountability designed in — not retrofitted after an audit.',
    whatYouReceive: 'Governance framework, risk register, compliance documentation, evaluation protocol.',
    color: 'from-[#D4AF37] to-[#D4AF37]',
    iconColor: 'text-[#D4AF37]',
    bg: 'bg-[#D4AF37]/10'
  },
  {
    stage: 'S',
    name: 'Scale',
    whatHappens: 'Multi-region, multi-team, multi-workload deployment with performance and cost held to a defined envelope.',
    whatYouReceive: 'Deployment across markets, monitoring stack, cost and latency baselines.',
    color: 'from-[#1746D2] to-[#1746D2]',
    iconColor: 'text-[#1746D2]',
    bg: 'bg-[#1746D2]/10'
  },
  {
    stage: 'E',
    name: 'Evolve',
    whatHappens: "Continuous evaluation and retraining, so the system's advantage compounds instead of decaying.",
    whatYouReceive: 'Improvement cadence, drift monitoring, quarterly performance review.',
    color: 'from-[#00A86B] to-[#00A86B]',
    iconColor: 'text-[#00A86B]',
    bg: 'bg-[#00A86B]/10'
  }
];

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-we-work" className="py-24 md:py-32 bg-[#FAFBFF] relative overflow-hidden border-t border-slate-100">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full max-w-[800px] h-[600px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[500px] bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        {/* Section Header */}
        <div 
          className="mb-20 text-center max-w-3xl mx-auto transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
            <h2 className="text-blue-600 font-mono font-bold tracking-[0.2em] uppercase text-sm">
              THE DELIVERY FRAMEWORK — S.E.N.S.E.
            </h2>
            <span className="h-[2px] w-8 bg-gradient-to-l from-blue-500 to-emerald-500 rounded-full" />
          </div>

          <h3 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] font-extrabold text-slate-900 tracking-tight mb-6">
            Five stages.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              No pilots that die in production.
            </span>
          </h3>

          <p className="font-body text-[1.05rem] md:text-[1.15rem] leading-[1.75] text-slate-600 font-medium">
            The failure rate of enterprise AI is not a modelling problem. It is a sequencing problem — organisations build before they understand, deploy before they govern, and scale before they can measure. The S.E.N.S.E. framework exists to make each of those failures structurally impossible.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative w-full max-w-[1400px] mx-auto">
          {/* Main vertical connecting line */}
          <div className="absolute left-[2.25rem] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-100 via-slate-200 to-emerald-100 -translate-x-1/2 hidden md:block z-0"></div>

          <div className="space-y-12 md:space-y-16 relative z-10">
            {STEPS.map((step, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 transition-all duration-700 ease-out group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: `${200 + (idx * 150)}ms` }}
              >
                
                {/* Center Node (Hidden on mobile for better layout) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-14 h-14 bg-white rounded-full border-4 border-[#FAFBFF] shadow-sm z-20 transition-transform duration-500 group-hover:scale-110">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-display font-bold text-xl shadow-inner`}>
                    {step.stage}
                  </div>
                </div>

                {/* Horizontal Connector Line bridging Center Node to Card */}
                <div 
                  className={`hidden md:flex items-center absolute top-1/2 -translate-y-1/2 w-[4.5rem] z-10 pointer-events-none ${
                    idx % 2 === 0 ? 'right-1/2 flex-row-reverse' : 'left-1/2 flex-row'
                  }`}
                >
                  <div className="w-full h-[2px] bg-slate-200 transition-colors duration-500 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white group-hover:scale-125 shrink-0 transition-all duration-500`} />
                </div>

                {/* Mobile-only stage indicator */}
                <div className="md:hidden self-start flex items-center gap-4 mb-2">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-display font-bold text-2xl shadow-md`}>
                    {step.stage}
                  </div>
                  <h4 className="font-display text-2xl font-extrabold text-slate-900">{step.name}</h4>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4.5rem)] bg-white rounded-3xl p-7 md:p-9 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  
                  {/* Subtle background glow on hover */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 z-0`}></div>

                  <div className="relative z-10">
                    <h4 className="hidden md:block font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
                      {step.name}
                    </h4>

                    <div className="space-y-5">
                      <div>
                        <div className={`font-mono text-xs font-bold uppercase tracking-wider mb-2 ${idx % 2 === 0 ? 'md:justify-end' : ''} flex items-center gap-2 text-slate-400`}>
                          <span className={`w-1.5 h-1.5 rounded-full bg-slate-300`}></span>
                          What happens
                        </div>
                        <p className="text-slate-600 leading-relaxed text-[0.95rem] md:text-base">
                          {step.whatHappens}
                        </p>
                      </div>

                      <div className={`p-4 rounded-2xl ${step.bg} border border-white/50 relative overflow-hidden`}>
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.color}`}></div>
                        <div className={`font-mono text-[0.65rem] font-bold uppercase tracking-wider mb-1.5 ${step.iconColor}`}>
                          What you receive
                        </div>
                        <p className="text-slate-800 font-semibold leading-snug text-sm md:text-[0.95rem]">
                          {step.whatYouReceive}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Empty spacer for the other side of the timeline */}
                <div className="hidden md:block w-[calc(50%-4.5rem)]"></div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
