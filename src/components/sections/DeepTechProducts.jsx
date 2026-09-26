import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
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
    accent: '#1746D2',
    tag: 'AR HUD & Vision AI'
  },
  {
    id: 'sense-exo',
    name: 'SENSE Exo',
    category: 'Exoskeleton Systems',
    categoryGroup: 'Robotics & Enterprise IoT',
    description: 'Wearable support structures engineered for industrial, mobility, and rehabilitation applications — augmenting human strength and endurance with AI-assisted motion control.',
    image: imgExoskeleton,
    accent: '#00A86B',
    tag: 'Motion AI & Robotics'
  },
  {
    id: 'sense-sonic',
    name: 'SENSE Sonic',
    category: 'AI Earphones',
    categoryGroup: 'Wearables & Audio',
    description: 'Intelligent audio devices combining real-time translation, contextual assistance, and adaptive sound — built for professionals who move between languages, meetings, and markets.',
    image: imgEarphones,
    accent: '#D4AF37',
    tag: 'Adaptive Audio & NLP'
  },
  {
    id: 'sense-chrono',
    name: 'SENSE Chrono',
    category: 'Smartwatches',
    categoryGroup: 'Wearables & Audio',
    description: 'AI-driven wearables for health tracking, productivity, and connected notifications — engineered as a natural extension of the SIXSENSE ecosystem rather than a standalone device.',
    image: imgSmartwatch,
    accent: '#1746D2',
    tag: 'Biometric Telemetry'
  },
  {
    id: 'sense-pulse',
    name: 'SENSE Pulse',
    category: 'Fitness & Health Bands',
    categoryGroup: 'Health & Medical',
    description: 'Continuous activity and biometric tracking built for everyday performance monitoring, with AI-driven insights designed to support — not replace — professional health guidance.',
    image: imgFitnessBand,
    accent: '#00A86B',
    tag: 'Continuous Health AI'
  },
  {
    id: 'sense-aura',
    name: 'SENSE Aura',
    category: 'Wearable Personal Assistants',
    categoryGroup: 'Wearables & Audio',
    description: 'A discreet, always-available AI companion device — contextual reminders, voice assistance, and proactive support built for daily professional and personal use.',
    image: imgAssistant,
    accent: '#8B5CF6',
    tag: 'Proactive Voice Companion'
  },
  {
    id: 'sense-halo',
    name: 'SENSE Halo',
    category: 'Smart Ring',
    categoryGroup: 'Wearables & Audio',
    description: 'Minimalist biometric and activity tracking in ring form — engineered for users who want continuous intelligence without a visible device.',
    image: imgSmartRing,
    accent: '#1746D2',
    tag: 'Invisible Intelligence'
  },
  {
    id: 'sense-vita',
    name: 'SENSE Vita',
    category: 'Personal Health Devices',
    categoryGroup: 'Health & Medical',
    description: 'Consumer wellness devices designed to support everyday health awareness — built within our wellness product lane, distinct from regulated medical hardware.',
    image: imgHealthDevice,
    accent: '#00A86B',
    tag: 'Wellness & Diagnostics'
  },
  {
    id: 'sense-clinic',
    name: 'SENSE Clinic',
    category: 'Healthcare & Medical AI Devices',
    categoryGroup: 'Health & Medical',
    description: 'Purpose-built devices for clinical and healthcare environments, developed within our regulated product lane — engineered to meet the compliance and certification standards required for medical use.',
    image: imgMedical,
    accent: '#D4AF37',
    tag: 'Clinical Grade IoMT'
  },
  {
    id: 'sense-grid',
    name: 'SENSE Grid',
    category: 'Smart IoT Devices',
    categoryGroup: 'Robotics & Enterprise IoT',
    description: 'Connected sensors and infrastructure devices for smart facilities, industrial monitoring, and enterprise IoT deployments at scale.',
    image: imgIoT,
    accent: '#1746D2',
    tag: 'Industrial Facility IoT'
  },
  {
    id: 'sense-slate',
    name: 'SENSE Slate',
    category: 'AI Digital Notepad',
    categoryGroup: 'Robotics & Enterprise IoT',
    description: 'An AI-native writing and note-capture device — transcription, summarization, and intelligent organization built directly into the hardware.',
    image: imgNotepad,
    accent: '#00A86B',
    tag: 'Smart Ink OCR Engine'
  }
];

