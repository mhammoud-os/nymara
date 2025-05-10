
import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SolutionSection from '../components/SolutionSection';
import TechDeepDiveSection from '../components/TechDeepDiveSection';
import ChallengeSection from '../components/ChallengeSection';
import ImpactCalculatorSection from '../components/ImpactCalculatorSection';
import BusinessModelSection from '../components/BusinessModelSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-nymara-dark text-white overflow-x-hidden relative">
      {/* Subtle background pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      {/* Subtle background gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-radial from-nymara-navy/30 via-nymara-dark to-nymara-dark opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-[30vh] bg-gradient-to-t from-nymara-aqua/5 to-transparent opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <AboutSection /> {/* Mission section */}
        <SolutionSection />
        <TechDeepDiveSection />
        <ChallengeSection /> {/* Need section */}
        <ImpactCalculatorSection />
        <BusinessModelSection />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
