import React from 'react';

export default function BusinessBrainsExperience() {
  const experiences = [
    {
      id: 1,
      title: "Executive Leadership Forums",
      desc: "Confidential executive leadership forums designed for C-suite alignment, corporate transformation, and strategic growth.",
      featured: true
    },
    {
      id: 2,
      title: "Investor Circle",
      desc: "Closed-door sovereign investor syndicates and co-investment capital matching for high-yield technology allocations.",
      featured: true
    },
    {
      id: 3,
      title: "Founder Council",
      desc: "Peer council sessions for high-growth tech founders navigating venture scaling, cap table strategy, and exit pathways.",
      featured: false
    },
    {
      id: 4,
      title: "Global Partnership Exchange",
      desc: "Cross-border venture alliances, international supply chains, and enterprise market entry facilitation.",
      featured: false
    },
    {
      id: 5,
      title: "Innovation Intelligence",
      desc: "Deep-tech evaluation reports, competitive landscape monitoring, and proprietary AI research from TECH6SENSE AI.",
      featured: false
    },
    {
      id: 6,
      title: "Private Executive Retreats",
      desc: "Intimate high-level retreats combining strategic focus, wellness, and relationship building in sovereign destinations.",
      featured: false
    },
    {
      id: 7,
      title: "Annual Global Summit",
      desc: "Flagship international gathering featuring keynotes, closed-door deal rooms, award ceremonies, and gala networking dinners.",
      featured: false
    },
    {
      id: 8,
      title: "Leadership Think Tanks",
      desc: "High-level policy, AI governance, and industry transformation mastermind circles shaping global benchmarks.",
      featured: false
    }
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 md:py-32 border-b border-slate-200 overflow-hidden">
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-[0.25em] mb-4 block"
          >
            THE EXPERIENCE
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950"
          >
            An Experience Designed for Exceptional Leaders
          </h2>
        </div>

        {/* Grid with Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className={`p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                exp.featured 
                  ? 'border-2 border-emerald-500 bg-white shadow-md' 
                  : 'border border-slate-200 bg-white/80 hover:border-emerald-500/40 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-xs uppercase font-bold tracking-widest ${exp.featured ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {exp.featured ? 'CORE INITIATIVE' : `EXPERIENCE 0${exp.id}`}
                  </span>
                  {exp.featured && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 
                  className={`text-xl font-bold mb-3 transition-colors ${exp.featured ? 'text-slate-950' : 'text-slate-900 group-hover:text-emerald-600'}`}
                >
                  {exp.title}
                </h3>

                <p 
                  className="text-slate-600 text-sm leading-relaxed font-normal"
                >
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
