import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactInfo from '../components/contact/ContactInfo';
import ConsultationOptions from '../components/contact/ConsultationOptions';
import GiftCityPresence from '../components/contact/GiftCityPresence';
import ContactFinalCTA from '../components/contact/ContactFinalCTA';

export default function LetsConnect() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-white">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-28">
        <ContactHero />
        <ContactFormSection />
        <ContactInfo />
        <ConsultationOptions />
        <GiftCityPresence />
        <ContactFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
