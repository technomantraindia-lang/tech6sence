import React, { useState } from 'react';

export default function DeepTechFAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What is Deep-Tech Product Development at TECH6SENSE AI?",
      a: "Deep-tech product development at TECH6SENSE AI refers to the creation of advanced, research-driven AI-powered hardware and software products that combine Artificial Intelligence, Embedded Systems, Edge Computing, IoT Integration, Computer Vision, Predictive Analytics, and Enterprise Cloud Infrastructure. Our focus is on building scalable, IP-driven, globally competitive AI products in wearable technology, healthcare devices, smart IoT systems, industrial AI gear, and intelligent enterprise platforms."
    },
    {
      q: "Do you provide end-to-end product development Support?",
      a: "Yes. TECH6SENSE AI provides complete lifecycle support including: (1) Product Ideation & Validation, (2) AI Research & Model Development, (3) Embedded Hardware Design, (4) Firmware Development, (5) Prototype Engineering, (6) Testing & Compliance, (7) Manufacturing Strategy, (8) Cloud & Mobile App Integration, (9) Go-to-Market Strategy, and (10) Investor Readiness & IP Advisory. We are not just a development company — we are a full AI product ecosystem partner."
    },
    {
      q: "Can startups build their own AI product with TECH6SENSE AI?",
      a: "Absolutely. We provide a structured deep-tech innovation ecosystem for startup founders, entrepreneurs, AI innovators, and hardware product builders. Our model supports you from idea to prototype to funding to manufacturing to global scaling."
    },
    {
      q: "What makes TECH6SENSE AI different from other AI development companies?",
      a: "Key differentiators include: (1) Deep AI Research Background, (2) Hardware + AI Integration Expertise, (3) Enterprise-Grade Architecture, (4) Edge AI Optimization, (5) Scalable Manufacturing Strategy, (6) Startup Commercialization Support, and (7) Focus on Intellectual Property Creation. We focus on building long-term, scalable AI assets — not just software solutions."
    },
    {
      q: "Can TECH6SENSE AI Offer white-label AI products?",
      a: "Yes. We offer OEM AI product development, white-label wearable AI devices, custom enterprise AI platforms, and private-label smart hardware solutions. This allows organizations to launch branded AI products under their own identity."
    },
    {
      q: "Do you support AI product patent and IP strategy?",
      a: "Yes. We assist with Patent strategy guidance, IP positioning, Technology differentiation planning, and Product defensibility consulting. Our focus is on building IP-backed deep-tech assets."
    },
    {
      q: "What is the commercialization strategy for AI hardware products?",
      a: "Our commercialization support includes Market validation, Pricing strategy, Branding & positioning, B2B/B2G strategy, Investor pitch deck support, Venture capital readiness, and Pilot deployment programs. We help you transition from R&D to revenue."
    },
    {
      q: "Do you offer customized enterprise AI solutions?",
      a: "Absolutely. We offer custom: AI wearable solutions, Industrial AI safety systems, Smart healthcare devices, Intelligent IoT ecosystems, and Knowledge AI platforms. All solutions are tailored to your business requirements."
    },
    {
      q: "How scalable are your AI deep-tech solutions?",
      a: "Our solutions are designed for Multi-device deployment, Cloud-scale analytics, Global distribution, Enterprise-grade reliability, and Modular architecture expansion. We build for long-term scalability and global markets."
    },
    {
      q: "Do you provide ongoing support and maintenance?",
      a: "Yes. We offer AI model optimization, firmware updates, performance monitoring, security upgrades, feature expansion, and post-deployment technical support. Deep-tech products require continuous evolution, and we provide it."
    },
    {
      q: "How can I start building my AI product with TECH6SENSE AI?",
      a: "You can begin by: (1) Scheduling a product strategy consultation, (2) Sharing your concept or problem statement, (3) Engaging in technical feasibility assessment, (4) Defining roadmap and milestones, and (5) Starting MVP development. We guide you through every stage."
    },
    {
      q: "Does TECH6SENSE AI manufacture products in-house?",
      a: "No. TECH6SENSE AI does not operate in-house manufacturing facilities. Our core expertise lies in AI research and development, embedded systems engineering, product architecture design, prototype development, AI model training and optimization, enterprise software integration, and commercialization strategy. We focus on building world-class AI product intelligence and scalable technology frameworks rather than owning physical manufacturing plants."
    },
    {
      q: "Why does TECH6SENSE AI not manufacture products in-house?",
      a: "Deep-tech innovation requires strong specialization. Our strategic focus is on Advanced AI engineering, Product innovation, IP creation, Hardware-software system integration, Edge AI architecture, and Enterprise-grade platform development. Manufacturing is a separate operational domain requiring dedicated infrastructure, supply chain management, and capital-intensive facilities. Instead of building factories, we partner with certified manufacturing specialists to ensure quality, scalability, and global standards, allowing us to maintain agility, reduce overhead, focus on innovation, deliver faster time-to-market, and ensure scalable global production."
    },
    {
      q: "How are your AI products manufactured then?",
      a: "We work with certified contract manufacturers, OEM hardware partners, global supply chain networks, regulatory-compliant production units, and specialized electronics manufacturing services (EMS) providers. Depending on the project, manufacturing may take place in India, Hong Kong / China regions, Asia-Pacific hubs, or international OEM facilities. All production follows strict quality control and compliance standards."
    },
    {
      q: "Do you help startups or enterprises with manufacturing setup?",
      a: "Yes. While we do not operate in-house manufacturing, we provide manufacturing partner identification, vendor selection support, cost optimization strategy, BOM (Bill of Materials) planning, supply chain advisory, compliance and certification guidance, and production scalability roadmaps. For founders who want to establish their own manufacturing unit in India or globally, we provide strategic consulting support."
    },
    {
      q: "Who owns the intellectual property (IP) of the product?",
      a: "IP ownership depends on the engagement model. We offer client-owned IP models, joint IP development, and white-label/OEM licensing structures. Manufacturing partners do not own the IP. Intellectual property rights remain protected under formal agreements."
    },
    {
      q: "Does outsourcing manufacturing reduce product quality?",
      a: "No. We carefully select manufacturing partners based on ISO certifications, quality assurance systems, production track records, regulatory compliance, and industry specialization. This ensures enterprise-grade quality and scalability. Many global technology leaders follow similar asset-light, innovation-focused models."
    },
    {
      q: "What is the benefit of your asset-light innovation model?",
      a: "Our asset-light model allows us to focus on deep-tech R&D, deliver faster innovation cycles, scale production globally, optimize cost structures, maintain flexibility across markets, and reduce capital expenditure. This model is especially beneficial for startups and enterprises seeking faster commercialization."
    },
    {
      q: "How do you ensure confidentiality when working with manufacturing partners?",
      a: "We enforce Non-Disclosure Agreements (NDAs), IP protection clauses, controlled design documentation, secure firmware locking, encrypted production files, and legal compliance frameworks. Product confidentiality is protected at every stage."
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-100/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-[50rem] px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            AI Deep-Tech Products FAQs
          </h2>
        </div>

        {/* Accordions List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const borderGlow = idx % 2 === 0 
              ? "hover:border-blue-400/50" 
              : "hover:border-emerald-400/50";
            
            return (
              <div 
                key={idx}
                className={`rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md transition-all duration-300 overflow-hidden ${borderGlow} ${
                  isOpen ? 'shadow-[4px_4px_0px_0px_rgba(37,99,235,0.08)] border-slate-300' : 'shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-extrabold text-sm md:text-base text-slate-900 hover:text-blue-900 transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg 
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Animated content expansion */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100 opacity-100 py-5 px-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
