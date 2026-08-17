import React from 'react';

export default function ProductDevelopmentApproach() {
  const steps = [
    {
      num: "01",
      title: "Ideation & Architecture",
      desc: "You bring the vision. Our AI and hardware architects map out the feasibility, component sourcing, and edge-AI requirements.",
      badgeBg: "bg-blue-100 text-blue-700",
      cardBg: "bg-blue-50/40 hover:bg-blue-50/70"
    },
    {
      num: "02",
      title: "Prototyping & Firmware",
      desc: "We build the physical alpha units alongside custom, highly secure firmware and companion mobile applications.",
      badgeBg: "bg-emerald-100 text-emerald-700",
      cardBg: "bg-emerald-50/40 hover:bg-emerald-50/70"
    },
    {
      num: "03",
      title: "Testing & Certification",
      desc: "Rigorous global compliance testing (FCC, CE, RoHS, FDA) to ensure your product is legally and technically ready for a global rollout.",
      badgeBg: "bg-blue-100 text-blue-700",
      cardBg: "bg-blue-50/40 hover:bg-blue-50/70"
    },
    {
      num: "04",
      title: "Mass Production & Fulfillment",
      desc: "We spin up our world-class manufacturing lines, delivering packaged, retail-ready deep-tech products directly to your distribution hubs.",
      badgeBg: "bg-emerald-100 text-emerald-700",
      cardBg: "bg-emerald-50/40 hover:bg-emerald-50/70"
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[150px] bg-blue-100/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
              THE INNOVATION ENGINE
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            From Vision to Global Launch in 4 Steps
          </p>
        </div>

        {/* 4-Step Process Timeline - Frameless cards styled with themed Royal Blue and Embedded Green background tints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
