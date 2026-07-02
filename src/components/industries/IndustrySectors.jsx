import React, { useEffect, useState, useRef } from 'react';

export default function IndustrySectors() {
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

  const sectors = [
    { title: "Healthcare & Life Sciences", tagline: "AI for smarter care, monitoring, and clinical workflows.", span: "lg:col-span-3" },
    { title: "Manufacturing & Industrial AI", tagline: "Intelligence for operations, quality, and predictive maintenance.", span: "lg:col-span-3" },
    { title: "Finance & Insurance", tagline: "Risk intelligence, automation, fraud insights, and decision support.", span: "lg:col-span-3" },
    { title: "Retail & E-Commerce", tagline: "Personalization, demand forecasting, and customer intelligence.", span: "lg:col-span-3" },
    { title: "Education & Learning", tagline: "AI tutors, learning analytics, and personalized education systems.", span: "lg:col-span-4" },
    { title: "Smart Cities & IoT", tagline: "Connected infrastructure, monitoring systems, and urban intelligence.", span: "lg:col-span-4" },
    { title: "Logistics & Supply Chain", tagline: "Predictive movement, routing, tracking, and operational visibility.", span: "lg:col-span-4" },
    { title: "Startups & Digital Businesses", tagline: "AI-first product development and scalable digital platforms.", span: "lg:col-span-4" },
    { title: "Enterprise Operations", tagline: "Workflow automation, reporting systems, and intelligent productivity.", span: "lg:col-span-4" },
    { title: "Consumer Technology", tagline: "Smart devices, AI apps, personal tools, and connected experiences.", span: "lg:col-span-4" }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              INDUSTRY SECTORS
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Industries We Transform with AI
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-2xl">
            TECH6SENSE AI works across industries where automation, prediction, visual intelligence, and connected systems can create practical business value.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          {sectors.map((sector, i) => (
            <div 
              key={i} 
              className={`group relative p-8 bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:border-violet-200 md:col-span-1 ${sector.span} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + (i * 50)}ms` }}
            >
              {/* Hover Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-100 to-fuchsia-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-violet-50 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-violet-400 group-hover:scale-125 transition-transform" />
                </div>
                
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">
                  {sector.title}
                </h3>
                
                <p className="font-body text-sm text-slate-600 leading-relaxed mt-auto">
                  {sector.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
