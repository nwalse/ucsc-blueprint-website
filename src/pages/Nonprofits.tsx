import React, { useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import StepsProcess from '@/components/StepsCarousel';

const Nonprofits = () => {
  const faqItems = [
    {
      question: "How long do projects typically take?",
      answer: "Projects typically take 3 quarters or 9 months to complete, depending on the complexity of the project and the availability of resources. We work closely with our partners to ensure that timelines are realistic and achievable.",
    },
    {
      question: "Can we request a specific technology stack?",
      answer: "This depends on the project and the availability of resources. We typically use React and React Native for web and mobile applications, but we are open to discussing other technology stacks if they are easily accessible to our students, however we do not have the resources to support other technology stacks.",
    },
    {
      question: "Can we create product for profit?",
      answer: "No, Blueprint is a nonprofit organization and we do not create products for profit. Our mission is to provide free software development services to nonprofits and organizations that are making a positive impact in their communities.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Applications Open",
      description:
        "Blueprint typically opens nonprofit applications in the summer. This is when nonprofits can apply to work with us for the upcoming school year. If the deadline has passed, please reach out to us since we may still have availability or be able to work with you in the future.",
      icon: "icons/calendar.svg",
    },
    {
      title: "Apply",
      description: "Our application process is simple and straightforward. We ask that you fill out a form with your nonprofit's information and project details. This helps us understand your needs and how we can best assist you.",
      icon: "icons/send.svg",
    },
    {
      title: "Application Review",
      description: "We review all applications carefully to ensure that we can provide the best possible service to our partners. We look for projects that align with our mission and values as an organization.",
      icon: "icons/search.svg"
    },
    {
      title: "Project Briefing",
      description: "We may schedule a call or email you to discuss your project in more detail. This is an opportunity for us to ask questions and for you to provide additional information about your organization's needs.",
      icon: "icons/profile.svg"
    },
    {
      title: "Decisions",
      description: "We will notify you of our decision regarding your application. If not selected, we may provide other resources or suggestions for your project. If selected, we will work with you to finalize the details of our partnership.",
      icon: "icons/mail.svg"
    },
    {
      title: "Project Statement of Work",
      description: "Once selected, we will work with you to create a project statement of work (SOW). This document outlines the scope of the project, timelines, and deliverables. It ensures that both parties are on the same page and sets clear expectations for the partnership.",
      icon: "blueprint/bpsmall.svg"
    },
  ];

  const buttonActive = false;
  const buttonLink = "";

  return (
    <div>
      <Hero 
        title="Nonprofits"
        description="Each year Blueprint partners with nonprofits to provide free software development services. Our team of students works closely with these organizations to create custom solutions that meet their unique needs."
        buttonText="Work with Us"
        imageSrc="/blueprint/forchange.jpg"
        maxHeight='300px'
        maxWidth='375px'
      />
      
      <section className="py-16 md:py-24  px-6">
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
                Work with Blueprint to create custom software solutions that meet your nonprofit's unique needs. Our team of students is dedicated to providing high-quality development services at no cost to you.
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
      
      <section className="py-16 md:py-24 px-6 bg-gray-50">

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-left font-raleway">Our Services</h2>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center">
            <ServiceCard 
              title="Web Applications" 
              description="Web Applications are software applications that run on a web server and can be accessed through a web browser like Chrome. They are designed to work across different devices and platforms, but mostly on laptops and desktops."
              icons={[
                <img key="web1" src="/icons/server.svg" alt="Web Icon 1" className="h-12 w-12" />,
                <img key="web2" src="/icons/webPage.svg" alt="Web Icon 2" className="h-12 w-12" />,
                <img key="web3" src="/icons/browser.svg" alt="Web Icon 3" className="h-12 w-12" />,
              ]}
            />

            <ServiceCard 
              title="Mobile Applications" 
              description="Mobile Applications are software applications designed to run on mobile devices such as smartphones and tablets. They can be downloaded from app stores."
              icons={[
                <img key="mobile1" src="/icons/apple.svg" alt="Mobile Icon 1" className="h-12 w-12" />,
                <img key="mobile2" src="/icons/phone.svg" alt="Mobile Icon 2" className="h-12 w-12" />,
                <img key="mobile3" src="/icons/android.svg" alt="Mobile Icon 3" className="h-12 w-12" />,
              ]}
            />

            <ServiceCard 
              title="Software Tools" 
              description="Tools are software applications that help users perform specific tasks or functions. They can be standalone applications or integrated into larger systems."
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
