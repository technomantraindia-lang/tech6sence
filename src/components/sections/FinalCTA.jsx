import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { sendFormEmail } from '../../utils/sendEmail';

export default function FinalCTA() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    
    const categoryTag = formData.category && formData.category.includes(']')
      ? formData.category.split(']')[0] + ']'
      : 'ðŸ“© [GENERAL INQUIRY]';

    await sendFormEmail({
      subjectTag: categoryTag,
      formTitle: 'Homepage Quick Consultation Inquiry',
      formData: {
        fullName: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        category: formData.category || 'General Consultation',
        message: formData.message
      }
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', company: '', category: '', message: '' });
  };

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
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-10 md:py-12 px-2.5 sm:px-6 md:px-8 overflow-hidden bg-[#FAFAFA] border-t border-slate-200/80 text-slate-900"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cta-glow-drift {
          0%, 100% { transform: translate(-50%, -50%) scale(1) translate(0, 0); }
          33% { transform: translate(-50%, -50%) scale(1.15) translate(40px, -30px); }
          66% { transform: translate(-50%, -50%) scale(0.9) translate(-30px, 40px); }
        }
        @keyframes cta-btn-shine {
          0% { transform: translateX(-100%) rotate(30deg); }
          100% { transform: translateX(200%) rotate(30deg); }
        }
        .animate-glow-drift {
          animation: cta-glow-drift 18s ease-in-out infinite;
        }
        .cta-btn-shine-effect {
          position: absolute;
          top: -50%;
          left: -60%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.3) 50%,
            transparent
          );
          transform: rotate(30deg);
          pointer-events: none;
        }
        .group:hover .cta-btn-shine-effect {
          animation: cta-btn-shine 1.6s ease-in-out infinite;
        }
      `}} />

      {/* Ambient background glows */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-gradient-to-tr from-blue-100/60 via-emerald-100/40 to-transparent blur-[120px] pointer-events-none z-0 animate-glow-drift"
      />

      {/* Main Container */}
      <div 
        className={`relative max-w-[1400px] mx-auto rounded-2xl sm:rounded-[2.5rem] border border-slate-200/80 bg-white/90 backdrop-blur-md overflow-hidden py-10 px-4 sm:px-10 md:py-20 md:px-16 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content Block */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Headline */}
            <h2 
              className="mb-6 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.12] font-extrabold text-slate-900 tracking-tight transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                transitionDelay: '150ms'
              }}
            >
              Engineering the Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2] font-extrabold">
                Intelligence
              </span>
            </h2>

            {/* Paragraph */}
            <p 
              className="mb-10 font-body text-[1rem] sm:text-[1.1rem] leading-[1.8] text-slate-600 font-medium transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                transitionDelay: '300ms'
              }}
            >
              Whether you're an enterprise accelerating AI adoption, a government modernizing digital infrastructure, a startup building the next breakthrough platform, or a visionary founder creating the future, TECH6SENSE AI provides the intelligence, engineering, and strategic partnership to transform ambition into global impact.
            </p>

            {/* Brand signature (footer close) */}
            <div 
              className="border-t border-slate-200/80 pt-6 w-full text-left transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                transitionDelay: '450ms'
              }}
            >
              <p className="font-display text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                <span className="text-[#1746D2] uppercase tracking-wider font-extrabold">TECH6SENSE AI</span>{' '}
                <span className="text-slate-400 font-light mx-1">â€”</span>{' '}
                <span className="text-slate-600 font-semibold">Sense Beyond Technology. Build Beyond Imagination.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div 
            className="lg:col-span-5 w-full transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '350ms'
            }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 p-5 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden">
              
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-xs mb-6">Our enterprise AI strategy team will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="text-sm font-bold text-[#1746D2] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Talk to TECH6SENSE AI</h3>
                  
                  <div>
                    <label className="block text-[0.7rem] font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1746D2]/10 focus:border-[#1746D2] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.7rem] font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1746D2]/10 focus:border-[#1746D2] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.7rem] font-bold text-slate-500 uppercase tracking-wider mb-2">Company / Organization</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1746D2]/10 focus:border-[#1746D2] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.7rem] font-bold text-slate-500 uppercase tracking-wider mb-2">Select Team / Service Category</label>
                    <select 
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1746D2]/10 focus:border-[#1746D2] transition-all appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">Select Team Category (Optional)</option>
                      <optgroup label="âš¡ INTELLIGENT SOLUTIONS">
                        <option value="[INTELLIGENT SOLUTIONS] AI Product & Model Development">AI Product & Model Development</option>
                        <option value="[INTELLIGENT SOLUTIONS] Intelligent Automation & Agent Systems">Intelligent Automation & Agent Systems</option>
                        <option value="[INTELLIGENT SOLUTIONS] Generative & Applied AI">Generative & Applied AI</option>
                      </optgroup>
                      <optgroup label="ðŸ§¬ DEEP-TECH PRODUCTS">
                        <option value="[DEEP-TECH PRODUCTS] Deep-Tech Hardware & Embedded Systems">Deep-Tech Hardware & Embedded Systems</option>
                        <option value="[DEEP-TECH PRODUCTS] AI IoT & Smart Sensors">AI IoT & Smart Sensors</option>
                      </optgroup>
                      <optgroup label="ðŸš€ VISIONARY FOUNDERS">
                        <option value="[VISIONARY FOUNDERS] AI Venture Studio & Co-Founder Bench">AI Venture Studio & Co-Founder Bench</option>
                        <option value="[VISIONARY FOUNDERS] Startup Infrastructure & Turnkey Tech">Startup Infrastructure & Turnkey Tech</option>
                      </optgroup>
                      <optgroup label="ðŸ§  BUSINESS BRAINS">
                        <option value="[BUSINESS BRAINS] Executive Advisory & Member Network">Executive Advisory & Member Network</option>
                        <option value="[BUSINESS BRAINS] Investor & Family Office Track">Investor & Family Office Track</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.7rem] font-bold text-slate-500 uppercase tracking-wider mb-2">How can we help?</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or business needs..."
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1746D2]/10 focus:border-[#1746D2] transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#1746D2] to-[#00A86B] py-4 font-display text-sm font-bold text-white shadow-[0_4px_20px_rgba(23,70,210,0.15)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.25)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="cta-btn-shine-effect" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <span className="transition-transform duration-300 group-hover:translate-x-0.5 font-extrabold">â†’</span>}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
