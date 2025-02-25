
import Testimonials from './testimonial/Testimonials'
function AboutFeedback() {
  return (
    <>
    <div className="wrappers mt-20 pt-[74px] pl-36">
        <div className="feedback">
            <div className="header flex">
                <div className="left w-265">
                    <h1 className="text-red-400 font-bold">HAPPY CLIENT SAY</h1>
                    <h3 className="text-4xl pt-4  font-semibold">Feedbacks From Our Customers</h3>
                </div>
                <div className="right flex gap-1">
                    <div className="card1 h-14 w-14 bg-gray-500 cursor-pointer hover:bg-black transition-all duration-400"></div>
                    <div className="card1 h-14 w-14 bg-gray-500 cursor-pointer hover:bg-black transition-all duration-400"></div>
                </div>
            </div>
<div className='-ml-20 pr-16'>
           <Testimonials/>

</div>
        
        </div>
    </div>
    </>
  )
}

export default AboutFeedback