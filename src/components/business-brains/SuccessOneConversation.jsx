import React from 'react';

export default function SuccessOneConversation() {
  const opportunities = [
    "Your next client",
    "Your next investor",
    "Your next co-founder",
    "Your next technology partner",
    "Your next international expansion",
    "Your next acquisition",
    "Your next million-dollar opportunity"
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 md:py-32 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        
        <span 
          className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-[0.25em] mb-4 block"
        >
          ONE CONVERSATION
        </span>

        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-4"
        >
          Success Starts With One Conversation
        </h2>

        <p 
          className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12 font-normal"
        >
          The next conversation inside BUSINESS BRAINS could lead to:
        </p>

        {/* 7 Opportunity Chips */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
          {opportunities.map((opp, idx) => (
            <div 
              key={idx}
              className="px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-cyan-500/40 text-slate-800 text-sm font-semibold transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <span className="text-cyan-600 mr-2 font-mono">✦</span>
              {opp}
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 max-w-xl mx-auto shadow-sm">
          <p className="text-base md:text-lg font-bold font-mono text-cyan-900">
            One introduction can change everything.
          </p>
        </div>

      </div>
    </section>
  );
}
