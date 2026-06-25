import React, { useState, useEffect, useRef } from 'react';

const STORIES = [
  {
    tagline: 'Smarter operations',
    title: 'Intelligent Business Automation',
    problem: 'Manual workflows slow down teams and create operational gaps.',
    approach: 'AI agents, automation pipelines, and decision-support systems help teams execute repetitive tasks faster and more intelligently.',
    impact: 'Improved productivity, reduced manual effort, and smarter business operations.',
  },
  {
    tagline: 'From concept to MVP',
    title: 'AI Product Prototype',
    problem: 'Founders and businesses often have AI product ideas but lack the right technical direction.',
    approach: 'TECH6SENSE AI helps shape concepts into AI MVPs using product strategy, model planning, interface design, and scalable development architecture.',
    impact: 'Clearer product direction, faster prototype development, and stronger investor or client presentation.',
  },
  {
    tagline: 'Visual intelligence',
    title: 'Computer Vision Workflow',
    problem: 'Industries need faster and more accurate visual inspection, monitoring, and detection systems.',
    approach: 'Computer vision models analyze images, video, patterns, and objects to support real-world monitoring and automation.',
    impact: 'Better visibility, improved quality checks, and intelligent monitoring workflows.',
  },
  {
    tagline: 'Business ecosystem support',
    title: 'Founder-to-Company Journey',
    problem: 'New founders need support beyond technology to build a complete AI or IT business.',
    approach: 'Visionary Founders support helps entrepreneurs with company setup guidance, branding, technology team planning, CTO direction, and growth strategy.',
    impact: 'A stronger launch foundation, better execution clarity, and access to an AI-focused business ecosystem.',
  },
];

const OUTCOMES = [
  { text: 'Faster decision-making', desc: 'Real-time telemetry' },
  { text: 'Reduced manual workflows', desc: 'Up to 70% automated pipelines' },
  { text: 'Scalable AI architecture', desc: 'Built for enterprise volume' },
  { text: 'Product-ready intelligence', desc: 'Production-ready code' },
];

