import React from 'react';

export default function IntelligentGlobalPresence() {
  const globalPresence = [
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "India",
    "United Arab Emirates",
    "European Union",
    "Singapore",
    "Hong Kong"
  ];

  // Duplicate list to make infinite scroll seamless
  const duplicatedPresence = [...globalPresence, ...globalPresence];

  return (
    <section className="relative w-full border-y border-[#1746D2]/15 bg-slate-900 py-6 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-[#1746D2]/10 blur-[80px] rounded-full" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10 flex flex-col md:flex-row items-center gap-6">
        
        {/* Label removed as requested */}

        {/* Marquee Container */}
        <div className="relative flex-grow overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-8 items-center text-xs md:text-sm font-bold text-slate-200">
            {duplicatedPresence.map((country, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="hover:text-white transition-colors tracking-wide whitespace-nowrap cursor-default">
                  {country}
                </span>
                <span className="text-[#1746D2]/60 font-normal select-none">•</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CSS Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
