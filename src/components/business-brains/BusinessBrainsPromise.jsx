import React, { useRef } from 'react';

export default function BusinessBrainsPromise() {
  const scrollRef = useRef(null);

  const promiseItems = [
    { title: "Strategic Relationships", desc: "Direct access to vetted global decision-makers.", icon: "💎" },
    { title: "Trusted Conversations", desc: "Encrypted, confidential dialogues under Chatham House rules.", icon: "🔐" },
    { title: "Global Partnerships", desc: "Cross-border alliances for enterprise growth.", icon: "🌐" },
    { title: "Cross-Border Collaboration", desc: "Seamless multi-region execution networks.", icon: "🔄" },
    { title: "Executive Learning", desc: "Masterclasses by industry titans and AI architects.", icon: "🎓" },
    { title: "Investment Opportunities", desc: "Vetted deal flow and co-investment syndicates.", icon: "📈" },
    { title: "Leadership Development", desc: "Advisory and board placement pathways.", icon: "🏛️" },
    { title: "Innovation Exchange", desc: "Deep-tech transfer and enterprise AI models.", icon: "⚡" },
    { title: "International Business Expansion", desc: "Accelerated entry into global markets.", icon: "🗺️" },
    { title: "Long-Term Impact", desc: "Sustainable wealth generation and legacy creation.", icon: "👑" }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#000110] text-white py-24 md:py-32 border-b border-slate-800/80 overflow-hidden">
      
      {/* Constellation Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-emerald-950/20 via-violet-950/20 to-blue-950/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Block & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <span 
              className="font-display text-sm font-extrabold text-emerald-400 uppercase tracking-[0.25em] mb-3 block"
            >
              THE PROMISE
            </span>

            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight"
            >
              THE BUSINESS BRAINS PROMISE
            </h2>

            <p 
              className="text-slate-300 text-base md:text-lg leading-relaxed font-normal"
            >
              Every interaction, gathering, and initiative within BUSINESS BRAINS is deliberately designed to deliver extraordinary strategic value.
            </p>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/15 hover:border-emerald-400 hover:bg-emerald-500/10 text-white transition-all flex items-center justify-center shadow-md group"
              aria-label="Previous Promise Value"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/15 hover:border-emerald-400 hover:bg-emerald-500/10 text-white transition-all flex items-center justify-center shadow-md group"
              aria-label="Next Promise Value"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* HORIZONTAL CAROUSEL SLIDER */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 -mx-6 px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {promiseItems.map((item, idx) => (
            <div 
              key={idx}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] md:w-[380px] p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/60 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Value Tag & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-display text-sm font-extrabold text-emerald-300 uppercase">
                      VALUE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-slate-300 text-sm leading-relaxed font-normal"
                >
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>Strategic Guarantee</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
