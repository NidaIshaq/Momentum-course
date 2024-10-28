import React from "react";

function Header() {
  return (
    <div className="w-full h-full">
    <div
      className="w-screen h-20 fixed top-0 shadow-lg z-50 bg-[#4B4BE2] flex justify-between items-center px-4 md:px-10 lg:px-20"
    >
      <img
        src="/public/Group 19.png"
        alt="group"
        className="w-[60px] h-[35px] md:w-[78px] md:h-[41px]"
      />

      <div className="flex items-center space-x-4">
        <button
          className="
            text-white 
            bg-[#B52D24] 
            px-4 py-1 
            rounded-l-md 
            text-sm md:text-base
            hover:bg-opacity-80
            transition-all duration-200
          "
        >
          Registration
        </button>

        <button
          className="
            text-white 
            bg-[#B52D24] 
            px-4 py-1 
            rounded-md 
            text-sm md:text-base
            hover:bg-opacity-80
            transition-all duration-200
          "
        >
          Login
        </button>

        <img
          src="/public/Ellipse 1.png"
          alt="eclipse"
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
    </div></div>
  );
}

export default Header;
