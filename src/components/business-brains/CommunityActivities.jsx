import React, { useState } from 'react';

export default function CommunityActivities() {
  const [expandedCard, setExpandedCard] = useState(null);

  const activities = [
    {
      id: 1,
      title: "MONTHLY ROUNDTABLE DISCUSSIONS",
      desc: "Confidential Chatham House rule discussions designed for strategic alignment and honest dialogue between industry leaders.",
      tags: ["Chatham House", "Monthly", "Executive"],
      items: [
        "Generative AI business models and monetization",
        "Regulatory landscape for AI in healthcare",
        "Building AI products for global markets",
        "Fundraising in the current environment"
      ],
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "ANNUAL BUSINESS BRAINS SUMMIT",
      desc: "Our flagship international gathering uniting global members, sovereign allocators, and pioneering tech builders.",
      tags: ["Flagship", "Annual", "Global"],
      items: [
        "International speakers and thought leaders",
        "Technology demonstrations",
        "Investment trends and forecasts",
        "Award ceremonies & gala dinner"
      ],
      icon: (
        <svg className="w-6 h-6 text-[#1746D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "QUARTERLY INVESTOR SHOWCASES",
      desc: "Closed-door pitch and co-investment showcases matching pre-vetted AI startups directly with active venture capital firms.",
      tags: ["Deal Flow", "Quarterly", "Syndicate"],
      items: [
        "Curated startup presentations",
        "Active investor audience & panel feedback",
        "Structured networking sessions",
        "Follow-up meeting facilitation"
      ],
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 4,
      title: "EXPERT WORKSHOP SERIES",
      desc: "Practical masterclasses covering technical AI scaling, corporate sales processes, IP protection, and valuation models.",
      tags: ["Masterclasses", "Technical", "Business"],
      items: [
        "Technical: AI architecture & Scaling ML systems",
        "Business: Pricing strategies & Sales processes",
        "Legal: IP protection & Contract negotiation",
        "Financial: Cap tables, Valuation & Term sheets"
      ],
      icon: (
        <svg className="w-6 h-6 text-[#1746D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 5,
      title: "PRIVATE ONLINE PLATFORM",
      desc: "Continuous 24/7 access to our encrypted global platform for deal flow, resources, direct messaging, and chapter events.",
      tags: ["Encrypted", "Continuous", "Global Portal"],
      items: [
        "Discussion forums by topic & Deal room",
        "Resource library & Member directory",
        "Event calendar and registration",
        "Direct messaging and warm introductions"
      ],
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#020617] text-white py-24 md:py-32 border-b border-slate-800/80 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-display text-sm font-extrabold text-emerald-400 uppercase tracking-[0.25em] mb-4 block"
          >
            HOW MEMBERS CONNECT
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            How Members Connect
          </h2>

          <p 
            className="text-slate-300 text-base md:text-lg leading-relaxed font-normal"
          >
            Regular programming designed to foster meaningful relationships and drive real outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act) => {
            const isExpanded = expandedCard === act.id;
            return (
              <div 
                key={act.id}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    {act.icon}
                  </div>

                  <h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors"
                  >
                    {act.title}
                  </h3>

                  <p 
                    className="text-slate-300 text-sm leading-relaxed mb-6 font-normal"
                  >
                    {act.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {act.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300 font-medium">
                    {act.items.map((it, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">•</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
