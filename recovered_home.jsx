export default function Home() {
  const scrollRef = useRef(null)
  const heroRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [torch, setTorch] = useState({ x: 0, y: 0, active: false })
  const [winSize, setWinSize] = useState({ w: 1200, h: 800 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const el = scrollRef.current
    if (!el) return

    let scrollable = el.offsetHeight - window.innerHeight

    const handleResize = () => {
      setWinSize({ w: window.innerWidth, h: window.innerHeight })
      scrollable = el.offsetHeight - window.innerHeight
    }
    handleResize()

    const onScroll = () => {
      const scrolled = Math.min(Math.max(window.scrollY, 0), scrollable)
      setProgress(scrollable > 0 ? scrolled / scrollable : 0)
    }
    onScroll()

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const updateTorch = (clientX, clientY) => {
    setTorch({ x: clientX, y: clientY, active: true })
  }

  const handleMouseMove = (e) => updateTorch(e.clientX, e.clientY)
  const handleTouchMove = (e) => {
    const touch = e.touches[0]
    if (touch) updateTorch(touch.clientX, touch.clientY)
  }
  const handleLeave = () => setTorch((prev) => ({ ...prev, active: false }))

  const titleOpacity = Math.max(0, 1 - progress * 2.8)
  const taglineOpacity = Math.max(0, 1 - progress * 2.5)
  const ringOpacity = Math.min(Math.max((progress - 0.12) * 2.2, 0), 1)
  const ringScale = 0.88 + ringOpacity * 0.12
  const cardsReveal = Math.min(Math.max((progress - 0.3) * 2, 0), 1)
  const topPillOpacity = Math.min(Math.max((progress - 0.45) * 2.5, 0), 1)
  const bottomTagOpacity = Math.min(Math.max((progress - 0.5) * 2.5, 0), 1)
  const scrollIndicatorOpacity = Math.max(0, 1 - progress * 5.2)

  const leftCards = FEATURE_CARDS.filter((c) => c.side === 'left')
  const rightCards = FEATURE_CARDS.filter((c) => c.side === 'right')

  return (
    <main className="bg-bg">
      <MemoHeader />

      <section ref={scrollRef} className="relative h-[220vh]">
        <div
          ref={heroRef}
          className="sticky top-0 h-screen w-full overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          onTouchStart={handleTouchMove}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleLeave}
        >
          {/* Original Base Background */}
          <div className="absolute inset-0 z-0 bg-[#0a031d]" style={{ background: 'radial-gradient(circle at 50% 45%, #250954 0%, #12062f 45%, #0a031d 85%)' }} />
          


          <HeroBackgroundTitle opacity={titleOpacity} progress={progress} torch={torch} winSize={winSize} />

          {/* Top pill */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[calc(10vh+20px)] z-[6] flex justify-center px-4"
            style={{
              opacity: topPillOpacity,
              transform: `translateY(${(1 - topPillOpacity) * -12}px)`,
            }}
          >
            <div className="pointer-events-auto border border-violet-500/15 bg-violet-950/45 px-6 py-2.5 backdrop-blur-md rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex items-center justify-center">
              <p className="m-0 font-body text-[0.62rem] tracking-[0.32em] font-bold text-slate-300 uppercase flex items-center justify-center">
                AI <span className="text-violet-400 font-bold px-1.5">•</span> AUTOMATION <span className="text-fuchsia-400 font-bold px-1.5">•</span> DEEP-TECH <span className="text-indigo-400 font-bold px-1.5">•</span> INNOVATION
              </p>
            </div>
          </div>

          {/* Center Background Video (Behind Globe) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[10] flex justify-center mix-blend-screen">
            <div 
              className="relative h-[min(92vh,820px)] w-full max-w-[min(92vw,680px)] flex justify-center"
              style={{ transform: `translateY(calc(${progress * 14}vh - 120px))` }}
            >
              <video 
                src="/background.webm" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain"
                style={{ filter: 'contrast(1.3) brightness(0.8)' }}
              />
            </div>
          </div>

          {/* Network Globe Container */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] flex justify-center">
            <div 
              className="relative h-[min(92vh,820px)] w-full max-w-[min(92vw,450px)] flex justify-center"
              style={{ transform: `translateY(${progress * 14}vh)` }}
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

          {/* SVG Connector Lines */}
          <svg className="pointer-events-none absolute inset-0 z-[24] h-full w-full hidden lg:block">
            <defs>
              <linearGradient id="line-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(124,58,237,0.5)" />
                <stop offset="40%" stopColor="rgba(168,85,247,0.3)" />
                <stop offset="100%" stopColor="rgba(217,70,239,0.5)" />
              </linearGradient>
              <linearGradient id="line-grad-right" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(124,58,237,0.5)" />
                <stop offset="40%" stopColor="rgba(168,85,247,0.3)" />
                <stop offset="100%" stopColor="rgba(217,70,239,0.5)" />
              </linearGradient>
            </defs>
            {getConnectorPaths(winSize.w, winSize.h, progress, cardsReveal).map((path, idx) => (
              <g
                key={path.id}
                style={{
                  opacity: path.reveal,
                  transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <path d={path.d} stroke={`url(#line-grad-${path.isLeft ? 'left' : 'right'})`} strokeWidth="1.5" fill="none" />
                <path
                  d={path.d}
                  stroke={path.isLeft ? '#7c3aed' : '#d946ef'}
                  strokeWidth="2.5"
                  fill="none"
                  className={path.isLeft ? 'connector-pulse-left' : 'connector-pulse-right'}
                  style={{ animationDelay: `${(idx % 3) * 0.8}s` }}
                />
                <circle cx={path.endX} cy={path.endY} r="3.5" fill={path.isLeft ? '#d946ef' : '#7c3aed'} className="connector-endpoint-pulse" />
              </g>
            ))}
          </svg>

          {/* Mobile cards grid */}
          <div className="pointer-events-none absolute inset-x-3 bottom-28 z-[25] grid grid-cols-2 gap-2.5 lg:hidden">
            {FEATURE_CARDS.map((card, idx) => {
              const stagger = idx * 0.08
              const mobileCardReveal = Math.min(Math.max((cardsReveal - stagger) * 2, 0), 1)
              return (
                <div
                  key={card.title}
                  className="feature-card-inner px-3 py-2.5 transition-all duration-300"
                  style={{
                    opacity: mobileCardReveal,
                    transform: `translateY(${(1 - mobileCardReveal) * 12}px)`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="feature-card-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-violet-500/20 bg-violet-950/40 text-violet-400">
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="m-0 truncate font-display text-[0.55rem] font-bold tracking-wider text-slate-200">
                        {card.title}
                      </p>
                      <p className="m-0 mt-0.5 truncate font-body text-[0.48rem] text-slate-400">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <HeroTagline opacity={taglineOpacity} progress={progress} />

          {/* Bottom center tagline */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-10 z-[30] hidden text-center md:block"
            style={{
              opacity: bottomTagOpacity,
              transform: `translateY(${(1 - bottomTagOpacity) * 16}px)`,
            }}
          >
            <p className="m-0 font-display text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase md:text-base">
              Transforming Vision Into Intelligence
            </p>
          </div>

          {/* Scroll Indicator - Bottom Right */}
          <div
            className="pointer-events-none absolute bottom-9 right-[4%] xl:right-[6%] z-[30] hidden items-center gap-3 transition-all duration-200 lg:flex"
            style={{
              opacity: scrollIndicatorOpacity,
              transform: `translateY(${(1 - scrollIndicatorOpacity) * 12}px)`,
            }}
          >
            <span className="font-body text-[0.55rem] tracking-[0.25em] font-semibold text-slate-400 uppercase">
              Scroll to Explore
            </span>
            <div className="flex h-7 w-4.5 justify-center rounded-full border border-violet-500/20 bg-violet-950/40 p-[3px] shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              <div className="scroll-dot-animated h-1.5 w-1 rounded-full bg-violet-400" />
            </div>
          </div>

          {/* Bottom right action button */}
          <a
            href="#about"
            className="group absolute bottom-9 right-[4%] xl:right-[6%] z-[30] hidden items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 font-display text-[0.65rem] font-bold tracking-widest text-white no-underline shadow-[0_4px_15px_rgba(124,58,237,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)] active:scale-[0.98] lg:flex"
            style={{
              opacity: cardsReveal,
              transform: `translateY(${(1 - cardsReveal) * 20}px)`,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {/* Hover overlay gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2.5">
              EXPLORE INTELLIGENCE
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </span>
          </a>

          {/* Overlays */}
          <div className="hero-scan pointer-events-none absolute right-0 left-0 z-20 h-32 bg-gradient-to-b from-transparent via-violet-400/6 to-transparent" aria-hidden="true" />
        </div>
      </section>