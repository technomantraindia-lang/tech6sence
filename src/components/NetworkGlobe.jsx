import React from 'react';

export default function NetworkGlobe({ progress }) {
  // Only reveal the globe after the hero video starts fading out
  const globeOpacity = Math.min(Math.max((progress - 0.2) * 2.5, 0), 1);
  const scale = 0.8 + globeOpacity * 0.2;

  return (
    <div
      className="absolute top-[-5%] left-1/2 z-[15] flex items-center justify-center pointer-events-none"
      style={{
        transform: `translateX(-50%) scale(${scale})`,
        opacity: globeOpacity,
        width: 'min(70vw, 450px)',
        height: 'min(70vw, 450px)',
      }}
    >
      <div className="w-full h-full animate-[spin_30s_linear_infinite]">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(217,70,239,0.35)" />
              <stop offset="50%" stopColor="rgba(124,58,237,0.15)" />
              <stop offset="100%" stopColor="rgba(124,58,237,0)" />
            </radialGradient>
          </defs>

          {/* Core Ambient Glow */}
          <circle cx="200" cy="200" r="180" fill="url(#core-glow)" />

          {/* Background grid / sphere rings */}
          <g stroke="rgba(168,85,247,0.25)" strokeWidth="1" fill="none">
            <circle cx="200" cy="200" r="160" strokeDasharray="2 6" />
            <circle cx="200" cy="200" r="120" stroke="rgba(124,58,237,0.15)" />
            <ellipse cx="200" cy="200" rx="160" ry="40" />
            <ellipse cx="200" cy="200" rx="160" ry="100" />
            <ellipse cx="200" cy="200" rx="40" ry="160" />
            <ellipse cx="200" cy="200" rx="100" ry="160" />
          </g>

          {/* Outer Rotating Dashed Ring */}
          <circle
            cx="200" cy="200" r="175"
            fill="none"
            stroke="rgba(217,70,239,0.4)"
            strokeWidth="1.5"
            strokeDasharray="10 20"
            className="origin-center animate-[spin_15s_linear_infinite_reverse]"
          />

          {/* Connecting Neural Web - Glow Path Layer */}
          <g stroke="rgba(217,70,239,0.18)" strokeWidth="3" fill="none">
            <path d="M200 40 L275 80 L330 150 L360 200 L330 250 L275 320 L200 360 L125 320 L70 250 L40 200 L70 150 L125 80 Z" />
            <path d="M200 80 L250 120 L280 200 L250 280 L200 320 L150 280 L120 200 L150 120 Z" />
            <path d="M200 120 L230 160 L230 240 L200 280 L170 240 L170 160 Z" />
            <path d="M40 200 L120 200 M280 200 L360 200" />
            <path d="M200 40 L200 120 M200 280 L200 360" />
            <path d="M125 80 L170 160 M275 80 L230 160" />
            <path d="M125 320 L170 240 M275 320 L230 240" />
            <path d="M70 150 L150 120 M330 150 L250 120" />
            <path d="M70 250 L150 280 M330 250 L250 280" />
          </g>

          {/* Connecting Neural Web - Main Crisp Line Layer */}
          <g stroke="rgba(217,70,239,0.85)" strokeWidth="1" fill="none">
            <path d="M200 40 L275 80 L330 150 L360 200 L330 250 L275 320 L200 360 L125 320 L70 250 L40 200 L70 150 L125 80 Z" />
            <path d="M200 80 L250 120 L280 200 L250 280 L200 320 L150 280 L120 200 L150 120 Z" />
            <path d="M200 120 L230 160 L230 240 L200 280 L170 240 L170 160 Z" />
            <path d="M40 200 L120 200 M280 200 L360 200" />
            <path d="M200 40 L200 120 M200 280 L200 360" />
            <path d="M125 80 L170 160 M275 80 L230 160" />
            <path d="M125 320 L170 240 M275 320 L230 240" />
            <path d="M70 150 L150 120 M330 150 L250 120" />
            <path d="M70 250 L150 280 M330 250 L250 280" />
          </g>

          {/* Active Glowing Nodes */}
          {[
            [200, 40], [275, 80], [330, 150], [360, 200], [330, 250], [275, 320], [200, 360], [125, 320], [70, 250], [40, 200], [70, 150], [125, 80],
            [200, 80], [250, 120], [280, 200], [250, 280], [200, 320], [150, 280], [120, 200], [150, 120],
            [200, 120], [230, 160], [230, 240], [200, 280], [170, 240], [170, 160],
            [200, 200]
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="8" fill="rgba(217,70,239,0.12)" />
              <circle cx={x} cy={y} r="4.5" fill="rgba(217,70,239,0.4)" />
              <circle cx={x} cy={y} r="1.8" fill="#fff" />
            </g>
          ))}

          {/* Floating Data Particles */}
          <g fill="#fff">
            <circle cx="90" cy="110" r="4.5" fill="rgba(217,70,239,0.25)" />
            <circle cx="90" cy="110" r="1.8" fill="#fff" />

            <circle cx="310" cy="100" r="5" fill="rgba(217,70,239,0.25)" />
            <circle cx="310" cy="100" r="2.2" fill="#fff" />

            <circle cx="290" cy="300" r="3.5" fill="rgba(217,70,239,0.2)" />
            <circle cx="290" cy="300" r="1.2" fill="#fff" />

            <circle cx="110" cy="280" r="4.5" fill="rgba(217,70,239,0.25)" />
            <circle cx="110" cy="280" r="1.8" fill="#fff" />

            <circle cx="160" cy="60" r="3.5" fill="rgba(217,70,239,0.2)" />
            <circle cx="160" cy="60" r="1.2" fill="#fff" />

            <circle cx="240" cy="340" r="4.5" fill="rgba(217,70,239,0.25)" />
            <circle cx="240" cy="340" r="1.8" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
}
