import React, { useEffect, useState, useRef } from 'react';

export default function ConsultationOptions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const options = [
    {
      title: "AI Strategy Consultation",
      desc: "For businesses that want to understand where AI can create value, improve workflows, or support digital transformation.",
      bestFor: "Business owners, enterprises, decision-makers",
      colSpan: "lg:col-span-6"
    },
    {
      title: "AI Product Discussion",
      desc: "For founders and teams planning to build AI products, software platforms, copilots, or intelligent digital systems.",
      bestFor: "Founders, product teams, startups",
      colSpan: "lg:col-span-6"
    },
    {
      title: "Automation & AI Agents",
      desc: "For companies that want to automate operations, reduce manual work, connect tools, and create smarter workflows.",
      bestFor: "Operations teams, sales teams, service teams",
      colSpan: "lg:col-span-4"
    },
    {
      title: "Deep-Tech Product Innovation",
      desc: "For teams exploring AI wearables, smart devices, healthcare AI devices, IoT systems, or connected product ideas.",
      bestFor: "Product innovators, hardware teams, healthcare innovators",
      colSpan: "lg:col-span-4"
    },
    {
      title: "Ecosystem & Partnership",
      desc: "For founders, investors, collaborators, and growth partners who want to connect with the TECH6SENSE AI ecosystem.",
      bestFor: "Founders, investors, business partners",
      colSpan: "lg:col-span-4"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              CONSULTATION OPTIONS
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Choose the Right Conversation
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            Whether you are planning an AI product, exploring automation, building a deep-tech idea, or looking to connect with the TECH6SENSE AI ecosystem, start with the conversation that matches your goal.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10">
          {options.map((opt, i) => (
            <div 
              key={i} 
              className={`group relative bg-white border border-slate-200 p-8 rounded-3xl hover:border-violet-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.06)] hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden md:col-span-1 ${opt.colSpan} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + (i * 100)}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-50 to-white rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-violet-50 transition-colors">
                    <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-violet-300 group-hover:bg-violet-600 transition-all duration-300">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">
                  {opt.title}
                </h3>
                
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-8">
                  {opt.desc}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-100 flex flex-col gap-1">
                <span className="font-display text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                  Best for:
                </span>
                <span className="font-body text-sm font-medium text-slate-700">
                  {opt.bestFor}
                </span>
              </div>

              {/* Hover Underline */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-400 to-fuchsia-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
