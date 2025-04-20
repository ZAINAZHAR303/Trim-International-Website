import React from 'react'
import CardsSection from './CardsSection'
import DevelopmentSkill from './developmentskill/DevelopmentSkill';


const Development = () => {

  const skills = [
    {
      title: "Personal Development",
      description: "Your success is directly related to the investment you make in yourself. Unlock the keys to maximizing your personal potential by discovering your true genius, crafting a powerful life vision, setting and achieving goals aligned with your matrix of strengths, and harnessing your habits to optimize your energy and health.",
      image: "tiglPage/personal.jpg",
    },
    {
      title: "Professional Development",
      description: "Our professional development programs are about capacity building. What do you believe you are capable of achieving in your career, or how might you effect change in your field or industry? Learn the best practices for managing time, people, and resources for maximum impact in all your spheres of influence.",
      image: "tiglPage/professional.jpg",
    },
    {
      title: "Business Development",
      description: "How well are you managing your brand in the marketplace? What more could you be doing to build your platform, strengthen your organization, and provide win-win solutions to your constituents and stakeholders? Whether you are an entrepreneur or c-suite executive, we’ll equip you with industry best practices and strategies for exponential growth.",
      image: "tiglPage/business.jpg",
    },
    {
      title: "Leadership Development",
      description: "Leaders aren’t born; they’re developed. Our pioneering leadership development programs are designed to sharpen your leadership skills and improve your capacity to manage complexity. Our innovative and customized approaches are specifically tailored to align with your leadership service goals. Become a leader who leaves a legacy of lasting positive change.",
      image: "TiglPage/leadership.jpg",
    },
  ];
  return (
    <div className='w-full flex flex-col items-center justify-center  bg-white overflow-x-hidden'>
        <CardsSection />
        {/* <ScrollTimeline /> */}
        {skills.map((skill, index) => (
        <DevelopmentSkill key={index} {...skill} index={index} />
      ))}
    </div>
  )
}

export default Development