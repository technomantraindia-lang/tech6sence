import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBgImage from '../../assets/contact-hero-bg.jpg';

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-[#050112] text-white text-center">
      
      {/* Generated Robotic AI & Human Handshake Full-Bleed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 scale-105 pointer-events-none transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      />
      
      {/* Dark Ambient Gradient Overlays for High Contrast & Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050112]/80 via-[#050112]/65 to-[#050112] z-0 pointer-events-none" />

      {/* Ambient Neon Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1746D2]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#00A86B]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-[#1746D2]/25 via-slate-900/80 to-[#00A86B]/25 border border-emerald-500/30 backdrop-blur-md shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A86B] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-300">
              LET'S CONNECT
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.08] font-extrabold text-white tracking-tight">
            Let’s Build Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-300 to-[#00A86B]">AI Advantage</span> Together
          </h1>
          
          {/* Body Description */}
          <p className="font-body text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            Whether you want to develop an AI product, automate business workflows, explore deep-tech innovation, or connect with the TECH6SENSE AI ecosystem, our team is ready to understand your vision and guide the next step.
          </p>
          
          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#form" 
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2] px-9 py-4 font-body text-base font-bold text-white shadow-[0_4px_25px_rgba(0,168,107,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_35px_rgba(23,70,210,0.5)]"
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
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-body text-base font-bold text-slate-200 hover:border-[#00A86B] hover:bg-white/10 hover:text-white transition-all shadow-md"
            >
              Explore Intelligent Solutions
            </Link>
          </div>
          
          {/* Sub-Brand Metadata Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm font-mono font-medium text-slate-400 pt-6">
            <span className="text-emerald-400 font-bold">✦ AI Solutions</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span>Deep-Tech Products</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span>Founder Ecosystem</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span>Global Innovation</span>
          </div>

        </div>
      </div>
    </section>
  );
}
