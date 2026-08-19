import React, { useRef } from 'react';

export default function WhatHappensInside() {
  const scrollRef = useRef(null);

  const items = [
    { 
      title: "Weekly Networking Sessions", 
      desc: "Curated online and offline member connections across global chapters.",
      icon: "🤝"
    },
    { 
      title: "Founder Roundtables", 
      desc: "Peer strategy and problem-solving sessions for scaling founders.",
      icon: "💡"
    },
    { 
      title: "AI Innovation Sessions", 
      desc: "Live demonstrations of cutting-edge artificial intelligence architectures.",
      icon: "⚡"
    },
    { 
      title: "Investor Connect", 
      desc: "Closed-door pitch evaluations and co-investment panel discussions.",
      icon: "💼"
    },
    { 
      title: "Global Business Discussions", 
      desc: "Strategic forums focused on cross-border expansion and trade.",
      icon: "🌐"
    },
    { 
      title: "Business Growth Workshops", 
      desc: "Masterclasses on operational scaling, GTM strategy, and capital efficiency.",
      icon: "📈"
    },
    { 
      title: "Leadership Conversations", 
      desc: "Intimate dialogues with Fortune 500 executives and industry pioneers.",
      icon: "👑"
    },
    { 
      title: "Collaboration Opportunities", 
      desc: "Strategic matchmaking for joint ventures and enterprise partnerships.",
      icon: "🚀"
    },
    { 
      title: "Business Introductions", 
      desc: "Direct warm introductions facilitated through our network concierge.",
      icon: "✉️"
    },
    { 
      title: "Private Member Discussions", 
      desc: "Encrypted peer advisory channels and continuous group messaging.",
      icon: "🔒"
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Block & Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span 
              className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-[0.25em] mb-3 block"
            >
              INSIDE THE CIRCLE
            </span>

            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight"
            >
              What Happens Inside Business Brains
            </h2>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 transition-all flex items-center justify-center shadow-sm group"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 transition-all flex items-center justify-center shadow-sm group"
              aria-label="Next Slide"
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
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] md:w-[380px] p-7 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    ACTIVITY {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold text-slate-950 mb-3 group-hover:text-emerald-600 transition-colors"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-slate-600 text-sm leading-relaxed font-normal"
                >
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-emerald-600 transition-colors">
                <span>Circle Activity</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
