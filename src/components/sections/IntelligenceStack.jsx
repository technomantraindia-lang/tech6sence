import React, { useState, useRef } from 'react';
import logoSymbol from '../../assets/new logo/TECH6SENSE Logo Symbol (1).png';
import logoText from '../../assets/new logo/TECH6SENSE Main Logo text.png';

const ECOSYSTEM_CARDS = [
  {
    id: 1,
    num: '1',
    title: 'SENSE INTELLIGENCE',
    short: 'AI development, machine learning, smart automation.',
    full: 'Advanced AI Development & Custom Enterprise Solutions. We design and build the AI products enterprises actually ship — not research demos. Custom model architecture, retrieval-augmented systems, and the full product engineering layer built to hold up under real usage.',
    textColor: 'text-emerald-600',
    dotBg: 'bg-emerald-600',
    alignOffset: 'translate-x-6 xl:translate-x-10',
    cardBg: 'bg-emerald-50/35 hover:bg-emerald-50/70',
    shadowStyle: 'hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.35)]',
    glowColor: 'rgba(0, 168, 107, 0.09)'
  },
  {
    id: 2,
    num: '2',
    title: 'SENSE INNOVATION',
    short: 'Deep-tech products, invention, advanced hardware/software.',
    full: 'Next Generation of AI-Powered Deep-Tech Products. Turn Your Tech Vision Into a Global Brand. Software and strategy are only half the picture — TECH6SENSE AI designs and engineers the physical devices that carry intelligence into the real world.',
    textColor: 'text-emerald-600',
    dotBg: 'bg-emerald-600',
    alignOffset: '-translate-x-6 xl:-translate-x-10',
    cardBg: 'bg-emerald-50/35 hover:bg-emerald-50/70',
    shadowStyle: 'hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.35)]',
    glowColor: 'rgba(0, 168, 107, 0.09)'
  },
  {
    id: 4,
    num: '4',
    title: 'SENSE COMMUNITY',
    short: 'Business brains network, collaboration, ecosystem.',
    full: 'Business Brains — Most Exclusive Private Global Network for Elite Investors, Entrepreneurs & Industry Leaders. An invitation-only global syndicate operating at the absolute pinnacle of global commerce, capital, and artificial intelligence.',
    textColor: 'text-blue-600',
    dotBg: 'bg-blue-600',
    alignOffset: '-translate-x-4 xl:-translate-x-6',
    cardBg: 'bg-blue-50/45 hover:bg-blue-50/80',
    shadowStyle: 'hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]',
    glowColor: 'rgba(23, 70, 210, 0.09)'
  },
  {
    id: 3,
    num: '3',
    title: 'SENSE GROWTH',
    short: 'Visionary founders, startup acceleration, strategic growth.',
    full: 'Visionary Founders Business Ecosystem — The Global AI Founder Ecosystem. Build Your AI Empire Globally. We transform ambitious entrepreneurs and innovators into owners of globally competitive AI and technology companies.',
    textColor: 'text-blue-600',
    dotBg: 'bg-blue-600',
    alignOffset: 'translate-x-4 xl:translate-x-6',
    cardBg: 'bg-blue-50/45 hover:bg-blue-50/80',
    shadowStyle: 'hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]',
    glowColor: 'rgba(23, 70, 210, 0.09)'
  },
  {
    id: 5,
    num: '5',
    title: 'SENSE INTEGRATION',
    short: 'Technology deployment, cloud, system integration.',
    full: 'Integrating Intelligence across the Enterprise — Seamless Technology Deployment. AI is only as strong as the infrastructure underneath it. We provide full-stack IT services engineered specifically to support AI workloads at global scale.',
    textColor: 'text-emerald-600',
    dotBg: 'bg-emerald-600',
    alignOffset: 'translate-x-6 xl:translate-x-10',
    cardBg: 'bg-emerald-50/35 hover:bg-emerald-50/70',
    shadowStyle: 'hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.35)]',
    glowColor: 'rgba(0, 168, 107, 0.09)'
  },
  {
    id: 6,
    num: '6',
    title: 'SENSE FUTURE',
    short: 'Research, training, evolution, future readiness.',
    full: 'Creating What the World Will Need Next — Continuous Research & Evolution. TECH6SENSE AI — The Sixth Sense of Intelligent Innovation. We invest in long-horizon research and continuously evolve our capabilities so your competitive advantage compounds rather than decays.',
    textColor: 'text-amber-600',
    dotBg: 'bg-amber-500',
    alignOffset: '-translate-x-6 xl:-translate-x-10',
    cardBg: 'bg-amber-50/35 hover:bg-amber-50/70',
    shadowStyle: 'hover:shadow-[4px_4px_0px_0px_rgba(212,175,55,0.35)]',
    glowColor: 'rgba(212, 175, 55, 0.09)'
  }
];

