import React from 'react';
import founderImg from '../../assets/founder.png';

export default function FounderLetter() {
  return (
    <section className="relative bg-[#020617] text-white py-24 md:py-32 border-b border-slate-800/80 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-[-5%] w-[450px] h-[450px] bg-[#0b1329]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <span 
          className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-4 block"
        >
          FROM THE FOUNDER
        </span>

        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3"
        >
          A Letter from the Founder
        </h2>

        <div className="text-cyan-400 font-mono text-base md:text-lg mb-12">
          A Convergence of Apex Minds.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          
          {/* Left Column: Founder Photo Card */}
          <div className="lg:col-span-4 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
            
            {/* Founder Avatar Image */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-slate-900 border-2 border-cyan-500/50 flex flex-col items-center justify-center mb-6 relative overflow-hidden group shadow-[0_0_35px_rgba(6,182,212,0.3)]">
              <img 
                src={founderImg} 
                alt="Chintan - Founder of TECH6SENSE AI" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            <h3 
              className="text-2xl font-bold text-white mb-1"
            >
              Chintan
            </h3>

            <p 
              className="text-xs font-mono text-cyan-400 uppercase tracking-wider"
            >
              Founder of TECH6SENSE AI
            </p>
          </div>

          {/* Right Column: Letter Content */}
          <div className="lg:col-span-8 relative space-y-6">
            {/* Quotation Mark */}
            <div className="text-6xl md:text-8xl font-serif text-cyan-500/20 leading-none select-none font-bold">
              “
            </div>

            <div 
              className="text-base md:text-xl text-slate-200 leading-relaxed font-normal space-y-4 text-justify"
            >
              <p className="font-medium text-white">
                BUSINESS BRAINS was born out of a fundamental realization: true innovation and unprecedented wealth creation happen when strategic capital, technical supremacy, and visionary leadership collide in an environment of absolute trust.
              </p>
              <p className="text-slate-300 text-base md:text-lg">
                We built this Circle not for passive networking, but to serve as an unyielding growth engine for those shaping the future of global industry and artificial intelligence.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div 
                className="font-serif italic text-2xl md:text-3xl text-cyan-400 tracking-wider font-bold"
              >
                Chintan
              </div>
              <div className="text-xs font-mono text-slate-400">
                TECH6SENSE AI INSTITUTION
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
