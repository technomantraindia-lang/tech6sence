import React, { useState, useEffect, useRef } from 'react';

const ALL_POINTS = [
  {
    title: 'Full-Spectrum Ecosystem',
    description: 'Product development, automation, governance, and infrastructure under one roof.',
    num: '01',
    color: 'from-[#1746D2] to-[#1746D2]',
    textColor: 'text-[#1746D2]',
    bg: 'bg-[#1746D2]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.25)]',
  },
  {
    title: 'Global Delivery, Local Compliance',
    description: 'Active across nine markets, engineered to regional regulatory standards.',
    num: '02',
    color: 'from-[#00A86B] to-[#00A86B]',
    textColor: 'text-[#00A86B]',
    bg: 'bg-[#00A86B]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.25)]',
  },
  {
    title: 'Deep-Tech Native',
    description: 'We build proprietary hardware and platforms ourselves,',
    num: '03',
    color: 'from-[#D4AF37] to-[#D4AF37]',
    textColor: 'text-[#D4AF37]',
    bg: 'bg-[#D4AF37]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(212,175,55,0.25)]',
  },
  {
    title: 'Founder-Built, Founder-Focused',
    description: 'Born from an entrepreneurial ecosystem, built to serve entrepreneurs and enterprises alike.',
    num: '04',
    color: 'from-[#1746D2] to-[#1746D2]',
    textColor: 'text-[#1746D2]',
    bg: 'bg-[#1746D2]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.25)]',
  },
  {
    title: 'Governance-First Engineering',
    description: 'Strategy and risk are engineered in from day one, not bolted on after.',
    num: '05',
    color: 'from-[#00A86B] to-[#00A86B]',
    textColor: 'text-[#00A86B]',
    bg: 'bg-[#00A86B]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.25)]',
  },
  {
    title: 'Intelligence First',
    description: 'Every solution begins with business intelligence—not technology.',
    num: '06',
    color: 'from-[#D4AF37] to-[#D4AF37]',
    textColor: 'text-[#D4AF37]',
    bg: 'bg-[#D4AF37]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(212,175,55,0.25)]',
  },
  {
    title: 'Enterprise Engineering',
    description: 'Scalable, secure, and future-ready architecture.',
    num: '07',
    color: 'from-[#1746D2] to-[#1746D2]',
    textColor: 'text-[#1746D2]',
    bg: 'bg-[#1746D2]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.25)]',
  },
  {
    title: 'Innovation Leadership',
    description: 'Research-driven solutions powered by emerging technologies.',
    num: '08',
    color: 'from-[#00A86B] to-[#00A86B]',
    textColor: 'text-[#00A86B]',
    bg: 'bg-[#00A86B]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.25)]',
  },
  {
    title: 'Global Expertise',
    description: 'Serving organizations across North America, Europe, Asia-Pacific, and the Middle East.',
    num: '09',
    color: 'from-[#D4AF37] to-[#D4AF37]',
    textColor: 'text-[#D4AF37]',
    bg: 'bg-[#D4AF37]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(212,175,55,0.25)]',
  },
  {
    title: 'Strategic Partnership',
    description: 'We become an extension of your innovation team.',
    num: '10',
    color: 'from-[#1746D2] to-[#1746D2]',
    textColor: 'text-[#1746D2]',
    bg: 'bg-[#1746D2]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.25)]',
  },
  {
    title: 'Long-Term Growth',
    description: 'Technology designed to evolve alongside your business.',
    num: '11',
    color: 'from-[#00A86B] to-[#00A86B]',
    textColor: 'text-[#00A86B]',
    bg: 'bg-[#00A86B]/10',
    shadowHover: 'hover:shadow-[4px_4px_0px_0px_rgba(0,168,107,0.25)]',
  },
];

export default function WhyChooseTech6Sense() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="why-tech6sense"
      className="relative w-full pt-24 pb-10 md:pt-32 md:pb-12 overflow-hidden bg-[#FAFBFF]"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-blue-100/50 to-transparent blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-emerald-50/60 to-transparent blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div 
          className="mb-20 md:mb-28 text-center max-w-3xl mx-auto transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
            <h2 className="text-blue-600 font-mono font-bold tracking-[0.2em] uppercase text-sm">
              WHY TECH6SENSE
            </h2>
            <span className="h-[2px] w-8 bg-gradient-to-l from-blue-500 to-emerald-500 rounded-full" />
          </div>

          <h3 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] font-extrabold text-slate-900 tracking-tight">
            Why Global Organizations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Choose TECH6SENSE AI
            </span>
          </h3>
        </div>

        {/* Staggered Zig-Zag Grid */}
        <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 md:pb-6">
          
          {/* Faint connecting zig-zag pattern in the background (visible on desktop) */}
          {/* Central Vertical Connector Line (Desktop Only) */}
          <div 
            className="absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 hidden md:block z-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #cbd5e1 50%, rgba(255,255,255,0) 0%)',
              backgroundSize: '2px 10px',
              backgroundRepeat: 'repeat-y',
              opacity: 0.6
            }}
          />

          {ALL_POINTS.map((point, i) => {
            const brandColor = i % 3 === 0 ? '#1746D2' : i % 3 === 1 ? '#00A86B' : '#D4AF37';
            const isLeftColumn = i % 2 === 0;

            return (
              <div
                key={i}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col z-10 
                  ${i % 2 !== 0 ? 'md:mt-28' : 'md:mb-28'}
                  ${point.shadowHover}
                `}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${150 + i * 100}ms`,
                }}
              >
                {/* Horizontal branch connecting to center trunk */}
                {isLeftColumn ? (
                  <>
                    <div className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-4 lg:w-6 border-t border-dashed border-slate-300 hidden md:block pointer-events-none z-0" />
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 shadow-sm hidden md:flex items-center justify-center pointer-events-none z-20" style={{ borderColor: brandColor }}>
                      <span className="absolute w-full h-full rounded-full animate-ping opacity-75" style={{ backgroundColor: brandColor }} />
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brandColor }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-4 lg:w-6 border-t border-dashed border-slate-300 hidden md:block pointer-events-none z-0" />
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 shadow-sm hidden md:flex items-center justify-center pointer-events-none z-20" style={{ borderColor: brandColor }}>
                      <span className="absolute w-full h-full rounded-full animate-ping opacity-75" style={{ backgroundColor: brandColor }} />
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brandColor }} />
                    </div>
                  </>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with Number and Title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`relative shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl ${point.bg} ${point.textColor} font-display font-black text-2xl group-hover:scale-110 group-hover:bg-gradient-to-br ${point.color} group-hover:text-white transition-all duration-500 shadow-sm`}>
                      {point.num}
                    </div>
                    <h4 className={`font-display text-[1.4rem] lg:text-[1.6rem] font-bold text-slate-800 leading-tight pt-1.5 group-hover:${point.textColor} transition-colors duration-300`}>
                      {point.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="font-body text-[1.05rem] leading-relaxed text-slate-600 font-medium mt-auto group-hover:text-slate-700 transition-colors duration-300">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
