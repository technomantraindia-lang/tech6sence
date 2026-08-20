import { useState, useRef, useEffect, useMemo } from 'react';
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

const CATEGORIES = ['All Products', 'Wearables & Audio', 'Health & Medical', 'Robotics & Enterprise IoT'];

const PRODUCTS = [
  {
    id: 'sense-vision',
    name: 'SENSE Vision',
    category: 'AI Smart Glasses',
    categoryGroup: 'Wearables & Audio',
    description: 'Heads-up AI assistance built into everyday eyewear — real-time information overlay, visual recognition, and hands-free interaction designed for both consumer and enterprise field use.',
    image: imgGlasses,
    accent: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.25)',
    bgGradient: 'from-[#1e1035] via-[#2d164d] to-[#120824]',
    tag: 'AR HUD & Vision AI'
  },
  {
    id: 'sense-exo',
    name: 'SENSE Exo',
    category: 'Exoskeleton Systems',
    categoryGroup: 'Robotics & Enterprise IoT',
    description: 'Wearable support structures engineered for industrial, mobility, and rehabilitation applications — augmenting human strength and endurance with AI-assisted motion control.',
    image: imgExoskeleton,
    accent: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.25)',
    bgGradient: 'from-[#2b1f09] via-[#3d2c0e] to-[#171004]',
    tag: 'Motion AI & Robotics'
  },
  {
    id: 'sense-sonic',
    name: 'SENSE Sonic',
    category: 'AI Earphones',
    categoryGroup: 'Wearables & Audio',
    description: 'Intelligent audio devices combining real-time translation, contextual assistance, and adaptive sound — built for professionals who move between languages, meetings, and markets.',
    image: imgEarphones,
    accent: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.25)',
    bgGradient: 'from-[#0a1b38] via-[#112d5e] to-[#050e20]',
    tag: 'Adaptive Audio & NLP'
  },
  {
    id: 'sense-chrono',
    name: 'SENSE Chrono',
    category: 'Smartwatches',
    categoryGroup: 'Wearables & Audio',
    description: 'AI-driven wearables for health tracking, productivity, and connected notifications — engineered as a natural extension of the SENSE ecosystem rather than a standalone device.',
    image: imgSmartwatch,
    accent: '#10B981',
    glow: 'rgba(16, 185, 129, 0.25)',
    bgGradient: 'from-[#06241a] via-[#0d3d2c] to-[#03140e]',
    tag: 'Biometric Telemetry'
  },
  {
    id: 'sense-pulse',
    name: 'SENSE Pulse',
    category: 'Fitness & Health Bands',
    categoryGroup: 'Health & Medical',
    description: 'Continuous activity and biometric tracking built for everyday performance monitoring, with AI-driven insights designed to support — not replace — professional health guidance.',
    image: imgFitnessBand,
    accent: '#F43F5E',
    glow: 'rgba(244, 63, 94, 0.25)',
    bgGradient: 'from-[#2d0a14] via-[#4a1022] to-[#170409]',
    tag: 'Continuous Health AI'
  },
  {
    id: 'sense-aura',
    name: 'SENSE Aura',
    category: 'Wearable Personal Assistants',
    categoryGroup: 'Wearables & Audio',
    description: 'A discreet, always-available AI companion device — contextual reminders, voice assistance, and proactive support built for daily professional and personal use.',
    image: imgAssistant,
    accent: '#6366F1',
    glow: 'rgba(99, 102, 241, 0.25)',
    bgGradient: 'from-[#10183b] via-[#1a265e] to-[#080d21]',
    tag: 'Proactive Voice Companion'
  },
  {
    id: 'sense-halo',
    name: 'SENSE Halo',
    category: 'Smart Ring',
    categoryGroup: 'Wearables & Audio',
    description: 'Minimalist biometric and activity tracking in ring form — engineered for users who want continuous intelligence without a visible device.',
    image: imgSmartRing,
    accent: '#CBD5E1',
    glow: 'rgba(203, 213, 225, 0.25)',
    bgGradient: 'from-[#161c2b] via-[#232d42] to-[#0d111a]',
    tag: 'Invisible Intelligence'
  },
  {
    id: 'sense-vita',
    name: 'SENSE Vita',
    category: 'Personal Health Devices',
    categoryGroup: 'Health & Medical',
    description: 'Consumer wellness devices designed to support everyday health awareness — built within our wellness product lane, distinct from regulated medical hardware.',
    image: imgHealthDevice,
    accent: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.25)',
    bgGradient: 'from-[#2b0821] via-[#470d37] to-[#170311]',
    tag: 'Wellness & Diagnostics'
  },
  {
    id: 'sense-clinic',
    name: 'SENSE Clinic',
    category: 'Healthcare & Medical AI Devices',
    categoryGroup: 'Health & Medical',
    description: 'Purpose-built devices for clinical and healthcare environments, developed within our regulated product lane — engineered to meet the compliance and certification standards required for medical use.',
    image: imgMedical,
    accent: '#14B8A6',
    glow: 'rgba(20, 184, 166, 0.25)',
    bgGradient: 'from-[#052426] via-[#0a3d40] to-[#021415]',
    tag: 'Clinical Grade IoMT'
  },
  {
    id: 'sense-grid',
    name: 'SENSE Grid',
    category: 'Smart IoT Devices',
    categoryGroup: 'Robotics & Enterprise IoT',
    description: 'Connected sensors and infrastructure devices for smart facilities, industrial monitoring, and enterprise IoT deployments at scale.',
    image: imgIoT,
    accent: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.25)',
    bgGradient: 'from-[#0a1e3d] via-[#123061] to-[#040e1f]',
    tag: 'Industrial Facility IoT'
  },
  {
    id: 'sense-slate',
    name: 'SENSE Slate',
    category: 'AI Digital Notepad',
    categoryGroup: 'Robotics & Enterprise IoT',
    description: 'An AI-native writing and note-capture device — transcription, summarisation, and intelligent organization built directly into the hardware.',
    image: imgNotepad,
    accent: '#059669',
    glow: 'rgba(5, 150, 105, 0.25)',
    bgGradient: 'from-[#07241b] via-[#0d3b2c] to-[#03130e]',
    tag: 'Smart Ink OCR Engine'
  }
];

