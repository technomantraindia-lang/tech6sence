import React, { useState, useEffect, useRef } from 'react';
import founderImg from '../../assets/founder.png';
import globalInfraImg from '../../assets/why_tech6sense_ai_bg.jpg';

export function GlobalAIOpportunity() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const lacks = [
    "Technical expertise",
    "Development teams",
    "Business knowledge",
    "International sales experience",
    "Marketing systems",
    "Funding access",
    "Global network",
    "Leadership guidance",
    "Execution support"
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              GLOBAL STATISTICS
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display leading-[1.1] tracking-tight">
            Artificial Intelligence Is Reshaping Every Industry
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Macro Perspective */}
          <div className={`lg:col-span-6 flex flex-col gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-6">
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                Over the coming decade, organizations across healthcare, finance, manufacturing, retail, logistics, education, cyber security, and all professional services are expected to continue investing heavily in AI-driven innovation. Businesses worldwide are actively seeking partners capable of delivering practical AI solutions.
              </p>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                This growing demand creates significant opportunities for founders who combine technical capability with strong business execution. The Visionary Founders Program is designed to help entrepreneurs prepare for those opportunities by developing both the strategic and operational foundations of an AI business.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1746D2]/10 to-[#00A86B]/10 border border-[#1746D2]/20">
              <h4 className="font-display font-extrabold text-slate-900 text-lg md:text-xl mb-2">
                Artificial Intelligence is creating the biggest business opportunity of this century.
              </h4>
              <p className="font-body text-slate-600 text-xs md:text-sm font-medium">
                Every industry and region is undergoing a structural shift toward intelligent technology assets.
              </p>
            </div>
          </div>

          {/* Right Column: The Founder Opportunity & Lack Matrix */}
          <div className={`lg:col-span-6 flex flex-col gap-6 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1746D2]/20 rounded-bl-full blur-2xl pointer-events-none" />
              
              <h3 className="font-display font-extrabold text-white text-xl md:text-2xl leading-tight">
                The Future Doesn't Need More Employees.<br />
                <span className="text-[#00A86B]">It Needs More AI Founders.</span>
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-semibold text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00A86B]/20 text-[#00A86B] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Every company is becoming an AI company.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00A86B]/20 text-[#00A86B] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Every industry needs AI.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00A86B]/20 text-[#00A86B] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Every government is investing in AI.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00A86B]/20 text-[#00A86B] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Every enterprise is looking for AI partners.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <p className="text-slate-800 text-sm md:text-base font-bold">
                Yet millions of talented people never start because they lack:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {lacks.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-[#1746D2]/10 border border-[#1746D2]/20 text-xs md:text-sm text-slate-900 leading-relaxed font-medium mt-4">
                <strong className="text-[#1746D2] font-extrabold">That's where VISIONARY FOUNDERS changes everything.</strong><br />
                Instead of spending years trying to build everything yourself... You gain access to an entire Global AI business ecosystem that works alongside you.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// Section 2: Elite Advantage
export function EliteAdvantage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const comparisons = [
    { without: 'Idea stuck in your head or a slide deck', with: 'Registered company, live product, working team', outcome: 'A real business, not a plan' },
    { without: 'Struggling to find or afford senior tech talent', with: 'Dedicated CTO, tech lead, PM, and developer bench', outcome: 'Enterprise-grade product, built right the first time' },
    { without: 'No brand, no website, no social presence', with: 'Professional website, branding manager, active social channels', outcome: 'A company that looks credible before it has revenue' },
    { without: 'No idea how to win international clients', with: 'Structured global client acquisition training', outcome: 'Real pipeline across multiple markets' },
    { without: 'Funding feels out of reach', with: 'Guided access to grants, schemes, and investor networks', outcome: 'Capital to grow without guessing' },
    { without: 'Confined to one country, one market', with: 'Support for global entity setup, visas, relocation', outcome: 'A company built for the world from day one' },
    { without: '12–18 months to build baseline infrastructure', with: 'Immediate launch with pre-built, premium systems', outcome: 'Speed to Market' },
    { without: 'Fragmented tools and agencies', with: 'One unified, powerful platform', outcome: 'Global Market with Revenue' }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-y border-slate-200/50">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE ELITE ADVANTAGE
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            Comparison Framework
          </h2>
        </div>

        {/* Desktop View: 3 Columns Dark Table Comparison */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-800 shadow-2xl bg-slate-950">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-950 text-white font-display text-xs md:text-sm font-extrabold uppercase tracking-wider border-b border-slate-800">
                <th className="p-6 w-1/3 border-r border-slate-800 text-white">Without Visionary Founders</th>
                <th className="p-6 w-1/3 border-r border-slate-800 text-white">With Visionary Founders</th>
                <th className="p-6 w-1/3 text-white">The Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/15 font-medium text-sm">
              {comparisons.map((row, i) => (
                <tr key={i} className="transition-colors hover:brightness-105">
                  <td className="p-6 text-white bg-slate-900 border-r border-slate-800 font-medium">
                    {row.without}
                  </td>
                  <td className="p-6 bg-[#1746D2] text-white font-extrabold border-r border-white/15">
                    {row.with}
                  </td>
                  <td className="p-6 bg-[#00A86B] text-white font-extrabold">
                    {row.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Stacked comparison cards */}
        <div className="lg:hidden space-y-6">
          {comparisons.map((row, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl shadow-xl overflow-hidden divide-y divide-white/15">
              <div className="p-5 bg-slate-900">
                <span className="block text-[10px] font-extrabold text-slate-300 uppercase tracking-widest mb-1">Without Visionary Founders</span>
                <p className="text-xs text-white font-medium">{row.without}</p>
              </div>
              <div className="p-5 bg-[#1746D2]">
                <span className="block text-[10px] font-extrabold text-blue-100 uppercase tracking-widest mb-1">With Visionary Founders</span>
                <p className="text-xs text-white font-bold">{row.with}</p>
              </div>
              <div className="p-5 bg-[#00A86B]">
                <span className="block text-[10px] font-extrabold text-emerald-100 uppercase tracking-widest mb-1">The Outcome</span>
                <p className="text-xs text-white font-extrabold">{row.outcome}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Section 3: What You'll Walk Away With
export function WhatYouWalkAwayWith() {
  const deliverables = [
    { title: 'Registered Company', desc: 'A company incorporated and documented to a standard that holds up to international scrutiny' },
    { title: 'Premium Website', desc: 'A premium website and brand presence that reads as globally competitive from day one' },
    { title: 'Real Product or Service', desc: 'A real product or service, built by a technical team led by an actual CTO — not freelancers assembled ad hoc' },
    { title: 'Client Acquisition Engine', desc: 'A trained, repeatable client acquisition engine built for winning clients across borders' },
    { title: 'Active Capital Pathways', desc: 'Active capital pathways — government-backed funding at home, private capital abroad' },
    { title: 'Roadmap to Second Country', desc: 'A live roadmap to a second country — entity setup, compliance, and visa groundwork already laid' }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-950 border-t border-slate-800 text-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1746D2]/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00A86B]/20 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#D4AF37] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#D4AF37]">
              WHAT YOU WALK AWAY WITH
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display mb-4 tracking-tight">
            Tangible Deliverables & Core Assets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, i) => (
            <div 
              key={i} 
              className="p-8 rounded-[2rem] bg-slate-900/90 backdrop-blur-md border border-slate-800/90 shadow-xl hover:shadow-[0_0_30px_rgba(23,70,210,0.25)] hover:border-[#1746D2]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              {/* Top-Right Corner Hover Color Glow Effect */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br from-[#1746D2] via-[#00A86B] to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500 pointer-events-none" />
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#60a5fa]/25 via-[#00A86B]/15 to-transparent rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <div className="w-10 h-10 rounded-xl bg-[#1746D2]/20 border border-[#1746D2]/40 text-[#60a5fa] flex items-center justify-center mb-6 shadow-inner relative z-10">
                <span className="font-mono font-bold text-sm">0{i + 1}</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white mb-3 group-hover:text-[#60a5fa] transition-colors relative z-10">
                {item.title}
              </h4>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto border-t border-slate-800/80 pt-8">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1746D2]/15 via-slate-900/80 to-[#00A86B]/15 border border-slate-800/80 backdrop-blur-sm">
            <p className="text-sm md:text-base text-[#38bdf8] font-semibold italic leading-relaxed">
              "This isn't a certificate program. It's an operating company, built with you, engineered to compete globally from the first day it exists."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// Section 4: Why TECH6SENSE AI
export function WhyTech6SenseAI() {
  const capabilities = [
    "AI Product Engineering", "Generative & Agentic AI Systems", "AI Agents", "AI Automation", 
    "Data Intelligence", "computer vision, NLP, AI governance, blockchain, IoT, and AR/VR", 
    "Web & App Development", "Emerging Technologies — 25+ capabilities at your command."
  ];

  return (
    <section className="pt-20 md:pt-28 pb-0 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Main Content Layout (max-w-[1400px]) */}
        <div className="text-center max-w-[1400px] mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              WHY TECH6SENSE AI
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight mb-6">
            Backed by a Company That Builds AI for the World.
          </h2>
          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-[1400px] mx-auto">
            <p>
              Visionary Founders isn't run by coaches or content creators. It's powered by TECH6SENSE AI — a global AI development company serving clients across the USA, UK, Australia, Canada, UAE, EU, India and Singapore.
            </p>
            <p className="text-slate-700 font-semibold">
              Every pillar of this ecosystem — the developers, the CTOs, the project managers, the client acquisition systems — is the same infrastructure TECH6SENSE AI uses to deliver AI products and IT services worldwide. We're not teaching theory. We're plugging you into a working global machine.
            </p>
          </div>
        </div>
      </div> {/* Close max-w-[1400px] container */}

      {/* Full Width Capability Strip - Infinite Marquee Ticker */}
      <div className="w-full overflow-hidden bg-slate-950 border-y border-white/5 py-6 mt-12 select-none shadow-lg relative">
        {/* Gradient edge masks to fade text smoothly at screen boundaries */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
        
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-loop {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee-loop:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="animate-marquee-loop gap-16">
          {/* Double list for smooth circular scrolling */}
          {[...capabilities, ...capabilities].map((cap, i) => (
            <span key={i} className="text-xs md:text-sm font-bold text-white/90 flex items-center gap-3 whitespace-nowrap tracking-wide font-mono uppercase">
              <span className="w-2 h-2 rounded-full bg-[#1746D2] shadow-md shadow-[#1746D2]/50 animate-pulse" />
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 5: Timeline Overview
export function TimelineOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const timelineRows = [
    { phase: 'Application to Strategy Call', duration: '3–5 business days' },
    { phase: 'Strategy Call to Signed Offer', duration: '2–7 days (founder-paced)' },
    { phase: 'Onboarding Kickoff', duration: 'Within 5 business days of agreement' },
    { phase: 'Legal + Brand + Website Foundation', duration: '3–5 weeks' },
    { phase: 'Product/Technology Build', duration: '6–12 weeks (varies by scope)' },
    { phase: 'Client Acquisition Support', duration: 'Ongoing until first clients secured' }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              TIMELINE OVERVIEW
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            Typical Durations & Cohort Benchmarks
          </h2>
        </div>

        <div className="w-full mx-auto overflow-hidden rounded-3xl border border-slate-800 shadow-2xl bg-slate-950 mb-8">
          {/* Mobile View: Stacked Cards with Solid Brand Colors */}
          <div className="block md:hidden space-y-4 p-3 bg-slate-950">
            {timelineRows.map((row, idx) => (
              <div key={idx} className="border border-slate-800 rounded-2xl shadow-xl overflow-hidden divide-y divide-white/15">
                <div className="p-4 bg-[#1746D2]">
                  <span className="block text-[10px] font-extrabold text-blue-100 uppercase tracking-widest mb-1">PHASE</span>
                  <p className="text-xs text-white font-bold">{row.phase}</p>
                </div>
                <div className="p-4 bg-[#00A86B]">
                  <span className="block text-[10px] font-extrabold text-emerald-100 uppercase tracking-widest mb-1">TYPICAL DURATION</span>
                  <p className="text-xs text-white font-bold leading-relaxed">{row.duration}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Table */}
          <table className="hidden md:table w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-950 text-white font-mono text-xs font-bold uppercase tracking-wider border-b border-slate-800">
                <th className="p-5 w-1/2 border-r border-slate-800 text-white">PHASE</th>
                <th className="p-5 w-1/2 text-white">TYPICAL DURATION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/15 font-medium text-xs md:text-sm text-white">
              {timelineRows.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:brightness-110">
                  <td className="p-5 bg-[#1746D2] text-white font-extrabold border-r border-white/15">{row.phase}</td>
                  <td className="p-5 bg-[#00A86B] text-white font-bold leading-relaxed">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Note: Timelines vary based on tier, industry complexity, and founder responsiveness during the build phase. Replace with your actual delivery benchmarks once you have completed cohorts to reference.
        </p>

      </div>
    </section>
  );
}

// Section 6: National vs Global Comparison
export function NationalVsGlobalComparison() {
  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    { title: 'Corporate Setup', local: 'Home country only- Domestic Incorporation', global: 'Home country + Global entity framework- Global Cross-Border Setup' },
    { title: 'Legal Frameworks', local: 'Domestic Contracts & NDAs', global: 'Multi-jurisdictional Master Services Agreement (MSA)' },
    { title: 'Website', local: 'Premium business website', global: 'Enterprise-grade, multi-market website' },
    { title: 'Company Social accounts Management', local: 'Setup + managed (3–6 months)', global: 'Setup + managed (12 months) & Founder LinkedIn management for personal branding and Sales' },
    { title: 'Growth Squad', local: 'Dedicated, part-time allocation- Part-Time Marketing Manager', global: 'Dedicated, full allocation- Full-Time Dedicated Marketing & Brand Manager' },
    { title: 'Engineering Bench', local: 'Shared pool- Core AI / IT Developers', global: 'Priority/dedicated allocation- Priority Elite AI & Dev Cohort' },
    { title: 'Technical Team Lead & PM', local: 'Assigned', global: 'Dedicated, senior-level' },
    { title: 'Chief Technology Officer', local: 'Advisory-level guidance- Strategic Fractional CTO', global: 'Full-time dedicated ownership- Dedicated Full-Time Veteran CTO' },
    { title: 'Client Success Manager', local: 'Shared/pooled', global: 'Dedicated, full allocation' },
    { title: 'Client Acquisition', local: 'Domestic market focus- Regional B2B Sales Systems', global: 'International, cross-market/cross-culture- Global Enterprise Scale' },
    { title: 'Fundraising Support', local: 'Domestic Grants only', global: 'Government schemes + private investor access- International VCs & Cross-Border Sovereign Schemes' },
    { title: 'Global Expansion', local: '❌ Not included', global: '✓ Full support (entity, compliance, visa, relocation)' },
    { title: 'Best For', local: 'Founders launching in one home market, not yet planning cross-border operations.', global: 'Founders who want to build and expand globally from day one, with executive-level technology and capital access.' }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              ECOSYSTEM STRUCTURE & YOUR INVESTMENT
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            National vs. Global Structuring
          </h2>
          <p className="text-slate-650 text-sm md:text-base font-medium max-w-xl mx-auto mb-3">
            Choose the tier that matches your ambition and readiness. Each tier includes a comprehensive suite of services to accelerate your journey.
          </p>
          <p className="text-slate-650 text-sm md:text-base font-medium max-w-xl mx-auto">
            Two paths, one ecosystem. Build for your home market, or build to operate anywhere in the world.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-800 shadow-2xl bg-slate-950">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-950 text-white font-display text-xs md:text-sm font-extrabold uppercase tracking-wider border-b border-slate-800">
                <th className="p-6 w-1/4 border-r border-slate-800 text-white">Feature / Resources</th>
                <th className="p-6 w-3/8 border-r border-slate-800 text-white">NATIONAL (Launch & Dominate Your Home Market)</th>
                <th className="p-6 w-3/8 text-white">GLOBAL (Build a Company That Operates Globally)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/15 font-medium text-xs md:text-sm">
              {features.map((feat, i) => (
                <tr key={i} className="transition-colors hover:brightness-105">
                  <td className="p-6 text-white bg-slate-900 font-extrabold border-r border-slate-800">
                    {feat.title}
                  </td>
                  <td className="p-6 bg-[#1746D2] text-white font-medium border-r border-white/15 leading-relaxed">
                    {feat.local}
                  </td>
                  <td className="p-6 bg-[#00A86B] text-white font-extrabold leading-relaxed">
                    {feat.global}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
          {features.map((feat, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl bg-slate-950 shadow-xl overflow-hidden divide-y divide-white/15">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 text-left flex justify-between items-center bg-slate-950 text-white focus:outline-none"
              >
                <span className="font-bold text-white text-xs md:text-sm">{feat.title}</span>
                <span className={`text-[#00A86B] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-80 border-t border-slate-800 p-5' : 'max-h-0'}`}>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#1746D2] text-white">
                    <span className="block text-[10px] font-extrabold text-blue-100 uppercase tracking-widest mb-1">National Track</span>
                    <p className="text-xs text-white font-medium leading-relaxed">{feat.local}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#00A86B] text-white">
                    <span className="block text-[10px] font-extrabold text-emerald-100 uppercase tracking-widest mb-1">Global Track</span>
                    <p className="text-xs text-white font-extrabold leading-relaxed">{feat.global}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Section 7: Founder Selection Criteria & Application Process (Merged)
export function FounderSelectionCriteria() {
  const criteria = [
    { title: 'Market Problem', desc: 'A clearly defined problem they\'re solving, in a market with real paying demand' },
    { title: 'Founder Dedication', desc: 'Willingness to commit meaningfully to building the company, not just funding it' },
    { title: 'Realistic Expectations', desc: 'Realistic expectations about timelines and the work involved on their side' },
    { title: 'International Ambition', desc: 'For Global tier specifically: a genuine international ambition, not just interest in the label' }
  ];

  const evalCriteria = [
    { name: 'Founder Commitment', desc: 'Genuine intent to build and operate the company full-time, not a side project' },
    { name: 'Market Viability', desc: 'A real, addressable problem in a market with paying demand' },
    { name: 'Fit with Program Structure', desc: "Whether Ascend or Global tier genuinely matches the founder's goals" },
    { name: 'Execution Readiness', desc: 'Founder\'s ability to actively participate in building the business alongside the team' }
  ];

  const timelineOverview = [
    { phase: 'Application to Strategy Call', duration: '3–5 business days' },
    { phase: 'Strategy Call to Signed Offer', duration: '2–7 days (founder-paced)' },
    { phase: 'Onboarding Kickoff', duration: 'Within 5 business days of agreement' },
    { phase: 'Legal + Brand + Website Foundation', duration: '3–5 weeks' },
    { phase: 'Product/Technology Build', duration: '6–12 weeks (varies by scope)' },
    { phase: 'Client Acquisition Support', duration: 'Ongoing until first clients secured' }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              APPLICATION PROCESS & WHO WE'RE LOOKING FOR
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            Selection & Application Process
          </h2>
          <p className="text-slate-655 text-sm md:text-base font-semibold">
            Every applicant goes through a real evaluation to ensure mutual fit. Here's exactly how it works step-by-step:
          </p>
        </div>

        {/* Integrated Application Steps (First - max-w-[1400px]) */}
        <div className="bg-white p-4 sm:p-8 md:p-14 rounded-3xl border border-slate-200 shadow-xl max-w-[1400px] mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display mb-3">
              Step-by-Step Selection & Onboarding Process
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
              This isn't an automatic checkout. Every applicant goes through a real evaluation. Here's what happens step-by-step:
            </p>
          </div>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0 shadow-md">1</div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">Step 1 — Submit Your Application</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">Complete the application form with your idea, target market, industry, and which tier you believe fits — National or Global. This takes most founders 10–15 minutes.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-base sm:text-lg shrink-0 shadow-md">2</div>
                <h4 className="sm:hidden font-display font-bold text-slate-900 text-base">Step 2 — Application Review</h4>
              </div>
              <div className="w-full">
                <h4 className="hidden sm:block font-display font-bold text-slate-900 text-base md:text-lg mb-2">Step 2 — Application Review</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4">Our team reviews every application against four criteria:</p>
                <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-xl bg-slate-950 mt-4 w-full">
                  <table className="w-full border-collapse text-left text-xs md:text-sm">
                    <thead>
                      <tr className="bg-slate-950 text-white font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider border-b border-slate-800">
                        <th className="p-2.5 sm:p-4 w-1/3 border-r border-slate-800 text-white">CRITERIA</th>
                        <th className="p-2.5 sm:p-4 w-2/3 text-white">WHAT WE LOOK FOR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/15 font-medium text-white">
                      {evalCriteria.map((item, i) => (
                        <tr key={i} className="transition-colors hover:brightness-110">
                          <td className="p-2.5 sm:p-4 bg-[#1746D2] text-white font-extrabold border-r border-white/15 text-[11px] sm:text-xs md:text-sm">{item.name}</td>
                          <td className="p-2.5 sm:p-4 bg-[#00A86B] text-white font-medium leading-relaxed text-[11px] sm:text-xs md:text-sm">{item.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0 shadow-md">3</div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">Step 3 — Founder Strategy Call</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Shortlisted applicants are invited to a confidential 30–45 minute call with a Program Advisor. This is a two-way conversation:
                </p>
                <ul className="list-disc pl-5 mt-3 text-slate-600 text-xs md:text-sm space-y-1.5 font-medium">
                  <li>We assess your idea, market, and readiness in more depth</li>
                  <li>You get direct answers on program structure, tier fit, timelines, and pricing</li>
                  <li>We map out what Month 1 through your first client would realistically look like</li>
                </ul>
                <p className="text-slate-500 text-xs italic mt-3">There's no pressure to decide on this call — it exists to make sure both sides are confident before moving forward.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0 shadow-md">4</div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">Step 4 — Tier Confirmation & Offer</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Based on the call, we confirm which tier — National or Global — genuinely fits your goals, and issue a formal offer outlining full scope, ecosystem fee structure, and timeline benchmarks.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0 shadow-md">5</div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">Step 5 — Agreement & Onboarding Kickoff</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Once you accept the offer, onboarding begins within 5 business days. You're introduced to your full team (Branding Manager, Tech Lead, Dedicated CTO, and Client Success Manager).
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0 shadow-md">6</div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">Step 6 — Build Phase Begins</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">Legal registration, branding, website, and product development begin in parallel, coordinated by your Project Manager.</p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-base sm:text-lg shrink-0 shadow-md">7</div>
                <h4 className="sm:hidden font-display font-bold text-slate-900 text-base">Step 7 — Launch & Client Acquisition</h4>
              </div>
              <div className="w-full">
                <h4 className="hidden sm:block font-display font-bold text-slate-900 text-base md:text-lg mb-2">Step 7 — Launch & Client Acquisition</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-6">
                  Once your company, brand, and product are live, your Client Success Manager and acquisition training take over — supporting you through outreach, pitching, and closing your first clients, with continued support until that milestone is hit.
                </p>

                {/* TIMELINE OVERVIEW Table inside Step 7 */}
                <div className="mt-8 pt-6 border-t border-slate-200 w-full">
                  <div className="mb-4">
                    <span className="font-mono text-xs font-extrabold text-[#1746D2] uppercase tracking-widest block mb-1">
                      DELIVERY BENCHMARKS
                    </span>
                    <h5 className="text-xl md:text-2xl font-extrabold text-slate-900 font-display">
                      TIMELINE OVERVIEW
                    </h5>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-xl bg-slate-950 w-full">
                    <table className="w-full border-collapse text-left text-xs md:text-sm">
                      <thead>
                        <tr className="bg-slate-950 text-white font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider border-b border-slate-800">
                          <th className="p-2.5 sm:p-4 w-1/2 border-r border-slate-800 text-white">PHASE</th>
                          <th className="p-2.5 sm:p-4 w-1/2 text-white">TYPICAL DURATION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/15 font-medium text-white">
                        {timelineOverview.map((item, i) => (
                          <tr key={i} className="transition-colors hover:brightness-110">
                            <td className="p-2.5 sm:p-4 bg-[#1746D2] text-white font-extrabold border-r border-white/15 text-[11px] sm:text-xs md:text-sm">{item.phase}</td>
                            <td className="p-2.5 sm:p-4 bg-[#00A86B] text-white font-bold leading-relaxed text-[11px] sm:text-xs md:text-sm">{item.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[#D4AF37] font-semibold text-xs md:text-sm italic mt-3">
                    Note: Timelines vary based on tier, industry complexity, and founder responsiveness during the build phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate Requirements (Placed After Steps) */}
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display mb-3">
              Who We're Looking For — Candidate Requirements
            </h3>
            <p className="text-slate-600 text-xs md:text-sm font-semibold">
              The program is highly selective by design. We prioritize founders who show:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {criteria.map((crit, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#1746D2]/10 text-[#1746D2] flex items-center justify-center font-mono font-bold text-sm mb-6 border border-[#1746D2]/20">
                  0{i + 1}
                </div>
                <h4 className="font-display font-bold text-slate-900 text-lg mb-3">{crit.title}</h4>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">{crit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-[#1746D2] hover:bg-[#1233A0] px-8 py-4 text-sm font-bold tracking-widest text-white shadow-lg hover:scale-[1.02] transition-all uppercase"
          >
            Start Your Application
          </button>
          <div className="text-xs text-slate-500 font-mono mt-4">
            Or email us at <a href="mailto:visionaryfounders@tech6senseai.com" className="text-[#1746D2] font-bold hover:underline">visionaryfounders@tech6senseai.com</a>
          </div>
        </div>

      </div>
    </section>
  );
}

// Section 8: Application Journey
export function ApplicationJourney() {
  const steps = [
    { title: 'Submit Your Application', desc: 'Complete the application form with your idea, target market, industry, and which tier fits.' },
    { title: 'Application Review', desc: 'Screening process evaluating founder commitment, market viability, tier fit, and execution readiness.' },
    { title: 'Founder Strategy Call', desc: 'Confidential discovery call covering options, timeline fit, and localized operations.' },
    { title: 'Tier Confirmation and Offer', desc: 'Confirmation of program fit and formal proposal parameters.' },
    { title: 'Agreement & Onboarding Kickoff', desc: 'Process contractual agreements, NDAs, and kick-start full-team introductions.' },
    { title: 'Build Phase Begins', desc: 'Engineering models, legal structures, and digital frameworks initiated in parallel sprints.' },
    { title: 'Launch & Client Acquisition', desc: 'Activation of B2B acquisition models, outbound funnels, and paying account onboarding.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < steps.length - itemsPerView) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
            APPLICATION JOURNEY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            Onboarding Milestones
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-12">
          
          {/* Viewport wrapper */}
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 0.8)}%)` }}
            >
              {steps.map((step, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:border-[#1746D2]/40/80 transition-all duration-300 flex flex-col items-center text-center select-none"
                  style={{ width: `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})` }}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-mono text-sm font-bold flex items-center justify-center mb-6 shadow-md">
                    0{i + 1}
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base md:text-lg mb-3 leading-snug">{step.title}</h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {currentIndex > 0 && (
            <button 
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1746D2] text-white hover:bg-[#1746D2] flex items-center justify-center shadow-lg shadow-[#1746D2]/20 z-30 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#1746D2]/30"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {currentIndex < steps.length - itemsPerView && (
            <button 
              onClick={nextSlide}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1746D2] text-white hover:bg-[#1746D2] flex items-center justify-center shadow-lg shadow-[#1746D2]/20 z-30 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#1746D2]/30"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

        </div>

        {/* Bullet Indicator dots below */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: steps.length - itemsPerView + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-[#1746D2] w-4' : 'bg-slate-200 hover:bg-slate-350'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// Section 9: Founder Message
export function FounderMessage() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d162a]/40 via-slate-900 to-slate-900 z-0"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="p-8 md:p-16 bg-white/5 border border-white/10 backdrop-blur-sm rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1746D2]/10 rounded-bl-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Image Column */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] bg-slate-800/80 border border-slate-700/80 overflow-hidden shadow-xl relative group">
                <img 
                  src={founderImg} 
                  alt="Chintan - Founder of TECH6SENSE AI" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Quote Column */}
            <div className="lg:col-span-8">
              <span className="text-7xl font-serif text-[#1746D2] leading-none block mb-6">“</span>
              
              <blockquote className="text-lg md:text-2xl font-extrabold font-display leading-snug mb-8 text-white text-justify">
                "The AI and Tech landscape is moving faster than ever. Having a great idea is no longer enough; you need the infrastructure, the talent, and the global reach to execute it rapidly. I built TECH6SENSE AI on a foundation of global excellence, and with VISIONARY FOUNDERS, we are opening our doors to the next generation of tech leaders. We aren't just giving you advice—we are giving you our entire business ecosystem. If you have the drive, we have the engine. Let's build the future together."
              </blockquote>

              <div className="h-px bg-white/10 w-24 mb-6" />

              <div>
                <div className="font-display text-2xl font-bold text-white tracking-wide">Chintan</div>
                <div className="font-mono text-xs text-[#1746D2] uppercase tracking-widest mt-1">Founder of TECH6SENSE AI</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
