
import React, { useState } from 'react';
import { Handshake, ChartBar } from 'lucide-react';

const BusinessModelSection = () => {
  const [sliderValue, setSliderValue] = useState(1); // 0=NYC, 1=Mumbai, 2=Jakarta

  const cityData = [
    {
      name: "New York City",
      licensingRevenue: "$47.8M",
      platformRevenue: "$12.5M",
      costSavings: "$126M",
      roadsReplaceable: "34%",
      floodRisk: "Medium-High",
      implementationTime: "5-8 years"
    },
    {
      name: "Mumbai",
      licensingRevenue: "$22.3M",
      platformRevenue: "$8.7M",
      costSavings: "$94M",
      roadsReplaceable: "52%",
      floodRisk: "Very High",
      implementationTime: "3-5 years"
    },
    {
      name: "Jakarta",
      licensingRevenue: "$18.5M",
      platformRevenue: "$7.2M",
      costSavings: "$103M",
      roadsReplaceable: "47%",
      floodRisk: "Extreme",
      implementationTime: "4-6 years"
    }
  ];
  
  const currentCity = cityData[sliderValue];

  return (
    <section id="business" className="py-20 md:py-32 bg-nymara-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-nymara-dark to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient-orange">Scale with Materials + Platform</span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Nymara's dual revenue model combines materials licensing and a software platform to offer complete flood management solutions to cities worldwide.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: Business Models */}
          <div className="space-y-8">
            {/* Licensing Model */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-nymara-orange/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nymara-orange/10 rounded-full blur-2xl group-hover:bg-nymara-orange/20 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-nymara-orange/20 flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-nymara-orange" />
                </div>
                <h3 className="text-2xl font-bold text-white">Licensing Model</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                We partner with global chemical and construction material companies to license our hyper-porous road technology at scale. This allows rapid deployment while maintaining quality control.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-nymara-orange text-xs">✓</span>
                  </span>
                  <span className="text-gray-300 text-sm">One-contract deployment across multiple markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-nymara-orange text-xs">✓</span>
                  </span>
                  <span className="text-gray-300 text-sm">8-12% licensing fee on all installed materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-nymara-orange text-xs">✓</span>
                  </span>
                  <span className="text-gray-300 text-sm">Co-branding opportunities with leading infrastructure companies</span>
                </li>
              </ul>
            </div>
            
            {/* SUFPaaS Model */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-nymara-aqua/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nymara-aqua/10 rounded-full blur-2xl group-hover:bg-nymara-aqua/20 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-nymara-aqua/20 flex items-center justify-center">
                  <ChartBar className="w-6 h-6 text-nymara-aqua" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  SUFPaaS <span className="text-sm font-normal text-gray-400">(Stormwater Urban Filtration Platform as a Service)</span>
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Our software platform provides cities with real-time monitoring, predictive analytics, and maintenance optimization for their hyper-porous road networks.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-nymara-aqua text-xs">✓</span>
                  </span>
                  <span className="text-gray-300 text-sm">Tiered SaaS pricing based on city size, flood risk, and implementation scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-nymara-aqua text-xs">✓</span>
                  </span>
                  <span className="text-gray-300 text-sm">Annual contracts with 92% renewal rates in pilot cities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-nymara-aqua text-xs">✓</span>
                  </span>
                  <span className="text-gray-300 text-sm">Data-driven insights reduce maintenance costs by 34% on average</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right side: City Comparison */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-6">
              City Comparison: <span className="text-nymara-aqua">{currentCity.name}</span>
            </h3>
            
            {/* City Slider */}
            <div className="mb-8">
              <input
                type="range"
                min="0"
                max="2"
                value={sliderValue}
                onChange={(e) => setSliderValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-nymara-aqua"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>New York City</span>
                <span>Mumbai</span>
                <span>Jakarta</span>
              </div>
            </div>
            
            {/* City Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-sm text-gray-400">Licensing Revenue Potential</div>
                <div className="text-2xl font-bold text-nymara-orange mt-1">{currentCity.licensingRevenue}</div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-sm text-gray-400">Platform Revenue Potential</div>
                <div className="text-2xl font-bold text-nymara-aqua mt-1">{currentCity.platformRevenue}</div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-sm text-gray-400">Annual Cost Savings</div>
                <div className="text-2xl font-bold text-green-400 mt-1">{currentCity.costSavings}</div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-sm text-gray-400">Roads Replaceable</div>
                <div className="text-2xl font-bold text-white mt-1">{currentCity.roadsReplaceable}</div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400">Flood Risk Level</div>
                <div className="text-lg font-medium text-white mt-1">{currentCity.floodRisk}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400">Implementation Timeline</div>
                <div className="text-lg font-medium text-white mt-1">{currentCity.implementationTime}</div>
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
