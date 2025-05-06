
import React, { useState, useEffect } from 'react';
import { Layers, Droplet, Filter, FlaskConical, Paintbrush } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const SolutionSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('solution');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleLayerClick = (index) => {
    setActiveLayer(index);
  };

  // Layer data with solid colors
  const layers = [
    {
      name: "Nanocoating",
      description: "Advanced hydrophobic surface treatment that enhances water repellency while providing protection against wear and environmental damage",
      color: "from-blue-300 to-blue-400",
      icon: <Paintbrush className="h-6 w-6" />,
      bgColor: "bg-blue-400",
    },
    {
      name: "Porous Concrete",
      description: "High-porosity surface layer that allows rapid water absorption while maintaining durability for traffic loads",
      color: "from-gray-400 to-gray-500",
      icon: <Droplet className="h-6 w-6" />,
      bgColor: "bg-gray-500",
    },
    {
      name: "Subbase Layer",
      description: "Aggregate material that provides structural support while allowing water to filter through",
      color: "from-amber-400 to-amber-600",
      icon: <Filter className="h-6 w-6" />,
      bgColor: "bg-amber-500",
    },
    {
      name: "Capping Layer",
      description: "Engineered filter layer that removes contaminants through microbial action and adsorption",
      color: "from-amber-200 to-amber-300",
      icon: <Filter className="h-6 w-6" />,
      bgColor: "bg-amber-200",
    },
    {
      name: "Subgrade (Existing Soil)",
      description: "Natural ground that receives filtered water, replenishing groundwater and preventing flooding",
      color: "from-stone-700 to-stone-800",
      icon: <FlaskConical className="h-6 w-6" />,
      bgColor: "bg-stone-700",
    }
  ];

  return (
    <section id="solution" className="py-16 md:py-24 bg-nymara-dark relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nymara-darker via-nymara-dark to-nymara-darker opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
          <span className="text-gradient-aqua">Hyper-Porous Roads</span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-10 md:mb-16">
          Our revolutionary five-layer system transforms ordinary roads into water management infrastructure that absorbs, filters, and redirects stormwater before it can cause flooding.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Road cross-section visualization - Using solid colors */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[600px] w-full max-w-xl mx-auto border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Layers with heights adjusted for 5 layers */}
              {layers.map((layer, index) => {
                const isActive = index === activeLayer;
                // Adjust heights for 5 layers
                const heights = ["10%", "20%", "25%", "20%", "25%"];
                const topPositions = ["0%", "10%", "30%", "55%", "75%"];
                
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
                    {/* Layer visual with solid color */}
                    <div 
                      className={`h-full w-full relative overflow-hidden ${layer.bgColor}`}
                    >
                      {/* Layer label */}
                      <div className={`absolute inset-0 flex items-center justify-start p-4 md:p-6 transition-transform duration-300 ${isActive ? '' : 'opacity-70'}`}>
                        <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-light drop-shadow-lg">
                          {layer.name}
                          {index === 4 && <span className="block text-xs md:text-sm text-gray-200/80">(existing soil)</span>}
                        </h3>
                      </div>
                      
                      {/* Single circle highlight for active layer */}
                      {isActive && (
                        <div className="absolute right-4 top-4 w-3 h-3 md:w-4 md:h-4 bg-nymara-aqua rounded-full"></div>
                      )}
                    </div>
                  </div>
                );
              })}
              
              {/* Layer indicator dots - side navigation */}
              <div className="absolute right-2 md:right-4 top-0 h-full flex flex-col justify-around items-center z-20">
                {layers.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 md:h-3 md:w-3 rounded-full cursor-pointer transition-all duration-300 ${
                      index === activeLayer 
                      ? "bg-nymara-aqua scale-125" 
                      : "bg-white/30 hover:bg-white/50"
                    }`}
                    onClick={() => handleLayerClick(index)}
                    aria-label={`View ${layers[index].name} layer`}
                  ></button>
                ))}
              </div>
            </div>
            
            {/* Section icon */}
            <div className="absolute -top-4 -left-4 bg-nymara-aqua/20 p-3 rounded-full z-20">
              <Layers className="text-nymara-aqua w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          
          {/* Layer details */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-8">
              <h3 className="text-xl md:text-3xl font-bold text-nymara-aqua mb-3 flex items-center gap-2 md:gap-3">
                {layers[activeLayer].icon}
                {layers[activeLayer].name}
              </h3>
              
              <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-lg">
                {layers[activeLayer].description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-8">
                <div className="text-center bg-white/5 rounded-lg p-3 md:p-4 transition-all hover:bg-white/10">
                  <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">57.82</div>
                  <p className="text-xs md:text-sm text-nymara-aqua">in/hr absorption</p>
                </div>
                
                <div className="text-center bg-white/5 rounded-lg p-3 md:p-4 transition-all hover:bg-white/10">
                  <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">75%</div>
                  <p className="text-xs md:text-sm text-nymara-aqua">porosity</p>
                </div>
                
                <div className="text-center bg-white/5 rounded-lg p-3 md:p-4 transition-all hover:bg-white/10">
                  <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">$8.03</div>
                  <p className="text-xs md:text-sm text-nymara-aqua">cost per m²</p>
                </div>
              </div>
              
              {/* Layer selection buttons - grid for mobile */}
              <div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-3 lg:grid-cols-5">
                {layers.map((layer, index) => (
                  <button
                    key={index}
                    className={`py-2 md:py-3 px-1 md:px-3 rounded-lg text-xs md:text-sm font-medium transition-all flex flex-col items-center justify-center gap-1 md:gap-2 ${
                      index === activeLayer
                        ? `bg-gradient-to-r ${layer.color} text-white`
                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                    onClick={() => handleLayerClick(index)}
                  >
                    {layer.icon}
                    <span className="text-center truncate w-full">{isMobile ? layer.name.split(' ')[0] : layer.name}</span>
                  </button>
                ))}
              </div>
              
              {/* CTA */}
              <div className="mt-6 md:mt-10">
                <a 
                  href="#tech-deep-dive" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-nymara-aqua to-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-sm md:text-base font-medium hover:shadow-lg hover:shadow-nymara-aqua/30 transition-all"
                >
                  <span>Learn More About Our Technology</span>
                  <Filter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
