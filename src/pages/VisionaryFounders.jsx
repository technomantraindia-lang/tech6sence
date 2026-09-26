import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import bgVideo from '../assets/intllegent.mp4';
import { ProblemWeSolve } from '../components/visionary-founders/Section1to4';
import { IntroducingProgram, EcosystemComponents, WhoIsThisFor } from '../components/visionary-founders/Section5to8';
import { HowItWorks, SuccessStories } from '../components/visionary-founders/Section9to12';
import { ApplicationProcess, FAQSection, ApplicationForm, FinalCTA } from '../components/visionary-founders/Section13to16';
import { GlobalAIOpportunity, EliteAdvantage, WhatYouWalkAwayWith, WhyTech6SenseAI, NationalVsGlobalComparison, FounderSelectionCriteria, FounderMessage } from '../components/visionary-founders/NewSections';

export default function VisionaryFounders() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-slate-50 text-slate-900 overflow-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* HERO SECTION WITH VIDEO BACKGROUND & BRAND OVERLAY */}
        <div className="relative w-full overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-16 border-b border-white/10 bg-[#02050E]">
          
          {/* Centered Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
            {/* Dark Brand Overlay & Ambient Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#02050E]/95 via-[#060D1E]/75 to-[#02050E]/90 z-1 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(23,70,210,0.2),transparent_70%)] z-1 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="mx-auto w-full px-3 sm:px-6 max-w-[1400px] relative z-10">
            <div className="flex flex-col items-center text-center max-w-[1400px] mx-auto">
              
              {/* Center-aligned Hero Copy & Buttons */}
              <div className="w-full flex flex-col items-center text-center gap-6">
               
                {/* Brand Badge & Eyebrow Tag */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="font-display text-xs sm:text-sm font-black text-white uppercase tracking-[0.25em] block px-5 py-2 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] shadow-[0_0_20px_rgba(23,70,210,0.5)] border border-white/20">
                    VISIONARY FOUNDERS by TECH6SENSE AI
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 backdrop-blur-md">
                    The Global AI Founder Ecosystem
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.08] font-extrabold tracking-tight text-white max-w-[1400px] text-center">
                  Build Your AI Empire Powered by a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#D4AF37]">
                    Global Ecosystem
                  </span>
                </h1>

                {/* Subheadline & Supporting Line */}
                <div className="space-y-4 max-w-[1400px] text-center">
                  <p className="font-body text-white/90 text-base sm:text-lg leading-relaxed font-medium text-center max-w-[1200px] mx-auto">
                    Visionary Founders is the world’s elite most comprehensive premier all-in-one AI Founder Ecosystem designed to transform ambitious entrepreneurs, professionals, start-up founders, consultants, and innovators into owners of globally competitive AI and technology companies and dominate the global markets.
                  </p>

                  <p className="font-body text-[#00A86B] text-base sm:text-lg font-semibold leading-relaxed text-center max-w-[1200px] mx-auto pt-1">
                    "From Idea to International Clients —We don't just simply train founders. We build AI companies with them."
                  </p>
                </div>

                {/* Primary & Secondary CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 w-full font-body pt-2">
                  <button
                    onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] hover:from-[#1746D2]/90 hover:to-[#00A86B]/90 px-8 py-4 text-sm font-bold tracking-wider text-white shadow-[0_4px_25px_rgba(23,70,210,0.35)] hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    Apply to Become a Visionary Founder
                  </button>

                  <button
                    onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 px-8 py-4 text-sm font-bold tracking-wider text-[#D4AF37] shadow-md hover:scale-[1.02] transition-all backdrop-blur-md cursor-pointer"
                  >
                    Schedule Confidential Founder Strategy Call
                  </button>
                </div>

                {/* Value Tagline & Supporting Proof Line Glass Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white/80 text-sm sm:text-base leading-relaxed space-y-4 shadow-2xl relative overflow-hidden max-w-[1400px] w-full mt-3 text-center mx-auto">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-bl-full blur-2xl pointer-events-none" />
                  
                  <p className="font-semibold text-white/95 text-base sm:text-lg leading-relaxed text-center max-w-[1200px] mx-auto">
                    The ultimate shortcut from concept to cross-border enterprise. We supply the tech, the talent, the legal, and the capital pipelines. You bring the vision. We Building the Next Generation of Global AI Companies.
                  </p>
                  
                  <div className="text-xs sm:text-sm text-white/70 border-t border-white/10 pt-4 font-mono leading-relaxed text-center">
                    Built by TECH6SENSE AI. Trusted by founders across the USA, UK, Australia, Canada, UAE, EU, India and Singapore.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Trust Strip (below hero) */}
        <div className="w-full bg-[#040916] border-y border-white/10 py-5 relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-white/90 text-xs sm:text-sm font-semibold font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="text-[#00A86B] text-base font-bold">✓</span> 25+ AI & Tech Capabilities
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00A86B] text-base font-bold">✓</span> 100% Ownership Retained
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00A86B] text-base font-bold">✓</span> 9+ Ecosystem Components
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00A86B] text-base font-bold">✓</span> 7+ Global Markets Served
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00A86B] text-base font-bold">✓</span> 1 Complete Ecosystem
            </div>
          </div>
        </div>

        <div className="relative bg-slate-50 text-slate-900 overflow-hidden">
          <GlobalAIOpportunity />
          <ProblemWeSolve />

          <IntroducingProgram />
          <EcosystemComponents />
          <WhatYouWalkAwayWith />
          <EliteAdvantage />
          <WhoIsThisFor />
          <HowItWorks />

          <WhyTech6SenseAI />
          <FounderMessage />
          <NationalVsGlobalComparison />
          <FounderSelectionCriteria />
          <ApplicationForm />
          <SuccessStories />
          <FAQSection />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
