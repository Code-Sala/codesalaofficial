import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#F7F7F7] h-65 p-18">
      <h1 className="text-4xl">Services</h1>
      <ul className="mt-6 flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="px-8 text-gray-500">------</li>

        <li>
          <a href="#" className="">
            Services
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeroSection;
