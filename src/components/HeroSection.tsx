
import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const solutionSection = document.getElementById('solution');
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-6">
      {/* Enhanced Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Subtle animated gradient blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nymara-aqua/10 rounded-full blur-3xl opacity-30 animate-subtle-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-nymara-navy/10 rounded-full blur-3xl opacity-20" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      
      {/* Animated rain droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-4 bg-nymara-aqua/30 rounded-full animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pb-24 md:pb-28">
        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
          <div className="inline-block bg-nymara-aqua/10 text-nymara-aqua px-4 py-2 rounded-full text-sm font-medium mb-6">
            Building Climate-Adaptive Infrastructure
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 md:mb-8 tracking-tight mx-auto max-w-3xl lg:max-w-4xl">
            <span className="block relative">
              What If Roads Could <br />
              <span className="text-gradient-aqua">Drink</span> Stormwater
            </span>
            <span className="block mt-2">Before It Became a Flood?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mt-8 mb-12 max-w-3xl mx-auto">
            <span className="font-medium text-white">Nymara empowers cities to combat urban flooding<br />by transforming roads into intelligent, water-absorbing<br />infrastructure through advanced nanotechnology.</span>
          </p>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-nymara-aqua mb-3">Our Mission</h3>
            <p className="text-gray-300">
              Our AI-driven platform ensures targeted deployment for maximum impact and cost-efficiency. By combining data and scalable partnerships, we build climate-adaptive cities that thrive in the face of rising storms.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 mb-16">
            <a 
              href="#solution"
              className="bg-gradient-to-r from-nymara-aqua to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-nymara-aqua/30 transition-all"
            >
              Discover Our Solution
            </a>
            <a 
              href="#challenge"
              className="bg-transparent border border-gray-600 hover:border-nymara-aqua/50 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/5 transition-all"
            >
              See The Challenge
            </a>
          </div>
          
          {/* Animated Down Arrow - Moved inside the container for better positioning */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={scrollToNext}
              className="bg-transparent text-white p-4 rounded-full border border-white/20 hover:border-nymara-aqua/50 hover:bg-white/5 transition-all"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nymara-darker via-nymara-dark/90 to-nymara-darker z-[-1]"></div>
    </section>
  );
};

export default HeroSection;
