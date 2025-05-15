import React from "react";

interface ApplicationCardProps {
  images: { src: string; alt: string }[];
  title: string;
  description: string;
  buttonLink: string;
  buttonStatus: "active" | "inactive";
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ images, title, description, buttonLink, buttonStatus }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 font-raleway">{title}</h2>
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className={index === 1 ? "h-32 w-32" : "h-16 w-16"} />
          ))}
        </div>
      </div>
      <p className="mb-6 font-karla">{description}</p>
      <div className="flex justify-left">
        <a
          href={buttonStatus === "active" ? buttonLink : "#"}
          className={`border-2 ${
            buttonStatus === "active"
              ? "border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white"
              : "border-gray-400 text-gray-400 cursor-not-allowed"
          } font-medium py-2 px-6 transition-colors duration-300`}
          onClick={(e) => buttonStatus === "inactive" && e.preventDefault()}
        >
          {buttonStatus === "active" ? "Apply Here" : "Applications Closed"}
        </a>
      </div>
    </div>
  );
};

export default ApplicationCard;