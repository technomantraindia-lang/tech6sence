import React from 'react';

export default function DeepTechTrustStrip() {
  const trustBadges = [
    "End-to-End Product Development Ecosystem",
    "Global Product Development & Commercialization",
    "Enterprise-Grade AI",
    "Full-Stack IT / AI + Hardware + Software = Unified Engineering",
    "100+ Integrated Technologies"
  ];

  // Duplicate to make infinite marquee scrolling seamless
  const duplicatedBadges = [...trustBadges, ...trustBadges, ...trustBadges];

  return (
    <section className="relative w-full border-y border-slate-800 bg-slate-950 py-10 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[120px] bg-blue-600/10 blur-[90px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[80px] bg-emerald-500/5 blur-[80px] rounded-full" />

      <div className="mx-auto w-full px-8 md:px-16 lg:px-24 relative z-10 flex flex-col gap-8">
        
        {/* Trust Statement Headline - Increased Font Size & Sleek Layout */}
        <div className="flex flex-col items-center gap-4 border-b border-slate-800/80 pb-6 w-full">
          <p className="font-display text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-slate-300 text-center w-full leading-relaxed">
            Trusted by Global Enterprises • Startups • Healthcare Organizations • Governments • Research Institutions • Industrial Enterprises
          </p>
        </div>

        {/* Scrolling Badges Marquee - Increased Font Size & Custom Sliding Items */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <div className="flex w-max animate-badge-marquee gap-10 items-center text-sm md:text-base font-black text-slate-100">
            {duplicatedBadges.map((badge, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="flex items-center gap-10">
                  <span className={`whitespace-nowrap transition-colors cursor-default tracking-wide uppercase font-mono ${isEven ? 'text-blue-200' : 'text-emerald-200'}`}>
                    {badge}
                  </span>
                  <span className="text-slate-700 font-normal select-none">•</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Marquee CSS Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes badgeMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-badge-marquee {
          animation: badgeMarquee 38s linear infinite;
        }
        .animate-badge-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
