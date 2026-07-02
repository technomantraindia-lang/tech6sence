import React, { useEffect, useState, useRef } from 'react';

export default function CompanyStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const proofPoints = [
    "Research-Led AI",
    "Product Engineering",
    "Business Execution",
    "Global AI Vision"
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      {/* Soft Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Top Header Area */}
        <div 
          className={`flex flex-col items-start max-w-4xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-violet-300"></span>
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              Our Story
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-extrabold tracking-tight text-slate-900">
            Built to Transform Vision into Intelligence
          </h2>
        </div>

        {/* Editorial Layout: Quote & Paragraph */}
        <div className="mt-12 md:mt-20 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Main Quote */}
          <div className="flex-1 relative pl-6 md:pl-10">
            {/* Animated Vertical Line */}
            <div 
              className={`absolute left-0 top-0 w-[3px] bg-gradient-to-b from-violet-500 to-fuchsia-500 transition-all duration-1000 ease-out origin-top ${
                isVisible ? 'scale-y-100' : 'scale-y-0'
              }`} 
              style={{ height: '100%' }}
            />
            
            <h3 
              className={`font-display text-2xl md:text-3xl lg:text-4xl leading-snug font-medium text-slate-800 transition-all duration-1000 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              “We don’t just build AI experiments — we build intelligent systems designed for real-world execution.”
            </h3>
          </div>

          {/* Supporting Paragraph */}
          <div 
            className={`flex-1 lg:pt-4 transition-all duration-1000 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-body text-slate-600 text-lg md:text-xl leading-relaxed">
              TECH6SENSE AI brings together research-level artificial intelligence, applied engineering, product thinking, and business ecosystem support to help organizations and founders move from ideas to scalable AI outcomes.
            </p>
          </div>
          
        </div>

        {/* Bottom Proof Strip */}
        <div className="mt-20 md:mt-32 relative pt-8 border-t border-slate-100">
          {/* Animated Horizontal Divider */}
          <div 
            className={`absolute top-[-1px] left-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-transparent transition-all duration-1500 ease-out ${
              isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {proofPoints.map((point, index) => (
              <div 
                key={index} 
                className={`group cursor-default py-2 inline-flex relative transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
              >
                <span className="font-body text-sm md:text-base font-bold text-slate-700 transition-colors group-hover:text-slate-900">
                  {point}
                </span>
                {/* Hover Underline Effect */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
