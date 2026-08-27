import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function SuccessStoriesFinalCTA() {
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none transition-all duration-[2000ms] ease-in-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
      }`} />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIwLjUiIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')] opacity-60" />

      {/* Top Gradient Line Reveal */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
        <div 
          className="h-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] transition-all duration-[2000ms] ease-out origin-left"
          style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center">
        <div className={`w-full max-w-[1400px] mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-[#1746D2] bg-white shadow-sm px-5 py-2 rounded-full border border-blue-100">
              Ready to Build Your AI Success Story?
            </span>
          </div>

          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight max-w-[1200px] mx-auto">
            Transform Your Business with Enterprise AI That Delivers Measurable Results
          </h2>

          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-[1000px] mx-auto text-center">
            The world's leading organizations are embracing Artificial Intelligence to automate operations, accelerate innovation, and create lasting competitive advantages. Whether you're a startup, enterprise, or government organization, <strong className="text-slate-900 font-bold">TECH6SENSE AI</strong> partners with you from strategy to deployment to build intelligent solutions that create real business impact.
          </p>

          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-12 max-w-[1000px] mx-auto text-center font-semibold">
            From AI Agents and Generative AI to Enterprise Automation and Deep-Tech Products — we build the future of intelligent business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link to="/lets-connect" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#1746D2] px-8 py-4 font-body text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1233a0] hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-2">
                Book a Free AI Strategy Consultation
              </span>
            </Link>
            <Link to="/lets-connect" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white border-2 border-slate-200 px-8 py-4 font-body text-base font-bold text-slate-700 shadow-sm transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-md hover:border-slate-300">
              <span className="relative z-10 flex items-center gap-2">
                Talk to Our AI Experts
              </span>
            </Link>
          </div>

          {/* Premium Closing Line */}
          <div className="pt-16 border-t border-slate-200/60 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Your Success Story Could Be Next.
            </h3>
            <p className="font-body text-slate-500 text-sm md:text-base leading-relaxed">
              Join forward-thinking organizations across the USA, UK, Canada, Australia, Europe, UAE, Singapore, Hong Kong, and India that trust TECH6SENSE AI to transform ambitious ideas into enterprise-grade AI solutions that deliver measurable business outcomes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
