import React, { useEffect, useState, useRef } from 'react';

export default function IntelligenceEcosystem() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const senses = [
    {
      title: 'SENSE Intelligence',
      desc: 'Advanced AI Development & Custom Solutions',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'SENSE Innovation',
      desc: 'Deep-Tech Product Development & Manufacturing',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'SENSE Growth',
      desc: 'Visionary Founders Business Ecosystem',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'SENSE Community',
      desc: 'Business Brains Network for Investors & Entrepreneurs',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'SENSE Integration',
      desc: 'Seamless Technology Deployment & Cloud Services',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'SENSE Future',
      desc: 'Continuous Research, Training & Evolution',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  // Left nodes: Intelligence, Community, Future | Right nodes: Innovation, Growth, Integration
  const leftNodes = [senses[0], senses[3], senses[5]];
  const rightNodes = [senses[1], senses[2], senses[4]];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#020817] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/[0.04] blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-[90rem] px-4 md:px-8 py-20 lg:py-28 relative z-10">

        {/* ─── DESKTOP DIAGRAM ─── */}
        <div className="hidden lg:block relative w-full" style={{ height: '75vh', maxHeight: '750px', minHeight: '550px' }}>

          {/* SVG Lines + Central Orb */}
          <svg
            className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-[2000ms] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            viewBox="0 0 1600 900"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                <stop offset="40%" stopColor="rgba(59,130,246,0.15)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
              </radialGradient>
              <radialGradient id="ci" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(147,197,253,0.6)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.3)" />
                <stop offset="100%" stopColor="rgba(30,64,175,0.1)" />
              </radialGradient>
              <filter id="gf">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="glow-strong">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              {/* Animated sweep gradients for LEFT lines */}
              <linearGradient id="sweep-l1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(59,130,246,0.05)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.05);rgba(59,130,246,0.05);rgba(96,165,250,0.8);rgba(59,130,246,0.05);rgba(59,130,246,0.05)" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="25%" stopColor="rgba(59,130,246,0.15)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.15);rgba(96,165,250,0.8);rgba(59,130,246,0.15);rgba(59,130,246,0.15);rgba(59,130,246,0.15)" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="rgba(59,130,246,0.3)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.3);rgba(59,130,246,0.15);rgba(59,130,246,0.3);rgba(96,165,250,0.8);rgba(59,130,246,0.3)" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="75%" stopColor="rgba(59,130,246,0.15)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.15);rgba(59,130,246,0.15);rgba(59,130,246,0.15);rgba(59,130,246,0.15);rgba(96,165,250,0.6)" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
              </linearGradient>

              <linearGradient id="sweep-l2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(59,130,246,0.05)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.05);rgba(59,130,246,0.05);rgba(59,130,246,0.05);rgba(96,165,250,0.7);rgba(59,130,246,0.05)" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="30%" stopColor="rgba(59,130,246,0.2)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.2);rgba(59,130,246,0.2);rgba(96,165,250,0.7);rgba(59,130,246,0.2);rgba(59,130,246,0.2)" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="60%" stopColor="rgba(59,130,246,0.3)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.3);rgba(96,165,250,0.7);rgba(59,130,246,0.3);rgba(59,130,246,0.3);rgba(59,130,246,0.3)" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
              </linearGradient>

              <linearGradient id="sweep-l3" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(59,130,246,0.05)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.05);rgba(96,165,250,0.7);rgba(59,130,246,0.05);rgba(59,130,246,0.05);rgba(59,130,246,0.05)" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="35%" stopColor="rgba(59,130,246,0.2)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.2);rgba(59,130,246,0.2);rgba(96,165,250,0.7);rgba(59,130,246,0.2);rgba(59,130,246,0.2)" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="70%" stopColor="rgba(59,130,246,0.3)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.3);rgba(59,130,246,0.3);rgba(59,130,246,0.3);rgba(96,165,250,0.7);rgba(59,130,246,0.3)" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
              </linearGradient>

              {/* Animated sweep gradients for RIGHT lines */}
              <linearGradient id="sweep-r1" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(59,130,246,0.05)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.05);rgba(59,130,246,0.05);rgba(96,165,250,0.8);rgba(59,130,246,0.05);rgba(59,130,246,0.05)" dur="4.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="25%" stopColor="rgba(59,130,246,0.15)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.15);rgba(96,165,250,0.8);rgba(59,130,246,0.15);rgba(59,130,246,0.15);rgba(59,130,246,0.15)" dur="4.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="rgba(59,130,246,0.3)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.3);rgba(59,130,246,0.15);rgba(59,130,246,0.3);rgba(96,165,250,0.8);rgba(59,130,246,0.3)" dur="4.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="75%" stopColor="rgba(59,130,246,0.15)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.15);rgba(59,130,246,0.15);rgba(59,130,246,0.15);rgba(59,130,246,0.15);rgba(96,165,250,0.6)" dur="4.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
              </linearGradient>

              <linearGradient id="sweep-r2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(59,130,246,0.05)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.05);rgba(59,130,246,0.05);rgba(59,130,246,0.05);rgba(96,165,250,0.7);rgba(59,130,246,0.05)" dur="5.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="30%" stopColor="rgba(59,130,246,0.2)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.2);rgba(59,130,246,0.2);rgba(96,165,250,0.7);rgba(59,130,246,0.2);rgba(59,130,246,0.2)" dur="5.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="60%" stopColor="rgba(59,130,246,0.3)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.3);rgba(96,165,250,0.7);rgba(59,130,246,0.3);rgba(59,130,246,0.3);rgba(59,130,246,0.3)" dur="5.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
              </linearGradient>

              <linearGradient id="sweep-r3" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(59,130,246,0.05)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.05);rgba(96,165,250,0.7);rgba(59,130,246,0.05);rgba(59,130,246,0.05);rgba(59,130,246,0.05)" dur="6.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="35%" stopColor="rgba(59,130,246,0.2)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.2);rgba(59,130,246,0.2);rgba(96,165,250,0.7);rgba(59,130,246,0.2);rgba(59,130,246,0.2)" dur="6.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="70%" stopColor="rgba(59,130,246,0.3)">
                  <animate attributeName="stopColor" values="rgba(59,130,246,0.3);rgba(59,130,246,0.3);rgba(59,130,246,0.3);rgba(96,165,250,0.7);rgba(59,130,246,0.3)" dur="6.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
              </linearGradient>
            </defs>

            {/* ── LEFT curves with animated glow sweep ── */}

            {/* L1: top-left base */}
            <path d="M800 450 C680 410, 520 310, 350 220 C290 185, 220 155, 130 130" stroke="rgba(59,130,246,0.12)" strokeWidth="1.5" fill="none" />
            <path d="M800 450 C670 400, 500 300, 330 210 C260 172, 190 140, 110 115" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" />
            {/* L1: animated glow layer */}
            <path d="M800 450 C680 410, 520 310, 350 220 C290 185, 220 155, 130 130" stroke="url(#sweep-l1)" strokeWidth="3" fill="none" filter="url(#glow-strong)" />

            {/* L2: middle-left base */}
            <path d="M800 450 C670 450, 480 450, 320 450 C250 450, 170 448, 100 445" stroke="rgba(59,130,246,0.12)" strokeWidth="1.5" fill="none" />
            <path d="M800 450 C660 458, 460 462, 300 460 C230 459, 150 455, 80 452" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" />
            {/* L2: animated glow layer */}
            <path d="M800 450 C670 450, 480 450, 320 450 C250 450, 170 448, 100 445" stroke="url(#sweep-l2)" strokeWidth="3" fill="none" filter="url(#glow-strong)" />

            {/* L3: bottom-left base */}
            <path d="M800 450 C680 490, 520 590, 350 680 C290 715, 220 745, 130 770" stroke="rgba(59,130,246,0.12)" strokeWidth="1.5" fill="none" />
            <path d="M800 450 C670 500, 500 600, 330 690 C260 728, 190 760, 110 785" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" />
            {/* L3: animated glow layer */}
            <path d="M800 450 C680 490, 520 590, 350 680 C290 715, 220 745, 130 770" stroke="url(#sweep-l3)" strokeWidth="3" fill="none" filter="url(#glow-strong)" />

            {/* ── RIGHT curves with animated glow sweep ── */}

            {/* R1: top-right base */}
            <path d="M800 450 C920 410, 1080 310, 1250 220 C1310 185, 1380 155, 1470 130" stroke="rgba(59,130,246,0.12)" strokeWidth="1.5" fill="none" />
            <path d="M800 450 C930 400, 1100 300, 1270 210 C1340 172, 1410 140, 1490 115" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" />
            {/* R1: animated glow layer */}
            <path d="M800 450 C920 410, 1080 310, 1250 220 C1310 185, 1380 155, 1470 130" stroke="url(#sweep-r1)" strokeWidth="3" fill="none" filter="url(#glow-strong)" />

            {/* R2: middle-right base */}
            <path d="M800 450 C930 450, 1120 450, 1280 450 C1350 450, 1430 448, 1500 445" stroke="rgba(59,130,246,0.12)" strokeWidth="1.5" fill="none" />
            <path d="M800 450 C940 458, 1140 462, 1300 460 C1370 459, 1450 455, 1520 452" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" />
            {/* R2: animated glow layer */}
            <path d="M800 450 C930 450, 1120 450, 1280 450 C1350 450, 1430 448, 1500 445" stroke="url(#sweep-r2)" strokeWidth="3" fill="none" filter="url(#glow-strong)" />

            {/* R3: bottom-right base */}
            <path d="M800 450 C920 490, 1080 590, 1250 680 C1310 715, 1380 745, 1470 770" stroke="rgba(59,130,246,0.12)" strokeWidth="1.5" fill="none" />
            <path d="M800 450 C930 500, 1100 600, 1270 690 C1340 728, 1410 760, 1490 785" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" />
            {/* R3: animated glow layer */}
            <path d="M800 450 C920 490, 1080 590, 1250 680 C1310 715, 1380 745, 1470 770" stroke="url(#sweep-r3)" strokeWidth="3" fill="none" filter="url(#glow-strong)" />

            {/* ── Central Orb with breathing animation ── */}
            <circle cx="800" cy="450" r="170" fill="url(#cg)">
              <animate attributeName="r" values="170;185;170" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="450" r="110" fill="url(#ci)">
              <animate attributeName="r" values="110;118;110" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="450" r="85" fill="rgba(30,64,175,0.12)" stroke="rgba(96,165,250,0.2)" strokeWidth="1">
              <animate attributeName="r" values="85;90;85" dur="5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.7;1" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="450" r="60" fill="rgba(59,130,246,0.1)" stroke="rgba(147,197,253,0.25)" strokeWidth="0.5">
              <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Pulse rings */}
            <circle cx="800" cy="450" r="95" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="1.5">
              <animate attributeName="r" values="95;160;95" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="450" r="75" fill="none" stroke="rgba(147,197,253,0.1)" strokeWidth="1">
              <animate attributeName="r" values="75;145;75" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.25;0;0.25" dur="5.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="450" r="60" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5">
              <animate attributeName="r" values="60;130;60" dur="7s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0;0.2" dur="7s" repeatCount="indefinite" />
            </circle>

            <circle cx="800" cy="450" r="35" fill="rgba(147,197,253,0.12)">
              <animate attributeName="r" values="35;40;35" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="450" r="18" fill="rgba(191,219,254,0.2)">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
            </circle>

            <text x="800" y="442" textAnchor="middle" fill="white" fontSize="24" fontWeight="500" letterSpacing="5" fontFamily="inherit">TECH6SENSE</text>
            <text x="800" y="470" textAnchor="middle" fill="rgba(147,197,253,0.8)" fontSize="13" fontWeight="400" letterSpacing="8" fontFamily="inherit">AI</text>
          </svg>

          {/* ─── LEFT NODES ─── */}

          {/* SENSE Intelligence (top-left) */}
          <div className={`absolute top-[5%] left-[0%] z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                {leftNodes[0].icon}
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-1.5">{leftNodes[0].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[280px]">{leftNodes[0].desc}</p>
              </div>
            </div>
          </div>

          {/* SENSE Community (middle-left) */}
          <div className={`absolute top-[43%] left-[0%] z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '500ms' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                {leftNodes[1].icon}
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-1.5">{leftNodes[1].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[280px]">{leftNodes[1].desc}</p>
              </div>
            </div>
          </div>

          {/* SENSE Future (bottom-left) */}
          <div className={`absolute bottom-[5%] left-[0%] z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '700ms' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                {leftNodes[2].icon}
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-1.5">{leftNodes[2].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[280px]">{leftNodes[2].desc}</p>
              </div>
            </div>
          </div>

          {/* ─── RIGHT NODES ─── */}

          {/* SENSE Innovation (top-right) */}
          <div className={`absolute top-[5%] right-[0%] z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-start gap-4 flex-row-reverse text-right">
              <div className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                {rightNodes[0].icon}
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-1.5">{rightNodes[0].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[280px] ml-auto">{rightNodes[0].desc}</p>
              </div>
            </div>
          </div>

          {/* SENSE Growth (middle-right) */}
          <div className={`absolute top-[43%] right-[0%] z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex items-start gap-4 flex-row-reverse text-right">
              <div className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                {rightNodes[1].icon}
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-1.5">{rightNodes[1].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[280px] ml-auto">{rightNodes[1].desc}</p>
              </div>
            </div>
          </div>

          {/* SENSE Integration (bottom-right) */}
          <div className={`absolute bottom-[5%] right-[0%] z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '800ms' }}>
            <div className="flex items-start gap-4 flex-row-reverse text-right">
              <div className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                {rightNodes[2].icon}
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-1.5">{rightNodes[2].title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[280px] ml-auto">{rightNodes[2].desc}</p>
              </div>
            </div>
          </div>

          {/* Bottom center text */}
          <div className={`absolute bottom-[-6%] left-1/2 -translate-x-1/2 z-10 text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1000ms' }}>
            <p className="text-[11px] text-slate-500 max-w-[400px] leading-relaxed">
              Intelligent processing core: advanced AI analyzes flows and determines optimal paths across all six dimensions
            </p>
          </div>
        </div>

        {/* ─── MOBILE LAYOUT ─── */}
        <div className="lg:hidden">
          {/* Mobile Center Orb */}
          <div className={`flex flex-col items-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-2 rounded-full bg-blue-500/5 border border-blue-400/20" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30" />
              <div className="relative z-10 text-center">
                <span className="block text-sm font-medium tracking-[0.12em] text-white">TECH6SENSE</span>
                <span className="block text-[10px] tracking-[0.2em] text-blue-300/80 mt-0.5">AI</span>
              </div>
            </div>
          </div>

          {/* Mobile grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {senses.map((item, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border border-blue-500/10 bg-blue-500/[0.03] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-white">{item.title}</h4>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <p className={`text-center mt-16 font-body text-xs md:text-sm text-slate-600 tracking-wide max-w-xl mx-auto transition-all duration-1000 delay-[1100ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          TECH6SENSE AI unites six dimensions of excellence into one high-performance intelligence ecosystem.
        </p>
      </div>
    </section>
  );
}
