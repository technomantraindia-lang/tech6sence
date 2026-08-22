import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import IndustriesFinalCTA from '../components/industries/IndustriesFinalCTA';
import { servicesContent } from '../data/servicesContent';
import aiDevData from '../data/intelligent-data/ai-development.json';
import automationCopilotsData from '../data/intelligent-data/automation-copilots.json';
import dataVisualData from '../data/intelligent-data/data-visual-intelligence.json';
import enterpriseCloudData from '../data/intelligent-data/enterprise-ai-cloud.json';
import advancedTechData from '../data/intelligent-data/advanced-tech-software.json';

// Custom card component for features with DOM-based mouse spotlight tracking
function FeatureCard({ title, desc }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative p-6 md:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#1746D2] hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 160px at var(--mx, -99px) var(--my, -99px), rgba(23, 70, 210, 0.08), transparent 70%)`
        }}
      />

      <div className="relative z-10">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 border border-blue-100 bg-blue-50 text-[#1746D2] font-bold">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        </div>
        <h4 className="font-display text-lg font-bold text-slate-900 mb-3">
          {title}
        </h4>
        <p className="font-body text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function BlockItem({ block, index }) {
  const skipTexts = [
    'Hero Section',
    'CTA Buttons',
    'Examples include:',
    'Capabilities include:',
    'Primary Call-to-Action',
    'Call-to-Action Buttons',
    'Call to Action Buttons',
    'Turn your vision into an intelligent product with TECH6SENSE AI.',
    'Turn your vision into an intelligent product with TECH6SENSE AI'
  ];
  if (skipTexts.includes(block.text)) return null;

  if (block.type === 'heading') {
    if (block.level === 1) {
      return (
        <div className={`mb-8 ${index === 0 ? '' : 'mt-16 pt-10 border-t border-slate-200'}`}>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00A86B]" />
            <span className="font-display text-xs font-bold text-[#1746D2] uppercase tracking-widest">
              SECTION OVERVIEW
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">
            {block.text}
          </h2>
        </div>
      );
    }
    if (block.level === 2) {
      return (
        <div className={`mb-5 ${index === 0 ? '' : 'mt-12'}`}>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 flex items-start gap-3">
            <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#1746D2]" />
            <span>{block.text}</span>
          </h3>
        </div>
      );
    }
    if (block.level === 3) {
      return (
        <div className={`mb-4 ${index === 0 ? '' : 'mt-8'}`}>
          <h4 className="font-display text-lg sm:text-xl font-bold text-[#1746D2] flex items-start gap-2.5">
            <span className="flex-shrink-0 w-1.5 h-6 rounded-full bg-[#00A86B] mt-0.5" />
            <span>{block.text}</span>
          </h4>
        </div>
      );
    }
  }

  if (block.type === 'paragraph') {
    return (
      <p className="text-slate-700 text-[1rem] leading-[1.8] mb-5 max-w-4xl font-medium">
        {block.text}
      </p>
    );
  }

  if (block.type === 'list') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8 max-w-5xl">
        {block.items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white text-xs md:text-sm text-slate-800 font-semibold shadow-sm hover:border-[#1746D2] hover:shadow-md transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-[#1746D2] shrink-0 mt-1.5" />
            <span className="leading-snug">{item}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function parseBodySections(bodyBlocks) {
  const sections = [];
  let currentSection = null;

  bodyBlocks.forEach((block) => {
    if (block.type === 'heading' && block.level === 1) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: block.text,
        blocks: [],
      };
    } else {
      if (currentSection) {
        currentSection.blocks.push(block);
      } else {
        currentSection = {
          title: "Overview",
          blocks: [block],
        };
      }
    }
  });
  if (currentSection) {
    sections.push(currentSection);
  }
  return sections;
}

