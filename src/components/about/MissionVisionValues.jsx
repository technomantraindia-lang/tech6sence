import React from 'react';

export default function MissionVisionValues() {
  const missionItems = [
    { title: "Enterprises", desc: "Access PhD-level AI expertise to drive measurable business ROI." },
    { title: "Founders", desc: "Get complete technical infrastructure to focus purely on customer growth." },
    { title: "Ecosystem", desc: "Build connections between investors and innovators globally." },
    { title: "Society", desc: "Deploy AI that improves healthcare, agriculture, and daily life." }
  ];

  const visionItems = [
    { title: "Accessible AI", desc: "Every scale of enterprise leveraging AI to compete globally." },
    { title: "India Leading", desc: "Catalyzing intellectual property and product innovation." },
    { title: "Democratized", desc: "Empowering domain experts to build without technical barriers." },
    { title: "Humanity First", desc: "Focusing technology outcomes on long-term societal progress." }
  ];

  const differentiators = [
    {
      title: "PhD Rigor & Business ROI",
      desc: "We bridge the gap between academic depth and practical business metrics, ensuring AI models drive real financial returns."
    },
    {
      title: "Hardware + Software Edge",
      desc: "We build the full stack—developing advanced AI models while manufacturing custom smart hardware and edge IoT sensors."
    },
    {
      title: "Entrepreneur-First Support",
      desc: "Through our Visionary Founders program, we provide startup infrastructure and scale support without taking equity."
    },
    {
      title: "Ecosystem Network",
      desc: "Connect directly to the Business Brains network of 2,000+ founders, investors, and enterprise leaders."
    }
  ];

  const values = [
    { title: "Excellence", desc: "Academic rigor applied to practical production code." },
    { title: "Integrity", desc: "Transparency and honest advice, even if it means smaller contracts." },
    { title: "Impact", desc: "We focus on transferring capabilities so clients remain independent." },
    { title: "Pragmatism", desc: "We prioritize proven, reliable systems over temporary hype." },
    { title: "Partnership", desc: "We succeed through deep collaboration, not vendor relationships." },
    { title: "Long-Term", desc: "Decisions optimized for sustainability and multi-year trust." }
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white text-slate-800 border-t border-slate-100">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* ─── 1. MISSION & VISION (MINIMAL SPLIT) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 pb-20 border-b border-slate-100/80">
          {/* Mission */}
          <div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1746D2]">Our Mission</span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mt-3 mb-8">
              Democratize advanced AI and build a thriving ecosystem.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {missionItems.map((item, idx) => (
                <div key={idx} className="border-l-[3px] border-[#1746D2]/30 pl-5 py-1">
                  <h4 className="text-sm md:text-base font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#00A86B]">Our Vision</span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mt-3 mb-8">
              Establish India as a hub for global AI IP and products.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {visionItems.map((item, idx) => (
                <div key={idx} className="border-l-[3px] border-[#00A86B]/30 pl-5 py-1">
                  <h4 className="text-sm md:text-base font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 2. WHAT MAKES US DIFFERENT (CLEAN GRID) ─── */}
        <div className="mb-24 pb-20 border-b border-slate-100/80">
          <div className="mb-16">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">Why TECH6SENSE</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="group">
                <span className="text-xs md:text-sm font-bold text-[#1746D2] tracking-wider">0{idx + 1}.</span>
                <h3 className="font-display text-lg md:text-xl font-bold text-slate-900 mt-3 mb-4">{diff.title}</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3. OUR VALUES (MINIMAL CARDS) ─── */}
        <div>
          <div className="mb-16">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">Core Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-slate-50/80 transition-colors duration-250">
                <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1746D2]" />
                  {v.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-3">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
