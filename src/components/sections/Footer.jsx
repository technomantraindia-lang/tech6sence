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
        <div className="my-12 md:my-20 flex flex-col justify-center items-center w-full px-4 text-center">
          <Link to="/" className="w-full max-w-4xl md:max-w-6xl flex justify-center group mb-4">
            <img
              src={companyLogo}
              alt="TECH6SENSE AI"
              className="w-full h-auto max-h-36 md:max-h-52 object-contain filter drop-shadow-[0_0_40px_rgba(23,70,210,0.35)] transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
          <p className="font-display text-xs sm:text-sm md:text-base font-extrabold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00A86B] to-blue-400 mt-2">
            ENGINEERING THE SIXTH SENSE OF ARTIFICIAL INTELLIGENCE
          </p>
        </div>

        {/* Bottom Footer Bar: Copyright Left, Social Icons Right */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-400">
          
          {/* Copyright Left */}
          <div>
            <span>© 2026 TECH6SENSE AI. All rights reserved.</span>
          </div>

          {/* Social Icon Buttons Right */}
          {/* Social Icon Buttons Right */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/tech6sense.ai?igsh=MTY1cTd6NWlydmlmZw%3D%3D" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1746D2] hover:bg-[#1746D2]/20 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/share/1Fp3wJQqEv/" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1746D2] hover:bg-[#1746D2]/20 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/tech6sense-ai/" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1746D2] hover:bg-[#1746D2]/20 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
