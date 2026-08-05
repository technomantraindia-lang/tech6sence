import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const categories = [
  {
    title: "AI Development",
    code: "SYS-01",
    desc: "Build intelligent AI products, models, agents, and custom software systems designed for real-world enterprise use.",
    accent: "#7c3aed",
    accentRgb: "124, 58, 237",
    services: [
      { 
        id: "ai-product-development", 
        title: "AI Product Development", 
        h1: "AI Products Engineered for Market, Not Just for Demos",
        desc: "Most AI products stall between prototype and production. TECH6SENSE AI's product engineering practice closes that gap — taking an AI concept through architecture, model selection, data pipeline design, interface engineering, and scale-testing.",
        cta: "Start Your AI Product Roadmap",
        href: "/services/ai-product-development" 
      },
      { 
        id: "ai-agents-development", 
        title: "AI Agents Development", 
        h1: "Autonomous Agents That Execute, Not Just Assist",
        desc: "TECH6SENSE AI engineers AI agents capable of independently executing multi-step business processes — reasoning across tools, calling APIs, and orchestrating workflows without constant human supervision.",
        cta: "Design Your Autonomous Workforce",
        href: "/services/ai-agents-development" 
      },
      { 
        id: "custom-ai-model-development", 
        title: "Custom AI Model Development", 
        h1: "Models Trained on Your Data, Built for Your Domain",
        desc: "Off-the-shelf models plateau at generic performance. TECH6SENSE AI develops custom AI models — trained, fine-tuned, and evaluated against an organization's proprietary data and domain constraints.",
        cta: "Discuss Your Custom Model Requirements",
        href: "/services/custom-ai-model-development" 
      },
      { 
        id: "ai-software-development", 
        title: "AI Software Development", 
        h1: "Software Engineered Around Intelligence, Not Bolted Onto It",
        desc: "TECH6SENSE AI builds AI-native software — applications architected from the ground up around model inference, data pipelines, and intelligent logic, rather than conventional software with AI features retrofitted afterward.",
        cta: "Build Your AI-Native Application",
        href: "/services/ai-software-development" 
      },
      { 
        id: "agentic-ai-solutions", 
        title: "Agentic AI Solutions", 
        h1: "Agentic Systems Engineered for Complex, Multi-Step Reasoning",
        desc: "Agentic AI extends beyond single-task automation into systems capable of planning, reasoning, and adapting across extended workflows. TECH6SENSE AI architects these systems with layered governance.",
        cta: "Architect Your Agentic AI Strategy",
        href: "/services/agentic-ai-solutions" 
      }
    ]
  },
  {
    title: "Automation & Copilots",
    code: "SYS-02",
    desc: "Automate operational bottlenecks, deploy intelligent enterprise copilots, and leverage generative AI & RAG frameworks.",
    accent: "#d946ef",
    accentRgb: "217, 70, 239",
    services: [
      { 
        id: "ai-automation-for-businesses", 
        title: "AI Automation for Businesses", 
        h1: "Automation Engineered Around Business Outcomes",
        desc: "TECH6SENSE AI designs AI automation systems around specific operational bottlenecks — not generic workflow templates. Every engagement begins with process mapping and ends with a measurable reduction in manual effort.",
        cta: "Map Your Automation Opportunity",
        href: "/services/ai-automation-for-businesses" 
      },
      { 
        id: "robotic-process-automation", 
        title: "Robotic Process Automation", 
        h1: "RPA Engineered for Precision at Enterprise Volume",
        desc: "TECH6SENSE AI implements robotic process automation for high-volume, rules-based processes — engineered for precision, exception-handling, and audit trail requirements.",
        cta: "Identify Your RPA Opportunities",
        href: "/services/robotic-process-automation" 
      },
      { 
        id: "ai-copilot-development", 
        title: "AI Copilot Development (Smart Assistants & Chatbots)", 
        h1: "Copilots Built to Work Inside Your Systems, Not Beside Them",
        desc: "TECH6SENSE AI engineers AI copilots and conversational assistants that integrate directly with internal knowledge bases, CRM, and enterprise systems.",
        cta: "Design Your Enterprise Copilot",
        href: "/services/ai-copilot-development" 
      },
      { 
        id: "generative-ai-solutions", 
        title: "Generative AI Solutions", 
        h1: "Generative AI Built for Enterprise Rigor, Not Novelty",
        desc: "Generative AI's business value depends entirely on how it's engineered. TECH6SENSE AI builds generative systems with the guardrails, evaluation frameworks, and domain grounding required for enterprise deployment.",
        cta: "Explore Enterprise GenAI Solutions",
        href: "/services/generative-ai-solutions" 
      },
      { 
        id: "nlp-conversational-ai", 
        title: "Natural Language Processing & Conversational AI", 
        h1: "Language Intelligence Engineered for Enterprise Accuracy",
        desc: "TECH6SENSE AI builds NLP and conversational AI systems — sentiment analysis, document understanding, multilingual processing, and dialogue systems.",
        cta: "Build Your NLP Solution",
        href: "/services/nlp-conversational-ai" 
      },
      { 
        id: "retrieval-augmented-generation", 
        title: "Retrieval-Augmented Generation (RAG)", 
        h1: "Generative AI, Grounded in Your Enterprise's Own Knowledge",
        desc: "Generic generative AI hallucinates when it lacks grounding. TECH6SENSE AI builds retrieval-augmented generation systems that connect generative models directly to an organization's verified knowledge base.",
        cta: "Ground Your Generative AI in Real Knowledge",
        href: "/services/retrieval-augmented-generation" 
      }
    ]
  },
  {
    title: "Data & Visual Intelligence",
    code: "SYS-03",
    desc: "Transform enterprise data, machine learning pipelines, predictive forecasting models, and computer vision systems into actionable intelligence.",
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    services: [
      { 
        id: "data-analytics-business-intelligence", 
        title: "Data Analytics & Business Intelligence", 
        h1: "Analytics Systems Built for Decisions, Not Just Dashboards",
        desc: "Dashboards without decision-relevance are noise. TECH6SENSE AI builds data analytics and BI systems architected around specific decisions an organization needs to make faster.",
        cta: "Build Your Analytics Infrastructure",
        href: "/services/data-analytics-business-intelligence" 
      },
      { 
        id: "machine-learning-development", 
        title: "Machine Learning Development Services", 
        h1: "Machine Learning Systems Engineered for Production Reliability",
        desc: "TECH6SENSE AI builds machine learning systems designed for the full lifecycle — data preparation, model development, validation, deployment, and ongoing monitoring.",
        cta: "Start Your ML Development Project",
        href: "/services/machine-learning-development" 
      },
      { 
        id: "predictive-modeling-analytics", 
        title: "Predictive Modelling Analytics", 
        h1: "Predictive Models Built to Forecast What Matters to the Business",
        desc: "TECH6SENSE AI builds predictive analytics models designed around specific business forecasting needs — demand, risk, churn, or operational failure.",
        cta: "Build Your Predictive Analytics Model",
        href: "/services/predictive-modeling-analytics" 
      },
      { 
        id: "computer-vision-development", 
        title: "Computer Vision Development Services", 
        h1: "Computer Vision Systems Built for Real-World Visual Complexity",
        desc: "TECH6SENSE AI engineers computer vision systems — object detection, quality inspection, facial and image recognition — trained to perform reliably against real-world visual variability.",
        cta: "Explore Computer Vision Applications",
        href: "/services/computer-vision-development" 
      }
    ]
  },
  {
    title: "Enterprise AI & Cloud",
    code: "SYS-04",
    desc: "Deploy AI across cloud environments, AIaaS, MLOps lifecycle pipelines, AI security firewalls, and regulatory governance frameworks.",
    accent: "#4f46e5",
    accentRgb: "79, 70, 229",
    services: [
      { 
        id: "ai-integration-cloud-services", 
        title: "AI Integration and Cloud Services", 
        h1: "AI Integration Built on Cloud Infrastructure That Scales",
        desc: "Deploying AI is only as strong as the infrastructure underneath it. TECH6SENSE AI integrates AI models and systems into existing enterprise environments — architecting cloud infrastructure across major providers.",
        cta: "Plan Your AI Cloud Integration",
        href: "/services/ai-integration-cloud-services" 
      },
      { 
        id: "ai-as-a-service", 
        title: "AI-as-a-Service (AIaaS)", 
        h1: "Enterprise AI Capability, Delivered as a Service",
        desc: "TECH6SENSE AI's AIaaS model gives organizations access to production-grade AI infrastructure, models, and tooling on a scalable, consumption-based basis.",
        cta: "Access AI Capability On-Demand",
        href: "/services/ai-as-a-service" 
      },
      { 
        id: "aiops-mlops", 
        title: "AIOps and MLOps", 
        h1: "Operational Discipline for AI and ML Systems in Production",
        desc: "Models degrade, pipelines break, and infrastructure drifts. TECH6SENSE AI builds AIOps and MLOps practices — continuous integration, deployment, monitoring, and retraining pipelines.",
        cta: "Strengthen Your AI Operations Pipeline",
        href: "/services/aiops-mlops" 
      },
      { 
        id: "ai-security", 
        title: "AI Security", 
        h1: "Security Engineered for the Unique Risks of AI Systems",
        desc: "AI systems introduce risk vectors conventional cybersecurity wasn't built for — prompt injection, model extraction, data leakage through inference, and adversarial manipulation.",
        cta: "Assess Your AI Security Exposure",
        href: "/services/ai-security" 
      },
      { 
        id: "ai-governance-consulting", 
        title: "AI Governance Consulting Services", 
        h1: "Governance Frameworks That Withstand Regulatory Scrutiny",
        desc: "As AI regulation matures globally, governance can no longer be an afterthought. TECH6SENSE AI designs governance frameworks built to withstand scrutiny from regulators, auditors, and boards.",
        cta: "Assess Your AI Governance Maturity",
        href: "/services/ai-governance-consulting" 
      },
      { 
        id: "ai-consulting-corporate-training", 
        title: "AI Consulting and Corporate Training", 
        h1: "Strategy and Capability-Building for Organizations Serious About AI",
        desc: "TECH6SENSE AI's consulting practice helps leadership teams define a credible AI roadmap, while its corporate training programs build internal literacy and technical capability.",
        cta: "Book an AI Strategy Session",
        href: "/services/ai-consulting-corporate-training" 
      }
    ]
  },
  {
    title: "Advanced Tech & Software",
    code: "SYS-05",
    desc: "Extend technology capabilities across IoT sensor networks, enterprise blockchain, immersive AR/VR simulation, AI UX design, and enterprise software.",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    services: [
      { 
        id: "internet-of-things-development", 
        title: "Internet of Things (IoT) Development", 
        h1: "IoT Systems That Turn Physical Operations into Real-Time Intelligence",
        desc: "TECH6SENSE AI designs IoT architectures that connect physical devices and sensors to enterprise data and AI systems — transforming physical operations into real-time, actionable intelligence.",
        cta: "Connect Your Operations with IoT",
        href: "/services/internet-of-things-development" 
      },
      { 
        id: "blockchain-development", 
        title: "Blockchain Development", 
        h1: "Blockchain Engineering for Enterprises That Need Trust by Design",
        desc: "TECH6SENSE AI builds blockchain systems for use cases where trust, transparency, and immutability are structural requirements — from smart contract engineering to enterprise dApps.",
        cta: "Explore Blockchain for Your Business",
        href: "/services/blockchain-development" 
      },
      { 
        id: "ar-vr-development", 
        title: "Virtual Reality (VR) & Augmented Reality (AR)", 
        h1: "Immersive Technology Engineered for Enterprise Use Cases",
        desc: "Beyond entertainment, AR and VR are becoming core enterprise tools — for training simulation, spatial visualization, and immersive customer engagement.",
        cta: "Explore AR/VR for Your Enterprise",
        href: "/services/ar-vr-development" 
      },
      { 
        id: "ai-design", 
        title: "AI Design", 
        h1: "Design Built for How Humans Actually Interact with AI",
        desc: "AI interfaces fail when they treat intelligent systems like conventional software. TECH6SENSE AI's design practice is built specifically around AI-native interaction patterns.",
        cta: "Design Your AI User Experience",
        href: "/services/ai-design" 
      },
      { 
        id: "enterprise-software-development", 
        title: "Enterprise Software Development", 
        h1: "Enterprise Software Engineered for Scale, Security, and Longevity",
        desc: "TECH6SENSE AI builds enterprise software systems designed to withstand operational complexity, security requirements, and regulatory scrutiny — architected for a multi-year lifecycle.",
        cta: "Discuss Your Enterprise Software Needs",
        href: "/services/enterprise-software-development" 
      }
    ]
  }
];

