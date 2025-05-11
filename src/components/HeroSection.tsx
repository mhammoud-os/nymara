import React, { useRef } from 'react';
import { ArrowDown, Youtube, FileText } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32 px-4 md:px-6">
      {/* Flooded road background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/head.jpg"
          alt="Flooded road with water reflection" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nymara-darker/70 via-nymara-dark/80 to-nymara-darker"></div>
      </div>
      
      {/* Subtle animated gradient blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nymara-aqua/20 rounded-full blur-3xl opacity-30 animate-subtle-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-nymara-navy/20 rounded-full blur-3xl opacity-30" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pb-24 md:pb-28">
        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 md:mb-10 tracking-tight mx-auto max-w-3xl lg:max-w-4xl">
            <span className="block relative">
              What If Roads Could <br />
              <span className="text-gradient-aqua">Drink</span> Stormwater
            </span>
            <span className="block mt-2">Before It Became a Flood?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mt-8 mb-12 max-w-3xl mx-auto backdrop-blur-sm bg-nymara-darker/30 px-6 py-3 rounded-lg">
            Transforming urban infrastructure to combat flooding through intelligent, 
            water-absorbing roads that build climate-resilient cities.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <a 
              href="https://www.youtube.com/watch?v=MDODr_mdfow"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-nymara-aqua to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-nymara-aqua/30 transition-all flex items-center justify-center gap-2"
            >
              <Youtube size={20} />
              Watch Our Video
            </a>
            <a 
              href="/nymara.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-gray-600 hover:border-nymara-aqua/50 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/5 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Read Our Proposal
            </a>
          </div>
          
          {/* Animated Down Arrow */}
          <div className="flex justify-center mt-16">
            <button 
              onClick={scrollToNext}
              className="bg-nymara-darker/50 backdrop-blur-md text-white p-4 rounded-full border border-white/20 hover:border-nymara-aqua/50 hover:bg-white/5 transition-all animate-pulse"
              aria-label="Scroll to mission section"
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

