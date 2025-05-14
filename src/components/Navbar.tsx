import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            Contact
          </Link>
        </div>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
