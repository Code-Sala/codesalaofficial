const Hero = () => {
  return (
    <div className="relative w-full bg-gray-100 text-gray-900 py-16 px-6">
      <div className="container-lg mx-auto flex flex-wrap items-center h-[80vh]">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 font-handwriting">
            Creative Web Develop Studio
          </h1>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">
            We create new technologies for your business thanks to our wonderful
            team of professionals. Together we can reach new heights.
          </p>
          <a
            href="/about"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-lg rounded-md transition-all"
          >
            Learn more
          </a>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Hero;
