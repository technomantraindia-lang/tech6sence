import React, { useState, useEffect, useRef } from 'react';

const categories = [
  {
    title: "AI Development",
    desc: "Build intelligent AI products, models, agents, and custom software systems designed for real-world business use.",
    services: [
      { title: "AI Product Development", desc: "End-to-end AI product planning, design, development, and deployment.", id: "ai-product-development" },
      { title: "AI Software Development", desc: "Custom AI-powered software systems built around business workflows.", id: "ai-software-development" },
      { title: "Custom AI Model Development", desc: "Tailored machine learning and AI models for specific business needs.", id: "custom-ai-model-development" },
      { title: "AI Agents Development", desc: "Autonomous digital agents that execute tasks and support workflows.", id: "ai-agents-development" },
      { title: "Agentic AI Solutions", desc: "Multi-step AI systems that reason, act, and coordinate across processes.", id: "agentic-ai-solutions" }
    ]
  },
  {
    title: "Automation & Copilots",
    desc: "Automate workflows, build enterprise copilots, create conversational systems, and reduce repetitive manual work.",
    services: [
      { title: "AI Automation for Businesses", desc: "Workflow automation that reduces manual effort and speeds up operations.", id: "ai-automation-for-businesses" },
      { title: "Robotic Process Automation", desc: "Rule-based and AI-assisted automation for repetitive digital tasks.", id: "robotic-process-automation" },
      { title: "AI Copilot Development", desc: "Custom copilots that assist teams with knowledge, tasks, and decisions.", id: "ai-copilot-development" },
      { title: "Generative AI Solutions", desc: "AI systems for content, knowledge, creativity, and business productivity.", id: "generative-ai-solutions" },
      { title: "NLP & Conversational AI", desc: "Language-based AI systems for chat, support, search, and interaction.", id: "nlp-conversational-ai" }
    ]
  },
  {
    title: "Data & Visual Intelligence",
    desc: "Turn business data, images, video, and operational signals into smarter insights, predictions, and decisions.",
    services: [
      { title: "Data Analytics & Business Intelligence", desc: "Dashboards, reports, and insights for smarter business decisions.", id: "data-analytics-business-intelligence" },
      { title: "Machine Learning Development", desc: "ML systems for prediction, classification, optimization, and automation.", id: "machine-learning-development" },
      { title: "Predictive Modeling & Analytics", desc: "Forecasting and intelligence systems for future-ready decisions.", id: "predictive-modeling-analytics" },
      { title: "Computer Vision Development", desc: "Image, video, object, and pattern recognition for real-world use cases.", id: "computer-vision-development" }
    ]
  },
  {
    title: "Enterprise AI & Cloud",
    desc: "Deploy AI securely across cloud, enterprise systems, infrastructure, and operational environments.",
    services: [
      { title: "AI Integration & Cloud Services", desc: "AI integration with cloud platforms, APIs, tools, and business systems.", id: "ai-integration-cloud-services" },
      { title: "AI-as-a-Service", desc: "Scalable AI capabilities delivered as flexible service-based solutions.", id: "ai-as-a-service" },
      { title: "AIOps & MLOps", desc: "AI model deployment, monitoring, optimization, and lifecycle management.", id: "aiops-mlops" },
      { title: "AI Security", desc: "Secure AI architecture, data protection, and risk-aware implementation.", id: "ai-security" },
      { title: "AI Governance Consulting", desc: "Responsible AI planning, compliance awareness, and ethical usage guidance.", id: "ai-governance-consulting" },
      { title: "AI Consulting & Corporate Training", desc: "Strategic AI advisory, implementation guidance, and corporate training programs for teams adopting artificial intelligence.", id: "ai-consulting-corporate-training" }
    ]
  },
  {
    title: "Advanced Tech & Software",
    desc: "Extend AI innovation into connected devices, immersive experiences, digital products, and next-generation platforms.",
    services: [
      { title: "Internet of Things Development", desc: "Connected device systems using sensors, automation, and intelligence.", id: "internet-of-things-development" },
      { title: "Blockchain Development", desc: "Secure decentralized applications, smart contracts, and digital systems.", id: "blockchain-development" },
      { title: "AR/VR Development", desc: "Immersive digital experiences for training, visualization, and engagement.", id: "ar-vr-development" },
      { title: "AI Design", desc: "Human-centered AI interface design, product flows, and smart UX systems.", id: "ai-design" },
      { title: "Game Development", desc: "Interactive digital experiences powered by intelligent design and technology.", id: "game-development" },
      { title: "Enterprise Software Development", desc: "Custom enterprise-grade software platforms designed to support scalable business operations and digital transformation.", id: "enterprise-software-development" }
    ]
  }
];

