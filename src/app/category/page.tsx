"use client";

import CategoryCards from "@/component/categoryCard";
import Image from "next/image";

import { useState } from "react";
import { categoryDesc } from "@/constant/categoryCardDesc";
import UseOnScreen from "@/hooks/useOnScreen";

const tabs = [
  {
    heading: "STRATEGY",
    img: "478ec6cd2868b1b97f0745c51e378a6b7f5cf418.png",
    paragraph:
      "Some deep insight how this particular category is highly sensitive & high stake and how we concurred it with our strategy. ",
  },

  {
    heading: "SERVICES",
    img: "8f84fc5d19819e865d4f40b28f2d7f594ee61852.png",
    paragraph:
      "Some deep insight how this particular category is highly sensitive & high stake and how we concurred it with our strategy. ",
  },

  {
    heading: "EXPERIENCE",
    img: "9ea27ba2ce29e21ee0cc4f67edfaaaf2e286588e.png",
    paragraph:
      "Some deep insight how this particular category is highly sensitive & high stake and how we concurred it with our strategy. ",
  },
];
const masonryImgs = [
  "3a3ffaa575feb1c999b23c8588c328998a7a0bcb.png",
  "3df34f927a1db509101732a6e5fcdd15d49250e6.png",
  "6036a596c18db6707f03fbbcc06f45a5a678466d.png",
  "b5d0d37fd7316dfb70ca392385405ee7ef55d083.png",
  "fb81c6c7d6b420e71a768f692a5c44999e3bb67e.png",
  "42f2e716937125db56e8d2480c9f8fc8023d7d24.png",
  "3dd16a4293ff48e254f8f56b5831153d78922ad8.png",
  "fdd3d5651b1f30c291a0ce8cb0744eac1aa77eb4.png",
];

export default function Category() {
  const { ref, isVisible } = UseOnScreen<HTMLDivElement>();
  const [tabOpen, setTab] = useState(0);

  return (
    <div>
      <div className=" text-black p-5 sm:px-20 mb-10">
        <div className="pt-10 mt-0 lg:-mt-10">
          <CategoryCards />
        </div>
        <div className="flex justify-center">
          <div className="w-[90%]  my-10 px-5 lg:px-20">
            {categoryDesc.map((cat, index) => {
              return (
                <div
                  key={cat.heading.replace(/\s/g, "" + index)}
                  id={cat.heading.toLowerCase().replace(/\s/g, "")}
                  className="py-10 border-b  border-y-gray-600 group relative"
                >
                  <div className="flex justify-center flex-wrap lg:flex-nowrap">
                    <div className="lg:w-[40%] px-10 flex justify-end items-center">
                      <div className="min-w-40 h-50 rounded-xl overflow-hidden  relative">
                        <Image
                          src={`/imgs/${cat.imgSrc}`}
                          fill
                          sizes="50vw"
                          alt="categoryImg"
                        />
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-[55%] text-center lg:text-start">
                      <h2 className=" text-5xl font-bold mb-5">
                        {cat.heading}
                      </h2>
                      <p>{cat.paragraph}</p>
                    </div>
                  </div>
                  <div
                    className={` mt-10
                  ${cat.companyLogos.length > 0 ? "" : "hidden"}
                  `}
                  >
                    <h3 className="text-center font-medium text-xl">
                      TRUSTED BY THE BEST
                    </h3>

                    <div className="flex justify-center flex-wrap">
                      {cat.companyLogos.map((logo, index) => {
                        return (
                          <Image
                            key={index}
                            src={`/imgs/companylogos/${logo}`}
                            height={60}
                            width={60}
                            alt="companyLogo"
                            className="m-2 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-xl hover:scale-105"
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className={`w-0 h-0.5 bg-red-600 z-20  absolute left-0 -bottom-0.5 transition-all duration-700
                group-hover:w-full
                `}
                  ></div>
                  <div
                    className={`w-0 h-0.5 bg-red-600 z-20 rotate-180 absolute right-0 -bottom-0.5 transition-all duration-700
                group-hover:w-full
                `}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-10 py-20 pb-30 sm:px-20 md:px-30 bg-radial from-[#900505]/90 to-black rounded-xl">
        <div className=" h-80 rounded-xl overflow-hidden">
          <div className="h-100  columns-2 md:columns-4 lg:columns-4 gap-2 space-y-2 relative ">
            {masonryImgs.map((item, index) => (
              <div
                key={index}
                className={`break-inside-avoid rounded-2xl overflow-hidden shadow-lg  relative
                ${index % 2 == 0 ? "h-30" : "h-50"}
                `}
              >
                <Image
                  src={`/imgs/masonryimgs/${item}`}
                  alt=""
                  fill
                  sizes="10vw"
                  className="w-full object-cover"
                />
              </div>
            ))}
            <div
              ref={ref}
              className={`w-full h-full absolute top-0 left-0 flex items-center justify-center  p-10 sm:p-5  duration-500 transition-all   z-20
              ${isVisible ? "-translate-y-[5%] opacity-100" : "translate-y-20 opacity-0"}
            `}
            >
              <h2 className="my-5 text-4xl md:text-7xl font-bold text-white  text-center ">
                HOW WE DO IT?
              </h2>
            </div>
            <div className="w-full h-full md:h-[98%] bg-black/70 md:bg-black/55 rounded-2xl  absolute top-0 left-0 z-10"></div>
          </div>
        </div>
        <div>
          <div className=" flex justify-center items-center">
            {tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setTab(index);
                  }}
                  className={` h-80 sm:h-80 md:h-100 p-5 pb-10 m-1 my-2  flex  rounded-xl relative   overflow-hidden  transition-all duration-500
                  ${tabOpen == index ? "w-full  items-center" : "w-20 items-end "}
                  `}
                >
                  <div className="w-full h-50 md:h-60  ">
                    <h3
                      className={`text-[16px] md:text-4xl font-bold text-white mb-2 transition-all duration-500 relative z-50
                    ${tabOpen == index ? " rotate-0" : "translate-y-30  md:translate-y-35 -rotate-90 origin-center"}
                    
                    `}
                    >
                      {tab.heading}
                    </h3>
                    <p
                      className={`text-[16px] w-full h-full text-white  overflow-hidden duration-500 relative z-50
                    ${tabOpen == index ? "translate-0" : "translate-30"}
                   `}
                    >
                      {tab.paragraph}
                    </p>
                  </div>
                  <div
                    className={`w-full h-full z-40  absolute top-0 left-0
                    ${tabOpen == index ? "bg-linear-to-b from-black" : " bg-black/40"}
                  `}
                  ></div>
                  <img
                    src={`/imgs/${tab.img}`}
                    alt="tabImg"
                    className="w-full h-full absolute left-0 top-0 object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
