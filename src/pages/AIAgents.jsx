import React from 'react';
import Header from '../components/Header';
import IntelligentHero from '../components/ai-agents/IntelligentHero';
import IntelligentStatsBar from '../components/ai-agents/IntelligentStatsBar';
import IntelligentGlobalPresence from '../components/ai-agents/IntelligentGlobalPresence';
import IntelligentIntroPrinciples from '../components/ai-agents/IntelligentIntroPrinciples';
import IntelligentAdvantage from '../components/ai-agents/IntelligentAdvantage';
import IntelligentSolutionsEcosystem from '../components/ai-agents/IntelligentSolutionsEcosystem';
import IntelligentDeliverValue from '../components/ai-agents/IntelligentDeliverValue';
import IntelligentIndustries from '../components/ai-agents/IntelligentIndustries';
import IntelligentWhyChooseUs from '../components/ai-agents/IntelligentWhyChooseUs';
import IntelligentFinalCTA from '../components/ai-agents/IntelligentFinalCTA';
import Footer from '../components/sections/Footer';

export default function AIAgents() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-white overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* Section 1: Hero Section (Headline, Tagline, Subheadline, CTAs, Trust Statement) */}
        <IntelligentHero />
        
        {/* Section 2: Global Presence Strip (Out of Hero Section) */}
        <IntelligentGlobalPresence />

        {/* Section 3: Introduction, Our Mandate, Master Tagline, Operating Principles */}
        <IntelligentIntroPrinciples />
        
        {/* Section 4: Trust Strip / Stats Bar (Placed right above the Advantage Matrix) */}
        <IntelligentStatsBar />

        {/* Section 5: TECH6SENSE AI Advantage Matrix */}
        <IntelligentAdvantage />
        
        {/* Section 6: Services Page - 26 Practice Lines */}
        <IntelligentSolutionsEcosystem />
        
        {/* Section 7: How We Deliver Value */}
        <IntelligentDeliverValue />
        
        {/* Section 8: Industries We Empower */}
        <IntelligentIndustries />
        
        {/* Section 9: Why Global Organizations Choose TECH6SENSE AI */}
        <IntelligentWhyChooseUs />
        
        {/* Section 10: Final CTA Section */}
        <IntelligentFinalCTA />
      </main>

      {/* Footer component at the very end of the page */}
      <Footer />
    </div>
  );
}
