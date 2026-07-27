import React from 'react';
import { globalServicePoints } from './heroData';
import './orbitRing.css';

// Import all country flags
import flagUK from '../../assets/flags/uk.webp';
import flagUSA from '../../assets/flags/usa.webp';
import flagAustralia from '../../assets/flags/australia.webp';
import flagUAE from '../../assets/flags/uae.webp';
import flagEU from '../../assets/flags/eu.webp';
import flagCanada from '../../assets/flags/canada.webp';
import flagIndia from '../../assets/flags/india.webp';
import flagSingapore from '../../assets/flags/singapore.webp';

const FLAG_MAP = {
  uk: flagUK,
  usa: flagUSA,
  australia: flagAustralia,
  uae: flagUAE,
  eu: flagEU,
  canada: flagCanada,
  india: flagIndia,
  singapore: flagSingapore,
};

export default function OrbitServiceRing() {
  const totalItems = globalServicePoints.length;
  const orbitRadius = 560; // Wide orbit matching the Earth's equator

  return (
    <div className="orbit-ring-container">
      <div className="orbit-ring-scene">
        <div className="orbit-ring-track">
          {globalServicePoints.map((item, index) => {
            const angle = (360 / totalItems) * index;
            return (
              <div
                key={item.id}
                className="orbit-card-wrapper"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${orbitRadius}px)`,
                }}
              >
                <div 
                  className="orbit-card" 
                  style={{ '--card-color': item.color }}
                >
                  <div className="orbit-card-flag-wrap">
                    <img 
                      src={FLAG_MAP[item.id]} 
                      alt={item.country} 
                      className="orbit-card-flag" 
                    />
                  </div>
                  <div className="orbit-card-info">
                    <span className="orbit-card-country">{item.country}</span>
                    <span className="orbit-card-service">{item.service}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
