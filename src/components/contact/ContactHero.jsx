import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBgImage from '../../assets/contact-hero-bg.jpg';

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-[#050112] text-white">
      
      {/* Generated AI Neural Network Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 mix-blend-screen scale-105 pointer-events-none transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      />
      
      {/* Dark Ambient Gradient Overlays for High Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050112] via-[#050112]/85 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050112] via-transparent to-[#050112]/90 z-0 pointer-events-none" />

      {/* Ambient Neon Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#1746D2]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#00A86B]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1746D2]/25 via-slate-900/80 to-[#00A86B]/25 border border-emerald-500/30 backdrop-blur-md mb-8 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-300">
                LET'S CONNECT
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08] font-extrabold text-white mb-6 tracking-tight">
              Let’s Build Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-300 to-[#00A86B]">AI Advantage</span> Together
            </h1>
            
            {/* Body Description */}
            <p className="font-body text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-normal">
              Whether you want to develop an AI product, automate business workflows, explore deep-tech innovation, or connect with the TECH6SENSE AI ecosystem, our team is ready to understand your vision and guide the next step.
            </p>
            
            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <a 
                href="#form" 
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2] px-8 py-4 font-body text-sm font-bold text-white shadow-[0_4px_25px_rgba(0,168,107,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_35px_rgba(23,70,210,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Conversation
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              <Link 
                to="/ai-agents" 
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-body text-sm font-bold text-slate-200 hover:border-[#00A86B] hover:bg-white/10 hover:text-white transition-all shadow-md"
              >
                Explore Intelligent Solutions
              </Link>
            </div>
            
            {/* Sub-Brand Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-400">
              <span className="text-emerald-400 font-bold">✦ AI Solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span>Deep-Tech Products</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span>Founder Ecosystem</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span>Global Innovation</span>
            </div>
          </div>

          {/* Right Visual: Glassmorphic 3D HUD & AI Network Showcase */}
          <div className={`relative h-[480px] lg:h-[580px] w-full flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            <div className="relative w-full max-w-[540px] aspect-square rounded-3xl p-4 bg-slate-950/70 border border-white/15 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group">
              
              {/* Image Preview inside Glassmorphic HUD Card */}
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-3xl opacity-80 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${heroBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050112] via-slate-950/40 to-transparent pointer-events-none" />

              {/* Central Glowing Hub Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-950/90 rounded-2xl border border-emerald-500/40 flex items-center justify-center z-20 shadow-[0_0_40px_rgba(0,168,107,0.5)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#1746D2] to-[#00A86B] flex items-center justify-center relative shadow-inner">
                  <svg className="w-6 h-6 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>

              {/* Floating Topic Pills */}
              <div className="absolute top-[12%] left-[8%] bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-emerald-500/40 shadow-xl z-30 flex items-center gap-2.5 animate-float">
                <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-ping" />
                <span className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-wider">AI Consultation</span>
              </div>

              <div className="absolute top-[18%] right-[8%] bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-blue-500/40 shadow-xl z-30 flex items-center gap-2.5 animate-float" style={{ animationDelay: '1.2s' }}>
                <span className="w-2 h-2 rounded-full bg-[#1746D2] animate-ping" />
                <span className="font-mono text-xs font-bold text-blue-300 uppercase tracking-wider">Product Discussion</span>
              </div>

              <div className="absolute bottom-[28%] left-[8%] bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-emerald-500/40 shadow-xl z-30 flex items-center gap-2.5 animate-float" style={{ animationDelay: '2.4s' }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-wider">Founder Support</span>
              </div>

              <div className="absolute bottom-[14%] right-[10%] bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-blue-500/40 shadow-xl z-30 flex items-center gap-2.5 animate-float" style={{ animationDelay: '1.8s' }}>
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="font-mono text-xs font-bold text-blue-300 uppercase tracking-wider">Business Automation</span>
              </div>

              {/* Bottom Card Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 border border-white/10 backdrop-blur-md flex items-center justify-between z-30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#00A86B] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">TECH6SENSE AI Hub</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold">24/7 Response Guaranteed →</span>
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
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}} />
    </section>
  );
}