export default function InnovationStories() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  // Auto-advance logic: rotates cases every 3 seconds, resets when activeStory changes, pauses on hover
  useEffect(() => {
    if (isPaused || !isVisible) return;
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % STORIES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible, isPaused, activeStory]);

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
      id="innovation-stories"
      className="relative w-full py-24 md:py-32 overflow-hidden border-b border-slate-100/80 bg-white"
      style={{
        background: 'linear-gradient(180deg, #FCFCFD 0%, #FEFEFE 50%, #FCFCFD 100%)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(35px)',
        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Background Style Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-grid-subtle {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.015) 1px, transparent 1px);
        }
        @keyframes story-fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .story-fade-in {
          animation: story-fade-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes active-line-grow {
          0% { height: 0%; }
          100% { height: 60%; }
        }
        .active-line-grow {
          animation: active-line-grow 3s linear forwards;
        }
        .active-line-grow.paused {
          animation-play-state: paused;
        }
        @keyframes float-slow-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(0.5deg); }
        }
        @keyframes float-slow-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(-0.5deg); }
        }
        @keyframes float-slow-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(0.3deg); }
        }
        @keyframes float-slow-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-0.3deg); }
        }
        .animate-float-0 { animation: float-slow-0 5s ease-in-out infinite; }
        .animate-float-1 { animation: float-slow-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-slow-2 4.8s ease-in-out infinite; }
        .animate-float-3 { animation: float-slow-3 5.5s ease-in-out infinite; }
      `}} />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-80" />

      {/* Subtle Corner Ambient Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-violet-50/50 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-8%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-fuchsia-50/30 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[85rem] px-6">
        {/* Top Heading Area */}
        <div className="mb-14 md:mb-20 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            <span className="font-mono text-[0.65rem] font-bold tracking-[0.35em] uppercase text-violet-500">
              Innovation Stories
            </span>
          </div>
          <h2 className="mb-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-extrabold text-slate-900 tracking-[-0.03em]">
            From Ideas to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 font-extrabold">
              Intelligent AI Outcomes
            </span>
          </h2>
          <p className="font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium max-w-2xl">
            Explore how TECH6SENSE AI applies intelligent automation, product engineering, and deep-tech thinking to solve real business and innovation challenges.
          </p>
        </div>

        {/* Case Study Board Layout */}
        <div className="grid lg:grid-cols-[1.1fr_2fr_1fr] gap-8 md:gap-10 xl:gap-12 items-stretch">
          
          {/* LEFT ZONE: Slim Story Selector */}
          <div className="lg:border-r lg:border-slate-100/80 lg:pr-6 xl:pr-8 flex flex-col justify-start">
            {/* Mobile / Tablet Horizontal Scroll pills */}
            <div className="flex lg:hidden overflow-x-auto pb-4 gap-3 scrollbar-none -mx-6 px-6">
              {STORIES.map((story, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStory(i)}
                  className={`flex-none px-5 py-2.5 rounded-full border font-display text-[0.82rem] font-semibold tracking-tight transition-all duration-300 ${
                    activeStory === i
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white border-transparent shadow-sm shadow-violet-500/10'
                      : 'bg-white text-slate-500 border-slate-100 hover:border-violet-200 hover:text-slate-700'
                  }`}
                >
                  {story.title}
                </button>
              ))}
            </div>

            {/* Desktop Vertical Selector list */}
            <div className="hidden lg:flex flex-col gap-3">
              {STORIES.map((story, i) => {
                const isActive = activeStory === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveStory(i)}
                    className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border ${
                      isActive
                        ? 'bg-white border-slate-100 shadow-sm shadow-slate-100/50'
                        : 'bg-transparent border-transparent hover:bg-violet-50/20 hover:border-violet-50/30'
                    }`}
                  >
                    {/* Active State progress line indicator */}
                    {isActive && (
                      <div 
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] rounded-r bg-gradient-to-b from-violet-500 to-fuchsia-500 active-line-grow ${
                          isPaused ? 'paused' : ''
                        }`} 
                      />
                    )}

                    <div className={`transition-transform duration-300 ${isActive ? 'translate-x-1.5' : 'group-hover:translate-x-1'}`}>
                      <span className={`block font-mono text-[0.68rem] font-bold tracking-wider mb-1 ${
                        isActive ? 'text-violet-500' : 'text-slate-400'
                      }`}>
                        USE CASE 0{i + 1}
                      </span>
                      <h4 className={`font-display text-[1rem] font-extrabold tracking-tight mb-1.5 transition-colors duration-300 ${
                        isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'
                      }`}>
                        {story.title}
                      </h4>
                      <p className={`font-body text-[0.78rem] font-semibold transition-colors duration-300 ${
                        isActive ? 'text-slate-400' : 'text-slate-400/70 group-hover:text-slate-400'
                      }`}>
                        {story.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CENTER ZONE: Large Active Story Panel */}
          <div 
            className="relative flex flex-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              key={activeStory}
              className="story-fade-in relative flex-1 rounded-[2rem] border border-slate-100/80 bg-white/90 backdrop-blur-sm p-8 md:p-10 xl:p-12 overflow-hidden flex flex-col justify-between"
              style={{
                boxShadow: '0 25px 60px -20px rgba(0,0,0,0.03), 0 0 0 1px rgba(255,255,255,0.6) inset',
              }}
            >
              {/* Subtle corner gradient glow within the card */}
              <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full bg-gradient-to-br from-violet-500/[0.03] to-transparent blur-[40px] pointer-events-none" />

              <div>
                {/* Story header metadata */}
                <div className="mb-8 flex items-center gap-3.5">
                  <span className="font-mono text-[0.72rem] font-bold tracking-[0.2em] text-violet-500 uppercase bg-violet-50 px-3 py-1 rounded-md border border-violet-100/50">
                    Case 0{activeStory + 1}
                  </span>
                  <span className="text-slate-300 text-[1.2rem] font-light">/</span>
                  <span className="font-display text-[0.8rem] font-bold text-slate-400 tracking-tight">
                    {STORIES[activeStory].tagline}
                  </span>
                </div>

                <h3 className="font-display text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-10">
                  {STORIES[activeStory].title}
                </h3>

                {/* Editorial Content Breakdown */}
                <div className="flex flex-col gap-7 md:gap-8 max-w-2xl">
                  {/* Problem */}
                  <div className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-6 items-start">
                    <span className="font-mono text-[0.75rem] font-bold tracking-wider text-slate-400 uppercase pt-1">
                      Problem
                    </span>
                    <p className="font-body text-[0.92rem] leading-[1.65] text-slate-600 font-semibold tracking-tight">
                      {STORIES[activeStory].problem}
                    </p>
                  </div>

                  {/* AI Approach */}
                  <div className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-6 items-start">
                    <span className="font-mono text-[0.75rem] font-bold tracking-wider text-slate-400 uppercase pt-1">
                      AI Approach
                    </span>
                    <p className="font-body text-[0.92rem] leading-[1.65] text-slate-600 font-semibold tracking-tight">
                      {STORIES[activeStory].approach}
                    </p>
                  </div>

                  {/* Expected Impact */}
                  <div className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-6 items-start">
                    <span className="font-mono text-[0.75rem] font-bold tracking-wider text-slate-400 uppercase pt-1">
                      Impact
                    </span>
                    <p className="font-body text-[0.92rem] leading-[1.65] text-slate-600 font-semibold tracking-tight">
                      {STORIES[activeStory].impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Read Full Story Button/CTA */}
              <div className="mt-12 pt-8 border-t border-slate-100/80 flex items-center justify-between">
                <a
                  href="#contact"
                  className="group/cta flex items-center gap-3.5 py-3 px-6 rounded-full border border-slate-200/80 bg-white hover:border-violet-300 hover:bg-violet-50/10 shadow-sm transition-all duration-300 font-display text-[0.88rem] font-bold text-slate-800"
                >
                  <span>Connect to Implement Use-Case</span>
                  <svg
                    viewBox="0 0 20 20"
                    className="w-4 h-4 text-violet-500 transition-transform duration-300 group-hover/cta:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h14m-6-6l6 6-6 6" />
                  </svg>
                </a>

                <span className="hidden md:inline-block font-mono text-[0.65rem] font-bold text-slate-400 tracking-widest uppercase">
                  Tech6Sense Sandbox
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT ZONE: Outcome Notes Stack */}
          <div className="flex flex-col gap-4 justify-center md:grid md:grid-cols-2 lg:flex lg:flex-col">
            <div className="lg:mb-3">
              <span className="font-mono text-[0.68rem] font-bold tracking-[0.25em] text-slate-400 uppercase block mb-1">
                OUTCOME LAB
              </span>
              <h5 className="font-display text-[0.95rem] font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed for Performance
              </h5>
            </div>

            {OUTCOMES.map((item, i) => (
              <div
                key={i}
                className={`animate-float-${i} relative px-5 py-4 rounded-2xl bg-white/40 border border-slate-100/60 backdrop-blur-sm shadow-sm shadow-slate-100/10 hover:bg-white/80 hover:border-violet-100/80 hover:shadow-md hover:shadow-violet-500/[0.02] transition-all duration-300 cursor-default`}
              >
                {/* Thin top accent glow */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-violet-300 to-fuchsia-300 opacity-20" />

                <div className="flex items-start gap-3">
                  {/* Small minimal color bullet */}
                  <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                  
                  <div>
                    <span className="block font-display text-[0.88rem] font-extrabold text-slate-800 tracking-tight mb-0.5">
                      {item.text}
                    </span>
                    <span className="block font-body text-[0.72rem] font-medium text-slate-400 leading-none">
                      {item.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
