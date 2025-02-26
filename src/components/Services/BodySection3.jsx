import React, { useState } from "react";

const BodySection3 = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);

  return (
    <div className="  px-4  md:px-10 ">
      <section className="  text-center py-30 px-4 mb-[-50px]">
        <h3 className="text-[#FF7062] font-bold text-sm uppercase">
          You Will Get More With Us
        </h3>
        <h2 className="text-4xl font-semibold mt-5 mb-5">What We Offer</h2>
        <p className="text-gray-600 max-w-lg mx-auto text-md text-[#757575]">
          You may be interested in what else we can offer you. More services you
          can find below. We do everything at a high level.
        </p>
      </section>
      <section className="boxSection1 md:flex">
        <div
          className="max-w-80 px-4  md:px-10 md:ml-18 mr-20"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <h2
            className={`bg-[#F7F7F7] text-center w-40 mx-auto text-xl h-12 flex justify-center items-center text-black mb-5 transition-colors duration-300 ease-in-out ${
              isHover ? "bg-[#FF7062] text-white" : "bg-[#F7F7F7]"
            }`}
          >
            Digital Strategy
          </h2>
          <p className="text-center mb-5 text-[#757575]">
            Do you know your competitors? We will help you to outperform them.
          </p>
          <p
            className={`text-center text-[#FF7062] transition-colors duration-300 ease-in-out mb-20 mt-[-5px] ${
              isHover ? "text-black" : "text-[#FF7062]"
            }`}
          >
            More
          </p>
          <div className="hidden md:block w-70 h-[1px] bg-gray-300 mt-[-40px]"></div>
        </div>

        <div className="hidden md:block w-[1px] bg-gray-300 h-50 ml-[-40px]"></div>

        <div
          className="max-w-80 px-4  md:px-10 mr-20"
          onMouseEnter={() => setIsHover1(true)}
          onMouseLeave={() => setIsHover1(false)}
        >
          <h2
            className={`bg-[#F7F7F7] text-center w-40 mx-auto text-xl h-12 flex justify-center items-center text-black mb-5 transition-colors duration-300 ease-in-out ${
              isHover1 ? "bg-[#FF7062] text-white" : "bg-[#F7F7F7]"
            }`}
          >
            Product Design
          </h2>
          <p className="text-center mb-5 text-[#757575]">
            Your product will look modern and attractive to customers.
          </p>
          <p
            className={`text-center text-[#FF7062] transition-colors duration-300 ease-in-out mb-20 mt-10 ${
              isHover1 ? "text-black" : "text-[#FF7062]"
            }`}
          >
            More
          </p>
          <div className="hidden md:block w-70 h-[1px] bg-gray-300 mt-[-40px]"></div>
        </div>

        <div className="hidden md:block w-[1px] bg-gray-300 h-50 ml-[-40px]"></div>

        <div
          className="max-w-80 px-4  md:px-10"
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
        >
          <h2
            className={`bg-[#F7F7F7] text-center w-50 mx-auto text-xl h-12 flex justify-center items-center text-black mb-5 transition-colors duration-300 ease-in-out ${
              isHover2 ? "bg-[#FF7062] text-white" : "bg-[#F7F7F7]"
            }`}
          >
            Marketing Research
          </h2>
          <p className="text-center mb-5 text-[#757575]">
            We know all the chips and tricks in this industry, no doubt.
          </p>
          <p
            className={`text-center text-[#FF7062] transition-colors duration-300 ease-in-out mb-20 mt-10 ${
              isHover2 ? "text-black" : "text-[#FF7062]"
            }`}
          >
            More
          </p>
          <div className="hidden md:block w-70 h-[1px] bg-gray-300 mt-[-40px]"></div>
        </div>
      </section>

      <section className="boxSection2 md:flex mt-10">
        <div
          className="max-w-80 px-4  md:px-10 md:ml-18 mr-20"
          onMouseEnter={() => setIsHover3(true)}
          onMouseLeave={() => setIsHover3(false)}
        >
          <h2
            className={`bg-[#F7F7F7] text-center w-40 mx-auto text-xl h-12 flex justify-center items-center text-black mb-5 transition-colors duration-300 ease-in-out ${
              isHover3 ? "bg-[#FF7062] text-white" : "bg-[#F7F7F7]"
            }`}
          >
            Development
          </h2>
          <p className="text-center mb-5 text-[#757575]">
            The best developers are ready to start your project any minute.
          </p>
          <p
            className={`text-center text-[#FF7062] transition-colors duration-300 ease-in-out mb-20 mt-[-5px] ${
              isHover3 ? "text-black" : "text-[#FF7062]"
            }`}
          >
            More
          </p>
        </div>

        <div className="hidden md:block w-[1px] bg-gray-300 h-50 ml-[-40px]"></div>

        <div
          className="max-w-80 px-4  md:px-10 mr-20"
          onMouseEnter={() => setIsHover4(true)}
          onMouseLeave={() => setIsHover4(false)}
        >
          <h2
            className={`
                bg-[#F7F7F7] text-center w-50 mx-auto text-xl h-12 flex justify-center items-center text-black mb-5 transition-colors duration-300 ease-in-out ${
                  isHover4 ? "bg-[#FF7062] text-white" : "bg-[#F7F7F7]"
                }`}
          >
            Content Management
          </h2>
          <p className="text-center mb-5 text-[#757575]">
            Do not think about content, our managers have prepared everything.
          </p>
          <p
            className={` text-center text-[#FF7062] transition-colors duration-300 ease-in-out mb-20 mt-10${
              isHover4 ? "text-black" : "text-[#FF7062]"
            }`}
          >
            More
          </p>
        </div>

        <div className="hidden md:block w-[1px] bg-gray-300 h-50 ml-[-40px]"></div>

        <div
          className="max-w-80 px-4  md:px-10"
          onMouseEnter={() => setIsHover5(true)}
          onMouseLeave={() => setIsHover5(false)}
        >
          <h2
            className={`bg-[#F7F7F7] text-center w-50 mx-auto text-xl h-12 flex justify-center items-center text-black mb-5 transition-colors duration-300 ease-in-out  ${
              isHover5 ? "bg-[#FF7062] text-white" : "bg-[#F7F7F7]"
            }`}
          >
            Maintence & Support
          </h2>
          <p className="text-center mb-5 text-[#757575]">
            We are always happy to help and support your product in sales.
          </p>
          <p
            className={`text-center text-[#FF7062] transition-colors duration-300 ease-in-out mb-20 mt-10
                text-center text-[#FF7062] transition-colors duration-300 ease-in-out mb-20 mt-10 ${
                  isHover5 ? "text-black" : "text-[#FF7062]"
                }`}
          >
            More
          </p>
        </div>
      </section>
    </div>
  );
};

export default BodySection3;
