import React, { useState, useEffect, useRef } from 'react';

const FAQS = [
  {
    cat: 'About TECH6SENSE',
    q: 'What does TECH6SENSE AI do?',
    a: 'TECH6SENSE AI is a global artificial intelligence development, full-stack IT services, and deep-tech product engineering company operating globally. We design, build, and deploy enterprise AI solutions, autonomous agent systems, proprietary deep-tech products, and scalable digital infrastructure for enterprises, governments, startups, and visionary founders.',
  },
  {
    cat: 'About TECH6SENSE',
    q: 'Is TECH6SENSE AI a service company, a product company, or an agency?',
    a: "None of the above in isolation. TECH6SENSE AI is an integrated intelligence ecosystem. We provide enterprise services and full-stack software development, engineer physical deep-tech products, and operate two ecosystem ventures: Visionary Founders (a global AI founder ecosystem) and Business Brains (an exclusive private network for investors and operators).",
  },
  {
    cat: 'About TECH6SENSE',
    q: 'Where is TECH6SENSE AI headquartered and where do you operate?',
    a: 'TECH6SENSE AI operates globally across nine major markets: United States, United Kingdom, Canada, European Union, UAE, India, Singapore, and Australia, with key operating hubs in premier innovation centers including GIFT City, India.',
  },
  {
    cat: 'About TECH6SENSE',
    q: 'What makes TECH6SENSE AI different from traditional IT vendors or AI agencies?',
    a: 'Most agencies build software wrappers on third-party APIs. Traditional IT vendors sell headcount. TECH6SENSE AI applies our proprietary S.E.N.S.E. framework to deliver production-grade intelligence, governance-first engineering, owned IP, and access to a global business ecosystem.',
  },
  {
    cat: 'Capabilities & AI',
    q: 'What is the S.E.N.S.E. Framework?',
    a: 'The S.E.N.S.E. framework is our 5-stage methodology designed to prevent enterprise AI failure: S — Sense (Opportunity Mapping), E — Engineer (Production Build), N — Navigate (Risk & Governance), S — Scale (Global Deployment), E — Evolve (Continuous Improvement).',
  },
  {
    cat: 'Capabilities & AI',
    q: 'Does TECH6SENSE AI build custom AI models or just integrate third-party APIs?',
    a: 'We build proprietary model architectures, fine-tune open-weights models, design specialized RAG (Retrieval-Augmented Generation) systems, and engineer multi-agent workflows tailored to your proprietary enterprise data.',
  },
  {
    cat: 'Capabilities & AI',
    q: 'What industries does TECH6SENSE AI serve?',
    a: 'We engineer solutions across Healthcare & Life Sciences, Financial Services & Banking, Manufacturing & Logistics, Retail & E-Commerce, Public Sector & Smart Cities, and Energy & Utilities.',
  },
  {
    cat: 'Capabilities & AI',
    q: 'What technologies and frameworks do you use for AI development?',
    a: 'We utilize Python, PyTorch, TensorFlow, LangChain, LlamaIndex, vLLM, TensorRT, Triton, Docker, Kubernetes, AWS, GCP, Azure, Next.js, React, Node.js, and specialized hardware/embedded C++ systems for deep-tech integrations.',
  },
  {
    cat: 'Capabilities & AI',
    q: 'How does TECH6SENSE AI handle data privacy and security?',
    a: 'Data privacy is built into our core architecture. We support zero-data-retention deployments, on-premise/air-gapped model hosting, end-to-end encryption, and full compliance with GDPR, HIPAA, SOC2, and regional sovereignty mandates.',
  },
  {
    cat: 'Capabilities & AI',
    q: "Can TECH6SENSE AI help us if we don't have an in-house AI team?",
    a: 'Yes. We frequently serve as an end-to-end AI engineering partner or provide embedded fractional CTO and engineering leadership to guide your internal teams.',
  },
  {
    cat: 'Engagements & Pricing',
    q: 'How long does a typical AI engagement take?',
    a: 'Initial discovery and proof-of-concept sprints typically take 3-6 weeks. Production-grade enterprise AI builds generally range from 12 to 24 weeks depending on architectural complexity.',
  },
  {
    cat: 'Engagements & Pricing',
    q: 'What is the cost of working with TECH6SENSE AI?',
    a: 'Engagements are structured based on scope, technical complexity, and engagement model (fixed-phase product builds, dedicated engineering teams, or strategic advisory). We provide transparent, milestone-based pricing.',
  },
  {
    cat: 'Visionary Founders',
    q: 'What is Visionary Founders?',
    a: 'Visionary Founders is the premier all-in-one AI founder ecosystem designed to transform ambitious entrepreneurs, professionals, and startup founders into owners of globally competitive AI and technology companies.',
  },
  {
    cat: 'Visionary Founders',
    q: 'Is Visionary Founders an incubator, an accelerator, or a course?',
    a: 'It is a full-stack venture execution ecosystem. We do not just teach or mentor; we actively co-build company infrastructure, tech stacks, branding, legal frameworks, and client-acquisition pipelines alongside the founder.',
  },
  {
    cat: 'Visionary Founders',
    q: 'Who is Visionary Founders designed for?',
    a: 'For aspiring entrepreneurs, domain experts, executives, consultants, and startup founders who want to build a defensible AI or technology company with world-class engineering backing.',
  },
  {
    cat: 'Visionary Founders',
    q: 'How does Visionary Founders help someone build an AI company from scratch?',
    a: 'We handle company formation guidance, product architecture, branding, website systems, CTO direction, recruitment of technical talent, and international client acquisition strategy.',
  },
  {
    cat: 'Visionary Founders',
    q: 'Do I need to be a programmer or AI expert to join Visionary Founders?',
    a: 'No. Our team provides the deep engineering muscle, product architecture, and technical execution, allowing founders to focus on domain strategy, vision, and market leadership.',
  },
  {
    cat: 'Business Brains',
    q: 'What is Business Brains?',
    a: 'Business Brains is an invitation-only global syndicate reserved for elite investors, visionary entrepreneurs, and industry titans operating at the pinnacle of commerce, capital, and artificial intelligence.',
  },
  {
    cat: 'Business Brains',
    q: 'Is Business Brains open to anyone?',
    a: 'No. Access is strictly by invitation or private application. Membership is vetted to maintain an exclusive circle of high-net-worth operators and strategic leaders.',
  },
  {
    cat: 'Business Brains',
    q: 'What benefits do Business Brains members receive?',
    a: 'Members gain access to private deal flow, co-investment syndicates, high-level AI business co-creation opportunities, executive roundtables, and cross-border strategic partnerships.',
  },
  {
    cat: 'Business Brains',
    q: 'How does TECH6SENSE AI connect client projects with the Business Brains ecosystem?',
    a: 'Vetted client ventures and high-growth AI startups engineered by TECH6SENSE AI can be presented directly to the Business Brains syndicate for strategic partnerships and capital expansion.',
  },
  {
    cat: 'Governance & IP',
    q: 'How does TECH6SENSE AI approach AI governance and compliance?',
    a: 'We embed governance directly into the technical pipeline — including model auditability, bias detection, hallucination guardrails, and data lineage tracking.',
  },
  {
    cat: 'Governance & IP',
    q: 'Does TECH6SENSE AI assist with AI regulatory alignment (e.g. EU AI Act, US AI frameworks)?',
    a: 'Yes. Our strategic advisory team ensures your AI systems comply with global regulatory frameworks including the EU AI Act, NIST AI Risk Management Framework, and regional data protection laws.',
  },
  {
    cat: 'Governance & IP',
    q: 'Who owns the Intellectual Property (IP) created during an engagement?',
    a: 'You do. 100% of the custom code, trained weights, proprietary pipelines, and intellectual property developed during client engagements are assigned directly to your organization.',
  },
  {
    cat: 'Getting Started',
    q: 'How do we start an engagement with TECH6SENSE AI?',
    a: 'Request a consultation through our website. We conduct a initial technical alignment call to assess your goals, data readiness, and optimal engagement model.',
  },
  {
    cat: 'Getting Started',
    q: 'What happens after the initial consultation call?',
    a: 'We deliver a tailored proposal including an opportunity map, proposed technical architecture, scope definition, team composition, and milestone roadmap.',
  },
  {
    cat: 'Getting Started',
    q: 'Does TECH6SENSE AI offer ongoing support and maintenance after deployment?',
    a: 'Yes. Through the Evolve phase of our S.E.N.S.E. framework, we offer ongoing model monitoring, retraining pipelines, security updates, and SLA-backed infrastructure management.',
  },
  {
    cat: 'Getting Started',
    q: 'Can TECH6SENSE AI help us audit or fix an existing AI project that failed?',
    a: 'Yes. We perform technical forensics on failing or stalled AI projects, identifying architecture flaws, data bottlenecks, or governance gaps to rebuild them into production-ready systems.',
  },
  {
    cat: 'Getting Started',
    q: 'Does TECH6SENSE AI offer hardware and deep-tech product manufacturing support?',
    a: 'Yes. Our Sense Innovation division handles embedded hardware design, IoT sensor integration, smart wearables development, and prototyping for physical deep-tech products.',
  },
  {
    cat: 'Getting Started',
    q: 'How can investors or strategic partners collaborate with TECH6SENSE AI?',
    a: 'Investors and strategic institutions can reach out through our Business Brains channel to discuss syndicate access, co-venture opportunities, and portfolio technology advisory.',
  },
];

