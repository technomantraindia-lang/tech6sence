import React, { useState, useEffect, useRef } from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

const FAQS = [
  {
    cat: 'About TECH6SENSE',
    q: `What is TECH6SENSE AI?`,
    a: `TECH6SENSE AI is a global Artificial Intelligence, Enterprise Technology, and Deep-Tech
Innovation company that helps organizations design, develop, deploy, and scale intelligent
technologies. Our ecosystem includes AI development, full-stack IT services, enterprise
software engineering, deep-tech product innovation, the Visionary Founders Ecosystem, and
the Business Brains Private Global Circle.`,
  },
  {
    cat: 'About TECH6SENSE',
    q: `Which industries do you serve?`,
    a: `We work across healthcare, banking, financial services, insurance, manufacturing, retail,
logistics, supply chain, education, government, telecommunications, energy, automotive, real
estate, construction, legal, media, hospitality, travel, agriculture, cybersecurity, life sciences,
professional services, and many other industries.`,
  },
  {
    cat: 'About TECH6SENSE',
    q: `Which countries do you serve?`,
    a: `We work with organizations across the United States, United Kingdom, Canada, Australia,
India, the European Union, UAE, Singapore, Hong Kong, and other international markets
through remote and hybrid delivery models.`,
  },
  {
    cat: 'About TECH6SENSE',
    q: `What makes TECH6SENSE AI different from other AI companies?`,
    a: `Our strength lies in combining AI strategy, enterprise software engineering, deep-tech
innovation, product development, founder enablement, and long-term business partnerships
under one integrated ecosystem. TECH6SENSE AI engineers, governs, deploys, and
continues to improve the system.We focus on measurable business outcomes rather than
technology alone.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `What AI services do you offer?`,
    a: `We provide custom AI development, AI agents, AI Product Development, Generative AI,
Agentic AI, enterprise AI, machine learning, computer vision, natural language processing,
predictive analytics, AI automation, AI copilots, recommendation systems, intelligent search,
AI integration, AI governance consulting, AIOps & MLOps and all.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Do you build custom AI solutions?`,
    a: `Yes. Every organization has unique business objectives, workflows, and data. We design
custom AI solutions tailored to your specific operational requirements, industry regulations,
and growth goals.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Do you develop enterprise software?`,
    a: `Yes. We build enterprise-grade software, SaaS platforms, web applications, mobile
applications, internal business systems, cloud-native platforms, APIs, and digital
transformation solutions.`,
  },
  {
    cat: 'About TECH6SENSE',
    q: `Does TECH6SENSE AI work with startups or only enterprises?`,
    a: `Both. Enterprise engagements run through the AI Development and IT Services practices,
while early-stage founders are typically served through the Visionary Founders ecosystem,
which is structured for organisations that are still being built.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Can you modernise legacy systems?`,
    a: `Yes. Legacy modernisation engagements range from incremental strangler-pattern
replacement through to full re-platforming, with the approach chosen against operational risk
tolerance rather than engineering preference.`,
  },
  {
    cat: 'About TECH6SENSE',
    q: `Can TECH6SENSE AI help if we don't have data?`,
    a: `Yes! Lack of historical data is a common challenge. We have strategies:
Data Synthesis:
•
Generate synthetic data for training
•
Use simulation and modeling
•
Transfer learning from similar domains
Rapid Data Collection:
•
Design efficient data collection systems
•
Implement automated data capture
•
Structure for future AI use
Alternative Approaches:
•
Start with rule-based systems while collecting data
•
Use pre-trained models and fine-tune
•
Leverage publicly available datasets
•
Partner with data providers
Phased Approach:
•
Phase 1: Data collection and infrastructure
•
Phase 2: Initial AI models with limited data
•
Phase 3: Advanced AI with rich datasets
We conduct a data readiness assessment to identify the best path forward for your specific
situation.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `What is Deep-Tech Product Development?`,
    a: `Deep-tech products combine advanced engineering with technologies such as AI, computer
vision, IoT, robotics, wearable intelligence, edge computing, and intelligent hardware. We
support clients from concept through engineering and commercialization.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Can you help us build an AI-powered hardware product?`,
    a: `Yes. We support the design and development of intelligent wearables, smart healthcare
devices, industrial IoT systems, robotics platforms, AI-enabled consumer products, and other
advanced technology solutions.`,
  },
  {
    cat: 'About TECH6SENSE',
    q: `Can I start my own AI product business with TECH6SENSE AI?`,
    a: `Absolutely! This is a core part of our mission. We provide the complete business ecosystem:
What You Get:
•
Proven Products: Access to our AI hardware designs and technology
•
Manufacturing: We produce devices with your branding
•
Software Platform: Mobile apps, cloud infrastructure, AI algorithms
•
Business Setup: Company formation, legal, compliance
•
Marketing Support: Branding, website, social media, marketing materials
•
Distribution: Help with channels, partnerships, e-commerce
•
Sales Training: How to sell AI products effectively
•
Technical Support: Customer service infrastructure
Your Role:
•
Brand building and positioning
•
Sales and customer relationships
•
Market-specific customization
•
Business development
This model allows entrepreneurs to enter the lucrative AI hardware market without
manufacturing expertise or massive capital.`,
  },
  {
    cat: 'Visionary Founders',
    q: `What is the Visionary Founders Ecosystem?`,
    a: `The Visionary Founders Ecosystem is TECH6SENSE AI's company-building platform
designed to help entrepreneurs launch, grow, and scale globally competitive AI and
technology businesses through technology, strategy, branding, engineering, mentorship, and
ecosystem support combining venture architecture, technology foundation, market-entry
strategy, brand positioning and global expansion into a single pathway.`,
  },
  {
    cat: 'Visionary Founders',
    q: `Who is Visionary Founders Ecosystem designed for?`,
    a: `It is designed for entrepreneurs, startup founders, researchers, professionals, innovators,
corporate leaders, students, and anyone committed to building a technology-driven business.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Is it only for AI startups?`,
    a: `No. While AI is a core focus, we also support SaaS, enterprise software, deep-tech,
healthcare technology, fintech, edtech, robotics, cybersecurity, and other technology
ventures.`,
  },
  {
    cat: 'About TECH6SENSE',
    q: `Will TECH6SENSE AI help build my product?`,
    a: `Yes. Depending on the engagement, our engineering teams can assist with architecture,
design, software development, AI integration, testing, deployment, and ongoing technical
support.`,
  },
  {
    cat: 'Business Brains',
    q: `What is the Business Brains Private Global Circle?`,
    a: `Business Brains is a private, invitation-only global circle for investors, entrepreneurs and
industry leaders, structured for genuine access and discretion rather than volume networking.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `How do I become a member?`,
    a: `Membership is by nomination or by application subject to review. It is not available for direct
purchase, and admission is determined by assessment rather than by fee. We evaluate
applicants based on their background, business objectives, and alignment with the
community's vision.`,
  },
  {
    cat: 'Governance & IP',
    q: `How does TECH6SENSE AI handle data security and compliance?`,
    a: `Governance is designed into the architecture rather than added after deployment: jurisdiction-
aligned data residency, documented access controls, traceable decision logging, and defined
human oversight points appropriate to each workload's risk class.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `What happens if the project fails to deliver the expected outcome?`,
    a: `Success criteria are agreed in writing before build begins, and progress is reviewed against
them at every milestone — which means divergence surfaces early enough to correct rather
than at final delivery. Where a stated outcome proves technically unachievable, the honest
recommendation is made rather than the budget consumed.`,
  },
  {
    cat: 'Governance & IP',
    q: `Do you sign Non-Disclosure Agreements (NDAs)?`,
    a: `Yes. We are happy to sign mutual or client-provided NDAs before discussing confidential
ideas, intellectual property, or proprietary business information.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Who owns the intellectual property?`,
    a: `Ownership is defined within the project agreement. In most custom development
engagements, intellectual property is transferred to the client upon fulfillment of contractual
obligations.`,
  },
  {
    cat: 'Governance & IP',
    q: `How does TECH6SENSE AI approach AI governance?`,
    a: `Governance is engineered into every system as a delivery phase — documented evaluation,
decision traceability, defined human oversight points, and a risk register your board can read
— rather than retrofitted after an audit request.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `How do you protect sensitive information?`,
    a: `We implement industry-standard security practices including secure development workflows,
encrypted communications, role-based access controls, and confidentiality procedures.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Do you provide post-launch support?`,
    a: `Yes. We offer maintenance, feature enhancements, monitoring, optimization, performance
improvements, security updates, and long-term technology support.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Will you train our internal team?`,
    a: `Yes. Knowledge transfer and enablement are standard scope — the objective is that your
team can operate, understand and extend the system rather than remain dependent on the
vendor.`,
  },
  {
    cat: 'Capabilities & AI',
    q: `Can you scale our platform as we grow?`,
    a: `Absolutely. We build scalable architectures that support future expansion, increased user
demand, new features, and international growth.`,
  },
  {
    cat: 'About TECH6SENSE',
    q: `Why should we choose TECH6SENSE AI?`,
    a: `Because we believe technology should create lasting business value—not just deliver
software.
Our multidisciplinary ecosystem combines Artificial Intelligence, enterprise engineering,
deep-tech innovation, strategic consulting, and long-term partnership to help organizations
build the future with confidence.`,
  },
  {
    cat: 'Getting Started',
    q: `What should I prepare before our first meeting?`,
    a: `A: To maximize our initial consultation:
Business Context:
•
Brief company overview
•
Key challenges or opportunities
•
Current technology landscape
•
Budget range (if known)
•
Timeline expectations
Technical Information (if available):
•
Existing systems and databases
•
Data availability and quality
•
IT infrastructure
•
Security/compliance requirements
Stakeholders:
•
Include decision-makers in initial calls
•
Technical leads (CTO, IT head)
•
Business owners (relevant VPs)
Questions:
•
List your concerns and questions
•
Success criteria
•
Risk concerns
Don't Worry If You Don't Have Everything: We're here to help guide you through the
process. Even a general discussion of challenges can lead to valuable insights.


FINAL CTA
Headline: Engineering the Future of Intelligence
Whether you're an enterprise accelerating AI adoption, a government modernizing digital
infrastructure, a startup building the next breakthrough platform, or a visionary founder creating the
future, TECH6SENSE AI provides the intelligence, engineering, and strategic partnership to transform
ambition into global impact.
Button: Talk to TECH6SENSE AI →
Brand signature (footer close):
TECH6SENSE AI — Sense Beyond Technology. Build Beyond Imagination.`,
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
              TECH6SENSE AI
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-r from-[#1746D2] to-[#00A86B] border-transparent' 
                    : 'bg-white border-slate-100/90'
                }`}
                onMouseEnter={() => setOpenIdx(idx)}
                onMouseLeave={() => setOpenIdx(null)}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={`w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer select-none transition-all duration-300 group ${isOpen ? '' : 'hover:bg-gradient-to-r hover:from-[#1746D2] hover:to-[#00A86B]'}`}
                  {...touchHoverProps}
                >
                  <span className={`font-display text-[1.05rem] md:text-[1.15rem] font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-900 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-white/20 group-hover:text-white'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-body text-white/90 text-[0.95rem] leading-relaxed border-t border-white/20">
                    <span className="font-display text-sm font-extrabold tracking-widest uppercase text-white block mb-2 opacity-90">
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
