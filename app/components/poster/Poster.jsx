import React from "react";
// import { Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import { Navbar } from "../Navbar/Navbar";

const Poster = () => {
  return (
    <div className="relative w-screen h-screen  bg-slate-300 overflow-x-hidden-hidden">
       
     

  <video
    src="video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  ></video>
  <Navbar />
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      
  
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center  text-white px-4">
  {/* <Navbar /> */}
  <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
   TRIMM INSTITUTE FOR GLOBAL LEADERSHIP
  </h1>
  <p className=" capitalize text-lg font-light md:text-2xl  mt-4 animate-slide-up">
  Empowering you <span className="lowercase"> to </span> lead transformational change.
  </p>
</div>

</div>

  );
};

export default Poster;
