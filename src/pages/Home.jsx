import { useEffect, useRef, useState, memo, Suspense, lazy } from 'react'
import Header from '../components/Header'
import TechHero from '../components/hero/TechHero'

// Lazy load below-the-fold sections to optimize initial page loading speed
const IntelligenceStack = lazy(() => import('../components/sections/IntelligenceStack'))
const HowWeWork = lazy(() => import('../components/sections/HowWeWork'))
const SimpleTextSection = lazy(() => import('../components/sections/SimpleTextSection'))
const AISolutionsOutcome = lazy(() => import('../components/sections/AISolutionsOutcome'))
const WhoWeServe = lazy(() => import('../components/sections/WhoWeServe'))
const DeepTechProducts = lazy(() => import('../components/sections/DeepTechProducts'))
const IndustriesTransform = lazy(() => import('../components/sections/IndustriesTransform'))
const EcosystemSection = lazy(() => import('../components/sections/EcosystemSection'))
const EngagementModels = lazy(() => import('../components/sections/EngagementModels'))
const WhyChooseTech6Sense = lazy(() => import('../components/sections/WhyChooseTech6Sense'))
const InnovationStories = lazy(() => import('../components/sections/InnovationStories'))
const FAQSection = lazy(() => import('../components/sections/FAQSection'))
const FinalCTA = lazy(() => import('../components/sections/FinalCTA'))
const Footer = lazy(() => import('../components/sections/Footer'))


const TORCH_RADIUS = 150

const FEATURE_CARDS = [
  {
    side: 'left',
    title: 'SENSE INTELLIGENCE',
    subtitle: 'Advanced AI Development & Custom Enterprise Solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-1.94a1.5 1.5 0 00-.921-2.755 1.35 1.35 0 00-.92.31 8.28 8.28 0 00-8.7-2.795A8.28 8.28 0 003 11.25c0 .304.02.604.06.898m12.96 4.962c.34-.142.72-.22 1.12-.22a4.5 4.5 0 00-2.245-8.4 2.25 2.25 0 01-2.244 2.4 3 3 0 001.128 5.78z" />
      </svg>
    ),
  },
  {
    side: 'left',
    title: 'SENSE INNOVATION',
    subtitle: 'Next Generation of AI-Powered Deep-Tech Products — Turn Your Tech Vision Into a Global Brand',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-1m-4.5 0a4.5 4.5 0 1 1 9 0v1m-9 0v2a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2m-9 0h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 0a4 4 0 0 1 4 4c0 1.6-1.5 2.8-1.5 4h-5C8.5 10.8 7 9.6 7 8a4 4 0 0 1 4-4z" />
      </svg>
    ),
  },
  {
    side: 'left',
    title: 'SENSE GROWTH',
    subtitle: 'Visionary Founders Business Ecosystem — The Global AI Founder Ecosystem — Build Your AI Empire Globally',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    side: 'right',
    title: 'SENSE CONNECTION',
    subtitle: 'Business Brains — Most Exclusive Private Global Network for Elite Investors, Entrepreneurs & Industry Leaders',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2" />
        <circle cx="14" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-2a4 4 0 0 1 3-3.87" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 3.13a4 4 0 0 0 0 7.75" />
      </svg>
    ),
  },
  {
    side: 'right',
    title: 'SENSE TRANSFORMATION',
    subtitle: 'Integrating Intelligence across the Enterprise — Seamless Technology Deployment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    side: 'right',
    title: 'SENSE FUTURE',
    subtitle: 'Creating What the World Will Need Next — Continuous Research & Evolution',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.771 4.902 4.902 0 003.123-.06 4.5 4.5 0 002.515-2.515c.14-.36.214-.75.214-1.146a4.48 4.48 0 00-1.146-3.003c-.26-.29-.553-.55-.867-.775M8.5 13l-4 4 2 2 4-4" />
      </svg>
    ),
  },
]

