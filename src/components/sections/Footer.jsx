import React, { useEffect, useRef, useState } from 'react';
import companyLogo from '../../assets/compney logo.png';

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
      className="relative w-full overflow-hidden bg-[#FAF9FF] border-t border-slate-100/50"
    >
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

      {/* Thin Accent Gradient Line at the Top of Footer */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 bg-[size:200%_auto] animate-footer-border" />

      {/* Main Content Area */}
      <div 
        className={`mx-auto max-w-[85rem] px-6 pt-16 pb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand block */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col justify-start">
            <a href="#" className="flex items-center no-underline mb-5 group">
              <img
                src={companyLogo}
                alt="TECH6SENSE AI"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="font-body text-[0.88rem] leading-relaxed text-slate-500 mb-6 max-w-sm">
              Transforming vision into intelligence through AI solutions, deep-tech products, and future-ready business ecosystems.
            </p>
            <div className="font-body text-[0.85rem] text-slate-450 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="text-violet-500">📍</span>
                <span>GIFT City, Gandhinagar, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-fuchsia-500">✉️</span>
                <a href="mailto:info@tech6senseai.com" className="text-slate-500 hover:text-violet-600 transition-colors">
                  info@tech6senseai.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-violet-500">📞</span>
                <a href="tel:+919081766355" className="text-slate-500 hover:text-violet-600 transition-colors">
                  +91 90817 66355
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-slate-800 tracking-wider uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3 p-0 m-0 list-none">
              {[
                { label: 'About', href: '#about' },
                { label: 'Industries', href: '#industries' },
                { label: 'Innovation Stories', href: '#stories' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-[0.88rem] text-slate-500 hover:text-violet-600 transition-colors relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-slate-800 tracking-wider uppercase mb-5">
              Solutions
            </h4>
            <ul className="space-y-3 p-0 m-0 list-none">
              {[
                { label: 'AI Agents & Automation', href: '#solutions' },
                { label: 'Generative AI & Copilots', href: '#solutions' },
                { label: 'Computer Vision', href: '#solutions' },
                { label: 'Data Intelligence', href: '#solutions' },
                { label: 'Enterprise AI Integration', href: '#solutions' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-[0.88rem] text-slate-500 hover:text-violet-600 transition-colors relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Ecosystem */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-slate-800 tracking-wider uppercase mb-5">
              Ecosystem
            </h4>
            <ul className="space-y-3 p-0 m-0 list-none">
              {[
                { label: 'Deep-Tech Products', href: '#products' },
                { label: 'Visionary Founders', href: '#ecosystem' },
                { label: 'Business Brains', href: '#ecosystem' },
                { label: 'Resources / Blogs', href: '#resources' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-[0.88rem] text-slate-500 hover:text-violet-600 transition-colors relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: CTA Block */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="rounded-2xl border border-slate-100 bg-white/60 p-5 shadow-[0_8px_20px_rgba(124,58,237,0.02)]">
              <h5 className="font-display text-[0.92rem] font-bold text-slate-800 tracking-tight mb-2">
                Start Your AI Journey
              </h5>
              <p className="font-body text-[0.82rem] leading-relaxed text-slate-500 mb-4 font-medium">
                Connect with TECH6SENSE AI to explore intelligent automation, product innovation, or founder support.
              </p>
              <a
                href="#contact"
                className="inline-flex w-full justify-center px-4 py-2.5 rounded-lg text-white font-semibold text-xs bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(139,92,246,0.35)] shadow-sm"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Slim Dark Bottom Bar */}
      <div className="w-full bg-[#0A031D] text-slate-400 py-6 px-6 font-body text-[0.82rem]">
        <div className="mx-auto max-w-[85rem] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side */}
          <div>
            <span>© 2026 TECH6SENSE AI. All rights reserved.</span>
          </div>

          {/* Right Side */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#privacy" className="hover:text-violet-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-violet-400 transition-colors">
                Terms
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-violet-400 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-violet-400 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-violet-400 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.002 3.002 0 0 0 .5 6.163C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
