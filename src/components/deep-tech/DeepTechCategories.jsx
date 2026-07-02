import React, { useEffect, useState, useRef } from 'react';

export default function DeepTechCategories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "AI Wearables",
      desc: "Smart glasses, AI watches, earphones, and wearable devices with real-time intelligence.",
      span: "md:col-span-2 lg:col-span-7"
    },
    {
      title: "Healthcare AI Devices",
      desc: "Health monitoring, diagnostic-support devices, wearable health systems, and clinical intelligence tools.",
      span: "md:col-span-2 lg:col-span-5"
    },
    {
      title: "Smart IoT Devices",
      desc: "Connected sensor-based devices powered by automation, cloud intelligence, and AI models.",
      span: "md:col-span-2 lg:col-span-4"
    },
    {
      title: "Human Augmentation",
      desc: "AI exoskeletons and assistive technologies designed for mobility, safety, and performance.",
      span: "md:col-span-2 lg:col-span-4"
    },
    {
      title: "AI Digital Tools",
      desc: "AI digital notepads, productivity devices, voice-enabled tools, and intelligent personal technology.",
      span: "md:col-span-2 lg:col-span-4"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              PRODUCT CATEGORIES
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Deep-Tech Product Categories
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-2xl">
            TECH6SENSE AI explores intelligent product categories that combine artificial intelligence, smart devices, connected systems, and real-world usability.
          </p>
        </div>

        {/* Bento Board Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className={`group relative p-8 md:p-10 bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:border-violet-200 ${cat.span} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + (i * 100)}ms` }}
            >
              {/* Hover Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-100 to-fuchsia-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-violet-50 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-violet-400 group-hover:scale-125 transition-transform" />
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-violet-700 transition-colors">
                  {cat.title}
                </h3>
                
                <p className="font-body text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
