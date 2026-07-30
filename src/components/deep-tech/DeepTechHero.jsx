import React from 'react';
import { Link } from 'react-router-dom';
import heroBgVideo from '../../assets/deep-tech-product.mp4';

export default function DeepTechHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-28 pb-16">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-75">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        {/* Soft overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-slate-950/40 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/80" />
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none z-10" />
      
      {/* Ambient Halos */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="w-full px-8 md:px-16 lg:px-24 relative z-20 flex flex-col items-start text-left">
        
        {/* Inner wrapper to restrict content to half of the page */}
        <div className="w-full lg:max-w-[50%] flex flex-col items-start gap-1">
          
          {/* Upper Brand Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-950/60 backdrop-blur-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-300">
              Deep-Tech Products
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.8rem)] leading-none font-black tracking-tight text-white mb-6">
            Building the World's Next Generation of AI-Powered Deep-Tech Products
          </h1>

          {/* Sub-headline */}
          <p className="font-body text-slate-300 text-lg md:text-xl font-medium mb-4 leading-relaxed">
            TECH6SENSE AI is your global partner for AI-powered product development. From initial blueprint to a complete business ecosystem, we empower you to launch and scale your own next-generation tech product company.
          </p>

          {/* Premium Value Statement */}
          <p className="font-display text-base md:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300 italic mb-10">
            "From Concept to Global Commercialization — We Build the Future of Intelligent Hardware"
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-5 w-full">
          <Link
            to="/lets-connect?inquiry=Launch%20Product%20Brand"
            className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-9 py-4 font-body text-sm font-bold text-white shadow-[0_4px_25px_rgba(37,99,235,0.25)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_35px_rgba(37,99,235,0.45)]"
          >
            Launch Your AI Product Brand
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <a
            href="#portfolio"
            className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 backdrop-blur-md px-9 py-4 font-body text-sm font-bold text-slate-200 hover:border-emerald-500 hover:text-white transition-all shadow-sm"
          >
            Explore Deep-Tech Innovations
          </a>
        </div>
        
        </div>

      </div>
    </section>
  );
}
