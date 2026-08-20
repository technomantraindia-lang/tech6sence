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
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow, Main Opportunity Text & 2x2 Stats Grid */}
          <div className={`flex flex-col gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
                GLOBAL STATISTICS
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display leading-[1.1]">
                Artificial Intelligence is creating the biggest business opportunity of this century.
              </h2>
              <h3 className="text-lg font-bold text-[#1746D2] mb-4 font-display">
                Artificial Intelligence Is Reshaping Every Industry
              </h3>
              <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed font-medium">
                Over the coming decade, organizations across healthcare, finance, manufacturing, retail, logistics, education, cyber security, and all professional services are expected to continue investing heavily in AI-driven innovation. Businesses worldwide are actively seeking partners capable of delivering practical AI solutions.
              </p>
              <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed font-medium">
                This growing demand creates significant opportunities for founders who combine technical capability with strong business execution. The Visionary Founders Program is designed to help entrepreneurs prepare for those opportunities by developing both the strategic and operational foundations of an AI business.
              </p>
            </div>

            {/* 2x2 Grid of Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat Card 1 */}
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:border-violet-305 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-[#1746D2] uppercase tracking-widest font-mono block mb-1">Market Potential</span>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">$15.7T</div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 font-medium">Estimated global economic impact of AI by 2030 (PwC).</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:border-violet-305 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-[#1746D2] uppercase tracking-widest font-mono block mb-1">Enterprise Demand</span>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">84% YoY</div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 font-medium">Increase in active enterprise requests for AI business services.</p>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:border-violet-305 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-[#1746D2] uppercase tracking-widest font-mono block mb-1">Global Reach</span>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">Hubs</div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 font-medium">Serving founders and enterprises across USA, UK, UAE, SG & IND.</p>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:border-violet-305 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-[#1746D2] uppercase tracking-widest font-mono block mb-1">Ecosystem Focus</span>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">25+</div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 font-medium">Core AI and deep-tech business capabilities delivered.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Vision, Core Pillars, Lack Matrix & Warning Card */}
          <div className={`flex flex-col gap-6 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="border-b border-slate-100 pb-6">
              <h4 className="font-display font-bold text-slate-900 text-xl md:text-2xl mb-4 leading-tight">The Future Doesn't Need More Employees. It Needs More AI Founders.</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-semibold text-slate-800">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1746D2]/20 text-[#1746D2] flex items-center justify-center text-xs shrink-0">✓</span>
                  <span>Every company is becoming an AI company.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1746D2]/20 text-[#1746D2] flex items-center justify-center text-xs shrink-0">✓</span>
                  <span>Every industry needs AI.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1746D2]/20 text-[#1746D2] flex items-center justify-center text-xs shrink-0">✓</span>
                  <span>Every government is investing in AI.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1746D2]/20 text-[#1746D2] flex items-center justify-center text-xs shrink-0">✓</span>
                  <span>Every enterprise is looking for AI partners.</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-slate-600 text-sm mb-4 font-semibold">Yet millions of talented people never start because they lack:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {lacks.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 hover:bg-slate-100 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-[#1746D2]/10 border border-[#1746D2]/20/50 text-xs md:text-sm text-[#050c1e] leading-relaxed font-medium">
                <strong>That's where VISIONARY FOUNDERS changes everything.</strong> Instead of spending years trying to build everything yourself... You gain access to an entire Global AI business ecosystem that works alongside you.
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
          <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
            The Elite Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            Comparison Framework
          </h2>
        </div>

        {/* Desktop View: 3 Columns Comparison */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-900 text-white font-display text-sm font-extrabold uppercase tracking-wider">
                <th className="p-6 w-1/3">Without Visionary Founders</th>
                <th className="p-6 w-1/3 bg-[#0d162a]/40 border-x border-white/10">With Visionary Founders</th>
                <th className="p-6 w-1/3">The Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-sm text-slate-700">
              {comparisons.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 text-slate-500">{row.without}</td>
                  <td className="p-6 bg-[#1746D2]/10/20 text-slate-900 font-semibold border-x border-[#1746D2]/20/50">{row.with}</td>
                  <td className="p-6 text-emerald-700 font-bold">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Stacked comparison cards */}
        <div className="lg:hidden space-y-6">
          {comparisons.map((row, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl bg-white shadow-sm p-5 space-y-4">
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Without Visionary Founders</span>
                <p className="text-xs text-slate-500 font-medium">{row.without}</p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="block text-[10px] font-bold text-[#1746D2] uppercase tracking-widest mb-1">With Visionary Founders</span>
                <p className="text-xs text-slate-900 font-semibold">{row.with}</p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">The Outcome</span>
                <p className="text-xs text-emerald-700 font-bold">{row.outcome}</p>
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
    { title: 'Roadmap to Second Country', desc: 'A live roadmap to a second country — entity, compliance, and visa groundwork already laid' }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80 text-slate-900 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-100/50 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-100/40 to-transparent blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs font-extrabold text-[#1746D2] uppercase tracking-[0.25em] mb-4 block">
            What You Walk Away With
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4 tracking-tight">
            Tangible Deliverables & Core Assets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, i) => (
            <div 
              key={i} 
              className="p-8 rounded-[2rem] bg-white border border-slate-200/80 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:border-[#1746D2]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1746D2]/10 border border-[#1746D2]/20 text-[#1746D2] flex items-center justify-center mb-6">
                <span className="font-mono font-bold text-sm">0{i + 1}</span>
              </div>
              <h4 className="text-lg font-bold font-display text-slate-900 mb-3 group-hover:text-[#1746D2] transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto border-t border-slate-200/80 pt-8">
          <p className="text-sm md:text-base text-[#1746D2] font-semibold italic leading-relaxed">
            "This isn't a certificate program. It's an operating company, built with you, engineered to compete globally from the first day it exists."
          </p>
        </div>

      </div>
    </section>
  );
}
// Interactive Cybernetic SVG Animated Globe Visual Component
function GlobalInfraVisual() {
  return (
    <div className="relative w-full h-full bg-[#03060f] overflow-hidden flex items-center justify-center">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Radar sweeping circle */}
      <div className="absolute w-[80%] h-[80%] rounded-full border border-blue-500/10 flex items-center justify-center animate-[spin_12s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2.5px] h-1/2 bg-gradient-to-t from-emerald-500 via-emerald-500/30 to-transparent origin-bottom" />
      </div>
      <div className="absolute w-[60%] h-[60%] rounded-full border border-blue-500/15" />
      <div className="absolute w-[40%] h-[40%] rounded-full border border-blue-500/20" />

      {/* Cybernetic Rotating Globe SVG */}
      <svg className="w-[85%] h-[85%] relative z-10 animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200" fill="none">
        
        {/* Outer HUD Rings / Radar Compass Ticks */}
        <circle cx="100" cy="100" r="90" stroke="#1746D2" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.3" />
        <circle cx="100" cy="100" r="94" stroke="#00A86B" strokeWidth="0.75" strokeDasharray="1 12" opacity="0.4" className="animate-[spin_20s_linear_infinite_reverse]" />
        <circle cx="100" cy="100" r="85" stroke="#1746D2" strokeWidth="0.5" opacity="0.15" />
        
        {/* Tilted Globe Grid Group */}
        <g transform="rotate(-15 100 100)">
          {/* Longitudinal Rings */}
          <ellipse cx="100" cy="100" rx="80" ry="15" stroke="#1746D2" strokeWidth="0.5" opacity="0.15" />
          <ellipse cx="100" cy="100" rx="80" ry="35" stroke="#1746D2" strokeWidth="0.5" opacity="0.25" />
          <ellipse cx="100" cy="100" rx="80" ry="55" stroke="#1746D2" strokeWidth="0.5" opacity="0.35" />
          <ellipse cx="100" cy="100" rx="80" ry="75" stroke="#1746D2" strokeWidth="0.5" opacity="0.45" />

          {/* Latitudinal Rings */}
          <ellipse cx="100" cy="100" rx="15" ry="80" stroke="#1746D2" strokeWidth="0.5" opacity="0.15" />
          <ellipse cx="100" cy="100" rx="35" ry="80" stroke="#1746D2" strokeWidth="0.5" opacity="0.25" />
          <ellipse cx="100" cy="100" rx="55" ry="80" stroke="#1746D2" strokeWidth="0.5" opacity="0.35" />
          <ellipse cx="100" cy="100" rx="75" ry="80" stroke="#1746D2" strokeWidth="0.5" opacity="0.45" />

          {/* Equator & Prime Meridian */}
          <line x1="20" y1="100" x2="180" y2="100" stroke="#1746D2" strokeWidth="0.5" opacity="0.4" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#1746D2" strokeWidth="0.5" opacity="0.4" />
        </g>
        
        {/* Network Connection Paths (Mesh) */}
        <path id="path1" d="M 50 60 Q 75 40 100 30" stroke="#1746D2" strokeWidth="0.75" opacity="0.5" />
        <path id="path2" d="M 100 30 Q 125 40 150 60" stroke="#1746D2" strokeWidth="0.75" opacity="0.5" />
        <path id="path3" d="M 150 60 Q 160 100 150 140" stroke="#00A86B" strokeWidth="0.75" opacity="0.4" />
        <path id="path4" d="M 150 140 Q 125 155 100 170" stroke="#1746D2" strokeWidth="0.75" opacity="0.5" />
        <path id="path5" d="M 100 170 Q 75 155 50 140" stroke="#1746D2" strokeWidth="0.75" opacity="0.5" />
        <path id="path6" d="M 50 140 Q 40 100 50 60" stroke="#00A86B" strokeWidth="0.75" opacity="0.4" />
        
        {/* Cross-Regional Secondary Connection Arcs */}
        <path id="path-cross1" d="M 50 60 Q 100 100 150 140" stroke="#00A86B" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.4" />
        <path id="path-cross2" d="M 100 30 Q 100 100 100 170" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="1 3" opacity="0.5" />
        <path id="path-cross3" d="M 150 60 Q 100 100 50 140" stroke="#1746D2" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.4" />
        
        {/* Pulsing Nodes (Hubs) */}
        {/* London */}
        <g className="animate-pulse">
          <circle cx="100" cy="30" r="3.5" fill="#00A86B" />
          <circle cx="100" cy="30" r="7" stroke="#00A86B" strokeWidth="0.5" opacity="0.4" />
          <text x="106" y="27" fill="#94a3b8" fontSize="4.5" fontFamily="monospace" fontWeight="bold" opacity="0.8">LON</text>
        </g>
        {/* New York */}
        <g className="animate-pulse" style={{ animationDelay: '0.4s' }}>
          <circle cx="50" cy="60" r="3.5" fill="#1746D2" />
          <circle cx="50" cy="60" r="7" stroke="#1746D2" strokeWidth="0.5" opacity="0.4" />
          <text x="35" y="57" fill="#94a3b8" fontSize="4.5" fontFamily="monospace" fontWeight="bold" opacity="0.8">NYC</text>
        </g>
        {/* Tokyo */}
        <g className="animate-pulse" style={{ animationDelay: '0.8s' }}>
          <circle cx="150" cy="60" r="3.5" fill="#D4AF37" />
          <circle cx="150" cy="60" r="7" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
          <text x="156" y="57" fill="#94a3b8" fontSize="4.5" fontFamily="monospace" fontWeight="bold" opacity="0.8">TOK</text>
        </g>
        {/* Sydney */}
        <g className="animate-pulse" style={{ animationDelay: '1.2s' }}>
          <circle cx="150" cy="140" r="3.5" fill="#1746D2" />
          <circle cx="150" cy="140" r="7" stroke="#1746D2" strokeWidth="0.5" opacity="0.4" />
          <text x="156" y="137" fill="#94a3b8" fontSize="4.5" fontFamily="monospace" fontWeight="bold" opacity="0.8">SYD</text>
        </g>
        {/* GIFT City */}
        <g className="animate-pulse" style={{ animationDelay: '0.2s' }}>
          <circle cx="100" cy="170" r="3.5" fill="#00A86B" />
          <circle cx="100" cy="170" r="7" stroke="#00A86B" strokeWidth="0.5" opacity="0.4" />
          <text x="106" y="173" fill="#94a3b8" fontSize="4.5" fontFamily="monospace" fontWeight="bold" opacity="0.8">GIFT</text>
        </g>
        {/* Toronto */}
        <g className="animate-pulse" style={{ animationDelay: '0.6s' }}>
          <circle cx="50" cy="140" r="3.5" fill="#D4AF37" />
          <circle cx="50" cy="140" r="7" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
          <text x="35" y="137" fill="#94a3b8" fontSize="4.5" fontFamily="monospace" fontWeight="bold" opacity="0.8">TOR</text>
        </g>

        {/* Multiple Animated Data Packets traveling along paths */}
        <circle cx="0" cy="0" r="2.2" fill="#fff" className="shadow-[0_0_8px_#fff]">
          <animateMotion 
            path="M 50 60 Q 75 40 100 30" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </circle>
        <circle cx="0" cy="0" r="1.8" fill="#00A86B">
          <animateMotion 
            path="M 100 30 Q 125 40 150 60" 
            dur="2.5s" 
            repeatCount="indefinite" 
          />
        </circle>
        <circle cx="0" cy="0" r="2.2" fill="#fff">
          <animateMotion 
            path="M 150 140 Q 125 155 100 170" 
            dur="4s" 
            repeatCount="indefinite" 
          />
        </circle>
        <circle cx="0" cy="0" r="1.8" fill="#D4AF37">
          <animateMotion 
            path="M 100 30 Q 100 100 100 170" 
            dur="3.5s" 
            repeatCount="indefinite" 
          />
        </circle>
      </svg>
      
      {/* Decorative cybernetic scanning line */}
      <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00A86B]/60 to-transparent top-0 animate-[scan_3s_linear_infinite]" />

      {/* Styles for scanning animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
}

// Section 4: Why TECH6SENSE AI
export function WhyTech6SenseAI() {
  const capabilities = [
    "AI Product Engineering", "Generative & Agentic AI Systems", "AI Agents", "AI Automation", 
    "Data Intelligence", "computer vision", "NLP", "AI governance", "blockchain", "IoT", 
    "and AR/VR", "Web & App Development", "Emerging Technologies — 25+ capabilities at your command."
  ];

  return (
    <section className="pt-20 md:pt-28 pb-0 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: High-Tech Global Machine Infrastructure Interactive Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl border border-slate-200/80 shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] overflow-hidden group">
              <GlobalInfraVisual />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1746D2]/80 backdrop-blur-md border border-white/20 text-white font-display text-sm font-extrabold uppercase tracking-wider shadow-md">
                  GLOBAL MACHINE INFRASTRUCTURE
                </span>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-7">
            <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
              WHY TECH6SENSE AI
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display leading-[1.1]">
              Backed by a Company That Builds AI for the World.
            </h2>
            <p className="text-slate-605 text-sm md:text-base mb-6 leading-relaxed font-medium">
              Visionary Founders isn't run by coaches or content creators. It's powered by TECH6SENSE AI — a global AI development company serving clients across the USA, UK, Australia, Canada, UAE, EU, India and Singapore.
            </p>
            <p className="text-slate-605 text-sm md:text-base leading-relaxed font-medium">
              Every pillar of this ecosystem — the developers, the CTOs, the project managers, the client acquisition systems — is the same infrastructure TECH6SENSE AI uses to deliver AI products and IT services worldwide. We're not teaching theory. We're plugging you into a working global machine.
            </p>
          </div>
        </div>
      </div> {/* Close max-w-[1400px] container */}

      {/* Full Width Capability Strip - Infinite Marquee Ticker */}
      <div className="w-full overflow-hidden bg-slate-950 border-y border-white/5 py-6 mt-16 select-none shadow-lg relative">
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
          <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
            TIMELINE OVERVIEW
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            Typical Durations & Cohort Benchmarks
          </h2>
        </div>

        <div className="w-full mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white mb-8">
          {/* Mobile View: Stacked Cards */}
          <div className="block md:hidden divide-y divide-slate-100">
            {timelineRows.map((row, idx) => (
              <div key={idx} className="p-4 space-y-1 bg-white">
                <div className="font-bold text-slate-900 text-xs sm:text-sm">{row.phase}</div>
                <div className="text-xs text-[#1746D2] font-semibold font-mono">{row.duration}</div>
              </div>
            ))}
          </div>

          {/* Desktop View: Table */}
          <table className="hidden md:table w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-950 text-white font-display text-sm font-extrabold uppercase tracking-wider">
                <th className="p-5">Phase</th>
                <th className="p-5">Typical Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-xs md:text-sm text-slate-700">
              {timelineRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-5 font-bold text-slate-900">{row.phase}</td>
                  <td className="p-5 text-slate-600 font-semibold">{row.duration}</td>
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
          <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
            Ecosystem Structure & Your Investment
          </span>
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
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-950 text-white font-display text-sm font-extrabold uppercase tracking-wider">
                <th className="p-5 w-1/4">Feature / Resources</th>
                <th className="p-5 w-3/8">NATIONAL (Launch & Dominate Your Home Market)</th>
                <th className="p-5 w-3/8 bg-[#0d162a]/40 border-l border-white/10">GLOBAL (Build a Company That Operates Globally)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-xs md:text-sm text-slate-700">
              {features.map((feat, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-5 font-bold text-slate-900">{feat.title}</td>
                  <td className="p-5 text-slate-500 leading-relaxed">{feat.local}</td>
                  <td className="p-5 bg-[#1746D2]/10/20 text-slate-900 font-semibold border-l border-[#1746D2]/20/50 leading-relaxed">{feat.global}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
          {features.map((feat, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 text-left flex justify-between items-center bg-slate-50/50 focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-xs md:text-sm">{feat.title}</span>
                <span className={`text-[#1746D2] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-80 border-t border-slate-100 p-5' : 'max-h-0'}`}>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">National Track</span>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{feat.local}</p>
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold text-[#1746D2] uppercase tracking-widest mb-1">Global Track</span>
                    <p className="text-xs text-slate-900 font-semibold leading-relaxed">{feat.global}</p>
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

// Section 7: Founder Selection Criteria
export function FounderSelectionCriteria() {
  const criteria = [
    { title: 'Market Problem', desc: 'A clearly defined problem they\'re solving, in a market with real paying demand' },
    { title: 'Founder Dedication', desc: 'Willingness to commit meaningfully to building the company, not just funding it' },
    { title: 'Realistic Expectations', desc: 'Realistic expectations about timelines and the work involved on their side' },
    { title: 'International Ambition', desc: 'For Global tier specifically: a genuine international ambition, not just interest in the label' }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-4 block">
            WHO WE'RE LOOKING FOR
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            Candidate Requirements for Cohort Selection
          </h2>
          <p className="text-slate-655 text-sm md:text-base font-semibold">
            The program is highly selective by design — not every applicant is accepted. We prioritize founders who show:
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

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-[#1746D2] hover:bg-[#1233A0] px-8 py-4 text-sm font-bold tracking-widest text-white shadow-md transition-all uppercase"
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
