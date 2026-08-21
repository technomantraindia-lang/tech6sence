import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import heroBg from '../assets/abouthero2.png';
import founderImg from '../assets/founder.png';

// A custom reusable card with a spotlight effect and flat hard shadows
function EcosystemCard({ title, subtitle, midText, items, footerText, isEven }) {
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
        <p className="font-body text-sm text-slate-500 font-semibold mb-4 whitespace-pre-line">
          {subtitle}
        </p>
        
        {midText && (
          <p className="font-body text-sm text-slate-700 font-bold mb-4">
            {midText}
          </p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
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
        
        {footerText && (
          <p className="font-body text-sm text-slate-500 font-semibold mt-6 whitespace-pre-line">
            {footerText}
          </p>
        )}
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
          <div className="mb-6 flex flex-wrap justify-center gap-2">
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

          <div className="flex flex-col items-center text-center w-full max-w-7xl mx-auto">
            {/* Hero Column */}
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} w-full`}>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.1] font-black text-white tracking-tight mb-4" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                Engineering the Future of Intelligence
              </h1>
              
              <p className="font-display text-base sm:text-lg text-emerald-400 font-extrabold mb-2 max-w-5xl mx-auto leading-relaxed" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
                Empowering the World’s Most Ambitious Enterprises<br className="hidden sm:block" /> with Next-Generation AI & Deep Tech
              </p>

              <p className="font-display text-sm sm:text-base text-blue-300 font-bold mb-8 max-w-5xl mx-auto leading-relaxed" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
                Global AI Innovation. Enterprise Technology. Deep-Tech Excellence.<br className="hidden sm:block" />
                Engineering Intelligence. Empowering Founders. Elevating Enterprises.
              </p>

              <div className="font-body text-white/95 text-[1rem] md:text-[1.1rem] leading-[1.8] font-semibold space-y-6 mb-10 w-full text-justify md:text-center" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
                <p>
                  TECH6SENSE AI is a global Artificial Intelligence, Full-Stack Technology, and Deep-Tech Innovation company helping organizations transform ambitious ideas into intelligent digital products, scalable enterprise platforms, and AI-powered business ecosystems.
                </p>
                <p>
                  Founded by <strong className="text-white font-bold">Chintan Patel</strong>, TECH6SENSE AI operates at the intersection of Artificial Intelligence, Enterprise Software Engineering, Intelligent Automation, Deep Technology Research, and Business Innovation. We partner with startups, enterprises, government organizations, research institutions, and visionary entrepreneurs to design, build, deploy, and scale next-generation technology solutions that create measurable business value.
                </p>
                <p>
                  Our expertise extends far beyond software development. We architect intelligent ecosystems that combine advanced AI, cloud technologies, enterprise engineering, automation, data intelligence, IoT, immersive technologies, cybersecurity, and product innovation to solve complex business challenges across industries worldwide.
                </p>
                <p>
                  Today, TECH6SENSE AI serves clients and strategic partners across the United States, United Kingdom, Australia, Canada, India, the European Union, United Arab Emirates, Singapore, and Hong Kong, delivering world-class AI and digital transformation solutions that enable organizations to innovate faster, operate smarter, and compete globally.
                </p>
              </div>

            </div>
          </div>
          

        </div>
      </section>

      {/* Main Body Content */}
      <main className="flex-grow bg-white relative z-10">
        
        {/* ── WHO WE ARE SECTION ── */}
        <section className="bg-slate-50 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              
              {/* Who We Are Content */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-blue-955 tracking-tight mb-8">
                  Who We Are
                </h2>
                <div className="font-body text-[1.05rem] text-slate-700 leading-[1.8] space-y-6">
                  <p className="font-bold text-blue-600 text-xl">
                    TECH6SENSE AI is more than a technology company.
                  </p>
                  <p>
                    We are a multidisciplinary team of AI researchers, software architects, machine learning engineers, cloud specialists, product strategists, UX designers, cybersecurity professionals, data scientists, DevOps engineers, business consultants, and innovation experts united by a single purpose:
                  </p>
                  <p className="text-xl font-bold text-emerald-600 border-l-4 border-emerald-500 pl-4 py-2 my-8 bg-emerald-50/50 rounded-r-lg">
                    To build technology that transforms businesses, industries, and society.
                  </p>
                  <p>
                    From early-stage startups to Fortune-scale enterprises, our clients rely on us to solve complex technical challenges, accelerate product development, modernize legacy infrastructure, and implement intelligent systems that deliver tangible business outcomes.
                  </p>
                  <p className="font-bold">
                    Deliver technology that creates measurable business outcomes.
                  </p>
                </div>
              </div>

              {/* A Borderless Impact Content */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-blue-900/5 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                <h2 className="font-display text-2xl md:text-3xl font-black text-blue-955 tracking-tight mb-6">
                  A Borderless Impact
                </h2>
                <p className="font-body text-slate-600 leading-relaxed mb-8">
                  Innovation knows no geography. TECH6SENSE AI empowers enterprises, scales startups, and transforms legacy systems across the world’s most demanding technological landscapes.
                </p>
                
                <h3 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 border-b border-slate-100 pb-3">
                  Our Global Reach Includes
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="text-[0.65rem] font-mono font-bold text-blue-600 uppercase tracking-widest mb-1 block">
                      The Americas
                    </span>
                    <span className="font-display text-base font-bold text-slate-800">
                      USA, Canada
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[0.65rem] font-mono font-bold text-blue-600 uppercase tracking-widest mb-1 block">
                      Europe
                    </span>
                    <span className="font-display text-base font-bold text-slate-800">
                      United Kingdom, European Union
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[0.65rem] font-mono font-bold text-blue-600 uppercase tracking-widest mb-1 block">
                      Asia-Pacific
                    </span>
                    <span className="font-display text-base font-bold text-slate-800">
                      Australia, Singapore, Hong Kong, India
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[0.65rem] font-mono font-bold text-blue-600 uppercase tracking-widest mb-1 block">
                      Middle East
                    </span>
                    <span className="font-display text-base font-bold text-slate-800">
                      United Arab Emirates
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
        
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
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 w-full">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight">
                The TECH6SENSE Ecosystem
              </h2>
              <div className="font-body text-slate-650 text-base font-semibold space-y-2">
                <p>TECH6SENSE AI is more than an AI development company.</p>
                <p>We have built a comprehensive innovation ecosystem designed to accelerate business growth, technology adoption, entrepreneurship, and global expansion.</p>
              </div>
            </div>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EcosystemCard
              title="1. Artificial Intelligence Development & Enterprise Technology"
              subtitle="We develop enterprise-grade AI systems that automate business operations, enhance decision-making, and create intelligent customer experiences."
              midText="Our capabilities include:"
              items={["Custom AI Development", "Generative AI", "Agentic AI", "AI Agents", "Enterprise AI", "AI Copilots", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "Machine Learning", "AI Automation", "AI Consulting", "AI Governance", "AI Security", "AI Integration", "Retrieval-Augmented Generation (RAG)", "MLOps & AIOps"]}
              isEven={true}
            />

            <EcosystemCard
              title="2. Full-Stack Technology Services"
              subtitle="We engineer secure, scalable, and future-ready digital platforms that power modern businesses."
              midText="Our technology expertise includes:"
              items={["Enterprise Software Development", "Web Applications", "Mobile Applications", "SaaS Platforms", "Cloud Engineering", "API Development", "DevOps", "Data Engineering", "Business Intelligence", "Blockchain Development", "IoT Development", "Robotic Process Automation", "Cybersecurity", "UI/UX Engineering", "Digital Transformation"]}
              isEven={false}
            />

            <EcosystemCard
              title="3. Deep-Tech Product Development"
              subtitle={`Innovation is at the heart of TECH6SENSE AI.\nWe help organizations conceptualize, prototype, engineer, and commercialize next-generation Deep-Tech products.`}
              midText="Our innovation domains include:"
              items={["AI Wearables", "Smart Glasses", "Intelligent Healthcare Devices", "AI Smart Devices", "IoT Hardware Ecosystems", "Human-Machine Interfaces", "Edge AI Systems", "Robotics", "Smart Manufacturing Technologies", "Future Consumer Electronics"]}
              footerText="From product strategy to hardware-software integration, we provide end-to-end engineering support."
              isEven={true}
            />

            <EcosystemCard
              title="4. Visionary Founders Ecosystem"
              subtitle={`Building successful technology companies requires more than coding.\nOur Visionary Founders Ecosystem helps entrepreneurs transform innovative ideas into globally scalable businesses.`}
              midText="We provide comprehensive support across:"
              items={["Company Formation", "Business Strategy", "Product Development", "Technology Teams", "CTO Services", "Branding", "Marketing", "International Client Acquisition", "Investment Readiness", "Business Scaling", "Global Expansion", "Founder Mentorship"]}
              footerText="Our objective is to empower the next generation of global technology entrepreneurs."
              isEven={false}
            />

            <EcosystemCard
              title="5. Business Brains Private Global Circle"
              subtitle="Business Brains is an exclusive executive ecosystem connecting visionary founders, investors, CXOs, innovators, policymakers, researchers, and industry leaders."
              midText="Members gain access to:"
              items={["Global Networking", "Strategic Partnerships", "Investment Opportunities", "Private Business Events", "Executive Knowledge Sharing", "AI Innovation Insights", "International Collaboration", "Leadership Development"]}
              footerText="The community is designed for leaders who believe collaboration accelerates innovation."
              isEven={true}
            />


          </div>
        </section>

        {/* ── 3. WHAT MAKES US DIFFERENT ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side explanation */}
            <div className="lg:col-span-7">
              <span className="font-display text-sm font-extrabold text-emerald-600 uppercase tracking-widest mb-3 block">
                TECHNICAL DIFFERENTIATION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                What Makes TECH6SENSE AI Different
              </h2>
              <div className="font-body text-sm sm:text-base leading-relaxed mb-4 font-semibold space-y-2">
                <p className="text-slate-650">
                  Technology alone rarely creates transformation.
                </p>
                <p className="text-slate-700 font-bold">
                  True transformation happens when technology, business strategy, innovation, and execution work together.
                </p>
                <p className="text-blue-700 font-bold">
                  TECH6SENSE AI operates at this intersection.
                </p>
                <p className="text-emerald-600 font-extrabold pt-2">
                  Our approach combines:
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
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
                    className="font-display text-sm font-extrabold px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="font-body text-slate-650 text-sm sm:text-base leading-relaxed font-semibold">
                This enables our clients to modernize operations, improve efficiency, unlock new revenue opportunities, reduce costs, and create intelligent organizations prepared for the future.
              </p>
            </div>

            {/* Right side strategic card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-blue-50/45 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <h4 className="font-display text-lg font-black text-blue-955 mb-2 relative z-10">
                  Innovation Through Research
                </h4>
                <div className="font-body text-sm text-slate-650 leading-relaxed font-semibold mb-6 space-y-1 relative z-10">
                  <p>Artificial Intelligence evolves rapidly. So do we.</p>
                  <p>TECH6SENSE AI continuously invests in research, experimentation, and emerging technologies to ensure our clients remain ahead of industry disruption.</p>
                </div>
                
                <h5 className="font-display text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 relative z-10">
                  Our innovation focus includes:
                </h5>
                
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {[
                    "Generative AI", "Large Language Models", "AI Agents", 
                    "Autonomous Systems", "Computer Vision", "Multimodal AI", 
                    "Robotics", "Edge AI", "Human-AI Collaboration", 
                    "Intelligent Automation", "Explainable AI", "Responsible AI", 
                    "Future Computing Technologies"
                  ].map((val, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200/60 text-[0.65rem] sm:text-xs font-bold text-slate-700 shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      {val}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-200/50 relative z-10">
                <p className="font-body text-sm font-bold text-blue-700">
                  Innovation is embedded into every solution we create.
                </p>
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

          <div className="font-body text-sm sm:text-base leading-relaxed mb-10 font-semibold max-w-4xl space-y-2">
            <h4 className="text-slate-700 font-bold uppercase tracking-wider mb-2">Ethical AI Development</h4>
            <p className="text-emerald-600 font-extrabold">
              At TECH6SENSE, we believe AI must be developed and deployed responsibly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Fairness */}
            <div className="p-8 rounded-3xl bg-blue-50/45 hover:bg-blue-50/75 hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-blue-900 mb-3">
                  Fairness & Non-Discrimination
                </h3>
                <div className="space-y-2 text-sm text-slate-650 font-semibold">
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Regular bias testing in models</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Diverse training data</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Fairness metrics monitoring</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Remediation when bias detected</div>
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
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Explainable AI for critical decisions</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Clear documentation of AI capabilities and limitations</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Honest communication about accuracy and confidence</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> User understanding of when AI is being used</div>
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
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Privacy-by-design principles</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Data minimization practices</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Strong encryption and access controls</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Compliance with all regulations</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> User control over their data</div>
                </div>
              </div>
            </div>

            {/* Card 4: Accountability */}
            <div className="p-8 rounded-3xl bg-emerald-50/35 hover:bg-emerald-50/60 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.35)] transition-all duration-300 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-emerald-800 mb-3">
                  Accountability
                </h3>
                <div className="space-y-2 text-sm text-slate-650 font-semibold">
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Clear ownership and responsibility</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Human oversight of AI decisions</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Mechanisms for appeal and redress</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Regular audits and monitoring</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Continuous improvement based on outcomes</div>
                </div>
              </div>
            </div>

            {/* Card 5: Beneficial AI */}
            <div className="p-8 rounded-3xl bg-blue-50/45 hover:bg-blue-50/75 hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.35)] transition-all duration-300 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-blue-900 mb-3">
                  Beneficial AI
                </h3>
                <div className="space-y-2 text-sm text-slate-650 font-semibold">
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Focus on applications that improve lives</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Rejection of harmful use cases</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Consideration of societal impact</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Stakeholder engagement</div>
                  <div className="flex items-start gap-2"><span className="w-1 h-1 mt-1.5 rounded-full bg-emerald-500 flex-shrink-0" /> Long-term thinking about consequences</div>
                </div>
              </div>
            </div>

            {/* Card 6: Commitments Context */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <h4 className="font-display text-base font-extrabold text-blue-900 mb-4">
                  Our Commitment
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Innovation", "Technical Excellence", "Enterprise Security", 
                    "Ethical AI", "Transparency", "Client Success", 
                    "Long-Term Partnerships", "Scalable Architecture", 
                    "Business Impact", "Global Quality Standards"
                  ].map((item, idx) => (
                    <span key={idx} className="inline-block bg-white border border-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-blue-700 font-bold border-t border-slate-200 pt-4">
                  We measure our success by the long-term value we create for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. OUR ENGAGEMENT APPROACH WORKFLOW (6 STEPS) ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="flex items-center gap-6 mb-8 w-full">
            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight whitespace-nowrap">
              Our Approach
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
          </div>

          <div className="font-body text-sm sm:text-base leading-relaxed mb-12 font-semibold max-w-4xl space-y-2">
            <p className="text-slate-700 font-bold">
              Every engagement follows a structured innovation framework designed to minimize risk and maximize business value.
            </p>
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

          <div className="font-body text-sm sm:text-base leading-relaxed mb-10 font-semibold max-w-4xl space-y-2">
            <p className="text-slate-700 font-bold">
              Artificial Intelligence has become a strategic advantage across every industry.
            </p>
            <p className="text-emerald-600 font-extrabold pt-2">
              TECH6SENSE AI partners with organizations operating in:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Healthcare & Life Sciences",
              "Banking & Financial Services",
              "Insurance",
              "Manufacturing",
              "Retail & E-commerce",
              "Logistics & Supply Chain",
              "Real Estate",
              "Education",
              "Telecommunications",
              "Energy & Utilities",
              "Government",
              "Smart Cities",
              "Agriculture",
              "Pharmaceuticals",
              "Automotive",
              "Media & Entertainment",
              "Hospitality",
              "Legal Services",
              "Human Resources",
              "Cybersecurity",
              "Construction",
              "Professional Services",
              "Technology Startups",
              "Enterprise SaaS",
              "Consumer Products"
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

          <div className="font-body text-sm sm:text-base leading-relaxed mt-10 font-semibold max-w-4xl space-y-2">
            <p className="text-slate-700 font-bold">Every industry has unique operational challenges.</p>
            <p className="text-blue-700 font-extrabold">Every solution we build is tailored to solve them.</p>
          </div>
        </section>

        {/* ── 7. OUR GLOBAL EXPERTISE ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="flex items-center gap-6 mb-12 w-full">
            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight whitespace-nowrap">
              Our Global Expertise
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
          </div>

          <div className="font-body text-sm sm:text-base leading-relaxed mb-10 font-semibold max-w-4xl space-y-2">
            <p className="text-slate-700 font-bold">
              Our experience spans multiple continents and diverse markets, enabling us to understand regional business challenges while delivering solutions that meet international technology standards.
            </p>
            <p className="text-emerald-600 font-extrabold pt-2">
              We have successfully supported organizations across:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {[
              "United States",
              "United Kingdom",
              "Australia",
              "Canada",
              "India",
              "European Union",
              "United Arab Emirates",
              "Singapore",
              "Hong Kong"
            ].map((country, idx) => {
              const colorSchemes = [
                { bg: 'bg-blue-50/60 hover:bg-blue-50/90', border: 'border-blue-100/80', text: 'text-blue-800', dot: 'bg-blue-500' },
                { bg: 'bg-emerald-50/50 hover:bg-emerald-50/80', border: 'border-emerald-100/80', text: 'text-emerald-800', dot: 'bg-emerald-500' },
                { bg: 'bg-indigo-50/60 hover:bg-indigo-50/90', border: 'border-indigo-100/80', text: 'text-indigo-800', dot: 'bg-indigo-500' },
                { bg: 'bg-cyan-50/60 hover:bg-cyan-50/90', border: 'border-cyan-100/80', text: 'text-cyan-800', dot: 'bg-cyan-500' },
              ];
              const scheme = colorSchemes[idx % colorSchemes.length];
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 p-4 rounded-xl border ${scheme.border} ${scheme.bg} ${scheme.text} text-sm font-bold hover:shadow-md transition-all duration-300 cursor-default`}
                >
                  <span className={`w-2 h-2 rounded-full ${scheme.dot} flex-shrink-0`} />
                  {country}
                </div>
              );
            })}
          </div>

          <div className="font-body text-sm sm:text-base leading-relaxed font-semibold max-w-4xl space-y-2 text-center md:text-left">
            <p className="text-blue-700 font-extrabold">
              Our globally distributed mindset allows us to deliver scalable solutions for businesses operating in highly competitive and rapidly evolving markets.
            </p>
          </div>
        </section>

        {/* ── 8. WHY ORGANIZATIONS CHOOSE TECH6SENSE AI ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-slate-100">
          <div className="flex items-center gap-6 mb-10 w-full">
            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-blue-955 tracking-tight whitespace-nowrap">
              Why Organizations Choose TECH6SENSE AI
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/30 via-emerald-500/10 to-transparent rounded-full" />
          </div>

          <div className="font-body text-sm sm:text-base leading-relaxed font-semibold space-y-2 mb-10 max-w-4xl">
            <p className="text-slate-700 font-bold">Organizations partner with TECH6SENSE AI because they need more than a technology vendor.</p>
            <p className="text-blue-700 font-extrabold">They need a strategic innovation partner.</p>
            <p className="text-emerald-600 font-extrabold pt-2">Our clients value us for:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              "Business-first AI strategy",
              "Enterprise-grade engineering",
              "Global delivery capabilities",
              "End-to-end digital transformation expertise",
              "Deep understanding of emerging technologies",
              "Scalable cloud-native architecture",
              "Secure AI implementation",
              "Future-ready technology roadmaps",
              "Transparent collaboration",
            ].map((reason, idx) => {
              const colorSchemes = [
                { bg: 'bg-blue-50/45 hover:bg-blue-50/75', border: 'border-blue-100/50 hover:border-blue-200', text: 'text-blue-900', iconBg: 'bg-white', icon: 'text-blue-600' },
                { bg: 'bg-emerald-50/35 hover:bg-emerald-50/60', border: 'border-emerald-100/50 hover:border-emerald-200', text: 'text-emerald-900', iconBg: 'bg-white', icon: 'text-emerald-600' }
              ];
              const scheme = colorSchemes[idx % colorSchemes.length];

              return (
                <div key={idx} className={`flex items-start gap-3 p-4 rounded-2xl border ${scheme.bg} ${scheme.border} shadow-sm hover:shadow-md transition-all duration-300`}>
                  <div className={`w-6 h-6 rounded-full ${scheme.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <svg viewBox="0 0 24 24" fill="none" className={`w-3.5 h-3.5 ${scheme.icon}`} stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className={`font-body text-sm font-bold leading-snug ${scheme.text}`}>{reason}</span>
                </div>
              );
            })}
          </div>

          <div className="font-body text-sm sm:text-base leading-relaxed font-semibold max-w-4xl space-y-2 text-center md:text-left">
            <p className="text-blue-700 font-black">
              We help organizations move from experimentation to enterprise-wide AI adoption with confidence.
            </p>
          </div>
        </section>

        {/* ── 9. FOUNDER'S MESSAGE ── */}
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
                  <span className="font-display text-sm font-extrabold text-emerald-600 uppercase tracking-[0.25em] mb-4">
                    A MESSAGE FROM OUR FOUNDER
                  </span>

                  <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-relaxed mb-6">
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

        {/* ── 9. BUILDING THE INTELLIGENT FUTURE ── */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-blue-955 tracking-tight mb-8">
              Building the Intelligent Future
            </h2>
            
            <div className="font-body text-sm sm:text-base leading-relaxed font-semibold space-y-6 text-slate-700">
              <p>
                <span className="text-slate-900 font-extrabold">Artificial Intelligence is reshaping every industry.</span><br/>
                The organizations that embrace intelligent technologies today will become tomorrow's market leaders.
              </p>
              
              <p>
                <span className="text-emerald-600 font-extrabold">At TECH6SENSE AI, our mission extends beyond software development.</span><br/>
                We are building intelligent systems that empower businesses, accelerate innovation, transform industries, and create meaningful impact across the global economy.
              </p>

              <p className="text-blue-800 font-bold bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 shadow-sm">
                Whether you are an enterprise modernizing legacy operations, a startup building the next disruptive product, a government accelerating digital transformation, or an ambitious founder turning a bold vision into reality, TECH6SENSE AI provides the expertise, technology, and strategic partnership to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* ── 10. FINAL CTA BANNER ── */}
        <section id="contact" className="mx-auto max-w-[1400px] px-6 pb-16 md:pb-24 relative z-10">
          <div className="relative rounded-[2.5rem] border border-blue-100 bg-slate-50/80 backdrop-blur-md p-10 md:p-16 text-center shadow-md overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none" />

            <h2 className="font-display text-2xl sm:text-3.5xl font-black text-slate-900 mb-6 relative z-10">
              Let's Build the Future Together
            </h2>

            <div className="font-body text-sm md:text-base text-slate-700 leading-relaxed mb-10 max-w-4xl mx-auto relative z-10 font-semibold space-y-3">
              <p className="font-extrabold text-blue-900">
                The future belongs to organizations that combine human ingenuity with artificial intelligence.
              </p>
              <p>
                TECH6SENSE AI is your trusted global partner for AI innovation, enterprise technology, digital transformation, and deep-tech product development.
              </p>
              <p className="text-emerald-700 font-bold">
                Together, let's engineer intelligent businesses, create transformative technologies, and shape the future of the AI-powered world.
              </p>
            </div>

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
