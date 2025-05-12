
import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const TeamMember = ({ name, role, image, linkedin }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 rounded-full overflow-hidden w-32 h-32 border-2 border-blueprint-blue">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold font-raleway">{name}</h3>
      <p className="text-sm text-gray-600 mb-2 font-karla">{role}</p>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blueprint-blue hover:text-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      )}
    </div>
  );
};

const Team = () => {
  return (
    <div>
      <Hero 
        title="Our Team"
        description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
        buttonText="Meet our Team"
        buttonLink="#leadership"
      />
      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/3">
              <img src="https://via.placeholder.com/400x300?text=Blueprint+Logo" alt="Blueprint Logo" className="w-full" />
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 font-raleway">Collaboration</h2>
              <p className="mb-6 font-karla">
                Each year Blueprint works with nonprofits, designers, and developers to build software products that enhance initiatives at no cost. If you're a non-profit and would like to collaborate with us:
              </p>
              <Link 
                to="/contact" 
                className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-8 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div id="leadership" className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Leadership</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <TeamMember 
                name="Noel Wallace" 
                role="President" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="Vice President" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Designers</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Developers</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Alumni</h2>
            
            <div className="text-center mb-8">
              <p className="text-gray-600 font-karla">Page 1 of 4</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                <button className="bg-white rounded-full p-2 shadow-md">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-600" fill="currentColor">
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
                <button className="bg-white rounded-full p-2 shadow-md">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-600" fill="currentColor">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </button>
              </div>
            
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
              <TeamMember 
                name="Noel Wallace" 
                role="VP of Design" 
                image="https://via.placeholder.com/300?text=NW"
                linkedin="https://linkedin.com"
              />
            </div>
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

export default Team;
