import React, { useEffect, useState } from 'react';

export default function AIAgentsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Soft Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <div 
            className={`flex flex-col items-start transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-800">
                AI Agents & Automation
              </span>
            </div>
            
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-extrabold tracking-tight text-slate-900 mb-6 max-w-2xl">
              Autonomous AI Systems That <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Move Business Forward</span>
            </h1>
            
            <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              TECH6SENSE AI builds intelligent agents and automation systems that execute workflows, reduce manual effort, and help teams make faster, smarter decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a 
                href="#consultation" 
                className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-body text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
              >
                Schedule Consultation
              </a>
              <a 
                href="#usecases" 
                className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-4 font-body text-sm font-semibold text-slate-700 transition-all hover:border-violet-300 hover:text-violet-700 hover:shadow-[0_8px_25px_rgba(124,58,237,0.08)]"
              >
                Explore Automation Use Cases
              </a>
            </div>
            
            <div className="pt-6 border-t border-slate-100 w-full">
              <p className="text-xs md:text-sm font-medium text-slate-500 flex flex-wrap gap-x-2 gap-y-2 items-center">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  AI agents
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Workflow automation
                </span>
                <span className="hidden lg:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Intelligent task execution
                </span>
              </p>
            </div>
          </div>

          {/* Right Column Visual */}
          <div 
            className={`relative w-full aspect-square md:h-[500px] md:aspect-auto flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-slate-50/60 border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.04)] overflow-hidden">
              
              {/* Soft background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] bg-violet-100/60 rounded-full blur-[80px]" />
              </div>

              {/* Abstract Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="flow-line" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(124,58,237,0.3)" />
                    <stop offset="100%" stopColor="rgba(217,70,239,0.1)" />
                  </linearGradient>
                </defs>
                <path d="M250 250 L100 150 M250 250 L400 150 M250 250 L120 380 M250 250 L380 380 M250 250 L250 80" stroke="url(#flow-line)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
              </svg>

              {/* Central AI Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center animate-[blob-float-1_10s_ease-in-out_infinite]">
                <div className="absolute w-24 h-24 bg-violet-300/40 rounded-full animate-ping opacity-75" />
                <div className="relative w-16 h-16 rounded-full bg-white border border-violet-100 shadow-xl flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600" />
                  <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-[12%] left-[18%] px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 shadow-sm flex items-center gap-2 animate-[blob-float-2_12s_ease-in-out_infinite]">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-bold text-slate-700">Task Execution</span>
              </div>

              <div className="absolute top-[28%] right-[10%] px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 shadow-sm flex items-center gap-2 animate-[blob-float-3_14s_ease-in-out_infinite]">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-[10px] font-bold text-slate-700">Workflow Logic</span>
              </div>

              <div className="absolute bottom-[25%] left-[10%] px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 shadow-sm flex items-center gap-2 animate-[blob-float-2_15s_ease-in-out_infinite_reverse]">
                <div className="w-2 h-2 rounded-full bg-fuchsia-400" />
                <span className="text-[10px] font-bold text-slate-700">Decision Engine</span>
              </div>

              <div className="absolute bottom-[18%] right-[20%] px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 shadow-sm flex items-center gap-2 animate-[blob-float-1_13s_ease-in-out_infinite]">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[10px] font-bold text-slate-700">Human Approval</span>
              </div>
              
              {/* Dashboard Interface Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] md:w-64 h-16 bg-white/90 backdrop-blur-md rounded-xl border border-slate-100 shadow-lg p-3 flex items-center justify-between z-20 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center shrink-0 border border-violet-100">
                    <svg className="w-5 h-5 text-violet-600 animate-[spin_4s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
                    <div className="h-1.5 w-24 bg-slate-100 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-md">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span className="text-[9px] font-bold text-emerald-700 uppercase">Active</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
