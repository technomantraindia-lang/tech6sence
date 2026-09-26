import React from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function CommunityActivities() {
  const activities = [
    {
      id: 1,
      title: "Monthly Roundtable Discussions",
      desc: "Intimate sessions focused on specific topics, challenges, or opportunities. Limited to 15-20 participants to ensure meaningful dialogue.",
      label: "Recent Topics:",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]",
      items: [
        "Generative AI business models and monetization",
        "Regulatory landscape for AI in healthcare",
        "Building AI products for global markets",
        "Fundraising in the current environment"
      ],
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#1746D2] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Quarterly Investor Showcases",
      desc: "Curated pitch events where selected startups present to an audience of active investors, followed by networking and one-on-one meetings.",
      label: "Format:",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.25)]",
      items: [
        "5-6 startups pitch (10 minutes each)",
        "Expert panel feedback",
        "Structured networking sessions",
        "Follow-up meeting facilitation"
      ],
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#00A86B] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Annual Business Brains Summit",
      desc: "Our flagship event bringing together the entire community for two days of keynotes, workshops, networking, and collaboration.",
      label: "Summit Highlights:",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]",
      items: [
        "International speakers and thought leaders",
        "Technology demonstrations",
        "Investment trends and forecasts",
        "Award ceremonies",
        "Gala networking dinner"
      ],
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#1746D2] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Expert Workshop Series",
      desc: "Deep-dive learning sessions on critical topics for building and scaling AI companies.",
      label: "Workshop Categories:",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.25)]",
      items: [
        "Technical (AI architecture, scaling ML systems)",
        "Business (pricing strategies, sales processes)",
        "Legal (IP protection, contract negotiation)",
        "Financial (cap tables, valuation, term sheets)"
      ],
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#00A86B] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Private Online Platform",
      desc: "Members-only digital community for continuous engagement between events.",
      label: "Platform Features:",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]",
      items: [
        "Discussion forums by topic",
        "Deal room for investment opportunities",
        "Resource library (templates, guides, research)",
        "Member directory with expertise tags",
        "Event calendar and registration",
        "Direct messaging and introductions"
      ],
      icon: (
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-6 h-6 text-[#1746D2] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/50 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* MAIN SECTION TITLE & INTRO */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              COMMUNITY ACTIVITIES
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            How Members Connect
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Regular programming designed to foster meaningful relationships and drive real outcomes.
          </p>
        </div>

        {/* 5 COMMUNITY ACTIVITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {activities.map((act) => (
            <div 
              key={act.id}
              className={`p-8 rounded-3xl bg-white border border-slate-200/90 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group ${act.restShadow} ${act.hoverBg}`}
              {...touchHoverProps}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-white/20 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-105 transition-all">
                  {act.icon}
                </div>

                <h3 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors font-display">
                  {act.title}
                </h3>

                <p onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-slate-600 group-hover:text-white text-sm leading-relaxed mb-6 font-normal transition-colors text-justify md:text-left">
                  {act.desc}
                </p>

                <div onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="space-y-3 pt-4 border-t border-slate-100 group-hover:border-white/20 transition-colors">
                  <div onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-xs font-mono font-bold text-[#1746D2] group-hover:text-white uppercase tracking-widest transition-colors">
                    {act.label}
                  </div>
                  <ul onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="space-y-2 text-xs md:text-sm text-slate-700 group-hover:text-white font-medium transition-colors">
                    {act.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-[#00A86B] group-hover:text-white font-bold text-xs mt-0.5 transition-colors">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
