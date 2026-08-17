import React from 'react';

export default function IntelligentDeliverValue() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We align AI capabilities with your core business objectives.",
      badgeBg: "bg-blue-100 text-blue-700",
      cardBg: "bg-blue-50/40 hover:bg-blue-50/70"
    },
    {
      num: "02",
      title: "Data Architecture",
      desc: "Structuring pipelines to feed clean, structured data into advanced models.",
      badgeBg: "bg-emerald-100 text-emerald-700",
      cardBg: "bg-emerald-50/40 hover:bg-emerald-50/70"
    },
    {
      num: "03",
      title: "Engineering & Training",
      desc: "Building Custom AI Models and Agentic workflows with rigorous testing.",
      badgeBg: "bg-blue-100 text-blue-700",
      cardBg: "bg-blue-50/40 hover:bg-blue-50/70"
    },
    {
      num: "04",
      title: "Deployment & MLOps",
      desc: "Ensuring zero-downtime integration and continuous model optimization.",
      badgeBg: "bg-emerald-100 text-emerald-700",
      cardBg: "bg-emerald-50/40 hover:bg-emerald-50/70"
    },
    {
      num: "05",
      title: "Governance & Security",
      desc: "Shielding your IP and ensuring compliance with global regulatory standards.",
      badgeBg: "bg-blue-100 text-blue-700",
      cardBg: "bg-blue-50/40 hover:bg-blue-50/70"
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[150px] bg-blue-100/5 blur-[100px] rounded-full" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
              DELIVERY METHODOLOGY
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            How We Deliver Value
          </h2>
          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Our 5-step engineering framework ensures predictable, high-impact enterprise execution.
          </p>
        </div>

        {/* 5-Step Process Timeline - Frameless cards styled with themed Royal Blue and Embedded Green background tints */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((st, i) => (
            <div 
              key={i} 
              className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between border-0 ${st.cardBg}`}
            >
              <div>
                <span className={`font-mono text-xs font-extrabold px-3 py-1 rounded-full inline-block mb-4 ${st.badgeBg}`}>
                  STEP {st.num}
                </span>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mb-3">
                  {st.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
