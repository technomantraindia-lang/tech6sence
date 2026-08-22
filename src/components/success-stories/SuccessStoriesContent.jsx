import React, { useState, useEffect, useRef, useCallback } from 'react';
import { successStoriesData } from '../../data/successStoriesData';

export default function SuccessStoriesContent() {
  const [activeIndustry, setActiveIndustry] = useState(successStoriesData[0]?.id);
  const [showNav, setShowNav] = useState(false);
  const sectionRefs = useRef({});
  const navRef = useRef(null);
  const containerRef = useRef(null);

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
      { threshold: 0.1, rootMargin: '-120px 0px -60% 0px' }
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

  return (
    <div ref={containerRef} className="bg-slate-50 font-body py-16 md:py-24 relative">
      {/* Sticky Industry Navigation Bar */}
      <div
        className={`fixed top-[64px] md:top-[72px] left-0 right-0 z-40 transition-all duration-500 ${
          showNav
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(23,70,210,0.08)]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <nav
              ref={navRef}
              className="flex items-center gap-1 md:gap-2 py-3 overflow-x-auto hide-scrollbar"
            >
              {successStoriesData.map((industry) => {
                const isActive = activeIndustry === industry.id;
                return (
                  <button
                    key={industry.id}
                    data-nav={industry.id}
                    onClick={() => scrollToIndustry(industry.id)}
                    className={`relative shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#1746D2] text-white shadow-md shadow-blue-200'
                        : 'text-slate-600 hover:text-[#1746D2] hover:bg-blue-50'
                    }`}
                  >
                    {industry.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Quick Links Header */}
        <div className="mb-16 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
          <h3 className="text-xs md:text-sm font-bold text-[#1746D2] uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1746D2]" />
            Jump to Industry Case Studies
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {successStoriesData.map((industry) => (
              <button
                key={`quick-${industry.id}`}
                onClick={() => scrollToIndustry(industry.id)}
                className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-xs md:text-sm font-semibold text-slate-700 hover:border-[#1746D2] hover:text-[#1746D2] hover:bg-blue-50/60 hover:shadow-sm transition-all duration-300"
              >
                {industry.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-32">
          {successStoriesData.map((industry) => (
            <div
              key={industry.id}
              id={`industry-${industry.id}`}
              data-id={industry.id}
              ref={(el) => (sectionRefs.current[industry.id] = el)}
              className="scroll-mt-32"
            >
              <div className="flex items-center gap-4 mb-14 border-b border-slate-200 pb-6">
                <div className="w-2 h-10 bg-gradient-to-b from-[#1746D2] to-[#00A86B] rounded-r-lg" />
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {industry.title}
                </h2>
              </div>

              <div className="space-y-24">
                {industry.stories.map((story, idx) => (
                  <div key={story.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left side: Context (Sticky) */}
                    <div className="lg:col-span-4 relative h-full">
                      <div className="sticky top-32 self-start pb-8 z-10" style={{ position: 'sticky', top: '120px', height: 'max-content' }}>
                        <span className="text-[#1746D2] font-extrabold uppercase tracking-wider text-xs md:text-sm mb-3 block">
                          CASE STUDY 0{idx + 1}
                        </span>
                        <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-8 leading-snug">
                          {story.title}
                        </h3>

                        {/* Client Profile Card */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#1746D2] hover:shadow-md transition-all">
                          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <div className="w-2 h-2 rounded-full bg-[#1746D2]" />
                            Client Profile
                          </h4>
                          <ul className="space-y-3 text-sm text-slate-600">
                            <li><strong className="text-slate-900">Organization:</strong> {story.clientProfile.organization}</li>
                            {story.clientProfile.size && <li><strong className="text-slate-900">Size:</strong> {story.clientProfile.size}</li>}
                            {story.clientProfile.volume && <li><strong className="text-slate-900">Volume:</strong> {story.clientProfile.volume}</li>}
                            <li><strong className="text-slate-900">Challenge:</strong> {story.clientProfile.challenge}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right side: Detailed Case Study */}
                    <div className="lg:col-span-8 space-y-10">
                      
                      {/* Challenge */}
                      <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                        <h4 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-[#1746D2] pl-4">The Operational Challenge</h4>
                        <p className="text-slate-600 leading-relaxed text-base md:text-lg">{story.challenge}</p>
                      </div>

                      {/* Solution & Implementation */}
                      <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-[#00A86B] pl-4">TECH6SENSE AI Solution</h4>
                        <p className="text-slate-600 leading-relaxed text-base md:text-lg">{story.solution}</p>
                        
                        {/* Technical Implementation Box */}
                        <div className="bg-slate-950 text-slate-300 p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1746D2]/15 rounded-full blur-3xl pointer-events-none" />
                          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00A86B]/15 rounded-full blur-3xl pointer-events-none" />

                          <div className="relative z-10">
                            <h5 className="text-[#00A86B] font-bold mb-6 flex items-center gap-2 text-base">
                              <svg className="w-5 h-5 text-[#00A86B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                              Technical Architecture & Implementation
                            </h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {story.implementation.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                                  <div className="w-2 h-2 rounded-full bg-[#00A86B] shrink-0 mt-2" />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                        <h4 className="text-xl font-bold text-slate-900 mb-6 border-l-4 border-[#D4AF37] pl-4">Quantifiable Results Achieved</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {Object.entries(story.results).map(([category, items]) => (
                            <div key={category} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70">
                              <h5 className="font-bold text-[#1746D2] uppercase tracking-wider text-xs md:text-sm mb-4">
                                {category} Impact
                              </h5>
                              <ul className="space-y-3">
                                {items.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                                    <svg className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="leading-snug font-medium">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      {story.testimonial && (
                        <div className="relative bg-gradient-to-br from-blue-50/80 via-slate-50 to-emerald-50/60 p-8 md:p-10 rounded-3xl border border-blue-100/80 shadow-sm">
                          <svg className="absolute top-6 left-6 w-12 h-12 text-[#1746D2]/20 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <blockquote className="relative z-10 pl-6">
                            <p className="text-base md:text-lg text-slate-800 font-medium leading-relaxed mb-6 italic">
                              "{story.testimonial.quote}"
                            </p>
                            <footer className="font-bold text-[#1746D2] text-xs md:text-sm tracking-widest uppercase">
                              — {story.testimonial.author}
                            </footer>
                          </blockquote>
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
