import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import heroBg from '../assets/abouthero2.png';
import founderImg from '../assets/founder.png';

// A custom reusable card with a spotlight effect and flat hard shadows
function EcosystemCard({ title, subtitle, items, isEven }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  const cardBg = isEven ? "bg-blue-50/45 hover:bg-blue-50/75" : "bg-emerald-50/35 hover:bg-emerald-50/60";
  const shadowStyle = isEven ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)]" : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)]";
  const glowColor = isEven ? "rgba(37, 99, 235, 0.07)" : "rgba(16, 185, 129, 0.07)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative p-8 rounded-3xl transition-all duration-300 border border-slate-100 flex flex-col justify-between overflow-hidden shadow-sm ${cardBg} ${shadowStyle}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 160px at var(--mx, -99px) var(--my, -99px), ${glowColor}, transparent 70%)`
        }}
      />
      
      <div className="relative z-10">
        <h4 className="font-display text-lg sm:text-xl font-black text-slate-900 mb-2">
          {title}
        </h4>
        <p className="font-body text-sm text-slate-500 font-semibold mb-6">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-slate-200/60 bg-white text-xs text-slate-700 font-bold shadow-sm"
            >
              <span className={`w-1 h-1 rounded-full ${isEven ? 'bg-blue-500' : 'bg-emerald-500'}`} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Stepper workflow step card
