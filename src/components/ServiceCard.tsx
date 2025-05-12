
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icons: React.ReactNode[];
}

const ServiceCard = ({ title, description, icons }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center space-x-4 mb-6">
        {icons.map((icon, index) => (
          <span key={index} className="text-blueprint-blue">
            {icon}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center font-raleway">{title}</h3>
      <p className="text-center font-karla">{description}</p>
    </div>
  );
};

export default ServiceCard;
