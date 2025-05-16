import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import ApplicationCard from '@/components/ApplicationCard';
import StepsProcess from '@/components/StepsCarousel';

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

  return (
    <div>
      <Hero 
        title="Students"
        description="Every year, our teams of student developers and designers work with nonprofits to deliver an application that best suits their needs."
        buttonText="See Opportunities at Blueprint"
        buttonLink="/students#opportunities"
      />
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <ApplicationCard
              images={[
                { src: "/icons/vscode.svg", alt: "VSCode" },
                { src: "/icons/react.svg", alt: "React" },
                { src: "/icons/firebase.svg", alt: "Node" },
              ]}
              title="Developers"
              description="Work in an agile team specializing in Front-End or Back-End and develop an application from design to deployment."
              buttonLink="https://yfiob.org/"
              buttonStatus="inactive"
            />
            
            <ApplicationCard
              images={[
                { src: "/icons/adobe.svg", alt: "Adobe" },
                { src: "/icons/figma.svg", alt: "Figma" },
                { src: "/icons/forms.svg", alt: "Forms" },
              ]}
              title="Designers"
              description="Work in an agile team specializing in Front-End or Back-End and develop an application from design to deployment."
              buttonLink="https://yfiob.org/"
              buttonStatus="inactive"
            />

            <ApplicationCard
              images={[
                { src: "/icons/slack.svg", alt: "Slack" },
                { src: "/icons/leadership.svg", alt: "Leadership" },
                { src: "/icons/notion.svg", alt: "Notion" },
              ]}
              title="Leadership"
              description="Work in an agile team specializing in Front-End or Back-End and develop an application from design to deployment."
              buttonLink="https://yfiob.org/"
              buttonStatus="inactive"
            />

          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="lg:col-span-1">
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
            <div className="lg:col-span-1 flex justify-center">
              <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-center">
                <img src="/blueprint/bpsmall.svg" alt="Blueprint Logo" className="h-20 w-20" />
                <img src="icons/userCloud.svg" alt="Team Logo" className="h-20 w-20" />
                <img src="icons/github.svg" alt="GitHub Logo" className="h-20 w-20" />
              </div>
            </div>
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
        <div className="max-w-6xl mx-auto">
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

export default Students;