function CardComponent({ card, activeCard, setActiveCard }) {
  const cardRef = useRef(null);
  const isHovered = activeCard?.id === card.id;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActiveCard(card)}
      onMouseLeave={() => setActiveCard(null)}
      className={`group relative p-6 md:p-7 rounded-3xl transition-all duration-300 border border-slate-100 flex flex-col justify-between shadow-sm cursor-pointer z-20 ${
        card.cardBg
      } ${card.shadowStyle} ${card.alignOffset || ''} ${isHovered ? '-translate-y-1 z-50' : ''}`}
    >
      {/* Spotlight Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
        style={{
          background: `radial-gradient(circle 180px at var(--mx, -99px) var(--my, -99px), ${card.glowColor}, transparent 70%)`
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex-1 min-w-0">
        <h3 className={`font-display font-extrabold text-base md:text-lg mb-1.5 tracking-tight ${card.textColor}`}>
          {card.num}. {card.title}
        </h3>
        <p className="font-body text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
          {card.short}
        </p>
      </div>

      {/* Hover Pop-up Tooltip Modal (Floats cleanly above the card) */}
      {isHovered && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-80 md:w-96 p-5 bg-slate-900/95 text-white rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 z-[100] animate-in fade-in zoom-in-95 duration-200 pointer-events-none">
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-2 h-2 rounded-full ${card.dotBg}`} />
            <span className={`font-mono text-xs font-bold uppercase tracking-wider ${card.textColor}`}>
              {card.title}
            </span>
          </div>
          <p className="font-body text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
            {card.full}
          </p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-slate-900/95" />
        </div>
      )}
    </div>
  );
}

export default function IntelligenceStack() {
  const [activeCard, setActiveCard] = useState(null);

  const card1 = ECOSYSTEM_CARDS.find(c => c.id === 1);
  const card2 = ECOSYSTEM_CARDS.find(c => c.id === 2);
  const card4 = ECOSYSTEM_CARDS.find(c => c.id === 4);
  const card3 = ECOSYSTEM_CARDS.find(c => c.id === 3);
  const card5 = ECOSYSTEM_CARDS.find(c => c.id === 5);
  const card6 = ECOSYSTEM_CARDS.find(c => c.id === 6);

  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden py-16 md:py-24 z-20 font-body">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.08) 1.5px, transparent 1.5px), radial-gradient(rgba(16, 185, 129, 0.06) 1.5px, transparent 1.5px)`,
          backgroundSize: '36px 36px',
          backgroundPosition: '0 0, 18px 18px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#1746D2] tracking-tight mb-3">
            THE TECH6SENSE ECOSYSTEM
          </h2>
          <p className="font-body text-slate-600 text-base md:text-lg font-medium">
            Six Dimensions of AI-Powered Transformation
          </p>
        </div>

        {/* ── Desktop Diagram Layout ── */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center relative">
          
          {/* Left Column (Cards 1, 4, 5) */}
          <div className="col-span-4 flex flex-col gap-10 z-20">
            <CardComponent card={card1} activeCard={activeCard} setActiveCard={setActiveCard} />
            <CardComponent card={card4} activeCard={activeCard} setActiveCard={setActiveCard} />
            <CardComponent card={card5} activeCard={activeCard} setActiveCard={setActiveCard} />
          </div>

          {/* Center Column (Pure Hexagon Diagram) */}
          <div className="col-span-4 flex flex-col items-center justify-center relative min-h-[520px] z-10">
            
            {/* SVG Lines & Diagram Geometry */}
            <svg viewBox="0 0 400 450" className="w-full h-full absolute inset-0 overflow-visible pointer-events-none">
              
              {/* Main Flat-top Hexagon Outline */}
              <polygon 
                points="130,80 270,80 360,225 270,370 130,370 40,225" 
                fill="none" 
                stroke="#e2e8f0" 
                strokeWidth="2"
              />

              {/* ── Stepped Connector Lines to Cards ── */}
              {/* Top-Left: Card 1 -> Vertex (130, 80) */}
              <path d="M 30,48 L 95,48 L 130,80" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Top-Right: Card 2 -> Vertex (270, 80) */}
              <path d="M 370,48 L 305,48 L 270,80" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Middle-Left: Card 4 -> Vertex (40, 225) */}
              <line x1="-30" y1="225" x2="40" y2="225" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Middle-Right: Card 3 -> Vertex (360, 225) */}
              <line x1="430" y1="225" x2="360" y2="225" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />

              {/* Bottom-Left: Card 5 -> Vertex (130, 370) */}
              <path d="M 30,402 L 95,402 L 130,370" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Bottom-Right: Card 6 -> Vertex (270, 370) */}
              <path d="M 370,402 L 305,402 L 270,370" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* ── 6 Node Dots Exactly on the 6 Hexagon Vertices ── */}
              <circle cx="130" cy="80" r="7.5" fill="#059669" />
              <circle cx="270" cy="80" r="7.5" fill="#059669" />
              <circle cx="360" cy="225" r="7.5" fill="#2563eb" />
              <circle cx="270" cy="370" r="7.5" fill="#d97706" />
              <circle cx="130" cy="370" r="7.5" fill="#059669" />
              <circle cx="40" cy="225" r="7.5" fill="#2563eb" />
            </svg>

            {/* Central Brand Emblem Node */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <img 
                src={logoSymbol} 
                alt="TECH6SENSE Logo Symbol" 
                className="h-24 w-auto object-contain mb-3 drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
              <img 
                src={logoText} 
                alt="TECH6SENSE Text" 
                className="h-7 w-auto object-contain"
              />
            </div>

          </div>

          {/* Right Column (Cards 2, 3, 6) */}
          <div className="col-span-4 flex flex-col gap-10 z-20">
            <CardComponent card={card2} activeCard={activeCard} setActiveCard={setActiveCard} />
            <CardComponent card={card3} activeCard={activeCard} setActiveCard={setActiveCard} />
            <CardComponent card={card6} activeCard={activeCard} setActiveCard={setActiveCard} />
          </div>

        </div>

        {/* ── Mobile Layout ── */}
        <div className="lg:hidden flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 mb-4">
            <img 
              src={logoSymbol} 
              alt="TECH6SENSE Logo Symbol" 
              className="h-16 w-auto object-contain mb-2"
            />
            <img 
              src={logoText} 
              alt="TECH6SENSE Text" 
              className="h-5 w-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ECOSYSTEM_CARDS.map((card) => (
              <CardComponent key={card.id} card={card} activeCard={activeCard} setActiveCard={setActiveCard} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
