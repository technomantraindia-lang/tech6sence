import React from 'react';

export default function MembershipPrivilege() {
  const points = [
    { 
      title: "Private Review", 
      desc: "Comprehensive background and track record evaluation by our syndicate admission committee.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.4)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.35)]"
    },
    { 
      title: "Deliberate Seat Capacity", 
      desc: "Intentionally limited capacity to maintain absolute trust density and high engagement.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.4)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.35)]"
    },
    { 
      title: "Global Standard", 
      desc: "Unified international admission benchmarks applied consistently across all global chapters.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.4)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.35)]"
    }
  ];

  return (
    <section className="relative bg-[#000110] text-white py-20 md:py-28 border-b border-slate-800/80 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-900/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* Title & Stanzas */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              MEMBERSHIP
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display">
            Membership Is a Privilege, Not a Product.
          </h2>

          <div className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto space-y-2 text-justify md:text-left">
            <p className="font-bold text-white">BUSINESS BRAINS does not operate on open enrollment.</p>
            <p>Every application undergoes a comprehensive review process to ensure alignment with our values, leadership standards, and long-term vision.</p>
          </div>

          {/* Callout Highlight */}
          <div className="pt-4">
            <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-[#1746D2]/20 via-slate-900 to-[#00A86B]/20 border border-emerald-500/30 font-display text-sm sm:text-base font-extrabold text-emerald-300 uppercase tracking-widest shadow-xl">
              Membership Is Earned. Never Bought.
            </div>
          </div>

          <div className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto space-y-2 text-justify md:text-left pt-2">
            <p className="font-bold text-white">Our objective is not rapid growth.</p>
            <p>It is preserving the integrity of one of the world's most respected private business circles.</p>
          </div>

        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl bg-slate-950/90 border border-slate-800/90 hover:-translate-y-2 transition-all duration-300 backdrop-blur-md group ${pt.restShadow} ${pt.hoverBg}`}
            >
              <div className="font-mono text-xs text-emerald-400 group-hover:text-cyan-200 font-bold mb-3 transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-white mb-2 font-display transition-colors">
                {pt.title}
              </h3>
              <p className="text-slate-300 group-hover:text-white text-sm leading-relaxed font-normal text-justify md:text-left transition-colors">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
