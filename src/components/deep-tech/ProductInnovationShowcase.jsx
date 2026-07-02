import React, { useEffect, useState, useRef } from 'react';

export default function ProductInnovationShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const products = [
    {
      title: "AI Smart Glasses",
      desc: "Wearable visual intelligence designed for real-time assistance, information display, and connected user interaction.",
      features: ["Real-time assistance", "Visual interface support", "Connected intelligence"]
    },
    {
      title: "AI Exoskeleton",
      desc: "Assistive human augmentation systems designed to support movement, safety, endurance, and industrial performance.",
      features: ["Movement support", "Safety enhancement", "Performance assistance"]
    },
    {
      title: "Wearable Health Devices",
      desc: "Connected health devices that capture user data, support monitoring, and enable AI-powered health insights.",
      features: ["Health monitoring", "Sensor intelligence", "Preventive insights"]
    },
    {
      title: "AI Earphones",
      desc: "Smart audio devices designed for voice interaction, real-time assistance, communication, and personal productivity.",
      features: ["Voice AI interaction", "Smart communication", "Personal assistance"]
    },
    {
      title: "AI Smartwatch",
      desc: "Wearable intelligence for personal insights, activity tracking, health signals, notifications, and connected experiences.",
      features: ["Activity intelligence", "Health signals", "Connected lifestyle"]
    },
    {
      title: "AI Digital Notepad",
      desc: "AI-powered digital writing and productivity tools for notes, summaries, task capture, and intelligent organization.",
      features: ["Smart note capture", "AI summaries", "Productivity workflows"]
    },
    {
      title: "Smart IoT Devices",
      desc: "Connected devices powered by sensors, automation, cloud systems, and AI-driven decision intelligence.",
      features: ["Sensor networks", "Cloud intelligence", "Automated actions"]
    },
    {
      title: "Healthcare AI Devices",
      desc: "AI-enabled healthcare product concepts designed to support monitoring, diagnostics assistance, and smarter clinical workflows.",
      features: ["Clinical intelligence", "Remote monitoring", "Diagnostic support"]
    }
  ];

  const activeProduct = products[activeTab];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              PRODUCT INNOVATION
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Product Innovation Areas
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            From wearable intelligence to AI-enabled healthcare and smart connected devices, TECH6SENSE AI works across product concepts designed for future-ready digital ecosystems.
          </p>
        </div>

        {/* Interactive Showcase Layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Left Side: Product Selector Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar mask-edges-mobile">
            {products.map((prod, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative text-left px-5 py-3 lg:py-4 rounded-xl shrink-0 lg:shrink transition-all duration-300 border ${
                    isActive 
                    ? 'bg-violet-50/50 border-violet-200 shadow-sm' 
                    : 'bg-transparent border-transparent hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-r-full hidden lg:block" />
                  )}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-full lg:hidden" />
                  )}
                  <span className={`font-display font-bold text-sm lg:text-base whitespace-nowrap lg:whitespace-normal transition-colors ${
                    isActive ? 'text-violet-700' : 'text-slate-600'
                  }`}>
                    {prod.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Product Detail Panel */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.04)] overflow-hidden min-h-[500px] flex flex-col md:flex-row relative">
              
              {/* Product Info */}
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center z-10 relative">
                <div key={activeTab} className="animate-fade-slide-up">
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                    {activeProduct.title}
                  </h3>
                  <p className="font-body text-slate-600 text-base leading-relaxed mb-8">
                    {activeProduct.desc}
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    {activeProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                        <span className="font-body text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Abstract Product Visual */}
              <div className="md:w-1/2 bg-slate-50 relative flex items-center justify-center p-8 border-t md:border-t-0 md:border-l border-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 to-fuchsia-50/30" />
                
                {/* Abstract shape representing the product */}
                <div key={`visual-${activeTab}`} className="relative w-48 h-48 animate-float z-10 flex items-center justify-center">
                  
                  {/* Base geometry changes slightly based on index just to give variety */}
                  <div className={`absolute inset-0 border border-violet-200 rounded-3xl shadow-sm bg-white/50 backdrop-blur-sm transition-all duration-1000 ${activeTab % 2 === 0 ? 'rotate-12' : '-rotate-6'}`} />
                  <div className={`absolute inset-4 border border-fuchsia-200 rounded-full transition-all duration-1000 delay-100 ${activeTab % 3 === 0 ? 'scale-110' : 'scale-90'}`} />
                  
                  {/* Central Core */}
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center relative">
                    <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Floating Labels */}
                  <div className="absolute -top-4 -right-4 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm text-[0.6rem] font-mono font-bold text-violet-600 uppercase tracking-widest whitespace-nowrap">
                    Sys.Active
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-slate-900 px-3 py-1.5 rounded-lg shadow-sm text-[0.6rem] font-mono font-bold text-white uppercase tracking-widest whitespace-nowrap">
                    {activeProduct.title.split(' ')[0]}
                  </div>

                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-edges-mobile { -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); }
        @media (min-width: 1024px) { .mask-edges-mobile { -webkit-mask-image: none; mask-image: none; } }
        
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-up { animation: fadeSlideUp 0.5s ease-out forwards; }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}} />
    </section>
  );
}
