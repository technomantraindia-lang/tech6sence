import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DeepTechHero() {
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
                DEEP-TECH PRODUCTS
              </span>
            </div>
            
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-tight">
              AI-Powered Products Engineered for the Future
            </h1>
            
            <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              TECH6SENSE AI builds intelligent product ecosystems that connect artificial intelligence, smart hardware, wearable technology, IoT systems, and real-world innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Link to="#categories" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 font-body text-sm font-bold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Product Categories
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <Link to="#discuss" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 font-body text-sm font-bold text-slate-700 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 transition-all">
                Discuss Product Innovation
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-400">
              <span className="text-violet-600">AI wearables</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Healthcare devices</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>IoT intelligence</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Human augmentation</span>
            </div>
          </div>

          {/* Right Visual: Deep-Tech Product Lab Abstract */}
          <div className={`relative h-[450px] lg:h-[600px] w-full flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            {/* The Lab Container */}
            <div className="relative w-full max-w-[500px] aspect-square animate-float">
              
              {/* Central Device Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 flex items-center justify-center z-20">
                <div className="absolute inset-2 border border-slate-100 rounded-2xl flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-100 to-fuchsia-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                {/* Glowing Core */}
                <div className="absolute inset-0 bg-violet-400 rounded-3xl blur-2xl opacity-10 animate-pulse" />
              </div>

              {/* Connecting Lines & Nodes */}
              <svg className="absolute inset-0 w-full h-full text-slate-200 z-0" viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="origin-center animate-[spin_40s_linear_infinite]" />
                <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                
                {/* Connecting lines from center to labels */}
                <path d="M250,250 L100,150" stroke="url(#violet-gradient)" strokeWidth="1.5" />
                <path d="M250,250 L400,120" stroke="url(#violet-gradient)" strokeWidth="1.5" />
                <path d="M250,250 L80,350" stroke="url(#violet-gradient)" strokeWidth="1.5" />
                <path d="M250,250 L420,360" stroke="url(#violet-gradient)" strokeWidth="1.5" />
                
                <defs>
                  <linearGradient id="violet-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Labels */}
              <div className="absolute top-[20%] left-0 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">AI Wearables</span>
              </div>
              
              <div className="absolute top-[10%] right-[10%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <span className="w-2 h-2 rounded-full bg-fuchsia-500" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Health Intelligence</span>
              </div>
              
              <div className="absolute bottom-[25%] left-[-5%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                <svg className="w-3.5 h-3.5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Human Augmentation</span>
              </div>

              <div className="absolute bottom-[15%] right-0 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-violet-400 rounded-full animate-pulse" />
                  <div className="w-1 h-2 bg-slate-300 rounded-full" />
                  <div className="w-1 h-4 bg-fuchsia-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Smart IoT</span>
              </div>
              
              {/* Product Lab Badge */}
              <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 px-5 py-2.5 rounded-full shadow-lg z-30 flex items-center gap-3">
                <div className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
                </div>
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">Product Lab Active</span>
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
