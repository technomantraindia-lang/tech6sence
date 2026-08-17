import React from 'react';

export default function FlagshipEvent() {
  const features = [
    { title: "Sovereign Deal Rooms", icon: "💼" },
    { title: "AI Technology Demonstrations", icon: "🤖" },
    { title: "Keynote Panels", icon: "🎤" },
    { title: "Gala Networking Dinner", icon: "🍷" }
  ];

  return (
    <section className="relative bg-[#000110] text-white py-16 md:py-20 overflow-hidden border-b border-slate-800/80">
      
      {/* Background Styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-900/20 to-[#0b1329]/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center">
          
          {/* Trophy Badge */}
          <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
            <svg className="w-7 h-7 text-cyan-400" fill="currentColor" viewBox="0 0 576 512">
              <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"/>
            </svg>
          </div>

          <span 
            className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-2 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            FLAGSHIP EXPERIENCE
          </span>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Annual Business Brains Summit
          </h2>
          
          <p 
            className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            An annual gathering of global leaders, institutional investors, sovereign funds, AI pioneers, and enterprise founders.
          </p>

          {/* Compact 4-Card Horizontal Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
            {features.map((feat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center text-center group hover:-translate-y-0.5"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <div 
                  className="text-xs md:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {feat.title}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
