import React from 'react';

export default function IntelligentStatsBar() {
  const stats = [
    { label: "Global Markets", value: "8+ Global Markets", desc: "Delivery footprint across global markets", isBlue: true },
    { label: "Practice Lines", value: "26 Practice Lines", desc: "Specialized AI & IT practice lines under one engineering roof", isBlue: false },
    { label: "End-to-End Capability", value: "End-to-end capability", desc: "strategy → build → deployment → governance", isBlue: true },
    { label: "Implementations", value: "350+ Successful Implementations", desc: "Proven track record across industries", isBlue: false },
    { label: "Engineering Leadership", value: "PhD-Led Teams", desc: "Research-backed, production-grade solutions", isBlue: true },
    { label: "Average ROI", value: "2,000%+ Average ROI", desc: "Measurable business impact", isBlue: false },
    { label: "Domain Expertise", value: "19+ Industries", desc: "Deep domain expertise", isBlue: true },
  ];

  // Duplicate stats to make infinite marquee scrolling seamless
  const duplicatedStats = [...stats, ...stats, ...stats];

  return (
    <section className="relative w-full border-y border-[#1746D2]/10 bg-gradient-to-r from-[#1746D2]/10/40 via-fuchsia-50/20 to-[#1746D2]/10/40 py-8 overflow-hidden">
      {/* Background soft glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[150px] bg-[#1746D2]/20/25 blur-[100px] rounded-full" />

      {/* Infinite Automatic Marquee Slider Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max animate-stats-marquee gap-6 py-2">
          {duplicatedStats.map((st, i) => {
            const cardColor = st.isBlue 
              ? "border-blue-200 bg-blue-50/20 hover:border-blue-400"
              : "border-emerald-200 bg-emerald-50/20 hover:border-emerald-400";
            
            const badgeText = st.isBlue 
              ? "text-blue-700" 
              : "text-emerald-700";

            return (
              <div 
                key={i} 
                className={`p-5 rounded-2xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:shadow-md select-none shrink-0 w-[320px] h-[120px] ${cardColor}`}
              >
                <div>
                  {/* Increased Text Font Size */}
                  <span className={`font-display text-base md:text-lg font-black leading-snug block mb-1 ${badgeText}`}>
                    {st.value}
                  </span>
                  <span className="font-body text-xs text-slate-600 leading-tight block">
                    {st.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Automatic Slider CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes statsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-stats-marquee {
          animation: statsMarquee 35s linear infinite;
        }
        .animate-stats-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
