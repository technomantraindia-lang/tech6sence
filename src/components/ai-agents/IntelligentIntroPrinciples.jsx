import React from 'react';

export default function IntelligentIntroPrinciples() {
  const principles = [
    {
      title: "Engineering over experimentation",
      desc: "every deliverable is built for production, not proof-of-concept theater."
    },
    {
      title: "Governance as architecture",
      desc: "compliance, auditability, and explainability are designed in, not bolted on."
    },
    {
      title: "One accountable partner",
      desc: "no fragmented vendor chains across strategy, build, and operations."
    },
    {
      title: "Global reach, sovereign sensitivity",
      desc: "engineering that respects data residency and regulatory nuance across every market served."
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Intro & Mandate Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="col-span-1 lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
                Introduction
              </span>
            </div>
            
            <h2 className="font-display text-[clamp(1.85rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
              Converting AI Ambition Into Measurable Operating Advantage.
            </h2>

            <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
              TECH6SENSE AI is a global AI Development and Deep-Tech engineering company that builds the intelligent infrastructure enterprises run on — from proprietary AI products and autonomous agents to enterprise-grade software, cloud, and governance systems. TECH6SENSE AI partners with enterprises, governments, and category-defining startups to convert AI ambition into measurable operating advantage.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-5">
            {/* Our Mandate Card - Styled with Royal Blue and Embedded Green hints */}
            <div className="p-8 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/30 shadow-[0_10px_30px_rgba(37,99,235,0.03)] relative overflow-hidden mb-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl pointer-events-none" />
              
              <span className="block font-mono text-[0.65rem] font-bold text-blue-600 uppercase tracking-widest mb-3">
                OUR MANDATE
              </span>
              
              <p className="font-display text-base md:text-lg font-bold text-slate-900 leading-relaxed">
                To deliver secure, scalable, and high-ROI technology solutions that future-proof global enterprises against an exponentially evolving digital landscape.
              </p>
            </div>

            {/* Master Tagline Card - Styled with Royal Blue Background */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-blue-950 text-white shadow-md">
              <span className="block font-mono text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest mb-2">
                OUR VISION
              </span>
              <p className="font-display text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-emerald-300 to-white italic">
                "Engineering the Sixth Sense of Enterprise Intelligence."
              </p>
            </div>

          </div>

        </div>

        {/* Our Operating Principles */}
        <div className="pt-12 border-t border-slate-100">
          <div className="mb-10">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-2 block">
              CORE PHILOSOPHY
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Operating Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Corrected Alignment Circle: removed inline-block, kept clean flex center alignment, styled in Royal Blue & Embedded Green */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-mono text-xs font-bold mb-6 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
                    0{idx + 1}
                  </div>
                  
                  <h4 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {pr.title}
                  </h4>
                  
                  <p className="font-body text-sm text-slate-600 leading-relaxed font-medium">
                    — {pr.desc}
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
