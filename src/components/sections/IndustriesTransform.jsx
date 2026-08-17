import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const INDUSTRIES_DATA = [
  {
    industry: 'Financial Services & Capital Markets',
    positioning: 'Risk models, fraud detection, and decision systems built to withstand regulatory scrutiny.',
    accent: '#1746D2',
    slug: 'financial-services'
  },
  {
    industry: 'Healthcare & Life Sciences',
    positioning: 'Clinical-grade intelligence engineered under regulated-device discipline.',
    accent: '#00A86B',
    slug: 'healthcare'
  },
  {
    industry: 'Manufacturing & Industrial',
    positioning: 'Predictive operations, quality vision systems, and autonomous process control.',
    accent: '#D4AF37',
    slug: 'manufacturing'
  },
  {
    industry: 'Retail & Commerce',
    positioning: 'Demand sensing, personalisation, and pricing intelligence at transaction speed.',
    accent: '#1746D2',
    slug: 'retail'
  },
  {
    industry: 'Logistics & Supply Chain',
    positioning: 'Route, inventory, and disruption forecasting across multi-country networks.',
    accent: '#00A86B',
    slug: 'logistics'
  },
  {
    industry: 'Real Estate & PropTech',
    positioning: 'Asset intelligence, tenant experience systems, and portfolio-level forecasting.',
    accent: '#D4AF37',
    slug: 'real-estate'
  },
  {
    industry: 'Energy & Utilities',
    positioning: 'Grid optimisation, consumption forecasting, and asset-failure prediction.',
    accent: '#1746D2',
    slug: 'energy'
  },
  {
    industry: 'Public Sector & Regulated Bodies',
    positioning: 'Auditable, explainable systems built for institutional accountability.',
    accent: '#00A86B',
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
      className="relative w-full py-20 md:py-32 overflow-hidden bg-[#FAFAFA] border-t border-slate-200/80"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-100/50 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-emerald-100/40 to-transparent blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div 
          className={`flex flex-col items-start max-w-4xl mb-14 md:mb-18 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#1746D2] to-[#00A86B]" />
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              DOMAIN DEPTH
            </span>
          </div>

          {/* Section Title */}
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] font-extrabold text-slate-900 tracking-tight mb-4">
            We work where the stakes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2]">
              justify the engineering.
            </span>
          </h2>
        </div>

        {/* Executive Industries Table */}
        <div 
          className={`w-full bg-white rounded-[2rem] border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50/90 border-b border-slate-200/90">
                  <th className="py-5 px-8 font-mono text-xs font-extrabold text-slate-900 uppercase tracking-wider w-[35%] border-r border-slate-200/70">
                    Industry
                  </th>
                  <th className="py-5 px-8 font-mono text-xs font-extrabold text-slate-900 uppercase tracking-wider w-[65%]">
                    Positioning line
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-body">
                {INDUSTRIES_DATA.map((row, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-slate-50/70 transition-colors duration-200 group"
                  >
                    {/* Industry Column */}
                    <td className="py-5 px-8 border-r border-slate-100 font-display text-base md:text-lg font-bold text-slate-900 group-hover:text-[#1746D2] transition-colors">
                      <div className="flex items-center gap-3">
                        <span 
                          className="w-2.5 h-2.5 rounded-full shrink-0" 
                          style={{ backgroundColor: row.accent }}
                        />
                        <span>{row.industry}</span>
                      </div>
                    </td>

                    {/* Positioning Line Column */}
                    <td className="py-5 px-8 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                      {row.positioning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Button Link */}
        <div 
          className={`mt-12 flex justify-start transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            to="/industries"
            className="group relative inline-flex items-center gap-3 rounded-xl bg-slate-900 px-8 py-4 font-display text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#1746D2] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]"
          >
            <span>See in details how Tech6Sense AI impact on different industries</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 font-extrabold text-base">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
