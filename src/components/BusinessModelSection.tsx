import React from 'react';
import { Handshake, ChartBar } from 'lucide-react';

const BusinessModelSection = () => {
  // Partner logos
  const partners = [
    {
      name: "LafargeHolcim",
      logo: "/partners/holcim.png",
      type: "Material"
    },
    {
      name: "CEMEX",
      logo: "/partners/cemex.png",
      type: "Material"
    },
    {
      name: "BASF",
      logo: "/partners/basf.png",
      type: "Chemical"
    },
    {
      name: "Heidelberg",
      logo: "/partners/heidelberg.png",
      type: "Material"
    }
  ];

  return (
    <section id="business" className="py-20 md:py-32 bg-nymara-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-nymara-dark to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-medium mb-8 text-center">
          <span className="text-gradient-blue">Scale with Materials + Platform</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Nymara's dual revenue model combines materials licensing<br />
          and a software platform to offer complete flood management<br />
          solutions to cities worldwide.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {/* Business Model */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-nymara-aqua/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-nymara-aqua/10 rounded-full blur-2xl group-hover:bg-nymara-aqua/20 transition-colors"></div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-nymara-aqua/20 flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-nymara-aqua" />
                </div>
                <h3 className="text-2xl font-medium text-white">Licensing Model</h3>
              </div>
            </div>
            
            {/* New 2-column layout for description and bullet list */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="flex-1">
                <p className="text-gray-300 mb-6">
                  We partner with global chemical and construction material companies to license our hyper-porous road technology at scale. This allows rapid deployment while maintaining quality control.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-nymara-aqua text-xs">✓</span>
                    </span>
                    <span className="text-gray-300 text-sm">One-contract deployment across multiple markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-nymara-aqua text-xs">✓</span>
                    </span>
                    <span className="text-gray-300 text-sm">8-12% licensing fee on all installed materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-nymara-aqua text-xs">✓</span>
                    </span>
                    <span className="text-gray-300 text-sm">Co-branding opportunities with leading infrastructure companies</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="/business.png" 
                  alt="Growth Icon" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain" 
                />
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-6">Our Material Partners</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partners.map((partner) => (
                  <div key={partner.name} className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
                    <div className="h-16 md:h-20 flex items-center justify-center mb-3">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-12 md:max-h-16 max-w-full object-contain bg-white p-2 rounded" 
                      />
                    </div>
                    <p className="text-sm text-center text-white">{partner.name}</p>
                    <p className="text-xs text-center text-nymara-aqua">{partner.type}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-sm text-gray-300 bg-nymara-aqua/10 p-4 rounded-lg">
              Our business model creates a 3:1 ROI for cities within 5 years through direct savings on flood damage, infrastructure maintenance, and water treatment costs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;

