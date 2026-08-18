import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    glowColor: 'rgba(0, 168, 107, 0.09)',
    href: '/ai-agents'
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
    glowColor: 'rgba(0, 168, 107, 0.09)',
    href: '/deep-tech-products'
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
    glowColor: 'rgba(23, 70, 210, 0.09)',
    href: '/business-brains'
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
    glowColor: 'rgba(23, 70, 210, 0.09)',
    href: '/visionary-founders'
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
    glowColor: 'rgba(0, 168, 107, 0.09)',
    href: '/enterprise-ai'
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
    glowColor: 'rgba(212, 175, 55, 0.09)',
    href: '/about'
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
    <Link 
      to={card.href}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActiveCard(card)}
      onMouseLeave={() => setActiveCard(null)}
      className={`group relative p-6 md:p-7 rounded-3xl transition-all duration-500 border flex flex-col justify-between shadow-sm cursor-pointer z-20 overflow-hidden block ${
        card.cardBg
      } ${card.shadowStyle} ${card.alignOffset || ''} ${
        isHovered 
          ? '-translate-y-1.5 shadow-xl border-slate-300 scale-[1.02]' 
          : 'border-slate-100/80 hover:border-slate-200'
      }`}
    >
      {/* Top Accent Line on Hover */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${card.dotBg} ${
          isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />

      {/* Spotlight Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
        style={{
          background: `radial-gradient(circle 220px at var(--mx, -99px) var(--my, -99px), ${card.glowColor}, transparent 70%)`
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-display font-extrabold text-base md:text-lg tracking-tight ${card.textColor}`}>
            {card.num}. {card.title}
          </h3>
          <span className={`w-2 h-2 rounded-full transition-transform duration-300 ${card.dotBg}`} />
        </div>
        <p className="font-body text-slate-600 text-xs md:text-sm leading-relaxed font-medium transition-colors duration-300 group-hover:text-slate-900">
          {card.short}
        </p>
      </div>

      {/* Subtle In-Card Expandable Details */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isHovered ? 'grid-rows-[1fr] opacity-100 mt-4 pt-3 border-t border-slate-200/60' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-xs text-slate-500 leading-relaxed font-normal">
            {card.full}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function IntelligenceStack() {
  const [activeCard, setActiveCard] = useState(null);
  const [mobileActiveId, setMobileActiveId] = useState(1);

  const card1 = ECOSYSTEM_CARDS.find(c => c.id === 1);
  const card2 = ECOSYSTEM_CARDS.find(c => c.id === 2);
  const card4 = ECOSYSTEM_CARDS.find(c => c.id === 4);
  const card3 = ECOSYSTEM_CARDS.find(c => c.id === 3);
  const card5 = ECOSYSTEM_CARDS.find(c => c.id === 5);
  const card6 = ECOSYSTEM_CARDS.find(c => c.id === 6);

  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden py-16 md:py-24 z-20 font-body">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

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
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-[0.25em] block mb-3">
            Integrated Intelligence Architecture
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            THE TECH6SENSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-500">ECOSYSTEM</span>
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
              
              {/* Static Flat-top Hexagon Base Outline */}
              <polygon 
                points="130,80 270,80 360,225 270,370 130,370 40,225" 
                fill="none" 
                stroke="#e2e8f0" 
                strokeWidth="2.5"
              />

              {/* ── Stepped Connector Lines to Cards ── */}
              {/* Top-Left: Card 1 -> Vertex (130, 80) */}
              <path 
                d="M 30,48 L 95,48 L 130,80" 
                fill="none" 
                stroke={activeCard?.id === 1 ? '#059669' : '#05966960'} 
                strokeWidth={activeCard?.id === 1 ? '3.5' : '2'} 
                strokeLinecap="round" 
                strokeLinejoin="round"
                strokeDasharray="8 8"
                className="transition-all duration-300 animate-[dash_3s_linear_infinite]"
              />
              
              {/* Top-Right: Card 2 -> Vertex (270, 80) */}
              <path 
                d="M 370,48 L 305,48 L 270,80" 
                fill="none" 
                stroke={activeCard?.id === 2 ? '#059669' : '#05966960'} 
                strokeWidth={activeCard?.id === 2 ? '3.5' : '2'} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeDasharray="8 8"
                className="transition-all duration-300 animate-[dash_3s_linear_infinite_reverse]"
              />

              {/* Middle-Left: Card 4 -> Vertex (40, 225) */}
              <line 
                x1="-30" y1="225" x2="40" y2="225" 
                stroke={activeCard?.id === 4 ? '#2563eb' : '#2563eb60'} 
                strokeWidth={activeCard?.id === 4 ? '3.5' : '2'} 
                strokeLinecap="round" 
                strokeDasharray="8 8"
                className="transition-all duration-300 animate-[dash_3s_linear_infinite]"
              />
              
              {/* Middle-Right: Card 3 -> Vertex (360, 225) */}
              <line 
                x1="430" y1="225" x2="360" y2="225" 
                stroke={activeCard?.id === 3 ? '#2563eb' : '#2563eb60'} 
                strokeWidth={activeCard?.id === 3 ? '3.5' : '2'} 
                strokeLinecap="round" 
                strokeDasharray="8 8"
                className="transition-all duration-300 animate-[dash_3s_linear_infinite_reverse]"
              />

              {/* Bottom-Left: Card 5 -> Vertex (130, 370) */}
              <path 
                d="M 30,402 L 95,402 L 130,370" 
                fill="none" 
                stroke={activeCard?.id === 5 ? '#059669' : '#05966960'} 
                strokeWidth={activeCard?.id === 5 ? '3.5' : '2'} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeDasharray="8 8"
                className="transition-all duration-300 animate-[dash_3s_linear_infinite]"
              />

              {/* Bottom-Right: Card 6 -> Vertex (270, 370) */}
              <path 
                d="M 370,402 L 305,402 L 270,370" 
                fill="none" 
                stroke={activeCard?.id === 6 ? '#d97706' : '#d9770660'} 
                strokeWidth={activeCard?.id === 6 ? '3.5' : '2'} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeDasharray="8 8"
                className="transition-all duration-300 animate-[dash_3s_linear_infinite_reverse]"
              />

              {/* ── 6 Node Dots Exactly on the 6 Hexagon Vertices ── */}
              <circle cx="130" cy="80" r="7.5" fill="#059669" />
              <circle cx="270" cy="80" r="7.5" fill="#059669" />
              <circle cx="360" cy="225" r="7.5" fill="#2563eb" />
              <circle cx="270" cy="370" r="7.5" fill="#d97706" />
              <circle cx="130" cy="370" r="7.5" fill="#059669" />
              <circle cx="40" cy="225" r="7.5" fill="#2563eb" />
            </svg>

            {/* Central Brand Emblem Node */}
            <div className="relative z-20 flex flex-col items-center justify-center transition-all duration-500 hover:scale-110">
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
          {/* Logo Center Node */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 mb-2 relative overflow-hidden">
            <div className="absolute -inset-px bg-gradient-to-tr from-blue-500/5 via-emerald-500/5 to-amber-500/5 opacity-50" />
            <img 
              src={logoSymbol} 
              alt="TECH6SENSE Logo Symbol" 
              className="h-16 w-auto object-contain mb-2 relative z-10 animate-[pulse_4s_ease-in-out_infinite]"
            />
            <img 
              src={logoText} 
              alt="TECH6SENSE Text" 
              className="h-5 w-auto object-contain relative z-10"
            />
          </div>

          {/* Glowing Timeline Stream */}
          <div className="relative pl-7 flex flex-col gap-6">
            
            {/* The vertical timeline laser line */}
            <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-slate-200/80 rounded-full overflow-hidden">
              <div className="h-1/3 w-full bg-gradient-to-b from-emerald-500 via-blue-500 to-amber-500 animate-[timeline-flow_4s_linear_infinite]" />
            </div>

            {ECOSYSTEM_CARDS.map((card) => {
              const isActive = mobileActiveId === card.id;
              
              return (
                <div 
                  key={card.id}
                  className="relative transition-all duration-300"
                >
                  {/* Timeline Glowing Node Dot */}
                  <button
                    type="button"
                    onClick={() => setMobileActiveId(card.id)}
                    className={`absolute -left-[23px] top-6 w-3 h-3 rounded-full border-2 border-white transition-all duration-500 focus:outline-none ${
                      isActive 
                        ? `${card.dotBg} scale-125 shadow-[0_0_12px_#3b82f6]` 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />

                  {/* Card Container */}
                  <div
                    onClick={() => setMobileActiveId(card.id)}
                    className={`relative p-5 rounded-2xl border transition-all duration-500 flex flex-col justify-between cursor-pointer overflow-hidden ${
                      isActive 
                        ? `border-slate-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] -translate-y-1 scale-[1.01]` 
                        : 'border-slate-100 bg-white/60 opacity-70 hover:opacity-90'
                    }`}
                  >
                    {/* Active Gradient Top Border */}
                    {isActive && (
                      <div className={`absolute top-0 left-0 right-0 h-1 transition-all ${card.dotBg}`} />
                    )}

                    {/* Headline and status */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-display font-extrabold text-sm tracking-tight ${card.textColor}`}>
                        {card.num}. {card.title}
                      </h3>
                      <span className={`w-1.5 h-1.5 rounded-full ${card.dotBg} ${isActive ? 'animate-ping' : ''}`} />
                    </div>

                    <p className="font-body text-slate-600 text-[0.7rem] leading-relaxed font-semibold">
                      {card.short}
                    </p>

                    {/* Expanded details */}
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${
                        isActive ? 'grid-rows-[1fr] opacity-100 mt-4 pt-3.5 border-t border-slate-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-body text-[0.7rem] text-slate-500 leading-relaxed font-normal mb-4">
                          {card.full}
                        </p>
                        
                        <Link 
                          to={card.href}
                          className="inline-flex items-center gap-2 font-display text-xs font-black text-[#1746D2] hover:underline"
                        >
                          Explore Dimension
                          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 stroke-[2.5]" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>

      {/* Timeline flow animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes timeline-flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}} />

    </section>
  );
}
