"use client";

import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/hooks/useSwiper";
import Logoslider from "../logoSlider";

import ServiceTab from "../serviceTab";

const imgs = [
  {
    src: "/imgs/fdsfasoru.jpg",
  },
  {
    src: "/imgs/jdasfi.jpg",
  },
  {
    src: "/imgs/kllfiakf.jpg",
  },
];

export default function PrimeMediaMarketing() {
  return (
    <div>
      <div className="p-10 py-30  w-full min-h-screen flex justify-center items-end relative">
        <Image
          src={`/imgs/13.svg`}
          fill
          alt="servicebanner"
          loading="eager"
          className="-z-1 object-cover"
        />
        <div className="w-full h-full bg-black/50 absolute top-0 left-0 z-0 "></div>
        <div className="text-white text-center relative z-10 ">
          <h1 className="text-5xl sm:text-8xl font-bold my-2">
            <i>Radio Advertisemnt</i>
          </h1>
          <p className="text-xl"> Reach The Right People. At The Right Time.</p>
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
      <div className="w-full md:h-120 p-5 lg:p-30  md:flex justify-center items-center">
        <div className="md:w-[60%] my-10 md:m-10">
          <h2 className="text-4xl sm:text-5xl font-bold my-2">
            <span className="text-red-700">
              {" "}
              <i>Smart Radio</i>{" "}
            </span>
            <br />
            <span>Planning that works</span>
          </h2>
          <p className="text-lg my-5">
            We understand your business first, then choose the right stations,
            time slots, and locations to get you real results.
          </p>
          <Link href={`/contact`} className="overflow-hidden">
            <button className="w-30 h-9  sm:my-0 text-sm text-white rounded-2xl ">
              Let's Plan
            </button>
          </Link>
        </div>
        <div className="md:w-[30%] h-80 sm:h-90  relative   rounded-2xl overflow-hidden">
          <ImageSlider images={imgs} />
        </div>
      </div>

      <div className="sm:p-10 sm:flex justify-center items-center">
        <div className="sm:w-120 lg:w-[50%] p-10">
          <p className="text-3xl font-bold bg-linear-to-r from-[#911111] to-[#db1a1a] bg-clip-text text-transparent">
            <i> Why Brands Choose Us?</i>
          </p>

          <p className="my-3">
            Run cinema campaigns with a partner that handles everything; from
            creative execution to on-ground verification.
          </p>
          <Link href="/contact" className="">
            <button className="w-fit h-10  text-sm px-5 rounded-full text-white">
              {" "}
              Plan your Campaign
            </button>
          </Link>
        </div>

        <div className="mb-10 flex flex-wrap justify-center ">
          <div className="w-60 lg:w-80 lg:h-50 p-5 pt-10 m-2 rounded-2xl bg-[#ffdddd] transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer">
            <p className="text-red-700 font-bold text-2xl">
              Strategic <br />
              Planning
            </p>
            <p>
              We decide the best cities, stations, and timings based on your
              audience.
            </p>
          </div>
          <div className="w-60 lg:w-80 lg:h-50 p-5 m-2 pt-10 rounded-2xl bg-[#ffdddd]  transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer">
            <p className="text-red-700 font-bold text-2xl">
              Right Audience Targeting
            </p>
            <p>Your ads play where your potential customers actually are.</p>
          </div>

          <div className="w-60 lg:w-80 lg:h-50 p-5 pt-7 m-2 rounded-2xl bg-[#ffdddd] transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer ">
            <p className="text-red-700 font-bold text-2xl">
              Experience That Matters
            </p>
            <p>
              Our industry experience helps us avoid wasted spend and focus on
              what works.
            </p>
          </div>
          <div className="w-60 lg:w-80 lg:h-50 p-5 pt-7 m-2 rounded-2xl bg-[#ffdddd] transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer ">
            <p className="text-red-700 font-bold text-2xl">
              End-to-End Execution
            </p>
            <p>From planning to launch, we handle everything for you.</p>
          </div>
        </div>
      </div>
      <div className="px-10 lg:px-30 mb-15">
        <div className="p-20 bg-[#8d0505] rounded-2xl">
          <div className="w-full md:h-80 md:flex justify-center items-center">
            <div className="md:w-[60%] my-10 md:m-10 order-1">
              <h2 className="text-white text-4xl sm:text-6xl font-bold my-2">
                {" "}
                <i>Built On Experience. </i> Driven By Results.
              </h2>
              <p className="text-lg my-5 text-white">
                With deep media planning experience, we know what works and what
                doesn’t. So your brand gets placed in the right locations with
                the right resources.
              </p>
              <Link href={`/contact`} className="overflow-hidden">
                <button className="w-50 h-9  sm:my-0 text-sm text-white rounded-2xl ">
                  Let's Plan
                </button>
              </Link>
            </div>
            <div className="md:w-[30%] h-80 sm:h-90 overflow-hidden">
              <div className="vimeo-wrapper overflow-hidden">
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/1189687829?h=a89991da3f&title=0&byline=0&portrait=0"
                  frameBorder="0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  className=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 sm:px-20 mb-10">
        <ServiceTab />
      </div>
    </div>
  );
}
