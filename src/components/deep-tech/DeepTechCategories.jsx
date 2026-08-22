import React from 'react';
import { Link } from 'react-router-dom';

export default function DeepTechCategories() {
  const comparison = [
    {
      feature: "Development Speed",
      traditional: "Slow; bottlenecks between isolated teams.",
      ecosystem: "Hyper-accelerated; parallel hardware/software R&D.",
      isBlue: true
    },
    {
      feature: "Intellectual Property",
      traditional: "Complex to secure across multiple vendors.",
      ecosystem: "Fully secured; white-labeled directly to your brand.",
      isBlue: false
    },
    {
      feature: "AI Integration",
      traditional: "Often an afterthought or outsourced heavily.",
      ecosystem: "Native; AI is embedded into the core hardware design.",
      isBlue: true
    },
    {
      feature: "Supply Chain",
      traditional: "High risk of delays and quality control failure.",
      ecosystem: "Managed entirely in-house with global vetted partners.",
      isBlue: false
    },
    {
      feature: "Cost Efficiency",
      traditional: "High hidden costs and compounding overhead.",
      ecosystem: "Transparent, consolidated, and highly predictable.",
      isBlue: true
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-100/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-100/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[1400px] mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-sm sm:text-base font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
              Why Partner with TECH6SENSE AI?
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Traditional Approach vs. The TECH6SENSE Ecosystem
          </h2>
        </div>

        {/* Matrix Grid Layout - Clean, premium, borders removed on cards, alternating backgrounds */}
        <div className="flex flex-col gap-6 max-w-[1400px] mx-auto">
          {comparison.map((item, idx) => {
            const cardBg = item.isBlue 
              ? "bg-blue-50/30 hover:bg-blue-50/60" 
              : "bg-emerald-50/30 hover:bg-emerald-50/60";

            const accentText = item.isBlue 
              ? "text-blue-600" 
              : "text-emerald-600";

            return (
              <div 
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 p-6 rounded-2xl items-center shadow-sm hover:shadow-md transition-all duration-300 gap-4 md:gap-6 border-0 ${cardBg}`}
              >
                {/* Feature Column */}
                <div className="md:col-span-3">
                  <span className={`font-display text-base font-extrabold ${accentText}`}>
                    {item.feature}
                  </span>
                </div>

                {/* Traditional Column */}
                <div className="md:col-span-4 border-t md:border-t-0 md:border-r border-slate-200/60 pt-3 md:pt-0 pr-0 md:pr-6">
                  <span className="block font-display text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-1">
                    TRADITIONAL FRAGMENTED APPROACH
                  </span>
                  <span className="font-body text-xs md:text-sm text-slate-500 font-medium">
                    {item.traditional}
                  </span>
                </div>

                {/* Ecosystem Column */}
                <div className="md:col-span-5 pt-3 md:pt-0">
                  <span className="block font-display text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-1">
                    THE TECH6SENSE ECOSYSTEM
                  </span>
                  <span className="font-body text-xs md:text-sm text-slate-800 font-bold">
                    {item.ecosystem}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Section CTA Button */}
        <div className="text-center mt-14">
          <Link
            to="/lets-connect?inquiry=Start%20Tech%20Company"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-3.5 font-body text-sm font-bold text-white shadow-md hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-transform hover:scale-[1.03]"
          >
            Start Your Tech Company Today
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
