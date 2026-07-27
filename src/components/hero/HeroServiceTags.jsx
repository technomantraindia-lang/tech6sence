import React from 'react';
import { heroData } from './heroData';

export default function HeroServiceTags() {
  return (
    <div className="th-service-tags-container">
      {heroData.serviceTags.map((tag) => (
        <div
          key={tag.id}
          id={tag.id}
          className="th-service-tag"
          style={tag.style}
        >
          {tag.label}
        </div>
      ))}
    </div>
  );
}
