import React from "react";

const BodySection1 = () => {
  return (
    <div className="pt-10 px-4 md:px-10">
      {/* Heading Section */}
      <div className="text-center mt-20">
        <div className="text-red-500 font-bold text-sm md:text-base">
          SERVICES THAT WE PROVIDE
        </div>
        <div className="text-3xl md:text-4xl pt-4 font-semibold">
          We Develop Digital Products
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-10 pt-16 mt-20">
        {/* First Card */}
        <div className="max-w-xs text-center md:text-left">
          <img
            src="../../assets/Services/icon-design.svg"
            alt="UI/UX Design"
            className="mx-auto md:mx-0"
          />
          <div className="text-2xl pt-5 font-semibold">UI/UX Design</div>
          <div className="text-gray-500 text-base pt-3">
            Everything starts with the beautiful. And professional design is of
            great importance in this matter.
          </div>
          <div className="text-red-500 pt-4 cursor-pointer hover:underline">
            Read More
          </div>
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="hidden md:block w-[1px] bg-gray-300 h-50 ml-[-40px]"></div>

        {/* Second Card */}
        <div className="max-w-xs text-center md:text-left">
          <img
            src="../../assets/Services/icon-design.svg"
            alt="Web Development"
            className="mx-auto md:mx-0"
          />
          <div className="text-2xl pt-5 font-semibold ml-[-10px] ">
            Web Development
          </div>
          <div className="text-gray-500 text-base pt-3 ml-[-10px]">
            Our developers carefully consider how your product should work while
            maintaining flexibility.
          </div>
          <div className="text-red-500 pt-4 cursor-pointer hover:underline ml-[-10px]">
            Read More
          </div>
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="hidden md:block w-[1px] bg-gray-300 h-50 ml-[-40px] "></div>

        {/* Third Card */}
        <div className="max-w-xs text-center md:text-left ml-[-10px]">
          <img
            src="../../assets/Services/icon-design.svg"
            alt="SEO Optimization"
            className="mx-auto md:mx-0"
          />
          <div className="text-2xl pt-5 font-semibold ml-[-10px]">
            SEO Optimization
          </div>
          <div className="text-gray-500 text-base pt-3 ml-[-10px]">
            Promotion of your product is an important step in making money and
            maintaining popularity among consumers.
          </div>
          <div className="text-red-500 pt-4 cursor-pointer hover:underline ml-[-10px]">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection1;
