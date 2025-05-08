import React, { useState } from 'react';
import { Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
      setMessage('');
      
      // Reset after a few seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-nymara-darker py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <a href="#" className="block group">
                <div className="rounded-lg p-1.5 bg-white/10 backdrop-blur-sm shadow-md transform transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/lovable-uploads/fb60c100-2ee6-4319-9968-37df5f6696fa.png" 
                    alt="Nymara Logo" 
                    className="h-10 drop-shadow-[0_0_5px_rgba(80,219,255,0.6)] brightness-110"
                  />
                </div>
              </a>
            </div>
            
            <p className="text-gray-300 mb-8">
              Streets That Flow — Transforming urban infrastructure to create climate-resilient cities that work with water, not against it.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-nymara-aqua" />
                <a href="mailto:hello@nymara.tech">hello@nymara.tech</a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-nymara-aqua" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nymara-aqua/20 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-nymara-aqua transition-colors" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nymara-aqua/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-nymara-aqua transition-colors" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nymara-aqua/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-nymara-aqua transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Right column */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Let's Build Resilience</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nymara-aqua/50"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-gray-300 mb-2">I'm interested in</label>
                  <select 
                    id="interest"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nymara-aqua/50"
                  >
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="investment">Investment Information</option>
                    <option value="technology">Technology Details</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nymara-aqua/50 h-32 resize-none"
                  placeholder="Tell us about your city, project, or questions"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-nymara-aqua to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-nymara-aqua/30 transition-all disabled:opacity-70"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Let's Build Resilience"}
                </button>
                
                {submitted && (
                  <div className="text-nymara-aqua animate-scale-in">
                    Thank you! We'll be in touch soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base text-gray-500 text-center">
            © {new Date().getFullYear()} Nymara, Inc. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-nymara-aqua transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-nymara-aqua transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-nymara-aqua transition-colors">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

