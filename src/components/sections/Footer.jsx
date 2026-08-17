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

  return (
    <footer 
      ref={containerRef}
      className="relative w-full overflow-hidden border-t border-white/5"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[center_75%] z-0"
      >
        <source src={footerVideo} type="video/mp4" />
      </video>

      {/* Modern gradient tint overlay over video */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050112] via-[#050112]/90 to-[#050112]/75 z-0 pointer-events-none" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes footer-border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-footer-border {
          animation: footer-border-flow 8s linear infinite;
        }
      `}} />

      {/* Premium thin blue-emerald animate line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 bg-[size:200%_auto] animate-footer-border z-10" />

      {/* Main Grid Content */}
      <div 
        className={`relative z-10 w-full px-8 md:px-12 lg:px-16 pt-24 pb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand block (Span 5) */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col justify-start">
            <Link to="/" className="flex items-center no-underline mb-6 group w-fit">
              <img
                src={companyLogo}
                alt="TECH6SENSE AI"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="font-body text-[0.92rem] leading-relaxed text-slate-300 mb-8 max-w-md">
              We architect, engineer, and deploy next-generation artificial intelligence and deep-tech hardware systems to secure sustainable market leadership for the world's most ambitious organizations.
            </p>
            
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <a 
                href="mailto:info@tech6sense.ai" 
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[0.68rem] font-mono text-slate-500 uppercase tracking-wider">EMAIL US</span>
                  <span className="block text-xs font-bold text-slate-200 group-hover:text-blue-400 transition-colors">info@tech6sense.ai</span>
                </div>
              </a>

              <a 
                href="tel:+919081766355" 
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.145-5.09-3.41-6.234-6.234l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[0.68rem] font-mono text-slate-500 uppercase tracking-wider">CALL US</span>
                  <span className="block text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">+91 90817 66355</span>
                </div>
              </a>
            </div>
          </div>

          {/* Links block (Span 7) */}
          <div className="md:col-span-2 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 2: Company */}
            <div>
              <h4 className="font-display text-xs font-bold text-white tracking-[0.15em] uppercase mb-6">
                Company
              </h4>
              <ul className="space-y-4 p-0 m-0 list-none">
                {[
                  { label: 'About Company', href: '/about' },
                  { label: 'Industries Impact', href: '/industries' },
                  { label: 'Innovation Stories', href: '/success-stories' },
                  { label: 'Let\'s Connect', href: '/lets-connect' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="font-body text-[0.88rem] text-slate-400 hover:text-white transition-colors relative inline-block group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div>
              <h4 className="font-display text-xs font-bold text-white tracking-[0.15em] uppercase mb-6">
                Solutions
              </h4>
              <ul className="space-y-4 p-0 m-0 list-none">
                {[
                  { label: 'AI Development', href: '/ai-agents?tab=0#ecosystem' },
                  { label: 'Automation & Copilots', href: '/ai-agents?tab=1#ecosystem' },
                  { label: 'Data Intelligence', href: '/ai-agents?tab=2#ecosystem' },
                  { label: 'Enterprise AI & Cloud', href: '/ai-agents?tab=3#ecosystem' },
                  { label: 'Advanced Software', href: '/ai-agents?tab=4#ecosystem' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="font-body text-[0.88rem] text-slate-400 hover:text-white transition-colors relative inline-block group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Ecosystem */}
            <div>
              <h4 className="font-display text-xs font-bold text-white tracking-[0.15em] uppercase mb-6">
                Ecosystem
              </h4>
              <ul className="space-y-4 p-0 m-0 list-none">
                {[
                  { label: 'Deep-Tech Products', href: '/deep-tech-products' },
                  { label: 'Visionary Founders', href: '/visionary-founders' },
                  { label: 'Business Brains', href: '/business-brains' },
                  { label: 'Resources & Blogs', href: '/blogs' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="font-body text-[0.88rem] text-slate-400 hover:text-white transition-colors relative inline-block group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Slim Dark Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-body text-[0.82rem] text-slate-500">
          {/* Left Side */}
          <div>
            <span>© 2026 TECH6SENSE AI. All rights reserved. | Designed and Developed by <a href="https://technomantra.in/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors underline underline-offset-4 decoration-blue-500/30">TechnoMantra India</a></span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/20 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5"
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
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/20 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5"
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
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/20 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5"
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
