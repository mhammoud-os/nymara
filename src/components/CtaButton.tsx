
import React from 'react';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CtaButton = ({ href, children, variant = 'primary', className = '' }: CtaButtonProps) => {
  const baseClasses = "px-8 py-3 rounded-full text-lg font-medium transition-all";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-nymara-aqua to-blue-600 text-white hover:shadow-lg hover:shadow-nymara-aqua/30",
    secondary: "bg-transparent border border-gray-600 hover:border-nymara-aqua/50 text-white hover:bg-white/5"
  };
  
  return (
    <a 
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default CtaButton;
