import React, { useEffect, useState, useRef } from 'react';

export default function ContactFormSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="form" ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div className={`mb-16 lg:mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#1746D2] to-[#00A86B] rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              CONTACT FORM
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold text-slate-900 mb-6 tracking-tight">
            Tell Us What You Want to Build
          </h2>
          
          <p className="font-body text-slate-600 text-lg leading-relaxed max-w-2xl">
            Share a few details about your requirement, and the TECH6SENSE AI team will connect with you to discuss the right direction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Form */}
          <div className={`lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm transition-all duration-1000 delay-200 ease-out relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Thank you!</h3>
                <p className="font-body text-slate-600">Your enquiry has been received. Our team will connect with you soon.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-sm font-bold text-[#1746D2] hover:text-[#1746D2] transition-colors">
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      placeholder="Enter your full name" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1746D2]/60 focus:ring-4 focus:ring-violet-400/10 transition-all font-body text-sm"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      placeholder="Enter your email address" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1746D2]/60 focus:ring-4 focus:ring-violet-400/10 transition-all font-body text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1746D2]/60 focus:ring-4 focus:ring-violet-400/10 transition-all font-body text-sm"
                    />
                  </div>
                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-bold text-slate-700">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      placeholder="Enter your company name" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1746D2]/60 focus:ring-4 focus:ring-violet-400/10 transition-all font-body text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Interest Type */}
                  <div className="space-y-2">
                    <label htmlFor="interest" className="block text-sm font-bold text-slate-700">Interest Type</label>
                    <select 
                      id="interest" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#1746D2]/60 focus:ring-4 focus:ring-violet-400/10 transition-all font-body text-sm appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">Select Team Category / Inquiry Type</option>
                      <optgroup label="⚡ INTELLIGENT SOLUTIONS">
                        <option value="[INTELLIGENT SOLUTIONS] AI Product & Model Development">AI Product & Model Development</option>
                        <option value="[INTELLIGENT SOLUTIONS] Intelligent Automation & Agent Systems">Intelligent Automation & Agent Systems</option>
                        <option value="[INTELLIGENT SOLUTIONS] Generative & Applied AI">Generative & Applied AI</option>
                        <option value="[INTELLIGENT SOLUTIONS] AI Strategy & Governance">AI Strategy & Governance</option>
                        <option value="[INTELLIGENT SOLUTIONS] Data & Visual Intelligence">Data & Visual Intelligence</option>
                      </optgroup>
                      <optgroup label="🧬 DEEP-TECH PRODUCTS">
                        <option value="[DEEP-TECH PRODUCTS] Deep-Tech Hardware & Embedded Systems">Deep-Tech Hardware & Embedded Systems</option>
                        <option value="[DEEP-TECH PRODUCTS] AI IoT & Smart Sensors">AI IoT & Smart Sensors</option>
                        <option value="[DEEP-TECH PRODUCTS] Robotics & Autonomous Systems">Robotics & Autonomous Systems</option>
                      </optgroup>
                      <optgroup label="🚀 VISIONARY FOUNDERS">
                        <option value="[VISIONARY FOUNDERS] AI Venture Studio & Co-Founder Bench">AI Venture Studio & Co-Founder Bench</option>
                        <option value="[VISIONARY FOUNDERS] Startup Infrastructure & Turnkey Tech">Startup Infrastructure & Turnkey Tech</option>
                        <option value="[VISIONARY FOUNDERS] Founder Application Inquiry">Founder Application Inquiry</option>
                      </optgroup>
                      <optgroup label="🧠 BUSINESS BRAINS">
                        <option value="[BUSINESS BRAINS] Executive Advisory & Member Network">Executive Advisory & Member Network</option>
                        <option value="[BUSINESS BRAINS] Investor & Family Office Track">Investor & Family Office Track</option>
                        <option value="[BUSINESS BRAINS] Peer Nomination & Advisory">Peer Nomination & Advisory</option>
                      </optgroup>
                      <optgroup label="📩 GENERAL INQUIRY">
                        <option value="[GENERAL CONTACT] Partnership / Strategic Alliance">Partnership / Strategic Alliance</option>
                        <option value="[GENERAL CONTACT] General Business Discussion">General Business Discussion</option>
                      </optgroup>
                    </select>
                  </div>
                  {/* Project Stage */}
                  <div className="space-y-2">
                    <label htmlFor="stage" className="block text-sm font-bold text-slate-700">Project Stage</label>
                    <select 
                      id="stage" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#1746D2]/60 focus:ring-4 focus:ring-violet-400/10 transition-all font-body text-sm appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">Select an option</option>
                      <option value="Idea Stage">Idea Stage</option>
                      <option value="Planning Stage">Planning Stage</option>
                      <option value="Existing Business Need">Existing Business Need</option>
                      <option value="Product Development Stage">Product Development Stage</option>
                      <option value="Scaling / Enterprise Stage">Scaling / Enterprise Stage</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    required
                    placeholder="Tell us about your idea, requirement, or business challenge" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1746D2]/60 focus:ring-4 focus:ring-violet-400/10 transition-all font-body text-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-[#1746D2] to-[#00A86B] px-8 py-4 font-body text-sm font-bold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)]"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Side: Guidance Panel */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1746D2]/10 to-white rounded-bl-full pointer-events-none" />
              
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6 relative z-10">
                What Can You Discuss With Us?
              </h3>
              
              <ul className="space-y-4 mb-8 relative z-10">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] mt-2 shrink-0" />
                  <span className="font-body text-sm text-slate-700 leading-relaxed">AI strategy and consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] mt-2 shrink-0" />
                  <span className="font-body text-sm text-slate-700 leading-relaxed">Custom AI product development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] mt-2 shrink-0" />
                  <span className="font-body text-sm text-slate-700 leading-relaxed">Business automation and AI agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] mt-2 shrink-0" />
                  <span className="font-body text-sm text-slate-700 leading-relaxed">Deep-tech and smart product ideas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] mt-2 shrink-0" />
                  <span className="font-body text-sm text-slate-700 leading-relaxed">Founder ecosystem and partnership opportunities</span>
                </li>
              </ul>

              <div className="p-4 bg-[#1746D2]/10/50 rounded-xl border border-[#1746D2]/10 relative z-10">
                <p className="font-body text-xs text-slate-600 leading-relaxed">
                  We usually begin by understanding your goals, current challenges, project stage, and expected business outcome.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
