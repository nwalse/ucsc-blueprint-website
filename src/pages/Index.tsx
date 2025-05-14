import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  return (
    <div>
      <Hero 
        title="Tech for Social Good"
        description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
        buttonText="View All Projects"
        buttonLink="/projects"
        decorative
      />
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 font-raleway">About Us</h2>
              <p className="mb-6 font-karla">UCSC Blueprint is a student-run organization founded in 2020, dedicated to making technology for social good.</p>
              <p className="mb-6 font-karla">We develop real-life web applications for non-profit organizations in Santa Cruz and beyond.</p>
              <p className="mb-6 font-karla">As part of our mission to foster a better community, we strive to foster a culture where we can improve our web development skills while helping amazing non-profits.</p>
              
              <Link 
                to="/team" 
                className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
              >
                Meet Our Team
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="../photos/team.png" 
                alt="Blueprint Team" 
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center font-raleway">Are you a Student?</h3>
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 24 24" className="h-16 w-16 text-blueprint-blue" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </div>
              <p className="text-center mb-6 font-karla">Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p>
              <div className="flex justify-center">
                <Link 
                  to="/students" 
                  className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
                >
                  View Opportunities
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center font-raleway">Are you a Nonprofit?</h3>
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 24 24" className="h-16 w-16 text-blueprint-blue" fill="currentColor">
                  <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
                </svg>
              </div>
              <p className="text-center mb-6 font-karla">Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p>
              <div className="flex justify-center">
                <Link 
                  to="/nonprofits" 
                  className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
                >
                  Collaborate With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-raleway">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ServiceCard 
              title="Web Applications" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              icons={[
                <svg key="web1" viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor">
                  <path d="M4,5H20V7H4V5M4,9H20V11H4V9M4,13H20V15H4V13M4,17H14V19H4V17Z" />
                </svg>,
                <svg key="web2" viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor">
                  <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M4,9H20V12H4V9M4,6H20V7H4V6M4,18V14H20V18H4Z" />
                </svg>,
                <svg key="web3" viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor">
                  <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              ]}
            />
            
            <ServiceCard 
              title="Mobile Applications" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              icons={[
                <svg key="mobile1" viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor">
                  <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
                </svg>,
                <svg key="mobile2" viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor">
                  <path d="M16,18H7V4H16M11.5,22A1.5,1.5 0 0,1 10,20.5A1.5,1.5 0 0,1 11.5,19A1.5,1.5 0 0,1 13,20.5A1.5,1.5 0 0,1 11.5,22M15.5,1H7.5A2.5,2.5 0 0,0 5,3.5V20.5A2.5,2.5 0 0,0 7.5,23H15.5A2.5,2.5 0 0,0 18,20.5V3.5A2.5,2.5 0 0,0 15.5,1Z" />
                </svg>,
                <svg key="mobile3" viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor">
                  <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M10,17L5,12L6.41,10.59L10,14.17L17.59,6.58L19,8L10,17Z" />
                </svg>
              ]}
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-raleway">Our Projects</h2>
            <Link 
              to="/projects" 
              className="bg-blueprint-blue text-white px-4 py-2 rounded hidden md:block hover:bg-blue-800 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Sea Otter Savvy" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              imageSrc="https://via.placeholder.com/400x300?text=Sea+Otter+Savvy"
              link="/projects/sea-otter-savvy"
            />
            
            <ProjectCard 
              title="Native Animal Rescue" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              imageSrc="https://via.placeholder.com/400x300?text=Native+Animal+Rescue"
              link="/projects/native-animal-rescue"
            />
            
            <ProjectCard 
              title="Santa Cruz Mountain Art Center" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              imageSrc="https://via.placeholder.com/400x300?text=Santa+Cruz+Mountain+Art"
              link="/projects/santa-cruz-mountain-art-center"
            />
          </div>
          
          <div className="mt-12 flex justify-center md:hidden">
            <Link 
              to="/projects" 
              className="bg-blueprint-blue text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-raleway">Collaboration</h2>
          <p className="text-lg max-w-2xl mx-auto mb-12 font-karla">
            Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare. Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.
          </p>
          <Link 
            to="/contact" 
            className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-8 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
