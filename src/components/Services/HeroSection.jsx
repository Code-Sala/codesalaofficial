import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#F7F7F7] h-65 p-18">
      <h1 className="text-4xl">Services</h1>
      <ul className="mt-6 flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="border-t-2 border-[#BCBBBA] w-5 mt-[13px] mb-15 mr-7 ml-7"></li>

        <li>
          <a href="#" className=" text-gray-500">
            Services
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeroSection;
