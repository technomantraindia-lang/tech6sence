import React, { useState } from 'react';

export default function WhoOccupiesRoom() {
  const [activeTab, setActiveTab] = useState('investors');

  const memberTiers = [
    {
      tier: "The Capital Allocators",
      profile: "(Ultra-High-Net-Worth Individuals, VCs, Private Equity, and Family Offices)",
      expertise: "Liquidity, market foresight, and risk management at scale.",
      value: "First-look access to highly vetted, proprietary deal flow and disruptive global tech ventures before public market awareness."
    },
    {
      tier: "The Visionaries",
      profile: "(Serial entrepreneurs and architects of highly scalable, disruptive enterprises)",
      expertise: "Scalable models, disruptive agility, and relentless execution.",
      value: "Frictionless access to global liquidity, board-level mentorship, and elite AI-integration frameworks powered by TECH6SENSE AI."
    },
    {
      tier: "The Industry Titans",
      profile: "(C-Suite executives, global thought leaders, and apex operators)",
      expertise: "Decades of operational dominance and regulatory leverage.",
      value: "Confidential strategic alliances, legacy-defining joint ventures, and unfiltered insights into global regulatory and market shifts."
    }
  ];

  const communityBenefits = {
    investors: {
      title: "For Investors",
      sections: [
        {
          heading: "Access to Vetted Opportunities",
          items: [
            "Curated deal flow of AI and deep-tech startups",
            "Due diligence support from TECH6SENSE experts",
            "Early access to promising ventures",
            "Portfolio company collaboration opportunities"
          ]
        },
        {
          heading: "Intelligence and Insights",
          items: [
            "Market trend analysis and forecasts",
            "Technology assessment and validation",
            "Regulatory and policy updates",
            "Competitive landscape monitoring"
          ]
        },
        {
          heading: "Network Expansion",
          items: [
            "Connect with fellow investors for syndication",
            "Meet corporate innovation leaders",
            "Engage with academic researchers",
            "Access international investment opportunities"
          ]
        },
        {
          heading: "Educational Programming",
          items: [
            "Deep-tech technology workshops",
            "AI investment thesis development",
            "Sector-specific deep dives",
            "Founder evaluation frameworks"
          ]
        }
      ]
    },
    entrepreneurs: {
      title: "For Startup Entrepreneurs",
      sections: [
        {
          heading: "Capital Access",
          items: [
            "Direct relationships with active investors",
            "Pitch practice and refinement sessions",
            "Investor introduction facilitation",
            "Fundraising strategy consultation"
          ]
        },
        {
          heading: "Strategic Partnerships",
          items: [
            "Connect with complementary startups",
            "Enterprise partnership opportunities",
            "Technology collaboration",
            "Go-to-market partnerships"
          ]
        },
        {
          heading: "Mentorship and Guidance",
          items: [
            "Learn from successful founders",
            "Industry veteran insights",
            "Technical advisor connections",
            "Board member recruitment"
          ]
        },
        {
          heading: "Visibility and Credibility",
          items: [
            "Showcase your innovation",
            "Build reputation in the ecosystem",
            "Media and speaking opportunities",
            "Award and recognition nominations"
          ]
        }
      ]
    },
    leaders: {
      title: "For Industry Leaders",
      sections: [
        {
          heading: "Innovation Discovery",
          items: [
            "Early exposure to disruptive technologies",
            "Potential acquisition targets",
            "Innovation partnership opportunities",
            "Corporate venture collaboration"
          ]
        },
        {
          heading: "Thought Leadership",
          items: [
            "Speaking and panel participation",
            "Content contribution and co-creation",
            "Industry influence and shaping",
            "Talent discovery and recruitment"
          ]
        },
        {
          heading: "Strategic Intelligence",
          items: [
            "Emerging technology awareness",
            "Competitive intelligence",
            "Market evolution insights",
            "Disruptive threat identification"
          ]
        }
      ]
    }
  };

  return (
    <section className="relative bg-[#000110] text-white py-20 md:py-28 border-b border-slate-800/80 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* MAIN SECTION TITLE & INTRO */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE GLOBAL CIRCLE
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
            Who Occupies the Room
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium text-justify md:text-left">
            Business Brains is strictly curated to balance three pillars of economic power. Every member is subjected to rigorous due diligence to ensure they elevate the collective intelligence and capital of the syndicate. Our strict vetting process ensures that every seat at the table is occupied by an individual capable of shifting markets. Our private network spans <strong className="text-white font-extrabold">500+ members</strong> across the USA, UK, Australia, Canada, India, the European Union, UAE, Singapore, and Hong Kong.
          </p>
        </div>

        {/* 1. MEMBER TIER TABLE (3-COLUMN DESKTOP / STACKED MOBILE) */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display text-left border-l-4 border-l-[#00A86B] pl-3">
            Syndicate Member Tiers
          </h3>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-xs md:text-sm font-extrabold uppercase font-display tracking-wider text-white">
                  <th className="p-6 w-1/3 border-r border-slate-800 text-white bg-slate-950">The Member Tier</th>
                  <th className="p-6 w-1/4 border-r border-slate-800 text-white bg-slate-950">The Expertise</th>
                  <th className="p-6 w-5/12 text-white bg-slate-950">The Value Extracted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm font-medium">
                {memberTiers.map((row, idx) => (
                  <tr key={idx} className="transition-colors">
                    {/* Column 1: Dark Slate */}
                    <td className="p-6 border-r border-slate-800/80 align-top bg-slate-900 text-white">
                      <div className="font-extrabold text-white text-base md:text-lg font-display mb-1">{row.tier}</div>
                      <div className="text-xs text-slate-300 italic leading-relaxed">{row.profile}</div>
                    </td>

                    {/* Column 2: Royal Blue */}
                    <td className="p-6 border-r border-blue-600/30 align-top bg-[#1746D2] text-white leading-relaxed font-semibold">
                      {row.expertise}
                    </td>

                    {/* Column 3: Emerald Green */}
                    <td className="p-6 align-top bg-[#00A86B] text-white leading-relaxed font-extrabold">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View */}
          <div className="md:hidden space-y-4">
            {memberTiers.map((row, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-left shadow-xl">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-extrabold text-white text-lg font-display">{row.tier}</div>
                  <div className="text-xs text-slate-300 italic mt-0.5">{row.profile}</div>
                </div>
                <div className="p-4 rounded-xl bg-[#1746D2] text-white text-xs font-semibold">
                  <strong className="text-cyan-200 block mb-1">The Expertise:</strong>
                  {row.expertise}
                </div>
                <div className="p-4 rounded-xl bg-[#00A86B] text-white text-xs font-extrabold">
                  <strong className="text-white block mb-1">The Value Extracted:</strong>
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. COMMUNITY BENEFITS SUBSECTION */}
        <div className="pt-10 border-t border-slate-800/80 space-y-8">
          
          <div className="text-left space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Community Benefits
            </h3>
            <p className="text-slate-400 text-sm font-medium">
              Tailored value ecosystems crafted for investors, startup entrepreneurs, and industry leaders.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center gap-3 border-b border-slate-800 pb-4">
            {Object.keys(communityBenefits).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-emerald-500 to-[#1746D2] text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {communityBenefits[key].title}
              </button>
            ))}
          </div>

          {/* Active Tab Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {communityBenefits[activeTab].sections.map((sec, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-2">
                    {sec.heading}
                  </div>
                  <ul className="space-y-2.5 text-xs md:text-sm text-slate-300 font-medium">
                    {sec.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-emerald-400 font-bold text-xs mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
