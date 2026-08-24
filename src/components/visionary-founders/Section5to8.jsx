import React, { useState } from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export function IntroducingProgram() {
  const functionList = [
    { fn: 'Legal & Global Registration', get: 'Company registration and legal documentation, structured for cross-border credibility' },
    { fn: 'Premium Digital Presence', get: 'A world-class business website and managed social media presence built to compete internationally' },
    { fn: 'Dedicated Brand & Marketing Leadership', get: 'A branding and marketing manager shaping how global clients perceive your company' },
    { fn: 'Full Technology Team', get: 'Direct access to AI and IT developers, embedded in your build' },
    { fn: 'Technical Delivery Leadership', get: 'A technical team lead and project manager ensuring on-time, enterprise-grade delivery' },
    { fn: 'Executive Technology Guidance', get: 'A dedicated Chief Technology Officer providing strategic and architectural leadership' },
    { fn: 'Client Success Leadership', get: 'A dedicated Client Success Manager protecting delivery quality and retention' },
    { fn: 'World-Class Sales Enablement', get: 'Training in international client acquisition, built for cross-market selling' },
    { fn: 'Committed Support', get: 'End-to-end support until you secure paying clients — not a fixed number of sessions' },
    { fn: 'Dual-Track Capital Access', get: 'Fundraising support through government schemes and private investor networks' },
    { fn: 'Global Expansion Infrastructure', get: 'Support for International entity setup and legally operate your company abroad, visa and relocation assistance if required' }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Stack */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE SOLUTION
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight pt-2">
            Visionary Founders By TECH6SENSE AI
          </h2>

          <h3 className="text-xl md:text-2xl font-bold text-[#1746D2] font-display">
            One Global Ecosystem. Every Pillar of Your Company Handled.
          </h3>
        </div>

        {/* Intro Copy */}
        <div className="max-w-4xl mx-auto space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium text-center mb-14 bg-slate-50 p-4 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
          <p className="font-semibold text-slate-900 text-lg md:text-xl">
            Visionary Founders isn't a course. It isn't a mentorship group. It isn't an incubator that gives you advice and wishes you luck.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            It's a complete operating ecosystem — the legal foundation, technology team, brand engine, sales machine, and expansion pathway of a mature company, made available to you from the moment you join. You focus on vision, strategy, and clients. We power everything behind you — engineered from day one for founders who intend to operate internationally, not just locally.
          </p>
        </div>

        {/* Business Infrastructure Table Section */}
        <div className="w-full mx-auto overflow-hidden rounded-3xl border border-slate-800 shadow-2xl bg-slate-950">
          {/* Header Banner */}
          <div className="p-5 md:p-6 bg-slate-900 border-b border-slate-800 text-white font-display font-bold text-base md:text-lg text-center leading-snug flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse" />
            <span>When you join, you don't get a course. You get a working business infrastructure:</span>
          </div>

          {/* Mobile View: Clean Stacked Cards with Solid Brand Colors */}
          <div className="block md:hidden space-y-4 p-3 bg-slate-950">
            {functionList.map((item, i) => (
              <div key={i} className="border border-slate-800 rounded-2xl shadow-xl overflow-hidden divide-y divide-white/15">
                <div className="p-4 bg-[#1746D2]">
                  <span className="block text-[10px] font-extrabold text-blue-100 uppercase tracking-widest mb-1">FUNCTION</span>
                  <p className="text-xs text-white font-bold">{item.fn}</p>
                </div>
                <div className="p-4 bg-[#00A86B]">
                  <span className="block text-[10px] font-extrabold text-emerald-100 uppercase tracking-widest mb-1">WHAT YOU GET</span>
                  <p className="text-xs text-white font-medium leading-relaxed">{item.get}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Styled Table with Solid Royal Blue & Emerald Green Columns */}
          <table className="hidden md:table w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono text-xs font-bold uppercase tracking-wider border-b border-slate-800">
                <th className="p-5 md:p-6 w-1/3 border-r border-slate-800 text-white">
                  FUNCTION
                </th>
                <th className="p-5 md:p-6 w-2/3 text-white">
                  WHAT YOU GET
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/15 font-medium text-sm text-white">
              {functionList.map((item, i) => (
                <tr key={i} className="transition-colors hover:brightness-110" {...touchHoverProps}>
                  <td className="p-5 md:p-6 bg-[#1746D2] text-white font-extrabold border-r border-white/15">
                    {item.fn}
                  </td>
                  <td className="p-5 md:p-6 bg-[#00A86B] text-white font-semibold leading-relaxed">
                    {item.get}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function EcosystemComponents() {
  const [row1Active, setRow1Active] = useState(0);
  const [row2Active, setRow2Active] = useState(0);

  const components = [
    {
      num: "01",
      title: "Company Registration and Legal Foundation",
      subtitle: "Your Legal Foundation, Expertly Established",
      desc: "We handle all company formation, registration, and legal documentation so you start with a solid foundation.",
      services: [
        "Business entity formation",
        "Tax registration and compliance setup",
        "Intellectual property protection and trademarks",
        "Partnership and shareholder agreements",
        "Employment contracts and NDA templates",
        "Terms of service and privacy policies",
        "Regulatory compliance consulting",
        "International business structure"
      ],
      benefit: "Launch with complete legal protection and professional structure from day one."
    },
    {
      num: "02",
      title: "Business Website and Social Media Management",
      subtitle: "Your Professional Digital Presence",
      desc: "World-class website and social media presence designed to attract clients and showcase your expertise.",
      sections: [
        {
          heading: "Website Includes:",
          items: [
            "Custom professional design reflecting your brand",
            "Responsive, mobile-optimized architecture",
            "SEO/AEO optimization for search visibility",
            "Portfolio and case study sections",
            "Blog and content management system",
            "Contact forms and lead capture",
            "Lead Funnels and CRM Integration",
            "Analytics and tracking integration",
            "Security and performance optimization"
          ]
        },
        {
          heading: "Social Media Management:",
          items: [
            "Professional profiles on key platforms",
            "Content calendar and posting Strategy",
            "Brand voice development",
            "Visual assets and graphics",
            "Community engagement guidelines",
            "Analytics and growth tracking"
          ]
        }
      ],
      benefit: "Look and professional from the moment you launch."
    },
    {
      num: "03",
      title: "Dedicated Branding and Marketing Manager",
      subtitle: "Strategic Marketing Expertise at Your Service",
      desc: "A professional marketing manager focused on growing your brand and acquiring clients.",
      services: [
        "Brand strategy and positioning",
        "Marketing campaign planning and execution",
        "Content marketing and thought leadership",
        "Email marketing and nurture campaigns",
        "Paid advertising management",
        "Lead Generation Systems and Growth Roadmap",
        "Partnership and collaboration development",
        "Event marketing and webinar coordination",
        "Marketing analytics and ROI tracking"
      ],
      benefit: "Professional marketing execution without the cost of a full-time hire."
    },
    {
      num: "04",
      title: "Full Access to Elite AI Development Team",
      subtitle: "World-Class Technical Talent on Demand",
      desc: "Our experienced developer becomes your development team, ready to build any solution.",
      sections: [
        {
          heading: "Gain access to:",
          items: [
            "AI Engineers", "Software Developers", "Full Stack Developers", "Machine Learning Engineers", 
            "Data Scientists", "UI/UX Designers", "DevOps Engineers", "Cloud Engineers", 
            "QA Specialists", "Product Designers"
          ]
        },
        {
          heading: "Development Capabilities:",
          items: [
            "Custom AI model development",
            "Software application development",
            "Mobile app development",
            "Web platform development",
            "Database architecture and management",
            "API development and integration",
            "Quality assurance and testing",
            "DevOps and deployment"
          ]
        }
      ],
      benefit: "Deliver enterprise-grade solutions without hiring, training, or managing a technical team."
    },
    {
      num: "05",
      title: "Technical Team Lead and Project Manager",
      subtitle: "Expert Project Management & Quality Assurance",
      desc: "An experienced technical lead manages all projects, ensuring quality, timelines, and client satisfaction.",
      services: [
        "Project scoping and estimation",
        "Technical architecture decisions",
        "Developer task assignment and management",
        "Code review and quality assurance",
        "Client technical communication",
        "Timeline and budget management",
        "Risk identification and mitigation",
        "Technology trend monitoring",
        "Technical Consultation and Delivery Management"
      ],
      benefit: "Every project delivered on time, on budget, and to specification."
    },
    {
      num: "06",
      title: "Dedicated Chief Technology Officer (CTO)",
      subtitle: "Strategic Technology Leadership",
      desc: "Access to CTO-level expertise for technology strategy, innovation, and complex decision-making.",
      services: [
        "Technology strategy and roadmap",
        "Build vs. buy decisions",
        "Technology stack selection",
        "Innovation and R&D guidance",
        "Technical due diligence for partnerships",
        "Security and compliance oversight",
        "Scaling and infrastructure planning",
        "Emerging technology evaluation"
      ],
      benefit: "Make informed technology decisions backed by PhD-level expertise."
    },
    {
      num: "07",
      title: "Dedicated Client Success Manager",
      subtitle: "Exceptional Client Experience",
      desc: "A professional client success manager ensures every customer receives outstanding service and support.",
      services: [
        "Client onboarding and training",
        "Ongoing relationship management",
        "Success metrics tracking",
        "Issue resolution and escalation",
        "Upsell and expansion opportunities",
        "Client feedback collection",
        "Renewal and retention management",
        "Advocacy and reference development",
        "Retention Strategies"
      ],
      benefit: "Happy clients who become long-term partners and refer new business."
    },
    {
      num: "08",
      title: "World-Class International Client Acquisition",
      subtitle: "Master the Art of Global Business Development",
      desc: "Comprehensive training on acquiring and serving international clients in the AI and IT space.",
      sections: [
        {
          heading: "Training Modules:",
          items: [
            "Understanding global AI market dynamics",
            "Identifying and researching interactional prospects",
            "B2B Lead Generation (Global Positioning, Sales Funnels, Sales Closing)",
            "Effective Outreach and proposal strategies",
            "Closing High Ticket Deals and Enterprise Client Acquisition",
            "Cross-cultural communication and negotiation",
            "Pricing strategies for different markets",
            "Contract negotiation and terms",
            "Remote project management",
            "Building international reputation and credibility",
            "Business Growth Systems (SOP Development, Automation, KPI Tracking, Revenue Planning)"
          ]
        },
        {
          heading: "Practical Components:",
          items: [
            "Real-world case studies",
            "Live client acquisition campaigns",
            "Proposal development workshops",
            "Pitch practice and refinement",
            "Networking strategies",
            "Platform utilization"
          ]
        }
      ],
      benefit: "Confidence and skills to compete in the global AI marketplace."
    },
    {
      num: "09",
      title: "Fundraising Support",
      subtitle: "Access Capital to Accelerate Growth",
      desc: "Expert guidance and support for fundraising through government schemes and private investment.",
      services: [
        "R&D grants and subsidies",
        "Investor pitch deck development",
        "Financial modelling and projections",
        "Investor identification and outreach",
        "Due diligence preparation",
        "Term sheet negotiation support",
        "Cap table management",
        "Investor relations guidance",
        "Tax incentives and benefits",
        "Our Business Brains Private Community Investors introductions where appropriate"
      ],
      benefit: "Fuel growth with capital while maintaining favourable terms and equity."
    },
    {
      num: "10",
      title: "Global Expansion & International Setup",
      subtitle: "Take Your Business Worldwide",
      desc: "Support for expanding into international markets, including company setup abroad and visa facilitation.",
      services: [
        "Market research and entry strategy",
        "International entity formation",
        "Foreign bank account setup",
        "Local compliance and tax guidance",
        "Visa support and immigration assistance",
        "International hiring and payroll",
        "Global Networking & Partnerships",
        "Cultural adaptation consulting",
        "Business visit visa application assistance",
        "Entrepreneur visa programs assistance (USA- O1, EB1, L1 / Australia - National Innovation Visa (subclass 858) / UK- Global Talent Visa (GTV) / Canada- Start-up Visa (SUV) / Singapore ONE Pass / UAE- Golden Visa (Entrepreneur category) / European Union Regions etc.)"
      ],
      benefit: "Seamlessly expand globally with expert guidance through every complexity."
    }
  ];

  const row1 = components.slice(0, 5);
  const row2 = components.slice(5, 10);

  const renderHorizontalCard = (comp, idx, activeIdx, setActiveFn) => {
    const isActive = activeIdx === idx;
    const isRow1 = parseInt(comp.num, 10) <= 5;
    
    return (
      <div
        key={idx}
        onMouseEnter={() => setActiveFn(idx)}
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden rounded-2xl ${
          isActive 
            ? isRow1
              ? 'flex-1 min-w-[500px] bg-[#00A86B] text-white border-2 border-[#00A86B] shadow-2xl p-6'
              : 'flex-1 min-w-[500px] bg-[#1746D2] text-white border-2 border-[#1746D2] shadow-2xl p-6'
            : 'w-20 shrink-0 bg-white border border-slate-200/90 shadow-xs hover:border-[#1746D2]/60 hover:bg-blue-50/30 p-5'
        }`}
      >
        {/* Active Expanded Content (Smooth Fade & Slide In) */}
        <div className={`transition-all duration-500 ease-out h-full flex flex-col justify-between ${
          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none absolute inset-0 p-6'
        }`}>
          <div className="flex flex-col h-full justify-between space-y-3 overflow-y-auto pr-1">
            <div>
              <div className="flex items-center justify-between gap-3 mb-2 border-b border-white/20 pb-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-xl text-xs font-mono font-extrabold bg-slate-900 text-white shadow-xs">
                    {comp.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-white leading-snug">
                      {comp.title}
                    </h3>
                    <p className="text-[11px] font-extrabold text-[#FFD700] uppercase tracking-wider">
                      {comp.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/95 text-xs font-medium leading-relaxed mb-3">
                {comp.desc}
              </p>

              {comp.services ? (
                <div className="space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD700] block">
                    Deliverables:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {comp.services.map((service, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs font-semibold text-white bg-white/15 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                        <span className="text-white font-extrabold shrink-0">✓</span>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {comp.sections.map((sect, i) => (
                    <div key={i} className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD700] block">
                        {sect.heading}
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {sect.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-1.5 text-xs font-semibold text-white bg-white/15 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                            <span className="text-white font-extrabold shrink-0">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white mt-2">
              <div className="inline-block px-2 py-0.5 rounded bg-slate-900 text-[#00A86B] text-[9px] font-extrabold uppercase tracking-widest mb-0.5">
                Your Benefit
              </div>
              <p className="text-white font-bold text-xs leading-relaxed">
                {comp.benefit}
              </p>
            </div>
          </div>
        </div>

        {/* Collapsed Vertical Tab (Smooth Fade) */}
        <div className={`transition-all duration-300 ease-out h-full flex flex-col items-center justify-between ${
          !isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none absolute inset-0 p-5'
        }`}>
          <span className={`px-2 py-1 rounded-lg text-xs font-mono font-extrabold ${
            isRow1 ? 'bg-[#00A86B]/10 text-[#00A86B]' : 'bg-[#1746D2]/10 text-[#1746D2]'
          }`}>
            {comp.num}
          </span>
          
          <div className="h-full flex items-center justify-center my-3">
            <span className="font-display font-extrabold text-slate-700 text-xs tracking-wider uppercase whitespace-nowrap rotate-180 [writing-mode:vertical-lr]">
              {comp.title}
            </span>
          </div>

          <span className={`w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs ${
            isRow1 ? 'text-[#00A86B]' : 'text-[#1746D2]'
          }`}>
            +
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-[#FAF9FF] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              COMPLETE ECOSYSTEM COMPONENTS
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Everything You Need to Scale Your AI Company
          </h2>
          
          <p className="font-body text-base md:text-lg leading-relaxed text-slate-600 font-medium">
            10 integrated operating pillars arranged across 2 rows. Hover over any vertical tab to expand its deliverables.
          </p>
        </div>

        {/* Desktop View: 2 Rows of Horizontal Accordions */}
        <div className="hidden lg:block space-y-6">
          {/* Row 1: Components 01 - 05 */}
          <div>
            <div className="flex flex-row h-[480px] gap-3 w-full max-w-[1400px] mx-auto p-3 bg-slate-100/70 rounded-3xl border border-slate-200/80 shadow-inner overflow-hidden">
              {row1.map((comp, idx) => renderHorizontalCard(comp, idx, row1Active, setRow1Active))}
            </div>
          </div>

          {/* Row 2: Components 06 - 10 */}
          <div>
            <div className="flex flex-row h-[480px] gap-3 w-full max-w-[1400px] mx-auto p-3 bg-slate-100/70 rounded-3xl border border-slate-200/80 shadow-inner overflow-hidden">
              {row2.map((comp, idx) => renderHorizontalCard(comp, idx, row2Active, setRow2Active))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="block lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((comp, idx) => {
            const isActive = row1Active === idx;
            const isRow1 = parseInt(comp.num, 10) <= 5;
            return (
              <div
                key={idx}
                onMouseEnter={() => setRow1Active(idx)}
                className={`rounded-3xl transition-all duration-300 border overflow-hidden ${
                  isActive 
                    ? isRow1 
                      ? 'bg-[#00A86B] text-white border-2 border-[#00A86B] shadow-xl' 
                      : 'bg-[#1746D2] text-white border-2 border-[#1746D2] shadow-xl' 
                    : 'bg-white border-slate-200/90 shadow-xs'
                }`}
              >
                <button
                  onClick={() => setRow1Active(isActive ? null : idx)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="px-2.5 py-1 rounded-xl text-xs font-mono font-extrabold bg-slate-900 text-white shrink-0">
                      {comp.num}
                    </span>
                    <div>
                      <h3 className={`font-display text-base font-extrabold leading-snug ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {comp.title}
                      </h3>
                      <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${isActive ? 'text-[#FFD700]' : 'text-[#00A86B]'}`}>
                        {comp.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold shrink-0 ${isActive ? 'text-white' : 'text-[#1746D2]'}`}>
                    {isActive ? '−' : '+'}
                  </span>
                </button>

                {isActive && (
                  <div className={`px-6 pb-6 pt-2 border-t border-white/20 space-y-4 ${
                    isRow1 ? 'bg-[#00A86B]' : 'bg-[#1746D2]'
                  }`}>
                    <p className="text-white/95 text-xs font-medium leading-relaxed">
                      {comp.desc}
                    </p>

                    {comp.services ? (
                      <div className="space-y-1.5">
                        {comp.services.map((service, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-semibold text-white bg-white/15 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                            <span className="text-white font-bold">✓</span>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {comp.sections.map((sect, i) => (
                          <div key={i} className="space-y-1">
                            <span className="text-[10px] font-extrabold uppercase text-[#FFD700]">
                              {sect.heading}
                            </span>
                            {sect.items.map((item, j) => (
                              <div key={j} className="flex items-start gap-2 text-xs font-semibold text-white bg-white/15 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                                <span className="text-white font-bold">✓</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                      <span className="text-[9px] font-extrabold uppercase text-[#FFD700] block">Your Benefit</span>
                      <p className="text-white font-bold text-xs mt-0.5">{comp.benefit}</p>
                    </div>
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

export function WhoIsThisFor() {
  const profiles = [
    { title: "Global Founders", desc: "Founders anywhere in the world who want to build an AI or Tech company designed for international clients, not just their home market." },
    { title: "Technical Professionals", desc: "Technical professionals who can build product but lack the legal, brand, sales, and fundraising infrastructure to scale it globally." },
    { title: "Domain Experts", desc: "Domain experts in other industries bringing an AI or Tech venture to life in a new region." },
    { title: "Existing Company Founders", desc: "Founders already running a company who want a credible, funded path to a second country." },
    { title: "Corporate Executives", desc: "High-level professionals looking to monetize their industry insights by launching an independent tech enterprise with institutional backing." },
    { title: "Existing Agency Owners", desc: "IT and software boutique owners looking to pivot into AI products, scale internationally, and attract venture funding." },
    { title: "Aspiring Tech & AI Entrepreneurs", desc: "Visionaries who have the domain expertise but lack the massive technical development and legal infrastructure to execute at scale." },
    { title: "Students & Recent Graduates", desc: "Why apply for jobs when you can create them? Launch a real AI or IT company with senior guidance at every step — no experience barrier." },
    { title: "Corporate Professionals", desc: "You've built careers for others. Visionary Founders lets you build your own — with the safety net of a full support system while you transition." },
    { title: "Non-Technical Business Owners", desc: "You see the AI opportunity but don't code. You don't need to. Our developers, CTO, and technical leads become your technology department." },
    { title: "Global Expansion Seekers", desc: "You already run a business and want international markets. We handle overseas company setup, market entry, and relocation pathways." }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
          <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
            WHO THIS IS FOR
          </span>
          <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 font-display">
          Built for Visionaries at Every Stage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
          {profiles.map((profile, i) => {
            const isBlue = i % 2 === 0;
            return (
              <div 
                key={i} 
                {...touchHoverProps}
                className={`group p-6 rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isBlue
                    ? 'hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]'
                    : 'hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.35)]'
                }`}
              >
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-white transition-colors mb-3">
                    {profile.title}
                  </h4>
                  <p className="text-slate-600 font-medium text-xs md:text-sm leading-relaxed group-hover:text-white/95 transition-colors">
                    {profile.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhatYouWillAchieve() {
  const achievements = [
    "Internationally credible registered company",
    "Premium website and brand presence",
    "Real product or service built to enterprise standard",
    "CTO-led technical delivery and team integration",
    "Repeatable, cross-border client acquisition system",
    "Active capital pathways and fundraising readiness",
    "International expansion roadmap and entity setup"
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d162a]/40 to-slate-900 z-0"></div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
              What You Will Achieve
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 font-display">
              By the end of the Visionary Founders Program:
            </h2>
            <div className="flex flex-col gap-4">
              {achievements.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#1746D2] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#1746D2]/80 text-sm mt-8 italic font-medium pl-2 leading-relaxed">
              This isn't a certificate program. It's an operating company, built with you, engineered to compete globally from the first day it exists.
            </p>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl h-[400px] lg:h-[500px]">
            <img 
              src="https://tech6senseai.com/wp-content/uploads/2026/02/25-1024x683.jpg" 
              alt="Achievements" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
