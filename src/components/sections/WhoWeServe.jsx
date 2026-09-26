import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WhoWeServe() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      title: "Enterprises",
      desc: "Modernizing operations and unlocking competitive advantage through applied AI.",
      color: "#2563eb",
      href: "/enterprise-ai"
    },
    {
      title: "Governments",
      desc: "Deploying intelligent infrastructure and automation at public-sector scale.",
      color: "#059669",
      href: "/ai-agents"
    },
    {
      title: "Startups",
      desc: "Building AI-native products with enterprise-grade engineering from day one.",
      color: "#1746D2",
      href: "/deep-tech-products"
    },
    {
      title: "Visionary Founders",
      desc: "Launching entirely new AI and IT companies inside a proven ecosystem.",
      color: "#00A86B",
      href: "/visionary-founders"
    }
  ];

  return (
    <section ref={sectionRef} id="who-we-serve" className="pt-10 pb-20 md:pt-12 md:pb-28 bg-[#FAFBFF] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div 
          className="text-center mb-16 transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-gradient-to-r from-blue-500 to-emerald-500" />
            <h2 className="text-blue-600 font-mono font-bold tracking-[0.2em] uppercase text-sm">
              WHO WE SERVE
            </h2>
            <span className="h-[2px] w-10 bg-gradient-to-l from-blue-500 to-emerald-500" />
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for Every Builder of the Future
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const isHovered = hoveredIdx === index;
            const bgOpacity = isHovered ? '10' : '05';
            const borderOpacity = isHovered ? '35' : '15';

            return (
              <Link
                key={index}
                to={item.href} 
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                onTouchStart={() => setHoveredIdx(index)}
                onTouchEnd={() => setHoveredIdx(null)}
                onTouchCancel={() => setHoveredIdx(null)}
                className="group relative rounded-2xl p-8 border transition-all duration-500 ease-out hover:-translate-y-1 block"
                style={{ 
                  backgroundColor: `${item.color}${bgOpacity}`,
                  borderColor: `${item.color}${borderOpacity}`,
                  boxShadow: isHovered 
                    ? `4px 4px 0px 0px ${item.color}35` 
                    : `4px 4px 0px 0px ${item.color}18`,
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${(index + 1) * 150}ms`
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundColor: isHovered ? `${item.color}25` : `${item.color}15` }}
                    >
                      <svg className="w-6 h-6" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#1746D2] transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


