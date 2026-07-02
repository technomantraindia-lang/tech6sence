import React, { useEffect, useState, useRef } from 'react';

export default function WhatWeBuild() {
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
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const blocks = [
    {
      num: "01",
      title: "AI Solutions",
      desc: "Intelligent automation, AI agents, generative AI, computer vision, data intelligence, and enterprise AI systems for business transformation.",
      cta: "Explore AI Solutions",
      visual: (
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.03)] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)]">
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-violet-100/50 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Minimal Node Animation */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full border border-violet-200 border-dashed animate-[spin_6s_linear_infinite]" />
            <div className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full border border-slate-100" />
            <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-sm" />
          </div>
        </div>
      )
    },
    {
      num: "02",
      title: "Deep-Tech Products",
      desc: "AI wearables, healthcare AI devices, IoT intelligence, human augmentation, and future-ready smart devices built for real-world use.",
      cta: "View Deep-Tech Products",
      visual: (
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.03)] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_15px_40px_rgba(217,70,239,0.12)]">
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-fuchsia-100/50 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Minimal Smart Device Shape */}
          <div className="relative w-8 h-12 md:w-10 md:h-14 rounded-xl border-[1.5px] border-fuchsia-200 bg-slate-50/50 flex flex-col justify-between p-1.5 shadow-inner">
            <div className="w-3/4 mx-auto h-0.5 bg-fuchsia-200 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-400 flex items-center justify-center shadow-sm">
              <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80" />
            </div>
            <div className="w-full flex justify-center gap-1">
              <div className="w-1 h-1 rounded-full bg-fuchsia-200" />
              <div className="w-1 h-1 rounded-full bg-fuchsia-200" />
            </div>
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Business Ecosystem",
      desc: "Visionary Founders and Business Brains programs that support entrepreneurs, investors, and AI-first business growth.",
      cta: "Discover the Ecosystem",
      visual: (
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.03)] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)]">
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-violet-100/50 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Minimal Network/Founder Shape */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full text-violet-100" viewBox="0 0 48 48">
              <path d="M24 8 L12 40 M24 8 L36 40 M12 40 L36 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
            </svg>
            
            {/* Nodes */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-sm" />
            <div className="absolute bottom-1 left-1.5 w-3 h-3 rounded-full bg-violet-300" />
            <div className="absolute bottom-1 right-1.5 w-3 h-3 rounded-full bg-violet-300" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-32 bg-slate-50 overflow-hidden">
      
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-50/40 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Top Heading Area */}
        <div 
          className={`flex flex-col items-start max-w-3xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-700 bg-violet-100 px-3 py-1.5 rounded-full border border-violet-200">
              What We Build
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-extrabold tracking-tight text-slate-900 mb-6">
            AI Systems, Deep-Tech Products, and Business Ecosystems
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            TECH6SENSE AI brings together intelligent software, product innovation, and founder-focused business support to help ideas become scalable AI-driven outcomes.
          </p>
        </div>

        {/* Editorial Blocks */}
        <div className="mt-16 md:mt-24 flex flex-col gap-6 md:gap-8">
          {blocks.map((block, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 lg:p-14 bg-white/50 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-[0_4px_20px_rgba(15,23,42,0.02)] transition-all duration-700 ease-out hover:bg-violet-50/40 hover:border-violet-100/80 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              
              {/* Thin Animated Gradient Border on Hover (Bottom) */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden rounded-b-3xl">
                <div className="h-full w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 ease-out group-hover:w-full" />
              </div>

              {/* Number & Title */}
              <div className="w-full md:w-1/4 flex flex-col mb-6 md:mb-0">
                <span className="font-mono text-xl md:text-2xl font-light text-violet-400 mb-2">
                  {block.num}
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                  {block.title}
                </h3>
              </div>
              
              {/* Description & CTA */}
              <div className="w-full md:w-[45%] flex flex-col mb-8 md:mb-0 md:pl-8 lg:pl-0">
                <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                  {block.desc}
                </p>
                <a 
                  href={`#${block.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group/cta inline-flex items-center gap-2 font-body text-sm font-bold text-slate-800 transition-colors hover:text-violet-700 w-fit"
                >
                  {block.cta}
                  <svg 
                    className="w-4 h-4 text-violet-600 transition-transform duration-300 group-hover/cta:translate-x-1.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Minimal Right-Side Visual */}
              <div className="w-full md:w-auto flex justify-start md:justify-end transition-transform duration-700 ease-out group-hover:translate-x-2">
                {block.visual}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
