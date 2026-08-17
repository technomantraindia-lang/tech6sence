import React, { useEffect, useState } from 'react';
import heroBgVideo from '../../assets/background removed.mp4';

export default function IntelligentHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 min-h-[85vh] flex flex-col justify-center pt-32 pb-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-75">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/40 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/80" />
      </div>

      {/* Ambient Backdrops */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1746D2]/15 blur-[160px] rounded-full" />

      {/* Main Hero Container */}
      <div className="mx-auto max-w-[1400px] px-6 relative z-10 w-full py-12">
        <div className={`max-w-4xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-[#1746D2]/20 bg-[#040916]/50 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-cyan-300">
              Intelligent Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.05] font-black tracking-tight text-white mb-6">
            Architecting the Future of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1746D2] via-fuchsia-400 to-cyan-400">
              Enterprise Intelligence.
            </span>
          </h1>

          {/* Tagline */}
          <div className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#1746D2]/80 mb-6 uppercase flex flex-wrap items-center gap-2">
            <span>Global AI Engineering</span>
            <span className="text-[#1746D2]">•</span>
            <span>Intelligent Automation</span>
            <span className="text-[#1746D2]">•</span>
            <span>Enterprise Software</span>
            <span className="text-[#1746D2]">•</span>
            <span>Digital Transformation</span>
          </div>

          {/* Subheadline */}
          <p className="font-body text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-3xl">
            TECH6SENSE AI empowers global enterprises with bespoke Artificial Intelligence, advanced automation, and full-stack IT capabilities. We transform complex data into autonomous ecosystems and measurable business impact.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-14">
            <a 
              href="/lets-connect?inquiry=AI%20Strategy" 
              className="group relative inline-flex justify-center items-center gap-3 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-9 py-4 font-body text-sm font-bold text-white shadow-[0_4px_25px_rgba(124,58,237,0.35)] transition-all hover:scale-[1.03] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]"
            >
              Talk to Our AI Strategy Team
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#ecosystem" 
              className="group relative inline-flex justify-center items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 backdrop-blur-md px-9 py-4 font-body text-sm font-bold text-slate-200 hover:border-[#1746D2] hover:text-white transition-all shadow-sm"
            >
              Explore Our Capabilities
            </a>
          </div>

          {/* Trust Statement */}
          <div className="pt-6 border-t border-slate-800/80">
            <p className="font-body text-sm font-medium text-slate-400 italic">
              "Trusted by startups, enterprises, government organizations, and innovators worldwide to engineer intelligent digital transformation."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