// ── 1. Overview Section Renderer ──
function OverviewSection({ title, blocks }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8 w-full border-b border-slate-200 pb-4">
        <div className="w-2 h-8 bg-[#1746D2] rounded-r-lg" />
        <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-5">
          {blocks.filter(b => b.type === 'paragraph').map((p, idx) => (
            <p key={idx} className="font-body text-slate-700 text-[1rem] leading-[1.8] font-medium">
              {p.text}
            </p>
          ))}
        </div>

        <div className="lg:col-span-4 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1746D2] hover:shadow-md transition-all duration-300">
          <h4 className="font-display text-xs font-bold text-[#1746D2] tracking-widest uppercase mb-4">
            Key Strategic Value
          </h4>
          <p className="font-body text-sm text-slate-600 leading-relaxed font-medium mb-4">
            TECH6SENSE AI guarantees enterprise-grade AI solution delivery optimized around your core operational frameworks and performance targets.
          </p>
          <div className="flex items-center gap-2 text-[#00A86B] font-display text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse" />
            <span>Enterprise-Grade Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 2. Capabilities Section Renderer ──
function CapabilitiesSection({ title, blocks }) {
  const items = [];
  let currentItem = null;

  blocks.forEach((b) => {
    if (b.type === 'heading' && (b.level === 2 || b.level === 3)) {
      if (currentItem) items.push(currentItem);
      currentItem = { title: b.text, paragraphs: [], listItems: [] };
    } else if (currentItem) {
      if (b.type === 'paragraph') currentItem.paragraphs.push(b.text);
      else if (b.type === 'list') currentItem.listItems.push(...b.items);
    }
  });
  if (currentItem) items.push(currentItem);

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8 w-full border-b border-slate-200 pb-4">
        <div className="w-2 h-8 bg-[#1746D2] rounded-r-lg" />
        <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1746D2] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#1746D2] font-mono font-bold text-xs flex items-center justify-center mb-5">
                0{idx + 1}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1746D2] transition-colors">
                {item.title}
              </h3>
              {item.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-sm text-slate-600 leading-relaxed font-medium mb-4">
                  {p}
                </p>
              ))}
            </div>

            {item.listItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100 mt-4">
                {item.listItems.map((val, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-semibold p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B] shrink-0" />
                    <span className="leading-snug">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 3. Lifecycle Section Renderer ──
function LifecycleSection({ title, blocks }) {
  const steps = [];
  let currentStep = null;

  blocks.forEach((b) => {
    if (b.type === 'heading' && (b.level === 2 || b.level === 3)) {
      if (currentStep) steps.push(currentStep);

      const titleText = b.text;
      const numMatch = titleText.match(/^(\d+)\.\s*(.*)/);
      const stepNum = numMatch ? `0${numMatch[1]}` : "";
      const stepTitle = numMatch ? numMatch[2] : titleText;

      currentStep = { num: stepNum, title: stepTitle, paragraphs: [], lists: [] };
    } else if (currentStep) {
      if (b.type === 'paragraph') currentStep.paragraphs.push(b.text);
      else if (b.type === 'list') currentStep.lists.push(b.items);
    }
  });
  if (currentStep) steps.push(currentStep);

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-10 w-full border-b border-slate-200 pb-4">
        <div className="w-2 h-8 bg-[#1746D2] rounded-r-lg" />
        <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      {steps.length > 0 ? (
        <div className="relative pl-6 sm:pl-10 border-l-2 border-blue-100 ml-4 flex flex-col gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-10 sm:-left-14 top-0 flex items-center justify-center w-8 h-8">
                <span className="w-7 h-7 rounded-lg bg-[#1746D2] text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                  {step.num || idx + 1}
                </span>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1746D2] hover:shadow-md transition-all duration-300">
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>

                {step.paragraphs.map((p, i) => (
                  <p key={i} className="font-body text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-4">
                    {p}
                  </p>
                ))}

                {step.lists.map((itemsList, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-4 border-t border-slate-100 mt-4">
                    {itemsList.map((val, k) => (
                      <div key={k} className="flex items-center gap-2 text-xs text-slate-700 font-semibold p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B] shrink-0" />
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {blocks.map((b, idx) => {
            if (b.type === 'paragraph') {
              const text = b.text;
              const matches = text.match(/(\d+\.\s*[^0-9]+)/g);
              if (matches && matches.length > 0) {
                return (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {matches.map((matchStr, i) => {
                      const cleanStr = matchStr.trim();
                      const numMatch = cleanStr.match(/^(\d+)\.\s*(.*)/);
                      const numVal = numMatch ? numMatch[1] : `${i + 1}`;
                      const labelText = numVal && numMatch ? numMatch[2] : cleanStr;

                      return (
                        <div 
                          key={i} 
                          className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-900 shadow-sm"
                        >
                          <span className="w-6 h-6 rounded-lg bg-[#1746D2] text-white font-mono text-xs flex items-center justify-center font-bold">
                            {numVal}
                          </span>
                          <span>{labelText}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              }
              return (
                <p key={idx} className="font-body text-slate-700 text-[1rem] leading-[1.8] font-medium">
                  {text}
                </p>
              );
            }
            return <BlockItem key={idx} block={b} index={idx} />;
          })}
        </div>
      )}
    </div>
  );
}

// ── 4. Tech Section Renderer ──
function TechSection({ title, blocks }) {
  const categories = [];
  let currentCat = null;

  blocks.forEach((b) => {
    if (b.type === 'heading' && (b.level === 2 || b.level === 3)) {
      if (currentCat) categories.push(currentCat);
      currentCat = { title: b.text, paragraphs: [], itemsList: [] };
    } else if (currentCat) {
      if (b.type === 'paragraph') currentCat.paragraphs.push(b.text);
      else if (b.type === 'list') currentCat.itemsList.push(...b.items);
    }
  });
  if (currentCat) categories.push(currentCat);

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8 w-full border-b border-slate-200 pb-4">
        <div className="w-2 h-8 bg-[#1746D2] rounded-r-lg" />
        <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1746D2] hover:shadow-md transition-all duration-300">
            <h3 className="font-display text-base font-bold text-[#1746D2] mb-4 border-b border-slate-100 pb-3 uppercase tracking-wider">
              {cat.title}
            </h3>

            {cat.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-xs text-slate-600 leading-relaxed font-medium mb-4">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-1 gap-2">
              {cat.itemsList.map((tag, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800 font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B] shrink-0" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 5. Industries Section Renderer ──
function IndustriesSection({ title, blocks }) {
  const industries = [];
  let currentInd = null;

  blocks.forEach((b) => {
    if (b.type === 'heading' && (b.level === 2 || b.level === 3)) {
      if (currentInd) industries.push(currentInd);
      currentInd = { title: b.text, itemsList: [] };
    } else if (currentInd) {
      if (b.type === 'list') currentInd.itemsList.push(...b.items);
    }
  });
  if (currentInd) industries.push(currentInd);

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8 w-full border-b border-slate-200 pb-4">
        <div className="w-2 h-8 bg-[#1746D2] rounded-r-lg" />
        <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1746D2] hover:shadow-md transition-all duration-300">
            <h3 className="font-display text-base font-bold text-[#1746D2] mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00A86B]" />
              {ind.title}
            </h3>
            <div className="flex flex-col gap-2">
              {ind.itemsList.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium p-2 rounded-lg bg-slate-50/60 border border-slate-100">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#00A86B] flex-shrink-0" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 6. FAQ Section Renderer ──
function FaqItem({ faq, idx }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-[#1746D2] transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50/60"
      >
        <span className="font-display text-base font-bold text-slate-900 pr-4">
          {faq.q}
        </span>
        <span className={`w-7 h-7 rounded-lg bg-blue-50 text-[#1746D2] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1746D2] text-white' : ''}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="p-6 bg-slate-50/50">
          {faq.a.map((ans, k) => (
            <p key={k} className="font-body text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              {ans}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqSection({ title, blocks }) {
  const faqs = [];
  let currentFaq = null;

  blocks.forEach((b) => {
    if (b.type === 'heading' && b.level === 3) {
      if (currentFaq) faqs.push(currentFaq);
      currentFaq = { q: b.text, a: [] };
    } else if (currentFaq) {
      if (b.type === 'paragraph') currentFaq.a.push(b.text);
    }
  });
  if (currentFaq) faqs.push(currentFaq);

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8 w-full border-b border-slate-200 pb-4">
        <div className="w-2 h-8 bg-[#1746D2] rounded-r-lg" />
        <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} faq={faq} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function GenericSection({ title, blocks }) {
  return (
    <div className="mb-16">
      <div className="mb-6 border-b border-slate-200 pb-4">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {blocks.map((block, idx) => (
          <BlockItem key={idx} block={block} index={idx} />
        ))}
      </div>
    </div>
  );
}

// Full-page layout for JSON block-based service pages
function JsonBlockLayout({ pageData, serviceId, category, isVisible }) {
  const { pageTitle, blocks } = pageData;

  const firstListIdx = blocks.findIndex(b => b.type === 'list');
  const firstH1Idx = blocks.findIndex(b => b.type === 'heading' && b.level === 1 && b.text !== 'Hero Section' && !b.text.includes('Services by') && !b.text.includes(pageTitle));
  
  let splitIdx = -1;
  if (firstListIdx !== -1) {
    splitIdx = firstListIdx + 1;
  } else if (firstH1Idx !== -1) {
    splitIdx = firstH1Idx;
  }

  const heroBlocks = splitIdx !== -1 ? blocks.slice(0, splitIdx) : [];
  const bodyBlocks = splitIdx !== -1 ? blocks.slice(splitIdx) : blocks;

  const sections = parseBodySections(bodyBlocks);

  const heroHeadline = heroBlocks.find(b => b.type === 'heading' && b.level === 2)?.text || "";
  const heroSubSlogan = heroBlocks.find(b => b.type === 'heading' && b.level === 3)?.text || 
                        heroBlocks.find(b => b.type === 'heading' && b.level === 2 && b.text !== heroHeadline)?.text || 
                        "";

  const skipTexts = [
    'Hero Section',
    'CTA Buttons',
    'Examples include:',
    'Capabilities include:',
    'Primary Call-to-Action',
    'Call-to-Action Buttons',
    'Call to Action Buttons',
    'Turn your vision into an intelligent product with TECH6SENSE AI.',
    'Turn your vision into an intelligent product with TECH6SENSE AI'
  ];
  const heroParagraphs = heroBlocks.filter(b => b.type === 'paragraph' && !skipTexts.includes(b.text));

  const ctaListBlock = heroBlocks.find(b => b.type === 'list');
  const ctaButtons = ctaListBlock ? ctaListBlock.items : [];

  return (
    <div className="min-h-screen flex flex-col font-body bg-white text-slate-800 overflow-hidden">
      <Header />

      {/* Hero Section Container */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 pointer-events-none"
          style={{ backgroundImage: `url('/industries-hero-bg.jpg')` }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1746D2]/25 rounded-full blur-[140px] transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#00A86B]/20 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Slogan, Title, Intros, and CTAs */}
            <div className={`col-span-1 lg:col-span-8 flex flex-col items-start text-left transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

              {/* Line-Flanked Title Badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#00A86B]" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#00A86B]">
                  — INTELLIGENT SOLUTIONS : {category || "AI PLATFORMS"} —
                </span>
                <div className="w-8 h-[2px] bg-[#00A86B]" />
              </div>

              {/* Main Slogan Headline */}
              <h1 className="font-display text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[1.12] font-extrabold tracking-tight text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-blue-400 to-[#00A86B]">
                  {heroHeadline || pageTitle}
                </span>
              </h1>

              {/* Secondary Sub-slogan */}
              {heroSubSlogan && (
                <p className="font-display text-lg sm:text-xl font-bold text-slate-200 mb-6 leading-relaxed">
                  {heroSubSlogan}
                </p>
              )}

              {/* Intro Description paragraphs */}
              <div className="flex flex-col gap-4 mb-10 max-w-3xl">
                {heroParagraphs.map((para, idx) => (
                  <p key={idx} className="font-body text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                    {para.text}
                  </p>
                ))}
              </div>

              {/* Interactive buttons */}
              <div className="flex flex-row flex-wrap items-center gap-4">
                {ctaButtons.length > 0 ? (
                  <>
                    <Link
                      to={`/lets-connect?inquiry=${encodeURIComponent(pageTitle + " - " + ctaButtons[0])}`}
                      className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-8 py-4 font-body text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {ctaButtons[0]}
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Link>

                    {ctaButtons[1] && (
                      <Link
                        to={`/lets-connect?inquiry=${encodeURIComponent(pageTitle + " - " + ctaButtons[1])}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-700 bg-slate-900/80 px-8 py-4 font-body text-sm font-bold text-slate-200 hover:border-[#1746D2] hover:text-white transition-all shadow-sm"
                      >
                        {ctaButtons[1]}
                      </Link>
                    )}
                  </>
                ) : (
                  <Link
                    to={`/lets-connect?inquiry=${encodeURIComponent(pageTitle)}`}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-8 py-4 font-body text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
                  >
                    <span>Schedule AI Strategy Consultation</span>
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                )}
              </div>

            </div>

            {/* Right Column: Visual Architecture Card */}
            <div className={`col-span-1 lg:col-span-4 relative flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="w-full max-w-md relative p-8 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#1746D2]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00A86B]/20 rounded-full blur-3xl pointer-events-none" />

                <h4 className="font-display text-xs font-bold tracking-[0.2em] text-[#00A86B] uppercase mb-6 border-b border-slate-800 pb-3">
                  Enterprise Architecture
                </h4>

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                      DEPLOYMENT MODEL
                    </span>
                    <span className="font-display text-base font-extrabold text-white">
                      Cloud, Hybrid & Edge AI Infrastructure
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[0.65rem] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                      INTEGRATION & APIS
                    </span>
                    <span className="font-display text-sm font-bold text-blue-400">
                      Enterprise REST / gRPC & Webhooks
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[0.65rem] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                      SECURITY & GOVERNANCE
                    </span>
                    <span className="font-display text-xs font-bold text-slate-300">
                      ISO 27001, SOC 2, GDPR & HIPAA-Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Page Body Content Container */}
      <main className="flex-grow relative z-10 bg-white">
        <section className={`mx-auto max-w-[1400px] px-6 py-16 md:py-24 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {sections.map((section, idx) => {
            const titleLower = section.title.toLowerCase();
            if (idx === 0 || titleLower.includes('overview') || titleLower.includes('what is')) {
              return <OverviewSection key={idx} title={section.title} blocks={section.blocks} />;
            } else if (
              titleLower.includes('what we build') ||
              titleLower.includes('what we automate') ||
              titleLower.includes('what we integrate') ||
              titleLower.includes('capabilities') ||
              titleLower.includes('portfolio') ||
              titleLower.includes('services')
            ) {
              return <CapabilitiesSection key={idx} title={section.title} blocks={section.blocks} />;
            } else if (
              titleLower.includes('lifecycle') ||
              titleLower.includes('process') ||
              titleLower.includes('engine') ||
              titleLower.includes('how we') ||
              titleLower.includes('steps') ||
              titleLower.includes('framework')
            ) {
              return <LifecycleSection key={idx} title={section.title} blocks={section.blocks} />;
            } else if (
              titleLower.includes('technology') ||
              titleLower.includes('technologies') ||
              titleLower.includes('stack') ||
              titleLower.includes('tool')
            ) {
              return <TechSection key={idx} title={section.title} blocks={section.blocks} />;
            } else if (
              titleLower.includes('industries') ||
              titleLower.includes('industry') ||
              titleLower.includes('sectors') ||
              titleLower.includes('markets')
            ) {
              return <IndustriesSection key={idx} title={section.title} blocks={section.blocks} />;
            } else if (
              titleLower.includes('faq') ||
              titleLower.includes('questions') ||
              titleLower.includes('frequently')
            ) {
              return <FaqSection key={idx} title={section.title} blocks={section.blocks} />;
            } else {
              return <GenericSection key={idx} title={section.title} blocks={section.blocks} />;
            }
          })}
        </section>

        {/* Global Enterprise Final CTA Section */}
        <IndustriesFinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const techSectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [serviceId]);

  let normalizedId = serviceId;
  if (serviceId === 'retrieval-augmented-generation') {
    normalizedId = 'retrieval-augmented-generation-rag';
  } else if (serviceId === 'nlp-conversational-ai') {
    normalizedId = 'natural-language-processing-conversational-ai';
  } else if (serviceId === 'ar-vr-development') {
    normalizedId = 'virtual-reality-augmented-reality';
  }

  const jsonPage = aiDevData.pages[normalizedId] ||
    automationCopilotsData.pages[normalizedId] ||
    dataVisualData.pages[normalizedId] ||
    enterpriseCloudData.pages[normalizedId] ||
    advancedTechData.pages[normalizedId];

  let category = '';
  if (aiDevData.pages[normalizedId]) category = aiDevData.category;
  else if (automationCopilotsData.pages[normalizedId]) category = automationCopilotsData.category;
  else if (dataVisualData.pages[normalizedId]) category = dataVisualData.category;
  else if (enterpriseCloudData.pages[normalizedId]) category = enterpriseCloudData.category;
  else if (advancedTechData.pages[normalizedId]) category = advancedTechData.category;

  if (jsonPage) {
    return <JsonBlockLayout pageData={jsonPage} serviceId={normalizedId} category={category} isVisible={isVisible} />;
  }

  const service = servicesContent[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col font-body bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center pt-32 px-6 pb-20 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1746D2]/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            <span className="font-display text-sm font-extrabold text-[#1746D2] uppercase tracking-[0.25em] mb-4 block">
              ERROR CODE // 404_PAGE_NOT_FOUND
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              Solution File Not Found
            </h1>
            <p className="text-slate-600 mb-10 leading-relaxed">
              We couldn't retrieve the intelligent solution blueprint for ID <code className="text-[#1746D2] font-mono bg-[#1746D2]/10 px-1.5 py-0.5 rounded">"{serviceId}"</code>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/ai-agents"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-6 py-3 font-body text-xs font-bold tracking-widest text-white shadow-md hover:scale-[1.03] transition-all"
              >
                Go to Ecosystem
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-body text-xs font-bold tracking-widest text-slate-600 hover:border-[#1746D2]/40 hover:text-[#1746D2] transition-all shadow-sm"
              >
                Return Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-body bg-white text-slate-900 overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 pointer-events-none"
            style={{ backgroundImage: `url('/industries-hero-bg.jpg')` }}
          />

          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1746D2]/25 rounded-full blur-[140px] transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#00A86B]/20 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/3" />
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              <div className={`col-span-1 lg:col-span-7 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-body">
                  <Link to="/" className="hover:text-[#1746D2] transition-colors">Home</Link>
                  <span className="text-slate-600 font-normal">/</span>
                  <Link to="/ai-agents" className="hover:text-[#1746D2] transition-colors">Intelligent Solutions</Link>
                  <span className="text-slate-600 font-normal">/</span>
                  <span className="text-white font-bold">{service.title}</span>
                </nav>

                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-[#00A86B]" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#00A86B]">
                    — INTELLIGENT SOLUTIONS —
                  </span>
                  <div className="w-8 h-[2px] bg-[#00A86B]" />
                </div>

                <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.8rem)] leading-[1.1] font-extrabold tracking-tight mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-blue-400 to-[#00A86B]">
                    {service.title}
                  </span>
                </h1>

                <p className="font-display text-lg sm:text-xl text-slate-200 font-semibold mb-6 max-w-2xl leading-relaxed">
                  {service.tagline}
                </p>

                <p className="font-body text-slate-300 text-base leading-relaxed mb-10 max-w-3xl">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to={`/lets-connect?inquiry=${encodeURIComponent(service.title)}`}
                    className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-8 py-4 font-body text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Request Solution Deploy
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              <div className={`col-span-1 lg:col-span-5 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl overflow-hidden backdrop-blur-md">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[90px] pointer-events-none bg-[#1746D2]/20" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[90px] pointer-events-none bg-[#00A86B]/20" />

                  <h3 className="font-display text-xs font-mono font-bold tracking-wider text-[#00A86B] uppercase mb-8 border-b border-slate-800 pb-4">
                    OPERATIONAL METRICS EXPECTATION
                  </h3>

                  <div className="flex flex-col gap-8 relative z-10">
                    {service.metrics.map((met, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[0.65rem] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          {met.label}
                        </span>
                        <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                          {met.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24 border-b border-slate-200">
          <div className="max-w-3xl mb-12">
            <span className="font-display text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-3 block">
              CAPABILITIES & WORKFLOWS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Operational Framework Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, idx) => (
              <FeatureCard
                key={idx}
                title={feat.title}
                desc={feat.desc}
              />
            ))}
          </div>
        </section>

        <section ref={techSectionRef} className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="col-span-1 lg:col-span-6">
              <span className="font-display text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-3 block">
                INTEGRATION STACK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Technical Stack & Deployment Standards
              </h2>
              <p className="font-body text-slate-600 leading-relaxed mb-8">
                All solutions are engineered adhering to modern architectural practices. We deploy using containerized orchestrations and scalable cloud APIs, guaranteeing secure database sync structures, telemetry pipelines, and low inference latency.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-display text-sm font-bold px-4 py-2 rounded-xl border border-blue-100 bg-blue-50/50 text-[#1746D2] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-1 lg:col-span-6">
              <div className="border border-slate-200 bg-white p-8 rounded-2xl relative overflow-hidden shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900 mb-4">Enterprise Compliance & Security</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                  Our integration frameworks support GDPR, HIPAA, and custom auditing regulations. We deploy prompt injection firewalls and secure weight encryptions to block vulnerabilities.
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#1746D2]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className="font-display text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Secure Sandbox & Production Deployments
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <IndustriesFinalCTA />
      </main>

      <Footer />
    </div>
  );
}
