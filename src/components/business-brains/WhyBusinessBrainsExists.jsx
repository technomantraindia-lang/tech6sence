import React from 'react';

export default function WhyBusinessBrainsExists() {
  const themes = [
    {
      title: "Strategic Capital",
      desc: "Access to high-yield venture scaling, syndicate co-investment structures, institutional funding rounds, and sovereign capital alignment.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Market Intelligence",
      desc: "Proprietary cross-border market research, sector evolution trends, and regulatory analysis shared under strict Chatham House confidentiality.",
      icon: (
        <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Technological Supremacy",
      desc: "Deep-tech architectural validation, enterprise AI transformation frameworks, and technical model audits backed by TECH6SENSE AI.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "The Top 1% of Global Minds",
      desc: "Secure private collaboration bringing together visionaries, capital allocators, and industry titans to drive high-yield exits and international execution.",
      icon: (
        <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.055M11 20.055V18a2 2 0 012-2h2.5a2 2 0 002-2v-1.5a2.5 2.5 0 00-2.5-2.5H14" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#020617] text-white py-24 md:py-32 border-b border-slate-800/80 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span 
              className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              WHY BUSINESS BRAINS EXISTS
            </span>

            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Beyond Networking. We Are a Wealth & Innovation Engine.
            </h2>

            <div 
              className="text-slate-300 text-base md:text-lg leading-relaxed font-normal space-y-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <p>
                The era of conventional business networking is obsolete. True global dominance requires a fusion of strategic capital, unmatched market intelligence, and technological supremacy.
              </p>
              <p>
                Business Brains was established with a singular, uncompromising mandate: to unite the top 1% of global minds. We provide a secure, private ecosystem where the world's most formidable leaders collaborate to scale ventures, orchestrate high-yield exits, and deploy AI-driven strategies that redefine industries.
              </p>
            </div>
          </div>

          {/* Right Column: Four Stacked Strategic Cards */}
          <div className="lg:col-span-7 space-y-6">
            {themes.map((theme, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {theme.icon}
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {theme.title}
                    </h3>
                    <p 
                      className="text-slate-300 text-sm leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {theme.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
