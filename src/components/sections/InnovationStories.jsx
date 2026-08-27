import React, { useState, useEffect, useRef, useCallback } from 'react';
import flagAus from '../../assets/flags/australia.webp';
import flagCan from '../../assets/flags/canada.webp';
import flagEu from '../../assets/flags/eu.webp';
import flagInd from '../../assets/flags/india.webp';
import flagSgp from '../../assets/flags/singapore.webp';
import flagUae from '../../assets/flags/uae.webp';
import flagUk from '../../assets/flags/uk.webp';
import flagUsa from '../../assets/flags/usa.webp';

const STORIES = [
  {
    id: 1,
    suit: 'â™ ',
    suitColor: 'text-[#1746D2]',
    tagline: 'USA | Healthcare & Life Sciences',
    flag: flagUsa,
    title: 'AI Clinical Intelligence Platform',
    client: 'Dr. Michael Anderson',
    role: 'Chief Medical Officer',
    location: 'USA',
    quote: 'TECH6SENSE AI successfully delivered our AI-powered clinical intelligence platform that streamlined patient data analysis and automated medical documentation. Their teamâ€™s expertise in Generative AI and healthcare workflows helped us significantly improve operational efficiency while maintaining enterprise-grade security. They are a trusted long-term technology partner.',
    accent: '#1746D2',
  },
  {
    id: 2,
    suit: 'â™¥',
    suitColor: 'text-[#00A86B]',
    tagline: 'USA | Banking & Financial Services',
    flag: flagUsa,
    title: 'AI Banking Copilot & Compliance Automation',
    client: 'Jennifer Collins',
    role: 'VP â€“ Digital Transformation',
    location: 'USA',
    quote: 'The AI Banking Copilot developed by TECH6SENSE AI transformed our customer service, automated compliance workflows, and accelerated financial document processing. Their technical excellence and project management exceeded every expectation.',
    accent: '#00A86B',
  },
  {
    id: 3,
    suit: 'â™¦',
    suitColor: 'text-[#D4AF37]',
    tagline: 'United Kingdom | Manufacturing',
    flag: flagUk,
    title: 'Predictive Maintenance & AI Quality Inspection',
    client: 'James Richardson',
    role: 'Operations Director',
    location: 'UK',
    quote: 'TECH6SENSE AI built a predictive maintenance and AI quality inspection platform that dramatically improved production efficiency while reducing equipment downtime. Their engineers demonstrated exceptional professionalism throughout the engagement.',
    accent: '#D4AF37',
  },
  {
    id: 4,
    suit: 'â™£',
    suitColor: 'text-[#1746D2]',
    tagline: 'Canada | Retail & E-Commerce',
    flag: flagCan,
    title: 'AI Recommendation Engine & Customer Analytics',
    client: 'Sarah Mitchell',
    role: 'Chief Digital Officer',
    location: 'Canada',
    quote: 'Our AI recommendation engine and intelligent customer analytics platform delivered measurable improvements in customer engagement and sales performance. TECH6SENSE AI provided outstanding technical expertise from planning through deployment.',
    accent: '#1746D2',
  },
  {
    id: 5,
    suit: 'â™ ',
    suitColor: 'text-[#00A86B]',
    tagline: 'Australia | Logistics & Supply Chain',
    flag: flagAus,
    title: 'AI Logistics Optimization & Fleet Analytics',
    client: 'Daniel Carter',
    role: 'Head of Supply Chain',
    location: 'Australia',
    quote: 'The AI-powered logistics optimization platform significantly improved fleet efficiency, delivery planning, and warehouse operations. TECH6SENSE AI delivered a scalable enterprise solution that created immediate business value.',
    accent: '#00A86B',
  },
  {
    id: 6,
    suit: 'â™¥',
    suitColor: 'text-[#D4AF37]',
    tagline: 'India | Education & EdTech',
    flag: flagInd,
    title: 'Personalized AI Tutors & Learning Analytics',
    client: 'Ronak Shah',
    role: 'Founder & CEO',
    location: 'India',
    quote: 'TECH6SENSE AI transformed our digital learning platform with personalized AI tutors, intelligent assessments, and automated content generation. Their innovation and commitment to quality have been outstanding.',
    accent: '#D4AF37',
  },
  {
    id: 7,
    suit: 'â™¦',
    suitColor: 'text-[#1746D2]',
    tagline: 'USA | Insurance',
    flag: flagUsa,
    title: 'AI Claims Automation & Risk Analytics',
    client: 'Robert Williams',
    role: 'Chief Technology Officer',
    location: 'USA',
    quote: 'Our AI claims automation platform reduced processing times and improved customer satisfaction. TECH6SENSE AI combined deep AI expertise with excellent communication and execution.',
    accent: '#1746D2',
  },
  {
    id: 8,
    suit: 'â™£',
    suitColor: 'text-[#00A86B]',
    tagline: 'UAE | Real Estate & Construction',
    flag: flagUae,
    title: 'Intelligent Property Management & Analytics',
    client: 'Ahmed Al Mansoori',
    role: 'Managing Director',
    location: 'UAE',
    quote: 'The intelligent property management solution modernized our operations through AI-driven analytics and automation. TECH6SENSE AI delivered a world-class enterprise platform tailored to our business.',
    accent: '#00A86B',
  },

  {
    id: 10,
    suit: 'â™¥',
    suitColor: 'text-[#1746D2]',
    tagline: 'Australia | Energy & Utilities',
    flag: flagAus,
    title: 'Smart Energy & Predictive Maintenance Platform',
    client: 'Olivia Thompson',
    role: 'Engineering Director',
    location: 'Australia',
    quote: 'The predictive maintenance and smart energy analytics platform improved operational efficiency and infrastructure reliability. TECH6SENSE AI demonstrated exceptional technical capabilities.',
    accent: '#1746D2',
  },
  {
    id: 11,
    suit: 'â™¦',
    suitColor: 'text-[#00A86B]',
    tagline: 'Hong Kong | Telecommunications',
    flag: null,
    title: 'Intelligent Network Monitoring & Issue Detection',
    client: 'Kevin Wong',
    role: 'CTO',
    location: 'Hong Kong',
    quote: 'TECH6SENSE AI developed an intelligent network monitoring platform that improved service reliability and automated issue detection. Their AI expertise is truly impressive.',
    accent: '#00A86B',
  },
  {
    id: 12,
    suit: 'â™£',
    suitColor: 'text-[#D4AF37]',
    tagline: 'European Union | Automotive & Mobility',
    flag: flagEu,
    title: 'Manufacturing Analytics & Predictive Operations',
    client: 'Lukas Schneider',
    role: 'Innovation Director',
    location: 'Germany',
    quote: 'Their AI-driven manufacturing analytics and predictive maintenance platform accelerated our digital transformation journey. We highly recommend TECH6SENSE AI for enterprise AI initiatives.',
    accent: '#D4AF37',
  },
  {
    id: 13,
    suit: 'â™ ',
    suitColor: 'text-[#1746D2]',
    tagline: 'Singapore | Pharmaceuticals & Biotechnology',
    flag: flagSgp,
    title: 'AI Research Automation & Lab Intelligence',
    client: 'Dr. Wei Tan',
    role: 'Head of Innovation',
    location: 'Singapore',
    quote: 'TECH6SENSE AI successfully implemented AI-powered research automation and laboratory intelligence solutions that significantly improved our research productivity.',
    accent: '#1746D2',
  },
  {
    id: 14,
    suit: 'â™¥',
    suitColor: 'text-[#00A86B]',
    tagline: 'UAE | Travel, Tourism & Hospitality',
    flag: flagUae,
    title: 'AI Concierge & Multilingual Guest Assistant',
    client: 'Fatima Al Nuaimi',
    role: 'COO',
    location: 'UAE',
    quote: 'Our AI concierge platform and multilingual customer assistant enhanced guest experiences while streamlining hotel operations. TECH6SENSE AI delivered exceptional results.',
    accent: '#00A86B',
  },
  {
    id: 15,
    suit: 'â™¦',
    suitColor: 'text-[#D4AF37]',
    tagline: 'United Kingdom | Media, Entertainment & Marketing',
    flag: flagUk,
    title: 'Generative AI Content & Media Studio',
    client: 'Emma Roberts',
    role: 'Creative Director',
    location: 'UK',
    quote: 'Generative AI solutions developed by TECH6SENSE AI revolutionized our content production workflow and dramatically improved creative productivity.',
    accent: '#D4AF37',
  },
  {
    id: 16,
    suit: 'â™£',
    suitColor: 'text-[#1746D2]',
    tagline: 'Canada | Legal Services',
    flag: flagCan,
    title: 'AI Legal Research Assistant & Document Review',
    client: 'David Morgan',
    role: 'Managing Partner',
    location: 'Canada',
    quote: 'The AI legal research assistant reduced document review time and improved accuracy across our legal operations. TECH6SENSE AI consistently delivered outstanding work.',
    accent: '#1746D2',
  },
  {
    id: 17,
    suit: 'â™ ',
    suitColor: 'text-[#00A86B]',
    tagline: 'Singapore | Human Resources & Talent Management',
    flag: flagSgp,
    title: 'AI Recruitment & Talent Matching Platform',
    client: 'Grace Lim',
    role: 'HR Director',
    location: 'Singapore',
    quote: 'The AI recruitment platform accelerated hiring, improved candidate matching, and automated repetitive HR tasks. TECH6SENSE AI became a trusted strategic technology partner.',
    accent: '#00A86B',
  },
  {
    id: 18,
    suit: 'â™¥',
    suitColor: 'text-[#D4AF37]',
    tagline: 'USA | Cybersecurity',
    flag: flagUsa,
    title: 'AI Threat Detection & Incident Response',
    client: 'Christopher Evans',
    role: 'Chief Information Security Officer',
    location: 'USA',
    quote: 'TECH6SENSE AI delivered an AI-powered cybersecurity platform that enhanced threat detection, automated incident response, and strengthened our security operations.',
    accent: '#D4AF37',
  }
];

