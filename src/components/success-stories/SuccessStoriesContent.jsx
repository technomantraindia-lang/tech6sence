import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { successStoriesData } from '../../data/successStoriesData';

const COUNTRY_FLAG_CODES = {
  'USA': 'us',
  'United Kingdom': 'gb',
  'UK': 'gb',
  'Canada': 'ca',
  'Australia': 'au',
  'India': 'in',
  'UAE': 'ae',
  'Hong Kong': 'hk',
  'European Union': 'eu',
  'Germany': 'de',
  'Singapore': 'sg'
};

const getCountryFlagUrl = (location) => {
  if (!location) return null;
  for (const [key, code] of Object.entries(COUNTRY_FLAG_CODES)) {
    if (location.toLowerCase().includes(key.toLowerCase())) {
      return `https://flagcdn.com/w40/${code}.png`;
    }
  }
  return null;
};

export default function SuccessStoriesContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedStoryId, setExpandedStoryId] = useState(null);

  // Extract unique industries for filter pills
  const categories = useMemo(() => {
    const set = new Set(successStoriesData.map((s) => s.industry));
    return ['All', ...Array.from(set)];
  }, []);

  // Filter stories based on selected category and search query
  const filteredStories = useMemo(() => {
    return successStoriesData.filter((story) => {
      const matchesCategory =
        selectedCategory === 'All' || story.industry === selectedCategory;

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        story.title.toLowerCase().includes(q) ||
        story.industry.toLowerCase().includes(q) ||
        story.location.toLowerCase().includes(q) ||
        story.summary.toLowerCase().includes(q) ||
        story.techStack.some((t) => t.toLowerCase().includes(q)) ||
        story.testimonial.quote.toLowerCase().includes(q) ||
        story.testimonial.author.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id) => {
    setExpandedStoryId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-slate-50 font-body py-16 md:py-24 relative selection:bg-[#1746D2]/20 selection:text-slate-900">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* SEARCH & FILTER CONTROLS */}
        <div className="mb-16 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#00A86B]" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#1746D2]">
                  TECH6SENSE AI GLOBAL CLIENT PORTFOLIO
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Enterprise Success Stories
              </h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Displaying <span className="text-[#1746D2] font-bold">{filteredStories.length}</span> of {successStoriesData.length} verified global client engagements
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search country, industry, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1746D2] focus:bg-white transition-all shadow-inner"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1746D2] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-[#1746D2]/10 hover:text-[#1746D2]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* CASE STUDIES GRID */}
        {filteredStories.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Success Stories Found</h3>
            <p className="text-slate-500 text-sm mb-6">Try adjusting your search query or selecting another industry category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#1746D2] text-white text-xs font-bold shadow-md hover:bg-[#00A86B] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredStories.map((story) => {
              const isExpanded = expandedStoryId === story.id;
              const flagUrl = getCountryFlagUrl(story.location);

              return (
                <div
                  key={story.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* SOLID ACCENT BAR (Solid Royal Blue) */}
                  <div className="h-1.5 w-full bg-[#1746D2]" />

                  {/* CARD HEADER (Solid Dark Theme Background) */}
                  <div className="p-8 md:p-10 bg-[#050112] text-white relative">

                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                      {/* Story Number & Industry */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3.5 py-1.5 rounded-full bg-[#1746D2] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
                          {story.number}
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold">
                          {story.industry}
                        </span>
                      </div>

                      {/* Location Badge with High-Res Country Flag Image */}
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#00A86B] text-xs font-mono font-bold">
                        {flagUrl ? (
                          <img
                            src={flagUrl}
                            alt={story.location}
                            className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm shrink-0 border border-white/20"
                          />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-[#00A86B]" />
                        )}
                        <span>{story.location}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4 relative z-10 tracking-tight">
                      {story.title}
                    </h3>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 relative z-10">
                      {story.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md bg-white/10 text-slate-200 text-[11px] font-mono font-semibold border border-white/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CARD BODY */}
                  <div className="p-8 md:p-10 space-y-8">
                    
                    {/* CLIENT TESTIMONIAL (Upper side placement with solid styling) */}
                    {story.testimonial.quote && (
                      <div className="p-6 md:p-8 rounded-2xl bg-blue-50/60 border-l-4 border-[#1746D2] shadow-sm space-y-3">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#1746D2]">
                            {flagUrl && (
                              <img
                                src={flagUrl}
                                alt={story.location}
                                className="w-4 h-3 object-cover rounded-[2px] shadow-sm shrink-0"
                              />
                            )}
                            <span>Verified Executive Testimonial</span>
                          </div>
                          <span className="text-3xl text-[#D4AF37] font-serif leading-none">“</span>
                        </div>

                        <p className="text-slate-900 text-base md:text-xl font-display font-semibold italic leading-relaxed">
                          "{story.testimonial.quote}"
                        </p>

                        {story.testimonial.author && (
                          <div className="pt-2 flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-[#00A86B]">
                              — {story.testimonial.author}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Executive Summary */}
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#1746D2] mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1746D2]" />
                        <span>EXECUTIVE SUMMARY</span>
                      </h4>
                      <p className="text-slate-700 text-base md:text-lg leading-relaxed font-normal">
                        {story.summary}
                      </p>
                    </div>

                    {/* Key Business Impact Metrics (Solid Colors) */}
                    {story.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                        {story.metrics.map((metric, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="font-display text-3xl md:text-4xl font-black text-[#1746D2]">
                              {metric.value}
                            </span>
                            {metric.label && (
                              <span className="text-xs font-bold text-slate-700 mt-1 leading-snug">
                                {metric.label}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* EXPANDABLE FULL BREAKDOWN */}
                    {isExpanded && (
                      <div className="pt-6 border-t border-slate-200 space-y-6 animate-fadeIn">
                        <h4 className="font-display text-xl font-bold text-slate-900">
                          Full Case Study Breakdown
                        </h4>
                        
                        <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
                          {story.fullContent.map((line, idx) => {
                            const isSubHead = (
                              line.startsWith('Business Challenges') ||
                              line.startsWith('TECH6SENSE AI Solution') ||
                              line.startsWith('Implementation Process') ||
                              line.startsWith('Implementation Journey') ||
                              line.startsWith('Project Execution') ||
                              line.startsWith('Phase ')
                            );

                            if (isSubHead) {
                              return (
                                <h5 key={idx} className="font-display text-base font-bold text-slate-900 pt-3">
                                  {line}
                                </h5>
                              );
                            }

                            return <p key={idx}>{line}</p>;
                          })}
                        </div>
                      </div>
                    )}

                    {/* TOGGLE EXPAND BUTTON & CTA (Solid Colors) */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <button
                        onClick={() => toggleExpand(story.id)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#1746D2] hover:text-[#00A86B] transition-colors"
                      >
                        <span>{isExpanded ? 'Hide Breakdown' : 'Read Full Case Study Breakdown'}</span>
                        <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                          ↓
                        </span>
                      </button>

                      <Link
                        to="/lets-connect"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1746D2] text-white text-xs font-bold shadow-md hover:bg-[#00A86B] transition-colors"
                      >
                        <span>Build Similar AI Solution</span>
                        <span>→</span>
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* BOTTOM CLOSING CALLOUT (Solid Dark Theme Background) */}
        <div className="mt-20 p-8 md:p-14 rounded-3xl bg-[#050112] text-white border border-slate-800 shadow-2xl text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00A86B]/20 border border-[#00A86B]/40 text-[#00A86B] font-mono text-xs font-bold uppercase tracking-widest">
            Your Success Story Could Be Next
          </span>
          
          <h3 className="font-display text-3xl md:text-5xl font-extrabold leading-tight">
            Ready to Build Your AI Success Story?
          </h3>
          
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking organizations across the USA, UK, Canada, Australia, Europe, UAE, Singapore, Hong Kong, and India that trust TECH6SENSE AI to transform ambitious ideas into enterprise-grade AI solutions.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/lets-connect"
              className="px-8 py-4 rounded-full bg-[#1746D2] font-bold text-sm text-white shadow-xl hover:bg-[#00A86B] transition-colors"
            >
              Book a Free AI Strategy Consultation →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
