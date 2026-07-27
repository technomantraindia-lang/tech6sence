import React, { useEffect, useState, useRef } from 'react';

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
      <div className="mx-auto max-w-[85rem] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
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
                  className={`flex gap-4 transition-all duration-700 delay-${i * 100} ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900 mb-1">{point.title}</h4>
                    <p className="font-body text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Abstract Visual */}
          <div className={`lg:col-span-7 relative h-[500px] lg:h-[600px] w-full flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center animate-float">
              
              {/* Soft Grid Background */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIwLjUiIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPg==')] opacity-60 rounded-full [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

              {/* Connecting Map Lines */}
              <svg className="absolute inset-0 w-full h-full text-violet-200" viewBox="0 0 600 600">
                {isVisible && (
                  <>
                    <path d="M300,300 Q450,150 550,200" fill="none" stroke="url(#map-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-[drawLine_2s_ease-out_forwards]" strokeDashoffset="500" />
                    <path d="M300,300 Q150,150 50,200" fill="none" stroke="url(#map-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-[drawLine_2s_ease-out_forwards]" strokeDashoffset="500" />
                    <path d="M300,300 Q450,450 550,400" fill="none" stroke="url(#map-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-[drawLine_2s_ease-out_forwards]" strokeDashoffset="500" />
                    <path d="M300,300 Q150,450 50,400" fill="none" stroke="url(#map-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-[drawLine_2s_ease-out_forwards]" strokeDashoffset="500" />
                  </>
                )}
                <defs>
                  <linearGradient id="map-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Rings */}
              <div className="absolute inset-12 border border-violet-100 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-24 border border-fuchsia-50 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

              {/* Center Marker (GIFT City) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-30">
                <div className="absolute inset-0 bg-violet-400 rounded-full blur-xl opacity-40 animate-pulse" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>

              {/* Floating Location Card */}
              <div className="absolute top-[35%] right-[25%] bg-white p-3 pr-4 rounded-xl border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)] z-40 flex items-center gap-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-slate-900 text-xs leading-tight">GIFT City</span>
                  <span className="font-body text-slate-500 text-[0.65rem] leading-tight">Gandhinagar, Gujarat</span>
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-[15%] left-[20%] bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.2s' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                <span className="font-mono text-[0.6rem] font-bold text-slate-700 uppercase tracking-wider">Global AI Vision</span>
              </div>
              
              <div className="absolute bottom-[20%] right-[10%] bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '2.1s' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span className="font-mono text-[0.6rem] font-bold text-slate-700 uppercase tracking-wider">Innovation Base</span>
              </div>

              <div className="absolute bottom-[10%] left-[25%] bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm z-30 flex items-center gap-2 animate-float" style={{ animationDelay: '0.8s' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span className="font-mono text-[0.6rem] font-bold text-slate-700 uppercase tracking-wider">India</span>
              </div>
              
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawLine {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </section>
  );
}
