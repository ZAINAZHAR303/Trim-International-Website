import React from 'react';
import './FlippableCard.css';

const FlippableCard = ({ title, icon, backImage, backText }) => {
  console.log("FlippableCard", title, icon, backImage, backText);
  return (
    <div className="flip-card w-[250px] h-[300px] px-4 m-auto cursor-pointer">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front flex flex-col items-center justify-center bg-white rounded-xl shadow-lg">
          <img src={icon} alt="Icon" className="w-16 h-16 mb-4" />
          <p className="text-lg font-bold">{title}</p>
        </div>

        {/* Back */}
        <div
          className="flip-card-back relative flex flex-col items-center justify-center bg-cover bg-center rounded-xl shadow-lg p-4"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 rounded-xl"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Semi-transparent black
          ></div>
          {/* Text Content */}
          <p className="text-lg font-bold text-blue-400 mb-2 z-10">{title}</p>
          <p className="text-center text-sm text-white z-10">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
