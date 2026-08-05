import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductInnovationShowcase() {
  const products = [
    {
      num: "01",
      title: "AI Smart Glasses",
      desc: "Intelligent wearable glasses combining AI assistants, augmented information, real-time translation, computer vision, voice interaction, navigation, recording, and productivity.",
      isBlue: true
    },
    {
      num: "02",
      title: "AI-Powered Next-Generation Exoskeleton",
      desc: "Advanced AI-assisted wearable robotic system enhancing human mobility, rehabilitation, industrial productivity, and defense capabilities.",
      isBlue: false
    },
    {
      num: "03",
      title: "AI Earphones",
      desc: "Next-generation intelligent audio powered by AI noise cancellation, language translation, health sensing, voice assistant, and contextual awareness.",
      isBlue: true
    },
    {
      num: "04",
      title: "AI Smartwatch",
      desc: "Enterprise-grade intelligent smartwatch integrating AI health monitoring, productivity, communication, navigation, safety, and fitness analytics.",
      isBlue: false
    },
    {
      num: "05",
      title: "AI Fitness Health Band",
      desc: "Professional-grade AI fitness tracker providing continuous health analytics, recovery insights, performance optimization, sleep intelligence, and personalized coaching.",
      isBlue: true
    },
    {
      num: "06",
      title: "Wearable AI Personal Assistant",
      desc: "A wearable AI companion capable of understanding conversations, scheduling tasks, answering questions, managing workflows, and providing proactive intelligence.",
      isBlue: false
    },
    {
      num: "07",
      title: "AI Smart Ring",
      desc: "Continuous biometric monitoring, secure authentication, contactless experiences, wellness intelligence, and AI-driven lifestyle optimization in a minimal design.",
      isBlue: true
    },
    {
      num: "08",
      title: "Wearable AI Personal Health Device",
      desc: "Advanced healthcare wearable designed for preventive healthcare, chronic disease management, continuous diagnostics, and remote patient monitoring.",
      isBlue: false
    },
    {
      num: "09",
      title: "Healthcare & Medical AI Devices",
      desc: "Medical-grade intelligent devices supporting hospitals, clinicians, diagnostics, patient monitoring, telemedicine, and healthcare automation.",
      isBlue: true
    },
    {
      num: "10",
      title: "Smart IoT Devices",
      desc: "AI-enabled connected devices powering homes, industries, factories, agriculture, smart cities, logistics, and infrastructure.",
      isBlue: false
    },
    {
      num: "11",
      title: "AI Digital Notepad",
      desc: "The intelligent notebook that understands handwriting, summarizes meetings, generates tasks, translates content, and synchronizes seamlessly across devices.",
      isBlue: true
    }
  ];

  return (
    <section id="portfolio" className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-[85rem] px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
              OUR PRODUCT PORTFOLIO
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            AI-Powered Deep-Tech Products
          </h2>
          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Explore our ecosystem of intelligent wearable hardware, connected medical gear, and smart IoT devices. Hover over a product to learn more.
          </p>
        </div>

        {/* 11 Products Grid with 3D Flip Card Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, idx) => {
            // Alternating colors
            const cardBg = item.isBlue 
              ? "bg-blue-50/40 hover:bg-blue-50 shadow-[2px_2px_4px_rgba(15,23,42,0.01)]" 
              : "bg-emerald-50/40 hover:bg-emerald-50 shadow-[2px_2px_4px_rgba(15,23,42,0.01)]";
            
            const badgeBg = item.isBlue 
              ? "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white" 
              : "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white";

            const hoverGlow = item.isBlue
              ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.15)]"
              : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.15)]";

            const accentText = item.isBlue 
              ? "text-blue-600" 
              : "text-emerald-600";

            return (
              <div 
                key={idx}
                className="group w-full h-[260px] [perspective:1000px]"
              >
                <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Card Front Face */}
                  <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] p-8 rounded-3xl border-0 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] ${cardBg} ${hoverGlow}`}>
                    <div>
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold mb-6 transition-all duration-500 ease-out group-hover:rotate-[360deg] ${badgeBg}`}>
                        {item.num}
                      </span>

                      <h3 className="font-display text-lg font-black text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Learn More Prompt with Down Arrow */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100/60">
                      <span className={`font-mono text-[0.65rem] font-bold uppercase tracking-wider ${accentText}`}>
                        Learn More
                      </span>
                      <svg className={`w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 ${accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Back Face (Shown on hover) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 rounded-3xl bg-slate-950 text-white flex flex-col justify-center">
                    <span className={`block font-mono text-[0.65rem] font-bold uppercase tracking-widest mb-3 ${accentText}`}>
                      PRODUCT SPECIFICATION
                    </span>
                    <p className="font-body text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                    <div className="mt-6 flex flex-col gap-2">
                      <Link
                        to={`/deep-tech-products/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                        className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-wider hover:underline text-white"
                      >
                        View Details
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                      <Link
                        to={`/lets-connect?inquiry=${encodeURIComponent(item.title)}`}
                        className={`inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-wider hover:underline ${accentText}`}
                      >
                        Inquire Brand
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
