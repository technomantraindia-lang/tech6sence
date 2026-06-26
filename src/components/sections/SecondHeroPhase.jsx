import { useEffect, useRef, useState } from 'react'
import NetworkGlobe from '../NetworkGlobe'

const FEATURE_CARDS = [
  {
    side: 'left',
    title: 'SENSE INTELLIGENCE',
    subtitle: 'Advanced AI Development & Custom Solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-1.94a1.5 1.5 0 00-.921-2.755 1.35 1.35 0 00-.92.31 8.28 8.28 0 00-8.7-2.795A8.28 8.28 0 003 11.25c0 .304.02.604.06.898m12.96 4.962c.34-.142.72-.22 1.12-.22a4.5 4.5 0 00-2.245-8.4 2.25 2.25 0 01-2.244 2.4 3 3 0 001.128 5.78z" />
      </svg>
    ),
  },
  {
    side: 'left',
    title: 'SENSE INNOVATION',
    subtitle: 'Deep-Tech Product Development & Manufacturing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-1m-4.5 0a4.5 4.5 0 1 1 9 0v1m-9 0v2a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2m-9 0h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 0a4 4 0 0 1 4 4c0 1.6-1.5 2.8-1.5 4h-5C8.5 10.8 7 9.6 7 8a4 4 0 0 1 4-4z" />
      </svg>
    ),
  },
  {
    side: 'left',
    title: 'SENSE GROWTH',
    subtitle: 'Visionary Founders Business Ecosystem',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    side: 'right',
    title: 'SENSE COMMUNITY',
    subtitle: 'Business Brains Network for Investors & Entrepreneurs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2" />
        <circle cx="14" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-2a4 4 0 0 1 3-3.87" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 3.13a4 4 0 0 0 0 7.75" />
      </svg>
    ),
  },
  {
    side: 'right',
    title: 'SENSE INTEGRATION',
    subtitle: 'Seamless Technology Deployment & Cloud Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    side: 'right',
    title: 'SENSE FUTURE',
    subtitle: 'Continuous Research, Training & Evolution',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.771 4.902 4.902 0 003.123-.06 4.5 4.5 0 002.515-2.515c.14-.36.214-.75.214-1.146a4.48 4.48 0 00-1.146-3.003c-.26-.29-.553-.55-.867-.775M8.5 13l-4 4 2 2 4-4" />
      </svg>
    ),
  },
]

const getConnectorPaths = (width, height, progress, cardsReveal) => {
  const isXl = width >= 1280
  const cardLeft = width * (isXl ? 0.08 : 0.05) // Pushed slightly inward away from edges
  const cardWidth = Math.min(320, width * 0.22) // Reduced max width to avoid globe
  const cardHeight = 80 // Slightly shorter cards
  
  const globeSize = Math.min(width * 0.65, 420) // Match new globe scaling
  const translateY = progress * 0.14 * height
  
  // Center is screen middle + translateY shift
  const ringCenterY = (height / 2) + translateY
  const ringCenterX = width / 2
  
  const ringRadius = (globeSize / 2) * 0.85 // Connect slightly closer to globe surface
  
  const topPercentages = [0.22, 0.42, 0.62]
  
  const paths = []
  
  for (let i = 0; i < 3; i++) {
    const stagger = i * 0.1
    const cardReveal = Math.min(Math.max((cardsReveal - stagger) * 2, 0), 1)
    const offsetX = (1 - cardReveal) * -40
    const offsetY = (1 - cardReveal) * 15

    const startX = cardLeft + cardWidth + offsetX
    const startY = height * topPercentages[i] + cardHeight / 2 + offsetY
    
    const angles = [205 * Math.PI / 180, Math.PI, 155 * Math.PI / 180]
    const angle = angles[i]
    
    const endX = ringCenterX + ringRadius * Math.cos(angle)
    const endY = ringCenterY + ringRadius * Math.sin(angle)
    
    const dx = endX - startX
    const cp1x = startX + dx * 0.6
    const cp1y = startY
    const cp2x = endX - dx * 0.2
    const cp2y = endY
    
    paths.push({
      id: `left-${i}`,
      isLeft: true,
      d: `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`,
      endX,
      endY,
      reveal: cardReveal
    })
  }
  
  for (let i = 0; i < 3; i++) {
    const stagger = i * 0.1
    const cardReveal = Math.min(Math.max((cardsReveal - stagger) * 2, 0), 1)
    const offsetX = (1 - cardReveal) * 40
    const offsetY = (1 - cardReveal) * 15

    const startX = width - cardLeft - cardWidth + offsetX
    const startY = height * topPercentages[i] + cardHeight / 2 + offsetY
    
    const angles = [335 * Math.PI / 180, 0, 25 * Math.PI / 180]
    const angle = angles[i]
    
    const endX = ringCenterX + ringRadius * Math.cos(angle)
    const endY = ringCenterY + ringRadius * Math.sin(angle)
    
    const dx = endX - startX
    const cp1x = startX + dx * 0.6
    const cp1y = startY
    const cp2x = endX - dx * 0.2
    const cp2y = endY
    
    paths.push({
      id: `right-${i}`,
      isLeft: false,
      d: `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`,
      endX,
      endY,
      reveal: cardReveal
    })
  }
  
  return paths
}

