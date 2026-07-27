import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { servicesContent } from '../data/servicesContent';

// Custom card component for features with DOM-based mouse spotlight tracking
function FeatureCard({ title, desc, accent, accentRgb }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative p-8 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic Cursor Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 160px at var(--mx, -99px) var(--my, -99px), rgba(${accentRgb}, 0.08), transparent 70%)`
        }}
      />
      
      {/* Dynamic Colored Border on Hover */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl border border-transparent transition-colors duration-500"
        style={{
          borderColor: `rgba(${accentRgb}, 0.2)`
        }}
      />

      <div className="relative z-10">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 border border-slate-100"
          style={{ background: `rgba(${accentRgb}, 0.1)`, color: accent }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        </div>
        <h4 className="font-display text-lg font-bold text-slate-900 mb-3">
          {title}
        </h4>
        <p className="font-body text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const techSectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Lookup content
  const service = servicesContent[serviceId];

  // If service does not exist in content registry, show custom 404 state
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col font-body bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center pt-32 px-6 pb-20 text-center relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-lg">
            <span className="font-mono text-xs font-bold text-fuchsia-400 uppercase tracking-[0.25em] mb-4 block">
              ERROR CODE // 404_PAGE_NOT_FOUND
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              Solution File Not Found
            </h1>
            <p className="text-slate-600 mb-10 leading-relaxed">
              We couldn't retrieve the intelligent solution blueprint for ID <code className="text-violet-700 font-mono bg-violet-100 px-1.5 py-0.5 rounded">"{serviceId}"</code>. It may have been relocated or updated.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/ai-agents"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-body text-xs font-bold tracking-widest text-white shadow-md hover:scale-[1.03] transition-all"
              >
                Go to Ecosystem
              </Link>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-body text-xs font-bold tracking-widest text-slate-600 hover:border-violet-300 hover:text-violet-700 transition-all shadow-sm"
              >
                Return Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-body bg-slate-50 text-slate-900 overflow-hidden">
      <Header />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating Ambient Glowing blobs */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, rgba(${service.accentRgb}, 0.08) 0%, transparent 70%)` }}
      />
      <div 
        className="absolute top-1/3 left-[-15%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, rgba(217, 70, 239, 0.06) 0%, transparent 70%)` }}
      />

      <main className="flex-grow pt-28 md:pt-36">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-[85rem] px-6 pb-20 md:pb-28 relative z-10 border-b border-violet-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side info */}
            <div className={`col-span-1 lg:col-span-7 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Breadcrumbs Navigation */}
              <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-body">
                <Link to="/" className="hover:text-violet-600 transition-colors">Home</Link>
                <span className="text-slate-600 font-normal">/</span>
                <Link to="/ai-agents" className="hover:text-violet-600 transition-colors">Intelligent Solutions</Link>
                <span className="text-slate-600 font-normal">/</span>
                <span className="text-slate-900 font-bold">{service.title}</span>
              </nav>

              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-200 bg-white shadow-sm mb-6 font-mono text-[0.65rem] font-bold tracking-widest uppercase"
                style={{ color: service.accent }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {service.category}
              </div>
              
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.1] font-extrabold tracking-tight mb-6">
                {service.title}
              </h1>
              
              <p className="font-display text-lg sm:text-xl text-slate-700 font-semibold mb-6 max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
              
              <p className="font-body text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to={`/lets-connect?inquiry=${encodeURIComponent(service.title)}`}
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-body text-xs font-bold tracking-widest text-white transition-all hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(124,58,237,0.3)] active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Solution Deploy
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </Link>
                <button
                  onClick={() => techSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-body text-xs font-bold tracking-widest text-slate-600 hover:border-violet-300 hover:text-violet-700 transition-all shadow-sm"
                >
                  Explore Tech Stack
                </button>
              </div>
            </div>

            {/* Right side metrics visual panel */}
            <div className={`col-span-1 lg:col-span-5 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[90px] pointer-events-none"
                  style={{ background: `radial-gradient(circle, rgba(${service.accentRgb}, 0.15) 0%, transparent 70%)` }}
                />
                
                <h3 className="font-display text-sm font-mono font-bold tracking-wider text-slate-500 mb-8 border-b border-slate-100 pb-4">
                  OPERATIONAL METRICS EXPECTATION
                </h3>

                <div className="flex flex-col gap-8">
                  {service.metrics.map((met, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[0.65rem] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        {met.label}
                      </span>
                      <span 
                        className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(to right, ${service.accent}, #d946ef)` }}
                      >
                        {met.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES BENTO GRID SECTION */}
        <section className="mx-auto max-w-[85rem] px-6 py-20 md:py-28 relative z-10 border-b border-violet-500/10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-3 block">
              CAPABILITIES & WORKFLOWS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              Operational Framework Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, idx) => (
              <FeatureCard 
                key={idx}
                title={feat.title}
                desc={feat.desc}
                accent={service.accent}
                accentRgb={service.accentRgb}
              />
            ))}
          </div>
        </section>

        {/* TECH STACKS SECTION */}
        <section ref={techSectionRef} className="mx-auto max-w-[85rem] px-6 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="col-span-1 lg:col-span-6">
              <span className="font-mono text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-3 block">
                INTEGRATION STACK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Technical Stack & Deployment Standards
              </h2>
              <p className="font-body text-slate-400 leading-relaxed mb-8">
                All solutions are engineered adhering to modern architectural practices. We deploy using containerized orchestrations and scalable cloud APIs, guaranteeing secure database sync structures, telemetry pipelines, and low inference latency.
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="font-mono text-xs font-bold px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-violet-700 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-1 lg:col-span-6">
              <div className="border border-slate-200 bg-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-full blur-2xl" />
                <h4 className="font-display text-base font-bold text-slate-900 mb-4">Enterprise Compliance & Security</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                  Our integration frameworks support GDPR, HIPAA, and custom auditing regulations. We deploy prompt injection firewalls and secure weight encryptions to block vulnerabilities.
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Secure Sandbox & Production Deployments
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM FINAL CTA */}
        <section className="mx-auto max-w-[85rem] px-6 py-16 md:py-24 relative z-10">
          <div className="relative rounded-[2.5rem] border border-violet-500/20 bg-gradient-to-r from-violet-900 to-indigo-950 p-10 md:p-16 text-center shadow-lg overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[130px] pointer-events-none" />
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 relative z-10">
              Ready to Integrate {service.title}?
            </h2>
            
            <p className="text-sm md:text-base text-violet-200 leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
              Connect with our engineering leads to schedule a complete architectural evaluation. We will map out data pipelines, model configurations, and compute costs built around your workspace operational scopes.
            </p>
            
            <Link
              to={`/lets-connect?inquiry=${encodeURIComponent(service.title)}`}
              className="relative z-10 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-8 py-4 font-body text-xs font-bold tracking-widest text-violet-800 transition-all hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
            >
              Schedule Engineering Audit
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
