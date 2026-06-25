import React from 'react';

const CARDS_DATA = [
  {
    title: 'AI Agents',
    description: 'Autonomous assistants that manage complex tasks, execute workflows, and drive intelligent decision-making at scale.',
    span: 'md:col-span-2',
    gradient: 'from-indigo-500/10 to-violet-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-indigo-400" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: 'Computer Vision',
    description: 'Advanced image, video, and pattern recognition systems designed for precision in real-world environments.',
    span: 'md:col-span-1',
    gradient: 'from-teal-500/10 to-emerald-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-teal-400" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'AI Automation',
    description: 'Intelligent automation systems that seamlessly connect disparate processes, reducing manual friction.',
    span: 'md:col-span-1',
    gradient: 'from-purple-500/10 to-fuchsia-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-purple-400" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: 'Generative AI',
    description: 'Bespoke models for generating content, synthesizing data, and powering intelligent knowledge systems.',
    span: 'md:col-span-1',
    gradient: 'from-pink-500/10 to-rose-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-pink-400" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: 'IoT Intelligence',
    description: 'Transforming sensor data into actionable insights through embedded intelligence and real-time processing.',
    span: 'md:col-span-1',
    gradient: 'from-amber-500/10 to-orange-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-amber-400" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise AI Software',
    description: 'Highly scalable, deeply integrated AI platforms designed from the ground up for measurable business transformation.',
    span: 'md:col-span-3',
    gradient: 'from-cyan-500/10 to-blue-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  }
];

export default function IntelligenceStack() {
  return (
    <section className="relative w-full bg-[#0B0B14] overflow-hidden py-24 md:py-32 z-25">
      {/* Dark subtle backgrounds blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[40vh] bg-indigo-500/20 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="max-w-2xl mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="font-body text-xs font-bold tracking-[0.3em] text-violet-400 uppercase">
              CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Intelligence Stack
          </h2>
          <p className="font-body text-slate-400 mt-6 text-lg leading-relaxed">
            Every layer of AI, automation, and deep-tech innovation elegantly connected into a single, cohesive enterprise ecosystem.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {CARDS_DATA.map((card, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] hover:shadow-[0_20px_40px_rgba(124,58,237,0.06)] hover:-translate-y-1.5 ${card.span} flex flex-col justify-between`}
            >
              {/* Soft abstract background gradient for each card */}
              <div className={`absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br ${card.gradient} rounded-full blur-[80px] transition-transform duration-700 group-hover:scale-150 group-hover:opacity-100 opacity-60 pointer-events-none`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shadow-sm mb-8 transition-all duration-500 group-hover:scale-105 group-hover:bg-violet-500/10 group-hover:border-violet-500/20">
                  {card.icon}
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="font-body text-slate-400 leading-relaxed max-w-md text-[0.95rem]">
                  {card.description}
                </p>
              </div>

              {/* Minimal aesthetic line or 'learn more' accent */}
              <div className="relative z-10 mt-12 flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="w-8 h-px bg-violet-400/50" />
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-violet-400">System Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
