import React, { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

const ChallengeSection = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const addFloodMarker = (latitude: number, longitude: number, size: number, intensity: number) => {
      if (!globeRef.current) return;
      
      // Convert geographic coordinates to position on the visible hemisphere
      const phi = (90 - latitude) * (Math.PI / 180);
      const theta = (longitude + 180) * (Math.PI / 180);
      
      const x = -Math.sin(phi) * Math.cos(theta);
      const z = Math.sin(phi) * Math.sin(theta);
      const y = Math.cos(phi);
      
      // Only show points on the visible side (crude approximation)
      if (z > 0) {
        // Scale to the globe size
        const globeSize = globeRef.current.clientWidth / 2;
        const posX = 50 + x * 40; // Convert to percentage
        const posY = 50 - y * 40; // Convert to percentage
        
        // Create marker
        const marker = document.createElement('div');
        
        // Apply styles
        marker.className = 'absolute rounded-full animate-pulse-glow';
        marker.style.backgroundColor = `rgba(14, 165, 233, ${0.3 + intensity * 0.7})`;
        marker.style.width = `${size}px`;
        marker.style.height = `${size}px`;
        marker.style.left = `${posX}%`;
        marker.style.top = `${posY}%`;
        marker.style.transform = 'translate(-50%, -50%)';
        
        globeRef.current.appendChild(marker);
      }
    };
    
    // Add some flood risk markers at major cities
    if (globeRef.current) {
      // Clear existing markers
      const markers = globeRef.current.querySelectorAll('.absolute.rounded-full');
      markers.forEach(marker => marker.remove());
      
      // North America (New York, Miami, New Orleans)
      addFloodMarker(40.7128, -74.0060, 16, 0.7); // New York
      addFloodMarker(25.7617, -80.1918, 14, 0.9); // Miami
      addFloodMarker(29.9511, -90.0715, 14, 0.8); // New Orleans
      
      // Asia (Mumbai, Bangkok, Manila)
      addFloodMarker(19.0760, 72.8777, 18, 0.9); // Mumbai
      addFloodMarker(13.7563, 100.5018, 16, 0.8); // Bangkok
      addFloodMarker(14.5995, 120.9842, 16, 0.9); // Manila
      
      // Europe (Amsterdam, Venice)
      addFloodMarker(52.3676, 4.9041, 14, 0.7); // Amsterdam
      addFloodMarker(45.4408, 12.3155, 12, 0.8); // Venice
      
      // Other major flood-prone cities
      addFloodMarker(-22.9068, -43.1729, 16, 0.7); // Rio de Janeiro
      addFloodMarker(31.2304, 121.4737, 18, 0.8); // Shanghai
      addFloodMarker(35.6762, 139.6503, 16, 0.6); // Tokyo
      addFloodMarker(-33.8688, 151.2093, 14, 0.5); // Sydney
    }
    
    // Create rotation animation
    const rotationInterval = setInterval(() => {
      if (!globeRef.current) return;
      
      // Rotate the markers slightly each interval
      const markers = globeRef.current.querySelectorAll('.absolute.rounded-full');
      markers.forEach(marker => {
        const element = marker as HTMLElement;
        const currentLeft = parseFloat(element.style.left);
        let newLeft = currentLeft - 0.1;
        
        // Reset position if moved out of view
        if (newLeft < 10) {
          newLeft = 90;
        }
        
        element.style.left = `${newLeft}%`;
      });
    }, 50);
    
    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <section id="challenge" className="py-20 md:py-32 bg-nymara-darker relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-nymara-dark to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Globe visualization */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
            <div className="relative aspect-square max-w-xl mx-auto">
              {/* Globe base */}
              <div className="absolute inset-0 rounded-full border border-nymara-aqua/30 animate-rotate-globe"></div>
              <div className="absolute inset-2 rounded-full border border-nymara-aqua/20 animate-rotate-globe" style={{ animationDuration: '80s' }}></div>
              <div className="absolute inset-4 rounded-full border border-nymara-aqua/10 animate-rotate-globe" style={{ animationDuration: '120s' }}></div>
              
              {/* Globe surface */}
              <div 
                ref={globeRef}
                className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-900/40 to-blue-500/20 border border-nymara-aqua/30 overflow-hidden"
              >
                {/* Land masses (simplified) */}
                <div className="absolute w-[20%] h-[15%] bg-gray-800/40 rounded-full top-[30%] left-[25%]"></div>
                <div className="absolute w-[35%] h-[25%] bg-gray-800/40 rounded-full top-[20%] left-[55%]"></div>
                <div className="absolute w-[15%] h-[20%] bg-gray-800/40 rounded-full top-[60%] left-[30%]"></div>
                <div className="absolute w-[25%] h-[15%] bg-gray-800/40 rounded-full top-[65%] left-[55%]"></div>
                
                {/* Flood markers added by JS */}
              </div>
              
              {/* Globe icon */}
              <div className="absolute top-4 right-4 bg-nymara-aqua/20 p-2 rounded-full">
                <Globe className="text-nymara-aqua w-6 h-6" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="text-white">A Planet</span>
              <span className="text-gradient-orange ml-2">Out of Balance</span>
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-xl">
                As of 2015, over 16% of the world's urban areas—105,657 km²—lie within high-risk flood zones, with climate change intensifying both the frequency and destructive power of urban flooding events.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-nymara-aqua mb-3">4.25 Billion</h3>
                  <p className="text-sm text-gray-400">Urban residents worldwide, projected to reach 6.52 billion by 2050, putting more people at flood risk</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-nymara-aqua mb-3">2.5%</h3>
                  <p className="text-sm text-gray-400">Annual increase in urban land development within flood-prone areas (1985-2015)</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-nymara-aqua mb-3">22.7%</h3>
                  <p className="text-sm text-gray-400">Of Asia's urban development sits in high-risk flood zones—the highest of any continent</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-nymara-aqua mb-3">8.9%</h3>
                  <p className="text-sm text-gray-400">Annual increase in Asian urban areas within flood zones, showing accelerating vulnerability</p>
                </div>
              </div>
              
              <p className="text-lg mt-8">
                The consequences ripple far beyond water damage. Floods displace families, cripple economies, and devastate food systems. Cities need infrastructure that doesn't just resist floods—but works with water from the ground up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
