import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testimonials from "../../../data/feedback.json";
export default function Testimonials() {
    return (
        <div className="relative px-12 py-8 mt-12 ">

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={70}  // Spacing between slides
                slidesPerView={2}   // Show 1 slide at a time
                breakpoints={{
                    640: { slidesPerView: 1 },  // Small screens
                    768: { slidesPerView: 2 },  // Medium screens
                    1024: { slidesPerView: 3 }, // Large screens
                }}
                 // Enables next/prev buttons
                pagination={{ clickable: false }} // Enables pagination dots
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide
                loop={true}  // Infinite scrolling
                className="w-auto px-12 mr-4 "
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="p-4">
                        <div 
                            className="p-2 rounded-xl  bg-white/10 backdrop-blur-md border-2 border-white text-[#111] transform transition-all duration-300 hover:scale-105"
                        >
                            <div className="text-center">
                                <p className="font-bold text-xl">{testimonial.name}</p>
                                <p className="text-sm text-gray-800">{testimonial.position}</p>
                            </div>
                            <p className="mt-4 text-gray-800 italic">{testimonial.comment}&quot;</p>
                            <hr className="my-4 opacity-50" />
                            <p className="text-xs text-gray-800">{testimonial.date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
