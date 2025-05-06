
import React, { useState } from 'react';
import { Atom, Database, FlaskConical, Filter } from 'lucide-react';

const TechDeepDiveSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: "nano-coating",
      title: "Nano-Coating",
      icon: <FlaskConical className="w-5 h-5" />,
      content: (
        <div>
          <p className="text-gray-300 mb-6">
            Our specialized SiO₂-based nanocoating functions as a selective filter—permitting water to pass through while blocking debris and particulates. This advanced material is engineered using an inverse nanoparticle-polymer composite structure.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nymara-aqua/20 flex items-center justify-center mt-1">
                <span className="text-nymara-aqua font-bold">1</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Interconnected Nanoscaffold</h4>
                <p className="text-gray-400 text-sm">
                  Rigid, interconnected scaffold of silica (SiO₂) nanoparticles created using sol-gel chemistry
                  <span className="text-xs text-nymara-aqua cursor-help ml-1" title="Source: Materials Science Engineering">
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
                <h4 className="text-white font-medium mb-1">Polymer Binder Integration</h4>
                <p className="text-gray-400 text-sm">
                  Infiltration with functionalized silanes like MEMO or ECHTMO, solidified through UV exposure
                  <span className="text-xs text-nymara-aqua cursor-help ml-1" title="Source: MDPI Nanomaterials">
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
                <h4 className="text-white font-medium mb-1">Hierarchical Pore Structure</h4>
                <p className="text-gray-400 text-sm">
                  Multi-scale porosity from nano to meso scale enabling up to 75% porosity while filtering particles >100 µm
                  <span className="text-xs text-nymara-aqua cursor-help ml-1" title="Source: Nymara Labs, Patent Pending">
                    [patent pending]
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-sm bg-white/5 rounded-lg p-4">
            <h4 className="text-nymara-aqua font-medium mb-2">Nano-coating Cost Breakdown</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2 px-3">Component</th>
                    <th className="py-2 px-3">Cost (USD/m²)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3 text-gray-300">Silica Sol (Colloidal SiO₂)</td>
                    <td className="py-2 px-3 text-gray-300">$0.70</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3 text-gray-300">Functionalized Silanes</td>
                    <td className="py-2 px-3 text-gray-300">$1.40</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3 text-gray-300">Polymeric Binders</td>
                    <td className="py-2 px-3 text-gray-300">$0.60</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3 text-gray-300">UV Curing</td>
                    <td className="py-2 px-3 text-gray-300">$0.40</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3 text-gray-300">Labor & Equipment</td>
                    <td className="py-2 px-3 text-gray-300">$0.80</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-300">Testing & Overhead</td>
                    <td className="py-2 px-3 text-gray-300">$1.10</td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="py-2 px-3 font-medium text-white">Total Cost</td>
                    <td className="py-2 px-3 font-medium text-white">$5.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "material-mix",
      title: "Concrete Mix",
      icon: <Atom className="w-5 h-5" />,
      content: (
        <div>
          <p className="text-gray-300 mb-6">
            Our hyper-porous concrete achieves unprecedented permeability (57.82 in/hr) while maintaining structural integrity (3500 psi compressive strength). This specialized mix creates a permeable surface that allows water to pass directly into the layers below.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-nymara-aqua">Material</th>
                  <th className="py-3 px-4 text-nymara-aqua">Quantity per yd³</th>
                  <th className="py-3 px-4 text-nymara-aqua">Cost per yd³</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Cement (Holcim)</td>
                  <td className="py-3 px-4 text-gray-300">29.6 lbs</td>
                  <td className="py-3 px-4 text-gray-300">$4.14</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Fly Ash</td>
                  <td className="py-3 px-4 text-gray-300">8.5 lbs</td>
                  <td className="py-3 px-4 text-gray-300">$0.85</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Crushed Stone (#8)</td>
                  <td className="py-3 px-4 text-gray-300">208.8 lbs</td>
                  <td className="py-3 px-4 text-gray-300">$10.44</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Sand</td>
                  <td className="py-3 px-4 text-gray-300">5.6 lbs</td>
                  <td className="py-3 px-4 text-gray-300">$0.39</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Specialized Admixtures</td>
                  <td className="py-3 px-4 text-gray-300">0.83 lbs</td>
                  <td className="py-3 px-4 text-gray-300">$9.70</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Water</td>
                  <td className="py-3 px-4 text-gray-300">13 lbs</td>
                  <td className="py-3 px-4 text-gray-300">$0.13</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="py-3 px-4 font-medium text-white">Total (per yd³)</td>
                  <td className="py-3 px-4 text-gray-300">266.33 lbs</td>
                  <td className="py-3 px-4 font-medium text-white">$25.56</td>
                </tr>
                <tr className="bg-white/10">
                  <td className="py-3 px-4 font-medium text-white">Cost per m² (0.24m thickness)</td>
                  <td className="py-3 px-4 text-gray-300"></td>
                  <td className="py-3 px-4 font-medium text-white">$8.03</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6">
            <h4 className="text-white font-medium mb-3">Material Properties</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-xs text-nymara-aqua mb-1">Permeability</p>
                <p className="text-lg font-medium text-white">57.82 in/hr</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-xs text-nymara-aqua mb-1">Porosity</p>
                <p className="text-lg font-medium text-white">20%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-xs text-nymara-aqua mb-1">Compressive Strength</p>
                <p className="text-lg font-medium text-white">3,500 psi</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ai-site-selection",
      title: "AI-Driven Placement",
      icon: <Database className="w-5 h-5" />,
      content: (
        <div>
          <p className="text-gray-300 mb-6">
            Installing this technology citywide requires pinpointing where it will deliver the greatest impact. Nymara's AI platform helps cities determine which road segments to upgrade first based on flood risk, traffic patterns, soil conditions, and infrastructure constraints.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-medium mb-3">Data Inputs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>High-resolution LiDAR topography</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Historical flood records & patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Stormwater pipe maps & capacity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Real-time IoT sensor feeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Traffic volume & critical routes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Soil permeability & stability surveys</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-medium mb-3">Hybrid Modeling Pipeline</h4>
              <div className="space-y-4">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-nymara-aqua/30"></div>
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-nymara-aqua transform -translate-x-[3px]"></div>
                  <div className="font-medium text-nymara-aqua">Random Forest Classification</div>
                  <div className="text-xs text-gray-400">Predicts flood susceptibility using elevation, catchment area, pipe capacity</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-nymara-aqua/30"></div>
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-nymara-aqua transform -translate-x-[3px]"></div>
                  <div className="font-medium text-nymara-aqua">CNN Analysis</div>
                  <div className="text-xs text-gray-400">Detects micro-topographic anomalies from satellite imagery</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-nymara-aqua/30"></div>
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-nymara-aqua transform -translate-x-[3px]"></div>
                  <div className="font-medium text-nymara-aqua">Genetic Optimization</div>
                  <div className="text-xs text-gray-400">Balances cost, flood mitigation benefit, and traffic impact</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-nymara-aqua transform -translate-x-[3px]"></div>
                  <div className="font-medium text-nymara-aqua">Explainable AI</div>
                  <div className="text-xs text-gray-400">SHAP values and feature importance plots for transparency</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-white font-medium mb-3">Business Model</h4>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-nymara-aqua">Site-Selection Platform</p>
                  <p className="text-lg text-white font-medium">$5,000<span className="text-sm font-normal">/year</span></p>
                  <p className="text-xs text-gray-400">Full platform access for cities</p>
                </div>
                <div>
                  <p className="text-sm text-nymara-aqua">Individual Site Reports</p>
                  <p className="text-lg text-white font-medium">$500<span className="text-sm font-normal">/report</span></p>
                  <p className="text-xs text-gray-400">For targeted analysis</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-white bg-nymara-aqua/10 p-4 rounded-lg">
            <p>By targeting just 20% of city streets with the highest impact potential, Nymara helps cities maximize flood prevention while minimizing costs.</p>
          </div>
        </div>
      )
    },
    {
      id: "cost-comparison",
      title: "Impact & Cost",
      icon: <Filter className="w-5 h-5" />,
      content: (
        <div>
          <p className="text-gray-300 mb-6">
            Nymara's solution provides tremendous value compared to traditional flood mitigation approaches, with implementation costs far below the historical expenditures on flood damage repair.
          </p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-nymara-aqua">City</th>
                  <th className="py-3 px-4 text-nymara-aqua">Nymara Cost ($M)</th>
                  <th className="py-3 px-4 text-nymara-aqua">Flood Repairs ($M)</th>
                  <th className="py-3 px-4 text-nymara-aqua">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">New York City, USA</td>
                  <td className="py-3 px-4 text-gray-300">254.2</td>
                  <td className="py-3 px-4 text-gray-300">11,000</td>
                  <td className="py-3 px-4 text-nymara-aqua">97.7%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Dhaka, Bangladesh</td>
                  <td className="py-3 px-4 text-gray-300">26.8</td>
                  <td className="py-3 px-4 text-gray-300">20,000</td>
                  <td className="py-3 px-4 text-nymara-aqua">99.9%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Mumbai, India</td>
                  <td className="py-3 px-4 text-gray-300">44.5</td>
                  <td className="py-3 px-4 text-gray-300">1,662</td>
                  <td className="py-3 px-4 text-nymara-aqua">97.3%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-white">Toronto, Canada</td>
                  <td className="py-3 px-4 text-gray-300">140.3</td>
                  <td className="py-3 px-4 text-gray-300">3,000</td>
                  <td className="py-3 px-4 text-nymara-aqua">95.3%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white">Vancouver, Canada</td>
                  <td className="py-3 px-4 text-gray-300">95.1</td>
                  <td className="py-3 px-4 text-gray-300">1,000</td>
                  <td className="py-3 px-4 text-nymara-aqua">90.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-medium mb-3">Implementation Strategy</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-xs text-nymara-aqua">1</span>
                  </span>
                  <span>Target the critical 20% of roads with highest impact potential</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-xs text-nymara-aqua">2</span>
                  </span>
                  <span>Partner with existing concrete manufacturers for production scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-xs text-nymara-aqua">3</span>
                  </span>
                  <span>License technology and provide AI-driven placement guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nymara-aqua/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-xs text-nymara-aqua">4</span>
                  </span>
                  <span>Monitor performance and optimize based on real-world data</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-medium mb-3">Benefits Beyond Flood Prevention</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Lower long-term infrastructure maintenance costs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Improved urban water quality through natural filtration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Groundwater replenishment in urban areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Reduced demand on existing stormwater systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-nymara-aqua rounded-full"></span>
                  <span>Increased climate resilience without massive overhauls</span>
                </li>
              </ul>
            </div>
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
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-xl">
          {tabs[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default TechDeepDiveSection;
