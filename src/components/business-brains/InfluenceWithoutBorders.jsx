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
    <section id="reach" className="relative bg-[#000110] text-white py-24 md:py-36 border-b border-slate-800/80 overflow-hidden scroll-mt-32">
      
      {/* Dynamic Keyframe Style for Flowing Laser Beams */}
      <style>{`
        @keyframes flowLaserBlue {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes flowLaserGreen {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Subtle Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,107,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              GLOBAL REACH
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
            Influence Without Borders
          </h2>

          <div className="text-lg sm:text-xl font-extrabold text-white font-display tracking-wide">
            True power is not localized.
          </div>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
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
              <linearGradient id="laserGlowBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1746D2" stopOpacity="1.0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
              </linearGradient>

              <linearGradient id="laserGlowGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A86B" stopOpacity="1.0" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#34D399" stopOpacity="0.6" />
              </linearGradient>

              {/* High-intensity Glow Filters */}
              <filter id="glowBlueFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowGreenFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Path 0: Americas -> Flowing Brand Blue Laser Beam */}
            <path 
              d={paths[0]}
              fill="none" 
              stroke="url(#laserGlowBlue)" 
              strokeWidth={hoveredCard === 0 ? "4.5" : "3"}
              strokeDasharray="24 12"
              filter="url(#glowBlueFilter)"
              style={{ animation: 'flowLaserBlue 2s linear infinite' }}
              className="transition-all duration-300"
            />

            {/* Path 1: Europe & UK -> Flowing Brand Green Laser Beam */}
            <path 
              d={paths[1]}
              fill="none" 
              stroke="url(#laserGlowGreen)" 
              strokeWidth={hoveredCard === 1 ? "4.5" : "3"}
              strokeDasharray="24 12"
              filter="url(#glowGreenFilter)"
              style={{ animation: 'flowLaserGreen 2.2s linear infinite' }}
              className="transition-all duration-300"
            />

            {/* Path 2: Asia-Pacific -> Flowing Brand Blue Laser Beam */}
            <path 
              d={paths[2]}
              fill="none" 
              stroke="url(#laserGlowBlue)" 
              strokeWidth={hoveredCard === 2 ? "4.5" : "3"}
              strokeDasharray="24 12"
              filter="url(#glowBlueFilter)"
              style={{ animation: 'flowLaserBlue 2s linear infinite' }}
              className="transition-all duration-300"
            />

            {/* Path 3: Middle East -> Flowing Brand Green Laser Beam */}
            <path 
              d={paths[3]}
              fill="none" 
              stroke="url(#laserGlowGreen)" 
              strokeWidth={hoveredCard === 3 ? "4.5" : "3"}
              strokeDasharray="24 12"
              filter="url(#glowGreenFilter)"
              style={{ animation: 'flowLaserGreen 2.2s linear infinite' }}
              className="transition-all duration-300"
            />
          </svg>

          {/* 3-COLUMN GRID: WIDE CARDS SPACING | CENTER GLOBE Z-20 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: AMERICAS & EUROPE */}
            <div className="lg:col-span-3 space-y-10 flex flex-col justify-center z-30">
              {[regions[0], regions[1]].map((reg, idx) => {
                const globalIdx = idx; // 0 (Americas - Blue), 1 (Europe - Green)
                const isHovered = hoveredCard === globalIdx;
                const isBlue = globalIdx % 2 === 0;

                const hoverBg = isBlue
                  ? 'bg-[#1746D2] border-[#1746D2] shadow-[0_15px_35px_-5px_rgba(23,70,210,0.5)] -translate-y-1.5'
                  : 'bg-[#00A86B] border-[#00A86B] shadow-[0_15px_35px_-5px_rgba(0,168,107,0.5)] -translate-y-1.5';

                const defaultBg = isBlue
                  ? 'bg-slate-900/80 border-slate-800 hover:border-[#1746D2]/60'
                  : 'bg-slate-900/80 border-slate-800 hover:border-[#00A86B]/60';

                return (
                  <div 
                    key={reg.id}
                    onMouseEnter={() => setHoveredCard(globalIdx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                      isHovered ? hoverBg : defaultBg
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-mono text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                          isHovered ? 'text-[#FFD700]' : (isBlue ? 'text-blue-400' : 'text-emerald-400')
                        }`}>
                          {reg.zone}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold transition-colors ${
                          isHovered 
                            ? 'bg-black/25 border border-white/20 text-white' 
                            : (isBlue ? 'bg-blue-500/10 border border-blue-500/20 text-blue-300' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300')
                        }`}>
                          Active Node
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-white mb-1 transition-colors">
                        {reg.name}
                      </h3>

                      <p className={`text-[11px] font-mono mb-3.5 transition-colors ${
                        isHovered ? 'text-white/90 font-medium' : 'text-slate-400'
                      }`}>
                        {reg.hubName}
                      </p>

                      <div className={`space-y-1.5 pt-3 border-t transition-colors ${
                        isHovered ? 'border-white/20' : 'border-white/10'
                      }`}>
                        {reg.countries.map((c, cIdx) => (
                          <div 
                            key={cIdx} 
                            className={`flex items-center justify-between text-xs py-1.5 px-3 rounded-lg transition-colors ${
                              isHovered 
                                ? 'bg-white/15 border border-white/25 text-white' 
                                : 'bg-white/[0.03] border border-white/5 text-slate-200'
                            }`}
                          >
                            <span className="font-bold">{c.name}</span>
                            <span className={`text-[10px] font-mono transition-colors ${
                              isHovered ? 'text-[#FFD700] font-bold' : (isBlue ? 'text-blue-400' : 'text-emerald-400')
                            }`}>📍 {c.city}</span>
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
                <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_center,rgba(23,70,210,0.45)_0%,rgba(0,168,107,0.35)_45%,transparent_75%)] blur-2xl pointer-events-none animate-pulse" />

                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <RealisticGlobeCanvas disableRiseEffect={true} />
                </div>

              </div>

              {/* Caption Below Globe */}
              <div className="text-center mt-6 space-y-1">
                <div className="font-display text-sm font-extrabold text-emerald-400 uppercase tracking-widest">
                  SOVEREIGN SYNDICATE NETWORK
                </div>
                <p className="text-xs text-slate-400">Hover any region card to illuminate its direct connection path.</p>
              </div>

            </div>

            {/* RIGHT COLUMN: ASIA-PACIFIC & MIDDLE EAST */}
            <div className="lg:col-span-3 space-y-10 flex flex-col justify-center z-30">
              {[regions[2], regions[3]].map((reg, idx) => {
                const globalIdx = idx + 2; // 2 (APAC - Blue), 3 (Middle East - Green)
                const isHovered = hoveredCard === globalIdx;
                const isBlue = globalIdx % 2 === 0;

                const hoverBg = isBlue
                  ? 'bg-[#1746D2] border-[#1746D2] shadow-[0_15px_35px_-5px_rgba(23,70,210,0.5)] -translate-y-1.5'
                  : 'bg-[#00A86B] border-[#00A86B] shadow-[0_15px_35px_-5px_rgba(0,168,107,0.5)] -translate-y-1.5';

                const defaultBg = isBlue
                  ? 'bg-slate-900/80 border-slate-800 hover:border-[#1746D2]/60'
                  : 'bg-slate-900/80 border-slate-800 hover:border-[#00A86B]/60';

                return (
                  <div 
                    key={reg.id}
                    onMouseEnter={() => setHoveredCard(globalIdx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                      isHovered ? hoverBg : defaultBg
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-mono text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                          isHovered ? 'text-[#FFD700]' : (isBlue ? 'text-blue-400' : 'text-emerald-400')
                        }`}>
                          {reg.zone}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold transition-colors ${
                          isHovered 
                            ? 'bg-black/25 border border-white/20 text-white' 
                            : (isBlue ? 'bg-blue-500/10 border border-blue-500/20 text-blue-300' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300')
                        }`}>
                          Active Node
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-white mb-1 transition-colors">
                        {reg.name}
                      </h3>

                      <p className={`text-[11px] font-mono mb-3.5 transition-colors ${
                        isHovered ? 'text-white/90 font-medium' : 'text-slate-400'
                      }`}>
                        {reg.hubName}
                      </p>

                      <div className={`space-y-1.5 pt-3 border-t transition-colors ${
                        isHovered ? 'border-white/20' : 'border-white/10'
                      }`}>
                        {reg.countries.map((c, cIdx) => (
                          <div 
                            key={cIdx} 
                            className={`flex items-center justify-between text-xs py-1.5 px-3 rounded-lg transition-colors ${
                              isHovered 
                                ? 'bg-white/15 border border-white/25 text-white' 
                                : 'bg-white/[0.03] border border-white/5 text-slate-200'
                            }`}
                          >
                            <span className="font-bold">{c.name}</span>
                            <span className={`text-[10px] font-mono transition-colors ${
                              isHovered ? 'text-[#FFD700] font-bold' : (isBlue ? 'text-blue-400' : 'text-emerald-400')
                            }`}>📍 {c.city}</span>
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
            >
              Through our encrypted network, members execute cross-border expansions, secure international capital, and establish global supply chains with unprecedented speed.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
