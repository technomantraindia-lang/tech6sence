import React from 'react';

export default function IntelligentAdvantage() {
  const advantageItems = [
    {
      impact: "Accelerated ROI",
      delivery: "Rapid prototyping of AI solutions designed specifically to reduce OPEX and drive net-new revenue streams.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      bgClass: "bg-blue-50",
      accentText: "text-blue-600"
    },
    {
      impact: "Enterprise-Grade Security",
      delivery: "Uncompromising data privacy architectures, utilizing zero-trust frameworks and localized LLM deployments.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      bgClass: "bg-emerald-50",
      accentText: "text-emerald-600"
    },
    {
      impact: "Scalable Architecture",
      delivery: "From AIOps to Cloud Integration, our solutions are built to scale seamlessly from localized pilots to global rollouts.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      bgClass: "bg-blue-50",
      accentText: "text-blue-600"
    },
    {
      impact: "Future-Proof Innovation",
      delivery: "Leveraging bleeding-edge Agentic AI and RAG frameworks to ensure your technology stack remains ahead of the curve.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15 8 14.187 8.813 9l.813 5.187L15 15l-5.187.904zm9.362-9.362L18 11.25l-.813-2.346-2.346-.813 2.346-.813L18 4.5l.813 2.346 2.346.813-2.346.813z" />
        </svg>
      ),
      bgClass: "bg-emerald-50",
      accentText: "text-emerald-600"
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-100/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-100/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
              ADVANTAGE MATRIX
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            TECH6SENSE AI Advantage
          </h2>
          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            How our engineering methodology translates direct technical capability into measurable business outcomes.
          </p>
        </div>

        {/* Advantage Grid with 3D Flip Card Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantageItems.map((item, idx) => {
            const hoverShadow = item.isBlue 
              ? "group-hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]" 
              : "group-hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]";

            return (
              <div 
                key={idx}
                className="group w-full h-[280px] [perspective:1000px]"
              >
                <div className={`relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]`}>
                  
                  {/* Card Front Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between transition-all duration-300">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl ${item.bgClass} flex items-center justify-center mb-6`}>
                        {item.icon}
                      </div>

                      <h3 className="font-display text-xl font-extrabold text-slate-900 leading-snug">
                        {item.impact}
                      </h3>
                    </div>

                    {/* How We Deliver prompt with Down Arrow */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      <span className={`font-mono text-[0.65rem] font-bold uppercase tracking-wider ${item.accentText}`}>
                        How We Deliver
                      </span>
                      <svg className={`w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 ${item.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Back Face (Shown on hover) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 rounded-3xl border border-slate-200 bg-slate-950 text-white flex flex-col justify-center">
                    <span className={`block font-mono text-[0.65rem] font-bold uppercase tracking-widest mb-3 ${item.accentText}`}>
                      METHODOLOGY
                    </span>
                    <p className="font-body text-sm text-slate-300 leading-relaxed font-medium">
                      {item.delivery}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
