
import React, { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';

const SolutionSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Layer data
  const layers = [
    {
      name: "Nano-coating Filter",
      description: "Hydrophilic polymeric surface with embedded nanoparticles captures and directs water while filtering microplastics and oils",
      color: "from-sky-400 to-blue-600"
    },
    {
      name: "Sponge Surface",
      description: "High-porosity aggregate layer rapidly absorbs water at 57.82 in/hr while maintaining load-bearing strength",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Aggregate Filters",
      description: "Engineered mineral matrix with 75% porosity removes contaminants through microbial action and adsorption",
      color: "from-blue-600 to-indigo-700"
    },
    {
      name: "Integrated Drainage",
      description: "Smart directional channels transport filtered water to aquifers or municipal systems with no energy use",
      color: "from-indigo-700 to-purple-800"
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
          {/* Road cross-section visualization */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-96 md:h-[500px] w-full max-w-xl mx-auto">
              {/* Road top surface */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-2 bg-gray-700 rounded-t-lg z-20"></div>
              
              {/* Layers */}
              {layers.map((layer, index) => {
                const isActive = index === activeLayer;
                const offset = index * 25; // % from top
                const height = 24; // % height
                
                return (
                  <div
                    key={index}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-[80%] transition-all duration-500 rounded-md ${
                      isActive ? "w-[90%] shadow-lg z-10" : "z-0"
                    }`}
                    style={{
                      top: `${offset}%`,
                      height: `${height}%`,
                      opacity: isActive ? 1 : 0.7,
                      transform: `translateX(-50%) ${isActive ? "scale(1.05)" : "scale(1)"}`
                    }}
                  >
                    {/* Layer visual */}
                    <div 
                      className={`h-full w-full rounded-md bg-gradient-to-r ${layer.color} relative overflow-hidden`}
                    >
                      {/* Water droplet effect for active layer */}
                      {isActive && Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-white/30 rounded-full animate-flow-down"
                          style={{
                            width: `${Math.random() * 15 + 5}px`,
                            height: `${Math.random() * 15 + 5}px`,
                            left: `${Math.random() * 90 + 5}%`,
                            top: `${Math.random() * 50}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {/* Layer indicator */}
              <div className="absolute -right-2 top-0 h-full flex flex-col justify-around">
                {layers.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                      index === activeLayer ? "bg-nymara-aqua scale-150" : "bg-gray-500 hover:bg-gray-400"
                    }`}
                    onClick={() => setActiveLayer(index)}
                  ></div>
                ))}
              </div>
              
              {/* Ground/earth base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[20%] bg-gradient-to-t from-stone-800 to-stone-700 rounded-b-lg"></div>
              
              {/* Icon */}
              <div className="absolute top-4 left-4 bg-nymara-aqua/20 p-2 rounded-full">
                <Layers className="text-nymara-aqua w-6 h-6" />
              </div>
            </div>
          </div>
          
          {/* Layer details */}
          <div className="lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-nymara-aqua mb-3">
                {layers[activeLayer].name}
              </h3>
              
              <p className="text-gray-300 mb-8">
                {layers[activeLayer].description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">57.82</div>
                  <p className="text-sm text-nymara-aqua">in/hr absorption</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">75%</div>
                  <p className="text-sm text-nymara-aqua">porosity</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$8.03</div>
                  <p className="text-sm text-nymara-aqua">cost per m²</p>
                </div>
              </div>
              
              {/* Layer selection buttons - mobile only */}
              <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
                {layers.map((layer, index) => (
                  <button
                    key={index}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      index === activeLayer
                        ? "bg-gradient-to-r from-nymara-aqua to-blue-600 text-white"
                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                    onClick={() => setActiveLayer(index)}
                  >
                    {layer.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
