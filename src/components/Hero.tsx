import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  decorative?: boolean;
  imageSrc?: string;
}

const Hero = ({ title, description,  decorative = false, buttonText, buttonLink, imageSrc }: HeroProps) => {
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

          {/* Clouds - Left to Right */}
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-12 left-0 w-44 md:w-64 opacity-10 pointer-events-none select-none animate-cloud-xslow"
            style={{ zIndex: 1}}
          />
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-20 left-1/4 w-52 md:w-72 opacity-5 pointer-events-none select-none animate-cloud-medium"
            style={{ zIndex: 1}}
          />
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-3/5 left-1/6 w-40 md:w-56 opacity-5 pointer-events-none select-none animate-cloud-slow"
            style={{ zIndex: 1 }}
          />
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-2/5 left-3/4 w-44 md:w-64 opacity-10 pointer-events-none select-none animate-cloud-fast"
            style={{ zIndex: 1}}
          />
          <img
            src="/icons/cloud2.svg"
            alt="Cloud"
            className="absolute top-52 left-1/3 w-32 md:w-48 opacity-5 pointer-events-none select-none animate-cloud-slow"
            style={{ zIndex: 1 }}
          />
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-3/4 left-5 w-24 md:w-40 opacity-15 pointer-events-none select-none animate-cloud-fast"
            style={{ zIndex: 1 }}
          />
          <img
            src="/icons/cloud2.svg"
            alt="Cloud"
            className="absolute top-6 right-1/8 w-32 md:w-44 opacity-5 pointer-events-none select-none animate-cloud"
            style={{ zIndex: 1}}
          />

          {/* Clouds - Right to Left */}
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-4/5 left-1/2 w-36 md:w-56 opacity-15 pointer-events-none select-none animate-cloud-slow-rtl"
            style={{ zIndex: 1 }}
          />
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-1/4 left-3/5 w-36 md:w-52 opacity-5 pointer-events-none select-none animate-cloud-medium-rtl"
            style={{ zIndex: 1}}
          />
          <img
            src="/icons/cloud2.svg"
            alt="Cloud"
            className="absolute top-3/4 left-2/5 w-28 md:w-40 opacity-5 pointer-events-none select-none animate-cloud-rtl"
            style={{ zIndex: 1}}
          />
          <img
            src="/icons/cloud2.svg"
            alt="Cloud"
            className="absolute top-1/2 left-1/5 w-28 md:w-40 opacity-15 pointer-events-none select-none animate-cloud-fast-rtl"
            style={{ zIndex: 1}}
          />
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-1/6 right-1/3 w-32 md:w-44 opacity-5 pointer-events-none select-none animate-cloud-vfast-rtl"
            style={{ zIndex: 1}}
          />
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-28 right-5 w-44 md:w-64 opacity-5 pointer-events-none select-none animate-cloud-slow-rtl"
            style={{ zIndex: 1 }}
          />
          <img
            src="/icons/cloud1.svg"
            alt="Cloud"
            className="absolute top-2/3 right-1/3 w-44 md:w-64 opacity-15 pointer-events-none select-none animate-cloud-fast-rtl"
            style={{ zIndex: 1}}
          />
          <img
            src="/icons/cloud2.svg"
            alt="Cloud"
            className="absolute top-5/6 right-1/5 w-36 md:w-48 opacity-10 pointer-events-none select-none animate-cloud-medium-rtl"
            style={{ zIndex: 1}}
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

          {/* Slug */}
          <img
            src="/icons/slug.svg"
            alt="Slug"
            className="absolute left-1 bottom-0 w-20 md:w-34 pointer-events-none select-none -translate-x-1/2 animate-slug-ltr-fastest"
            style={{ zIndex: 6 }}
          />
          <img
            src="/icons/slug.svg"
            alt="Slug"
            className="absolute left-1 bottom-0 w-20 md:w-34 pointer-events-none select-none -translate-x-1/2 animate-slug-ltr-fast"
            style={{ zIndex: 6 }}
          />
          <img
            src="/icons/slug.svg"
            alt="Slug"
            className="absolute left-1 bottom-0 w-20 md:w-34 pointer-events-none select-none -translate-x-1/2 animate-slug-ltr"
            style={{ zIndex: 6 }}
          />
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
          <Link to={buttonLink} onClick={() => window.scrollTo(400, 400)} className="border border-white text-white hover:bg-white hover:text-blueprint-blue px-3 py-1 font-medium py-2 px-6 transition-colors duration-300">
            {buttonText}
          </Link>

      </div>
      {imageSrc && (
        <img src={imageSrc} alt="Hero Image" />
      )}
    </section>
  );
};

export default Hero;
