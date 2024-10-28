import React from "react";

function Course() {
  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col">
      {/* Top fixed bar */}
      <div className="bg-[#4B4BE2] w-full h-[30px]  mt-20 left-0 z-10 "></div>

      {/* Main Content */}
      <div className="flex flex-row flex-grow items-center justify-center  overflow-hidden">
        <div className="flex-grow-[1]">
          <img
            src="/public/What’s in the course_.png"
            alt="course"
            className="w-[80%] ml-8 object-cover"
          />
          <div className="font-[Meera Inimai] font-normal text-5xl mt-6 ml-10 text-black">
            On this course you will learn
            <br />
          </div>
          <div className="font-[Meera Inimai] font-normal text-2xl leading-[3rem] ml-8 mt-6">
            -The principles and mechanics of using AI in trading
            <br />
            -How to properly compose and implement automated trading strategies
            <br />
            -Use your ideas in practice, because{" "}
            <span className="text-red-600">we’ve got a present for you!</span>
          </div>
        </div>
        <div className="flex-grow">
          <img
            src="/public/photo_2024-09-09 17.16.29 1.png"
            alt="photo"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Bottom fixed bar */}
      <div className="bg-[#B52D24] w-full h-[30px]  left-0 "></div>
    </div>
  );
}

export default Course;
