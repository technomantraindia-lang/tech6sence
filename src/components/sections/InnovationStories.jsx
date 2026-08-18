import React, { useState, useEffect, useRef, useCallback } from 'react';

const STORIES = [
  {
    id: 1,
    suit: '♠',
    suitColor: 'text-[#1746D2]',
    tagline: 'Healthcare & Life Sciences — USA',
    title: 'AI Clinical Intelligence Platform',
    client: 'Dr. Michael Anderson',
    role: 'Chief Medical Officer',
    location: 'USA',
    quote: 'TECH6SENSE AI successfully delivered our AI-powered clinical intelligence platform that streamlined patient data analysis and automated medical documentation. Their team’s expertise in Generative AI and healthcare workflows helped us significantly improve operational efficiency while maintaining enterprise-grade security. They are a trusted long-term technology partner.',
    accent: '#1746D2',
  },
  {
    id: 2,
    suit: '♥',
    suitColor: 'text-[#00A86B]',
    tagline: 'Banking & Financial Services — USA',
    title: 'AI Banking Copilot & Compliance Automation',
    client: 'Jennifer Collins',
    role: 'VP – Digital Transformation',
    location: 'USA',
    quote: 'The AI Banking Copilot developed by TECH6SENSE AI transformed our customer service, automated compliance workflows, and accelerated financial document processing. Their technical excellence and project management exceeded every expectation.',
    accent: '#00A86B',
  },
  {
    id: 3,
    suit: '♦',
    suitColor: 'text-[#D4AF37]',
    tagline: 'Manufacturing — United Kingdom',
    title: 'Predictive Maintenance & AI Quality Inspection',
    client: 'James Richardson',
    role: 'Operations Director',
    location: 'UK',
    quote: 'TECH6SENSE AI built a predictive maintenance and AI quality inspection platform that dramatically improved production efficiency while reducing equipment downtime. Their engineers demonstrated exceptional professionalism throughout the engagement.',
    accent: '#D4AF37',
  },
  {
    id: 4,
    suit: '♣',
    suitColor: 'text-[#1746D2]',
    tagline: 'Retail & E-Commerce — Canada',
    title: 'AI Recommendation Engine & Customer Analytics',
    client: 'Sarah Mitchell',
    role: 'Chief Digital Officer',
    location: 'Canada',
    quote: 'Our AI recommendation engine and intelligent customer analytics platform delivered measurable improvements in customer engagement and sales performance. TECH6SENSE AI provided outstanding technical expertise from planning through deployment.',
    accent: '#1746D2',
  },
  {
    id: 5,
    suit: '♠',
    suitColor: 'text-[#00A86B]',
    tagline: 'Logistics & Supply Chain — Australia',
    title: 'AI Logistics Optimization & Fleet Analytics',
    client: 'Daniel Carter',
    role: 'Head of Supply Chain',
    location: 'Australia',
    quote: 'The AI-powered logistics optimization platform significantly improved fleet efficiency, delivery planning, and warehouse operations. TECH6SENSE AI delivered a scalable enterprise solution that created immediate business value.',
    accent: '#00A86B',
  },
  {
    id: 6,
    suit: '♥',
    suitColor: 'text-[#D4AF37]',
    tagline: 'Education & EdTech — India',
    title: 'Personalized AI Tutors & Learning Analytics',
    client: 'Ronak Shah',
    role: 'Founder & CEO',
    location: 'India',
    quote: 'TECH6SENSE AI transformed our digital learning platform with personalized AI tutors, intelligent assessments, and automated content generation. Their innovation and commitment to quality have been outstanding.',
    accent: '#D4AF37',
  },
  {
    id: 7,
    suit: '♦',
    suitColor: 'text-[#1746D2]',
    tagline: 'Insurance — USA',
    title: 'AI Claims Automation & Risk Analytics',
    client: 'Robert Williams',
    role: 'Chief Technology Officer',
    location: 'USA',
    quote: 'Our AI claims automation platform reduced processing times and improved customer satisfaction. TECH6SENSE AI combined deep AI expertise with excellent communication and execution.',
    accent: '#1746D2',
  },
  {
    id: 8,
    suit: '♣',
    suitColor: 'text-[#00A86B]',
    tagline: 'Real Estate & Construction — UAE',
    title: 'Intelligent Property Management & Analytics',
    client: 'Ahmed Al Mansoori',
    role: 'Managing Director',
    location: 'UAE',
    quote: 'The intelligent property management solution modernized our operations through AI-driven analytics and automation. TECH6SENSE AI delivered a world-class enterprise platform tailored to our business.',
    accent: '#00A86B',
  },
  {
    id: 9,
    suit: '♠',
    suitColor: 'text-[#D4AF37]',
    tagline: 'Agriculture — India',
    title: 'AI Agriculture & Crop Monitoring Platform',
    client: 'Parag Sharma',
    role: 'Director',
    location: 'India',
    quote: 'The AI agriculture platform provided actionable insights for crop monitoring, irrigation planning, and predictive analytics. TECH6SENSE AI delivered an innovative solution that exceeded our expectations.',
    accent: '#D4AF37',
  },
  {
    id: 10,
    suit: '♥',
    suitColor: 'text-[#1746D2]',
    tagline: 'Energy & Utilities — Australia',
    title: 'Smart Energy & Predictive Maintenance Platform',
    client: 'Olivia Thompson',
    role: 'Engineering Director',
    location: 'Australia',
    quote: 'The predictive maintenance and smart energy analytics platform improved operational efficiency and infrastructure reliability. TECH6SENSE AI demonstrated exceptional technical capabilities.',
    accent: '#1746D2',
  },
  {
    id: 11,
    suit: '♦',
    suitColor: 'text-[#00A86B]',
    tagline: 'Telecommunications — Hong Kong',
    title: 'Intelligent Network Monitoring & Issue Detection',
    client: 'Kevin Wong',
    role: 'CTO',
    location: 'Hong Kong',
    quote: 'TECH6SENSE AI developed an intelligent network monitoring platform that improved service reliability and automated issue detection. Their AI expertise is truly impressive.',
    accent: '#00A86B',
  },
  {
    id: 12,
    suit: '♣',
    suitColor: 'text-[#D4AF37]',
    tagline: 'Automotive & Mobility — Germany (EU)',
    title: 'Manufacturing Analytics & Predictive Operations',
    client: 'Lukas Schneider',
    role: 'Innovation Director',
    location: 'Germany',
    quote: 'Their AI-driven manufacturing analytics and predictive maintenance platform accelerated our digital transformation journey. We highly recommend TECH6SENSE AI for enterprise AI initiatives.',
    accent: '#D4AF37',
  },
  {
    id: 13,
    suit: '♠',
    suitColor: 'text-[#1746D2]',
    tagline: 'Pharma & Biotechnology — Singapore',
    title: 'AI Research Automation & Lab Intelligence',
    client: 'Dr. Wei Tan',
    role: 'Head of Innovation',
    location: 'Singapore',
    quote: 'TECH6SENSE AI successfully implemented AI-powered research automation and laboratory intelligence solutions that significantly improved our research productivity.',
    accent: '#1746D2',
  },
  {
    id: 14,
    suit: '♥',
    suitColor: 'text-[#00A86B]',
    tagline: 'Travel & Hospitality — UAE',
    title: 'AI Concierge & Multilingual Guest Assistant',
    client: 'Fatima Al Nuaimi',
    role: 'COO',
    location: 'UAE',
    quote: 'Our AI concierge platform and multilingual customer assistant enhanced guest experiences while streamlining hotel operations. TECH6SENSE AI delivered exceptional results.',
    accent: '#00A86B',
  },
  {
    id: 15,
    suit: '♦',
    suitColor: 'text-[#D4AF37]',
    tagline: 'Media & Marketing — United Kingdom',
    title: 'Generative AI Content & Media Studio',
    client: 'Emma Roberts',
    role: 'Creative Director',
    location: 'UK',
    quote: 'Generative AI solutions developed by TECH6SENSE AI revolutionized our content production workflow and dramatically improved creative productivity.',
    accent: '#D4AF37',
  },
  {
    id: 16,
    suit: '♣',
    suitColor: 'text-[#1746D2]',
    tagline: 'Legal Services — Canada',
    title: 'AI Legal Research Assistant & Document Review',
    client: 'David Morgan',
    role: 'Managing Partner',
    location: 'Canada',
    quote: 'The AI legal research assistant reduced document review time and improved accuracy across our legal operations. TECH6SENSE AI consistently delivered outstanding work.',
    accent: '#1746D2',
  },
  {
    id: 17,
    suit: '♠',
    suitColor: 'text-[#00A86B]',
    tagline: 'Human Resources & Talent — Singapore',
    title: 'AI Recruitment & Talent Matching Platform',
    client: 'Grace Lim',
    role: 'HR Director',
    location: 'Singapore',
    quote: 'The AI recruitment platform accelerated hiring, improved candidate matching, and automated repetitive HR tasks. TECH6SENSE AI became a trusted strategic technology partner.',
    accent: '#00A86B',
  },
  {
    id: 18,
    suit: '♥',
    suitColor: 'text-[#D4AF37]',
    tagline: 'Cybersecurity — USA',
    title: 'AI Threat Detection & Incident Response',
    client: 'Christopher Evans',
    role: 'Chief Information Security Officer',
    location: 'USA',
    quote: 'TECH6SENSE AI delivered an AI-powered cybersecurity platform that enhanced threat detection, automated incident response, and strengthened our security operations.',
    accent: '#D4AF37',
  },
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
      className="relative w-full py-20 md:py-28 overflow-hidden bg-[#FAFAFA] border-t border-slate-200/80"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-blue-100/50 via-emerald-100/30 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Header (Centered) */}
        <div 
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#1746D2] to-[#00A86B]" />
            <span className="font-mono text-xs font-extrabold tracking-[0.25em] uppercase text-[#1746D2]">
              CLIENT TESTIMONIALS
            </span>
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#00A86B] to-[#1746D2]" />
          </div>

          <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.12] font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted by Leaders Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1746D2] via-[#00A86B] to-[#1746D2]">
              Global Markets.
            </span>
          </h2>

          <p className="font-body text-[0.98rem] md:text-[1.05rem] text-slate-600 font-medium leading-relaxed max-w-2xl">
            Real enterprise clients, real business results, and AI engineering excellence delivered worldwide.
          </p>
        </div>

        {/* 3D PLAYING CARD HAND-FAN SLIDER */}
        <div 
          className="relative w-full max-w-5xl mx-auto min-h-[460px] md:min-h-[500px] flex items-center justify-center py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Container */}
          <div className="relative w-full max-w-[580px] h-[400px] md:h-[440px] flex items-center justify-center">
            {STORIES.map((story, index) => {
              // Calculate offset relative to active index (-2, -1, 0, 1, 2)
              let offset = index - currentIndex;
              const total = STORIES.length;

              // Handle wrap-around math for smooth infinite hand-fan loop
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisibleCard = Math.abs(offset) <= 2;

              if (!isVisibleCard) return null;

              // Mobile: cards come from top (translateY). Desktop: fan from sides (translateX + rotate)
              let cardTransform, cardOpacity;
              if (isMobile) {
                const translateY = offset * -60;
                const scale = isActive ? 1 : 0.92 - Math.abs(offset) * 0.04;
                cardOpacity = isActive ? 1 : 0.35 - Math.abs(offset) * 0.08;
                cardTransform = `translateY(${translateY}px) scale(${scale})`;
              } else {
                const translateX = offset * 110;
                const rotate = offset * 8;
                const scale = isActive ? 1.05 : 0.9 - Math.abs(offset) * 0.05;
                cardOpacity = isActive ? 1 : 0.42 - Math.abs(offset) * 0.08;
                cardTransform = `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`;
              }
              const zIndex = 30 - Math.abs(offset) * 5;

              return (
                <div
                  key={story.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`absolute top-0 w-full rounded-[2.2rem] p-7 md:p-9 border transition-all duration-700 cubic-bezier(0.16,1,0.3,1) cursor-pointer select-none bg-white ${
                    isActive
                      ? 'border-[#1746D2]/40 shadow-[6px_6px_0px_0px_rgba(23,70,210,0.4)] ring-2 ring-[#1746D2]/20'
                      : 'border-slate-200/80 shadow-[4px_4px_0px_0px_rgba(23,70,210,0.15)] hover:opacity-75'
                  }`}
                  style={{
                    transform: cardTransform,
                    opacity: cardOpacity,
                    zIndex: zIndex,
                    transformOrigin: isMobile ? 'top center' : 'bottom center',
                    filter: isActive ? 'none' : 'brightness(0.94)',
                  }}
                >
                  {/* Playing Card Top Bar: Rank & Suit */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xl font-extrabold ${story.suitColor}`}>
                        {story.suit}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                        CARD {story.id.toString().padStart(2, '0')} / {STORIES.length.toString().padStart(2, '0')}
                      </span>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-[0.72rem] font-extrabold uppercase tracking-wider">
                      {story.location}
                    </div>
                  </div>

                  {/* Category Tagline */}
                  <div className="font-mono text-[0.7rem] md:text-xs font-bold uppercase tracking-wider text-[#1746D2] mb-2">
                    {story.tagline}
                  </div>

                  {/* Story Title */}
                  <h3 className="font-display text-[1.15rem] md:text-[1.35rem] font-bold text-slate-900 leading-snug mb-4">
                    {story.title}
                  </h3>

                  {/* Quote */}
                  <blockquote className="font-body text-[0.86rem] md:text-[0.92rem] text-slate-600 italic font-medium leading-relaxed mb-6 line-clamp-4">
                    "{story.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div>
                      <div className="font-display text-sm font-extrabold text-slate-900">
                        {story.client}
                      </div>
                      <div className="font-body text-xs text-slate-500 font-semibold">
                        {story.role}
                      </div>
                    </div>

                    {/* Bottom Suit Emblem */}
                    <div className={`font-mono text-2xl font-black ${story.suitColor} opacity-30`}>
                      {story.suit}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-[#1746D2] hover:border-[#1746D2]/40 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 max-w-[280px] overflow-x-auto py-2 px-3 custom-scrollbar">
            {STORIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-gradient-to-r from-[#1746D2] to-[#00A86B]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-[#1746D2] hover:border-[#1746D2]/40 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

