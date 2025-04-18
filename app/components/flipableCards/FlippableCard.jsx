import React from 'react';
import './FlippableCard.css';

const FlippableCard = ({ title, icon, backImage, backText }) => {

    console.log("FlippableCard", title, icon, backImage, backText);
  return (
    <div className="flip-card w-[250px] h-[300px] px-4 m-auto ">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front flex flex-col items-center justify-center bg-white rounded-xl shadow-lg">
          <img src={icon} alt="Icon" className="w-16 h-16 mb-4" />
          <p className="text-lg font-bold">{title}</p>
        </div>

        {/* Back */}
        <div className="flip-card-back flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-4">
          <img src={backImage} alt="Back" className="w-24 h-24 object-cover mb-4" />
          <p className="text-center text-sm">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
