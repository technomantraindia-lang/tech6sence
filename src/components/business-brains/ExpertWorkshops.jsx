import React from 'react';

export default function ExpertWorkshops() {
  const blocks = [
    {
      title: "Expert Workshop Series",
      desc: "Deep-dive learning sessions on critical topics for building AI companies.",
      icon: (
        <svg className="w-8 h-8 text-[#1746D2]" fill="currentColor" viewBox="0 0 576 512">
          <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"/>
        </svg>
      ),
      tags: ["Technical architecture", "Business strategy", "Legal & financial"]
    },
    {
      title: "Private Online Platform",
      desc: "Members-only digital community for continuous engagement between events.",
      icon: (
        <svg className="w-8 h-8 text-[#1746D2]" fill="currentColor" viewBox="0 0 448 512">
          <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"/>
        </svg>
      ),
      tags: ["Discussion forums", "Deal room", "Resource library"]
    }
  ];

  return (
    <section className="relative bg-white text-slate-900 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {blocks.map((block, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 md:p-14 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-shadow duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {block.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {block.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed mb-10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {block.desc}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {block.tags.map((tag, i) => (
                <div 
                  key={i}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
