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
    <section className="relative bg-white text-slate-900 py-24 md:py-32 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-[0.25em] mb-4 block"
          >
            THE DIFFERENCE
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950"
          >
            Why BUSINESS BRAINS is Different
          </h2>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-slate-100 border-b border-slate-200 p-6 text-sm font-bold tracking-wider uppercase font-mono">
            <div className="text-slate-500">Traditional Networking</div>
            <div className="text-cyan-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
              BUSINESS BRAINS
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-200">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 p-6 hover:bg-white transition-colors text-sm md:text-base">
                <div 
                  className="text-slate-500 flex items-center gap-3 pr-4 font-normal"
                >
                  <span className="text-red-500 text-xs font-mono">✕</span>
                  {row.traditional}
                </div>
                <div 
                  className="text-slate-900 font-bold flex items-center gap-3 pl-4 border-l border-slate-200"
                >
                  <span className="text-cyan-600 text-xs font-mono font-bold">✓</span>
                  {row.businessBrains}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stacked Cards View */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Comparison 0{idx + 1}</div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-slate-600 text-sm">
                <span className="text-red-600 font-bold mr-2">Traditional:</span> {row.traditional}
              </div>
              <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-100 text-slate-900 text-sm font-semibold">
                <span className="text-cyan-600 font-bold mr-2">BUSINESS BRAINS:</span> {row.businessBrains}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
