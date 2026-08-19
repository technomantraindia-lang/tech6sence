// servicesContent.js
// Data registry for all 26 Intelligent Solutions practice lines from Final Intelligent Solutions.pdf
// Used by src/pages/ServiceDetail.jsx via useParams(:serviceId)

export const servicesContent = {

  // ─── 1. AI Product Development ───────────────────────────────────────────────
  "ai-product-development": {
    title: "AI Product Development",
    category: "AI DEVELOPMENT // SYS-01",
    tagline: "AI Products Engineered for Market, Not Just for Demos",
    description: "Most AI products stall between prototype and production. TECH6SENSE AI's product engineering practice closes that gap — taking an AI concept through architecture, model selection, data pipeline design, interface engineering, and scale-testing, so what ships is a product enterprises can actually run, not a proof-of-concept that collapses under real usage.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Start Your AI Product Roadmap",
    businessImpact: "Converts AI concepts into revenue-generating products with the engineering rigor to survive enterprise procurement, security review, and real-world scale.",
    metrics: [
      { label: "Average Time to Production", value: "6–10 Wks" },
      { label: "Engineering Reliability", value: "99.9%" },
      { label: "Enterprise Ready", value: "100%" },
    ],
    features: [
      { title: "Product Architecture", desc: "End-to-end AI product architecture and technical due diligence." },
      { title: "Model & Integration Strategy", desc: "Model selection, fine-tuning, and integration strategy." },
      { title: "Production Data Pipelines", desc: "Data pipeline and infrastructure design for production scale." },
      { title: "AI UX/UI Engineering", desc: "UX/UI engineering for AI-native interfaces." },
      { title: "Go-to-Market Readiness", desc: "Go-to-market technical readiness and scale testing." },
    ],
    techStack: ["Python", "FastAPI", "React", "PyTorch", "HuggingFace", "LangChain", "Docker", "Kubernetes", "AWS", "GCP"],
  },

  // ─── 2. AI Agents Development ───────────────────────────────────────────────
  "ai-agents-development": {
    title: "AI Agents Development",
    category: "AI DEVELOPMENT // SYS-01",
    tagline: "Autonomous Agents That Execute, Not Just Assist",
    description: "TECH6SENSE AI engineers AI agents capable of independently executing multi-step business processes — reasoning across tools, calling APIs, and orchestrating workflows without constant human supervision. These are not scripted chatbots; they are decision-making systems built to operate inside real enterprise environments, with guardrails, audit trails, and escalation logic engineered in from the start.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Design Your Autonomous Workforce",
    businessImpact: "Shifts routine operational execution from human teams to autonomous systems — freeing skilled staff for judgment-intensive work while maintaining full auditability.",
    metrics: [
      { label: "Autonomous Execution", value: "Multi-Step" },
      { label: "Human Escalation Gate", value: "Configurable" },
      { label: "System Auditability", value: "Full Log" },
    ],
    features: [
      { title: "Multi-Agent Orchestration", desc: "Multi-agent orchestration and task-planning architecture." },
      { title: "Tool & API Integration", desc: "Tool-use and API integration for autonomous execution." },
      { title: "Guardrail & Human-in-the-Loop", desc: "Guardrail, escalation, and human-in-the-loop design." },
      { title: "Agent Memory Systems", desc: "Agent memory and context-management systems." },
      { title: "Enterprise System Integration", desc: "Enterprise system integration (CRM, ERP, ITSM)." },
    ],
    techStack: ["LangChain", "LangGraph", "OpenAI", "Anthropic", "AutoGen", "Python", "FastAPI", "Redis", "PostgreSQL", "Docker"],
  },

  // ─── 3. AI Automation for Businesses ──────────────────────────────────────────
  "ai-automation-for-businesses": {
    title: "AI Automation for Businesses",
    category: "AUTOMATION & COPILOTS // SYS-02",
    tagline: "Automation Engineered Around Business Outcomes",
    description: "TECH6SENSE AI designs AI automation systems around specific operational bottlenecks — not generic workflow templates. Every automation engagement begins with process mapping and ends with a measurable reduction in manual effort, error rate, or cycle time across the targeted function.",
    accent: "#00A86B",
    accentRgb: "0, 168, 107",
    cta: "Map Your Automation Opportunity",
    businessImpact: "Reduces manual operational load and error rates while freeing teams to focus on strategic, judgment-based work.",
    metrics: [
      { label: "Manual Effort Reduction", value: "Significant" },
      { label: "Error Rate Reduction", value: "Measurable" },
      { label: "Cycle Time Speedup", value: "3×–5×" },
    ],
    features: [
      { title: "Process Mapping & Assessment", desc: "Business process mapping and automation opportunity assessment." },
      { title: "Cross-Department Automation", desc: "AI-driven workflow automation across operations, finance, and support." },
      { title: "Document Processing", desc: "Document processing and data extraction automation." },
      { title: "Cross-System Orchestration", desc: "Cross-department automation orchestration." },
      { title: "Continuous Optimization", desc: "Automation performance monitoring and continuous optimization." },
    ],
    techStack: ["Python", "Zapier", "n8n", "Apache Airflow", "LangChain", "Tesseract OCR", "AWS Lambda", "PostgreSQL", "REST APIs"],
  },

  // ─── 4. Generative AI Solutions ───────────────────────────────────────────────
  "generative-ai-solutions": {
    title: "Generative AI Solutions",
    category: "AUTOMATION & COPILOTS // SYS-02",
    tagline: "Generative AI Built for Enterprise Rigor, Not Novelty",
    description: "Generative AI's business value depends entirely on how it's engineered. TECH6SENSE AI builds generative systems — text, image, code, and structured-data generation — with the guardrails, evaluation frameworks, and domain grounding required for enterprise deployment, not just impressive demos.",
    accent: "#00A86B",
    accentRgb: "0, 168, 107",
    cta: "Explore Enterprise GenAI Solutions",
    businessImpact: "Converts generative AI from an experimental tool into a governed production capability that scales content and creative output without sacrificing quality control.",
    metrics: [
      { label: "Quality Assurance", value: "Governed" },
      { label: "Domain Grounding", value: "Enterprise" },
      { label: "Generation Types", value: "Text, Code, Media" },
    ],
    features: [
      { title: "Model Fine-Tuning & Prompts", desc: "Custom generative model fine-tuning and prompt architecture." },
      { title: "Content & Design Systems", desc: "Enterprise content and design generation systems." },
      { title: "Domain-Specific GenAI", desc: "Domain-specific generative AI (legal, financial, technical documentation)." },
      { title: "Evaluation & QA Frameworks", desc: "Output evaluation, bias testing, and quality assurance frameworks." },
      { title: "Enterprise Tool Integration", desc: "Generative AI integration into existing enterprise tools." },
    ],
    techStack: ["OpenAI", "Anthropic", "Google Gemini", "Stability AI", "LangChain", "Pinecone", "Python", "FastAPI", "AWS Bedrock"],
  },

  // ─── 5. Agentic AI Solutions ───────────────────────────────────────────────
  "agentic-ai-solutions": {
    title: "Agentic AI Solutions",
    category: "AI DEVELOPMENT // SYS-01",
    tagline: "Agentic Systems Engineered for Complex, Multi-Step Reasoning",
    description: "Agentic AI extends beyond single-task automation into systems capable of planning, reasoning, and adapting across extended workflows. TECH6SENSE AI architects these systems with layered governance — every autonomous decision point is traceable, controllable, and reversible.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Architect Your Agentic AI Strategy",
    businessImpact: "Enables enterprises to deploy autonomous reasoning systems for complex operations without ceding oversight or control.",
    metrics: [
      { label: "Decision Traceability", value: "100%" },
      { label: "Workflow Adaptability", value: "Dynamic" },
      { label: "Governance Layering", value: "Embedded" },
    ],
    features: [
      { title: "Agentic Architecture & Reasoning", desc: "Agentic workflow architecture and reasoning-chain design." },
      { title: "Multi-Step Planning", desc: "Multi-step planning and dynamic task decomposition." },
      { title: "Governance Layer Design", desc: "Governance layer design for autonomous decision points." },
      { title: "Cross-System Orchestration", desc: "Cross-system agentic orchestration." },
      { title: "Agentic Reliability Monitoring", desc: "Performance monitoring for agentic reliability." },
    ],
    techStack: ["LangGraph", "CrewAI", "AutoGen", "OpenAI", "Python", "FastAPI", "Kubernetes", "Apache Kafka", "Pinecone"],
  },

  // ─── 6. Custom AI Model Development ─────────────────────────────────────────
  "custom-ai-model-development": {
    title: "Custom AI Model Development",
    category: "AI DEVELOPMENT // SYS-01",
    tagline: "Models Trained on Your Data, Built for Your Domain",
    description: "Off-the-shelf models plateau at generic performance. TECH6SENSE AI develops custom AI models — trained, fine-tuned, and evaluated against an organization's proprietary data and domain constraints — to deliver accuracy and relevance that general-purpose models cannot match.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Discuss Your Custom Model Requirements",
    businessImpact: "Delivers AI accuracy and domain relevance that generic, off-the-shelf models structurally cannot achieve.",
    metrics: [
      { label: "Data Ownership", value: "100% Private" },
      { label: "Domain Tuning Accuracy", value: "High Precision" },
      { label: "Model Ownership", value: "Proprietary" },
    ],
    features: [
      { title: "Custom Architecture & Training", desc: "Custom model architecture design and training." },
      { title: "Domain Dataset Fine-Tuning", desc: "Domain-specific fine-tuning on proprietary datasets." },
      { title: "Evaluation & Bias Auditing", desc: "Model evaluation, benchmarking, and bias auditing." },
      { title: "Compression & Optimization", desc: "Model compression and deployment optimization." },
      { title: "Ongoing Model Retraining", desc: "Ongoing model retraining and performance management." },
    ],
    techStack: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "Weights & Biases", "ONNX", "TensorRT", "MLflow"],
  },

  // ─── 7. AI Software Development ─────────────────────────────────────────────
  "ai-software-development": {
    title: "AI Software Development",
    category: "AI DEVELOPMENT // SYS-01",
    tagline: "Software Engineered Around Intelligence, Not Bolted Onto It",
    description: "TECH6SENSE AI builds AI-native software — applications architected from the ground up around model inference, data pipelines, and intelligent logic, rather than conventional software with AI features retrofitted afterward.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Build Your AI-Native Application",
    businessImpact: "Delivers software built to handle the unique performance, latency, and data demands of AI systems, avoiding costly re-architecture later.",
    metrics: [
      { label: "Architecture Type", value: "AI-Native" },
      { label: "Latency Optimization", value: "Low-Latency" },
      { label: "Re-Architecture Risk", value: "Zero" },
    ],
    features: [
      { title: "AI-Native Architecture", desc: "AI-native application architecture and engineering." },
      { title: "Full-Stack AI/ML Pipelines", desc: "Full-stack development integrating AI/ML pipelines." },
      { title: "Microservices & APIs", desc: "API and microservices design for AI-driven applications." },
      { title: "Cloud-Native Infrastructure", desc: "Cloud-native deployment and scaling infrastructure." },
      { title: "Quality & Performance QA", desc: "Quality assurance and performance testing for AI systems." },
    ],
    techStack: ["Python", "Node.js", "TypeScript", "PostgreSQL", "Redis", "FastAPI", "Docker", "GitHub Actions", "Terraform"],
  },

  // ─── 8. AI Copilot Development ──────────────────────────────────────────────
  "ai-copilot-development": {
    title: "AI Copilot Development",
    category: "AUTOMATION & COPILOTS // SYS-02",
    tagline: "Copilots Built to Work Inside Your Systems, Not Beside Them",
    description: "TECH6SENSE AI engineers AI copilots and conversational assistants that integrate directly with internal knowledge bases, CRM, and enterprise systems — designed to execute tasks and surface answers within existing workflows, rather than functioning as a standalone widget.",
    accent: "#00A86B",
    accentRgb: "0, 168, 107",
    cta: "Design Your Enterprise Copilot",
    businessImpact: "Embeds AI assistance directly into daily workflows, reducing time-to-answer and support load across internal and customer-facing functions.",
    metrics: [
      { label: "Integration Depth", value: "Deep Native" },
      { label: "Time-to-Answer", value: "Instant" },
      { label: "Support Load Reduction", value: "Substantial" },
    ],
    features: [
      { title: "Copilot Knowledge Architecture", desc: "Enterprise copilot architecture and knowledge integration." },
      { title: "Conversational & Chatbot AI", desc: "Conversational AI and chatbot engineering." },
      { title: "Retrieval-Grounded Accuracy", desc: "Retrieval-grounded response systems for accuracy." },
      { title: "Multi-Channel Deployment", desc: "Multi-channel deployment (web, mobile, internal tools)." },
      { title: "Feedback Loop Optimization", desc: "Continuous learning and feedback-loop optimization." },
    ],
    techStack: ["OpenAI GPT-4o", "LangChain", "RAG", "Pinecone", "Weaviate", "Slack API", "Teams SDK", "Python", "React", "Node.js"],
  },

  // ─── 9. AI-as-a-Service (AIaaS) ─────────────────────────────────────────────
  "ai-as-a-service": {
    title: "AI-as-a-Service (AIaaS)",
    category: "ENTERPRISE AI & CLOUD // SYS-04",
    tagline: "Enterprise AI Capability, Delivered as a Service",
    description: "TECH6SENSE AI's AIaaS model gives organizations access to production-grade AI infrastructure, models, and tooling on a scalable, consumption-based basis — removing the capital burden of building an in-house AI stack from zero.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Access AI Capability On-Demand",
    businessImpact: "Lowers the capital and time barrier to enterprise AI adoption, letting organizations scale usage in line with actual business demand.",
    metrics: [
      { label: "Capital Requirement", value: "Zero CapEx" },
      { label: "Pricing Model", value: "Consumption-Based" },
      { label: "Time-to-Value", value: "Immediate" },
    ],
    features: [
      { title: "Managed Infrastructure", desc: "Managed AI infrastructure and model-hosting services." },
      { title: "Scalable API Access", desc: "Scalable API access to custom and foundation models." },
      { title: "Usage & Capacity Control", desc: "Usage-based pricing and capacity management." },
      { title: "Maintenance & Monitoring", desc: "Ongoing maintenance, monitoring, and support." },
      { title: "Rapid Capability Onboarding", desc: "Rapid onboarding for AI capability without in-house build-out." },
    ],
    techStack: ["FastAPI", "Kubernetes", "Docker", "AWS", "GCP", "Prometheus", "Grafana", "Nginx", "Cloudflare", "PostgreSQL"],
  },

  // ─── 10. AI Consulting & Corporate Training ─────────────────────────────────
  "ai-consulting-corporate-training": {
    title: "AI Consulting and Corporate Training",
    category: "ENTERPRISE AI & CLOUD // SYS-04",
    tagline: "Strategy and Capability-Building for Organizations Serious About AI",
    description: "TECH6SENSE AI's consulting practice helps leadership teams define a credible AI roadmap, while its corporate training programs build the internal literacy and technical capability required to execute it — ensuring AI adoption doesn't stall after the strategy deck is delivered.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Book an AI Strategy Session",
    businessImpact: "Builds durable internal AI capability and organizational buy-in, reducing dependence on external vendors for ongoing execution.",
    metrics: [
      { label: "Strategic Clarity", value: "Actionable Roadmap" },
      { label: "Internal AI Literacy", value: "Executive & Tech" },
      { label: "Adoption Continuity", value: "Long-Term" },
    ],
    features: [
      { title: "Readiness & Roadmapping", desc: "AI readiness assessment and strategic roadmapping." },
      { title: "Executive Briefings", desc: "Executive and board-level AI briefings." },
      { title: "Corporate Training Programs", desc: "Technical and non-technical corporate training programs." },
      { title: "Use-Case & ROI Modeling", desc: "Use-case prioritization and ROI modeling." },
      { title: "Change Management", desc: "Change management for AI adoption." },
    ],
    techStack: ["Python", "Jupyter", "TensorFlow", "OpenAI API", "AWS", "GCP", "Snowflake", "Tableau", "LangChain", "Miro"],
  },

  // ─── 11. AI Governance Consulting Services ──────────────────────────────────
  "ai-governance-consulting": {
    title: "AI Governance Consulting Services",
    category: "ENTERPRISE AI & CLOUD // SYS-04",
    tagline: "Governance Frameworks That Withstand Regulatory Scrutiny",
    description: "As AI regulation matures globally, governance can no longer be an afterthought. TECH6SENSE AI designs governance frameworks — covering risk classification, explainability, auditability, and regulatory alignment — built to withstand scrutiny from regulators, auditors, and boards alike.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Assess Your AI Governance Maturity",
    businessImpact: "Reduces regulatory and reputational risk exposure while enabling faster internal approval for AI initiatives.",
    metrics: [
      { label: "Regulatory Compliance", value: "Global Standards" },
      { label: "Model Explainability", value: "Audit-Ready" },
      { label: "Approval Velocity", value: "Accelerated" },
    ],
    features: [
      { title: "Risk Classification", desc: "AI risk assessment and classification frameworks." },
      { title: "Regulatory Alignment", desc: "Regulatory alignment (regional and sector-specific)." },
      { title: "Explainability & Auditability", desc: "Model explainability and auditability architecture." },
      { title: "Policy & Governance Docs", desc: "AI policy design and internal governance documentation." },
      { title: "Compliance Reporting", desc: "Ongoing governance monitoring and compliance reporting." },
    ],
    techStack: ["IBM OpenScale", "Microsoft Responsible AI", "Google PAIR", "Fairlearn", "Aequitas", "SHAP", "Python", "Confluence"],
  },

  // ─── 12. AI Integration and Cloud Services ─────────────────────────────────
  "ai-integration-cloud-services": {
    title: "AI Integration and Cloud Services",
    category: "ENTERPRISE AI & CLOUD // SYS-04",
    tagline: "AI Integration Built on Cloud Infrastructure That Scales",
    description: "Deploying AI is only as strong as the infrastructure underneath it. TECH6SENSE AI integrates AI models and systems into existing enterprise environments — architecting cloud infrastructure across major providers that scales reliably under real production load.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Plan Your AI Cloud Integration",
    businessImpact: "Ensures AI systems run reliably at production scale without infrastructure bottlenecks or unplanned cost overruns.",
    metrics: [
      { label: "Cloud Providers", value: "AWS, GCP, Azure" },
      { label: "Scale Reliability", value: "Production-Grade" },
      { label: "Cost Efficiency", value: "Optimized" },
    ],
    features: [
      { title: "System & Legacy Integration", desc: "AI system integration with legacy and existing infrastructure." },
      { title: "Hybrid Cloud Architecture", desc: "Multi-cloud and hybrid cloud architecture design." },
      { title: "Cloud Migration for AI", desc: "Cloud migration and modernization for AI workloads." },
      { title: "DevOps & IaC for AI", desc: "Infrastructure-as-code and DevOps for AI deployment." },
      { title: "Cost & Performance Tuning", desc: "Cost optimization and cloud performance management." },
    ],
    techStack: ["AWS", "GCP", "Azure", "Terraform", "Pulumi", "Apache Kafka", "Salesforce API", "SAP BAPI", "REST/GraphQL", "Datadog"],
  },

  // ─── 13. AI Security ──────────────────────────────────────────────────────
  "ai-security": {
    title: "AI Security",
    category: "ENTERPRISE AI & CLOUD // SYS-04",
    tagline: "Security Engineered for the Unique Risks of AI Systems",
    description: "AI systems introduce risk vectors conventional cybersecurity wasn't built for — prompt injection, model extraction, data leakage through inference, and adversarial manipulation. TECH6SENSE AI engineers security specifically for these AI-native threat categories, not just traditional application security.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Assess Your AI Security Exposure",
    businessImpact: "Closes AI-specific security gaps that conventional cybersecurity approaches overlook, protecting proprietary models and sensitive data.",
    metrics: [
      { label: "AI Threat Mitigation", value: "Prompt & Model" },
      { label: "Data Leakage Defense", value: "Zero-Trust" },
      { label: "Security Monitoring", value: "Continuous 24/7" },
    ],
    features: [
      { title: "AI Threat Modeling", desc: "AI-specific threat modeling and vulnerability assessment." },
      { title: "Model Defense Architecture", desc: "Model security (extraction, poisoning, adversarial defense)." },
      { title: "Data Privacy Architecture", desc: "Data privacy and leakage-prevention architecture." },
      { title: "Secure Deployment Pipelines", desc: "Secure AI deployment pipeline design." },
      { title: "Security Monitoring & Incident", desc: "Continuous AI security monitoring and incident response." },
    ],
    techStack: ["AWS KMS", "Azure Key Vault", "Vault by HashiCorp", "OWASP", "Guardrails AI", "Presidio", "Datadog Security", "Falco", "OPA"],
  },

  // ─── 14. AI Design ────────────────────────────────────────────────────────
  "ai-design": {
    title: "AI Design",
    category: "ADVANCED TECH & SOFTWARE // SYS-05",
    tagline: "Design Built for How Humans Actually Interact with AI",
    description: "AI interfaces fail when they treat intelligent systems like conventional software. TECH6SENSE AI's design practice is built specifically around AI-native interaction patterns — conversational flows, trust signals, uncertainty communication, and human-in-the-loop controls — so users trust and adopt what's built.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Design Your AI User Experience",
    businessImpact: "Drives higher user adoption and trust in AI systems by designing for the specific ways humans interact with intelligent interfaces.",
    metrics: [
      { label: "UX Trust Factor", value: "Maximized" },
      { label: "User Adoption Rate", value: "High Impact" },
      { label: "Interaction Patterns", value: "AI-Native" },
    ],
    features: [
      { title: "AI UX/UI Architecture", desc: "AI-native UX/UI design and interaction architecture." },
      { title: "Conversational & Dialogue", desc: "Conversational interface and dialogue design." },
      { title: "Trust & Transparency Design", desc: "Trust, transparency, and uncertainty-communication design." },
      { title: "Human-in-the-Loop Controls", desc: "Human-in-the-loop control interface design." },
      { title: "Design Systems for AI", desc: "Design systems for AI product suites." },
    ],
    techStack: ["Figma", "Framer", "Adobe XD", "Protopie", "Lottie", "React", "Tailwind CSS", "Storybook", "UserTesting", "Maze"],
  },

  // ─── 15. AIOps and MLOps ───────────────────────────────────────────────────
  "aiops-mlops": {
    title: "AIOps and MLOps",
    category: "ENTERPRISE AI & CLOUD // SYS-04",
    tagline: "Operational Discipline for AI and ML Systems in Production",
    description: "Models degrade, pipelines break, and infrastructure drifts. TECH6SENSE AI builds AIOps and MLOps practices — continuous integration, deployment, monitoring, and retraining pipelines — that keep AI and ML systems performing reliably long after initial launch.",
    accent: "#1746D2",
    accentRgb: "23, 70, 210",
    cta: "Strengthen Your AI Operations Pipeline",
    businessImpact: "Prevents model and pipeline degradation over time, protecting the ROI of AI investments long after go-live.",
    metrics: [
      { label: "Pipeline Reliability", value: "Continuous" },
      { label: "Drift Prevention", value: "Automated" },
      { label: "Model Lifecycle ROI", value: "Sustained" },
    ],
    features: [
      { title: "CI/CD for ML Deployment", desc: "CI/CD pipeline design for ML model deployment." },
      { title: "Monitoring & Retraining", desc: "Model monitoring, drift detection, and automated retraining." },
      { title: "Infrastructure Monitoring", desc: "Infrastructure monitoring and incident response for AI systems." },
      { title: "Version Control & Reproducibility", desc: "Version control and reproducibility for models and data." },
      { title: "MLOps Platform Architecture", desc: "Scalable MLOps platform architecture." },
    ],
    techStack: ["MLflow", "Kubeflow", "Apache Airflow", "Seldon Core", "BentoML", "Prometheus", "Grafana", "Kubernetes", "ArgoCD", "DVC"],
  },

  // ─── 16. Enterprise Software Development ────────────────────────────────────
  "enterprise-software-development": {
    title: "Enterprise Software Development",
    category: "ADVANCED TECH & SOFTWARE // SYS-05",
    tagline: "Enterprise Software Engineered for Scale, Security, and Longevity",
    description: "TECH6SENSE AI builds enterprise software systems designed to withstand the operational complexity, security requirements, and regulatory scrutiny that large organizations face — architected for a multi-year lifecycle, not a quick launch.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Discuss Your Enterprise Software Needs",
    businessImpact: "Delivers software infrastructure built for organizational longevity, reducing costly re-engineering as the business scales.",
    metrics: [
      { label: "Lifecycle Span", value: "Multi-Year" },
      { label: "Enterprise Security", value: "Rigorous" },
      { label: "Scalability Scope", value: "Global Scale" },
    ],
    features: [
      { title: "Enterprise Architecture", desc: "Enterprise application architecture and full-stack development." },
      { title: "Legacy System Modernization", desc: "Legacy system modernization and integration." },
      { title: "Scalable Microservices & APIs", desc: "Scalable microservices and API architecture." },
      { title: "Security & Compliance", desc: "Enterprise-grade security and compliance engineering." },
      { title: "Long-Term Technical Support", desc: "Long-term maintenance and technical support." },
    ],
    techStack: ["React", "Next.js", "Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Kubernetes", "AWS", "Terraform", "GitHub Actions"],
  },

  // ─── 17. Blockchain Development ─────────────────────────────────────────────
  "blockchain-development": {
    title: "Blockchain Development",
    category: "ADVANCED TECH & SOFTWARE // SYS-05",
    tagline: "Blockchain Engineering for Enterprises That Need Trust by Design",
    description: "TECH6SENSE AI builds blockchain systems for use cases where trust, transparency, and immutability are structural requirements, not marketing language — from smart contract engineering to enterprise-grade decentralized applications.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Explore Blockchain for Your Business",
    businessImpact: "Enables verifiable, tamper-resistant transaction and record systems where trust and transparency directly affect commercial or regulatory outcomes.",
    metrics: [
      { label: "Data Integrity", value: "Immutability" },
      { label: "Trust Architecture", value: "By Design" },
      { label: "Contract Auditing", value: "Verifiable" },
    ],
    features: [
      { title: "Smart Contract Development", desc: "Smart contract development and security auditing." },
      { title: "Blockchain Architecture", desc: "Private, public, and consortium blockchain architecture." },
      { title: "dApp Development", desc: "Decentralized application (dApp) development." },
      { title: "Digital Asset Infrastructure", desc: "Tokenization and digital asset infrastructure." },
      { title: "Enterprise System Integration", desc: "Blockchain integration with existing enterprise systems." },
    ],
    techStack: ["Solidity", "Rust", "Ethereum", "Solana", "Hardhat", "Foundry", "OpenZeppelin", "IPFS", "Ethers.js", "Hyperledger Fabric"],
  },

  // ─── 18. Data Analytics & Business Intelligence ──────────────────────────────
  "data-analytics-business-intelligence": {
    title: "Data Analytics & Business Intelligence",
    category: "DATA & VISUAL INTELLIGENCE // SYS-03",
    tagline: "Analytics Systems Built for Decisions, Not Just Dashboards",
    description: "Dashboards without decision-relevance are noise. TECH6SENSE AI builds data analytics and BI systems architected around the specific decisions an organization needs to make faster and with greater confidence — from data pipeline to executive-ready insight.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Build Your Analytics Infrastructure",
    businessImpact: "Converts fragmented enterprise data into a decision-ready asset, accelerating strategic and operational response time.",
    metrics: [
      { label: "Decision Relevance", value: "High Focus" },
      { label: "Insight Velocity", value: "Real-Time" },
      { label: "Data Governance", value: "Enterprise" },
    ],
    features: [
      { title: "Data Warehouse Architecture", desc: "Data warehouse and pipeline architecture." },
      { title: "BI Dashboard Design", desc: "Business intelligence dashboard design and development." },
      { title: "Advanced Statistical Modeling", desc: "Advanced analytics and statistical modeling." },
      { title: "Real-Time Analytics & Reporting", desc: "Real-time analytics and reporting systems." },
      { title: "Data Governance & Quality", desc: "Data governance and quality management." },
    ],
    techStack: ["Python", "dbt", "Apache Spark", "Snowflake", "BigQuery", "Tableau", "Power BI", "Looker", "Airflow", "PostgreSQL"],
  },

  // ─── 19. Internet of Things (IoT) Development ────────────────────────────────
  "internet-of-things-development": {
    title: "Internet of Things (IoT) Development",
    category: "ADVANCED TECH & SOFTWARE // SYS-05",
    tagline: "IoT Systems That Turn Physical Operations into Real-Time Intelligence",
    description: "TECH6SENSE AI designs IoT architectures that connect physical devices and sensors to enterprise data and AI systems — transforming physical operations into real-time, actionable intelligence rather than isolated device telemetry.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Connect Your Operations with IoT",
    businessImpact: "Converts physical operations data into real-time intelligence, enabling predictive maintenance and operational optimization.",
    metrics: [
      { label: "Operational Telemetry", value: "Real-Time" },
      { label: "Edge Computing", value: "Intelligent" },
      { label: "Predictive Maintenance", value: "Automated" },
    ],
    features: [
      { title: "Device & Sensor Integration", desc: "IoT device integration and sensor network architecture." },
      { title: "Edge Computing Processing", desc: "Edge computing and real-time data processing." },
      { title: "Platform & Device Management", desc: "IoT platform development and device management." },
      { title: "Predictive Operational Monitoring", desc: "Predictive maintenance and operational monitoring systems." },
      { title: "IoT Security & Pipeline", desc: "IoT security and data pipeline architecture." },
    ],
    techStack: ["AWS IoT Core", "Azure IoT Hub", "MQTT", "Python", "TensorFlow Lite", "Raspberry Pi", "Arduino", "InfluxDB", "Grafana", "NVIDIA Jetson"],
  },

  // ─── 20. Virtual Reality (VR) & Augmented Reality (AR) ───────────────────────
  "ar-vr-development": {
    title: "Virtual Reality (VR) & Augmented Reality (AR)",
    category: "ADVANCED TECH & SOFTWARE // SYS-05",
    tagline: "Immersive Technology Engineered for Enterprise Use Cases",
    description: "Beyond entertainment, AR and VR are becoming core enterprise tools — for training simulation, spatial visualization, and immersive customer engagement. TECH6SENSE AI builds AR/VR applications engineered specifically for these enterprise-grade use cases.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Explore AR/VR for Your Enterprise",
    businessImpact: "Reduces training costs and accelerates skill acquisition through immersive simulation, while enhancing customer engagement through spatial visualization.",
    metrics: [
      { label: "Training Speedup", value: "Immersive" },
      { label: "Spatial Visualization", value: "3D Enterprise" },
      { label: "Customer Engagement", value: "High Impact" },
    ],
    features: [
      { title: "VR Training Simulation", desc: "VR training simulation and skill development platforms." },
      { title: "AR Operational Visualization", desc: "AR visualization for engineering, design, and operations." },
      { title: "Immersive Product Experience", desc: "Immersive customer experience and product visualization." },
      { title: "Cross-Platform AR/VR", desc: "Cross-platform AR/VR application development." },
      { title: "3D Spatial Computing", desc: "3D modeling and spatial computing integration." },
    ],
    techStack: ["Unity", "Unreal Engine", "WebXR", "ARKit", "ARCore", "Meta SDK", "HoloLens SDK", "Blender", "WebGL", "Three.js"],
  },

  // ─── 21. Robotic Process Automation ─────────────────────────────────────────
  "robotic-process-automation": {
    title: "Robotic Process Automation",
    category: "AUTOMATION & COPILOTS // SYS-02",
    tagline: "RPA Engineered for Precision at Enterprise Volume",
    description: "TECH6SENSE AI implements robotic process automation for high-volume, rules-based processes — engineered for the precision, exception-handling, and audit trail requirements that enterprise operations demand.",
    accent: "#00A86B",
    accentRgb: "0, 168, 107",
    cta: "Identify Your RPA Opportunities",
    businessImpact: "Eliminates manual processing errors and accelerates cycle times for high-volume, repetitive enterprise operations.",
    metrics: [
      { label: "Manual Processing Errors", value: "Zero" },
      { label: "Volume Precision", value: "Enterprise" },
      { label: "Audit Compliance", value: "Strict" },
    ],
    features: [
      { title: "Process Opportunity Assessment", desc: "Process discovery and RPA opportunity assessment." },
      { title: "Rules-Based Bot Development", desc: "Bot development for rules-based process automation." },
      { title: "Cognitive AI Integration", desc: "RPA and AI integration for cognitive automation." },
      { title: "Exception Handling Architecture", desc: "Exception handling and audit trail architecture." },
      { title: "RPA Governance & Lifecycle", desc: "RPA governance and bot lifecycle management." },
    ],
    techStack: ["UiPath", "Automation Anywhere", "Power Automate", "Python", "Selenium", "Playwright", "SAP", "Oracle", "MS Office APIs"],
  },

  // ─── 22. Machine Learning Development Services ────────────────────────────────
  "machine-learning-development": {
    title: "Machine Learning Development Services",
    category: "DATA & VISUAL INTELLIGENCE // SYS-03",
    tagline: "Machine Learning Systems Engineered for Production Reliability",
    description: "TECH6SENSE AI builds machine learning systems designed for the full lifecycle — data preparation, model development, validation, deployment, and ongoing monitoring — so ML initiatives deliver sustained business value rather than a one-time research result.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Start Your ML Development Project",
    businessImpact: "Delivers machine learning systems built for sustained production performance, not just one-off research accuracy.",
    metrics: [
      { label: "Production Performance", value: "Sustained" },
      { label: "Lifecycle Scope", value: "End-to-End" },
      { label: "Validation Rigor", value: "Production-Grade" },
    ],
    features: [
      { title: "Feature Engineering & Data Prep", desc: "Data preparation, feature engineering, and pipeline design." },
      { title: "Custom ML Model Development", desc: "Custom ML model development and validation." },
      { title: "Production Deployment", desc: "Model deployment and production integration." },
      { title: "Monitoring & Retraining", desc: "Performance monitoring and continuous retraining." },
      { title: "ML Scalability Architecture", desc: "ML infrastructure and scalability architecture." },
    ],
    techStack: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch", "MLflow", "Kubeflow", "AWS SageMaker", "Feast"],
  },

  // ─── 23. Computer Vision Development Services ─────────────────────────────────
  "computer-vision-development": {
    title: "Computer Vision Development Services",
    category: "DATA & VISUAL INTELLIGENCE // SYS-03",
    tagline: "Computer Vision Systems Built for Real-World Visual Complexity",
    description: "TECH6SENSE AI engineers computer vision systems — object detection, quality inspection, facial and image recognition — trained to perform reliably against real-world visual variability, not just curated lab datasets.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Explore Computer Vision Applications",
    businessImpact: "Enables automated visual inspection and monitoring at speeds and accuracy levels beyond manual capability.",
    metrics: [
      { label: "Visual Inspection Speed", value: "Super-Human" },
      { label: "Real-World Robustness", value: "High Precision" },
      { label: "Recognition Accuracy", value: "Production-Grade" },
    ],
    features: [
      { title: "Object Detection & Classification", desc: "Object detection and image classification systems." },
      { title: "Automated Quality Inspection", desc: "Automated visual quality inspection and defect detection." },
      { title: "Facial & Biometric Analysis", desc: "Facial recognition and biometric analysis systems." },
      { title: "Video Analytics & Monitoring", desc: "Video analytics and real-time monitoring." },
      { title: "CV Training & Optimization", desc: "Computer vision model training and optimization." },
    ],
    techStack: ["Python", "OpenCV", "PyTorch", "YOLOv9", "TensorRT", "ONNX", "Roboflow", "AWS Rekognition", "NVIDIA Jetson", "MediaPipe"],
  },

  // ─── 24. Predictive Modelling Analytics ─────────────────────────────────────
  "predictive-modeling-analytics": {
    title: "Predictive Modelling Analytics",
    category: "DATA & VISUAL INTELLIGENCE // SYS-03",
    tagline: "Predictive Models Built to Forecast What Matters to the Business",
    description: "TECH6SENSE AI builds predictive analytics models designed around specific business forecasting needs — demand, risk, churn, or operational failure — engineered for statistical rigor and integrated directly into decision workflows.",
    accent: "#D4AF37",
    accentRgb: "212, 175, 55",
    cta: "Build Your Predictive Analytics Model",
    businessImpact: "Shifts decision-making from reactive to anticipatory, improving planning accuracy across demand, risk, and operational forecasting.",
    metrics: [
      { label: "Forecasting Shift", value: "Anticipatory" },
      { label: "Statistical Rigor", value: "Verified" },
      { label: "Decision Integration", value: "Direct Workflow" },
    ],
    features: [
      { title: "Predictive Model Design", desc: "Predictive model design and statistical validation." },
      { title: "Demand & Risk Forecasting", desc: "Demand forecasting and risk modeling." },
      { title: "Churn & Behavior Prediction", desc: "Customer churn and behavior prediction models." },
      { title: "Predictive Maintenance Modeling", desc: "Predictive maintenance modeling." },
      { title: "Workflow Decision Integration", desc: "Model integration into business decision workflows." },
    ],
    techStack: ["Python", "Prophet", "ARIMA", "Statsmodels", "XGBoost", "TensorFlow", "Databricks", "Snowflake", "Tableau", "FastAPI"],
  },

  // ─── 25. Natural Language Processing (NLP) and Conversational AI ─────────────
  "nlp-conversational-ai": {
    title: "Natural Language Processing (NLP) and Conversational AI",
    category: "AUTOMATION & COPILOTS // SYS-02",
    tagline: "Language Intelligence Engineered for Enterprise Accuracy",
    description: "TECH6SENSE AI builds NLP and conversational AI systems — sentiment analysis, document understanding, multilingual processing, and dialogue systems — engineered for the linguistic and contextual accuracy enterprise use cases demand.",
    accent: "#00A86B",
    accentRgb: "0, 168, 107",
    cta: "Build Your NLP Solution",
    businessImpact: "Automates large-scale text and language processing tasks with the contextual accuracy required for enterprise-grade decision-making.",
    metrics: [
      { label: "Language Processing Scale", value: "Large-Scale" },
      { label: "Contextual Accuracy", value: "Enterprise" },
      { label: "Multilingual Support", value: "Global" },
    ],
    features: [
      { title: "Text & Sentiment Extraction", desc: "Text classification, sentiment, and entity extraction." },
      { title: "Document Understanding", desc: "Document understanding and information extraction." },
      { title: "Multilingual Translation Systems", desc: "Multilingual NLP and translation systems." },
      { title: "Conversational Dialogue Systems", desc: "Conversational AI and dialogue system engineering." },
      { title: "Domain LLM Fine-Tuning", desc: "Domain-specific language model fine-tuning." },
    ],
    techStack: ["spaCy", "HuggingFace Transformers", "Rasa", "Dialogflow", "OpenAI", "Whisper", "FastAPI", "WebSockets", "Elasticsearch"],
  },

  // ─── 26. Retrieval-Augmented Generation (RAG) ──────────────────────────────
  "retrieval-augmented-generation": {
    title: "Retrieval-Augmented Generation (RAG)",
    category: "AUTOMATION & COPILOTS // SYS-02",
    tagline: "Generative AI, Grounded in Your Enterprise's Own Knowledge",
    description: "Generic generative AI hallucinates when it lacks grounding. TECH6SENSE AI builds retrieval-augmented generation systems that connect generative models directly to an organization's verified knowledge base — internal documents, databases, and proprietary content — for responses that are accurate, current, and source-attributable.",
    accent: "#00A86B",
    accentRgb: "0, 168, 107",
    cta: "Ground Your Generative AI in Real Knowledge",
    businessImpact: "Reduces AI hallucination risk and ensures generative outputs are grounded in verified, enterprise-specific knowledge — critical for regulated and high-stakes use cases.",
    metrics: [
      { label: "Hallucination Risk", value: "Minimizing" },
      { label: "Source Attribution", value: "100% Attributable" },
      { label: "Knowledge Grounding", value: "Enterprise Base" },
    ],
    features: [
      { title: "Vector & Retrieval Pipelines", desc: "Vector database and retrieval pipeline architecture." },
      { title: "Knowledge Base Integration", desc: "Enterprise knowledge base integration for grounded responses." },
      { title: "Hybrid Retrieval & Re-ranking", desc: "Hybrid retrieval and re-ranking system design." },
      { title: "Source Attribution Generation", desc: "Source attribution and citation-accurate response generation." },
      { title: "RAG Evaluation & Tuning", desc: "RAG performance evaluation and continuous tuning." },
    ],
    techStack: ["Pinecone", "Weaviate", "Qdrant", "LangChain", "LlamaIndex", "OpenAI", "Python", "FastAPI", "PostgreSQL"],
  },

};
