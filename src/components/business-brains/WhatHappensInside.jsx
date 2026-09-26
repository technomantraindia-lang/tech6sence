import React, { useState } from 'react';

export default function WhatHappensInside() {
  const [row1Active, setRow1Active] = useState(0);
  const [row2Active, setRow2Active] = useState(5);

  const items = [
    { 
      num: "01",
      title: "Weekly Networking Sessions", 
      desc: "Curated online and offline member connections across global chapters.",
      icon: "🤝"
    },
    { 
      num: "02",
      title: "Founder Roundtables", 
      desc: "Peer strategy and problem-solving sessions for scaling founders.",
      icon: "💡"
    },
    { 
      num: "03",
      title: "AI Innovation Sessions", 
      desc: "Live demonstrations of cutting-edge artificial intelligence architectures.",
      icon: "⚡"
    },
    { 
      num: "04",
      title: "Investor Connect", 
      desc: "Closed-door pitch evaluations and co-investment panel discussions.",
      icon: "💼"
    },
    { 
      num: "05",
      title: "Global Business Discussions", 
      desc: "Strategic forums focused on cross-border expansion and trade.",
      icon: "🌐"
    },
    { 
      num: "06",
      title: "Business Growth Workshops", 
      desc: "Masterclasses on operational scaling, GTM strategy, and capital efficiency.",
      icon: "📈"
    },
    { 
      num: "07",
      title: "Leadership Conversations", 
      desc: "Intimate dialogues with Fortune 500 executives and industry pioneers.",
      icon: "👑"
    },
    { 
      num: "08",
      title: "Collaboration Opportunities", 
      desc: "Strategic matchmaking for joint ventures and enterprise partnerships.",
      icon: "🚀"
    },
    { 
      num: "09",
      title: "Business Introductions", 
      desc: "Direct warm introductions facilitated through our network concierge.",
      icon: "✉️"
    },
    { 
      num: "10",
      title: "Private Member Discussions", 
      desc: "Encrypted peer advisory channels and continuous group messaging.",
      icon: "🔒"
    }
  ];

  const row1 = items.slice(0, 5);
  const row2 = items.slice(5, 10);

  const renderVerticalTabCard = (item, idx, activeIdx, setActiveFn) => {
    const isActive = activeIdx === idx;
    const isRow1 = parseInt(item.num, 10) <= 5;

    return (
      <div
        key={idx}
        onMouseEnter={() => setActiveFn(idx)}
        onClick={() => setActiveFn(idx)}
        className={`relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden rounded-2xl ${
          isActive 
            ? isRow1
              ? 'flex-1 min-w-[320px] sm:min-w-[400px] bg-[#00A86B] text-white border-2 border-[#00A86B] shadow-xl p-6'
              : 'flex-1 min-w-[320px] sm:min-w-[400px] bg-[#1746D2] text-white border-2 border-[#1746D2] shadow-xl p-6'
            : 'w-16 sm:w-20 shrink-0 bg-white border border-slate-200/90 shadow-xs hover:border-[#1746D2]/60 hover:bg-blue-50/30 p-3'
        }`}
      >
        {/* Active Expanded Content */}
        <div className={`transition-all duration-500 ease-out h-full flex flex-col justify-between ${
          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none absolute inset-0 p-6'
        }`}>
          <div className="flex flex-col h-full justify-between space-y-4">
            <div>


              <h3 className="font-display text-lg sm:text-xl font-extrabold text-white leading-snug mb-3">
                {item.title}
              </h3>

              <p className="text-white/95 text-xs sm:text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white/80 font-mono">
              <span>Business Brains Circle</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Collapsed Vertical Bar */}
        <div className={`transition-all duration-300 ease-out h-full flex flex-col items-center justify-between ${
          !isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none absolute inset-0 p-3'
        }`}>
          <span className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-extrabold shrink-0 ${
            isRow1 ? 'bg-[#00A86B]/10 text-[#00A86B]' : 'bg-[#1746D2]/10 text-[#1746D2]'
          }`}>
            {item.num}
          </span>
          
          <div className="flex-1 flex items-center justify-center my-2 overflow-hidden py-1">
            <span className="font-display font-extrabold text-slate-800 text-[10px] sm:text-[11px] tracking-tight uppercase whitespace-nowrap rotate-180 [writing-mode:vertical-lr]">
              {item.title}
            </span>
          </div>

          <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
            isRow1 ? 'bg-[#00A86B]/10 text-[#00A86B]' : 'bg-[#1746D2]/10 text-[#1746D2]'
          }`}>
            +
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-[#FAF9FF] text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              INSIDE THE CIRCLE
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-display leading-tight">
            What Happens Inside Business Brains
          </h2>
        </div>

        {/* Desktop View: 2 Rows of Vertical Accordion Bars */}
        <div className="hidden lg:block space-y-6">
          {/* Row 1: Activities 01 - 05 */}
          <div className="flex flex-row h-[340px] gap-3 w-full max-w-[1400px] mx-auto p-3 bg-slate-100/70 rounded-3xl border border-slate-200/80 shadow-inner overflow-hidden">
            {row1.map((item, idx) => renderVerticalTabCard(item, idx, row1Active, setRow1Active))}
          </div>

          {/* Row 2: Activities 06 - 10 */}
          <div className="flex flex-row h-[340px] gap-3 w-full max-w-[1400px] mx-auto p-3 bg-slate-100/70 rounded-3xl border border-slate-200/80 shadow-inner overflow-hidden">
            {row2.map((item, idx) => renderVerticalTabCard(item, idx + 5, row2Active, setRow2Active))}
          </div>
        </div>

        {/* Mobile View: Vertical Accordion List */}
        <div className="block lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, idx) => {
            const isActive = row1Active === idx;
            const isGreen = parseInt(item.num, 10) <= 5;
            return (
              <div
                key={idx}
                onClick={() => setRow1Active(isActive ? null : idx)}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isActive 
                    ? isGreen 
                      ? 'bg-[#00A86B] text-white border-2 border-[#00A86B] shadow-xl' 
                      : 'bg-[#1746D2] text-white border-2 border-[#1746D2] shadow-xl' 
                    : 'bg-white border-slate-200/90 shadow-xs'
                }`}
              >
                <div className="p-5 flex items-center justify-between gap-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-extrabold ${
                      isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-[#1746D2]'
                    }`}>
                      {item.num}
                    </span>
                    <h3 className={`font-display text-sm font-extrabold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-[#1746D2]'}`}>
                    {isActive ? '−' : '+'}
                  </span>
                </div>

                {isActive && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/20">
                    <p className="text-white/95 text-xs font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
