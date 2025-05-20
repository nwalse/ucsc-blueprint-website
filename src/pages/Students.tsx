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
        "Applications open up during Fall Quarter around Cornucopia where we recruit designers and developers. We may also recruit at different times of the year depending on the needs of our team and partners.",
      icon: "icons/calendar.svg",
    },
    {
      title: "Apply",
      description: "We try to keep our application short accepting students of all skill and grade levels! If you're interested in using technology to help others, we encourage you to apply!",
      icon: "icons/send.svg",
    },
    {
      title: "Application Review",
      description: "We strongly look for kind, helpful individuals passionate about technology for good. The most important things that we look for is passion for the mission, willingless to grow, and a team player (e.g. do you enjoy helping others?)",
      icon: "icons/search.svg"
    },
    {
      title: "Interviews",
      description: "If selected, you will have an interview with one of Blueprint's leadership to see if you are the right fit! This includes technical challenges in React for devlopers and design challenges in Figma for designers.",
      icon: "icons/profile.svg"
    },
    {
      title: "Decisions",
      description: "Decisions are made by the leadership team and you will be notified via email. We accept a limited number of students each quarter, so if you are not accepted, we encourage you to apply when applications open again.",
      icon: "icons/mail.svg"
    },
    {
      title: "Join the Team",
      description: "If accepted, you will be invited to our onboarding meetings where you will meet your team and learn more about the projects you'll be working on. The onboarding for developers and designers is different, so make sure to check the schedule.",
      icon: "blueprint/bpsmall.svg"
    },
  ];

  return (
    <div>
      <Hero 
        title="Students"
        description="Every year, our teams of student developers and designers learn how to build software for nonprofits. We are always looking for passionate students who want to make a difference in the world through technology."
        buttonText="See Opportunities at Blueprint"
        imageSrc="/blueprint/forchange2.jpg"
        maxHeight='250px'
        maxWidth='300px'
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
              buttonLink=""
              buttonStatus="inactive"
            />
            
            <ApplicationCard
              images={[
                { src: "/icons/adobe.svg", alt: "Adobe" },
                { src: "/icons/figma.svg", alt: "Figma" },
                { src: "/icons/forms.svg", alt: "Forms" },
              ]}
              title="Designers"
              description="Work on the entire UX process in a team of designers including user research, prototyping, and case studies."
              buttonLink=""
              buttonStatus="inactive"
            />

            <ApplicationCard
              images={[
                { src: "/icons/slack.svg", alt: "Slack" },
                { src: "/icons/leadership.svg", alt: "Leadership" },
                { src: "/icons/notion.svg", alt: "Notion" },
              ]}
              title="Leadership"
              description="Work on product management, agile project management, and team leadership. Improve the Blueprint community."
              buttonLink=""
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
                Blueprint builds open-source software for nonprofits. This means that the code we write is available for anyone to use and distribute. We believe in the power of collaboration and transparency, and we want to make sure that our work can benefit as many people as possible.
              </p>
              <a
                href="https://github.com/ucsc-blueprint"
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

export default Students;
