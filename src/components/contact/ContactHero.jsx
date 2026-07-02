import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactHero() {
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
                LET'S CONNECT
              </span>
            </div>
            
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-tight">
              Let’s Build Your Next AI Advantage Together
            </h1>
            
            <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Whether you want to develop an AI product, automate business workflows, explore deep-tech innovation, or connect with the TECH6SENSE AI ecosystem, our team is ready to understand your vision and guide the next step.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Link to="#form" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 font-body text-sm font-bold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start a Conversation
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <Link to="/ai-agents" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 font-body text-sm font-bold text-slate-700 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 transition-all">
                Explore Intelligent Solutions
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-400">
              <span className="text-violet-600">AI solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Deep-tech products</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Founder ecosystem</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span>Global innovation</span>
            </div>
          </div>

          {/* Right Visual: Abstract Contact UI */}
          <div className={`relative h-[450px] lg:h-[600px] w-full flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            <div className="relative w-full max-w-[500px] aspect-square animate-float">
              
              {/* Light Grid Background */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjY2JkNWUxIiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8L3N2Zz4=')] opacity-60 rounded-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

              {/* Connected Dots Network */}
              <svg className="absolute inset-0 w-full h-full text-slate-200" viewBox="0 0 500 500">
                <path d="M250,250 L120,120" stroke="url(#contact-line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
                <path d="M250,250 L380,100" stroke="url(#contact-line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_4s_infinite]" />
                <path d="M250,250 L80,300" stroke="url(#contact-line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_2s_infinite]" />
                <path d="M250,250 L400,350" stroke="url(#contact-line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_5s_infinite]" />
                <path d="M250,250 L200,420" stroke="url(#contact-line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3.5s_infinite]" />
                <defs>
                  <linearGradient id="contact-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 flex items-center justify-center z-20 rotate-3">
                <div className="absolute inset-0 bg-violet-400 rounded-2xl blur-xl opacity-20 animate-pulse" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center relative shadow-inner">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>

              {/* Floating Message Cards */}
              <div className="absolute top-[15%] left-[5%] bg-white p-3 rounded-2xl border border-slate-200 shadow-sm z-30 flex items-center gap-3 animate-float -rotate-6" style={{ animationDelay: '0.2s' }}>
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                </div>
                <div>
                  <div className="w-16 h-1.5 bg-slate-200 rounded-full mb-1.5" />
                  <div className="w-10 h-1.5 bg-slate-100 rounded-full" />
                </div>
              </div>

              <div className="absolute top-[20%] right-[5%] bg-white p-3 rounded-2xl border border-slate-200 shadow-sm z-30 flex items-center gap-3 animate-float rotate-3" style={{ animationDelay: '1.5s' }}>
                <div className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500" />
                </div>
                <div>
                  <div className="w-20 h-1.5 bg-slate-200 rounded-full mb-1.5" />
                  <div className="w-12 h-1.5 bg-slate-100 rounded-full" />
                </div>
              </div>

              <div className="absolute bottom-[25%] left-[10%] bg-white p-3 rounded-2xl border border-slate-200 shadow-sm z-30 flex items-center gap-3 animate-float rotate-6" style={{ animationDelay: '0.8s' }}>
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="w-14 h-1.5 bg-slate-200 rounded-full mb-1.5" />
                  <div className="w-8 h-1.5 bg-slate-100 rounded-full" />
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-[8%] left-[45%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.2s' }}>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">AI Consultation</span>
              </div>
              
              <div className="absolute top-[45%] right-[-5%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '2.1s' }}>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Product Discussion</span>
              </div>

              <div className="absolute bottom-[10%] right-[20%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Business Automation</span>
              </div>

              <div className="absolute top-[60%] left-[-2%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.8s' }}>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Founder Support</span>
              </div>

              <div className="absolute bottom-[2%] left-[40%] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '2.6s' }}>
                <span className="font-mono text-[0.65rem] font-bold text-slate-700 uppercase tracking-wider hidden sm:block">Partnership</span>
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
