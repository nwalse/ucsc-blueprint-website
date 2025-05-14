import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  decorative?: boolean;
}

const Hero = ({ title, description, buttonText, buttonLink, decorative = false }: HeroProps) => {
  return (
    <section className={`blueprint-grid-bg py-16 md:py-24 px-6 md:px-16 relative overflow-hidden`}>
      {/* Decorative SVGs only if decorative is true */}
      {decorative && (
        <>
          {/* Moon - moved more to the left */}
          <img
            src="/icons/moon.svg"
            alt="Moon"
            className="absolute top-0 left-1/4 md:left-1/3 w-32 md:w-40 opacity-90 pointer-events-none select-none"
            style={{ zIndex: 1 }}
          />
          {/* Trees - random placement, 3 left, 2 center, 4 right, now larger */}
          {/* Left side trees */}
          <img src="/icons/tree.svg" alt="Tree" className="absolute left-40 bottom-0 w-16 md:w-24 pointer-events-none select-none" style={{ zIndex: 2 }} />
          <img src="/icons/tree.svg" alt="Tree" className="absolute left-15 md:left-12 bottom-0 w-12 md:w-20 pointer-events-none select-none" style={{ zIndex: 2 }} />
          <img src="/icons/tree.svg" alt="Tree" className="absolute left-30 md:left-28 bottom-0 w-10 md:w-16 pointer-events-none select-none" style={{ zIndex: 2 }} />
          {/* Center trees */}
          <img src="/icons/tree.svg" alt="Tree" className="absolute left-[43%] bottom-0 w-14 md:w-24 -translate-x-1/2 pointer-events-none select-none" style={{ zIndex: 3 }} />
          <img src="/icons/tree.svg" alt="Tree" className="absolute left-[45%] md:right-14 bottom-0 w-12 md:w-20 pointer-events-none select-none" style={{ zIndex: 2 }} />

          {/* Right side trees */}
          <img src="/icons/tree.svg" alt="Tree" className="absolute right-40 bottom-0 w-16 md:w-24 pointer-events-none select-none" style={{ zIndex: 2 }} />
          <img src="/icons/tree.svg" alt="Tree" className="absolute right-0 md:right-14 bottom-0 w-12 md:w-20 pointer-events-none select-none" style={{ zIndex: 2 }} />
          <img src="/icons/tree.svg" alt="Tree" className="absolute right-10 md:right-32 bottom-0 w-10 md:w-16 pointer-events-none select-none" style={{ zIndex: 2 }} />
        </>
      )}
      {/* Main content */}
      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-white font-raleway max-w-2xl ${decorative ? 'flex flex-col items-start gap-2' : ''}`}>
          {decorative ? (
            <>
              <div className="flex items-center gap-4">
                <span>Tech for</span>
                <img
                  src="/blueprint/bpsmall.svg"
                  alt="Blueprint Logo"
                  className="inline-block align-middle w-10 md:w-14 h-auto"
                  style={{ zIndex: 2 }}
                />
              </div>
              <span>Social Good</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white max-w-md font-karla">
          {description}
        </p>

      </div>
    </section>
  );
};

export default Hero;
