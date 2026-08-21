import React, { useRef, useState, useEffect } from 'react';

const STEPS = [
  {
    id: 1,
    stage: 'S',
    name: 'Sense',
    subtitle: 'OPPORTUNITY MAPPING',
    whatHappens: 'Signal mapping across data, workflow, and market. We establish what is knowable before deciding what is buildable.',
    whatYouReceive: 'Opportunity map, data readiness assessment, prioritised use-case portfolio',
    color: '#1746D2', // Royal Blue
    gradient: 'from-[#1746D2] to-[#1746D2]/80',
    badgeBg: 'bg-[#1746D2]/10 text-[#1746D2] border-[#1746D2]/25',
    receiveBg: 'bg-[#1746D2]/5 border-[#1746D2]/20',
    nodeColor: 'border-[#1746D2] bg-[#1746D2]/10 text-[#1746D2]'
  },
  {
    id: 2,
    stage: 'E',
    name: 'Engineer',
    subtitle: 'PRODUCTION BUILD',
    whatHappens: 'Architecture and build — models, pipelines, interfaces, and integration into the systems your people already use.',
    whatYouReceive: 'Production architecture, working system, integration layer',
    color: '#00A86B', // Emerald Green
    gradient: 'from-[#00A86B] to-[#1746D2]',
    badgeBg: 'bg-[#00A86B]/10 text-[#00A86B] border-[#00A86B]/25',
    receiveBg: 'bg-[#00A86B]/5 border-[#00A86B]/20',
    nodeColor: 'border-[#00A86B] bg-[#00A86B]/10 text-[#00A86B]'
  },
  {
    id: 3,
    stage: 'N',
    name: 'Navigate',
    subtitle: 'RISK & GOVERNANCE',
    whatHappens: 'Governance, risk, regulatory alignment, and model accountability designed in — not retrofitted after an audit.',
    whatYouReceive: 'Governance framework, risk register, compliance documentation, evaluation protocol',
    color: '#D4AF37', // Gold
    gradient: 'from-[#D4AF37] to-[#00A86B]',
    badgeBg: 'bg-[#D4AF37]/10 text-[#B89220] border-[#D4AF37]/30',
    receiveBg: 'bg-[#D4AF37]/5 border-[#D4AF37]/25',
    nodeColor: 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#B89220]'
  },
  {
    id: 4,
    stage: 'S',
    name: 'Scale',
    subtitle: 'GLOBAL DEPLOYMENT',
    whatHappens: 'Multi-region, multi-team, multi-workload deployment with performance and cost held to a defined envelope.',
    whatYouReceive: 'Deployment across markets, monitoring stack, cost and latency baselines',
    color: '#1746D2', // Royal Blue
    gradient: 'from-[#1746D2] to-[#00A86B]',
    badgeBg: 'bg-[#1746D2]/10 text-[#1746D2] border-[#1746D2]/25',
    receiveBg: 'bg-[#1746D2]/5 border-[#1746D2]/20',
    nodeColor: 'border-[#1746D2] bg-[#1746D2]/10 text-[#1746D2]'
  },
  {
    id: 5,
    stage: 'E',
    name: 'Evolve',
    subtitle: 'CONTINUOUS IMPROVEMENT',
    whatHappens: "Continuous evaluation and retraining, so the system's advantage compounds instead of decaying.",
    whatYouReceive: 'Improvement cadence, drift monitoring, quarterly performance review',
    color: '#00A86B', // Emerald Green
    gradient: 'from-[#00A86B] to-[#D4AF37]',
    badgeBg: 'bg-[#00A86B]/10 text-[#00A86B] border-[#00A86B]/25',
    receiveBg: 'bg-[#00A86B]/5 border-[#00A86B]/20',
    nodeColor: 'border-[#00A86B] bg-[#00A86B]/10 text-[#00A86B]'
  }
];

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

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

  const currentStep = STEPS.find((s) => s.id === activeTab) || STEPS[0];

  return (
    <section ref={sectionRef} id="how-we-work" className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-slate-100 font-body">
      
      {/* Background decorative halos using Royal Blue & Emerald */}
      <div className="absolute top-0 right-0 w-full max-w-[800px] h-[600px] bg-gradient-to-bl from-[#1746D2]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[500px] bg-gradient-to-tr from-[#00A86B]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        {/* Section Header */}
        <div 
          className="mb-14 md:mb-16 text-center max-w-3xl mx-auto transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#1746D2] rounded-full" />
            <h2 className="text-[#1746D2] font-mono font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              THE DELIVERY FRAMEWORK — S.E.N.S.E.
            </h2>
            <span className="h-[2px] w-8 bg-[#00A86B] rounded-full" />
          </div>

          <h3 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] font-extrabold text-slate-900 tracking-tight mb-6">
            Five stages.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#D4AF37]">
              No pilots that die in production.
            </span>
          </h3>

          <p className="font-body text-[1rem] md:text-[1.1rem] leading-[1.75] text-slate-600 font-medium max-w-2xl mx-auto">
            The failure rate of enterprise AI is not a modelling problem. It is a sequencing problem — organisations build before they understand, deploy before they govern, and scale before they can measure. The S.E.N.S.E. framework exists to make each of those failures structurally impossible.
          </p>
        </div>

        {/* 5 Horizontal Tab Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-8 max-w-[1300px] mx-auto">
          {STEPS.map((step) => {
            const isActive = activeTab === step.id;

            const activeBorderStyle = isActive
              ? { borderColor: step.color, boxShadow: `0 10px 25px -5px ${step.color}25` }
              : {};

            const badgeBgStyle = isActive
              ? { backgroundColor: step.color, color: '#ffffff' }
              : {};

            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                style={activeBorderStyle}
                className={`group relative flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl md:rounded-3xl border text-center transition-all duration-300 select-none cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-white border-2 scale-[1.03] z-10'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200/90 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Stage Alphabet Badge */}
                <div 
                  style={badgeBgStyle}
                  className={`w-9 h-9 rounded-full font-display text-sm font-black flex items-center justify-center mb-2.5 transition-all duration-300 shadow-xs ${
                    !isActive ? 'bg-slate-100 text-slate-600 group-hover:bg-[#1746D2]/10 group-hover:text-[#1746D2]' : ''
                  }`}
                >
                  {step.stage}
                </div>

                {/* Stage Name */}
                <div className={`font-display text-xs md:text-sm font-extrabold uppercase tracking-wider mb-1 ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                  {step.stage} — {step.name}
                </div>

                {/* Subtitle */}
                <div 
                  style={isActive ? { color: step.color } : {}}
                  className={`font-mono text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-wider ${
                    !isActive ? 'text-slate-400' : ''
                  }`}
                >
                  {step.subtitle}
                </div>

                {/* Bottom Accent Bar inside card border bounds */}
                {isActive && (
                  <div 
                    style={{ backgroundColor: step.color }}
                    className="absolute bottom-0 inset-x-0 h-1 rounded-b-2xl md:rounded-b-3xl" 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Box */}
        <div className="max-w-[1300px] mx-auto bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden transition-all duration-500">
          
          {/* Top Header inside Detail Box */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8 gap-4 flex-wrap">
            <span className={`px-4 py-1.5 rounded-full font-display text-sm font-extrabold uppercase tracking-wider border ${currentStep.badgeBg}`}>
              {currentStep.subtitle}
            </span>
            <span className="font-mono text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">
              STAGE 0{currentStep.id} / 05
            </span>
          </div>

          {/* Grid Layout inside Detail Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column: Pixel-Perfect SVG Architecture Visual */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50/90 via-white to-slate-100/70 rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-inner flex flex-col items-center justify-center min-h-[290px] relative overflow-hidden group">
              
              {/* Subtle Grid Accent & Ambient Glow */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00A86B]/5 rounded-full blur-2xl pointer-events-none" />

              {/* Vector SVG Architecture Flow Diagram - Perfectly Matching Reference Layout */}
              <div className="relative z-10 w-full max-w-[320px] h-[160px] flex items-center justify-center">
                
                <svg className="w-full h-full overflow-visible" viewBox="0 0 320 160" fill="none">
                  {/* Node 1 Line (Royal Blue #1746D2) */}
                  <circle cx="25" cy="35" r="5" stroke="#1746D2" strokeWidth="2.5" fill="white" />
                  <path d="M 30 35 L 75 35 Q 90 35 90 50 L 90 80" stroke="#1746D2" strokeWidth="2" strokeDasharray="4 3" />
                  
                  {/* Node 2 Line (Emerald Green #00A86B) */}
                  <circle cx="25" cy="80" r="5" stroke="#00A86B" strokeWidth="2.5" fill="white" />
                  <path d="M 30 80 L 110 80" stroke="#00A86B" strokeWidth="2" />

                  {/* Node 3 Line (Gold #D4AF37) */}
                  <circle cx="25" cy="125" r="5" stroke="#D4AF37" strokeWidth="2.5" fill="white" />
                  <path d="M 30 125 L 75 125 Q 90 125 90 110 L 90 80" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 3" />

                  {/* Merged Trunk Line entering Central Box */}
                  <path d="M 90 80 L 110 80" stroke="#00A86B" strokeWidth="2.5" />

                  {/* Output Line from Central Box to Checkmark */}
                  <path d="M 210 80 L 255 80" stroke="#00A86B" strokeWidth="2" />
                </svg>

                {/* Overlaid Central Stage Card & Output Node */}
                <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-1">
                  
                  {/* Left Spacer to align with SVG circles */}
                  <div className="w-10" />

                  {/* Central Stage Box (White Card with Green Accent Border & Generous Spacing) */}
                  <div className="w-28 h-28 rounded-2xl bg-white border-2 border-[#00A86B]/70 shadow-xl flex flex-col items-center justify-center p-3 relative pointer-events-auto transition-transform hover:scale-105 duration-300">
                    <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-white border border-[#00A86B] text-[#00A86B] font-mono text-[8px] font-extrabold uppercase tracking-widest shadow-xs z-10 whitespace-nowrap">
                      STAGE 0{currentStep.id}
                    </div>
                    
                    <div className="w-10 h-10 rounded-xl bg-[#00A86B]/12 text-[#00A86B] flex items-center justify-center font-display font-black text-base my-1 border border-[#00A86B]/20 shadow-2xs">
                      {currentStep.stage}
                    </div>
                    
                    <span className="font-display text-[0.7rem] font-black text-slate-900 uppercase tracking-wider">
                      {currentStep.name}
                    </span>
                  </div>

                  {/* Output Checkmark Node (Green Box) */}
                  <div className="w-9 h-9 rounded-xl border-2 border-[#00A86B] bg-white flex items-center justify-center text-[#00A86B] shadow-sm pointer-events-auto">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>

                </div>

              </div>

              {/* Status Badge below drawing */}
              <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-2xs relative z-10">
                <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse" />
                <span className="font-display text-sm font-extrabold text-slate-700 uppercase tracking-wider">
                  S.E.N.S.E. STAGE 0{currentStep.id} ARCHITECTURE ACTIVE
                </span>
              </div>

            </div>

            {/* Right Column: Detailed Copy */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <h4 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                {currentStep.stage} — {currentStep.name}
              </h4>

              <div className="space-y-6">
                {/* What Happens */}
                <div>
                  <div className="font-display text-sm font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                    WHAT HAPPENS:
                  </div>
                  <p className="font-body text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                    {currentStep.whatHappens}
                  </p>
                </div>

                {/* What You Receive */}
                <div>
                  <div className="font-display text-sm font-extrabold text-[#00A86B] uppercase tracking-wider mb-2">
                    WHAT YOU RECEIVE:
                  </div>
                  <div className={`p-4 md:p-5 rounded-2xl border text-slate-900 font-semibold text-sm md:text-base leading-snug ${currentStep.receiveBg}`}>
                    {currentStep.whatYouReceive}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
