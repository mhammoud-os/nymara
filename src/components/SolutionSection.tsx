
import React, { useState, useEffect } from 'react';
import { Layers, Droplet, Filter, Pipes } from 'lucide-react';

const SolutionSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

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

  useEffect(() => {
    if (!isVisible) return;

    // Auto-cycle through layers when visible
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleLayerClick = (index) => {
    setActiveLayer(index);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 1000);
  };

  // Updated Layer data to match the image
  const layers = [
    {
      name: "Porous Concrete",
      description: "High-porosity surface layer that allows rapid water absorption while maintaining durability for traffic loads",
      color: "from-gray-400 to-gray-500",
      icon: <Droplet className="h-6 w-6" />,
      bgColor: "bg-gray-400",
      textureUrl: "/lovable-uploads/3f7bf46d-3a08-4926-b447-375af9e82a9a.png"
    },
    {
      name: "Subbase Layer",
      description: "Aggregate material that provides structural support while allowing water to filter through",
      color: "from-amber-400 to-amber-600",
      icon: <Filter className="h-6 w-6" />,
      bgColor: "bg-amber-500",
      textureUrl: "/lovable-uploads/3f7bf46d-3a08-4926-b447-375af9e82a9a.png"
    },
    {
      name: "Capping Layer",
      description: "Engineered filter layer that removes contaminants through microbial action and adsorption",
      color: "from-amber-200 to-amber-300",
      icon: <Filter className="h-6 w-6" />,
      bgColor: "bg-amber-300",
      textureUrl: "/lovable-uploads/3f7bf46d-3a08-4926-b447-375af9e82a9a.png"
    },
    {
      name: "Subgrade (Existing Soil)",
      description: "Natural ground that receives filtered water, replenishing groundwater and preventing flooding",
      color: "from-stone-700 to-stone-800",
      icon: <Pipes className="h-6 w-6" />,
      bgColor: "bg-stone-800",
      textureUrl: "/lovable-uploads/3f7bf46d-3a08-4926-b447-375af9e82a9a.png"
    }
  ];

  return (
    <section id="solution" className="py-20 md:py-32 bg-nymara-dark relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nymara-darker via-nymara-dark to-nymara-darker opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient-aqua">Hyper-Porous Roads</span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Our revolutionary four-layer system transforms ordinary roads into water management infrastructure that absorbs, filters, and redirects stormwater before it can cause flooding.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Road cross-section visualization - Updated to match the image */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[600px] w-full max-w-xl mx-auto border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Water animation */}
              <div className="absolute inset-0 pointer-events-none">
                {isVisible && Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-blue-400/40 rounded-full animate-flow-down"
                    style={{
                      width: `${Math.random() * 15 + 5}px`,
                      height: `${Math.random() * 25 + 10}px`,
                      left: `${Math.random() * 90 + 5}%`,
                      top: `-20px`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${Math.random() * 5 + 5}s`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Layers */}
              {layers.map((layer, index) => {
                const isActive = index === activeLayer;
                // Adjust heights to match proportions in the image
                const heights = ["25%", "25%", "25%", "25%"];
                const topPositions = ["0%", "25%", "50%", "75%"];
                
                return (
                  <div
                    key={index}
                    className={`absolute left-0 w-full transition-all duration-700 cursor-pointer ${
                      isActive ? "z-10" : "z-0 hover:brightness-110"
                    }`}
                    style={{
                      top: topPositions[index],
                      height: heights[index],
                      opacity: isActive ? 1 : 0.8,
                    }}
                    onClick={() => handleLayerClick(index)}
                  >
                    {/* Layer visual */}
                    <div 
                      className={`h-full w-full relative overflow-hidden ${layer.bgColor}`}
                      style={{
                        backgroundImage: `url(${layer.textureUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: index === 0 ? 'top' : index === 3 ? 'bottom' : 'center',
                        backgroundBlendMode: 'overlay'
                      }}
                    >
                      {/* Add texture pattern with circles */}
                      <div className="absolute inset-0 flex items-center">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full bg-white/10"
                            style={{
                              width: `${Math.random() * 30 + 10}px`,
                              height: `${Math.random() * 30 + 10}px`,
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              opacity: Math.random() * 0.3 + 0.1
                            }}
                          ></div>
                        ))}
                      </div>
                      
                      {/* Water motion effect for active layer */}
                      {isActive && (
                        <div className="absolute inset-0 bg-nymara-aqua/10 animate-pulse"></div>
                      )}
                      
                      {/* Layer label */}
                      <div className={`absolute inset-0 flex items-center justify-start p-6 transition-transform duration-500 ${isActive ? '' : 'opacity-70'}`}>
                        <h3 className="text-white text-2xl md:text-4xl font-light drop-shadow-lg">
                          {layer.name}
                          {index === 3 && <span className="block text-xl text-gray-200/80">(existing soil)</span>}
                        </h3>
                      </div>
                      
                      {/* Pulse indicator for active layer */}
                      {isActive && (
                        <div className="absolute right-4 top-4 w-4 h-4 bg-nymara-aqua rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                );
              })}
              
              {/* Layer indicator dots - side navigation */}
              <div className="absolute right-4 top-0 h-full flex flex-col justify-around items-center z-20">
                {layers.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-500 ${
                      index === activeLayer 
                      ? "bg-nymara-aqua scale-150" 
                      : "bg-white/30 hover:bg-white/50"
                    }`}
                    onClick={() => handleLayerClick(index)}
                    aria-label={`View ${layers[index].name} layer`}
                  ></button>
                ))}
              </div>
              
              {/* Water droplets animation at the top */}
              <div className="absolute top-0 left-0 w-full">
                {isVisible && Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-bounce"
                    style={{
                      top: `-${Math.random() * 10 + 5}px`,
                      left: `${Math.random() * 80 + 10}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${Math.random() * 2 + 1}s`
                    }}
                  >
                    <Droplet className="text-blue-400/70 w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Section icon */}
            <div className="absolute -top-4 -left-4 bg-nymara-aqua/20 p-3 rounded-full z-20">
              <Layers className="text-nymara-aqua w-6 h-6" />
            </div>
          </div>
          
          {/* Layer details */}
          <div className="lg:w-1/2">
            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-500 ${animating ? 'scale-105' : ''}`}>
              <h3 className="text-3xl font-bold text-nymara-aqua mb-3 flex items-center gap-3">
                {layers[activeLayer].icon}
                {layers[activeLayer].name}
              </h3>
              
              <p className="text-gray-300 mb-8 text-lg">
                {layers[activeLayer].description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center bg-white/5 rounded-lg p-4 transition-all hover:bg-white/10">
                  <div className="text-3xl font-bold text-white mb-2">57.82</div>
                  <p className="text-sm text-nymara-aqua">in/hr absorption</p>
                </div>
                
                <div className="text-center bg-white/5 rounded-lg p-4 transition-all hover:bg-white/10">
                  <div className="text-3xl font-bold text-white mb-2">75%</div>
                  <p className="text-sm text-nymara-aqua">porosity</p>
                </div>
                
                <div className="text-center bg-white/5 rounded-lg p-4 transition-all hover:bg-white/10">
                  <div className="text-3xl font-bold text-white mb-2">$8.03</div>
                  <p className="text-sm text-nymara-aqua">cost per m²</p>
                </div>
              </div>
              
              {/* Layer selection buttons */}
              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {layers.map((layer, index) => (
                  <button
                    key={index}
                    className={`py-3 px-3 rounded-lg text-sm font-medium transition-all flex flex-col items-center justify-center gap-2 ${
                      index === activeLayer
                        ? `bg-gradient-to-r ${layer.color} text-white`
                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                    onClick={() => handleLayerClick(index)}
                  >
                    {layer.icon}
                    <span className="text-center">{layer.name}</span>
                  </button>
                ))}
              </div>
              
              {/* CTA */}
              <div className="mt-10">
                <a 
                  href="#tech-deep-dive" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-nymara-aqua to-blue-600 px-6 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-nymara-aqua/30 transition-all"
                >
                  <span>Learn More About Our Technology</span>
                  <Filter className="w-5 h-5" />
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
