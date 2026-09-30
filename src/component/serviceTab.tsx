"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { tabItem } from "@/constant/tabItems";

export default function ServiceTab() {
  const [activeTab, tabChange] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      tabChange((prev) => (prev + 1) % tabItem.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <div>
        <h2 className="text-3xl lg:text-5xl mb-10 text-center font-medium">
          How we do it you ask? <br />
          <span className="text-(--gray)"> Here’s how:</span>
        </h2>
      </div> */}
      <div className=" sm:flex justify-center ">
        <div className="h-100 w-full flex md:justify-end flex-wrap  sm:w-[35%]">
          {tabItem.map((item, index) => {
            return (
              <div
                onClick={() => {
                  tabChange(index);
                }}
                key={index}
                className={`  h-15 p-2 my-0.5  relative overflow-hidden transition  rounded-2xl flex justify-center items-center cursor-pointer
                ${activeTab === index ? "bg-[#960019] text-white font-bold w-full" : "w-full sm:w-[95%] border-2 border-[#960019] text-[#960019]"}`}
              >
                <p className="text-end  lg:text-xl font-bold ">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className=" relative sm:w-[70%] h-140 sm:h-120 overflow-hidden  ">
          {tabItem.map((divContent, index) => {
            return (
              <div
                key={index}
                className={` tabImageDiv h-140 md:h-110 sm-100  sm:ml-5 text-white transition ${activeTab === index ? "translate-y-0 z-10" : "translate-y-150 z-0 "} overflow-hidden`}
              >
                <Image
                  className="absolute z-0 object-cover"
                  alt="tabImage"
                  src={divContent.imageSrc}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="w-full h-full p-10  bg-black/50 backdrop-filter-md  z-20 relative ">
                  <h2 className="text-[1.8rem] lg:text-5xl w-10 mb-4 font-bold">
                    {divContent.title}
                  </h2>
                  <p>{divContent.paragraph}</p>
                  <Link
                    href={`/service/${divContent.src}`}
                    className="bg-(--secondary) py-2 px-4 z-10 rounded-4xl absolute left-10 bottom-5 md:bottom-10 "
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
