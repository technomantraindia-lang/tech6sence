import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function IndustriesHero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Light background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-50 pointer-events-none" />
      
      <div className="relative mx-auto max-w-[85rem] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                INDUSTRIES
              </span>
            </div>
            
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-tight">
              AI Innovation Across High-Impact Industries
            </h1>
            
            <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              TECH6SENSE AI helps enterprises, startups, and digital-first organizations apply artificial intelligence, automation, data intelligence, and deep-tech products across real-world business environments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Link to="#explore" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 font-body text-sm font-bold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Industries
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <Link to="#discuss" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 font-body text-sm font-bold text-slate-700 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 transition-all">
                Discuss Your Industry Use Case
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-400">
              <span className="text-violet-600">AI solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Product innovation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Industry intelligence</span>
            </div>
          </div>

          {/* Right Visual: Industry Network Abstract */}
          <div className={`relative h-[450px] lg:h-[600px] w-full flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            {/* The Network Container */}
            <div className="relative w-full max-w-[500px] aspect-square animate-float">
              
              {/* Background Grid Map */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZTEyZjQ0IiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')] opacity-60 rounded-full" />
              <div className="absolute inset-0 rounded-full border border-slate-100/50 shadow-sm" />

              {/* Central AI Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-100 to-fuchsia-50 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-violet-400 rounded-full blur-xl opacity-20 animate-pulse" />
                  <svg className="w-8 h-8 text-violet-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>

              {/* Connecting Lines & Nodes */}
              <svg className="absolute inset-0 w-full h-full text-slate-200 z-0" viewBox="0 0 500 500">
                {/* Orbital Rings */}
                <circle cx="250" cy="250" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="origin-center animate-[spin_40s_linear_infinite]" />
                <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" className="origin-center animate-[spin_60s_linear_infinite_reverse]" opacity="0.5" />
                
                {/* Radiating Lines */}
                <path d="M250,250 L100,100" stroke="url(#violet-gradient-ind)" strokeWidth="1.5" />
                <path d="M250,250 L400,100" stroke="url(#violet-gradient-ind)" strokeWidth="1.5" />
                <path d="M250,250 L50,250" stroke="url(#violet-gradient-ind)" strokeWidth="1.5" />
                <path d="M250,250 L450,250" stroke="url(#violet-gradient-ind)" strokeWidth="1.5" />
                <path d="M250,250 L100,400" stroke="url(#violet-gradient-ind)" strokeWidth="1.5" />
                <path d="M250,250 L400,400" stroke="url(#violet-gradient-ind)" strokeWidth="1.5" />
                
                <defs>
                  <linearGradient id="violet-gradient-ind" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Industry Floating Labels */}
              <div className="absolute top-[12%] left-[12%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '0.2s' }}>
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Healthcare</span>
              </div>
              
              <div className="absolute top-[12%] right-[12%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '0.6s' }}>
                <span className="w-2 h-2 rounded-full bg-fuchsia-500" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Manufacturing</span>
              </div>
              
              <div className="absolute top-[45%] left-[-2%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-violet-400 rounded-full animate-pulse" />
                  <div className="w-1 h-2 bg-slate-300 rounded-full" />
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Finance</span>
              </div>

              <div className="absolute top-[45%] right-[-2%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.4s' }}>
                <svg className="w-3.5 h-3.5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Retail</span>
              </div>

              <div className="absolute bottom-[12%] left-[12%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.8s' }}>
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Smart Cities</span>
              </div>

              <div className="absolute bottom-[12%] right-[12%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '2.2s' }}>
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-fuchsia-400 rounded-full animate-pulse" />
                  <div className="w-1 h-3 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Logistics</span>
              </div>
              
              {/* Central Intelligence Badge */}
              <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 px-5 py-2.5 rounded-full shadow-lg z-30 flex items-center gap-3">
                <div className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
                </div>
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">Global AI Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />
    </section>
  );
}
