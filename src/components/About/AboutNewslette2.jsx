function AboutNewslette2() {
  return (
    <>
     <div className="wrappers mt-25 mb-20">
        <div className="newsletter2 bg-[#222222] h-100 flex w-full">
            <div className="left w-300">
                      <div className="content pt-28 pl-36 font-bold text-[14px] text-white">
                             <h2 className="text-white">NEWSLETTER</h2>
                             <h1 className="font-medium pt-1 text-[35.98px]">Want to Be Always Informed?</h1>
                             <div className="buttons">
                                <input type="text" placeholder="Enter your email:" className="bg-white h-12 mt-3 w-110"/>
                                <button type="submit" className="font-light ml-3 bg-red-400 h-12 w-30 cursor-pointer">Subscribe</button>
                             </div>
                      </div>
            </div>
            <div className="right w-90">
                <img src="#" alt="Image Newsletter" className="mt-20 text-white"/>
            </div>
        </div>
     </div>
    </>
  )
}

export default AboutNewslette2