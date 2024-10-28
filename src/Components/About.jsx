import React from "react";

function About() {
  return (
    
    <div className="w-full h-[90vh] overflow-hidden   border-b-10">
         <div className="">
      <div className="flex flex-row   ">
        {/* Left Section - First Image and Text */}
        <div className="flex flex-col items-start mt-20   h-10  ">
          <img
            src="/public/About the project.png"
            alt="about"
            className="w-[80%] mb-6  ml-12"
          />

          <div
            className="text-2xl font-semibold mb-4 font-[Meera Inimai]
size[ 45px] weight-[400px]
mt-5 
line-height-[ 100px]  ml-12 text-black

"
          >
            We use tons of data to constantly <br />
            develop and improve our product so <br />
            you can make money with us!
          </div>

          <div
            className="text-2xl mb-6 font-semibold font-[Meera Inimai]   
mt-5 line-height-[ 100px] ml-12
size-[ 45px]"
          >
            Our team creates effective content by eliminating <br />
            all unnecessary content so you don't waste your <br />
            time on another google first link reading!
          </div> 

          <div className=" mt-10 ml-6 text-6xl text-[#B52D24] px-4 py-2 font-bold rounded-md font-[Koulen]  ">
  Subscribe on TG to learn more
</div>

        </div>

        {/* Right Section - Second Image and Buttons */}
        <div className="flex flex-col items-center  mb-20 z-0 mt-20 ">
          <img
            src="\public\traced-P8240342 1.png"
            alt="about trac"
            className="w-[80%] "
          />
    <div className="border-b-2 border-black w-[90%] z-10 "></div> {/* Black line at image edge */}

<div className="flex justify-end space-x-3 mt-[-24px] ml-20"> {/* Icons centered above the black line */}
  <button className="flex justify-end border-4 border-black rounded-full p-3 z-20 ml-20">
    <img src="/public/Group (1).png" alt="YouTube" className="w-5 h-5" />
  </button>

  <button className="flex justify-end border-4 border-black rounded-full p-3 z-20 ml-20">
    <img src="/public/Vector.png" alt="Instagram" className="w-5 h-5" />
  </button>

  <button className="flex justify-end border-4 border-black rounded-full p-3 z-20 ml-20">
    <img src="/public/Vector (1).png" alt="LinkedIn" className="w-5 h-5" />
  </button>
</div>
        </div>
      </div> 
    </div> <div className="bg-[#4B4BE2]  w-full h-[30px] absolute  left-0"></div>
    </div>
  );
}
export default About;