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

function PointItem({ point, accent }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-7 h-7 shrink-0 rounded-lg flex items-center justify-center mt-0.5"
        style={{ background: accent + '10' }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke={accent} strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d={point.icon} />
        </svg>
      </div>
      <span className="font-body text-[0.88rem] text-slate-650 font-medium leading-snug">{point.text}</span>
    </div>
  );
}

export default function EcosystemSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(0);

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

  useEffect(() => {
    if (!isVisible) return;
    
    // Trigger progressive storytelling reveals
    const timer1 = setTimeout(() => setStep(1), 100);  // Reveal Left Panel
    const timer2 = setTimeout(() => setStep(2), 650);  // Draw Left connecting line
    const timer3 = setTimeout(() => setStep(3), 1150); // Reveal Center Ecosystem Hub
    const timer4 = setTimeout(() => setStep(4), 1650); // Draw Right connecting line
    const timer5 = setTimeout(() => setStep(5), 2150); // Reveal Right Panel

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #F6F5FF 50%, #FAFAFA 100%)' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes eco-line-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes eco-glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(124, 58, 237, 0.15), 0 0 40px rgba(217, 70, 239, 0.08); }
          50% { box-shadow: 0 0 30px rgba(124, 58, 237, 0.25), 0 0 60px rgba(217, 70, 239, 0.12); }
        }
        .eco-line-flow { background-size: 200% 100%; animation: eco-line-flow 3s linear infinite; }
        .eco-node-glow { animation: eco-glow-pulse 4s ease-in-out infinite; }
      `}} />

      {/* Ambient glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-violet-100/40 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-fuchsia-100/30 to-transparent blur-[110px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[85rem] px-6">
        {/* Top heading area */}
        <div 
          className="mb-10 md:mb-14 max-w-3xl mx-auto text-center transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            <span className="font-mono text-[0.65rem] font-bold tracking-[0.35em] uppercase text-violet-500">
              Ecosystem
            </span>
            <span className="h-[2px] w-10 bg-gradient-to-r from-fuchsia-500 to-violet-500" />
          </div>
          <h2 className="mb-5 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] font-extrabold text-slate-900 tracking-[-0.02em]">
            Build, Scale, and Connect with the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">
              TECH6SENSE Ecosystem
            </span>
          </h2>
          <p className="font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium max-w-2xl mx-auto">
            TECH6SENSE AI brings founders, investors, business leaders, and technology teams together to build AI-first companies, deep-tech ventures, and future-ready business networks.
          </p>
        </div>

        {/* Connected panels layout */}
        <div className="relative flex flex-col md:flex-row items-stretch gap-6 md:gap-0">

          {/* LEFT PANEL: Visionary Founders */}
          <div 
            className="flex-1 group transition-all duration-700 ease-out"
            style={{
              opacity: step >= 1 ? 1 : 0,
              transform: step >= 1 ? 'translateY(0)' : 'translateY(24px)'
            }}
          >
            <div className="h-full rounded-[2rem] border border-white/80 bg-white/70 backdrop-blur-xl p-7 md:p-9 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.08)]"
              style={{ boxShadow: '0 20px 50px -15px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.6) inset' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-50 border border-violet-100">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#7c3aed" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[0.55rem] font-bold tracking-[0.25em] uppercase text-violet-400 block">Program</span>
                  <h3 className="font-display text-[1.35rem] md:text-[1.5rem] font-extrabold text-slate-900 tracking-tight leading-tight">
                    Visionary Founders
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-[0.88rem] leading-[1.7] text-slate-500 font-medium mb-6">
                For entrepreneurs ready to launch, build, and scale their own AI, IT, or deep-tech business with expert support.
              </p>

              {/* Points */}
              <div className="flex flex-col gap-3.5 mb-7">
                {FOUNDERS_POINTS.map((point, i) => (
                  <PointItem key={i} point={point} accent="#7c3aed" />
                ))}
              </div>

              {/* CTA */}
              <a
                href="#founders"
                className="group/cta inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-display text-[0.8rem] font-bold tracking-wider text-white shadow-[0_4px_15px_rgba(124,58,237,0.2)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(124,58,237,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Founder Program
                <svg viewBox="0 0 20 20" className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m-4-4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* CENTER NODE + CONNECTING LINES (Desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center relative w-[120px] shrink-0">
            {/* Left connecting line */}
            <div
              className="absolute top-1/2 left-0 right-1/2 h-[2px] eco-line-flow transition-transform duration-500 ease-out"
              style={{ 
                background: 'linear-gradient(90deg, transparent, #7c3aed, #d946ef, transparent)', 
                backgroundSize: '200% 100%',
                transform: step >= 2 ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left'
              }}
            />
            {/* Right connecting line */}
            <div
              className="absolute top-1/2 left-1/2 right-0 h-[2px] eco-line-flow transition-transform duration-500 ease-out"
              style={{ 
                background: 'linear-gradient(90deg, transparent, #d946ef, #7c3aed, transparent)', 
                backgroundSize: '200% 100%', 
                animationDelay: '1.5s',
                transform: step >= 4 ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left'
              }}
            />
            {/* Center node */}
            <div 
              className={`relative z-10 w-[90px] h-[90px] rounded-full bg-white border border-violet-200/60 flex flex-col items-center justify-center gap-0.5 transition-all duration-550 ease-out ${step >= 3 ? 'eco-node-glow' : ''}`}
              style={{
                opacity: step >= 3 ? 1 : 0,
                transform: step >= 3 ? 'scale(1)' : 'scale(0.8)'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mb-0.5" stroke="#7c3aed" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <span className="font-display text-[0.42rem] font-bold tracking-[0.15em] uppercase text-violet-500 leading-tight text-center px-2">
                TECH6SENSE<br/>Ecosystem
              </span>
            </div>
          </div>

          {/* CENTER NODE (Mobile) */}
          <div className="flex md:hidden flex-col items-center py-2">
            {/* Top line */}
            <div 
              className="w-[2px] h-8 eco-line-flow transition-transform duration-500 ease-out" 
              style={{ 
                background: 'linear-gradient(180deg, transparent, #7c3aed, #d946ef)', 
                backgroundSize: '100% 200%',
                transform: step >= 2 ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top'
              }} 
            />
            {/* Node */}
            <div 
              className={`w-[80px] h-[80px] rounded-full bg-white border border-violet-200/60 flex flex-col items-center justify-center gap-0.5 my-2 transition-all duration-550 ease-out ${step >= 3 ? 'eco-node-glow' : ''}`}
              style={{
                opacity: step >= 3 ? 1 : 0,
                transform: step >= 3 ? 'scale(1)' : 'scale(0.8)'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mb-0.5" stroke="#7c3aed" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <span className="font-display text-[0.4rem] font-bold tracking-[0.15em] uppercase text-violet-500 leading-tight text-center px-2">
                TECH6SENSE<br/>Ecosystem
              </span>
            </div>
            {/* Bottom line */}
            <div 
              className="w-[2px] h-8 eco-line-flow transition-transform duration-500 ease-out" 
              style={{ 
                background: 'linear-gradient(180deg, #d946ef, #7c3aed, transparent)', 
                backgroundSize: '100% 200%',
                transform: step >= 4 ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top'
              }} 
            />
          </div>

          {/* RIGHT PANEL: Business Brains */}
          <div 
            className="flex-1 group transition-all duration-700 ease-out"
            style={{
              opacity: step >= 5 ? 1 : 0,
              transform: step >= 5 ? 'translateY(0)' : 'translateY(24px)'
            }}
          >
            <div className="h-full rounded-[2rem] border border-white/80 bg-white/70 backdrop-blur-xl p-7 md:p-9 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(217,70,239,0.08)]"
              style={{ boxShadow: '0 20px 50px -15px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.6) inset' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#d946ef" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[0.55rem] font-bold tracking-[0.25em] uppercase text-fuchsia-400 block">Network</span>
                  <h3 className="font-display text-[1.35rem] md:text-[1.5rem] font-extrabold text-slate-900 tracking-tight leading-tight">
                    Business Brains
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-[0.88rem] leading-[1.7] text-slate-500 font-medium mb-6">
                A network designed to connect investors, founders, business leaders, and technology innovators for future-ready AI collaboration.
              </p>

              {/* Points */}
              <div className="flex flex-col gap-3.5 mb-7">
                {BRAINS_POINTS.map((point, i) => (
                  <PointItem key={i} point={point} accent="#d946ef" />
                ))}
              </div>

              {/* CTA */}
              <a
                href="#business-brains"
                className="group/cta inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 font-display text-[0.8rem] font-bold tracking-wider text-white shadow-[0_4px_15px_rgba(217,70,239,0.2)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(217,70,239,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Join Business Brains
                <svg viewBox="0 0 20 20" className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m-4-4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
