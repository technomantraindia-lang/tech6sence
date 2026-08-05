import React, { useState, useEffect, useRef } from 'react';

const FOUNDERS_POINTS = [
  { text: 'Company setup guidance', icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21' },
  { text: 'Branding and website support', icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42' },
  { text: 'Tech team and CTO guidance', icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' },
  { text: 'Client acquisition support', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
  { text: 'Funding and growth direction', icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' },
];

const BRAINS_POINTS = [
  { text: 'Investor-founder networking', icon: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5' },
  { text: 'AI business collaboration', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.018-.39.035-.586.053m0 0c-.25.023-.501.045-.752.066' },
  { text: 'Strategic partnerships', icon: 'M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075-5.925a1.575 1.575 0 013.15 0v1.5c0 .12-.014.238-.04.352M13.2 7.075v3.382a1.575 1.575 0 003.1.26V5.574c0-.047-.002-.093-.006-.14a1.576 1.576 0 013.156.104v2.962c0 3.07-1.7 5.9-4.45 7.313a1.054 1.054 0 01-1 0c-2.75-1.413-4.45-4.243-4.45-7.313V6.075a1.575 1.575 0 013.15 0v1' },
  { text: 'Growth ecosystem', icon: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z' },
  { text: 'Global business connections', icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' },
];

function EcoListItem({ point, index, color }) {
  return (
    <div className="group flex items-center gap-4 py-3.5 border-b border-slate-200/40 hover:border-slate-300 transition-colors">
      <span className="font-mono text-[0.65rem] font-bold text-slate-400 group-hover:text-slate-600 transition-colors">0{index + 1}</span>
      <span className="font-body text-[0.95rem] text-slate-700 font-medium flex-1 transition-transform duration-300 group-hover:translate-x-1">{point.text}</span>
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" style={{ stroke: color }} strokeWidth="2.5">
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
      className="relative w-full py-20 md:py-32 overflow-hidden bg-white"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .anim-slow-spin { animation: slow-spin 30s linear infinite; }
      `}} />

      {/* Decorative Dynamic Background Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* Large rotating gradient blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] anim-slow-spin opacity-40 mix-blend-multiply">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-violet-200/60 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-fuchsia-200/50 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-indigo-200/50 rounded-full blur-[80px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[85rem] px-6">
        
        {/* Center alignment, large striking typography */}
        <div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-8 transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-mono text-[0.7rem] font-bold tracking-[0.3em] uppercase text-slate-400">
                Network & Ecosystem
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-black text-slate-900 tracking-[-0.03em]">
              The Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                Intelligence Network.
              </span>
            </h2>
          </div>
          <p className="font-body text-[1.05rem] leading-[1.7] text-slate-500 font-medium max-w-md pb-2">
            Build, scale, and connect with visionary founders and investors in an ecosystem designed for deep-tech ventures and future-ready business collaboration.
          </p>
        </div>

        {/* Aligned Grid Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* LEFT: Visionary Founders */}
          <div 
            className="relative transition-all duration-1000 delay-300 ease-out h-full"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            {/* Solid white card with subtle inner borders and strong shadow */}
            <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.12)] border border-slate-100 overflow-hidden group h-full flex flex-col">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500" />
              
              {/* Background Icon Watermark */}
              <svg viewBox="0 0 24 24" fill="none" className="absolute -bottom-10 -right-10 w-64 h-64 text-blue-50/50 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" stroke="currentColor" strokeWidth="0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
              </svg>
 
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-blue-600" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[1.8rem] font-bold text-slate-900 tracking-tight">Visionary Founders</h3>
                </div>
                
                <p className="font-body text-slate-500 mb-8 leading-relaxed max-w-sm">
                  For entrepreneurs ready to launch, build, and scale their own AI, IT, or deep-tech business with expert support.
                </p>

                <div className="flex flex-col mb-10 flex-1">
                  {FOUNDERS_POINTS.map((point, i) => (
                    <EcoListItem key={i} index={i} point={point} color="#2563eb" />
                  ))}
                </div>

                <a href="#founders" className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-slate-900 text-white font-display font-bold tracking-wide transition-all hover:bg-blue-600 hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] mt-auto">
                  Explore Founder Program
                  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m-4-4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Business Brains */}
          <div 
            className="relative transition-all duration-1000 delay-500 ease-out h-full"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            {/* Slightly different style, emerald themed */}
            <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.12)] border border-slate-100 overflow-hidden group h-full flex flex-col">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-500" />
              
              {/* Background Icon Watermark */}
              <svg viewBox="0 0 24 24" fill="none" className="absolute -bottom-10 -right-10 w-64 h-64 text-emerald-50/50 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" stroke="currentColor" strokeWidth="0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
 
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-600" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[1.8rem] font-bold text-slate-900 tracking-tight">Business Brains</h3>
                </div>
                
                <p className="font-body text-slate-500 mb-8 leading-relaxed max-w-sm">
                  A network designed to connect investors, founders, business leaders, and innovators for future-ready collaboration.
                </p>

                <div className="flex flex-col mb-10 flex-1">
                  {BRAINS_POINTS.map((point, i) => (
                    <EcoListItem key={i} index={i} point={point} color="#10b981" />
                  ))}
                </div>

                <a href="#business-brains" className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-slate-900 text-white font-display font-bold tracking-wide transition-all hover:bg-emerald-600 hover:shadow-[0_8px_20px_rgba(16,185,129,0.3)] mt-auto">
                  Join Business Brains
                  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m-4-4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
