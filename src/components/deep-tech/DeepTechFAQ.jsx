import React, { useState, useEffect, useRef } from 'react';

const FAQS = [
  {
    cat: 'Product Ecosystem',
    q: '1. What is Deep-Tech Product Development at TECH6SENSE AI?',
    aIntro: 'Deep-tech product development at TECH6SENSE AI refers to the creation of advanced, research-driven AI-powered hardware and software products that combine:',
    list: [
      'Artificial Intelligence',
      'Embedded Systems',
      'Edge Computing',
      'IoT Integration',
      'Computer Vision',
      'Predictive Analytics',
      'Enterprise Cloud Infrastructure'
    ],
    aOutro: 'Our focus is on building scalable, IP-driven, globally competitive AI products in wearable technology, healthcare devices, smart IoT systems, industrial AI gear, and intelligent enterprise platforms.'
  },
  {
    cat: 'Product Ecosystem',
    q: '2. Do you provide end-to-end product development Support?',
    aIntro: 'Yes. TECH6SENSE AI provides complete lifecycle support including:',
    list: [
      'Product Ideation & Validation',
      'AI Research & Model Development',
      'Embedded Hardware Design',
      'Firmware Development',
      'Prototype Engineering',
      'Testing & Compliance',
      'Manufacturing Strategy',
      'Cloud & Mobile App Integration',
      'Go-to-Market Strategy',
      'Investor Readiness & IP Advisory'
    ],
    aOutro: 'We are not just a development company — we are a full AI product ecosystem partner.'
  },
  {
    cat: 'Product Ecosystem',
    q: '3. Can startups build their own AI product with TECH6SENSE AI?',
    aIntro: 'Absolutely.',
    subText: 'We provide a structured deep-tech innovation ecosystem for:',
    list: [
      'Startup founders',
      'Entrepreneurs',
      'AI innovators',
      'Hardware product builders'
    ],
    aOutro: 'Our model supports you from idea to prototype to funding to manufacturing to global scaling.'
  },
  {
    cat: 'Product Ecosystem',
    q: '4. What makes TECH6SENSE AI different from other AI development companies?',
    aIntro: 'Key differentiators:',
    checkList: [
      'Deep AI Research Background',
      'Hardware + AI Integration Expertise',
      'Enterprise-Grade Architecture',
      'Edge AI Optimization',
      'Scalable Manufacturing Strategy',
      'Startup Commercialization Support',
      'Focus on Intellectual Property Creation'
    ],
    aOutro: 'We focus on building long-term, scalable AI assets — not just software solutions.'
  },
  {
    cat: 'Product Ecosystem',
    q: '5. Can TECH6SENSE AI Offer white-label AI products?',
    aIntro: 'Yes.',
    subText: 'We offer:',
    list: [
      'OEM AI product development',
      'White-label wearable AI devices',
      'Custom enterprise AI platforms',
      'Private-label smart hardware solutions'
    ],
    aOutro: 'This allows organizations to launch branded AI products under their own identity.'
  },
  {
    cat: 'IP & Strategy',
    q: '6. Do you support AI product patent and IP strategy?',
    aIntro: 'Yes.',
    subText: 'We assist with:',
    list: [
      'Patent strategy guidance',
      'IP positioning',
      'Technology differentiation planning',
      'Product defensibility consulting'
    ],
    aOutro: 'Our focus is on building IP-backed deep-tech assets.'
  },
  {
    cat: 'IP & Strategy',
    q: '7. What is the commercialization strategy for AI hardware products?',
    aIntro: 'Our commercialization support includes:',
    list: [
      'Market validation',
      'Pricing strategy',
      'Branding & positioning',
      'B2B/B2G strategy',
      'Investor pitch deck support',
      'Venture capital readiness',
      'Pilot deployment programs'
    ],
    aOutro: 'We help you transition from R&D to revenue.'
  },
  {
    cat: 'Product Ecosystem',
    q: '8. Do you offer customized enterprise AI solutions?',
    aIntro: 'Absolutely.',
    subText: 'We offer custom:',
    list: [
      'AI wearable solutions',
      'Industrial AI safety systems',
      'Smart healthcare devices',
      'Intelligent IoT ecosystems',
      'Knowledge AI platforms'
    ],
    aOutro: 'All solutions are tailored to your business requirements.'
  },
  {
    cat: 'Product Ecosystem',
    q: '9. How scalable are your AI deep-tech solutions?',
    aIntro: 'Our solutions are designed for:',
    list: [
      'Multi-device deployment',
      'Cloud-scale analytics',
      'Global distribution',
      'Enterprise-grade reliability',
      'Modular architecture expansion'
    ],
    aOutro: 'We build for long-term scalability and global markets.'
  },
  {
    cat: 'Product Ecosystem',
    q: '10. Do you provide ongoing support and maintenance?',
    aIntro: 'Yes.',
    subText: 'We offer:',
    list: [
      'AI model optimization',
      'Firmware updates',
      'Performance monitoring',
      'Security upgrades',
      'Feature expansion',
      'Post-deployment technical support'
    ],
    aOutro: 'Deep-tech products require continuous evolution, and we provide it.'
  },
  {
    cat: 'Product Ecosystem',
    q: '11. How can I start building my AI product with TECH6SENSE AI?',
    aIntro: 'You can begin by:',
    list: [
      'Scheduling a product strategy consultation',
      'Sharing your concept or problem statement',
      'Engaging in technical feasibility assessment',
      'Defining roadmap and milestones',
      'Starting MVP development'
    ],
    aOutro: 'We guide you through every stage.'
  },
  {
    cat: 'Manufacturing & Operations',
    q: '12. Does TECH6SENSE AI manufacture products in-house?',
    paragraphs: [
      'No. TECH6SENSE AI does not operate in-house manufacturing facilities.'
    ],
    subText: 'Our core expertise lies in:',
    list: [
      'AI research and development',
      'Embedded systems engineering',
      'Product architecture design',
      'Prototype development',
      'AI model training and optimization',
      'Enterprise software integration',
      'Commercialization strategy'
    ],
    aOutro: 'We focus on building world-class AI product intelligence and scalable technology frameworks rather than owning physical manufacturing plants.'
  },
  {
    cat: 'Manufacturing & Operations',
    q: '13. Why does TECH6SENSE AI not manufacture products in-house?',
    aIntro: 'Deep-tech innovation requires strong specialization. Our strategic focus is on:',
    list: [
      'Advanced AI engineering',
      'Product innovation',
      'IP creation',
      'Hardware-software system integration',
      'Edge AI architecture',
      'Enterprise-grade platform development'
    ],
    paragraphs: [
      'Manufacturing is a separate operational domain requiring dedicated infrastructure, supply chain management, and capital-intensive facilities.',
      'Instead of building factories, we partner with certified manufacturing specialists to ensure quality, scalability, and global standards.'
    ],
    subText: 'This approach allows us to:',
    checkList: [
      'Maintain agility',
      'Reduce overhead',
      'Focus on innovation',
      'Deliver faster time-to-market',
      'Ensure scalable global production'
    ]
  },
  {
    cat: 'Manufacturing & Operations',
    q: '14. How are your AI products manufactured then?',
    aIntro: 'We work with:',
    list: [
      'Certified contract manufacturers',
      'OEM hardware partners',
      'Global supply chain networks',
      'Regulatory-compliant production units',
      'Specialized electronics manufacturing services (EMS) providers'
    ],
    subText: 'Depending on the project, manufacturing may take place in:',
    secondaryList: [
      'India (through third-party certified partners)',
      'Hong Kong and other region of China (through third-party certified partners)',
      'Asia-Pacific manufacturing hubs',
      'International OEM facilities'
    ],
    aOutro: 'All production follows strict quality control and compliance standards.'
  },
  {
    cat: 'Manufacturing & Operations',
    q: '15. Do you help startups or enterprises with manufacturing setup?',
    aIntro: 'Yes.',
    subText: 'While we do not operate in-house manufacturing, we provide:',
    list: [
      'Manufacturing partner identification',
      'Vendor selection support',
      'Cost optimization strategy',
      'BOM (Bill of Materials) planning',
      'Supply chain advisory',
      'Compliance and certification guidance',
      'Production scalability roadmap'
    ],
    aOutro: 'For founders who want to establish their own manufacturing unit in India or globally, we provide strategic consulting support.'
  },
  {
    cat: 'IP & Strategy',
    q: '16. Who owns the intellectual property (IP) of the product?',
    aIntro: 'IP ownership depends on the engagement model.',
    subText: 'We offer:',
    list: [
      'Client-owned IP model',
      'Joint IP development',
      'White-label/OEM licensing structure'
    ],
    aOutro: 'Manufacturing partners do not own the IP. Intellectual property rights remain protected under formal agreements.'
  },
  {
    cat: 'Manufacturing & Operations',
    q: '17. Does outsourcing manufacturing reduce product quality?',
    aIntro: 'No.',
    subText: 'We carefully select manufacturing partners based on:',
    list: [
      'ISO certifications',
      'Quality assurance systems',
      'Production track record',
      'Regulatory compliance',
      'Industry specialization'
    ],
    aOutro: 'This ensures enterprise-grade quality and scalability.',
    extraParagraph: 'Many global technology leaders follow similar asset-light, innovation-focused models.'
  },
  {
    cat: 'Manufacturing & Operations',
    q: '18. What is the benefit of your asset-light innovation model?',
    subText: 'Our asset-light model allows us to:',
    list: [
      'Focus on deep-tech R&D',
      'Deliver faster innovation cycles',
      'Scale production globally',
      'Optimize cost structure',
      'Maintain flexibility across markets',
      'Reduce capital expenditure'
    ],
    aOutro: 'This model is especially beneficial for startups and enterprises seeking faster commercialization.'
  },
  {
    cat: 'IP & Strategy',
    q: '19. How do you ensure confidentiality when working with manufacturing partners?',
    subText: 'We enforce:',
    list: [
      'Non-Disclosure Agreements (NDAs)',
      'IP protection clauses',
      'Controlled design documentation',
      'Secure firmware locking',
      'Encrypted production files',
      'Legal compliance frameworks'
    ],
    aOutro: 'Product confidentiality is protected at every stage.'
  }
];

