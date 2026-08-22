import React, { useState } from 'react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "How exclusive is BUSINESS BRAINS, really?",
      a: "Membership is capped by design and granted only through private application or member nomination. Most applicants are not admitted — exclusivity here is a structural commitment, not a marketing claim."
    },
    {
      q: "Can anyone apply, or must I be nominated?",
      a: "Both paths exist. Many members are nominated by existing members; others apply directly and are reviewed independently. Both are held to the same standard."
    },
    {
      q: "Who is behind BUSINESS BRAINS?",
      a: "BUSINESS BRAINS is a Most Exclusive Global Syndicate by TECH6SENSE AI, a global AI and Tech development company, serving markets across the world."
    },
    {
      q: "Who can join BUSINESS BRAINS?",
      a: "Investors, entrepreneurs, and industry leaders who are actively building, funding, or scaling businesses. Every application is reviewed individually."
    },
    {
      q: "Is BUSINESS BRAINS only for large companies or accredited investors?",
      a: "No. What matters is genuine intent and contribution — from early-stage founders to established investors and executives."
    },
    {
      q: "How is BUSINESS BRAINS different from other business communities?",
      a: "It's curated, global, and outcome-focused. Members join to unlock real capital, partnerships, and opportunities — not to collect connections."
    },
    {
      q: "What nations does the Circle span?",
      a: "The United States, United Kingdom, Australia, Canada, India, the European Union, UAE, Singapore, and Hong Kong."
    },
    {
      q: "How is admission decided across so many different Regions?",
      a: "Every application, regardless of home market, is reviewed against one global standard. There are no regional quotas — only relevance to the room."
    },
    {
      q: "Can I be a member if I operate outside these Regions?",
      a: "Membership is currently structured around these nine core markets. Applications from outside this footprint are considered on a case-by-case basis as the institution grows deliberately."
    },
    {
      q: "Does membership grant access in every Regions, or just my own?",
      a: "A single BUSINESS BRAINS membership grants standing across all Regions — one membership, global access."
    },
    {
      q: "How do I apply?",
      a: "Submit your application through the website. Our team personally reviews each submission before extending an invitation."
    },
    {
      q: "Why is membership intentionally limited?",
      a: "Exclusivity ensures meaningful relationships, trusted conversations, and a consistently high-quality member experience."
    },
    {
      q: "What does membership cost?",
      a: "Membership details are shared directly with members during the consideration process."
    }
  ];

  return (
    <section id="faq" className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/50 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Everything you need to know about joining the Business Brains Private Global Circle.
          </p>
        </div>

        {/* 13 FAQ Accordion Grid (2-Column Desktop Grid like Home FAQ) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-r from-[#1746D2] to-[#00A86B] border-transparent shadow-lg text-white' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
                onMouseEnter={() => setOpenIdx(idx)}
                onMouseLeave={() => setOpenIdx(null)}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={`w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer select-none transition-all duration-300 group ${
                    isOpen ? '' : 'hover:bg-gradient-to-r hover:from-[#1746D2] hover:to-[#00A86B]'
                  }`}
                >
                  <span className={`font-display text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-slate-900 group-hover:text-white'
                  }`}>
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'rotate-180 bg-white/20 text-white' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-white/20 group-hover:text-white'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-body text-white/95 text-sm md:text-base leading-relaxed border-t border-white/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
