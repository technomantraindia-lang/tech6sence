import React from 'react';

export default function PhilosophySection() {
  const statements = [
    "Private Conversations",
    "Executive Tables",
    "Trusted Circles",
    "Exceptional Leaders"
  ];

  return (
    <section id="philosophy" className="relative bg-slate-50 text-slate-900 py-24 md:py-32 border-b border-slate-200 overflow-hidden">
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glowing backdrop */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[450px] h-[450px] bg-[#1746D2]/10/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Eyebrow */}
        <span 
          className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-[0.25em] mb-8 block"
        >
          THE PHILOSOPHY
        </span>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Oversized Editorial Heading */}
          <div className="lg:col-span-6">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-slate-950 tracking-tight"
            >
              Not Everyone Deserves Access.
            </h2>
          </div>

          {/* Right Column: Manifesto Paragraphs */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 font-normal text-base md:text-lg leading-relaxed">
            <p className="text-slate-800 font-medium">
              The world's greatest opportunities rarely appear on public platforms. They happen inside private conversations, around executive tables, within trusted circles, and between leaders who share vision, integrity, and ambition.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-emerald-500 text-slate-900 font-medium text-lg leading-relaxed shadow-sm">
              “Extraordinary leaders create extraordinary outcomes when surrounded by extraordinary people.”
            </div>

            <p className="text-slate-600">
              This is a private institution where relationships are cultivated with intention, where ideas are challenged by world-class thinkers, and where influence is transformed into meaningful impact.
            </p>
            
            <p className="text-slate-650">
              We believe that the future of business will not be built through isolated ambition—but through trusted collaboration among exceptional leaders across the world.
            </p>
          </div>

        </div>

        {/* Four Short Statement Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-slate-200">
          {statements.map((stmt, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">0{idx + 1}</div>
              <h3 
                className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors"
              >
                {stmt}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
