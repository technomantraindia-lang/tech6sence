import React from 'react';

export function ProgramPromise() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        <span className="font-mono text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-4 block">
          Program Promise
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display">
          “From Idea to International Clients — We Build Your AI Company With You.”
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-8 font-display">
          Stop Building Alone. Start Building with a Proven Ecosystem.
        </h3>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12 font-medium">
          Whether you're a tech professional with a groundbreaking idea, a recent graduate ready to disrupt the industry, or a corporate professional pivoting to entrepreneurship, the Visionary Founders Program eliminates the guesswork from starting an AI business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {[
            "Complete business infrastructure in few days",
            "Dedicated CTO, Tech Lead & Development Team",
            "Proven international client acquisition strategies",
            "End-to-end support until revenue generation",
            "Global expansion pathways included"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#1746D2]/10 border border-[#1746D2]/20">
              <svg className="w-6 h-6 text-[#1746D2] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemWeSolve() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80 text-slate-900 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-emerald-100/40 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="font-mono text-xs font-extrabold text-[#1746D2] uppercase tracking-[0.25em] mb-4 block">
              THE BIG PROBLEM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display tracking-tight leading-tight">
              The Hard Truth About Tech Startups
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6 font-medium">
              Building a successful AI or Tech company requires wearing a hundred different hats. You need elite developers, cross-border legal frameworks, aggressive marketing, institutional funding, and a world-class CTO. Finding these independently takes years and costs millions in trial and error.
            </p>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm mt-8">
              <h3 className="text-xl font-bold text-[#1746D2] mb-3 font-display">Why Most AI Start-ups Never Scale</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Many founders possess excellent ideas but struggle to build sustainable companies because they lack one or more critical components:
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Clear business strategy",
                "Product development expertise",
                "Experienced technical leadership",
                "Brand positioning",
                "Lead generation systems",
                "Client acquisition processes",
                "Operational structure",
                "Access to specialized talent",
                "Scalable delivery frameworks"
              ].map((problem, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-200/80 bg-white shadow-sm hover:border-[#1746D2]/40 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-slate-800 text-xs sm:text-sm font-bold">{problem}</span>
                </div>
              ))}
            </div>
            <p className="text-[#1746D2] text-sm md:text-base italic font-semibold leading-relaxed pl-2 mt-2">
              The Visionary Founders addresses these areas through an integrated combination of education, mentorship, and business support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { value: "10+", label: "Ecosystem Components" },
    { value: "100%", label: "Ownership Retained" },
    { value: "03", label: "Program Tiers" },
    { value: "Global", label: "Expansion Support" }
  ];

  return (
    <section className="py-16 bg-blue-700 border-y border-blue-800 relative z-20 shadow-xl">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-blue-500/50">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-display tracking-tight">
                {stat.value}
              </div>
              <div className="text-blue-100 font-medium uppercase tracking-wider text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RealityVsSolution() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="p-8 md:p-12 rounded-[2rem] bg-white border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-70 transition-transform group-hover:scale-110"></div>
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 block">
              The Reality
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 font-display">
              The Challenge Every Founder Faces
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Starting an AI or IT company is more than having a great idea. You need technical expertise, legal structure, client acquisition strategies, funding access, and a dozen other pieces that can take years to assemble.
            </p>
            <p className="text-blue-600 font-bold italic border-l-4 border-blue-600 pl-4">
              Many brilliant visions die not from lack of potential, but from lack of infrastructure.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-blue-700 to-indigo-900 text-white border border-blue-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-bl-full blur-xl transition-transform group-hover:scale-125"></div>
            <span className="font-mono text-xs font-bold text-blue-200 uppercase tracking-widest mb-4 block">
              The Solution
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 font-display">
              What if you could launch with everything already in place?
            </h3>
            <p className="text-blue-100 leading-relaxed mb-8">
              The Visionary Founders Program is TECH6SENSE's comprehensive business ecosystem designed to transform aspiring entrepreneurs into successful AI company founders.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Legal Foundation', 'Technical Team', 'Marketing Support', 'Global Reach'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-blue-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