function HeroFeatureCard({ card, index, reveal }) {
  const cardRef = useRef(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const stagger = index * 0.1
  const cardReveal = Math.min(Math.max((reveal - stagger) * 2, 0), 1)
  const fromSide = card.side === 'left' ? -1 : 1
  const offsetX = (1 - cardReveal) * 40 * fromSide

  const topOffsets = ['22%', '42%', '62%']
  const isLeft = card.side === 'left'

  const handleMouseMove = (e) => {
    if (!isHovered) return
    const node = cardRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const rect = cardRef.current ? cardRef.current.getBoundingClientRect() : null
  const tiltX = isHovered && rect ? (coords.y / rect.height - 0.5) * 8 : 0
  const tiltY = isHovered && rect ? (coords.x / rect.width - 0.5) * -8 : 0

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`feature-card absolute z-[25] hidden w-[min(320px,22vw)] lg:block transition-transform duration-100 ease-out ${
        isLeft ? 'left-[5%] xl:left-[8%]' : 'right-[5%] xl:right-[8%]'
      }`}
      style={{
        top: topOffsets[index % 3],
        opacity: cardReveal,
        transform: `translateX(${offsetX}px) translateY(${(1 - cardReveal) * 15}px) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isHovered ? 1.02 : 1})`,
      }}
    >
      <div className={`feature-card-inner group relative overflow-hidden rounded-2xl ${isLeft ? 'card-left-theme' : 'card-right-theme'} flex items-center gap-3 px-4 py-3 border border-white/5 bg-[#0a031d]/60 backdrop-blur-sm shadow-xl`}>
        <div className="card-shine-effect" aria-hidden="true" />
        
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 150px at ${coords.x}px ${coords.y}px, ${
                isLeft ? 'rgba(124, 58, 237, 0.1)' : 'rgba(217, 70, 239, 0.1)'
              }, transparent 80%)`,
            }}
          />
        )}
        
        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center">
          <div 
            className="feature-card-icon-outer absolute inset-0 transition-all duration-300 opacity-60" 
            style={{
              backgroundColor: 'var(--card-octagon-border)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
          />
          <div 
            className="absolute inset-[1px] bg-[#0a031d] flex items-center justify-center transition-colors duration-300"
            style={{
              color: 'var(--card-icon-color)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
          >
            {card.icon}
          </div>
        </div>
        
        <div className="relative z-10 min-w-0 flex-1 py-0.5">
          <p className="m-0 truncate font-display text-[0.85rem] font-extrabold tracking-wide uppercase text-slate-100">
            {card.title}
          </p>
          <p className="m-0 mt-0.5 line-clamp-2 font-body text-[0.7rem] leading-snug text-slate-400 font-medium whitespace-normal pr-1">
            {card.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SecondHeroPhase() {
  const scrollRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [winSize, setWinSize] = useState({ w: 1200, h: 800 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const el = scrollRef.current
    if (!el) return

    let scrollable = el.offsetHeight - window.innerHeight
    let ticking = false

    const handleResize = () => {
      setWinSize({ w: window.innerWidth, h: window.innerHeight })
      scrollable = el.offsetHeight - window.innerHeight
    }
    handleResize()

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const scrollY = window.scrollY
          let scrolled = 0
          
          if (scrollY >= elementTop) {
            scrolled = Math.min(scrollY - elementTop, scrollable)
          }
          
          setProgress(scrollable > 0 ? scrolled / scrollable : 0)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const leftCards = FEATURE_CARDS.filter((c) => c.side === 'left')
  const rightCards = FEATURE_CARDS.filter((c) => c.side === 'right')

  const cardsReveal = progress
  const translateY = progress * 14

  return (
    <section ref={scrollRef} className="relative h-[190vh] bg-[#0a031d] border-t border-violet-500/10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Base Background */}
        <div className="absolute inset-0 z-0 bg-[#0a031d]" style={{ background: 'radial-gradient(circle at 50% 45%, #1d0742 0%, #0d0421 45%, #0a031d 85%)' }} />

        {/* Top pill */}
        <div className="pointer-events-none absolute inset-x-0 top-[12vh] z-[6] flex justify-center px-4"
             style={{ 
               opacity: Math.max(0, 1 - progress * 1.5),
               transform: `translateY(${progress * 20}px)`,
               transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
             }}
        >
          <div className="pointer-events-auto border border-violet-500/10 bg-violet-950/30 px-6 py-2 backdrop-blur-md rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center">
            <p className="m-0 font-body text-[0.62rem] tracking-[0.25em] font-semibold text-slate-300 uppercase flex items-center justify-center">
              AI <span className="text-violet-400 font-bold px-2">•</span> AUTOMATION <span className="text-fuchsia-400 font-bold px-2">•</span> DEEP-TECH <span className="text-indigo-400 font-bold px-2">•</span> INNOVATION
            </p>
          </div>
        </div>

        {/* Network Globe Container */}
        <div className="pointer-events-none absolute inset-0 z-[15]"
             style={{ 
               transform: `translateY(${translateY}vh)`,
               transition: 'transform 0.1s ease-out'
             }}
        >
          <div 
            className="absolute left-1/2 w-full max-w-[min(90vw,420px)]"
            style={{
              top: '50%',
              height: 'min(65vw, 420px)',
              transform: 'translate(-50%, -45%)'
            }}
          >
            <NetworkGlobe progress={progress} />
          </div>
        </div>

        {/* Feature cards */}
        {leftCards.map((card, i) => (
          <HeroFeatureCard key={card.title} card={card} index={i} reveal={cardsReveal} />
        ))}
        {rightCards.map((card, i) => (
          <HeroFeatureCard key={card.title} card={card} index={i} reveal={cardsReveal} />
        ))}

        {/* SVG Connector Lines - Subtle and Clean */}
        <svg className="pointer-events-none absolute inset-0 z-[24] h-full w-full hidden lg:block">
          <defs>
            <linearGradient id="line-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(124,58,237,0.3)" />
              <stop offset="100%" stopColor="rgba(217,70,239,0.15)" />
            </linearGradient>
            <linearGradient id="line-grad-right" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(124,58,237,0.3)" />
              <stop offset="100%" stopColor="rgba(217,70,239,0.15)" />
            </linearGradient>
          </defs>
          {getConnectorPaths(winSize.w, winSize.h, progress, cardsReveal).map((path, idx) => (
            <g key={path.id} style={{ opacity: path.reveal, transition: 'opacity 0.4s ease-out' }}>
              <path d={path.d} stroke={`url(#line-grad-${path.isLeft ? 'left' : 'right'})`} strokeWidth="1" fill="none" opacity="0.6" />
              <path
                d={path.d}
                stroke={path.isLeft ? 'rgba(168,85,247,0.4)' : 'rgba(217,70,239,0.4)'}
                strokeWidth="1.2"
                fill="none"
                className={path.isLeft ? 'connector-pulse-left' : 'connector-pulse-right'}
                style={{ animationDelay: `${(idx % 3) * 0.8}s` }}
              />
              <circle cx={path.endX} cy={path.endY} r="2.5" fill={path.isLeft ? 'rgba(217,70,239,0.5)' : 'rgba(124,58,237,0.5)'} className="connector-endpoint-pulse" />
            </g>
          ))}
        </svg>

        {/* Mobile cards grid - Clean 2 column */}
        <div className="pointer-events-none absolute inset-x-4 bottom-12 z-[25] grid grid-cols-2 gap-3 lg:hidden">
          {FEATURE_CARDS.map((card, idx) => {
            const stagger = idx * 0.08
            const mobileCardReveal = Math.min(Math.max((cardsReveal - stagger) * 2, 0), 1)
            return (
              <div
                key={card.title}
                className="feature-card-inner rounded-xl border border-white/5 bg-[#0a031d]/80 px-3 py-3 backdrop-blur-sm"
                style={{
                  opacity: mobileCardReveal,
                  transform: `translateY(${(1 - mobileCardReveal) * 10}px)`,
                  transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
                }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-500/10 text-violet-400">
                      {card.icon}
                    </div>
                    <p className="m-0 truncate font-display text-[0.6rem] font-bold tracking-wider text-slate-100">
                      {card.title}
                    </p>
                  </div>
                  <p className="m-0 line-clamp-2 font-body text-[0.55rem] text-slate-400 leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom right action button */}
        <a
          href="#about"
          className="group absolute bottom-10 right-[5%] xl:right-[8%] z-[30] hidden items-center gap-3 overflow-hidden rounded-full bg-violet-600/20 border border-violet-500/30 px-6 py-2.5 font-display text-[0.65rem] font-bold tracking-widest text-white no-underline backdrop-blur-md transition-all duration-300 hover:bg-violet-600/40 hover:border-violet-400/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] active:scale-[0.98] lg:flex"
          style={{
            opacity: cardsReveal,
            transform: `translateY(${(1 - cardsReveal) * 15}px)`,
          }}
        >
          <span className="relative z-10 flex items-center gap-2.5">
            EXPLORE OUR AI ECOSYSTEM
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  )
}
