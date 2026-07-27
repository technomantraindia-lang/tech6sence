import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './sections/Footer';

export default function PageLayout({ title }) {
  return (
    <div className="bg-[#0a031d] min-h-screen flex flex-col relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 [background-image:linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute top-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-600/15 to-fuchsia-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-fuchsia-600/10 to-violet-600/15 blur-[120px] pointer-events-none" />

      <Header />
      
      <main className="flex-grow pt-32 md:pt-48 pb-24 px-6 relative z-10 flex flex-col items-center">
        <div className="max-w-[85rem] w-full mx-auto flex flex-col items-center text-center mt-10 md:mt-16">
          
          {/* Glassmorphism Breadcrumb Pill */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-950/30 px-5 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all hover:border-violet-500/40">
            <Link to="/" className="text-[0.8rem] font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
              <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <span className="text-violet-500/50 text-xs font-bold">/</span>
            <span className="text-[0.8rem] font-semibold text-violet-300 tracking-wide">{title}</span>
          </div>
          
          {/* Elegant Main Title */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight font-extrabold tracking-[-0.02em] text-white mb-12">
            <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-lg">
              {title}
            </span>
          </h1>
          
          {/* Glowing Content Box */}
          <div className="relative group max-w-2xl w-full">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 group-hover:opacity-35 blur-xl transition duration-1000" />
            <div className="relative rounded-3xl border border-violet-500/20 bg-[#0a031d]/60 px-8 py-16 backdrop-blur-2xl flex flex-col items-center shadow-2xl">
              <div className="h-16 w-16 rounded-full border border-violet-500/30 bg-violet-500/10 flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(139,92,246,0.1)]">
                <svg className="w-7 h-7 text-violet-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-wide">Future Ready</h2>
              <p className="text-slate-400 font-body text-base leading-relaxed max-w-md mx-auto">
                We are actively synthesizing the ultimate intelligence experience for <strong className="text-slate-200 font-semibold">{title}</strong>. Check back soon for cutting-edge updates and insights.
              </p>
              
              <Link to="/" className="mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-violet-500/30 bg-violet-950/40 px-7 py-3.5 font-display text-xs font-bold tracking-widest text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                <span>RETURN TO MAINFRAME</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </main>
      
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
