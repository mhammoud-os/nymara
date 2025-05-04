
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createRaindrops = () => {
      if (!heroRef.current) return;
      
      const hero = heroRef.current;
      const raindrop = document.createElement('div');
      
      const size = Math.random() * 3 + 1;
      const positionX = Math.random() * hero.offsetWidth;
      const duration = Math.random() * 1 + 1;
      const delay = Math.random() * 0.5;
      
      raindrop.className = 'absolute bg-nymara-aqua rounded-full opacity-0';
      raindrop.style.width = `${size}px`;
      raindrop.style.height = `${size * 3}px`;
      raindrop.style.left = `${positionX}px`;
      raindrop.style.top = '-10px';
      raindrop.style.animation = `rain ${duration}s linear ${delay}s`;
      
      hero.appendChild(raindrop);
      
      setTimeout(() => {
        hero.removeChild(raindrop);
      }, (duration + delay) * 1000);
    };
    
    // Create multiple raindrops
    const rainInterval = setInterval(createRaindrops, 100);
    
    return () => {
      clearInterval(rainInterval);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"><img src="bg.jpg" alt="city roads"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block relative">
              Imagine Roads That 
              <span className="relative inline-block mx-2">
                <span className="text-gradient-aqua">Drink</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-nymara-aqua opacity-70"></span>
              </span>
              Stormwater
            </span>
            <span className="block mt-2">Before It Becomes a Flood</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mt-8 mb-12">
            <span className="font-semibold text-gradient-orange">Nymara's Hyper-Porous Roads:</span>{" "}
            <span className="block mt-2">Flood Prevention Engineered into Every Layer</span>
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
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
        </div>
      </div>
      
      {/* Animated Down Arrow */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-transparent text-white p-4 rounded-full border border-white/20 hover:border-nymara-aqua/50 hover:bg-white/5 transition-all animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nymara-darker via-nymara-dark/90 to-nymara-darker z-[-1]"></div>
    </section>
  );
};

export default HeroSection;
