import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  
  // Refs for mountain fills (polygons)
  const fill1Ref = useRef(null);
  const fill2Ref = useRef(null);
  const fill3Ref = useRef(null);

  // Refs for mountain stroke outlines (polylines)
  const stroke1Ref = useRef(null);
  const stroke2Ref = useRef(null);
  const stroke3Ref = useRef(null);
  
  // Ref for the star group
  const starGroupRef = useRef(null);

  useGSAP(() => {
    // 1. Initial State Setup
    // Hide mountain fills
    gsap.set([fill1Ref.current, fill2Ref.current, fill3Ref.current], { opacity: 0 });
    
    // Hide star group
    gsap.set(starGroupRef.current, { 
      y: -35, 
      scale: 0, 
      opacity: 0, 
      transformOrigin: '85px 12px' 
    });

    // Hide typography words
    gsap.set('.reveal-word', { y: '1.2em', opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.35,
          ease: 'power2.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    });

    // Step 1: Draw the mountain outline strokes sequentially (0.8s duration for a slow, premium draw)
    tl.to(stroke1Ref.current, { strokeDashoffset: 0, duration: 0.8, ease: 'power1.inOut' }, 'start');
    tl.to(stroke2Ref.current, { strokeDashoffset: 0, duration: 0.8, ease: 'power1.inOut' }, 'start+=0.2');
    tl.to(stroke3Ref.current, { strokeDashoffset: 0, duration: 0.8, ease: 'power1.inOut' }, 'start+=0.4');

    // Step 2: Fade in the filled gradients
    tl.to([fill1Ref.current, fill2Ref.current, fill3Ref.current], {
      opacity: 0.9,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    }, 'start+=0.8');

    // Step 3: Clean up the drawn strokes by blending them into the fills
    tl.to([stroke1Ref.current, stroke2Ref.current, stroke3Ref.current], {
      opacity: 0.4,
      duration: 0.5
    }, 'start+=1.2');

    // Step 4: Star drops down and bounces onto the peak
    tl.to(starGroupRef.current, {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'bounce.out'
    }, 'start+=1.2');

    // Step 5: Typography word reveal
    tl.to('.reveal-word', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }, 'start+=1.0');

    // Light reflection sweep across the logo text
    tl.fromTo('.holographic-sweep', 
      { left: '-45%' }, 
      { left: '145%', duration: 0.9, ease: 'power2.inOut' },
      'start+=1.6'
    );

    // Step 6: Hold for 0.4s to complete exactly 3.0 seconds total before fading out
    tl.to({}, { duration: 0.4 });

  }, { scope: containerRef, dependencies: [onComplete] });

  return (
    <div ref={containerRef} style={styles.overlay}>
      {/* Delicate Technology Ambient Grid */}
      <div style={styles.gridOverlay} />
      
      {/* Cinematic Ambient Glow Backdrops */}
      <div style={styles.glowBlue} />
      <div style={styles.glowTeal} />

      <div style={styles.centerStage}>
        <div style={styles.logoStage}>
          
          {/* Logo Mountain SVG */}
          <div style={styles.svgWrapper}>
            <svg 
              viewBox="0 0 120 100" 
              className="w-full h-full overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.svg}
            >
              <defs>
                <linearGradient id="gradBlue" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
                <linearGradient id="gradCyan" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#0c4a6e" />
                </linearGradient>
                <linearGradient id="gradTeal" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#134e4a" />
                </linearGradient>

                <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Filled Mountain Polygons */}
              <polygon ref={fill1Ref} points="5,90 30,55 55,90" fill="url(#gradBlue)" />
              <polygon ref={fill2Ref} points="25,90 55,40 85,90" fill="url(#gradCyan)" />
              <polygon ref={fill3Ref} points="45,90 85,20 115,90" fill="url(#gradTeal)" />

              {/* 2. Mountain Outline Polylines (Drawn peak curves, no flat bottom line) */}
              <polyline 
                ref={stroke1Ref}
                points="5,90 30,55 55,90" 
                fill="none"
                stroke="#3b82f6" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ strokeDasharray: 90, strokeDashoffset: 90 }}
              />
              <polyline 
                ref={stroke2Ref}
                points="25,90 55,40 85,90" 
                fill="none"
                stroke="#0ea5e9" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ strokeDasharray: 120, strokeDashoffset: 120 }}
              />
              <polyline 
                ref={stroke3Ref}
                points="45,90 85,20 115,90" 
                fill="none"
                stroke="#14b8a6" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ strokeDasharray: 170, strokeDashoffset: 170 }}
              />

              {/* 3. Star Group: Glow + Solid Star */}
              <g ref={starGroupRef}>
                <polygon 
                  points="85,2 90,12 100,12 92,18 95,28 85,22 75,28 78,18 70,12 80,12"
                  fill="#fcd34d"
                  filter="url(#starGlow)"
                  opacity="0.8"
                />
                <polygon 
                  points="85,2 88.5,9.5 96,12 88.5,14.5 85,22 81.5,14.5 74,12 81.5,9.5"
                  fill="#fbbf24"
                />
              </g>
            </svg>
          </div>

          {/* Typography block matching full logo */}
          <div style={styles.textContainer}>
            <div style={styles.brandTitle}>
              
              <span style={styles.wordMask}>
                <span 
                  className="reveal-word" 
                  style={{
                    ...styles.word,
                    color: '#1e40af', // Deep blue
                  }}
                >
                  TECH6SENSE
                </span>
              </span>

              <span style={{ width: '12px' }} />

              <span style={styles.wordMask}>
                <span 
                  className="reveal-word" 
                  style={{
                    ...styles.word,
                    background: 'linear-gradient(90deg, #10b981, #14b8a6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  AI
                </span>
              </span>

            </div>
            
            <div className="holographic-sweep" style={styles.sweep} />
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 99999,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `radial-gradient(rgba(14, 165, 233, 0.04) 1.5px, transparent 1.5px)`,
    backgroundSize: '36px 36px',
    pointerEvents: 'none',
  },
  glowBlue: {
    position: 'absolute',
    top: '30%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    width: '550px',
    height: '550px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
    filter: 'blur(60px)',
  },
  glowTeal: {
    position: 'absolute',
    bottom: '25%',
    right: '30%',
    transform: 'translate(50%, 50%)',
    width: '550px',
    height: '550px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(20, 184, 166, 0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
    filter: 'blur(60px)',
  },
  centerStage: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  logoStage: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    padding: '20px 30px',
    overflow: 'hidden',
  },
  svgWrapper: {
    width: '100px',
    height: '80px',
    position: 'relative',
  },
  svg: {
    willChange: 'transform',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '10px',
  },
  brandTitle: {
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    fontWeight: 800,
    fontSize: '34px',
    letterSpacing: '0.1em',
    display: 'flex',
    lineHeight: 1,
  },
  wordMask: {
    overflow: 'hidden',
    display: 'inline-block',
    height: '1.2em',
  },
  word: {
    display: 'inline-block',
    willChange: 'transform, opacity',
  },
  sweep: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '45px',
    background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.28), rgba(255, 255, 255, 0.4), rgba(14, 165, 233, 0.28), transparent)',
    transform: 'skewX(-25deg)',
    pointerEvents: 'none',
  }
};
