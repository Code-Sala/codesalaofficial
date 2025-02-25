function HeroAbout() {
  return (
    <>
    <div className="hero-about pt-45 pl-35 flex w-full">
        <div className="left flex-[0.4]">
            <h5 className="text-red-400 font-bold">WE ARE SPECIAL</h5>
            <h3 className="pt-6 text-4xl font-normal">We are Creative And <br /> Professional Agency</h3>
            <p className="pt-6 text-2xl text-gray-700">Our digital company has been developing <br /> products for 15 years. <br /></p>

             <p className="pt-7 text-lg text-gray-700">We’ve got a lot of awards for our work and develop <br /> applications that became popular in the world. We try not to <br /> miss important details in each area.</p>

             <p className="pt-7 text-lg text-gray-700">Every morning in our company begins with hot coffee and a <br /> stand-up. Discussion is an important thing in the <br /> development process. Thus new ideas and ingenious <br /> solutions are born. Then we get to work with renewed vigor <br /> and inspiration. We are never bored.</p>

            <p className="pt-7 text-lg text-gray-700"> We’ve got a lot of awards for our work and develop <br /> applications that became popular in the world. We try not <br /> to miss important details in each area.
             </p>
             
        </div>
        <div className="right flex-[0.6]  pr-45">
                <div className="image h-100 w-100 bg-gray-200 ml-80 mt-50">
                    <img src="" alt="image front" />
                    <div className="card bg-red-400 h-40 w-50 relative -inset-25 mt-50">
                      <h3 className="text-7xl text-white font-bold pt-5 pl-13 pb-2">15</h3>
                        <span className="text-white pl-4 text-xl">Years of experience</span>
                      
                    </div>
                </div>
        </div>
    </div>  
    </>
  )
}

export default HeroAbout