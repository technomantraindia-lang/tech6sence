import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import EcosystemHero from '../components/ecosystem/EcosystemHero';
import EcosystemOverview from '../components/ecosystem/EcosystemOverview';
import VisionaryFounders from '../components/ecosystem/VisionaryFounders';
import BusinessBrains from '../components/ecosystem/BusinessBrains';
import EcosystemModel from '../components/ecosystem/EcosystemModel';
import EcosystemAudience from '../components/ecosystem/EcosystemAudience';
import EcosystemBenefits from '../components/ecosystem/EcosystemBenefits';
import EcosystemFinalCTA from '../components/ecosystem/EcosystemFinalCTA';

export default function Ecosystem() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-white">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-28">
        <EcosystemHero />
        <EcosystemOverview />
        <VisionaryFounders />
        <BusinessBrains />
        <EcosystemModel />
        <EcosystemAudience />
        <EcosystemBenefits />
        <EcosystemFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
