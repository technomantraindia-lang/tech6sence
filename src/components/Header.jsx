import { useState, useEffect } from 'react'
import companyLogo from '../assets/compney logo.png'

const NAV_LINKS = [
  { label: 'Home', href: '#home', num: '01' },
  { label: 'About', href: '#about', num: '02' },
  { label: 'Products', href: '#products', num: '03' },
  { label: 'Industries', href: '#industries', num: '04' },
  { label: 'Resources', href: '#resources', num: '05' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'border-violet-500/15 bg-[#0a031d]/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
          : 'border-violet-500/10 bg-[#0a031d]/45 backdrop-blur-xl'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 transition-all duration-75 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      {/* Top Glow Ambient Flare */}
      <div
        className="pointer-events-none absolute -top-12 left-1/4 h-24 w-1/2 rounded-full bg-violet-400/8 blur-3xl"
        aria-hidden="true"
      />
      
      {/* Sci-fi Micro Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(124,58,237,0.7)_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[90rem] w-full px-6 transition-all duration-300">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? 'py-3.5' : 'py-5'
        }`}>
          {/* Logo & Online Badge */}
          <div className="flex items-center gap-5">
            <a href="#" className="group relative flex shrink-0 items-center no-underline">
              <div className="absolute -inset-2 rounded-lg bg-violet-400/0 blur-md transition-all group-hover:bg-violet-400/10" />
              <img
                src={companyLogo}
                alt="TECH6SENSE AI"
                className="relative h-8 w-auto object-contain md:h-9"
              />
            </a>
            
            {/* Sleek Vertical Divider */}
            <div className="hidden h-5 w-[1px] bg-violet-500/25 sm:block" />

            {/* AI Systems Online Badge */}
            <div className="hidden items-center gap-2 rounded-full border border-violet-500/20 bg-violet-950/45 px-3.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              <span className="font-mono text-[0.58rem] tracking-[0.25em] text-violet-400 uppercase font-semibold">
                Systems Online
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative flex items-center rounded-lg px-3.5 py-2 no-underline transition-all hover:bg-violet-950/40"
              >
                <span className="font-body text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                  {link.label}
                </span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-450 to-fuchsia-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden shrink-0 lg:block">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 font-body text-xs font-bold tracking-widest text-white no-underline shadow-[0_4px_15px_rgba(124,58,237,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)] active:scale-[0.98]"
              >
                {/* Hover overlay gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Let's Connect
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-500/20 bg-violet-950/30 text-violet-400 hover:border-violet-500/40 hover:bg-violet-950/50 transition-all lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <div className="flex w-5 flex-col items-end gap-1.5">
                <span
                  className={`block h-0.5 rounded-full bg-violet-400 transition-all ${open ? 'w-5 translate-y-2 rotate-45' : 'w-5'}`}
                />
                <span
                  className={`block h-0.5 rounded-full bg-violet-400 transition-all ${open ? 'w-0 opacity-0' : 'w-3.5'}`}
                />
                <span
                  className={`block h-0.5 rounded-full bg-violet-400 transition-all ${open ? 'w-5 -translate-y-2 -rotate-45' : 'w-5'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Hairline Bottom Separator */}
      <div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-violet-500/15 to-transparent" />

      {/* Full-width Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden border-b border-violet-500/20 bg-[#0a031d]/95 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-all duration-400 lg:hidden ${
          open ? 'max-h-[30rem] opacity-100 border-t border-violet-500/10' : 'max-h-0 opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <div className="px-6 py-4">
          <div className="mb-4 flex items-center gap-2 sm:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-[0.25em] text-violet-400 uppercase font-semibold">
              Systems Online
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 rounded-xl border-l-2 border-transparent px-4 py-3 no-underline transition-all hover:border-violet-450 hover:bg-violet-950/40"
              >
                <span className="font-mono text-[0.65rem] tracking-wider text-violet-400">
                  {link.num}
                </span>
                <span className="font-body text-sm font-medium text-slate-300 group-hover:text-white">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 pb-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-violet-500/30 py-3 text-center font-body text-sm font-medium text-slate-300 no-underline transition-all hover:bg-violet-950/40 hover:text-white"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 text-center font-body text-sm font-semibold text-white no-underline shadow-[0_4px_16px_rgba(124,58,237,0.35)] transition-all hover:opacity-90"
            >
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
