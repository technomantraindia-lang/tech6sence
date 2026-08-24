import React from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function ApplicationProcess() {
  const stages = [
    {
      num: "I",
      title: "Credential Submission",
      desc: "Submit a comprehensive dossier detailing your track record, asset portfolio, or executive achievements.",
      icon: (
        <svg className="w-5 h-5 text-[#00A86B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      num: "II",
      title: "Syndicate Review",
      desc: "Our advisory committee conducts deep due diligence to verify your operational history and global standing.",
      icon: (
        <svg className="w-5 h-5 text-[#00A86B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      num: "III",
      title: "The Confidential Interview",
      desc: "Approved candidates are invited to a closed-door alignment interview with senior syndicate members to ensure mutual synergy.",
      icon: (
        <svg className="w-5 h-5 text-[#00A86B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      num: "IV",
      title: "The Vault Unlocked",
      desc: "Upon induction, you are granted immediate access to the global directory, private communication arrays, and the sovereign deal room.",
      icon: (
        <svg className="w-5 h-5 text-[#00A86B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE INDUCTION PROTOCOL
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            The Induction Protocol
          </h2>

          <div className="text-lg sm:text-xl font-extrabold text-[#00A86B] font-display uppercase tracking-wide">
            We do not accept applications. We review dossiers.
          </div>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            To protect the integrity and exclusivity of the syndicate, entry is governed by a ruthless, four-stage vetting protocol.
          </p>
        </div>

        {/* 4 STAGES CONNECTED TIMELINE PROCESS */}
        <div className="relative pt-4">
          
          {/* Progress Connector Line (Desktop Only - Centered on 48px nodes at 16px top padding) */}
          <div className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-[2px] bg-slate-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stages.map((stage, idx) => (
              <div key={idx} onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="flex flex-col items-center text-center group">
                
                {/* Circular Node Icon */}
                <div onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 group-hover:border-[#00A86B] group-hover:scale-110 transition-all duration-300 shadow-sm bg-white z-10">
                  {stage.icon}
                </div>

                {/* Stage Tag */}
                <span className="font-mono text-xs font-bold text-[#00A86B] uppercase tracking-widest mb-2">
                  STAGE {stage.num}
                </span>

                {/* Title */}
                <h3 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00A86B] transition-colors font-display">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal max-w-[260px] mx-auto">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