function WorkflowStep({ stepNum, stepTitle, stepDesc, idx }) {
  const isEven = idx % 2 === 0;
  const cardBg = isEven ? "bg-blue-50/45 hover:bg-blue-50/75" : "bg-emerald-50/35 hover:bg-emerald-50/60";
  const shadowStyle = isEven ? "hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)]" : "hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)]";

  return (
    <div className="relative group">
      {/* Pulsing timeline badge centered on rule line */}
      <div className="absolute -left-10 sm:-left-14 top-0 flex items-center justify-center w-8 h-8">
        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-display font-black text-xs flex items-center justify-center shadow-md">
          {stepNum}
        </span>
      </div>

      <div className={`p-8 rounded-3xl transition-all duration-300 border border-slate-100 shadow-sm ${cardBg} ${shadowStyle}`}>
        <h3 className="font-display text-base sm:text-lg font-black text-slate-900 mb-2">
          {stepTitle}
        </h3>
        <p className="font-body text-sm text-slate-600 leading-relaxed font-medium">
          {stepDesc}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body bg-white text-slate-800 overflow-hidden">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full bg-[#0a031d] border-b border-slate-200/60 pt-36 md:pt-44 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-85">
          <img 
            src={heroBg} 
            alt="Earth from space" 
            className="w-full h-full object-cover object-top"
          />
          {/* Transition overlay to blend with dark header at top */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a031d]/40 to-[#0a031d]/85" />
        </div>

        {/* Ambient glow backlights */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none bg-blue-600/[0.15] z-10" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-emerald-500/[0.1] z-10" />

        <div className="mx-auto max-w-[1400px] px-6 relative z-10 w-full">
          {/* Tag Pills */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-[0.65rem] font-bold text-blue-300 tracking-wider uppercase">
              <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
              Global AI Innovation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-[0.65rem] font-bold text-emerald-300 tracking-wider uppercase">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              Enterprise Tech
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-[0.65rem] font-bold text-blue-300 tracking-wider uppercase">
              <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
              Deep-Tech Excellence
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Column */}
            <div className={`lg:col-span-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.1] font-black text-white tracking-tight mb-4" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                Engineering the Future of Intelligence
              </h1>
              
              <p className="font-display text-base sm:text-lg text-emerald-400 font-extrabold mb-6 max-w-3xl leading-relaxed" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
                Empowering the World’s Most Ambitious Enterprises with Next-Generation AI & Deep Tech.
              </p>

              <div className="font-body text-white/95 text-[0.95rem] leading-[1.8] font-semibold space-y-4 mb-10 max-w-4xl" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
                <p>
                  TECH6SENSE AI is a global Artificial Intelligence, Full-Stack Technology, and Deep-Tech Innovation company. Founded by <strong className="text-white font-bold">Chintan Patel</strong>, we operate at the intersection of advanced research, software engineering, and intelligent automation to transform ambitious ideas into scalable enterprise platforms and AI-powered business ecosystems.
                </p>
                <p>
                  We partner with startups, enterprises, governments, and research institutions worldwide, combining expertise in AI, cloud, IoT, and cybersecurity to solve complex challenges and deliver measurable business value.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-4 font-body text-xs font-bold tracking-widest text-white shadow-md hover:scale-[1.02] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all"
                >
                  Connect with Global Strategy Team
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Hero Column - Global Reach Blueprint Card */}
            <div className={`lg:col-span-4 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                
                <h3 className="font-display text-xs font-mono font-bold tracking-wider text-slate-400 mb-6 border-b border-white/10 pb-3">
                  GLOBAL FOOTPRINT
                </h3>

                <div className="space-y-6">
                  <div>
                    <span className="text-[0.6rem] font-mono font-bold text-slate-450 uppercase tracking-widest mb-1.5 block">
                      The Americas
                    </span>
                    <span className="font-display text-sm font-bold text-white">
                      USA & Canada
                    </span>
                  </div>

                  <div>
                    <span className="text-[0.6rem] font-mono font-bold text-slate-450 uppercase tracking-widest mb-1.5 block">
                      Europe
                    </span>
                    <span className="font-display text-sm font-bold text-white">
                      United Kingdom & European Union
                    </span>
                  </div>

                  <div>
                    <span className="text-[0.6rem] font-mono font-bold text-slate-450 uppercase tracking-widest mb-1.5 block">
                      Asia-Pacific
                    </span>
                    <span className="font-display text-sm font-bold text-white">
                      Australia, Singapore, Hong Kong, India
                    </span>
                  </div>

                  <div>
                    <span className="text-[0.6rem] font-mono font-bold text-slate-450 uppercase tracking-widest mb-1.5 block">
                      Middle East
                    </span>
                    <span className="font-display text-sm font-bold text-white">
                      United Arab Emirates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <main className="flex-grow bg-white relative z-10">
        
        {/* ── 1. MISSION & VISION SECTION ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-blue-50/45 hover:bg-blue-50/75 hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 border border-slate-100/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <h2 className="font-display text-2xl font-black text-blue-955 tracking-tight whitespace-nowrap">
                    Our Vision
                  </h2>
                </div>
                <p className="font-body text-[0.95rem] text-slate-700 leading-[1.8] font-medium">
                  To become one of the world's most trusted Artificial Intelligence and Deep Technology companies, empowering every organization, entrepreneur, and nation to unlock human potential through intelligent technology.
                </p>
                <p className="font-body text-[0.95rem] text-slate-700 leading-[1.8] font-medium mt-4">
                  We envision a future where AI is not merely software—it becomes an intelligent partner that enhances decision-making, automates complexity, accelerates innovation, and creates sustainable competitive advantage for businesses worldwide.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-emerald-50/35 hover:bg-emerald-50/60 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)] transition-all duration-300 border border-slate-100/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <h2 className="font-display text-2xl font-black text-blue-955 tracking-tight whitespace-nowrap">
                    Our Mission
                  </h2>
                </div>
                <p className="font-body text-[0.95rem] text-slate-700 leading-[1.8] font-medium mb-6">
                  Our mission is to build globally competitive AI products, enterprise software, and intelligent business ecosystems that transform industries and create lasting economic impact.
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    "Developing cutting-edge AI solutions that solve real business problems.",
                    "Accelerating digital transformation through intelligent automation.",
                    "Empowering founders to build global technology companies.",
                    "Creating enterprise-grade software with exceptional scalability.",
                    "Advancing Deep-Tech innovation through research and engineering excellence.",
                    "Delivering measurable ROI through practical AI implementation.",
                    "Building long-term partnerships based on trust and execution excellence."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[0.875rem] text-slate-750 font-semibold leading-relaxed">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. THE TECH6SENSE ECOSYSTEM (5 Pillars) ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="flex items-center gap-6 mb-12 w-full">
            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight whitespace-nowrap">
              The TECH6SENSE Ecosystem
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EcosystemCard
              title="1. AI & Enterprise Technology"
              subtitle="Enterprise-grade AI systems built to automate operations and drive strategic decisions."
              items={["Custom AI", "Generative AI", "Agentic AI", "AI Agents", "Enterprise AI", "AI Copilots", "NLP", "Computer Vision", "Predictive Analytics", "Machine Learning", "RAG", "MLOps & AIOps", "AI Governance", "AI Security"]}
              isEven={true}
            />

            <EcosystemCard
              title="2. Full-Stack Technology Services"
              subtitle="Secure, scalable, and future-ready digital platforms powering modern businesses."
              items={["Enterprise Software", "Web Applications", "Mobile Applications", "SaaS Platforms", "Cloud Engineering", "API Development", "DevOps", "Data Engineering", "Business Intelligence", "Blockchain", "IoT", "RPA", "Cybersecurity", "UI/UX"]}
              isEven={false}
            />

            <EcosystemCard
              title="3. Deep-Tech Product Development"
              subtitle="We conceptualize, prototype, engineer, and commercialize next-generation physical products."
              items={["AI Wearables", "Smart Glasses", "Healthcare Devices", "AI Smart Devices", "IoT Hardware", "HMIs", "Edge AI Systems", "Robotics", "Smart Manufacturing", "Consumer Electronics"]}
              isEven={true}
            />

            <EcosystemCard
              title="4. Visionary Founders Ecosystem"
              subtitle="CTO services and client acquisition models built to scale early-stage startups."
              items={["CTO Services", "Company Formation", "Business Strategy", "Product Dev", "Tech Teams", "Branding", "Marketing", "International Client Acquisition", "Investment Readiness", "Business Scaling", "Expansion"]}
              isEven={false}
            />

            <EcosystemCard
              title="5. Business Brains Circle"
              subtitle="An exclusive private global circle connecting visionary founders, investors, and CXOs."
              items={["Global Networking", "Strategic Partnerships", "Investment Circle", "Private Events", "Knowledge Sharing", "AI Innovation Insights", "International Collaboration", "Leadership Dev"]}
              isEven={true}
            />

            {/* Who We Are Context Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <h4 className="font-display text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Who We Are
                </h4>
                <p className="font-body text-sm text-slate-650 leading-relaxed font-semibold mb-4">
                  TECH6SENSE AI is a borderless team of AI researchers, software architects, ML engineers, UX designers, data scientists, and innovation consultants united by a single purpose: to build technology that transforms businesses globally.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60">
                <span className="font-display text-xs font-mono font-bold text-blue-600 block uppercase tracking-widest">
                  GLOBAL INNOVATION GROUP
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHAT MAKES US DIFFERENT ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side explanation */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block">
                TECHNICAL DIFFERENTIATION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                What Makes TECH6SENSE AI Different
              </h2>
              <p className="font-body text-slate-650 text-sm sm:text-base leading-relaxed mb-6 font-semibold">
                Technology alone rarely creates transformation. True transformation happens when technology, business strategy, innovation, and execution work together. TECH6SENSE AI operates at this intersection.
              </p>
              <p className="font-body text-slate-650 text-sm sm:text-base leading-relaxed mb-8 font-semibold">
                This enables our clients to modernize operations, improve efficiency, unlock new revenue opportunities, reduce costs, and create intelligent organizations prepared for the future.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "Artificial Intelligence",
                  "Enterprise Software Engineering",
                  "Cloud Computing",
                  "Automation",
                  "Data Intelligence",
                  "Cybersecurity",
                  "Product Innovation",
                  "Business Strategy",
                  "Scalable Digital Infrastructure"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs font-bold px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-blue-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side strategic card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-blue-50/45 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              <h4 className="font-display text-xs font-bold text-blue-900 tracking-widest uppercase mb-4">
                Research & Innovation Focus
              </h4>
              <p className="font-body text-[0.875rem] text-slate-650 leading-relaxed font-semibold mb-4">
                We continuously invest in research and emerging technologies to keep our clients ahead of industry disruption.
              </p>
              <div className="flex flex-col gap-2 border-t border-slate-100/60 pt-4">
                {[
                  "Autonomous Systems & AI Agents",
                  "Multimodal AI & Computer Vision",
                  "Human-AI Collaborative Interfaces",
                  "Explainable & Responsible AI Architectures"
                ].map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {val}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. RESPONSIBLE AI (Ethical Development) ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="flex items-center gap-6 mb-12 w-full">
            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight whitespace-nowrap">
              Our Commitment to Responsible AI
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Fairness */}
            <div className="p-8 rounded-3xl bg-blue-50/45 hover:bg-blue-50/75 hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-blue-900 mb-3">
                  Fairness & Non-Discrimination
                </h3>
                <div className="space-y-2 text-sm text-slate-650 font-semibold">
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Regular bias testing in models</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Diverse training datasets</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Fairness metrics monitoring</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Active bias remediation</div>
                </div>
              </div>
            </div>

            {/* Card 2: Transparency */}
            <div className="p-8 rounded-3xl bg-emerald-50/35 hover:bg-emerald-50/60 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)] transition-all duration-300 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-emerald-800 mb-3">
                  Transparency & Explainability
                </h3>
                <div className="space-y-2 text-sm text-slate-650 font-semibold">
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Explainable AI for critical choices</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Clear documentation of limitations</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> User disclosure when AI is in use</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Honest accuracy communication</div>
                </div>
              </div>
            </div>

            {/* Card 3: Privacy */}
            <div className="p-8 rounded-3xl bg-blue-50/45 hover:bg-blue-50/75 hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-blue-900 mb-3">
                  Privacy & Security
                </h3>
                <div className="space-y-2 text-sm text-slate-650 font-semibold">
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Privacy-by-design frameworks</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Strict data minimization principles</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Advanced data encryption & rules</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Strict user control over core data</div>
                </div>
              </div>
            </div>

            {/* Card 4: Accountability */}
            <div className="p-8 rounded-3xl bg-emerald-50/35 hover:bg-emerald-50/60 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)] transition-all duration-300 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-emerald-800 mb-3">
                  Accountability & Auditing
                </h3>
                <div className="space-y-2 text-sm text-slate-650 font-semibold">
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Clear ownership and governance</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Human-in-the-loop oversight gates</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Mechanisms for appeal and reviews</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Regular audits and pipeline monitoring</div>
                </div>
              </div>
            </div>

            {/* Card 5: Beneficial AI */}
            <div className="p-8 rounded-3xl bg-blue-50/45 hover:bg-blue-50/75 hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-blue-900 mb-3">
                  Society & Beneficial AI
                </h3>
                <div className="space-y-2 text-sm text-slate-650 font-semibold">
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Focus on improving lives & business</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Active rejection of harmful use cases</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Careful consideration of societal impacts</div>
                  <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" /> Inclusive stakeholder engagement</div>
                </div>
              </div>
            </div>

            {/* Card 6: Commitments Context */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <h4 className="font-display text-sm font-extrabold text-slate-500 mb-2">
                  Global Quality Standards
                </h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed font-semibold">
                  Every solution we engineer reflects our commitment to innovation, technical excellence, enterprise security, ethical transparency, and long-term business impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. OUR ENGAGEMENT APPROACH WORKFLOW (6 STEPS) ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="flex items-center gap-6 mb-16 w-full">
            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight whitespace-nowrap">
              Our Engagement Approach
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
          </div>

          <div className="relative pl-6 sm:pl-10 border-l border-blue-100 ml-4 flex flex-col gap-12">
            <WorkflowStep
              stepNum="01"
              stepTitle="Discover"
              stepDesc="Understand business objectives, users, systems, workflows, and growth opportunities."
              idx={0}
            />

            <WorkflowStep
              stepNum="02"
              stepTitle="Strategize"
              stepDesc="Develop AI roadmaps, technology architecture, implementation strategy, and success metrics."
              idx={1}
            />

            <WorkflowStep
              stepNum="03"
              stepTitle="Design"
              stepDesc="Create intuitive user experiences, scalable system architecture, and intelligent workflows."
              idx={2}
            />

            <WorkflowStep
              stepNum="04"
              stepTitle="Engineer"
              stepDesc="Develop enterprise-grade software using modern engineering standards and best practices."
              idx={3}
            />

            <WorkflowStep
              stepNum="05"
              stepTitle="Deploy"
              stepDesc="Launch secure, scalable, cloud-native production environments."
              idx={4}
            />

            <WorkflowStep
              stepNum="06"
              stepTitle="Optimize"
              stepDesc="Continuously improve AI performance through monitoring, analytics, automation, and iterative innovation."
              idx={5}
            />
          </div>
        </section>

        {/* ── 6. INDUSTRIES WE TRANSFORM ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="flex items-center gap-6 mb-12 w-full">
            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight whitespace-nowrap">
              Industries We Transform
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
          </div>

          <p className="font-body text-slate-650 text-sm sm:text-base leading-relaxed mb-10 font-semibold max-w-4xl">
            Artificial Intelligence has become a strategic advantage across every industry. TECH6SENSE AI partners with organizations to solve unique operational challenges and deliver tailored intelligent systems.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Healthcare & Life Sciences",
              "Banking & Financial Services",
              "Insurance Solutions",
              "Smart Manufacturing",
              "Retail & E-commerce",
              "Logistics & Supply Chain",
              "Real Estate Technology",
              "Education & E-learning",
              "Telecommunications",
              "Energy & Utilities",
              "Government & Public Sector",
              "Smart Cities Infrastructure",
              "Agricultural Technology",
              "Pharmaceuticals",
              "Automotive Engineering",
              "Media & Entertainment",
              "Hospitality Systems",
              "Legal Service Platforms",
              "Human Resources & HRIS",
              "Cybersecurity Operations",
              "Construction Technology",
              "Professional Services",
              "Technology Startups",
              "Enterprise SaaS Operations"
            ].map((ind, idx) => {
              const colorSchemes = [
                { bg: 'bg-blue-50/60 hover:bg-blue-50/90', border: 'border-blue-100/80', text: 'text-blue-800', dot: 'bg-blue-500' },
                { bg: 'bg-emerald-50/50 hover:bg-emerald-50/80', border: 'border-emerald-100/80', text: 'text-emerald-800', dot: 'bg-emerald-500' },
                { bg: 'bg-indigo-50/60 hover:bg-indigo-50/90', border: 'border-indigo-100/80', text: 'text-indigo-800', dot: 'bg-indigo-500' },
                { bg: 'bg-cyan-50/60 hover:bg-cyan-50/90', border: 'border-cyan-100/80', text: 'text-cyan-800', dot: 'bg-cyan-500' },
                { bg: 'bg-sky-50/60 hover:bg-sky-50/90', border: 'border-sky-100/80', text: 'text-sky-800', dot: 'bg-sky-500' },
                { bg: 'bg-teal-50/60 hover:bg-teal-50/90', border: 'border-teal-100/80', text: 'text-teal-800', dot: 'bg-teal-500' },
              ];
              const scheme = colorSchemes[idx % colorSchemes.length];
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 p-3.5 rounded-xl border ${scheme.border} ${scheme.bg} ${scheme.text} text-sm font-bold hover:shadow-md transition-all duration-300 cursor-default`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${scheme.dot} flex-shrink-0`} />
                  {ind}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 7. FOUNDER'S MESSAGE ── */}
        <section className="w-full border-t border-slate-100 bg-slate-50/50 py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-10 md:p-16 shadow-sm overflow-hidden max-w-[1400px] mx-auto transition-all duration-500 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:border-blue-200/80">
              {/* Faded Accent Blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Photo Column */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-full md:h-auto md:aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                    <img 
                      src={founderImg} 
                      alt="Chintan Patel" 
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.03]" 
                    />
                  </div>
                </div>
                {/* Quote Column */}
                <div className="md:col-span-8 flex flex-col items-start text-left">
                  <span className="font-mono text-[0.65rem] font-bold text-emerald-600 uppercase tracking-[0.25em] mb-4">
                    A MESSAGE FROM OUR FOUNDER
                  </span>

                  <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-relaxed mb-6 text-justify">
                    "In the modern digital economy, standalone software is no longer enough to secure market leadership. True disruption requires a complete ecosystem—where bleeding-edge technology meets visionary leadership and strategic global capital. I founded TECH6SENSE AI to be that ecosystem. We are here to partner with the boldest minds in business, architecting solutions that don't just adapt to the future, but actively define it."
                  </blockquote>

                  <div>
                    <span className="font-display text-base font-extrabold text-blue-900 block">
                      Chintan Patel
                    </span>
                    <span className="font-mono text-[0.65rem] text-slate-450 uppercase font-bold tracking-widest mt-1 block">
                      Founder, TECH6SENSE AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. FINAL CTA BANNER ── */}
        <section id="contact" className="mx-auto max-w-[1400px] px-6 py-16 md:py-24 relative z-10">
          <div className="relative rounded-[2.5rem] border border-blue-100 bg-slate-50/80 backdrop-blur-md p-10 md:p-16 text-center shadow-md overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none" />

            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-slate-900 mb-4 relative z-10">
              Let's Build the Future Together
            </h2>

            <p className="font-body text-xs sm:text-sm md:text-base text-slate-650 leading-relaxed mb-10 max-w-3xl mx-auto relative z-10 font-semibold">
              The future belongs to organizations that combine human ingenuity with artificial intelligence. Connect with our global strategy team to engineer intelligent businesses and shape the future of the AI-powered world.
            </p>

            <Link
              to="/lets-connect"
              className="relative z-10 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-4 font-body text-xs font-bold tracking-widest text-white shadow-md hover:scale-[1.03] hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] active:scale-[0.98]"
            >
              Contact Our Global Strategy Team
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
