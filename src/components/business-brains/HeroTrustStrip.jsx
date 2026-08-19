import React from 'react';
import heroVideo from '../../assets/Abstract_digital_network_nodes_c…_202607141034.mp4';

export default function HeroTrustStrip() {
  return (
    <>
      <div className="relative bg-[#000110] text-white min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      
      {/* HD Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000110]/85 via-[#000110]/70 to-[#000110] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-cyan-900/15 rounded-full blur-[180px] pointer-events-none z-0" />
      
      {/* Minimal Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />

      {/* MAIN HERO CONTENT - PREMIUM TWO-COLUMN GRID */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full my-auto py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Minimal Eyebrow Tag */}
            <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-[0.25em]">
              BUSINESS BRAINS Powered by TECH6SENSE AI
            </div>

            {/* Above the Fold Title & Main Headline */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-cyan-300/90 font-mono uppercase tracking-wider">
                Access is the Ultimate Currency.
              </h2>
              <h1 
                className="text-3xl sm:text-5xl md:text-[3.25rem] font-extrabold leading-[1.1] text-white tracking-tight"
              >
                The World’s Most Exclusive Private Global Circle for Elite Investors, Entrepreneurs & Industry Leaders
              </h1>
            </div>

            {/* Highlight Ribbon */}
            <div className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#1746D2] font-mono uppercase tracking-wide">
              Stop Networking. Start Unlocking Millions.
            </div>

            {/* Focused Subheadline */}
            <div 
              className="text-sm md:text-[15px] text-slate-350 leading-relaxed font-medium space-y-4 text-slate-350 max-w-2xl"
            >
              <p>
                Welcome to Business Brains—an invitation-only global syndicate reserved for elite investors, visionary entrepreneurs, and titans of industry. We operate beyond the public eye, at the absolute pinnacle of global commerce, capital, and artificial intelligence.
              </p>
              <p>
                Operating at the intersection of limitless capital and bleeding-edge technology, this is the private room where next-level business paradigms are engineered and million-dollar opportunities are unlocked daily.
              </p>
              <p>
                BUSINESS BRAINS is not designed for networking. It is built for <strong className="text-cyan-300 font-bold">influence, collaboration, investment, innovation, and legacy</strong>. Within this private circle, relationships become strategic alliances, conversations become global ventures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <a 
                href="#nomination-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request a Global Invitation</span>
                <span>→</span>
              </a>
              <a 
                href="#philosophy"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 rounded-full font-bold text-sm tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Enter the World of Business Brains
              </a>
            </div>
          </div>

          {/* Right Column: Premium Card & Trust Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Sleek Logo Presentation */}
            <div className="relative inline-block mx-auto lg:mx-0 group w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-[#1746D2]/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative bg-white/95 backdrop-blur-xl border border-white/30 px-8 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center">
                <img 
                  src="https://tech6senseai.com/wp-content/uploads/2026/02/Business-Brain-Logo-PNG.png" 
                  alt="Business Brains" 
                  className="h-11 md:h-14 object-contain" 
                />
              </div>
            </div>

            {/* Premium Glass Card with supporting lines & details */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col gap-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-xl pointer-events-none" />
              
              <div className="text-xs md:text-sm font-mono text-cyan-300/90 uppercase tracking-widest space-y-3.5 border-b border-white/10 pb-5">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#1746D2] text-sm font-bold">✓</span>
                  <span>Not a community. Not a platform. A Circle — and very few are Admitted.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#1746D2] text-sm font-bold">✓</span>
                  <span className="font-extrabold text-white">Access is Not Granted. It is Earned.</span>
                </div>
              </div>

              {/* Micro-copy */}
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Membership is intentionally limited to preserve the quality, trust, and exclusivity that define BUSINESS BRAINS and curated by the board of TECH6SENSE AI.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* MINIMAL TRUST STRIP BAR BELOW THE HERO SECTION */}
    <div className="w-full bg-[#050615] border-y border-white/5 py-8 relative z-10">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-white/10">
          
          <div className="px-2">
            <div className="text-xl md:text-2xl font-bold font-mono text-cyan-400">500+</div>
            <div className="text-xs text-slate-350 font-medium">Members Worldwide</div>
          </div>

          <div className="px-2">
            <div className="text-xl md:text-2xl font-bold font-mono text-cyan-400">9+</div>
            <div className="text-xs text-slate-350 font-medium">Nations</div>
          </div>

          <div className="px-2">
            <div className="text-xl md:text-2xl font-bold font-mono text-cyan-400">Invitation Only</div>
            <div className="text-xs text-slate-350 font-medium">By Invitation Only</div>
          </div>

          <div className="px-2">
            <div className="text-xl md:text-2xl font-bold font-mono text-cyan-400">TECH6SENSE AI</div>
            <div className="text-xs text-slate-350 font-medium">An institution by TECH6SENSE AI</div>
          </div>

        </div>
      </div>
    </div>
  </>
  );
}
