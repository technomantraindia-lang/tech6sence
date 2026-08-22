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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@tech6senseai.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Business Brains Application from ${formData.name} - TECH6SENSE AI`,
          _captcha: 'false',
          _template: 'table',
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Phone Number": formData.phone || 'Not provided',
          "LinkedIn Profile": formData.linkedin || 'Not provided',
          "Company": formData.company || 'Not provided',
          "Role": formData.role || 'Not provided',
          "Membership Tier": formData.tier,
          "Primary Goals": formData.goals || 'Not provided'
        })
      });

      const data = await response.json();
      if (response.ok || data.success === 'true') {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Business Brains Submission Error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="business-brain-commu" className="relative bg-[#000110] text-white py-24 md:py-32 overflow-hidden border-t border-slate-900/50">
      
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,107,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
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
              Step into an elite network of enterprise AI leaders, visionary executives, and tech innovators. Submit your application below for community review.
            </p>
          </div>

          {/* Right Form Block */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1746D2]/10 rounded-full blur-3xl pointer-events-none" />
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-4">Application Submitted!</h3>
                  <p className="text-slate-300 max-w-md">Thank you for applying to the Business Brains Ecosystem. Our advisory council will review your submission and contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-bold text-emerald-400 hover:underline"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Work Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com" 
                        className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000" 
                        className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">LinkedIn URL</label>
                      <input 
                        type="url" 
                        name="linkedin" 
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="linkedin.com/in/username" 
                        className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Company / Organization</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name" 
                        className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Role / Title</label>
                      <input 
                        type="text" 
                        name="role" 
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="CTO, Founder, VP of AI" 
                        className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Membership Tier</label>
                    <select 
                      name="tier"
                      value={formData.tier}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    >
                      <option value="Explorer">Explorer Tier</option>
                      <option value="Leader">Leader Tier</option>
                      <option value="Council">Executive Council Tier</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Primary Goals / Interests</label>
                    <textarea 
                      name="goals" 
                      rows="3"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="Briefly describe what you hope to achieve or contribute..." 
                      className="w-full px-5 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-[#1746D2] font-bold text-white shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
                  >
                    {loading ? "Submitting Application..." : "Submit Application"}
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
