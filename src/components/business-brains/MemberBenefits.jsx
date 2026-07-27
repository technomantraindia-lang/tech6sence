import React, { useState } from 'react';

export default function MemberBenefits() {
  const [activeTab, setActiveTab] = useState('FOR INVESTORS');

  const tabsData = {
    'FOR INVESTORS': [
      {
        title: "Access to Vetted Opportunities",
        bullets: [
          "Curated deal flow of AI and deep-tech startups",
          "Due diligence support from TECH6SENSE experts",
          "Early access to promising ventures",
          "Portfolio company collaboration opportunities"
        ]
      },
      {
        title: "Intelligence and Insights",
        bullets: [
          "Market trend analysis and forecasts",
          "Technology assessment and validation",
          "Regulatory and policy updates",
          "Competitive landscape monitoring"
        ]
      },
      {
        title: "Network Expansion",
        bullets: [
          "Connect with fellow investors for syndication",
          "Meet corporate innovation leaders",
          "Engage with academic researchers",
          "Access international investment opportunities"
        ]
      },
      {
        title: "Educational Programming",
        bullets: [
          "Deep-tech technology workshops",
          "AI investment thesis development",
          "Sector-specific deep dives",
          "Founder evaluation frameworks"
        ]
      }
    ],
    'FOR STARTUP ENTREPRENEURS': [
      {
        title: "Capital Access",
        bullets: [
          "Direct relationships with active investors",
          "Pitch practice and refinement sessions",
          "Investor introduction facilitation",
          "Fundraising strategy consultation"
        ]
      },
      {
        title: "Strategic Partnerships",
        bullets: [
          "Connect with complementary startups",
          "Enterprise partnership opportunities",
          "Technology collaboration",
          "Go-to-market partnerships"
        ]
      },
      {
        title: "Mentorship and Guidance",
        bullets: [
          "Learn from successful founders",
          "Industry veteran insights",
          "Technical advisor connections",
          "Board member recruitment"
        ]
      },
      {
        title: "Visibility and Credibility",
        bullets: [
          "Showcase your innovation",
          "Build reputation in the ecosystem",
          "Media and speaking opportunities",
          "Award and recognition nominations"
        ]
      }
    ],
    'FOR INDUSTRY LEADERS': [
      {
        title: "Innovation Discovery",
        bullets: [
          "Early exposure to disruptive technologies",
          "Potential acquisition targets",
          "Innovation partnership opportunities",
          "Corporate venture collaboration"
        ]
      },
      {
        title: "Thought Leadership",
        bullets: [
          "Speaking and panel participation",
          "Content contribution and co-creation",
          "Industry influence and shaping",
          "Talent discovery and recruitment"
        ]
      },
      {
        title: "Strategic Intelligence",
        bullets: [
          "Emerging technology awareness",
          "Competitive intelligence",
          "Market evolution insights",
          "Disruptive threat identification"
        ]
      }
    ]
  };

  const tabs = ['FOR INVESTORS', 'FOR STARTUP ENTREPRENEURS', 'FOR INDUSTRY LEADERS'];

  return (
    <section className="relative bg-white text-slate-900 py-24 md:py-32 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-cyan-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[450px] h-[450px] bg-violet-100/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span 
            className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-[0.25em] mb-4 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            MEMBER VALUE
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Strategic Value for Every Seat at the Table
          </h2>
        </div>

        {/* Accessible Tabs Header */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 max-w-full overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'bg-slate-950 text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  role="tab"
                  aria-selected={isActive}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tabsData[activeTab].map((card, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:shadow-md group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="font-mono text-xs text-cyan-600 uppercase tracking-widest font-bold">
                    {activeTab} 0{idx + 1}
                  </span>
                </div>

                <h3 
                  className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {card.title}
                </h3>

                <ul className="space-y-2.5 text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {card.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-cyan-600 font-bold shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
