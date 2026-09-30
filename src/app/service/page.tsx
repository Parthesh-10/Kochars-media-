"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger, SplitText } from "@/lib/gsapConfig";
import Lenis from "lenis";
import ServiceDial from "@/component/serviceDial";
import Image from "next/image";

const sections = [
  {
    label: "Cinema Ads",
    id: "cinemaads",
    href: `/service/cinemaads`,
    img: "15.svg",
    paragraph: [
      "Show your brand on the big screen where attention is undivided.",
    ],
  },
  {
    label: "Radio Ads",
    id: "radioads",
    href: `/service/radioads`,
    img: "13.svg",
    paragraph: ["Reach people while they’re driving, working, or relaxing."],
  },
  {
    label: "Printed Ads",
    id: "printedads",
    href: `/service/printedads`,
    img: "14.svg",
    paragraph: [" Build trust with print that people still believe in. "],
  },
  {
    label: "Mall Ads",
    id: "mallads",
    href: `/service/mallads`,
    img: "16.svg",
    paragraph: ["Be seen where people come to shop, eat, and spend time. "],
  },
  {
    label: "Airport Ads",
    id: "airportads",
    href: `/service/airportads`,
    img: "17.svg",
    paragraph: [" Put your brand in premium spaces with premium audiences. "],
  },
  {
    label: "Prime Audience Marketing",
    id: "oohmarketing",
    href: `/service/primeaudiencemarketing`,
    img: "18.svg",
    paragraph: [
      " Be seen where attention is premium and audiences are high-value. ",
    ],
  },
];

export default function Service() {
  const [activeSection, setActiveSection] = useState<string>("thestory");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    // Connect Lenis to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useGSAP(
    () => {
      const scrollSections = gsap.utils.toArray<HTMLElement>(".scroll-section");

      ScrollTrigger.create({
        trigger: "#thestory",
        start: "top top",
        end: "bottom center",
        onEnterBack: () => setActiveSection("thestory"),
      });

      scrollSections.forEach((section, i) => {
        gsap.set(section, { zIndex: i + 1 });
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=200%",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        const img = section.querySelector(".bgImg");
        const label = section.querySelector(".textContainer p:first-child");
        const paragraph = section.querySelector(
          ".textContainer div:nth-child(2) p",
        );
        const button = section.querySelector(".textContainer button");

        // const heading = SplitText.create(label, { type: "chars" });
        // gsap.set(heading.chars, {
        //   color: "#911111",
        //   textShadow: `
        //   2px 2px 0px rgba(0,0,0,1),
        //   4px 4px 8px rgba(0,0,0,0.1),
        //   10px 10px 10px rgba(0,0,0,0.1)
        // `,
        // });
        gsap.fromTo(
          img,
          { scale: 2, opacity: 1 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        const textTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 20%",
            end: "bottom 20%",
            onEnter: () => setActiveSection(section.id),
            onEnterBack: () => setActiveSection(section.id),
            // When scrolling up, if we leave this section, set it to the previous one
            onLeaveBack: () => {
              if (i === 0) setActiveSection("thestory");
              else setActiveSection(sections[i - 1].id);
            },
          },
        });

        textTl
          .fromTo(
            label,
            { y: 150 },
            {
              y: 0,
              ease: "power1.inOut",
            },
          )
          .fromTo(
            paragraph,
            { y: 100 },
            {
              y: 0,
              ease: "power1.inOut",
            },
            "+=0.02",
          )
          .fromTo(
            button,
            { y: 50 },
            {
              y: 0,
              ease: "power1.inOut",
            },
            "<",
          );
      });
      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="bg-black">
      <div className="fixed bottom-10 sm:bottom-[35%] left-0 z-50">
        <ServiceDial activeId={activeSection} sections={sections} />
      </div>
      <section
        id="thestory"
        className="w-full h-screen relative overflow-hidden"
      >
        <div className="flex justify-center items-center h-screen relative z-0">
          <div className="w-full h-full bg-black/50 absolute top-0 left-0"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/imgs/servicepagebanner.jpeg"
            className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          >
            <source src="/video/servicepagebannervideo.mp4" type="video/mp4" />
          </video>
          <div className="flex-wrap relative z-50 mt-40">
            <p className="text-2xl text-white text-center">
              The Story of being
            </p>
            <h1 className="w-full text-5xl md:text-8xl font-extrabold text-red-700 text-center">
              Unforgettable
            </h1>
            <div className="my-20 flex justify-center flex-wrap relative z-50">
              <div className="w-0.5 h-20 bg-red-500 rounded-4xl"></div>
              <p className="w-full my-2 text-xl text-center text-white opacity-70">
                Scroll
              </p>
            </div>
          </div>
          <div className="w-full h-full absolute left-0 top-0 bg-black/70 z-20"></div>
        </div>
      </section>
      {sections.map((section, index) => {
        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-section w-full h-180 sm:h-screen sm:mb-10 overflow-hidden relative rounded-t-2xl"
          >
            <div className="w-full h-screen  relative flex justify-center items-center sm:items-end overflow-hidden">
              <Image
                src={`/imgs/${section.img}`}
                alt="section img"
                fill
                className="bgImg object-cover"
                loading="eager"
              />
              <div className="w-full h-full bg-black/50  absolute z-10"></div>
              <div className="textContainer text-white  py-20 md:mb-10 grid col-span-1 relative z-20 ">
                <div className="w-full ">
                  <p className=" md:w-140  md:p-10 text-center text-5xl md:text-7xl font-bold bg-linear-to-r  from-[#911111] to-[#ca1a1a] bg-clip-text text-transparent">
                    {section.label}
                  </p>
                </div>
                <div className=" flex justify-center items-center h-15 sm:h-20 overflow-hidden mb-4">
                  <p className="w-80 md:w-120 md:text-2xl text-center ">
                    {section.paragraph}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Link href={section.href} className="overflow-hidden">
                    <button className="w-30 h-9 my-4 sm:my-0 text-sm text-white rounded-2xl ">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