export default function InnovationStories() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % STORIES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  }, []);

  // Auto-slide every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused || !isVisible) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible, isPaused, handleNext]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full py-12 md:py-16 overflow-hidden bg-[#FAFAFA] border-t border-slate-200/80"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-100/50 via-emerald-100/30 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        
        {/* Eyebrow */}
        <div 
          className={`flex items-center justify-center gap-3 mb-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="h-[2px] w-10 bg-gradient-to-r from-[#1746D2] to-[#00A86B]" />
          <span className="font-mono text-xs font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
            Client Testimonial
          </span>
          <span className="h-[2px] w-10 bg-gradient-to-r from-[#00A86B] to-[#1746D2]" />
        </div>

        <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.12] font-extrabold text-slate-900 tracking-tight mb-16 text-center">
          Hear from those who are part of the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] to-[#00A86B]">
            Global Ecosystem
          </span>
        </h2>

        {/* 3D COVERFLOW SLIDER */}
        <div 
          className="relative w-full max-w-6xl mx-auto min-h-[400px] md:min-h-[460px] flex items-center justify-center py-6 perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Container */}
          <div className="relative w-full max-w-[380px] md:max-w-[420px] h-[340px] md:h-[380px] mx-auto transform-style-3d">
            {STORIES.map((story, index) => {
              // Calculate offset relative to active index (-2, -1, 0, 1, 2)
              let offset = index - currentIndex;
              const total = STORIES.length;

              // Handle wrap-around math for smooth infinite loop
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisibleCard = Math.abs(offset) <= 3; // Render up to 7 cards to show the full curve

              if (!isVisibleCard) return null;

              // 3D curved carousel math
              let cardTransform, cardOpacity;
              if (isMobile) {
                const translateX = offset * 105;
                const scale = isActive ? 1 : 0.82;
                cardOpacity = isActive ? 1 : 0.35;
                cardTransform = `translateX(${translateX}px) scale(${scale})`;
              } else {
                // Desktop: Curved arch carousel in Z-space
                const translateX = offset * 175; 
                const translateY = Math.abs(offset) * 20; 
                const translateZ = Math.abs(offset) * -80; 
                const rotateY = offset * -16; // Gentler rotation so corner cards remain readable
                const rotateZ = offset * 1.5; 
                const scale = isActive ? 1 : 0.9 - Math.abs(offset) * 0.07;
                cardOpacity = isActive ? 1 : Math.max(0.35, 0.75 - Math.abs(offset) * 0.13); // Higher minimum visibility
                cardTransform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
              }
              const zIndex = 30 - Math.abs(offset) * 5;

              // Set all cards to use their respective brand solid color
              const cardBg = 'border-transparent text-white';
              const textColor = 'text-white';
              const quoteColor = 'text-white/95';
              const roleColor = 'text-white/80';
              const taglineColor = 'text-white/90';

              return (
                <div
                  key={story.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`absolute top-0 left-0 w-full h-full rounded-2xl p-7 md:p-9 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer select-none overflow-hidden flex flex-col justify-center ${cardBg}`}
                  style={{
                    backgroundColor: story.accent,
                    transform: cardTransform,
                    opacity: cardOpacity,
                    zIndex: zIndex,
                    transformOrigin: 'center center',
                    boxShadow: isActive 
                      ? `0 20px 40px -10px ${story.accent}70` 
                      : `0 10px 25px -10px rgba(0,0,0,0.15)`,
                  }}
                >
                  {/* Tagline & Flag */}
                  <div className="flex items-center gap-2.5 mb-5">
                    {story.flag && (
                      <img src={story.flag} alt={`${story.location} flag`} className="w-5 h-auto rounded-[2px] shadow-sm" />
                    )}
                    <div className={`font-mono text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-wider ${taglineColor}`}>
                      {story.tagline}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className={`font-body text-[0.95rem] md:text-[1.05rem] ${quoteColor} font-medium leading-relaxed mb-8`}>
                    "{story.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    {/* Avatar Bubble */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0 ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/90'}`}>
                      {story.client.charAt(0)}
                    </div>
                    
                    <div>
                      <div className={`font-display text-[0.95rem] font-bold ${textColor}`}>
                        {story.client}
                      </div>
                      <div className={`font-body text-[0.8rem] ${roleColor}`}>
                        {story.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200/90 bg-white hover:bg-[#1746D2] text-slate-700 hover:text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 max-w-[320px] overflow-hidden py-2 px-1">
            {STORIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                style={{ backgroundColor: currentIndex === idx ? STORIES[currentIndex].accent : undefined }}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200/90 bg-white hover:bg-[#1746D2] text-slate-700 hover:text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

