import React, { useState, useEffect, useRef } from 'react';

const STEPS = [
  {
    num: '01',
    stage: 'S',
    name: 'Sense',
    title: 'S — Sense',
    badge: 'Opportunity Mapping',
    whatHappens: 'Signal mapping across data, workflow, and market. We establish what is knowable before deciding what is buildable.',
    whatYouReceive: 'Opportunity map, data readiness assessment, prioritised use-case portfolio.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <defs>
          <linearGradient id="radar-sweep" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(23, 70, 210, 0.4)" />
            <stop offset="100%" stopColor="rgba(23, 70, 210, 0)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(23, 70, 210, 0.08)" strokeWidth="1" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(23, 70, 210, 0.12)" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(23, 70, 210, 0.15)" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(23, 70, 210, 0.25)" strokeWidth="1.5" strokeDasharray="10 30" className="hww-spin-slow" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(0, 168, 107, 0.25)" strokeWidth="1.5" strokeDasharray="20 15" className="hww-spin-reverse" />
        <g className="hww-radar-sweep">
          <line x1="100" y1="100" x2="100" y2="30" stroke="rgba(23, 70, 210, 0.8)" strokeWidth="2" strokeLinecap="round" />
          <polygon points="100,100 100,30 120,35 100,100" fill="url(#radar-sweep)" opacity="0.4" />
        </g>
        <circle cx="100" cy="100" r="8" className="hww-center-dot" />
        <circle cx="100" cy="100" r="16" fill="none" stroke="rgba(23, 70, 210, 0.4)" strokeWidth="1" className="hww-ping-ring" />
      </svg>
    )
  },
  {
    num: '02',
    stage: 'E',
    name: 'Engineer',
    title: 'E — Engineer',
    badge: 'Production Build',
    whatHappens: 'Architecture and build — models, pipelines, interfaces, and integration into the systems your people already use.',
    whatYouReceive: 'Production architecture, working system, integration layer.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.018-.39.035-.586.053m0 0c-.25.023-.501.045-.752.066" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <defs>
          <linearGradient id="flow-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1746D2" />
            <stop offset="100%" stopColor="#00A86B" />
          </linearGradient>
          <linearGradient id="flow-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1746D2" />
            <stop offset="100%" stopColor="#00A86B" />
          </linearGradient>
          <linearGradient id="flow-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#00A86B" />
          </linearGradient>
        </defs>
        <path d="M 40 60 L 100 60 L 100 100 L 160 100" fill="none" stroke="rgba(0, 168, 107, 0.15)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 40 100 L 160 100" fill="none" stroke="rgba(0, 168, 107, 0.15)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 40 140 L 100 140 L 100 100 L 160 100" fill="none" stroke="rgba(0, 168, 107, 0.15)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 40 60 L 100 60 L 100 100 L 160 100" fill="none" stroke="url(#flow-grad-1)" strokeWidth="3" strokeDasharray="6, 18" className="hww-flow-dash" />
        <path d="M 40 100 L 160 100" fill="none" stroke="url(#flow-grad-2)" strokeWidth="3" strokeDasharray="6, 18" className="hww-flow-dash-mid" />
        <path d="M 40 140 L 100 140 L 100 100 L 160 100" fill="none" stroke="url(#flow-grad-3)" strokeWidth="3" strokeDasharray="6, 18" className="hww-flow-dash-fast" />
        <circle cx="40" cy="60" r="6" fill="white" stroke="#1746D2" strokeWidth="2" />
        <circle cx="40" cy="100" r="6" fill="white" stroke="#1746D2" strokeWidth="2" />
        <circle cx="40" cy="140" r="6" fill="white" stroke="#00A86B" strokeWidth="2" />
        <g className="hww-pulse-anim">
          <rect x="154" y="85" width="22" height="30" rx="3" fill="none" stroke="#00A86B" strokeWidth="2" />
          <line x1="154" y1="95" x2="176" y2="95" stroke="#00A86B" strokeWidth="1" />
          <line x1="154" y1="105" x2="176" y2="105" stroke="#00A86B" strokeWidth="1" />
        </g>
      </svg>
    )
  },
  {
    num: '03',
    stage: 'N',
    name: 'Navigate',
    title: 'N — Navigate',
    badge: 'Risk & Governance',
    whatHappens: 'Governance, risk, regulatory alignment, and model accountability designed in — not retrofitted after an audit.',
    whatYouReceive: 'Governance framework, risk register, compliance documentation, evaluation protocol.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.771 4.902 4.902 0 003.123-.06 4.5 4.5 0 002.515-2.515c.14-.36.214-.75.214-1.146a4.48 4.48 0 00-1.146-3.003c-.26-.29-.553-.55-.867-.775M8.5 13l-4 4 2 2 4-4" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <defs>
          <linearGradient id="synapse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1746D2" />
            <stop offset="50%" stopColor="#00A86B" />
            <stop offset="100%" stopColor="#1746D2" />
          </linearGradient>
        </defs>
        <g stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1">
          <line x1="40" y1="60" x2="90" y2="40" /><line x1="40" y1="60" x2="90" y2="80" />
          <line x1="40" y1="60" x2="90" y2="120" /><line x1="40" y1="60" x2="90" y2="160" />
          <line x1="90" y1="40" x2="150" y2="100" /><line x1="90" y1="80" x2="150" y2="100" />
          <line x1="90" y1="120" x2="150" y2="100" /><line x1="90" y1="160" x2="150" y2="100" />
        </g>
        <circle cx="40" cy="60" r="5" fill="#1746D2" />
        <circle cx="90" cy="40" r="7" fill="white" stroke="#00A86B" strokeWidth="2" />
        <circle cx="90" cy="80" r="7" fill="white" stroke="#1746D2" strokeWidth="2" />
        <circle cx="90" cy="120" r="7" fill="white" stroke="#00A86B" strokeWidth="2" />
        <circle cx="90" cy="160" r="7" fill="white" stroke="#1746D2" strokeWidth="2" />
        <circle cx="150" cy="100" r="10" fill="url(#synapse-grad)" className="hww-pulse-anim" />
      </svg>
    )
  },
  {
    num: '04',
    stage: 'S',
    name: 'Scale',
    title: 'S — Scale',
    badge: 'Global Deployment',
    whatHappens: 'Multi-region, multi-team, multi-workload deployment with performance and cost held to a defined envelope.',
    whatYouReceive: 'Deployment across markets, monitoring stack, cost and latency baselines.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-1-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <circle cx="100" cy="100" r="15" fill="none" stroke="rgba(23, 70, 210,0.6)" strokeWidth="1.5" className="hww-scale-ring-1" />
        <circle cx="100" cy="100" r="15" fill="none" stroke="rgba(0, 168, 107,0.6)" strokeWidth="1.5" className="hww-scale-ring-2" />
        <circle cx="100" cy="100" r="12" fill="#1746D2" opacity="0.2" />
        <circle cx="100" cy="100" r="6" fill="#1746D2" />
        <g className="hww-float-bounce">
          <circle cx="140" cy="60" r="8" fill="white" stroke="#00A86B" strokeWidth="2" />
          <circle cx="60" cy="140" r="8" fill="white" stroke="#1746D2" strokeWidth="2" />
          <circle cx="150" cy="130" r="6" fill="white" stroke="#D4AF37" strokeWidth="2" />
        </g>
      </svg>
    )
  },
  {
    num: '05',
    stage: 'E',
    name: 'Evolve',
    title: 'E — Evolve',
    badge: 'Continuous Improvement',
    whatHappens: "Continuous evaluation and retraining, so the system's advantage compounds instead of decaying.",
    whatYouReceive: 'Improvement cadence, drift monitoring, quarterly performance review.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(23, 70, 210,0.1)" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(0, 168, 107,0.15)" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="25" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(23, 70, 210,0.3)" strokeWidth="2" strokeDasharray="8 6" className="hww-spin-slow" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(0, 168, 107,0.3)" strokeWidth="1.5" strokeDasharray="5 8" className="hww-spin-reverse" />
        <circle cx="100" cy="100" r="8" className="hww-center-dot" />
        <circle cx="100" cy="100" r="16" fill="none" stroke="rgba(23, 70, 210, 0.4)" strokeWidth="1" className="hww-ping-ring" />
      </svg>
    )
  },
];

