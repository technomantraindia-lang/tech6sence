import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import blogsData from '../data/blogs.json';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const blog = blogsData.find((b) => b.slug === slug || b.id === Number(slug));

  if (!blog) {
    return (
      <div className="bg-slate-50 min-h-screen text-slate-800 font-body">
        <Header />
        <main className="pt-40 pb-20 text-center px-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold font-display text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The requested blog post could not be found or has been relocated.</p>
          <Link to="/blogs" className="inline-flex items-center px-6 py-3 rounded-full bg-[#1746D2] text-white font-bold text-sm">
            ← Return to All Blogs
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedBlogs = blogsData.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body selection:bg-[#1746D2]/20 selection:text-slate-900">
      <Header />

      <main className="pt-28 pb-24 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/60 bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[400px] bg-[#1746D2]/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            
            {/* Back Button */}
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1746D2] hover:text-[#00A86B] transition-colors mb-8 group"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">←</span>
              <span>Back to Blogs</span>
            </Link>

            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#1746D2]/10 border border-[#1746D2]/20 text-xs font-bold text-[#1746D2] uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="text-xs font-mono text-slate-400">•</span>
              <span className="text-xs font-mono text-slate-500 font-semibold">{blog.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] mb-8 tracking-tight">
              {blog.title}
            </h1>

            {/* Author / Metadata */}
            <div className="flex items-center gap-4 py-4 border-y border-slate-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1746D2] to-[#00A86B] flex items-center justify-center text-white font-bold text-sm shadow-md">
                T6
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">{blog.author}</p>
                <p className="text-xs font-mono text-slate-500">{blog.date}</p>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURED COVER IMAGE */}
        <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-20 mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 min-h-[300px] max-h-[460px] bg-gradient-to-br from-[#050112] via-slate-900 to-[#1746D2]/40 flex items-center justify-center">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </section>

        {/* ARTICLE BODY */}
        <article className="max-w-3xl mx-auto px-6 font-body text-slate-700 text-lg leading-relaxed space-y-6">
          {blog.content.map((paragraph, index) => {
            const trimmed = paragraph.trim();

            // Ignore duplicate main title line if repeated at start
            if (index === 0 && trimmed === blog.title) return null;

            // Check if paragraph is a Heading
            const isHeading = (
              trimmed.length < 90 && 
              !trimmed.endsWith('.') && 
              !trimmed.endsWith(':') &&
              !trimmed.startsWith('https://') &&
              !trimmed.startsWith('Link:')
            );

            if (isHeading) {
              return (
                <h2 
                  key={index} 
                  className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 pt-8 pb-2 leading-tight tracking-tight border-t border-slate-200/60 mt-10"
                >
                  {trimmed}
                </h2>
              );
            }

            // Check if paragraph is a list item or bullet point
            const isListItem = (
              trimmed.startsWith('•') || 
              trimmed.startsWith('-') || 
              /^\d+\./.test(trimmed)
            );

            if (isListItem) {
              return (
                <div key={index} className="flex items-start gap-3 pl-2 py-1">
                  <span className="w-2 h-2 rounded-full bg-[#1746D2] mt-2.5 shrink-0" />
                  <p className="text-slate-800 font-medium text-base md:text-lg leading-relaxed">{trimmed.replace(/^[•\-\d+\.]\s*/, '')}</p>
                </div>
              );
            }

            // Check for links/URLs
            if (trimmed.startsWith('Link:') || trimmed.startsWith('https://')) {
              return null; // Suppress raw document links
            }

            // Standard Paragraph
            return (
              <p key={index} className="text-slate-700 text-base md:text-lg leading-relaxed">
                {trimmed}
              </p>
            );
          })}

          {/* Bottom Callout Banner */}
          <div className="my-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#050112] via-slate-900 to-[#00A86B]/30 border border-slate-800 text-white shadow-2xl text-center space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00A86B]/20 border border-[#00A86B]/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-widest">
              Transform Your Business With AI
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-extrabold leading-tight">
              Ready to Build Your AI Solution with TECH6SENSE AI?
            </h3>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
              Partner with our team of AI strategy, custom development, and deep-tech product engineering experts to turn your vision into measurable enterprise results.
            </p>
            <div className="pt-2">
              <Link 
                to="/lets-connect" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] font-bold text-sm text-white shadow-lg hover:scale-105 transition-all"
              >
                Schedule an AI Strategy Session →
              </Link>
            </div>
          </div>
        </article>

        {/* RELATED ARTICLES */}
        <section className="max-w-[1400px] mx-auto px-6 pt-20 border-t border-slate-200/80 mt-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-2">Explore Related Insights</h3>
            <p className="text-slate-500 text-sm font-medium">Continue reading from our latest AI development and deep-tech articles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((rel) => (
              <Link
                key={rel.id}
                to={`/blogs/${rel.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#1746D2]/40"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#1746D2]">
                    {rel.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-mono text-slate-400 mb-2">{rel.date}</span>
                  <h4 className="font-display text-base font-bold text-slate-900 mb-3 group-hover:text-[#1746D2] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mt-auto">
                    {rel.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