function ProductCard({ product }) {
  return (
    <Link
      to={`/deep-tech-products/${product.id}`}
      className="group relative rounded-[2rem] overflow-hidden bg-slate-950 p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 border border-white/10 hover:border-white/25 min-h-[460px] md:min-h-[500px]"
    >
      {/* Full-Bleed Product Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-75"
        />
        {/* Dark Scrim Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/80" />
      </div>

      {/* Top Details */}
      <div className="relative z-20">
        <div className="flex items-center justify-between gap-3 mb-5">
          <span 
            className="font-display text-sm font-extrabold tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white backdrop-blur-md"
          >
            {product.category}
          </span>
          <span 
            className="w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150"
            style={{ backgroundColor: product.accent }}
          />
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-[1.15] mb-2 group-hover:text-white transition-colors duration-300">
          {product.name}
        </h3>
      </div>

      {/* Spacer */}
      <div className="relative z-20 flex-1 min-h-[80px]" />

      {/* Bottom Content & Action Strip */}
      <div className="relative z-20">
        <p className="font-body text-slate-200 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-3.5 border-t border-white/15">
          <span className="font-mono text-[0.75rem] font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
            {product.tag}
          </span>

          {/* Circular Arrow Button (Mercury style) */}
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 group-hover:bg-white text-slate-950 border border-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.5l11-11m0 0h-8m8 0v8" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DeepTechProducts() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Products');

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

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All Products') return PRODUCTS;
    return PRODUCTS.filter((p) => p.categoryGroup === activeCategory);
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="deep-tech-products"
      className="relative w-full bg-[#FAFBFF] pt-24 pb-12 overflow-hidden border-t border-slate-100"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-10 relative z-10">
        
        {/* Section Header (Using Exact PDF Copy) */}
        <div 
          className="mb-12 md:mb-14 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="flex justify-center items-center gap-3 mb-5">
            <span className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
            <h2 className="text-blue-600 font-mono font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              INTELLIGENCE, WORN AND DEPLOYED
            </h2>
            <span className="h-[2px] w-8 bg-gradient-to-l from-blue-500 to-emerald-500 rounded-full" />
          </div>

          <h3 className="font-display text-[clamp(2.3rem,3.8vw,3.5rem)] leading-[1.1] font-extrabold text-slate-900 tracking-tight mb-5">
            The Hardware Layer of the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Sixth Sense
            </span>
          </h3>

          <p className="font-body text-base md:text-lg leading-[1.7] text-slate-600 font-medium max-w-3xl mx-auto">
            Software and strategy are only half the picture. TECH6SENSE AI's deep-tech division designs and engineers the physical devices that carry intelligence into the real world — unified under one proprietary platform layer.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-display font-bold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                {cat} {cat === 'All Products' && `(${PRODUCTS.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Mercury-Inspired Tight Showcase Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
