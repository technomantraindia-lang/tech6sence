import React, { useEffect, useState, useRef, useCallback } from 'react';
import { industriesImpactData } from '../../data/industriesImpactData';

const industryShortNames = {
  healthcare: "Healthcare",
  finance: "Finance",
  manufacturing: "Manufacturing",
  retail: "Retail",
  education: "Education",
  telecom: "Telecom",
  insurance: "Insurance",
  realestate: "Real Estate"
};

export default function IndustriesImpactContent() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeIndustry, setActiveIndustry] = useState(industriesImpactData[0]?.id);
  const [showNav, setShowNav] = useState(false);
  const observerRefs = useRef([]);
  const sectionRefs = useRef({});
  const navRef = useRef(null);
  const containerRef = useRef(null);

  // Fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Active section tracking observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndustry(entry.target.dataset.id);
          }
        });
      },
      { threshold: 0.05, rootMargin: '-120px 0px -60% 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Show/hide nav bar based on container scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setShowNav(rect.top < 80 && rect.bottom > 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndustry = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 140;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      if (window.lenis) {
        window.lenis.scrollTo(top);
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, []);

  // Auto-scroll the nav bar to keep active button visible
  useEffect(() => {
    if (navRef.current && activeIndustry) {
      const activeBtn = navRef.current.querySelector(`[data-nav="${activeIndustry}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      }
    }
  }, [activeIndustry]);

  return (
    <div ref={containerRef} className="bg-slate-50 font-body py-12 md:py-24 relative">

      {/* Sticky Industry Navigation Bar */}
      <div
        className={`fixed top-[64px] md:top-[72px] left-0 right-0 z-40 transition-all duration-500 ${
          showNav
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="max-w-[85rem] mx-auto px-4 md:px-6">
            <nav
              ref={navRef}
              className="flex items-center gap-1 md:gap-2 py-3 overflow-x-auto hide-scrollbar"
            >
              {industriesImpactData.map((industry) => {
                const isActive = activeIndustry === industry.id;
                return (
                  <button
                    key={industry.id}
                    data-nav={industry.id}
                    onClick={() => scrollToIndustry(industry.id)}
                    className={`relative shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-200'
                        : 'text-slate-600 hover:text-violet-700 hover:bg-violet-50'
                    }`}
                  >
                    {industryShortNames[industry.id] || industry.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto px-6">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-slate-900 leading-tight mb-6">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Artificial intelligence isn't industry-specific – it's industry-transforming. TECH6SENSE brings deep technical expertise combined with industry understanding to deliver AI solutions that address sector-specific challenges.
          </p>
        </div>

        {/* Industries List */}
        <div className="space-y-32">
          {industriesImpactData.map((industry, idx) => {
            const isVisible = visibleSections.has(industry.id);
            return (
              <div 
                key={industry.id}
                id={`industry-${industry.id}`}
                data-id={industry.id}
                ref={(el) => {
                  observerRefs.current[idx] = el;
                  sectionRefs.current[industry.id] = el;
                }}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              >
                {/* Industry Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 border border-violet-200 flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
                    {industry.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                  
                  {/* Left Column: Challenges */}
                  <div className="lg:col-span-4 relative h-full">
                    <div className="sticky top-32 self-start pb-8 z-10" style={{ position: 'sticky', top: '120px', height: 'max-content' }}>
                      <h4 className="font-display text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-slate-200" />
                        Critical Challenges
                      </h4>
                      <div className="space-y-6">
                        {industry.challenges.map((challenge, cIdx) => (
                          <div key={cIdx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h5 className="font-bold text-slate-900 mb-2">{challenge.title}</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">{challenge.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Solutions */}
                  <div className="lg:col-span-8">
                    <h4 className="font-display text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-violet-400" />
                      AI Solutions & Platforms
                    </h4>
                    
                    <div className="space-y-8">
                      {industry.solutions.map((solution, sIdx) => (
                        <div key={sIdx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-violet-300 transition-colors shadow-sm group">
                          
                          {/* Solution Title & Impact */}
                          <div className="p-8 md:p-10 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-50 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                            <h5 className="font-display text-2xl font-bold text-slate-900 mb-4 relative z-10">
                              {solution.title}
                            </h5>
                            
                            {/* Impact Banner */}
                            <div className="bg-violet-50 border border-violet-100 rounded-xl p-5 relative z-10 mt-6">
                              <p className="text-sm font-semibold text-violet-900 leading-relaxed">
                                <span className="uppercase tracking-widest text-[0.65rem] block mb-1 text-violet-500 font-bold">Impact</span>
                                {solution.impact}
                              </p>
                            </div>
                          </div>

                          {/* Technology Details */}
                          <div className="p-8 md:p-10 bg-white">
                            <h6 className="font-display text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                              Technology Capabilities
                            </h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                              {solution.technology.map((tech, tIdx) => (
                                <div key={tIdx} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-2" />
                                  <span className="font-body text-sm text-slate-700 leading-relaxed">{tech}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
