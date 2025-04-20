// import React from 'react'

import FlippableCard from "./flipableCards/FlippableCard";

const CardsSection = () => {

    const cardsData = [
        {
          title: 'PERSONAL DEVELOPMENT',
          icon: './tiglPage/personal.png',
          backImage: 'tiglPage/personal.jpg',
          backText: 'Engage users with smart chatbots.',
        },
        {
          title: 'PROFESSIONAL DEVELOPMENT',
          icon: 'tiglPage/professional.png',
          backImage: 'tiglPage/professional.jpg',
          backText: 'Boost productivity using AI tools.',
        },
        {
          title: 'BUSINESS DEVELOPMENT',
          icon: 'tiglPage/business.png',
          backImage: 'tiglPage/business.jpg',
          backText: 'Automate workflows with ease.',
        },
        {
          title: 'LEADERSHIP DEVELOPMENT',
          icon: 'tiglPage/leadership.png',
          backImage: 'tiglPage/leadership.jpg',
          backText: 'Gain insights with smart analytics.',
        },
      ];
      console.log("CardsSection", cardsData);
  return (
    
    <section className=" grid mt-20 grid-cols-1 md:grid-cols-2 gap-6 w-[90%] lg:grid-cols-4 bg-gray-50 py-10">
        {cardsData && cardsData.map((card, index) => (
        <FlippableCard
          key={index}
          title={card.title}
          icon={card.icon}
          backImage={card.backImage}
          backText={card.backText}
        />
      ))}

    </section>
    
  )
}

export default CardsSection