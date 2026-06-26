import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import AIAgents from './pages/AIAgents'
import GenAI from './pages/GenAI'
import ComputerVision from './pages/ComputerVision'
import DataIntelligence from './pages/DataIntelligence'
import EnterpriseAI from './pages/EnterpriseAI'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai-agents" element={<AIAgents />} />
        <Route path="/gen-ai" element={<GenAI />} />
        <Route path="/computer-vision" element={<ComputerVision />} />
        <Route path="/data-intelligence" element={<DataIntelligence />} />
        <Route path="/enterprise-ai" element={<EnterpriseAI />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
