import React, { useEffect, useState, useRef } from 'react';
import worldMapImg from '../../assets/gift-city-world-map.jpg';

export default function GiftCityPresence() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const points = [
    {
      title: "Innovation-Led Location",
      desc: "Positioned in one of India’s emerging business and technology environments."
    },
    {
      title: "Global AI Mindset",
      desc: "Built to serve founders, businesses, and enterprises with international digital expectations."
    },
    {
      title: "Future-Ready Collaboration",
      desc: "A base for AI solutions, deep-tech ideas, product innovation, and ecosystem partnerships."
    },
    {
      title: "Business-First Technology",
      desc: "Focused on practical AI adoption, intelligent systems, and measurable transformation."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#1746D2] to-[#00A86B] rounded-full" />
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                GLOBAL PRESENCE
              </span>
            </div>
            
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-tight">
              Built from GIFT City.<br className="hidden md:block"/> Connected to Global AI Possibilities.
            </h2>
            
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-10">
              TECH6SENSE AI is based in GIFT City, Gandhinagar, Gujarat, India — a growing hub for innovation, technology, finance, and future-ready business. From this base, TECH6SENSE AI works with a global mindset to support AI solutions, product innovation, and intelligent business transformation.
            </p>

            <div className="flex flex-col gap-6">
              {points.map((point, i) => (
                <div 
                  key={i} 
                  className={`flex gap-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <div className="w-2 h-2 rounded-full bg-[#1746D2] mt-2 shrink-0" />
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900 mb-1">{point.title}</h4>
                    <p className="font-body text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Generated 3D World Map Showcase */}
          <div className={`lg:col-span-7 relative w-full flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            <div className="relative w-full max-w-[620px] rounded-3xl p-3 sm:p-5 bg-slate-50 border border-slate-200/90 shadow-xl overflow-hidden group">
              
              {/* World Map Image */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                <img 
                  src={worldMapImg} 
                  alt="TECH6SENSE AI GIFT City Global Map"
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Location Badges */}
                <div className="absolute top-[8%] left-[6%] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md flex items-center gap-2 animate-float">
                  <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse" />
                  <span className="font-display text-xs font-extrabold text-slate-900 uppercase tracking-wider">GLOBAL AI VISION</span>
                </div>
                
                <div className="absolute bottom-[10%] left-[8%] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md flex items-center gap-2 animate-float" style={{ animationDelay: '1.2s' }}>
                  <span className="w-2 h-2 rounded-full bg-[#1746D2]" />
                  <span className="font-display text-xs font-extrabold text-slate-900 uppercase tracking-wider">INDIA</span>
                </div>

                <div className="absolute bottom-[18%] right-[8%] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md flex items-center gap-2 animate-float" style={{ animationDelay: '2.0s' }}>
                  <span className="w-2 h-2 rounded-full bg-[#00A86B]" />
                  <span className="font-display text-xs font-extrabold text-slate-900 uppercase tracking-wider">INNOVATION BASE</span>
                </div>
              </div>

              {/* Bottom Info Strip */}
              <div className="mt-3.5 p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1746D2]/10 flex items-center justify-center text-[#1746D2]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-display text-xs sm:text-sm font-extrabold text-slate-900">GIFT City Hub</h5>
                    <p className="text-[11px] text-slate-500 font-medium">Gandhinagar, Gujarat, India</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#1746D2]">Global Ecosystem →</span>
              </div>

            </div>

          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />
    </section>
  );
}
