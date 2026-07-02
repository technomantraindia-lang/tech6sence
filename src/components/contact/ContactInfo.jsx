import React, { useEffect, useState, useRef } from 'react';

export default function ContactInfo() {
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
    <section ref={sectionRef} className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIwLjUiIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPgo8L3N2Zz4=')] opacity-50" />

      <div className="relative z-10 mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              CONTACT DETAILS
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Connect with TECH6SENSE AI
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Reach out to TECH6SENSE AI for AI development, product innovation, automation, and business ecosystem opportunities.
          </p>
        </div>

        {/* Contact Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Email */}
          <div 
            className={`group relative bg-white border border-slate-200 p-8 rounded-2xl flex flex-col items-center text-center hover:border-violet-200 hover:shadow-[0_8px_30px_rgba(124,58,237,0.06)] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mb-5 group-hover:bg-violet-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Email</h3>
            <a href="mailto:info@tech6senseai.com" className="font-body text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
              info@tech6senseai.com
            </a>
          </div>

          {/* Phone */}
          <div 
            className={`group relative bg-white border border-slate-200 p-8 rounded-2xl flex flex-col items-center text-center hover:border-violet-200 hover:shadow-[0_8px_30px_rgba(124,58,237,0.06)] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mb-5 group-hover:bg-violet-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-display text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</h3>
            <a href="tel:+919081766355" className="font-body text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
              +91 90817 66355
            </a>
          </div>

          {/* Location */}
          <div 
            className={`group relative bg-white border border-slate-200 p-8 rounded-2xl flex flex-col items-center text-center hover:border-violet-200 hover:shadow-[0_8px_30px_rgba(124,58,237,0.06)] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center mb-5 group-hover:bg-violet-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Location</h3>
            <p className="font-body text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
              GIFT City, Gandhinagar, Gujarat, India
            </p>
          </div>

        </div>

        {/* Location Note */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 font-mono text-xs font-medium text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Built from GIFT City, designed for global AI possibilities.
          </span>
        </div>

      </div>
    </section>
  );
}
