import React, { useEffect, useState, useRef } from 'react';

export default function IndustriesIntroSection() {
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

  const businessImpacts = [
    {
      objective: "Reduce operating costs",
      approach: "AI automation, intelligent workflows, AI agents",
      impact: "20–60% cost reduction"
    },
    {
      objective: "Increase workforce productivity",
      approach: "AI copilots, document intelligence, decision support",
      impact: "30–70% productivity improvement"
    },
    {
      objective: "Improve customer experience",
      approach: "Conversational AI, personalization, predictive service",
      impact: "25–50% higher customer satisfaction"
    },
    {
      objective: "Increase revenue",
      approach: "AI recommendations, forecasting, dynamic pricing",
      impact: "10–35% revenue growth"
    },
    {
      objective: "Improve operational quality",
      approach: "Computer vision, predictive analytics, anomaly detection",
      impact: "50–95% fewer operational errors"
    },
    {
      objective: "Accelerate decision making",
      approach: "Real-time dashboards, predictive models, executive AI assistants",
      impact: "Decisions in minutes instead of days"
    }
  ];

  const capabilities = [
    "AI Strategy & Digital Transformation",
    "Custom AI Product Development",
    "AI Agents & Multi-Agent Systems",
    "Generative AI & Large Language Models (LLMs)",
    "Retrieval-Augmented Generation (RAG)",
    "Natural Language Processing (NLP)",
    "Computer Vision & Intelligent Video Analytics",
    "Predictive Analytics & Machine Learning",
    "Intelligent Document Processing (IDP)",
    "Robotic Process Automation (RPA)",
    "AI Copilots for Employees and Customers",
    "Enterprise Knowledge Management",
    "AI Integration with ERP, CRM, EHR, SCM, and legacy systems",
    "AI Governance, Security, Compliance, and MLOps"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Intro Paragraphs */}
        <div className={`max-w-4xl mx-auto text-center mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
            At <span className="font-bold text-blue-700">TECH6SENSE AI</span>, we design and deploy enterprise-grade Artificial Intelligence solutions that automate operations, optimize decision-making, improve customer experiences, reduce operational costs, and create new revenue opportunities.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our AI experts combine Machine Learning, Generative AI, Computer Vision, NLP, Predictive Analytics, AI Agents, Robotics, and Intelligent Automation to solve real-world business problems across multiple industries.
          </p>
        </div>

        {/* Why Choose TECH6SENSE AI Table */}
        <div className={`mb-24 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Organizations Choose TECH6SENSE AI
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Across every industry, our approach focuses on measurable business outcomes rather than technology alone. Every engagement is built around a structured transformation methodology:
            </p>
          </div>

          <div className="overflow-hidden bg-white rounded-3xl border border-slate-200 shadow-sm max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-5 px-6 font-display font-bold text-slate-900 whitespace-nowrap">Business Objective</th>
                    <th className="py-5 px-6 font-display font-bold text-slate-900 min-w-[250px]">TECH6SENSE AI Approach</th>
                    <th className="py-5 px-6 font-display font-bold text-slate-900 whitespace-nowrap">Typical Business Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {businessImpacts.map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-800">{row.objective}</td>
                      <td className="py-5 px-6 text-slate-600 leading-relaxed">{row.approach}</td>
                      <td className="py-5 px-6 font-bold text-blue-700">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Enterprise AI Capabilities */}
        <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Enterprise AI Capabilities Delivered by TECH6SENSE AI
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our industry solutions are powered by a comprehensive AI technology stack, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
                <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 shrink-0 group-hover:scale-150 transition-transform" />
                <span className="font-body text-slate-700 font-medium leading-relaxed">{cap}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
