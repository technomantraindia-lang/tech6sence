import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';

// Page Sections in Exact PDF Structure Order
import HeroTrustStrip from '../components/business-brains/HeroTrustStrip';
import PhilosophySection from '../components/business-brains/PhilosophySection';
import WhyBusinessBrainsExists from '../components/business-brains/WhyBusinessBrainsExists';
import ComparisonSection from '../components/business-brains/ComparisonSection';
import FounderLetter from '../components/business-brains/FounderLetter';
import WhyEliteJoin from '../components/business-brains/WhyEliteJoin';
import WhoOccupiesRoom from '../components/business-brains/WhoOccupiesRoom';
import MemberBenefits from '../components/business-brains/MemberBenefits';
import CommunityActivities from '../components/business-brains/CommunityActivities';
import FlagshipEvent from '../components/business-brains/FlagshipEvent';
import BusinessBrainsExperience from '../components/business-brains/BusinessBrainsExperience';
import InfluenceWithoutBorders from '../components/business-brains/InfluenceWithoutBorders';
import SyndicatePrivileges from '../components/business-brains/SyndicatePrivileges';
import MemberExpectations from '../components/business-brains/MemberExpectations';
import WhatHappensInside from '../components/business-brains/WhatHappensInside';
import MembershipPrivilege from '../components/business-brains/MembershipPrivilege';
import ApplicationProcess from '../components/business-brains/ApplicationProcess';
import BusinessBrainsPromise from '../components/business-brains/BusinessBrainsPromise';
import SuccessOneConversation from '../components/business-brains/SuccessOneConversation';
import FAQSection from '../components/business-brains/FAQSection';
import ApplicationAndNomination from '../components/business-brains/ApplicationAndNomination';
import NetworkCTA from '../components/business-brains/NetworkCTA';

export default function BusinessBrains() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#000110] text-white overflow-hidden">
      {/* 1. Header */}
      <Header />
      
      <main className="flex-grow">
        {/* 2 & 3. Hero & Trust Strip */}
        <HeroTrustStrip />

        {/* 4. SECTION 1 — THE PHILOSOPHY */}
        <PhilosophySection />

        {/* 5. SECTION 2 — WHY BUSINESS BRAINS EXISTS */}
        <WhyBusinessBrainsExists />

        {/* 6. SECTION 3 — TRADITIONAL NETWORKING VS BUSINESS BRAINS */}
        <ComparisonSection />

        {/* 7. SECTION 4 — A LETTER FROM THE FOUNDER */}
        <FounderLetter />

        {/* 8. SECTION 5 — WHY THE ELITE JOIN */}
        <WhyEliteJoin />

        {/* 9. SECTION 6 — WHO OCCUPIES THE ROOM */}
        <WhoOccupiesRoom />

        {/* 10. SECTION 7 — MEMBER BENEFITS BY PROFILE */}
        <MemberBenefits />

        {/* 11. SECTION 8 — HOW MEMBERS CONNECT */}
        <CommunityActivities />

        {/* 12. SECTION 12 — ANNUAL BUSINESS BRAINS SUMMIT */}
        <FlagshipEvent />

        {/* 13. SECTION 9 — BUSINESS BRAINS EXPERIENCE */}
        <BusinessBrainsExperience />

        {/* 14. SECTION 10 — INFLUENCE WITHOUT BORDERS */}
        <InfluenceWithoutBorders />

        {/* 15. SECTION 11 — SYNDICATE PRIVILEGES */}
        <SyndicatePrivileges />

        {/* 16. SECTION 16 — THE BUSINESS BRAINS STANDARD */}
        <MemberExpectations />

        {/* 17. SECTION 13 — WHAT HAPPENS INSIDE BUSINESS BRAINS */}
        <WhatHappensInside />

        {/* 18. SECTION 14 — MEMBERSHIP IS A PRIVILEGE */}
        <MembershipPrivilege />

        {/* 19. SECTION 15 — THE INDUCTION PROTOCOL */}
        <ApplicationProcess />

        {/* 20. SECTION 20 — THE BUSINESS BRAINS PROMISE */}
        <BusinessBrainsPromise />

        {/* 21. SECTION 21 — SUCCESS STARTS WITH ONE CONVERSATION */}
        <SuccessOneConversation />

        {/* 22. SECTION 22 — FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />

        {/* 23 & 24. SECTION 23 & 24 — APPLICATION AND NOMINATION ENTRY + FORMS */}
        <ApplicationAndNomination />

        {/* 25. SECTION 25 — FINAL CTA */}
        <NetworkCTA />
      </main>
      
      {/* 26. Footer */}
      <Footer />
    </div>
  );
}
