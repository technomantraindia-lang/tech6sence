import React from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function SyndicatePrivileges() {
  const privileges = [
    {
      title: "The Sovereign Deal Room",
      desc: "A hyper-secure, confidential marketplace for syndications, mergers, and off-market asset acquisitions.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]",
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#1746D2] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "TECH6SENSE AI Supremacy",
      desc: "Direct, priority integration with world-class AI and IT infrastructure to automate, scale, and future-proof your enterprises.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.25)]",
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#00A86B] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "The Inner Circle Summits",
      desc: "Invitations to private, high-security masterminds and retreats in Dubai, London, New York, and Singapore.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]",
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#1746D2] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "The Intelligence Briefs",
      desc: "Proprietary market forecasts, risk analyses, and technological roadmaps curated by the top 1% of global industry leaders.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.25)]",
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#00A86B] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="privilege" className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden scroll-mt-32">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              SYNDICATE PRIVILEGES
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Syndicate Privileges
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Membership grants you access to an operational and strategic arsenal designed to compound your time, capital, and influence.
          </p>
        </div>

        {/* 4 Privileges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {privileges.map((priv, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl bg-white border border-slate-200/90 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group ${priv.restShadow} ${priv.hoverBg}`}
              {...touchHoverProps}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-white/20 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-all">
                  {priv.icon}
                </div>
                <div onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 group-hover:bg-white/20 border border-slate-200 text-[11px] font-mono font-bold text-slate-800 group-hover:text-white transition-colors">
                  <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-3.5 h-3.5 text-[#1746D2] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Private Syndicate Privilege</span>
                </div>
              </div>

              <div>
                <h3 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors font-display">
                  {priv.title}
                </h3>

                <p onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-slate-600 group-hover:text-white text-sm leading-relaxed font-normal text-justify md:text-left transition-colors">
                  {priv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
