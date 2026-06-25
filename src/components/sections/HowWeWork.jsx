import React, { useState, useEffect, useRef } from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    badge: 'Strategic Roadmap',
    description: 'We begin by thoroughly understanding your business objectives, evaluating AI feasibility, and designing a tailored strategic roadmap that aligns with your core vision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <defs>
          <linearGradient id="radar-sweep" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.4)" />
            <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(124, 58, 237, 0.08)" strokeWidth="1" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(124, 58, 237, 0.12)" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(124, 58, 237, 0.25)" strokeWidth="1.5" strokeDasharray="10 30" className="hww-spin-slow" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(217, 70, 239, 0.25)" strokeWidth="1.5" strokeDasharray="20 15" className="hww-spin-reverse" />
        <g className="hww-radar-sweep">
          <line x1="100" y1="100" x2="100" y2="30" stroke="rgba(124, 58, 237, 0.8)" strokeWidth="2" strokeLinecap="round" />
          <polygon points="100,100 100,30 120,35 100,100" fill="url(#radar-sweep)" opacity="0.4" />
        </g>
        <circle cx="100" cy="100" r="8" className="hww-center-dot" />
        <circle cx="100" cy="100" r="16" fill="none" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1" className="hww-ping-ring" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'Data Architecture',
    badge: 'Infrastructure Design',
    description: 'A robust AI needs a strong foundation. We architect secure, scalable data pipelines and optimize data engineering processes to ensure your models are trained on pristine information.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.018-.39.035-.586.053m0 0c-.25.023-.501.045-.752.066M12 3v1m0 0a4 4 0 014 4c0 1.6-1.5 2.8-1.5 4H9.5C8.5 10.8 7 9.6 7 8a4 4 0 014-4z" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <defs>
          <linearGradient id="flow-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
          <linearGradient id="flow-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
          <linearGradient id="flow-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        <path d="M 40 60 L 100 60 L 100 100 L 160 100" fill="none" stroke="rgba(217, 70, 239, 0.15)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 40 100 L 160 100" fill="none" stroke="rgba(217, 70, 239, 0.15)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 40 140 L 100 140 L 100 100 L 160 100" fill="none" stroke="rgba(217, 70, 239, 0.15)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 40 60 L 100 60 L 100 100 L 160 100" fill="none" stroke="url(#flow-grad-1)" strokeWidth="3" strokeDasharray="6, 18" className="hww-flow-dash" />
        <path d="M 40 100 L 160 100" fill="none" stroke="url(#flow-grad-2)" strokeWidth="3" strokeDasharray="6, 18" className="hww-flow-dash-mid" />
        <path d="M 40 140 L 100 140 L 100 100 L 160 100" fill="none" stroke="url(#flow-grad-3)" strokeWidth="3" strokeDasharray="6, 18" className="hww-flow-dash-fast" />
        <circle cx="40" cy="60" r="6" fill="white" stroke="#7c3aed" strokeWidth="2" />
        <circle cx="40" cy="100" r="6" fill="white" stroke="#6366f1" strokeWidth="2" />
        <circle cx="40" cy="140" r="6" fill="white" stroke="#d946ef" strokeWidth="2" />
        <g className="hww-pulse-anim">
          <rect x="154" y="85" width="22" height="30" rx="3" fill="none" stroke="#d946ef" strokeWidth="2" />
          <line x1="154" y1="95" x2="176" y2="95" stroke="#d946ef" strokeWidth="1" />
          <line x1="154" y1="105" x2="176" y2="105" stroke="#d946ef" strokeWidth="1" />
        </g>
      </svg>
    )
  },
  {
    num: '03',
    title: 'Model Engineering',
    badge: 'Neural Network Training',
    description: 'Our core expertise. We train, fine-tune, and rigorously test custom AI and deep-tech models, leveraging state-of-the-art frameworks to deliver precision and performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.771 4.902 4.902 0 003.123-.06 4.5 4.5 0 002.515-2.515c.14-.36.214-.75.214-1.146a4.48 4.48 0 00-1.146-3.003c-.26-.29-.553-.55-.867-.775M8.5 13l-4 4 2 2 4-4" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <defs>
          <linearGradient id="synapse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <g stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1">
          <line x1="40" y1="60" x2="90" y2="40" /><line x1="40" y1="60" x2="90" y2="80" />
          <line x1="40" y1="60" x2="90" y2="120" /><line x1="40" y1="60" x2="90" y2="160" />
          <line x1="40" y1="100" x2="90" y2="40" /><line x1="40" y1="100" x2="90" y2="80" />
          <line x1="40" y1="100" x2="90" y2="120" /><line x1="40" y1="100" x2="90" y2="160" />
          <line x1="40" y1="140" x2="90" y2="40" /><line x1="40" y1="140" x2="90" y2="80" />
          <line x1="40" y1="140" x2="90" y2="120" /><line x1="40" y1="140" x2="90" y2="160" />
          <line x1="90" y1="40" x2="160" y2="80" /><line x1="90" y1="40" x2="160" y2="120" />
          <line x1="90" y1="80" x2="160" y2="80" /><line x1="90" y1="80" x2="160" y2="120" />
          <line x1="90" y1="120" x2="160" y2="80" /><line x1="90" y1="120" x2="160" y2="120" />
          <line x1="90" y1="160" x2="160" y2="80" /><line x1="90" y1="160" x2="160" y2="120" />
        </g>
        <g stroke="url(#synapse-grad)" strokeWidth="1.5" strokeDasharray="3 15" className="hww-flow-dash">
          <line x1="40" y1="60" x2="90" y2="80" /><line x1="40" y1="100" x2="90" y2="120" />
          <line x1="40" y1="140" x2="90" y2="40" /><line x1="90" y1="80" x2="160" y2="120" />
          <line x1="90" y1="120" x2="160" y2="80" />
        </g>
        <circle cx="40" cy="60" r="4.5" fill="white" stroke="#7c3aed" strokeWidth="2" />
        <circle cx="40" cy="100" r="4.5" fill="white" stroke="#7c3aed" strokeWidth="2" />
        <circle cx="40" cy="140" r="4.5" fill="white" stroke="#7c3aed" strokeWidth="2" />
        <circle cx="90" cy="40" r="4.5" fill="white" stroke="#6366f1" strokeWidth="2" />
        <circle cx="90" cy="80" r="4.5" fill="white" stroke="#6366f1" strokeWidth="2" />
        <circle cx="90" cy="120" r="4.5" fill="white" stroke="#6366f1" strokeWidth="2" />
        <circle cx="90" cy="160" r="4.5" fill="white" stroke="#6366f1" strokeWidth="2" />
        <circle cx="160" cy="80" r="5.5" fill="white" stroke="#d946ef" strokeWidth="2" />
        <circle cx="160" cy="120" r="5.5" fill="white" stroke="#d946ef" strokeWidth="2" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'Deployment & Scaling',
    badge: 'Enterprise Integration',
    description: 'We seamlessly integrate the intelligence into your existing infrastructure, providing continuous monitoring, automated scaling, and ongoing iteration to ensure long-term success.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    graphic: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-h-[180px]">
        <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" className="hww-scale-ring-1" />
        <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(217, 70, 239, 0.2)" strokeWidth="1.5" className="hww-scale-ring-2" />
        <g className="hww-float-bounce">
          <polygon points="100,65 128,79 100,93 72,79" fill="rgba(168, 85, 247, 0.12)" stroke="#a855f7" strokeWidth="1.5" />
          <polygon points="72,79 100,93 100,125 72,111" fill="rgba(124, 58, 237, 0.18)" stroke="#7c3aed" strokeWidth="1.5" />
          <polygon points="128,79 100,93 100,125 128,111" fill="rgba(217, 70, 239, 0.22)" stroke="#d946ef" strokeWidth="1.5" />
          <circle cx="100" cy="93" r="4" className="hww-pulse-anim" style={{ fill: '#d946ef' }} />
        </g>
        <polygon points="50,110 42,120 58,120" fill="#7c3aed" className="hww-pulse-anim" />
        <polygon points="150,110 158,120 142,120" fill="#d946ef" className="hww-pulse-anim-delay-1" />
        <polygon points="100,40 105,48 95,48" fill="#a855f7" className="hww-pulse-anim-delay-2" />
      </svg>
    )
  }
];

