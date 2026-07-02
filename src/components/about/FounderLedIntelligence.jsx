import React, { useEffect, useState, useRef } from 'react';

export default function FounderLedIntelligence() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const proofPoints = [
    {
      title: "PhD-Level AI Direction",
      desc: "Research-backed intelligence for real-world systems.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Applied Innovation Mindset",
      desc: "Turning advanced AI concepts into usable business solutions.",
      icon: (
        <svg className="w-5 h-5 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Enterprise & Startup Transformation",
      desc: "Supporting organizations, founders, and digital-first teams.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Built from GIFT City",
      desc: "India innovation base with a global AI vision.",
      icon: (
        <svg className="w-5 h-5 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-32 bg-slate-50 overflow-hidden">
      
      {/* Soft Background Accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-50/50 rounded-full blur-[100px] -translate-x-1/3 pointer-events-none" />
      
      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Founder Visual Area */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.05)] overflow-hidden group">
              
              {/* Soft abstract AI frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 to-slate-50/80" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
              
              {/* Abstract Profile Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-56 h-72 rounded-[2rem] bg-gradient-to-t from-white to-slate-50 border border-slate-100 shadow-sm overflow-hidden flex flex-col items-center justify-end">
                  
                  {/* Subtle Glow Behind */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-200/50 rounded-full blur-2xl" />
                  
                  {/* Abstract Head/Shoulders */}
                  <div className="absolute top-12 w-20 h-20 rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-50 border border-white shadow-inner" />
                  <div className="w-40 h-32 rounded-t-[3rem] bg-gradient-to-t from-slate-100 to-white border-t border-slate-50" />
                </div>
              </div>

              {/* Founder Tag */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-violet-100 shadow-sm flex items-center gap-2 transition-transform duration-500 group-hover:scale-105 group-hover:border-violet-200">
                <div className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold text-violet-900 uppercase tracking-widest">
                  Founder & AI Vision
                </span>
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold text-slate-600">
                  GIFT City, Gandhinagar
                </span>
              </div>

              {/* Decorative Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-violet-300/30 rounded-tl-3xl m-4" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-300/30 rounded-br-3xl m-4" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div 
            className={`order-1 lg:order-2 flex flex-col items-start transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-700 bg-violet-100 px-3 py-1.5 rounded-full border border-violet-200">
                Founder-Led AI Expertise
              </span>
            </div>
            
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-extrabold tracking-tight text-slate-900 mb-6">
              Led by Deep <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">AI Expertise</span>
            </h2>

            <p className="font-body text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
              Founded by <strong className="text-slate-800 font-semibold">Dr. Chintan Patel</strong>, TECH6SENSE AI is built on PhD-level AI knowledge, applied innovation, and a mission to make advanced intelligence practical for businesses, founders, and global industries.
            </p>

            {/* Proof Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12 w-full">
              {proofPoints.map((point, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900 mb-1">
                      {point.title}
                    </h4>
                    <p className="font-body text-sm text-slate-500 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="#founder-story" 
              className={`group relative inline-flex items-center gap-3 rounded-full bg-white border border-slate-200 px-8 py-4 font-body text-sm font-bold text-slate-800 transition-all hover:border-violet-300 hover:shadow-[0_8px_25px_rgba(124,58,237,0.1)] duration-700 ease-out delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <span>Meet the Vision Behind TECH6SENSE</span>
              <svg 
                className="w-4 h-4 text-violet-600 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
