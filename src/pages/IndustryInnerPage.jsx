import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import IndustriesFinalCTA from '../components/industries/IndustriesFinalCTA';
import innerPagesData from '../data/industries-inner-pages.json';
import { industriesImpactData } from '../data/industriesImpactData';

const industriesImages = import.meta.glob('../assets/industries images/*.avif', { eager: true });

export default function IndustryInnerPage() {
  const { industryId } = useParams();

  const pageData = useMemo(() => {
    if (!industryId || !innerPagesData || !innerPagesData.pages) return null;
    
    const keys = Object.keys(innerPagesData.pages);
    const searchKey = industryId.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 1. Direct exact match
    if (keys.includes(industryId)) return innerPagesData.pages[industryId];
    
    // 2. Fuzzy match
    let matchedKey = keys.find(k => {
      const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (cleanK.includes(searchKey) || searchKey.includes(cleanK)) return true;
      if (searchKey === 'finance' && cleanK.includes('financ')) return true;
      if (searchKey === 'pharma' && cleanK.includes('pharma')) return true;
      return false;
    });
    
    return matchedKey ? innerPagesData.pages[matchedKey] : null;
  }, [industryId]);

  useEffect(() => {
    // Force scroll to top on page load/change
    window.scrollTo(0, 0);
  }, [industryId]);

  // Preprocess blocks to fix fractured text and guarantee the PDF header structure
  const processedBlocks = useMemo(() => {
    if (!pageData) return [];
    
    let blocks = [...pageData.blocks];
    
    // 1. Reconstruct the Header Section (First 4 logical blocks)
    let secondHeadingIdx = -1;
    for (let i = 1; i < blocks.length; i++) {
        if (blocks[i].type === 'heading' && blocks[i].level === 1) {
            secondHeadingIdx = i;
            break;
        }
    }
    
    if (secondHeadingIdx !== -1) {
        // Merge everything before the second Heading 1 into Subtitle 1
        const sub1Texts = blocks.slice(1, secondHeadingIdx).map(b => (b.text || '').trim());
        const sub1 = { type: 'heading', level: 2, text: sub1Texts.join(' ') };
        
        // Find where Subtitle 2 ends (stops at a long paragraph or one ending in punctuation)
        let sub2EndIdx = secondHeadingIdx + 1;
        while (sub2EndIdx < blocks.length) {
            const b = blocks[sub2EndIdx];
            if (!b || (b.type !== 'paragraph' && b.type !== 'heading')) break;
            const text = (b.text || '').trim();
            if (text.length > 85 || /[.!?:]$/.test(text)) {
                break;
            }
            sub2EndIdx++;
        }
        
        const sub2Texts = blocks.slice(secondHeadingIdx + 1, sub2EndIdx).map(b => (b.text || '').trim());
        const sub2 = { type: 'heading', level: 2, text: sub2Texts.join(' ') };
        
        blocks = [
            blocks[0],
            sub1,
            blocks[secondHeadingIdx],
            sub2,
            ...blocks.slice(sub2EndIdx)
        ];
    }
    
    // 2. Apply general merge logic for the rest of the document
    const merged = [];
    for (let i = 0; i < blocks.length; i++) {
      let currentBlock = { ...blocks[i] };

      // Identify unclassified headings (only apply after the header section)
      if (i >= 4 && currentBlock.type === 'paragraph') {
        const text = (currentBlock.text || '').trim();
        const isShort = text.length > 0 && text.length < 75;
        const endsWithPunctuation = /[.!?:]$/.test(text);
        const startsWithUppercase = /^[A-Z]/.test(text);
        const endsWithBadWord = /(and|or|with|to|the|a|an|in|of|for)$/i.test(text);
        
        if (isShort && startsWithUppercase && !endsWithPunctuation && !endsWithBadWord) {
          currentBlock.type = 'heading';
          currentBlock.level = 3;
        }
      }

      if (merged.length > 0) {
        const last = merged[merged.length - 1];
        
        // Merge consecutive paragraphs intelligently
        if (currentBlock.type === 'paragraph' && last.type === 'paragraph') {
          const lastText = (last.text || '').trim();
          const currentText = (currentBlock.text || '').trim();
          
          const lastEndsWithPunctuation = /[.!?:]$/.test(lastText);
          const currentStartsWithLowercase = /^[a-z]/.test(currentText);
          
          if (!lastEndsWithPunctuation || currentStartsWithLowercase) {
            last.text += " " + currentBlock.text;
            continue; // Skip pushing currentBlock, it's merged
          }
        }
        
        // Merge consecutive level 2 headings
        if (currentBlock.type === 'heading' && currentBlock.level === 2 && last.type === 'heading' && last.level === 2) {
          last.text += " " + currentBlock.text;
          continue;
        }
      }
      
      merged.push(currentBlock);
    }
    
    return merged;
  }, [pageData]);

  // Engine to render dynamic blocks from JSON
  const renderBlock = (block, idx) => {
    if (!block) return null;
    
    switch (block.type) {
      case 'heading':
        if (block.level === 1) {
          if (idx === 0) {
            return null; // Don't render the first block here, it's now in the Hero Section
          } else if (idx === 2 || (idx > 0 && idx < 4 && block.text && block.text.startsWith("AI Solutions for"))) {
            return (
              <div key={idx} className="mt-10 mb-6">
                <div className="w-full border-t-[3px] border-slate-300 mb-10" />
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black leading-tight tracking-tight m-0 p-0">
                  {block.text}
                </h2>
              </div>
            );
          } else {
            return (
              <div key={idx} className="mt-16 mb-8 relative pl-5 md:pl-6">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-emerald-400 to-blue-700 rounded-r-lg shadow-sm" />
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-blue-950 leading-tight m-0 p-0">
                  {block.text}
                </h2>
              </div>
            );
          }
        } else if (block.level === 2) {
          if (idx === 1 || idx === 3) {
            return (
              <h3 key={idx} className="font-display text-xl md:text-2xl font-bold text-black leading-snug mb-8">
                {block.text}
              </h3>
            );
          } else {
            return (
              <h3 key={idx} className="font-display text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-200 to-emerald-50 flex items-center justify-center shrink-0 border border-blue-300 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-700 to-emerald-500" />
                </div>
                {block.text}
              </h3>
            );
          }
        } else {
          return (
            <h4 key={idx} className="font-display text-xl md:text-2xl font-bold text-blue-950 mt-10 mb-4">
              {block.text}
            </h4>
          );
        }
      case 'paragraph':
        return (
          <p key={idx} className="text-lg text-slate-700 leading-relaxed mb-6">
            {block.text}
          </p>
        );
      case 'list':
        const isNumbered = block.style === 'numbered';
        
        if (isNumbered) {
          return (
            <ol key={idx} className="list-decimal list-outside space-y-4 mb-10 ml-6 text-slate-700 text-lg leading-relaxed marker:text-blue-700 marker:font-bold">
              {block.items.map((item, i) => (
                <li key={i} className="pl-2">{item}</li>
              ))}
            </ol>
          );
        } else {
          return (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {block.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-blue-300 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-100 transition-transform">
                    <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium pt-1 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          );
        }
      default:
        return null;
    }
  };

  // Separate the final CTA blocks from the main content
  const { mainContentBlocks, ctaBlocks } = useMemo(() => {
    let mainContentBlocks = [...processedBlocks];
    let ctaBlocks = [];
    
    // Look backwards for the "Let's Build the Future" heading
    for (let i = processedBlocks.length - 1; i >= Math.max(0, processedBlocks.length - 10); i--) {
      const block = processedBlocks[i];
      // Safely check if the block has text before accessing it
      if (block && block.text) {
        const text = block.text.trim();
        if (text.startsWith("Let's Build the Future") || text.startsWith("Let’s Build the Future")) {
          ctaBlocks = processedBlocks.slice(i);
          mainContentBlocks = processedBlocks.slice(0, i);
          break;
        }
      }
    }
    
    return { mainContentBlocks, ctaBlocks };
  }, [processedBlocks]);

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col font-body bg-slate-50 overflow-x-hidden">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-28 pb-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Industry Not Found</h1>
            <p className="text-slate-600 mb-8">We couldn't find the deep-dive insights for this industry.</p>
            <Link to="/industries" className="px-6 py-3 bg-[#1746D2] text-white font-bold rounded-full hover:bg-[#1746D2] transition-colors">
              Return to Industries
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Look up the background image
  const imageKey = `../assets/industries images/${pageData.pageTitle}.avif`;
  const bgImage = industriesImages[imageKey] ? industriesImages[imageKey].default : null;

  return (
    <div className="min-h-screen flex flex-col font-body bg-white overflow-x-hidden">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-28">
        
        {/* Industry Hero Section */}
        <div 
          className="relative bg-slate-900 border-b border-slate-800 py-24 md:py-36 mb-16 overflow-hidden bg-cover bg-center"
          style={bgImage ? { backgroundImage: `url("${bgImage}")` } : {}}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-slate-950/70" />
          
          {/* Background Accents (only if no image) */}
          {!bgImage && (
            <>
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            </>
          )}
          
          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white mb-8 transition-colors group">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Industries
            </Link>
            
            <h1 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-extrabold text-white leading-tight tracking-tight max-w-4xl">
              {pageData.pageTitle}
            </h1>
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          
          {/* Main Document Content */}
          <div className="lg:w-2/3 lg:pr-8">
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-a:text-blue-700 hover:prose-a:text-blue-900">
              {mainContentBlocks.map((block, idx) => renderBlock(block, idx))}
            </div>
          </div>
          
          {/* Sticky Sidebar */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-32 p-8 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Ready to transform your operations?
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Connect with our AI experts to discuss tailored solutions and enterprise architectures specifically designed for this sector.
              </p>
              
              <Link to="/lets-connect" className="flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-blue-700 to-emerald-500 text-white font-bold text-sm hover:scale-[1.02] shadow-md shadow-blue-200 transition-all duration-300">
                Discuss Your Use Case
              </Link>
              
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Explore More</h4>
                <Link to="/industries" className="text-blue-700 hover:text-blue-900 font-semibold text-sm flex items-center gap-2 transition-colors">
                  View all Industry Solutions
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <IndustriesFinalCTA />

      </main>
      
      <Footer />
    </div>
  );
}
