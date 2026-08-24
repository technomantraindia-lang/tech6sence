import React, { useState } from 'react';
import { sendFormEmail } from '../../utils/sendEmail';
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
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1746D2] rounded-full" />
            <span className="font-display text-sm font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              APPLICATION PROCESS
            </span>
            <span className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
          </div>
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
      num: 1,
      q: "What is the Visionary Founders Ecosystem?",
      a: "Visionary Founders is an elite, turnkey venture execution engine and global AI founder ecosystem by TECH6SENSE AI designed to support entrepreneurs who want to build, launch, and grow AI and technology companies. The ecosystem combines strategic guidance, technology resources, business enablement, founder education, and community support to help founders develop sustainable businesses. It equips technology entrepreneurs with end-to-end infrastructure, eliminating operational roadblocks to ensure rapid market entry."
    },
    {
      num: 2,
      q: "Is the Visionary Founders Ecosystem a course or training program?",
      a: "No. This is not a theoretical course or coaching program. It is a done-with-you + ecosystem-based execution model where TECH6SENSE AI supports you with real infrastructure, real teams, and real execution. While it includes training components such as client acquisition training, it is not a course. It is an operational ecosystem that provides a working team — legal, technical, branding, and sales support — to build and launch an actual company."
    },
    {
      num: 3,
      q: "Is the Visionary Founders Ecosystem available globally?",
      a: "Yes. The ecosystem is open to founders globally and includes a dedicated Global tier specifically designed for founders who want to build a company that operates internationally."
    },
    {
      num: 4,
      q: "Who is the Visionary Founders Ecosystem for?",
      a: "It is designed for aspiring first-time founders, working professionals planning to start a company, existing business owners exploring AI or IT, technical professionals without business infrastructure, and domain experts bringing a new venture to life in a different industry."
    },
    {
      num: 5,
      q: "Can beginners apply?",
      a: "Yes. Founders at different stages are welcome to apply. Whether you have an idea, a prototype, or an operating business, the application process helps determine whether the ecosystem is a good fit for your goals."
    },
    {
      num: 6,
      q: "Do I need a technical background to join?",
      a: "No. The ecosystem provides a full technology team, including CTO guidance and developers, so non-technical founders can build and launch a technical product without prior coding experience."
    },
    {
      num: 7,
      q: "Do I need a business plan or prototype to apply?",
      a: "No. A clear founder profile and stated business direction are sufficient to apply. Existing assets such as a prototype or registered company are helpful but not required."
    },
    {
      num: 8,
      q: "Will I own my company fully?",
      a: "Yes. You will own 100% of your company. You will be the legal owner of your company. TECH6SENSE AI provides ecosystem support, TECH6SENSE AI is not taking ownership or any equity (unless a separate partnership agreement is created). TECH6SENSE AI acts as your ecosystem partner and strategic enabler."
    },
    {
      num: 9,
      q: "Is Visionary Founders Ecosystem online or offline?",
      a: "The Visionary Founders Ecosystem can be delivered:",
      bullets: [
        "Online",
        "Hybrid",
        "With direct strategic support from TECH6SENSE AI"
      ]
    },
    {
      num: 10,
      q: "How is Visionary Founders Ecosystem different from a business incubator or accelerator or other start-up programs?",
      a: "Most programs provide:",
      bullets: ["Training", "Mentorship", "Networking"],
      a2: "Visionary Founders Ecosystem provides:",
      bullets2: ["Infrastructure", "Dedicated team", "Technical backbone", "Execution support", "Real business ecosystem"],
      footer: "It's not just advisory — it's end to end operational support."
    },
    {
      num: 11,
      q: "Who runs the Visionary Founders Ecosystem?",
      a: "The Visionary Founders Ecosystem is run by TECH6SENSE AI, a global AI and Tech development company."
    },
    {
      num: 12,
      q: "Will my company be legally registered?",
      a: "Yes. We provide support for:",
      bullets: ["Company registration", "Legal documentation", "Compliance guidance", "Business structuring"],
      footer: "You will own your registered company."
    },
    {
      num: 13,
      q: "Is my business idea kept confidential?",
      a: "TECH6SENSE AI treats business ideas and confidential application details with reasonable confidentiality and does not disclose them to unrelated third parties without consent."
    },
    {
      num: 14,
      q: "Do you provide technical team support?",
      a: "Yes. You get access to:",
      bullets: [
        "AI / IT developers",
        "Technical Team Lead and Project Manager",
        "Dedicated CTO",
        "Product architecture guidance"
      ],
      footer: "This ensures your company has strong technical foundation."
    },
    {
      num: 15,
      q: "Does Visionary Founders help founders prepare for fundraising?",
      a: "Yes. We provide guidance for:",
      bullets: [
        "Government funding schemes",
        "Start-up ecosystem programs",
        "Private investor readiness",
        "Business planning and fundraising strategy."
      ]
    },
    {
      num: 16,
      q: "Does Visionary Founders help with global expansion?",
      a: "Yes. The Ecosystem includes support for:",
      bullets: [
        "International client acquisition",
        "Global business strategy",
        "Company setup abroad",
        "Visa & relocation guidance (where applicable)"
      ]
    },
    {
      num: 17,
      q: "How do I get started?",
      a: "The first step is to complete the Founder Application Form. Once your application is reviewed, eligible applicants may be invited to a Founder Strategy Session to explore the best path forward."
    },
    {
      num: 18,
      q: "Is every applicant accepted?",
      a: "No. Applications are reviewed to understand each founder's goals and determine whether Visionary Founders is the right fit. Applications are evaluated on founder commitment, market viability, tier fit, and execution readiness. Submitting an application does not guarantee acceptance."
    },
    {
      num: 19,
      q: "Is there an interview?",
      a: "Selected applicants may be invited to participate in a Founder Strategy Session."
    },
    {
      num: 20,
      q: "What happens on the Founder Strategy Call?",
      a: "The call is a 30–45 minute confidential conversation with our Ecosystem Advisor covering the founder's background, market, ecosystem structure, tier fit, and realistic timeline, with no pressure to commit during the call itself."
    }
  ];

  return (
    <section id="faq" className="relative w-full py-20 md:py-28 overflow-hidden bg-[#FAF9FF]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mb-14 md:mb-16 text-center max-w-3xl mx-auto">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#1746D2]" />
            <span className="font-display text-sm font-extrabold tracking-[0.35em] uppercase text-[#1746D2]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="h-[2px] w-10 bg-[#00A86B]" />
          </div>
          <h2 className="mb-5 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B]">
              Visionary Founders.
            </span>
          </h2>
          <p className="font-body text-slate-500 text-sm md:text-base font-semibold">
            Comprehensive answers covering our ecosystem model, technical support, legal setup, and application process.
          </p>
        </div>

        {/* 2-Column FAQ Grid (Home Page Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-r from-[#1746D2] to-[#00A86B] border-transparent text-white' 
                    : 'bg-white border-slate-200/80 text-slate-900'
                }`}
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
                onTouchStart={() => setOpenIndex(i)}
                onTouchEnd={() => setOpenIndex(null)}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer select-none transition-all duration-300 group ${
                    isOpen ? '' : 'hover:bg-gradient-to-r hover:from-[#1746D2] hover:to-[#00A86B]'
                  }`}
                >
                  <span className={`font-display text-sm md:text-base font-bold tracking-tight leading-snug transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-slate-900 group-hover:text-white'
                  }`}>
                    ({faq.num}) {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-white/20 group-hover:text-white'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-body text-white/95 text-xs md:text-sm leading-relaxed border-t border-white/20 space-y-3">
                    <p>{faq.a}</p>
                    {faq.bullets && (
                      <ul className="list-disc pl-5 space-y-1 font-medium text-white/90">
                        {faq.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {faq.a2 && <p className="pt-1 font-bold">{faq.a2}</p>}
                    {faq.bullets2 && (
                      <ul className="list-disc pl-5 space-y-1 font-medium text-white/90">
                        {faq.bullets2.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {faq.footer && <p className="pt-1 font-semibold">{faq.footer}</p>}
                  </div>
                )}
              </div>
            );
          })}
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent1 || !formData.consent2 || !formData.consent3) {
      alert("Please confirm all declarations before submitting.");
      return;
    }
    setSubmitted(true);
    await sendFormEmail({
      subjectTag: '🚀 [VISIONARY FOUNDERS]',
      formTitle: 'Founder Application',
      formData: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        profileDescription: formData.describeYou,
        priorExperience: formData.priorExperience,
        targetCompanyType: formData.companyType,
        ideaStatus: formData.ideaStatus,
        startTimeline: formData.startTimeline,
        weeklyCommitment: formData.commitment,
        primaryGoal: formData.primaryGoal,
        preferredTier: formData.preferredTier,
        investmentReadyOrSelfFunded: formData.investmentReady,
        howDidYouHearAboutUs: formData.howHeard
      }
    });
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white relative text-center">
        <div className="max-w-2xl mx-auto px-3 sm:px-6 bg-slate-50 p-4 sm:p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
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
      <div className="max-w-[1400px] mx-auto px-6">
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
                <p className="text-xs text-slate-500 italic mt-1 font-medium">"Your founder profile — helps us understand where you're starting from."</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">What best describes you? *</label>
                <select name="describeYou" value={formData.describeYou} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
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
                <select name="priorExperience" value={formData.priorExperience} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
                  <option value="">Select option</option>
                  <option value="Yes, I have run a business before">Yes, I have run a business before</option>
                  <option value="Yes, but not as the primary owner">Yes, but not as the primary owner</option>
                  <option value="Some experience in a related field">Some experience in a related field</option>
                  <option value="No, this would be my first business">No, this would be my first business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">What type of company do you want to build? *</label>
                <select name="companyType" value={formData.companyType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
                  <option value="">Select option</option>
                  <option value="AI Product / AI-SaaS Company">AI Product / AI-SaaS Company</option>
                  <option value="IT Services / Development Company">IT Services / Development Company</option>
                  <option value="AI Consulting & Solutions">AI Consulting & Solutions</option>
                  <option value="Automation & AI Agents Business">Automation & AI Agents Business</option>
                  <option value="Not sure yet — need guidance">Not sure yet — need guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Do you already have a business idea? *</label>
                <select name="ideaStatus" value={formData.ideaStatus} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
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
                <p className="text-xs text-slate-500 italic mt-1 font-medium">"Your timeline and goals — this shapes how your onboarding is paced."</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">When do you want to start your company? *</label>
                <select name="startTimeline" value={formData.startTimeline} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
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
                <select name="commitment" value={formData.commitment} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
                  <option value="">Select option</option>
                  <option value="Yes, fully committed">Yes, fully committed</option>
                  <option value="Yes, but part-time initially">Yes, but part-time initially</option>
                  <option value="Not sure yet">Not sure yet</option>
                  <option value="No, just researching">No, just researching</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">What is your primary goal? *</label>
                <select name="primaryGoal" value={formData.primaryGoal} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
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
                <p className="text-xs text-slate-500 italic mt-1 font-medium">"Which tier fits your ambition? Not sure? Pick your best guess — we'll confirm the right fit together on your Founder Strategy Call."</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Preferred tier *</label>
                <select name="preferredTier" value={formData.preferredTier} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
                  <option value="">Select option</option>
                  <option value='National — "Launch and dominate your home market first"'>National — "Launch and dominate your home market first"</option>
                  <option value='Global — "Build a company engineered to operate globally from day one"'>Global — "Build a company engineered to operate globally from day one"</option>
                </select>
              </div>

              <div className="p-4.5 rounded-2xl bg-[#1746D2]/10 border border-[#1746D2]/20 text-[#0d162a] text-xs font-medium leading-relaxed shadow-xs">
                "Visionary Founders is a premium ecosystem with infrastructure, a dedicated tech team, branding & Marketing, and client acquisition support built in. It's a serious business investment, not a course or a subscription."
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Are you ready for a serious business investment? *</label>
                <select name="investmentReady" value={formData.investmentReady} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
                  <option value="">Select option</option>
                  <option value="Yes, I understand and I'm ready">Yes, I understand and I'm ready</option>
                  <option value="I need more information first">I need more information first</option>
                  <option value="Not at this time">Not at this time</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">How did you hear about us? *</label>
                <select name="howHeard" value={formData.howHeard} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1746D2] focus:ring-2 focus:ring-[#1746D2]/40 transition-all outline-none bg-white font-medium text-sm text-slate-800" required>
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
                <p className="text-xs text-slate-500 italic mt-1 font-medium">No new data collected. All 14 responses are displayed back to the founder for confirmation before final submission.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3.5 text-xs text-slate-800 font-medium divide-y divide-slate-100">
                <div className="pt-2"><strong>1. Full Legal Name:</strong> {formData.fullName || 'Not provided'}</div>
                <div className="pt-2"><strong>2. Primary Email:</strong> {formData.email || 'Not provided'}</div>
                <div className="pt-2"><strong>3. Phone / WhatsApp:</strong> {formData.phone || 'Not provided'}</div>
                <div className="pt-2"><strong>4. Current Country:</strong> {formData.country || 'Not provided'}</div>
                <div className="pt-2"><strong>5. What Best Describes You:</strong> {formData.describeYou || 'Not selected'}</div>
                <div className="pt-2"><strong>6. Prior Business Experience:</strong> {formData.priorExperience || 'Not selected'}</div>
                <div className="pt-2"><strong>7. Company Type to Build:</strong> {formData.companyType || 'Not selected'}</div>
                <div className="pt-2"><strong>8. Business Idea Status:</strong> {formData.ideaStatus || 'Not selected'}</div>
                <div className="pt-2"><strong>9. Start Timeline:</strong> {formData.startTimeline || 'Not selected'}</div>
                <div className="pt-2"><strong>10. Time & Resource Commitment:</strong> {formData.commitment || 'Not selected'}</div>
                <div className="pt-2"><strong>11. Primary Goal:</strong> {formData.primaryGoal || 'Not selected'}</div>
                <div className="pt-2"><strong>12. Preferred Tier:</strong> {formData.preferredTier || 'Not selected'}</div>
                <div className="pt-2"><strong>13. Serious Investment Readiness:</strong> {formData.investmentReady || 'Not selected'}</div>
                <div className="pt-2"><strong>14. How You Heard About Us:</strong> {formData.howHeard || 'Not selected'}</div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200 text-xs font-medium text-slate-700">
                <h4 className="font-bold text-slate-900 text-sm mb-2">Consent & Declaration</h4>
                <p className="text-slate-500 text-xs font-normal">Please review and confirm the following before submitting your application:</p>
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
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <img src={companyLogo} alt="TECH6SENSE AI Logo" className="h-12 md:h-16 mx-auto mb-12 opacity-80 object-contain" />
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 font-display leading-tight max-w-[1400px] mx-auto">
          The Next Generation of Global AI Companies Will Be Built by Visionary Founders.
        </h2>
        
        <div className="text-slate-300 text-base md:text-lg mb-10 max-w-[1400px] mx-auto font-medium space-y-5 leading-relaxed text-center">
          <p>
            Behind every transformative AI company is a founder with the courage to think differently, the ambition to solve meaningful problems, and the commitment to build something that creates lasting value.
          </p>
          <p>
            At Visionary Founders by TECH6SENSE AI, we bring together the strategy, technology, business enablement, and collaborative ecosystem that ambitious entrepreneurs need to build AI and technology companies with confidence.
          </p>
          <p>
            Whether you're turning an idea into a startup, launching an AI product, or expanding an existing business into global markets, your journey begins with a single step.
          </p>
          <p className="text-white font-extrabold text-xl md:text-2xl pt-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-emerald-300">
            Your Vision Deserves a World-Class Ecosystem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 mb-14">
          <button onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-[#0d162a] font-bold rounded-full hover:bg-[#1746D2] hover:text-white transition-all shadow-xl w-full sm:w-auto text-sm uppercase tracking-wide">
            Apply to Become a Visionary Founder
          </button>
          <button onClick={() => document.getElementById('founder-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-[#00A86B] hover:bg-[#00925c] text-white font-bold rounded-full transition-all shadow-xl w-full sm:w-auto text-sm uppercase tracking-wide">
            Schedule Confidential Founder Strategy Call
          </button>
        </div>

        {/* Closing Statement */}
        <div className="pt-10 border-t border-white/15 max-w-[1400px] mx-auto text-center">
          <p className="text-[#D4AF37] font-semibold text-xs md:text-sm leading-relaxed max-w-4xl mx-auto">
            Visionary Founders by TECH6SENSE AI is committed to supporting founders through strategic guidance, technology expertise, and a collaborative ecosystem. While every founder's journey is unique and business outcomes depend on many factors, our mission is to provide the resources, knowledge, and community that help entrepreneurs build strong, sustainable AI and technology companies.
          </p>
        </div>
        
      </div>
    </section>
  );
}
