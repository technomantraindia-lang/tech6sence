import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Product image imports
import imgGlasses from '../../assets/productimages/ai-smartglasses.png';
import imgExoskeleton from '../../assets/productimages/AI-Powered Next-Generation Exoskeleton.png';
import imgEarphones from '../../assets/productimages/AI Earphones.png';
import imgSmartwatch from '../../assets/productimages/AI Smart Watch.png';
import imgFitnessBand from '../../assets/productimages/AI Fitness & Health Band.png';
import imgAssistant from '../../assets/productimages/Wearable AI-Powered Personal Assistants.png';
import imgSmartRing from '../../assets/productimages/AI Smart Ring.png';
import imgHealthDevice from '../../assets/productimages/Wearable AI Personal Health Device.png';
import imgMedical from '../../assets/productimages/Healthcare & Medical AI Devices.png';
import imgIoT from '../../assets/productimages/Smart IoT Devices.png';
import imgNotepad from '../../assets/productimages/AI Digital Notepad.png';

const PRODUCTS = [
  {
    id: 'glasses',
    tab: 'AI Smart Glasses',
    title: 'AI Smart Glasses',
    description: 'Intelligent wearable glasses combining AI assistants, augmented information, real-time translation, computer vision, voice interaction, navigation, recording, and productivity.',
    features: ['Real-time translation HUD', 'Computer vision scene analysis', 'Voice-controlled AR interface'],
    tags: ['AR HUD', 'Realtime Translation', 'Voice AI', 'BLE 5.2'],
    accent: '#7c3aed',
    image: imgGlasses,
  },
  {
    id: 'exoskeleton',
    tab: 'AI Exoskeleton',
    title: 'AI-Powered Exoskeleton',
    description: 'Advanced AI-assisted wearable robotic system enhancing human mobility, rehabilitation, industrial productivity, and defense capabilities.',
    features: ['Active motion assistance', 'Intelligent feedback loops', 'Ergonomic weight distribution'],
    tags: ['Robotics', 'Motion AI', 'Haptic FB', 'Safety+'],
    accent: '#ec4899',
    image: imgExoskeleton,
  },
  {
    id: 'earphones',
    tab: 'AI Earphones',
    title: 'AI Earphones',
    description: 'Next-generation intelligent audio powered by AI noise cancellation, language translation, health sensing, voice assistant, and contextual awareness.',
    features: ['Active noise isolation', 'On-the-go audio translation', 'Health vital monitoring'],
    tags: ['ANC', 'Biometrics', 'NLP', 'Spatial Audio'],
    accent: '#0ea5e9',
    image: imgEarphones,
  },
  {
    id: 'smartwatch',
    tab: 'AI Smartwatch',
    title: 'AI Smartwatch',
    description: 'Enterprise-grade intelligent smartwatch integrating AI health monitoring, productivity, communication, navigation, safety, and fitness analytics.',
    features: ['Enterprise calendar sync', 'Safety alerts & fall detection', 'Dynamic health telemetry'],
    tags: ['Heart Rate', 'LTE', 'NFC', 'Secure OS'],
    accent: '#10b981',
    image: imgSmartwatch,
  },
  {
    id: 'fitness-band',
    tab: 'AI Fitness Band',
    title: 'AI Fitness Health Band',
    description: 'Professional-grade AI fitness tracker providing continuous health analytics, recovery insights, performance optimization, sleep intelligence, and personalized coaching.',
    features: ['Personalized AI coaching', 'Precise sleep phase tracking', 'Continuous vitals detection'],
    tags: ['Coaching', 'Sleep Tracking', 'SpO2', 'Vitals'],
    accent: '#6366f1',
    image: imgFitnessBand,
  },
  {
    id: 'assistant',
    tab: 'AI Assistant',
    title: 'Wearable AI Assistant',
    description: 'A wearable companion capable of understanding conversations, scheduling tasks, answering questions, managing workflows, and providing proactive intelligence.',
    features: ['Conversational tracking', 'Proactive work shortcuts', 'Automated agenda builders'],
    tags: ['Voice Agent', 'Task Sync', 'NLP Engine', 'Contextual'],
    accent: '#f59e0b',
    image: imgAssistant,
  },
  {
    id: 'smart-ring',
    tab: 'AI Smart Ring',
    title: 'AI Smart Ring',
    description: 'Continuous biometric monitoring, secure authentication, contactless experiences, wellness intelligence, and AI-driven lifestyle optimization in a minimal design.',
    features: ['Contactless NFC interactions', 'Minimal size biometric scans', 'Sleep and wellness scoring'],
    tags: ['NFC Pay', 'Biometric', 'Wellness', 'NFC Auth'],
    accent: '#8b5cf6',
    image: imgSmartRing,
  },
  {
    id: 'health-device',
    tab: 'AI Health Device',
    title: 'Wearable Personal Health',
    description: 'Advanced healthcare wearable designed for preventive healthcare, chronic disease management, continuous diagnostics, and remote patient monitoring.',
    features: ['Chronic care auto-alerts', 'Remote diagnostics pipeline', 'Clinical vital signs logging'],
    tags: ['Clinical Vitals', 'Diagnostics', 'IoMT', '24/7 Monitoring'],
    accent: '#ef4444',
    image: imgHealthDevice,
  },
  {
    id: 'medical-devices',
    tab: 'Medical Devices',
    title: 'Healthcare AI Devices',
    description: 'Medical-grade intelligent devices supporting hospitals, clinics, diagnostics, patient monitoring, telemedicine, and healthcare automation.',
    features: ['FDA compliant data layers', 'Telemedicine sync & pipelines', 'Hospital system integrations'],
    tags: ['FDA Compliant', 'Hospital Tech', 'Telemed', 'ML Vitals'],
    accent: '#06b6d4',
    image: imgMedical,
  },
  {
    id: 'iot-devices',
    tab: 'Smart IoT',
    title: 'Smart IoT Devices',
    description: 'AI-enabled connected devices powering homes, industries, factories, agriculture, smart cities, logistics, and infrastructure.',
    features: ['MQTT fast data transport', 'Dynamic edge computation', 'Secure OTA code updates'],
    tags: ['Edge Compute', 'MQTT', 'OTA Updates', 'Cloud Sync'],
    accent: '#3b82f6',
    image: imgIoT,
  },
  {
    id: 'digital-notepad',
    tab: 'Digital Notepad',
    title: 'AI Digital Notepad',
    description: 'The intelligent notebook that understands handwriting, summarizes meetings, generates tasks, translates content, and synchronizes seamlessly across devices.',
    features: ['Live handwriting recognition', 'Meeting summary generation', 'Omni-device note sync'],
    tags: ['Smart Ink', 'OCR Engine', 'Notepad Sync', 'NLP Summary'],
    accent: '#14b8a6',
    image: imgNotepad,
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
          scrollbar-width: auto;
          scrollbar-color: rgba(37, 99, 235, 0.45) transparent;
        }
        .dtp-tabs-scroll::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .dtp-tabs-scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.03);
          border-radius: 999px;
        }
        .dtp-tabs-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #2563ed88, #10b98188);
          border-radius: 999px;
          border: 1.5px solid transparent;
          background-clip: padding-box;
          transition: all 0.3s ease;
        }
        .dtp-tabs-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563ed, #10b981);
          background-clip: padding-box;
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
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono text-[0.7rem] font-bold tracking-[0.3em] uppercase text-slate-400">
              Deep-Tech Products
            </span>
          </div>
          
          <h2 className="mb-6 font-display text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.05] font-black text-slate-900 tracking-[-0.03em]">
            Hardware Built for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
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
                  className={`font-mono text-[0.8rem] font-bold tracking-widest uppercase transition-colors duration-500 relative z-10 ${i === activeTab ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}
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

            <div className={`relative rounded-3xl border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] grid md:grid-cols-[1fr_1.2fr] gap-10 items-center p-8 md:p-12 transition-all duration-500 ${transitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`} style={{ background: '#0d0d10', borderColor: `${product.accent}25` }}>
              
              {/* Product Text Details */}
              <div className="flex flex-col z-10">
                <h3 className="font-display text-[2.2rem] md:text-[2.8rem] font-black text-white tracking-tight leading-[1.1] mb-6">
                  {product.title}
                </h3>
                
                <p className="font-body text-[1.05rem] leading-relaxed text-slate-300 mb-8 font-medium">
                  {product.description}
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: product.accent }} />
                      <span className="font-body text-[0.95rem] font-semibold text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/deep-tech-products/${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                  className="group inline-flex items-center gap-4 w-fit border-b-2 pb-1 font-display text-[0.9rem] font-bold tracking-widest uppercase transition-colors duration-300"
                  style={{ borderColor: product.accent, color: product.accent }}
                >
                  Explore Details
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Product Visual Area */}
              <div className="relative h-[380px] md:h-[480px] flex items-center justify-center">
                <div className="relative z-10 w-full max-w-[460px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-contain max-h-[440px] transition-all duration-700"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
