import React from 'react';

export default function WhyBusinessBrainsExists() {
  const comparisonRows = [
    { traditional: "Random conversations", businessBrains: "Curated business relationships" },
    { traditional: "Limited local network", businessBrains: "Global ecosystem" },
    { traditional: "Occasional events", businessBrains: "Ongoing collaboration" },
    { traditional: "Passive membership", businessBrains: "Active opportunity creation" },
    { traditional: "Generic discussions", businessBrains: "AI, innovation and business-focused insights" },
    { traditional: "Limited follow-up", businessBrains: "Continuous ecosystem support" },
    { traditional: "Contacts", businessBrains: "Strategic partnerships" },
    { traditional: "Networking", businessBrains: "Business outcomes" }
  ];

  return (
    <section id="triad" className="relative bg-[#000110] text-white py-20 md:py-28 border-b border-slate-800/80 overflow-hidden scroll-mt-32">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-900/15 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: WHY BUSINESS BRAINS EXISTS Text */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
              <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
                WHY BUSINESS BRAINS EXISTS
              </span>
              <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-display">
              Beyond Networking. We Are a Wealth & Innovation Engine.
            </h2>

            <div className="text-slate-300 text-base md:text-lg leading-relaxed font-medium space-y-4 text-justify md:text-left">
              <p className="text-justify md:text-left">
                The era of conventional business networking is obsolete. True global dominance requires a fusion of strategic capital, unmatched market intelligence, and technological supremacy.
              </p>
              <p className="text-justify md:text-left">
                Business Brains was established with a singular, uncompromising mandate: to unite the top 1% of global minds. We provide a secure, private ecosystem where the world's most formidable leaders collaborate to scale ventures, orchestrate high-yield exits, and deploy AI-driven strategies that redefine industries.
              </p>
            </div>
          </div>

          {/* Right Column: Why BUSINESS BRAINS is Different Table */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-left mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Why BUSINESS BRAINS is Different
              </h3>
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
              {/* Table Header — Dark with white text */}
              <div className="grid grid-cols-2 text-xs md:text-sm font-extrabold tracking-wider uppercase font-display border-b border-slate-800 bg-slate-950">
                <div className="p-5 bg-slate-950 text-white border-r border-slate-800 flex items-center">
                  TRADITIONAL NETWORKING
                </div>
                <div className="p-5 bg-slate-950 text-white flex items-center gap-2 font-extrabold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A86B] animate-pulse" />
                  BUSINESS BRAINS
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-white/10">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-2 text-xs md:text-sm font-bold transition-colors">
                    {/* Blue left side */}
                    <div className="p-4.5 text-white bg-[#1746D2] border-r border-slate-800/80 flex items-center gap-3 font-semibold">
                      <span className="text-white/80 font-mono font-bold text-xs">✕</span>
                      {row.traditional}
                    </div>
                    {/* Green right side */}
                    <div className="p-4.5 text-white bg-[#00A86B] font-extrabold flex items-center gap-3">
                      <span className="text-white font-mono font-bold text-xs">✓</span>
                      {row.businessBrains}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Stacked Cards View */}
            <div className="sm:hidden space-y-3">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 shadow-xl text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Comparison 0{idx + 1}</div>
                  <div className="p-3 rounded-xl bg-[#1746D2] text-white text-xs font-medium border border-blue-600/30">
                    <span className="text-white/80 font-bold mr-2">Traditional:</span> {row.traditional}
                  </div>
                  <div className="p-3 rounded-xl bg-[#00A86B] text-white text-xs font-extrabold">
                    <span className="text-white font-bold mr-2">BUSINESS BRAINS:</span> {row.businessBrains}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
