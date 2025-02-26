const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100 h-[80vh]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left - Images Section */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative">
              {/* Back Image */}
              <div className="absolute -top-6 -left-6 w-[300px] h-[350px]">
                <img
                  src="https://via.placeholder.com/300x350"
                  alt="Image Back"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Front Image */}
              <div className="relative w-[330px] h-[437px] z-10">
                <img
                  src="https://via.placeholder.com/330x437"
                  alt="Image Front"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Section */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-12 ">
            <p className="uppercase text-sm text-red-500 font-semibold mb-6">
              About us
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              We are the Creative <br />
              Web Dev Team
            </h2>
            <p className="text-gray-600 mt-4 text-lg mb-6">
              Our digital company has been developing products for 7 years.
            </p>
            <p className="text-gray-500 mt-2 mb-6">
              We&apos;ve got a lot of awards for our work and develop
              applications that became popular worldwide. We try not to miss
              important details in each area.
            </p>

            {/* Video Button */}
            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md text-lg transition-all">
              Watch video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
