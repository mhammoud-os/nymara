
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => (
  <a 
    href={href} 
    className="relative text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 group"
  >
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nymara-aqua transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-nymara-darker/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="hover:scale-110">
              <img
                src="/lovable-uploads/logo.png"
                alt="Nymara Logo" 
                className="h-10 md:h-12 drop-shadow-[0_0_5px_rgba(80,219,255,0.6)] brightness-110"
              />
              </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <NavItem href="#mission">Mission</NavItem>
          <NavItem href="#solution">Solution</NavItem>
          <NavItem href="#technology">Technology</NavItem>
          <NavItem href="#need">Need</NavItem>
          <NavItem href="#business">Business</NavItem>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact" 
            className="hidden md:block bg-gradient-to-r from-nymara-aqua to-blue-500 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-nymara-aqua/20 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