export default function IntelligentSolutionsEcosystem() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Handle URL hash loading
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const categoryIndex = categories.findIndex(cat => 
          cat.services.some(srv => srv.id === hash)
        );
        if (categoryIndex !== -1) {
          setActiveTab(categoryIndex);
          setActiveAccordion(categoryIndex);
          
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 300);
        }
      }
    };
    
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Intersection Observer for scroll animations
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

  const activeCategory = categories[activeTab];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-6">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              Complete TECH6SENSE Intelligent Solutions
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Explore the Full Intelligent Solutions Ecosystem
          </h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed">
            Beyond AI agents and automation, TECH6SENSE AI delivers a complete range of intelligent technology services — from generative AI and computer vision to enterprise AI integration, cloud deployment, data intelligence, and advanced digital innovation.
          </p>
        </div>

        {/* Desktop Two-Column Layout */}
        <div className={`hidden lg:grid grid-cols-12 gap-12 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Left Side: Vertical Category Tabs */}
          <div className="col-span-4 flex flex-col gap-3">
            {categories.map((cat, i) => {
              const isActive = activeTab === i;
              return (
                <button 
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`group relative text-left px-6 py-5 rounded-2xl border transition-all duration-300 ${
                    isActive 
                    ? 'bg-white border-violet-200 shadow-[0_10px_30px_rgba(124,58,237,0.06)]' 
                    : 'bg-transparent border-transparent hover:bg-white/60 hover:border-slate-200'
                  }`}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b from-violet-500 to-fuchsia-500 transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`} />
                  
                  <h3 className={`font-display text-lg font-bold transition-colors ${
                    isActive ? 'text-violet-700' : 'text-slate-700 group-hover:text-slate-900'
                  }`}>
                    {cat.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Category Content */}
          <div className="col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-[0_4px_20px_rgba(15,23,42,0.02)] min-h-[500px] relative overflow-hidden">
              
              {/* Soft background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 animate-fade-in">
                <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-4">
                  {activeCategory.title}
                </h3>
                <p className="font-body text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl border-b border-slate-100 pb-8">
                  {activeCategory.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {activeCategory.services.map((srv, idx) => (
                    <div 
                      id={srv.id} 
                      key={srv.id} 
                      className="group relative p-5 rounded-2xl border border-transparent hover:border-violet-100 hover:bg-violet-50/30 transition-all duration-300 scroll-mt-32"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-2 h-2 rounded-full bg-violet-400 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                        <div>
                          <h4 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors flex items-center gap-2">
                            {srv.title}
                            <svg className="w-3.5 h-3.5 text-violet-500 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </h4>
                          <p className="font-body text-sm text-slate-600 leading-relaxed">
                            {srv.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className={`lg:hidden flex flex-col gap-4 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {categories.map((cat, i) => {
            const isActive = activeAccordion === i;
            return (
              <div 
                key={i} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive ? 'border-violet-200 shadow-md' : 'border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setActiveAccordion(isActive ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className={`font-display text-lg font-bold ${isActive ? 'text-violet-700' : 'text-slate-800'}`}>
                    {cat.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-violet-100 text-violet-600' : 'bg-slate-50 text-slate-400'}`}>
                    <svg className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isActive ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-8">
                    <p className="font-body text-sm text-slate-600 leading-relaxed mb-6 pb-6 border-b border-slate-100">
                      {cat.desc}
                    </p>
                    <div className="flex flex-col gap-6">
                      {cat.services.map(srv => (
                        <div id={`mobile-${srv.id}`} key={srv.id} className="relative flex items-start gap-4 scroll-mt-24">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                          <div>
                            <h4 className="font-display text-sm font-bold text-slate-900 mb-1">
                              {srv.title}
                            </h4>
                            <p className="font-body text-xs text-slate-600 leading-relaxed">
                              {srv.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </section>
  );
}
