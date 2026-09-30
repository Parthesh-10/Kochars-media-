"use client";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Review } from "../constant/testimonialdata";

export default function Testimonial() {
  return (
    <div className="relative  md:p-10  ">
      <Swiper
        className="homeSwiper"
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {Review.map((user) => {
          return (
            <SwiperSlide>
              <div className="w-full h-75 my-10 p-4 pt-25 bg-[#272424] text-white  rounded-[30px] relative">
                <img
                  className="w-20 h-20 absolute top-0 "
                  src="/imgs/quotes.png"
                  alt="quotes"
                />
                <p className="text-sm">{user.review}</p>
                <div className="my-5">
                  <p className="text-sm">{user.username}</p>
                  <p className="text-[10px]">{user.title}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="prev opacity-40 absolute left-[-30] top-1/2 -translate-y-1/2 z-10 hidden md:block cursor-pointer hover:scale-90">
        <img
          className="w-20"
          src="/imgs/sliderarrowleft.svg"
          alt="sliderarrow"
        />
      </div>

      <div className="next opacity-40 absolute right-[-30] top-1/2 -translate-y-1/2 z-10 hidden md:block cursor-pointer hover:scale-90">
        <img
          className="w-20"
          src="/imgs/sliderarrowright.svg"
          alt="sliderarrow"
        />
      </div>
    </div>
  );
}
