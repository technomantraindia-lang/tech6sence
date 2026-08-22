import React from 'react';

export default function SuccessStoriesHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 font-body">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 pointer-events-none"
        style={{ backgroundImage: `url('/industries-hero-bg.jpg')` }}
      />

      {/* Ambient Gradient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1746D2]/25 rounded-full blur-[140px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#00A86B]/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Line-Flanked Title Badge */}
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-8 md:w-12 h-[2px] bg-[#00A86B]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#00A86B]">
              — REAL-WORLD CLIENT IMPACT —
            </span>
            <div className="w-8 md:w-12 h-[2px] bg-[#00A86B]" />
          </div>
          
          {/* Main Hero Headline */}
          <h1 className="font-display text-[clamp(2.4rem,4.8vw,4.5rem)] font-extrabold text-white leading-[1.12] mb-6 tracking-tight max-w-5xl mx-auto">
            Transforming Strategic Visions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-blue-400 to-[#00A86B]">
              Into Enterprise Reality
            </span>
          </h1>
          
          {/* Description Paragraph */}
          <p className="font-body text-slate-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-normal">
            Explore how TECH6SENSE AI solutions have driven measurable impact, solved critical operational challenges, and created unprecedented value across global industries.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="font-display text-2xl md:text-3xl font-extrabold text-[#00A86B]">100+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400">AI Deployments</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="font-display text-2xl md:text-3xl font-extrabold text-[#1746D2]">35%+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400">Avg Cost Savings</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="font-display text-2xl md:text-3xl font-extrabold text-[#D4AF37]">14+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400">Industry Sectors</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="font-display text-2xl md:text-3xl font-extrabold text-white">99.9%</div>
              <div className="text-xs md:text-sm font-medium text-slate-400">Model Accuracy</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
