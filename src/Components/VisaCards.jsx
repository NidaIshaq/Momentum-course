import React from "react";

function VisaCards() {
  return (
    <div className="w-full h-[] ">
      <div className="bg-[#B52D24] w-full h-[30px]  left-0  "></div>
      <div className="h-[70vh] w-full flex flex-row">
        <div className="w-[70%] h-full flex flex-col z-10">
          <div className="font-[Koulen] text-4xl ml-12 lg:text-[100px] leading-tight lg:leading-[1.2] text-[#4B4BE2] mt-4 lg:mt-10">
            HOW TO BUT
          </div>
          <div className="font-[Meera Inimai] text-4xl ml-12 mt-12">
            We accept multiple types of payment:
          </div>
          <div className=" mt-10 flex flex-row z-10">
            <div>
              <button
                className="mt-10 items-center gap-0 h-[120px] ml-12 w-[180px] rounded-2xl bg-[#4B4BE2] border-none

"
              >
                <img
                  src="\public\Vector (2).png"
                  alt="visa"
                  className="flex justify-center ml-4"
                />
              </button>
            </div>
            <div>
              <button
                className="mt-10 items-center gap-0 h-[120px] ml-12 w-[180px] rounded-2xl bg-[#4B4BE2] border-none">
                <img
                  src="\public\Vector (3).png"
                  alt="visa"
                  className="flex justify-center ml-4"
                />
              </button>
            </div>

            <div>
              <button
                className="mt-10 flex items-center justify-center gap-0 h-[120px] ml-12 w-[180px] rounded-2xl bg-[#4B4BE2] border-none" >
                <img
                  src="\public\arcticons_bybit.png"
                  alt="visa"
                  className="flex justify-center "
                />
              </button>
            </div>
            <div>
              <button
                className="mt-10 flex items-center justify-center gap-0 h-[120px] ml-12 w-[180px] rounded-2xl bg-[#4B4BE2] border-none">
                <img
                  src="\public\Vector (4).png"
                  alt="visa"
                  className="flex justify-center "
                />
              </button>
            </div>
            <div>
              <button
                className="mt-10 flex items-center justify-center gap-0 h-[120px] ml-12 w-[180px] rounded-2xl bg-[#4B4BE2] border-none

"
              >
                <img
                  src="\public\Show More.png"
                  alt="visa"
                  className="flex justify-center  "
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full  relative z-0">
          <div className="absolute font-[Meera Inimai] -semibold text-2xl mt-48 text-right z-0">
            Press on the type of
            <br /> payment you want to join
            <br /> our community
          </div>
          <div className="absolute top-[-100px] z-10">
            <img
              src="/public/traced-P8240366 1.png"
              alt="traced"
              className="h-[625px] w-[600px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#4B4BE2] w-full h-[30px]  left-0 "></div>
    </div>
  );
}

export default VisaCards;
