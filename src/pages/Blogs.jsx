import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import blogsData from '../data/blogs.json';

export default function Blogs() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body selection:bg-[#1746D2]/20 selection:text-slate-900">
      <Header />

      <main className="pt-24 pb-20 overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-slate-200/60 bg-white">
          {/* Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[#1746D2]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://tech6senseai.com/wp-content/uploads/2026/02/noise.png')] opacity-[0.02] mix-blend-multiply pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1746D2]/10 border border-[#1746D2]/20 shadow-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#1746D2] animate-pulse" />
              <span className="text-xs font-bold text-[#1746D2] tracking-wider uppercase">Insights & News</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B]">
                Latest Blogs
              </span>
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8">
              Stay ahead of the curve with our expert insights on Agentic AI, enterprise automation, deep-tech innovations, and the future of business intelligence.
            </p>
          </div>
        </section>

        {/* BLOG GRID SECTION */}
        <section className="relative py-20 px-6 max-w-[1400px] mx-auto z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <article
                key={blog.id}
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#1746D2]/40 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-[#0b1329]/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-md bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-sm text-xs font-bold text-[#1746D2] tracking-wide">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-4">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="font-semibold text-slate-700">{blog.author}</span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#1746D2] transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-8">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#1746D2] group-hover:text-[#00A86B] transition-colors">
                      Read Full Article
                    </span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#1746D2]/10 group-hover:text-[#1746D2] transition-colors transform group-hover:rotate-45">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
