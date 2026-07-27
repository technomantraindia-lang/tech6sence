import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "AI Development",
    code: "SYS-01",
    desc: "Build intelligent AI products, models, agents, and custom software systems designed for real-world business use.",
    accent: "#7c3aed",
    accentRgb: "124, 58, 237",
    services: [
      { title: "AI Product Development", desc: "End-to-end AI product planning, design, development, and deployment.", id: "ai-product-development", href: "/ai-agents" },
      { title: "AI Software Development", desc: "Custom AI-powered software systems built around business workflows.", id: "ai-software-development", href: "/ai-agents" },
      { title: "Custom AI Model Development", desc: "Tailored machine learning and AI models for specific business needs.", id: "custom-ai-model-development", href: "/ai-agents" },
      { title: "AI Agents Development", desc: "Autonomous digital agents that execute tasks and support workflows.", id: "ai-agents-development", href: "/ai-agents" },
      { title: "Agentic AI Solutions", desc: "Multi-step AI systems that reason, act, and coordinate across processes.", id: "agentic-ai-solutions", href: "/ai-agents" }
    ]
  },
  {
    title: "Automation & Copilots",
    code: "SYS-02",
    desc: "Automate workflows, build enterprise copilots, create conversational systems, and reduce repetitive manual work.",
    accent: "#d946ef",
    accentRgb: "217, 70, 239",
    services: [
      { title: "AI Automation for Businesses", desc: "Workflow automation that reduces manual effort and speeds up operations.", id: "ai-automation-for-businesses", href: "/gen-ai" },
      { title: "Robotic Process Automation", desc: "Rule-based and AI-assisted automation for repetitive digital tasks.", id: "robotic-process-automation", href: "/gen-ai" },
      { title: "AI Copilot Development", desc: "Custom copilots that assist teams with knowledge, tasks, and decisions.", id: "ai-copilot-development", href: "/gen-ai" },
      { title: "Generative AI Solutions", desc: "AI systems for content, knowledge, creativity, and business productivity.", id: "generative-ai-solutions", href: "/gen-ai" },
      { title: "NLP & Conversational AI", desc: "Language-based AI systems for chat, support, search, and interaction.", id: "nlp-conversational-ai", href: "/gen-ai" }
    ]
  },
  {
    title: "Data & Visual Intelligence",
    code: "SYS-03",
    desc: "Turn business data, images, video, and operational signals into smarter insights, predictions, and decisions.",
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    services: [
      { title: "Data Analytics & Business Intelligence", desc: "Dashboards, reports, and insights for smarter business decisions.", id: "data-analytics-business-intelligence", href: "/data-intelligence" },
      { title: "Machine Learning Development", desc: "ML systems for prediction, classification, optimization, and automation.", id: "machine-learning-development", href: "/data-intelligence" },
      { title: "Predictive Modeling & Analytics", desc: "Forecasting and intelligence systems for future-ready decisions.", id: "predictive-modeling-analytics", href: "/data-intelligence" },
      { title: "Computer Vision Development", desc: "Image, video, object, and pattern recognition for real-world use cases.", id: "computer-vision-development", href: "/computer-vision" }
    ]
  },
  {
    title: "Enterprise AI & Cloud",
    code: "SYS-04",
    desc: "Deploy AI securely across cloud, enterprise systems, infrastructure, and operational environments.",
    accent: "#4f46e5",
    accentRgb: "79, 70, 229",
    services: [
      { title: "AI Integration & Cloud Services", desc: "AI integration with cloud platforms, APIs, tools, and business systems.", id: "ai-integration-cloud-services", href: "/enterprise-ai" },
      { title: "AI-as-a-Service", desc: "Scalable AI capabilities delivered as flexible service-based solutions.", id: "ai-as-a-service", href: "/enterprise-ai" },
      { title: "AIOps & MLOps", desc: "AI model deployment, monitoring, optimization, and lifecycle management.", id: "aiops-mlops", href: "/enterprise-ai" },
      { title: "AI Security", desc: "Secure AI architecture, data protection, and risk-aware implementation.", id: "ai-security", href: "/enterprise-ai" },
      { title: "AI Governance Consulting", desc: "Responsible AI planning, compliance awareness, and ethical usage guidance.", id: "ai-governance-consulting", href: "/enterprise-ai" },
      { title: "AI Consulting & Corporate Training", desc: "Strategic AI advisory, implementation guidance, and corporate training programs for teams adopting artificial intelligence.", id: "ai-consulting-corporate-training", href: "/enterprise-ai" }
    ]
  },
  {
    title: "Advanced Tech & Software",
    code: "SYS-05",
    desc: "Extend AI innovation into connected devices, immersive experiences, digital products, and next-generation platforms.",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    services: [
      { title: "Internet of Things Development", desc: "Connected device systems using sensors, automation, and intelligence.", id: "internet-of-things-development", href: "/deep-tech-products" },
      { title: "Blockchain Development", desc: "Secure decentralized applications, smart contracts, and digital systems.", id: "blockchain-development", href: "/deep-tech-products" },
      { title: "AR/VR Development", desc: "Immersive digital experiences for training, visualization, and engagement.", id: "ar-vr-development", href: "/deep-tech-products" },
      { title: "AI Design", desc: "Human-centered AI interface design, product flows, and smart UX systems.", id: "ai-design", href: "/deep-tech-products" },
      { title: "Enterprise Software Development", desc: "Custom enterprise-grade software platforms designed to support scalable business operations and digital transformation.", id: "enterprise-software-development", href: "/deep-tech-products" }
    ]
  }
];

