import React from 'react';

// Team members data
const teamMembers = [
  {
    name: "Ved Sunkari",
    title: "Climate Resilience Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Malek Hammoud",
    title: "Drone-to-Data Visionary",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Laasya Goriparti",
    title: "AI Integration Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Anand Ajith",
    title: "Nano-Materials Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Bhavi",
    title: "Urban Water Systems Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },

];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-nymara-aqua/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-nymara-aqua/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-8">
            <span className="text-gradient-aqua">Our Mission</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Nymara empowers cities to combat urban flooding by transforming<br />
            roads into intelligent, water-absorbing infrastructure through<br />
            advanced nanotechnology. Our AI-driven platform ensures targeted<br />
            deployment for maximum impact and cost-efficiency.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300">
            By combining data and scalable partnerships, we build climate-adaptive<br />
            cities that thrive in the face of rising storms. We're not just building<br />
            better roads—we're turning city streets into living sponges that protect<br />
            billions of lives and rewrite the future of climate resilience.
          </p>
          
          <div className="mt-16 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <h3 className="text-2xl font-medium text-nymara-aqua mb-4">Pathways Forward</h3>
            <p className="text-gray-300 mb-4">
              The path to scaling hyper-porous roads involves launching pilot projects<br />
              in high-risk areas, developing global partnerships, and introducing<br />
              financial incentives to lower adoption barriers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 rounded-lg p-5 text-left">
                <h4 className="text-lg font-medium text-white mb-3">Rural Resilience Networks</h4>
                <p className="text-sm text-gray-400">
                  Adapting our technologies to support decentralized water management in agricultural regions, protecting crops and transportation routes.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 text-left">
                <h4 className="text-lg font-medium text-white mb-3">Circular Materials Strategy</h4>
                <p className="text-sm text-gray-400">
                  Pioneering a closed-loop production model that repurposes local waste into the fabrication of our porous surfaces.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 text-left">
                <h4 className="text-lg font-medium text-white mb-3">Community-Centered Design</h4>
                <p className="text-sm text-gray-400">
                  Engaging residents in the co-creation of public spaces built with our materials, ensuring solutions reflect community identities.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Members */}
        <h3 className="text-3xl md:text-4xl font-medium mb-10 text-center">
          <span className="text-white">The Team Behind </span>
          <span className="text-gradient-aqua">Nymara</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
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
              
              <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
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

