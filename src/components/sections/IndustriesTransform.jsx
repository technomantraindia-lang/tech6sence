import { useState, useEffect, useRef, useCallback } from 'react';

const INDUSTRIES = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tagline: 'AI for smarter care',
    description: 'AI-powered systems for patient insights, wearable intelligence, health monitoring, and smarter clinical workflows.',
    applications: ['AI-supported diagnostics', 'Wearable health intelligence', 'Predictive patient insights'],
    accent: '#7c3aed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    nodes: [
      { cx: 60, cy: 50, label: 'Diagnostics' },
      { cx: 160, cy: 40, label: 'Wearables' },
      { cx: 120, cy: 100, label: 'Patient AI' },
      { cx: 50, cy: 130, label: 'Monitoring' },
      { cx: 170, cy: 120, label: 'Clinical' },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial AI',
    tagline: 'Intelligence for operations',
    description: 'Intelligent automation and computer vision systems for safer, faster, and more efficient industrial operations.',
    applications: ['Visual quality inspection', 'Predictive maintenance', 'Process automation'],
    accent: '#06b6d4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.25 3.03 1.02-5.88L3 8.15l5.94-.87L11.42 2l2.52 5.28L20 8.15l-4.19 4.17 1.02 5.88z" />
      </svg>
    ),
    nodes: [
      { cx: 50, cy: 45, label: 'Vision AI' },
      { cx: 170, cy: 50, label: 'Robotics' },
      { cx: 110, cy: 90, label: 'QC Engine' },
      { cx: 55, cy: 135, label: 'Sensors' },
      { cx: 175, cy: 130, label: 'Predictive' },
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Insurance',
    tagline: 'Data-driven decisions',
    description: 'AI models that support risk analysis, fraud detection, automation, and smarter financial decision-making.',
    applications: ['Fraud intelligence', 'Risk prediction', 'Automated document workflows'],
    accent: '#8b5cf6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    nodes: [
      { cx: 65, cy: 40, label: 'Fraud AI' },
      { cx: 155, cy: 45, label: 'Risk ML' },
      { cx: 110, cy: 85, label: 'Analytics' },
      { cx: 45, cy: 130, label: 'Compliance' },
      { cx: 180, cy: 125, label: 'AutoDocs' },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    tagline: 'Personalized digital growth',
    description: 'AI-driven personalization, demand forecasting, customer intelligence, and automation for digital commerce growth.',
    applications: ['Recommendation engines', 'Customer behavior insights', 'Inventory forecasting'],
    accent: '#ec4899',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    nodes: [
      { cx: 55, cy: 50, label: 'Recommend' },
      { cx: 165, cy: 42, label: 'Forecast' },
      { cx: 115, cy: 95, label: 'CX Engine' },
      { cx: 50, cy: 128, label: 'Inventory' },
      { cx: 175, cy: 130, label: 'Pricing AI' },
    ],
  },
  {
    id: 'education',
    name: 'Education & Learning',
    tagline: 'Smarter learning systems',
    description: 'Intelligent learning systems, AI tutors, content automation, and analytics for modern education platforms.',
    applications: ['AI learning assistants', 'Personalized learning paths', 'Student performance insights'],
    accent: '#f59e0b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    nodes: [
      { cx: 60, cy: 45, label: 'AI Tutor' },
      { cx: 160, cy: 48, label: 'Adaptive' },
      { cx: 110, cy: 90, label: 'LMS AI' },
      { cx: 48, cy: 132, label: 'Analytics' },
      { cx: 172, cy: 128, label: 'Content' },
    ],
  },
  {
    id: 'smart-cities',
    name: 'Smart Cities & IoT',
    tagline: 'Connected urban intelligence',
    description: 'Connected AI systems that support smarter infrastructure, IoT monitoring, automation, and urban intelligence.',
    applications: ['Sensor intelligence', 'Smart monitoring', 'Automated city systems'],
    accent: '#14b8a6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    nodes: [
      { cx: 55, cy: 42, label: 'IoT Hub' },
      { cx: 165, cy: 50, label: 'Grid AI' },
      { cx: 115, cy: 88, label: 'Monitor' },
      { cx: 50, cy: 135, label: 'Traffic' },
      { cx: 170, cy: 125, label: 'Sensors' },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    tagline: 'Predictive movement and control',
    description: 'Predictive AI systems for route optimization, demand planning, tracking, and supply chain visibility.',
    applications: ['Route optimization', 'Demand forecasting', 'Real-time tracking intelligence'],
    accent: '#6366f1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    nodes: [
      { cx: 50, cy: 48, label: 'Routes' },
      { cx: 170, cy: 45, label: 'Tracking' },
      { cx: 110, cy: 92, label: 'Demand' },
      { cx: 55, cy: 130, label: 'Fleet AI' },
      { cx: 168, cy: 132, label: 'Warehouse' },
    ],
  },
  {
    id: 'startups',
    name: 'Startups & Digital Businesses',
    tagline: 'AI-first product growth',
    description: 'AI-first product development and automation systems for startups, founders, and digital business growth.',
    applications: ['AI MVP development', 'Product automation', 'Scalable AI platforms'],
    accent: '#d946ef',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.771 4.902 4.902 0 003.123-.06 4.5 4.5 0 002.515-2.515" />
      </svg>
    ),
    nodes: [
      { cx: 60, cy: 45, label: 'MVP AI' },
      { cx: 155, cy: 48, label: 'Growth' },
      { cx: 112, cy: 88, label: 'Scale' },
      { cx: 48, cy: 128, label: 'Automate' },
      { cx: 175, cy: 130, label: 'Deploy' },
    ],
  },
];

