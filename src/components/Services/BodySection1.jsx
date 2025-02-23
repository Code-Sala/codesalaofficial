import React from "react";

const BodySection1 = () => {
  return (
    <div className="pt-30">
      <div className="headingSection">
        <div className="text-red-500 font-bold text-sm flex justify-center">
          SERVICES THAT WE PROVIDE
        </div>
        <div className="text-4xl pt-4 flex justify-center">
          We Develop Digital Products
        </div>
      </div>
      <div className="cardSection flex pt-20">
        <div className="firstCard pr-10">
          <img src="../../assets/Services/icon-design.svg" alt="" />
          <div className="pl-18 pt-25 text-2xl">UI/UX Design</div>
          <div className="pl-18 pt-4 w-100 text-gray-500">
            Everything starts with the beautiful. And professional design is of
            great importance in this matter.
          </div>
          <div className="pl-18 pt-5 text-red-500  ">Read More</div>
        </div>
        <div className="border-l border-gray-300 h-70 "></div>
        <div className="secondCard pr-10">
          <img src="../../assets/Services/icon-design.svg" alt="" />
          <div className="pl-9 pt-25 text-2xl">Web Development</div>
          <div className="pl-9 pt-4 w-100 text-gray-500">
            Our developers are carefully considering how your product should
            work while maintaining its flexibility.
          </div>
          <div className="pl-8 pt-5 text-red-500  ">Read More</div>
        </div>
        <div className="border-l border-gray-300 h-70"></div>
        <div className="thirdCard">
          <img src="../../assets/Services/icon-design.svg" alt="" />
          <div className="pl-8 pt-25 text-2xl">SEO Optimization</div>
          <div className="pl-8 pt-4 w-100 text-gray-500">
            Promotion of your product is an important step in making money and
            constant popularity among consumers.
          </div>
          <div className="pl-8 pt-5 text-red-500  ">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default BodySection1;
