
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const ProjectCard = ({ title, description, imageSrc, link }: ProjectCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 overflow-hidden rounded-md">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2 font-raleway">{title}</h3>
      <p className="mb-4 font-karla text-gray-700">{description}</p>
      <Link 
        to={link} 
        className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-1 px-4 transition-colors duration-300 text-sm mt-auto"
      >
        Read More
      </Link>
    </div>
  );
};

export default ProjectCard;
