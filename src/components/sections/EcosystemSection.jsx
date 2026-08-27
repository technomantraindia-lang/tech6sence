import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { touchHoverProps } from '../../hooks/useTouchHover';

const FOUNDERS_POINTS = [
  { text: 'Company formation, legal, and compliance', icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21' },
  { text: 'Branding, website, and marketing systems', icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42' },
  { text: 'Technology team and CTO direction', icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' },
  { text: 'Client acquisition and revenue support', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
  { text: 'Funding pathways and global growth direction', icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' },
];

const BRAINS_POINTS = [
  { text: 'The Syndicate â€” elite investor-founder matchmaking', icon: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5' },
  { text: 'The Triad â€” AI business co-creation and partnerships', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.018-.39.035-.586.053m0 0c-.25.023-.501.045-.752.066' },
  { text: 'Global Reach â€” connections across 9 markets', icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' },
  { text: 'The Privilege â€” exclusive events and deal flow', icon: 'M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075-5.925a1.575 1.575 0 013.15 0v1.5c0 .12-.014.238-.04.352M13.2 7.075v3.382a1.575 1.575 0 003.1.26V5.574c0-.047-.002-.093-.006-.14a1.576 1.576 0 013.156.104v2.962c0 3.07-1.7 5.9-4.45 7.313a1.054 1.054 0 01-1 0c-2.75-1.413-4.45-4.243-4.45-7.313V6.075a1.575 1.575 0 013.15 0v1' },
  { text: 'By invitation only â€” access is earned, not granted', icon: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z' },
];

function EcoListItem({ point, index, color, textColor = 'text-slate-700' }) {
  return (
    <div onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className={`group flex items-center gap-4 py-4 border-b border-white/10 hover:border-white/30 transition-colors`}>
      <span onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-display text-sm font-extrabold text-slate-400 group-hover:text-slate-300 transition-colors">0{index + 1}</span>
      <span onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className={`font-body text-[0.95rem] ${textColor} font-medium flex-1 transition-transform duration-300 group-hover:translate-x-1`}>{point.text}</span>
      <svg viewBox="0 0 24 24" fill="none" onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-5 h-5 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" style={{ stroke: color }} strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </div>
  );
}

export default function EcosystemSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative w-full py-12 md:py-16 overflow-hidden bg-white"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-3 sm:px-6">
        

        <div className="space-y-4">
          
          {/* VISIONARY FOUNDERS - Header */}
          <div className="mb-12 flex flex-col items-center text-center transition-all duration-1000 ease-out">
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1746D2] to-[#00A86B] rounded-full" />
              <span className="text-[#1746D2] font-mono font-bold tracking-[0.2em] uppercase text-sm">
                SENSE GROWTH
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-l from-[#1746D2] to-[#00A86B] rounded-full" />
            </div>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] font-black text-slate-900 tracking-tight">
              VISIONARY FOUNDERS <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B]">
                by TECH6SENSE AI
              </span>
            </h2>
          </div>

          {/* VISIONARY FOUNDERS - Premium Full Width Block */}
          <div 
            className="relative bg-[#0A1128] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-1000 ease-out group"
            {...touchHoverProps}
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(23,70,210,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#00A86B]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 px-4 py-7 sm:px-8 md:p-16 lg:p-20">
              
              {/* Left Content */}
              <div className="flex flex-col items-start text-white">
                <span className="font-display text-xs sm:text-sm font-extrabold text-[#FFD700] uppercase tracking-[0.2em] block px-3.5 sm:px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.15)] mb-6 sm:mb-8">
                  The Global AI Founder Ecosystem
                </span>

                <h3 className="font-display text-[clamp(1.8rem,3.5vw,3.5rem)] leading-[1.1] font-extrabold tracking-tight mb-6 sm:mb-8">
                  Build Your AI Empire Powered by a Global Ecosystem
                </h3>
                
                <p className="font-body text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-left sm:text-justify">
                  Visionary Founders is the worldâ€™s elite most comprehensive premier all-in-one AI Founder Ecosystem designed to transform ambitious entrepreneurs, professionals, start-up founders, consultants, and innovators into owners of globally competitive AI and technology companies and dominate the global markets.
                </p>

                <p className="font-body text-[#00A86B] text-base sm:text-lg md:text-xl font-semibold border-l-4 border-[#00A86B] pl-4 sm:pl-5 leading-relaxed mb-8 sm:mb-12 text-left sm:text-justify">
                  "From Idea to International Clients â€”We don't just simply train founders. We build AI companies with them."
                </p>

                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300 text-sm leading-relaxed mb-8 sm:mb-12 shadow-lg">
                  <p className="font-semibold text-white text-sm sm:text-base mb-4">
                    The ultimate shortcut from concept to cross-border enterprise. We supply the tech, the talent, the legal, and the capital pipelines. You bring the vision. We Building the Next Generation of Global AI Companies.
                  </p>
                  <div className="text-xs text-slate-400 border-t border-white/10 pt-4 font-mono">
                    Built by TECH6SENSE AI. Trusted by founders across the USA, UK, Australia, Canada, UAE, EU, India and Singapore.
                  </div>
                </div>

                <Link to="/visionary-founders" className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-[#1746D2] to-[#1746D2]/80 text-white font-display font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.5)]">
                  Discover Visionary Founders
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m-4-4l4 4-4 4" />
                  </svg>
                </Link>
              </div>

              {/* Right Content - Features */}
              <div className="flex flex-col justify-center h-full pt-8 lg:pt-0 lg:pl-8 lg:border-l border-white/10">
                <h4 className="font-display text-2xl font-bold text-white mb-8">Ecosystem Capabilities</h4>
                <div className="flex flex-col flex-1">
                  {FOUNDERS_POINTS.map((point, i) => (
                    <EcoListItem key={i} index={i} point={point} color="#1746D2" textColor="text-slate-300" />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* BUSINESS BRAINS - Header */}
          <div className="pt-24 mb-12 flex flex-col items-center text-center transition-all duration-1000 ease-out">
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#00A86B] to-[#D4AF37] rounded-full" />
              <span className="text-[#00A86B] font-mono font-bold tracking-[0.2em] uppercase text-sm">
                SENSE CONNECTION
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-l from-[#00A86B] to-[#D4AF37] rounded-full" />
            </div>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] font-black text-slate-900 tracking-tight">
              BUSINESS BRAINS <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] to-[#D4AF37]">
                Powered by TECH6SENSE AI
              </span>
            </h2>
          </div>

          {/* BUSINESS BRAINS - Premium Full Width Block */}
          <div 
            className="relative bg-[#021A12] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-1000 delay-200 ease-out group"
            {...touchHoverProps}
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,168,107,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 px-4 py-7 sm:px-8 md:p-16 lg:p-20">
              
              {/* Left Content - Features */}
              <div className="flex flex-col justify-center h-full order-2 lg:order-1 pb-8 lg:pb-0 lg:pr-8 lg:border-r border-white/10">
                <p className="font-display text-sm text-[#00A86B] font-bold mb-3">BUSINESS BRAINS | PRIVATE GLOBAL CIRCLE</p>
                <p className="font-mono text-xs text-[#00A86B] tracking-[0.2em] uppercase font-bold mb-6 border-b border-white/10 pb-4">
                  BY INVITATION ONLY
                </p>
                <div className="flex flex-col flex-1">
                  {BRAINS_POINTS.map((point, i) => (
                    <EcoListItem key={i} index={i} point={point} color="#00A86B" textColor="text-slate-300" />
                  ))}
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col items-start text-white order-1 lg:order-2">
                <span className="font-display text-xs sm:text-sm font-extrabold text-[#00A86B] uppercase tracking-[0.2em] block px-3.5 sm:px-4 py-2 rounded-full bg-[#00A86B]/10 border border-[#00A86B]/20 mb-6 sm:mb-8">
                  The Nexus of Global Capital and Technological Supremacy
                </span>

                <h3 className="font-display text-[clamp(1.8rem,3vw,3.2rem)] leading-[1.15] font-extrabold tracking-tight mb-6">
                  The World's Most Exclusive Private Global Circle for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] to-emerald-400">
                    Elite Investors, Entrepreneurs &amp; Industry Leaders
                  </span>
                </h3>
                
                <p className="font-display text-emerald-400 text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 tracking-wide">
                  Stop Networking. <span className="text-white">Start Unlocking Millions.</span>
                </p>

                <div className="font-body text-slate-300 text-base sm:text-[1.05rem] leading-relaxed space-y-5 mb-8 text-left sm:text-justify">
                  <p>
                    Welcome to Business Brainsâ€”an invitation-only global syndicate reserved for elite investors, visionary entrepreneurs, and titans of industry. We operate beyond the public eye, at the absolute pinnacle of global commerce, capital, and artificial intelligence.
                  </p>
                  <p>
                    Operating at the intersection of limitless capital and bleeding-edge technology, this is the private room where next-level business paradigms are engineered and million-dollar opportunities are unlocked daily.
                  </p>
                  <p>
                    BUSINESS BRAINS is not designed for networking. It is built for influence, collaboration, investment, innovation, and legacy. Within this private circle, relationships become strategic alliances, conversations become global ventures, and visionary ideas become industry-defining companies.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300 text-sm leading-relaxed mb-12 shadow-lg">
                  <p className="font-body font-semibold text-white text-base mb-4">
                    Not a community. Not a platform. A Circle â€” and very few are Admitted.
                  </p>
                  <div className="text-xs text-[#00A86B] border-t border-white/10 pt-4 font-mono tracking-widest uppercase">
                    Access is Not Granted. It is Earned.
                  </div>
                </div>

                <Link to="/business-brains" className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#00A86B]/80 text-white font-display font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.5)]">
                  Explore Business Brains
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m-4-4l4 4-4 4" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
