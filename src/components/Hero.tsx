
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero = ({ title, description, buttonText, buttonLink }: HeroProps) => {
  return (
    <section className="blueprint-grid-bg py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-raleway max-w-3xl">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white max-w-2xl font-karla">
          {description}
        </p>
        {buttonText && buttonLink && (
          <Link 
            to={buttonLink} 
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-blueprint-blue font-medium py-2 px-8 transition-colors duration-300 font-karla"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
