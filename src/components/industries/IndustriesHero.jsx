import React, { useEffect, useState } from 'react';

export default function IndustriesHero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200">
      
      {/* High Quality Technology Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 pointer-events-none"
        style={{ backgroundImage: "url('/industries-hero-bg.jpg')" }}
      />

      {/* Light Gridlines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-100/40 rounded-full blur-[220px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        
        {/* Center-Aligned Hero Block within 1400px Container */}
        <div className={`max-w-[1400px] mx-auto text-center space-y-8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              INDUSTRIES IMPACT
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          
          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-6xl mx-auto">
            Industries Transformed by TECH6SENSE AI
          </h1>

          {/* Sub-headline / Hook */}
          <div className="text-xl sm:text-2xl font-extrabold text-[#1746D2] font-display tracking-wide uppercase max-w-5xl mx-auto">
            AI Solutions Built for Every Industry
          </div>

          {/* 4 Intro Paragraphs (Center Aligned - Wider Max Width) */}
          <div className="font-body text-slate-700 text-base md:text-lg leading-relaxed max-w-6xl mx-auto space-y-5 font-medium text-center">
            <p>
              AI is no longer an experimental technology. It has become the competitive advantage separating market leaders from everyone else.
            </p>
            <p>
              Every industry faces unique operational challenges—from rising costs and labor shortages to inefficient workflows, customer experience gaps, cybersecurity threats, and increasing competition.
            </p>
            <p>
              At TECH6SENSE AI, we design and deploy enterprise-grade Artificial Intelligence solutions that automate operations, optimize decision-making, improve customer experiences, reduce operational costs, and create new revenue opportunities.
            </p>
            <p>
              Our AI experts combine Machine Learning, Generative AI, Computer Vision, NLP, Predictive Analytics, AI Agents, Robotics, and Intelligent Automation to solve real-world business problems across multiple industries.
            </p>
          </div>

          {/* Center-Aligned Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <a 
              href="#explore-industries" 
              className="px-9 py-4 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] text-white font-display text-sm font-extrabold uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Industry Solutions</span>
              <span className="text-lg">→</span>
            </a>

            <a 
              href="#discuss" 
              className="px-9 py-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-slate-200 text-slate-900 font-display text-sm font-bold hover:border-[#1746D2] hover:text-[#1746D2] shadow-sm transition-all"
            >
              Discuss Your Industry Use Case
            </a>
          </div>

          {/* Feature Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
            <span className="text-[#1746D2]">AI Solutions</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="text-[#00A86B]">Product Innovation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Industry Intelligence</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Enterprise Automation</span>
          </div>

        </div>

      </div>
    </section>
  );
}
