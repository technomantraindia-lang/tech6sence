import React from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function IntelligentWhyChooseUs() {
  const reasons = [
    { text: "End-to-End AI & Digital Engineering Expertise", isBlue: true },
    { text: "Enterprise-Grade Solution Architecture", isBlue: false },
    { text: "AI-First Product Development Methodology", isBlue: true },
    { text: "Secure, Scalable & Cloud-Native Engineering", isBlue: false },
    { text: "Responsible AI & Governance Frameworks", isBlue: true },
    { text: "Industry-Specific AI Accelerators", isBlue: false },
    { text: "Global Delivery Model", isBlue: true },
    { text: "Agile Development & Rapid Innovation", isBlue: false },
    { text: "Long-Term Technology Partnership", isBlue: true },
    { text: "Continuous Support, Optimization & Innovation", isBlue: false }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-100/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-sm sm:text-base font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
              KEY DIFFERENTIATORS
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Why Global Organizations Choose TECH6SENSE AI
          </h2>
        </div>

        {/* 10 Points Grid - Frameless cards styled with themed brand blue & green backgrounds on hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((res, idx) => {
            const numStr = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;
            
            // Alternating default tints and hover brand colors (#1746D2 / #00A86B)
            const cardBg = res.isBlue 
              ? "bg-blue-50/50 hover:bg-[#1746D2] border-slate-200/60 hover:border-[#1746D2]" 
              : "bg-emerald-50/50 hover:bg-[#00A86B] border-slate-200/60 hover:border-[#00A86B]";
            
            const badgeBg = res.isBlue 
              ? "bg-blue-100 text-[#1746D2] group-hover:bg-black/25 group-hover:text-[#FFD700]" 
              : "bg-emerald-100 text-[#00A86B] group-hover:bg-black/25 group-hover:text-[#FFD700]";

            const hoverText = "group-hover:text-white";

            const hoverTransform = "hover:-translate-y-2 hover:scale-[1.03]";

            const hoverGlow = res.isBlue
              ? "hover:shadow-[0_15px_30px_-10px_rgba(23,70,210,0.4)]"
              : "hover:shadow-[0_15px_30px_-10px_rgba(0,168,107,0.4)]";

            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between group cursor-default select-none ${cardBg} ${hoverTransform} ${hoverGlow}`}
                {...touchHoverProps}
              >
                <div>
                  {/* Badge spins on hover */}
                  <span onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-display text-sm font-extrabold mb-4 transition-all duration-500 ease-out group-hover:rotate-[360deg] ${badgeBg}`}>
                    {numStr}
                  </span>
                  <h3 className={`font-display text-base font-extrabold text-slate-900 transition-colors duration-300 leading-snug ${hoverText}`}>
                    {res.text}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
