import React, { useEffect, useState } from 'react';
import videoBg from '../../assets/deep-tech-product.mp4';

export default function DeepTechHero() {
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
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      <div className="mx-auto max-w-[85rem] px-6 relative z-10 w-full">
        <div className="max-w-2xl transition-all duration-1000 ease-out">
          
          {/* Tagline / Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-200">
              Deep-Tech & Product Lab
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-bold tracking-tight text-white mb-6">
            AI-Powered <br />
            Smart <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 font-extrabold drop-shadow-[0_2px_15px_rgba(167,139,250,0.3)]">Hardware & IP</span>
          </h1>

          {/* Paragraph */}
          <p className="font-body text-slate-300 text-base md:text-lg font-light tracking-wide leading-relaxed mb-10 max-w-xl">
            We engineer custom intelligent ecosystems—bridging advanced machine learning, smart IoT devices, health diagnostic tools, and edge technology.
          </p>

          {/* Telemetry Indicator */}
          <div className="flex items-center gap-8 mb-10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400 uppercase tracking-wider">Lab Status:</span>
              <span className="text-emerald-400 font-bold">Active</span>
            </div>
            <div className="w-px h-4 bg-white/15" />
            <div className="flex items-center gap-2">
              <span className="text-slate-400 uppercase tracking-wider">Release:</span>
              <span className="text-slate-200 font-bold">v1.8 optimized</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#categories" 
              className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 px-8 py-4 font-body text-sm font-semibold text-white transition-all hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] hover:scale-[1.02]"
            >
              Explore Categories
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#discuss" 
              className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm px-8 py-4 font-body text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              Discuss Innovation
            </a>
          </div>
            
          </div>
        </div>
    </section>
  );
}
