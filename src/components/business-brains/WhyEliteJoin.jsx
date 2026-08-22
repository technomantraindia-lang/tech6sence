import React from 'react';

export default function WhyEliteJoin() {
  const pillars = [
    {
      number: "I",
      title: "I. The Capital Nexus (Unrivaled Deal Flow)",
      desc: "Bypass the public markets and traditional venture bottlenecks. Our inner circle has first-look access to vetted, off-market investments, exclusive syndications, and high-yield acquisitions. If a deal is poised to reshape an industry, it is discussed here first.",
      points: [
        "Vetted off-market investments",
        "Exclusive syndicate deals",
        "First-look acquisition rounds"
      ],
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "II",
      title: "II. The AI Arsenal (Powered by TECH6SENSE AI)",
      desc: "In the modern economy, technological stagnation is a death sentence. Members receive direct, priority integration with TECH6SENSE AI, leveraging enterprise-grade artificial intelligence and IT infrastructure to automate operations, slash overhead, and scale exponentially faster than competitors.",
      points: [
        "Priority TECH6SENSE AI integration",
        "Enterprise IT infrastructure",
        "Operational automation & scaling"
      ],
      icon: (
        <svg className="w-7 h-7 text-[#1746D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "III",
      title: "III. The Brain Trust (Elite Strategic Intelligence)",
      desc: "Isolate yourself from noise and surround yourself with proven operators. Engage in closed-door digital masterminds and private, high-security summits held in global business capitals. Share board-level insights, navigate regulatory landscapes, and orchestrate legacy-building partnerships with peers who operate at your exact frequency.",
      points: [
        "Closed-door digital masterminds",
        "High-security global summits",
        "Board-level strategic partnerships"
      ],
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="syndicate" className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              WHY THE ELITE JOIN
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 font-display">
            Why the Elite Join
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            We provide our members with an insurmountable competitive advantage through three distinct pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-emerald-600 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors font-display">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-normal text-justify md:text-left">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                {pillar.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
