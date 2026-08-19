import React from 'react';

export default function WhyEliteJoin() {
  const pillars = [
    {
      number: "01",
      title: "The Capital Nexus — Unrivaled Deal Flow",
      desc: "Direct access to curated co-investment syndicates, institutional venture rounds, and proprietary deep-tech pipelines cleared by comprehensive technical due diligence.",
      points: [
        "Vetted deal pipelines",
        "Co-investment structures",
        "Institutional round participation"
      ],
      icon: (
        <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "The AI Arsenal — Powered by TECH6SENSE AI",
      desc: "Priority access to proprietary AI architecture, model audits, enterprise integration frameworks, and technological supremacy from TECH6SENSE AI engineers.",
      points: [
        "Proprietary AI frameworks",
        "Technical due diligence",
        "Enterprise AI integration"
      ],
      icon: (
        <svg className="w-7 h-7 text-[#1746D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "The Brain Trust — Elite Strategic Intelligence",
      desc: "Confidential Chatham House executive roundtables, advisory placements, cross-border intelligence briefs, and direct access to high-level decision makers.",
      points: [
        "Board & advisor placements",
        "Confidential executive circles",
        "Cross-border intelligence"
      ],
      icon: (
        <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 md:py-32 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-[0.25em] mb-4 block"
          >
            THE THREE PILLARS
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-4"
          >
            Why the Elite Join
          </h2>

          <p 
            className="text-slate-600 text-base md:text-lg leading-relaxed font-normal"
          >
            We provide our members with an insurmountable competitive advantage through three distinct pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-cyan-600 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 
                  className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors"
                >
                  {pillar.title}
                </h3>

                <p 
                  className="text-slate-600 text-sm leading-relaxed mb-8 font-normal"
                >
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                {pillar.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
