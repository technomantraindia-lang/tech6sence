import React from 'react';

export default function IntelligentIndustries() {
  const sectors = [
    {
      name: "Financial & Enterprise",
      accent: "text-blue-500",
      bulletColor: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]",
      underlineColor: "bg-blue-500",
      items: [
        "Banking, Financial Services & Insurance",
        "Retail & E-Commerce",
        "Legal & Professional Services",
        "Human Resources & Workforce Management",
        "Hospitality & Travel"
      ]
    },
    {
      name: "Industrial & Infrastructure",
      accent: "text-emerald-500",
      bulletColor: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
      underlineColor: "bg-emerald-500",
      items: [
        "Manufacturing & Industry 4.0",
        "Logistics & Supply Chain",
        "Energy & Utilities",
        "Smart Cities & Infrastructure",
        "Telecommunications"
      ]
    },
    {
      name: "Advanced Tech & Science",
      accent: "text-blue-500",
      bulletColor: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]",
      underlineColor: "bg-blue-500",
      items: [
        "Healthcare & Life Sciences",
        "Pharmaceuticals & Biotechnology",
        "Aerospace & Defense",
        "Automotive & Mobility",
        "Agriculture & Smart Farming"
      ]
    },
    {
      name: "Public Sector & Media",
      accent: "text-emerald-500",
      bulletColor: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
      underlineColor: "bg-emerald-500",
      items: [
        "Government & Public Sector",
        "Education & EdTech",
        "Media & Entertainment",
        "Startups, Scale-ups & Technology Companies",
        "Real Estate & Construction"
      ]
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400">
              DOMAIN EXPERTISE
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-white mb-6 tracking-tight">
            Industries We Empower
          </h2>
          <p className="font-body text-slate-400 text-base md:text-lg leading-relaxed font-medium">
            TECH6SENSE AI delivers custom Deep-Tech engineering across 20 global verticals, organized by key sectors:
          </p>
        </div>

        {/* Minimalist Frameless Typography-First Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {/* Category Header (Frameless, Bold Typography) */}
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <h3 className="font-display text-lg font-black tracking-tight text-white">
                  {sector.name}
                </h3>
                <span className={`font-mono text-xs font-bold ${sector.accent}`}>
                  0{idx + 1}
                </span>
              </div>

              {/* Items List (Frameless, simple text lines with slide underline hover effect) */}
              <ul className="flex flex-col gap-4">
                {sector.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx} 
                    className="group relative flex items-center gap-3 py-1 cursor-default"
                  >
                    {/* Glowing Bullet Dot */}
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125 ${sector.bulletColor}`} />
                    
                    {/* Clean Frameless Text */}
                    <span className="font-body text-sm font-semibold text-slate-400 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {item}
                    </span>

                    {/* Faint Sliding underline effect on hover */}
                    <span className={`absolute bottom-0 left-4.5 right-0 h-[1px] scale-x-0 origin-left transition-transform duration-300 ${sector.underlineColor} group-hover:scale-x-100`} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
