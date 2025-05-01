
import React, { useState } from 'react';
import { Atom, Database, Flask } from 'lucide-react';

const TechDeepDiveSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: "nano-filter",
      title: "Nano-Filter Coating",
      icon: <Flask className="w-5 h-5" />,
      content: (
        <div>
          <p className="text-gray-300 mb-6">
            Our proprietary inverse nanoparticle-polymer composite creates a hydrophilic surface that actively draws water inward while maintaining structural integrity. The coating contains three key innovations:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nymara-aqua/20 flex items-center justify-center mt-1">
                <span className="text-nymara-aqua font-bold">1</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Hydrophilic Polymer Matrix</h4>
                <p className="text-gray-400 text-sm">
                  Cross-linked PVA/ceramic composite with aligned nanochannels for directional water flow
                  <span className="text-xs text-nymara-aqua cursor-help ml-1" title="Source: Rahman et al., 2022, Advanced Materials">
                    [citation]
                  </span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nymara-aqua/20 flex items-center justify-center mt-1">
                <span className="text-nymara-aqua font-bold">2</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Adsorption Nanoparticles</h4>
                <p className="text-gray-400 text-sm">
                  Embedded ZnO and TiO2 nanostructures capture and break down organic pollutants
                  <span className="text-xs text-nymara-aqua cursor-help ml-1" title="Source: Zhang et al., 2021, Nature Materials">
                    [citation]
                  </span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nymara-aqua/20 flex items-center justify-center mt-1">
                <span className="text-nymara-aqua font-bold">3</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Self-Healing Mechanism</h4>
                <p className="text-gray-400 text-sm">
                  Microcapsules containing healing agents that activate when surface integrity is compromised
                  <span className="text-xs text-nymara-aqua cursor-help ml-1" title="Source: Nymara Labs, Patent Pending">
                    [patent pending]
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "material-mix",
      title: "Material Mix",
      icon: <Atom className="w-5 h-5" />,
      content: (
        <div>
          <p className="text-gray-300 mb-6">
            Our hyper-porous concrete combines traditional and innovative materials to achieve unprecedented porosity while maintaining structural integrity. The mix includes:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-nymara-aqua">Component</th>
                  <th className="py-3 px-4 text-nymara-aqua">Percentage</th>
                  <th className="py-3 px-4 text-nymara-aqua">Function</th>
                  <th className="py-3 px-4 text-nymara-aqua">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Portland Cement</td>
                  <td className="py-3 px-4 text-gray-300">12%</td>
                  <td className="py-3 px-4 text-gray-400">Binding agent</td>
                  <td className="py-3 px-4 text-gray-300">$0.67/m²</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Fly Ash (Type F)</td>
                  <td className="py-3 px-4 text-gray-300">8%</td>
                  <td className="py-3 px-4 text-gray-400">Enhanced porosity</td>
                  <td className="py-3 px-4 text-gray-300">$0.23/m²</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Recycled Aggregates</td>
                  <td className="py-3 px-4 text-gray-300">65%</td>
                  <td className="py-3 px-4 text-gray-400">Structural framework</td>
                  <td className="py-3 px-4 text-gray-300">$4.15/m²</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Bio-based Additives</td>
                  <td className="py-3 px-4 text-gray-300">3%</td>
                  <td className="py-3 px-4 text-gray-400">Stability, pollutant capture</td>
                  <td className="py-3 px-4 text-gray-300">$1.95/m²</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white">Proprietary Mix</td>
                  <td className="py-3 px-4 text-gray-300">12%</td>
                  <td className="py-3 px-4 text-gray-400">Water direction, filtration</td>
                  <td className="py-3 px-4 text-gray-300">$1.03/m²</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-gray-400 italic">
            Our materials have undergone 37 iterations and 1,500+ hours of testing to optimize the balance of porosity, strength, and cost-effectiveness.
          </div>
        </div>
      )
    },
    {
      id: "ai-site-selection",
      title: "AI Site Selection",
      icon: <Database className="w-5 h-5" />,
      content: (
        <div>
          <p className="text-gray-300 mb-6">
            Our proprietary AI system helps cities identify optimal locations for hyper-porous road implementations, maximizing flood prevention impact while minimizing costs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-medium mb-3">Data Sources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Historical flooding patterns (50-year data)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Topographical surveys & drainage maps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Soil permeability & groundwater levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Traffic patterns & infrastructure age</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Population density & critical facility maps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Projected climate change impacts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-medium mb-3">Algorithm Pipeline</h4>
              <div className="space-y-4">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-nymara-aqua/30"></div>
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-nymara-aqua transform -translate-x-[3px]"></div>
                  <div className="font-medium text-nymara-aqua">Random Forest Classification</div>
                  <div className="text-xs text-gray-400">Initial screening of high-potential areas</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-nymara-aqua/30"></div>
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-nymara-aqua transform -translate-x-[3px]"></div>
                  <div className="font-medium text-nymara-aqua">CNN Image Analysis</div>
                  <div className="text-xs text-gray-400">Satellite & street-level imagery analysis</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-nymara-aqua/30"></div>
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-nymara-aqua transform -translate-x-[3px]"></div>
                  <div className="font-medium text-nymara-aqua">3D Hydrological Modeling</div>
                  <div className="text-xs text-gray-400">Water flow simulations with/without solutions</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-nymara-aqua transform -translate-x-[3px]"></div>
                  <div className="font-medium text-nymara-aqua">Genetic Algorithm Optimization</div>
                  <div className="text-xs text-gray-400">Iteratively optimizes implementation plans</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-white bg-nymara-aqua/10 p-4 rounded-lg">
            Case study: In Jakarta simulations, our AI identified implementation patterns that would reduce flooding by 73% at just 58% of the cost of conventional methods.
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="tech" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-nymara-darker to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-nymara-aqua/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-nymara-orange/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient-aqua">Science Under the Surface</span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Our technology combines cutting-edge materials science, civil engineering, and artificial intelligence to create roads that aren't just durable—they're actively working to prevent flooding.
        </p>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === index
                  ? "bg-gradient-to-r from-nymara-aqua to-blue-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-xl animate-scale-in">
          {tabs[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default TechDeepDiveSection;
