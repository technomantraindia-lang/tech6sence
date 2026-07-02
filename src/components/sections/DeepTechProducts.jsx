import { useState, useEffect, useRef, useCallback } from 'react';

const PRODUCTS = [
  {
    id: 'wearables',
    tab: 'AI Wearables',
    title: 'AI Wearables',
    description: 'Smart glasses, AI watches, earphones, and connected wearable devices that bring intelligent assistance closer to users in real time.',
    features: ['Real-time AI assistance', 'Voice and sensor interaction', 'Connected user experiences'],
    tags: ['Voice AI', 'Sensor Data', 'BLE 5.0', 'Edge ML'],
    accent: '#7c3aed',
    graphic: () => (
      <svg viewBox="0 0 24 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {/* Watch body */}
        <rect x="80" y="30" width="80" height="100" rx="20" fill="url(#dtp-grad-1)" stroke="#7c3aed" strokeWidth="1.5" />
        <rect x="88" y="40" width="64" height="72" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        {/* Watch band */}
        <rect x="95" y="10" width="50" height="24" rx="6" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 3" className="dtp-dash-anim" />
        <rect x="95" y="126" width="50" height="24" rx="6" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 3" className="dtp-dash-anim" />
        {/* Screen elements */}
        <circle cx="120" cy="64" r="10" fill="none" stroke="#7c3aed" strokeWidth="1.5" className="dtp-pulse" />
        <circle cx="120" cy="64" r="5" fill="#7c3aed" opacity="0.3" className="dtp-pulse-delay" />
        <rect x="100" y="82" width="40" height="3" rx="1.5" fill="#e2e8f0" />
        <rect x="106" y="90" width="28" height="3" rx="1.5" fill="#e2e8f0" />
        <rect x="110" y="98" width="20" height="3" rx="1.5" fill="#d946ef" opacity="0.4" />
        {/* Signal waves */}
        <path d="M170 55 Q180 50, 185 55" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.4" className="dtp-pulse" />
        <path d="M175 50 Q188 42, 195 50" fill="none" stroke="#d946ef" strokeWidth="1" opacity="0.3" className="dtp-pulse-delay" />
      </svg>
    ),
  },
  {
    id: 'healthcare',
    tab: 'Healthcare AI',
    title: 'Healthcare AI Devices',
    description: 'AI-enabled health devices designed to support monitoring, early insights, diagnostics assistance, and smarter patient-focused care.',
    features: ['Health data monitoring', 'AI-supported insights', 'Smart clinical workflows'],
    tags: ['Vitals AI', 'HIPAA Ready', 'Diagnostics', 'IoMT'],
    accent: '#06b6d4',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        {/* Heart monitor */}
        <rect x="40" y="40" width="160" height="100" rx="16" fill="url(#dtp-grad-2)" stroke="#06b6d4" strokeWidth="1.5" />
        <rect x="50" y="50" width="140" height="60" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        {/* ECG line */}
        <polyline points="55,80 75,80 82,65 90,95 98,70 106,85 115,80 140,80 148,60 156,100 164,75 172,80 185,80" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dtp-ecg-anim" />
        {/* Heart icon */}
        <circle cx="120" cy="130" r="5" fill="#06b6d4" opacity="0.5" className="dtp-pulse" />
        <text x="132" y="133" fill="#64748b" fontSize="8" fontFamily="monospace">72 BPM</text>
        {/* Data dots */}
        <circle cx="60" cy="120" r="2.5" fill="#06b6d4" opacity="0.4" className="dtp-pulse-delay" />
        <circle cx="75" cy="125" r="2" fill="#7c3aed" opacity="0.3" className="dtp-pulse" />
        <circle cx="170" cy="122" r="2.5" fill="#d946ef" opacity="0.3" className="dtp-pulse-delay" />
      </svg>
    ),
  },
  {
    id: 'iot',
    tab: 'Smart IoT',
    title: 'Smart IoT Devices',
    description: 'Connected intelligent devices built with sensors, automation, cloud integration, and AI-driven decision systems.',
    features: ['Sensor-based intelligence', 'Cloud-connected devices', 'Automation-ready systems'],
    tags: ['MQTT', 'Edge Compute', 'Cloud Sync', 'OTA Updates'],
    accent: '#8b5cf6',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        {/* Central hub */}
        <circle cx="120" cy="90" r="22" fill="url(#dtp-grad-3)" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="10" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="4" fill="#8b5cf6" opacity="0.5" className="dtp-pulse" />
        {/* Orbiting ring */}
        <circle cx="120" cy="90" r="50" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="6 8" opacity="0.3" className="dtp-spin" />
        <circle cx="120" cy="90" r="72" fill="none" stroke="#d946ef" strokeWidth="0.8" strokeDasharray="4 12" opacity="0.2" className="dtp-spin-reverse" />
        {/* Connected nodes */}
        <circle cx="55" cy="55" r="8" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
        <line x1="63" y1="60" x2="100" y2="78" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="dtp-dash-anim" />
        <circle cx="185" cy="60" r="8" fill="white" stroke="#d946ef" strokeWidth="1.5" />
        <line x1="177" y1="65" x2="140" y2="80" stroke="#d946ef" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="dtp-dash-anim" />
        <circle cx="60" cy="140" r="8" fill="white" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="67" y1="135" x2="103" y2="103" stroke="#06b6d4" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="dtp-dash-anim" />
        <circle cx="180" cy="135" r="8" fill="white" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="173" y1="130" x2="137" y2="102" stroke="#7c3aed" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="dtp-dash-anim" />
        {/* Small icons inside nodes */}
        <rect x="51" y="52" width="8" height="6" rx="1" fill="none" stroke="#8b5cf6" strokeWidth="1" />
        <rect x="181" y="57" width="8" height="6" rx="1" fill="none" stroke="#d946ef" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 'augmentation',
    tab: 'Augmentation',
    title: 'Human Augmentation',
    description: 'AI exoskeletons and assistive systems designed to improve human movement, safety, endurance, and industrial performance.',
    features: ['Assistive mobility systems', 'AI movement support', 'Industrial safety enhancement'],
    tags: ['Exoskeleton', 'Motion AI', 'Safety+', 'Haptic FB'],
    accent: '#ec4899',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        {/* Human figure outline */}
        <circle cx="120" cy="35" r="12" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="47" x2="120" y2="100" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="60" x2="90" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="60" x2="150" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="100" x2="95" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="100" x2="145" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Exoskeleton overlay */}
        <path d="M115 48 L115 100 L93 140" fill="none" stroke="#ec4899" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" className="dtp-pulse" />
        <path d="M125 48 L125 100 L147 140" fill="none" stroke="#ec4899" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" className="dtp-pulse-delay" />
        {/* Joint nodes */}
        <circle cx="115" cy="60" r="4" fill="white" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="125" cy="60" r="4" fill="white" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="115" cy="100" r="4" fill="white" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="125" cy="100" r="4" fill="white" stroke="#ec4899" strokeWidth="1.5" />
        {/* Power indicators */}
        <rect x="60" y="60" width="18" height="28" rx="3" fill="url(#dtp-grad-4)" stroke="#ec4899" strokeWidth="1" />
        <rect x="63" y="63" width="12" height="6" rx="1" fill="#ec4899" opacity="0.4" className="dtp-pulse" />
        <rect x="63" y="72" width="12" height="6" rx="1" fill="#ec4899" opacity="0.25" />
        <rect x="63" y="81" width="12" height="4" rx="1" fill="#ec4899" opacity="0.15" />
      </svg>
    ),
  },
  {
    id: 'digital-tools',
    tab: 'Digital Tools',
    title: 'AI Digital Tools',
    description: 'AI-powered digital notepads, smart earphones, and productivity devices that improve everyday work, learning, and communication.',
    features: ['Productivity intelligence', 'Voice-enabled interaction', 'Smart personal devices'],
    tags: ['NLP Engine', 'Whisper AI', 'Sync+', 'Smart Ink'],
    accent: '#f59e0b',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        {/* Notepad */}
        <rect x="60" y="25" width="120" height="130" rx="12" fill="url(#dtp-grad-5)" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="70" y="35" width="100" height="108" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        {/* Screen content */}
        <rect x="80" y="48" width="60" height="4" rx="2" fill="#e2e8f0" />
        <rect x="80" y="58" width="45" height="4" rx="2" fill="#e2e8f0" />
        <rect x="80" y="68" width="70" height="4" rx="2" fill="#f59e0b" opacity="0.35" />
        <rect x="80" y="78" width="55" height="4" rx="2" fill="#e2e8f0" />
        <rect x="80" y="88" width="65" height="4" rx="2" fill="#e2e8f0" />
        {/* AI indicator */}
        <circle cx="155" cy="48" r="6" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="dtp-pulse" />
        <circle cx="155" cy="48" r="2.5" fill="#f59e0b" opacity="0.5" />
        {/* Stylus */}
        <line x1="175" y1="100" x2="195" y2="50" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="195" cy="50" r="2.5" fill="#f59e0b" opacity="0.6" />
        {/* Sound wave for earphones */}
        <path d="M40 80 Q35 75, 30 80" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.4" className="dtp-pulse" />
        <path d="M42 72 Q33 65, 25 72" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.3" className="dtp-pulse-delay" />
      </svg>
    ),
  },
];

