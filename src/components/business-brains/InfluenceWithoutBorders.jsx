import React, { useState } from 'react';
import RealisticGlobeCanvas from '../hero/RealisticGlobe';

export default function InfluenceWithoutBorders() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const regions = [
    {
      id: "americas",
      zone: "ZONE 01",
      name: "The Americas",
      hubName: "Transatlantic & North American Capital Nexus",
      countries: [
        { name: "USA", city: "New York / San Francisco" },
        { name: "Canada", city: "Toronto / Vancouver" }
      ]
    },
    {
      id: "europe",
      zone: "ZONE 02",
      name: "Europe & UK",
      hubName: "European Union & Sovereign Tech Corridor",
      countries: [
        { name: "United Kingdom", city: "London" },
        { name: "European Union", city: "Paris / Berlin / Zurich" }
      ]
    },
    {
      id: "apac",
      zone: "ZONE 03",
      name: "Asia-Pacific",
      hubName: "APAC Innovation & Venture Ecosystem",
      countries: [
        { name: "Singapore / Hong Kong", city: "Financial Hubs" },
        { name: "India / Australia", city: "Tech Execution & Capital" }
      ]
    },
    {
      id: "middle-east",
      zone: "ZONE 04",
      name: "Middle East",
      hubName: "MENA Sovereign Wealth & AI Capital",
      countries: [
        { name: "United Arab Emirates", city: "Dubai / Abu Dhabi" }
      ]
    }
  ];

  // Path data strings for curved lines behind globe
  const paths = [
    "M 260 120 C 340 120, 420 170, 500 215",
    "M 260 330 C 340 330, 420 270, 500 215",
    "M 740 120 C 660 120, 580 170, 500 215",
    "M 740 330 C 660 330, 580 270, 500 215"
  ];

  return (
    <section className="relative bg-[#000110] text-white py-24 md:py-36 border-b border-slate-800/80 overflow-hidden">
      
      {/* Dynamic Keyframe Style for Flowing Laser Beams */}
      <style>{`
        @keyframes flowLaserCyan {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes flowLaserPurple {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Subtle Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span 
            className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-2 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            GLOBAL REACH
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Influence Without Borders
          </h2>

          <div className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#1746D2] font-mono uppercase tracking-wide">
            True power is not localized.
          </div>

          <p 
            className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-3xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A localized network limits your net worth. Business Brains operates seamlessly across the world’s most powerful financial and technological hubs, providing our members with instant, frictionless access to cross-border capital, strategic partnerships, and market entry. Our active syndicate spans:
          </p>
        </div>

        {/* MAIN STAGE: WIDER CARDS PLACEMENT + FLOWING GLOWING LASER BEAMS BEHIND GLOBE */}
        <div className="relative max-w-[82rem] mx-auto">
          
          {/* FLOWING GLOWING LASER BEAMS (BEHIND GLOBE Z-INDEX = 10) */}
          <svg 
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="laserGlowCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>

              <linearGradient id="laserGlowPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>

              {/* High-intensity Glow Filters */}
              <filter id="glowCyanFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowPurpleFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Path 0: Americas -> Flowing Cyan Laser Beam */}
            <path 
              d={paths[0]}
              fill="none" 
              stroke="url(#laserGlowCyan)" 
              strokeWidth={hoveredCard === 0 ? "4" : "2.5"}
              strokeDasharray="24 12"
              filter="url(#glowCyanFilter)"
              style={{ animation: 'flowLaserCyan 2s linear infinite' }}
              className="transition-all duration-300"
            />

            {/* Path 1: Europe & UK -> Flowing Cyan Laser Beam */}
            <path 
              d={paths[1]}
              fill="none" 
              stroke="url(#laserGlowCyan)" 
              strokeWidth={hoveredCard === 1 ? "4" : "2.5"}
              strokeDasharray="24 12"
              filter="url(#glowCyanFilter)"
              style={{ animation: 'flowLaserCyan 2.2s linear infinite' }}
              className="transition-all duration-300"
            />

            {/* Path 2: Asia-Pacific -> Flowing Purple Laser Beam */}
            <path 
              d={paths[2]}
              fill="none" 
              stroke="url(#laserGlowPurple)" 
              strokeWidth={hoveredCard === 2 ? "4" : "2.5"}
              strokeDasharray="24 12"
              filter="url(#glowPurpleFilter)"
              style={{ animation: 'flowLaserPurple 2s linear infinite' }}
              className="transition-all duration-300"
            />

            {/* Path 3: Middle East -> Flowing Purple Laser Beam */}
            <path 
              d={paths[3]}
              fill="none" 
              stroke="url(#laserGlowPurple)" 
              strokeWidth={hoveredCard === 3 ? "4" : "2.5"}
              strokeDasharray="24 12"
              filter="url(#glowPurpleFilter)"
              style={{ animation: 'flowLaserPurple 2.2s linear infinite' }}
              className="transition-all duration-300"
            />
          </svg>

          {/* 3-COLUMN GRID: WIDE CARDS SPACING | CENTER GLOBE Z-20 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: AMERICAS & EUROPE */}
            <div className="lg:col-span-3 space-y-10 flex flex-col justify-center z-30">
              {[regions[0], regions[1]].map((reg, idx) => {
                const globalIdx = idx;
                const isHovered = hoveredCard === globalIdx;
                return (
                  <div 
                    key={reg.id}
                    onMouseEnter={() => setHoveredCard(globalIdx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-5 rounded-2xl backdrop-blur-md transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                      isHovered 
                        ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.35)] -translate-y-1' 
                        : 'bg-white/[0.03] border-white/10 hover:border-cyan-500/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                          {reg.zone}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-300 font-bold">
                          Active Node
                        </span>
                      </div>

                      <h3 
                        className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {reg.name}
                      </h3>

                      <p className="text-[11px] font-mono text-slate-400 mb-3">
                        {reg.hubName}
                      </p>

                      <div className="space-y-1.5 pt-2.5 border-t border-white/10">
                        {reg.countries.map((c, cIdx) => (
                          <div key={cIdx} className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                            <span className="font-semibold text-slate-200">{c.name}</span>
                            <span className="text-[10px] font-mono text-cyan-400">📍 {c.city}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CENTER COLUMN: REAL 3D THREE.JS ROTATING EARTH GLOBE WITH ATMOSPHERIC BACKLIGHT */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center py-4 my-auto relative z-20">
              
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full flex items-center justify-center">
                
                {/* Natural Atmospheric Light Emanating from Behind the Earth */}
                <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.4)_0%,rgba(139,92,246,0.25)_45%,transparent_75%)] blur-2xl pointer-events-none animate-pulse" />

                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <RealisticGlobeCanvas disableRiseEffect={true} />
                </div>

              </div>

              {/* Caption Below Globe */}
              <div className="text-center mt-6 space-y-1">
                <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  SOVEREIGN SYNDICATE NETWORK
                </div>
                <p className="text-xs text-slate-400">Hover any region card to illuminate its direct connection path.</p>
              </div>

            </div>

            {/* RIGHT COLUMN: ASIA-PACIFIC & MIDDLE EAST */}
            <div className="lg:col-span-3 space-y-10 flex flex-col justify-center z-30">
              {[regions[2], regions[3]].map((reg, idx) => {
                const globalIdx = idx + 2;
                const isHovered = hoveredCard === globalIdx;
                return (
                  <div 
                    key={reg.id}
                    onMouseEnter={() => setHoveredCard(globalIdx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-5 rounded-2xl backdrop-blur-md transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                      isHovered 
                        ? 'bg-[#040916]/70 border-[#1746D2]/60 shadow-[0_0_30px_rgba(139,92,246,0.35)] -translate-y-1' 
                        : 'bg-white/[0.03] border-white/10 hover:border-[#1746D2]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] font-bold text-[#1746D2] uppercase tracking-wider">
                          {reg.zone}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#1746D2]/10 border border-[#1746D2]/20 text-[10px] font-mono text-[#1746D2]/80 font-bold">
                          Active Node
                        </span>
                      </div>

                      <h3 
                        className="text-xl font-bold text-white mb-1 group-hover:text-[#1746D2]/80 transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {reg.name}
                      </h3>

                      <p className="text-[11px] font-mono text-slate-400 mb-3">
                        {reg.hubName}
                      </p>

                      <div className="space-y-1.5 pt-2.5 border-t border-white/10">
                        {reg.countries.map((c, cIdx) => (
                          <div key={cIdx} className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                            <span className="font-semibold text-slate-200">{c.name}</span>
                            <span className="text-[10px] font-mono text-[#1746D2]">📍 {c.city}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10">
            <p 
              className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-3xl mx-auto"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Through our encrypted network, members execute cross-border expansions, secure international capital, and establish global supply chains with unprecedented speed.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
