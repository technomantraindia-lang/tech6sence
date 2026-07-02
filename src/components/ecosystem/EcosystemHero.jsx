import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EcosystemHero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Light background accents */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-violet-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-50 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 opacity-50 pointer-events-none" />
      
      <div className="relative mx-auto max-w-[85rem] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                TECH6SENSE ECOSYSTEM
              </span>
            </div>
            
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-tight">
              Where AI Founders, Business Leaders, and Innovation Networks Grow Together
            </h1>
            
            <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              TECH6SENSE AI brings together visionary founders, business minds, AI experts, product builders, and growth-focused networks to support the creation of future-ready AI ventures and intelligent businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Link to="#explore" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 font-body text-sm font-bold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore the Ecosystem
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <Link to="#connect" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 font-body text-sm font-bold text-slate-700 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 transition-all">
                Connect with TECH6SENSE
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-400">
              <span className="text-violet-600">Founders</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Business leaders</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>AI innovation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Growth networks</span>
            </div>
          </div>

          {/* Right Visual: Ecosystem Network Abstract */}
          <div className={`relative h-[450px] lg:h-[600px] w-full flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            {/* The Network Container */}
            <div className="relative w-full max-w-[500px] aspect-square animate-float">
              
              {/* Background Circular Network */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 opacity-60 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-slate-100 opacity-60 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-20 rounded-full border-2 border-slate-50 opacity-60" />

              {/* Central AI Ecosystem Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-100 to-fuchsia-50 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-violet-400 rounded-full blur-xl opacity-30 animate-pulse" />
                  <svg className="w-10 h-10 text-violet-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full text-slate-200 z-0" viewBox="0 0 500 500">
                {/* Radiating Lines */}
                <path d="M250,250 L120,60" stroke="url(#violet-gradient-eco)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
                <path d="M250,250 L420,100" stroke="url(#violet-gradient-eco)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_4s_infinite]" />
                <path d="M250,250 L60,250" stroke="url(#violet-gradient-eco)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_5s_infinite]" />
                <path d="M250,250 L440,280" stroke="url(#violet-gradient-eco)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
                <path d="M250,250 L150,420" stroke="url(#violet-gradient-eco)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_4s_infinite]" />
                <path d="M250,250 L380,440" stroke="url(#violet-gradient-eco)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_2s_infinite]" />
                
                <defs>
                  <linearGradient id="violet-gradient-eco" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Labels */}
              <div className="absolute top-[8%] left-[10%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '0.2s' }}>
                <span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Visionary Founders</span>
              </div>
              
              <div className="absolute top-[15%] right-[5%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '0.8s' }}>
                <span className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.6)]" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Business Brains</span>
              </div>
              
              <div className="absolute top-[45%] left-[-5%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.4s' }}>
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">AI Experts</span>
              </div>

              <div className="absolute top-[52%] right-[-2%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.1s' }}>
                <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Product Builders</span>
              </div>

              <div className="absolute bottom-[12%] left-[15%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.9s' }}>
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Investors</span>
              </div>

              <div className="absolute bottom-[5%] right-[15%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '2.5s' }}>
                <span className="w-2 h-2 rounded-full bg-fuchsia-500" />
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Growth Partners</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />
    </section>
  );
}
