import React from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function SuccessOneConversation() {
  const opportunities = [
    { title: "Your next client", restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]", hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2]" },
    { title: "Your next investor", restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]", hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B]" },
    { title: "Your next co-founder", restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]", hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2]" },
    { title: "Your next technology partner", restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]", hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B]" },
    { title: "Your next international expansion", restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]", hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2]" },
    { title: "Your next acquisition", restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]", hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B]" },
    { title: "Your next million-dollar opportunity", restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]", hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2]" }
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/50 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              ONE INTRODUCTION
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Success Starts With One Conversation
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            The next conversation inside BUSINESS BRAINS could lead to:
          </p>
        </div>

        {/* 7 Opportunity Cards */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {opportunities.map((opp, idx) => (
            <div 
              key={idx}
              className={`px-7 py-4 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-sm md:text-base font-bold transition-all duration-300 group flex items-center gap-3 hover:-translate-y-1 ${opp.restShadow} ${opp.hoverBg}`}
              {...touchHoverProps}
            >
              <span className="text-[#00A86B] group-hover:text-white font-bold text-lg transition-colors">•</span>
              <span className="group-hover:text-white transition-colors">{opp.title}</span>
            </div>
          ))}
        </div>

        {/* Concluding Highlight Badge */}
        <div className="text-center pt-4">
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1746D2] to-[#00A86B] text-white font-display text-lg sm:text-xl font-extrabold uppercase tracking-wide shadow-2xl hover:scale-105 transition-transform">
            One introduction can change everything.
          </div>
        </div>

      </div>
    </section>
  );
}
