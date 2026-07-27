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
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="80" y="30" width="80" height="100" rx="20" fill="url(#dtp-grad-1)" stroke="#7c3aed" strokeWidth="1.5" />
        <rect x="88" y="40" width="64" height="72" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="95" y="10" width="50" height="24" rx="6" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 3" className="dtp-dash-anim" />
        <rect x="95" y="126" width="50" height="24" rx="6" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 3" className="dtp-dash-anim" />
        <circle cx="120" cy="64" r="10" fill="none" stroke="#7c3aed" strokeWidth="1.5" className="dtp-pulse" />
        <circle cx="120" cy="64" r="5" fill="#7c3aed" opacity="0.3" className="dtp-pulse-delay" />
        <rect x="100" y="82" width="40" height="3" rx="1.5" fill="#e2e8f0" />
        <rect x="106" y="90" width="28" height="3" rx="1.5" fill="#e2e8f0" />
        <rect x="110" y="98" width="20" height="3" rx="1.5" fill="#d946ef" opacity="0.4" />
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
        <rect x="40" y="40" width="160" height="100" rx="16" fill="url(#dtp-grad-2)" stroke="#06b6d4" strokeWidth="1.5" />
        <rect x="50" y="50" width="140" height="60" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <polyline points="55,80 75,80 82,65 90,95 98,70 106,85 115,80 140,80 148,60 156,100 164,75 172,80 185,80" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dtp-ecg-anim" />
        <circle cx="120" cy="130" r="5" fill="#06b6d4" opacity="0.5" className="dtp-pulse" />
        <text x="132" y="133" fill="#64748b" fontSize="8" fontFamily="monospace">72 BPM</text>
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
        <circle cx="120" cy="90" r="22" fill="url(#dtp-grad-3)" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="10" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="4" fill="#8b5cf6" opacity="0.5" className="dtp-pulse" />
        <circle cx="120" cy="90" r="50" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="6 8" opacity="0.3" className="dtp-spin" />
        <circle cx="120" cy="90" r="72" fill="none" stroke="#d946ef" strokeWidth="0.8" strokeDasharray="4 12" opacity="0.2" className="dtp-spin-reverse" />
        <circle cx="55" cy="55" r="8" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
        <line x1="63" y1="60" x2="100" y2="78" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="dtp-dash-anim" />
        <circle cx="185" cy="60" r="8" fill="white" stroke="#d946ef" strokeWidth="1.5" />
        <line x1="177" y1="65" x2="140" y2="80" stroke="#d946ef" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="dtp-dash-anim" />
        <circle cx="60" cy="140" r="8" fill="white" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="67" y1="135" x2="103" y2="103" stroke="#06b6d4" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="dtp-dash-anim" />
        <circle cx="180" cy="135" r="8" fill="white" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="173" y1="130" x2="137" y2="102" stroke="#7c3aed" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="dtp-dash-anim" />
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
        <circle cx="120" cy="35" r="12" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="47" x2="120" y2="100" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="60" x2="90" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="60" x2="150" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="100" x2="95" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="100" x2="145" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M115 48 L115 100 L93 140" fill="none" stroke="#ec4899" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" className="dtp-pulse" />
        <path d="M125 48 L125 100 L147 140" fill="none" stroke="#ec4899" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" className="dtp-pulse-delay" />
        <circle cx="115" cy="60" r="4" fill="white" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="125" cy="60" r="4" fill="white" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="115" cy="100" r="4" fill="white" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="125" cy="100" r="4" fill="white" stroke="#ec4899" strokeWidth="1.5" />
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
        <rect x="60" y="25" width="120" height="130" rx="12" fill="url(#dtp-grad-5)" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="70" y="35" width="100" height="108" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="80" y="48" width="60" height="4" rx="2" fill="#e2e8f0" />
        <rect x="80" y="58" width="45" height="4" rx="2" fill="#e2e8f0" />
        <rect x="80" y="68" width="70" height="4" rx="2" fill="#f59e0b" opacity="0.35" />
        <rect x="80" y="78" width="55" height="4" rx="2" fill="#e2e8f0" />
        <rect x="80" y="88" width="65" height="4" rx="2" fill="#e2e8f0" />
        <circle cx="155" cy="48" r="6" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="dtp-pulse" />
        <circle cx="155" cy="48" r="2.5" fill="#f59e0b" opacity="0.5" />
        <line x1="175" y1="100" x2="195" y2="50" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="195" cy="50" r="2.5" fill="#f59e0b" opacity="0.6" />
        <path d="M40 80 Q35 75, 30 80" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.4" className="dtp-pulse" />
        <path d="M42 72 Q33 65, 25 72" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.3" className="dtp-pulse-delay" />
      </svg>
    ),
  },
];

