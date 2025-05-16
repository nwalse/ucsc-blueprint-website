import React, { useState } from "react";

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface StepsProcessProps {
  steps: Step[];
  activeStep: number;
  onStepChange: (stepIndex: number) => void;
}

const StepsProcess: React.FC<StepsProcessProps> = ({ steps, activeStep, onStepChange }) => {
  return (
    <section className="py-16 md:py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Timeline container */}
        <div className="grid grid-cols-3 md:flex md:flex-row justify-center items-center mb-16 gap-3">
          {steps.map((step, index) => (
            <div className="flex items-center justify-center" key={index}>
              {/* Step indicator */}
              <div
                className={`p-4 rounded-full flex flex-col items-center justify-center gap-2 ${
                    activeStep === index ? "bg-blueprint-light-blue" : "border border-gray-300 text-gray-500"
                }`}
                onClick={() => onStepChange(index)}
                style={{ cursor: "pointer" }}
                >
                <span className="text-sm font-medium">{index + 1}</span>
                <img src={step.icon} alt={`Step ${index + 1}`} className="h-8 w-8" />
              </div>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:block w-12 h-1 ${
                    activeStep >= index ? "bg-blueprint-light-blue" : "bg-gray-100"
                  }`}
                  style={{ marginRight: '-12px' }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step details */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blueprint-light-blue rounded-full">
              <img
                src={steps[activeStep].icon}
                alt={`Active Step ${activeStep + 1}`}
                className="h-12 w-12 text-blueprint-blue"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 text-center font-raleway">
            {activeStep + 1}. {steps[activeStep].title}
          </h3>
          <p className="text-center font-karla">{steps[activeStep].description}</p>
        </div>
      </div>
    </section>
  );
};

export default StepsProcess;