import React from "react";

function Contacts() {
  return (
    <div className=" w-full overflow-hidden mt-0 ">
      <div className="flex flex-row  w-full h-[65vh]">
        {/* Left Section */}
        <div className=" h-full w-[65%] flex flex-col p-6 lg:p-12">
          <h1 className="font-[Koulen] text-[#B52D24] text-6xl lg:text-8xl mt-10 lg:mt-18">
            CONTACTS
          </h1>
          <p className="font-[Meera Inimai] text-lg lg:text-4xl  mt-6 lg:mt-10">
            You can ask any questions or find out
            <br /> more info on Telegram and Instagram!
          </p>
          {/* Buttons */}
          <div className=" flex flex-row gap-8 mt-14">
            <div className="flex flex-col items-center">
              <button className="w-16 h-16 bg-[#4B4BE2] rounded-full flex items-center justify-center">
                <img
                  src="\public\Vector (5).png"
                  alt="vector5"
                  className="w-6 h-6 "
                />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <button className="w-16 h-16 bg-[#4B4BE2] rounded-full flex items-center justify-center">
                <img
                  src="\public\Vector (6).png"
                  alt="vector6"
                  className="w-6 h-6"
                />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <button className="w-16 h-16 bg-[#4B4BE2] rounded-full flex items-center justify-center">
                <img
                  src="\public\Group (4).png"
                  alt="group4"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" h-[70vh] w-[35%] flex flex-col">
            <div className=" ml-12 w-full h-[70vh]  mt-8">
         <img src="\public\Rectangle 35.png" alt="rectangle35 "className="mt-6 ml-32 h-[12%] w-[50%]"/>
         <img src="\public\Rectangle 36.png" alt="rectangle36" className="mt-6 h-[12%] w-[30%]"/>
         <img src="\public\Rectangle 37.png" alt="rectangle37"className="mt-6 ml-32 h-[30%] w-[50%]"/>
         <img src="\public\Rectangle 38.png" alt="rectangle37" className="mt-6 h-[12%] w-[50%]"/>
         <img src="\public\Group 18.png" alt="group18"className="mt-6 ml-80 h-[12%] w-[20%]"/>
        </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="h-20 w-full flex items-center font-[Koulen] text-[#B52D24] text-2xl lg:text-4xl p-6">
        Subscribe and get 10% discount on the course!
      </div>
    </div>
  );
}

export default Contacts;