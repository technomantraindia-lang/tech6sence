import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  const path4Ref = useRef(null);
  const path5Ref = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current, path5Ref.current].filter(Boolean);

    // Prepare SVG paths for smooth line drawing
    paths.forEach((path) => {
      try {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fillOpacity: 0,
        });
      } catch (e) {
        gsap.set(path, { strokeDasharray: 600, strokeDashoffset: 600, fillOpacity: 0 });
      }
    });

    gsap.set(textRef.current, { y: 15, opacity: 0 });
    gsap.set(glowRef.current, { scale: 0.7, opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 0.98,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    });

    // Step 1: Soft ambient glow fade in
    tl.to(glowRef.current, { scale: 1.1, opacity: 0.6, duration: 0.8, ease: 'sine.out' }, 'start');

    // Step 2: Smooth SVG line drawing animation
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'sine.inOut',
    }, 'start+=0.1');

    // Step 3: Gentle fade in for illuminated gradient fills
    tl.to(paths, {
      fillOpacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    }, 'start+=1.0');

    // Step 4: Typography reveal
    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    }, 'start+=0.8');

    // Brief hold before curtain fade out
    tl.to({}, { duration: 0.3 });

  }, { scope: containerRef, dependencies: [onComplete] });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[99999] bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden font-body text-slate-900 select-none"
    >
      {/* Light Theme Subtle Tech Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.08) 1.5px, transparent 1.5px), radial-gradient(rgba(16, 185, 129, 0.06) 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* Soft Ambient Light Glow Backdrops */}
      <div 
        ref={glowRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100/60 via-indigo-100/40 to-emerald-100/50 blur-[130px] pointer-events-none"
      />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-50/70 blur-[100px] pointer-events-none" />

      {/* Center Stage Container */}
      <div className="relative z-10 flex flex-col items-center max-w-lg px-6 text-center">
        
        {/* SVG Drawn Logo Stage */}
        <div className="relative mb-6 flex items-center justify-center p-6">
          {/* Soft Glow Ring Behind Logo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-emerald-400/10 blur-xl animate-pulse" />

          {/* SVG Vector Logo with Smooth Stroke Drawing */}
          <svg 
            viewBox="0 0 112 128" 
            className="w-24 h-28 sm:w-28 sm:h-32 overflow-visible relative z-10 filter drop-shadow-[0_10px_25px_rgba(37,99,235,0.12)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lightBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="lightEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="lightGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Emblem Outer Hexagon Shield Stroke 1 */}
            <path 
              ref={path1Ref}
              d="M95.11 101.14c.89 3.32-1.26 5.2-4.32 6.92q-16.14 9.1-32.09 18.55a4.74 4.74 0 0 1-5.45 0Q27.89 111.85 2.4 97.25A4.22 4.22 0 0 1 0 93.19V33.85c0-2.13 1.05-3.25 2.7-4.19q13.5-7.76 27-15.54A76.46 76.46 0 0 0 36.56 10c2.2-1.61 4-1 5.9.34 1.57 1.11 4.35 1.58 4.38 3.5s-2.69 2.3-4.26 3.22q-15.48 9.09-31.06 18A4.29 4.29 0 0 0 9 39.26q.09 24.2 0 48.37a4.62 4.62 0 0 0 2.68 4.48Q32.9 104.28 54 116.58a3.32 3.32 0 0 0 3.82 0q16.62-9.77 33.32-19.39c1-.61 2.18-1.94 3.42-1.15 1.05.66.39 2.21.51 3.36.08.43.04.83.04 1.74zM111.77 63.69v28.78c0 2.85-4.92 7.63-7.75 7.61-1 0-1.16-.61-1.2-1.36s0-1.77 0-2.66V40.27c0-2.68-.77-4.29-3.17-5.66-16.57-9.47-33-19.1-49.55-28.67-2.82-1.63-2.77-1.86-.1-3.65 3.5-2.38 6.5-3.35 10.85-.71 15.63 9.5 31.57 18.48 47.46 27.53 2.55 1.45 3.59 3.11 3.53 6.1-.19 9.49-.07 18.98-.07 28.48z" 
              fill="url(#lightEmeraldGrad)"
              stroke="#059669"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner Ribbon Path 2 */}
            <path 
              ref={path2Ref}
              d="M78.46 73.5c0 6.23-.11 12.47.05 18.7a5.39 5.39 0 0 1-3.35 5.6c-5.73 2.88-5.68 3-5.68-3.58V58.89a4.66 4.66 0 0 0-2.73-4.68c-11.1-6.29-22.13-12.73-33.16-19.13-3.12-1.81-2.87-1.84-.07-4C37.51 28 40.7 28.32 44.93 31c9.94 6.27 20.27 12 30.53 17.72a5.4 5.4 0 0 1 3 5.49c-.09 6.42 0 12.86 0 19.29z" 
              fill="url(#lightEmeraldGrad)"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner Curve Path 3 */}
            <path 
              ref={path3Ref}
              d="M95.11 63.48c0 6-.18 12.07.07 18.09.14 3.27-.65 5.6-3.82 6.78-1.61.59-3 2.89-4.64 1.88-1.41-.87-.57-3.13-.58-4.77 0-12-.08-23.93 0-35.89a5.39 5.39 0 0 0-3.14-5.4c-11-6.23-21.9-12.59-32.85-18.93-.81-.47-2.1-.65-2.06-1.85s1.3-1.34 2-1.93c3.68-2.92 7.09-2.84 11.22-.3 10.35 6.37 21 12.27 31.53 18.32a4.17 4.17 0 0 1 2.24 4.12c-.01 6.63.03 13.25.03 19.88zM61.84 82.61v19.27c0 3.21-2.45 6.25-5.52 6.53-2.29.21-3.42-1.22-3.44-3.47V94.86c0-8.5-.11-17 .06-25.5a5.88 5.88 0 0 0-3.35-5.93C39.6 57.81 29.7 52 19.74 46.37c-2.15-1.23-4-2.54-2.64-5.31 1-2.12 5.53-3.58 7.47-2.47C36.39 45.36 48.19 52.2 60 59c1.64 1 1.84 2.41 1.83 4.06-.01 6.5.01 13.03.01 19.55z" 
              fill="url(#lightEmeraldGrad)"
              stroke="#059669"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner Core Path 4 */}
            <path 
              ref={path4Ref}
              d="M45.19 85.87V99.5c0 2.3-.74 3-2.77 1.57a2.23 2.23 0 0 0-.5-.32c-5-1.75-6.37-5.31-5.82-10.38.44-4.1 0-8.29.11-12.43a4.21 4.21 0 0 0-2.41-4.29C29.31 71.19 25 68.33 20.44 66c-2.88-1.46-4.22-3.33-3.77-6.51.24-1.72-.84-4.13.6-5s3.1 1.12 4.59 2c7 3.93 13.85 8 20.83 11.9a4.25 4.25 0 0 1 2.54 4.21c-.1 4.4-.03 8.82-.04 13.27z" 
              fill="url(#lightEmeraldGrad)"
              stroke="#059669"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Accent Gold Path 5 */}
            <path 
              ref={path5Ref}
              d="M28.55 86.1c-.36 1.7 1 4.54-.81 5.52S24 90 22 89.3c-4.84-1.77-6.1-5.32-5.35-10 .29-1.88-1-4.5.85-5.49 1.55-.83 3.23 1.38 4.93 2.08a6.68 6.68 0 0 1 .76.46c5.81 3.2 5.35 2.37 5.36 9.75z" 
              fill="url(#lightGoldGrad)"
              stroke="#d97706"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Brand Typography */}
        <div ref={textRef} className="flex flex-col items-center">
          <h1 className="font-display font-bold text-2xl sm:text-3xl tracking-widest text-slate-900 mb-1 flex items-center gap-2">
            <span>TECH6SENSE</span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">AI</span>
          </h1>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            <span className="font-mono text-[0.7rem] tracking-[0.25em] text-blue-600 font-semibold uppercase">
              System Initializing
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
