import React from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Submit Application",
      desc: "Tell us about yourself and your objectives",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v6h6v10H6z"/>
        </svg>
      )
    },
    {
      num: "02",
      title: "Review",
      desc: "We assess fit and community value alignment",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      )
    },
    {
      num: "03",
      title: "Conversation",
      desc: "Brief call to discuss membership tier and goals",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
        </svg>
      )
    },
    {
      num: "04",
      title: "Onboarding",
      desc: "Welcome to Business Brains with orientation session",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    }
  ];

  const expectations = [
    "Active participation and engagement",
    "Value-first approach to relationships",
    "Confidentiality and trust",
    "Collaborative spirit",
    "Respect for diversity of perspectives"
  ];

  return (
    <section className="relative bg-white text-slate-900 py-20 md:py-28 overflow-hidden border-b border-slate-200">
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side: Steps */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
            How It Works
          </h2>
          <div className="space-y-10 relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[1.35rem] bottom-8 w-px bg-slate-200" />
            
            {steps.map((step, idx) => (
              <div key={idx} onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="relative flex items-start gap-6 group">
                {/* Icon Circle */}
                <div onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 border-2 border-emerald-100 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-colors duration-300">
                  {step.icon}
                </div>
                
                <div className="pt-2">
                  <span className="font-mono text-sm font-bold text-emerald-600 mb-1 block">
                    STEP {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Expectations */}
        <div>
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-12 h-full border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#1746D2]/10 rounded-full blur-[60px] pointer-events-none" />
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 relative z-10">
              Member Expectations
            </h2>
            
            <ul className="space-y-6 relative z-10">
              {expectations.map((exp, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">
                    {exp}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-10 border-t border-slate-200 relative z-10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Ready to Transform Your Network?
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Apply now and join the community where capital meets innovation.
              </p>
              <a 
                href="#business-brain-commu" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors"
              >
                Apply for Membership
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
