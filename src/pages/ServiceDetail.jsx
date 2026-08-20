import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { servicesContent } from '../data/servicesContent';
import aiDevData from '../data/intelligent-data/ai-development.json';
import automationCopilotsData from '../data/intelligent-data/automation-copilots.json';
import dataVisualData from '../data/intelligent-data/data-visual-intelligence.json';
import enterpriseCloudData from '../data/intelligent-data/enterprise-ai-cloud.json';
import advancedTechData from '../data/intelligent-data/advanced-tech-software.json';

// Custom card component for features with DOM-based mouse spotlight tracking
function FeatureCard({ title, desc, accent, accentRgb }) {
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
      className="group relative p-8 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 160px at var(--mx, -99px) var(--my, -99px), rgba(${accentRgb}, 0.08), transparent 70%)`
        }}
      />

      {/* Dynamic Colored Border on Hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl border border-transparent transition-colors duration-500"
        style={{
          borderColor: `rgba(${accentRgb}, 0.2)`
        }}
      />

      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 border border-slate-100"
          style={{ background: `rgba(${accentRgb}, 0.1)`, color: accent }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
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

// ─────────────────────────────────────────────────────────────────────────────
// Rich block renderer for JSON-based Intelligent Solutions pages
// Renders every heading, paragraph, and list block from the JSON data
// ─────────────────────────────────────────────────────────────────────────────

function BlockItem({ block, index }) {
  // Skip meta/instructional text that is not meant for display
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
        <div className={`mb-8 ${index === 0 ? '' : 'mt-20 pt-12 border-t border-slate-100'}`}>
          <span className="inline-block font-display text-sm font-extrabold text-emerald-600 uppercase tracking-[0.25em] mb-3">
            ── SECTION OVERVIEW
          </span>
          <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.5rem)] font-extrabold leading-[1.2] tracking-tight bg-gradient-to-r from-blue-700 via-blue-800 to-emerald-600 bg-clip-text text-transparent">
            {block.text}
          </h2>
        </div>
      );
    }
    if (block.level === 2) {
      return (
        <div className={`mb-5 ${index === 0 ? '' : 'mt-14'}`}>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 flex items-start gap-3">
            <span className="flex-shrink-0 w-2.5 h-2.5 mt-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />
            <span>{block.text}</span>
          </h3>
        </div>
      );
    }
    if (block.level === 3) {
      return (
        <div className={`mb-4 ${index === 0 ? '' : 'mt-10'}`}>
          <h4 className="font-display text-lg sm:text-xl font-bold text-blue-900 flex items-start gap-2.5">
            <span className="flex-shrink-0 w-1.5 h-6 rounded-full bg-emerald-500 mt-0.5" />
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
      <div className="flex flex-wrap gap-2.5 mb-8 max-w-5xl">
        {block.items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full border border-blue-200 bg-blue-50/30 text-[0.875rem] text-blue-950 font-bold shadow-sm hover:border-emerald-400 hover:bg-emerald-50/20 transition-all duration-300 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            {item}
          </span>
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
    <div className="mb-20">
      <div className="flex items-center gap-6 mb-10 w-full">
        <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-950 tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-5">
          {blocks.filter(b => b.type === 'paragraph').map((p, idx) => (
            <p key={idx} className="font-body text-slate-700 text-[1rem] leading-[1.8] font-medium">
              {p.text}
            </p>
          ))}
        </div>

        <div className="lg:col-span-4 p-8 rounded-3xl bg-blue-50/45 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h4 className="font-display text-xs font-bold text-blue-900 tracking-widest uppercase mb-4">
            Key Strategic Value
          </h4>
          <p className="font-body text-[0.875rem] text-slate-650 leading-relaxed font-medium mb-4">
            TECH6SENSE AI guarantees reliable enterprise solution delivery optimized around your core operational frameworks and telemetry goals.
          </p>
          <div className="flex items-center gap-2 text-emerald-600 font-display text-sm font-extrabold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Active Integration Protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 2. Capabilities Section Renderer ("What We Build", "SaaS Categories" etc.) ──
function CapabilitiesSection({ title, blocks }) {
  // Parse blocks into individual capability items
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
    <div className="mb-20">
      <div className="flex items-center gap-6 mb-10 w-full">
        <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-950 tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const cardBg = isEven ? "bg-blue-50/45 hover:bg-blue-50/75" : "bg-emerald-50/35 hover:bg-emerald-50/60";
          const shadowStyle = isEven ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)]" : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)]";

          return (
            <div key={idx} className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm border-0 ${cardBg} ${shadowStyle}`}>
              <div>
                <div className="w-10 h-10 rounded-xl bg-white text-blue-800 shadow-sm flex items-center justify-center mb-6 font-display font-black text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                {item.paragraphs.map((p, i) => (
                  <p key={i} className="font-body text-[0.925rem] text-slate-650 leading-relaxed font-medium mb-4">
                    {p}
                  </p>
                ))}
              </div>

              {item.listItems.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100/60 mt-4">
                  {item.listItems.map((val, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-100/50 bg-white text-xs text-blue-950 font-bold shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      {val}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── 3. Lifecycle Section Renderer ("Development Lifecycle" stages) ──
function LifecycleSection({ title, blocks }) {
  const steps = [];
  let currentStep = null;

  blocks.forEach((b) => {
    if (b.type === 'heading' && (b.level === 2 || b.level === 3)) {
      if (currentStep) steps.push(currentStep);

      // Separate number and title (e.g. "1. Discovery & Strategy" -> "01", "Discovery & Strategy")
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
    <div className="mb-20">
      <div className="flex items-center gap-6 mb-12 w-full">
        <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-950 tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
      </div>

      {steps.length > 0 ? (
        <div className="relative pl-6 sm:pl-10 border-l border-blue-100 ml-4 flex flex-col gap-12">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const cardBg = isEven ? "bg-blue-50/45 hover:bg-blue-50/75" : "bg-emerald-50/35 hover:bg-emerald-50/60";
            const shadowStyle = isEven ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)]" : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)]";

            return (
              <div key={idx} className="relative group">
                {/* Pulsing visual step badge indicator */}
                <div className="absolute -left-10 sm:-left-14 top-0 flex items-center justify-center w-8 h-8">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-display font-black text-xs flex items-center justify-center shadow-md">
                    {step.num || idx + 1}
                  </span>
                </div>

                <div className={`p-8 rounded-3xl transition-all duration-300 border-0 shadow-sm ${cardBg} ${shadowStyle}`}>
                  <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  {step.paragraphs.map((p, i) => (
                    <p key={i} className="font-body text-[0.925rem] text-slate-650 leading-relaxed font-medium mb-5">
                      {p}
                    </p>
                  ))}

                  {step.lists.map((itemsList, i) => (
                    <div key={i} className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-100/60">
                      {itemsList.map((val, k) => (
                        <span key={k} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-100/50 bg-white text-xs text-blue-950 font-bold shadow-sm">
                          <span className="w-1 h-1 rounded-full bg-emerald-500" />
                          {val}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Fallback for paragraph list format (e.g. "1. Step A 2. Step B...")
        <div className="flex flex-col gap-6">
          {blocks.map((b, idx) => {
            if (b.type === 'paragraph') {
              const text = b.text;
              const matches = text.match(/(\d+\.\s*[^0-9]+)/g);
              if (matches && matches.length > 0) {
                return (
                  <div key={idx} className="flex flex-wrap gap-3">
                    {matches.map((matchStr, i) => {
                      const cleanStr = matchStr.trim();
                      const numMatch = cleanStr.match(/^(\d+)\.\s*(.*)/);
                      const numVal = numMatch ? numMatch[1] : `${i + 1}`;
                      const labelText = numVal && numMatch ? numMatch[2] : cleanStr;

                      return (
                        <div 
                          key={i} 
                          className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-blue-150 bg-blue-50/10 text-sm font-bold text-slate-900 shadow-sm"
                        >
                          <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
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

// ── 4. Tech Section Renderer ("Core AI Technologies We Integrate") ──
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
    <div className="mb-20">
      <div className="flex items-center gap-6 mb-10 w-full">
        <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-950 tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => {
          const isEven = idx % 2 === 0;
          const cardBg = isEven ? "bg-blue-50/45 hover:bg-blue-50/75" : "bg-emerald-50/35 hover:bg-emerald-50/60";
          const shadowStyle = isEven ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)]" : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)]";

          return (
            <div key={idx} className={`p-8 rounded-3xl transition-all duration-300 relative overflow-hidden shadow-sm border-0 ${cardBg} ${shadowStyle}`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-lg pointer-events-none" />
              <h3 className="font-display text-base font-extrabold text-slate-850 mb-4 border-b border-slate-100 pb-3 uppercase tracking-wider">
                {cat.title}
              </h3>

              {cat.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-[0.8rem] text-slate-600 leading-relaxed font-medium mb-4">
                  {p}
                </p>
              ))}

              <div className="flex flex-wrap gap-2">
                {cat.itemsList.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-100 bg-white text-xs text-blue-900 font-bold shadow-sm">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── 5. Industries Section Renderer ("Industries We Serve") ──
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
    <div className="mb-20">
      <div className="flex items-center gap-6 mb-10 w-full">
        <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-950 tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, idx) => {
          const isEven = idx % 2 === 0;
          const cardBg = isEven ? "bg-blue-50/45 hover:bg-blue-50/75" : "bg-emerald-50/35 hover:bg-emerald-50/60";
          const shadowStyle = isEven ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)]" : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)]";

          return (
            <div key={idx} className={`p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between border-0 shadow-sm ${cardBg} ${shadowStyle}`}>
              <div>
                <h3 className="font-display text-base font-extrabold text-blue-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {ind.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {ind.itemsList.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[0.875rem] text-slate-700 font-semibold">
                      <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Individual FAQ Item component to properly isolate state hooks
function FaqItem({ faq, idx }) {
  const [isOpen, setIsOpen] = useState(false);
  const isEven = idx % 2 === 0;
  const cardBg = isEven ? "bg-blue-50/45 hover:bg-blue-50/75" : "bg-emerald-50/35 hover:bg-emerald-50/60";
  const shadowStyle = isEven ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)]" : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)]";

  return (
    <div className={`rounded-3xl overflow-hidden transition-all duration-300 border-0 shadow-sm ${cardBg} ${shadowStyle}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-white/40"
      >
        <span className="font-display text-sm sm:text-base font-extrabold text-blue-955 pr-4">
          {faq.q}
        </span>
        <span className={`w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-blue-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/90' : ''}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] border-t border-slate-100/50 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="p-8 bg-white/40">
          {faq.a.map((ans, k) => (
            <p key={k} className="font-body text-[0.925rem] text-slate-700 leading-relaxed font-medium">
              {ans}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 6. FAQ Accordion Section Renderer ──
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
    <div className="mb-20">
      <div className="flex items-center gap-6 mb-8 w-full">
        <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} faq={faq} idx={idx} />
        ))}
      </div>
    </div>
  );
}

// ── 7. Generic Section Renderer (Fallback) ──
function GenericSection({ title, blocks }) {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        {blocks.map((block, idx) => (
          <BlockItem key={idx} block={block} index={idx} />
        ))}
      </div>
    </div>
  );
}

// Full-page layout for JSON block-based service pages (light theme)
function JsonBlockLayout({ pageData, serviceId, category, isVisible }) {
  const { pageTitle, blocks } = pageData;

  // Dynamically split blocks into Hero (before body content starts) and Body (after Hero content)
  // The Hero content always ends right after the first list block (the Hero CTA list)
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

  // Group the flat body blocks list into structured themed section objects
  const sections = parseBodySections(bodyBlocks);

  // Extract key contents from heroBlocks
  const heroHeadline = heroBlocks.find(b => b.type === 'heading' && b.level === 2)?.text || "";
  
  // Extract a subheadline/slogan (a level-3 or level-2 heading from heroBlocks that isn't the main headline)
  const heroSubSlogan = heroBlocks.find(b => b.type === 'heading' && b.level === 3)?.text || 
                        heroBlocks.find(b => b.type === 'heading' && b.level === 2 && b.text !== heroHeadline)?.text || 
                        "";

  // Skip matching vision slogans and placeholders from hero paragraphs
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

  // Extract custom CTA button items from the lists inside hero blocks
  const ctaListBlock = heroBlocks.find(b => b.type === 'list');
  const ctaButtons = ctaListBlock ? ctaListBlock.items : [];

  return (
    <div className="min-h-screen flex flex-col font-body bg-white text-slate-800 overflow-hidden">
      <Header />

      {/* Hero Section Container with premium styling */}
      <section className="relative w-full bg-[#f8fafc] border-b border-slate-200/60 pt-36 md:pt-44 pb-20 overflow-hidden">
        {/* Subtle dot-grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.015)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none z-0" />

        {/* Ambient glow backlights */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none bg-blue-600/[0.04] z-0" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-emerald-500/[0.03] z-0" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">

          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 mb-8 font-body">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <Link to="/ai-agents" className="hover:text-blue-600 transition-colors">Intelligent Solutions</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-bold">{pageTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Slogan, Title, Intros, and CTAs */}
            <div className={`col-span-1 lg:col-span-8 flex flex-col items-start text-left transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

              {/* Category tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-display text-sm font-extrabold tracking-widest uppercase text-blue-700">
                  {category}
                </span>
              </div>

              {/* Page Name */}
              <span className="text-xs font-extrabold tracking-wider text-emerald-600 uppercase mb-2">
                {pageTitle}
              </span>

              {/* Main Slogan Headline */}
              <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] font-black tracking-tight text-slate-900 mb-5">
                {heroHeadline || pageTitle}
              </h1>

              {/* Secondary Sub-slogan */}
              {heroSubSlogan && (
                <p className="font-display text-lg sm:text-xl font-bold text-blue-900 mb-6">
                  {heroSubSlogan}
                </p>
              )}

              {/* Intro Description paragraphs */}
              <div className="flex flex-col gap-4 mb-8">
                {heroParagraphs.map((para, idx) => (
                  <p key={idx} className="font-body text-slate-600 text-[0.95rem] leading-[1.75] font-medium">
                    {para.text}
                  </p>
                ))}
              </div>

              {/* Interactive buttons */}
              <div className="flex flex-row flex-wrap items-center gap-4">
                {ctaButtons.length > 0 ? (
                  <Link
                    to={`/lets-connect?inquiry=${encodeURIComponent(pageTitle + " - " + ctaButtons[0])}`}
                    className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm hover:scale-[1.03] hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98]"
                  >
                    {ctaButtons[0]}
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    to={`/lets-connect?inquiry=${encodeURIComponent(pageTitle)}`}
                    className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-xs font-bold tracking-widest uppercase hover:scale-[1.03] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all"
                  >
                    Schedule Consultation
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                )}
              </div>

            </div>

            {/* Right Column: Visual Blueprint Card */}
            <div className={`col-span-1 lg:col-span-4 relative flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="w-full max-w-sm relative p-8 rounded-[2rem] border border-blue-100 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-emerald-400/5 rounded-full blur-2xl pointer-events-none" />

                <h4 className="font-display text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase mb-6 border-b border-slate-100 pb-3">
                  System Architecture
                </h4>

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[0.6rem] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                      DEPLOYMENT MODEL
                    </span>
                    <span className="font-display text-base font-extrabold text-slate-800">
                      VPC, Hybrid & Secure Cloud
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[0.6rem] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                      INTEGRATION
                    </span>
                    <span className="font-display text-sm font-bold text-blue-900">
                      Standard REST APIs & Webhooks
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[0.6rem] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                      COMPLIANCE
                    </span>
                    <span className="font-display text-xs font-bold text-slate-600">
                      HIPAA, GDPR, SOC2 Audit-ready
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

        {/* ── ALL CONTENT SECTIONS ── */}
        <section className={`mx-auto max-w-6xl px-6 py-16 md:py-24 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
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

        {/* ── CTA FOOTER ── */}
        <section className="mx-auto max-w-[1400px] px-6 py-12 md:py-20">
          <div className="relative rounded-[2.5rem] border border-blue-100 bg-slate-50/80 backdrop-blur-md p-10 md:p-16 text-center shadow-md overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none" />

            <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mb-4 relative z-10">
              Ready to Build with {pageTitle}?
            </h2>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
              Connect with our engineering leads to discuss your requirements and map out a complete solution architecture tailored to your business.
            </p>

            <Link
              to={`/lets-connect?inquiry=${encodeURIComponent(pageTitle)}`}
              className="relative z-10 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-4 font-body text-xs font-bold tracking-widest text-white shadow-md hover:scale-[1.03] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] active:scale-[0.98]"
            >
              Schedule Engineering Consultation
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
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

  // Normalize serviceId parameter to match database keys in the JSON registries
  let normalizedId = serviceId;
  if (serviceId === 'retrieval-augmented-generation') {
    normalizedId = 'retrieval-augmented-generation-rag';
  } else if (serviceId === 'nlp-conversational-ai') {
    normalizedId = 'natural-language-processing-conversational-ai';
  } else if (serviceId === 'ar-vr-development') {
    normalizedId = 'virtual-reality-augmented-reality';
  }

  // Check for rich JSON block content (AI Development, Automation & Copilots, Data & Visual Intelligence, Enterprise AI & Cloud, or Advanced Tech category pages)
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

  // Fallback: lookup from legacy servicesContent registry
  const service = servicesContent[serviceId];

  // If service does not exist in content registry, show custom 404 state
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col font-body bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center pt-32 px-6 pb-20 text-center relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1746D2]/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            <span className="font-display text-sm font-extrabold text-fuchsia-400 uppercase tracking-[0.25em] mb-4 block">
              ERROR CODE // 404_PAGE_NOT_FOUND
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              Solution File Not Found
            </h1>
            <p className="text-slate-600 mb-10 leading-relaxed">
              We couldn't retrieve the intelligent solution blueprint for ID <code className="text-[#1746D2] font-mono bg-[#1746D2]/10 px-1.5 py-0.5 rounded">"{serviceId}"</code>. It may have been relocated or updated.
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
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-body bg-slate-50 text-slate-900 overflow-hidden">
      <Header />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating Ambient Glowing blobs */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, rgba(${service.accentRgb}, 0.08) 0%, transparent 70%)` }}
      />
      <div
        className="absolute top-1/3 left-[-15%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, rgba(217, 70, 239, 0.06) 0%, transparent 70%)` }}
      />

      <main className="flex-grow pt-28 md:pt-36">

        {/* HERO SECTION */}
        <section className="mx-auto max-w-[1400px] px-6 pb-20 md:pb-28 relative z-10 border-b border-[#1746D2]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left side info */}
            <div className={`col-span-1 lg:col-span-7 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

              {/* Breadcrumbs Navigation */}
              <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-body">
                <Link to="/" className="hover:text-[#1746D2] transition-colors">Home</Link>
                <span className="text-slate-600 font-normal">/</span>
                <Link to="/ai-agents" className="hover:text-[#1746D2] transition-colors">Intelligent Solutions</Link>
                <span className="text-slate-600 font-normal">/</span>
                <span className="text-slate-900 font-bold">{service.title}</span>
              </nav>

              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1746D2]/20 bg-white shadow-sm mb-6 font-display text-sm font-extrabold tracking-widest uppercase"
                style={{ color: service.accent }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {service.category}
              </div>

              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.1] font-extrabold tracking-tight mb-6">
                {service.title}
              </h1>

              <p className="font-display text-lg sm:text-xl text-slate-700 font-semibold mb-6 max-w-2xl leading-relaxed">
                {service.tagline}
              </p>

              <p className="font-body text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to={`/lets-connect?inquiry=${encodeURIComponent(service.title)}`}
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-8 py-4 font-body text-xs font-bold tracking-widest text-white transition-all hover:scale-[1.02] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Solution Deploy
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </Link>
                <button
                  onClick={() => techSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-body text-xs font-bold tracking-widest text-slate-600 hover:border-[#1746D2]/40 hover:text-[#1746D2] transition-all shadow-sm"
                >
                  Explore Tech Stack
                </button>
              </div>
            </div>

            {/* Right side metrics visual panel */}
            <div className={`col-span-1 lg:col-span-5 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[90px] pointer-events-none"
                  style={{ background: `radial-gradient(circle, rgba(${service.accentRgb}, 0.15) 0%, transparent 70%)` }}
                />

                <h3 className="font-display text-sm font-mono font-bold tracking-wider text-slate-500 mb-8 border-b border-slate-100 pb-4">
                  OPERATIONAL METRICS EXPECTATION
                </h3>

                <div className="flex flex-col gap-8">
                  {service.metrics.map((met, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[0.65rem] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        {met.label}
                      </span>
                      <span
                        className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(to right, ${service.accent}, #d946ef)` }}
                      >
                        {met.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES BENTO GRID SECTION */}
        <section className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 relative z-10 border-b border-[#1746D2]/10">
          <div className="max-w-3xl mb-16">
            <span className="font-display text-sm font-extrabold text-fuchsia-400 uppercase tracking-widest mb-3 block">
              CAPABILITIES & WORKFLOWS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              Operational Framework Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, idx) => (
              <FeatureCard
                key={idx}
                title={feat.title}
                desc={feat.desc}
                accent={service.accent}
                accentRgb={service.accentRgb}
              />
            ))}
          </div>
        </section>

        {/* TECH STACKS SECTION */}
        <section ref={techSectionRef} className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="col-span-1 lg:col-span-6">
              <span className="font-display text-sm font-extrabold text-fuchsia-400 uppercase tracking-widest mb-3 block">
                INTEGRATION STACK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Technical Stack & Deployment Standards
              </h2>
              <p className="font-body text-slate-400 leading-relaxed mb-8">
                All solutions are engineered adhering to modern architectural practices. We deploy using containerized orchestrations and scalable cloud APIs, guaranteeing secure database sync structures, telemetry pipelines, and low inference latency.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-display text-sm font-extrabold px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-[#1746D2] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-1 lg:col-span-6">
              <div className="border border-slate-200 bg-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1746D2]/10 rounded-full blur-2xl" />
                <h4 className="font-display text-base font-bold text-slate-900 mb-4">Enterprise Compliance & Security</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                  Our integration frameworks support GDPR, HIPAA, and custom auditing regulations. We deploy prompt injection firewalls and secure weight encryptions to block vulnerabilities.
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1746D2]/10 text-[#1746D2]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className="font-display text-sm font-extrabold text-slate-700 uppercase tracking-wider">
                    Secure Sandbox & Production Deployments
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM FINAL CTA */}
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24 relative z-10">
          <div className="relative rounded-[2.5rem] border border-[#1746D2]/20 bg-gradient-to-r from-[#0b1329] to-indigo-950 p-10 md:p-16 text-center shadow-lg overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1746D2]/10 blur-[130px] pointer-events-none" />

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 relative z-10">
              Ready to Integrate {service.title}?
            </h2>

            <p className="text-sm md:text-base text-[#1746D2]/40 leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
              Connect with our engineering leads to schedule a complete architectural evaluation. We will map out data pipelines, model configurations, and compute costs built around your workspace operational scopes.
            </p>

            <Link
              to={`/lets-connect?inquiry=${encodeURIComponent(service.title)}`}
              className="relative z-10 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-8 py-4 font-body text-xs font-bold tracking-widest text-[#1233A0] transition-all hover:scale-[1.03] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] active:scale-[0.98]"
            >
              Schedule Engineering Audit
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
