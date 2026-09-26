import React from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function MemberExpectations() {
  const standards = [
    {
      title: "Integrity Without Compromise",
      desc: "Absolute confidentiality, transparent communication, and zero-tolerance for bad faith interactions across all member dealings.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.4)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.35)]",
      badgeColor: "group-hover:text-cyan-200",
      dotColor: "group-hover:bg-cyan-200"
    },
    {
      title: "Excellence in Leadership",
      desc: "Unwavering commitment to world-class execution standards, ethical practices, and institutional stewardship.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.4)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.35)]",
      badgeColor: "group-hover:text-emerald-200",
      dotColor: "group-hover:bg-emerald-200"
    },
    {
      title: "Global Perspective",
      desc: "Embracing international diversity, cross-border cooperation, and multi-region strategic vision across all markets.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.4)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.35)]",
      badgeColor: "group-hover:text-cyan-200",
      dotColor: "group-hover:bg-cyan-200"
    },
    {
      title: "Meaningful Contribution",
      desc: "Active engagement, knowledge sharing, mutual mentorship, and active value creation for the global circle.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.4)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.35)]",
      badgeColor: "group-hover:text-emerald-200",
      dotColor: "group-hover:bg-emerald-200"
    },
    {
      title: "Long-Term Relationships",
      desc: "Prioritizing durable, trust-based partnerships and shared growth over transient transactional gains.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.4)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.35)]",
      badgeColor: "group-hover:text-cyan-200",
      dotColor: "group-hover:bg-cyan-200"
    },
    {
      title: "Innovation With Purpose",
      desc: "Driving high-impact technologies, responsible AI development, and building a positive global legacy for future generations.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.4)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.35)]",
      badgeColor: "group-hover:text-emerald-200",
      dotColor: "group-hover:bg-emerald-200"
    }
  ];

  return (
    <section className="relative bg-[#000110] text-white py-20 md:py-28 border-b border-slate-800/80 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-900/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE STANDARD
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase">
            THE BUSINESS BRAINS STANDARD
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
            Every member is expected to uphold the values that define our institution.
          </p>
        </div>

        {/* 6 Standards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {standards.map((std, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl bg-slate-950/90 border border-slate-800/90 hover:-translate-y-2 transition-all duration-300 backdrop-blur-md group ${std.restShadow} ${std.hoverBg}`}
              {...touchHoverProps}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`font-mono text-xs font-bold text-emerald-400 transition-colors ${std.badgeColor}`}>
                  0{idx + 1}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 transition-colors ${std.dotColor}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-display transition-colors">
                {std.title}
              </h3>

              <p onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-slate-300 group-hover:text-white text-sm leading-relaxed font-normal text-justify md:text-left transition-colors">
                {std.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
