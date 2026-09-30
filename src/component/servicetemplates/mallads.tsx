"use client";

import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/hooks/useSwiper";
import Logoslider from "../logoSlider";
import ServiceTab from "../serviceTab";

const imgs = [
  { src: "/imgs/klifaslfjf.png" },
  { src: "/imgs/fdsfliafdsf.png" },
  { src: "/imgs/dfasdlfsif.jpeg" },
];

export default function PrimeMediaMarketing() {
  return (
    <div>
      <div className="p-10 py-30  w-full min-h-screen flex justify-center items-end relative">
        <Image
          src={`/imgs/17.svg`}
          fill
          alt="servicebanner"
          loading="eager"
          className="-z-1 object-cover"
        />
        <div className="w-full h-full bg-black/50 absolute top-0 left-0 z-0 "></div>
        <div className="text-white text-center relative z-10 ">
          <h1 className="text-5xl sm:text-8xl font-bold my-2">
            <i>Mall Advertisment</i>
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
              <i>Reach Shoppers At </i>{" "}
            </span>
            <br />
            <span>Every Step</span>
          </h2>
          <p className="text-lg my-5">
            From mall entrances to high-footfall zones, we place your brand
            where attention naturally stays.
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
              Complimentary <br /> Premium Creatives
            </p>
            <p>
              High-quality cinema ad designs created for your campaign at no
              additional cost.
            </p>
          </div>
          <div className="w-60 lg:w-80 lg:h-50 p-5 m-2 pt-10 rounded-2xl bg-[#ffdddd]  transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer">
            <p className="text-red-700 font-bold text-2xl">
              Premium <br />
              Audience Access
            </p>
            <p>
              Launch campaigns across multiplexes and cinema networks
              nationwide.
            </p>
          </div>

          <div className="w-60 lg:w-80 lg:h-50 p-5 pt-7 m-2 rounded-2xl bg-[#ffdddd] transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer ">
            <p className="text-red-700 font-bold text-2xl">Inspection Access</p>
            <p>
              Real-time monitoring and on-ground verification of your ad
              placements.
            </p>
          </div>
          <div className="w-60 lg:w-80 lg:h-50 p-5 pt-7 m-2 rounded-2xl bg-[#ffdddd] transition-all hover:rotate-10 hover:bg-[#ffb1b1] cursor-pointer ">
            <p className="text-red-700 font-bold text-2xl">
              Certified <br /> Campaign Proof
            </p>
            <p>
              Receive proper documentation and campaign certifications for
              complete transparency.
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 sm:px-20 mb-10">
        <ServiceTab />
      </div>
    </div>
  );
}
