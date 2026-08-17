import React from 'react';

export default function ThePowerOfCommunity() {
  return (
    <section className="relative bg-[#000110] text-white py-24 md:py-32 overflow-hidden border-b border-slate-900">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span 
            className="font-mono text-sm font-bold text-cyan-400 uppercase tracking-widest mb-6 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The Power of Community
          </span>
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            In the AI revolution, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#1746D2]">
              connections are currency.
            </span>
          </h2>
          <p 
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The most transformative companies aren’t built in isolation. They emerge from the collision of visionary ideas, strategic capital, and collective genius.
          </p>
          <p 
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A conversation with the right investor can unlock millions. A partnership formed at the right time can define market leadership. Welcome to the network where capital meets true innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
