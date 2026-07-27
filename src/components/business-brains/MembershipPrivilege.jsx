import React from 'react';

export default function MembershipPrivilege() {
  const points = [
    { title: "Private Review", desc: "Comprehensive background and track record evaluation by our syndicate admission committee." },
    { title: "Deliberate Seat Capacity", desc: "Intentionally limited capacity to maintain absolute trust density and high engagement." },
    { title: "Global Standard", desc: "Unified international admission benchmarks applied consistently across all global chapters." }
  ];

  return (
    <section className="relative bg-[#000110] text-white py-24 md:py-32 border-b border-slate-800/80 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-900/15 to-violet-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          
          <span 
            className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-4 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            MEMBERSHIP
          </span>

          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Membership Is a Privilege, Not a Product.
          </h2>

          <div 
            className="inline-block px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-mono text-xs sm:text-sm font-bold text-cyan-300 mb-8 uppercase tracking-widest"
          >
            Membership Is Earned. Never Bought.
          </div>

          <p 
            className="text-slate-300 text-base md:text-lg leading-relaxed mb-16 font-normal max-w-3xl mx-auto space-y-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            BUSINESS BRAINS does not operate on open enrollment. Every application undergoes comprehensive review by our syndicate committee. Admission is strictly aligned with leadership standards, proven achievement, and long-term vision. Our objective is not rapid volume growth, but preserving absolute integrity, trust density, and exclusivity for our global circle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {points.map((pt, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-left"
              >
                <div className="font-mono text-xs text-cyan-400 font-bold mb-3">0{idx + 1}</div>
                <h3 
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {pt.title}
                </h3>
                <p 
                  className="text-slate-300 text-sm leading-relaxed font-normal"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
