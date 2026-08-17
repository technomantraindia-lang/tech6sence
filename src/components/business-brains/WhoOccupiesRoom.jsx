import React from 'react';

export default function WhoOccupiesRoom() {
  const profiles = [
    {
      category: "CAPITAL ALLOCATORS",
      title: "The Capital Allocators",
      typicalProfile: "Ultra-High-Net-Worth Individuals, VCs, Private Equity, and Family Offices",
      expertise: "Liquidity, market foresight, and risk management at scale.",
      valueGained: "First-look access to highly vetted, proprietary deal flow and disruptive global tech ventures before public market awareness."
    },
    {
      category: "VISIONARIES",
      title: "The Visionaries",
      typicalProfile: "Serial entrepreneurs and architects of highly scalable, disruptive enterprises",
      expertise: "Scalable models, disruptive agility, and relentless execution.",
      valueGained: "Frictionless access to global liquidity, board-level mentorship, and elite AI-integration frameworks powered by TECH6SENSE AI."
    },
    {
      category: "INDUSTRY TITANS",
      title: "The Industry Titans",
      typicalProfile: "C-Suite executives, global thought leaders, and apex operators",
      expertise: "Decades of operational dominance and regulatory leverage.",
      valueGained: "Confidential strategic alliances, legacy-defining joint ventures, and unfiltered insights into global regulatory and market shifts."
    }
  ];

  return (
    <section className="relative bg-[#020617] text-white py-24 md:py-32 border-b border-slate-800/80 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#0b1329]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-4 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            THE GLOBAL CIRCLE
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Who Occupies the Room
          </h2>

          <p 
            className="text-slate-300 text-base md:text-lg leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Our private network spans USA, UK, Australia, Canada, India, European Union, UAE, Singapore, and Hong Kong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {profiles.map((prof, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 block">
                  {prof.category}
                </span>

                <h3 
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {prof.title}
                </h3>

                <div className="space-y-4 text-xs md:text-sm text-slate-300 font-normal leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="font-bold text-white block mb-1">Member Tier:</span>
                    <span className="text-slate-300">{prof.typicalProfile}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="font-bold text-white block mb-1">Expertise:</span>
                    <span className="text-slate-300">{prof.expertise}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                    <span className="font-bold text-cyan-300 block mb-1">Value Extracted:</span>
                    <span className="text-cyan-100">{prof.valueGained}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
