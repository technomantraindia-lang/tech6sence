import React, { useState } from 'react';

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
    otherRole: '',
    // Investor fields
    firmName: '',
    capitalType: 'Venture Capital',
    investmentRange: '$500K–$2M',
    sectors: 'AI',
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

  const handleDirectSubmit = (e) => {
    e.preventDefault();
    setDirectSubmitted(true);
  };

  const handleNomSubmit = (e) => {
    e.preventDefault();
    setNomSubmitted(true);
  };

  const countryList = [
    "United States", "United Kingdom", "Australia", "Canada", "India", 
    "United Arab Emirates", "Singapore", "Hong Kong", "Germany", "France", 
    "Switzerland", "Japan", "Saudi Arabia", "Qatar", "Other Country"
  ];

  return (
    <section id="application-entry" className="relative bg-[#020617] text-white py-24 md:py-32 border-b border-slate-800/80 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* ENTRY SELECTOR HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-4 block"
          >
            Consideration for Membership · By Invitation Only
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Present Yourself for Consideration
          </h2>

          <p 
            className="text-slate-300 text-base md:text-lg leading-relaxed mb-4 font-normal"
          >
            Choose your path to present your credentials to the syndicate review committee.
          </p>

          <p className="text-xs font-mono text-cyan-400">
            Every submission — application or nomination — is reviewed personally. There is no automated approval.
          </p>
        </div>

        {/* Two Selectable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          
          {/* Card 1: Apply Directly */}
          <div 
            onClick={() => { setActivePath('direct'); setDirectSubmitted(false); }}
            className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 backdrop-blur-md flex flex-col justify-between border ${
              activePath === 'direct' 
                ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)]' 
                : 'bg-white/[0.02] border-white/10 hover:border-cyan-500/40 hover:-translate-y-1'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-cyan-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold text-white mb-3"
              >
                Apply Directly
              </h3>
              <p 
                className="text-slate-300 text-sm leading-relaxed mb-6 font-normal"
              >
                Present your own case for membership in the Circle.
              </p>
            </div>

            <button 
              className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 ${
                activePath === 'direct' 
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Begin My Application
            </button>
          </div>

          {/* Card 2: Nominate Someone */}
          <div 
            onClick={() => { setActivePath('nominate'); setNomSubmitted(false); }}
            className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 backdrop-blur-md flex flex-col justify-between border ${
              activePath === 'nominate' 
                ? 'bg-[#040916]/40 border-[#1746D2]/60 shadow-[0_0_30px_rgba(139,92,246,0.2)]' 
                : 'bg-white/[0.02] border-white/10 hover:border-[#1746D2]/40 hover:-translate-y-1'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#1746D2]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold text-white mb-3"
              >
                Nominate Someone
              </h3>
              <p 
                className="text-slate-300 text-sm leading-relaxed mb-6 font-normal"
              >
                You are a member, or know someone who belongs in this room.
              </p>
            </div>

            <button 
              className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 ${
                activePath === 'nominate' 
                  ? 'bg-[#1746D2] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Submit a Nomination
            </button>
          </div>

        </div>

        {/* DIRECT APPLICATION MULTI-STEP FORM */}
        {activePath === 'direct' && (
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-cyan-500/30 backdrop-blur-md transition-all duration-500">
            
            {directSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Your Application Has Been Received
                </h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto">
                  Thank you for submitting your dossier to BUSINESS BRAINS. Our syndicate review committee personally reviews every application to ensure alignment with our global standards. If your profile clears initial committee evaluation, our concierge team will contact you to schedule a confidential interview.
                </p>
                <div className="text-cyan-400 font-mono font-bold text-sm">
                  Access is Not Granted. It is Earned.
                </div>
                <button 
                  onClick={() => { setDirectSubmitted(false); setDirectStep(1); }}
                  className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-mono"
                >
                  Return to Application Shell
                </button>
              </div>
            ) : (
              <div>
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 text-xs font-mono">
                  {[1, 2, 3, 4].map((s) => (
                    <div 
                      key={s} 
                      className={`flex items-center gap-2 ${directStep === s ? 'text-cyan-400 font-bold' : directStep > s ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center ${directStep === s ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 border border-white/10'}`}>
                        {s}
                      </span>
                      <span className="hidden sm:inline">
                        {s === 1 && "TELL US WHO YOU ARE"}
                        {s === 2 && "TELL US WHAT YOU DO"}
                        {s === 3 && "CASE FOR CONSIDERATION"}
                        {s === 4 && "FINAL DETAILS"}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleDirectSubmit} className="space-y-6">
                  
                  {/* Step 1: Tell Us Who You Are */}
                  {directStep === 1 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white mb-4 uppercase font-mono tracking-wider text-cyan-400">
                        SECTION 1 OF 4 — TELL US WHO YOU ARE
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-400 mb-1">Full Legal Name *</label>
                          <input 
                            type="text" 
                            name="fullName"
                            value={directForm.fullName}
                            onChange={handleDirectChange}
                            placeholder="Enter full legal name"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                            required 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-slate-400 mb-1">Email Address *</label>
                          <input 
                            type="email" 
                            name="email"
                            value={directForm.email}
                            onChange={handleDirectChange}
                            placeholder="Enter primary email"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                            required 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-slate-400 mb-1">Phone Number (with country code)</label>
                          <input 
                            type="text" 
                            name="phone"
                            value={directForm.phone}
                            onChange={handleDirectChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-slate-400 mb-1">Country of Primary Residence *</label>
                          <select
                            name="country"
                            value={directForm.country}
                            onChange={handleDirectChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                          >
                            {countryList.map((c, i) => (
                              <option key={i} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-slate-400 mb-1">City</label>
                          <input 
                            type="text" 
                            name="city"
                            value={directForm.city}
                            onChange={handleDirectChange}
                            placeholder="Enter city"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-slate-400 mb-1">LinkedIn or Professional Profile URL</label>
                          <input 
                            type="url" 
                            name="linkedin"
                            value={directForm.linkedin}
                            onChange={handleDirectChange}
                            placeholder="https://linkedin.com/in/profile"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Tell Us What You Do */}
                  {directStep === 2 && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white mb-2 uppercase font-mono tracking-wider text-cyan-400">
                        SECTION 2 OF 4 — TELL US WHAT YOU DO
                      </h4>

                      <div>
                        <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase">Select Primary Category *</label>
                        <select 
                          name="profileCategory" 
                          value={directForm.profileCategory} 
                          onChange={handleDirectChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-white text-sm focus:outline-none"
                        >
                          <option value="Investor">Investor</option>
                          <option value="Entrepreneur">Entrepreneur / Founder</option>
                          <option value="Executive">Industry Leader / Executive</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Conditional Category Containers */}
                      {directForm.profileCategory === 'Investor' && (
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/20 space-y-4">
                          <div className="text-xs font-mono text-cyan-400 font-bold uppercase">INVESTOR DETAILS</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Fund / Firm Name</label>
                              <input type="text" name="firmName" value={directForm.firmName} onChange={handleDirectChange} placeholder="Firm or Family Office Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Type of Capital</label>
                              <select name="capitalType" value={directForm.capitalType} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm">
                                <option value="Family Office">Family Office</option>
                                <option value="Private Equity">Private Equity</option>
                                <option value="Venture Capital">Venture Capital</option>
                                <option value="Angel">Angel</option>
                                <option value="Individual">Individual</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Typical Investment Range</label>
                              <select name="investmentRange" value={directForm.investmentRange} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm">
                                <option value="Under $100K">Under $100K</option>
                                <option value="$100K–$500K">$100K–$500K</option>
                                <option value="$500K–$2M">$500K–$2M</option>
                                <option value="$2M–$10M">$2M–$10M</option>
                                <option value="$10M+">$10M+</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Sectors of Primary Interest</label>
                              <select name="sectors" value={directForm.sectors} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm">
                                <option value="AI">AI & Deep Tech</option>
                                <option value="Technology">Technology</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Fintech">Fintech</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Consumer">Consumer</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">Notable Investments or Portfolio Highlights</label>
                            <textarea name="portfolioHighlights" value={directForm.portfolioHighlights} onChange={handleDirectChange} placeholder="List key portfolio companies or deal highlights" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm h-24" />
                          </div>
                        </div>
                      )}

                      {directForm.profileCategory === 'Entrepreneur' && (
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/20 space-y-4">
                          <div className="text-xs font-mono text-cyan-400 font-bold uppercase">ENTREPRENEUR / FOUNDER DETAILS</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Company Name</label>
                              <input type="text" name="companyName" value={directForm.companyName} onChange={handleDirectChange} placeholder="Company Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Your Role / Title</label>
                              <input type="text" name="role" value={directForm.role} onChange={handleDirectChange} placeholder="e.g. Founder & CEO" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Company Stage</label>
                              <select name="companyStage" value={directForm.companyStage} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm">
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
                              <label className="block text-xs font-mono text-slate-400 mb-1">Company Website</label>
                              <input type="url" name="website" value={directForm.website} onChange={handleDirectChange} placeholder="https://company.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">What has your company raised or achieved to date?</label>
                            <textarea name="achievements" value={directForm.achievements} onChange={handleDirectChange} placeholder="Funding history, ARR milestones, MVP status, major contracts" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm h-20" />
                          </div>
                          <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">What are you seeking from the Circle?</label>
                            <select name="seeking" value={directForm.seeking} onChange={handleDirectChange} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm">
                              <option value="Capital">Capital</option>
                              <option value="Strategic Introductions">Strategic Introductions</option>
                              <option value="Mentorship">Mentorship</option>
                              <option value="Market Access">Market Access</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {directForm.profileCategory === 'Executive' && (
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/20 space-y-4">
                          <div className="text-xs font-mono text-cyan-400 font-bold uppercase">INDUSTRY LEADER / EXECUTIVE DETAILS</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Current Title & Organization</label>
                              <input type="text" name="titleOrg" value={directForm.titleOrg} onChange={handleDirectChange} placeholder="e.g. Managing Director, Enterprise Corp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs font-mono text-slate-400 mb-1">Industry / Sector</label>
                              <input type="text" name="industry" value={directForm.industry} onChange={handleDirectChange} placeholder="Industry Sector" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">Scope of Influence</label>
                            <textarea name="scopeInfluence" value={directForm.scopeInfluence} onChange={handleDirectChange} placeholder="Describe team size, P&L responsibility, or industry leadership" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm h-20" />
                          </div>
                          <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">What do you hope to contribute to the Circle?</label>
                            <textarea name="contribution" value={directForm.contribution} onChange={handleDirectChange} placeholder="Board advisory, technical expertise, strategic corporate connections" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm h-20" />
                          </div>
                        </div>
                      )}

                      {directForm.profileCategory === 'Other' && (
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/20 space-y-4">
                          <div className="text-xs font-mono text-cyan-400 font-bold uppercase">OTHER PROFILE DETAILS</div>
                          <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">Describe your professional role & relevance</label>
                            <textarea name="otherRole" value={directForm.otherRole} onChange={handleDirectChange} placeholder="Describe your professional background and alignment with the Circle" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm h-28" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Case for Consideration */}
                  {directStep === 3 && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white mb-4 uppercase font-mono tracking-wider text-cyan-400">
                        SECTION 3 OF 4 — YOUR CASE FOR CONSIDERATION
                      </h4>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Statement of Relevance *</label>
                        <div className="text-[11px] text-cyan-400 font-mono mb-2">Why do you believe you belong in this Circle? (150–400 words recommended)</div>
                        <textarea 
                          name="statementRelevance"
                          value={directForm.statementRelevance}
                          onChange={handleDirectChange}
                          placeholder="Detail your leadership vision, track record, and how you intend to add value to fellow members."
                          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm h-36 focus:outline-none focus:border-cyan-400"
                          required
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox"
                            id="wasReferred"
                            name="wasReferred"
                            checked={directForm.wasReferred}
                            onChange={handleDirectChange}
                            className="w-4 h-4 rounded bg-white/10 border-white/20 text-cyan-500"
                          />
                          <label htmlFor="wasReferred" className="text-xs text-slate-300 font-mono">
                            Were you referred or introduced by an existing member?
                          </label>
                        </div>
                        {directForm.wasReferred && (
                          <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">Referring Member Full Name</label>
                            <input 
                              type="text"
                              name="referredMemberName"
                              value={directForm.referredMemberName}
                              onChange={handleDirectChange}
                              placeholder="Name of referring member"
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Notable Recognition or Context</label>
                        <textarea 
                          name="recognitionContext"
                          value={directForm.recognitionContext}
                          onChange={handleDirectChange}
                          placeholder="List awards, publications, patents, major board seats, or relevant institutional credentials."
                          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm h-24 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Final Details */}
                  {directStep === 4 && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white mb-4 uppercase font-mono tracking-wider text-cyan-400">
                        SECTION 4 OF 4 — FINAL DETAILS
                      </h4>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">How did you hear about BUSINESS BRAINS?</label>
                        <select 
                          name="discoverySource"
                          value={directForm.discoverySource}
                          onChange={handleDirectChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none"
                        >
                          <option value="Existing Member">Existing Member</option>
                          <option value="TECH6SENSE AI">TECH6SENSE AI</option>
                          <option value="Event or Summit">Event or Summit</option>
                          <option value="Press or Publication">Press or Publication</option>
                          <option value="Search">Search</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
                        <div className="font-bold font-mono text-cyan-400">SUMMARY REVIEW OF DOSSIER:</div>
                        <div>Name: {directForm.fullName || "[Not Provided]"}</div>
                        <div>Email: {directForm.email || "[Not Provided]"}</div>
                        <div>Country: {directForm.country}</div>
                        <div>Category: {directForm.profileCategory}</div>
                      </div>

                      <div className="flex items-start gap-3">
                        <input 
                          type="checkbox"
                          id="confidentiality"
                          name="confidentiality"
                          checked={directForm.confidentiality}
                          onChange={handleDirectChange}
                          className="w-4 h-4 rounded bg-white/10 border-white/20 text-cyan-500 mt-0.5"
                          required
                        />
                        <label htmlFor="confidentiality" className="text-xs text-slate-300 font-mono leading-relaxed">
                          I acknowledge the confidentiality terms and personal review process of the Business Brains Syndicate Review.
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    {directStep > 1 ? (
                      <button 
                        type="button" 
                        onClick={() => setDirectStep(prev => prev - 1)}
                        className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono"
                      >
                        ← Previous
                      </button>
                    ) : <div />}

                    {directStep < 4 ? (
                      <button 
                        type="button" 
                        onClick={() => setDirectStep(prev => prev + 1)}
                        className="px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono"
                      >
                        Next Step →
                      </button>
                    ) : (
                      <div className="flex flex-col items-end gap-2">
                        <button 
                          type="submit"
                          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                        >
                          Submit for Consideration
                        </button>
                        <span className="text-[10px] font-mono text-slate-400">Strictly confidential. Submitted dossiers undergo personal committee review.</span>
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
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-[#1746D2]/30 backdrop-blur-md transition-all duration-500">
            
            {nomSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#1746D2]/20 border border-[#1746D2]/60 text-[#1746D2] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Your Nomination Has Been Received
                </h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto">
                  Thank you for nominating a candidate to BUSINESS BRAINS. Our committee will review the nominee's credentials and, if aligned with our institutional standards, extend a private invitation or initiate contact.
                </p>
                <button 
                  onClick={() => setNomSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-mono"
                >
                  Submit Another Nomination
                </button>
              </div>
            ) : (
              <form onSubmit={handleNomSubmit} className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Nominate Someone for the Circle
                </h4>
                <p className="text-sm text-slate-300 mb-6 font-normal">
                  Recommend an exceptional individual who belongs in the Business Brains global ecosystem.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Member Email Address *</label>
                    <input 
                      type="email"
                      name="nominatorEmail"
                      value={nomForm.nominatorEmail}
                      onChange={handleNomChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#1746D2]/60"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Nominee's Full Name *</label>
                    <input 
                      type="text"
                      name="nomineeName"
                      value={nomForm.nomineeName}
                      onChange={handleNomChange}
                      placeholder="Full name of nominee"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#1746D2]/60"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Nominee's Email Address *</label>
                    <input 
                      type="email"
                      name="nomineeEmail"
                      value={nomForm.nomineeEmail}
                      onChange={handleNomChange}
                      placeholder="Email of nominee"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#1746D2]/60"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Nominee's Company & Role</label>
                    <input 
                      type="text"
                      name="nomineeCompanyRole"
                      value={nomForm.nomineeCompanyRole}
                      onChange={handleNomChange}
                      placeholder="Company Name and Role"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#1746D2]/60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Which best describes them?</label>
                    <select 
                      name="nomineeCategory"
                      value={nomForm.nomineeCategory}
                      onChange={handleNomChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-[#1746D2]/40 text-white text-sm focus:outline-none"
                    >
                      <option value="Investor">Investor</option>
                      <option value="Entrepreneur">Entrepreneur / Founder</option>
                      <option value="Executive">Industry Leader / Executive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Nominee's Country</label>
                    <select 
                      name="nomineeCountry"
                      value={nomForm.nomineeCountry}
                      onChange={handleNomChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none"
                    >
                      {countryList.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">How do you know this person?</label>
                  <input 
                    type="text"
                    name="relationship"
                    value={nomForm.relationship}
                    onChange={handleNomChange}
                    placeholder="Professional relationship or personal association"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#1746D2]/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Why do you believe they belong in the Circle?</label>
                  <textarea 
                    name="nominationStatement"
                    value={nomForm.nominationStatement}
                    onChange={handleNomChange}
                    placeholder="Describe their achievements, leadership stature, and alignment with Circle standards."
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm h-32 focus:outline-none focus:border-[#1746D2]/60"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox"
                    id="nomConsent"
                    name="consent"
                    checked={nomForm.consent}
                    onChange={handleNomChange}
                    className="w-4 h-4 rounded bg-white/10 border-white/20 text-[#1746D2]"
                    required 
                  />
                  <label htmlFor="nomConsent" className="text-xs text-slate-300 font-mono">
                    I confirm that I have consent or standing to nominate this individual.
                  </label>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col items-end gap-2">
                  <button 
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1746D2] to-purple-600 text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  >
                    Submit Nomination
                  </button>
                  <span className="text-[10px] font-mono text-slate-400">Submissions are reviewed personally by the committee.</span>
                </div>

              </form>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
