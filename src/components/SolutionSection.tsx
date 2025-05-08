import React, { useState } from 'react';
import { Layers, Droplet, Filter, FlaskConical, Paintbrush, Umbrella, ArrowDown, Check } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const SolutionSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [activeTab, setActiveTab] = useState('details'); // 'details', 'benefits', or 'rainfall'
  const isMobile = useIsMobile();

  const handleLayerClick = (index) => {
    setActiveLayer(index);
    setActiveTab('details'); // Reset to details tab when changing layers
  };

  // Layer data with theme-consistent colors
  const layers = [
    {
      name: "Nanocoating",
      description: "SiO₂-based nano coating that acts as a selective filter—permitting water to pass while blocking debris and particulates >100 µm, maintaining long-term permeability",
      color: "from-blue-300 to-blue-400",
      icon: <Paintbrush className="h-6 w-6" />,
      bgColor: "bg-blue-400",
      isInnovative: true,
      keyBenefit: "Filters debris while allowing water through",
      stats: [
        { value: "75%", label: "porosity" },
        { value: "$5.00", label: "cost per m²" },
        { value: "10-15", label: "years durability" }
      ]
    },
    {
      name: "Porous Concrete",
      description: "Specialized pervious concrete with 20% porosity, allowing rapid water absorption while maintaining 3500 psi compressive strength for traffic loads",
      color: "from-gray-400 to-gray-500",
      icon: <Droplet className="h-6 w-6" />,
      bgColor: "bg-gray-500",
      isInnovative: true,
      keyBenefit: "Absorbs water while supporting vehicle loads",
      stats: [
        { value: "57.82", label: "in/hr absorption" },
        { value: "$8.03", label: "cost per m²" },
        { value: "20%", label: "porosity" }
      ]
    },
    {
      name: "Aggregate Layer",
      description: "Standard storage layer designed to hold large volumes of water, with 40% porosity and 4-6 inches thickness",
      color: "from-blue-700 to-blue-800",
      icon: <Filter className="h-6 w-6" />,
      bgColor: "bg-blue-800",
      isInnovative: false,
      keyBenefit: "Stores collected water temporarily",
      stats: [
        { value: "40%", label: "porosity" },
        { value: "4-6\"", label: "thickness" },
        { value: "182.88", label: "L/m² capacity" }
      ]
    },
    {
      name: "Drainage Base",
      description: "Standard stable and slowly permeable layer that temporarily stores stormwater and disperses it over time, with 30% porosity and 10-16 inches thickness",
      color: "from-blue-600 to-blue-700",
      icon: <Filter className="h-6 w-6" />,
      bgColor: "bg-blue-600",
      isInnovative: false,
      keyBenefit: "Disperses water gradually to ground",
      stats: [
        { value: "30%", label: "porosity" },
        { value: "10-16\"", label: "thickness" },
        { value: "8 in/hr", label: "rain capacity" }
      ]
    },
    {
      name: "Subgrade",
      description: "Natural ground that receives filtered water, replenishing groundwater and preventing flooding",
      color: "from-stone-700 to-stone-800",
      icon: <FlaskConical className="h-6 w-6" />,
      bgColor: "bg-stone-700",
      isInnovative: false,
      keyBenefit: "Absorbs filtered water back into earth",
      stats: [
        { value: "90%", label: "first-hour absorption" },
        { value: "≈0", label: "contaminants" },
        { value: "Existing", label: "soil" }
      ]
    }
  ];

  // Weather scenario performance data
  const weatherScenarios = [
    {
      type: "Normal Rain",
      icon: <Droplet className="h-5 w-5" />,
      performance: "100% absorption, zero runoff",
      intensity: "Up to 2 in/hr",
      details: "All water infiltrates through pavement and is stored in subsurface layers"
    },
    {
      type: "Heavy Rain",
      icon: <Droplet className="h-5 w-5" />,
      performance: "90% absorption, 10% managed runoff",
      intensity: "2-8 in/hr",
      details: "Most water infiltrates, minimal filtered runoff enters surface drains" 
    },
    {
      type: "Severe Storm",
      icon: <Umbrella className="h-5 w-5" />,
      performance: "70% absorption, 30% filtered runoff",
      intensity: "8+ in/hr",
      details: "System manages overflow through debris-free surface drainage"
    }
  ];

  return (
    <section id="solution" className="py-10 md:py-16 bg-nymara-dark relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nymara-darker via-nymara-dark to-nymara-darker opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-gradient-aqua">Hyper-Porous Roads</span>
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-2">
          Our innovation focuses on the <span className="text-nymara-aqua font-semibold">top two layers</span> of the road system
        </p>
        
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 rounded-full text-xs md:text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-nymara-aqua rounded-full"></div>
              <span className="text-white">Our innovation</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-white">Standard layers</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-stretch">
          {/* Road cross-section visualization - compact version */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative h-[320px] md:h-[400px] w-full max-w-xl mx-auto border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-white/5">
              {/* Layer divider line */}
              <div className="absolute top-[30%] left-0 w-full h-px bg-nymara-aqua/50 z-30"></div>
              
              {/* Single water flow animation */}
              <div className="absolute left-1/2 top-[-5%] w-[2px] h-[110%] z-20">
                <div className="w-full h-full bg-gradient-to-b from-transparent via-nymara-aqua/40 to-nymara-aqua/70"></div>
              </div>
              
              {/* Layers with fixed alignment */}
              {layers.map((layer, index) => {
                const isActive = index === activeLayer;
                const heights = ["15%", "15%", "25%", "20%", "25%"];
                const topPositions = ["0%", "15%", "30%", "55%", "75%"];
                
                return (
                  <div
                    key={index}
                    className={`absolute left-0 w-full transition-all duration-300 cursor-pointer ${
                      isActive ? "z-10" : "z-0 hover:brightness-110"
                    }`}
                    style={{
                      top: topPositions[index],
                      height: heights[index],
                      opacity: isActive ? 1 : 0.8,
                    }}
                    onClick={() => handleLayerClick(index)}
                  >
                    {/* Layer visual - fixed border alignment */}
                    <div className={`h-full w-full relative overflow-hidden flex ${layer.bgColor}`}>
                      {/* Consistent left border for all layers - visible only for innovative ones */}
                      <div className={`w-1 h-full ${layer.isInnovative ? 'bg-nymara-aqua' : 'bg-transparent'}`}></div>
                      
                      <div className="flex-1 h-full">
                        {/* Layer label with consistent padding */}
                        <div className={`absolute inset-0 flex items-center justify-start p-2 md:p-3 transition-transform duration-300 ${isActive ? '' : 'opacity-70'}`}>
                          <div>
                            <h3 className="text-white text-sm md:text-xl font-light drop-shadow-lg flex items-center gap-1.5">
                              {layer.name}
                              {layer.isInnovative && 
                                <div className="bg-nymara-aqua text-black text-[10px] px-1 py-0.5 rounded-sm font-bold">NEW</div>
                              }
                            </h3>
                            {isActive && (
                              <div className="mt-1 max-w-md">
                                <p className="text-white text-xs md:text-sm flex items-center gap-1 bg-black/30 p-1 rounded">
                                  <Check className="w-3 h-3 text-nymara-aqua flex-shrink-0" />
                                  <span>{layer.keyBenefit}</span>
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Layer indicator dots */}
              <div className="absolute right-1 md:right-2 top-0 h-full flex flex-col justify-around items-center z-20">
                {layers.map((layer, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                      index === activeLayer 
                        ? "bg-nymara-aqua scale-125" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    onClick={() => handleLayerClick(index)}
                    aria-label={`View ${layers[index].name} layer`}
                  ></button>
                ))}
              </div>

              {/* Water entry and exit indicators */}
              <div className="absolute right-1 top-1 md:right-2 md:top-2 bg-nymara-aqua/90 text-white text-[10px] md:text-xs px-1.5 py-0.5 rounded-md font-semibold z-30 flex items-center">
                <span>Water Entry</span>
              </div>
              <div className="absolute right-1 bottom-1 md:right-2 md:bottom-2 bg-nymara-aqua/90 text-white text-[10px] md:text-xs px-1.5 py-0.5 rounded-md font-semibold z-30 flex items-center">
                <span>Ground Absorption</span>
              </div>
            </div>
            
            {/* Layer selection buttons below the cross-section */}
            <div className="mt-3 grid grid-cols-5 gap-1 max-w-xl mx-auto">
              {layers.map((layer, index) => (
                <button
                  key={index}
                  className={`py-1.5 px-1 rounded-lg text-[10px] md:text-xs font-medium transition-all flex flex-col items-center justify-center gap-1 ${
                    index === activeLayer
                      ? `bg-gradient-to-r ${layer.color} text-white`
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  } ${layer.isInnovative ? 'border-l-2 border-nymara-aqua' : ''}`}
                  onClick={() => handleLayerClick(index)}
                >
                  {layer.icon && <div className="w-4 h-4 md:w-5 md:h-5">{layer.icon}</div>}
                  <span className="text-center truncate w-full">{isMobile ? layer.name.split(' ')[0] : layer.name}</span>
                </button>
              ))}
            </div>
            
            {/* Section icon */}
            <div className="absolute -top-2 -left-2 bg-nymara-aqua/20 p-2 rounded-full z-20">
              <Layers className="text-nymara-aqua w-4 h-4" />
            </div>
          </div>
          
          {/* Layer details - with tabs for compact layout */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 h-full flex flex-col">
              {/* Tab navigation */}
              <div className="flex border-b border-white/10 mb-4">
                <button 
                  className={`px-3 py-2 text-sm font-medium ${activeTab === 'details' 
                    ? 'text-nymara-aqua border-b-2 border-nymara-aqua' 
                    : 'text-gray-400 hover:text-gray-300'}`}
                  onClick={() => setActiveTab('details')}
                >
                  Layer Details
                </button>
                <button 
                  className={`px-3 py-2 text-sm font-medium ${activeTab === 'benefits' 
                    ? 'text-nymara-aqua border-b-2 border-nymara-aqua' 
                    : 'text-gray-400 hover:text-gray-300'}`}
                  onClick={() => setActiveTab('benefits')}
                >
                  System Benefits
                </button>
                <button 
                  className={`px-3 py-2 text-sm font-medium ${activeTab === 'rainfall' 
                    ? 'text-nymara-aqua border-b-2 border-nymara-aqua' 
                    : 'text-gray-400 hover:text-gray-300'}`}
                  onClick={() => setActiveTab('rainfall')}
                >
                  Performance
                </button>
              </div>
              
              {/* Layer details tab content */}
              {activeTab === 'details' && (
                <div className="flex-1 overflow-auto">
                  <div className={`${layers[activeLayer].isInnovative ? 'block' : 'hidden'}`}>
                    <div className="inline-flex items-center gap-2 bg-nymara-aqua/20 text-nymara-aqua px-2 py-0.5 rounded-full text-xs">
                      <span className="font-bold">Our Innovation</span>
                      <div className="w-1.5 h-1.5 bg-nymara-aqua rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-nymara-aqua mb-2 flex items-center gap-2 mt-1">
                    {layers[activeLayer].icon}
                    {layers[activeLayer].name}
                  </h3>
                  
                  {/* Key benefit highlighted */}
                  <div className="p-2 bg-white/10 rounded-lg mb-3">
                    <p className="text-white text-sm font-medium flex items-center gap-2">
                      <Check className="w-4 h-4 text-nymara-aqua" />
                      {layers[activeLayer].keyBenefit}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {layers[activeLayer].description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {layers[activeLayer].stats.map((stat, index) => (
                      <div key={index} className="text-center bg-white/5 rounded-lg p-2 transition-all hover:bg-white/10">
                        <div className="text-lg md:text-xl font-bold text-white mb-0.5">{stat.value}</div>
                        <p className="text-xs text-nymara-aqua">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Cost summary for current layer */}
                  {layers[activeLayer].isInnovative && (
                    <div className="mt-4 bg-white/10 rounded-lg p-3 flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-400">Layer Cost</p>
                        <p className="text-lg font-bold text-white">${layers[activeLayer].stats.find(s => s.label.includes('cost'))?.value.replace('$', '')}</p>
                      </div>
                      <div className="text-xs text-right">
                        <p className="text-nymara-aqua">Our Innovation</p>
                        <p className="text-gray-400 mt-0.5">{layers[activeLayer].isInnovative ? 'Modified Layer' : 'Standard Layer'}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* System Benefits tab content */}
              {activeTab === 'benefits' && (
                <div className="flex-1 overflow-auto">
                  <h4 className="text-lg font-medium text-white mb-3">Key System Benefits</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 bg-white/5 rounded-lg">
                      <div className="mt-0.5 text-nymara-aqua"><Check className="h-4 w-4" /></div>
                      <p className="text-gray-300 text-sm">Only requires modifying the <strong className="text-nymara-aqua">top two layers</strong> of standard road design</p>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-white/5 rounded-lg">
                      <div className="mt-0.5 text-nymara-aqua"><Check className="h-4 w-4" /></div>
                      <p className="text-gray-300 text-sm">Absorbs up to <strong className="text-white">57.82 inches/hour</strong> of rainfall (50x standard roads)</p>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-white/5 rounded-lg">
                      <div className="mt-0.5 text-nymara-aqua"><Check className="h-4 w-4" /></div>
                      <p className="text-gray-300 text-sm">Maintains <strong className="text-white">3,500 psi</strong> strength for standard vehicle loads</p>
                    </div>
                  </div>
                  
                  {/* Total Cost */}
                  <div className="mt-4 bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400">Total System Cost</p>
                    <p className="text-xl font-bold text-white">$13.00 <span className="text-xs text-gray-400">per m²</span></p>
                    <p className="text-xs text-nymara-aqua mt-1">50x more water absorption than traditional pavement</p>
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-4 text-center">
                    <a 
                      href="#tech" 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-nymara-aqua to-blue-600 px-4 py-2 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-nymara-aqua/30 transition-all"
                    >
                      <span>Learn About Our Technology</span>
                      <Filter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
              
              {/* Rainfall Resilience tab content */}
              {activeTab === 'rainfall' && (
                <div className="flex-1 overflow-auto">
                  <h4 className="text-lg font-medium text-white mb-3">Rainfall Resilience</h4>
                  <div className="space-y-2">
                    {weatherScenarios.map((scenario, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                        <div className={`rounded-full p-1.5 ${
                          index === 0 ? 'bg-green-500/20' : 
                          index === 1 ? 'bg-blue-500/20' : 'bg-red-500/20'
                        }`}>
                          {scenario.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium text-white text-sm">{scenario.type}</span>
                            <span className="text-xs text-gray-300">{scenario.intensity}</span>
                          </div>
                          <p className="text-xs text-nymara-aqua mt-0.5">{scenario.performance}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{scenario.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-2 bg-white/5 rounded-lg">
                    <h4 className="text-sm font-medium text-nymara-aqua mb-2">How It Works</h4>
                    <p className="text-xs text-gray-300">
                      During normal rainfall, water passes through the nanocoating and porous concrete layers, 
                      filtering debris and particulates while allowing clean water to gradually absorb into the ground. 
                      The system can handle up to 50x more water than traditional roads.
                    </p>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 rounded-lg p-3 bg-white/5 text-center">
                      <div className="text-lg font-bold text-white">50x</div>
                      <p className="text-xs text-nymara-aqua">More Absorption</p>
                    </div>
                    <div className="flex-1 rounded-lg p-3 bg-white/5 text-center">
                      <div className="text-lg font-bold text-white">90%</div>
                      <p className="text-xs text-nymara-aqua">Heavy Rain Handling</p>
                    </div>
                    <div className="flex-1 rounded-lg p-3 bg-white/5 text-center">
                      <div className="text-lg font-bold text-white">100%</div>
                      <p className="text-xs text-nymara-aqua">Debris Filtration</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

