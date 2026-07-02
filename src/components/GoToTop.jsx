import React, { useState, useEffect } from 'react';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/20 bg-slate-950/60 text-white backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all duration-300 outline-none hover:-translate-y-1 hover:border-violet-500/40 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-110 active:scale-95 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'
      }`}
    >
      <svg
        className="h-5 w-5 transition-transform duration-300 hover:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
