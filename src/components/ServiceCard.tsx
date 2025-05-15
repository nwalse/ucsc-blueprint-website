
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icons: React.ReactNode[];
}

const ServiceCard = ({ title, description, icons }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-start text-left max-w-sm p-8 bg-white">
      <div className="flex items-center space-x-6 mb-4">
        {icons.map((icon, index) => (
          <span key={index} className="text-blueprint-blue">
            {icon}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-3 font-raleway">{title}</h3>
      <p className="font-karla">{description}</p>
    </div>
  );
};

export default ServiceCard;