function HeroTagline({ opacity, progress }) {
  const drift = progress * 40

  return (
    <>
      <div
        className="pointer-events-none absolute top-1/2 left-12 z-[30] hidden -translate-y-1/2 md:left-20 md:block lg:left-28"
        style={{
          opacity,
          transform: `translateY(calc(-50% + ${drift}px))`,
          transition: 'opacity 0.1s linear',
        }}
      >
        {/* Animated gradient border card */}
        <div className="animated-gradient-border-dark group pointer-events-auto relative overflow-hidden rounded-2xl px-8 py-7">
          {/* Subtle holographic grid overlay inside card */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(23,70,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.08)_1px,transparent_1px)] bg-[size:8px_8px] transition-opacity duration-300 group-hover:opacity-[0.07]" aria-hidden="true" />
          
          {/* Micro sci-fi markings */}
          <div className="absolute top-2.5 right-3.5 font-mono text-[0.45rem] tracking-widest text-[#1746D2]/50 uppercase">
            SYS.OP // 06
          </div>
          <div className="absolute bottom-2.5 right-3.5 font-mono text-[0.45rem] tracking-widest text-[#00A86B]/50 uppercase">
            LOC.STATUS // OK
          </div>

          {/* Corner brackets - expand on hover */}
          <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[#1746D2] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
          <span className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-[#1746D2] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#00A86B] transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
          <span className="absolute right-0 bottom-0 h-6 w-6 border-r-2 border-b-2 border-[#D4AF37] transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

          <div className="relative z-10">
            {/* Header section with pulsating dot */}
            <div className="mb-4.5 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#00A86B] shadow-[0_0_10px_#00A86B] animate-pulse" />
              <span className="h-px flex-1 bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-transparent" />
              <span className="font-body text-[0.62rem] font-bold tracking-[0.35em] text-[#1746D2]/80 uppercase">
                OUR VISION
              </span>
            </div>

            {/* Main tagline text with shimmer */}
            <p className="m-0 whitespace-nowrap font-display text-[clamp(1.3rem,2.2vw,1.9rem)] leading-[1.25] font-semibold text-white">
              Transforming{' '}
              <span className="text-shimmer">
                Vision
              </span>
            </p>
            <p className="m-0 mt-1.5 whitespace-nowrap font-display text-[clamp(1.3rem,2.2vw,1.9rem)] leading-[1.25] font-bold text-white">
              Into{' '}
              <span className="bg-gradient-to-r from-[#00A86B] via-[#D4AF37] to-[#1746D2] bg-clip-text text-transparent">
                Intelligence
              </span>
            </p>

            {/* Footer section */}
            <div className="mt-5.5 flex items-center gap-3">
              <span className="text-[#D4AF37] text-[0.55rem]">◆</span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-transparent" />
              <span className="font-body text-[0.58rem] font-bold tracking-[0.25em] text-slate-400 uppercase">
                Tech6Sense
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-4 bottom-24 z-[30] md:hidden"
        style={{ opacity: opacity, transform: `translateY(${drift}px)` }}
      >
        <div className="relative border border-[#1746D2]/20 bg-black/80 px-4 py-3.5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] rounded-xl">
          <span className="absolute -top-px left-4 h-0.5 w-10 bg-gradient-to-r from-[#1746D2] to-[#00A86B] rounded-full" />
          <span className="absolute -bottom-px right-4 h-0.5 w-10 bg-gradient-to-r from-[#00A86B] to-[#D4AF37] rounded-full" />
          <p className="m-0 text-center font-display text-sm leading-snug font-semibold tracking-wide text-slate-200">
            Transforming <span className="text-[#1746D2]">Vision</span>
          </p>
          <p className="m-0 text-center font-display text-sm leading-snug font-semibold tracking-wide text-slate-200">
            Into <span className="text-[#00A86B]">Intelligence</span>
          </p>
        </div>
      </div>
    </>
  )
}

function HeroBackgroundTitle({ opacity, progress, torch, winSize }) {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  const mouseXOffset = torch.active && winSize.w > 0 ? (torch.x / winSize.w - 0.5) * -22 : 0
  const mouseYOffset = torch.active && winSize.h > 0 ? (torch.y / winSize.h - 0.5) * -22 : 0
  const scrollOffset = progress * -60
  const scale = 1 + progress * 0.08

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return

    const fitText = () => {
      let size = 400
      text.style.fontSize = `${size}px`

      while (text.scrollWidth > container.clientWidth && size > 20) {
        size -= 1
        text.style.fontSize = `${size}px`
      }
    }

    fitText()

    const observer = new ResizeObserver(fitText)
    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[calc(10vh+30px)] z-[5] w-full select-none px-4 md:px-8"
      style={{
        opacity,
        transform: `scale(${scale}) translate(${mouseXOffset}px, ${scrollOffset + mouseYOffset}px)`,
        transition: 'opacity 0.15s linear, transform 0.15s ease-out',
      }}
    >
      <div ref={containerRef} className="mx-auto w-full text-center">
        <p
          ref={textRef}
          className="hologram-text m-0 w-full text-center font-display leading-none font-bold tracking-[0.02em] whitespace-nowrap text-transparent [-webkit-text-stroke:1.5px_rgba(23,70,210,0.22)]"
        >
          TECH6SENSE{' '}
          <span className="text-[#00A86B]/[0.08] [-webkit-text-stroke:1.5px_rgba(0,168,107,0.28)]">
            AI
          </span>
        </p>

        {/* Micro Sci-fi Ticker Bar under Title */}
        <div 
          className="mt-4 hidden justify-center gap-6 font-mono text-[0.48rem] tracking-[0.38em] text-[#1746D2]/40 uppercase md:flex transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - progress * 1.5) }}
        >
          <span>SYS.INIT // GIFT_CITY</span>
          <span>•</span>
          <span>LATENCY // 0.04MS</span>
          <span>•</span>
          <span>CORE.STATUS // NOMINAL</span>
        </div>
      </div>
    </div>
  )
}

