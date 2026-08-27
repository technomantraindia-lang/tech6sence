import React, { useState } from 'react';

export default function BusinessBrainsPromise() {
  const [row1Active, setRow1Active] = useState(0);
  const [row2Active, setRow2Active] = useState(5);

  const promiseItems = [
    { num: "01", title: "Strategic Relationships", desc: "Direct access to vetted global decision-makers.", icon: "💎" },
    { num: "02", title: "Trusted Conversations", desc: "Encrypted, confidential dialogues under Chatham House rules.", icon: "🔐" },
    { num: "03", title: "Global Partnerships", desc: "Cross-border alliances for enterprise growth.", icon: "🌐" },
    { num: "04", title: "Cross-Border Collaboration", desc: "Seamless multi-region execution networks.", icon: "🔄" },
    { num: "05", title: "Executive Learning", desc: "Masterclasses by industry titans and AI architects.", icon: "🎓" },
    { num: "06", title: "Investment Opportunities", desc: "Vetted deal flow and co-investment syndicates.", icon: "📈" },
    { num: "07", title: "Leadership Development", desc: "Advisory and board placement pathways.", icon: "🏛️" },
    { num: "08", title: "Innovation Exchange", desc: "Deep-tech transfer and enterprise AI models.", icon: "⚡" },
    { num: "09", title: "International Business Expansion", desc: "Accelerated entry into global markets.", icon: "🗺️" },
    { num: "10", title: "Long-Term Impact", desc: "Sustainable wealth generation and legacy creation.", icon: "👑" }
  ];

  const row1 = promiseItems.slice(0, 5);
  const row2 = promiseItems.slice(5, 10);

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
            : 'w-16 sm:w-20 shrink-0 bg-slate-900/90 border border-slate-800 shadow-xs hover:border-[#1746D2]/60 hover:bg-slate-800 p-3'
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
              <span>Strategic Guarantee</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Collapsed Vertical Bar */}
        <div className={`transition-all duration-300 ease-out h-full flex flex-col items-center justify-between ${
          !isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none absolute inset-0 p-3'
        }`}>
          <span className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-extrabold shrink-0 ${
            isRow1 ? 'bg-[#00A86B]/20 text-[#00A86B] border border-[#00A86B]/40' : 'bg-[#1746D2]/20 text-blue-400 border border-[#1746D2]/40'
          }`}>
            {item.num}
          </span>
          
          <div className="flex-1 flex items-center justify-center my-2 overflow-hidden py-1">
            <span className="font-display font-extrabold text-slate-300 hover:text-white text-[10px] sm:text-[11px] tracking-tight uppercase whitespace-nowrap rotate-180 [writing-mode:vertical-lr] transition-colors">
              {item.title}
            </span>
          </div>

          <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
            isRow1 ? 'bg-[#00A86B]/20 text-[#00A86B]' : 'bg-[#1746D2]/20 text-blue-400'
          }`}>
            +
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-[#000110] text-white py-20 md:py-28 border-b border-slate-800/80 overflow-hidden">
      {/* Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1746D2]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00A86B]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE PROMISE
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase leading-tight">
            THE BUSINESS BRAINS PROMISE
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
            Every interaction within BUSINESS BRAINS is designed to create value through:
          </p>
        </div>

        {/* Desktop View: 2 Rows of Vertical Accordion Bars */}
        <div className="hidden lg:block space-y-6">
          {/* Row 1: Items 01 - 05 */}
          <div className="flex flex-row h-[340px] gap-3 w-full max-w-[1400px] mx-auto p-3 bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
            {row1.map((item, idx) => renderVerticalTabCard(item, idx, row1Active, setRow1Active))}
          </div>

          {/* Row 2: Items 06 - 10 */}
          <div className="flex flex-row h-[340px] gap-3 w-full max-w-[1400px] mx-auto p-3 bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
            {row2.map((item, idx) => renderVerticalTabCard(item, idx + 5, row2Active, setRow2Active))}
          </div>
        </div>

        {/* Mobile View: Vertical Accordion List */}
        <div className="block lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {promiseItems.map((item, idx) => {
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
                    : 'bg-slate-950 border-slate-800 shadow-xs'
                }`}
              >
                <div className="p-5 flex items-center justify-between gap-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-extrabold ${
                      isActive ? 'bg-slate-950 text-white' : 'bg-[#1746D2]/20 text-blue-400'
                    }`}>
                      {item.num}
                    </span>
                    <h3 className={`font-display text-sm font-extrabold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-blue-400'}`}>
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
