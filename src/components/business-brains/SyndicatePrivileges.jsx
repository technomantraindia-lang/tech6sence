import React from 'react';

export default function SyndicatePrivileges() {
  const privileges = [
    {
      title: "The Sovereign Deal Room",
      desc: "Confidential deal rooms for co-investment, secondary transactions, and private placements among vetted members.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "TECH6SENSE AI Supremacy",
      desc: "Priority access to proprietary AI architecture, model audits, deep-tech research, and enterprise transformation frameworks.",
      icon: (
        <svg className="w-6 h-6 text-[#1746D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "The Inner Circle Summits",
      desc: "Exclusive flagship summits hosted in premier global innovation hubs including Dubai, London, New York, and Singapore.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "The Intelligence Briefs",
      desc: "Quarterly sovereign tech reports, macro economic trend forecasts, and regulatory policy analysis prepared for members.",
      icon: (
        <svg className="w-6 h-6 text-[#1746D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-white text-slate-900 py-24 md:py-32 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-[0.25em] mb-4 block"
          >
            PRIVATE ACCESS
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950"
          >
            Syndicate Privileges
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privileges.map((priv, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:shadow-md relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Locked visual treatment badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {priv.icon}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/70 border border-cyan-200 text-[11px] font-mono font-bold text-cyan-800">
                  <svg className="w-3.5 h-3.5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Private Syndicate Privilege</span>
                </div>
              </div>

              <div>
                <h3 
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors"
                >
                  {priv.title}
                </h3>

                <p 
                  className="text-slate-600 text-sm leading-relaxed font-normal"
                >
                  {priv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
