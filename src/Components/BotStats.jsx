import React from "react";

function BotStats() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row flex-[0.85]">
        <div className="w-full lg:w-1/2 flex flex-col p-4 lg:p-10">
          <div className="font-[Koulen] text-4xl lg:text-[100px] leading-tight lg:leading-[1.2] text-[#B52D24] mt-4 lg:mt-10">
            OUR BOT STATS
          </div>
          <div className="font-[Meera Inimai] text-lg lg:text-4xl leading-8 lg:leading-[80px] font-semibold mt-2">
            06/09/2022 - 17/07/24
          </div>
          <div className="flex flex-col lg:flex-row mt-6 lg:mt-10">
            <div className="flex flex-col w-full lg:w-1/3 mt-6 lg:mt-0">
              <div className="font-[Koulen] text-[#4B4BE2] text-3xl lg:text-5xl">
                DEPOSIT
              </div>
              <div className="font-[Meera Inimai] text-3xl lg:text-5xl mt-2 lg:mt-4">
                10 000$
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-4 lg:mt-0">
              <img
                src="/public/Arrow 1.png"
                alt="arrow"
                className="w-1/2 lg:w-auto mt-6 lg:mt-20"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-8 lg:mt-24 space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="font-[Koulen] text-xl lg:text-3xl">
              winrate - 68.76%
            </div>
            <div className="font-[Koulen] text-xl lg:text-3xl">
              balance drawdown - 11.55%
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col mt-8 lg:mt-0 p-4 lg:p-10">
          {/* Upper Section with Group Image and Button */}
          <div className=" relative flex justify-end lg:justify-end h-40 lg:h-72 " style={{ height: '300px' }}> {/* Further reduced height */}
    {/* Large image aligned to the right */}
    <img
      src="/public/Group 17.png"
      alt="group"
      className="  w-[55%] h-auto z-0" // Ensure it fits within the pink div
    />

    {/* Button centered over the image */}
    <button className="absolute top-40 transform -translate-y-1/2 font-[Koulen] text-white bg-slate-800 font-semibold py-1 px-12 lg:px-8 text-sm lg:text-lg z-10">
  WATCH GRAPHICS
</button>


  </div>

          {/* Bottom Section */}
          <div className="flex-1 mt-4 lg:mt-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex flex-col">
                <div className="font-[Koulen] text-[#B52D24] text-3xl lg:text-5xl mt-6">
                  Total in 22 months
                </div>
                <div className="font-[Meera Inimai] text-3xl lg:text-5xl mt-4">
                  276 269$
                </div>
              </div>
              <div className="relative flex justify-center lg:ml-40 mt-8 lg:mt-10">
                <button className="bg-[#3B9E38] h-16 w-16 lg:h-20 lg:w-20 rounded-2xl border-none outline-none shadow-none focus:outline-none z-0">
                  {/* Empty button */}
                </button>
                <img
                  src="/public/Arrow 2.png"
                  alt="arrow-2"
                  className="absolute z-10"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "none",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="font-[Koulen] text-lg lg:text-2xl">
                equity drawdown - 12.13%
              </div>
              <div className="font-[Koulen] text-lg lg:text-2xl">
                sharp ratio - 6.92%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="bg-[#B52D24] w-full h-[20px] lg:h-[30px] mt-auto">

      </div>
    </div>
  );
}

export default BotStats;
