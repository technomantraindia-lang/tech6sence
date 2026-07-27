import React from 'react';

export default function NetworkCTA() {
  return (
    <section className="relative bg-white text-slate-900 py-12 md:py-16 overflow-hidden border-t border-slate-200">
      
      {/* Light Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 relative z-10 text-center">
        
        <span 
          className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-[0.25em] mb-3 block"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          PRIVATE CONSIDERATION
        </span>

        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-3 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Millions Are Being Unlocked.
        </h2>

        <div className="text-lg md:text-xl font-bold text-cyan-700 font-mono mb-5">
          Are you in the room, or are you on the outside looking in?
        </div>

        <p 
          className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          The world's most transformative companies and high-yield syndicates are formed inside private circles. Request a board review today to present your credentials to the Business Brains Syndicate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <a 
            href="#application-entry"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            REQUEST BOARD REVIEW
          </a>
        </div>

        {/* Footer Positioning Statement */}
        <div className="pt-8 border-t border-slate-200 max-w-xl mx-auto">
          <div className="font-mono text-[10px] md:text-xs text-slate-500 font-semibold tracking-wider">
            BUSINESS BRAINS — The World's Most Exclusive Global Syndicate by TECH6SENSE AI.
          </div>
        </div>

      </div>
    </section>
  );
}