function FloatingTag({ text, x, y, delay }) {
  return (
    <span
      className="absolute px-3 py-1.5 rounded-full text-[0.6rem] font-bold tracking-widest uppercase border border-white/20 bg-white/10 backdrop-blur-md text-slate-700 shadow-sm pointer-events-none select-none dtp-float-tag"
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
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab, handleTabClick]);

  const product = PRODUCTS[activeTab];
  const tagPositions = [
    { x: '5%', y: '10%' },
    { x: '70%', y: '5%' },
    { x: '75%', y: '80%' },
    { x: '5%', y: '75%' },
  ];

  return (
    <section
      ref={sectionRef}
      id="deep-tech-products"
      className="relative w-full overflow-visible bg-white py-24 md:py-32"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dtp-dash { to { stroke-dashoffset: -24; } }
        @keyframes dtp-pulse-kf { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes dtp-pulse-delay-kf { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes dtp-spin-kf { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes dtp-spin-rev-kf { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes dtp-float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
        @keyframes dtp-float-tag-kf { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; } 50% { transform: translateY(-6px) rotate(1deg); opacity: 1; } }
        @keyframes dtp-ecg { from { stroke-dashoffset: 300; } to { stroke-dashoffset: 0; } }
        
        .dtp-dash-anim { animation: dtp-dash 2s linear infinite; }
        .dtp-pulse { animation: dtp-pulse-kf 2.5s ease-in-out infinite; }
        .dtp-pulse-delay { animation: dtp-pulse-delay-kf 2.5s ease-in-out infinite; }
        .dtp-spin { transform-origin: center; transform-box: fill-box; animation: dtp-spin-kf 25s linear infinite; }
        .dtp-spin-reverse { transform-origin: center; transform-box: fill-box; animation: dtp-spin-rev-kf 18s linear infinite; }
        .dtp-float-panel { animation: dtp-float 6s ease-in-out infinite; }
        .dtp-float-tag { animation: dtp-float-tag-kf 5s ease-in-out infinite; }
        .dtp-ecg-anim { stroke-dasharray: 300; animation: dtp-ecg 2.5s linear infinite; }
      `}} />

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div
        className="mx-auto max-w-[85rem] px-6 transition-all duration-1000 ease-out relative z-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
            <span className="font-mono text-[0.7rem] font-bold tracking-[0.3em] uppercase text-slate-400">
              Deep-Tech Products
            </span>
          </div>
          
          <h2 className="mb-6 font-display text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.05] font-black text-slate-900 tracking-[-0.03em]">
            Hardware Built for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Future
            </span>
          </h2>

          <p className="font-body text-[1.1rem] leading-[1.7] text-slate-500 font-medium">
            From wearable intelligence to AI-powered healthcare and IoT devices, TECH6SENSE AI builds next-generation products that connect software intelligence with real-world hardware innovation.
          </p>
        </div>

        {/* Clean, Borderless Content Layout */}
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Command Center Tabs */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide hide-scroll-bar">
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => handleTabClick(i)}
                className="group relative px-6 py-4 rounded-2xl flex items-center gap-4 text-left transition-all duration-500 outline-none select-none flex-shrink-0 min-w-[200px]"
              >
                {/* Active Background highlight */}
                <div 
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 ${i === activeTab ? 'opacity-100' : 'opacity-0 group-hover:opacity-10'}`} 
                  style={{ background: `linear-gradient(135deg, ${p.accent}15, ${p.accent}05)` }} 
                />
                
                {/* Active Left Border line */}
                <div 
                  className={`absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full transition-all duration-500 ${i === activeTab ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
                  style={{ background: p.accent }}
                />

                <span 
                  className={`font-mono text-[0.8rem] font-bold tracking-widest uppercase transition-colors duration-500 relative z-10 ${i === activeTab ? 'text-slate-900' : 'text-slate-400'}`}
                >
                  {p.tab}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT: Borderless Floating Product Panel */}
          <div className="relative w-full overflow-hidden dtp-float-panel">
            {/* Massive background ambient glow for the active product */}
            <div
              className="absolute inset-0 blur-[100px] pointer-events-none transition-all duration-700 opacity-30"
              style={{ background: `radial-gradient(ellipse at center, ${product.accent}, transparent 70%)` }}
            />

            <div className={`relative bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] grid md:grid-cols-[1fr_1.2fr] gap-10 items-center p-8 md:p-12 transition-all duration-500 ${transitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
              
              {/* Product Text Details */}
              <div className="flex flex-col z-10">
                <h3 className="font-display text-[2.2rem] md:text-[2.8rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  {product.title}
                </h3>
                
                <p className="font-body text-[1.05rem] leading-relaxed text-slate-600 mb-8 font-medium">
                  {product.description}
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: product.accent }} />
                      <span className="font-body text-[0.95rem] font-semibold text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#products"
                  className="group inline-flex items-center gap-4 w-fit border-b-2 pb-1 font-display text-[0.9rem] font-bold tracking-widest uppercase transition-colors duration-300"
                  style={{ borderColor: product.accent, color: product.accent }}
                >
                  Explore Details
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              {/* Product Visual Area */}
              <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                {/* Floating Tags */}
                {product.tags.map((tag, i) => (
                  <FloatingTag
                    key={tag}
                    text={tag}
                    x={tagPositions[i]?.x || '10%'}
                    y={tagPositions[i]?.y || '10%'}
                    delay={i * 0.8}
                  />
                ))}

                <div className="relative z-10 w-full max-w-[280px] drop-shadow-2xl">
                  {product.graphic()}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
