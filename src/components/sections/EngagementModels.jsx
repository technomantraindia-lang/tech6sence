import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { touchHoverProps } from '../../hooks/useTouchHover';

// Engagement Models data integrating PDF table content directly into cards
const MODELS = [
  {
    num: '01',
    model: 'Strategic Advisory',
    forWho: 'Boards and leadership teams defining an AI position',
    structure: 'Fixed-scope engagement, executive deliverables',
    accentColor: '#D4AF37',
    badge: 'BOARD DIRECTION',
    features: [
      'Fixed-scope advisory engagements with executive roadmap deliverables',
      'AI readiness assessments, risk governance, and regulatory alignment',
      'Technology stack evaluation and vendor-independent selection strategy',
      'Board-level briefings and executive AI leadership coaching'
    ]
  },
  {
    num: '02',
    model: 'Build Partnership',
    forWho: 'Organisations with a defined system to engineer',
    structure: 'Milestone-based, outcome-defined',
    accentColor: '#1746D2',
    badge: 'TURNKEY ENGINEERING',
    features: [
      'Milestone-based, outcome-defined delivery with full technical accountability',
      'End-to-end architecture, development, testing, and production deployment',
      'Complete IP ownership transfer upon project completion',
      'S.E.N.S.E. methodology applied across all engineering sprints'
    ]
  },
  {
    num: '03',
    model: 'Embedded Engineering',
    forWho: 'Teams needing senior capability inside their own structure',
    structure: 'Dedicated pods, monthly retainer',
    accentColor: '#00A86B',
    badge: 'DEDICATED PODS',
    features: [
      'Dedicated pods operating directly inside your existing team structure',
      'Pre-vetted, elite AI models engineers, data architects, and CTO oversight',
      'Seamless workflow integration with monthly flexible retainer scaling',
      'Continuous technical quality assurance and delivery optimization'
    ]
  },
  {
    num: '04',
    model: 'Product Co-Development',
    forWho: 'Ventures building an AI product from foundation',
    structure: 'Long-horizon partnership, structured commercially per engagement',
    accentColor: '#1746D2',
    badge: 'VENTURE BUILDING',
    features: [
      'Long-horizon venture partnership structured commercially per engagement',
      'Shared upside and co-creation of proprietary deep-tech products',
      'Direct access to Visionary Founders startup acceleration infrastructure',
      'Matchmaking pipelines through the Business Brains global investor network'
    ]
  }
];

export default function EngagementModels() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="engagement-models"
      className="relative w-full py-12 md:py-16 overflow-hidden bg-[#FAFAFA] border-t border-slate-200/80"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-[-5%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-blue-100/50 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-emerald-100/40 to-transparent blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div 
          className={`flex flex-col items-start max-w-4xl mb-14 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#1746D2] to-[#00A86B]" />
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              ENGAGEMENT MODELS
            </span>
          </div>

          {/* Section Title (H2 from PDF) */}
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] font-extrabold text-slate-900 tracking-tight mb-4">
            Four ways to start.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2]">
              One standard of delivery
            </span>
          </h2>
        </div>

        {/* Detailed 4 Model Cards Grid - Equal Size 2x2 Layout with Brand Hover Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {MODELS.map((model, index) => (
            <div
              key={model.num}
              className="group relative rounded-[2.5rem] bg-white border border-slate-200/80 p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden h-full cursor-pointer hover:-translate-y-2"
              {...touchHoverProps}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              {/* Background Color Hover Fill Overlay */}
              <div 
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                style={{ backgroundColor: model.accentColor }}
              />

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                  <span
                    className="font-mono text-[0.7rem] font-extrabold tracking-widest px-3.5 py-1.5 rounded-full border shadow-sm transition-all duration-300 group-hover:!bg-white group-hover:!text-slate-950 group-hover:!border-white group-hover:shadow-md"
                    style={{ 
                      color: model.accentColor, 
                      borderColor: model.accentColor + '50',
                      backgroundColor: model.accentColor + '15'
                    }}
                  >
                    {model.badge}
                  </span>

                  <span className="font-mono text-3xl md:text-4xl font-extrabold text-slate-200 group-hover:text-white/40 transition-colors duration-300">
                    {model.num}
                  </span>
                </div>

                {/* Model Title */}
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-white tracking-tight mb-4 transition-colors duration-300">
                  {model.model}
                </h3>

                {/* FOR & STRUCTURE Integrated Box */}
                <div className="space-y-3 mb-6 bg-slate-50/80 group-hover:bg-white/15 rounded-2xl p-5 border border-slate-100 group-hover:border-white/20 transition-all duration-300">
                  <div>
                    <span className="font-mono text-[0.68rem] font-extrabold text-slate-400 group-hover:text-white/75 uppercase tracking-wider block mb-1 transition-colors">
                      FOR:
                    </span>
                    <p className="font-body text-slate-900 group-hover:text-white text-sm md:text-base font-bold leading-snug transition-colors">
                      {model.forWho}
                    </p>
                  </div>
                  <div className="border-t border-slate-200/60 group-hover:border-white/20 pt-3 transition-colors">
                    <span className="font-mono text-[0.68rem] font-extrabold text-slate-400 group-hover:text-white/75 uppercase tracking-wider block mb-1 transition-colors">
                      STRUCTURE:
                    </span>
                    <p className="font-body text-slate-700 group-hover:text-white/95 text-sm font-semibold leading-relaxed transition-colors">
                      {model.structure}
                    </p>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <div className="flex flex-col gap-3 pt-2">
                  {model.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 mt-0.5 shrink-0 transition-colors duration-300 text-current group-hover:text-white"
                        style={{ color: model.accentColor }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-body text-xs md:text-sm text-slate-600 group-hover:text-white/95 font-medium leading-relaxed transition-colors duration-300">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button Link */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 group-hover:border-white/20 flex items-center justify-between transition-colors duration-300">
                <Link
                  to="/lets-connect"
                  className="font-display text-xs md:text-sm font-extrabold tracking-wider uppercase flex items-center gap-2.5 group-hover:gap-4 transition-all duration-300 group-hover:!text-white"
                  style={{ color: model.accentColor }}
                >
                  <span>Discuss this engagement model</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
