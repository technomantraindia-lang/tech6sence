import React from 'react';

export default function ApplicationProcess() {
  const stages = [
    {
      num: "I",
      title: "Credential Submission",
      desc: "Candidate presents full personal details, professional profile, and case for consideration to the syndicate.",
      icon: (
        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      num: "II",
      title: "Syndicate Review",
      desc: "Candidate credentials undergo personal evaluation by the syndicate admission committee to verify fit and track record.",
      icon: (
        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      num: "III",
      title: "The Confidential Interview",
      desc: "A 1-on-1 interview with a syndicate board member to discuss strategic objectives, leadership values, and contribution.",
      icon: (
        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      num: "IV",
      title: "The Vault Unlocked",
      desc: "Formal induction into BUSINESS BRAINS, encrypted platform onboarding, and global syndicate access unlocked.",
      icon: (
        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white text-slate-900 py-24 md:py-32 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-[0.25em] mb-4 block" 
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            THE INDUCTION PROTOCOL
          </span>
          <h2 
            className="text-3xl md:text-5xl font-extrabold text-slate-950 mb-3" 
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A Private Four-Stage Review
          </h2>
          <p className="text-cyan-700 font-mono text-sm font-semibold">
            We do not accept applications. We review dossiers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Progress Connector line (Desktop only) */}
          <div className="hidden lg:block absolute top-[1.5rem] left-[12%] right-[12%] h-[2px] bg-slate-200 z-0" />

          {stages.map((stage, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              
              <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 group-hover:border-cyan-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                {stage.icon}
              </div>
              
              <span className="font-mono text-xs font-bold text-cyan-600 mb-2 uppercase tracking-wider">
                STAGE {stage.num}
              </span>
              
              <h3 
                className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors" 
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stage.title}
              </h3>
              
              <p 
                className="text-sm text-slate-600 leading-relaxed max-w-[220px] font-normal" 
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stage.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