function IndustryVisual({ industry, transitioning }) {
  const nodes = industry.nodes;
  const center = { cx: 112, cy: 88 };
  return (
    <svg viewBox="0 0 224 170" className="w-full h-full">
      <defs>
        <linearGradient id={`ind-grad-${industry.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={industry.accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d946ef" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Soft background circle */}
      <circle cx={center.cx} cy={center.cy} r="55" fill={`url(#ind-grad-${industry.id})`} />
      <circle cx={center.cx} cy={center.cy} r="55" fill="none" stroke={industry.accent} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 6" className="ind-spin" />
      {/* Connection lines from center to each node */}
      {nodes.map((node, i) => (
        <line key={i} x1={center.cx} y1={center.cy} x2={node.cx} y2={node.cy}
          stroke={industry.accent} strokeWidth="1" opacity={transitioning ? 0 : 0.15} strokeDasharray="3 5" className="ind-dash" style={{ transition: 'opacity 0.3s ease' }} />
      ))}
      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i} className={`transition-all duration-500 transform ${transitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`} style={{ transitionDelay: `${i * 50}ms` }}>
          <circle cx={node.cx} cy={node.cy} r="18" fill="white" stroke={industry.accent} strokeWidth="1" opacity="0.8" />
          <text x={node.cx} y={node.cy + 1} textAnchor="middle" dominantBaseline="middle"
            fontSize="6" fill="#64748b" fontFamily="system-ui, sans-serif" fontWeight="600">
            {node.label}
          </text>
        </g>
      ))}
      {/* Center hub */}
      <circle cx={center.cx} cy={center.cy} r="14" fill="white" stroke={industry.accent} strokeWidth="1.5" />
      <circle cx={center.cx} cy={center.cy} r="5" fill={industry.accent} opacity="0.4" className="ind-pulse" />
      <text x={center.cx} y={center.cy + 1} textAnchor="middle" dominantBaseline="middle"
        fontSize="5.5" fill={industry.accent} fontFamily="system-ui, sans-serif" fontWeight="700">
        AI HUB
      </text>
    </svg>
  );
}

