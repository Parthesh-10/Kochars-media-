"use client";

import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/hooks/useSwiper";
import Logoslider from "../logoSlider";
import ServiceTab from "../serviceTab";
const imgs = [
  { src: "/imgs/asfsfsdf.jpeg" },
  { src: "/imgs/jfkdialg.jpeg" },
  { src: "/imgs/jhgjhgjghjh.jpeg" },
  { src: "/imgs/ljklkjljkljkl.jpeg" },
];

export default function PrimeMediaMarketing() {
  return (
    <div>
      <div className="p-10 py-30  w-full min-h-screen flex justify-center items-end relative">
        <Image
          src={`/imgs/oohmarketingbanner.png`}
          fill
          alt="servicebanner"
          loading="eager"
          className="-z-1"
        />
        <div className="w-full h-full bg-black/50 absolute top-0 left-0 z-0 "></div>
        <div className="text-white text-center relative z-10 ">
          <h1 className="text-5xl sm:text-8xl font-bold my-2">
            <i>Prime Audience Marketing</i>
          </h1>
          <p className="text-xl">
            {" "}
            Elite gyms. High-value audience. Guaranteed visibility.
          </p>
          <div className="my-5 flex justify-center items-center">
            <Link href={`/contact`} className="overflow-hidden">
              <button className="w-30 h-9  sm:my-0 text-sm text-white rounded-2xl ">
                Let's Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center  text-2xl  font-bold my-5  bg-linear-to-r from-[#911111] to-[#c41717] bg-clip-text text-transparent">
          <i>Trusted by Growing Brands</i>
        </p>
        <Logoslider />
      </div>
      <div className="w-full md:h-120 p-5 lg:p-30 md:flex justify-center items-center">
        <div className="md:w-[60%] my-10">
          <h2 className="text-4xl sm:text-5xl font-bold my-2">
            <span className="text-red-700">
              {" "}
              <i>Punjab’s</i>{" "}
            </span>
            <span>
              Premium <br /> Fitness Spaces
            </span>
          </h2>
          <p className="text-lg my-5">
            Advertise inside Powerhouse Gym, Mohali. Visited by business owners,
            professionals, influencers, and premium lifestyle buyers.
          </p>
          <Link href={`/contact`} className="overflow-hidden">
            <button className="w-30 h-9  sm:my-0 text-sm text-white rounded-2xl ">
              Let's Plan
            </button>
          </Link>
        </div>
        <div className="md:w-[40%] h-60 sm:h-90  relative   rounded-2xl overflow-hidden">
          <ImageSlider images={imgs} />
        </div>
      </div>
      <div className=" sm:h-110  sm:p-10  my-10 flex justify-center items-center relative ">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-center font-bold mb-5  bg-linear-to-r from-[#911111] to-[#cc1e1e] bg-clip-text text-transparent">
          <i>
            Reach People <br /> Who Actually Spends
          </i>
        </h1>
        <div className="hoverDiv hidden sm:block top-10 left-5 md:left-20">
          <p>Business Owners</p>
          <div className="messageBoxTriangle   -bottom-1 right-1 rotate-90"></div>
        </div>
        <div className="hoverDiv  hidden sm:block  top-10 md:left-[50%] -md:translate-x-[50%]  ">
          <p>Entrepreneurs</p>
          <div className="messageBoxTriangle  -bottom-1 right-1 rotate-90"></div>
        </div>
        <div className="hoverDiv  hidden sm:block  top-20 right-5 md:right-20">
          <p> Artists & Singers</p>
          <div className="messageBoxTriangle  -bottom-1 right-1 rotate-90"></div>
        </div>
        <div className="hoverDiv  hidden sm:block  bottom-10 left-5 md:left-40">
          <p> Fitness Enthusiasts</p>
          <div className="messageBoxTriangle  -top-1 right-1 rotate-90"></div>
        </div>
        <div className="hoverDiv  hidden sm:block   bottom-15 md:left-[40%] -md:translate-x-[50%]  ">
          <p> High-Income Professionals</p>
          <div className="messageBoxTriangle   -top-1 right-1 rotate-90"></div>
        </div>
        <div className="hoverDiv  hidden sm:block  bottom-10 right-5 md:right-30">
          <p>
            {" "}
            Premium <br /> Lifestyle Consumers
          </p>
          <div className="messageBoxTriangle  -top-1 right-1 rotate-90"></div>
        </div>
      </div>
      <div className="w-full h-120 sm:h-130 relative flex items-end justify-center rounded-2xl overflow-hidden">
        <div className="w-full  h-100  bg-linear-to-t from-black to-transparent absolute bottom-0 left-0 z-10"></div>
        <Image
          src={`/imgs/a4acf63d47b67aff6d8b93cd972ee06f92abc92c.png`}
          fill
          alt="banner img"
          className="z-0 object-center"
        />
        <div className=" h-50 text-white relative z-20">
          <p className="text-4xl md:text-6xl font-bold text-center">
            <i>
              You Don't Share Attention. <br /> You Own It.
            </i>
          </p>
        </div>
      </div>
      <div className="sm:p-10 sm:flex justify-center items-center">
        <div className="sm:w-120 lg:w-[50%] p-10">
          <p className="text-3xl font-bold bg-linear-to-r from-[#911111] to-[#db1a1a] bg-clip-text text-transparent">
            <i> Why Brands Choose Us?</i>
          </p>

          <p className="my-3">
            Run gym screen campaigns with a partner that handles everything;
            from ad creation to smooth execution, ensuring your brand reaches
            the right premium audience at the right place.
          </p>
          <Link href="/contact" className="">
            <button className="w-fit h-10  text-sm px-5 rounded-full text-white">
              {" "}
              Plan your Campaign
            </button>
          </Link>
        </div>
        <div>
          <div className="flex flex-wrap justify-center ">
            <div className="w-60 lg:w-80 h-50 p-5 pt-10 m-2 rounded-2xl bg-[#ffdddd] transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer">
              <p className="text-red-700 font-bold text-2xl">
                Premium
                <br /> Audience
              </p>
              <p>
                Reach people who spend on lifestyle, fitness, fashion, cars,
                travel, and more.
              </p>
            </div>
            <div className="w-60 lg:w-80 h-50 p-5 m-2 pt-10 rounded-2xl bg-[#ffdddd]  transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer">
              <p className="text-red-700 font-bold text-2xl">
                High <br />
                Visibility
              </p>
              <p>
                Our screens are placed where people naturally look during
                workouts and breaks.
              </p>
            </div>
            <div className="w-full  flex justify-center   ">
              <div className="w-60 lg:w-80 h-50 p-5 pt-7 m-2 rounded-2xl bg-[#ffdddd] transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer ">
                <p className="text-red-700 font-bold text-2xl">
                  Free
                  <br /> Ad Design
                </p>
                <p>Don’t have an ad? We’ll help create one for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 mb-10 flex flex-wrap  justify-center">
        <div className="w-130 h-70 mb-5 relative rounded-lg overflow-hidden">
          <Image
            src={`/imgs/15849307d4e747fe1d4b6036f2f8ce4cc1a92165.png`}
            fill
            alt="oohmarketingimg"
          />
        </div>
        <div className="w-full text-center my-2">
          <p className="text-5xl font-bold my-2 bg-linear-to-r from-[#911111] to-[#6b0c0c] bg-clip-text text-transparent">
            Reach Tricity’s Most <br /> Valuable Audience
          </p>
          <p className="my-3">
            Your next customer could be working out here right now.
          </p>
          <Link href="/contact" className="">
            <button className="w-fit h-10 px-10 rounded-full text-white">
              {" "}
              Start Your Campaign
            </button>
          </Link>
        </div>
      </div>
      <div className="p-5 sm:px-20 mb-10">
        <ServiceTab />
      </div>
    </div>
  );
}
