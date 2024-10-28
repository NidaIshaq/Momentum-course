import React from "react";
import Header from "./Header";
import Course from "./Course";
import About from "./About";
import BotStats from "./BotStats";
import VisaCards from "./VisaCards";
import Contacts from "./Contacts";

function Landing() {
  return (
    <>
      <Header />
      <div className="w-full h-screen overflow-hidden">
        {/* Heading */}
        <div className="absolute top-[200px] left-[20px] sm:left-[50px] text-black font-normal text-[30px] sm:text-[40px] md:text-[50px]">
          Highly Profitable
        </div>
        {/* Image - Momentum Course */}
        <img
          src="/public/Momentum course.png"
          alt="momentum"
          className="absolute top-[280px] left-[20px] sm:left-[45px] w-[400px] sm:w-[500px] h-auto z-20"
        />

        <div
          className="
    w-[251px] 
    h-[72px] 
    absolute 
    top-[530px] 
    left-[45px] 
    gap-0 
    opacity-100         
    font-koulen
    text-[80px]         
    font-normal          
    leading-[71.63px] 
    text-left 

    text-[#379935]
   
  "
        >
          FOR $150
        </div>
        <div>
          <button
            style={{
              width: "200px",
              height: "50px",
              position: "absolute",
              top: "630px",
              left: "50px",
              borderRadius: "13px ",
              opacity: 1, // Use 1 for fully visible
              background: "#B52D24",
              color: "white", // Text color (optional)
              font: "Meera Inimai",
              size: "25px",

              // Font weight
            }}
          >
            Buy now
          </button>

          <button
            className="
    w-[200px] 
    h-[50px] 
    size-[25px]
    absolute 
    top-[630px] 
    left-[300px] 
    gap-0 
    rounded-[13px] /* Border radius */
    opacity-100               
    bg-[#4B4BE2]             
    text-white               
    font-bold                 
    hover:opacity-80    z-20    font-[Meera Inimai]   
  "
          >
            More info
          </button>
        </div>
        <div className="flex flex-row justify-center absolute top-[764px] w-full z-40 font-koulen font-normal text-[40px] h-[72px]">
          <div className="text-black mx-8">FOREX</div>
          <div className="text-black mx-8">CRYPTOCURRENCY</div>
          <div className="text-black mx-8">ANALYTICS</div>
          <div className="text-black mx-7">EDUCATION</div>
          <div className="text-black mx-6">COURSE</div>
          <div className="flex mx-6">
            <div className="text-black">TRAD</div>
            <div className="text-white">ING</div>
          </div>
          <div className="text-white mx-6">MONEY</div>
          <div className="text-white mx-6">MARKET</div>
          <div className="text-white mx-6">AI TECH</div>
        </div>
        <div className="absolute top-[550px] right-0 z-30">
          <img
            src="/public/Buy now and get our AI-bot for free!.png" // Corrected image path
            alt="buy now"
            className="h-[90px] w-[550px] mb-0"
          />
        </div>
        <div className="mt-4 py-4 text-center absolute top-[646px] bg-black bg-opacity-50 text-white mb-0 right-0 z-30 h-[165px] w-[540px] font-[Meera Inimai]">
          Intensive educational course based on using AI <br />
          technologies to make your trading become efficient
          <div className="border-b-2 border-0.5-white mt-4 w-[80%] mx-auto"></div>{" "}
          {/* White line with margin */}
        </div>

        <div>
          <img
            src="\public\traced-P8240358 1.png"
            alt="traced pic "
            className="  w-[1000px]
          h-[750px]
          absolute
          top-[80px]
          right-0
          left-auto z-10 mb-0"
          />
          <img
            src="\public\pattern-simmetrichnyj-treugolnik 1.png"
            alt="pattern pic"
            className="w-[1050px] h-[750px]  absolute top-[0px] right-0 left-auto z-0 mb-0"
          />
        </div>
      </div>
      <Course />
      <About />
      <BotStats />
      <VisaCards />
      <Contacts />
    </>
  );
}

export default Landing;