export default function IndustriesTransform() {
  const sectionRef = useRef(null);
  const navContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

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

  const handleSelect = useCallback((index) => {
    if (index === activeIndex || transitioning) return;
    setTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => {
      setTransitioning(false);
    }, 200);
  }, [activeIndex, transitioning]);

  useEffect(() => {
    if (!navContainerRef.current) return;
    const container = navContainerRef.current;
    const buttons = container.querySelectorAll('button');
    const activeBtn = buttons[activeIndex];
    if (activeBtn) {
      setIndicatorStyle({
        top: activeBtn.offsetTop + 12,
        height: activeBtn.offsetHeight - 24,
      });
    }
  }, [activeIndex]);

  const active = INDUSTRIES[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative w-full overflow-visible bg-gradient-to-b from-[#FAFAFA] via-[#F7F6FF] to-[#FAFAFA] py-16 md:py-24"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ind-spin-kf { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ind-dash-kf { to { stroke-dashoffset: -16; } }
        @keyframes ind-pulse-kf { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.3); } }
        @keyframes ind-card-in { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }
        .ind-spin { transform-origin: center; transform-box: fill-box; animation: ind-spin-kf 30s linear infinite; }
        .ind-dash { animation: ind-dash-kf 2s linear infinite; }
        .ind-pulse { transform-origin: center; transform-box: fill-box; animation: ind-pulse-kf 3s ease-in-out infinite; }
        .ind-card-enter { animation: ind-card-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}} />

      {/* Ambient glows */}
      <div className="absolute top-0 right-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-violet-100/40 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-fuchsia-100/30 to-transparent blur-[110px] pointer-events-none" />

      {/* Grid Container */}
      <div
        className="mx-auto max-w-[85rem] px-6 transition-all duration-1000 ease-out relative py-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        {/* Top heading area */}
        <div className="mb-10 md:mb-12 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            <span className="font-mono text-[0.65rem] font-bold tracking-[0.35em] uppercase text-violet-500">
              Industries
            </span>
          </div>
          <h2 className="mb-5 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] font-extrabold text-slate-900 tracking-[-0.02em]">
            AI Innovation Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">
              High-Impact Industries
            </span>
          </h2>
          <p className="font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium">
            TECH6SENSE AI helps enterprises, startups, and digital-first organizations apply artificial intelligence across real-world business environments.
          </p>
        </div>

        {/* Two-column interactive layout */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-10 lg:gap-14 items-start">

          {/* LEFT: Industry Navigator */}
          <div ref={navContainerRef} className="flex flex-col gap-1 relative pl-3 border-l border-slate-100/80">
            {/* The thin moving violet-to-fuchsia active line */}
            <div 
              className="absolute left-0 w-[3px] rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 transition-all duration-300 ease-out hidden md:block"
              style={{
                top: `${indicatorStyle.top}px`,
                height: `${indicatorStyle.height}px`
              }}
            />

            {INDUSTRIES.map((ind, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleSelect(i)}
                  className="group w-full text-left px-4 py-3 rounded-2xl border transition-all duration-300 cursor-pointer outline-none select-none flex items-center gap-3.5 relative"
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.9)' : 'transparent',
                    borderColor: isActive ? 'rgba(226,232,240,0.8)' : 'transparent',
                    boxShadow: isActive ? `0 8px 24px -8px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.7) inset` : 'none',
                  }}
                >
                  {/* Mobile-only active line */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 md:hidden"
                    />
                  )}

                  {/* Icon */}
                  <div
                    className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center border transition-all duration-300"
                    style={{
                      background: isActive ? ind.accent + '12' : 'rgba(248,250,252,0.8)',
                      borderColor: isActive ? ind.accent + '30' : 'rgba(226,232,240,0.6)',
                      color: isActive ? ind.accent : '#94a3b8',
                    }}
                  >
                    {ind.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display text-[0.88rem] font-bold tracking-tight transition-colors duration-300 truncate"
                      style={{ color: isActive ? '#0f172a' : '#64748b' }}
                    >
                      {ind.name}
                    </p>
                    <p className="font-body text-[0.7rem] text-slate-400 font-medium tracking-wide mt-0.5">
                      {ind.tagline}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg viewBox="0 0 20 20" className="w-4 h-4 shrink-0 transition-all duration-300" style={{ opacity: isActive ? 1 : 0.3, color: isActive ? ind.accent : '#94a3b8', transform: isActive ? 'translateX(2px)' : 'none' }} fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4l6 6-6 6" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Industry Detail Panel */}
          <div className="relative">
            {/* Glow behind panel */}
            <div
              className="absolute -inset-4 rounded-[3rem] blur-[50px] pointer-events-none transition-colors duration-700"
              style={{ background: `radial-gradient(ellipse at center, ${active.accent}10, transparent 70%)` }}
            />

            <div
              key={active.id}
              className={`relative rounded-[2rem] border border-white/80 bg-white/75 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.6)_inset] p-6 md:p-8 lg:p-10 transition-opacity duration-200 ${transitioning ? 'opacity-0' : 'ind-card-enter'}`}
            >
              {/* Panel header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: active.accent + '15', color: active.accent }}
                >
                  {active.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-[1.3rem] md:text-[1.5rem] font-extrabold text-slate-900 tracking-tight">
                    {active.name}
                  </h3>
                </div>
                <span className="font-mono text-[0.5rem] tracking-widest uppercase text-slate-300 hidden md:block">
                  SECTOR // {active.id.toUpperCase()}
                </span>
              </div>

              {/* Content + visual grid */}
              <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-8">
                {/* Text */}
                <div className="flex flex-col">
                  <p className="font-body text-[0.9rem] leading-[1.7] text-slate-500 font-medium mb-6">
                    {active.description}
                  </p>

                  {/* Applications */}
                  <div className="mb-6">
                    <span className="font-mono text-[0.55rem] font-bold tracking-[0.25em] uppercase text-slate-400 mb-3 block">
                      AI Applications
                    </span>
                    <div className="flex flex-col gap-2.5">
                      {active.applications.map((app, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 shrink-0 rounded-lg flex items-center justify-center"
                            style={{ background: active.accent + '12' }}
                          >
                            <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke={active.accent} strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.5 3.5L13 4" />
                            </svg>
                          </div>
                          <span className="font-body text-[0.85rem] text-slate-650 font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`#industry-${active.id}`}
                    className="group inline-flex items-center gap-2 font-display text-[0.8rem] font-bold tracking-wider transition-colors duration-300 hover:opacity-80"
                    style={{ color: active.accent }}
                  >
                    View Industry Solutions
                    <svg viewBox="0 0 20 20" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m-4-4l4 4-4 4" />
                    </svg>
                  </a>
                </div>

                {/* Visual area */}
                <div className="rounded-2xl bg-slate-50/60 border border-slate-100/60 min-h-[220px] md:min-h-[260px] flex items-center justify-center p-4 relative overflow-hidden">
                  <IndustryVisual industry={active} transitioning={transitioning} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
