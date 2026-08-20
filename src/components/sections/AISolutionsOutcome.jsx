import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SOLUTIONS = [
  {
    title: 'AI Product & Model Development',
    subtitle: 'From proprietary architecture to production-grade intelligence.',
    overview: 'We design and build the AI products enterprises actually ship — not research demos. This spans foundation model selection and fine-tuning, custom model architecture, retrieval-augmented systems, and the full product engineering layer around them: APIs, data pipelines, and deployment infrastructure built to hold up under real usage.',
    bullets: [
      'Custom AI model design, training, and fine-tuning',
      'Foundation model integration and optimization (LLM & multimodal)',
      'Retrieval-augmented generation (RAG) and knowledge-grounded systems',
      'End-to-end AI product architecture and engineering',
      'MLOps, model monitoring, and continuous improvement pipelines',
    ],
    builtFor: 'Enterprises and founders building a defensible, owned AI product — not a wrapper around someone else\'s model.',
    path: '/ai-agents?tab=0#ecosystem',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Intelligent Automation & Agent Systems',
    subtitle: 'Systems that act, not just assist.',
    overview: 'Autonomous AI agents and multi-agent systems designed for complex operations, support, and back-office workflows. We engineer end-to-end automation integrated with existing enterprise business tools, with human-in-the-loop controls where required.',
    bullets: [
      'Autonomous AI agents for operations, support, and back-office workflows',
      'Multi-agent orchestration across business systems and data sources',
      'Workflow automation integrated with existing ERP, CRM, and internal tools',
      'Decision-support automation with human-in-the-loop controls where required',
      'Process mining and automation opportunity assessment',
    ],
    builtFor: 'Organizations looking to eliminate operational drag at scale — not automate a single task in isolation.',
    path: '/ai-agents?tab=1#ecosystem',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Generative & Applied AI',
    subtitle: 'Generative systems engineered for outcomes, not novelty.',
    overview: 'Enterprise generative AI applications engineered to deliver measurable business outcomes. We build custom copilots, internal AI assistants, and decision-support analytics tools backed by robust output evaluation and responsible-AI guardrails.',
    bullets: [
      'Enterprise generative AI applications (content, design, code, media)',
      'Custom copilots and internal AI assistants',
      'AI-powered decision-support and analytics tools',
      'Prompt engineering, evaluation, and output-quality frameworks',
      'Responsible-AI guardrails built into every generative deployment',
    ],
    builtFor: 'Teams that need generative AI to hold up in production — not just in a demo.',
    path: '/ai-agents?tab=2#ecosystem',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'AI Strategy & Governance',
    subtitle: 'The confidence layer for enterprise AI adoption.',
    overview: 'Strategic roadmap, risk control, and policy frameworks that give executive leadership the confidence to adopt AI deliberately and securely across operating markets.',
    bullets: [
      'AI readiness assessment and opportunity roadmapping',
      'Enterprise AI governance frameworks and risk controls',
      'Regulatory and compliance alignment across operating markets',
      'Responsible AI, model risk, and data governance policy design',
      'Executive and board-level AI strategy advisory',
    ],
    builtFor: 'Enterprises and governments that need AI adoption to be deliberate, auditable, and defensible — not experimental.',
    path: '/ai-agents?tab=2#ecosystem',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Technology & Digital Infrastructure',
    subtitle: 'The foundation every AI initiative is built on.',
    overview: 'Full-stack IT engineering and cloud architecture designed to support AI workloads at scale. From cloud migration and data engineering to web, mobile, and enterprise application development.',
    bullets: [
      'Cloud architecture, migration, and infrastructure engineering',
      'Full-stack web, mobile, and enterprise application development',
      'Data engineering, integration, and pipeline architecture',
      'Systems integration across legacy and modern environments',
      'Security, scalability, and performance engineering',
    ],
    builtFor: 'Enterprises that need an infrastructure partner capable of supporting AI initiatives end-to-end — not just the model layer.',
    path: '/ai-agents?tab=3#ecosystem',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V17.25M10.5 15.75h3" />
      </svg>
    ),
  },
];

