import React from 'react';

export default function ProductIntelligenceStack() {
  const phases = [
    { num: "01", name: "Product Discovery", desc: "Validate the market opportunity, define product vision, user personas, business goals, competitive positioning, and technical feasibility.", isBlue: true },
    { num: "02", name: "Industrial Design", desc: "Create ergonomic, aesthetically refined, and manufacturable product designs focused on usability and premium user experience.", isBlue: false },
    { num: "03", name: "Electronics Engineering", desc: "Design custom PCB architectures, sensor integrations, power systems, communication modules, and hardware optimization.", isBlue: true },
    { num: "04", name: "Embedded AI Development", desc: "Develop intelligent firmware and Edge AI capabilities that enable real-time decision-making directly on the device.", isBlue: false },
    { num: "05", name: "Software Ecosystem", desc: "Build companion mobile applications, cloud platforms, APIs, analytics dashboards, and enterprise integrations.", isBlue: true },
    { num: "06", name: "Prototype Development", desc: "Rapid prototyping, iterative testing, functional validation, and engineering refinement before production.", isBlue: false },
    { num: "07", name: "Testing & Validation", desc: "Conduct reliability, safety, environmental, performance, cybersecurity, and compliance testing to meet global standards.", isBlue: true },
    { num: "08", name: "Manufacturing Support", desc: "Assist with supplier sourcing, design for manufacturing (DFM), production planning, quality control, and factory coordination.", isBlue: false },
    { num: "09", name: "Product Launch", desc: "Support branding, packaging, certifications, documentation, marketing, and global commercialization.", isBlue: true },
    { num: "10", name: "Lifecycle Innovation", desc: "Provide OTA updates, AI model improvements, feature expansion, product roadmap planning, and long-term engineering support.", isBlue: false }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-100/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
              END-TO-END PRODUCT DEVELOPMENT
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            One Partner. Complete Product Journey.
          </h2>
        </div>

        {/* 10 Phases Grid - Frameless cards styled with themed backgrounds and slight solid box shadow on hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {phases.map((ph, idx) => {
            const cardBg = ph.isBlue 
              ? "bg-blue-50/40 hover:bg-blue-50 shadow-[2px_2px_4px_rgba(15,23,42,0.01)]" 
              : "bg-emerald-50/40 hover:bg-emerald-50 shadow-[2px_2px_4px_rgba(15,23,42,0.01)]";
            
            const badgeBg = ph.isBlue 
              ? "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white" 
              : "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white";

            const hoverText = ph.isBlue 
              ? "group-hover:text-blue-900" 
              : "group-hover:text-emerald-950";

            const hoverTransform = "hover:-translate-y-2 hover:scale-[1.03]";

            const hoverGlow = ph.isBlue
              ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.15)]"
              : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.15)]";

            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl transition-all duration-300 border border-transparent flex flex-col justify-between group cursor-default select-none ${cardBg} ${hoverTransform} ${hoverGlow}`}
              >
                <div>
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold mb-4 transition-all duration-500 ease-out group-hover:rotate-[360deg] ${badgeBg}`}>
                    {ph.num}
                  </span>
                  <h3 className={`font-display text-base font-extrabold text-slate-900 transition-colors duration-300 mb-2 leading-snug ${hoverText}`}>
                    {ph.name}
                  </h3>
                  <p className="font-body text-xs text-slate-600 leading-relaxed font-semibold">
                    {ph.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