export default function DeepTechProducts() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All Products') return PRODUCTS;
    return PRODUCTS.filter((p) => p.categoryGroup === activeCategory);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  }, [filteredProducts.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  }, [filteredProducts.length]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused || filteredProducts.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, filteredProducts.length]);

  return (
    <section
      ref={sectionRef}
      id="deep-tech-products"
      className="relative w-full bg-[#FAFBFF] text-slate-900 pt-24 pb-20 overflow-hidden border-t border-slate-200/80"
    >
      {/* Light Theme Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-[#1746D2]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-[#00A86B]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div 
          className="text-center max-w-4xl mx-auto space-y-4 transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="flex justify-center items-center gap-3">
            <span className="h-[2px] w-8 bg-[#1746D2] rounded-full" />
            <h2 className="text-[#1746D2] font-mono font-bold tracking-[0.25em] uppercase text-xs md:text-sm">
              INTELLIGENCE, WORN AND DEPLOYED
            </h2>
            <span className="h-[2px] w-8 bg-[#00A86B] rounded-full" />
          </div>

          <h3 className="font-display text-[clamp(2.3rem,4vw,3.6rem)] leading-[1.1] font-extrabold text-slate-900 tracking-tight">
            The Hardware Layer of the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B]">
              Sixth Sense
            </span>
          </h3>

          <p className="font-body text-slate-600 text-base md:text-lg leading-[1.7] font-medium max-w-3xl mx-auto">
            Software and strategy are only half the picture. TECH6SENSE AI's deep-tech division designs and engineers the physical devices that carry intelligence into the real world — unified under one proprietary platform layer.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-display font-extrabold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1746D2] text-white shadow-lg shadow-blue-600/25 scale-105 border border-[#1746D2]'
                    : 'bg-white text-slate-700 hover:text-[#1746D2] border border-slate-200 hover:border-[#1746D2]/40 shadow-xs'
                }`}
              >
                {cat} {cat === 'All Products' && `(${PRODUCTS.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* 3D COVERFLOW STAGE CAROUSEL */}
        <div 
          className="relative w-full min-h-[460px] md:min-h-[500px] flex items-center justify-center py-4 perspective-1000 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Container Stage */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] h-[440px] md:h-[480px] mx-auto transform-style-3d">
            {filteredProducts.map((product, index) => {
              let offset = index - currentIndex;
              const total = filteredProducts.length;

              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisibleCard = Math.abs(offset) <= 3;

              if (!isVisibleCard) return null;

              let cardTransform, cardOpacity;
              if (isMobile) {
                const translateX = offset * 105;
                const scale = isActive ? 1 : 0.82;
                cardOpacity = isActive ? 1 : 0.35;
                cardTransform = `translateX(${translateX}px) scale(${scale})`;
              } else {
                const translateX = offset * 175; 
                const translateY = Math.abs(offset) * 20; 
                const translateZ = Math.abs(offset) * -80; 
                const rotateY = offset * -16; 
                const rotateZ = offset * 1.5; 
                const scale = isActive ? 1 : 0.9 - Math.abs(offset) * 0.07;
                cardOpacity = isActive ? 1 : Math.max(0.35, 0.75 - Math.abs(offset) * 0.13);
                cardTransform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
              }
              const zIndex = 30 - Math.abs(offset) * 5;

              return (
                <div
                  key={product.id}
                  onClick={() => {
                    if (!isActive) setCurrentIndex(index);
                  }}
                  className="absolute top-0 left-0 w-full h-full rounded-3xl p-7 md:p-9 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer select-none overflow-hidden flex flex-col justify-between text-white"
                  style={{
                    backgroundColor: product.accent,
                    transform: cardTransform,
                    opacity: cardOpacity,
                    zIndex: zIndex,
                    transformOrigin: 'center center',
                    boxShadow: isActive 
                      ? `0 20px 45px -10px ${product.accent}80` 
                      : `0 10px 25px -10px rgba(0,0,0,0.15)`,
                  }}
                >
                  {/* Background Overlay */}
                  <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Top Details Header */}
                  <div className="relative z-20">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-mono text-[10px] md:text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30">
                        {product.category}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  {/* Spacer */}
                  <div className="relative z-20 flex-1 min-h-[40px]" />

                  {/* Bottom Content & Action */}
                  <div className="relative z-20 space-y-4">
                    <p className="font-body text-white/95 text-xs md:text-sm leading-relaxed line-clamp-3 font-medium">
                      "{product.description}"
                    </p>

                    <div className="flex items-center justify-between pt-3.5 border-t border-white/20">
                      <span className="font-mono text-xs font-extrabold text-white/90">
                        {product.tag}
                      </span>

                      <Link
                        to={`/deep-tech-products/${product.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-2 text-slate-900 bg-white hover:bg-slate-100 shadow-md hover:scale-105"
                      >
                        <span>Explore Product</span>
                        <span className="text-sm">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NAVIGATION CONTROLS & PAGINATION DOTS */}
        <div className="flex items-center justify-center gap-6 pt-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white hover:bg-[#1746D2] hover:border-[#1746D2] text-slate-800 hover:text-white flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer group shrink-0"
            aria-label="Previous Product"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2 max-w-[300px] overflow-x-auto scrollbar-none py-2 px-1">
            {filteredProducts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer shrink-0 ${
                  currentIndex === idx 
                    ? 'w-8 bg-[#1746D2] shadow-md shadow-blue-500/30' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                style={{ backgroundColor: currentIndex === idx ? p.accent : undefined }}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white hover:bg-[#1746D2] hover:border-[#1746D2] text-slate-800 hover:text-white flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer group shrink-0"
            aria-label="Next Product"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