// Helper component for modern vector icons
function ServiceIcon({ id }) {
  switch (id) {
    case "ai-product-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      );
    case "ai-software-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case "custom-ai-model-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="12" r="2.5" />
          <circle cx="19" cy="12" r="2.5" />
          <circle cx="12" cy="19" r="2.5" />
          <path d="M12 7.5v9M7.5 12h9M8.5 8.5l7 7m0-7l-7 7" strokeLinecap="round" />
        </svg>
      );
    case "ai-agents-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M12 3v2m-6 3h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2zm2 4h.01M14 12h.01M9 16h6" />
        </svg>
      );
    case "agentic-ai-solutions":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      );
    case "ai-automation-for-businesses":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case "robotic-process-automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0a7.5 7.5 0 00-15 0" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "ai-copilot-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h6" />
        </svg>
      );
    case "generative-ai-solutions":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15 8 14.187 8.813 9l.813 5.187L15 15l-5.187.904zm9.362-9.362L18 11.25l-.813-2.346-2.346-.813 2.346-.813L18 4.5l.813 2.346 2.346.813-2.346.813z" />
        </svg>
      );
    case "nlp-conversational-ai":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.678 20.8a9.047 9.047 0 01-2.265-.407 11.666 11.666 0 01-3.148-1.785 8.965 8.965 0 003.304-3.143C2.8 14 2 12.013 2 9.5 2 5.358 6.477 2 12 2s10 3.358 10 7.5-4.477 7.5-10 7.5c-1.187 0-2.329-.157-3.322-.444L8.678 20.8z" />
        </svg>
      );
    case "data-analytics-business-intelligence":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "machine-learning-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
          <path d="M9 9h6v6H9z" />
          <path d="M12 4v5M12 15v5M4 12h5M15 12h5" strokeLinecap="round" />
        </svg>
      );
    case "predictive-modeling-analytics":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307L21.75 3.75M2.25 18h19.5" />
        </svg>
      );
    case "computer-vision-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "ai-integration-cloud-services":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      );
    case "ai-as-a-service":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25M12 3h.008v.008H12V3z" />
        </svg>
      );
    case "aiops-mlops":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      );
    case "ai-security":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "ai-governance-consulting":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 5.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm0 11.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" />
        </svg>
      );
    case "ai-consulting-corporate-training":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      );
    case "internet-of-things-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15 8 14.187 8.813 9l.813 5.187L15 15l-5.187.904z" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "blockchain-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "ar-vr-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5h-3.75a3 3 0 00-3 3v2.25a3 3 0 00-3 3h-4.5a3 3 0 00-3-3V10.5a3 3 0 00-3-3H3" />
          <circle cx="6" cy="12" r="1.5" />
          <circle cx="18" cy="12" r="1.5" />
        </svg>
      );
    case "ai-design":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.39-9.39a1.5 1.5 0 112.122 2.122l-9.39 9.39a1.5 1.5 0 11-2.122-2.122z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 10-4.244 4.243L8.62 17.03" />
        </svg>
      );
    case "game-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.75m-9 0v3.75m9-3.75h-9M6 9h.008v.008H6V9zm3 0h.008v.008H9V9zm6 0h.008v.008H15V9zm3 0h.008v.008H18V9z" />
        </svg>
      );
    case "enterprise-software-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}

