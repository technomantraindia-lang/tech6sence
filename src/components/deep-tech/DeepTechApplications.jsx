import React from 'react';

export default function DeepTechApplications() {
  const startupPoints = [
    "Product validation",
    "Intellectual property strategy",
    "Engineering teams",
    "AI expertise",
    "Manufacturing partnerships",
    "Investor readiness",
    "Branding",
    "GTM strategy",
    "Enterprise sales support",
    "Global expansion assistance"
  ];

  const nextGenTech = [
    "Artificial Intelligence",
    "Humanoid Robotics",
    "AI Healthcare",
    "Advanced Wearables",
    "Smart Materials",
    "Brain Computer Interfaces",
    "Digital Human",
    "Autonomous Systems",
    "Future Mobility",
    "Ambient Computing",
    "Human Augmentation",
    "Spatial Intelligence",
    "Edge Intelligence",
    "Future Consumer Electronics"
  ];

  const privacyCapabilities = [
    "End-to-end encryption",
    "Granular consent management",
    "Role-based access control",
    "Multi-factor authentication",
    "Audit logging",
    "Secure over-the-air (OTA) updates",
    "Device identity management",
    "AI governance and model lifecycle controls",
    "Data residency options (subject to deployment architecture)"
  ];

  const complianceStandards = [
    { code: "CE", desc: "European Economic Area" },
    { code: "FCC", desc: "United States" },
    { code: "UKCA", desc: "United Kingdom" },
    { code: "RoHS", desc: "Restriction of Hazardous Substances" },
    { code: "REACH", desc: "Chemical Registration & Safety" },
    { code: "WEEE", desc: "Waste Electrical and Electronic Equipment" },
    { code: "UL", desc: "Underwriters Laboratories Safety Certification" },
    { code: "IEC Standards", desc: "IEC electrical safety standards" },
    { code: "ISO 9001", desc: "Quality Management" },
    { code: "ISO 13485", desc: "Medical Device Quality Management" },
    { code: "ISO 27001", desc: "Information Security Management" },
    { code: "IEC 62304", desc: "Medical device software standard" },
    { code: "HIPAA-ready", desc: "Healthcare privacy compliance" },
    { code: "GDPR-ready", desc: "EU privacy compliance" },
    { code: "SOC 2-aligned", desc: "Security practices for cloud platforms" }
  ];

  const differentiators = [
    "End-to-end AI + hardware engineering",
    "Deep expertise across embedded systems, AI, cloud, and industrial design",
    "Startup-to-enterprise engagement model",
    "White-label, OEM, and ODM capabilities",
    "Global commercialization support",
    "Scalable manufacturing partnerships",
    "Security-first development",
    "Human-centered product design",
    "Dedicated cross-functional engineering teams",
    "Long-term lifecycle innovation and support"
  ];

  return (
    <div className="w-full bg-slate-50">
      
      {/* 1. STARTUP PRODUCT ECOSYSTEM */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
                  STARTUP PRODUCT ECOSYSTEM
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Build Your Own Global Deep-Tech Company
              </h2>
              <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                TECH6SENSE AI is more than a development partner—we are an innovation ecosystem for founders. Whether you have an idea on paper or a prototype in hand, we provide the expertise, technology, and strategic guidance to transform it into a globally scalable deep-tech business.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-3">
                {startupPoints.map((point, idx) => (
                  <span 
                    key={idx} 
                    className={`px-4 py-2.5 rounded-xl font-display text-xs md:text-sm font-bold shadow-sm transition-all duration-300 hover:shadow-md cursor-default select-none border-0 ${
                      idx % 2 === 0 
                        ? 'bg-blue-50/70 text-blue-800 hover:bg-blue-50' 
                        : 'bg-emerald-50/70 text-emerald-800 hover:bg-emerald-50'
                    }`}
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. RESEARCH & INNOVATION */}
      <section className="py-24 lg:py-32 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400">
                RESEARCH & INNOVATION
              </span>
              <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight font-extrabold text-white mb-6 tracking-tight">
              Innovation Never Stops
            </h2>
            <p className="font-body text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              Our dedicated R&D teams continuously explore next-generation technologies including:
            </p>
          </div>

          {/* Minimalist Boxless Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nextGenTech.map((tech, idx) => (
              <div key={idx} className="group relative flex items-center gap-3 py-2 cursor-default border-b border-slate-900 pb-3">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125 ${idx % 2 === 0 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]'}`} />
                <span className="font-body text-sm font-semibold text-slate-400 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {tech}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. DATA PRIVACY & TRUST */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
                  DATA PRIVACY & TRUST
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Trust is Foundational
              </h2>
              <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                The platform is designed with privacy-by-design and security-by-design principles. Depending on deployment requirements and jurisdictions, implementations can align with internationally recognized frameworks and applicable regulations.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {privacyCapabilities.map((cap, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3 border-0 ${
                      idx % 2 === 0 ? 'bg-blue-50/40 hover:bg-blue-50/70' : 'bg-emerald-50/40 hover:bg-emerald-50/70'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${idx % 2 === 0 ? 'bg-blue-600' : 'bg-emerald-500'}`} />
                    <span className="font-body text-xs md:text-sm font-semibold text-slate-800 leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. GLOBAL COMPLIANCE & CERTIFICATIONS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
                REGULATORY READINESS
              </span>
              <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Global Compliance & Certifications
            </h2>
            <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Every product is engineered with global regulatory readiness in mind to support international commercialization and enterprise adoption. Our development process is aligned to help meet regional and industry standards:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {complianceStandards.map((std, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border-0 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <span className={`font-display text-base md:text-lg font-black block mb-1 ${idx % 2 === 0 ? 'text-blue-700' : 'text-emerald-700'}`}>
                  {std.code}
                </span>
                <span className="font-body text-[0.7rem] text-slate-500 leading-snug">
                  {std.desc}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center font-mono text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mt-10">
            * Specific certifications depend on the product category, target market, intended use, and regulatory pathway.
          </p>

        </div>
      </section>

      {/* 5. WHY GLOBAL CLIENTS CHOOSE US */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
                CLIENT DIFFERENTIATORS
              </span>
              <span className="w-8 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why Global Clients Choose TECH6SENSE AI
            </h2>
          </div>

          {/* Differentiators Grid - bouncy hovers, no tilts, solid shadows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentiators.map((diff, idx) => {
              const cardBg = idx % 2 === 0 
                ? "bg-blue-50/40 hover:bg-blue-50 shadow-[2px_2px_4px_rgba(15,23,42,0.015)]" 
                : "bg-emerald-50/40 hover:bg-emerald-50 shadow-[2px_2px_4px_rgba(15,23,42,0.015)]";
              
              const badgeBg = idx % 2 === 0 
                ? "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white" 
                : "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white";

              const hoverText = idx % 2 === 0 
                ? "group-hover:text-blue-900" 
                : "group-hover:text-emerald-950";

              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl transition-all duration-300 border border-transparent flex flex-col justify-between group cursor-default select-none hover:-translate-y-2 hover:scale-[1.03] ${cardBg} ${
                    idx % 2 === 0 
                      ? 'hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.15)]' 
                      : 'hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.15)]'
                  }`}
                >
                  <div>
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold mb-4 transition-all duration-500 ease-out group-hover:rotate-[360deg] ${badgeBg}`}>
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className={`font-display text-base font-extrabold text-slate-900 transition-colors duration-300 leading-snug ${hoverText}`}>
                      {diff}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
