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
    <section id="mission" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-nymara-aqua/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-nymara-aqua/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 text-center">
            <span className="text-gradient-aqua">Our Mission</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Nymara empowers cities to combat urban flooding by transforming
                roads into intelligent, water-absorbing infrastructure through
                advanced nanotechnology. Our AI-driven platform ensures targeted
                deployment for maximum impact and cost-efficiency.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300">
                By combining data and scalable partnerships, we build climate-adaptive
                cities that thrive in the face of rising storms. We're not just building
                better roads—we're turning city streets into living sponges that protect
                billions of lives and rewrite the future of climate resilience.
              </p>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/flooding.png" 
                  alt="Flooded urban area showing the impact of climate change on cities"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nymara-darker/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-white text-sm md:text-base font-medium italic">
                    "For every $1 invested in climate resilience today, communities save $7 in future recovery costs."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

