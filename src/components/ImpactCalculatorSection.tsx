
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const ImpactCalculatorSection = () => {
  const [roadMiles, setRoadMiles] = useState(10);
  const [roadWidth, setRoadWidth] = useState(30);
  const [floodRisk, setFloodRisk] = useState('medium');
  const [calculated, setCalculated] = useState(false);
  
  const [results, setResults] = useState({
    cost: 0,
    waterAbsorption: 0,
    maintenanceSavings: 0,
    co2Reduction: 0,
    floodPreventionScore: 0
  });
  
  // Calculate impact when values change
  useEffect(() => {
    // Reset animation trigger
    setCalculated(false);
    
    // Calculate square footage
    const squareFeet = roadMiles * 5280 * roadWidth;
    
    // Base cost per square foot
    const baseCost = 8.03 * (squareFeet / 10.764); // Convert to square meters for pricing
    
    // Risk multipliers
    const riskMultipliers = {
      low: 0.7,
      medium: 1,
      high: 1.3,
      extreme: 1.5
    };
    
    // Calculate results
    const costResult = baseCost;
    const waterAbsorptionResult = squareFeet * 57.82 * 0.00433; // gallons per sq ft per inch of rain
    const maintenanceSavingsResult = baseCost * 0.34; // 34% average maintenance savings
    const co2ReductionResult = squareFeet * 0.0023; // kg CO2 reduction per sq ft vs traditional concrete
    const floodPreventionScore = Math.min(100, Math.round(squareFeet * riskMultipliers[floodRisk as keyof typeof riskMultipliers] / 5000));
    
    // Update results with a slight delay to allow for animation
    setTimeout(() => {
      setResults({
        cost: costResult,
        waterAbsorption: waterAbsorptionResult,
        maintenanceSavings: maintenanceSavingsResult,
        co2Reduction: co2ReductionResult,
        floodPreventionScore: floodPreventionScore
      });
      setCalculated(true);
    }, 300);
  }, [roadMiles, roadWidth, floodRisk]);

  return (
    <section id="calculator" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-nymara-darker to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-nymara-aqua/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-nymara-orange/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient-aqua">See Your City in Action</span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Use our impact calculator to see how Nymara's hyper-porous road technology would transform flood management in your city.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Calculator Inputs */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-nymara-aqua/20 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-nymara-aqua" />
              </div>
              <h3 className="text-2xl font-bold text-white">Impact Calculator</h3>
            </div>
            
            <div className="space-y-8">
              {/* Road Miles */}
              <div>
                <div className="flex justify-between">
                  <label className="text-gray-300 font-medium">Road Miles</label>
                  <span className="text-nymara-aqua">{roadMiles} miles</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={roadMiles}
                  onChange={(e) => setRoadMiles(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-nymara-aqua mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 mi</span>
                  <span>50 mi</span>
                  <span>100 mi</span>
                </div>
              </div>
              
              {/* Road Width */}
              <div>
                <div className="flex justify-between">
                  <label className="text-gray-300 font-medium">Average Width</label>
                  <span className="text-nymara-aqua">{roadWidth} ft</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="2"
                  value={roadWidth}
                  onChange={(e) => setRoadWidth(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-nymara-aqua mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10 ft</span>
                  <span>30 ft</span>
                  <span>60 ft</span>
                </div>
              </div>
              
              {/* Flood Risk Zone */}
              <div>
                <label className="text-gray-300 font-medium block mb-2">Flood Risk Zone</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['low', 'medium', 'high', 'extreme'].map((risk) => (
                    <button
                      key={risk}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        floodRisk === risk
                          ? risk === 'low' ? 'bg-green-600 text-white' 
                          : risk === 'medium' ? 'bg-yellow-600 text-white'
                          : risk === 'high' ? 'bg-orange-600 text-white'
                          : 'bg-red-600 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                      onClick={() => setFloodRisk(risk)}
                    >
                      {risk.charAt(0).toUpperCase() + risk.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-400 mt-8">
              <p>This calculator provides estimates based on average conditions. For a detailed analysis specific to your area, <a href="#" className="text-nymara-aqua hover:underline">contact our team</a>.</p>
            </div>
          </div>
          
          {/* Right side: Results */}
          <div className="relative">
            {/* Map overlay effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden z-0 opacity-20">
              <div className="w-full h-full bg-nymara-darker grid grid-cols-5 grid-rows-5 gap-px">
                {Array(25).fill(0).map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-nymara-dark"
                    style={{
                      opacity: calculated ? (Math.random() * 0.8 + 0.2) : 0.3
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8">Impact Results</h3>
              
              <div className="space-y-6">
                {/* Cost */}
                <div className="relative">
                  <label className="text-gray-300 font-medium block mb-2">Estimated Implementation Cost</label>
                  <div 
                    className={`text-3xl font-bold mb-1 transition-all duration-500 ${
                      calculated ? 'text-white opacity-100 translate-y-0' : 'text-transparent opacity-0 translate-y-4'
                    }`}
                  >
                    ${new Intl.NumberFormat().format(Math.round(results.cost))}
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded">
                    <div 
                      className="h-full bg-nymara-aqua rounded transition-all duration-1000 ease-out"
                      style={{ width: calculated ? `${Math.min(100, (results.cost / 10000000) * 100)}%` : '0%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Water Absorbed */}
                <div className="relative">
                  <label className="text-gray-300 font-medium block mb-2">Water Absorption Capacity (1" rain)</label>
                  <div 
                    className={`text-3xl font-bold mb-1 transition-all duration-500 ${
                      calculated ? 'text-white opacity-100 translate-y-0' : 'text-transparent opacity-0 translate-y-4'
                    }`}
                  >
                    {new Intl.NumberFormat().format(Math.round(results.waterAbsorption))} <span className="text-sm font-normal text-gray-400">gallons</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded">
                    <div 
                      className="h-full bg-blue-500 rounded transition-all duration-1000 ease-out"
                      style={{ 
                        width: calculated ? `${Math.min(100, (results.waterAbsorption / 5000000) * 100)}%` : '0%',
                        backgroundImage: 'linear-gradient(to right, #0ea5e9, #2563eb)'
                      }}
                    ></div>
                  </div>
                </div>
                
                {/* Maintenance Savings */}
                <div className="relative">
                  <label className="text-gray-300 font-medium block mb-2">Annual Maintenance Savings</label>
                  <div 
                    className={`text-3xl font-bold mb-1 transition-all duration-500 ${
                      calculated ? 'text-white opacity-100 translate-y-0' : 'text-transparent opacity-0 translate-y-4'
                    }`}
                  >
                    ${new Intl.NumberFormat().format(Math.round(results.maintenanceSavings))}
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded">
                    <div 
                      className="h-full bg-green-500 rounded transition-all duration-1000 ease-out"
                      style={{ width: calculated ? `${Math.min(100, (results.maintenanceSavings / 2000000) * 100)}%` : '0%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Flood Prevention Score */}
                <div className="relative">
                  <label className="text-gray-300 font-medium block mb-2">Flood Prevention Score</label>
                  <div 
                    className={`text-3xl font-bold mb-1 transition-all duration-500 ${
                      calculated ? 'text-white opacity-100 translate-y-0' : 'text-transparent opacity-0 translate-y-4'
                    }`}
                  >
                    {results.floodPreventionScore}/100
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded">
                    <div 
                      className="h-full rounded transition-all duration-1000 ease-out"
                      style={{ 
                        width: calculated ? `${results.floodPreventionScore}%` : '0%',
                        backgroundImage: 'linear-gradient(to right, #f97316, #ef4444)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-nymara-aqua to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-nymara-aqua/30 transition-all">
                  Download Detailed Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculatorSection;
