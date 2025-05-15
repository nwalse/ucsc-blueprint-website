import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousel';

const svgs = import.meta.glob('../assets/partners/*.svg', { eager: true, query: '?url', import: 'default'});

const Home = () => {
  return (
    <div>
      <Hero 
        title="Tech for Social Good"
        description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
        decorative
        buttonText="Learn More"
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
                src="src/assets/photos/team.png" 
                alt="Blueprint Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">

        <div className="max-w-5xl mx-auto ">
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          {/* Student Card */}
          <div className="p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-raleway">Are you a Student?</h3>
            <div className="mb-6 flex gap-8">
              <img 
                src="/blueprint/bpsmall.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue m-0 p-0" 
              />
              <img 
                src="/icons/handshake.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue m-0 p-0" 
              />
              <img 
                src="/icons/grad.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue m-0 p-0" 
              />
            </div>
            <p className="mb-6 font-karla">
              Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.
            </p>
            <div>
              <Link 
                to="/students" 
                className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
              >
                View Opportunities
              </Link>
            </div>
          </div>

          {/* Nonprofit Card */}
          <div className="p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-raleway">Are you a Nonprofit?</h3>
            <div className="mb-6 flex gap-8">
            <img 
                src="/blueprint/bpsmall.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue" 
              />
              <img 
                src="/icons/handshake.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue" 
              />
              <img 
                src="/icons/cert.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue" 
              />
            </div>
            <p className="mb-6 font-karla">
              Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.
            </p>
            <div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left font-raleway">Our Services</h2>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center">
            <ServiceCard 
              title="Web Applications" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              icons={[
                <img key="web1" src="/icons/server.svg" alt="Web Icon 1" className="h-12 w-12" />,
                <img key="web2" src="/icons/webPage.svg" alt="Web Icon 2" className="h-12 w-12" />,
                <img key="web3" src="/icons/browser.svg" alt="Web Icon 3" className="h-12 w-12" />,
              ]}
            />

            <ServiceCard 
              title="Mobile Applications" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              icons={[
                <img key="mobile1" src="/icons/apple.svg" alt="Mobile Icon 1" className="h-12 w-12" />,
                <img key="mobile2" src="/icons/phone.svg" alt="Mobile Icon 2" className="h-12 w-12" />,
                <img key="mobile3" src="/icons/android.svg" alt="Mobile Icon 3" className="h-12 w-12" />,
              ]}
            />

            <ServiceCard 
              title="Software Tools" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              icons={[
                <img key="mobile1" src="/icons/download.svg" alt="Mobile Icon 1" className="h-12 w-12" />,
                <img key="mobile2" src="/icons/webPage.svg" alt="Mobile Icon 2" className="h-12 w-12" />,
                <img key="mobile3" src="/icons/tools.svg" alt="Mobile Icon 3" className="h-12 w-12" />,
              ]}
            />
          </div>
        </div>

      </section>
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-raleway">Our Projects</h2>
            <Link 
              to="/projects" 
              className="flex inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto px-6">
            <Carousel itemsPerPage={2}>

            <ProjectCard 
              title="Sea Otter Savvy" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              imageSrc="../projects/sos.png"
              link="/projects/sea-otter-savvy"
            />
            
            <ProjectCard 
              title="Native Animal Rescue" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              imageSrc="../projects/nar.png"
              link="/projects/native-animal-rescue"
            />
            
            <ProjectCard 
              title="Santa Cruz Mountain Art Center" 
              description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
              imageSrc="../projects/scmac.png"
              link="/projects/santa-cruz-mountain-art-center"
            />
            </Carousel>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-raleway">Collaboration</h2>
          <p className="text-lg max-w-4xl mb-12 font-karla">
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

      <section className="py-16 md:py-24 px-6 ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-raleway">Our Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
            {Object.values(svgs).map((src, idx) => (
              <img
                key={idx}
                src={src as string}
                alt={`Partner ${idx + 1}`}
                className="h-16 w-auto object-contain transition-transform duration-200 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center py-8">
        <a href="#top" className="inline-block border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
          Back to top
        </a>
      </div>
    </div>
  );
};

export default Home;
