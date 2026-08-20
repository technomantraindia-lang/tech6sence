import React, { useState } from 'react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    company: '',
    role: '',
    tier: 'Explorer',
    goals: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Business Brains Application Submitted:", formData);
    alert("Application submitted successfully. We will be in touch soon.");
  };

  return (
    <section id="business-brain-commu" className="relative bg-[#000110] text-white py-24 md:py-32 overflow-hidden border-t border-slate-900/50">
      
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Abstract Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0, 168, 107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0, 168, 107,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-1/4 left-[-20%] w-[600px] h-[600px] bg-[#0b1329]/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-display text-sm font-extrabold uppercase tracking-widest">
                Applications Open
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Join Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#1746D2]">
                Brains Community
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 max-w-lg mb-12 leading-relaxed">
              Our committee reviews applications on a rolling basis to ensure the highest quality network for our members.
            </p>

            <div className="space-y-8 relative">
              <div className="absolute left-[1.1rem] top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
              
              <div className="relative flex items-start gap-6">
                <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full bg-[#000110] border-2 border-emerald-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Strict Confidentiality</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Your data is securely encrypted and never shared with third parties.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full bg-[#000110] border-2 border-emerald-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Vetted Network</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Every member goes through a strict verification process for community fit.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Block */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl p-8 md:p-12 overflow-hidden group">
              
              {/* Form Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} 
                           className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all hover:border-slate-600" 
                           placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} 
                           className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all hover:border-slate-600" 
                           placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                           className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all hover:border-slate-600" 
                           placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest">LinkedIn Profile *</label>
                    <input required type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} 
                           className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all hover:border-slate-600" 
                           placeholder="https://linkedin.com/in/..." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest">Company Name</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} 
                           className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all hover:border-slate-600" 
                           placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest">Job Title / Role</label>
                    <input type="text" name="role" value={formData.role} onChange={handleChange} 
                           className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all hover:border-slate-600" 
                           placeholder="Founder / CEO" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest">Primary Goals *</label>
                  <textarea required name="goals" value={formData.goals} onChange={handleChange} rows={4} 
                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all hover:border-slate-600 resize-none" 
                            placeholder="What are you hoping to achieve by joining Business Brains?" />
                </div>

                <button 
                  type="submit" 
                  className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-[#1746D2] p-[1px] group/btn transition-all hover:scale-[1.01]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-[#1746D2] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                  <div className="relative flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-8 py-4 transition-all group-hover/btn:bg-opacity-0">
                    <span className="font-bold text-white text-sm tracking-wide">
                      Submit Application
                    </span>
                    <svg className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
