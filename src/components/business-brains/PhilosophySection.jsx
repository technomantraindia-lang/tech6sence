import React from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function PhilosophySection() {
  const statements = [
    { title: "Private Conversations", desc: "Where the world's greatest opportunities begin." },
    { title: "Executive Tables", desc: "Where million-dollar ventures are engineered." },
    { title: "Trusted Circles", desc: "Where relationships become strategic alliances." },
    { title: "Exceptional Leaders", desc: "Where shared vision creates lasting legacy." }
  ];

  return (
    <section id="philosophy" className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glowing backdrop */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[450px] h-[450px] bg-[#1746D2]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
          <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
            THE PHILOSOPHY
          </span>
          <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Oversized Editorial Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight font-display">
              Not Everyone Deserves Access.
            </h2>
          </div>

          {/* Right Column: Manifesto Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 font-normal text-base md:text-lg leading-relaxed">
            
            {/* Stanza 1 */}
            <div className="space-y-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <p className="font-bold text-slate-900">
                The world's greatest opportunities rarely appear on public platforms.
              </p>
              <ul className="space-y-1 text-slate-600 font-medium text-sm md:text-base list-disc pl-5">
                <li>They happen inside private conversations.</li>
                <li>Around executive tables.</li>
                <li>Within trusted circles.</li>
                <li>Between leaders who share vision, integrity, and ambition.</li>
              </ul>
            </div>

            {/* Stanza 2: Principle Box */}
            <div className="p-6 rounded-2xl bg-[#000110] border border-slate-800 text-white space-y-2 shadow-lg">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                BUSINESS BRAINS was founded on a timeless principle:
              </span>
              <p className="font-display font-extrabold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 leading-snug">
                “Extraordinary leaders create extraordinary outcomes when surrounded by extraordinary people.”
              </p>
            </div>

            {/* Stanza 3 */}
            <p className="text-slate-700 font-medium">
              This is a private institution where relationships are cultivated with intention, where ideas are challenged by world-class thinkers, and where influence is transformed into meaningful impact.
            </p>
            
            {/* Stanza 4 */}
            <p className="text-slate-900 font-bold text-lg leading-relaxed border-l-4 border-l-[#00A86B] pl-4 italic">
              We believe that the future of business will not be built through isolated ambition—but through trusted collaboration among exceptional leaders across the world.
            </p>

          </div>

        </div>

        {/* Four Short Statement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-slate-200">
          {statements.map((stmt, idx) => {
            const isBlue = idx % 2 === 0;

            const cardBg = isBlue
              ? "bg-blue-50/70 hover:bg-[#1746D2] border-blue-200/80 hover:border-[#1746D2]"
              : "bg-emerald-50/70 hover:bg-[#00A86B] border-emerald-200/80 hover:border-[#00A86B]";

            const hoverGlow = isBlue
              ? "hover:shadow-[0_15px_30px_-10px_rgba(23,70,210,0.4)]"
              : "hover:shadow-[0_15px_30px_-10px_rgba(0,168,107,0.4)]";

            const numberColor = isBlue ? "text-[#1746D2]" : "text-[#00A86B]";

            return (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1.5 cursor-default ${cardBg} ${hoverGlow}`}
                {...touchHoverProps}
              >
                <div className={`font-mono text-xs font-extrabold ${numberColor} group-hover:text-[#FFD700] mb-2 transition-colors`}>
                  0{idx + 1}
                </div>
                <h3 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-base md:text-lg font-bold text-slate-900 group-hover:text-white transition-colors mb-1">
                  {stmt.title}
                </h3>
                <p onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="text-xs text-slate-600 group-hover:text-white/90 font-medium transition-colors leading-relaxed">
                  {stmt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