function ServiceCard({ srv, accent, accentRgb }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  return (
    <Link
      ref={cardRef}
      onMouseMove={handleMouseMove}
      to={srv.href}
      id={srv.id}
      className="group relative p-7 rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 overflow-hidden flex flex-col justify-between"
    >
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 160px at var(--mx, -99px) var(--my, -99px), rgba(${accentRgb}, 0.07), transparent 70%)`
        }}
      />

      <div className="relative z-10">
        <span className="inline-block font-mono text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 mb-3">
          {srv.title}
        </span>
        
        <h4 className="font-display text-base font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-slate-950">
          {srv.h1}
        </h4>
        
        <p className="font-body text-xs text-slate-600 leading-relaxed font-medium mb-6">
          {srv.desc}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="font-display text-xs font-bold transition-all group-hover:translate-x-1" style={{ color: accent }}>
          {srv.cta}
        </span>
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{ color: accent }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export default function IntelligentSolutionsEcosystem() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const tabsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam !== null) {
      const tabIdx = parseInt(tabParam, 10);
      if (!isNaN(tabIdx) && tabIdx >= 0 && tabIdx < categories.length) {
        setActiveTab(tabIdx);
        setActiveAccordion(tabIdx);
      }
    }

    if (location.hash === '#ecosystem') {
      setTimeout(() => {
        const el = document.getElementById('ecosystem');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const activeCategory = categories[activeTab];

  return (
    <section id="ecosystem" className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden border-b border-slate-200/80">
      <div className="mx-auto max-w-[90rem] px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-violet-600">
              SERVICES PRACTICE LINES
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full" />
          </div>
          
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-tight">
            End-to-End Artificial Intelligence & IT Lifecycle Management
          </h2>
          
          <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Explore all 26 specialized AI & IT practice lines. Click any capability to view full architecture specifications and roadmap roadmaps.
          </p>
        </div>

        {/* Tab Switcher for Categories */}
        <div ref={tabsRef} className="hidden md:flex flex-row flex-nowrap items-center justify-center gap-2 lg:gap-3 bg-white p-2.5 rounded-3xl border border-slate-200 shadow-sm w-max max-w-full mx-auto mb-12 overflow-x-auto">
          {categories.map((cat, i) => {
            const isActive = activeTab === i;
            return (
              <button 
                key={i}
                onClick={() => {
                  setActiveTab(i);
                  setActiveAccordion(i);
                }}
                className={`px-5 py-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-2 relative ${
                  isActive 
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md' 
                    : 'bg-transparent border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className="font-mono text-[0.65rem] font-bold opacity-60 uppercase">{cat.code}</span>
                <span className="font-display text-xs lg:text-sm font-bold">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Details & Grid Panel - Desktop */}
        <div className="hidden md:block">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 lg:p-12 shadow-sm relative overflow-hidden">
            
            <div className="mb-10 border-b border-slate-100 pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-3xl">
                <span className="font-mono text-xs font-bold text-violet-600 uppercase tracking-widest mb-2 block">
                  {activeCategory.code} PRACTICE LINE CATEGORY
                </span>
                <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-3">
                  {activeCategory.title}
                </h3>
                <p className="font-body text-slate-600 text-base leading-relaxed font-medium">
                  {activeCategory.desc}
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.services.map((srv) => (
                <ServiceCard 
                  key={srv.id} 
                  srv={srv} 
                  accent={activeCategory.accent} 
                  accentRgb={activeCategory.accentRgb} 
                />
              ))}
            </div>

          </div>
        </div>

        {/* Mobile Accordion View */}
        <div className="md:hidden flex flex-col gap-4">
          {categories.map((cat, i) => {
            const isActive = activeAccordion === i;
            return (
              <div 
                key={i} 
                className={`bg-white rounded-2xl border transition-all ${
                  isActive ? 'border-slate-300 shadow-md' : 'border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setActiveAccordion(isActive ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div>
                    <span className="font-mono text-[0.65rem] font-bold text-violet-600 uppercase block mb-1">{cat.code}</span>
                    <h3 className="font-display text-base font-bold text-slate-900">{cat.title}</h3>
                  </div>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${isActive ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isActive && (
                  <div className="px-5 pb-6 border-t border-slate-100 pt-4 flex flex-col gap-4">
                    {cat.services.map(srv => (
                      <Link 
                        key={srv.id} 
                        to={srv.href}
                        className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex flex-col justify-between"
                      >
                        <div>
                          <h4 className="font-display text-sm font-bold text-slate-900 mb-1">{srv.h1}</h4>
                          <p className="font-body text-xs text-slate-600 mb-3">{srv.desc}</p>
                        </div>
                        <span className="font-display text-xs font-bold text-violet-600 flex items-center gap-1">
                          {srv.cta} &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
