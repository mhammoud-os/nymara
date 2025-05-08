import React from 'react';

const ChallengeSection = () => {
  return (
    <section id="need" className="py-20 md:py-32 bg-nymara-darker relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-nymara-dark to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Content section - now full width */}
            <div className="w-full mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-8">
                <span className="text-white">A Planet</span>
                <span className="text-gradient-blue ml-2">Out of Balance</span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg md:text-xl text-gray-300">
                  As of 2015, over 16% of the world's urban areas—105,657 km²—<br />
                  lie within high-risk flood zones, with climate change intensifying<br />
                  both the frequency and destructive power of urban flooding events.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-nymara-aqua mb-3">4.25 Billion</h3>
                    <p className="text-sm md:text-base text-gray-400">Urban residents worldwide, projected to reach 6.52 billion by 2050, putting more people at flood risk</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-nymara-aqua mb-3">2.5%</h3>
                    <p className="text-sm md:text-base text-gray-400">Annual increase in urban land development within flood-prone areas (1985-2015)</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-nymara-aqua mb-3">22.7%</h3>
                    <p className="text-sm md:text-base text-gray-400">Of Asia's urban development sits in high-risk flood zones—the highest of any continent</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-nymara-aqua mb-3">8.9%</h3>
                    <p className="text-sm md:text-base text-gray-400">Annual increase in Asian urban areas within flood zones, showing accelerating vulnerability</p>
                  </div>
                </div>
                
                <p className="text-lg mt-8">
                  The consequences ripple far beyond water damage.<br />
                  Floods displace families, cripple economies, and devastate food systems.<br />
                  Cities need infrastructure that doesn't just resist floods—but<br />
                  works with water from the ground up.
                </p>
              </div>
            </div>
            
            {/* Planet image - increased height to fit width better */}
            <div className="w-full relative">
              <div className="relative mx-auto overflow-hidden rounded-xl shadow-2xl h-[400px] md:h-[500px] lg:h-[600px]">
                <img 
                  src="/planet.png" 
                  alt="Map of global floodplains" 
                  className="w-full h-full object-contain bg-nymara-darker"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nymara-darker via-transparent to-transparent opacity-70"></div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-white text-xs md:text-sm font-medium italic">
                    Map of floodplains with high flood probability between 1985-2015, demonstrating a large global risk of the impacts of flooding.
                  </p>
                </div>
                
                {/* Subtle border effect */}
                <div className="absolute inset-0 rounded-xl border border-nymara-aqua/30 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;

