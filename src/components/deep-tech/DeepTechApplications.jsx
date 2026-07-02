import React, { useEffect, useState, useRef } from 'react';

export default function DeepTechApplications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const applications = [
    { 
      title: "Healthcare & Wellness", 
      desc: "Wearable health devices, monitoring systems, diagnostics assistance, and patient-focused intelligence.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    { 
      title: "Industrial Safety", 
      desc: "AI exoskeletons, worker support systems, inspection devices, and field safety intelligence.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      title: "Smart Consumer Tech", 
      desc: "AI earphones, smartwatches, digital notepads, and productivity-focused personal devices.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "Enterprise Operations", 
      desc: "IoT devices, smart dashboards, connected workflows, and automation-driven product ecosystems.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      title: "Education & Productivity", 
      desc: "AI digital tools for note-taking, learning support, communication, and knowledge organization.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      title: "Smart Cities & Systems", 
      desc: "Sensor-enabled devices, monitoring networks, urban intelligence, and connected infrastructure.",
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              APPLICATIONS
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Where Deep-Tech Products Create Impact
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            TECH6SENSE AI product concepts are designed for practical environments where intelligent devices, connected systems, and AI-powered interfaces can improve decisions, safety, productivity, and user experiences.
          </p>
        </div>

        {/* Application Network Grid */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Background Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full text-violet-100 hidden md:block" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 33% 20% L 66% 20% M 33% 50% L 66% 50% M 33% 80% L 66% 80%" />
            <path d="M 33% 20% L 33% 80% M 66% 20% L 66% 80%" />
            {isVisible && (
              <>
                <path d="M 33% 20% L 66% 20%" stroke="url(#violet-gradient)" strokeWidth="2" className="animate-[drawLine_2s_ease-out_forwards]" strokeDasharray="1000" strokeDashoffset="1000" />
                <path d="M 33% 20% L 33% 80%" stroke="url(#violet-gradient)" strokeWidth="2" className="animate-[drawLine_3s_ease-out_forwards]" strokeDasharray="1000" strokeDashoffset="1000" />
              </>
            )}
            <defs>
              <linearGradient id="violet-gradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {applications.map((app, i) => (
              <div 
                key={i} 
                className={`group relative bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-500 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_8px_30px_rgba(124,58,237,0.06)] ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${200 + (i * 100)}ms` }}
              >
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-fuchsia-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Hover Underline */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all">
                    {app.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">
                    {app.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </section>
  );
}
