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
        {/* HERO SECTION WITH VIDEO BACKGROUND */}
        <div className="relative w-full overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-16 border-b border-white/10 bg-[#060410]">
          
          {/* Centered Infinity Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-center opacity-75"
            >
              <source src={bgVideo} type="video/mp4" />
            </video>

          </div>

          {/* Content */}
          <div className="mx-auto max-w-[90%] px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Left Column: Hero Copy & Buttons */}
              <div className="lg:col-span-9 flex flex-col items-start text-left gap-6">
               

                <span className="font-mono text-xs font-bold text-violet-400 uppercase tracking-widest block">
                  Visionary Founders
                </span>

                {/* Title with Space Grotesk */}
                <h1 
                  className="text-[clamp(2.25rem,3.8vw,3.25rem)] leading-[1.1] font-extrabold tracking-tight text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Build Your AI Empire Powered by a Global Ecosystem.
                </h1>

                {/* Subheadline & Tagline Combined */}
                <div className="space-y-4 max-w-3xl">
                  <p 
                    className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed font-medium"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Visionary Founders is the world’s elite most comprehensive premier all-in-one AI Founder Ecosystem designed to transform ambitious entrepreneurs, professionals, start-up founders, consultants, and innovators into owners of globally competitive AI and technology companies and dominate the global markets.
                  </p>

                  <p 
                    className="text-violet-300 text-xs sm:text-sm lg:text-base font-semibold border-l-2 border-violet-500 pl-3 leading-relaxed"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    "From Idea to International Clients —We don't just simply train founders. We build AI companies with them."
                  </p>
                </div>

                {/* Interactive buttons */}
                <div className="flex flex-wrap items-center gap-3 w-full">
                  {/* Primary Pill Button */}
                  <button
                    onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 px-6 py-3 text-xs font-bold tracking-wider text-white shadow-md hover:scale-[1.01] transition-all cursor-pointer"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Apply to Become a Visionary Founder
                  </button>

                  {/* Secondary Pill Button */}
                  <button
                    onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-full border border-white/20 bg-white/5 hover:bg-white/15 px-6 py-3 text-xs font-bold tracking-wider text-white shadow-md hover:scale-[1.01] transition-all backdrop-blur-md cursor-pointer"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Schedule Confidential Founder Strategy Call
                  </button>
                </div>

                {/* Value Tagline & Proof Info inside a Premium Glass Card */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs leading-relaxed space-y-4 shadow-2xl relative overflow-hidden max-w-3xl mt-4">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-bl-full blur-xl pointer-events-none" />
                  
                  <div>
                    <p className="font-semibold text-white/95 text-xs sm:text-sm leading-relaxed">
                      The ultimate shortcut from concept to cross-border enterprise. We supply the tech, the talent, the legal, and the capital pipelines. You bring the vision. We Building the Next Generation of Global AI Companies.
                    </p>
                  </div>
                  <div className="text-[10px] text-white/50 border-t border-white/5 pt-3 font-mono leading-relaxed">
                    Built by TECH6SENSE AI. Trusted across the USA, UK, Australia, Canada, UAE, EU, India and Singapore.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Trust Strip */}
        <div className="w-full bg-[#0a0718] border-y border-white/5 py-5 relative z-10">
          <div className="max-w-[85rem] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-white/90 text-xs font-semibold font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="text-violet-400 text-sm">✓</span> 25+ AI & Tech Capabilities
            </div>
            <div className="flex items-center gap-2">
              <span className="text-violet-400 text-sm">✓</span> 100% Ownership Retained
            </div>
            <div className="flex items-center gap-2">
              <span className="text-violet-400 text-sm">✓</span> 9+ Ecosystem Components
            </div>
            <div className="flex items-center gap-2">
              <span className="text-violet-400 text-sm">✓</span> 7+ Global Markets Served
            </div>
            <div className="flex items-center gap-2">
              <span className="text-violet-400 text-sm">✓</span> 1 Complete Ecosystem
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
          <ApplicationProcess />
          <FounderSelectionCriteria />
          <SuccessStories />
          <FAQSection />
          <ApplicationForm />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
