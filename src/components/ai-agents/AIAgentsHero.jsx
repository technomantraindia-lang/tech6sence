import React, { useEffect, useState } from 'react';
import heroBgVideo from '../../assets/background removed.mp4';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function AIAgentsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 min-h-screen flex items-center pt-24 pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center animate-[fade-in_1.5s_ease-out]"
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        {/* Subtle dark gradient overlay to ensure text contrast on mobile and left side */}
        <div className="absolute inset-0 bg-slate-950/20 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Floating Text Container */}
          <div 
            className={`relative py-10 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Massive Ambient Glow Behind Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[150%] h-[150%] bg-[#0b1329]/20 blur-[120px] pointer-events-none rounded-full" />

            {/* Small Label with Status dot */}
            <div className="inline-flex items-center gap-3 mb-8 relative z-10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 drop-shadow-md">
                AI Agents & Automation
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.05] font-black tracking-[-0.04em] text-white mb-8 relative z-10 drop-shadow-2xl">
              <span className="whitespace-nowrap md:whitespace-normal">Where Intelligence</span> <br /> 
              Meets <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-[#1746D2]">Automation</span>
            </h1>

            {/* Paragraph */}
            <p className="font-body text-slate-200 text-lg md:text-xl font-medium tracking-wide leading-relaxed mb-12 max-w-lg relative z-10 drop-shadow-lg">
              We engineer custom autonomous systems that optimize workflows, scale operational capabilities, and orchestrate intelligent decision engines.
            </p>

            {/* Buttons - Premium Floating */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto relative z-10">
              <a 
                href="#consultation" 
                className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-3 rounded-full bg-white px-10 py-4 font-body text-base font-bold text-slate-950 transition-all hover:scale-[1.03] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]"
                {...touchHoverProps}
              >
                Schedule Consultation
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#usecases" 
                className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 font-display text-sm font-bold tracking-widest uppercase text-white transition-all hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 pb-1"
                {...touchHoverProps}
              >
                Explore Use Cases
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
