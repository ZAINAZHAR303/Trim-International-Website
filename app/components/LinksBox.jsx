import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa"; // Import icons from react-icons

const LinksBox = () => {
  return (
    <div className="fixed z-200 right-0 top-[50%] transform -translate-y-1/2 bg-gray-200  rounded-l-lg flex flex-col items-center space-y-4 py-4 w-[40px] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
      {/* Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition hover:scale-110 duration-300"
      >
        <FaFacebookF className="text-lg group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-7 h-7 bg-red-600 text-white hover:scale-110 rounded-full hover:bg-red-700 transition  duration-300"
      >
        <FaYoutube className="text-lg group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-7 h-7 bg-blue-500 text-white rounded-full hover:scale-110  hover:bg-blue-600 transition duration-300"
      >
        <FaLinkedinIn className="text-lg group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default LinksBox;