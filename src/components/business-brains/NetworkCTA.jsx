import React from 'react';

export default function NetworkCTA() {
  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/50 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center space-y-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              FINAL DECISIVE CALL TO ACTION
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Millions Are Being Unlocked.
          </h2>

          <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-display tracking-wide">
            Are you in the room, or are you on the outside looking in?
          </div>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            If you possess the capital, the operational dominance, or the technological vision to stand alongside the world’s elite, your next chapter begins now.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <a 
            href="#application-entry"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] text-white font-display text-base font-extrabold tracking-wider uppercase shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>REQUEST BOARD REVIEW</span>
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* Footer Positioning Signature */}
        <div className="pt-8 border-t border-slate-200/80 max-w-xl mx-auto">
          <div className="font-mono text-xs text-slate-500 font-semibold tracking-wider">
            BUSINESS BRAINS — The Most Exclusive Global Syndicate by TECH6SENSE AI.
          </div>
        </div>

      </div>
    </section>
  );
}