function FloatingTag({ text, x, y, delay }) {
  return (
    <span
      className="absolute px-2.5 py-1 rounded-full text-[0.55rem] font-bold tracking-wider uppercase border border-slate-200/60 bg-white/80 text-slate-450 shadow-sm pointer-events-none select-none dtp-float-tag"
      style={{ left: x, top: y, animationDelay: `${delay}s` }}
    >
      {text}
    </span>
  );
}

export default function DeepTechProducts() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [transitioning, setTransitioning] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = useCallback((index) => {
    if (index === activeTab || transitioning) return;
    setTransitioning(true);
    setActiveTab(index);
    setTimeout(() => {
      setTransitioning(false);
    }, 250);
  }, [activeTab, transitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTabClick((activeTab + 1) % PRODUCTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeTab, handleTabClick]);

  const product = PRODUCTS[activeTab];
  const tagPositions = [
    { x: '2%', y: '8%' },
    { x: '72%', y: '5%' },
    { x: '78%', y: '75%' },
    { x: '5%', y: '78%' },
  ];

  return (
    <section
      ref={sectionRef}
      id="deep-tech-products"
      className="relative w-full overflow-visible bg-gradient-to-b from-[#FAFAFA] via-[#F8F7FF] to-[#FAFAFA] py-24"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dtp-dash { to { stroke-dashoffset: -24; } }
        @keyframes dtp-pulse-kf { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes dtp-pulse-delay-kf { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes dtp-spin-kf { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes dtp-spin-rev-kf { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes dtp-float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
        @keyframes dtp-float-tag-kf { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.75; } 50% { transform: translateY(-4px) rotate(0.5deg); opacity: 1; } }
        @keyframes dtp-ecg { from { stroke-dashoffset: 300; } to { stroke-dashoffset: 0; } }
        @keyframes dtp-card-in { 0% { opacity: 0; transform: translateY(12px) scale(0.99); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        
        .dtp-dash-anim { animation: dtp-dash 2s linear infinite; }
        .dtp-pulse { animation: dtp-pulse-kf 2.5s ease-in-out infinite; }
        .dtp-pulse-delay { animation: dtp-pulse-delay-kf 2.5s ease-in-out infinite; }
        .dtp-spin { transform-origin: center; transform-box: fill-box; animation: dtp-spin-kf 25s linear infinite; }
        .dtp-spin-reverse { transform-origin: center; transform-box: fill-box; animation: dtp-spin-rev-kf 18s linear infinite; }
        .dtp-float-panel { animation: dtp-float 6s ease-in-out infinite; }
        .dtp-float-tag { animation: dtp-float-tag-kf 5s ease-in-out infinite; }
        .dtp-ecg-anim { stroke-dasharray: 300; animation: dtp-ecg 2.5s linear infinite; }
        .dtp-card-enter { animation: dtp-card-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}} />

      {/* Soft ambient glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-100/40 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-fuchsia-100/30 to-transparent blur-[120px] pointer-events-none" />

      {/* Grid Container */}
      <div
        className="mx-auto max-w-[85rem] px-6 transition-all duration-1000 ease-out relative py-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-14 lg:gap-20 items-start">

          {/* LEFT COLUMN: Intro content */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              <span className="font-mono text-[0.65rem] font-bold tracking-[0.35em] uppercase text-violet-500">
                Deep-Tech Products
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] font-extrabold text-slate-900 tracking-[-0.02em]">
              Deep-Tech Products Engineered for the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">
                Future
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mb-8 font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium max-w-md">
              From wearable intelligence to AI-powered healthcare and IoT devices, TECH6SENSE AI builds next-generation products that connect software intelligence with real-world hardware innovation.
            </p>

            {/* CTA */}
            <div className="mb-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 font-display text-sm font-bold tracking-wider text-white shadow-[0_4px_15px_rgba(124,58,237,0.2)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Deep-Tech Products
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Trust line */}
            <p className="font-body text-[0.75rem] text-slate-400 font-medium tracking-wide max-w-sm">
              AI-powered products designed for real-world industries, users, and intelligent ecosystems.
            </p>
          </div>

          {/* RIGHT COLUMN: Product Showcase Panel */}
          <div className="flex flex-col gap-6">
            {/* Tab selectors */}
            <div className="flex flex-wrap gap-2">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => handleTabClick(i)}
                  className="px-4 py-2 rounded-full text-[0.72rem] font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer outline-none select-none"
                  style={{
                    background: i === activeTab ? `linear-gradient(135deg, ${p.accent}, #d946ef)` : 'rgba(255,255,255,0.7)',
                    color: i === activeTab ? '#fff' : '#64748b',
                    borderColor: i === activeTab ? 'transparent' : 'rgba(226, 232, 240, 0.8)',
                    boxShadow: i === activeTab ? `0 4px 15px ${p.accent}25` : 'none',
                  }}
                >
                  {p.tab}
                </button>
              ))}
            </div>

            {/* Featured Product Panel */}
            <div className="relative dtp-float-panel">
              {/* Glow behind panel */}
              <div
                className="absolute -inset-4 rounded-[3rem] blur-[60px] pointer-events-none transition-colors duration-700"
                style={{ background: `radial-gradient(ellipse at center, ${product.accent}12, transparent 70%)` }}
              />

              <div
                key={product.id}
                className={`relative rounded-[2rem] border border-white/80 bg-white/70 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.6)_inset] p-6 md:p-8 lg:p-10 transition-opacity duration-250 ${transitioning ? 'opacity-0' : 'dtp-card-enter'}`}
              >
                {/* Panel header bar */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <span className="ml-auto font-mono text-[0.55rem] tracking-widest uppercase text-slate-300">
                    TECH6SENSE // PRODUCT LAB
                  </span>
                </div>

                {/* Content grid: left text + right visual */}
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-8 items-start">
                  {/* Text content */}
                  <div className="flex flex-col">
                    {/* Category badge */}
                    <div className="mb-4">
                      <span
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.6rem] font-bold tracking-[0.2em] uppercase border bg-white shadow-sm"
                        style={{ borderColor: product.accent + '30', color: product.accent }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: product.accent }} />
                        {product.tab}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-[1.5rem] md:text-[1.7rem] font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-[0.88rem] leading-[1.7] text-slate-500 font-medium mb-5">
                      {product.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.65rem] font-semibold tracking-wide bg-slate-50 text-slate-500 border border-slate-100"
                        >
                          <svg viewBox="0 0 16 16" className="w-3 h-3 shrink-0" fill="none" stroke={product.accent} strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.5 3.5L13 4" />
                          </svg>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual area */}
                  <div className="relative rounded-2xl bg-slate-50/80 border border-slate-100/60 overflow-hidden min-h-[220px] md:min-h-[260px] flex items-center justify-center p-4">
                    {/* Floating tags */}
                    {product.tags.map((tag, i) => (
                      <FloatingTag
                        key={tag}
                        text={tag}
                        x={tagPositions[i]?.x || '10%'}
                        y={tagPositions[i]?.y || '10%'}
                        delay={i * 0.8}
                      />
                    ))}

                    {/* SVG graphic with morph scale/rotate transition */}
                    <div className={`relative z-10 w-full max-w-[200px] mx-auto transition-all duration-500 ease-out transform ${
                      transitioning ? 'opacity-0 scale-95 rotate-[-3deg]' : 'opacity-100 scale-100 rotate-0'
                    }`}>
                      {product.graphic()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
