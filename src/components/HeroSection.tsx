
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
      {/* Flooded road background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/d4cde29c-0299-4dc2-ae18-001ffb7b31d8.png" 
          alt="Flooded road with water reflection" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nymara-darker/90 via-nymara-dark/80 to-nymara-darker"></div>
      </div>
      
      {/* Subtle animated gradient blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nymara-aqua/20 rounded-full blur-3xl opacity-30 animate-subtle-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-nymara-navy/20 rounded-full blur-3xl opacity-30" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pb-24 md:pb-28">
        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
          <div className="inline-block bg-nymara-aqua/10 text-nymara-aqua px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-nymara-aqua/30">
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
            <span className="font-medium text-white backdrop-blur-sm bg-nymara-darker/30 px-4 py-2 rounded-lg">
              Nymara empowers cities to combat urban flooding<br />by transforming roads into intelligent, water-absorbing<br />infrastructure through advanced nanotechnology.
            </span>
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
              className="bg-transparent border border-gray-600 hover:border-nymara-aqua/50 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              See The Challenge
            </a>
          </div>
          
          {/* Animated Down Arrow */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={scrollToNext}
              className="bg-nymara-darker/50 backdrop-blur-md text-white p-4 rounded-full border border-white/20 hover:border-nymara-aqua/50 hover:bg-white/5 transition-all animate-pulse"
              aria-label="Scroll to solution section"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

