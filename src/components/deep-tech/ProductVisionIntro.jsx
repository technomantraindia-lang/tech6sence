import React from 'react';

export default function ProductVisionIntro() {
  const pillars = [
    {
      num: "01",
      title: "Vision, Strategy & R&D",
      desc: "We do not just take orders; we refine your vision. Our industry experts conduct market viability analysis, establish product roadmaps, and define the specific AI architectures required to make your product disrupt the market.",
      isBlue: true
    },
    {
      num: "02",
      title: "Industrial Design & Hardware Engineering",
      desc: "Our mechanical and electrical engineering teams design premium, ergonomic, and durable hardware. From ultra-miniaturized PCBs for Smart Rings to biomechanical stress-testing for Exoskeletons, we engineer physical products that feel as premium as they function.",
      isBlue: false
    },
    {
      num: "03",
      title: "Proprietary AI & Software Integration",
      desc: "Hardware is only as good as its brain. We develop custom, edge-computing AI algorithms, machine learning models, companion mobile applications, and secure, scalable cloud architectures that bring your physical product to life.",
      isBlue: true
    },
    {
      num: "04",
      title: "Prototyping, Manufacturing & Certification",
      desc: "Transition seamlessly from 3D-printed prototypes to mass global manufacturing. We manage the entire supply chain, strict Quality Assurance (QA) protocols, and navigate complex global compliance and certifications (FDA, CE, FCC, RoHS, ISO).",
      isBlue: false
    },
    {
      num: "05",
      title: "Go-to-Market & Lifecycle Scaling",
      desc: "The ecosystem doesn't stop at the factory door. We assist with premium packaging design, secure enterprise deployment, over-the-air (OTA) software update infrastructure, and post-launch IT support to ensure your brand scales flawlessly.",
      isBlue: true
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="col-span-1 lg:col-span-6">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
                End-to-End Deep-Tech Product Ecosystem
              </span>
            </div>
            
            <h2 className="font-display text-[clamp(1.85rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
              Turn Your Tech Vision Into a Global Brand
            </h2>
          </div>

          <div className="col-span-1 lg:col-span-6 lg:pt-6">
            <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
              Building a hardware and AI company traditionally requires juggling fragmented teams of industrial designers, software developers, and overseas manufacturers. TECH6SENSE AI eliminates the friction. We provide a <strong className="text-slate-900 font-extrabold">unified, white-label business ecosystem</strong> designed for entrepreneurs, healthcare institutions, and global brands who want to launch their own innovative deep-tech products without the operational nightmare.
            </p>
            <p className="font-display text-lg font-extrabold text-blue-600 leading-snug">
              You bring the vision. We engineer the reality.
            </p>
          </div>

        </div>

        {/* Pillars List - Ultra-smooth Expanding Accordion */}
        <div className="pt-12 border-t border-slate-100">
          <div className="mb-10">
            <span className="font-display text-sm font-extrabold text-blue-600 uppercase tracking-[0.2em] mb-2 block">
              PILLARS OF OUR ECOSYSTEM
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Integrated Product Engineering Capabilities
            </h3>
          </div>

          {/* Flex Row Container */}
          <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch min-h-[380px] max-w-6xl mx-auto">
            {pillars.map((pillar, idx) => {
              const cardBg = pillar.isBlue 
                ? "bg-blue-50/40 hover:bg-blue-50/70" 
                : "bg-emerald-50/40 hover:bg-emerald-50/70";
              
              const badgeBg = pillar.isBlue 
                ? "bg-blue-100 text-blue-700" 
                : "bg-emerald-100 text-emerald-700";

              return (
                <div 
                  key={idx}
                  className={`rounded-3xl p-6 transition-all duration-[750ms] custom-ease cursor-pointer flex flex-col justify-between border-0 overflow-hidden group flex-1 lg:hover:flex-[3.5] min-w-0 ${cardBg} ${
                    pillar.isBlue 
                      ? 'hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.12)]' 
                      : 'hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.12)]'
                  }`}
                >
                  {/* Top content wrapper */}
                  <div className="flex flex-col items-start w-full">
                    {/* Badge */}
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-extrabold shrink-0 mb-6 transition-transform duration-300 group-hover:scale-110 ${badgeBg}`}>
                      {pillar.num}
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-display text-base md:text-lg font-extrabold text-slate-900 mb-4 tracking-tight leading-snug whitespace-normal">
                      {pillar.title}
                    </h4>

                    {/* Description - delayed fade-in for fluid transition */}
                    <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed font-semibold opacity-0 lg:max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-[600ms] ease-out delay-200">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Expand cue at bottom */}
                  <div className="flex items-center justify-between w-full border-t border-slate-200/50 pt-4 mt-6 shrink-0">
                    <span className="font-display text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                      Engineering Pillar
                    </span>
                    <div className="text-slate-400 group-hover:translate-x-1.5 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Ultra-Smooth CSS Transition Curves */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-ease {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />
    </section>
  );
}
