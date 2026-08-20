import React, { useState } from 'react';

export function HowItWorks() {
  const steps = [
    {
      num: "Step 1",
      title: "Application & Global Readiness Review",
      desc: "We evaluate your idea, target markets, and readiness for international positioning."
    },
    {
      num: "Step 2",
      title: "Legal Foundation and Premium Brand & Digital Build",
      desc: "Company registration and documentation, structured with cross-border operation in mind. Your branding manager and web team build a presence designed to compete against global players, not just local ones."
    },
    {
      num: "Step 3",
      title: "Technology Build",
      desc: "Your CTO, technical lead, project manager, and developers begin building your product to enterprise standard."
    },
    {
      num: "Step 4",
      title: "International Client Acquisition Training",
      desc: "You're trained to sell across markets and buying cultures, supported by your Client Success Manager."
    },
    {
      num: "Step 5",
      title: "Fundraising Activation",
      desc: "Introduction to government scheme funding and preparation for private investor conversations."
    },
    {
      num: "Step 6",
      title: "Global Expansion (Optional Track)",
      desc: "For founders ready to scale abroad — entity setup, visa support, and relocation guidance in your target country."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
            THE SIX-PHASE FOUNDER JOURNEY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display">
            From Application to Global Company — Here's Exactly How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1746D2]/10 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-125"></div>
              <div className="relative z-10">
                <span className="font-display text-sm font-extrabold text-[#1746D2] block mb-4 uppercase tracking-widest">
                  {step.num}
                </span>
                <h4 className="font-display text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingTiers() {
  // Leaving this component defined but minimal, as the comparison table is now handled in NewSections.jsx
  return null;
}

export function WhatMakesUsDifferent() {
  // Leaving this component defined but minimal, as it's fully covered in other sections or NewSections.jsx
  return null;
}

export function SuccessStories() {
  const scrollRef = React.useRef(null);
  const [selectedStory, setSelectedStory] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  const stories = [
    {
      id: 1,
      title: "The Autonomous Clinical Workflow Disruption (Predictive Healthcare SaaS)",
      founder: "Dr. Evelyn Reed",
      location: "Boston, Massachusetts",
      bottleneck: "Dr. Reed designed an advanced AI processing system to predict emergency room overflow timelines. She lacked the engineering bandwidth to build a secure product, a structure for healthcare institutional compliance, and capital connections.",
      execution: "Deployed a Dedicated Full-Time CTO to stabilize product architecture for enterprise scaling. Our team handled secure cloud deployments and prepared her for institutional capital acquisition networks.",
      result: "Raised $3.1M in private seed capital and integrated the software into 4 major metropolitan hospital systems within 10 months."
    },
    {
      id: 2,
      title: "The Next-Gen Cybersecurity Threat Matrix (Autonomous Threat Hunting Systems)",
      founder: "Marcus Vance",
      location: "Washington D.C.",
      bottleneck: "Marcus had a proprietary algorithm to detect advanced persistent cyber threats but lacked a localized corporate footprint and the premium brand prestige required to sell to national enterprise targets.",
      execution: "Overhauled his digital presence with a premium, high-converting digital footprint. Assigned a Dedicated Marketing Manager to execute account-based enterprise marketing strategies.",
      result: "Negotiated a high-value security integration contract with a tier-1 US defense contractor, achieving profitability within the first year."
    },
    {
      id: 3,
      title: "The Generative Entertainment FX Engine (Real-Time Media Rendering Platform)",
      founder: "Chloe Sterling",
      location: "Los Angeles, California",
      bottleneck: "A veteran visual effects producer who wanted to launch a generative AI software tool for indie production studios, but was trapped managing unreliable freelancers who consistently missed sprint deadlines.",
      execution: "Replaced her variable team with a Core Dev Cohort, Technical Team Lead, and a Project Manager to deliver the platform MVP under strict deadlines.",
      result: "Successfully deployed the tool across 24 regional post-production houses, automating routine rendering loops and cutting customer overhead by 40%."
    },
    {
      id: 4,
      title: "The Institutional Anti-Money Laundering Framework (FinTech Compliance)",
      founder: "Alistair Thorne",
      location: "London, United Kingdom",
      bottleneck: "Alistair wanted to launch a predictive transaction-monitoring compliance layer for mid-tier European banking networks but struggled to secure deep-tech back-end development talent within the UK's expensive talent pool.",
      execution: "Deployed our agile engineering infrastructure to construct his core application layer, paired with strategic regional acquisition training to navigate institutional banking procurement.",
      result: "Onboarded three regional UK financial entities within 8 months, generating $510,000 in domestic annual recurring revenue.",
      takeaway: "By bypassing the standard 6-month developer recruitment cycle, the founder captured early market share before competitors could clone the methodology."
    },
    {
      id: 5,
      title: "The Enterprise Corporate M&A Intelligence System (LegalTech Enterprise SaaS)",
      founder: "Helena Ross",
      location: "Manchester, United Kingdom",
      bottleneck: "Helena wanted to monetize an automated corporate due diligence system for legal groups but was balancing product management with corporate client success management.",
      execution: "Assigned a Dedicated Client Success Manager to oversee customer onboarding logistics while our core engineering squad automated her deployment scripts.",
      result: "Scaled operations across 35 commercial law offices throughout the UK, achieving absolute regional market saturation."
    },
    {
      id: 6,
      title: "The Computer Vision Industrial Mining Shield (Heavy Industry Safety Systems)",
      founder: "Callum Murray",
      location: "Perth, Australia",
      bottleneck: "Callum designed an AI safety framework that monitors heavy vehicle operations in open-pit mines to prevent collisions. To expand globally, he required international corporate setup and protection for his software assets.",
      execution: "Formed a cross-border corporate entity structure with multi-jurisdictional Master Service Agreements and global IP shielding mechanisms.",
      result: "Closed commercial software integrations with two multinational mining conglomerates operating across Oceania and South America."
    },
    {
      id: 7,
      title: "The Climate-Adaptive Smart Agricultural Engine (AgriTech Platform)",
      founder: "Sarah Jenkins",
      location: "Adelaide, Australia",
      bottleneck: "Sarah had a brilliant concept for predictive crop watering optimization systems but possessed no background in software engineering and feared burning through her personal savings on low-quality software agencies.",
      execution: "Provided turnkey product delivery via our technical team lead and core developers, launching a functional product ecosystem within 90 days.",
      result: "Dominated the regional agricultural market, scaling deployments across 70+ commercial wine and grain farms in South Australia."
    },
    {
      id: 8,
      title: "The Commercial Real Estate Footprint Matrix (PropTech Spatial Analytics)",
      founder: "Oliver Sterling",
      location: "Sydney, Australia",
      bottleneck: "Oliver needed an automated spatial AI platform to track retail foot traffic analytics inside commercial assets but lacked a dedicated brand position and localized enterprise sales training.",
      execution: "Structured a modern corporate digital footprint and deployed a part-time marketing management framework targeted directly at commercial asset portfolios.",
      result: "Successfully integrated the spatial analytics platform into 18 major regional shopping centers across New South Wales."
    },
    {
      id: 9,
      title: "The Supply Chain Carbon Intelligence Framework (CleanTech Infrastructure)",
      founder: "Hanne Richter",
      location: "Vancouver, Canada",
      bottleneck: "Hanne designed an AI tool to track complex corporate carbon emissions but was locked out of the strict European enterprise landscape due to shifting cross-border regulatory demands.",
      execution: "Set up an international corporate framework with compliant data architectures, supported by an International Acquisition Masterclass to penetrate European industrial sectors.",
      result: "Secured corporate integration contracts with three major German logistics firms within 11 months of expansion."
    },
    {
      id: 10,
      title: "The Advanced Predictive Manufacturing Matrix (Industrial Automated Systems)",
      founder: "Robert Novak",
      location: "Toronto, Canada",
      bottleneck: "Robert possessed deep industrial expertise but lacked a seasoned technical executive to validate his software development roadmap and direct his engineering choices.",
      execution: "Embedded a Strategic Fractional CTO to clean up system architecture and supervise our core software engineering cohort.",
      result: "Transformed a manual manufacturing advisory consulting business into a high-margin predictive software asset, capturing 5 major localized automotive supply clients."
    },
    {
      id: 11,
      title: "The Sovereign Wealth Algorithmic Brokerage (WealthTech Analytics)",
      founder: "Tariq Al-Mansoor",
      location: "Dubai, UAE",
      bottleneck: "Tariq designed a predictive AI mechanism for private equity asset allocation but needed an immediate regulatory corporate entry point into Western European capital markets.",
      execution: "Established his cross-border corporate architecture in London, integrated robust data security controls, and prepared his international investor pitch layout.",
      result: "Secured institutional placement contracts with 4 prominent asset groups, scaling platform processed data to $120M."
    },
    {
      id: 12,
      title: "The Smart City Thermal Optimization Engine (Infrastructure Smart Tech)",
      founder: "Fatima Al-Sayed",
      location: "Abu Dhabi, UAE",
      bottleneck: "Fatima wanted to deploy automated real-time cooling network optimizations for corporate high-rises but lacked an engineering team experienced in handling heavy IoT hardware data feeds.",
      execution: "Deployed a specialized full-stack engineering bench from the TECH6SENSE AI talent pool to manage real-time enterprise sensor data integrations.",
      result: "Rolled out the software layout across 12 premium commercial skyscrapers in the GCC region, cutting energy consumption footprints by 28%."
    },
    {
      id: 13,
      title: "The Autonomous Vehicle Deep Learning Matrix (Level 4 Automotive Vision)",
      founder: "Dr. Jean-Louis Dupont",
      location: "Paris, France",
      bottleneck: "Dr. Dupont developed a sophisticated neural network layer for autonomous machine operations but required entry pipelines into the major global automotive manufacturing consortiums of East Asia.",
      execution: "Formed a cross-border legal framework with international IP protections, backed by a Dedicated Full-Time CTO with experience in complex enterprise software delivery.",
      result: "Negotiated a high-profile co-development joint venture with a major automotive enterprise group within a year of global deployment."
    },
    {
      id: 14,
      title: "The Generative Enzyme BioTech Engine (Molecular Discovery Software)",
      founder: "Anke de Jong",
      location: "Amsterdam, Netherlands",
      bottleneck: "Anke had a machine learning model capable of accelerating medical enzyme discovery timelines but was bogged down by local business registration logistics and specialized contract document generation.",
      execution: "Handled turnkey corporate setup, localized NDAs, and complete intellectual property assignment architectures to isolate her technology assets.",
      result: "Formed strategic research partnerships with two prominent European life-sciences institutions, securing steady early cash flow."
    },
    {
      id: 15,
      title: "The Cross-Border E-Commerce Predictive Matrix (Demand Optimization Technology)",
      founder: "Mateo Silva",
      location: "Barcelona, Spain",
      bottleneck: "Mateo built an AI engine that optimizes retail inventory levels across digital store lines but needed a swift path to establish operational authority within the hyper-competitive US consumer market.",
      execution: "Managed his complete international entity incorporation, corporate web infrastructure expansion, and trained the leadership squad on global outbound enterprise sales funnels.",
      result: "Onboarded 15 high-volume digital consumer brands in the United States, expanding company net valuation significantly."
    },
    {
      id: 16,
      title: "The Enterprise Back-Office Agentic Network (Corporate Workflows)",
      founder: "Neil Shah",
      location: "Mumbai, India",
      bottleneck: "Neil engineered a powerful multi-agent LLM framework to automate corporate back-office administrative pipelines, but was limited by domestic enterprise budgets and lacked a compliant corporate presence to target US markets.",
      execution: "Structured a dual-company framework with a Delaware parent entity, secured necessary international compliance frameworks, and launched data-driven digital growth campaigns.",
      result: "Signed two primary US corporate insurance clients within 8 months, capturing $650,000 in Annual Recurring Revenue."
    },
    {
      id: 17,
      title: "The Vernacular Adaptive Education Loop (Hyper-Personalized EdTech)",
      founder: "Ananya Rao",
      location: "Hyderabad, India",
      bottleneck: "Ananya aimed to deliver a localized, dynamic AI tutoring platform tailored to multiple regional languages but lacked the engineering framework to scale a high-velocity mobile app format across low-bandwidth environments.",
      execution: "Deployed an engineering squad from the TECH6SENSE AI developer bench to construct a low-friction mobile product layout, paired with localized branding execution.",
      result: "Scaled user acquisition to over 150,000 active monthly learners across three regional territories within the first 10 months."
    },
    {
      id: 18,
      title: "The Autonomous Maritime Logistics Shield (Port Optimization Technology)",
      founder: "Lin Wei Xiong",
      location: "Singapore",
      bottleneck: "Wei Xiong engineered a computer vision system to optimize shipping container terminal scheduling. To scale effectively, he required seamless corporate integration into the European maritime trade routes.",
      execution: "Managed the cross-border business entity setup in the Netherlands, protected the enterprise software via multi-jurisdictional legal frameworks, and secured innovation grant applications.",
      result: "Deployed a highly successful paid pilot sequence at a major Western European shipping hub, increasing throughput efficiency by 22%."
    },
    {
      id: 19,
      title: "The Cross-Chain Regulatory RegTech Matrix (Financial Compliance Systems)",
      founder: "Jonathan Tan",
      location: "Singapore",
      bottleneck: "Jonathan possessed deep compliance domain expertise but lacked internal technical resources to construct a scalable software asset ahead of shifting localized regulatory compliance mandates.",
      execution: "Deployed a technical team lead and an agile developer bench to quickly convert his manual compliance analytics methodologies into an automated software platform.",
      result: "Captured 12 prominent localized asset management firms as institutional multi-year contract clients within the first 6 months."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display">
            Visionary Founders – Success Stories
          </h2>
        </div>
        <div className="flex gap-4 pb-2">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full px-3 sm:px-6 md:pl-[calc(50vw-42.5rem)] md:pr-6">
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
          className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-12 pt-4"
        >
          {stories.map((story) => (
            <div 
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="min-w-[290px] w-[88vw] sm:w-[84vw] md:min-w-[420px] md:w-[420px] shrink-0 snap-center md:snap-start bg-white rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1746D2]/5 rounded-bl-full pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1746D2]/10 text-[#1746D2] font-mono text-[10px] font-bold uppercase tracking-wider">
                    Case #{story.id}
                  </span>
                  <div className="text-xs font-semibold text-slate-500">
                    {story.location}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-display mb-3 leading-snug group-hover:text-[#1746D2] transition-colors min-h-[56px] flex items-center">
                  {story.title}
                </h3>
                
                <div className="text-sm font-bold text-slate-800 mb-6">
                  Founder: <span className="text-[#1746D2] font-extrabold">{story.founder}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      The Bottleneck
                    </h4>
                    <p className="text-sm text-slate-655 leading-relaxed font-medium pl-3 line-clamp-4 text-justify">{story.bottleneck}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2]" />
                      Ecosystem Execution
                    </h4>
                    <p className="text-sm text-slate-655 leading-relaxed font-medium pl-3 line-clamp-4 text-justify">{story.execution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#1746D2] group-hover:text-[#1233A0] transition-colors mt-4 pl-3">
                  <span>Read Full Case Study</span>
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 mt-auto">
                <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-100/50">
                  <h4 className="font-bold text-emerald-800 text-[10px] uppercase tracking-wider mb-1">The Commercial Result</h4>
                  <p className="text-xs text-emerald-700 font-semibold leading-relaxed">{story.result}</p>
                </div>

                {story.takeaway && (
                  <div className="p-3.5 rounded-2xl bg-[#1746D2]/10/50 border border-[#1746D2]/20/50">
                    <h4 className="font-bold text-[#1233A0] text-[10px] uppercase tracking-wider mb-1">Key Takeaway</h4>
                    <p className="text-xs text-[#1233A0] font-medium leading-relaxed">{story.takeaway}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <div className="min-w-[40px] shrink-0"></div>
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center justify-between gap-4 mb-4 mt-2">
              <span className="px-3.5 py-1 rounded-full bg-[#1746D2]/20 text-[#1233A0] font-display text-sm font-extrabold uppercase tracking-wider">
                Case #{selectedStory.id}
              </span>
              <div className="text-xs font-bold text-slate-500">
                {selectedStory.location}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display mb-4 leading-tight">
              {selectedStory.title}
            </h3>

            <div className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-4 mb-6">
              Founder: <span className="text-[#1746D2] font-black text-base">{selectedStory.founder}</span>
            </div>

            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-850 text-sm uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-md shadow-rose-500/50" />
                  The Bottleneck
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium pl-4">{selectedStory.bottleneck}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-850 text-sm uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1746D2] shadow-md shadow-[#1746D2]/50" />
                  Ecosystem Execution
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium pl-4">{selectedStory.execution}</p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100/60 shadow-sm">
                <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-widest mb-1.5">The Commercial Result</h4>
                <p className="text-sm md:text-base text-emerald-800 font-bold leading-relaxed">{selectedStory.result}</p>
              </div>

              {selectedStory.takeaway && (
                <div className="p-5 rounded-2xl bg-[#1746D2]/10 border border-[#1746D2]/20/60 shadow-sm">
                  <h4 className="font-bold text-[#0d162a] text-xs uppercase tracking-widest mb-1.5">Key Takeaway</h4>
                  <p className="text-sm md:text-base text-[#1233A0] font-semibold leading-relaxed">{selectedStory.takeaway}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
