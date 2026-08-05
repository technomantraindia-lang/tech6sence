import { StrictMode, Suspense, lazy, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'
import GoToTop from './components/GoToTop'
import { startPerformanceTester } from './performanceTester'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const AIAgents = lazy(() => import('./pages/AIAgents'))
const GenAI = lazy(() => import('./pages/GenAI'))
const ComputerVision = lazy(() => import('./pages/ComputerVision'))
const DataIntelligence = lazy(() => import('./pages/DataIntelligence'))
const EnterpriseAI = lazy(() => import('./pages/EnterpriseAI'))
const DeepTechProducts = lazy(() => import('./pages/DeepTechProducts'))
const DeepTechProductDetail = lazy(() => import('./pages/DeepTechProductDetail'))
const Industries = lazy(() => import('./pages/Industries'))
const SuccessStories = lazy(() => import('./pages/SuccessStories'))
const Ecosystem = lazy(() => import('./pages/Ecosystem'))
const LetsConnect = lazy(() => import('./pages/LetsConnect'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
import VisionaryFounders from './pages/VisionaryFounders'
import BusinessBrains from './pages/BusinessBrains'
const Blogs = lazy(() => import('./pages/Blogs'))
import LoadingScreen from './components/LoadingScreen'
import Lenis from 'lenis'

// Initialize Lenis globally for buttery-smooth inertial scrolling
if (typeof window !== 'undefined') {
  const params = new URLSearchParams(window.location.search)
  const disableLenis = params.get('disableLenis') === 'true'

  if (!disableLenis) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    window.lenis = lenis
    console.log("[Performance] Lenis initialized");
  } else {
    console.warn("[Performance] Lenis disabled via query parameter");
  }
}

function AppWrapper({ children }) {
  const { pathname } = useLocation();
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      // Always play loader in development or if query parameter ?loader=true is set
      if (import.meta.env.DEV || params.get('loader') === 'true') {
        return true;
      }
      const hasVisited = sessionStorage.getItem('t6s_visited');
      const isReload = typeof performance !== 'undefined' && 
        (performance.navigation?.type === 1 || 
         performance.getEntriesByType?.('navigation')?.[0]?.type === 'reload');
      return !hasVisited || isReload;
    }
    return true;
  });

  useEffect(() => {
    if (import.meta.env.DEV) {
      const stopTester = startPerformanceTester();
      return () => stopTester();
    }
  }, []);

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('t6s_visited', 'true');
    setShowLoader(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <LoadingScreen key="site-loader" onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        style={{ width: '100%', minHeight: '100vh' }}
      >
        {children}
      </motion.div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/gen-ai" element={<GenAI />} />
          <Route path="/computer-vision" element={<ComputerVision />} />
          <Route path="/data-intelligence" element={<DataIntelligence />} />
          <Route path="/enterprise-ai" element={<EnterpriseAI />} />
          <Route path="/deep-tech-products" element={<DeepTechProducts />} />
          <Route path="/deep-tech-products/:productId" element={<DeepTechProductDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/lets-connect" element={<LetsConnect />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/visionary-founders" element={<VisionaryFounders />} />
          <Route path="/business-brains" element={<BusinessBrains />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Suspense>
      <GoToTop />
      </AppWrapper>
    </BrowserRouter>
  </StrictMode>,
)
