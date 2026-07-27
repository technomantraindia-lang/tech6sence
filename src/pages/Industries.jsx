import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import IndustriesHero from '../components/industries/IndustriesHero';
import IndustriesImpactContent from '../components/industries/IndustriesImpactContent';
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
        <IndustriesImpactContent />
        <IndustriesFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