const COLORS = [
  { accent: '#1746D2', glow: 'rgba(23,70,210,0.15)' }, // Sense
  { accent: '#00A86B', glow: 'rgba(0,168,107,0.15)' }, // Engineer
  { accent: '#D4AF37', glow: 'rgba(212,175,55,0.15)' }, // Navigate
  { accent: '#1746D2', glow: 'rgba(23,70,210,0.15)' }, // Scale
  { accent: '#00A86B', glow: 'rgba(0,168,107,0.15)' }, // Evolve
];

// Star marker for step timeline
const StarIcon = ({ active, color }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path
      d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
      fill={active ? color : 'rgba(148,163,184,0.25)'}
      stroke={active ? color : 'rgba(148,163,184,0.3)'}
      strokeWidth="0.5"
      style={{
        filter: active ? `drop-shadow(0 0 8px ${color})` : 'none',
        transition: 'all 0.5s ease',
      }}
    />
  </svg>
);

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance step every 3.5 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;

    const stepDuration = 3500;
    const intervalTime = 30;
    const startTime = Date.now() - (progress / 100) * stepDuration;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= stepDuration) {
        setActiveStep((current) => (current + 1) % STEPS.length);
        setProgress(0);
      } else {
        setProgress((elapsed / stepDuration) * 100);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isHovered, activeStep, progress]);

  const handleTabClick = (index) => {
    setActiveStep(index);
    setProgress(0);
  };

  const step = STEPS[activeStep];
  const color = COLORS[activeStep];

  return (
    <section id="how-we-work" className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-x-clip bg-[#FAFAFA] border-t border-slate-200/80">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes hww-flow-dash { to { stroke-dashoffset: -24; } }
        @keyframes hww-scale-ring-1 { 0% { transform: scale(0.5); opacity: 1; stroke-width: 2; } 100% { transform: scale(3.25); opacity: 0; stroke-width: 0.5; } }
        @keyframes hww-scale-ring-2 { 0% { transform: scale(0.5); opacity: 0; stroke-width: 2; } 35% { opacity: 0.7; } 100% { transform: scale(4.25); opacity: 0; stroke-width: 0.5; } }
        @keyframes hww-float-bounce { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes hww-mesh-drift { 0% { transform: translate(0, 0) scale(1); } 33% { transform: translate(2%, 4%) scale(1.05); } 66% { transform: translate(-2%, 2%) scale(0.95); } 100% { transform: translate(0, 0) scale(1); } }
        @keyframes hww-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes hww-spin-reverse-kf { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes hww-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes hww-ping { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(2); opacity: 0; } }
        @keyframes hww-card-enter-kf { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
        
        .hww-flow-dash { animation: hww-flow-dash 2s linear infinite; }
        .hww-flow-dash-mid { animation: hww-flow-dash 2.5s linear infinite; }
        .hww-flow-dash-fast { animation: hww-flow-dash 1.8s linear infinite; }
        .hww-scale-ring-1 { transform-origin: center; transform-box: fill-box; animation: hww-scale-ring-1 3s infinite ease-out; }
        .hww-scale-ring-2 { transform-origin: center; transform-box: fill-box; animation: hww-scale-ring-2 3s infinite ease-out; }
        .hww-float-bounce { transform-origin: center; transform-box: fill-box; animation: hww-float-bounce 4s ease-in-out infinite; }
        .hww-spin-slow { transform-origin: center; transform-box: fill-box; animation: hww-spin 30s linear infinite; }
        .hww-spin-reverse { transform-origin: center; transform-box: fill-box; animation: hww-spin-reverse-kf 20s linear infinite; }
        .hww-radar-sweep { transform-origin: 100px 100px; animation: hww-spin 4s linear infinite; }
        .hww-center-dot { fill: #1746D2; animation: hww-pulse 2s ease-in-out infinite; }
        .hww-ping-ring { transform-origin: center; transform-box: fill-box; animation: hww-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .hww-pulse-anim { animation: hww-pulse 2s ease-in-out infinite; }
        .hww-card-enter { animation: hww-card-enter-kf 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}} />

      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAFAFA]">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#1746D2]/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#00A86B]/10 blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">

        {/* Section Header */}
        <div className="mb-14 md:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#1746D2] to-[#00A86B]" />
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE DELIVERY FRAMEWORK — S.E.N.S.E.
            </span>
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#00A86B] to-[#1746D2]" />
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] font-extrabold text-slate-900 tracking-tight mb-4">
            Five stages.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2]">
              No pilots that die in production.
            </span>
          </h2>

          <p className="font-body text-[1rem] md:text-[1.08rem] leading-[1.75] text-slate-600 font-medium max-w-3xl">
            The failure rate of enterprise AI is not a modelling problem. It is a sequencing problem — organisations build before they understand, deploy before they govern, and scale before they can measure. The S.E.N.S.E. framework exists to make each of those failures structurally impossible.
          </p>
        </div>

        {/* Interactive Step Timeline Bar */}
        <div className="relative mb-12 md:mb-16">
          {/* Horizontal Track Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200 -translate-y-1/2 z-0 hidden md:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 relative z-10">
            {STEPS.map((s, index) => {
              const active = activeStep === index;
              const stepColor = COLORS[index].accent;

              return (
                <button
                  key={s.num}
                  onClick={() => handleTabClick(index)}
                  className={`relative p-4 md:p-5 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center cursor-pointer ${
                    active
                      ? 'bg-white border-[#1746D2]/40 shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] scale-[1.02]'
                      : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Top Star Marker */}
                  <div className="mb-2">
                    <StarIcon active={active} color={stepColor} />
                  </div>

                  {/* Stage Number & Title */}
                  <div className="font-mono text-xs font-extrabold tracking-wider uppercase mb-1" style={{ color: active ? stepColor : '#64748B' }}>
                    {s.title}
                  </div>

                  <div className="font-body text-[0.7rem] font-bold text-slate-400 uppercase tracking-wider">
                    {s.badge}
                  </div>

                  {/* Active Progress Bar Underneath */}
                  {active && (
                    <div className="absolute bottom-0 left-3 right-3 h-[3px] rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full transition-all duration-75"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: stepColor,
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hww-card-enter relative rounded-[2.5rem] bg-white border border-slate-200/90 p-8 md:p-12 shadow-[0_10px_40px_rgba(15,23,42,0.04)] overflow-hidden"
          style={{ borderColor: `${color.accent}35` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left: Interactive Animated Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center p-6 bg-slate-50/80 rounded-3xl border border-slate-100 min-h-[220px]">
              {step.graphic()}
            </div>

            {/* Right: Detailed Stage Words & Deliverable */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Badge & Step Number */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-xs font-extrabold tracking-widest px-3.5 py-1.5 rounded-full border uppercase"
                  style={{
                    color: color.accent,
                    borderColor: `${color.accent}30`,
                    backgroundColor: `${color.accent}0D`,
                  }}
                >
                  {step.badge}
                </span>

                <span className="font-mono text-sm font-extrabold text-slate-400">
                  STAGE {step.num} / 05
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {step.title}
              </h3>

              {/* What Happens Paragraph */}
              <div className="mb-6">
                <span className="font-mono text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                  WHAT HAPPENS:
                </span>
                <p className="font-body text-slate-700 text-base md:text-lg font-semibold leading-relaxed">
                  {step.whatHappens}
                </p>
              </div>

              {/* What You Receive Box */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <span className="font-mono text-xs font-extrabold text-[#1746D2] uppercase tracking-wider block mb-1">
                  WHAT YOU RECEIVE:
                </span>
                <p className="font-body text-slate-900 text-sm md:text-base font-bold leading-relaxed">
                  {step.whatYouReceive}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
