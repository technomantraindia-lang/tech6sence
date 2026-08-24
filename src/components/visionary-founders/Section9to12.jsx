import React, { useState, useEffect, useCallback } from 'react';
import flagAus from '../../assets/flags/australia.webp';
import flagCan from '../../assets/flags/canada.webp';
import flagEu from '../../assets/flags/eu.webp';
import flagInd from '../../assets/flags/india.webp';
import flagSgp from '../../assets/flags/singapore.webp';
import flagUae from '../../assets/flags/uae.webp';
import flagUk from '../../assets/flags/uk.webp';
import flagUsa from '../../assets/flags/usa.webp';
import { touchHoverProps } from '../../hooks/useTouchHover';

export function HowItWorks() {
  const steps = [
    {
      num: "Step 1",
      title: "Application & Global Readiness Review",
      desc: "We evaluate your idea, target markets, and readiness for international positioning.",
      badgeBg: "bg-[#1746D2]",
      badgeText: "text-white",
      borderColor: "hover:border-[#1746D2]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(23,70,210,0.25)]",
      glowGradient: "from-[#1746D2]/40"
    },
    {
      num: "Step 2",
      title: "Legal Foundation and Premium Brand & Digital Build",
      desc: "Company registration and documentation, structured with cross-border operation in mind. Your branding manager and web team build a presence designed to compete against global players, not just local ones.",
      badgeBg: "bg-[#D4AF37]",
      badgeText: "text-slate-950 font-extrabold",
      borderColor: "hover:border-[#D4AF37]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]",
      glowGradient: "from-[#D4AF37]/45"
    },
    {
      num: "Step 3",
      title: "Technology Build",
      desc: "Your CTO, technical lead, project manager, and developers begin building your product to enterprise standard.",
      badgeBg: "bg-[#00A86B]",
      badgeText: "text-white",
      borderColor: "hover:border-[#00A86B]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(0,168,107,0.25)]",
      glowGradient: "from-[#00A86B]/40"
    },
    {
      num: "Step 4",
      title: "International Client Acquisition Training",
      desc: "You're trained to sell across markets and buying cultures, supported by your Client Success Manager.",
      badgeBg: "bg-[#1746D2]",
      badgeText: "text-white",
      borderColor: "hover:border-[#1746D2]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(23,70,210,0.25)]",
      glowGradient: "from-[#1746D2]/40"
    },
    {
      num: "Step 5",
      title: "Fundraising Activation",
      desc: "Introduction to government scheme funding and preparation for private investor conversations.",
      badgeBg: "bg-[#D4AF37]",
      badgeText: "text-slate-950 font-extrabold",
      borderColor: "hover:border-[#D4AF37]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]",
      glowGradient: "from-[#D4AF37]/45"
    },
    {
      num: "Step 6",
      title: "Global Expansion (Optional Track)",
      desc: "For founders ready to scale abroad — entity setup, visa support, and relocation guidance in your target country.",
      badgeBg: "bg-[#00A86B]",
      badgeText: "text-white",
      borderColor: "hover:border-[#00A86B]/60",
      shadowGlow: "hover:shadow-[0_0_30px_rgba(0,168,107,0.25)]",
      glowGradient: "from-[#00A86B]/40"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1746D2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00A86B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              THE SIX-PHASE FOUNDER JOURNEY
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            From Application to Global Company — Here's Exactly How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`bg-white p-4 sm:p-8 rounded-[2rem] border border-slate-200/90 shadow-sm ${step.shadowGlow} ${step.borderColor} hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between`}
              {...touchHoverProps}
            >
              {/* Top-Right Corner Color Glow on Hover */}
              <div className={`absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br ${step.glowGradient} to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`} />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-full opacity-60 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-xl text-xs font-mono font-bold tracking-wider uppercase ${step.badgeBg} ${step.badgeText} shadow-xs`}>
                    {step.num}
                  </span>
                </div>

                <h4 onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="font-display text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-[#1746D2] transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 font-medium text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingTiers() {
  // Leaving this component defined but minimal, as the comparison table is now handled in NewSections.jsx
  return null;
}

export function WhatMakesUsDifferent() {
  // Leaving this component defined but minimal, as it's fully covered in other sections or NewSections.jsx
  return null;
}

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stories = [
    {
      id: 1,
      title: "Automating Patient Triage & Operational Workflows",
      subtitle: "Agentic AI Healthcare Workflow System",
      client: "Regional Healthcare System",
      location: "USA",
      flag: flagUsa,
      accent: "#1746D2",
      tagline: "USA | Healthcare & Life Sciences",
      bottleneck: "Emergency departments were struggling with long wait times, manual patient intake, and delayed triage, leading to operational bottlenecks and lower patient satisfaction.",
      execution: "TECH6SENSE AI built a custom agentic AI workflow automation system integrated with Electronic Health Records (EHR) to automate patient triage, prioritize urgent cases, and streamline staff allocation.",
      result: "Achieved a 40% reduction in patient wait times, a 25% increase in daily patient throughput, and 99.2% accuracy in automated triage prioritization."
    },
    {
      id: 2,
      title: "AI-Driven Fraud Detection & Compliance Automation",
      subtitle: "Machine Learning & AML Compliance",
      client: "Tier-2 Commercial Bank",
      location: "United Kingdom",
      flag: flagUk,
      accent: "#00A86B",
      tagline: "UK | Banking & RegTech",
      bottleneck: "Manual transaction monitoring caused high false-positive rates in fraud alerts and delayed regulatory compliance reporting.",
      execution: "Implemented an enterprise machine learning and NLP framework that continuously analyzes transaction patterns and automates AML (Anti-Money Laundering) compliance reporting.",
      result: "Delivered a 65% drop in false-positive fraud alerts, 80% faster compliance audit preparation, and saved $3.2M in annual operational overhead."
    },
    {
      id: 3,
      title: "Generative AI Video Rendering & Visual Effects",
      subtitle: "Neural Rendering & VFX Pipelines",
      client: "Independent Media & Animation Studio",
      location: "Los Angeles, USA",
      flag: flagUsa,
      accent: "#D4AF37",
      tagline: "USA | Media & Visual Effects",
      bottleneck: "Visual effects (VFX) rendering was slow, costly, and created severe production delays for high-budget digital animation projects.",
      execution: "TECH6SENSE AI developed custom generative AI neural rendering pipelines to accelerate asset creation, background synthesis, and video post-processing.",
      result: "Cut visual rendering turnaround time by 70%, saved 45% in post-production software costs, and accelerated overall project delivery by 3 months."
    },
    {
      id: 4,
      title: "Industrial Computer Vision for Predictive Quality Shielding",
      subtitle: "Micro-Scale Edge Vision System",
      client: "Automotive Parts Manufacturer",
      location: "Germany",
      flag: flagEu,
      accent: "#1746D2",
      tagline: "Germany | Industrial Computer Vision",
      bottleneck: "Defective components were occasionally passing manual quality inspections, resulting in costly product recalls and factory downtime.",
      execution: "Deployed an edge-computed computer vision system on assembly lines to inspect parts in real-time at micro-scale accuracy.",
      result: "Achieved a 99.8% defective part detection rate, zero product recalls over 12 months, and saved $1.8M in potential recall liabilities."
    },
    {
      id: 5,
      title: "Autonomous Supply Chain & Inventory Optimization",
      subtitle: "Predictive Demand & Stock Distribution",
      client: "Global Consumer Electronics Retailer",
      location: "Singapore",
      flag: flagSgp,
      accent: "#00A86B",
      tagline: "Singapore | Supply Chain & Logistics",
      bottleneck: "Inaccurate demand forecasting led to frequent stockouts of high-demand products and excess inventory in warehouses.",
      execution: "Built a predictive machine learning model using multi-source market data, weather trends, and historical sales to optimize inventory distribution dynamically.",
      result: "Reduced holding costs by 32%, boosted overall sales fulfillment rate by 18%, and enabled real-time stock rebalancing across 120+ retail locations."
    },
    {
      id: 6,
      title: "Agentic Customer Support & Multilingual Resolution Engine",
      subtitle: "Multi-Agent Conversational System",
      client: "E-Commerce Marketplace",
      location: "UAE",
      flag: flagUae,
      accent: "#D4AF37",
      tagline: "UAE | E-Commerce Conversational AI",
      bottleneck: "Customer support teams were overwhelmed with repetitive inquiries across Arabic, English, and French, leading to high churn rates.",
      execution: "Implemented a multi-agent conversational AI system capable of handling complex customer orders, returns, and dispute resolutions in real time.",
      result: "Achieved an 85% first-contact resolution rate without human intervention, a 60% reduction in customer support tickets, and 24/7 multilingual coverage."
    },
    {
      id: 7,
      title: "Generative AI Legal Document Teardown & Contract Analysis",
      subtitle: "Enterprise RAG Intelligence Platform",
      client: "Corporate Legal Consultancy",
      location: "London, UK",
      flag: flagUk,
      accent: "#1746D2",
      tagline: "UK | LegalTech Enterprise SaaS",
      bottleneck: "Reviewing hundreds of complex commercial contracts during M&A due diligence required thousands of billable hours from senior attorneys.",
      execution: "Engineered an enterprise RAG (Retrieval-Augmented Generation) document intelligence platform that extracts key legal clauses, identifies risk factors, and benchmarks contract terms.",
      result: "Accelerated contract review speed by 90%, decreased due diligence processing costs by 75%, and achieved 100% clause extraction accuracy."
    },
    {
      id: 8,
      title: "Smart Energy Grid & Thermal Optimization",
      subtitle: "Predictive IoT Building Management",
      client: "Commercial Real Estate Group",
      location: "Australia",
      flag: flagAus,
      accent: "#00A86B",
      tagline: "Australia | Energy & Real Estate",
      bottleneck: "Rising energy bills across 40+ high-rise office towers due to inefficient HVAC scheduling and peak demand surges.",
      execution: "TECH6SENSE AI deployed IoT sensors connected to a predictive AI thermal optimization engine that dynamically adjusts heating and cooling based on occupancy and weather forecasts.",
      result: "Reduced monthly energy consumption by 28%, offset 4,500 metric tons of carbon emissions annually, and achieved full ROI within 6 months."
    },
    {
      id: 9,
      title: "Predictive Crop Health & Precision Agricultural Shield",
      subtitle: "Multispectral Satellite Analytics",
      client: "AgriTech Enterprise",
      location: "Canada",
      flag: flagCan,
      accent: "#D4AF37",
      tagline: "Canada | AgriTech AI",
      bottleneck: "Unpredictable crop yield variations caused by early-stage disease outbreaks and inefficient irrigation scheduling.",
      execution: "Built an AI satellite-and-drone analytics platform that analyzes multispectral imagery to detect crop stress and automate precision irrigation.",
      result: "Increased crop yield per acre by 22%, reduced pesticide usage by 35%, and enabled early disease detection 14 days before visible symptoms."
    },
    {
      id: 10,
      title: "Generative BioTech Molecule Screening & Enzyme Synthesis",
      subtitle: "Deep Learning Molecular Simulations",
      client: "Biopharmaceutical Pioneer",
      location: "Boston, USA",
      flag: flagUsa,
      accent: "#1746D2",
      tagline: "USA | BioTech AI",
      bottleneck: "Screening millions of molecular compounds for drug candidate selection was taking years in laboratory environments.",
      execution: "Deployed a generative AI deep learning model trained on molecular structures to simulate compound stability and affinity in silico.",
      result: "Achieved a 10x acceleration in early-stage candidate screening, saved $5M in physical lab testing, and identified 2 high-affinity compounds for clinical trials."
    },
    {
      id: 11,
      title: "Sovereign Wealth Algorithmic Portfolio Rebalancing",
      subtitle: "Real-Time Multi-Asset Macro Engine",
      client: "Institutional Asset Manager",
      location: "Dubai, UAE",
      flag: flagUae,
      accent: "#00A86B",
      tagline: "UAE | Institutional WealthTech",
      bottleneck: "Portfolio managers struggled to execute real-time multi-asset hedging strategies across fluctuating global macro markets.",
      execution: "Engineered an algorithmic AI portfolio management engine that monitors macro signals and automates risk-adjusted asset allocation.",
      result: "Enhanced risk-adjusted portfolio returns by 15%, maintained 99.99% uptime during market volatility, and automated hedging across 5 global asset classes."
    },
    {
      id: 12,
      title: "Autonomous Fleet Management & Predictive Maintenance",
      subtitle: "Telematics Telemetry Engine",
      client: "Logistics & Freight Transport Operator",
      location: "USA",
      flag: flagUsa,
      accent: "#D4AF37",
      tagline: "USA | Fleet Logistics",
      bottleneck: "Unplanned vehicle breakdowns caused severe delivery delays and inflated fleet maintenance costs across 500+ commercial trucks.",
      execution: "Integrated vehicle telematics with predictive AI models to detect engine anomalies and schedule maintenance before failures occurred.",
      result: "Decreased unplanned breakdowns by 45%, reduced annual maintenance expenditure by 20%, and improved fleet fuel efficiency by 8%."
    },
    {
      id: 13,
      title: "Generative EdTech Adaptive Learning Platform",
      subtitle: "Hyper-Personalized Multilingual Tutoring",
      client: "Digital Education Provider",
      location: "India",
      flag: flagInd,
      accent: "#1746D2",
      tagline: "India | EdTech AI",
      bottleneck: "One-size-fits-all digital courses resulted in low student engagement and completion rates across regional language demographics.",
      execution: "Built a generative AI hyper-personalized learning system that adapts course content, quizzes, and tutoring speed based on individual student performance.",
      result: "Increased course completion rates by 60%, improved student test scores 3x, and scaled the platform to 250,000 active learners across 5 languages."
    },
    {
      id: 14,
      title: "Autonomous Maritime Port & Terminal Logistics",
      subtitle: "Vision & Crane Dispatch Platform",
      client: "Port Operations Terminal",
      location: "Singapore",
      flag: flagSgp,
      accent: "#00A86B",
      tagline: "Singapore | Maritime Terminal Logistics",
      bottleneck: "Port congestion and bottlenecked container crane scheduling caused long turnaround times for cargo vessels.",
      execution: "Deployed an AI computer vision and predictive scheduling platform that coordinates container placement, truck dispatch, and crane operations.",
      result: "Increased terminal container throughput by 24%, reduced vessel turnaround times by 30%, and recorded zero safety incidents over 12 months."
    },
    {
      id: 15,
      title: "Cross-Chain Regulatory Compliance & RegTech Shield",
      subtitle: "Automated Wallet Risk & AML Audit Engine",
      client: "Digital Asset Exchange",
      location: "Switzerland",
      flag: flagEu,
      accent: "#D4AF37",
      tagline: "Switzerland | RegTech Systems",
      bottleneck: "Keeping pace with evolving global cross-border crypto and fiat compliance rules required manual transaction auditing.",
      execution: "TECH6SENSE AI developed an automated RegTech compliance monitoring engine that tracks wallet transactions and auto-generates regulatory reports.",
      result: "Achieved a 99.9% compliance audit pass rate, reduced reporting time by 85%, and provided real-time transaction risk scoring across 15 blockchains."
    },
    {
      id: 16,
      title: "AI-Powered Dynamic Pricing for High-Volume E-Commerce",
      subtitle: "Reinforcement Learning Elasticity Engine",
      client: "Fashion Retail Group",
      location: "Spain",
      flag: flagEu,
      accent: "#1746D2",
      tagline: "Spain | E-Commerce Retail AI",
      bottleneck: "Static pricing models led to missed margin opportunities during demand surges and inventory gluts during off-seasons.",
      execution: "Implemented a dynamic AI pricing algorithm analyzing competitor prices, inventory levels, search trends, and customer purchase intent.",
      result: "Increased net profit margins by 19%, accelerated inventory turnover by 27%, and automated price adjustments across 50,000+ SKUs."
    },
    {
      id: 17,
      title: "Autonomous IT Infrastructure & Server Incident Resolution",
      subtitle: "Self-Healing AIOps Engine",
      client: "SaaS Enterprise Platform",
      location: "USA",
      flag: flagUsa,
      accent: "#00A86B",
      tagline: "USA | Enterprise AIOps",
      bottleneck: "IT ops teams spent hundreds of hours monthly manually diagnosing cloud server outages and database performance degradation.",
      execution: "Built an AIOps incident resolution framework that autonomously detects infrastructure anomalies, isolates root causes, and executes remediation scripts.",
      result: "Achieved an 82% decrease in Mean Time to Resolution (MTTR), resolved 95% of routine incidents autonomously, and saved $1.2M in engineering overhead."
    },
    {
      id: 18,
      title: "AI-Driven Talent Acquisition & Skill-Matching Matrix",
      subtitle: "Semantic Talent Evaluation Framework",
      client: "Global HR Consultancy",
      location: "UK",
      flag: flagUk,
      accent: "#D4AF37",
      tagline: "UK | HRTech AI",
      bottleneck: "Manual resume screening failed to identify top-tier engineering talent efficiently, leading to long hiring cycles.",
      execution: "Developed a semantic AI candidate matching engine that analyzes technical portfolios, project histories, and cognitive assessments to rank candidates objectively.",
      result: "Cut time-to-hire by 65%, increased 12-month candidate retention by 40%, and eliminated initial resume screening bias."
    },
    {
      id: 19,
      title: "Computer Vision Assembly Line Robotics & Precision Welding",
      subtitle: "Deep Learning Robotic Seam Inspection",
      client: "Heavy Machinery Fabricator",
      location: "Japan",
      flag: flagEu,
      accent: "#1746D2",
      tagline: "Japan | Industrial Robotics AI",
      bottleneck: "Weld seams on industrial equipment required tedious manual inspection to meet strict safety certification standards.",
      execution: "Integrated high-speed camera sensors with deep learning vision models to inspect weld integrity in real time on robotic welding arms.",
      result: "Achieved 100% automated weld inspection coverage, accelerated welding cycle times by 50%, and reported zero structural defects."
    },
    {
      id: 20,
      title: "Intelligent Document Processing for Insurance Claims",
      subtitle: "OCR & NLP Medical/Auto Claims Engine",
      client: "National Insurance Provider",
      location: "Canada",
      flag: flagCan,
      accent: "#00A86B",
      tagline: "Canada | InsurTech IDP",
      bottleneck: "Processing paper-heavy medical and auto insurance claims created a 3-week backlog and dissatisfied policyholders.",
      execution: "Deployed an Intelligent Document Processing (IDP) system that ingests claim documents, extracts unstructured data via OCR/NLP, and auto-routes claims for approval.",
      result: "Reduced claim processing times by 80% (from 21 days to 3 days), automated 70% of straightforward claims, and saved $2.5M in Year 1."
    },
    {
      id: 21,
      title: "AI Predictive Maintenance for Telecom Cell Towers",
      subtitle: "IoT Telemetry Outage Prediction",
      client: "Telecommunications Carrier",
      location: "USA",
      flag: flagUsa,
      accent: "#D4AF37",
      tagline: "USA | Telecom Infrastructure",
      bottleneck: "Remote cell tower outages in hard-to-reach geographic locations caused service downtime and high emergency repair costs.",
      execution: "Built a predictive maintenance platform using sensor telemetry, weather models, and equipment age data to predict tower component failures.",
      result: "Reduced network downtime by 40%, decreased field technician dispatch costs by 30%, and identified failing batteries 3 weeks prior to breakdown."
    },
    {
      id: 22,
      title: "Generative Marketing Campaign & Content Engine",
      subtitle: "Localized Multi-Demographic Creative AI",
      client: "Global Digital Marketing Agency",
      location: "France",
      flag: flagEu,
      accent: "#1746D2",
      tagline: "France | Generative AdTech",
      bottleneck: "Creating localized, high-performing ad copy and visual creative assets for international brands was slow and resource-intensive.",
      execution: "Developed a custom Generative AI Marketing Engine that automatically generates brand-compliant copy, image variations, and video ads tuned for specific target demographics.",
      result: "Increased creative ad output 5x, boosted ad click-through rates (CTR) by 35%, and cut content production turnaround time by 60%."
    },
    {
      id: 23,
      title: "AI-Driven Fraud Detection for Insurance Claims",
      subtitle: "Social Graph & Anomaly Shield",
      client: "Property & Casualty Insurer",
      location: "USA",
      flag: flagUsa,
      accent: "#00A86B",
      tagline: "USA | InsurTech Fraud Prevention",
      bottleneck: "Sophisticated fraudulent claims were going undetected, costing tens of millions annually in fraudulent payouts.",
      execution: "Implemented a machine learning anomaly detection engine that cross-references claim details, social graph data, and historical fraud patterns.",
      result: "Flagged and prevented $12M in fraudulent claims in Year 1, increased fraud detection accuracy 4x, with zero impact on legitimate claims."
    },
    {
      id: 24,
      title: "Intelligent Warehouse Robotics & Route Optimization",
      subtitle: "3D Spatial AMR Fleet Dispatcher",
      client: "Third-Party Logistics (3PL) Provider",
      location: "Netherlands",
      flag: flagEu,
      accent: "#D4AF37",
      tagline: "Netherlands | Warehouse Robotics",
      bottleneck: "In-warehouse picker routes were inefficient, leading to high labor costs and order fulfillment delays during peak shopping seasons.",
      execution: "Deployed an AI route optimization algorithm that dynamically calculates optimal picking paths for warehouse staff and Autonomous Mobile Robots (AMRs).",
      result: "Increased order picking efficiency by 35%, reduced employee foot travel by 25%, and boosted peak season order throughput by 50%."
    },
    {
      id: 25,
      title: "AI-Powered Personalization Engine for Digital Banking",
      subtitle: "Real-Time Spending & Recommendation System",
      client: "Neobank Platform",
      location: "Brazil",
      flag: flagUsa,
      accent: "#1746D2",
      tagline: "Brazil | Neobank FinTech",
      bottleneck: "Low customer retention and engagement rates due to generic mobile app interfaces and irrelevant product recommendations.",
      execution: "Built a real-time behavioral AI personalization engine that dynamically tailors app screens, financial tips, and product offers based on individual spending habits.",
      result: "Increased monthly active users (MAU) by 45%, achieved 3x higher adoption of financial products, and improved 6-month retention by 28%."
    },
    {
      id: 26,
      title: "Computer Vision Security & Access Control System",
      subtitle: "Biometric & Anti-Tailgating Sensors",
      client: "High-Security Data Center Operator",
      location: "USA",
      flag: flagUsa,
      accent: "#00A86B",
      tagline: "USA | Infrastructure Security",
      bottleneck: "Traditional keycard and manual security checks were vulnerable to tailgating and unauthorized facility access.",
      execution: "Deployed a multi-modal computer vision and biometric access system that verifies personnel identity and detects unauthorized entries in real time.",
      result: "Completely eliminated unauthorized tailgating incidents, established sub-second threat detection alerts, and maintained rapid employee access."
    },
    {
      id: 27,
      title: "Predictive Financial Risk Modeling & Credit Scoring",
      subtitle: "Alternative Data Credit Engine",
      client: "Fintech Lending Platform",
      location: "Mexico",
      flag: flagUsa,
      accent: "#D4AF37",
      tagline: "Mexico | FinTech Credit Scoring",
      bottleneck: "Traditional credit scoring models excluded underserved populations with limited credit histories, limiting market expansion.",
      execution: "Engineered an alternative data AI credit scoring model analyzing transaction behavior, utility payments, and mobile data usage to assess creditworthiness.",
      result: "Expanded loan approval volume by 50%, achieved a 30% lower default rate than traditional models, and processed 100,000+ monthly applications."
    },
    {
      id: 28,
      title: "AI-Powered Synthetic Data Generation for Clinical Trials",
      subtitle: "Differential Privacy Synthetic Data Engine",
      client: "Pharmaceutical Research Lab",
      location: "Switzerland",
      flag: flagEu,
      accent: "#1746D2",
      tagline: "Switzerland | BioTech Data AI",
      bottleneck: "Lack of diverse patient data delayed clinical trial modeling and drug safety testing for rare medical conditions.",
      execution: "TECH6SENSE AI created a privacy-compliant synthetic data engine that generates realistic, anonymized patient datasets for medical research.",
      result: "Accelerated clinical trial modeling by 6 months, guaranteed 100% HIPAA and GDPR compliance, and deployed synthetic data across 8 international trials."
    },
    {
      id: 29,
      title: "Autonomous Energy Trading & Grid Load Balancing",
      subtitle: "Predictive Spot Bidding Engine",
      client: "Renewable Energy Operator",
      location: "UK",
      flag: flagUk,
      accent: "#00A86B",
      tagline: "UK | Clean Energy AI",
      bottleneck: "Fluctuating wind and solar power generation made it difficult to balance grid supply and maximize energy trading revenues.",
      execution: "Implemented an AI predictive trading engine that forecasts weather patterns, energy demand, and spot prices to automate energy grid bids in real time.",
      result: "Increased energy trading revenue by 22%, reduced grid imbalance penalties by 15%, and automated real-time trading across 12 European power exchanges."
    },
    {
      id: 30,
      title: "Generative Product Design & Rapid Prototyping Engine",
      subtitle: "Automated CAD Geometry Optimization",
      client: "Consumer Electronics Manufacturer",
      location: "South Korea",
      flag: flagSgp,
      accent: "#D4AF37",
      tagline: "South Korea | Industrial Generative AI",
      bottleneck: "Industrial design teams spent months iterating on physical product casing prototypes to balance ergonomics, structural strength, and heat dissipation.",
      execution: "Deployed a generative design AI engine that evaluates thousands of CAD variations automatically to find optimal product forms.",
      result: "Reduced physical prototyping iterations by 80%, decreased raw material usage by 15%, and accelerated timeline from 9 months to 3 months."
    }
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  }, [stories.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  }, [stories.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-100/50 via-emerald-100/30 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Section Eyebrow & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#1746D2]" />
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              Global Success Stories
            </span>
            <span className="h-[2px] w-10 bg-[#00A86B]" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Visionary Founders – <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B]">Success Stories</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Real founders who built, scaled, and launched global companies through the TECH6SENSE AI Ecosystem.
          </p>
        </div>

        {/* 3D COVERFLOW SLIDER */}
        <div 
          className="relative w-full max-w-6xl mx-auto min-h-[420px] md:min-h-[480px] flex items-center justify-center py-6 perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Container */}
          <div className="relative w-full max-w-[380px] md:max-w-[440px] h-[360px] md:h-[400px] mx-auto transform-style-3d">
            {stories.map((story, index) => {
              let offset = index - currentIndex;
              const total = stories.length;

              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisibleCard = Math.abs(offset) <= 3;

              if (!isVisibleCard) return null;

              let cardTransform, cardOpacity;
              if (isMobile) {
                const translateX = offset * 105;
                const scale = isActive ? 1 : 0.82;
                cardOpacity = isActive ? 1 : 0.35;
                cardTransform = `translateX(${translateX}px) scale(${scale})`;
              } else {
                const translateX = offset * 175; 
                const translateY = Math.abs(offset) * 20; 
                const translateZ = Math.abs(offset) * -80; 
                const rotateY = offset * -16; 
                const rotateZ = offset * 1.5; 
                const scale = isActive ? 1 : 0.9 - Math.abs(offset) * 0.07;
                cardOpacity = isActive ? 1 : Math.max(0.35, 0.75 - Math.abs(offset) * 0.13);
                cardTransform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
              }
              const zIndex = 30 - Math.abs(offset) * 5;

              return (
                <div
                  key={story.id}
                  onClick={() => {
                    if (isActive) {
                      setSelectedStory(story);
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                  className="absolute top-0 left-0 w-full h-full rounded-3xl p-7 md:p-9 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer select-none overflow-hidden flex flex-col justify-between text-white"
                  style={{
                    backgroundColor: story.accent,
                    transform: cardTransform,
                    opacity: cardOpacity,
                    zIndex: zIndex,
                    transformOrigin: 'center center',
                    boxShadow: isActive 
                      ? `0 20px 45px -10px ${story.accent}80` 
                      : `0 10px 25px -10px rgba(0,0,0,0.15)`,
                  }}
                >
                  {/* Tagline & Flag */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {story.flag && (
                        <img src={story.flag} alt={`${story.location} flag`} className="w-5 h-auto rounded-[2px] shadow-sm" />
                      )}
                      <span className="font-mono text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-wider text-white/90">
                        {story.tagline}
                      </span>
                    </div>

                    <h3 className="font-display text-lg md:text-xl font-extrabold text-white leading-snug mb-3 line-clamp-2">
                      {story.title}
                    </h3>

                    <blockquote className="font-body text-xs md:text-sm text-white/95 font-medium leading-relaxed line-clamp-3 mb-4">
                      "{story.result}"
                    </blockquote>
                  </div>

                  {/* Client & Action */}
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/20 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                        {(story.client || story.founder || "Client").charAt(0)}
                      </div>
                      <div>
                        <div className="font-display text-xs md:text-sm font-bold text-white leading-none mb-1">
                          {story.client || story.founder}
                        </div>
                        <div className="text-[11px] text-white/80 font-medium leading-none">
                          {story.location}
                        </div>
                      </div>
                    </div>

                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStory(story);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white text-white hover:text-slate-900 font-extrabold text-[11px] transition-all duration-300 shrink-0"
                    >
                      Read Case →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls & Pagination Dots */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200/90 bg-white hover:bg-[#1746D2] text-slate-700 hover:text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0"
            {...touchHoverProps}
            aria-label="Previous story"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2 max-w-[320px] overflow-hidden py-2 px-1">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === idx ? 'w-8' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                style={{ backgroundColor: currentIndex === idx ? stories[currentIndex].accent : undefined }}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200/90 bg-white hover:bg-[#1746D2] text-slate-700 hover:text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0"
            {...touchHoverProps}
            aria-label="Next story"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* POPUP MODAL FOR DETAILED CASE STUDY */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center justify-between gap-4 mb-4 mt-2">
              <span className="px-3.5 py-1 rounded-full bg-[#1746D2]/10 text-[#1746D2] font-mono text-xs font-extrabold uppercase tracking-wider">
                {selectedStory.tagline}
              </span>
              <div className="text-xs font-bold text-slate-500">
                {selectedStory.location}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display mb-2 leading-tight">
              {selectedStory.title}
            </h3>

            <p className="text-xs font-extrabold text-[#00A86B] uppercase tracking-wider mb-4">
              {selectedStory.subtitle}
            </p>

            <div className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-4 mb-6">
              Client: <span className="text-[#1746D2] font-black text-base">{selectedStory.client || selectedStory.founder}</span>
            </div>

            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-md shadow-rose-500/50" />
                  The Bottleneck
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium pl-4">{selectedStory.bottleneck}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1746D2] shadow-md shadow-[#1746D2]/50" />
                  Ecosystem Execution
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium pl-4">{selectedStory.execution}</p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100/60 shadow-sm">
                <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-widest mb-1.5">The Commercial Result</h4>
                <p className="text-sm text-emerald-800 font-bold leading-relaxed">{selectedStory.result}</p>
              </div>

              {selectedStory.takeaway && (
                <div className="p-5 rounded-2xl bg-[#1746D2]/10 border border-[#1746D2]/20/60 shadow-sm">
                  <h4 className="font-bold text-[#1746D2] text-xs uppercase tracking-widest mb-1.5">Key Takeaway</h4>
                  <p className="text-sm text-[#1233A0] font-semibold leading-relaxed">{selectedStory.takeaway}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