const CATEGORIES = ['All', 'Product Ecosystem', 'Manufacturing & Operations', 'IP & Strategy'];

export default function DeepTechFAQ() {
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
        {/* Header matching Home FAQ exact structure & colors */}
        <div
          className="mb-14 md:mb-16 text-center max-w-[1400px] mx-auto transition-all duration-1000 ease-out"
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
            AI Deep-Tech Products -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600">
              By TECH6SENSE AI
            </span>
          </h2>
          <p className="font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium">
            19 comprehensive answers covering our deep-tech product development, manufacturing ecosystem, IP strategy, and commercialization model.
          </p>
        </div>

        {/* Category Pills matching Home FAQ exact buttons */}
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

        {/* FAQ Accordion List matching Home FAQ exact card grid & hover gradient */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
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
                  className={`w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer select-none transition-all duration-300 group ${
                    isOpen ? '' : 'hover:bg-gradient-to-r hover:from-[#1746D2] hover:to-[#00A86B]'
                  }`}
                >
                  <span className={`font-display text-[1.05rem] md:text-[1.15rem] font-bold tracking-tight transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-slate-900 group-hover:text-white'
                  }`}>
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
                  <div className="px-6 pb-6 pt-2 font-body text-white/90 text-[0.95rem] leading-relaxed border-t border-white/20 space-y-2">
                    {faq.cat && (
                      <span className="font-display text-xs font-extrabold tracking-widest uppercase text-white/80 block mb-2">
                        [{faq.cat}]
                      </span>
                    )}

                    {faq.aIntro && <p>{faq.aIntro}</p>}

                    {faq.paragraphs && faq.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}

                    {faq.subText && <p className="font-semibold text-white">{faq.subText}</p>}

                    {faq.list && (
                      <ul className="list-disc pl-5 space-y-1 my-2">
                        {faq.list.map((item, lIdx) => (
                          <li key={lIdx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {faq.checkList && (
                      <ul className="space-y-1.5 my-2">
                        {faq.checkList.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="text-emerald-300 font-bold">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {faq.secondaryList && (
                      <ul className="list-disc pl-5 space-y-1 my-2">
                        {faq.secondaryList.map((item, sIdx) => (
                          <li key={sIdx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {faq.aOutro && <p className="mt-2 font-medium">{faq.aOutro}</p>}
                    {faq.extraParagraph && <p className="mt-2">{faq.extraParagraph}</p>}
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

