import React from 'react';
import { Link } from 'react-router-dom';

export default function DeepTechFinalCTA() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Ambient Glowing background - Styled in Royal Blue & Embedded Green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[85rem] px-6 relative z-10 text-center">
        
        {/* Upper Slogan Badge */}
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-950/60 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-300">
            Build Smarter. Engineer Faster. Innovate Globally.
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-black tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
          Let's Build the Next Global Deep-Tech Innovation Together
        </h2>

        {/* Subheadlines */}
        <div className="max-w-3xl mx-auto mb-10 flex flex-col gap-6">
          <p className="font-body text-slate-300 text-base md:text-lg font-medium leading-relaxed">
            Whether you're an entrepreneur with a breakthrough idea, a startup creating the next category-defining product, or an enterprise accelerating digital transformation, TECH6SENSE AI provides the expertise, engineering, AI capabilities, and commercialization ecosystem to bring your vision to life.
          </p>
          <p className="font-body text-slate-400 text-sm md:text-base font-semibold leading-relaxed">
            From concept and prototyping to manufacturing, certification, and global market launch, we become your long-term technology partner in building intelligent products that shape the future.
          </p>
        </div>

        {/* Primary CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/lets-connect?inquiry=Launch%20AI%20Product%20Company"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-9 py-4 font-body text-sm font-bold text-white shadow-[0_4px_25px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_35px_rgba(37,99,235,0.5)]"
          >
            Launch Your Own AI Product Company
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
