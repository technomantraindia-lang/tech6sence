import React from 'react';
import { motion } from 'framer-motion';

// Minimalist stylized human node component
const HumanNode = ({ color, cx, cy, delay, animateState }) => {
  const isSolid = animateState === 'solid' || animateState === 'complete';
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={
        animateState === 'nodes' || isSolid
          ? { scale: 1, opacity: 1 }
          : { scale: 0, opacity: 0 }
      }
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 12,
        delay: delay
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {/* Outer pulsing glow circle */}
      <motion.circle
        cx={cx}
        cy={cy}
        r="7"
        fill="none"
        stroke={color}
        strokeWidth="1"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Stylized Human Outline inside node */}
      <g transform={`translate(${cx - 5}, ${cy - 5.5}) scale(0.65)`}>
        {/* Head */}
        <circle
          cx="8"
          cy="4.5"
          r="3"
          fill={isSolid ? color : '#FFFFFF'}
          stroke={color}
          strokeWidth="1.2"
        />
        {/* Shoulders / Body */}
        <path
          d="M 2 13 C 2 9.5, 4.5 8, 8 8 C 11.5 8, 14 9.5, 14 13"
          fill={isSolid ? color : '#FFFFFF'}
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
    </motion.g>
  );
};

export default function BrandLogo({ 
  animateState = 'complete', // 'empty' | 'stroke' | 'nodes' | 'solid' | 'complete'
  layoutId = 'main-brand-logo',
  className = '',
  size = 48
}) {
  const isStroke = animateState === 'stroke' || animateState === 'nodes' || animateState === 'solid' || animateState === 'complete';
  const isSolid = animateState === 'solid' || animateState === 'complete';
  const isComplete = animateState === 'complete';

  // Math-perfect Infinity path in 100x50 viewport
  const pathD = "M 50 25 C 20 5, 5 15, 5 25 C 5 35, 20 45, 50 25 C 80 5, 95 15, 95 25 C 95 35, 80 45, 50 25 Z";

  return (
    <motion.div 
      layoutId={layoutId} 
      className={`flex items-center gap-3 select-none ${className}`}
      style={{ height: size }}
    >
      <div className="relative shrink-0" style={{ width: size * 2, height: size }}>
        <svg 
          viewBox="0 0 100 50" 
          className="w-full h-full overflow-visible"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base invisible path to hold layout */}
          <path d={pathD} stroke="transparent" strokeWidth="3" />

          {/* Glowing background track (reveals during stroke phase) */}
          {isStroke && (
            <motion.path
              d={pathD}
              stroke={isSolid ? 'url(#infinityGradient)' : '#f1f5f9'}
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              style={{
                filter: isSolid ? 'drop-shadow(0 0 4px rgba(124, 58, 237, 0.25))' : 'none'
              }}
            />
          )}

          {/* Animated drawing stroke */}
          {isStroke && !isSolid && (
            <motion.path
              d={pathD}
              stroke="url(#infinityGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          )}

          {/* Interactive Flow Energy Dash (Only visible when solid/complete) */}
          {isSolid && (
            <motion.path
              d={pathD}
              stroke="url(#flowGradient)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeDasharray="15 35"
              animate={{ strokeDashoffset: [-50, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
          )}

          {/* The 4 Human/Collaboration Nodes */}
          <HumanNode color="#3debff" cx={22} cy={11} delay={0.15} animateState={animateState} /> {/* Blue */}
          <HumanNode color="#10b981" cx={22} cy={39} delay={0.3} animateState={animateState} />  {/* Green */}
          <HumanNode color="#ef4444" cx={78} cy={11} delay={0.45} animateState={animateState} /> {/* Red */}
          <HumanNode color="#f59e0b" cx={78} cy={39} delay={0.6} animateState={animateState} />  {/* Yellow */}

          {/* Core Definitions */}
          <defs>
            <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3debff" />
              <stop offset="33%" stopColor="#10b981" />
              <stop offset="66%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center overflow-hidden">
        <motion.div 
          className="font-display font-extrabold tracking-[0.22em] text-slate-900 leading-none"
          style={{ fontSize: size * 0.44 }}
        >
          {/* Masked reveal container for letters */}
          <span className="inline-block overflow-hidden relative">
            <motion.span
              className="inline-block"
              initial={{ y: '100%' }}
              animate={isComplete ? { y: 0 } : { y: '100%' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              TECH<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B]">6</span>SENSE
            </motion.span>
          </span>
        </motion.div>
        
        {/* Micro Tagline */}
        <motion.div 
          className="font-mono text-slate-400 font-bold tracking-[0.25em] mt-1 leading-none uppercase"
          style={{ fontSize: size * 0.16 }}
        >
          <span className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '100%' }}
              animate={isComplete ? { y: 0 } : { y: '100%' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              AI & DEEP-TECH
            </motion.span>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
