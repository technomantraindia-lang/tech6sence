import React from 'react';

export default function WhatIsBusinessBrains() {
  const cohorts = [
    {
      title: "For Investors",
      highlight: "Vetted Deal Flow & Co-Investment",
      desc: "Connect directly with pre-screened AI and deep-tech startups that have validated MVPs. Skip the noise and gain access to high-potential capital deployment opportunities.",
      points: ["Warm founder introductions", "Technical due diligence reports", "Co-investment syndicate structures"]
    },
    {
      title: "For Startup Builders",
      highlight: "Capital Access & Mentorship",
      desc: "Gain the strategic backing you need. Showcase your product to active venture capital firms, refine your pitch models, and receive advice from seasoned tech operators.",
      points: ["Fundraising consultations", "Pitch auditing & mock panels", "Direct investor connections"]
    },
    {
      title: "For Industry Leaders",
      highlight: "Advisory & Board Placements",
      desc: "Lend your expertise to matching startups. Explore technical advisor roles, board of director openings, and share strategic industry insights with pioneering builders.",
      points: ["Board member matches", "Strategic advisory frameworks", "Upskilling & panel speaker opportunities"]
    }
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 md:py-28 overflow-hidden border-b border-slate-200">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glowing backdrop */}
      <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-100/60 blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block"
          >
            What is Business Brains?
          </span>
          <h2 
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950"
          >
            Three Pillars of Network Synergy
          </h2>
          <p 
            className="font-body text-slate-500 leading-relaxed mt-4 font-medium"
          >
            We operate as a persistent network that active members query for co-investment, technology consultation, and board level scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cohorts.map((coh, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-[2rem] border border-slate-200 bg-white flex flex-col justify-between shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 
                  className="font-display text-xl font-bold text-slate-900 mb-1"
                >
                  {coh.title}
                </h3>
                <span 
                  className="font-mono text-[0.65rem] font-bold text-emerald-600 tracking-wider uppercase mb-6 block"
                >
                  {coh.highlight}
                </span>
                <p 
                  className="font-body text-xs text-slate-500 leading-relaxed mb-8 font-medium"
                >
                  {coh.desc}
                </p>
              </div>
              <ul className="border-t border-slate-100 pt-6 flex flex-col gap-3">
                {coh.points.map((pt, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-2.5 text-xs text-slate-600 font-bold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
