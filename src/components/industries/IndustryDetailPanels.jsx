import React, { useEffect, useState, useRef } from 'react';

export default function IndustryDetailPanels() {
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

  const industries = [
    {
      title: "Healthcare & Life Sciences",
      desc: "AI systems can support patient insights, wearable intelligence, health monitoring, diagnostics assistance, and smarter clinical workflows.",
      useCases: ["AI-supported diagnostics", "Wearable health intelligence", "Predictive patient insights"],
      capabilities: ["Computer Vision", "Data Intelligence", "Healthcare AI Devices"]
    },
    {
      title: "Manufacturing & Industrial AI",
      desc: "AI can help improve production visibility, quality control, process automation, and equipment reliability.",
      useCases: ["Visual quality inspection", "Predictive maintenance", "Process automation"],
      capabilities: ["Computer Vision", "AI Automation", "Predictive Analytics"]
    },
    {
      title: "Finance & Insurance",
      desc: "AI models can support risk analysis, fraud detection, document workflows, and smarter financial decision-making.",
      useCases: ["Fraud intelligence", "Risk prediction", "Automated document processing"],
      capabilities: ["Data Intelligence", "AI Agents", "Enterprise AI Integration"]
    },
    {
      title: "Retail & E-Commerce",
      desc: "AI can improve personalization, demand planning, customer experience, and digital commerce operations.",
      useCases: ["Recommendation engines", "Customer behavior insights", "Inventory forecasting"],
      capabilities: ["Generative AI", "Data Intelligence", "AI Automation"]
    },
    {
      title: "Education & Learning",
      desc: "AI can support personalized learning, AI tutoring, content automation, and learning performance analytics.",
      useCases: ["AI learning assistants", "Personalized learning paths", "Student performance insights"],
      capabilities: ["Generative AI", "AI Copilots", "Data Intelligence"]
    },
    {
      title: "Smart Cities & IoT",
      desc: "AI-enabled connected systems can support monitoring, sensor intelligence, infrastructure automation, and urban insights.",
      useCases: ["Sensor intelligence", "Smart monitoring", "Automated city systems"],
      capabilities: ["IoT Intelligence", "Data Intelligence", "Enterprise Integration"]
    },
    {
      title: "Logistics & Supply Chain",
      desc: "AI can support route planning, demand forecasting, shipment visibility, and supply chain decision-making.",
      useCases: ["Route optimization", "Demand forecasting", "Real-time tracking intelligence"],
      capabilities: ["Predictive Analytics", "AI Agents", "Data Intelligence"]
    },
    {
      title: "Startups & Digital Businesses",
      desc: "AI-first systems can help founders build MVPs, automate workflows, and scale digital products faster.",
      useCases: ["AI MVP development", "Product automation", "Scalable AI platforms"],
      capabilities: ["AI Product Development", "Generative AI", "Enterprise Software"]
    },
    {
      title: "Enterprise Operations",
      desc: "AI can streamline internal workflows, reporting, decision support, and cross-department automation.",
      useCases: ["Workflow automation", "Internal copilots", "Business reporting automation"],
      capabilities: ["AI Agents", "AI Copilots", "Enterprise AI Integration"]
    },
    {
      title: "Consumer Technology",
      desc: "AI can support smart apps, connected devices, personal assistants, and intelligent user experiences.",
      useCases: ["Smart personal devices", "AI app experiences", "Voice-enabled interaction"],
      capabilities: ["Deep-Tech Products", "Generative AI", "IoT Intelligence"]
    }
  ];

  const activeInd = industries[activeTab];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              INDUSTRY USE CASES
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Industry-Specific AI Possibilities
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            Explore how AI solutions can be shaped around each industry’s workflow, data, and operational needs.
          </p>
        </div>

        {/* Interactive Showcase Layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Left Side: Product Selector Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar mask-edges-mobile">
            {industries.map((ind, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative text-left px-5 py-3 lg:py-4 rounded-xl shrink-0 lg:shrink transition-all duration-300 border ${
                    isActive 
                    ? 'bg-violet-50/50 border-violet-200 shadow-sm' 
                    : 'bg-transparent border-transparent hover:bg-white hover:shadow-sm'
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
                    {ind.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Detail Panel */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.04)] overflow-hidden min-h-[500px] flex flex-col relative">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-50 to-white pointer-events-none rounded-bl-full" />
              
              {/* Product Info */}
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center z-10 relative">
                <div key={activeTab} className="animate-fade-slide-up">
                  
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6">
                    <div className="w-4 h-4 bg-violet-400 rounded-full relative">
                      <div className="absolute inset-0 bg-violet-400 rounded-full blur animate-pulse" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                    {activeInd.title}
                  </h3>
                  <p className="font-body text-slate-600 text-base leading-relaxed mb-10 max-w-2xl">
                    {activeInd.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-display text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        Key Use Cases
                      </h4>
                      <div className="flex flex-col gap-3">
                        {activeInd.useCases.map((uc, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                            <span className="font-body text-sm font-medium text-slate-700">{uc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-display text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        Primary Capabilities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeInd.capabilities.map((cap, i) => (
                          <span key={i} className="inline-block px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full font-mono text-xs font-semibold text-slate-600">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
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
      `}} />
    </section>
  );
}
