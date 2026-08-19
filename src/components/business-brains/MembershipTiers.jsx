import React from 'react';
import { Link } from 'react-router-dom';

export default function MembershipTiers() {
  const tiers = [
    {
      name: "Explorer",
      desc: "Perfect for those new to the AI ecosystem",
      features: [
        "Access to quarterly events",
        "Online platform participation",
        "Resource library access",
        "Monthly newsletter"
      ]
    },
    {
      name: "Connector",
      desc: "Active participants seeking regular engagement",
      features: [
        "Everything in Explorer",
        "Monthly roundtable access",
        "Priority event registration",
        "Direct member messaging",
        "Pitch event participation"
      ]
    },
    {
      name: "Visionary",
      desc: "Serious investors and scaling entrepreneurs",
      features: [
        "Everything in Connector",
        "VIP summit access & speaking",
        "Exclusive investor sessions",
        "One-on-one introductions",
        "Custom research requests",
        "TECH6SENSE advisory access"
      ]
    },
    {
      name: "Corporate",
      desc: "Enterprises seeking innovation and collaboration",
      features: [
        "Tailored engagement model",
        "Team membership allocations",
        "Branded presence at events",
        "Innovation pipeline access",
        "Custom workshops for your team"
      ]
    }
  ];

  return (
    <section id="business-brain-commu" className="relative bg-slate-50 text-slate-900 overflow-hidden py-20 md:py-28 border-b border-slate-200">
      {/* Light Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg aria-hidden="true" className="w-5 h-5 text-emerald-500" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path>
            </svg>
            <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Membership Tiers
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-[#1746D2]">Path</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            Select the membership level that aligns with your goals and commitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">{tier.desc}</p>
              
              <ul className="space-y-4 mb-8 border-t border-slate-100 pt-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Link to="#business-brain-commu" className="block w-full text-center py-3 px-4 rounded-xl font-bold text-sm bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-900 transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
