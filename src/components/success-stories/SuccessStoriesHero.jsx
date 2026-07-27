import React from 'react';

export default function SuccessStoriesHero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 font-body">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[100px] mix-blend-screen transform -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-[85rem] mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm font-semibold text-violet-200 tracking-wide uppercase">Real-World Impact</span>
          </div>
          
          <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Transforming Visions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Into Reality
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Explore how TECH6SENSE's AI solutions have driven measurable impact, solved critical challenges, and created unprecedented value across diverse industries.
          </p>
        </div>
      </div>
    </div>
  );
}
