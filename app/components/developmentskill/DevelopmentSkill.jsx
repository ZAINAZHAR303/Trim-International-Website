import React from "react";

const DevelopmentSkill = ({ title, description, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} items-center gap-8 my-16 p-5  `}>
      {/* Image Container with Orange Background Box */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Orange Box Behind */}
        <div className="absolute h-[500px] w-[400px] bg-orange-400 rounded-lg  -left-2 md:left-23  -bottom-2"></div>

        {/* Main Image */}
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg w-[400px] max-w-md h-[500px] relative object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-4 uppercase text-blue-400">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default DevelopmentSkill;