// Optimized individual Service Card with DOM-based mouse spotlight tracking
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
      to={`/services/${srv.id}`}
      id={srv.id}
      className="group relative p-6 md:p-7 rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-slate-300/80 scroll-mt-32 overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Dynamic Cursor Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 140px at var(--mx, -99px) var(--my, -99px), rgba(${accentRgb}, 0.055), transparent 70%)`
        }}
      />
      
      {/* Dynamic Colored Border on Hover */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl border border-transparent transition-colors duration-500"
        style={{
          borderColor: `rgba(${accentRgb}, 0.12)`
        }}
      />

      <div className="relative z-10">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm"
          style={{ background: `rgba(${accentRgb}, 0.08)`, color: accent }}
        >
          <ServiceIcon id={srv.id} />
        </div>
        <h4 className="font-display text-base font-bold text-slate-800 mb-2 transition-colors group-hover:text-slate-950">
          {srv.title}
        </h4>
        <p className="font-body text-[0.82rem] text-slate-500 leading-relaxed font-medium">
          {srv.desc}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-1.5 font-display text-[0.72rem] font-bold tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: accent }}>
        Explore Solution
        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export default function IntelligentSolutionsEcosystem() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);

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

  // Scroll active tab button into view on tab change without shifting parent window
  useEffect(() => {
    const container = tabsRef.current;
    const activeTabEl = document.getElementById(`tab-btn-${activeTab}`);
    if (container && activeTabEl) {
      const containerWidth = container.offsetWidth;
      const tabOffsetLeft = activeTabEl.offsetLeft;
      const tabWidth = activeTabEl.offsetWidth;
      
      const targetScrollLeft = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);
      
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  const activeCategory = categories[activeTab];

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F3FF 50%, #FAFAFA 100%)' }}
    >
      {/* Background Soft Developer Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Glowing Floating Ambient Backdrops */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-100/50 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-fuchsia-100/40 to-transparent blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[90rem] px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-mono font-bold uppercase tracking-[0.25em] text-violet-600">
              INTELLIGENT SOLUTIONS ECOSYSTEM
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-[-0.02em]">
            Explore the Full{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">
              Intelligent Solutions
            </span>
          </h2>
          <p className="font-body text-slate-500 text-base md:text-lg leading-[1.7] font-medium max-w-2xl mx-auto">
            Beyond AI agents and automation, TECH6SENSE AI delivers a complete range of intelligent technology services — from generative AI and computer vision to enterprise AI integration, cloud deployment, data intelligence, and advanced digital innovation.
          </p>
        </div>

        {/* Horizontal Tabs Selector Dock - Desktop & Tablet */}
        <div ref={tabsRef} className={`hidden md:flex flex-row flex-nowrap items-center justify-start gap-2 lg:gap-3 bg-white/70 backdrop-blur-md p-2 px-3 rounded-3xl border border-slate-200/50 shadow-sm w-max max-w-full mx-auto mb-12 overflow-x-auto hide-scrollbar transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {categories.map((cat, i) => {
            const isActive = activeTab === i;
            return (
              <button 
                key={i}
                id={`tab-btn-${i}`}
                onClick={() => {
                  setActiveTab(i);
                  setActiveAccordion(i);
                }}
                className={`group px-3.5 py-2.5 lg:px-5 lg:py-3.5 rounded-2xl border transition-all duration-300 cursor-pointer outline-none select-none flex items-center gap-2 lg:gap-3 relative shrink-0 ${
                  isActive 
                    ? 'bg-white border-slate-200/80 shadow-md' 
                    : 'bg-transparent border-transparent hover:bg-white/80 hover:border-slate-100'
                }`}
              >
                {/* Active slider indicator bar under tab */}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-300 animate-pulse"
                    style={{
                      background: `linear-gradient(to right, ${cat.accent}, #d946ef)`
                    }}
                  />
                )}
                
                 <h3 className={`font-display text-xs lg:text-sm font-bold transition-colors ${
                  isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {cat.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Desktop Full-Width Detail Panel & Bento Grid */}
        <div className={`hidden md:block transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-slate-200 p-8 md:p-10 shadow-[0_15px_50px_-20px_rgba(15,23,42,0.03)] min-h-[450px] relative overflow-hidden">
            
            {/* Soft background glow */}
            <div 
              className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-[110px] -translate-y-1/3 translate-x-1/3 pointer-events-none transition-colors duration-700" 
              style={{ background: `radial-gradient(circle, rgba(${activeCategory.accentRgb}, 0.08) 0%, transparent 70%)` }}
            />

            <div key={activeTab} className="relative z-10 animate-fade-in">
              
              {/* Category Info Header */}
              <div className="mb-10 border-b border-slate-100 pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  <h3 className="font-display text-3xl font-extrabold text-slate-950 mb-3">
                    {activeCategory.title}
                  </h3>
                  <p className="font-body text-slate-500 text-base leading-relaxed font-medium">
                    {activeCategory.desc}
                  </p>
                </div>
                
                {/* Right Side Controls */}
                <div className="flex flex-col items-end gap-4 shrink-0">
                  {/* Category switcher arrows */}
                  <div className="hidden md:flex items-center gap-3">
                    <button 
                      onClick={() => {
                        const prev = (activeTab - 1 + categories.length) % categories.length;
                        setActiveTab(prev);
                        setActiveAccordion(prev);
                      }}
                      className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                      aria-label="Previous Category"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => {
                        const next = (activeTab + 1) % categories.length;
                        setActiveTab(next);
                        setActiveAccordion(next);
                      }}
                      className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                      aria-label="Next Category"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Accent Action link */}
                  <Link 
                    to={activeCategory.services[0].href}
                    className="shrink-0 group inline-flex items-center gap-2 font-display text-xs font-bold tracking-wider px-5 py-3 rounded-full border border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow transition-all"
                    style={{ color: activeCategory.accent }}
                  >
                    View Full Category Page
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Bento Grid - Full Width 3 Columns */}
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
        </div>

        {/* Mobile Accordion Layout (Standard Accordion fallback for mobile view) */}
        <div className={`md:hidden flex flex-col gap-5 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {categories.map((cat, i) => {
            const isActive = activeAccordion === i;
            return (
              <div 
                key={i} 
                className={`bg-white rounded-2.5rem border transition-all duration-500 overflow-hidden ${
                  isActive ? 'border-slate-300 shadow-md' : 'border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setActiveAccordion(isActive ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <h3 className={`font-display text-base font-bold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                      {cat.title}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-slate-100 text-slate-800' : 'bg-slate-50 text-slate-400'}`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isActive ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-8 border-t border-slate-50 pt-6">
                    <p className="font-body text-sm text-slate-500 leading-relaxed font-medium mb-6 pb-6 border-b border-slate-100">
                      {cat.desc}
                    </p>
                    <div className="flex flex-col gap-4">
                      {cat.services.map(srv => (
                        <Link 
                          id={`mobile-${srv.id}`} 
                          key={srv.id} 
                          to={`/services/${srv.id}`}
                          className="relative p-5 rounded-2xl border border-slate-100 bg-slate-50/40 flex items-start gap-4 scroll-mt-24 select-none active:bg-slate-100/50"
                        >
                          <div 
                            className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center"
                            style={{ background: `rgba(${cat.accentRgb}, 0.08)`, color: cat.accent }}
                          >
                            <ServiceIcon id={srv.id} />
                          </div>
                          <div>
                            <h4 className="font-display text-sm font-bold text-slate-900 mb-1">
                              {srv.title}
                            </h4>
                            <p className="font-body text-xs text-slate-500 leading-relaxed">
                              {srv.desc}
                            </p>
                          </div>
                        </Link>
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
        .animate-fade-in { animation: fadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
