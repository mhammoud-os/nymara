
import React from 'react';
import { Users, CircleArrowRight } from 'lucide-react';

const InvestPartnerSection = () => {
  const testimonials = [
    {
      quote: "Nymara's technology reduced downtown flooding by 62% during last year's monsoon season. The ROI was evident within months.",
      author: "Priya Singh",
      title: "Urban Planning Director, Mumbai",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Their hyper-porous roads absorb rainfall that would have overwhelmed our drainage system. It's prevention, not reaction.",
      author: "Marcus Chen",
      title: "City Engineer, Jakarta",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Our materials partnership with Nymara has opened entirely new markets in climate adaptation infrastructure.",
      author: "Sarah Rodriguez",
      title: "Innovation Lead, GeoTech Materials",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section id="invest" className="py-20 md:py-32 bg-nymara-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-nymara-dark to-transparent"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-nymara-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-nymara-aqua/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient-orange">Join the Moonshot</span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Nymara is building critical infrastructure for a changing climate. Partner with us to transform how cities handle water and protect billions of people from flooding.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Partner with Us */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-nymara-orange/50 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-nymara-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Partner with Us</h3>
            
            <p className="text-gray-300 mb-8 relative z-10">
              For chemical OEMs and construction material companies looking to enter the high-growth climate adaptation market. Our licensing partnerships offer a turnkey solution for next-generation infrastructure.
            </p>
            
            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-start gap-3">
                <CircleArrowRight className="w-5 h-5 text-nymara-orange mt-1 flex-shrink-0" />
                <span className="text-gray-200">Access to patented formulations and manufacturing processes</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleArrowRight className="w-5 h-5 text-nymara-orange mt-1 flex-shrink-0" />
                <span className="text-gray-200">Technical implementation support and quality control</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleArrowRight className="w-5 h-5 text-nymara-orange mt-1 flex-shrink-0" />
                <span className="text-gray-200">Co-marketing to municipal customers globally</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleArrowRight className="w-5 h-5 text-nymara-orange mt-1 flex-shrink-0" />
                <span className="text-gray-200">Preferred pricing for platform integration</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-nymara-orange to-red-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-nymara-orange/30 transition-all"
              >
                Become a Partner
              </a>
            </div>
          </div>
          
          {/* Fund the Future */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-nymara-aqua/50 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-nymara-aqua/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Fund the Future</h3>
            
            <p className="text-gray-300 mb-8 relative z-10">
              For impact investors and climate-focused funds seeking solutions with measurable environmental and social returns. Nymara offers both financial upside and documented climate resilience impact.
            </p>
            
            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-start gap-3">
                <CircleArrowRight className="w-5 h-5 text-nymara-aqua mt-1 flex-shrink-0" />
                <span className="text-gray-200">Series A funding round open until Q3 2025</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleArrowRight className="w-5 h-5 text-nymara-aqua mt-1 flex-shrink-0" />
                <span className="text-gray-200">$14M raised to date, seeking $30M total</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleArrowRight className="w-5 h-5 text-nymara-aqua mt-1 flex-shrink-0" />
                <span className="text-gray-200">5-year path to $100M annual recurring revenue</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleArrowRight className="w-5 h-5 text-nymara-aqua mt-1 flex-shrink-0" />
                <span className="text-gray-200">Quantified climate adaptation metrics for ESG reporting</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-nymara-aqua to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-nymara-aqua/30 transition-all"
              >
                Investment Opportunities
              </a>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Users className="w-6 h-6 text-nymara-aqua" />
            <h3 className="text-2xl font-bold text-white">What Partners Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-nymara-aqua/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-nymara-aqua/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-nymara-aqua">{testimonial.title}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestPartnerSection;
