import React from 'react';
import { globalServiceCallouts } from './heroData';

export default function GlobalServiceCallouts({ activeIndex = 0 }) {
  return (
    <div className="th-callouts-overlay">
      {globalServiceCallouts.map((item, index) => {
        const isActive = index === activeIndex;
        
        // Icon SVG selection
        let iconHtml = null;
        if (item.icon === 'agent') iconHtml = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
        else if (item.icon === 'enterprise') iconHtml = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2.18" ry="2.18"></rect><rect x="2" y="14" width="20" height="8" rx="2.18" ry="2.18"></rect><line x1="6" y1="10" x2="6" y2="14"></line><line x1="18" y1="10" x2="18" y2="14"></line></svg>;
        else if (item.icon === 'automation') iconHtml = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
        else if (item.icon === 'genai') iconHtml = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
        else if (item.icon === 'ai-service') iconHtml = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"><path d="M18 10h-1.25A3.75 3.75 0 0 0 13 6.25V5M6 14h1.25A3.75 3.75 0 0 0 11 17.75V19"></path><circle cx="12" cy="12" r="10"></circle></svg>;
        else if (item.icon === 'copilot') iconHtml = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
        else if (item.icon === 'consulting') iconHtml = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
        else iconHtml = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon></svg>;

        return (
          <div
            key={item.id}
            className={`th-mobile-bubble-wrapper th-callout-id-${item.id} ${isActive ? 'th-active' : ''}`}
            style={{
              opacity: isActive ? 1 : 0,
              pointerEvents: isActive ? 'auto' : 'none',
              transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(8px)',
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            <div className="th-bubble-inner" style={{ borderColor: `${item.color}40`, boxShadow: `0 0 12px ${item.color}15` }}>
              <div className="th-bubble-icon" style={{ backgroundColor: `${item.color}25`, color: item.color, borderColor: `${item.color}40` }}>
                {iconHtml}
              </div>
              <div className="th-bubble-content">
                <div className="th-bubble-country">{item.country}</div>
                <div className="th-bubble-service">{item.service}</div>
                <div className="th-bubble-sub">Global AI Service</div>
              </div>
              <div className="th-bubble-status">
                <span className="th-status-dot" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
