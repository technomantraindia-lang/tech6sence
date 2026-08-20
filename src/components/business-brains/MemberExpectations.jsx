import React from 'react';

export default function MemberExpectations() {
  const standards = [
    {
      title: "Integrity Without Compromise",
      desc: "Absolute confidentiality, transparent communication, and zero-tolerance for bad faith interactions across all member dealings."
    },
    {
      title: "Excellence in Leadership",
      desc: "Unwavering commitment to world-class execution standards, ethical practices, and institutional stewardship."
    },
    {
      title: "Global Perspective",
      desc: "Embracing international diversity, cross-border cooperation, and multi-region strategic vision across all markets."
    },
    {
      title: "Meaningful Contribution",
      desc: "Active engagement, knowledge sharing, mutual mentorship, and active value creation for the global circle."
    },
    {
      title: "Long-Term Relationships",
      desc: "Prioritizing durable, trust-based partnerships and shared growth over transient transactional gains."
    },
    {
      title: "Innovation With Purpose",
      desc: "Driving high-impact technologies, responsible AI development, and building a positive global legacy for future generations."
    }
  ];

  return (
    <section className="relative bg-[#000110] text-white py-24 md:py-32 border-b border-slate-800/80 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-display text-sm font-extrabold text-emerald-400 uppercase tracking-[0.25em] mb-4 block"
          >
            THE STANDARD
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            THE BUSINESS BRAINS STANDARD
          </h2>

          <p 
            className="text-slate-300 text-base md:text-lg leading-relaxed font-normal"
          >
            Every member is expected to uphold the values that define our institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((std, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-md group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-emerald-400 font-bold">0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              <h3 
                className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors"
              >
                {std.title}
              </h3>

              <p 
                className="text-slate-300 text-sm leading-relaxed font-normal"
              >
                {std.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
