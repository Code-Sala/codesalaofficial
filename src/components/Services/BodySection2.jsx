import React, { useState } from "react";

const BodySection2 = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);
  return (
    <div className="bg-[#222222]   md:h-158 md:mt-30 w-full">
      <div className="HeaderText">
        <div className="text-[#CA5A51] flex justify-center pt-25 text-base font-bold">
          WHAT WE OFFER
        </div>
        <div className="text-white flex justify-center pt-7 text-4xl">
          Our Services for Your Business
        </div>
      </div>
      <div className="buttonCard1 md:flex md:justify-between md:pt-15">
        <button
          className="text-white bg-[#363636] h-27 w-80 text-xl ml-18  transition-colors duration-500 ease-in-out hover:bg-[#2C2C2C] text-white cursor-pointer"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Brand Identity
        </button>
        <div
          className={`border-l-3 border-[#757575] h-27 ml-[-67px] cursor-pointer transition-color duration-200 ease-in-out ${
            isHover ? "border-[#CA5A51]" : "border-[#757575]"
          }`}
        ></div>

        <button
          className="text-white bg-[#363636] h-27 w-80 text-xl transition-colors duration-500 ease-in-out hover:bg-[#2C2C2C] text-white cursor-pointer"
          onMouseEnter={() => setIsHover1(true)}
          onMouseLeave={() => setIsHover1(false)}
        >
          Market Strategy
        </button>
        <div
          className={`border-l-3 border-[#757575] h-27 ml-[-67px] ${
            isHover1 ? "border-[#CA5A51]" : "border-[#757]"
          } `}
        ></div>
        <button
          className="text-white bg-[#363636] h-27 w-80 text-xl transition-colors duration-500 ease-in-out hover:bg-[#2C2C2C] text-white cursor-pointer"
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
        >
          App Development
        </button>
        <div
          className={`border-l-3 border-[#757575] h-27 ml-[-67px] mr-15 ${
            isHover2 ? "border-[#CA5A51]" : "border-[#757]"
          }`}
        ></div>
      </div>
      <div className="buttonCard2 flex justify-between pt-7">
        <button
          className="text-white bg-[#363636] h-27 w-80 text-xl ml-18 transition-colors duration-500 ease-in-out hover:bg-[#2C2C2C] text-white cursor-pointer"
          onMouseEnter={() => setIsHover3(true)}
          onMouseLeave={() => setIsHover3(false)}
        >
          eCommers
        </button>
        <div
          className={`border-l-3 border-[#757575] h-27 ml-[-67px]  ${
            isHover3 ? "border-[#CA5A51]" : "border-[#757]"
          }`}
        ></div>
        <button
          className="text-white bg-[#363636] h-27 w-80 text-xl transition-colors duration-500 ease-in-out hover:bg-[#2C2C2C] text-white cursor-pointer"
          onMouseEnter={() => setIsHover4(true)}
          onMouseLeave={() => setIsHover4(false)}
        >
          Landing Page
        </button>
        <div
          className={`border-l-3 border-[#757575] h-27 ml-[-67px] 
          ${isHover4 ? "border-[#CA5A51]" : "border-[#757]"}
          `}
        ></div>
        <button
          className="text-white bg-[#363636] h-27 w-80 text-xl transition-colors duration-500 ease-in-out hover:bg-[#2C2C2C] text-white cursor-pointer"
          onMouseEnter={() => setIsHover5(true)}
          onMouseLeave={() => setIsHover5(false)}
        >
          SEO & SMM
        </button>
        <div
          className={`border-l-3 border-[#757575] h-27 ml-[-67px] mr-15 ${
            isHover5 ? "border-[#CA5A51]" : "border-[#757]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default BodySection2;
