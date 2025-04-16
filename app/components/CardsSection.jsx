// import React from 'react'

import FlippableCard from "./flipableCards/FlippableCard";

const CardsSection = () => {

    const cardsData = [
        {
          title: 'PERSONAL DEVELOPMENT',
          icon: './tiglPage/personal.png',
          backImage: '/images/chatbot-detail.png',
          backText: 'Engage users with smart chatbots.',
        },
        {
          title: 'PROFESSIONAL DEVELOPMENT',
          icon: 'tiglPage/professional.png',
          backImage: '/images/ai-tools.png',
          backText: 'Boost productivity using AI tools.',
        },
        {
          title: 'BUSINESS DEVELOPMENT',
          icon: 'tiglPage/business.png',
          backImage: '/images/automation.png',
          backText: 'Automate workflows with ease.',
        },
        {
          title: 'LEADERSHIP DEVELOPMENT',
          icon: 'tiglPage/leadership.png',
          backImage: '/images/analytics.png',
          backText: 'Gain insights with smart analytics.',
        },
      ];
      console.log("CardsSection", cardsData);
  return (
    
    <section className=" grid mt-10 grid-cols-1 md:grid-cols-2 gap-6 w-[90%] lg:grid-cols-4">
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