import { useState, useEffect, useRef, useCallback } from 'react';

const PRODUCTS = [
  {
    id: 'glasses',
    tab: 'AI Smart Glasses',
    title: 'AI Smart Glasses',
    description: 'Intelligent wearable glasses combining AI assistants, augmented information, real-time translation, computer vision, voice interaction, navigation, recording, and productivity.',
    features: ['Real-time translation HUD', 'Computer vision scene analysis', 'Voice-controlled AR interface'],
    tags: ['AR HUD', 'Realtime Translation', 'Voice AI', 'BLE 5.2'],
    accent: '#7c3aed',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-glasses" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="50" y="60" width="60" height="40" rx="10" fill="url(#dtp-grad-glasses)" stroke="#7c3aed" strokeWidth="1.5" />
        <rect x="130" y="60" width="60" height="40" rx="10" fill="url(#dtp-grad-glasses)" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="110" y1="70" x2="130" y2="70" stroke="#7c3aed" strokeWidth="2" />
        <path d="M30 70 L50 70 M190 70 L210 70" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="80" cy="80" r="10" fill="none" stroke="#d946ef" strokeWidth="1.5" className="dtp-pulse" />
        <circle cx="160" cy="80" r="10" fill="none" stroke="#d946ef" strokeWidth="1.5" className="dtp-pulse" />
      </svg>
    ),
  },
  {
    id: 'exoskeleton',
    tab: 'AI Exoskeleton',
    title: 'AI-Powered Exoskeleton',
    description: 'Advanced AI-assisted wearable robotic system enhancing human mobility, rehabilitation, industrial productivity, and defense capabilities.',
    features: ['Active motion assistance', 'Intelligent feedback loops', 'Ergonomic weight distribution'],
    tags: ['Robotics', 'Motion AI', 'Haptic FB', 'Safety+'],
    accent: '#ec4899',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-exo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.08" />
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
      </svg>
    ),
  },
  {
    id: 'earphones',
    tab: 'AI Earphones',
    title: 'AI Earphones',
    description: 'Next-generation intelligent audio powered by AI noise cancellation, language translation, health sensing, voice assistant, and contextual awareness.',
    features: ['Active noise isolation', 'On-the-go audio translation', 'Health vital monitoring'],
    tags: ['ANC', 'Biometrics', 'NLP', 'Spatial Audio'],
    accent: '#0ea5e9',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-buds" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="90" r="25" fill="url(#dtp-grad-buds)" stroke="#0ea5e9" strokeWidth="1.5" />
        <circle cx="160" cy="90" r="25" fill="url(#dtp-grad-buds)" stroke="#0ea5e9" strokeWidth="1.5" />
        <path d="M80 65 C85 55, 155 55, 160 65" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="80" cy="90" r="10" fill="white" stroke="#2563eb" strokeWidth="1.5" />
        <circle cx="160" cy="90" r="10" fill="white" stroke="#2563eb" strokeWidth="1.5" />
        <circle cx="80" cy="90" r="4" fill="#0ea5e9" className="dtp-pulse" />
        <circle cx="160" cy="90" r="4" fill="#0ea5e9" className="dtp-pulse" />
      </svg>
    ),
  },
  {
    id: 'smartwatch',
    tab: 'AI Smartwatch',
    title: 'AI Smartwatch',
    description: 'Enterprise-grade intelligent smartwatch integrating AI health monitoring, productivity, communication, navigation, safety, and fitness analytics.',
    features: ['Enterprise calendar sync', 'Safety alerts & fall detection', 'Dynamic health telemetry'],
    tags: ['Heart Rate', 'LTE', 'NFC', 'Secure OS'],
    accent: '#10b981',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-watch" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="80" y="30" width="80" height="100" rx="20" fill="url(#dtp-grad-watch)" stroke="#10b981" strokeWidth="1.5" />
        <rect x="88" y="40" width="64" height="72" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="120" cy="76" r="20" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M120 62 L120 76 L130 82" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <circle cx="120" cy="76" r="3" fill="#059669" />
      </svg>
    ),
  },
  {
    id: 'fitness-band',
    tab: 'AI Fitness Band',
    title: 'AI Fitness Health Band',
    description: 'Professional-grade AI fitness tracker providing continuous health analytics, recovery insights, performance optimization, sleep intelligence, and personalized coaching.',
    features: ['Personalized AI coaching', 'Precise sleep phase tracking', 'Continuous vitals detection'],
    tags: ['Coaching', 'Sleep Tracking', 'SpO2', 'Vitals'],
    accent: '#6366f1',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-band" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="95" y="20" width="50" height="130" rx="25" fill="none" stroke="#6366f1" strokeWidth="2" />
        <rect x="100" y="40" width="40" height="90" rx="20" fill="url(#dtp-grad-band)" stroke="#6366f1" strokeWidth="1.5" />
        <polyline points="105,85 112,85 116,75 120,95 124,80 128,90 135,85" fill="none" stroke="#6366f1" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'assistant',
    tab: 'AI Assistant',
    title: 'Wearable AI Assistant',
    description: 'A wearable companion capable of understanding conversations, scheduling tasks, answering questions, managing workflows, and providing proactive intelligence.',
    features: ['Conversational tracking', 'Proactive work shortcuts', 'Automated agenda builders'],
    tags: ['Voice Agent', 'Task Sync', 'NLP Engine', 'Contextual'],
    accent: '#f59e0b',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-asst" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <circle cx="120" cy="90" r="35" fill="url(#dtp-grad-asst)" stroke="#f59e0b" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="25" fill="white" stroke="#f59e0b" strokeWidth="1" />
        <path d="M105 90 H135 M120 75 V105" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="120" cy="90" r="5" fill="#d97706" className="dtp-pulse" />
      </svg>
    ),
  },
  {
    id: 'smart-ring',
    tab: 'AI Smart Ring',
    title: 'AI Smart Ring',
    description: 'Continuous biometric monitoring, secure authentication, contactless experiences, wellness intelligence, and AI-driven lifestyle optimization in a minimal design.',
    features: ['Contactless NFC interactions', 'Minimal size biometric scans', 'Sleep and wellness scoring'],
    tags: ['NFC Pay', 'Biometric', 'Wellness', 'NFC Auth'],
    accent: '#8b5cf6',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="90" rx="45" ry="25" fill="url(#dtp-grad-ring)" stroke="#8b5cf6" strokeWidth="2" />
        <ellipse cx="120" cy="90" rx="30" ry="15" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="120" cy="70" r="5" fill="#7c3aed" className="dtp-pulse" />
      </svg>
    ),
  },
  {
    id: 'health-device',
    tab: 'AI Health Device',
    title: 'Wearable Personal Health',
    description: 'Advanced healthcare wearable designed for preventive healthcare, chronic disease management, continuous diagnostics, and remote patient monitoring.',
    features: ['Chronic care auto-alerts', 'Remote diagnostics pipeline', 'Clinical vital signs logging'],
    tags: ['Clinical Vitals', 'Diagnostics', 'IoMT', '24/7 Monitoring'],
    accent: '#ef4444',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-hdev" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="70" y="45" width="100" height="90" rx="15" fill="url(#dtp-grad-hdev)" stroke="#ef4444" strokeWidth="1.5" />
        <path d="M100 90 L110 80 L120 100 L130 75 L140 90" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'medical-devices',
    tab: 'Medical Devices',
    title: 'Healthcare AI Devices',
    description: 'Medical-grade intelligent devices supporting hospitals, clinics, diagnostics, patient monitoring, telemedicine, and healthcare automation.',
    features: ['FDA compliant data layers', 'Telemedicine sync & pipelines', 'Hospital system integrations'],
    tags: ['FDA Compliant', 'Hospital Tech', 'Telemed', 'ML Vitals'],
    accent: '#06b6d4',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-med" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="50" y="40" width="140" height="100" rx="16" fill="url(#dtp-grad-med)" stroke="#06b6d4" strokeWidth="1.5" />
        <rect x="60" y="50" width="120" height="80" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M120 65 V115 M95 90 H145" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'iot-devices',
    tab: 'Smart IoT',
    title: 'Smart IoT Devices',
    description: 'AI-enabled connected devices powering homes, industries, factories, agriculture, smart cities, logistics, and infrastructure.',
    features: ['MQTT fast data transport', 'Dynamic edge computation', 'Secure OTA code updates'],
    tags: ['Edge Compute', 'MQTT', 'OTA Updates', 'Cloud Sync'],
    accent: '#3b82f6',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-iotdev" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="65" y="45" width="110" height="90" rx="12" fill="url(#dtp-grad-iotdev)" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="15" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="6" fill="#2563eb" className="dtp-pulse" />
      </svg>
    ),
  },
  {
    id: 'digital-notepad',
    tab: 'Digital Notepad',
    title: 'AI Digital Notepad',
    description: 'The intelligent notebook that understands handwriting, summarizes meetings, generates tasks, translates content, and synchronizes seamlessly across devices.',
    features: ['Live handwriting recognition', 'Meeting summary generation', 'Omni-device note sync'],
    tags: ['Smart Ink', 'OCR Engine', 'Notepad Sync', 'NLP Summary'],
    accent: '#14b8a6',
    graphic: () => (
      <svg viewBox="0 0 240 180" className="w-full h-full" style={{ maxHeight: '160px' }}>
        <defs>
          <linearGradient id="dtp-grad-np" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="60" y="25" width="120" height="130" rx="12" fill="url(#dtp-grad-np)" stroke="#14b8a6" strokeWidth="1.5" />
        <rect x="70" y="35" width="100" height="108" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M85 55 H135 M85 75 H155 M85 95 H125" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  }
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
  const tabsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault(); // always block page scroll
      el.scrollBy({ top: e.deltaY * 1.2, behavior: 'smooth' });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);


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
      <style dangerouslySetInnerHTML={{ __html: `
        .dtp-tabs-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(124, 58, 237, 0.35) transparent;
        }
        .dtp-tabs-scroll::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }
        .dtp-tabs-scroll::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 999px;
        }
        .dtp-tabs-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #7c3aed55, #06b6d455);
          border-radius: 999px;
          transition: background 0.3s ease;
        }
        .dtp-tabs-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #7c3aed, #06b6d4);
        }
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
          <div
            ref={tabsRef}
            className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[480px] pb-4 lg:pb-0 dtp-tabs-scroll pr-2"
          >
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
