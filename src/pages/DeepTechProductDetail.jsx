import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import deepTechData from '../data/deepTechData.json';

// Explored Product Images
import imgGlasses from '../assets/productimages/ai-smartglasses-explored_view.png';
import imgExoskeleton from '../assets/productimages/AI-Powered Next-Generation Exoskeleton-explored view.png';
import imgEarphones from '../assets/productimages/AI Earphones-explored view.png';
import imgSmartwatch from '../assets/productimages/AI Smart Watch-exploredview.png';
import imgFitnessBand from '../assets/productimages/AI Fitness & Health Band-exploredview.png';
import imgAssistant from '../assets/productimages/Wearable AI-Powered Personal Assistants-exploredview.png';
import imgSmartRing from '../assets/productimages/AI Smart Ring-exploredview.png';
import imgHealthDevice from '../assets/productimages/Wearable AI Personal Health Device-exploredview.png';
import imgMedical from '../assets/productimages/Healthcare & Medical AI Devices.png';
import imgIoT from '../assets/productimages/Smart IoT Devices.png';
import imgNotepad from '../assets/productimages/AI Digital Notepad-exploredview.png';

const EXPLORED_IMAGES = {
  "sense-vision": imgGlasses,
  "sense-exo": imgExoskeleton,
  "sense-sonic": imgEarphones,
  "sense-chrono": imgSmartwatch,
  "sense-pulse": imgFitnessBand,
  "sense-aura": imgAssistant,
  "sense-halo": imgSmartRing,
  "sense-vita": imgHealthDevice,
  "sense-clinic": imgMedical,
  "sense-grid": imgIoT,
  "sense-slate": imgNotepad,

  "ai-smart-glasses": imgGlasses,
  "ai-powered-next-generation-exoskeleton": imgExoskeleton,
  "ai-earphones": imgEarphones,
  "ai-smartwatch": imgSmartwatch,
  "ai-fitness-health-band": imgFitnessBand,
  "wearable-ai-personal-assistant": imgAssistant,
  "wearable-ai-powered-personal-assistant": imgAssistant,
  "ai-smart-ring": imgSmartRing,
  "wearable-ai-personal-health-device": imgHealthDevice,
  "healthcare-medical-ai-devices": imgMedical,
  "smart-iot-devices": imgIoT,
  "ai-digital-notepad": imgNotepad
};

const PRODUCT_SLUG_MAP = {
  'sense-vision': 'ai-smart-glasses',
  'sense-exo': 'ai-powered-next-generation-exoskeleton',
  'sense-sonic': 'ai-earphones',
  'sense-chrono': 'ai-smartwatch',
  'sense-pulse': 'ai-fitness-health-band',
  'sense-aura': 'wearable-ai-powered-personal-assistant',
  'sense-halo': 'ai-smart-ring',
  'sense-vita': 'wearable-ai-personal-health-device',
  'sense-clinic': 'healthcare-medical-ai-devices',
  'sense-grid': 'smart-iot-devices',
  'sense-slate': 'ai-digital-notepad'
};

// Helper to convert text to URL slug
const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Spotlight Card component for dynamic cursor glow
const SpotlightCard = ({ children, className = "", delay = 0 }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 backdrop-blur-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: isFocused 
            ? `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(124, 58, 237, 0.06), transparent 80%)`
            : 'none',
          opacity: isFocused ? 1 : 0
        }}
      />
      {children}
    </motion.div>
  );
};

