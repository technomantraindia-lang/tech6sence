import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import DeepTechHero from '../components/deep-tech/DeepTechHero';
import DeepTechTrustStrip from '../components/deep-tech/DeepTechTrustStrip';
import ProductVisionIntro from '../components/deep-tech/ProductVisionIntro';
import DeepTechCategories from '../components/deep-tech/DeepTechCategories';
import ProductInnovationShowcase from '../components/deep-tech/ProductInnovationShowcase';
import ProductDevelopmentApproach from '../components/deep-tech/ProductDevelopmentApproach';
import ProductIntelligenceStack from '../components/deep-tech/ProductIntelligenceStack';
import DeepTechApplications from '../components/deep-tech/DeepTechApplications';
import DeepTechFAQ from '../components/deep-tech/DeepTechFAQ';
import DeepTechFinalCTA from '../components/deep-tech/DeepTechFinalCTA';

export default function DeepTechProducts() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-white overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <DeepTechHero />

        {/* Section 2: Trust Strip (Statement & Badges Marquee placed outside Hero) */}
        <DeepTechTrustStrip />

        {/* Section 3: End-to-End Deep-Tech Product Ecosystem (Intro & 5 Pillars) */}
        <ProductVisionIntro />

        {/* Section 4: Comparison Matrix (Traditional vs. TECH6SENSE) */}
        <DeepTechCategories />

        {/* Section 5: Our Product Portfolio (11 Products in 3D flipping cards) */}
        <ProductInnovationShowcase />

        {/* Section 6: The Innovation Engine (4 steps workflow) */}
        <ProductDevelopmentApproach />

        {/* Section 7: Product Development journey (10 detailed phases) */}
        <ProductIntelligenceStack />

        {/* Section 8: Startup Ecosystem, Research, Privacy, Compliance & Why Us */}
        <DeepTechApplications />

        {/* Section 9: Frequently Asked Questions (19 detailed accordions) */}
        <DeepTechFAQ />

        {/* Section 10: Final CTA Section */}
        <DeepTechFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
