import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import IndustriesHero from '../components/industries/IndustriesHero';
import IndustryOverview from '../components/industries/IndustryOverview';
import IndustrySectors from '../components/industries/IndustrySectors';
import AIApplicationMapping from '../components/industries/AIApplicationMapping';
import IndustryDetailPanels from '../components/industries/IndustryDetailPanels';
import CrossIndustryTechnologyFit from '../components/industries/CrossIndustryTechnologyFit';
import IndustryEngagement from '../components/industries/IndustryEngagement';
import IndustriesFinalCTA from '../components/industries/IndustriesFinalCTA';

export default function Industries() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-white">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-28">
        <IndustriesHero />
        <IndustryOverview />
        <IndustrySectors />
        <AIApplicationMapping />
        <IndustryDetailPanels />
        <CrossIndustryTechnologyFit />
        <IndustryEngagement />
        <IndustriesFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