const COLORS = [
  { accent: '#7c3aed', glow: 'rgba(124,58,237,0.15)' },
  { accent: '#d946ef', glow: 'rgba(217,70,239,0.15)' },
  { accent: '#6366f1', glow: 'rgba(99,102,241,0.15)' },
  { accent: '#a855f7', glow: 'rgba(168,85,247,0.15)' },
];

// 4-point star SVG for timeline markers
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

  // Auto-advance step and track progress based on time elapsed (3000ms duration)
  useEffect(() => {
    if (isHovered) return;

    const stepDuration = 3000; // 3 seconds
    const intervalTime = 30; // update progress every 30ms for 60fps smoothness
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
  }, [isHovered, activeStep]);

  const handleTabClick = (index) => {
    setActiveStep(index);
    setProgress(0); // reset progress on user click
  };

  return (
    <section id="how-we-work" className="relative w-full py-24 md:py-32 overflow-x-clip bg-[#FAFAFA]">
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
        .hww-center-dot { fill: #7c3aed; animation: hww-pulse 2s ease-in-out infinite; }
        .hww-ping-ring { transform-origin: center; transform-box: fill-box; animation: hww-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .hww-pulse-anim { animation: hww-pulse 2s ease-in-out infinite; }
        .hww-pulse-anim-delay-1 { animation: hww-pulse 2s ease-in-out infinite; animation-delay: 0.5s; }
        .hww-pulse-anim-delay-2 { animation: hww-pulse 2s ease-in-out infinite; animation-delay: 1s; }
        .hww-card-enter { animation: hww-card-enter-kf 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}} />

      {/* Premium Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBMMCAwTDAgNjBMMTYwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwgMCwgMCwgMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="absolute top-[0%] left-[20%] w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full bg-violet-100/40 mix-blend-multiply blur-[120px]" style={{ animation: 'hww-mesh-drift 20s ease-in-out infinite' }} />
        <div className="absolute bottom-[-10%] right-[10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] rounded-full bg-fuchsia-100/40 mix-blend-multiply blur-[120px]" style={{ animation: 'hww-mesh-drift 25s ease-in-out infinite reverse' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[85rem] px-6">

        {/* Section Header */}
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-slate-200" />
            <span className="font-mono text-xs font-bold tracking-[0.4em] text-slate-400 uppercase">METHODOLOGY</span>
            <span className="h-[2px] w-12 bg-gradient-to-l from-transparent to-slate-200" />
          </div>
          <h2 className="mb-8 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-extrabold text-slate-900 tracking-[-0.03em]">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600">Work</span>
          </h2>
          <p className="max-w-2xl font-body text-[1.1rem] leading-relaxed text-slate-500 font-medium">
            A structured, deep-tech engineering process designed to transform your ambitious visions into robust, scalable, and intelligent realities.
          </p>
        </div>

        {/* ================================================
            DESKTOP: Auto-Rotating Tab Dashboard Layout
            Left = Clickable Tabs with Timer Progress
            Right = Unified Glassmorphic Display Card
            ================================================ */}
        <div 
          className="relative hidden md:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-[1fr_2.2fr] gap-x-12 items-stretch relative">

            {/* LEFT COLUMN: Steps Tab Sidebar */}
            <div className="flex flex-col justify-center gap-4 py-4">
              {STEPS.map((step, index) => {
                const isActive = index === activeStep;
                const c = COLORS[index];
                return (
                  <button
                    key={step.num}
                    onClick={() => handleTabClick(index)}
                    className="w-full text-left p-6 rounded-3xl transition-all duration-300 relative border flex items-center gap-5 cursor-pointer outline-none select-none bg-white/20 hover:bg-white/40"
                    style={{
                      borderColor: isActive ? 'rgba(226, 232, 240, 0.8)' : 'transparent',
                      boxShadow: isActive
                        ? `0 15px 30px -10px rgba(0,0,0,0.02), 0 0 0 1px rgba(255,255,255,0.8) inset, 0 0 20px ${c.glow}`
                        : 'none',
                      background: isActive ? 'rgba(255, 255, 255, 0.85)' : undefined,
                    }}
                  >
                    {/* Step Number Badge */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-lg transition-all duration-300 shadow-sm border"
                      style={{
                        background: isActive ? c.accent : 'rgba(255, 255, 255, 0.6)',
                        borderColor: isActive ? c.accent + '30' : 'rgba(226, 232, 240, 0.6)',
                        color: isActive ? '#fff' : '#64748b',
                        boxShadow: isActive ? `0 0 12px ${c.glow}` : 'none',
                      }}
                    >
                      {step.num}
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">
                        {step.badge}
                      </span>
                      <h4
                        className="font-display font-bold text-slate-800 tracking-tight transition-colors duration-300 text-[1.15rem]"
                        style={{ color: isActive ? '#0f172a' : '#64748b' }}
                      >
                        {step.title}
                      </h4>
                    </div>

                    {/* Timer Progress Indicator Line under active tab */}
                    {isActive && (
                      <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-[width] duration-100 ease-linear"
                          style={{
                            width: `${progress}%`,
                            background: `linear-gradient(to right, ${c.accent}, #d946ef)`,
                          }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Unified Glassmorphic Display Card */}
            <div className="relative flex items-center justify-center min-h-[480px]">
              {(() => {
                const step = STEPS[activeStep];
                const c = COLORS[activeStep];
                return (
                  <div
                    key={step.num}
                    className="w-full hww-card-enter"
                    style={{ position: 'relative', zIndex: 10 }}
                  >
                    {/* Unified glass dashboard card */}
                    <div
                      className="w-full rounded-[2.5rem] flex flex-row items-stretch relative backdrop-blur-xl bg-white/70 border border-white/80 p-8 lg:p-12 gap-8 lg:gap-12"
                      style={{
                        boxShadow: `0 40px 80px -20px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.7) inset, 0 0 40px ${c.glow}`,
                      }}
                    >
                      {/* Left half: Details */}
                      <div className="flex-1 flex flex-col justify-center relative z-10">
                        {/* Badge pill */}
                        <div className="mb-5">
                          <span
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase border bg-white shadow-sm"
                            style={{
                              borderColor: c.accent + '30',
                              color: c.accent,
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: c.accent }} />
                            {step.badge}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-[1.8rem] lg:text-[2.2rem] font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="font-body text-[0.95rem] leading-[1.7] text-slate-500 font-medium">
                          {step.description}
                        </p>
                      </div>

                      {/* Right half: SVG Animation Canvas */}
                      <div className="w-[42%] lg:w-[45%] shrink-0 rounded-3xl relative overflow-hidden bg-white/50 border border-slate-100/80 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col">
                        <div className="h-8 border-b border-slate-100 flex items-center px-4 gap-1.5 bg-white/40">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        </div>
                        <div className="flex items-center justify-center p-6 relative min-h-[260px] lg:min-h-[300px]">
                          {step.graphic()}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>

        {/* ================================================
            MOBILE VIEW
            ================================================ */}
        <div className="relative md:hidden flex flex-col gap-8">
          <div className="absolute left-[30px] top-8 bottom-8 w-[1px] bg-slate-200" aria-hidden="true" />
          
          {STEPS.map((step, index) => {
            const c = COLORS[index];
            return (
              <div className="relative pl-[60px]" key={step.num}>
                {/* Timeline Dot */}
                <div className="absolute left-[22px] top-6 flex h-[16px] w-[16px] shrink-0 items-center justify-center z-20">
                  <div className="absolute inset-0 rounded-full border-[3px] border-white shadow-sm" style={{ background: c.accent }} />
                </div>
                
                {/* Mobile Card */}
                <div className="w-full bg-white/80 backdrop-blur-md border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.04)] rounded-[1.5rem] p-6 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-100 bg-white" style={{ color: c.accent }}>
                      {step.icon}
                    </div>
                    <span className="font-display text-[2.5rem] font-black opacity-10 select-none leading-none tracking-tighter" style={{ color: c.accent }}>
                      {step.num}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.accent }} />
                    <span className="text-[0.6rem] font-bold tracking-widest uppercase text-slate-500">{step.badge}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-sm leading-relaxed text-slate-500 mb-6 font-medium">
                    {step.description}
                  </p>
                  
                  <div className="w-full h-[140px] rounded-xl flex items-center justify-center relative bg-slate-50 border border-slate-100">
                    {step.graphic()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
