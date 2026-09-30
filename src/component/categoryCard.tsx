"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoryDesc } from "@/constant/categoryCardDesc";
import UseOnScreen from "@/hooks/useOnScreen";

import { gsap } from "@/lib/gsapConfig";

const cardAnimations = [
  "animate-[move1_0.8s_ease_forwards]",
  "animate-[move2_0.8s_ease_forwards]",
  "animate-[move3_0.8s_ease_forwards]",
  "animate-[move4_0.8s_ease_forwards]",
  "animate-[move5_0.8s_ease_forwards]",
];

export default function CategoryCards() {
  const { ref, isVisible } = UseOnScreen<HTMLDivElement>();
  const intervalRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [activeName, setName] = useState<number>(0);

  const startAutoHover = () => {
    if (intervalRef.current != null) return;

    intervalRef.current = window.setInterval(() => {
      setName((prev) => (prev + 1) % categoryDesc.length);
    }, 2000);
  };
  const stopAutoHover = () => {
    if (intervalRef.current != null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // cycle category card animation
  useEffect(() => {
    startAutoHover();
    return () => stopAutoHover();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        const targetId = hash.replace("#", "");
        handleScroll(targetId);
        window.history.replaceState(null, "", window.location.pathname);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPos = element.getBoundingClientRect().top + window.scrollY;

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: elementPos - 100,
        },
        ease: "power1.inOut",
      });
    }
  };
  return (
    <div ref={ref} className="">
      <div className="md:h-60  flex items-center justify-center   overflow-hidden">
        <h1
          className={`py-10 categoryHeading font-bold text-center text-5xl md:text-7xl translate-y-20 opacity-0 bg-linear-to-r
            from-[#900505] to-[#2a0101] bg-clip-text text-transparent
          ${isVisible ? "animate-[fadeInUp_0.5s_ease_.5s_forwards]" : ""}
          `}
        >
          Category We Dominate
        </h1>
      </div>

      <div className="containerCategory w-full my-10 md:my-20  lg:my-30 flex justify-center items-center flex-wrap relative rotate-5">
        {categoryDesc.map((img, index) => {
          return (
            <div
              key={index}
              className={`categoryDiv categoryDiv${index}  -mt-10 lg:absolute  group hover:z-10 
              ${mounted && isVisible ? `${cardAnimations[index]}` : ""}
             ${activeName == index ? "z-10" : "z-0"}
             
              `}
              onMouseEnter={() => {
                stopAutoHover();
                setName(index);
              }}
              onMouseLeave={() => {
                startAutoHover();
              }}
            >
              <Link
                href={`/category/#${img.heading.replace(/\s/g, "").toLowerCase()}`}
                onClick={(e) => {
                  if (window.location.pathname === "/category") {
                    e.preventDefault();
                    const targetId = img.heading
                      .replace(/\s/g, "")
                      .toLowerCase();
                    handleScroll(targetId);
                  }
                }}
              >
                <div
                  className={`categoryImg categoryImg${index}   rounded-lg  overflow-hidden relative
                  ${isVisible ? "" : ""}
               ${activeName === index ? "outline-2 outline-pink-600 shadow-xl/20" : ""}`}
                >
                  <Image
                    src={`/imgs/${img.imgSrc}`}
                    alt="categoryImg"
                    fill
                    sizes="90vw"
                    className={`img object-cover transition  duration-200  pointer-events-none z-0
                      ${activeName === index ? "scale-110" : ""}
                      `}
                    loading="lazy"
                  />{" "}
                  <p
                    className={` w-full h-10 text-center text-white font-bold text-lg md:text-xl  py-2 group-hover:opacity-100 absolute left-0 bottom-2  z-50 
                   ${activeName === index ? "opacity-100 " : "opacity-50"}`}
                  >
                    {img.heading}
                  </p>
                  <div
                    className={`w-full  bg-linear-to-t from-black/80 to-transparent absolute bottom-0 transition-all duration-300
                    ${activeName === index ? "h-1/3" : "h-0"}
                    `}
                  ></div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="p-10 flex justify-center flex-wrap ">
        <p className="w-full text-xl text-center mb-5">
          Strategic visibility across spaces where attention already exists.
        </p>
        <Link href="/contact" className="">
          <button className="w-fit h-10 px-10 rounded-full text-white">
            {" "}
            Plan your Campaign
          </button>
        </Link>
      </div>
    </div>
  );
}
