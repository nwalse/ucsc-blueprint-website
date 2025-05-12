
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blueprint-blue border-b border-blue-900 py-4 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/blueprint-logo.svg" alt="Blueprint Logo" className="h-8" />
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/projects" className="text-white hover:text-gray-300 font-medium">
            Projects
          </Link>
          <Link to="/students" className="text-white hover:text-gray-300 font-medium">
            Students
          </Link>
          <Link to="/nonprofits" className="text-white hover:text-gray-300 font-medium">
            Nonprofits
          </Link>
          <Link to="/team" className="text-white hover:text-gray-300 font-medium">
            Team
          </Link>
          <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-blueprint-blue px-4 py-1 font-medium transition-colors duration-300">
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
