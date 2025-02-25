function AboutFeedback() {
  return (
    <>
    <div className="wrappers mt-[137.2px] pl-36">
        <div className="feedback">
            <div className="header flex">
                <div className="left w-265">
                    <h1 className="text-red-400  font-bold">HAPPY CLIENT SAY</h1>
                    <h3 className="text-4xl pt-4  font-semibold">Feedbacks From Our Customers</h3>
                </div>
                <div className="right flex gap-1">
                    <div className="card1 h-14 w-14 bg-gray-500 cursor-pointer hover:bg-black transition-all duration-400"></div>
                    <div className="card1 h-14 w-14 bg-gray-500 cursor-pointer hover:bg-black transition-all duration-400"></div>
                </div>
            </div>

            <div className="content flex w-295">
                <div className="left w-1/2 bg-amber-200">
                    <div className="name pt-20 text-center">
                        <p className="font-semibold text-[19.88px]">Siddhant Pandey <br />
                        <span className="text-[14px] text-[#757575] font-semibold">Director of Company</span></p>
                    </div>
                    <div className="about pt-10 pb-3 text-[#757575] text-[16.94px]">
                        <p>Great team, good support and development very pleased with the cooperation. I will definetly contact this company again with new project</p>
                    </div><hr className="w-50 opacity-50 text-[#757575]"/>
                    <div className="date pt-10">
                        <p>Feb 25.2025</p>
                    </div>
                </div>
                <div className="right w-1/2 bg-amber-600">
                <div className="name pt-20 text-center">
                <p className="font-semibold text-[19.88px]">Siddhant Pandey <br />
                <span className="text-[14px] text-[#757575] font-semibold">Director of Company</span></p>
                    </div>
                    <div className="about">
                    <p>Great team, good support and development very pleased with the cooperation. I will definetly contact this company again with new project</p>
                    </div><hr />
                    <div className="date">
                        <p>Feb 25.2025</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutFeedback