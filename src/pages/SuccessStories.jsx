import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import SuccessStoriesHero from '../components/success-stories/SuccessStoriesHero';
import SuccessStoriesContent from '../components/success-stories/SuccessStoriesContent';
import SuccessStoriesFinalCTA from '../components/success-stories/SuccessStoriesFinalCTA';

export default function SuccessStories() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-white overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <SuccessStoriesHero />
        <SuccessStoriesContent />
        <SuccessStoriesFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
