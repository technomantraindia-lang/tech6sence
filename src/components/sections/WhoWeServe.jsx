import React, { useState, useEffect, useRef } from 'react';

const SEGMENTS = [
  {
    id: 'enterprises',
    label: 'Global Enterprises',
    eyebrow: 'Fortune 500 to Mid-Market',
    title: 'Transforming Enterprise Operations with Intelligence',
    description: 'For large-scale organizations ready to move from AI experimentation to AI-at-scale. We partner with enterprises to build production-grade AI systems, automate complex workflows, modernize legacy infrastructure, and deploy intelligent solutions that deliver measurable business impact across divisions and geographies.',
    bullets: [
      'Enterprise AI strategy and governance frameworks',
      'Intelligent automation across ERP, CRM, and back-office systems',
      'Custom AI model development and deployment at scale',
      'Data engineering and AI-ready infrastructure',
      'Regulatory compliance and responsible AI implementation',
    ],
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.12)',
  },
  {
    id: 'governments',
    label: 'Governments & Public Sector',
    eyebrow: 'National to Municipal',
    title: 'AI-Powered Modernization for Public Institutions',
    description: 'For government agencies and public institutions committed to delivering smarter, more efficient services to citizens. We design and build AI systems that operate within strict regulatory and security frameworks, enabling data-driven decision-making, automated public services, and intelligent infrastructure at scale.',
    bullets: [
      'AI-powered public service automation and citizen portals',
      'Government data analytics and intelligence platforms',
      'Secure AI deployment within regulatory frameworks',
      'Smart city and digital infrastructure solutions',
      'Policy analysis, forecasting, and decision support systems',
    ],
    color: '#059669',
    glow: 'rgba(5,150,105,0.12)',
  },
  {
    id: 'startups',
    label: 'Startups & Scale-Ups',
    eyebrow: 'Seed to Series B',
    title: 'Building AI-Native Products from the Ground Up',
    description: 'For startups and growth-stage companies where AI is the product — not just a feature. We help founders and technical teams move fast with the right architecture, build defensible AI products, and scale systems without accumulating technical debt that slows future growth.',
    bullets: [
      'AI product strategy, prototyping, and MVP development',
      'Foundation model selection, fine-tuning, and integration',
      'Scalable architecture designed for rapid product iteration',
      'Technical co-founding and fractional CTO support',
      'Investor-ready AI product positioning and documentation',
    ],
    color: '#1746D2',
    glow: 'rgba(23, 70, 210,0.12)',
  },
  {
    id: 'founders',
    label: 'Visionary Founders',
    eyebrow: 'Aspiring to Established',
    title: 'From Idea to International AI Business',
    description: 'For entrepreneurs who want to build their own AI or technology company — not just use AI tools. Through the Visionary Founders ecosystem, we provide everything needed to launch, build, and scale a globally competitive AI business: from company formation and branding to technology team building, client acquisition, and access to growth capital.',
    bullets: [
      'End-to-end AI company formation and legal setup',
      'AI product development and technical infrastructure',
      'Brand identity, website, and go-to-market strategy',
      'Technology team recruitment and CTO-level direction',
      'Client acquisition support and investor pathway access',
    ],
    color: '#00A86B',
    glow: 'rgba(0, 168, 107,0.12)',
  },
];

export default function WhoWeServe() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);

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

  const seg = SEGMENTS[active];

  return (
    <section
      ref={sectionRef}
      id="who-we-serve"
      className="relative w-full py-20 md:py-32 overflow-hidden bg-[#FAFBFF]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${seg.glow}, transparent 70%)` }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div
          className="mb-16 md:mb-20 transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-blue-500 to-emerald-500" />
            <span className="font-mono text-[0.65rem] font-bold tracking-[0.35em] uppercase text-blue-600">
              WHO WE SERVE
            </span>
          </div>
          <h2 className="mb-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-extrabold text-slate-900 tracking-[-0.03em]">
            We Serve Organizations That Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600">
              Ready to Lead with AI.
            </span>
          </h2>
          <p className="font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium max-w-2xl">
            TECH6SENSE AI works across four primary client categories — each with distinct needs, timelines, and definitions of success. Our engagement model adapts to your context.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12 items-start">
          {/* Left: Tab Selector */}
          <div
            className="flex flex-col gap-3 transition-all duration-1000 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', transitionDelay: '200ms' }}
          >
            {SEGMENTS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className="text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: active === i ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.5)',
                  borderColor: active === i ? s.color + '40' : 'rgba(226,232,240,0.6)',
                  boxShadow: active === i ? '4px 4px 0px 0px rgba(23,70,210,0.35)' : 'none',
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full shrink-0 transition-all duration-300"
                    style={{ background: active === i ? s.color : '#cbd5e1', boxShadow: active === i ? `0 0 8px ${s.color}` : 'none' }}
                  />
                  <div>
                    <div className="font-mono text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: active === i ? s.color : '#94a3b8' }}>
                      {s.eyebrow}
                    </div>
                    <div className="font-display font-bold text-[1rem] text-slate-800">{s.label}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Content Panel */}
          <div
            key={active}
            className="relative rounded-[2rem] bg-white border border-slate-100 p-8 md:p-10 shadow-[4px_4px_0px_0px_rgba(23,70,210,0.25)] transition-all duration-1000 ease-out overflow-hidden"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '350ms' }}
          >
            <div className="mb-2 font-mono text-[0.65rem] font-bold tracking-[0.25em] uppercase" style={{ color: seg.color }}>
              {seg.eyebrow}
            </div>
            <h3 className="font-display text-[1.6rem] md:text-[1.9rem] font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
              {seg.title}
            </h3>
            <p className="font-body text-[0.95rem] md:text-[1rem] leading-[1.75] text-slate-600 mb-8">
              {seg.description}
            </p>

            <div className="flex flex-col gap-3">
              {seg.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full flex items-center justify-center" style={{ background: seg.color + '15' }}>
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke={seg.color} strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span className="font-body text-[0.9rem] text-slate-700 leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
