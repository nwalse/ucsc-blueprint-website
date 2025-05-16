import React, { useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import StepsProcess from '@/components/StepsCarousel';

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

  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Applications Open",
      description:
        "Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.",
      icon: "icons/calendar.svg",
    },
    {
      title: "Step 2 Title",
      description: "Description for step 2.",
      icon: "icons/send.svg",
    },
    {
      title: "Step 3 Title",
      description: "Description for step 3.",
      icon: "icons/search.svg"
    },
    {
      title: "Step 3 Title",
      description: "Description for step 3.",
      icon: "icons/profile.svg"
    },
    {
      title: "Step 3 Title",
      description: "Description for step 3.",
      icon: "icons/mail.svg"
    },
    {
      title: "Step 4 Title",
      description: "Description for step 4.",
      icon: "blueprint/bpsmall.svg"
    },
  ];

  const buttonActive = false;
  const buttonLink = "https://yfiob.org/";

  return (
    <div>
      <Hero 
        title="Nonprofits"
        description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
        buttonText="Work with Us"
        buttonLink="#partnerships"
      />
      
      <section className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="lg:col-span-1 flex justify-center">
              <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-center">
                <img src="/blueprint/bpsmall.svg" alt="Blueprint Logo" className="h-20 w-20" />
                <img src="icons/handshake.svg" alt="Team Logo" className="h-20 w-20" />
                <img src="icons/cert.svg" alt="GitHub Logo" className="h-20 w-20" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6 font-raleway">Partnerships</h2>
              <p className="mb-6 font-karla">
                Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.
              </p>
              <div className="flex justify-left">
              <a
                href={buttonActive ? buttonLink : "#"}
                className={`border-2 ${
                  buttonActive
                    ? "border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white"
                    : "border-gray-400 text-gray-400 cursor-not-allowed"
                } font-medium py-2 px-6 transition-colors duration-300`}
                onClick={(e) => !buttonActive && e.preventDefault()}
              >
                {buttonActive ? "Apply Here" : "Applications Closed"}
              </a>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Application Process</h2>
          <StepsProcess
            steps={steps}
            activeStep={activeStep}
            onStepChange={(stepIndex) => setActiveStep(stepIndex)}
          />
        </div>
      </section>
      
      <section className="py-16 md:py-12  px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Frequently Asked Questions</h2>
          
          <div className="rounded-lg p-8 bg-gray-50">
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
