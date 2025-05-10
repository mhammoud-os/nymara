import React from 'react';
import { Linkedin } from 'react-feather'; // Changed: using react-feather instead of react-icons/fa

// Team members data
const teamMembers = [
  {
    name: "Ved Sunkari",
    title: "Project Manager",
    image: "/team/ved.png",
    linkedin: "https://www.linkedin.com/in/ved-sunkari-a28764313/"
  },
  {
    name: "Malek Hammoud",
    title: "Technical",
    image: "/team/malek.png",
    linkedin: "https://www.linkedin.com/in/malekhammoud"
  },
  {
    name: "Laasya Goriparti",
    title: "Design",
    image: "/team/lasiya.png",
    linkedin: "https://www.linkedin.com/in/laasya-goriparti"
  },
  {
    name: "Anand Ajith",
    title: "Technical",
    image: "/team/anand.png",
    linkedin: "https://www.linkedin.com/in/anand-ajith-786702299/"
  },
  {
    name: "Bhavi",
    title: "Design",
    image: "/team/behavi.png",
    linkedin: "https://www.linkedin.com/in/bhavishyaa-vignesh-217626216/"
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden bg-nymara-darker">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-nymara-aqua/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-nymara-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-medium mb-10 text-center">
          <span className="text-white">The Team Behind </span>
          <span className="text-gradient-aqua">Nymara</span>
        </h3>
        
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Our multidisciplinary team combines expertise in civil engineering, materials science, AI, and urban planning to deliver next-generation climate resilience solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative glass-morphism rounded-xl p-6 flex flex-col items-center text-center hover:border-nymara-aqua/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-2 border-nymara-aqua/30 group-hover:border-nymara-aqua transition-all duration-300 hover:shadow-lg hover:shadow-nymara-aqua/20">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transform-gpu"
                />
              </div>
              
              <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
              <p className="text-nymara-aqua">{member.title}</p>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 text-blue-400 hover:underline"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-6 h-6" /> {/* Changed: replaced FaLinkedin with Linkedin */}
              </a>
              
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-nymara-aqua/5 to-transparent blur transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Join the Team CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block px-8 py-3 rounded-full border border-nymara-aqua text-nymara-aqua hover:bg-nymara-aqua/10 transition-colors">
            Join Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

