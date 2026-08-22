import React from 'react';

export default function ComparisonSection() {
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
    <section className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE DIFFERENCE
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Why BUSINESS BRAINS is Different
          </h2>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-2 text-sm font-extrabold tracking-wider uppercase font-display border-b border-slate-800">
            <div className="p-6 bg-slate-950 text-white border-r border-slate-800">Traditional Networking</div>
            <div className="p-6 bg-[#00A86B] text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              BUSINESS BRAINS
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/15">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 text-sm md:text-base font-medium transition-colors hover:brightness-105">
                <div className="p-6 text-white bg-slate-900 border-r border-slate-800 flex items-center gap-3 font-medium">
                  <span className="text-red-400 font-mono font-bold text-xs">✕</span>
                  {row.traditional}
                </div>
                <div className="p-6 text-white bg-[#1746D2] font-extrabold flex items-center gap-3">
                  <span className="text-emerald-300 font-mono font-bold text-xs">✓</span>
                  {row.businessBrains}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stacked Cards View */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-xl">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Comparison 0{idx + 1}</div>
              <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs font-medium border border-slate-800">
                <span className="text-red-400 font-bold mr-2">Traditional:</span> {row.traditional}
              </div>
              <div className="p-3.5 rounded-xl bg-[#1746D2] text-white text-xs font-extrabold">
                <span className="text-emerald-300 font-bold mr-2">BUSINESS BRAINS:</span> {row.businessBrains}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
