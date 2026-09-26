import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function IndustriesFinalCTA() {
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
      
      {/* Subtle Industry Grid Background */}
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
              ENTERPRISE AI TRANSFORMATION
            </span>
          </div>

          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-slate-900 mb-4 leading-[1.15] tracking-tight max-w-[1200px] mx-auto">
            Ready to Transform Your Industry with Enterprise AI?
          </h2>

          <h3 className="font-display text-xl md:text-2xl font-bold text-[#1746D2] mb-8 leading-snug max-w-[1200px] mx-auto">
            Let's Build the Future of Your Industry Together
          </h3>

          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-[1200px] mx-auto text-center">
            Whether you are looking to automate business processes, modernize customer experiences, optimize operations, develop AI-powered products, implement intelligent enterprise systems, or create entirely new digital business models, <strong className="text-slate-900 font-bold">TECH6SENSE AI</strong> is your trusted partner for enterprise AI transformation.
          </p>

          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-12 max-w-[1200px] mx-auto text-center">
            From strategic AI consulting to enterprise-scale implementation, we help organizations transform ambitious ideas into intelligent, scalable, and measurable business outcomes.
          </p>

          {/* Action Box Card */}
          <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 text-left shadow-2xl relative overflow-hidden border border-slate-800 mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1746D2]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A86B]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-3 text-center md:text-left">
                Start Your AI Transformation Today
              </h3>
              
              <p className="text-slate-300 text-base md:text-lg mb-8 text-center md:text-left">
                Discover how enterprise AI can revolutionize your industry.
              </p>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm">
                <h4 className="font-display text-lg md:text-xl font-bold text-[#00A86B] mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00A86B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Our AI experts will help you:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Assess your organization's AI readiness",
                    "Identify the highest-value AI opportunities",
                    "Develop a customized AI transformation roadmap",
                    "Prioritize quick wins and long-term initiatives",
                    "Estimate business impact and return on investment (ROI)",
                    "Design scalable AI solutions aligned with your business objectives"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00A86B] shrink-0 mt-2.5" />
                      <span className="text-slate-200 text-sm md:text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link to="/lets-connect" onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-8 py-4 font-body text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Schedule a Free AI Strategy Consultation
                    <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>

            </div>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-mono font-medium text-slate-400">
            <span>Healthcare</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Manufacturing</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Finance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Retail</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Smart Cities</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Startups</span>
          </div>

        </div>
      </div>
    </section>
  );
}
