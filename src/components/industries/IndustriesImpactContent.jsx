import React from 'react';
import { useNavigate } from 'react-router-dom';
import { industriesImpactData } from '../../data/industriesImpactData';

const industriesImages = import.meta.glob('../../assets/industries images/*.avif', { eager: true });

export default function IndustriesImpactContent() {
  const navigate = useNavigate();

  const getIndustryImage = (title) => {
    const searchKey = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const searchKeyNoAnd = searchKey.replace(/and/g, '');
    
    // Hardcode mapping for Manufacturing & Supply Chain
    if (searchKey.includes('manufacturing')) {
      const target = '../../assets/industries images/Manufacturing AI Solutions.avif';
      return industriesImages[target] ? industriesImages[target].default : null;
    }
    
    // Hardcode mapping for Smart Cities
    if (searchKey.includes('smartcities') || searchKey.includes('government')) {
      const target = '../../assets/industries images/Government, Smart Cities & Public Infrastructure AI Solutions.avif';
      return industriesImages[target] ? industriesImages[target].default : null;
    }
    
    const imageKeys = Object.keys(industriesImages);
    const matchedKey = imageKeys.find(k => {
      const cleanK = k.split('/').pop().toLowerCase().replace(/[^a-z0-9]/g, '');
      if (cleanK.includes(searchKey)) return true;
      if (cleanK.includes(searchKeyNoAnd)) return true;
      if (searchKey.includes('finance') && cleanK.includes('financ')) return true;
      if (searchKey.includes('pharma') && cleanK.includes('pharma')) return true;
      return false;
    });
    
    return matchedKey ? industriesImages[matchedKey].default : null;
  };

  return (
    <div className="bg-slate-50 font-body py-20 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
            <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-slate-500">
              INDUSTRY DIRECTORY
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Industry Hubs</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Artificial intelligence isn't industry-specific – it's industry-transforming. Select an industry below to explore tailored AI solutions, critical challenges, and measurable business impacts.
          </p>
        </div>

        {/* Industries List (Info-Rich Horizontal Cards) */}
        <div className="grid grid-cols-1 gap-12">
          {industriesImpactData.map((industry, idx) => {
            const snippet = industry.challenges?.[0]?.description || "Detailed AI transformation insights and capabilities are coming soon for this sector.";
            const techList = industry.solutions?.[0]?.technology || [];
            const bgImage = getIndustryImage(industry.title);
            
            return (
              <div 
                key={industry.id} 
                onClick={() => navigate(`/industries/${industry.id}`)}
                className="group flex flex-col lg:flex-row bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(23,70,210,0.35)] hover:border-blue-300 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Image (Left) */}
                <div className="lg:w-2/5 relative bg-slate-100 border-r border-slate-100 overflow-hidden min-h-[250px] lg:min-h-full flex items-center justify-center">
                  {bgImage ? (
                    <img 
                      src={bgImage} 
                      alt={industry.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-emerald-50/50 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/40 rounded-full blur-2xl" />
                      <div className="relative z-10 flex flex-col items-center gap-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-500">
                        <svg className="w-12 h-12 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">Image Missing</span>
                      </div>
                    </>
                  )}
                  {/* Subtle dark overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content (Right) */}
                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                      Sector Intelligence
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-8">
                    {snippet}
                  </p>

                  {/* Info-Rich Capabilities List */}
                  {techList.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                      {techList.slice(0, 4).map((tech, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                          <span className="text-sm font-medium text-slate-700 leading-relaxed">{tech}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Call to Action */}
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all duration-300">
                      Explore Detailed Insights
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
