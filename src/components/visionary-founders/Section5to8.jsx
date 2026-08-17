import React, { useState } from 'react';

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
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <span className="font-mono text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-4 block text-center">
          THE SOLUTION
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display max-w-5xl mx-auto text-center leading-tight">
          Visionary Founders By TECH6SENSE AI
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-[#1746D2] mb-8 font-display text-center">
          One Global Ecosystem. Every Pillar of Your Company Handled.
        </h3>
        
        <p className="text-slate-650 max-w-4xl mx-auto text-base md:text-lg leading-relaxed mb-12 text-center font-medium">
          Visionary Founders isn't a course. It isn't a mentorship group. It isn't an incubator that gives you advice and wishes you luck. It's a complete operating ecosystem — the legal foundation, technology team, brand engine, sales machine, and expansion pathway of a mature company, made available to you from the moment you join. You focus on vision, strategy, and clients. We power everything behind you — engineered from day one for founders who intend to operate internationally, not just locally.
        </p>

        <div className="w-full mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white mt-12">
          <div className="p-6 bg-slate-900 text-white font-display font-bold text-lg text-center">
            When you join, you don't get a course. You get a working business infrastructure:
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 font-mono text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200">
                <th className="p-4 md:p-6">Function</th>
                <th className="p-4 md:p-6">What You Get</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {functionList.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 md:p-6 font-bold text-slate-900 whitespace-nowrap md:whitespace-normal">{item.fn}</td>
                  <td className="p-4 md:p-6 leading-relaxed">{item.get}</td>
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
  const scrollRef = React.useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0d162a]/40 via-slate-900 to-slate-900 z-0"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-4 block">
            Complete Ecosystem Components
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-display">
            Everything you need to launch, grow, and scale your AI Company— all in one integrated ecosystem
          </h2>
        </div>
        <div className="flex gap-4 pb-2">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full pl-6 md:pl-[calc(50vw-42.5rem)] pr-6">
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-12 pt-4"
        >
          {components.map((comp, idx) => (
            <div 
              key={idx}
              className="min-w-[320px] w-[85vw] md:min-w-[450px] md:w-[450px] shrink-0 snap-center md:snap-start bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-slate-700/50 hover:border-[#1746D2]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1746D2]/10 rounded-bl-full blur-xl group-hover:bg-[#1746D2]/20 transition-colors"></div>
              
              <span className="font-mono text-5xl font-extrabold text-slate-700/50 mb-6 block group-hover:text-[#1746D2]/30 transition-colors">
                {comp.num}
              </span>
              
              <h3 className="text-2xl font-extrabold text-white mb-2 font-display leading-tight min-h-[64px]">
                {comp.title}
              </h3>
              
              <h4 className="text-[#00A86B] font-bold mb-4 text-sm uppercase tracking-wide">
                {comp.subtitle}
              </h4>
              
              <p className="text-slate-300 mb-6 min-h-[72px]">
                {comp.desc}
              </p>
              
              <div className="flex-1 mb-8 overflow-y-auto max-h-[220px] pr-2 custom-scrollbar">
                {comp.services ? (
                  <ul className="space-y-2.5">
                    {comp.services.map((service, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs font-medium">
                        <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-4">
                    {comp.sections.map((sect, i) => (
                      <div key={i}>
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-[#00A86B] mb-2">{sect.heading}</h5>
                        <ul className="space-y-2">
                          {sect.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-slate-300 text-xs font-medium">
                              <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mt-auto">
                <h6 className="font-bold text-[#00A86B] text-[0.7rem] mb-1.5 uppercase tracking-widest">Your Benefit</h6>
                <p className="text-slate-200 font-medium text-xs md:text-sm leading-relaxed">{comp.benefit}</p>
              </div>
            </div>
          ))}
          
          <div className="min-w-[40px] shrink-0"></div>
        </div>
      </div>
    </section>
  );
}

export function WhoIsThisFor() {
  const [showAll, setShowAll] = useState(false);

  const profiles = [
    { title: "Global Founders", desc: "Founders anywhere in the world who want to build an AI or Tech company designed for international clients, not just their home market" },
    { title: "Technical Professionals", desc: "Technical professionals who can build product but lack the legal, brand, sales, and fundraising infrastructure to scale it globally" },
    { title: "Domain Experts", desc: "Domain experts in other industries bringing an AI or Tech venture to life in a new region" },
    { title: "Existing Company Founders", desc: "Founders already running a company who want a credible, funded path to a second country" },
    { title: "Corporate Executives", desc: "Corporate Executives Outgrowing the Boardroom: High-level professionals looking to monetize their industry insights by launching an independent tech enterprise with institutional backing." },
    { title: "Agency Owners", desc: "Existing Agency Owners: IT and software boutique owners looking to pivot into AI products, scale internationally, and attract venture funding." },
    { title: "Aspiring AI & Tech Entrepreneurs", desc: "Aspiring Tech & AI Entrepreneurs: Visionaries who have the domain expertise but lack the massive technical development and legal infrastructure to execute at scale." },
    { title: "Students & Recent Graduates", desc: "The Student or Recent Graduate : Why apply for jobs when you can create them? Launch a real AI or IT company with senior guidance at every step — no experience barrier." },
    { title: "Corporate Professionals", desc: "The Corporate Professional : You've built careers for others. Visionary Founders lets you build your own — with the safety net of a full support system while you transition." },
    { title: "Non-Technical Business Owners", desc: "The Non-Tech Business Owner : You see the AI opportunity but don't code. You don't need to. Our developers, CTO, and technical leads become your technology department." },
    { title: "Global Expansion Seekers", desc: "The Global Expansion Seeker : You already run a business and want international markets. We handle overseas company setup, market entry, and relocation pathways." }
  ];

  const visibleProfiles = showAll ? profiles : profiles.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <span className="font-mono text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-4 block">
          WHO THIS IS FOR
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 font-display">
          Built for Visionaries at Every Stage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
          {visibleProfiles.map((profile, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
              <h4 className="font-display text-lg font-bold text-slate-900 mb-3">{profile.title}</h4>
              <p className="text-slate-650 font-medium text-xs md:text-sm leading-relaxed">{profile.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-3.5 text-xs font-bold tracking-widest text-white shadow-md transition-all uppercase"
          >
            {showAll ? "View Less" : "View All Ideal Profiles"}
          </button>
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
            <span className="font-mono text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-4 block">
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
