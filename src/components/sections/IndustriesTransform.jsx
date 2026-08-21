import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const INDUSTRIES_DATA = [
  {
    industry: 'Financial Services & Capital Markets',
    positioning: 'Risk models, fraud detection, and decision systems built to withstand regulatory scrutiny.',
    slug: 'financial-services'
  },
  {
    industry: 'Healthcare & Life Sciences',
    positioning: 'Clinical-grade intelligence engineered under regulated-device discipline.',
    slug: 'healthcare'
  },
  {
    industry: 'Manufacturing & Industrial',
    positioning: 'Predictive operations, quality vision systems, and autonomous process control.',
    slug: 'manufacturing'
  },
  {
    industry: 'Retail & Commerce',
    positioning: 'Demand sensing, personalisation, and pricing intelligence at transaction speed.',
    slug: 'retail'
  },
  {
    industry: 'Logistics & Supply Chain',
    positioning: 'Route, inventory, and disruption forecasting across multi-country networks.',
    slug: 'logistics'
  },
  {
    industry: 'Real Estate & PropTech',
    positioning: 'Asset intelligence, tenant experience systems, and portfolio-level forecasting.',
    slug: 'real-estate'
  },
  {
    industry: 'Energy & Utilities',
    positioning: 'Grid optimisation, consumption forecasting, and asset-failure prediction.',
    slug: 'energy'
  },
  {
    industry: 'Public Sector & Regulated Bodies',
    positioning: 'Auditable, explainable systems built for institutional accountability.',
    slug: 'public-sector'
  },
];

export default function IndustriesTransform() {
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
      id="industries"
      className="relative w-full py-20 md:py-28 overflow-hidden bg-white border-t border-slate-100"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Header (Clean, Stark Typography) */}
        <div 
          className={`flex flex-col items-start max-w-4xl mb-16 md:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-gradient-to-r from-[#1746D2] to-[#00A86B]" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-blue-600">
              DOMAIN DEPTH
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.12] font-extrabold text-slate-900 tracking-tight">
            We work where the stakes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2]">
              justify the engineering.
            </span>
          </h2>
        </div>

        {/* 2-Column Minimalist List Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {INDUSTRIES_DATA.map((row, idx) => (
            <div 
              key={idx} 
              className="group flex gap-6 pb-6 border-b border-slate-100 hover:border-slate-200 transition-colors duration-300"
            >
              {/* Monospace Index Number */}
              <span className="font-display text-sm font-extrabold text-[#1746D2] tracking-wider pt-1 shrink-0 select-none">
                0{idx + 1}.
              </span>
              
              <div className="flex flex-col gap-2.5">
                <h4 className="font-display text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#1746D2] transition-colors duration-300">
                  {row.industry}
                </h4>
                <p className="font-body text-slate-500 text-sm md:text-[0.95rem] leading-relaxed">
                  {row.positioning}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clean, Editorial Link CTA */}
        <div 
          className={`mt-16 flex justify-start transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/industries"
            className="group inline-flex items-center gap-2.5 font-display text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            See in details how Tech6Sense AI impact on different industries
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
