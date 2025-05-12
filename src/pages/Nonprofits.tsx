
import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const Nonprofits = () => {
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
        title="Nonprofits"
        description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
        buttonText="Work with Us"
        buttonLink="#partnerships"
      />
      
      <section id="partnerships" className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Partnerships</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120?text=BP" alt="Blueprint Logo" className="h-24" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120?text=Handshake" alt="Partnership Icon" className="h-24" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120?text=501c3" alt="Nonprofit Icon" className="h-24" />
            </div>
          </div>
          
          <p className="text-center font-karla mb-8 max-w-3xl mx-auto">
            Each year Blueprint takes on non-profit clients and develops a software product to enhance their initiatives at no cost. If you are a non-profit and would like:
          </p>
          
          <div className="flex justify-center">
            <button className="bg-gray-200 text-gray-600 font-medium py-2 px-8 cursor-not-allowed">
              Applications Are Closed
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Our Services</h2>
          
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
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Partnership Process</h2>
          
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
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
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
                  <path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3Z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 relative">
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

export default Nonprofits;
