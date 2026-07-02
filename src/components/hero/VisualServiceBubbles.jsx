// src/components/hero/VisualServiceBubbles.jsx
import React, { useState, useEffect } from 'react';
import { visualServicePoints } from './heroData';

export default function VisualServiceBubbles() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState(1);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  // Handle detection of mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cycling loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        // Mobile cycles one point at a time (0 -> 7 -> 0)
        setActiveMobileIndex((prev) => (prev + 1) % visualServicePoints.length);
      } else {
        // Desktop/Tablet cycles groups of pairs (1 -> 2 -> 3 -> 4 -> 1)
        setActiveGroupId((prev) => (prev % 4) + 1);
      }
    }, 3800); // Cycles every 3.8 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div 
      className="visual-bubbles-overlay"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none' // Clicks pass through to WebGL Earth
      }}
    >
      {visualServicePoints.map((pt, idx) => {
        // Determine if this specific point is active
        const isActive = isMobile 
          ? idx === activeMobileIndex 
          : pt.groupId === activeGroupId;

        return (
          <div
            key={pt.id}
            className={`bubble-anchor ${isActive ? 'anchor-active' : 'anchor-inactive'}`}
            style={{
              position: 'absolute',
              left: `${pt.x}%`,
              top: `${pt.y}%`,
              width: 0,
              height: 0,
              zIndex: isActive ? 20 : 10
            }}
          >
            {/* ── Circular Flag Marker ── */}
            <div
              className={`flag-marker ${isActive ? 'flag-marker-active' : ''}`}
              style={{
                position: 'absolute',
                top: '-24px',
                left: '-24px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: isActive 
                  ? 'rgba(255, 255, 255, 0.22)' 
                  : 'rgba(255, 255, 255, 0.05)',
                border: isActive
                  ? '1.5px solid rgba(255, 255, 255, 0.35)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                boxShadow: isActive
                  ? '0 0 20px rgba(61, 235, 255, 0.35)'
                  : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                transition: 'all 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: isActive ? 'scale(1.06)' : 'scale(0.8)',
                opacity: isActive ? 1 : 0.25,
                userSelect: 'none'
              }}
            >
              {pt.flag}

              {/* Glowing Pulse Ring for Active Markers */}
              {isActive && (
                <div 
                  className="marker-pulse-ring"
                  style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(61, 235, 255, 0.45)',
                    animation: 'bubblePulse 2s cubic-bezier(0.22, 1, 0.36, 1) infinite'
                  }}
                />
              )}
            </div>

            {/* ── Compact Notification Card ── */}
            <div
              className={`notification-card ${isActive ? 'card-active' : 'card-inactive'}`}
              style={{
                position: 'absolute',
                top: '0',
                // Position card on left/right side based on direction, overlapping the flag edge slightly
                left: pt.direction === 'right' ? '28px' : 'auto',
                right: pt.direction === 'left' ? '28px' : 'auto',
                
                // Animate entrance: scale-up and translateY slide
                transform: `translateY(-50%) scale(${isActive ? 1 : 0.96}) translateX(${
                  isActive ? '0px' : pt.direction === 'right' ? '-6px' : '6px'
                })`,
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                pointerEvents: isActive ? 'auto' : 'none',
                transition: 'opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.75s',
                
                // Frosted light glass style
                width: '235px',
                height: '62px',
                padding: '10px 14px',
                borderRadius: '16px',
                background: 'rgba(245, 248, 252, 0.14)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(14px)',
                boxShadow: '0 12px 34px rgba(0, 0, 0, 0.16)',
                
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                <div 
                  style={{ 
                    fontSize: '9px', 
                    fontWeight: 700, 
                    color: 'rgba(170, 230, 255, 0.95)', 
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '1px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {pt.country}
                </div>
                <div 
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    color: '#ffffff', 
                    lineHeight: '1.25',
                    fontFamily: 'Inter, sans-serif',
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {pt.service}
                </div>
              </div>

              {/* Status active cyan dot on right */}
              <div 
                style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  background: '#3debff', 
                  boxShadow: '0 0 8px #3debff',
                  flexShrink: 0
                }} 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
