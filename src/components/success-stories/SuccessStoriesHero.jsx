import React from 'react';

export default function SuccessStoriesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 font-body">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 pointer-events-none"
        style={{ backgroundImage: `url('/industries-hero-bg.jpg')` }}
      />

      {/* Ambient Gradient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1746D2]/25 rounded-full blur-[140px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#00A86B]/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Line-Flanked Title Badge */}
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-8 md:w-12 h-[2px] bg-[#00A86B]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-[#00A86B]">
              TECH6SENSE AI – Global Clients Success Stories
            </span>
            <div className="w-8 md:w-12 h-[2px] bg-[#00A86B]" />
          </div>
          
          {/* Main Hero Headline */}
          <h1 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold text-white leading-[1.15] mb-8 tracking-tight max-w-5xl mx-auto">
            Transforming Businesses Worldwide <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-blue-400 to-[#00A86B]">
              Through Enterprise AI Innovation
            </span>
          </h1>
          
          {/* Description Paragraphs */}
          <div className="font-body text-slate-300 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto font-normal space-y-6">
            <p>
              At TECH6SENSE AI, we partner with organizations across healthcare, banking, manufacturing, retail, logistics, education, government, and emerging technology sectors to build intelligent AI solutions that solve real-world business challenges.
            </p>
            <p>
              Every project begins with understanding business objectives—not just implementing technology. From Generative AI and AI Agents to predictive analytics and enterprise automation, our solutions help organizations reduce costs, increase productivity, improve customer experiences, and accelerate digital transformation.
            </p>
          </div>



        </div>
      </div>
    </section>
  );
}
