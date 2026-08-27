import React, { useState, useEffect, useCallback } from 'react';
import flagAus from '../../assets/flags/australia.webp';
import flagCan from '../../assets/flags/canada.webp';
import flagEu from '../../assets/flags/eu.webp';
import flagInd from '../../assets/flags/india.webp';
import flagSgp from '../../assets/flags/singapore.webp';
import flagUae from '../../assets/flags/uae.webp';
import flagUk from '../../assets/flags/uk.webp';
import flagUsa from '../../assets/flags/usa.webp';
import { touchHoverProps } from '../../hooks/useTouchHover';

export function HowItWorks() {
  const steps = [
    {
      num: "Step 1",
      title: "Application & Global Readiness Review",
      desc: "We evaluate your idea, target markets, and readiness for international positioning.",
      badgeBg: "bg-[#1746D2]",
      badgeText: "text-white",
      borderColor: "hover:border-[#1746D2]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(23,70,210,0.25)]",
      glowGradient: "from-[#1746D2]/40"
    },
    {
      num: "Step 2",
      title: "Legal Foundation and Premium Brand & Digital Build",
      desc: "Company registration and documentation, structured with cross-border operation in mind. Your branding manager and web team build a presence designed to compete against global players, not just local ones.",
      badgeBg: "bg-[#D4AF37]",
      badgeText: "text-slate-950 font-extrabold",
      borderColor: "hover:border-[#D4AF37]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]",
      glowGradient: "from-[#D4AF37]/45"
    },
    {
      num: "Step 3",
      title: "Technology Build",
      desc: "Your CTO, technical lead, project manager, and developers begin building your product to enterprise standard.",
      badgeBg: "bg-[#00A86B]",
      badgeText: "text-white",
      borderColor: "hover:border-[#00A86B]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(0,168,107,0.25)]",
      glowGradient: "from-[#00A86B]/40"
    },
    {
      num: "Step 4",
      title: "International Client Acquisition Training",
      desc: "You're trained to sell across markets and buying cultures, supported by your Client Success Manager.",
      badgeBg: "bg-[#1746D2]",
      badgeText: "text-white",
      borderColor: "hover:border-[#1746D2]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(23,70,210,0.25)]",
      glowGradient: "from-[#1746D2]/40"
    },
    {
      num: "Step 5",
      title: "Fundraising Activation",
      desc: "Introduction to government scheme funding and preparation for private investor conversations.",
      badgeBg: "bg-[#D4AF37]",
      badgeText: "text-slate-950 font-extrabold",
      borderColor: "hover:border-[#D4AF37]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]",
      glowGradient: "from-[#D4AF37]/45"
    },
    {
      num: "Step 6",
      title: "Global Expansion (Optional Track)",
      desc: "For founders ready to scale abroad — entity setup, visa support, and relocation guidance in your target country.",
      badgeBg: "bg-[#00A86B]",
      badgeText: "text-white",
      borderColor: "hover:border-[#00A86B]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(0,168,107,0.25)]",
      glowGradient: "from-[#00A86B]/40"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1746D2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00A86B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE SIX-PHASE FOUNDER JOURNEY
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            From Application to Global Company — Here's Exactly How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`bg-white p-4 sm:p-8 rounded-[2rem] border border-slate-200/90 shadow-sm ${step.shadowGlow} ${step.borderColor} hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between`}
              {...touchHoverProps}
            >
              {/* Top-Right Corner Color Glow on Hover */}
              <div className={`absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br ${step.glowGradient} to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`} />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-full opacity-60 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-xl text-xs font-mono font-bold tracking-wider uppercase ${step.badgeBg} ${step.badgeText} shadow-xs`}>
                    {step.num}
                  </span>
                </div>

                <h4 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-display text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-[#1746D2] transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 font-medium text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingTiers() {
  return null;
}

export function WhatMakesUsDifferent() {
  return null;
}

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stories = [
    {
      id: 1,
      title: "The Autonomous Clinical Workflow Disruption (Predictive Healthcare SaaS)",
      subtitle: "Predictive Healthcare SaaS",
      founder: "Dr. Evelyn Reed",
      location: "Boston, Massachusetts, USA",
      flag: flagUsa,
      accent: "#1746D2",
      tagline: "USA | Healthcare AI",
      bottleneck: "Dr. Reed designed an advanced AI processing system to predict emergency room overflow timelines. She lacked the engineering bandwidth to build a secure product, a structure for healthcare institutional compliance, and capital connections.",
      execution: "Deployed a Dedicated Full-Time CTO to stabilize product architecture for enterprise scaling. Our team handled secure cloud deployments and prepared her for institutional capital acquisition networks.",
      result: "Raised $3.1M in private seed capital and integrated the software into 4 major metropolitan hospital systems within 10 months."
    },
    {
      id: 2,
      title: "The Next-Gen Cybersecurity Threat Matrix (Autonomous Threat Hunting Systems)",
      subtitle: "Autonomous Threat Hunting Systems",
      founder: "Marcus Vance",
      location: "Washington D.C., USA",
      flag: flagUsa,
      accent: "#00A86B",
      tagline: "USA | Cybersecurity AI",
      bottleneck: "Marcus had a proprietary algorithm to detect advanced persistent cyber threats but lacked a localized corporate footprint and the premium brand prestige required to sell to national enterprise targets.",
      execution: "Overhauled his digital presence with a premium, high-converting digital footprint. Assigned a Dedicated Marketing Manager to execute account-based enterprise marketing strategies.",
      result: "Negotiated a high-value security integration contract with a tier-1 US defense contractor, achieving profitability within the first year."
    },
    {
      id: 3,
      title: "The Generative Entertainment FX Engine (Real-Time Media Rendering Platform)",
      subtitle: "Real-Time Media Rendering Platform",
      founder: "Chloe Sterling",
      location: "Los Angeles, California, USA",
      flag: flagUsa,
      accent: "#D4AF37",
      tagline: "USA | Media & Entertainment AI",
      bottleneck: "A veteran visual effects producer who wanted to launch a generative AI software tool for indie production studios, but was trapped managing unreliable freelancers who consistently missed sprint deadlines.",
      execution: "Replaced her variable team with a Core Dev Cohort, Technical Team Lead, and a Project Manager to deliver the platform MVP under strict deadlines.",
      result: "Successfully deployed the tool across 24 regional post-production houses, automating routine rendering loops and cutting customer overhead by 40%."
    },
    {
      id: 4,
      title: "The Institutional Anti-Money Laundering Framework (FinTech Compliance)",
      subtitle: "FinTech Compliance",
      founder: "Alistair Thorne",
      location: "London, United Kingdom",
      flag: flagUk,
      accent: "#1746D2",
      tagline: "UK | FinTech Compliance",
      bottleneck: "Alistair wanted to launch a predictive transaction-monitoring compliance layer for mid-tier European banking networks but struggled to secure deep-tech back-end development talent within the UK's expensive talent pool.",
      execution: "Deployed our agile engineering infrastructure to construct his core application layer, paired with strategic regional acquisition training to navigate institutional banking procurement.",
      result: "Onboarded three regional UK financial entities within 8 months, generating $510,000 in domestic annual recurring revenue.",
      takeaway: "By bypassing the standard 6-month developer recruitment cycle, the founder captured early market share before competitors could clone the methodology."
    },
    {
      id: 5,
      title: "The Enterprise Corporate M&A Intelligence System (LegalTech Enterprise SaaS)",
      subtitle: "LegalTech Enterprise SaaS",
      founder: "Helena Ross",
      location: "Manchester, United Kingdom",
      flag: flagUk,
      accent: "#00A86B",
      tagline: "UK | LegalTech SaaS",
      bottleneck: "Helena wanted to monetize an automated corporate due diligence system for legal groups but was balancing product management with corporate client success management.",
      execution: "Assigned a Dedicated Client Success Manager to oversee customer onboarding logistics while our core engineering squad automated her deployment scripts.",
      result: "Scaled operations across 35 commercial law offices throughout the UK, achieving absolute regional market saturation."
    },
    {
      id: 6,
      title: "The Computer Vision Industrial Mining Shield (Heavy Industry Safety Systems)",
      subtitle: "Heavy Industry Safety Systems",
      founder: "Callum Murray",
      location: "Perth, Australia",
      flag: flagAus,
      accent: "#D4AF37",
      tagline: "Australia | Heavy Industry Safety",
      bottleneck: "Callum designed an AI safety framework that monitors heavy vehicle operations in open-pit mines to prevent collisions. To expand globally, he required international corporate setup and protection for his software assets.",
      execution: "Formed a cross-border corporate entity structure with multi-jurisdictional Master Service Agreements and global IP shielding mechanisms.",
      result: "Closed commercial software integrations with two multinational mining conglomerates operating across Oceania and South America."
    },
    {
      id: 7,
      title: "The Climate-Adaptive Smart Agricultural Engine (AgriTech Platform)",
      subtitle: "AgriTech Platform",
      founder: "Sarah Jenkins",
      location: "Adelaide, Australia",
      flag: flagAus,
      accent: "#1746D2",
      tagline: "Australia | AgriTech Platform",
      bottleneck: "Sarah had a brilliant concept for predictive crop watering optimization systems but possessed no background in software engineering and feared burning through her personal savings on low-quality software agencies.",
      execution: "Provided turnkey product delivery via our technical team lead and core developers, launching a functional product ecosystem within 90 days.",
      result: "Dominated the regional agricultural market, scaling deployments across 70+ commercial wine and grain farms in South Australia."
    },
    {
      id: 8,
      title: "The Commercial Real Estate Footprint Matrix (PropTech Spatial Analytics)",
      subtitle: "PropTech Spatial Analytics",
      founder: "Oliver Sterling",
      location: "Sydney, Australia",
      flag: flagAus,
      accent: "#00A86B",
      tagline: "Australia | PropTech Analytics",
      bottleneck: "Oliver needed an automated spatial AI platform to track retail foot traffic analytics inside commercial assets but lacked a dedicated brand position and localized enterprise sales training.",
      execution: "Structured a modern corporate digital footprint and deployed a part-time marketing management framework targeted directly at commercial asset portfolios.",
      result: "Successfully integrated the spatial analytics platform into 18 major regional shopping centers across New South Wales."
    },
    {
      id: 9,
      title: "The Supply Chain Carbon Intelligence Framework (CleanTech Infrastructure)",
      subtitle: "CleanTech Infrastructure",
      founder: "Hanne Richter",
      location: "Vancouver, Canada",
      flag: flagCan,
      accent: "#D4AF37",
      tagline: "Canada | CleanTech Infrastructure",
      bottleneck: "Hanne designed an AI tool to track complex corporate carbon emissions but was locked out of the strict European enterprise landscape due to shifting cross-border regulatory demands.",
      execution: "Set up an international corporate framework with compliant data architectures, supported by an International Acquisition Masterclass to penetrate European industrial sectors.",
      result: "Secured corporate integration contracts with three major German logistics firms within 11 months of expansion."
    },
    {
      id: 10,
      title: "The Advanced Predictive Manufacturing Matrix (Industrial Automated Systems)",
      subtitle: "Industrial Automated Systems",
      founder: "Robert Novak",
      location: "Toronto, Canada",
      flag: flagCan,
      accent: "#1746D2",
      tagline: "Canada | Industrial Systems",
      bottleneck: "Robert possessed deep industrial expertise but lacked a seasoned technical executive to validate his software development roadmap and direct his engineering choices.",
      execution: "Embedded a Strategic Fractional CTO to clean up system architecture and supervise our core software engineering cohort.",
      result: "Transformed a manual manufacturing advisory consulting business into a high-margin predictive software asset, capturing 5 major localized automotive supply clients."
    },
    {
      id: 11,
      title: "The Sovereign Wealth Algorithmic Brokerage (WealthTech Analytics)",
      subtitle: "WealthTech Analytics",
      founder: "Tariq Al-Mansoor",
      location: "Dubai, UAE",
      flag: flagUae,
      accent: "#00A86B",
      tagline: "UAE | WealthTech Analytics",
      bottleneck: "Tariq designed a predictive AI mechanism for private equity asset allocation but needed an immediate regulatory corporate entry point into Western European capital markets.",
      execution: "Established his cross-border corporate architecture in London, integrated robust data security controls, and prepared his international investor pitch layout.",
      result: "Secured institutional placement contracts with 4 prominent asset groups, scaling platform processed data to $120M."
    },
    {
      id: 12,
      title: "The Smart City Thermal Optimization Engine (Infrastructure Smart Tech)",
      subtitle: "Infrastructure Smart Tech",
      founder: "Fatima Al-Sayed",
      location: "Abu Dhabi, UAE",
      flag: flagUae,
      accent: "#D4AF37",
      tagline: "UAE | Smart Infrastructure",
      bottleneck: "Fatima wanted to deploy automated real-time cooling network optimizations for corporate high-rises but lacked an engineering team experienced in handling heavy IoT hardware data feeds.",
      execution: "Deployed a specialized full-stack engineering bench from the TECH6SENSE AI talent pool to manage real-time enterprise sensor data integrations.",
      result: "Rolled out the software layout across 12 premium commercial skyscrapers in the GCC region, cutting energy consumption footprints by 28%."
    },
    {
      id: 13,
      title: "The Autonomous Vehicle Deep Learning Matrix (Level 4 Automotive Vision)",
      subtitle: "Level 4 Automotive Vision",
      founder: "Dr. Jean-Louis Dupont",
      location: "Paris, France",
      flag: flagEu,
      accent: "#1746D2",
      tagline: "France | Automotive Vision AI",
      bottleneck: "Dr. Dupont developed a sophisticated neural network layer for autonomous machine operations but required entry pipelines into the major global automotive manufacturing consortiums of East Asia.",
      execution: "Formed a cross-border legal framework with international IP protections, backed by a Dedicated Full-Time CTO with experience in complex enterprise software delivery.",
      result: "Negotiated a high-profile co-development joint venture with a major automotive enterprise group within a year of global deployment."
    },
    {
      id: 14,
      title: "The Generative Enzyme BioTech Engine (Molecular Discovery Software)",
      subtitle: "Molecular Discovery Software",
      founder: "Anke de Jong",
      location: "Amsterdam, Netherlands",
      flag: flagEu,
      accent: "#00A86B",
      tagline: "Netherlands | BioTech Discovery",
      bottleneck: "Anke had a machine learning model capable of accelerating medical enzyme discovery timelines but was bogged down by local business registration logistics and specialized contract document generation.",
      execution: "Handled turnkey corporate setup, localized NDAs, and complete intellectual property assignment architectures to isolate her technology assets.",
      result: "Formed strategic research partnerships with two prominent European life-sciences institutions, securing steady early cash flow."
    },
    {
      id: 15,
      title: "The Cross-Border E-Commerce Predictive Matrix (Demand Optimization Technology)",
      subtitle: "Demand Optimization Technology",
      founder: "Mateo Silva",
      location: "Barcelona, Spain",
      flag: flagEu,
      accent: "#D4AF37",
      tagline: "Spain | E-Commerce Optimization",
      bottleneck: "Mateo built an AI engine that optimizes retail inventory levels across digital store lines but needed a swift path to establish operational authority within the hyper-competitive US consumer market.",
      execution: "Managed his complete international entity incorporation, corporate web infrastructure expansion, and trained the leadership squad on global outbound enterprise sales funnels.",
      result: "Onboarded 15 high-volume digital consumer brands in the United States, expanding company net valuation significantly."
    },
    {
      id: 16,
      title: "The Enterprise Back-Office Agentic Network (Corporate Workflows)",
      subtitle: "Corporate Workflows",
      founder: "Neil Shah",
      location: "Mumbai, India",
      flag: flagInd,
      accent: "#1746D2",
      tagline: "India | Enterprise Agentic AI",
      bottleneck: "Neil engineered a powerful multi-agent LLM framework to automate corporate back-office administrative pipelines, but was limited by domestic enterprise budgets and lacked a compliant corporate presence to target US markets.",
      execution: "Structured a dual-company framework with a Delaware parent entity, secured necessary international compliance frameworks, and launched data-driven digital growth campaigns.",
      result: "Signed two primary US corporate insurance clients within 8 months, capturing $650,000 in Annual Recurring Revenue."
    },
    {
      id: 17,
      title: "The Vernacular Adaptive Education Loop (Hyper-Personalized EdTech)",
      subtitle: "Hyper-Personalized EdTech",
      founder: "Ananya Rao",
      location: "Hyderabad, India",
      flag: flagInd,
      accent: "#00A86B",
      tagline: "India | Adaptive EdTech",
      bottleneck: "Ananya aimed to deliver a localized, dynamic AI tutoring platform tailored to multiple regional languages but lacked the engineering framework to scale a high-velocity mobile app format across low-bandwidth environments.",
      execution: "Deployed an engineering squad from the TECH6SENSE AI developer bench to construct a low-friction mobile product layout, paired with localized branding execution.",
      result: "Scaled user acquisition to over 150,000 active monthly learners across three regional territories within the first 10 months."
    },
    {
      id: 18,
      title: "The Autonomous Maritime Logistics Shield (Port Optimization Technology)",
      subtitle: "Port Optimization Technology",
      founder: "Lin Wei Xiong",
      location: "Singapore",
      flag: flagSgp,
      accent: "#D4AF37",
      tagline: "Singapore | Maritime Logistics",
      bottleneck: "Wei Xiong engineered a computer vision system to optimize shipping container terminal scheduling. To scale effectively, he required seamless corporate integration into the European maritime trade routes.",
      execution: "Managed the cross-border business entity setup in the Netherlands, protected the enterprise software via multi-jurisdictional legal frameworks, and secured innovation grant applications.",
      result: "Deployed a highly successful paid pilot sequence at a major Western European shipping hub, increasing throughput efficiency by 22%."
    },
    {
      id: 19,
      title: "The Cross-Chain Regulatory RegTech Matrix (Financial Compliance Systems)",
      subtitle: "Financial Compliance Systems",
      founder: "Jonathan Tan",
      location: "Singapore",
      flag: flagSgp,
      accent: "#1746D2",
      tagline: "Singapore | RegTech Analytics",
      bottleneck: "Jonathan possessed deep compliance domain expertise but lacked internal technical resources to construct a scalable software asset ahead of shifting localized regulatory compliance mandates.",
      execution: "Deployed a technical team lead and an agile developer bench to quickly convert his manual compliance analytics methodologies into an automated software platform.",
      result: "Captured 12 prominent localized asset management firms as institutional multi-year contract clients within the first 6 months."
    }
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  }, [stories.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  }, [stories.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-100/50 via-emerald-100/30 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Section Eyebrow & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#1746D2]" />
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              Global Success Stories
            </span>
            <span className="h-[2px] w-10 bg-[#00A86B]" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Visionary Founders – <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B]">Success Stories</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Real founders who built, scaled, and launched global companies through the TECH6SENSE AI Ecosystem.
          </p>
        </div>

        {/* 3D COVERFLOW SLIDER */}
        <div 
          className="relative w-full max-w-6xl mx-auto min-h-[420px] md:min-h-[480px] flex items-center justify-center py-6 perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Container */}
          <div className="relative w-full max-w-[380px] md:max-w-[440px] h-[360px] md:h-[400px] mx-auto transform-style-3d">
            {stories.map((story, index) => {
              let offset = index - currentIndex;
              const total = stories.length;

              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisibleCard = Math.abs(offset) <= 3;

              if (!isVisibleCard) return null;

              let cardTransform, cardOpacity;
              if (isMobile) {
                const translateX = offset * 105;
                const scale = isActive ? 1 : 0.82;
                cardOpacity = isActive ? 1 : 0.35;
                cardTransform = `translateX(${translateX}px) scale(${scale})`;
              } else {
                const translateX = offset * 175; 
                const translateY = Math.abs(offset) * 20; 
                const translateZ = Math.abs(offset) * -80; 
                const rotateY = offset * -16; 
                const rotateZ = offset * 1.5; 
                const scale = isActive ? 1 : 0.9 - Math.abs(offset) * 0.07;
                cardOpacity = isActive ? 1 : Math.max(0.35, 0.75 - Math.abs(offset) * 0.13);
                cardTransform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
              }
              const zIndex = 30 - Math.abs(offset) * 5;

              return (
                <div
                  key={story.id}
                  onClick={() => {
                    if (isActive) {
                      setSelectedStory(story);
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                  className="absolute top-0 left-0 w-full h-full rounded-3xl p-7 md:p-9 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer select-none overflow-hidden flex flex-col justify-between text-white"
                  style={{
                    backgroundColor: story.accent,
                    transform: cardTransform,
                    opacity: cardOpacity,
                    zIndex: zIndex,
                    transformOrigin: 'center center',
                    boxShadow: isActive 
                      ? `0 20px 45px -10px ${story.accent}80` 
                      : `0 10px 25px -10px rgba(0,0,0,0.15)`,
                  }}
                >
                  {/* Tagline & Flag */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {story.flag && (
                        <img src={story.flag} alt={`${story.location} flag`} className="w-5 h-auto rounded-[2px] shadow-sm" />
                      )}
                      <span className="font-mono text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-wider text-white/90">
                        {story.tagline}
                      </span>
                    </div>

                    <h3 className="font-display text-lg md:text-xl font-extrabold text-white leading-snug mb-3 line-clamp-2">
                      {story.title}
                    </h3>

                    <blockquote className="font-body text-xs md:text-sm text-white/95 font-medium leading-relaxed line-clamp-3 mb-4">
                      "{story.result}"
                    </blockquote>
                  </div>

                  {/* Client & Action */}
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/20 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                        {(story.founder || story.client || "Founder").charAt(0)}
                      </div>
                      <div>
                        <div className="font-display text-xs md:text-sm font-bold text-white leading-none mb-1">
                          {story.founder || story.client}
                        </div>
                        <div className="text-[11px] text-white/80 font-medium leading-none">
                          {story.location}
                        </div>
                      </div>
                    </div>

                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStory(story);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white text-white hover:text-slate-900 font-extrabold text-[11px] transition-all duration-300 shrink-0"
                    >
                      Read Case →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls & Pagination Dots */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200/90 bg-white hover:bg-[#1746D2] text-slate-700 hover:text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0"
            {...touchHoverProps}
            aria-label="Previous story"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2 max-w-[320px] overflow-hidden py-2 px-1">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === idx ? 'w-8' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                style={{ backgroundColor: currentIndex === idx ? stories[currentIndex].accent : undefined }}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200/90 bg-white hover:bg-[#1746D2] text-slate-700 hover:text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0"
            {...touchHoverProps}
            aria-label="Next story"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* POPUP MODAL FOR DETAILED CASE STUDY */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4 animate-fade-in"
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
              <span className="px-3.5 py-1 rounded-full bg-[#1746D2]/10 text-[#1746D2] font-mono text-xs font-extrabold uppercase tracking-wider">
                {selectedStory.tagline}
              </span>
              <div className="text-xs font-bold text-slate-500">
                {selectedStory.location}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display mb-2 leading-tight">
              {selectedStory.title}
            </h3>

            <p className="text-xs font-extrabold text-[#00A86B] uppercase tracking-wider mb-4">
              {selectedStory.subtitle}
            </p>

            <div className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-4 mb-6">
              Founder: <span className="text-[#1746D2] font-black text-base">{selectedStory.founder || selectedStory.client}</span>
            </div>

            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-md shadow-rose-500/50" />
                  The Bottleneck
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium pl-4">{selectedStory.bottleneck}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1746D2] shadow-md shadow-[#1746D2]/50" />
                  Ecosystem Execution
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium pl-4">{selectedStory.execution}</p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100/60 shadow-sm">
                <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-widest mb-1.5">The Commercial Result</h4>
                <p className="text-sm text-emerald-800 font-bold leading-relaxed">{selectedStory.result}</p>
              </div>

              {selectedStory.takeaway && (
                <div className="p-5 rounded-2xl bg-[#1746D2]/10 border border-[#1746D2]/20/60 shadow-sm">
                  <h4 className="font-bold text-[#1746D2] text-xs uppercase tracking-widest mb-1.5">Key Takeaway</h4>
                  <p className="text-sm text-[#1233A0] font-semibold leading-relaxed">{selectedStory.takeaway}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
