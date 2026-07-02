import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import DeepTechHero from '../components/deep-tech/DeepTechHero';
import ProductVisionIntro from '../components/deep-tech/ProductVisionIntro';
import DeepTechCategories from '../components/deep-tech/DeepTechCategories';
import ProductInnovationShowcase from '../components/deep-tech/ProductInnovationShowcase';
import ProductDevelopmentApproach from '../components/deep-tech/ProductDevelopmentApproach';
import ProductIntelligenceStack from '../components/deep-tech/ProductIntelligenceStack';
import DeepTechApplications from '../components/deep-tech/DeepTechApplications';
import DeepTechFinalCTA from '../components/deep-tech/DeepTechFinalCTA';

export default function DeepTechProducts() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-white">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-28">
        <DeepTechHero />
        <ProductVisionIntro />
        <DeepTechCategories />
        <ProductInnovationShowcase />
        <ProductDevelopmentApproach />
        <ProductIntelligenceStack />
        <DeepTechApplications />
        <DeepTechFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
