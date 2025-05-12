
import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';

const Students = () => {
  const faqItems = [
    {
      question: "Applications Open?",
      answer: "Yes, applications are currently open until October 15th."
    },
    {
      question: "Applications Open?",
      answer: "Yes, applications are currently open until October 15th."
    },
    {
      question: "Applications Open?",
      answer: "Yes, applications are currently open until October 15th."
    },
    {
      question: "Applications Open?",
      answer: "Yes, applications are currently open until October 15th."
    },
    {
      question: "Applications Open?",
      answer: "Yes, applications are currently open until October 15th."
    },
    {
      question: "Applications Open?",
      answer: "Yes, applications are currently open until October 15th."
    }
  ];

  return (
    <div>
      <Hero 
        title="Students"
        description="Every year, our teams of student developers and designers work with nonprofits to deliver an application that best suits their needs."
        buttonText="See Opportunities at Blueprint"
        buttonLink="/students#opportunities"
      />
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 font-raleway">Developers</h2>
              <div className="flex justify-center mb-8">
                <div className="grid grid-cols-3 gap-4">
                  <img src="https://via.placeholder.com/80?text=VSCode" alt="VSCode" className="h-20 w-20" />
                  <img src="https://via.placeholder.com/80?text=React" alt="React" className="h-20 w-20" />
                  <img src="https://via.placeholder.com/80?text=Node" alt="Node" className="h-20 w-20" />
                </div>
              </div>
              <p className="mb-6 font-karla">
                Work in an agile team specializing in Front-End or Back-End and develop an application from design to deployment.
              </p>
              <div className="flex justify-center">
                <button className="border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300">
                  Apply Here
                </button>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 font-raleway">Designers</h2>
              <div className="flex justify-center mb-8">
                <div className="grid grid-cols-3 gap-4">
                  <img src="https://via.placeholder.com/80?text=Adobe" alt="Adobe" className="h-20 w-20" />
                  <img src="https://via.placeholder.com/80?text=Figma" alt="Figma" className="h-20 w-20" />
                  <img src="https://via.placeholder.com/80?text=UI" alt="UI" className="h-20 w-20" />
                </div>
              </div>
              <p className="mb-6 font-karla">
                Work on the entire UX process in a team of designers including user research, prototyping, and case studies.
              </p>
              <div className="flex justify-center">
                <button className="bg-gray-200 text-gray-600 font-medium py-2 px-6 cursor-not-allowed">
                  Applications Are Closed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 font-raleway">Open Source Projects</h2>
              <p className="mb-6 font-karla">
                Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.
              </p>
              <a 
                href="https://github.com" 
                className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
              >
                View our GitHub
              </a>
            </div>
            
            <div className="flex justify-center">
              <div className="flex space-x-4">
                <img src="https://via.placeholder.com/80?text=BP" alt="Blueprint Logo" className="h-20 w-20" />
                <img src="https://via.placeholder.com/80?text=Team" alt="Team Logo" className="h-20 w-20" />
                <img src="https://via.placeholder.com/80?text=GitHub" alt="GitHub Logo" className="h-20 w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Application Process</h2>
          
          <div className="flex justify-center mb-16">
            <div className="flex items-center">
              <div className="bg-blueprint-blue p-3 rounded-full">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                  <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="p-3 rounded-full border border-gray-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-400" fill="currentColor">
                  <path d="M3,18.73L5,18L14.69,2.33L17.33,5L3,18.73M15,15L17,13L19,15L17,17L15,15M11,19L13,17L15,19L13,21L11,19M22.28,5.27L18.7,1.72C18.32,1.34 17.68,1.34 17.3,1.72L15.3,3.72L20.28,8.7L22.28,6.7C22.66,6.32 22.66,5.65 22.28,5.27Z" />
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="p-3 rounded-full border border-gray-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-400" fill="currentColor">
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="p-3 rounded-full border border-gray-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-400" fill="currentColor">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="p-3 rounded-full border border-gray-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-400" fill="currentColor">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="p-3 rounded-full border border-gray-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-400" fill="currentColor">
                  <path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-100 rounded-full">
                <svg viewBox="0 0 24 24" className="h-12 w-12 text-blueprint-blue" fill="currentColor">
                  <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center font-raleway">1. Applications Open</h3>
            <p className="text-center font-karla">
              Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <FAQ items={faqItems} />
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

export default Students;
