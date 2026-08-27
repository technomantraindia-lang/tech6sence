import React, { useState } from 'react';
import { touchHoverProps } from '../../hooks/useTouchHover';
import { sendFormEmail } from '../../utils/sendEmail';

export default function ApplicationAndNomination() {
  const [activePath, setActivePath] = useState(null); // null | 'direct' | 'nominate'
  const [directStep, setDirectStep] = useState(1);
  
  // Direct Application State
  const [directForm, setDirectForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    city: '',
    linkedin: '',
    profileCategory: 'Investor',
    otherRoleDesc: '',
    // Investor fields
    firmName: '',
    capitalType: 'Venture Capital',
    investmentRange: '$500K–$2M',
    sectors: 'Technology',
    portfolioHighlights: '',
    // Founder fields
    companyName: '',
    role: '',
    companyStage: 'Growth Stage',
    website: '',
    achievements: '',
    seeking: 'Capital',
    // Executive fields
    titleOrg: '',
    industry: '',
    scopeInfluence: '',
    contribution: '',
    // Case
    statementRelevance: '',
    wasReferred: false,
    referredMemberName: '',
    recognitionContext: '',
    // Final
    discoverySource: 'TECH6SENSE AI',
    confidentiality: false
  });

  const [directSubmitted, setDirectSubmitted] = useState(false);

  // Nomination Form State
  const [nomForm, setNomForm] = useState({
    nominatorEmail: '',
    nomineeName: '',
    nomineeEmail: '',
    nomineeCompanyRole: '',
    nomineeCategory: 'Investor',
    nomineeCountry: 'United States',
    relationship: '',
    nominationStatement: '',
    consent: false
  });

  const [nomSubmitted, setNomSubmitted] = useState(false);

  // Handlers
  const handleDirectChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDirectForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNomChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNomForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDirectSubmit = async (e) => {
    e.preventDefault();
    setDirectSubmitted(true);
    await sendFormEmail({
      subjectTag: '🧠 [BUSINESS BRAINS]',
      formTitle: `Direct Membership Application - ${directForm.profileCategory}`,
      formData: directForm
    });
  };

  const handleNomSubmit = async (e) => {
    e.preventDefault();
    setNomSubmitted(true);
    await sendFormEmail({
      subjectTag: '🧠 [BUSINESS BRAINS]',
      formTitle: 'Peer Nomination',
      formData: nomForm
    });
  };

  const countryList = [
    "United States", "United Kingdom", "Australia", "Canada", "India", 
    "European Union", "United Arab Emirates", "Singapore", "Hong Kong", 
    "Germany", "France", "Switzerland", "Japan", "Saudi Arabia", "Qatar", "Other Country"
  ];

  return (
    <section id="nomination-form" className="relative bg-slate-50 text-slate-900 py-20 md:py-28 border-b border-slate-200 overflow-hidden scroll-mt-32">
      <span id="application-entry" className="absolute top-0 left-0 scroll-mt-32" />
      <span id="business-brain-commu" className="absolute top-0 left-0 scroll-mt-32" />
      
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,70,210,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(23,70,210,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/50 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-12">
        
        {/* ENTRY SELECTOR HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              CONSIDERATION FOR MEMBERSHIP · BY INVITATION ONLY
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Present Yourself for Consideration
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            BUSINESS BRAINS does not have open enrollment. This form is the beginning of a private review process — not a guarantee of entry. Please answer with precision; brevity and honesty are valued far more than polish.
          </p>
        </div>

        {/* TWO PATH SELECTOR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Apply Directly */}
          <div 
            onClick={() => { setActivePath('direct'); setDirectSubmitted(false); }}
            {...touchHoverProps}
            className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between group ${
              activePath === 'direct' 
                ? 'bg-[#1746D2] text-white shadow-xl shadow-blue-600/20' 
                : 'bg-white border border-slate-200/90 shadow-[6px_6px_0px_0px_rgba(23,70,210,0.3)] hover:bg-[#1746D2] hover:border-[#1746D2] hover:-translate-y-1'
            }`}
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                activePath === 'direct' ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#1746D2] group-hover:bg-white/20 group-hover:text-white'
              }`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <h3 className={`text-2xl font-bold mb-3 font-display transition-colors ${
                activePath === 'direct' ? 'text-white' : 'text-slate-900 group-hover:text-white'
              }`}>
                Apply Directly
              </h3>

              <p className={`text-sm leading-relaxed mb-6 font-normal transition-colors ${
                activePath === 'direct' ? 'text-white/90' : 'text-slate-600 group-hover:text-white'
              }`}>
                Present your own case for membership in the Circle.
              </p>
            </div>

            <button className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all ${
              activePath === 'direct' 
                ? 'bg-white text-[#1746D2] shadow-md' 
                : 'bg-slate-100 text-slate-900 group-hover:bg-white group-hover:text-[#1746D2]'
            }`}>
              Begin My Application
            </button>
          </div>

          {/* Card 2: Nominate Someone */}
          <div 
            onClick={() => { setActivePath('nominate'); setNomSubmitted(false); }}
            {...touchHoverProps}
            className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between group ${
              activePath === 'nominate' 
                ? 'bg-[#00A86B] text-white shadow-xl shadow-emerald-600/20' 
                : 'bg-white border border-slate-200/90 shadow-[6px_6px_0px_0px_rgba(0,168,107,0.3)] hover:bg-[#00A86B] hover:border-[#00A86B] hover:-translate-y-1'
            }`}
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                activePath === 'nominate' ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#00A86B] group-hover:bg-white/20 group-hover:text-white'
              }`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>

              <h3 className={`text-2xl font-bold mb-3 font-display transition-colors ${
                activePath === 'nominate' ? 'text-white' : 'text-slate-900 group-hover:text-white'
              }`}>
                Nominate Someone
              </h3>

              <p className={`text-sm leading-relaxed mb-6 font-normal transition-colors ${
                activePath === 'nominate' ? 'text-white/90' : 'text-slate-600 group-hover:text-white'
              }`}>
                You are a member, or know someone who belongs in this room.
              </p>
            </div>

            <button className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all ${
              activePath === 'nominate' 
                ? 'bg-white text-[#00A86B] shadow-md' 
                : 'bg-slate-100 text-slate-900 group-hover:bg-white group-hover:text-[#00A86B]'
            }`}>
              Submit a Nomination
            </button>
          </div>

        </div>

        {/* Micro-copy beneath cards */}
        <div className="text-center font-mono text-xs font-semibold text-slate-500">
          Every submission — application or nomination — is reviewed personally. There is no automated approval.
        </div>

        {/* DIRECT APPLICATION MULTI-STEP FORM */}
        {activePath === 'direct' && (
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl transition-all duration-500">
            
            {directSubmitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center mx-auto text-2xl font-bold border border-emerald-200">
                  ✓
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
                  Your Application Has Been Received
                </h3>
                <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto font-normal">
                  Thank you for presenting yourself for consideration. Your application will be reviewed personally by our team — there is no automated approval process, and no fixed timeline we can offer, as every submission is read in full.
                </p>
                <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto font-normal">
                  If selected to move forward, you will hear directly from a member of our team. Given the nature of our review process, we ask for your patience and do not send status updates beyond this confirmation.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 text-sm max-w-xl mx-auto">
                  Whatever the outcome, we appreciate the candor it takes to put yourself forward for a room like this one.
                </div>
                <button 
                  onClick={() => { setDirectSubmitted(false); setDirectStep(1); }}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-colors"
                >
                  Return to Application
                </button>
              </div>
            ) : (
              <div>
                {/* Progress Bar & Indicators */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200 text-xs font-mono">
                  {[1, 2, 3, 4].map((s) => (
                    <div 
                      key={s} 
                      className={`flex items-center gap-2 ${directStep === s ? 'text-[#1746D2] font-extrabold' : directStep > s ? 'text-slate-700' : 'text-slate-400'}`}
                    >
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center ${directStep === s ? 'bg-[#1746D2] text-white font-bold' : 'bg-slate-100 border border-slate-200'}`}>
                        {s}
                      </span>
                      <span className="hidden sm:inline">
                        {s === 1 && "WHO YOU ARE"}
                        {s === 2 && "WHAT YOU DO"}
                        {s === 3 && "CASE FOR CONSIDERATION"}
                        {s === 4 && "FINAL DETAILS"}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleDirectSubmit} className="space-y-6">
                  
                  {/* Section 1 of 4: Tell Us Who You Are */}
                  {directStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-extrabold text-slate-900 font-display mb-1">
                          Tell Us Who You Are
                        </h4>
                        <span className="text-xs font-mono font-bold text-[#1746D2] uppercase tracking-wider">
                          Section 1 of 4
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Full Legal Name *</label>
                          <input 
                            type="text" 
                            name="fullName"
                            value={directForm.fullName}
                            onChange={handleDirectChange}
                            placeholder="As it should appear on any formal correspondence"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1746D2]"
                            required 
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                          <input 
                            type="email" 
                            name="email"
                            value={directForm.email}
                            onChange={handleDirectChange}
                            placeholder="Enter email address"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1746D2]"
                            required 
                          />
                          <p className="text-[11px] text-slate-500 mt-1 font-normal">
                            We correspond only through this address. Please use one you check personally.
                          </p>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (with country code)</label>
                          <input 
                            type="text" 
                            name="phone"
                            value={directForm.phone}
                            onChange={handleDirectChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1746D2]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Country of Primary Residence *</label>
                          <select
                            name="country"
                            value={directForm.country}
                            onChange={handleDirectChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1746D2]"
                          >
                            {countryList.map((c, i) => (
                              <option key={i} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                          <input 
                            type="text" 
                            name="city"
                            value={directForm.city}
                            onChange={handleDirectChange}
                            placeholder="Enter city"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1746D2]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn or Professional Profile</label>
                          <input 
                            type="url" 
                            name="linkedin"
                            value={directForm.linkedin}
                            onChange={handleDirectChange}
                            placeholder="https://linkedin.com/in/profile"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1746D2]"
                          />
                          <p className="text-[11px] text-slate-500 mt-1 font-normal">
                            Optional, but strongly recommended — this helps our review team understand your standing quickly.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Section 2 of 4: Tell Us What You Do */}
                  {directStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-extrabold text-slate-900 font-display mb-1">
                          Tell Us What You Do
                        </h4>
                        <span className="text-xs font-mono font-bold text-[#1746D2] uppercase tracking-wider">
                          Section 2 of 4
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-2">Which best describes you? *</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {["Investor", "Entrepreneur / Founder", "Industry Leader / Executive", "Other"].map((cat) => (
                            <button
                              type="button"
                              key={cat}
                              onClick={() => setDirectForm(prev => ({ ...prev, profileCategory: cat }))}
                              className={`p-3.5 rounded-xl border text-xs font-bold font-display transition-all ${
                                directForm.profileCategory === cat 
                                  ? 'bg-[#1746D2] text-white border-[#1746D2] shadow-sm' 
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Conditional Logic Fields */}
                      {directForm.profileCategory === 'Investor' && (
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                          <div className="text-xs font-mono font-bold text-[#1746D2] uppercase">INVESTOR DETAILS</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Fund / Firm Name (if applicable)</label>
                              <input type="text" name="firmName" value={directForm.firmName} onChange={handleDirectChange} placeholder="Firm or Family Office Name" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Type of Capital</label>
                              <select name="capitalType" value={directForm.capitalType} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm">
                                <option value="Family Office">Family Office</option>
                                <option value="Private Equity">Private Equity</option>
                                <option value="Venture Capital">Venture Capital</option>
                                <option value="Angel">Angel</option>
                                <option value="Individual">Individual</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Typical Investment Range</label>
                              <select name="investmentRange" value={directForm.investmentRange} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm">
                                <option value="Under $100K">Under $100K</option>
                                <option value="$100K–$500K">$100K–$500K</option>
                                <option value="$500K–$2M">$500K–$2M</option>
                                <option value="$2M–$10M">$2M–$10M</option>
                                <option value="$10M+">$10M+</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Sectors of Primary Interest</label>
                              <input type="text" name="sectors" value={directForm.sectors} onChange={handleDirectChange} placeholder="Technology, AI, Healthcare, Fintech, etc." className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Notable Investments or Portfolio Highlights</label>
                            <p className="text-[11px] text-slate-500 mb-1">Share what you believe best represents your investment judgment — not a full portfolio list.</p>
                            <textarea name="portfolioHighlights" value={directForm.portfolioHighlights} onChange={handleDirectChange} placeholder="List key investments or exit milestones" className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm h-24" />
                          </div>
                        </div>
                      )}

                      {directForm.profileCategory === 'Entrepreneur / Founder' && (
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                          <div className="text-xs font-mono font-bold text-[#00A86B] uppercase">FOUNDER DETAILS</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                              <input type="text" name="companyName" value={directForm.companyName} onChange={handleDirectChange} placeholder="Company Name" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Your Role / Title</label>
                              <input type="text" name="role" value={directForm.role} onChange={handleDirectChange} placeholder="e.g. Founder & CEO" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Company Stage</label>
                              <select name="companyStage" value={directForm.companyStage} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm">
                                <option value="Idea">Idea</option>
                                <option value="Pre-Launch">Pre-Launch</option>
                                <option value="Early Revenue">Early Revenue</option>
                                <option value="Growth Stage">Growth Stage</option>
                                <option value="Scaling Internationally">Scaling Internationally</option>
                                <option value="Established">Established</option>
                                <option value="Mature">Mature</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Company Website</label>
                              <input type="url" name="website" value={directForm.website} onChange={handleDirectChange} placeholder="https://company.com" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">What has your company raised or achieved to date?</label>
                            <p className="text-[11px] text-slate-500 mb-1">Speak plainly — funding raised, revenue milestones, or market position, whichever is most relevant.</p>
                            <textarea name="achievements" value={directForm.achievements} onChange={handleDirectChange} placeholder="Funding, revenue, user milestones..." className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm h-20" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">What are you seeking from the Circle?</label>
                            <select name="seeking" value={directForm.seeking} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm">
                              <option value="Capital">Capital</option>
                              <option value="Strategic Introductions">Strategic Introductions</option>
                              <option value="Mentorship">Mentorship</option>
                              <option value="Market Access">Market Access</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {directForm.profileCategory === 'Industry Leader / Executive' && (
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                          <div className="text-xs font-mono font-bold text-[#1746D2] uppercase">EXECUTIVE DETAILS</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Current Title & Organization</label>
                              <input type="text" name="titleOrg" value={directForm.titleOrg} onChange={handleDirectChange} placeholder="Title & Organization" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Industry / Sector</label>
                              <input type="text" name="industry" value={directForm.industry} onChange={handleDirectChange} placeholder="Industry Sector" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Scope of Influence</label>
                            <p className="text-[11px] text-slate-500 mb-1">Describe the scale of decisions or influence your role carries — team size, market reach, or sector impact.</p>
                            <textarea name="scopeInfluence" value={directForm.scopeInfluence} onChange={handleDirectChange} placeholder="Describe scope..." className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm h-20" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">What do you hope to contribute to the Circle?</label>
                            <textarea name="contribution" value={directForm.contribution} onChange={handleDirectChange} placeholder="Strategic insights, advisory, global market access..." className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm h-20" />
                          </div>
                        </div>
                      )}

                      {directForm.profileCategory === 'Other' && (
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                          <div className="text-xs font-mono font-bold text-slate-700 uppercase font-bold">OTHER PROFILE</div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Please describe</label>
                            <textarea name="otherRoleDesc" value={directForm.otherRoleDesc} onChange={handleDirectChange} placeholder="Describe your background and intent..." className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm h-28" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Section 3 of 4: Your Case for Consideration */}
                  {directStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-extrabold text-slate-900 font-display mb-1">
                          Your Case for Consideration
                        </h4>
                        <span className="text-xs font-mono font-bold text-[#1746D2] uppercase tracking-wider">
                          Section 3 of 4
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">Statement of Relevance *</label>
                        <div className="text-xs font-mono text-[#1746D2] font-bold mb-1">Why do you believe you belong in this Circle? (150–400 words recommended)</div>
                        <p className="text-[11px] text-slate-500 mb-2">
                          This is not a cover letter. Tell us plainly what you would bring to a room of investors, entrepreneurs, and industry leaders — and what you are hoping to find in it.
                        </p>
                        <textarea 
                          name="statementRelevance"
                          value={directForm.statementRelevance}
                          onChange={handleDirectChange}
                          placeholder="Tell us plainly what you bring to this room..."
                          className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm h-40 focus:outline-none focus:border-[#1746D2]"
                          required
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox"
                            id="wasReferred"
                            name="wasReferred"
                            checked={directForm.wasReferred}
                            onChange={handleDirectChange}
                            className="w-4 h-4 rounded text-[#1746D2]"
                          />
                          <label htmlFor="wasReferred" className="text-xs font-bold text-slate-800">
                            Were you referred or introduced by an existing member?
                          </label>
                        </div>
                        {directForm.wasReferred && (
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Member Name</label>
                            <input 
                              type="text"
                              name="referredMemberName"
                              value={directForm.referredMemberName}
                              onChange={handleDirectChange}
                              placeholder="Name of referring member"
                              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm"
                            />
                            <p className="text-[11px] text-slate-500 mt-1">
                              Referrals are not required for admission, but context is always useful to our review team.
                            </p>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">Notable Recognition (optional)</label>
                        <p className="text-[11px] text-slate-500 mb-2">
                          Optional — the Circle values substance over credentials, but relevant context is welcome.
                        </p>
                        <textarea 
                          name="recognitionContext"
                          value={directForm.recognitionContext}
                          onChange={handleDirectChange}
                          placeholder="Any notable press, awards, or public recognition you'd like considered?"
                          className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm h-24 focus:outline-none focus:border-[#1746D2]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Section 4 of 4: Final Details */}
                  {directStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-extrabold text-slate-900 font-display mb-1">
                          Final Details
                        </h4>
                        <span className="text-xs font-mono font-bold text-[#1746D2] uppercase tracking-wider">
                          Section 4 of 4
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">How did you hear about BUSINESS BRAINS?</label>
                        <select 
                          name="discoverySource"
                          value={directForm.discoverySource}
                          onChange={handleDirectChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none"
                        >
                          <option value="Existing Member">Existing Member</option>
                          <option value="TECH6SENSE AI">TECH6SENSE AI</option>
                          <option value="Event or Summit">Event or Summit</option>
                          <option value="Press or Publication">Press or Publication</option>
                          <option value="Search">Search</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <input 
                          type="checkbox"
                          id="confidentiality"
                          name="confidentiality"
                          checked={directForm.confidentiality}
                          onChange={handleDirectChange}
                          className="w-4 h-4 rounded text-[#1746D2] mt-0.5"
                          required
                        />
                        <label htmlFor="confidentiality" className="text-xs text-slate-700 font-medium leading-relaxed">
                          I understand that membership in BUSINESS BRAINS is by invitation only, that submitting this application does not guarantee admission, and that all information I provide will be treated with discretion.
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    {directStep > 1 ? (
                      <button 
                        type="button" 
                        onClick={() => setDirectStep(prev => prev - 1)}
                        className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-colors"
                      >
                        ← Previous
                      </button>
                    ) : <div />}

                    {directStep < 4 ? (
                      <button 
                        type="button" 
                        onClick={() => setDirectStep(prev => prev + 1)}
                        className="px-6 py-2.5 rounded-full bg-[#1746D2] hover:bg-blue-700 text-white font-bold text-xs tracking-wider shadow-sm transition-all"
                      >
                        Next Step →
                      </button>
                    ) : (
                      <div className="flex flex-col items-end gap-2">
                        <button 
                          type="submit"
                          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1746D2] to-[#00A86B] text-white font-bold text-sm tracking-wide shadow-lg hover:scale-105 transition-all"
                        >
                          Submit for Consideration
                        </button>
                        <span className="text-[11px] text-slate-500 font-medium">
                          You will hear from our review team directly. We do not send automated confirmations beyond receipt.
                        </span>
                      </div>
                    )}
                  </div>

                </form>
              </div>
            )}

          </div>
        )}

        {/* NOMINATION FORM */}
        {activePath === 'nominate' && (
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl transition-all duration-500">
            
            {nomSubmitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center mx-auto text-2xl font-bold border border-emerald-200">
                  ✓
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
                  Your Nomination Has Been Received
                </h3>
                <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto font-normal">
                  Thank you for this nomination. We take member referrals seriously, and your nominee will be reviewed with the same care as every direct applicant.
                </p>
                <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto font-normal">
                  We will reach out to them directly. Out of respect for their privacy, we won't share updates on the outcome of this nomination.
                </p>
                <button 
                  onClick={() => setNomSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-colors"
                >
                  Submit Another Nomination
                </button>
              </div>
            ) : (
              <form onSubmit={handleNomSubmit} className="space-y-6">
                
                {/* Header */}
                <div>
                  <h4 className="text-2xl font-extrabold text-slate-900 font-display mb-2">
                    Nominate Someone for the Circle
                  </h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Nomination is one of two paths into BUSINESS BRAINS, and it carries particular weight — a nomination reflects on both the nominee and the member making it. Please nominate only those you believe genuinely belong in this room.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Your Member Email (for verification) *</label>
                  <input 
                    type="email"
                    name="nominatorEmail"
                    value={nomForm.nominatorEmail}
                    onChange={handleNomChange}
                    placeholder="Member email address"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#00A86B]"
                    required 
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Nominations are accepted only from current members in good standing.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-4">
                  <h5 className="text-base font-bold text-slate-900 font-display">
                    About the Person You're Nominating
                  </h5>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Nominee's Full Name *</label>
                      <input 
                        type="text"
                        name="nomineeName"
                        value={nomForm.nomineeName}
                        onChange={handleNomChange}
                        placeholder="Nominee full name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#00A86B]"
                        required 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Nominee's Email Address (if known)</label>
                      <input 
                        type="email"
                        name="nomineeEmail"
                        value={nomForm.nomineeEmail}
                        onChange={handleNomChange}
                        placeholder="Nominee email"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#00A86B]"
                      />
                      <p className="text-[11px] text-slate-500 mt-1">
                        If you don't have this, we will reach them through a mutual connection you provide below.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Nominee's Company & Role</label>
                      <input 
                        type="text"
                        name="nomineeCompanyRole"
                        value={nomForm.nomineeCompanyRole}
                        onChange={handleNomChange}
                        placeholder="Company & Role"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#00A86B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Which best describes them?</label>
                      <select 
                        name="nomineeCategory"
                        value={nomForm.nomineeCategory}
                        onChange={handleNomChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none"
                      >
                        <option value="Investor">Investor</option>
                        <option value="Entrepreneur / Founder">Entrepreneur / Founder</option>
                        <option value="Industry Leader / Executive">Industry Leader / Executive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Nominee's Country</label>
                      <select 
                        name="nomineeCountry"
                        value={nomForm.nomineeCountry}
                        onChange={handleNomChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none"
                      >
                        {countryList.map((c, i) => (
                          <option key={i} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-4">
                  <h5 className="text-base font-bold text-slate-900 font-display">
                    Why This Nomination
                  </h5>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">How do you know this person?</label>
                    <input 
                      type="text"
                      name="relationship"
                      value={nomForm.relationship}
                      onChange={handleNomChange}
                      placeholder="Brief relationship description"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#00A86B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Why do you believe they belong in the Circle?</label>
                    <div className="text-xs font-mono text-[#00A86B] font-bold mb-1">100–300 words recommended</div>
                    <p className="text-[11px] text-slate-500 mb-2">
                      Speak to what they've built, invested in, or led — and what they would add to a room like this one.
                    </p>
                    <textarea 
                      name="nominationStatement"
                      value={nomForm.nominationStatement}
                      onChange={handleNomChange}
                      placeholder="Detail their track record and suitability..."
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm h-32 focus:outline-none focus:border-[#00A86B]"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <input 
                    type="checkbox"
                    id="nomConsent"
                    name="consent"
                    checked={nomForm.consent}
                    onChange={handleNomChange}
                    className="w-4 h-4 rounded text-[#00A86B] mt-0.5"
                    required 
                  />
                  <label htmlFor="nomConsent" className="text-xs text-slate-700 font-medium leading-relaxed">
                    I understand BUSINESS BRAINS will contact this individual directly, and that my nomination does not guarantee their admission.
                  </label>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col items-end gap-2">
                  <button 
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00A86B] to-[#1746D2] text-white font-bold text-sm tracking-wide shadow-lg hover:scale-105 transition-all"
                  >
                    Submit Nomination
                  </button>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Nominees are reviewed against the same standard as direct applicants. We will not disclose who nominated them unless they choose to share that information themselves.
                  </span>
                </div>

              </form>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
