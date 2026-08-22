import React from 'react';

export default function BusinessBrainsExperience() {
  const experiences = [
    {
      id: 1,
      title: "Executive Leadership Forums",
      desc: "Confidential discussions on business strategy, innovation, economic trends, and leadership.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]"
    },
    {
      id: 2,
      title: "Investor Circle",
      desc: "Private opportunities to connect investors with visionary entrepreneurs and scalable businesses.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.25)]"
    },
    {
      id: 3,
      title: "Founder Council",
      desc: "Peer-to-peer collaboration among founders solving similar growth challenges.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]"
    },
    {
      id: 4,
      title: "Global Partnership Exchange",
      desc: "Strategic introductions between organizations exploring joint ventures, acquisitions, expansion, and innovation.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.25)]"
    },
    {
      id: 5,
      title: "Innovation Intelligence",
      desc: "Exclusive insights into artificial intelligence, emerging technologies, investment trends, and the future of global industries.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]"
    },
    {
      id: 6,
      title: "Private Executive Retreats",
      desc: "Invitation-only gatherings designed to strengthen trusted relationships among members.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.25)]"
    },
    {
      id: 7,
      title: "Annual Global Summit",
      desc: "A flagship experience where members from across the world come together to exchange ideas, celebrate achievements, and shape the future.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)]",
      hoverBg: "hover:bg-[#1746D2] hover:border-[#1746D2] hover:shadow-[0_20px_40px_rgba(23,70,210,0.25)]"
    },
    {
      id: 8,
      title: "Leadership Think Tanks",
      desc: "Small, confidential sessions focused on solving real business challenges through collective intelligence.",
      restShadow: "shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)]",
      hoverBg: "hover:bg-[#00A86B] hover:border-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.25)]"
    }
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/50 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* MAIN SECTION TITLE & INTRO */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE BUSINESS BRAINS EXPERIENCE
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            An Experience Designed for Exceptional Leaders
          </h2>

          <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-display tracking-wide">
            Membership extends far beyond access to a network.
          </div>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            It provides entry into an ecosystem of influence.
          </p>
        </div>

        {/* 8 EXPERIENCES GRID (4-COLUMN RESPONSIVE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className={`p-8 rounded-3xl bg-white border border-slate-200/90 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group ${exp.restShadow} ${exp.hoverBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#1746D2] group-hover:text-white uppercase tracking-widest transition-colors">
                    0{exp.id}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00A86B] group-hover:bg-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-3 font-display transition-colors">
                  {exp.title}
                </h3>

                <p className="text-slate-600 group-hover:text-white text-xs md:text-sm leading-relaxed font-normal text-justify md:text-left transition-colors">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
