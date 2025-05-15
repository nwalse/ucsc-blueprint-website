import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 py-4 px-6 md:px-16 transition-all duration-300  ${isScrolled ? 'bg-blueprint-blue/100' : 'bg-blueprint-blue/30'}`}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="blueprint/blueprint-logo.svg" alt="Blueprint Logo" className="h-8" />
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/projects" className="text-white hover:text-gray-300 font-medium px-3 py-1">
            Projects
          </Link>
          <Link to="/students" className="text-white hover:text-gray-300 font-medium px-3 py-1">
            For Students
          </Link>
          <Link to="/nonprofits" className="text-white hover:text-gray-300 font-medium px-3 py-1">
            For Nonprofits
          </Link>
          <Link to="/team" className="text-white hover:text-gray-300 font-medium px-3 py-1">
            Team
          </Link>
          <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-blueprint-blue px-3 py-1 font-medium transition-colors duration-300">
            Contact Us
          </Link>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blueprint-blue border-t border-white/10 mt-4 w-full left-0">
          <div className="flex flex-col py-3 max-w-7xl mx-auto">
            <Link to="/projects" className="text-white hover:bg-white/10 py-3 px-6 font-medium">
              Projects
            </Link>
            <Link to="/students" className="text-white hover:bg-white/10 py-3 px-6 font-medium">
              For Students
            </Link>
            <Link to="/nonprofits" className="text-white hover:bg-white/10 py-3 px-6 font-medium">
              For Nonprofits
            </Link>
            <Link to="/team" className="text-white hover:bg-white/10 py-3 px-6 font-medium">
              Team
            </Link>
            <Link to="/contact" className="text-white hover:bg-white/10 py-3 px-6 font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
