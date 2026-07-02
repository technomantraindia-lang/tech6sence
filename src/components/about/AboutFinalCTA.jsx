import React, { useEffect, useState, useRef } from 'react';

export default function AboutFinalCTA() {
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

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-slate-50 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Animated Top Border Line */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 transition-all duration-[1500ms] ease-out" 
        style={{ width: isVisible ? '100%' : '0%' }} 
      />

      {/* Subtle AI Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Expanding Soft Glow Behind Heading */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-violet-100/70 rounded-full blur-[100px] pointer-events-none transition-all duration-[2000ms] ease-out ${
          isVisible ? 'scale-125 opacity-100' : 'scale-50 opacity-0'
        }`} 
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Small Label */}
        <div 
          className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-violet-100 shadow-sm transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-violet-700">
            Let’s Build With AI
          </span>
        </div>
        
        {/* Main Heading */}
        <h2 
          className={`font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1] font-extrabold tracking-tight text-slate-900 mb-6 max-w-3xl mx-auto transition-all duration-700 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ready to Build Intelligence into Your Business?
        </h2>
        
        {/* Paragraph */}
        <p 
          className={`font-body text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Connect with TECH6SENSE AI to explore AI solutions, deep-tech products, or ecosystem support for your next stage of growth.
        </p>

        {/* Call to Action Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10 transition-all duration-700 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Primary Button */}
          <a 
            href="#contact" 
            className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-body text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(124,58,237,0.25)]"
          >
            <span>Schedule Consultation</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>
          
          {/* Secondary Button */}
          <a 
            href="#solutions" 
            className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-4 font-body text-sm font-bold text-slate-700 transition-all hover:border-violet-300 hover:text-violet-700 hover:shadow-[0_8px_20px_rgba(124,58,237,0.08)]"
          >
            <span>Explore AI Solutions</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Trust Line */}
        <div 
          className={`pt-6 border-t border-slate-200/60 transition-all duration-700 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs md:text-sm font-medium text-slate-500 flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <span>AI solutions</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Deep-tech products</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Founder ecosystem support</span>
          </p>
        </div>

      </div>
    </section>
  );
}
