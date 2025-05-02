
import React from 'react';

// Team members data
const teamMembers = [
  {
    name: "Malek Hammoud",
    title: "Drone-to-Data Visionary",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Anand Ajith",
    title: "Nano-Materials Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Ved Sunkari",
    title: "Climate Resilience Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Bhavi",
    title: "Urban Water Systems Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Laasya Goriparti",
    title: "AI Integration Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-nymara-aqua/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-nymara-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-gradient-aqua">Who We Are</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Nymara was born at the intersection of crisis and opportunity. We're not just building better roads—we're turning city streets into living sponges that protect billions of lives and rewrite the future of climate resilience.
          </p>
          
          <p className="text-xl text-gray-300">
            Our team combines expertise in nanotechnology, civil engineering, hydrology, and AI to create infrastructure that works <i>with</i> nature, not against it. We believe the road beneath your feet shouldn't just connect places—it should protect them.
          </p>
        </div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative glass-morphism rounded-xl p-6 flex flex-col items-center text-center hover:border-nymara-aqua/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-nymara-aqua/30 group-hover:border-nymara-aqua transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-nymara-aqua">{member.title}</p>
              
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-nymara-aqua/5 to-transparent blur transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
