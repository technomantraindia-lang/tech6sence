import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AIProductOpportunitySection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const topHighlights = [
    { title: "Proven AI Hardware Designs", icon: "⚡", tag: "HARDWARE" },
    { title: "Manufacturing & QA", icon: "⚙️", tag: "PRODUCTION" },
    { title: "Software Platforms & Apps", icon: "🧠", tag: "SOFTWARE" },
    { title: "Business Setup & Support", icon: "💼", tag: "OPERATIONS" },
    { title: "Marketing & Distribution", icon: "🚀", tag: "GLOBAL GO-TO-MARKET" }
  ];

  const whatWeProvide = [
    { title: "Product Manufacturing & Quality Assurance", sub: "ISO-certified precision hardware production & testing" },
    { title: "White-Label & Co-Branding Options", sub: "Your logo, custom packaging, and custom firmwares" },
    { title: "Technical Support & Updates", sub: "24/7 OTA cloud software updates and system patches" },
    { title: "Marketing Materials & Brand Assets", sub: "High-res renders, pitch decks, and digital launch kits" },
    { title: "Distribution & Logistics Support", sub: "Global fulfillment and cross-border customs handling" },
    { title: "After-Sales Service Infrastructure", sub: "Warranty support, repair pipelines, and customer care" },
    { title: "Ongoing R&D & Product Improvement", sub: "Next-gen hardware iterations delivered to your roadmap" }
  ];

  const idealFor = [
    { label: "Technology Entrepreneurs & Startups", desc: "Launch an AI hardware company without multi-million R&D capital." },
    { label: "Existing Businesses Expanding into AI", desc: "Integrate proprietary AI products into your existing portfolio." },
    { label: "Regional Distributors & Resellers", desc: "Secure exclusive territorial distribution rights for AI hardware." },
    { label: "Healthcare & Wellness Brands", desc: "Offer branded AI smart rings, glasses, and health trackers." },
    { label: "Corporate Wellness Programs", desc: "Deploy turnkey AI health monitoring products for enterprise clients." },
    { label: "Educational Institutions", desc: "Empower campuses and research hubs with custom AI hardware." }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden bg-[#03060f]">
      {/* Background Decorative Radial Flares */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#1746D2]/12 via-[#00A86B]/10 to-transparent blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/8 blur-[140px]" />

      {/* Cybernetic Subtle Background Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="font-mono text-[0.72rem] font-bold text-[#D4AF37] tracking-[0.25em] uppercase">
              AI PRODUCT BUSINESS OPPORTUNITY
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.1] font-extrabold text-white mb-6 tracking-tight">
            Start Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#D4AF37]">AI Product Business</span>
          </h2>

          <div className="inline-block px-6 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
            <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-[#00A86B] tracking-wide">
              Complete Ecosystem. Your Brand. Our Technology.
            </p>
          </div>

          <p className="font-body text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            We provide everything you need to launch, scale, and own your white-label AI hardware and deep-tech company — from R&amp;D and manufacturing to software, marketing, and global fulfillment.
          </p>
        </div>

        {/* Top 5 Pillars Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {topHighlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00A86B]/60 transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,168,107,0.15)]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">{item.icon}</span>
                <span className="font-mono text-[0.55rem] font-bold text-slate-400 tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase">
                  {item.tag}
                </span>
              </div>
              <h4 className="font-display text-sm font-bold text-slate-100 group-hover:text-[#00A86B] transition-colors leading-snug">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Main Bento Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: What We Provide (7 Columns) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00A86B]/10 rounded-bl-full blur-3xl pointer-events-none" />
            
            <div>
              {/* Card Title Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A86B]/15 border border-[#00A86B]/40 text-[#00A86B] shadow-[0_0_15px_rgba(0,168,107,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-white tracking-tight">What We Provide</h3>
                    <p className="font-body text-xs font-semibold text-[#00A86B]">Turnkey AI Hardware &amp; Operational Infrastructure</p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A86B]/10 border border-[#00A86B]/30 font-mono text-[0.65rem] font-bold text-[#00A86B] uppercase tracking-wider">
                  ✦ 7 CORE CAPABILITIES
                </span>
              </div>

              {/* List items */}
              <div className="space-y-4">
                {whatWeProvide.map((item, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="group flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00A86B]/40 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#00A86B]/20 text-[#00A86B] border border-[#00A86B]/40 font-bold text-xs mt-0.5 group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-display text-sm sm:text-base font-bold text-slate-100 group-hover:text-[#00A86B] transition-colors leading-tight">
                        {item.title}
                      </h5>
                      <p className="font-body text-xs text-slate-400 mt-1 leading-normal font-medium">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Accent Footer inside Left Card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/20 -mx-8 -mb-8 p-6 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#00A86B] animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Global Manufacturing &amp; Quality Pipelines Ready
                </span>
              </div>
              <span className="font-body text-xs text-[#00A86B] font-bold">
                100% White-Label Guaranteed
              </span>
            </div>

          </div>

          {/* Right Column: Ideal For (5 Columns) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#1746D2]/10 rounded-bl-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Title Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1746D2]/15 border border-[#1746D2]/40 text-[#1746D2] shadow-[0_0_15px_rgba(23,70,210,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M6 18.719a5.971 5.971 0 01.941-3.197m0 0A5.995 5.995 0 0112 12.75a5.995 5.995 0 015.058 2.772M6 18.719l-.001-.031c0-.225.012-.447.037-.666A11.944 11.944 0 0112 15c2.17 0 4.207.576 5.963 1.584M12 12.75a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-white tracking-tight">Ideal For</h3>
                    <p className="font-body text-xs font-semibold text-[#D4AF37]">Target Partners &amp; Operators</p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 font-mono text-[0.65rem] font-bold text-[#D4AF37] uppercase tracking-wider">
                  ✦ OPERATOR PROFILE
                </span>
              </div>

              {/* Target Audience List */}
              <div className="space-y-4">
                {idealFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/50 hover:bg-white/[0.05] transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 font-bold text-xs mt-0.5 group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <div>
                      <h5 className="font-display text-sm font-bold text-slate-100 group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {item.label}
                      </h5>
                      <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout inside Right Card */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#1746D2]/15 to-[#00A86B]/15 border border-white/10 text-center">
              <p className="font-display text-xs font-bold text-slate-200 uppercase tracking-wide">
                No Prior Hardware Manufacturing Experience Required
              </p>
            </div>

          </div>

        </div>

        {/* Global CTA Section */}
        <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#03060f] via-[#091530] to-[#03060f] border border-[#D4AF37]/30 shadow-[0_20px_60px_rgba(212,175,55,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A86B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1746D2]/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Launch Your Proprietary AI Product Brand?
          </h3>
          <p className="font-body text-slate-400 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
            Partner with TECH6SENSE AI to turn hardware concepts into global market-leading technology assets.
          </p>

          <Link
            to="/deep-tech-products"
            className="group relative inline-flex items-center gap-3 px-9 py-4.5 rounded-full bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#D4AF37] text-white font-display font-bold text-sm sm:text-base tracking-wider shadow-[0_10px_35px_rgba(23,70,210,0.4)] hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Explore AI Product Business Opportunity</span>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1.5" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