const CATEGORIES = ['All', 'About TECH6SENSE', 'Capabilities & AI', 'Engagements & Pricing', 'Visionary Founders', 'Business Brains', 'Governance & IP', 'Getting Started'];

export default function FAQSection() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [openIdx, setOpenIdx] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredFaqs = selectedCat === 'All' ? FAQS : FAQS.filter(f => f.cat === selectedCat);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-20 md:py-32 overflow-hidden bg-[#FAF9FF]"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div
          className="mb-14 md:mb-16 text-center max-w-3xl mx-auto transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-blue-500 to-emerald-500" />
            <span className="font-display text-sm font-extrabold tracking-[0.35em] uppercase text-blue-600">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="h-[2px] w-10 bg-gradient-to-l from-blue-500 to-emerald-500" />
          </div>
          <h2 className="mb-5 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.08] font-extrabold text-slate-900 tracking-[-0.03em]">
            Everything You Need to Know About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600">
              TECH6SENSE AI.
            </span>
          </h2>
          <p className="font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium">
            30 comprehensive answers covering our capabilities, methodology, founder ecosystem, private network, and engagement process.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedCat(cat); setOpenIdx(null); }}
              className={`px-4 py-2 rounded-full font-display text-sm font-extrabold transition-all duration-300 ${
                selectedCat === cat
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-100/90 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer select-none hover:bg-slate-50/50"
                >
                  <span className="font-display text-[1.05rem] md:text-[1.15rem] font-bold text-slate-900 tracking-tight">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-body text-slate-600 text-[0.95rem] leading-relaxed border-t border-slate-50 bg-slate-50/30">
                    <span className="font-display text-sm font-extrabold tracking-widest uppercase text-blue-600 block mb-2">
                      [{faq.cat}]
                    </span>
                    {faq.a}
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
