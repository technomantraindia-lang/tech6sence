import React from 'react';
import { Link } from 'react-router-dom';

export default function IntelligentFinalCTA() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Ambient Glowing background - Styled in Royal Blue & Embedded Green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10 text-center">
        
        {/* Footer Tagline - Styled in Royal Blue */}
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-950/60 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-300">
            Building the Intelligence Layer for Global Enterprise
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-black tracking-tight text-white mb-6 leading-tight">
          Ready to Engineer the Future?
        </h2>

        {/* Subheadline */}
        <p className="font-body text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Partner with TECH6SENSE AI to transform your technological infrastructure into a strategic, autonomous asset.
        </p>

        {/* CTAs - Styled in Royal Blue and Embedded Green Gradient */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/lets-connect?inquiry=AI%20Transformation"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-9 py-4 font-body text-sm font-bold text-white shadow-[0_4px_25px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.03] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]"
          >
            Start Your AI Transformation
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            to="/lets-connect?inquiry=Talk%20to%20AI%20Experts"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 backdrop-blur-md px-9 py-4 font-body text-sm font-bold text-slate-200 hover:border-emerald-500 hover:text-white transition-all shadow-sm"
          >
            Talk to Our AI Experts
          </Link>
        </div>

      </div>
    </section>
  );
}
