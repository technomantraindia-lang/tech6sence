import React from 'react';
import heroVideo from '../../assets/Abstract_digital_network_nodes_c…_202607141034.mp4';

export default function HeroTrustStrip() {
  return (
    <>
      {/* 1. BUSINESS BRAINS HEADER NAVIGATION BAR */}
      <div className="w-full bg-[#000110]/90 border-b border-white/10 backdrop-blur-md sticky top-20 z-40">
        <div className="max-w-[1400px] mx-auto px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-display font-bold text-xs md:text-sm tracking-wider uppercase">
            <span className="text-emerald-400 font-extrabold">BUSINESS BRAINS</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-medium">THE GLOBAL CIRCLE</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-slate-300 overflow-x-auto py-1">
            <a href="#syndicate" className="hover:text-emerald-400 transition-colors whitespace-nowrap">The Syndicate</a>
            <a href="#triad" className="hover:text-emerald-400 transition-colors whitespace-nowrap">The Triad</a>
            <a href="#reach" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Global Reach</a>
            <a href="#privilege" className="hover:text-emerald-400 transition-colors whitespace-nowrap">The Privilege</a>
            <a 
              href="#nomination-form" 
              className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-mono font-bold rounded-lg tracking-wider transition-all whitespace-nowrap shadow-sm"
            >
              [INITIATE BOARD REVIEW]
            </a>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION ABOVE THE FOLD */}
      <div className="relative bg-[#000110] text-white min-h-[85vh] flex flex-col justify-center py-16 md:py-24 overflow-hidden">
        
        {/* HD Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-25"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000110]/90 via-[#000110]/75 to-[#000110] pointer-events-none z-0" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/15 rounded-full blur-[200px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,107,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />

        {/* MAIN HERO CONTENT — MAX WIDTH 1400PX CENTERED */}
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full my-auto text-center flex flex-col items-center gap-8 py-8">
          
          {/* Title / Powered by & Eyebrow Tag */}
          <div className="space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">
              <span>BUSINESS BRAINS</span>
              <span className="text-slate-400">Powered by</span>
              <span className="text-white font-bold">TECH6SENSE AI</span>
            </div>
            <div className="text-xs md:text-sm font-mono font-extrabold text-emerald-300/90 uppercase tracking-[0.25em]">
              The Nexus of Global Capital and Technological Supremacy
            </div>
          </div>

          {/* Headline & Badge */}
          <div className="space-y-4 max-w-[1400px] mx-auto">
            <div className="inline-block font-mono text-xs md:text-sm font-bold text-amber-400 uppercase tracking-widest px-4 py-1.5 bg-amber-400/10 rounded-md border border-amber-400/20">
              Access is the Ultimate Currency.
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight font-display max-w-[1400px] mx-auto">
              The World's Most Exclusive Private Global Circle for Elite Investors, Entrepreneurs & Industry Leaders
            </h1>

            <div className="text-lg sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#1746D2] font-display uppercase tracking-wide pt-1">
              Stop Networking. Start Unlocking Millions.
            </div>
          </div>

          {/* Sub-headline Paragraphs */}
          <div className="text-sm md:text-base text-slate-300 leading-relaxed font-medium space-y-4 max-w-[1400px] mx-auto text-center">
            <p>
              Welcome to Business Brains—an invitation-only global syndicate reserved for elite investors, visionary entrepreneurs, and titans of industry. We operate beyond the public eye, at the absolute pinnacle of global commerce, capital, and artificial intelligence.
            </p>
            <p>
              Operating at the intersection of limitless capital and bleeding-edge technology, this is the private room where next-level business paradigms are engineered and million-dollar opportunities are unlocked daily.
            </p>
            <p>
              BUSINESS BRAINS is not designed for networking. It is built for influence, collaboration, investment, innovation, and legacy. Within this private circle, relationships become strategic alliances, conversations become global ventures, and visionary ideas become industry-defining companies.
            </p>
          </div>

          {/* Supporting Line Box */}
          <div className="p-5 rounded-2xl bg-white/5 border border-emerald-500/30 backdrop-blur-md text-xs md:text-sm font-mono space-y-2 w-full max-w-[1400px] text-center text-emerald-300">
            <div>Not a community. Not a platform. A Circle — and very few are Admitted.</div>
            <div className="font-extrabold text-white text-sm md:text-base">Access is Not Granted. It is Earned.</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <a 
              href="#nomination-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-[#1746D2] hover:from-emerald-400 hover:to-blue-600 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(0,168,107,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request a Global Invitation</span>
              <span>→</span>
            </a>
            <a 
              href="#philosophy"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Enter the World of Business Brains
            </a>
          </div>

          {/* Micro-copy beneath CTA */}
          <p className="text-xs text-slate-400 leading-relaxed max-w-[1400px] font-medium pt-1">
            Membership is intentionally limited to preserve the quality, trust, and exclusivity that define BUSINESS BRAINS and curated by the board of TECH6SENSE AI.
          </p>

        </div>
      </div>

      {/* 3. TRUST STRIP (UNDERSTATED, EDITORIAL) */}
      <div className="w-full bg-[#050615] border-y border-white/10 py-7 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-white/10">
            
            <div className="px-3">
              <div className="text-xl md:text-2xl font-extrabold font-display text-white">500+ Members Worldwide</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Global Private Circle</div>
            </div>

            <div className="px-3">
              <div className="text-xl md:text-2xl font-extrabold font-display text-white">9+ Nations</div>
              <div className="text-xs text-slate-400 font-medium mt-1">International Footprint</div>
            </div>

            <div className="px-3">
              <div className="text-xl md:text-2xl font-extrabold font-display text-emerald-400">By Invitation Only</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Strict Board Review</div>
            </div>

            <div className="px-3">
              <div className="text-xl md:text-2xl font-extrabold font-display text-white">An Institution by TECH6SENSE AI</div>
              <div className="text-xs text-slate-400 font-medium mt-1">AI Supremacy & Capital</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
