import React, { useState, useEffect, useRef, useCallback } from 'react';

const SOLUTIONS = [
  {
    title: 'AI Agents & Automation',
    description: 'Autonomous workflows, task execution, and intelligent business process automation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Generative AI & Copilots',
    description: 'Custom AI assistants, knowledge systems, content engines, and enterprise copilots.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Computer Vision Systems',
    description: 'Image, video, object, and pattern recognition for real-world use cases.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Data Intelligence & Predictive Models',
    description: 'Dashboards, forecasting, analytics, and decision intelligence systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise AI Integration',
    description: 'Cloud deployment, MLOps, secure integration, and scalable AI infrastructure.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V17.25M10.5 15.75h3" />
      </svg>
    ),
  },
];

function SolutionRow({ solution, index, isActive, rowRef, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!rowRef) return;
    const el = document.getElementById(`sol-row-${index}`);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [index, rowRef]);

  const activeOrHovered = isHovered || isActive;

  return (
    <div
      ref={rowRef}
      id={`sol-row-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative cursor-pointer select-none transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 120}ms`
      }}
    >
      {/* Subtle cursor spotlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.06), transparent 70%)`,
          }}
        />
      )}

      <div className={`relative z-10 flex items-center gap-5 md:gap-6 px-4 md:px-6 rounded-2xl transition-all duration-500 ease-out ${
        activeOrHovered 
          ? 'bg-white/70 py-8 md:py-9 shadow-[0_15px_35px_rgba(124,58,237,0.03)]' 
          : 'bg-transparent py-6 md:py-7'
      }`}>
        {/* Icon */}
        <div
          className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center border transition-all duration-300 bg-white shadow-sm"
          style={{
            borderColor: activeOrHovered ? 'rgba(139, 92, 246, 0.4)' : 'rgba(226, 232, 240, 0.8)',
            color: activeOrHovered ? '#7c3aed' : '#64748b',
          }}
        >
          {solution.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-[1.1rem] md:text-[1.2rem] font-bold text-slate-800 tracking-tight transition-colors duration-300">
            {solution.title}
          </h4>
          <p className="mt-1 font-body text-[0.85rem] md:text-[0.9rem] text-slate-450 leading-relaxed font-medium transition-colors duration-300">
            {solution.description}
          </p>
        </div>

        {/* Arrow */}
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          activeOrHovered ? 'translate-x-1.5 bg-violet-50' : ''
        }`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-colors duration-300" stroke={activeOrHovered ? '#7c3aed' : '#94a3b8'} strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>

      {/* Bottom border line — gradient on hover */}
      <div className="mx-4 md:mx-6 h-[1px] relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-100 transition-opacity duration-300" style={{ opacity: activeOrHovered ? 0 : 1 }} />
        <div
          className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-400 transition-all duration-500"
          style={{
            opacity: activeOrHovered ? 1 : 0,
            transform: activeOrHovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />
      </div>
    </div>
  );
}

export default function AISolutionsOutcome() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const triggerY = viewportHeight * 0.45;
      
      let closestIdx = -1;
      let minDistance = Infinity;

      rowsRef.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const rowCenterY = rect.top + rect.height / 2;
        const dist = Math.abs(rowCenterY - triggerY);
        
        if (rect.top < viewportHeight && rect.bottom > 0) {
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        }
      });
      
      if (closestIdx !== -1) {
        setActiveIndex(closestIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="ai-solutions"
      className="relative w-full pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F3FF 50%, #FAFAFA 100%)' }}
    >
      {/* Soft corner glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-violet-100/50 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-fuchsia-100/40 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[85rem] px-6">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 lg:gap-20 items-start">

          {/* LEFT COLUMN: Sticky intro */}
          <div 
            className="md:sticky md:top-32 flex flex-col transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              <span className="font-mono text-[0.65rem] font-bold tracking-[0.35em] uppercase text-violet-500">
                AI Solutions
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] font-extrabold text-slate-900 tracking-[-0.02em]">
              AI Solutions Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">
                Real Business Outcomes
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mb-8 font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium max-w-md">
              From intelligent automation to custom AI products, TECH6SENSE AI helps businesses transform ideas into scalable, secure, and production-ready AI systems.
            </p>

            {/* CTA Button */}
            <div className="mb-4">
              <a
                href="#solutions"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 font-display text-sm font-bold tracking-wider text-white shadow-[0_4px_15px_rgba(124,58,237,0.2)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Solutions
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Trust line */}
            <p className="font-body text-[0.75rem] text-slate-400 font-medium tracking-wide">
              Built for enterprises, startups, and future-ready digital teams.
            </p>
          </div>

          {/* RIGHT COLUMN: Solution rows */}
          <div className="flex flex-col relative pl-4 sm:pl-8">
            {/* Vertical Progress Line */}
            <div className="absolute left-0 top-6 bottom-6 w-[1.5px] bg-slate-100/80 rounded-full hidden sm:block">
              {/* Dynamic indicator segment */}
              <div 
                className="absolute w-[1.5px] bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500 ease-out"
                style={{
                  height: `${100 / SOLUTIONS.length}%`,
                  top: `${(activeIndex >= 0 ? activeIndex : 0) * (100 / SOLUTIONS.length)}%`
                }}
              />
            </div>

            {SOLUTIONS.map((solution, index) => (
              <SolutionRow 
                key={index} 
                solution={solution} 
                index={index} 
                isActive={activeIndex === index}
                rowRef={el => rowsRef.current[index] = el}
                isVisible={isVisible}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
