import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { touchHoverProps } from '../../hooks/useTouchHover';

const categories = [
  {
    "title": "AI Product & Model Development",
    "code": "SYS-01",
    "desc": "Build intelligent AI products, models, agents, and custom software systems designed for real-world enterprise use.",
    "accent": "#1746D2",
    "accentRgb": "23, 70, 210",
    "services": [
      {
        "id": "ai-product-development",
        "title": "AI Product Development",
        "h1": "AI Products Engineered for Market, Not Just for Demos",
        "desc": "Most AI products stall between prototype and production. TECH6SENSE AI's product engineering practice closes that gap — taking an AI concept through architecture, model selection, data pipeline design, interface engineering, and scale-testing, so what ships is a product enterprises can actually run, not a proof-of-concept that collapses under real usage.",
        "coreCapabilities": [
          "End-to-end AI product architecture and technical due diligence",
          "Model selection, fine-tuning, and integration strategy",
          "Data pipeline and infrastructure design for production scale",
          "UX/UI engineering for AI-native interfaces",
          "Go-to-market technical readiness and scale testing"
        ],
        "businessImpact": "Converts AI concepts into revenue-generating products with the engineering rigor to survive enterprise procurement, security review, and real-world scale.",
        "cta": "Start Your AI Product Roadmap",
        "href": "/services/ai-product-development"
      },
      {
        "id": "ai-agents-development",
        "title": "AI Agents Development",
        "h1": "Autonomous Agents That Execute, Not Just Assist",
        "desc": "TECH6SENSE AI engineers AI agents capable of independently executing multi-step business processes — reasoning across tools, calling APIs, and orchestrating workflows without constant human supervision. These are not scripted chatbots; they are decision making systems built to operate inside real enterprise environments, with guardrails, audit trails, and escalation logic engineered in from the start.",
        "coreCapabilities": [
          "Multi-agent orchestration and task-planning architecture",
          "Tool-use and API integration for autonomous execution",
          "Guardrail, escalation, and human-in-the-loop design",
          "Agent memory and context-management systems",
          "Enterprise system integration (CRM, ERP, ITSM)"
        ],
        "businessImpact": "Shifts routine operational execution from human teams to autonomous systems — freeing skilled staff for judgment-intensive work while maintaining full auditability.",
        "cta": "Design Your Autonomous Workforce",
        "href": "/services/ai-agents-development"
      },
      {
        "id": "ai-automation-for-businesses",
        "title": "AI Automation for Businesses",
        "h1": "Automation Engineered Around Business Outcomes",
        "desc": "TECH6SENSE AI designs AI automation systems around specific operational bottlenecks — not generic workflow templates. Every automation engagement begins with process mapping and ends with a measurable reduction in manual effort, error rate, or cycle time across the targeted function.",
        "coreCapabilities": [
          "Business process mapping and automation opportunity assessment",
          "AI-driven workflow automation across operations, finance, and support",
          "Document processing and data extraction automation",
          "Cross-department automation orchestration",
          "Automation performance monitoring and continuous optimization"
        ],
        "businessImpact": "Reduces manual operational load and error rates while freeing teams to focus on strategic, judgment-based work.",
        "cta": "Map Your Automation Opportunity",
        "href": "/services/ai-automation-for-businesses"
      },
      {
        "id": "generative-ai-solutions",
        "title": "Generative AI Solutions",
        "h1": "Generative AI Built for Enterprise Rigor, Not Novelty",
        "desc": "Generative AI's business value depends entirely on how it's engineered. TECH6SENSE AI builds generative systems — text, image, code, and structured-data generation — with the guardrails, evaluation frameworks, and domain grounding required for enterprise deployment, not just impressive demos.",
        "coreCapabilities": [
          "Custom generative model fine-tuning and prompt architecture",
          "Enterprise content and design generation systems",
          "Domain-specific generative AI (legal, financial, technical documentation)",
          "Output evaluation, bias testing, and quality assurance frameworks",
          "Generative AI integration into existing enterprise tools"
        ],
        "businessImpact": "Converts generative AI from an experimental tool into a governed production capability that scales content and creative output without sacrificing quality control.",
        "cta": "Explore Enterprise GenAI Solutions",
        "href": "/services/generative-ai-solutions"
      },
      {
        "id": "agentic-ai-solutions",
        "title": "Agentic AI Solutions",
        "h1": "Agentic Systems Engineered for Complex, Multi-Step Reasoning",
        "desc": "Agentic AI extends beyond single-task automation into systems capable of planning, reasoning, and adapting across extended workflows. TECH6SENSE AI architects these systems with layered governance — every autonomous decision point is traceable, controllable, and reversible.",
        "coreCapabilities": [
          "Agentic workflow architecture and reasoning-chain design",
          "Multi-step planning and dynamic task decomposition",
          "Governance layer design for autonomous decision points",
          "Cross-system agentic orchestration",
          "Performance monitoring for agentic reliability"
        ],
        "businessImpact": "Enables enterprises to deploy autonomous reasoning systems for complex operations without ceding oversight or control.",
        "cta": "Architect Your Agentic AI Strategy",
        "href": "/services/agentic-ai-solutions"
      }
    ]
  },
  {
    "title": "Intelligent Automation & Agent Systems",
    "code": "SYS-02",
    "desc": "Automate operational bottlenecks, deploy intelligent enterprise copilots, and leverage generative AI & RAG frameworks.",
    "accent": "#00A86B",
    "accentRgb": "0, 168, 107",
    "services": [
      {
        "id": "custom-ai-model-development",
        "title": "Custom AI Model Development",
        "h1": "Models Trained on Your Data, Built for Your Domain",
        "desc": "Off-the-shelf models plateau at generic performance. TECH6SENSE AI develops custom AI models — trained, fine-tuned, and evaluated against an organization's proprietary data and domain constraints — to deliver accuracy and relevance that general-purpose models cannot match.",
        "coreCapabilities": [
          "Custom model architecture design and training",
          "Domain-specific fine-tuning on proprietary datasets",
          "Model evaluation, benchmarking, and bias auditing",
          "Model compression and deployment optimization",
          "Ongoing model retraining and performance management"
        ],
        "businessImpact": "Delivers AI accuracy and domain relevance that generic, off-the-shelf models structurally cannot achieve.",
        "cta": "Discuss Your Custom Model Requirements",
        "href": "/services/custom-ai-model-development"
      },
      {
        "id": "ai-software-development",
        "title": "AI Software Development",
        "h1": "Software Engineered Around Intelligence, Not Bolted Onto It",
        "desc": "TECH6SENSE AI builds AI-native software — applications architected from the ground up around model inference, data pipelines, and intelligent logic, rather than conventional software with AI features retrofitted afterward.",
        "coreCapabilities": [
          "AI-native application architecture and engineering",
          "Full-stack development integrating AI/ML pipelines",
          "API and microservices design for AI-driven applications",
          "Cloud-native deployment and scaling infrastructure",
          "Quality assurance and performance testing for AI systems"
        ],
        "businessImpact": "Delivers software built to handle the unique performance, latency, and data demands of AI systems, avoiding costly re-architecture later.",
        "cta": "Build Your AI-Native Application",
        "href": "/services/ai-software-development"
      },
      {
        "id": "ai-copilot-development-smart-ai-assistants-and-chatbot",
        "title": "AI Copilot Development (Smart AI Assistants and Chatbot",
        "h1": "Copilots Built to Work Inside Your Systems, Not Beside Them",
        "desc": "TECH6SENSE AI engineers AI copilots and conversational assistants that integrate directly with internal knowledge bases, CRM, and enterprise systems — designed to execute tasks and surface answers within existing workflows, rather than functioning as a standalone widget.",
        "coreCapabilities": [
          "Enterprise copilot architecture and knowledge integration",
          "Conversational AI and chatbot engineering",
          "Retrieval-grounded response systems for accuracy",
          "Multi-channel deployment (web, mobile, internal tools)",
          "Continuous learning and feedback-loop optimization"
        ],
        "businessImpact": "Embeds AI assistance directly into daily workflows, reducing time-to answer and support load across internal and customer-facing functions.",
        "cta": "Design Your Enterprise Copilot",
        "href": "/services/ai-copilot-development-smart-ai-assistants-and-chatbot"
      },
      {
        "id": "ai-as-a-service-aiaas",
        "title": "AI-as-a-Service (AIaaS)",
        "h1": "Enterprise AI Capability, Delivered as a Service",
        "desc": "TECH6SENSE AI's AIaaS model gives organizations access to production-grade AI infrastructure, models, and tooling on a scalable, consumption-based basis — removing the capital burden of building an in-house AI stack from zero.",
        "coreCapabilities": [
          "Managed AI infrastructure and model-hosting services",
          "Scalable API access to custom and foundation models",
          "Usage-based pricing and capacity management",
          "Ongoing maintenance, monitoring, and support",
          "Rapid onboarding for AI capability without in-house build-out"
        ],
        "businessImpact": "Lowers the capital and time barrier to enterprise AI adoption, letting organizations scale usage in line with actual business demand.",
        "cta": "Access AI Capability On-Demand",
        "href": "/services/ai-as-a-service-aiaas"
      },
      {
        "id": "ai-consulting-and-corporate-training",
        "title": "AI Consulting and Corporate Training",
        "h1": "Strategy and Capability-Building for Organizations Serious About AI",
        "desc": "TECH6SENSE AI's consulting practice helps leadership teams define a credible AI roadmap, while its corporate training programs build the internal literacy and technical capability required to execute it — ensuring AI adoption doesn't stall after the strategy deck is delivered.",
        "coreCapabilities": [
          "AI readiness assessment and strategic roadmapping",
          "Executive and board-level AI briefings",
          "Technical and non-technical corporate training programs",
          "Use-case prioritization and ROI modeling",
          "Change management for AI adoption"
        ],
        "businessImpact": "Builds durable internal AI capability and organizational buy-in, reducing dependence on external vendors for ongoing execution.",
        "cta": "Book an AI Strategy Session",
        "href": "/services/ai-consulting-and-corporate-training"
      }
    ]
  },
  {
    "title": "Generative & Applied AI",
    "code": "SYS-03",
    "desc": "Transform enterprise data, machine learning pipelines, predictive forecasting models, and computer vision systems into actionable intelligence.",
    "accent": "#D4AF37",
    "accentRgb": "212, 175, 55",
    "services": [
      {
        "id": "ai-governance-consulting-services",
        "title": "AI Governance Consulting Services",
        "h1": "Governance Frameworks That Withstand Regulatory Scrutiny",
        "desc": "As AI regulation matures globally, governance can no longer be an afterthought. TECH6SENSE AI designs governance frameworks — covering risk classification, explainability, auditability, and regulatory alignment — built to withstand scrutiny from regulators, auditors, and boards alike.",
        "coreCapabilities": [
          "AI risk assessment and classification frameworks",
          "Regulatory alignment (regional and sector-specific)",
          "Model explainability and auditability architecture",
          "AI policy design and internal governance documentation",
          "Ongoing governance monitoring and compliance reporting"
        ],
        "businessImpact": "Reduces regulatory and reputational risk exposure while enabling faster internal approval for AI initiatives.",
        "cta": "Assess Your AI Governance Maturity",
        "href": "/services/ai-governance-consulting-services"
      },
      {
        "id": "ai-integration-and-cloud-services",
        "title": "AI Integration and Cloud Services",
        "h1": "AI Integration Built on Cloud Infrastructure That Scales",
        "desc": "Deploying AI is only as strong as the infrastructure underneath it. TECH6SENSE AI integrates AI models and systems into existing enterprise environments — architecting cloud infrastructure across major providers that scales reliably under real production load.",
        "coreCapabilities": [
          "AI system integration with legacy and existing infrastructure",
          "Multi-cloud and hybrid cloud architecture design",
          "Cloud migration and modernization for AI workloads",
          "Infrastructure-as-code and DevOps for AI deployment",
          "Cost optimization and cloud performance management"
        ],
        "businessImpact": "Ensures AI systems run reliably at production scale without infrastructure bottlenecks or unplanned cost overruns.",
        "cta": "Plan Your AI Cloud Integration",
        "href": "/services/ai-integration-and-cloud-services"
      },
      {
        "id": "ai-security",
        "title": "AI Security",
        "h1": "Security Engineered for the Unique Risks of AI Systems",
        "desc": "AI systems introduce risk vectors conventional cybersecurity wasn't built for — prompt injection, model extraction, data leakage through inference, and adversarial manipulation. TECH6SENSE AI engineers security specifically for these AI-native threat categories, not just traditional application security.",
        "coreCapabilities": [
          "AI-specific threat modeling and vulnerability assessment",
          "Model security (extraction, poisoning, adversarial defense)",
          "Data privacy and leakage-prevention architecture",
          "Secure AI deployment pipeline design",
          "Continuous AI security monitoring and incident response"
        ],
        "businessImpact": "Closes AI-specific security gaps that conventional cybersecurity approaches overlook, protecting proprietary models and sensitive data.",
        "cta": "Assess Your AI Security Exposure",
        "href": "/services/ai-security"
      },
      {
        "id": "ai-design",
        "title": "AI Design",
        "h1": "Design Built for How Humans Actually Interact with AI",
        "desc": "AI interfaces fail when they treat intelligent systems like conventional software. TECH6SENSE AI's design practice is built specifically around AI-native interaction patterns — conversational flows, trust signals, uncertainty communication, and human-in-the-loop controls — so users trust and adopt what's built.",
        "coreCapabilities": [
          "AI-native UX/UI design and interaction architecture",
          "Conversational interface and dialogue design",
          "Trust, transparency, and uncertainty-communication design",
          "Human-in-the-loop control interface design",
          "Design systems for AI product suites"
        ],
        "businessImpact": "Drives higher user adoption and trust in AI systems by designing for the specific ways humans interact with intelligent interfaces.",
        "cta": "Design Your AI User Experience",
        "href": "/services/ai-design"
      },
      {
        "id": "aiops-and-mlops",
        "title": "AIOps and MLOps",
        "h1": "Operational Discipline for AI and ML Systems in Production",
        "desc": "Models degrade, pipelines break, and infrastructure drifts. TECH6SENSE AI builds AIOps and MLOps practices — continuous integration, deployment, monitoring, and retraining pipelines — that keep AI and ML systems performing reliably long after initial launch.",
        "coreCapabilities": [
          "CI/CD pipeline design for ML model deployment",
          "Model monitoring, drift detection, and automated retraining",
          "Infrastructure monitoring and incident response for AI systems",
          "Version control and reproducibility for models and data",
          "Scalable MLOps platform architecture"
        ],
        "businessImpact": "Prevents model and pipeline degradation over time, protecting the ROI of AI investments long after go-live.",
        "cta": "Strengthen Your AI Operations Pipeline",
        "href": "/services/aiops-and-mlops"
      }
    ]
  },
  {
    "title": "AI Strategy & Governance",
    "code": "SYS-04",
    "desc": "Deploy AI across cloud environments, AIaaS, MLOps lifecycle pipelines, AI security firewalls, and regulatory governance frameworks.",
    "accent": "#1746D2",
    "accentRgb": "23, 70, 210",
    "services": [
      {
        "id": "enterprise-software-development",
        "title": "Enterprise Software Development",
        "h1": "Enterprise Software Engineered for Scale, Security, and Longevity",
        "desc": "TECH6SENSE AI builds enterprise software systems designed to withstand the operational complexity, security requirements, and regulatory scrutiny that large organizations face — architected for a multi-year lifecycle, not a quick launch.",
        "coreCapabilities": [
          "Enterprise application architecture and full-stack development",
          "Legacy system modernization and integration",
          "Scalable microservices and API architecture",
          "Enterprise-grade security and compliance engineering",
          "Long-term maintenance and technical support"
        ],
        "businessImpact": "Delivers software infrastructure built for organizational longevity, reducing costly re-engineering as the business scales.",
        "cta": "Discuss Your Enterprise Software Needs",
        "href": "/services/enterprise-software-development"
      },
      {
        "id": "blockchain-development",
        "title": "Blockchain Development",
        "h1": "Blockchain Engineering for Enterprises That Need Trust by Design",
        "desc": "TECH6SENSE AI builds blockchain systems for use cases where trust, transparency, and immutability are structural requirements, not marketing language — from smart contract engineering to enterprise-grade decentralized applications.",
        "coreCapabilities": [
          "Smart contract development and security auditing",
          "Private, public, and consortium blockchain architecture",
          "Decentralized application (dApp) development",
          "Tokenization and digital asset infrastructure",
          "Blockchain integration with existing enterprise systems"
        ],
        "businessImpact": "Enables verifiable, tamper-resistant transaction and record systems where trust and transparency directly affect commercial or regulatory outcomes.",
        "cta": "Explore Blockchain for Your Business",
        "href": "/services/blockchain-development"
      },
      {
        "id": "data-analytics-business-intelligence",
        "title": "Data Analytics & Business Intelligence",
        "h1": "Analytics Systems Built for Decisions, Not Just Dashboards",
        "desc": "Dashboards without decision-relevance are noise. TECH6SENSE AI builds data analytics and BI systems architected around the specific decisions an organization needs to make faster and with greater confidence — from data pipeline to executive-ready insight.",
        "coreCapabilities": [
          "Data warehouse and pipeline architecture",
          "Business intelligence dashboard design and development",
          "Advanced analytics and statistical modeling",
          "Real-time analytics and reporting systems",
          "Data governance and quality management"
        ],
        "businessImpact": "Converts fragmented enterprise data into a decision-ready asset, accelerating strategic and operational response time.",
        "cta": "Build Your Analytics Infrastructure",
        "href": "/services/data-analytics-business-intelligence"
      },
      {
        "id": "internet-of-things-iot-development",
        "title": "Internet of Things (IoT) Development",
        "h1": "IoT Systems That Turn Physical Operations into Real-Time Intelligence",
        "desc": "TECH6SENSE AI designs IoT architectures that connect physical devices and sensors to enterprise data and AI systems — transforming physical operations into real-time, actionable intelligence rather than isolated device telemetry.",
        "coreCapabilities": [
          "IoT device integration and sensor network architecture",
          "Edge computing and real-time data processing",
          "IoT platform development and device management",
          "Predictive maintenance and operational monitoring systems",
          "IoT security and data pipeline architecture"
        ],
        "businessImpact": "Converts physical operations data into real-time intelligence, enabling predictive maintenance and operational optimization.",
        "cta": "Connect Your Operations with IoT",
        "href": "/services/internet-of-things-iot-development"
      },
      {
        "id": "virtual-reality-vr-augmented-reality-ar",
        "title": "Virtual Reality (VR) & Augmented Reality (AR)",
        "h1": "Immersive Technology Engineered for Enterprise Use Cases",
        "desc": "Beyond entertainment, AR and VR are becoming core enterprise tools — for training simulation, spatial visualization, and immersive customer engagement. TECH6SENSE AI builds AR/VR applications engineered specifically for these enterprise-grade use cases.",
        "coreCapabilities": [
          "VR training simulation and skill development platforms",
          "AR visualization for engineering, design, and operations",
          "Immersive customer experience and product visualization",
          "Cross-platform AR/VR application development",
          "3D modeling and spatial computing integration"
        ],
        "businessImpact": "Reduces training costs and accelerates skill acquisition through immersive simulation, while enhancing customer engagement through spatial visualization.",
        "cta": "Explore AR/VR for Your Enterprise",
        "href": "/services/virtual-reality-vr-augmented-reality-ar"
      }
    ]
  },
  {
    "title": "Enterprise Technology & Digital Infrastructure",
    "code": "SYS-05",
    "desc": "Modernize legacy systems, orchestrate decentralized enterprise applications, and design user-centric AI experiences.",
    "accent": "#00A86B",
    "accentRgb": "0, 168, 107",
    "services": [
      {
        "id": "robotic-process-automation",
        "title": "Robotic Process Automation",
        "h1": "RPA Engineered for Precision at Enterprise Volume",
        "desc": "TECH6SENSE AI implements robotic process automation for high-volume, rules-based processes — engineered for the precision, exception-handling, and audit trail requirements that enterprise operations demand.",
        "coreCapabilities": [
          "Process discovery and RPA opportunity assessment",
          "Bot development for rules-based process automation",
          "RPA and AI integration for cognitive automation",
          "Exception handling and audit trail architecture",
          "RPA governance and bot lifecycle management"
        ],
        "businessImpact": "Eliminates manual processing errors and accelerates cycle times for high volume, repetitive enterprise operations.",
        "cta": "Identify Your RPA Opportunities",
        "href": "/services/robotic-process-automation"
      },
      {
        "id": "machine-learning-development-services",
        "title": "Machine Learning Development Services",
        "h1": "Machine Learning Systems Engineered for Production Reliability",
        "desc": "TECH6SENSE AI builds machine learning systems designed for the full lifecycle — data preparation, model development, validation, deployment, and ongoing monitoring — so ML initiatives deliver sustained business value rather than a one-time research result.",
        "coreCapabilities": [
          "Data preparation, feature engineering, and pipeline design",
          "Custom ML model development and validation",
          "Model deployment and production integration",
          "Performance monitoring and continuous retraining",
          "ML infrastructure and scalability architecture"
        ],
        "businessImpact": "Delivers machine learning systems built for sustained production performance, not just one-off research accuracy.",
        "cta": "Start Your ML Development Project",
        "href": "/services/machine-learning-development-services"
      },
      {
        "id": "computer-vision-development-services",
        "title": "Computer Vision Development Services",
        "h1": "Computer Vision Systems Built for Real-World Visual Complexity",
        "desc": "TECH6SENSE AI engineers computer vision systems — object detection, quality inspection, facial and image recognition — trained to perform reliably against real-world visual variability, not just curated lab datasets.",
        "coreCapabilities": [
          "Object detection and image classification systems",
          "Automated visual quality inspection and defect detection",
          "Facial recognition and biometric analysis systems",
          "Video analytics and real-time monitoring",
          "Computer vision model training and optimization"
        ],
        "businessImpact": "Enables automated visual inspection and monitoring at speeds and accuracy levels beyond manual capability.",
        "cta": "Explore Computer Vision Applications",
        "href": "/services/computer-vision-development-services"
      },
      {
        "id": "predictive-modelling-analytics",
        "title": "Predictive Modelling Analytics",
        "h1": "Predictive Models Built to Forecast What Matters to the Business",
        "desc": "TECH6SENSE AI builds predictive analytics models designed around specific business forecasting needs — demand, risk, churn, or operational failure — engineered for statistical rigor and integrated directly into decision workflows.",
        "coreCapabilities": [
          "Predictive model design and statistical validation",
          "Demand forecasting and risk modeling",
          "Customer churn and behavior prediction models",
          "Predictive maintenance modeling",
          "Model integration into business decision workflows"
        ],
        "businessImpact": "Shifts decision-making from reactive to anticipatory, improving planning accuracy across demand, risk, and operational forecasting.",
        "cta": "Build Your Predictive Analytics Model",
        "href": "/services/predictive-modelling-analytics"
      },
      {
        "id": "natural-language-processing-nlp-and-conversational-ai",
        "title": "Natural Language Processing (NLP) and Conversational AI",
        "h1": "Language Intelligence Engineered for Enterprise Accuracy",
        "desc": "TECH6SENSE AI builds NLP and conversational AI systems — sentiment analysis, document understanding, multilingual processing, and dialogue systems — engineered for the linguistic and contextual accuracy enterprise use cases demand.",
        "coreCapabilities": [
          "Text classification, sentiment, and entity extraction",
          "Document understanding and information extraction",
          "Multilingual NLP and translation systems",
          "Conversational AI and dialogue system engineering",
          "Domain-specific language model fine-tuning"
        ],
        "businessImpact": "Automates large-scale text and language processing tasks with the contextual accuracy required for enterprise-grade decision-making.",
        "cta": "Build Your NLP Solution",
        "href": "/services/natural-language-processing-nlp-and-conversational-ai"
      },
      {
        "id": "retrieval-augmented-generation-rag",
        "title": "Retrieval-Augmented Generation (RAG)",
        "h1": "Generative AI, Grounded in Your Enterprise's Own Knowledge",
        "desc": "Generic generative AI hallucinates when it lacks grounding. TECH6SENSE AI builds retrieval-augmented generation systems that connect generative models directly to an organization's verified knowledge base — internal documents, databases, and proprietary content — for responses that are accurate, current, and source-attributable.",
        "coreCapabilities": [
          "Vector database and retrieval pipeline architecture",
          "Enterprise knowledge base integration for grounded responses",
          "Hybrid retrieval and re-ranking system design",
          "Source attribution and citation-accurate response generation",
          "RAG performance evaluation and continuous tuning"
        ],
        "businessImpact": "Reduces AI hallucination risk and ensures generative outputs are grounded in verified, enterprise-specific knowledge — critical for regulated and high-stakes use cases.",
        "cta": "Ground Your Generative AI in Real Knowledge",
        "href": "/services/retrieval-augmented-generation-rag"
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
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      id={srv.id}
      className="group relative p-7 rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-transparent flex flex-col justify-between"
      {...touchHoverProps}
      style={{
        boxShadow: 'var(--hover-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.05))'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.setProperty('--hover-shadow', `0 20px 40px -15px rgba(${accentRgb}, 0.5)`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.removeProperty('--hover-shadow');
      }}
    >
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl"
        {...touchHoverProps}
        style={{ backgroundColor: accent }}
      />

      <div className="relative z-10 flex flex-col flex-grow">
        <span onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="inline-block font-display text-xs sm:text-sm font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-[#D4AF37]/40 text-[#B48A1D] mb-3.5 group-hover:bg-black/40 group-hover:border-[#FFD700] group-hover:text-[#FFD700] transition-all duration-300 self-start shadow-sm">
          {srv.title}
        </span>
        
        <h4 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mb-3.5 leading-snug group-hover:text-white transition-colors duration-300">
          {srv.h1}
        </h4>
        
        <p onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-body text-sm text-slate-600 leading-relaxed font-medium mb-5 group-hover:text-white/90 transition-colors duration-300">
          {srv.desc}
        </p>

        {srv.coreCapabilities && srv.coreCapabilities.length > 0 && (
          <div className="mb-5">
            <h5 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-display text-xs font-bold text-slate-800 uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">Core Capabilities</h5>
            <ul className="space-y-1">
              {srv.coreCapabilities.map((cap, idx) => (
                <li key={idx} onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-body text-xs text-slate-600 flex items-start gap-2 group-hover:text-white/90 transition-colors">
                  <span className="shrink-0 font-bold" style={{ color: accent }}>•</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {srv.businessImpact && (
          <div onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="mt-auto mb-6 p-4 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-black/10 group-hover:border-white/10 transition-colors duration-300">
             <h5 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-display text-xs font-bold text-slate-800 uppercase tracking-widest mb-1 group-hover:text-white/80">Business Impact</h5>
             <p onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-body text-xs text-slate-600 font-medium leading-relaxed group-hover:text-white/90">{srv.businessImpact}</p>
          </div>
        )}
      </div>

      <Link to={srv.href} onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="relative z-10 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center justify-between transition-colors duration-300">
        <span onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-display text-xs font-bold transition-all group-hover:translate-x-1 group-hover:!text-white" style={{ color: accent }}>
          {srv.cta}
        </span>
        <svg onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:!text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{ color: accent }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
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
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#1746D2] to-[#00A86B] rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#1746D2]">
              OUR CAPABILITIES
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#00A86B] to-[#1746D2] rounded-full" />
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
                className={`px-5 py-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-center relative ${
                  isActive 
                    ? 'bg-[#1746D2] border-[#1746D2] text-white shadow-md' 
                    : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-50 hover:text-[#1746D2]'
                }`}
              >
                <span className="font-display text-sm font-bold whitespace-nowrap">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Details & Grid Panel - Desktop */}
        <div className="hidden md:block">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 lg:p-12 shadow-sm relative overflow-hidden">
            
            <div className="mb-10 border-b border-slate-100 pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-3xl">
                <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-widest mb-2 block">
                  PRACTICE LINE CATEGORY
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
                          <span className="inline-block font-display text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 border border-[#D4AF37]/40 text-[#B48A1D] mb-2">
                            {srv.title}
                          </span>
                          <h4 className="font-display text-base font-extrabold text-slate-900 mb-2 leading-snug">{srv.h1}</h4>
                          <p className="font-body text-xs text-slate-600 mb-3">{srv.desc}</p>
                        </div>
                        <span className="font-display text-xs font-bold text-[#1746D2] flex items-center gap-1">
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
