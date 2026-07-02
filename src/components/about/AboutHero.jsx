import React, { useEffect, useState } from 'react';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 px-6 py-16 md:py-24 lg:py-32">
      {/* Background Soft Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-[85rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div 
            className={`flex flex-col items-start transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 border border-violet-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-800">
                About Tech6Sense AI
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-extrabold tracking-tight text-slate-900 mb-6">
              Where AI Research Meets <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Real-World</span> Business Transformation
            </h1>

            {/* Paragraph */}
            <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              TECH6SENSE AI is a global AI technology company built to transform bold ideas into intelligent systems, deep-tech products, and future-ready business ecosystems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a href="#solutions" className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-body text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                Explore Our Solutions
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#ecosystem" className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-4 font-body text-sm font-semibold text-slate-700 transition-all hover:border-violet-300 hover:text-violet-700 hover:shadow-[0_8px_25px_rgba(124,58,237,0.08)]">
                Meet the Ecosystem
              </a>
            </div>

            {/* Trust Line */}
            <div className="flex items-center gap-3 border-t border-slate-200 pt-6">
              <p className="text-xs md:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> PhD-led AI expertise</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Deep-tech innovation</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Global business ecosystem</span>
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div 
            className={`relative h-[500px] w-full hidden md:block transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Visual Container */}
            <div className="absolute inset-0 w-full h-full">
              
              {/* Soft Grid Background */}
              <div className="absolute inset-0 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.05)] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
                
                {/* Thin connection lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 250 L200 250 L250 150 L400 150" fill="none" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M150 400 L150 300 L250 250 L350 250 L350 100" fill="none" stroke="url(#line-grad-2)" strokeWidth="1" strokeDasharray="4 4" />
                  <defs>
                    <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(124,58,237,0.1)" />
                      <stop offset="50%" stopColor="rgba(124,58,237,0.4)" />
                      <stop offset="100%" stopColor="rgba(217,70,239,0.1)" />
                    </linearGradient>
                    <linearGradient id="line-grad-2" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(217,70,239,0.1)" />
                      <stop offset="50%" stopColor="rgba(217,70,239,0.4)" />
                      <stop offset="100%" stopColor="rgba(124,58,237,0.1)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Glowing intelligence node (Center) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-[0_0_40px_rgba(124,58,237,0.2)] border border-violet-100 flex items-center justify-center animate-[blob-float-1_10s_ease-in-out_infinite]">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-100 to-fuchsia-50 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-[2px] animate-pulse" />
                    <div className="absolute w-6 h-6 rounded-full bg-white" />
                    <svg className="absolute w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Light Dashboard Shape 1 */}
                <div className="absolute top-16 right-12 w-40 h-28 bg-white/80 backdrop-blur-md rounded-xl border border-slate-100 shadow-sm p-4 animate-[blob-float-2_12s_ease-in-out_infinite]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-6 h-6 rounded bg-violet-50 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">98.4%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                    </div>
                    <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-violet-200" />
                    </div>
                    <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-violet-100" />
                    </div>
                  </div>
                </div>

                {/* Light Dashboard Shape 2 */}
                <div className="absolute bottom-20 left-12 w-48 bg-white/90 backdrop-blur-md rounded-xl border border-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.04)] p-3 animate-[blob-float-3_14s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-100 to-violet-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Ecosystem Status</div>
                      <div className="text-sm font-semibold text-slate-800">Optimized & Active</div>
                    </div>
                  </div>
                </div>

                {/* Minimal Floating UI Label */}
                <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-white border border-violet-100 rounded-full shadow-sm animate-[blob-float-2_9s_ease-in-out_infinite_reverse]">
                  <span className="text-[10px] font-bold text-violet-600 tracking-wide">Deep-Tech Core</span>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
