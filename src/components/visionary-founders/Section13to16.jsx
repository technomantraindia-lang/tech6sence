import React, { useState } from 'react';
import companyLogo from '../../assets/new logo/TECH6SENSE Main Logo Transparent bg.svg';

export function ApplicationProcess() {
  const criteria = [
    { name: 'Founder Commitment', desc: 'Genuine intent to build and operate the company full-time, not a side project' },
    { name: 'Market Viability', desc: 'A real, addressable problem in a market with paying demand' },
    { name: 'Fit with Program Structure', desc: "Whether Ascend or Global tier genuinely matches the founder's goals" },
    { name: 'Execution Readiness', desc: 'Founder\'s ability to actively participate in building the business alongside the team' }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-4 block">
            Application Process
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display">
            This Isn't a Signup Form. It's a Selection Process.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            The Visionary Founders Program is built around a limited number of founders per cohort, so every applicant goes through a real evaluation — not an automatic checkout. Here's exactly what happens, step by step, from the moment you apply to the day your company launches.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0">1</div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Step 1 — Submit Your Application</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Complete the application form with your idea, target market, industry, and which tier you believe fits — National or Global. This takes most founders 10–15 minutes.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0">2</div>
            <div className="w-full">
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Step 2 — Application Review</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Our team reviews every application against four criteria:</p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mt-4">
                <table className="w-full border-collapse text-left text-xs md:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider">
                      <th className="p-4 w-1/3">Criteria</th>
                      <th className="p-4 w-2/3">What We Look For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {criteria.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">{item.name}</td>
                        <td className="p-4 text-slate-600 leading-relaxed">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0">3</div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Step 3 — Founder Strategy Call</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Shortlisted applicants are invited to a confidential 30–45 minute call with a Program Advisor. This is a two-way conversation:
              </p>
              <ul className="list-disc pl-5 mt-3 text-slate-600 text-sm space-y-1.5">
                <li>We assess your idea, market, and readiness in more depth</li>
                <li>You get direct answers on program structure, tier fit, timelines, and pricing</li>
                <li>We map out what Month 1 through your first client would realistically look like</li>
              </ul>
              <p className="text-slate-500 text-xs italic mt-4">There's no pressure to decide on this call — it exists to make sure both sides are confident before moving forward.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0">4</div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Step 4 — Tier Confirmation & Offer</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Based on the call, we confirm which tier — National or Global — genuinely fits your goals, and issue a formal offer outlining:
              </p>
              <ul className="list-disc pl-5 mt-3 text-slate-600 text-sm space-y-1.5">
                <li>Full scope of services included</li>
                <li>Ecosystem fee and payment structure</li>
                <li>Estimated onboarding-to-launch timeline</li>
                <li>Any additional requirements specific to your industry (e.g., regulatory considerations for FinTech, HealthTech, or GovTech ideas)</li>
              </ul>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0">5</div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Step 5 — Agreement & Onboarding Kickoff</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Once you accept the offer and complete payment, onboarding begins within 5 business days. You're introduced to your full team:
              </p>
              <ul className="list-disc pl-5 mt-3 text-slate-600 text-sm space-y-1.5">
                <li>Branding & Marketing Manager</li>
                <li>Technical Team Lead & Project Manager</li>
                <li>Dedicated CTO</li>
                <li>Client Success Manager</li>
              </ul>
              <p className="text-slate-550 text-sm mt-3 font-medium">A kickoff session aligns everyone on your business goals, target market, and a working project timeline.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0">6</div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Step 6 — Build Phase Begins</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Legal registration, branding, website, and product development begin in parallel, coordinated by your Project Manager. You'll receive regular milestone updates rather than a single "check back later" black box.</p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0">7</div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Step 7 — Launch & Client Acquisition</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">Once your company, brand, and product are live, your Client Success Manager and acquisition training take over — supporting you through outreach, pitching, and closing your first clients, with continued support until that milestone is hit.</p>
              
              {/* Timeline Overview Table */}
              <div className="mt-8">
                <span className="font-mono text-[10px] font-bold text-[#1746D2] uppercase tracking-widest mb-3 block">
                  TIMELINE OVERVIEW
                </span>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full border-collapse text-left text-xs md:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        <th className="p-4">Phase</th>
                        <th className="p-4">Typical Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {[
                        { phase: 'Application to Strategy Call', duration: '3–5 business days' },
                        { phase: 'Strategy Call to Signed Offer', duration: '2–7 days (founder-paced)' },
                        { phase: 'Onboarding Kickoff', duration: 'Within 5 business days of agreement' },
                        { phase: 'Legal + Brand + Website Foundation', duration: '3–5 weeks' },
                        { phase: 'Product/Technology Build', duration: '6–12 weeks (varies by scope)' },
                        { phase: 'Client Acquisition Support', duration: 'Ongoing until first clients secured' }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{row.phase}</td>
                          <td className="p-4 text-slate-600 font-semibold">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-left text-[11px] text-slate-500 font-medium mt-3 leading-relaxed">
                  Note: Timelines vary based on tier, industry complexity, and founder responsiveness during the build phase. Replace with your actual delivery benchmarks once you have completed cohorts to reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the Visionary Founders Ecosystem?",
      a: "Visionary Founders is an elite, turnkey venture execution engine and global AI founder ecosystem by TECH6SENSE AI designed to support entrepreneurs who want to build, launch, and grow AI and technology companies. The ecosystem combines strategic guidance, technology resources, business enablement, founder education, and community support to help founders develop sustainable businesses. It equips technology entrepreneurs with end-to-end infrastructure, eliminating operational roadblocks to ensure rapid market entry."
    },
    {
      q: "Is the Visionary Founders Ecosystem a course or training program?",
      a: "No. This is not a theoretical course or coaching program. It is a done-with-you + ecosystem-based execution model where TECH6SENSE AI supports you with real infrastructure, real teams, and real execution. While it includes training components such as client acquisition training, it is not a course. It is an operational ecosystem that provides a working team — legal, technical, branding, and sales support — to build and launch an actual company."
    },
    {
      q: "Is the Visionary Founders Ecosystem available globally?",
      a: "Yes. The ecosystem is open to founders globally and includes a dedicated Global tier specifically designed for founders who want to build a company that operates internationally."
    },
    {
      q: "Who is the Visionary Founders Ecosystem for?",
      a: "It is designed for aspiring first-time founders, working professionals planning to start a company, existing business owners exploring AI or IT, technical professionals without business infrastructure, and domain experts bringing a new venture to life in a different industry."
    },
    {
      q: "Can beginners apply?",
      a: "Yes. Founders at different stages are welcome to apply. Whether you have an idea, a prototype, or an operating business, the application process helps determine whether the ecosystem is a good fit for your goals."
    },
    {
      q: "Do I need a technical background to join?",
      a: "No. The ecosystem provides a full technology team, including CTO guidance and developers, so non-technical founders can build and launch a technical product without prior coding experience."
    },
    {
      q: "Do I need a business plan or prototype to apply?",
      a: "No. A clear founder profile and stated business direction are sufficient to apply. Existing assets such as a prototype or registered company are helpful but not required."
    },
    {
      q: "Will I own my company fully?",
      a: "Yes. You will own 100% of your company. You will be the legal owner of your company. TECH6SENSE AI provides ecosystem support, TECH6SENSE AI is not taking ownership or any equity (unless a separate partnership agreement is created). TECH6SENSE AI acts as your ecosystem partner and strategic enabler."
    },
    {
      q: "Is Visionary Founders Ecosystem online or offline?",
      a: "The Visionary Founders Ecosystem can be delivered: Online, Hybrid, With direct strategic support from TECH6SENSE AI"
    },
    {
      q: "How is Visionary Founders Ecosystem different from a business incubator or accelerator or other start-up programs?",
      a: "Most programs provide: Training, Mentorship, Networking. Visionary Founders Ecosystem provides: Infrastructure, Dedicated team, Technical backbone, Execution support, Real business ecosystem. It’s not just advisory — it’s end to end operational support."
    },
    {
      q: "Who runs the Visionary Founders Ecosystem?",
      a: "The Visionary Founders Ecosystem is run by TECH6SENSE AI, a global AI and Tech development company."
    },
    {
      q: "Will my company be legally registered?",
      a: "Yes. We provide support for: Company registration, Legal documentation, Compliance guidance, Business structuring. You will own your registered company."
    },
    {
      q: "Is my business idea kept confidential?",
      a: "TECH6SENSE AI treats business ideas and confidential application details with reasonable confidentiality and does not disclose them to unrelated third parties without consent."
    },
    {
      q: "Do you provide technical team support?",
      a: "Yes. You get access to: AI / IT developers, Technical Team Lead and Project Manager, Dedicated CTO, Product architecture guidance. This ensures your company has strong technical foundation."
    },
    {
      q: "Does Visionary Founders help founders prepare for fundraising?",
      a: "Yes. We provide guidance for: Government funding schemes, Start-up ecosystem programs, Private investor readiness, Business planning and fundraising strategy."
    },
    {
      q: "Does Visionary Founders help with global expansion?",
      a: "Yes. The Ecosystem includes support for: International client acquisition, Global business strategy, Company setup abroad, Visa & relocation guidance (where applicable)."
    },
    {
      q: "How do I get started?",
      a: "The first step is to complete the Founder Application Form. Once your application is reviewed, eligible applicants may be invited to a Founder Strategy Session to explore the best path forward."
    },
    {
      q: "Is every applicant accepted?",
      a: "No. Applications are reviewed to understand each founder's goals and determine whether Visionary Founders is the right fit. Applications are evaluated on founder commitment, market viability, tier fit, and execution readiness. Submitting an application does not guarantee acceptance."
    },
    {
      q: "Is there an interview?",
      a: "Selected applicants may be invited to participate in a Founder Strategy Session."
    },
    {
      q: "What happens on the Founder Strategy Call?",
      a: "The call is a 30–45 minute confidential conversation with our Ecosystem Advisor covering the founder's background, market, ecosystem structure, tier fit, and realistic timeline, with no pressure to commit during the call itself."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-4 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display">
            VISIONARY FOUNDERS by TECH6SENSE AI
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-slate-900 pr-4 text-sm md:text-base">({i + 1}) {faq.q}</span>
                <span className={`text-[#1746D2] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[300px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-650 font-medium text-xs md:text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    describeYou: '',
    priorExperience: '',
    companyType: '',
    ideaStatus: '',
    startTimeline: '',
    commitment: '',
    primaryGoal: '',
    preferredTier: '',
    investmentReady: '',
    howHeard: '',
    consent1: false,
    consent2: false,
    consent3: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (step < 5) setStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent1 || !formData.consent2 || !formData.consent3) {
      alert("Please confirm all declarations before submitting.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white relative text-center">
        <div className="max-w-2xl mx-auto px-6 bg-slate-50 p-12 rounded-3xl border border-slate-200 shadow-xl">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 font-display">
            Application Received
          </h2>
          <p className="text-slate-650 font-medium text-sm md:text-base leading-relaxed mb-8">
            "Application Received — An Ecosystem Advisor will review your application and reach out within 3–5 business days. Keep an eye on the email address you provided."
          </p>
          <div className="text-left border-t border-slate-200 pt-6 space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">What Happens Next?</h4>
            <ol className="list-decimal pl-5 text-xs text-slate-600 space-y-2 font-medium">
              <li><strong>Application Review:</strong> Our team reviews your application to understand your goals and ecosystem fit.</li>
              <li><strong>Founder Strategy Session:</strong> Selected applicants are invited to a one-to-one strategy discussion with a Visionary Founders Advisor.</li>
              <li><strong>Personalized Recommendation:</strong> Based on your vision, business stage, and objectives, we recommend the most appropriate membership and support pathway.</li>
              <li><strong>Onboarding:</strong> If you decide to move forward, you'll receive a tailored roadmap and begin onboarding into the Visionary Founders ecosystem.</li>
            </ol>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="founder-form" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 font-display">
            Visionary Founders Ecosystem — Founder Application Form
          </h2>
          <p className="text-slate-500 font-semibold text-sm">
            Five short steps. About 10–15 minutes. We review every application personally — this isn't an automatic checkout.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4 mb-4">
                <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest block font-mono">Step 1 of 5</span>
                <h3 className="text-xl font-bold text-slate-900 font-display mt-1">STEP 1 — Your Details</h3>
                <p className="text-xs text-slate-500 italic mt-1">"Tell us who you are — so an Ecosystem Advisor knows who they're speaking with."</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Legal Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none" required />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Primary Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone / WhatsApp *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Current country *</label>
                <input type="text" name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none" required />
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4 mb-4">
                <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest block font-mono">Step 2 of 5</span>
                <h3 className="text-xl font-bold text-slate-900 font-display mt-1">STEP 2 — Founder Profile</h3>
                <p className="text-xs text-slate-500 italic mt-1">"Your founder profile — helps us understand where you're starting from."</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">What best describes you? *</label>
                <select name="describeYou" value={formData.describeYou} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="Aspiring first-time founder">Aspiring first-time founder</option>
                  <option value="Working professional planning to start a company">Working professional planning to start a company</option>
                  <option value="Existing business owner exploring AI or IT">Existing business owner exploring AI or IT</option>
                  <option value="Technical professional (developer or engineer)">Technical professional (developer or engineer)</option>
                  <option value="Consultant or domain expert">Consultant or domain expert</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Do you have prior business experience? *</label>
                <select name="priorExperience" value={formData.priorExperience} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="Yes, I have run a business before">Yes, I have run a business before</option>
                  <option value="Yes, but not as the primary owner">Yes, but not as the primary owner</option>
                  <option value="Some experience in a related field">Some experience in a related field</option>
                  <option value="No, this would be my first business">No, this would be my first business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">What type of company do you want to build? *</label>
                <select name="companyType" value={formData.companyType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="AI Product">AI Product</option>
                  <option value="AI-SaaS Company">AI-SaaS Company</option>
                  <option value="IT Services">IT Services</option>
                  <option value="Development Company">Development Company</option>
                  <option value="AI Consulting & Solutions">AI Consulting & Solutions</option>
                  <option value="Automation & AI Agents Business">Automation & AI Agents Business</option>
                  <option value="Not sure yet — need guidance">Not sure yet — need guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Do you already have a business idea? *</label>
                <select name="ideaStatus" value={formData.ideaStatus} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="Yes, fully defined">Yes, fully defined</option>
                  <option value="Yes, but still shaping it">Yes, but still shaping it</option>
                  <option value="I have a general direction, not specific">I have a general direction, not specific</option>
                  <option value="No, I need help identifying one">No, I need help identifying one</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4 mb-4">
                <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest block font-mono">Step 3 of 5</span>
                <h3 className="text-xl font-bold text-slate-900 font-display mt-1">STEP 3 — Timeline & Goals</h3>
                <p className="text-xs text-slate-500 italic mt-1">"Your timeline and goals — this shapes how your onboarding is paced."</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">When do you want to start your company? *</label>
                <select name="startTimeline" value={formData.startTimeline} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="Immediately">Immediately</option>
                  <option value="Within 1–3 months">Within 1–3 months</option>
                  <option value="Within 3–6 months">Within 3–6 months</option>
                  <option value="6+ months from now">6+ months from now</option>
                  <option value="Just exploring for now">Just exploring for now</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Are you willing to invest time and resources to build your company seriously? *</label>
                <select name="commitment" value={formData.commitment} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="Yes, fully committed">Yes, fully committed</option>
                  <option value="Yes, but part-time initially">Yes, but part-time initially</option>
                  <option value="Not sure yet">Not sure yet</option>
                  <option value="No, just researching">No, just researching</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">What is your primary goal? *</label>
                <select name="primaryGoal" value={formData.primaryGoal} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="Build and scale a company in my home market">Build and scale a company in my home market</option>
                  <option value="Build a company that operates internationally">Build a company that operates internationally</option>
                  <option value="Generate additional income through a new business">Generate additional income through a new business</option>
                  <option value="Transition fully from my current job or career">Transition fully from my current job or career</option>
                  <option value="Explore government or private funding opportunities">Explore government or private funding opportunities</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4 mb-4">
                <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest block font-mono">Step 4 of 5</span>
                <h3 className="text-xl font-bold text-slate-900 font-display mt-1">STEP 4 — Tier & Investment Readiness</h3>
                <p className="text-xs text-slate-500 italic mt-1">"Which tier fits your ambition? Not sure? Pick your best guess — we'll confirm the right fit together on your Founder Strategy Call."</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Preferred tier *</label>
                <select name="preferredTier" value={formData.preferredTier} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="National">National — "Launch and dominate your home market first"</option>
                  <option value="Global">Global — "Build a company engineered to operate globally from day one"</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-[#1746D2]/10 border border-[#1746D2]/20 text-[#0d162a] text-xs font-medium leading-relaxed">
                "Visionary Founders is a premium ecosystem with infrastructure, a dedicated tech team, branding & Marketing, and client acquisition support built in. It's a serious business investment, not a course or a subscription."
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Are you ready for a serious business investment? *</label>
                <select name="investmentReady" value={formData.investmentReady} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="Yes, I understand and I'm ready">Yes, I understand and I'm ready</option>
                  <option value="I need more information first">I need more information first</option>
                  <option value="Not at this time">Not at this time</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">How did you hear about us? *</label>
                <select name="howHeard" value={formData.howHeard} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white" required>
                  <option value="">Select option</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Facebook">Facebook</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Referral from a friend or colleague">Referral from a friend or colleague</option>
                  <option value="Existing TECH6SENSE AI client">Existing TECH6SENSE AI client</option>
                  <option value="Event or webinar">Event or webinar</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4 mb-4">
                <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest block font-mono">Step 5 of 5</span>
                <h3 className="text-xl font-bold text-slate-900 font-display mt-1">STEP 5 — Review & Consent</h3>
                <p className="text-xs text-slate-500 italic mt-1">Review your details and check the consent statements before final submission.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3.5 text-xs text-slate-700 font-medium">
                <div><strong>Full Name:</strong> {formData.fullName}</div>
                <div><strong>Email:</strong> {formData.email}</div>
                <div><strong>Phone / WhatsApp:</strong> {formData.phone}</div>
                <div><strong>Country:</strong> {formData.country}</div>
                <div><strong>Describe You:</strong> {formData.describeYou}</div>
                <div><strong>Prior Business Experience:</strong> {formData.priorExperience}</div>
                <div><strong>Company to Build:</strong> {formData.companyType}</div>
                <div><strong>Business Idea Status:</strong> {formData.ideaStatus}</div>
                <div><strong>Start Timeline:</strong> {formData.startTimeline}</div>
                <div><strong>Commitment Level:</strong> {formData.commitment}</div>
                <div><strong>Primary Goal:</strong> {formData.primaryGoal}</div>
                <div><strong>Preferred Tier:</strong> {formData.preferredTier}</div>
                <div><strong>Investment Readiness:</strong> {formData.investmentReady}</div>
                <div><strong>How Heard:</strong> {formData.howHeard}</div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200 text-xs font-medium text-slate-700">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consent1" checked={formData.consent1} onChange={handleInputChange} className="mt-0.5" required />
                  <span>I confirm that the information provided is accurate and complete to the best of my knowledge.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consent2" checked={formData.consent2} onChange={handleInputChange} className="mt-0.5" required />
                  <span>I understand that submitting an application does not guarantee acceptance into the Visionary Founders ecosystem.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consent3" checked={formData.consent3} onChange={handleInputChange} className="mt-0.5" required />
                  <span>I agree that Visionary Founders may contact me regarding my application, membership options, and related services.</span>
                </label>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="flex justify-between items-center gap-4 pt-4 border-t border-slate-200">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-sm transition-colors">
                Back
              </button>
            )}
            
            {step < 5 ? (
              <button type="button" onClick={nextStep} className="px-6 py-3 bg-[#1746D2] hover:bg-[#1233A0] text-white font-bold rounded-xl text-sm ml-auto transition-colors">
                Next Step
              </button>
            ) : (
              <button type="submit" className="px-8 py-4 bg-gradient-to-r from-[#1746D2] to-[#00A86B] hover:from-[#1746D2] hover:to-[#00A86B] text-white font-bold uppercase tracking-widest rounded-xl text-sm ml-auto transition-transform hover:-translate-y-0.5 shadow-md">
                Submit Founder Application
              </button>
            )}
          </div>
          
          <div className="text-[10px] text-slate-400 font-mono text-center pt-2">
            "Applications are reviewed on a rolling basis · A limited number of founders are accepted per cohort"
          </div>
        </form>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0d162a]/50 via-slate-900 to-slate-900 z-0"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <img src={companyLogo} alt="TECH6SENSE AI Logo" className="h-12 md:h-16 mx-auto mb-12 opacity-80 object-contain" />
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-display leading-tight">
          The Next Generation of Global AI Companies Will Be Built by Visionary Founders.
        </h2>
        
        <div className="text-slate-350 text-base md:text-lg mb-10 max-w-3xl mx-auto font-medium space-y-4 text-slate-300 leading-relaxed text-justify">
          <p>
            Behind every transformative AI company is a founder with the courage to think differently, the ambition to solve meaningful problems, and the commitment to build something that creates lasting value.
          </p>
          <p>
            At Visionary Founders by TECH6SENSE AI, we bring together the strategy, technology, business enablement, and collaborative ecosystem that ambitious entrepreneurs need to build AI and technology companies with confidence.
          </p>
          <p>
            Whether you're turning an idea into a startup, launching an AI product, or expanding an existing business into global markets, your journey begins with a single step.
          </p>
          <p className="text-white font-bold text-xl mt-6 text-center">
            Your Vision Deserves a World-Class Ecosystem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-[#0d162a] font-bold rounded-full hover:bg-[#1746D2]/10 transition-colors shadow-xl w-full sm:w-auto text-sm uppercase tracking-wide">
            Apply to Become a Visionary Founder
          </button>
          <button onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto text-sm uppercase tracking-wide">
            Schedule Confidential Founder Strategy Call
          </button>
        </div>
        
      </div>
    </section>
  );
}
