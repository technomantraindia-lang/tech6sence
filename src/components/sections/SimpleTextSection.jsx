import React from 'react';
import { Link } from 'react-router-dom';

export default function SimpleTextSection() {
  return (
    <section id="future-focus" className="relative w-full py-16 md:py-20 overflow-hidden bg-black">
      {/* Subtle decorative grid overlay for dark mode */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 [background-image:linear-gradient(rgba(239,68,68,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Soft gradient background glow behind the text */}
      <div className="absolute top-1/4 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-red-500/10 via-rose-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[85rem] px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          
          {/* Left Column: Premium Text Content */}
          <div className="flex flex-col justify-center">
            
            <p className="mb-4 font-body text-xl md:text-2xl text-slate-400 font-medium tracking-wide">
              Transforming Vision Into Intelligence
            </p>
            
            <h1 className="mb-10 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-extrabold text-white tracking-[-0.03em]">
              TECH<span className="text-red-500">6</span>SENSE AI
            </h1>



            <div className="flex flex-wrap gap-5">
              <Link to="#consultation" className="group relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-8 py-3.5 font-display text-sm font-bold tracking-widest text-white shadow-[0_4px_15px_rgba(220,38,38,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(220,38,38,0.4)] active:scale-[0.98]">
                <span className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10">SCHEDULE CONSULTATION</span>
              </Link>
              <Link to="#founders" className="group relative flex items-center justify-center overflow-hidden rounded-full border border-red-500/30 bg-red-950/40 px-8 py-3.5 font-display text-sm font-bold tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:border-red-500/60 hover:bg-red-900/40 hover:text-white active:scale-[0.98]">
                <span className="relative z-10">JOIN VISIONARY FOUNDERS</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Video Animation without border (blended) */}
          <div className="flex items-center justify-center w-full">
            <video 
              src="/background.webm" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto max-h-[480px] object-contain rounded-2xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
