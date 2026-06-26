import React, { useState, useEffect, useRef } from 'react';

const PROOF_BLOCKS = [
  {
    title: 'AI-First',
    description: 'Strategy, automation, agents, and intelligent software systems.',
    num: '01',
  },
  {
    title: 'Deep-Tech Ready',
    description: 'Wearables, smart devices, healthcare AI, and IoT intelligence.',
    num: '02',
  },
  {
    title: 'Global Mindset',
    description: 'Built for founders, enterprises, and future-ready digital teams.',
    num: '03',
  },
];

const TRUST_ITEMS = [
  'Research-Led Thinking',
  'Product Engineering Depth',
  'Business-Ready Execution',
  'Scalable AI Deployment',
];

const STATEMENT_POINTS = [
  'PhD-led AI direction',
  'Enterprise-grade development mindset',
  'Global business ecosystem support',
];

export default function WhyChooseTech6Sense() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMainHovered, setIsMainHovered] = useState(false);
  const [gridHovered, setGridHovered] = useState(false);
  const [gridMousePos, setGridMousePos] = useState({ x: 0, y: 0 });

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

  const handleGridMouseMove = (e) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    setGridMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="why-tech6sense"
      className="relative w-full py-16 md:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #FEFEFE 50%, #FAFAFA 100%)' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wc-line-reveal {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .wc-line-reveal {
          transform-origin: left;
          animation: wc-line-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}} />

      {/* Very subtle ambient */}
      <div className="absolute top-[10%] left-[-8%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet-50/60 to-transparent blur-[120px] pointer-events-none" />

      <div
        className="relative z-10 mx-auto max-w-[85rem] px-6 transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        {/* Top heading area */}
        <div className="mb-14 md:mb-20 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            <span className="font-mono text-[0.65rem] font-bold tracking-[0.35em] uppercase text-violet-500">
              Why TECH6SENSE
            </span>
          </div>
          <h2 className="mb-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-extrabold text-slate-900 tracking-[-0.03em]">
            Built for Serious AI Innovation,{' '}
            <span className="text-slate-400 font-extrabold">Not Just Experiments</span>
          </h2>
          <p className="font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium max-w-2xl">
            TECH6SENSE AI combines research-level intelligence, product engineering, and business ecosystem support to help organizations build AI systems that are practical, scalable, and future-ready.
          </p>
        </div>

        {/* Editorial Proof Grid with subtle cursor spotlight glow */}
        <div 
          ref={gridRef}
          onMouseEnter={() => setGridHovered(true)}
          onMouseLeave={() => setGridHovered(false)}
          onMouseMove={handleGridMouseMove}
          className="relative grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-10 lg:gap-14 mb-16 md:mb-20 items-start"
        >
          {/* Subtle cursor follow lavender glow (disabled on mobile, low opacity) */}
          {gridHovered && (
            <div
              className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
              style={{
                background: `radial-gradient(circle 350px at ${gridMousePos.x}px ${gridMousePos.y}px, rgba(139, 92, 246, 0.035), rgba(217, 70, 239, 0.015), transparent 70%)`,
              }}
            />
          )}

          {/* LEFT: Large Statement Block */}
          <div 
            className="relative group/main z-10 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            {/* Subtle glow behind */}
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-50/40 via-fuchsia-50/10 to-transparent blur-[40px] opacity-60 group-hover/main:opacity-100 group-hover/main:scale-[1.03] transition-all duration-500 pointer-events-none" />

            <div
              onMouseEnter={() => setIsMainHovered(true)}
              onMouseLeave={() => setIsMainHovered(false)}
              className="relative rounded-[2rem] border border-slate-100/80 bg-white/80 backdrop-blur-sm p-8 md:p-10 lg:p-12 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-violet-200/80 hover:bg-white/90"
              style={{ 
                boxShadow: isMainHovered 
                  ? '0 30px 60px -15px rgba(139,92,246,0.06), 0 0 0 1px rgba(255,255,255,0.7) inset' 
                  : '0 20px 50px -15px rgba(0,0,0,0.03), 0 0 0 1px rgba(255,255,255,0.5) inset' 
              }}
            >
              {/* Subtle diagonal light sweep */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                <div className="absolute -inset-y-12 -left-1/2 w-[35%] bg-gradient-to-r from-transparent via-violet-400/10 to-transparent rotate-[35deg] transition-all duration-1000 ease-out group-hover/main:left-[150%]" />
              </div>

              {/* Large editorial quote mark */}
              <div className="mb-6 relative z-10">
                <span className="text-[4rem] md:text-[5rem] leading-none font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-200 to-fuchsia-200 select-none">
                  "
                </span>
              </div>

              {/* Main statement */}
              <p className="font-display text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] font-extrabold text-slate-800 leading-[1.25] tracking-tight mb-10 relative z-10">
                AI expertise backed by real engineering, product thinking, and business execution.
              </p>

              {/* Thin divider */}
              {isVisible && (
                <div className="h-[1px] bg-gradient-to-r from-violet-300 via-fuchsia-300 to-transparent mb-8 wc-line-reveal relative z-10" style={{ animationDelay: '0.3s' }} />
              )}

              {/* 3 proof points */}
              <div className="flex flex-col gap-3 relative z-10">
                {STATEMENT_POINTS.map((point, i) => (
                  <div
                    key={i}
                    className="group/point flex items-center gap-3 px-3 py-2 -mx-3 rounded-xl transition-all duration-300 hover:bg-violet-50/30"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      transitionDelay: `${350 + i * 120}ms`,
                    }}
                  >
                    {/* Small dot/icon transitions grey-to-gradient */}
                    <div className="w-6 h-6 shrink-0 rounded-full flex items-center justify-center bg-slate-100 group-hover/point:bg-gradient-to-br group-hover/point:from-violet-500 group-hover/point:to-fuchsia-500 transition-all duration-300">
                      <svg viewBox="0 0 16 16" className="w-3 h-3 text-slate-400 group-hover/point:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.5 3.5L13 4" />
                      </svg>
                    </div>
                    {/* Text shift, color change & thin underline animation */}
                    <span className="relative font-body text-[0.9rem] md:text-[0.95rem] text-slate-600 font-semibold tracking-tight transition-all duration-300 group-hover/point:text-slate-800 group-hover/point:translate-x-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-violet-300 after:transition-all after:duration-300 group-hover/point:after:w-full">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Vertical Metric Stack */}
          <div className="flex flex-col gap-4 md:gap-5 md:pt-4 z-10">
            {PROOF_BLOCKS.map((block, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-100/80 bg-white/60 backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:pl-8 md:hover:pl-9 hover:bg-violet-50/20 hover:border-violet-100/80"
                style={{
                  boxShadow: '0 8px 24px -8px rgba(0,0,0,0.02)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${450 + i * 150}ms`,
                }}
              >
                {/* Thin left border animation fill from top to bottom */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-violet-500 to-fuchsia-500 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

                <div className="flex items-start gap-5 relative z-10">
                  {/* Number */}
                  <span className="font-display text-[2.2rem] md:text-[2.5rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-violet-200 to-fuchsia-200 select-none shrink-0 transition-all duration-300 group-hover:from-violet-300 group-hover:to-fuchsia-300">
                    {block.num}
                  </span>

                  <div className="flex-1 min-w-0 pt-1 pr-6">
                    {/* Title with gradient text hover */}
                    <h4 className="font-display text-[1.15rem] md:text-[1.25rem] font-extrabold text-slate-900 tracking-tight mb-1.5 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-fuchsia-500">
                      {block.title}
                    </h4>
                    <p className="font-body text-[0.85rem] leading-[1.6] text-slate-400 font-medium">
                      {block.description}
                    </p>
                  </div>

                  {/* Arrow/icon fade-in on the right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.25 4.75l5.25 5.25-5.25 5.25" />
                    </svg>
                  </div>

                  {/* Subtle accent dot */}
                  <div
                    className="w-2 h-2 rounded-full shrink-0 mt-3 transition-transform duration-300 group-hover:scale-150"
                    style={{
                      background: i === 0 ? '#7c3aed' : i === 1 ? '#d946ef' : '#8b5cf6',
                      opacity: 0.5,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div
          className="transition-all duration-1000 z-10 relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
            transitionDelay: '800ms',
          }}
        >
          {/* Top divider */}
          {isVisible && (
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-200 to-transparent mb-0 wc-line-reveal" style={{ animationDelay: '0.6s' }} />
          )}

          <div className="grid grid-cols-2 md:grid-cols-4">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group relative py-6 md:py-7 px-4 md:px-6 text-center border-b md:border-b-0 border-r border-slate-100/60 last:border-r-0 cursor-default transition-all duration-300 hover:bg-violet-50/10 hover:border-slate-200/80"
                style={{ 
                  borderRightColor: i === 3 ? 'transparent' : undefined,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${900 + i * 120}ms`
                }}
              >
                {/* Text translates upward and has dot icon hover highlight */}
                <div className="flex items-center justify-center gap-1.5 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 shrink-0" />
                  <span className="font-display text-[0.82rem] md:text-[0.88rem] font-bold text-slate-700 tracking-tight transition-colors duration-300 group-hover:text-slate-900">
                    {item}
                  </span>
                </div>

                {/* Hover underline growing from left to right */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Bottom divider */}
          {isVisible && (
            <div className="h-[1px] bg-gradient-to-r from-transparent via-fuchsia-200 to-transparent wc-line-reveal" style={{ animationDelay: '0.9s' }} />
          )}
        </div>
      </div>
    </section>
  );
}
