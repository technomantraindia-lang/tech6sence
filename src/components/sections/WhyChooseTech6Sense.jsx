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
    description: 'We build proprietary hardware and platforms ourselves — not just software layers.',
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
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#FAFBFF]"
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
        <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 md:pb-24">
          
          {/* Faint connecting zig-zag pattern in the background (visible on desktop) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0 opacity-[0.03]" preserveAspectRatio="none">
            <path d="M 25% 0 L 75% 10% L 25% 20% L 75% 30% L 25% 40% L 75% 50% L 25% 60% L 75% 70% L 25% 80% L 75% 90% L 25% 100%" stroke="black" strokeWidth="4" fill="none" strokeDasharray="10 10"/>
          </svg>

          {ALL_POINTS.map((point, i) => (
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
          ))}
        </div>

      </div>
    </section>
  );
}
