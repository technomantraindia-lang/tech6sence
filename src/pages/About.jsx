import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import FounderLedIntelligence from '../components/about/FounderLedIntelligence';
import SixDimensions from '../components/about/SixDimensions';
import WhatWeBuild from '../components/about/WhatWeBuild';
import GlobalPresence from '../components/about/GlobalPresence';
import AboutFinalCTA from '../components/about/AboutFinalCTA';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-slate-50">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-28">
        <AboutHero />
        <CompanyStory />
        <FounderLedIntelligence />
        <SixDimensions />
        <WhatWeBuild />
        <GlobalPresence />
        <AboutFinalCTA />
      </main>
      
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
