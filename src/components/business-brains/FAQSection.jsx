import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "1. How exclusive is BUSINESS BRAINS?",
      a: "Admission is strictly capped and by invitation or committee consideration only. We maintain high standards of professional achievement, capital allocation, or technical leadership."
    },
    {
      q: "2. Can anyone apply or must they be nominated?",
      a: "Individuals may present their dossier directly for consideration or be nominated by an active Circle member. All submissions undergo equal rigorous personal review."
    },
    {
      q: "3. Who is behind BUSINESS BRAINS?",
      a: "BUSINESS BRAINS is an institution powered by TECH6SENSE AI, leveraging global deep-tech expertise, research, and enterprise AI leadership."
    },
    {
      q: "4. Who can join?",
      a: "Membership is open to accredited investors, venture partners, family office principals, high-growth startup founders, and corporate C-suite executives."
    },
    {
      q: "5. Is it only for large companies or accredited investors?",
      a: "We accept high-potential startup founders building validated MVPs alongside institutional investors, family offices, and enterprise leaders."
    },
    {
      q: "6. How is it different from other communities?",
      a: "We are not a public networking group or social platform. We are a private syndicate providing vetted deal flow, proprietary AI technology access from TECH6SENSE AI, and confidential executive deal rooms."
    },
    {
      q: "7. What nations does the Circle span?",
      a: "Our global ecosystem spans the USA, UK, Australia, Canada, India, European Union, UAE, Singapore, and Hong Kong."
    },
    {
      q: "8. How is admission decided across regions?",
      a: "A centralized syndicate review committee evaluates candidates using uniform international benchmarks regardless of geography."
    },
    {
      q: "9. Can someone outside the current regions apply?",
      a: "Yes, exceptional candidates from emerging tech hubs outside core regions may apply and will be evaluated on merit."
    },
    {
      q: "10. Does membership provide global access?",
      a: "Yes, admitted members gain full access to international summit privileges, digital deal rooms, and regional roundtables across all chapters."
    },
    {
      q: "11. How does someone apply?",
      a: "Select 'Begin My Application' or 'Submit a Nomination' on our consideration portal, complete the 4-stage dossier submission, and await committee review."
    },
    {
      q: "12. Why is membership intentionally limited?",
      a: "Limiting seat capacity preserves trust density, ensures high member quality, and maintains active high-value engagement across the circle."
    },
    {
      q: "13. What does membership cost?",
      a: "Specific contribution and syndicate terms are confidential and disclosed directly to candidates during the final stage of the induction process."
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative bg-white text-slate-900 py-24 md:py-32 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span 
            className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-[0.25em] mb-4 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            PRIVATE MEMBERSHIP FAQ
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Questions About the Circle
          </h2>
        </div>

        {/* 13 Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm hover:border-slate-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-cyan-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-50 border-cyan-300' : ''}`}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-200/80 font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
