
import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ChallengeSection from '../components/ChallengeSection';
import SolutionSection from '../components/SolutionSection';
import TechDeepDiveSection from '../components/TechDeepDiveSection';
import BusinessModelSection from '../components/BusinessModelSection';
import ImpactCalculatorSection from '../components/ImpactCalculatorSection';
import InvestPartnerSection from '../components/InvestPartnerSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-nymara-dark text-white overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <SolutionSection /> 
      <ChallengeSection />
      <TechDeepDiveSection />
      <BusinessModelSection />
      <ImpactCalculatorSection />
      <InvestPartnerSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
