"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

interface img {
  src: string;
}

interface sliderImg {
  images: img[];
}

export default function ImageSlider({ images }: sliderImg) {
  if (!images || images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="w-full h-100 rounded-xl relative overflow-hidden">
        <Image
          src={images[0].src}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          alt="sliderImg"
        />
      </div>
    );
  }

  return (
    <div>
      <Swiper
        className="imgSlider"
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={images.length > 2}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images
          ? images.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full min-h-90 rounded-xl relative overflow-hidden ">
                    <Image src={img.src} fill sizes="50vw" alt="sliderImg" />
                  </div>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </div>
  );
}
