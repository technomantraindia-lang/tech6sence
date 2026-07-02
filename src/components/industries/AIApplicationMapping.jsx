import React, { useEffect, useState, useRef } from 'react';

export default function AIApplicationMapping() {
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

  const cols = [
    "Automation",
    "Prediction",
    "Monitoring",
    "Personalization",
    "Decision Support",
    "Connected Systems"
  ];

  const rows = [
    {
      capability: "AI Agents & Automation",
      mapping: ["Automation", "Decision Support"]
    },
    {
      capability: "Generative AI & Copilots",
      mapping: ["Personalization", "Decision Support", "Automation"]
    },
    {
      capability: "Computer Vision",
      mapping: ["Monitoring", "Prediction", "Decision Support"]
    },
    {
      capability: "Data Intelligence",
      mapping: ["Prediction", "Decision Support", "Personalization"]
    },
    {
      capability: "Enterprise AI Integration",
      mapping: ["Automation", "Connected Systems", "Decision Support"]
    },
    {
      capability: "Deep-Tech Products",
      mapping: ["Monitoring", "Connected Systems", "Personalization"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              AI APPLICATION MAP
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            AI Applications Mapped to Industry Needs
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            Different industries use AI in different ways. TECH6SENSE AI maps the right technology layer to the right business challenge.
          </p>
        </div>

        {/* Matrix Container */}
        <div className={`relative max-w-6xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.03)] overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Scrollable area for mobile */}
          <div className="overflow-x-auto hide-scrollbar">
            <div className="min-w-[800px]">
              
              {/* Header Row */}
              <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50/50">
                <div className="col-span-1 p-6 flex items-center font-display font-bold text-slate-500 text-xs tracking-wider uppercase">
                  Capability Layer
                </div>
                {cols.map((col, i) => (
                  <div key={i} className="col-span-1 p-6 flex items-center justify-center text-center font-display font-bold text-slate-700 text-sm">
                    {col}
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-slate-100">
                {rows.map((row, i) => (
                  <div key={i} className="grid grid-cols-7 group hover:bg-slate-50/80 transition-colors">
                    {/* Capability Name */}
                    <div className="col-span-1 p-6 flex items-center font-display font-bold text-slate-900 text-sm group-hover:text-violet-700 transition-colors border-r border-slate-100/50">
                      {row.capability}
                    </div>
                    
                    {/* Mapping Cells */}
                    {cols.map((col, j) => {
                      const isActive = row.mapping.includes(col);
                      return (
                        <div key={j} className="col-span-1 p-6 flex items-center justify-center border-r border-slate-100/50 last:border-r-0">
                          {isActive ? (
                            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-violet-50 group-hover:bg-violet-100 transition-colors">
                              <div className="absolute inset-0 bg-violet-400 rounded-full blur opacity-20" />
                              <div className="w-2.5 h-2.5 bg-violet-600 rounded-full relative z-10" />
                            </div>
                          ) : (
                            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
