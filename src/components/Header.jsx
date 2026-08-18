import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import companyLogo from '../assets/new logo/TECH6SENSE Main Logo Transparent bg.svg';

const NAV_LINKS = [
  { label: 'About', href: '/about', num: '01' },
  { 
    label: 'Intelligent Solutions', 
    href: '/ai-agents',
    num: '02',
    isMega: true,
    categories: [
      {
        title: 'AI Development',
        links: [
          { label: 'AI Product Development', href: '/services/ai-product-development' },
          { label: 'AI Software Development', href: '/services/ai-software-development' },
          { label: 'Custom AI Model Development', href: '/services/custom-ai-model-development' },
          { label: 'AI Agents Development', href: '/services/ai-agents-development' },
          { label: 'Agentic AI Solutions', href: '/services/agentic-ai-solutions' },
        ]
      },
      {
        title: 'Automation & Copilots',
        links: [
          { label: 'AI Automation for Businesses', href: '/services/ai-automation-for-businesses' },
          { label: 'Robotic Process Automation', href: '/services/robotic-process-automation' },
          { label: 'AI Copilot Development', href: '/services/ai-copilot-development' },
          { label: 'Generative AI Solutions', href: '/services/generative-ai-solutions' },
          { label: 'NLP & Conversational AI', href: '/services/nlp-conversational-ai' },
          { label: 'Retrieval-Augmented Generation (RAG)', href: '/services/retrieval-augmented-generation' },
        ]
      },
      {
        title: 'Data & Visual Intelligence',
        links: [
          { label: 'Data Analytics & Business Intelligence', href: '/services/data-analytics-business-intelligence' },
          { label: 'Machine Learning Development', href: '/services/machine-learning-development' },
          { label: 'Predictive Modeling & Analytics', href: '/services/predictive-modeling-analytics' },
          { label: 'Computer Vision Development', href: '/services/computer-vision-development' },
        ]
      },
      {
        title: 'Enterprise AI & Cloud',
        links: [
          { label: 'AI Integration & Cloud Services', href: '/services/ai-integration-cloud-services' },
          { label: 'AI-as-a-Service', href: '/services/ai-as-a-service' },
          { label: 'AIOps & MLOps', href: '/services/aiops-mlops' },
          { label: 'AI Security', href: '/services/ai-security' },
          { label: 'AI Governance Consulting', href: '/services/ai-governance-consulting' },
          { label: 'AI Consulting & Corporate Training', href: '/services/ai-consulting-corporate-training' },
        ]
      },
      {
        title: 'Advanced Tech & Software',
        links: [
          { label: 'Internet of Things Development', href: '/services/internet-of-things-development' },
          { label: 'Blockchain Development', href: '/services/blockchain-development' },
          { label: 'AR/VR Development', href: '/services/ar-vr-development' },
          { label: 'AI Design', href: '/services/ai-design' },
          { label: 'Enterprise Software Development', href: '/services/enterprise-software-development' },
        ]
      }
    ]
  },
  { label: 'Deep-Tech Products', href: '/deep-tech-products', num: '03' },
  { label: 'Visionary Founders', href: '/visionary-founders', num: '04' },
  { label: 'Business Brains', href: '/business-brains', num: '05' },
  { 
    label: 'Resources', 
    href: '#', 
    num: '06',
    isDropdown: true,
    links: [
      { label: 'Industries Impact', href: '/industries' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Blogs', href: '/blogs' }
    ]
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const progressBarRef = useRef(null);
  
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper to determine if a link is active
  const isLinkActive = (link) => {
    const pathWithoutHash = link.href.split('#')[0];
    if (pathWithoutHash === '/' && currentPath !== '/') return false;
    return currentPath === pathWithoutHash;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = window.scrollY / totalScroll;
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${progress * 100}%`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  const toggleAccordion = (label) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'border-white/10 bg-[#060214]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)]' 
          : 'border-white/5 bg-[#060214]/65 backdrop-blur-xl'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        ref={progressBarRef}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2] transition-all duration-75 z-50"
        style={{ width: '0%' }}
      />
      {/* Top Glow Ambient Flare */}
      <div
        className="pointer-events-none absolute -top-12 left-1/4 h-24 w-1/2 rounded-full bg-blue-400/5 blur-3xl"
        aria-hidden="true"
      />
      
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? 'py-3.5' : 'py-4 md:py-5'
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-5">
            <Link to="/" className="group relative flex shrink-0 items-center no-underline">
              <div className="absolute -inset-2 rounded-lg bg-[#1746D2]/0 blur-md transition-all group-hover:bg-[#1746D2]/10" />
              <img
                src={companyLogo}
                alt="TECH6SENSE AI"
                className="relative h-10 sm:h-11 md:h-12 w-auto object-contain transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-1 2xl:gap-2.5 lg:flex relative">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link);
              
              return (
                <div key={link.href} className={link.isMega ? "group static" : "group relative"}>
                  <Link
                    to={link.href}
                    className="relative flex items-center gap-0.5 2xl:gap-1 rounded-lg px-2 2xl:px-3.5 py-2 no-underline transition-all hover:bg-white/5"
                  >
                    <span className={`font-body text-[0.86rem] 2xl:text-[0.96rem] font-bold transition-colors whitespace-nowrap ${active ? 'text-blue-400' : 'text-slate-300 group-hover:text-white'}`}>
                      {link.label}
                    </span>
                    {(link.isMega || link.isDropdown) && (
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${active ? 'text-blue-400' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {/* Active/Hover Line */}
                    <span className={`absolute bottom-1 left-3.5 right-3.5 h-px origin-left transition-transform duration-300 bg-gradient-to-r from-blue-400 to-emerald-400 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>

                  {/* Desktop Mega Menu */}
                  {link.isMega && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-[#1746D2]/10/50 p-8 flex gap-8 w-max max-w-[95vw]">
                        {/* Categories */}
                        <div className="grid grid-cols-5 gap-8">
                          {link.categories.map(cat => (
                            <div key={cat.title} className="w-[180px]">
                              <h4 className="font-display text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                                {cat.title}
                              </h4>
                              <ul className="flex flex-col gap-2.5">
                                {cat.links.map(cLink => (
                                  <li key={cLink.label}>
                                    <Link to={cLink.href} className="group/link flex items-center gap-2">
                                      <span className="w-0 h-0.5 bg-[#1746D2] transition-all duration-300 group-hover/link:w-2" />
                                      <span className="font-body text-xs text-slate-600 transition-colors group-hover/link:text-[#1746D2]">
                                        {cLink.label}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {/* CTA Strip */}
                        <div className="w-[240px] shrink-0 bg-slate-50/80 p-6 rounded-xl border border-slate-200/60 flex flex-col justify-center relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1746D2]/10/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                          <h4 className="relative z-10 font-display font-bold text-slate-900 mb-2">Need a Custom AI Solution?</h4>
                          <p className="relative z-10 text-xs text-slate-600 leading-relaxed mb-6">Explore end-to-end AI strategy, development, integration, and optimization.</p>
                          <Link to="/ai-agents" className="relative z-10 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1746D2] to-[#00A86B] text-white font-bold text-xs px-4 py-2.5 rounded-full hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all hover:scale-[1.02]">
                            View Intelligent Solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Desktop Standard Dropdown */}
                  {link.isDropdown && (
                    <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                      <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-[#1746D2]/10/50 p-2 w-48 flex flex-col">
                        {link.links.map(dLink => (
                          <Link key={dLink.label} to={dLink.href} className="group/dlink px-4 py-2.5 rounded-lg hover:bg-[#1746D2]/10 transition-colors flex items-center gap-2">
                            <span className="w-0 h-0.5 bg-[#1746D2] transition-all duration-300 group-hover/dlink:w-2" />
                            <span className="font-body text-xs font-semibold text-slate-700 transition-colors group-hover/dlink:text-[#1746D2]">
                              {dLink.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden shrink-0 lg:block">
              <Link
                to="/lets-connect"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 p-2 2xl:px-6 2xl:py-2.5 font-body text-[0.65rem] 2xl:text-xs font-bold tracking-widest text-white no-underline shadow-[0_4px_15px_rgba(37,99,235,0.25)] transition-all duration-500 hover:px-5 2xl:hover:px-6 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center">
                  <span className="max-w-0 2xl:max-w-[120px] opacity-0 2xl:opacity-100 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:max-w-[120px] group-hover:opacity-100">
                    <span className="pr-2.5">Let's Connect</span>
                  </span>
                  <span className="flex h-7 w-7 2xl:h-5 2xl:w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-500 group-hover:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 2xl:h-2.5 2xl:w-2.5" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all lg:hidden z-50"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <div className="flex w-5 flex-col items-end gap-1.5">
                <span className={`block h-0.5 rounded-full bg-white transition-all ${open ? 'w-5 translate-y-2 rotate-45' : 'w-5'}`} />
                <span className={`block h-0.5 rounded-full bg-white transition-all ${open ? 'w-0 opacity-0' : 'w-3.5'}`} />
                <span className={`block h-0.5 rounded-full bg-white transition-all ${open ? 'w-5 -translate-y-2 -rotate-45' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full border-b border-[#1746D2]/20 bg-[#0a031d]/95 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-all duration-500 ease-in-out lg:hidden overflow-hidden ${
          open ? 'max-h-[85vh] opacity-100 border-t border-[#1746D2]/10' : 'max-h-0 opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 overflow-y-auto max-h-[85vh] hide-scrollbar pb-24">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const hasDropdown = link.isMega || link.isDropdown;
              const isActiveAcc = activeAccordion === link.label;
              const active = isLinkActive(link);
              
              return (
                <div key={link.href} className="flex flex-col">
                  {/* Top Level Link / Accordion Toggle */}
                  <div 
                    className={`group flex items-center justify-between rounded-xl border-l-2 px-4 py-3 transition-all ${
                      active ? 'border-[#1746D2]/60 bg-[#0b1329]/20' : 'border-transparent hover:border-violet-450 hover:bg-[#040916]/40'
                    }`}
                  >
                    {!hasDropdown ? (
                      <Link to={link.href} onClick={() => setOpen(false)} className="flex items-center gap-4 flex-1 cursor-pointer">
                        <span className="font-mono text-[0.65rem] tracking-wider text-[#1746D2]">{link.num}</span>
                        <span className={`font-body text-sm font-medium ${active ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{link.label}</span>
                      </Link>
                    ) : (
                      <div className="flex items-center justify-between flex-1">
                        <Link 
                          to={link.href} 
                          onClick={() => setOpen(false)} 
                          className="flex items-center gap-4 flex-1 cursor-pointer"
                        >
                          <span className="font-mono text-[0.65rem] tracking-wider text-[#1746D2]">{link.num}</span>
                          <span className={`font-body text-sm font-medium ${active || isActiveAcc ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{link.label}</span>
                        </Link>
                        <button 
                          type="button"
                          onClick={(e) => { e.stopPropagation(); toggleAccordion(link.label); }}
                          className="p-2 -mr-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                          aria-label={`Toggle ${link.label} submenu`}
                        >
                          <svg className={`w-4 h-4 text-[#1746D2] transition-transform duration-300 ${isActiveAcc ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Accordion Content */}
                  {hasDropdown && (
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActiveAcc ? 'max-h-[1500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-12 pr-4 pb-2 flex flex-col gap-4">
                        
                        {/* Render Mega Menu Categories vertically */}
                        {link.isMega && link.categories.map((cat, idx) => (
                          <div key={idx} className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-[#1746D2]/80 uppercase tracking-wider">{cat.title}</span>
                            <ul className="flex flex-col gap-2 border-l border-[#1746D2]/20 pl-3">
                              {cat.links.map(cLink => (
                                <li key={cLink.label}>
                                  <Link to={cLink.href} onClick={() => setOpen(false)} className="text-xs font-medium text-slate-300 hover:text-white transition-colors block py-1">
                                    {cLink.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        
                        {/* Render standard dropdown links */}
                        {link.isDropdown && (
                          <ul className="flex flex-col gap-3 border-l border-[#1746D2]/20 pl-3">
                            {link.links.map(dLink => (
                              <li key={dLink.label}>
                                <Link to={dLink.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors block py-1">
                                  {dLink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Mega Menu CTA for mobile */}
                        {link.isMega && (
                          <div className="mt-4 p-4 rounded-xl bg-[#0b1329]/20 border border-[#1746D2]/20">
                            <h4 className="text-xs font-bold text-white mb-1">Need a Custom AI Solution?</h4>
                            <Link to="/ai-agents" onClick={() => setOpen(false)} className="inline-block mt-3 text-xs font-bold text-white bg-[#1746D2] px-4 py-2 rounded-full hover:bg-[#1746D2] transition-colors">
                              View Solutions
                            </Link>
                          </div>
                        )}
                        
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </header>
  );
}
