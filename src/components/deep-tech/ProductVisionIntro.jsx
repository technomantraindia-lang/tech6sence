import React, { useEffect, useState, useRef } from 'react';

export default function ProductVisionIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const introPoints = [
    {
      title: "AI-Driven Product Thinking",
      desc: "Products designed around intelligence, automation, and adaptive user experiences.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Hardware + Software Innovation",
      desc: "Smart devices powered by connected systems, data, and AI models.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Real-World Product Use Cases",
      desc: "Product concepts shaped for healthcare, productivity, mobility, industry, and connected ecosystems.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header Area */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              PRODUCT VISION
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 mb-6 leading-tight">
            Where Intelligent Software Meets Real-World Hardware
          </h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Deep-tech products require more than hardware design. They need AI intelligence, data processing, user experience, cloud connectivity, and real-world usability. TECH6SENSE AI brings these layers together to build smarter products for modern industries and future users.
          </p>
        </div>

        {/* Intro Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {introPoints.map((point, i) => (
            <div 
              key={i} 
              className={`group relative p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-500 ease-out hover:shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:border-violet-200 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + (i * 150)}ms` }}
            >
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mb-6 group-hover:bg-violet-100 transition-colors">
                {point.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                {point.title}
              </h3>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
