"use client";
import { Logos } from "../constant/logos";

const mid = Math.ceil(Logos.length / 2);
const firstSlider = Logos.slice(0, mid);
const secondSlider = Logos.slice(mid);

export default function Logoslider() {
  return (
    <div className="logoSlider overflow-hidden">
      <div className="sliderItems flex flex-nowrap gap-4">
        {[...firstSlider, ...firstSlider, ...firstSlider].map((logo, index) => {
          return (
            <img
              key={`${logo}-${index}`}
              className=" w-30 h-20 rounded-2xl    transition duration-300"
              src={logo}
              alt="logo_slider_img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          );
        })}
      </div>
      <div className="sliderItems flex  flex-nowrap gap-4">
        {[...secondSlider, ...secondSlider, ...secondSlider].map(
          (logo, index) => {
            return (
              <img
                key={`${logo}-${index}`}
                className=" w-30 h-20 rounded-2xl  transition duration-300"
                src={logo}
                alt="logo_slider_img"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            );
          },
        )}
      </div>
    </div>
  );
}
