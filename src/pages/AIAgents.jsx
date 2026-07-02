import React from 'react';
import Header from '../components/Header';
import AIAgentsHero from '../components/ai-agents/AIAgentsHero';
import AIAgentsIntro from '../components/ai-agents/AIAgentsIntro';
import AIAgentsCapabilities from '../components/ai-agents/AIAgentsCapabilities';
import AIAgentsUseCases from '../components/ai-agents/AIAgentsUseCases';
import AIAgentsWorkflow from '../components/ai-agents/AIAgentsWorkflow';
import AIAgentsBenefits from '../components/ai-agents/AIAgentsBenefits';
import IntelligentSolutionsEcosystem from '../components/ai-agents/IntelligentSolutionsEcosystem';

export default function AIAgents() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-white">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-28">
        <AIAgentsHero />
        <IntelligentSolutionsEcosystem />
        <AIAgentsIntro />
        <AIAgentsCapabilities />
        <AIAgentsUseCases />
        <AIAgentsWorkflow />
        <AIAgentsBenefits />
      </main>
      
    </div>
  );
}