const getConnectorPaths = (width, height, progress, cardsReveal) => {
  const isXl = width >= 1280
  const cardLeft = width * (isXl ? 0.06 : 0.04)
  const cardWidth = Math.min(340, width * 0.25)
  const cardHeight = 86
  
  const globeSize = Math.min(width * 0.7, 450)
  const robotHeight = Math.min(height * 0.92, 820)
  const translateY = progress * 0.14 * height
  const ringCenterY = height - robotHeight - (0.05 * robotHeight) + translateY + (globeSize / 2)
  const ringCenterX = width / 2
  
  const globeOpacity = Math.min(Math.max((progress - 0.2) * 2.5, 0), 1)
  const globeScale = 0.8 + globeOpacity * 0.2
  const ringRadius = (globeSize / 2) * 0.875 * globeScale
  
  const topPercentages = [0.22, 0.42, 0.62]
  
  const paths = []
  
  for (let i = 0; i < 3; i++) {
    const stagger = i * 0.12
    const cardReveal = Math.min(Math.max((cardsReveal - stagger) * 2.2, 0), 1)
    const offsetX = (1 - cardReveal) * 60 * (-1)
    const offsetY = (1 - cardReveal) * 20

    const startX = cardLeft + cardWidth + offsetX
    const startY = height * topPercentages[i] + cardHeight / 2 + offsetY
    
    const angles = [205 * Math.PI / 180, Math.PI, 155 * Math.PI / 180]
    const angle = angles[i]
    
    const endX = ringCenterX + ringRadius * Math.cos(angle)
    const endY = ringCenterY + ringRadius * Math.sin(angle)
    
    const dx = endX - startX
    const cp1x = startX + dx * 0.5
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
    const stagger = i * 0.12
    const cardReveal = Math.min(Math.max((cardsReveal - stagger) * 2.2, 0), 1)
    const offsetX = (1 - cardReveal) * 60 * (1)
    const offsetY = (1 - cardReveal) * 20

    const startX = width - cardLeft - cardWidth + offsetX
    const startY = height * topPercentages[i] + cardHeight / 2 + offsetY
    
    const angles = [335 * Math.PI / 180, 0, 25 * Math.PI / 180]
    const angle = angles[i]
    
    const endX = ringCenterX + ringRadius * Math.cos(angle)
    const endY = ringCenterY + ringRadius * Math.sin(angle)
    
    const dx = endX - startX
    const cp1x = startX + dx * 0.5
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
  const [isHovered, setIsHovered] = useState(false)

  const stagger = index * 0.12
  const cardReveal = Math.min(Math.max((reveal - stagger) * 2.2, 0), 1)
  const fromSide = card.side === 'left' ? -1 : 1
  const offsetX = (1 - cardReveal) * 60 * fromSide
  const topOffsets = ['22%', '42%', '62%']

  const isLeft = card.side === 'left'

  const handleMouseMove = (e) => {
    const node = cardRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const tiltX = (y / rect.height - 0.5) * 12
    const tiltY = (x / rect.width - 0.5) * -12

    node.style.transform = `translateX(${offsetX}px) translateY(${(1 - cardReveal) * 20}px) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`
    node.style.setProperty('--spotlight-bg', `radial-gradient(circle 180px at ${x}px ${y}px, ${
      isLeft ? 'rgba(23, 70, 210, 0.15)' : 'rgba(0, 168, 107, 0.15)'
    }, transparent 80%)`)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    const node = cardRef.current
    if (!node) return
    node.style.transform = `translateX(${offsetX}px) translateY(${(1 - cardReveal) * 20}px) perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)`
    node.style.setProperty('--spotlight-bg', 'transparent')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`feature-card absolute z-[25] hidden w-[min(340px,25vw)] lg:block transition-all duration-300 ease-out ${
        isLeft ? 'left-[4%] xl:left-[6%]' : 'right-[4%] xl:right-[6%]'
      }`}
      style={{
        top: topOffsets[index % 3],
        opacity: cardReveal,
        transform: `translateX(${offsetX}px) translateY(${(1 - cardReveal) * 20}px) perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)`,
      }}
    >
      <div className={`feature-card-inner group relative overflow-hidden rounded-2xl ${isLeft ? 'card-left-theme' : 'card-right-theme'} flex items-center gap-4 px-5 py-4`}>
        {/* Specular highlights */}
        <div 
          className="pointer-events-none absolute inset-[3px] rounded-[13px] border transition-colors duration-300" 
          style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
          aria-hidden="true"
        />

        <div className="card-shine-effect" aria-hidden="true" />
        
        {/* Spotlight highlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: 'var(--spotlight-bg, transparent)',
          }}
        />
        
        {/* Octagonal Icon Container */}
        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center">
          <div 
            className="feature-card-icon-outer absolute inset-0 transition-all duration-300" 
            style={{
              backgroundColor: 'var(--card-octagon-border)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
          />
          <div 
            className="absolute inset-[1px] bg-black flex items-center justify-center transition-colors duration-300"
            style={{
              color: 'var(--card-icon-color)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
          >
            {card.icon}
          </div>
        </div>
        
        <div className="relative z-10 min-w-0 flex-1">
          <p 
            className="m-0 truncate font-display text-[0.8rem] font-bold tracking-wider uppercase transition-colors duration-300" 
            style={{ color: 'var(--card-title-color)' }}
          >
            {card.title}
          </p>
          <p className="m-0 mt-0.5 truncate font-body text-[0.66rem] text-slate-400 tracking-wide font-medium">
            {card.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

function HeroRing({ opacity, scale }) {
  const size = 'min(100vw, 720px)'

  return (
    <div
      className="pointer-events-none absolute top-[-10%] left-1/2 z-[1]"
      style={{
        width: size,
        height: size,
        opacity,
        transform: `translateX(-50%) scale(${scale})`,
      }}
      aria-hidden="true"
    >
      {/* Outer diffuse glow halo */}
      <div
        className="absolute inset-[-25%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse 55% 50% at 50% 45%, rgba(23,70,210,0.14) 0%, rgba(0,168,107,0.09) 40%, transparent 70%)',
        }}
      />

      <div className="relative h-full w-full">
        {/* Outermost ring - dashed, slow counter-rotate */}
        <div
          className="portal-orbit-reverse absolute inset-[-4%] rounded-full border border-dashed"
          style={{ borderColor: 'rgba(23,70,210,0.25)' }}
        >
          <div className="portal-particle-orbit absolute top-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A86B] shadow-[0_0_14px_6px_rgba(0,168,107,0.5)]" />
        </div>

        {/* Tech Ticks HUD Ring */}
        <div className="absolute inset-[-1%] rounded-full border border-[#1746D2]/20" />
        <div className="absolute inset-[-1.5%] rounded-full">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 w-[1.5px] bg-[#1746D2]/60" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2.5 w-[1.5px] bg-[#1746D2]/60" />
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-[1.5px] bg-[#1746D2]/60" />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-[1.5px] bg-[#1746D2]/60" />
        </div>

        {/* Second ring */}
        <div
          className="absolute inset-[2%] rounded-full"
          style={{ border: '1px solid rgba(23,70,210,0.12)' }}
        />

        {/* Main glowing ring */}
        <div
          className="portal-ring-main absolute inset-[5%] rounded-full"
          style={{
            border: '2.5px solid transparent',
            background: 'linear-gradient(#faf8ff, #faf8ff) padding-box, conic-gradient(from 0deg, #1746D2, #1a56e8, #00A86B, #D4AF37, #00A86B, #1746D2) border-box',
            boxShadow: '0 0 35px rgba(23,70,210,0.25), 0 0 70px rgba(0,168,107,0.12), inset 0 0 30px rgba(23,70,210,0.06)',
          }}
        >
          <div className="portal-particle-orbit-fast absolute top-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1746D2] shadow-[0_0_18px_7px_rgba(23,70,210,0.5)]" />
          <div className="portal-particle-orbit-fast absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#00A86B] shadow-[0_0_14px_5px_rgba(0,168,107,0.5)]" />
        </div>

        {/* Inner fast dotted ring */}
        <div 
          className="portal-orbit absolute inset-[11%] rounded-full border border-dotted" 
          style={{ borderColor: 'rgba(0,168,107,0.3)', animationDuration: '10s' }}
        />

        {/* Inner rings */}
        <div className="absolute inset-[9%] rounded-full" style={{ border: '1px solid rgba(23,70,210,0.2)' }} />
        <div className="absolute inset-[13%] rounded-full" style={{ border: '1px solid rgba(0,168,107,0.12)' }} />

        {/* Center radial energy glow */}
        <div
          className="portal-core-pulse absolute inset-[20%] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(23,70,210,0.08) 0%, rgba(0,168,107,0.04) 50%, transparent 70%)',
          }}
        />

        {/* Dashed tech track */}
        <div className="portal-orbit absolute inset-[7%] rounded-full" style={{ border: '1px dashed rgba(23,70,210,0.14)' }} />

        {/* Floor glow line */}
        <div
          className="absolute bottom-[15%] left-[-10%] right-[-10%] h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(23,70,210,0.5) 25%, rgba(0,168,107,0.6) 40%, rgba(212,175,55,0.6) 60%, rgba(23,70,210,0.5) 75%, transparent 100%)',
            boxShadow: '0 0 20px rgba(23,70,210,0.25), 0 0 40px rgba(0,168,107,0.12)',
          }}
        />

        <div
          className="portal-floor-flare absolute bottom-[13%] left-1/2 h-8 w-24 -translate-x-1/2 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(23,70,210,0.6) 0%, rgba(0,168,107,0.35) 30%, rgba(212,175,55,0.15) 60%, transparent 100%)',
            filter: 'blur(4px)',
          }}
        />

        {/* Floating micro particles */}
        <div className="portal-micro-particle-1 absolute top-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-[#1746D2]/70 shadow-[0_0_8px_rgba(23,70,210,0.5)]" />
        <div className="portal-micro-particle-2 absolute top-[30%] right-[12%] h-2 w-2 rounded-full bg-[#00A86B]/60 shadow-[0_0_10px_rgba(0,168,107,0.5)]" />
        <div className="portal-micro-particle-3 absolute top-[15%] right-[30%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/50 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
        <div className="portal-micro-particle-1 absolute bottom-[25%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#1746D2]/60 shadow-[0_0_8px_rgba(23,70,210,0.5)]" />
        <div className="portal-micro-particle-2 absolute bottom-[30%] right-[22%] h-1 w-1 rounded-full bg-[#00A86B]/50 shadow-[0_0_8px_rgba(0,168,107,0.5)]" />
      </div>
    </div>
  )
}
function BentoCard({ title, description, icon, color = "blue" }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const isBlue = color === "blue";

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const tiltX = (y / rect.height - 0.5) * 8
    const tiltY = (x / rect.width - 0.5) * -8

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`
    card.style.setProperty('--spotlight-bg', `radial-gradient(circle 220px at ${x}px ${y}px, ${
      isBlue ? 'rgba(23,70,210,0.07)' : 'rgba(0,168,107,0.07)'
    }, transparent 80%)`)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    const card = cardRef.current
    if (!card) return
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`
    card.style.setProperty('--spotlight-bg', 'transparent')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="bento-card group rounded-[22px] p-7 md:p-8 transition-all duration-300 ease-out border border-slate-100/80 bg-white/90 backdrop-blur-sm relative overflow-hidden"
      style={{
        boxShadow: isHovered
          ? isBlue
            ? '4px 4px 0px 0px rgba(23,70,210,0.35)'
            : '4px 4px 0px 0px rgba(0,168,107,0.35)'
          : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* Spotlight highlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: 'var(--spotlight-bg, transparent)',
        }}
      />

      {/* Floating accent glow */}
      <div 
        className="pointer-events-none absolute -right-6 -top-6 h-[220px] w-[220px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-0"
        style={{
          background: isBlue
            ? 'radial-gradient(circle, rgba(23,70,210,0.12) 0%, rgba(23,70,210,0.04) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0,168,107,0.12) 0%, rgba(0,168,107,0.04) 50%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative z-10 flex flex-col justify-start">
        <div 
          className={`icon-soft-glow mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${
            isBlue 
              ? 'border-[#1746D2]/30 bg-[#1746D2]/10 text-[#1746D2]' 
              : 'border-[#00A86B]/30 bg-[#00A86B]/10 text-[#00A86B]'
          }`}
          style={{
            animationDelay: isBlue ? '1.5s' : '0s'
          }}
        >
          {icon}
        </div>
        
        <div>
          <h4 className="mb-2 font-display text-[1.25rem] font-bold text-slate-800 tracking-tight">{title}</h4>
          <p className="font-body text-[0.9rem] leading-relaxed text-slate-500 font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="relative w-full py-16 md:py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAFBFF 0%, #f0f4ff 100%)' }}>
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 [background-image:linear-gradient(rgba(23,70,210,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Animated floating gradient blobs */}
      <div className="hero-blob-1 absolute -top-20 right-[-5%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#1746D2]/20 via-[#1746D2]/15 to-[#00A86B]/20 blur-[100px] pointer-events-none" />
      <div className="hero-blob-2 absolute bottom-[-10%] left-[-8%] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-[#1746D2]/15 via-[#00A86B]/12 to-[#D4AF37]/15 blur-[100px] pointer-events-none" />
      <div className="hero-blob-3 absolute top-1/3 left-1/2 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-[#D4AF37]/12 via-[#00A86B]/10 to-[#1746D2]/12 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-3">
          <span className="icon-soft-glow flex h-8 w-8 items-center justify-center rounded-lg border border-[#1746D2]/30 bg-[#1746D2]/10 text-[#1746D2]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-transparent" />
          <h2 className="font-body text-xs font-bold tracking-[0.3em] text-[#1746D2] uppercase">
            WHO WE ARE
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] xl:gap-14 items-center">
          
          {/* Main Narrative */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-8 font-display text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.15] font-bold text-slate-800">
              Not Just an AI Vendor. Not an Agency. Not a Studio.{' '}
              <span className="text-shimmer">An Intelligence Ecosystem.</span>
            </h3>
            
            {/* Animated gradient border card */}
            <div className="animated-gradient-border group relative rounded-2xl px-8 py-8">
              <p className="mb-5 font-body text-base leading-relaxed text-slate-600 md:text-lg relative z-10">
                TECH6SENSE AI was founded on a simple conviction: the organizations that win the next decade won't just use AI — they'll be architected around it. We are a global AI development, full-stack IT services, and deep-tech product engineering company operating globally.
              </p>
              <p className="mb-5 font-body text-base leading-relaxed text-slate-600 md:text-lg relative z-10">
                TECH6SENSE AI is a next-generation Artificial Intelligence company specializing in enterprise AI development, intelligent software engineering, deep-tech product innovation, AI-powered automation, and global technology consulting.
              </p>
              <p className="mb-5 font-body text-base leading-relaxed text-slate-600 md:text-lg relative z-10">
                We don't hand off strategy decks and disappear. We build — models, platforms, products, and go-to-market systems — and we stay accountable to outcomes, not deliverables.
              </p>
              <p className="mb-5 font-body text-base leading-relaxed text-slate-600 md:text-lg relative z-10">
                We partner with ambitious organizations to transform complex ideas into intelligent products, scalable platforms, and industry-defining solutions that create measurable business value.
              </p>
              <p className="mb-5 font-body text-base leading-relaxed text-slate-600 md:text-lg relative z-10">
                Whether you're modernizing enterprise operations, building a groundbreaking AI product, launching a technology startup, or creating intelligent infrastructure, our multidisciplinary teams deliver world-class engineering from strategy through deployment.
              </p>
              <p className="font-body text-base leading-relaxed text-slate-600 md:text-lg relative z-10">
                Beyond client engagements, TECH6SENSE AI operates two ecosystem ventures that extend our expertise outward: <strong className="text-slate-800 font-bold">Visionary Founders</strong>, which equips entrepreneurs to launch their own AI companies, and <strong className="text-slate-800 font-bold">Business Brains</strong>, a private global circle connecting investors and operators who move markets.
              </p>

              {/* Decorative dots */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-60 z-10">
                <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#1746D2] to-[#00A86B]" />
                <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#00A86B] to-[#D4AF37]" />
                <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#1746D2]" />
              </div>
            </div>

            <div className="mt-8">
              <a href="/about" className="group inline-flex items-center gap-2 font-display text-sm font-bold text-[#1746D2] hover:text-[#1233A0] transition-colors">
                Learn about us
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bento Cards - Right Side */}
          <div className="flex flex-col gap-5 justify-center">
            {/* Trust Indicators Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
              {/* Subtle background gradient glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#00A86B]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#1746D2]/5 rounded-full blur-2xl pointer-events-none" />
              
              <h4 className="font-display text-lg font-extrabold text-slate-900 mb-6">
                Trust Indicators
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Enterprise AI Development",
                  "Custom AI Products",
                  "Deep-Tech Innovation",
                  "Full Stack Engineering",
                  "AI Consulting",
                  "Global Delivery",
                  "Startup Acceleration",
                  "Business Growth Ecosystem"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-[#00A86B] shrink-0 border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="font-body text-xs md:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <BentoCard
              title="Global AI Engineering"
              description="Operating globally across nine markets, we serve enterprises, governments, startups, and visionary founders with full-stack AI services, deep-tech innovation, and enterprise-grade deployment."
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              }
              color="emerald"
            />

            <BentoCard
              title="GIFT City & Ecosystem Hub"
              description="Headquartered at GIFT City — India's premier global tech and financial hub — powering our Visionary Founders program and the Business Brains private global syndicate."
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              }
              color="blue"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// RealisticGlobeCanvas removed from Home page level

function PremiumAnnouncementBar() {
  const countries = [
    "USA", "UK", "Canada", "Australia", "European Union", "UAE", "Singapore", "Hong Kong", "India"
  ];
  
  // Duplicate list to make infinite marquee scrolling seamless
  const duplicatedCountries = [...countries, ...countries, ...countries, ...countries];

  return (
    <div className="w-full bg-gradient-to-r from-[#03060f] via-[#091530] to-[#03060f] border-y border-[#D4AF37]/20 py-3.5 px-4 md:px-8 lg:px-12 relative z-20 shadow-[inset_0_-1px_10px_rgba(212,175,55,0.05)] overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
        
        {/* Left Side: Live Radar Beacon & Statement (Static) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-3.5 shrink-0 w-full lg:w-auto justify-center lg:justify-start text-center lg:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#002214] border border-[#00A86B]/60 shrink-0">
              <span className="h-2 w-2 rounded-full bg-[#00A86B] shadow-[0_0_8px_#00A86B]" />
            </div>
            <span className="px-3.5 py-1 rounded-full text-[0.65rem] font-bold tracking-[0.15em] uppercase border border-[#D4AF37] text-[#D4AF37] bg-transparent whitespace-nowrap">
              GLOBAL FOOTPRINT
            </span>
          </div>

          <span className="font-display text-xs md:text-sm font-bold text-white tracking-wide leading-relaxed max-w-[90vw] sm:max-w-none">
            Trusted by Enterprises, Governments, Startups &amp; Founders
          </span>
          
          {/* Vertical divider on desktop */}
          <div className="hidden lg:block h-6 w-[1px] bg-white/10 ml-4" />
        </div>

        {/* Right Side: Countries list (Scrolling Marquee) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-announcement-marquee gap-8 items-center font-mono text-xs md:text-sm font-semibold text-[#D4AF37] tracking-wider py-1">
            {duplicatedCountries.map((country, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span>{country}</span>
                <span className="text-[#00A86B]">✦</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Inline styles for this specific marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes announcementMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-announcement-marquee {
          animation: announcementMarquee 25s linear infinite;
        }
      `}} />
    </div>
  );
}

const MemoHeader = memo(Header);
const MemoAboutSection = memo(AboutSection);
const MemoIntelligenceStack = memo(IntelligenceStack);
const MemoAISolutionsOutcome = memo(AISolutionsOutcome);
const MemoHowWeWork = memo(HowWeWork);
const MemoWhoWeServe = memo(WhoWeServe);
const MemoDeepTechProducts = memo(DeepTechProducts);
const MemoEcosystemSection = memo(EcosystemSection);
const MemoEngagementModels = memo(EngagementModels);
const MemoIndustriesTransform = memo(IndustriesTransform);
const MemoWhyChoose = memo(WhyChooseTech6Sense);
const MemoInnovationStories = memo(InnovationStories);
const MemoFAQSection = memo(FAQSection);
const MemoFinalCTA = memo(FinalCTA);
const MemoFooter = memo(Footer);


export default function Home() {
  return (
    <main className="bg-bg relative">
      <MemoHeader />
      <TechHero />
      <PremiumAnnouncementBar />
      <Suspense fallback={null}>
        <MemoAboutSection />
        <MemoIntelligenceStack />
        <MemoAISolutionsOutcome />
        <MemoHowWeWork />
        <MemoWhoWeServe />
        <MemoDeepTechProducts />
        <MemoEcosystemSection />
        <MemoEngagementModels />
        <MemoIndustriesTransform />
        <MemoWhyChoose />
        <MemoInnovationStories />
        <MemoFAQSection />
        <MemoFinalCTA />
        <MemoFooter />
      </Suspense>
    </main>
  )
}
