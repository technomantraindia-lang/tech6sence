import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../assets/new logo/TECH6SENSE Main Logo Transparent bg.svg';
import footerVideo from '../../assets/footer.mp4';

export default function Footer() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Intelligent Solutions', href: '/ai-agents' },
    { label: 'Deep-Tech Products', href: '/deep-tech-products' },
    { label: 'Visionary Founders', href: '/visionary-founders' },
    { label: 'Business Brains', href: '/business-brains' },
  ];

  return (
    <footer 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#050112] text-white font-body"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[center_75%] z-0 opacity-30 pointer-events-none"
      >
        <source src={footerVideo} type="video/mp4" />
      </video>

      {/* Ambient Gradient Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050112] via-[#050112]/90 to-[#050112]/80 z-0 pointer-events-none" />

      {/* Top Border with Center Star/Sparkle Symbol */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pt-8 px-6">
        <div className="relative w-full border-t border-slate-800/80 mb-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#050112] text-[#00A86B] text-xs">
            ✦
          </div>
        </div>
      </div>

      {/* Main Container Content */}
      <div 
        className={`relative z-10 w-full max-w-[1400px] mx-auto px-6 pb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Top Header Row: Email Contact on Left, Main Nav Links on Right */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16 md:mb-20">
          
          {/* Left: Contact Info Block */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs md:text-sm text-slate-400 mb-1 font-medium">
              Contact TECH6SENSE at:
            </span>
            <a 
              href="mailto:info@tech6senseai.com" 
              className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-[#1746D2] transition-colors flex items-center gap-2 group"
            >
              <span>info@tech6senseai.com</span>
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 text-[#00A86B] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Right: Horizontal Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm md:text-base font-semibold text-slate-200 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1746D2] to-[#00A86B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}
          </nav>

        </div>

        {/* Massive Center Brand Logo Showcase */}
        <div className="my-12 md:my-20 flex justify-center items-center w-full px-4">
          <Link to="/" className="w-full max-w-4xl md:max-w-6xl flex justify-center group">
            <img
              src={companyLogo}
              alt="TECH6SENSE AI"
              className="w-full h-auto max-h-36 md:max-h-52 object-contain filter drop-shadow-[0_0_40px_rgba(23,70,210,0.35)] transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Bottom Footer Bar: Copyright Left, Social Icons Right */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-400">
          
          {/* Copyright & Developed By Left */}
          <div>
            <span>© 2026 TECH6SENSE AI. All rights reserved. | Designed & Developed by </span>
            <a 
              href="https://technomantra.in/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#00A86B] font-bold hover:text-white transition-colors underline underline-offset-4 decoration-[#00A86B]/40"
            >
              TechnoMantra India
            </a>
          </div>

          {/* Social Icon Buttons Right */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1746D2] hover:bg-[#1746D2]/20 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1746D2] hover:bg-[#1746D2]/20 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1746D2] hover:bg-[#1746D2]/20 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.002 3.002 0 0 0 .5 6.163C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
