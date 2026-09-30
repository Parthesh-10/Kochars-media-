"use client";

import Image from "next/image";

import Logoslider from "@/component/logoSlider";
import ServiceTab from "@/component/serviceTab";
import Testimonial from "@/component/testimonial";
import { GridSection1, GridSection2 } from "@/constant/homepage";
import Card from "@/component/cards";
import useOnScreen from "@/hooks/useOnScreen";
import CategoryCards from "@/component/categoryCard";
import India from "@/component/indiaMap";
import UseCounter from "@/hooks/useCounter";

export default function Home() {
  const { ref, isVisible } = useOnScreen<HTMLDivElement>();

  return (
    <div className=" ">
      <div className="homeMain h-[75vh] md:h-[85vh] relative z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/imgs/posterimg.jpeg"
          className=" absolute left-0 top-0 w-full h-full md:hidden object-cover -z-10"
        >
          <source src="/video/homemobile.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/imgs/posterimg.jpeg"
          className=" absolute left-0 top-0 w-full h-full hidden md:block object-cover -z-10  "
        >
          <source src="/video/home.mp4" type="video/mp4" />
        </video>
      </div>
      <Logoslider />

      {/* First section Container */}
      <div className="my-5">
        <CategoryCards />
      </div>
      <div className="p-5 sm:px-20 lg:px-40  ">
        <ServiceTab />
      </div>
      <div className=" px-10  md:px-20 rounded-lg relative ">
        <Image
          src={`/imgs/banner.png`}
          fill
          alt="bannerimg"
          className="opacity-100 object-cover"
        />
        <div className="w-full h-full bg-black/30 absolute top-0 left-0"></div>
        <div className="w-full h-full  absolute top-0 left-0"></div>
        <div className="z-20 text-white flex justify-center flex-wrap relative">
          <div className="w-full flex justify-center items-center font-bold ">
            <p className="text-[11rem] mr-3  font-medium">
              <i>11</i>
            </p>
            <p className="text-2xl text-center">
              <i>
                Years of <br /> Smart <br /> Visibility
              </i>
            </p>
          </div>
          <p className="md:w-[70%] text-center -mt-10 ">
            <span className=" font-bold">
              Kochhar’s Media Planners has spent 11 years quietly mastering the
              art of attention.
            </span>{" "}
            <br />
            With a stronghold in cinema advertising and an expanding OOH
            ecosystem, the focus has always remained the same: meaningful
            placements, smart strategy, and brand presence that feels natural,
            not forced.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="w-full  flex flex-wrap lg:flex-nowrap justify-center items-center my-5 py-10  md:px-20 lg:px-40 relative "
      >
        <div className="w-90 grid place-items-center ">
          <h3 className="text-4xl font-bold ">
            <i>Brands</i>
          </h3>
          <p className="text-6xl font-bold text-red-700 ">
            <UseCounter num={300} isVisible={isVisible} />+
          </p>
        </div>

        <div className="w-90 grid place-items-center  ">
          <h3 className="text-4xl font-bold">
            <i>Cities</i>
          </h3>
          <p className="text-5xl font-bold text-red-700">
            <UseCounter num={46} isVisible={isVisible} />+
          </p>
        </div>

        <div className="w-90 grid place-items-center ">
          <h3 className="text-4xl font-bold">
            <i>Retention Rate</i>
          </h3>
          <p className="text-5xl font-bold text-red-700">
            <i>
              <UseCounter num={76} isVisible={isVisible} />%
            </i>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <India />
      </div>
      <div className="p-5 sm:px-20 lg:px-30 text-white">
        <div>
          <h2 className="text-3xl lg:text-4xl mb-15 text-center text-black">
            You don't want Banners or Videos <br />
            <span className="text-(--gray)">
              {" "}
              You want to turn Ads into customers.
            </span>
          </h2>
        </div>

        <div className="h-125 sm:px-20 md:px-30 lg:px-0 flex justify-center  flex-wrap  lg:flex-nowrap ">
          <div className="w-100 lg:w-125 flex justify-between items-end  p-2 md:mx-2  rounded-2xl relative overflow-hidden">
            <Image
              src={"/imgs/dc9515bfee4e0eee0aa7ded78c47a741ce946f8c.png"}
              fill
              alt="orangeBackground"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex items-center z-1 p-5 ">
              <p>Perhaps you identify with one of these situations.</p>
              <img src="/imgs/arrowright.svg" alt="arrow_right" />
            </div>
          </div>
          <div className="w-100 lg:w-125 py-2 lg:py-0 grid grid-cols-2 gap-1 ">
            {GridSection1.map((item, index) => {
              return (
                <div
                  key={index}
                  className="homeGridItem w-full transition hover:scale-101"
                >
                  <p className="py-5 px-5  md:px-10">{item.text}</p>
                  <Image
                    src={`/imgs/${item.imgName}`}
                    alt="grid_item_img"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-center absolute z-0 top-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-5 sm:px-20 lg:px-30  text-white">
        <div>
          <h2 className="text-3xl lg:text-4xl mb-15 text-center text-black">
            We run multi-channel strategies <br />
            <span className="text-(--gray)">
              {" "}
              to increase your Conversion Rates.
            </span>
          </h2>
        </div>

        <div className="h-125 sm:px-20 md:px-30 lg:px-0 flex justify-center  flex-wrap-reverse  lg:flex-nowrap">
          <div className="w-100 lg:w-125 py-2 lg:py-0  grid grid-cols-2 gap-1">
            {GridSection2.map((item, index) => {
              return (
                <div
                  key={index}
                  className="homeGridItem w-full transition hover:scale-101"
                >
                  <p className="py-5 px-5  md:px-10">{item.text}</p>
                  <Image
                    src={`/imgs/${item.imgName}`}
                    alt="grid_item_img"
                    fill
                    className="absolute z-0 top-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              );
            })}
          </div>

          <div className="w-100 lg:w-125 flex justify-between items-end md:mx-2  rounded-2xl relative overflow-hidden">
            <Image
              src={"/imgs/dc9515bfee4e0eee0aa7ded78c47a741ce946f8c.png"}
              fill
              alt="orangeBackground"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex items-center  z-1 p-5">
              <img src="/imgs/arrowleft.svg" alt="arrow_left" />
              <p>What will you get?</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-10 md:px-10 lg:px-30 ">
        <Testimonial />
      </div>

      <div className="hidden lg:block z-40 relative">
        <h2 className="text-3xl lg:text-6xl text-center font-bold bg-linear-to-r from-[#911111] to-[#ce1717] bg-clip-text text-transparent">
          Why us
        </h2>
        <Card />
      </div>
    </div>
  );
}