function AccordionItem({ solution, index, isOpen, onHover, onToggle, isVisible }) {
  // Cycle through brand colors for solid backgrounds: Blue, Emerald, Gold
  const themes = [
    {
      cardOpen: 'bg-[#1746D2] shadow-[0_20px_40px_-15px_rgba(23,70,210,0.5)] border-[#1746D2]',
      cardClosedHover: 'hover:shadow-[0_10px_30px_-15px_rgba(23,70,210,0.3)]',
    },
    {
      cardOpen: 'bg-[#00A86B] shadow-[0_20px_40px_-15px_rgba(0,168,107,0.5)] border-[#00A86B]',
      cardClosedHover: 'hover:shadow-[0_10px_30px_-15px_rgba(0,168,107,0.3)]',
    },
    {
      cardOpen: 'bg-[#D4AF37] shadow-[0_20px_40px_-15px_rgba(212,175,55,0.5)] border-[#D4AF37]',
      cardClosedHover: 'hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)]',
    }
  ];
  const t = themes[index % 3];

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onClick={() => onToggle(index)}
      className="group relative transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Card container */}
      <div
        className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
          isOpen
            ? t.cardOpen
            : `bg-transparent border-transparent hover:bg-white/60 ${t.cardClosedHover}`
        }`}
      >
        {/* Header row */}
        <div className="flex items-center gap-4 md:gap-5 px-5 md:px-7 py-5 md:py-6 cursor-pointer">
          {/* Icon */}
          <div
            className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border transition-all duration-300 ${
              isOpen
                ? 'bg-white/15 border-white/20 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-400 shadow-sm group-hover:text-slate-600'
            }`}
          >
            {solution.icon}
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <h4 className={`font-display text-[1rem] md:text-[1.12rem] font-bold tracking-tight transition-colors duration-300 ${
                isOpen ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'
              }`}>
                {solution.title}
              </h4>
              <span className={`font-body text-[0.85rem] italic font-normal transition-colors duration-300 ${
                isOpen ? 'text-white/80' : 'text-slate-500'
              }`}>
                {solution.subtitle}
              </span>
            </div>
          </div>

          {/* Arrow Link */}
          <Link
            to={solution.path}
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen ? 'bg-white/20 translate-x-1 shadow-sm' : ''
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={isOpen ? '#ffffff' : '#94a3b8'} strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Accordion Content (expands on hover) */}
        <div
          className="transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] grid"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className={`px-5 md:px-7 pb-6 pt-1 transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-transparent mb-5" />

              {/* Overview paragraph */}
              <p className="font-body text-[0.9rem] leading-[1.75] text-white/90 font-medium mb-5">
                {solution.overview}
              </p>

              {/* Capability bullet points */}
              <ul className="space-y-2.5 mb-6">
                {solution.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <span className="font-body text-[0.88rem] text-white font-semibold leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Built For Callout */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 p-4 rounded-xl border bg-black/10 border-white/20 text-white">
                <span className="font-display text-[0.78rem] font-extrabold tracking-wide uppercase shrink-0 text-white/90">
                  Built for:
                </span>
                <span className="font-body text-[0.85rem] font-medium leading-relaxed">
                  {solution.builtFor}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing between items */}
      {index < SOLUTIONS.length - 1 && <div className="h-2" />}
    </div>
  );
}

export default function AISolutionsOutcome() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  // Toggle handler for touch/click on mobile
  const handleToggle = (index) => {
    setOpenIndex(prev => prev === index ? -1 : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ai-solutions"
      className="relative w-full pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #ECFDF5 50%, #FAFAFA 100%)' }}
    >
      {/* Soft corner glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-100/50 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-100/40 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 lg:gap-20 items-start">

          {/* LEFT COLUMN: Sticky intro */}
          <div 
            className="md:sticky md:top-32 flex flex-col transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#1746D2] to-[#00A86B]" />
              <span className="font-display text-sm font-extrabold tracking-[0.35em] uppercase text-[#1746D2]">
                WHAT WE ENGINEER
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] font-extrabold text-slate-900 tracking-[-0.02em]">
              One Ecosystem.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2]">
                Every Layer of Intelligence.
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mb-8 font-body text-[1rem] md:text-[1.05rem] leading-[1.75] text-slate-500 font-medium max-w-md">
              Every engagement draws on the same integrated ecosystem — five disciplines, engineered to work as one system rather than five separate vendors.
            </p>

            {/* CTA Button */}
            <div className="mb-4">
              <Link
                to="/ai-agents"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-7 py-3.5 font-display text-sm font-bold tracking-wider text-white shadow-[0_4px_15px_rgba(23,70,210,0.2)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                See the Full Service Portfolio
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Trust line */}
            <p className="font-display text-sm md:text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B] italic tracking-wide mt-2">
              "Built for enterprises, startups, and future-ready digital teams."
            </p>
          </div>

          {/* RIGHT COLUMN: Structured Accordion */}
          <div className="flex flex-col gap-1" onMouseLeave={() => setOpenIndex(-1)}>
            {SOLUTIONS.map((solution, index) => (
              <AccordionItem
                key={index}
                solution={solution}
                index={index}
                isOpen={openIndex === index}
                onHover={setOpenIndex}
                onToggle={handleToggle}
                isVisible={isVisible}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