export default function DeepTechProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    if (deepTechData && deepTechData.products) {
      const mappedSlug = PRODUCT_SLUG_MAP[productId] || productId;

      // Robust title match (handles word splits like smartwatch/smart watch, plurals, and extra descriptors)
      const found = deepTechData.products.find(p => {
        const titleSlug = slugify(p.title);
        if (titleSlug === mappedSlug || titleSlug === productId) return true;

        const cleanA = titleSlug.replace(/-/g, '');
        const cleanB = mappedSlug.replace(/-/g, '');
        if (cleanA === cleanB) return true;

        const stripHelpers = (s) => s.replace(/powered|devices|device|nextgeneration|nextgen|and|or|the/g, '').replace(/s$/, '');
        return stripHelpers(cleanA) === stripHelpers(cleanB);
      });
      setProduct(found || null);
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      const foundKey = Object.keys(product.sections || {}).find(key => 
        key.toUpperCase().startsWith("PRODUCT BENEFITS")
      );
      const benefitsLines = foundKey ? product.sections[foundKey] : [];
      const dynamicBenefits = parseDynamicBenefits(benefitsLines);
      const tabs = Object.keys(dynamicBenefits);
      
      if (tabs.length > 0) {
        setActiveTab(tabs[0]);
      } else {
        setActiveTab("Benefits");
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col font-body bg-[#FAFAFA]">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center py-20 px-6">
          <h2 className="font-display text-2xl font-bold text-slate-800 mb-4">Product Not Found</h2>
          <p className="text-slate-500 mb-8 text-center max-w-md">
            The deep-tech product you are looking for does not exist or has been moved.
          </p>
          <Link 
            to="/deep-tech-products" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
          >
            ← Back to Deep-Tech
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Extract security section dynamically if it was nested inside another section (e.g. ENTERPRISE INTEGRATIONS)
  const extractNestedSecurity = (sections) => {
    let securityTitle = "Security & Privacy";
    let securityPrivacy = [];

    if (!sections) return { title: securityTitle, lines: securityPrivacy, cleanedSections: {} };

    // 1. Check if it's already a separate section
    const securityKeys = [
      "SECURITY, PRIVACY & COMPLIANCE",
      "SAFETY, SECURITY & PRIVACY",
      "SECURITY, CYBERSECURITY & DEVICE TRUST",
      "SECURITY, PRIVACY & AI GOVERNANCE",
      "SECURITY & PRIVACY"
    ];
    for (const key of securityKeys) {
      const foundKey = Object.keys(sections).find(k => k.toUpperCase().trim() === key.toUpperCase());
      if (foundKey) {
        return { 
          title: foundKey, 
          lines: sections[foundKey],
          cleanedSections: sections
        };
      }
    }

    // Fallback: look for any key containing both "SECURITY" and "PRIVACY" or containing "CYBERSECURITY" (case-insensitive)
    const fallbackKey = Object.keys(sections).find(k => {
      const ku = k.toUpperCase();
      return (ku.includes("SECURITY") && ku.includes("PRIVACY")) || ku.includes("CYBERSECURITY");
    });
    if (fallbackKey) {
      return { 
        title: fallbackKey, 
        lines: sections[fallbackKey],
        cleanedSections: sections
      };
    }

    // 2. If not found, look inside other sections (specifically ENTERPRISE INTEGRATIONS)
    const cleanedSections = { ...sections };
    for (const secKey of Object.keys(cleanedSections)) {
      const lines = cleanedSections[secKey];
      if (Array.isArray(lines)) {
        const splitIdx = lines.findIndex(line => {
          const l = line.toUpperCase().trim();
          return (l.includes("SECURITY") && l.includes("PRIVACY")) || 
                 l.includes("CYBERSECURITY") || 
                 l === "SECURITY, PRIVACY & COMPLIANCE" || 
                 l === "SAFETY, SECURITY & PRIVACY" ||
                 l === "SAFETY, SECURITY & PRIVACY:" ||
                 l === "SECURITY, PRIVACY & COMPLIANCE:";
        });

        if (splitIdx !== -1) {
          securityTitle = lines[splitIdx].replace(/:$/, '').trim();
          securityPrivacy = lines.slice(splitIdx + 1);
          cleanedSections[secKey] = lines.slice(0, splitIdx);
          break;
        }
      }
    }

    return { title: securityTitle, lines: securityPrivacy, cleanedSections };
  };

  const securityInfo = extractNestedSecurity(product.sections);
  const securityPrivacy = securityInfo.lines;
  const securityTitle = securityInfo.title;
  const activeSections = securityInfo.cleanedSections;

  // Helper to extract section content by fuzzy matching from active sections
  const getSectionLines = (prefix) => {
    if (!activeSections) return [];
    // 1. Try prefix match first
    let foundKey = Object.keys(activeSections).find(key => 
      key.toUpperCase().startsWith(prefix.toUpperCase())
    );
    // 2. Try substring match if not found
    if (!foundKey) {
      foundKey = Object.keys(activeSections).find(key => 
        key.toUpperCase().includes(prefix.toUpperCase())
      );
    }
    return foundKey ? activeSections[foundKey] : [];
  };

  const getCleanSectionTitle = (prefix) => {
    if (!activeSections) return prefix;
    let foundKey = Object.keys(activeSections).find(key => 
      key.toUpperCase().startsWith(prefix.toUpperCase())
    );
    if (!foundKey) {
      foundKey = Object.keys(activeSections).find(key => 
        key.toUpperCase().includes(prefix.toUpperCase())
      );
    }
    return foundKey || prefix;
  };

  // Parsing individual sections
  const heroLines = getSectionLines("HERO SECTION");
  const highlights = getSectionLines("Hero Highlights");
  const overview = getSectionLines("PRODUCT OVERVIEW");
  const vision = getSectionLines("PRODUCT VISION");
  const whyLines = getSectionLines("WHY ");
  const whySectionTitle = getCleanSectionTitle("WHY ");
  const techInnovations = getSectionLines("CORE TECHNOLOGY INNOVATIONS");
  const features = getSectionLines("KEY FEATURES");
  const benefits = getSectionLines("PRODUCT BENEFITS");
  const industries = getSectionLines("INDUSTRIES WE SERVE");
  const useCases = getSectionLines("ENTERPRISE USE CASES");
  const consumerApps = getSectionLines("CONSUMER APPLICATIONS");

  const monitoringRaw = getSectionLines("ADVANCED HEALTH MONITORING CAPABILITIES");
  const monitoringTitleRaw = getCleanSectionTitle("ADVANCED HEALTH MONITORING CAPABILITIES");
  const monitoringTitle = monitoringTitleRaw.replace(/\s*\(.*?\)\s*/g, '').trim();

  const specsRaw = getSectionLines("TECHNICAL SPECIFICATIONS");
  const specTitleRaw = getCleanSectionTitle("TECHNICAL SPECIFICATIONS");
  const specTitle = specTitleRaw.replace(/\s*\(.*?\)\s*/g, '').trim();

  const architectureRaw = getSectionLines("PRODUCT ARCHITECTURE");
  const architectureTitleRaw = getCleanSectionTitle("PRODUCT ARCHITECTURE");
  const architectureTitle = architectureTitleRaw.replace(/\s*\(.*?\)\s*/g, '').trim();

  const sensorSuiteLines = getSectionLines("ADVANCED SENSOR SUITE");
  const sensorSuite = sensorSuiteLines.length > 0 
    ? sensorSuiteLines 
    : (getSectionLines("ADVANCED SENSOR PLATFORM").length > 0 
        ? getSectionLines("ADVANCED SENSOR PLATFORM") 
        : getSectionLines("ADVANCED BIOSENSOR PLATFORM"));
  const sensorSuiteTitleRaw = getCleanSectionTitle("ADVANCED SENSOR SUITE") !== "ADVANCED SENSOR SUITE"
    ? getCleanSectionTitle("ADVANCED SENSOR SUITE")
    : (getCleanSectionTitle("ADVANCED SENSOR PLATFORM") !== "ADVANCED SENSOR PLATFORM"
        ? getCleanSectionTitle("ADVANCED SENSOR PLATFORM")
        : getCleanSectionTitle("ADVANCED BIOSENSOR PLATFORM"));
  const sensorSuiteTitle = sensorSuiteTitleRaw.replace(/\s*\(.*?\)\s*/g, '').trim();

  const formFactors = getSectionLines("PRODUCT FORM FACTORS");
  const formFactorsTitleRaw = getCleanSectionTitle("PRODUCT FORM FACTORS");
  const formFactorsTitle = formFactorsTitleRaw.replace(/\s*\(.*?\)\s*/g, '').trim();

  // Parse features by splitting on empty lines to keep correct grouping
  const parseFeatures = (featureLines) => {
    const blocks = [];
    let currentBlock = [];

    featureLines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed === "") {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock);
          currentBlock = [];
        }
      } else {
        currentBlock.push(trimmed);
      }
    });

    if (currentBlock.length > 0) {
      blocks.push(currentBlock);
    }

    return blocks.map(block => {
      const title = block[0];
      let subTitle = "";
      let items = [];
      if (block.length > 2 && block[1].endsWith(":")) {
        subTitle = block[1];
        items = block.slice(2);
      } else {
        items = block.slice(1);
      }
      return { title, subTitle, items };
    });
  };

  // Generic parser to split arrays into dynamic blocks on empty lines
  const parseBlocks = (lines) => {
    const blocks = [];
    let currentBlock = [];

    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed === "") {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock);
          currentBlock = [];
        }
      } else {
        currentBlock.push(trimmed);
      }
    });

    if (currentBlock.length > 0) {
      blocks.push(currentBlock);
    }

    return blocks.map(block => {
      const title = block[0].replace(/:$/, '').trim();
      let subHeader = "";
      let items = [];
      let footerText = "";

      const remaining = block.slice(1);
      
      if (remaining.length > 0) {
        if (remaining[0].endsWith(":") || (remaining[0].includes(" ") && !remaining[0].includes("  ") && remaining[0].length > 40)) {
          subHeader = remaining[0];
          
          const lastLine = remaining[remaining.length - 1];
          if (lastLine && !lastLine.endsWith(":") && lastLine.includes(" ") && lastLine.length > 50) {
            footerText = lastLine;
            items = remaining.slice(1, -1);
          } else {
            items = remaining.slice(1);
          }
        } else {
          const lastLine = remaining[remaining.length - 1];
          if (lastLine && !lastLine.endsWith(":") && lastLine.includes(" ") && lastLine.length > 50) {
            footerText = lastLine;
            items = remaining.slice(0, -1);
          } else {
            items = remaining;
          }
        }
      }

      return { title, subHeader, items, footerText };
    }).filter(b => b.title && b.items.length > 0);
  };

  const softwarePlatformRaw = getSectionLines("SOFTWARE PLATFORM");
  const parsedSoftwarePlatform = parseBlocks(softwarePlatformRaw);
  const integrationsRaw = getSectionLines("ENTERPRISE INTEGRATIONS");
  const parsedIntegrations = parseBlocks(integrationsRaw);

  const compliance = getSectionLines("GLOBAL CERTIFICATIONS");
  const complianceTitleRaw = getCleanSectionTitle("GLOBAL CERTIFICATIONS");
  const complianceTitle = complianceTitleRaw.replace(/\s*\(.*?\)\s*/g, '').trim();

  // Parse compliance certifications by region/category
  const parseCertifications = (complianceLines) => {
    const categories = [];
    let currentCategory = null;
    let introText = "";
    let footerText = "";

    // Keywords that MUST be matched strictly at the start or as complete words
    const strictAcronyms = [
      "FDA", "CE", "UKCA", "PMDA", "TGA", "IEC", "UL", "ISO", 
      "SOC", "ROHS", "REACH", "WEEE", "FCC", "ISED", "BIS", 
      "TELEC", "KC", "RCM", "BLUETOOTH", "WI-FI", "USB", "GDPR", "HIPAA"
    ];

    complianceLines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const upper = trimmed.toUpperCase();

      // Check if it's the disclaimer/intro/footer text
      if (upper.startsWith("FOR GLOBAL") || upper.startsWith("CERTIFICATION REQUIREMENTS") || upper.includes("COMMERCIALIZATION")) {
        introText = trimmed;
        return;
      }
      if (upper.startsWith("FINAL CERTIFICATION") || upper.startsWith("CERTIFICATION REQUIREMENTS DEPEND") || upper.includes("DEPEND ON THE INTENDED USE") || upper.includes("CERTIFICATION REQUIREMENTS VARY")) {
        footerText = trimmed;
        return;
      }

      // Check if the line is a certification item
      // It is a certification if it starts with or contains any of the strict acronyms as distinct words
      const isCert = strictAcronyms.some(acronym => {
        const regex = new RegExp(`\\b${acronym}\\b`);
        return regex.test(upper);
      });

      if (isCert) {
        if (!currentCategory) {
          currentCategory = { name: "General Regulatory", items: [] };
          categories.push(currentCategory);
        }
        currentCategory.items.push(trimmed);
      } else {
        // Line does not contain certification acronyms -> Check if it is a long descriptive sentence
        if (trimmed.length > 40 && currentCategory) {
          currentCategory.description = trimmed;
        } else {
          // It is a short category header!
          currentCategory = { name: trimmed, items: [] };
          categories.push(currentCategory);
        }
      }
    });

    return { categories, introText, footerText };
  };

  const parsedCertifications = parseCertifications(compliance);

  const customLines = getSectionLines("CUSTOMIZATION OPTIONS");
  const customizations = customLines.length > 0 ? customLines : getSectionLines("PRODUCT VARIANTS");
  const customTitleRaw = getCleanSectionTitle("CUSTOMIZATION OPTIONS");
  const customTitle = customTitleRaw !== "CUSTOMIZATION OPTIONS" ? customTitleRaw : getCleanSectionTitle("PRODUCT VARIANTS");

  const parseVariants = (lines) => {
    const list = [];
    for (let i = 0; i < lines.length; i += 2) {
      if (i < lines.length) {
        list.push({
          title: lines[i],
          desc: i + 1 < lines.length ? lines[i+1] : ""
        });
      }
    }
    return list;
  };
  const parsedVariants = parseVariants(customizations);

  const lifecycle = getSectionLines("PRODUCT LIFECYCLE SERVICES");
  const roadmap = getSectionLines("FUTURE ROADMAP");

  const whyChooseUsLines = getSectionLines("WHY CHOOSE OUR");
  const whyChooseUs = whyChooseUsLines.length > 0 
    ? whyChooseUsLines 
    : (getSectionLines("WHY CHOOSE TECH6SENSE").length > 0 
        ? getSectionLines("WHY CHOOSE TECH6SENSE") 
        : (getSectionLines("WHY HEALTHCARE & MEDICAL AI DEVICES").length > 0
            ? getSectionLines("WHY HEALTHCARE & MEDICAL AI DEVICES")
            : (getSectionLines("WHY SMART IoT DEVICES").length > 0
                ? getSectionLines("WHY SMART IoT DEVICES")
                : getSectionLines("WHY AI DIGITAL NOTEPAD"))));
  const whyChooseTitleRaw = getCleanSectionTitle("WHY CHOOSE OUR");
  const whyChooseTitle = whyChooseTitleRaw !== "WHY CHOOSE OUR" 
    ? whyChooseTitleRaw 
    : (getCleanSectionTitle("WHY CHOOSE TECH6SENSE") !== "WHY CHOOSE TECH6SENSE" 
        ? getCleanSectionTitle("WHY CHOOSE TECH6SENSE") 
        : (getCleanSectionTitle("WHY HEALTHCARE & MEDICAL AI DEVICES") !== "WHY HEALTHCARE & MEDICAL AI DEVICES"
            ? getCleanSectionTitle("WHY HEALTHCARE & MEDICAL AI DEVICES")
            : (getCleanSectionTitle("WHY SMART IoT DEVICES") !== "WHY SMART IoT DEVICES"
                ? getCleanSectionTitle("WHY SMART IoT DEVICES")
                : getCleanSectionTitle("WHY AI DIGITAL NOTEPAD"))));

  const portfolioLines = getSectionLines("HEALTHCARE AI DEVICE PORTFOLIO");
  const portfolioRaw = portfolioLines.length > 0 
    ? portfolioLines 
    : (getSectionLines("SMART IoT DEVICE PORTFOLIO").length > 0 
        ? getSectionLines("SMART IoT DEVICE PORTFOLIO") 
        : getSectionLines("PRODUCT PORTFOLIO"));
  const portfolioTitleRaw = getCleanSectionTitle("HEALTHCARE AI DEVICE PORTFOLIO") !== "HEALTHCARE AI DEVICE PORTFOLIO"
    ? getCleanSectionTitle("HEALTHCARE AI DEVICE PORTFOLIO")
    : (getCleanSectionTitle("SMART IoT DEVICE PORTFOLIO") !== "SMART IoT DEVICE PORTFOLIO"
        ? getCleanSectionTitle("SMART IoT DEVICE PORTFOLIO")
        : getCleanSectionTitle("PRODUCT PORTFOLIO"));
  const portfolioTitle = portfolioTitleRaw.replace(/\s*\(.*?\)\s*/g, '').trim();
  const portfolioIntro = portfolioRaw.length > 0 ? portfolioRaw[0] : "";
  const parsedPortfolio = parseFeatures(portfolioRaw.slice(1));

  const finalCTA = getSectionLines("FINAL CALL TO ACTION");

  // Specs Parser
  const specs = [];
  if (specsRaw && specsRaw.length > 2) {
    let startIdx = 0;
    if (specsRaw[0].toLowerCase().includes("category") && specsRaw[1].toLowerCase().includes("specification")) {
      startIdx = 2;
    }
    for (let i = startIdx; i < specsRaw.length; i += 2) {
      if (i + 1 < specsRaw.length) {
        specs.push({ category: specsRaw[i], spec: specsRaw[i+1] });
      }
    }
  }

  // Dynamic Benefits Parser — groups by empty-line boundaries (same approach as Key Features)
  // First line of each block = tab/category name, remaining lines = benefit items
  const parseDynamicBenefits = (benefitsLines) => {
    const groups = {};
    const blocks = [];
    let currentBlock = [];

    // Split into blocks by empty lines
    benefitsLines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed === "") {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock);
          currentBlock = [];
        }
      } else {
        // Support old "For X" prefix — strip it to get category name
        const clean = trimmed.startsWith("For ") ? trimmed.substring(4).trim() : trimmed;
        currentBlock.push(clean);
      }
    });
    if (currentBlock.length > 0) blocks.push(currentBlock);

    // If no empty-line blocks found (all lines in one block), fall back to "For " grouping only
    if (blocks.length <= 1 && blocks[0]) {
      let currentTabName = null;
      blocks[0].forEach(line => {
        if (line.startsWith("For ")) {
          currentTabName = line.substring(4).trim();
          groups[currentTabName] = [];
        } else {
          if (!currentTabName) { currentTabName = "Benefits"; groups[currentTabName] = []; }
          groups[currentTabName].push(line);
        }
      });
      return groups;
    }

    // Map each block: first line = tab name, rest = items
    blocks.forEach(block => {
      if (block.length === 0) return;
      const tabName = block[0].replace(/:$/, '').trim();
      groups[tabName] = block.slice(1).filter(l => l.trim());
    });

    return groups;
  };

  const dynamicBenefits = parseDynamicBenefits(benefits);
  const benefitTabs = Object.keys(dynamicBenefits);

  const parsedFeatures = parseFeatures(features);
  const parsedMonitoring = parseFeatures(monitoringRaw);

  // Use Cases Grouping - block-based by empty lines
  const parseUseCases = (lines) => {
    const blocks = [];
    let currentBlock = [];

    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed === "") {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock);
          currentBlock = [];
        }
      } else {
        currentBlock.push(trimmed);
      }
    });

    if (currentBlock.length > 0) {
      blocks.push(currentBlock);
    }

    return blocks.map(block => ({
      sector: block[0].replace(/:$/, '').trim(),
      items: block.slice(1)
    })).filter(uc => uc.sector && uc.items.length > 0);
  };

  const architectureIntro = architectureRaw.length > 0 && !architectureRaw[0].includes(":") && architectureRaw[0].length > 40 ? architectureRaw[0] : "";
  const parsedArchitecture = parseFeatures(architectureIntro ? architectureRaw.slice(1) : architectureRaw);

  const parsedUseCases = parseUseCases(useCases);

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#FAFAFA] text-slate-800 overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Ambient background glow orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#1746D2]/40/20 to-fuchsia-200/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-200/10 to-indigo-200/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.003)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            <Link to="/deep-tech-products" className="hover:text-blue-600 transition">Deep Tech Products</Link>
            <span>/</span>
            <span className="text-slate-800">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Title & Description */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1746D2]/10 border border-[#1746D2]/10 text-xs font-mono font-bold uppercase text-[#1746D2] tracking-wider mb-6">
                Premium Hardware // SYS-DT
              </span>
              <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] font-black text-slate-900 mb-6 tracking-tight">
                {product.title}
              </h1>
              <p className="text-xl font-medium text-slate-500 mb-8 leading-relaxed">
                {product.tagline}
              </p>
              
              {/* Highlight Paragraph if in Hero */}
              {heroLines.slice(2).filter(line => {
                const l = line.trim();
                return l !== "Primary CTA" && 
                       !l.toLowerCase().includes("consultation") && 
                       !l.toLowerCase().includes("cta");
              }).map((para, pIdx) => (
                <p key={pIdx} className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed font-semibold text-justify">
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to={`/lets-connect?inquiry=${encodeURIComponent(product.title)}`}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all duration-300 text-sm md:text-base"
                >
                  Book Enterprise Consultation
                </Link>
                <a
                  href="#specs"
                  className="px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-all duration-300 text-sm md:text-base border border-slate-200"
                >
                  View Specifications
                </a>
              </div>
            </div>

            {/* Product Image & Key Capabilities */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Premium Floating Product Image Card */}
              {(() => {
                const titleSlug = slugify(product.title);
                const matchedImage = EXPLORED_IMAGES[productId] || EXPLORED_IMAGES[titleSlug];
                if (!matchedImage) return null;
                return (
                  <div className="relative p-6 rounded-3xl border border-slate-100 bg-[#0d0d10] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden h-[340px] md:h-[400px] group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <img
                      src={matchedImage}
                      alt={`${product.title} explored view`}
                      className="w-full h-full object-contain max-h-[350px] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                );
              })()}

              {/* Highlights Bento Box */}
              <div className="relative p-8 rounded-3xl border border-slate-100 bg-slate-50/50 backdrop-blur-md shadow-sm">
                <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-3 border-b border-slate-200/50">
                  PRODUCT KEY CAPABILITIES
                </h3>
                <ul className="space-y-4">
                  {highlights.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-slate-700 font-semibold text-sm md:text-base"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold text-[0.65rem]">
                        ✓
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Vision Section */}
      <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Overview */}
            <SpotlightCard className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-4 block">
                  Product Overview
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  {overview[0] || "Overview"}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  {overview.slice(1).map((para, idx) => {
                    // Check if it's a technology stack tag or a paragraph
                    if (para.length < 35 && !para.endsWith('.')) {
                      return null; // Skip tech array elements since they render better elsewhere
                    }
                    return <p key={idx}>{para}</p>;
                  })}
                </div>
              </div>
              
              {/* Technologies strip */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-3">
                  INTEGRATED ENGINE STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {overview.filter(p => p.length < 35 && !p.endsWith('.') && p.trim() !== "").map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            {/* Vision & Value */}
            <SpotlightCard className="bg-gradient-to-br from-[#1746D2]/10/50 to-fuchsia-50/20 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1746D2] mb-4 block">
                  Product Vision
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  {vision[0] || "Product Vision"}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  {vision.slice(1).map((para, idx) => (
                    <p key={idx} className={idx === 0 ? "text-lg font-medium text-slate-700" : ""}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Value prompt */}
              <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-[#1746D2]/10 text-[#1746D2] flex items-center justify-center font-display font-black">
                  6S
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Adaptive AI Assistance</h4>
                  <p className="text-[10px] text-slate-500 font-semibold">Native, real-time contextual feedback built-in</p>
                </div>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </section>

      {/* Why Section */}
      {whyLines.length > 0 && (() => {
        // Section heading comes from the JSON key (e.g. "WHY AI SMART GLASSES?")
        const paragraphs = [];
        const bullets = [];
        let subHeader = "";

        // Include ALL lines (including first) as content
        whyLines.forEach(line => {
          const trimmed = line.trim();
          if (!trimmed) return;
          // Long sentences ending with period = paragraph
          if (trimmed.endsWith('.') || trimmed.length > 60) {
            paragraphs.push(trimmed);
          } else if (trimmed.endsWith(':')) {
            // Short line ending with colon = sub-header label
            subHeader = trimmed;
          } else {
            // Everything else = bullet point
            bullets.push(trimmed);
          }
        });

        return (
          <section className="relative w-full py-20 bg-white border-b border-slate-200/80">
            <div className="mx-auto max-w-4xl px-6">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  {whySectionTitle}
                </h2>
                {paragraphs.map((para, idx) => (
                  <p key={idx} className="text-slate-600 text-base md:text-lg leading-relaxed mb-3 max-w-2xl mx-auto">
                    {para}
                  </p>
                ))}
                {subHeader && (
                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mt-6">
                    {subHeader}
                  </p>
                )}
              </div>

              {bullets.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {bullets.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-center gap-4">
                      <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span className="font-semibold text-slate-700 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })()}
      {/* Healthcare AI Device Portfolio */}
      {parsedPortfolio.length > 0 && (
        <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
                PRODUCT PORTFOLIO
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {portfolioTitle}
              </h2>
              {portfolioIntro && (
                <p className="text-sm text-slate-500 font-semibold mt-4">
                  {portfolioIntro}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parsedPortfolio.map((block, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200/50">
                      {block.title}
                    </h3>
                    <ul className="space-y-2">
                      {block.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Core Technology Innovations */}
      <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
              ARCHITECTURAL PILLARS
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Core Technology Innovations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techInnovations.reduce((acc, line) => {
              // Group Innovations dynamically
              const l = line.trim();
              if (l.match(/^\d+\./)) {
                acc.push({ title: l, desc: "", bullets: [] });
              } else if (acc.length > 0) {
                const current = acc[acc.length - 1];
                if (l.startsWith("Powered by") || l.startsWith("Integrated") || l.startsWith("Translate") || l.startsWith("Experience") || l.startsWith("Critical") || l.startsWith("Cloud")) {
                  current.desc = l;
                } else if (l && !l.startsWith("Supports") && !l.startsWith("Capabilities") && !l.startsWith("Advantages") && !l.startsWith("Cloud") && !l.startsWith("Translate")) {
                  current.bullets.push(l);
                }
              }
              return acc;
            }, []).map((tech, idx) => (
              <SpotlightCard key={idx} className="flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 font-medium leading-relaxed">
                    {tech.desc}
                  </p>
                  <ul className="space-y-2">
                    {tech.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
                  Active Optimization // SYS-CAP-{idx+1}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1746D2] block mb-4">
              PRODUCT MATRIX
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Product Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parsedFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 pb-3 border-b border-slate-200/50">
                    {feat.title}
                  </h3>
                  {feat.subTitle && (
                    <p className="text-xs font-mono font-bold text-slate-400 mb-3 uppercase tracking-wider">
                      {feat.subTitle}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {feat.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Health Monitoring Capabilities */}
      {parsedMonitoring.length > 0 && (
        <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1746D2] block mb-4">
                SENSING ENGINE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {monitoringTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parsedMonitoring.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2 pb-3 border-b border-slate-200/50">
                      {feat.title}
                    </h3>
                    {feat.subTitle && (
                      <p className="text-xs font-mono font-bold text-slate-400 mb-3 uppercase tracking-wider">
                        {feat.subTitle}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {feat.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section with Custom Tabs */}
      <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
              OUTCOMES & IMPACT
            </span>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
              Targeted Product Benefits
            </h2>
          </div>

           {/* Tab buttons */}
          <div className="flex flex-wrap justify-start md:justify-center gap-3 mb-12 pb-1">
            {benefitTabs.map((tabName) => {
              const isActive = activeTab === tabName;
              return (
                <button
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  className={`relative px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm border transform hover:-translate-y-0.5 active:translate-y-0 ${
                    isActive 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-blue-500/25 shadow-lg' 
                      : 'bg-white border-slate-200/80 text-slate-600 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 hover:shadow-emerald-500/20 hover:shadow-md'
                  }`}
                >
                  {tabName}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {dynamicBenefits[activeTab]?.map((benefit, bIdx) => (
                <div key={bIdx} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-start gap-4 hover:shadow-md transition">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-700 text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Use Cases Section */}
      {parsedUseCases.length > 0 && (
        <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1746D2] block mb-4">
                REAL-WORLD APPLICATION
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Enterprise Use Cases
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parsedUseCases.map((useCase, idx) => (
                <SpotlightCard key={idx}>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                    {useCase.sector}
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      SECTOR-{idx+1}
                    </span>
                  </h3>
                  <ul className="space-y-2">
                    {useCase.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Consumer Applications Section */}
      {consumerApps.length > 0 && (() => {
        // Group lines into categories based on empty-line boundaries
        const categoryIcons = { 
          "Productivity": "🗂️", "Education": "🎓", "Travel": "✈️", 
          "Fitness": "💪", "Entertainment": "🎮",
          "Elderly Care": "👵", "Sports Training": "🏃", "Home Healthcare": "🏡",
          "Personal Wellness": "🌱", "Smart Home": "🏠"
        };
        
        const blocks = [];
        let currentBlock = [];

        // Split into blocks by empty lines
        consumerApps.forEach(line => {
          const trimmed = line.trim();
          if (trimmed === "") {
            if (currentBlock.length > 0) {
              blocks.push(currentBlock);
              currentBlock = [];
            }
          } else {
            currentBlock.push(trimmed);
          }
        });
        if (currentBlock.length > 0) {
          blocks.push(currentBlock);
        }

        // Map blocks to group format: first line = category name, rest = items (filtering out lines ending in colons)
        const groups = blocks.map(block => {
          const name = block[0].replace(/:$/, '').trim();
          const rawItems = block.slice(1);
          // Check if the first item is a subheader ending with a colon
          let subHeader = "";
          let items = [];
          if (rawItems.length > 0 && rawItems[0].trim().endsWith(":")) {
            subHeader = rawItems[0].trim();
            items = rawItems.slice(1);
          } else {
            items = rawItems;
          }
          return { name, subHeader, items };
        }).filter(g => g.name && g.items.length > 0);

        return (
          <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1746D2] block mb-4">
                  B2C DEPLOYMENT
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Consumer Applications
                </h2>
                <p className="text-sm text-slate-500 font-semibold mt-4">
                  Empowering everyday users with next-generation personal intelligence.
                </p>
              </div>

              {/* Force HMR reload - update layout to 5 columns on desktop for glasses */}
              <div className={product.title.toLowerCase().includes("glasses")
                ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"}>
                {groups.map((group, idx) => (
                  <SpotlightCard
                    key={idx}
                    className={product.title.toLowerCase().includes("glasses")
                      ? "flex flex-col p-6 rounded-3xl border border-slate-100/80 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:border-[#1746D2]/40 transition-all duration-500 hover:-translate-y-1 flex-1"
                      : "flex flex-col p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{categoryIcons[group.name] || "✨"}</span>
                      <h3 className="font-display text-base md:text-lg font-extrabold text-slate-900">
                        {group.name}
                      </h3>
                    </div>
                    {group.subHeader && (
                      <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 pl-1">
                        {group.subHeader}
                      </p>
                    )}
                    <ul className="space-y-2 flex-1">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                          <span className="w-5 h-5 rounded-full bg-[#1746D2]/10 border border-[#1746D2]/20 text-[#1746D2] flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Product Variants / Customizations Section */}
      {parsedVariants.length > 0 && (
        <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
                PRODUCT VARIANTS
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {customTitle}
              </h2>
              <p className="text-sm text-slate-500 font-semibold mt-4">
                Tailored engineering configurations designed to address specific application sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {parsedVariants.map((variant, idx) => (
                <SpotlightCard
                  key={idx}
                  className="flex flex-col justify-between p-8 rounded-3xl border border-slate-100 bg-slate-50/20 hover:bg-slate-50/50 transition-all duration-300"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-mono text-[9px] font-bold uppercase tracking-wider mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      Variant {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                      {variant.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
                      {variant.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100/60 flex items-center justify-between text-[10px] font-mono font-bold text-slate-400">
                    <span>CONFIG // OPT-{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries We Serve Section */}
      {industries.length > 0 && (
        <section className="relative w-full py-20 bg-white border-b border-slate-200/80">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.002)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
          
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
                MARKET DEPLOYMENT
              </span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-sm text-slate-500 font-semibold mt-4">
                Our technology is engineered to integrate seamlessly into diverse global sectors.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {industries.map((ind, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.02 }}
                  className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-[#1746D2]/40 hover:bg-[#1746D2]/10/20 text-slate-700 hover:text-[#1746D2] font-semibold text-xs md:text-sm shadow-sm transition-all duration-300 flex items-center gap-2 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] animate-pulse" />
                  {ind}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specifications Section */}
      {/* Product Architecture Section */}
      {parsedArchitecture.length > 0 && (
        <section className="relative w-full py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          
          <div className="mx-auto max-w-[1400px] px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-400 block mb-4">
                SYSTEM TOPOLOGY
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {architectureTitle}
              </h2>
              {architectureIntro && (
                <p className="text-sm text-slate-400 font-semibold mt-4">
                  {architectureIntro}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {parsedArchitecture.map((block, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono text-xs font-bold mb-6">
                      L0{idx + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mb-4 pb-3 border-b border-white/10">
                      {block.title}
                    </h3>
                    {block.subTitle && (
                      <p className="text-xs font-mono font-bold text-blue-400 mb-3 uppercase tracking-wider">
                        {block.subTitle}
                      </p>
                    )}
                    <ul className="space-y-2.5">
                      {block.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-semibold leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {specs.length > 0 && (
        <section id="specs" className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
                DATA SHEET
              </span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                {specTitle}
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm max-w-4xl mx-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/80 font-mono text-xs font-bold uppercase text-slate-500 tracking-wider">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs md:text-sm font-semibold text-slate-700">
                  {specs.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition duration-150">
                      <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/20">{item.category}</td>
                      <td className="py-4 px-6 text-slate-600">{item.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Advanced Sensor Suite Section */}
      {sensorSuite.length > 0 && (() => {
        const title = sensorSuiteTitle;
        let subHeader = "";
        let items = [];

        if (sensorSuite.length > 0) {
          const firstLine = sensorSuite[0].trim();
          if (firstLine.endsWith(":")) {
            subHeader = firstLine;
            items = sensorSuite.slice(1);
          } else {
            items = sensorSuite;
          }
        }

        return (
          <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
                  BIOMETRIC HARDWARE
                </span>
                <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                  {title}
                </h2>
                {subHeader && (
                  <p className="text-sm text-slate-500 font-semibold mt-4">
                    {subHeader}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-100 bg-slate-50/20 hover:bg-slate-50 hover:border-blue-300 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all duration-300 flex items-center gap-3 cursor-default"
                  >
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                      📡
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Product Form Factors Section */}
      {formFactors.length > 0 && (() => {
        const title = formFactorsTitle;
        let subHeader = "";
        let items = [];

        if (formFactors.length > 0) {
          const firstLine = formFactors[0].trim();
          if (firstLine.endsWith(":")) {
            subHeader = firstLine;
            items = formFactors.slice(1);
          } else {
            items = formFactors;
          }
        }

        return (
          <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1746D2] block mb-4">
                  HARDWARE DEPLOYMENT
                </span>
                <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                  {title}
                </h2>
                {subHeader && (
                  <p className="text-sm text-slate-500 font-semibold mt-4">
                    {subHeader}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-[#1746D2]/40 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all duration-300 flex items-center gap-3 cursor-default"
                  >
                    <span className="w-8 h-8 rounded-xl bg-[#1746D2]/10 text-[#1746D2] flex items-center justify-center font-bold text-sm">
                      ⚙️
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Software Platform & Integrations */}
      {(parsedSoftwarePlatform.length > 0 || parsedIntegrations.length > 0) && (
        <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1746D2] block mb-4">
                PLATFORM ECOLOGY
              </span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                Software Platform & Ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Dynamic Software Platform Blocks */}
              {parsedSoftwarePlatform.map((block, bIdx) => {
                const totalBlocks = parsedSoftwarePlatform.length + parsedIntegrations.length;
                const isLastOdd = totalBlocks % 2 !== 0 && bIdx === parsedSoftwarePlatform.length - 1 && parsedIntegrations.length === 0;
                
                return (
                  <div 
                    key={bIdx} 
                    className={`p-8 rounded-3xl border border-slate-100 bg-slate-50/40 flex flex-col justify-between ${isLastOdd ? "lg:col-span-2" : ""}`}
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900 mb-2 pb-3 border-b border-slate-200/50 flex items-center justify-between">
                        {block.title}
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded">
                          MODULE 0{bIdx + 1}
                        </span>
                      </h3>
                      {block.subHeader && (
                        <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 leading-relaxed">
                          {block.subHeader}
                        </p>
                      )}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {block.items.map((item, idx) => (
                          <li key={idx} className="p-3.5 rounded-xl border border-slate-100 bg-white shadow-sm flex items-center gap-3 text-xs font-semibold text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {block.footerText && (
                      <p className="text-[10px] font-mono font-bold text-slate-400 border-t border-slate-100 pt-4 leading-relaxed mt-4">
                        ℹ️ {block.footerText}
                      </p>
                    )}
                  </div>
                );
              })}

              {parsedIntegrations.map((block, bIdx) => {
                const totalBlocks = parsedSoftwarePlatform.length + parsedIntegrations.length;
                const isLastOdd = totalBlocks % 2 !== 0 && bIdx === parsedIntegrations.length - 1;
                const isPillBlock = block.title.toLowerCase().includes("integration") || 
                                    block.title.toLowerCase().includes("compatible") || 
                                    block.title.toLowerCase().includes("interoperability") || 
                                    block.title.toLowerCase().includes("api");
                
                return (
                  <div 
                    key={`int-${bIdx}`} 
                    className={`p-8 rounded-3xl border border-slate-100 bg-slate-50/40 flex flex-col justify-between ${isLastOdd ? "lg:col-span-2" : ""}`}
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900 mb-2 pb-3 border-b border-slate-200/50 flex items-center justify-between">
                        {block.title}
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded">
                          ECOSYSTEM 0{bIdx + 1}
                        </span>
                      </h3>
                      {block.subHeader && (
                        <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 leading-relaxed">
                          {block.subHeader}
                        </p>
                      )}
                      
                      {isPillBlock ? (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {block.items.map((item, idx) => (
                            <span key={idx} className="px-3 py-1.5 rounded-lg bg-white border border-slate-100 shadow-sm text-xs font-semibold text-slate-600 hover:border-blue-400 transition cursor-default">
                              {item}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                          {block.items.map((item, idx) => (
                            <li key={idx} className="p-3.5 rounded-xl border border-slate-100 bg-white shadow-sm flex items-center gap-3 text-xs font-semibold text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {block.footerText && (
                      <p className="text-[10px] font-mono font-bold text-slate-400 border-t border-slate-100 pt-4 leading-relaxed mt-4">
                        ℹ️ {block.footerText}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Security & Compliance Trust Center */}
      <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
              TRUST FRAMEWORK
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Security, Privacy & Governance
            </h2>
          </div>

          <div className="flex flex-col gap-10 max-w-[1400px] mx-auto">
            {/* Security Capabilities */}
            <div className="relative overflow-hidden p-8 lg:p-10 rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:border-blue-200/50 group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-blue-400/10" />
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center text-base">🛡️</span>
                    {securityTitle}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    TRUST CERTIFIED
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {securityPrivacy.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-slate-700 font-semibold leading-relaxed hover:translate-x-1 transition-transform duration-200">
                      <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compliance Certifications */}
            <div className="relative overflow-hidden p-8 lg:p-10 rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/50 to-[#1746D2]/10/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:border-[#1746D2]/40/50 group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1746D2]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#1746D2]/10" />
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#1746D2]/10 text-[#1746D2] flex items-center justify-center text-base">🌐</span>
                    {complianceTitle}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#1746D2] bg-[#1746D2]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    GLOBAL COMPLIANCE
                  </span>
                </div>
                {parsedCertifications.introText && (
                  <p className="text-sm md:text-base text-slate-500 mb-8 font-semibold leading-relaxed max-w-4xl">
                    {parsedCertifications.introText}
                  </p>
                )}
                <div className="space-y-8">
                  {parsedCertifications.categories.map((cat, idx) => (
                    <div key={idx} className="pb-6 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1746D2]" />
                        {cat.name}
                      </h4>
                      {cat.description ? (
                        <p className="text-xs md:text-sm font-semibold text-slate-500 bg-slate-50/50 p-4 rounded-xl border border-slate-100 leading-relaxed max-w-3xl">
                          {cat.description}
                        </p>
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {cat.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-100 hover:border-[#1746D2]/40 hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] transition-all duration-300 text-xs md:text-sm text-slate-700 font-semibold">
                              <span className="text-emerald-500 font-extrabold mt-0.5">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lifecycle Services Section */}
      {lifecycle.length > 0 && (
        <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1746D2] block mb-4">
                CAPABILITIES & PARTNERSHIP
              </span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                Product Lifecycle Services
              </h2>
              {lifecycle[0] && (
                <p className="text-sm text-slate-500 font-semibold mt-4">
                  {lifecycle[0]}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lifecycle.slice(1).map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200/60 bg-white shadow-sm flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#1746D2]/10 text-[#1746D2] flex items-center justify-center font-mono text-xs font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs md:text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Future Roadmap */}
      {roadmap.length > 0 && (
        <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1746D2] block mb-4">
                DEVELOPMENT CYCLE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Future Technology Roadmap
              </h2>
            </div>

            <div className="relative">
              {/* Center Line for Desktop Timeline */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200" />
              
              <div className="space-y-12 relative z-10 max-w-4xl mx-auto">
                {roadmap.slice(1).map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div 
                      key={idx} 
                      className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 relative ${
                        isEven ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1746D2] border-4 border-white shadow-sm z-20 hidden lg:block" />

                      {/* Content Card */}
                      <div className="w-full lg:w-1/2">
                        <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 backdrop-blur-md shadow-sm">
                          <span className="font-mono text-[10px] font-bold text-[#1746D2] bg-[#1746D2]/10 border border-[#1746D2]/10 px-2 py-0.5 rounded block w-fit mb-3">
                            PHASE {idx + 1}
                          </span>
                          <p className="text-sm font-bold text-slate-800 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      </div>

                      {/* Empty spacer for grid alignment */}
                      <div className="hidden lg:block w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {whyChooseUs.length > 0 && (
        <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
                ADVANTAGE
              </span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                {whyChooseTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.slice(1).map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#1746D2]/10 border border-[#1746D2]/10 text-[#1746D2] flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-700 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore Other Products Section */}
      <section className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-4">
              PRODUCT NAVIGATION
            </span>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore Other Innovations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deepTechData.products
              .filter(p => slugify(p.title) !== slugify(product.title))
              .slice(0, 3)
              .map((p, idx) => {
                const pSlug = slugify(p.title);
                return (
                  <SpotlightCard key={idx} className="flex flex-col justify-between h-[280px]">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                        DEEP-TECH // PORTFOLIO
                      </span>
                      <h3 className="font-display text-lg font-bold text-slate-900 mb-3 leading-snug line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold line-clamp-3">
                        {p.tagline}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100/60 flex items-center justify-between">
                      <Link
                        to={`/deep-tech-products/${pSlug}`}
                        className="inline-flex items-center gap-1.5 font-mono text-[0.75rem] font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition"
                      >
                        View Details
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                    </div>
                  </SpotlightCard>
                );
              })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative w-full py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        {/* Soft background grid & glowing orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400 block mb-6">
            LAUNCH YOUR OWN ENTERPRISE
          </span>
          <h2 className="font-display text-3xl md:text-[2.7rem] font-extrabold leading-tight mb-8 tracking-tight">
            {finalCTA[0] || "Let's Build the Next Global Deep-Tech Innovation Together"}
          </h2>
          {finalCTA.slice(1).map((para, idx) => (
            <p key={idx} className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
              {para}
            </p>
          ))}
          
          <div className="mt-10">
            <Link
              to={`/lets-connect?inquiry=${encodeURIComponent(product.title)}`}
              className="px-10 py-5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold shadow-lg transition-all duration-300 text-base"
            >
              {finalCTA.find(line => line.includes("Launch Your")) || "Launch Your Own AI Product Company"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
