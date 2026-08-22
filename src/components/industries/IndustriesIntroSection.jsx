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
    <section ref={sectionRef} id="explore-industries" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-[1400px] px-6 space-y-24">
        
        {/* Why Choose TECH6SENSE AI & Transformation Table */}
        <div className={`transition-all duration-1000 ease-out space-y-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
              <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
                TRANSFORMATION METHODOLOGY
              </span>
              <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Why Organizations Choose TECH6SENSE AI
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Across every industries, our approach focuses on measurable business outcomes rather than technology alone. Every engagement is built around a structured transformation methodology:
            </p>
          </div>

          <div className="overflow-hidden bg-white rounded-3xl border border-slate-200 shadow-xl max-w-[1400px] mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-white font-extrabold">
                    <th className="py-5 px-6 font-display font-bold text-white uppercase tracking-wider text-sm whitespace-nowrap bg-slate-950">Business Objective</th>
                    <th className="py-5 px-6 font-display font-bold text-white uppercase tracking-wider text-sm min-w-[280px] bg-[#1746D2]">TECH6SENSE AI Approach</th>
                    <th className="py-5 px-6 font-display font-bold text-white uppercase tracking-wider text-sm whitespace-nowrap bg-[#00A86B]">Typical Business Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {businessImpacts.map((row, idx) => (
                    <tr key={idx} className="transition-colors even:bg-slate-50/60 hover:bg-blue-50/50">
                      <td className="py-5 px-6 font-bold text-slate-900">{row.objective}</td>
                      <td className="py-5 px-6 text-slate-600 font-medium leading-relaxed">{row.approach}</td>
                      <td className="py-5 px-6 font-extrabold text-[#00A86B]">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Enterprise AI Capabilities Delivered by TECH6SENSE AI */}
        <div className={`transition-all duration-1000 delay-300 ease-out space-y-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
              <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
                ENTERPRISE STACK
              </span>
              <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Enterprise AI Capabilities Delivered by TECH6SENSE AI
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Our industry solutions are powered by a comprehensive AI technology stack, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1400px] mx-auto">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1746D2] transition-all flex items-start gap-3.5 group"
              >
                <div className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] shrink-0 group-hover:scale-125 transition-transform" />
                <span className="font-body text-slate-800 font-semibold text-sm md:text-base leading-relaxed group-hover:text-[#1746D2] transition-colors">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
